import"./modulepreload-polyfill.b7f2da20.js";import{T as O,S,P as _,W as E,G,b as L,f as V,g as W,u as b,o as H,E as A,n as u,v as j,w as Q,x as Y,A as X,d as Z,y as I,i as J}from"./vendor.0b4ca83a.js";const q=`
varying vec2 vUv;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform float audio1;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
 
void main() {
  vUv = uv;
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0 );
  gl_Position = projectionMatrix * mvPosition;
}`,K=`
varying vec2 vUv;
uniform float iTime;
uniform vec2 iResolution;
uniform vec2 iMouse;
uniform vec2 mouseReal;
uniform vec2 mouseDown;
uniform float audio1;
uniform float adj;
uniform sampler2D iChannel0;
uniform sampler2D iChannel1;
uniform float orbOpacity;
uniform float intensity;
uniform float surfaceDensity;

#define R(p, a) p = p * cos(a) + vec2(-p.y, p.x) * sin(a)
#define time iTime*0.1 
#define tau 6.2831853

mat2 makem2(in float theta){float c = cos(theta);float s = sin(theta);return mat2(c,-s,s,c);}
float noise( in vec2 x ){return texture2D(iChannel0, x*.01).x;}
mat2 m2 = mat2( .80,  0.80, -0.80,  0.80 );

float grid(vec2 p)
{
  float s = sin(p.x)*cos(p.y);
  return s;
}

float flow(in vec2 p)
{
  float z=4.;
  float rz = 0.;
  vec2 bp = p;
  for (float i= 1.;i < 8.;i++ )
  {
    bp += time*1.5;
    vec2 gr = vec2(grid(p*3.-time*2.),grid(p*3.+4.-time))*0.4;
    gr = normalize(gr)*0.4;
    gr *= makem2((p.x+p.y)*.3+time*10.);
    p += gr*0.2;
    
    rz+= (sin(noise(p)*2.)*0.5+0.5) /z;
    
    p = mix(bp,p,.5);
    z *= 1.5;
    p *= 2.5;
    p*=m2;
    bp *= 2.5;
    bp*=m2;
  }
  return rz;  
}

float spiral(vec2 p,float scl) 
{
  float r = length(p);
  r = log(r);
  float a = atan(p.y, p.y);
  return abs(mod(scl*(r-2./scl*a),tau)-1.)*1.;
}


float Sin01(float t) {
    return .5 + 0.5 * sin(6.28319 * t );
}

float SineEggCarton(vec3 p) {
    return 0.0 + abs(sin(p.x) - cos(p.y) + sin(p.z)) * surfaceDensity * orbOpacity;
}

float Map(vec3 p, float scale) {
    float dSphere = length(p) - 1.0;
    return max(dSphere, (.9 - SineEggCarton(scale * p)) / scale) ;
}

vec3 GetColor(vec3 p) {
    float amount = clamp((1.5 - length(p)) / 2.0, 0.0, 1.0);
    vec3 col = 0.5 + 0.5 * cos(6.28319 * (vec3(0.2, 0.0, 0.0) + amount * (audio1*.6) * vec3(.9, .9, 0.8)));
    return col * amount * (orbOpacity);
}

void main() {
  vec2 coord = gl_FragCoord.xy;
  coord.x-=(iMouse.x*.003);
  coord.y+=(iMouse.y*.003);

  
  vec2 p = coord / iResolution.xy-0.5;
  p.x *= iResolution.x/iResolution.y;
  p*=2.0  ;
  p.y+=1.5 ;
  float rz = flow(p) ;
  p /= exp(mod(2.1,2.1));
  rz *= (3.2-spiral(p,.5))*.7 * audio1 ; // intensity / thickness of ring
  vec3 col = vec3(.02,0.045,0.09)/rz; // colors
  col=pow(abs(col),vec3(1.01)) - (abs((iMouse.x ))*.00005);
  gl_FragColor+= vec4(col,1.0);


  vec3 rd = normalize(vec3(2.0 * coord - iResolution.xy, -iResolution.y));

    vec3 ro = vec3(-iMouse.x*.0003, iMouse.y*.0002 , -1.4*(1.0-orbOpacity) -.5 +mix(2.5, 2.0, adj + Sin01( (0.05 ) * iTime))) ;
    R(rd.xz, 0.2 * iTime);
    R(ro.xz, 0.2 * iTime);
    R(rd.yz, 0.1 * iTime);
    R(ro.yz, 0.1 * iTime);
    float t = 0.0;
   // gl_FragColor.rgb = vec3(0.0);
    float scale = mix(.5, 20.0*(orbOpacity*orbOpacity), Sin01(0.1 * iTime*(.01)));
    for (int i = 0; i < 60; i++) {
        vec3 p = ro + t * rd; // //(orbOpacity) is more solid lines
        float d = Map(p, scale);
        if (t > 20.0 || d < 0.0001) {
            break;
        }
        t +=.7 * d ;
        gl_FragColor.rgb += (0.05 * GetColor(p) * (audio1*.6)) * orbOpacity;
        gl_FragColor.r-=(abs((iMouse.x ))*.00003);
        //gl_FragColor.r+=(abs((iMouse.y ))*.00003);
        
    }

    // if mouse is near gl_fragCoord, make it glow
    
    if(mouseDown.x > 0.0) {
      float dist = distance(mouseReal,gl_FragCoord.xy);
      float mixAmount = clamp(dist / 30.0, 0.1, 1.0);
      //vec4 bw = vec4(vec3(gl_FragColor.b + gl_FragColor.b + gl_FragColor.b), gl_FragColor.a);
      // vec4 bw = vec4(1.0 - gl_FragColor.r, 1.0-gl_FragColor.g, 1.0-gl_FragColor.b, 1.0);
      //vec4 bw = vec4(1,1,1,1) - gl_FragColor;
      vec4 bw2 = vec4(gl_FragColor.r,gl_FragColor.g,gl_FragColor.b / 1.50, .1) * 4.;
      

    if(dist < 100.0) {
      gl_FragColor = mix(bw2,gl_FragColor, mixAmount);

    }}

  
}
`;var N="/playground1/assets/tex1.58cc41e0.png",$="/playground1/assets/b2.0dc69ad7.png",ee="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmklEQVQ4ja2Ty07bQBSGP1/GOLWdCCLUQFlGoqs8ReAhUF+k78QOiQ3qumKJWCSlqlBUR4SkLGon8oyxPdWYu5J2EfUsZnPO+eZc/mMBP4Em61liABLYWBOgbPOsmVwD3L95HMdBCA/LstBak+c5VVUuxa0AWATBO8LQp9kEz4MsgzRtkKYZUmb/BpjkTiek2xX0ei3a7QZxnHJxMef62mU20yglVwMcx61/7nY9jo4+0u8fEkUfmEyGnJyccXw8Ist8lDJj08sAIURddq/X5ODgkJ2dT8B7oug7/f6cy8sJ47EiSQT39/kywAxMCNja8tnc3AU6j55d2u0OrZbAdR/insx+DaiqCilhPJ4Tx0PgGzAHBoxGP7i9zVFKUxTFS9vA5ychmXXZ9gZVpbGsXwTBFCmHDAZfOD39yvl5wnSqyLLnISpTy+/XUvb9BtvbEXt7Dvv7phXBzY3i6ionjhV3dwll+VxBLeU3gAeITxD4hKFT9yylZrEoSNMFZflGTKsBL1vxsG2LPC/QelmF/+WYzBpna58zJH8ARoWiAIx+rgkAAAAASUVORK5CYII=";const y=new O,oe=y.load(N),ae=y.load($),ie=y.load(ee),C={width:window.innerWidth,height:window.innerHeight},te=window.innerWidth/window.innerHeight,g=document.getElementById("canvas"),x=new S,v=new _(90,C.width/C.height,1,1e3);v.position.set(0,0,50);const w=new E({canvas:g,antialias:!1,alpha:!1});w.setSize(window.innerWidth,window.innerHeight);w.setPixelRatio(Math.min(window.devicePixelRatio,1));const e={iTime:{type:"f",value:100},iResolution:{type:"v2",value:new u},iMouse:{type:"v2",value:new u},audio1:{type:"f",value:1},adj:{type:"f",value:0},orbOpacity:{type:"f",value:1},intensity:{type:"f",value:1},iChannel0:{type:"t",value:oe},surfaceDensity:{type:"f",value:1.2},mouseReal:{type:"v2",value:new u},mouseDown:{type:"v2",value:new u}};e.iResolution.value.x=window.innerWidth;e.iResolution.value.y=window.innerHeight;e.adj.value=.2-window.innerHeight/window.innerWidth;new G;const h=[];function ne(){for(var o=new j,t=[],r=[],a,i=0;i<350;i++){var D=Math.random()*60-30,B=Math.random()*60-30,k=Math.random()*60-30;t.push(D,B,k)}o.setAttribute("position",new Q(t,3)),a=[[[.3,.7,.9],ae,.2],[[.3,.3,.8],ie,.4]];for(var i=0;i<a.length;i++){var f=a[i][0],U=a[i][1],P=a[i][2];r[i]=new Y({size:P,map:U,blending:X,depthTest:!1,transparent:!0,opacity:.35}),r[i].color.setRGB(f[0],f[1],f[2]);var d=new Z(o,r[i]);d.rotation.x=Math.random()*6,d.rotation.y=Math.random()*6,d.rotation.z=Math.random()*6,h.push(d),x.add(d)}}let re=new L({uniforms:e,vertexShader:q,fragmentShader:K});var le=new V(1,1);const M=new W(le,re);M.scale.set(110*te,110,1);x.add(M);ne();var R=new J;let se=1;function F(){requestAnimationFrame(F);const o=R.getElapsedTime();if(R.getDelta()*100,e.iTime.value+=.02,e.audio1.value=128/48+Math.random()*.1,e.iMouse.value.x=e.iMouse.value.x+(m.x-e.iMouse.value.x)*.05,e.iMouse.value.y=e.iMouse.value.y+(m.y-e.iMouse.value.y)*.05,e.mouseReal.value.x=p.x,e.mouseReal.value.y=p.y,e.mouseDown.value.x=n.x,e.mouseDown.value.y=n.y,e.intensity.value=se,!(l>0||(s==null?void 0:s.isPlaying())||(c==null?void 0:c.isPlaying()))){let a=e.surfaceDensity.value+Math.sin(o*.5)*.01;e.surfaceDensity.value=Math.min(2,Math.max(.7,a))}for(var t=0;t<h.length;t++){var r=h[t];let a=t<1?1:-2;r.rotation.x=.01*e.iTime.value*a,r.rotation.z=-.03*e.iTime.value*a}v.position.x+=(-m.x*.01-v.position.x)*.05,v.position.y+=(m.y*.01-v.position.y)*.05,I(),w.render(x,v)}let m={x:1,y:1},p={x:1,y:1},l=0,T=new u(0,0),z=new u(0,0);function ce(o){var t=o.clientX-window.innerWidth/2,r=o.clientY-window.innerHeight/2;if(m.x=t,m.y=r,p.x=o.clientX,p.y=window.innerHeight-o.clientY,z.set(p.x,o.clientY),n.y>0){(n.y-o.clientY)/window.innerHeight,l=T.distanceTo(z)/window.innerHeight;const a=1+-l*.9;e.surfaceDensity.value=Math.max(.3,a),console.log(e.surfaceDensity.value)}}let s;document.addEventListener("mousemove",ce,{passive:!0});g.addEventListener("click",()=>{console.log("fake click",l),l<.001&&(console.log("real click",l),s&&s.stop(),s=new b(e.orbOpacity).to({value:1+H.randFloat(-.7,1)},1e3).easing(A.Quadratic.Out).start())});let n={x:0,y:0},c;g.addEventListener("mousedown",o=>{n.y=o.clientY,n.x=o.clientX,T.set(n.x,n.y),c&&c.stop(),s&&s.stop()},{passive:!0});g.addEventListener("mouseup",o=>{n.y=0,n.x=0,c&&c.stop(),l>0&&(c=new b(e.surfaceDensity).to({value:1.1},700).easing(A.Quadratic.Out).onComplete(t=>{l=0}).start())});F();
//# sourceMappingURL=morb.ff00ecb1.js.map
