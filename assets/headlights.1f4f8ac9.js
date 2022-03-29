var W=Object.defineProperty,k=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable;var D=(i,e,t)=>e in i?W(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,a=(i,e)=>{for(var t in e||(e={}))R.call(e,t)&&D(i,t,e[t]);if(z)for(var t of z(e))O.call(e,t)&&D(i,t,e[t]);return i},d=(i,e)=>k(i,I(e));import"./modulepreload-polyfill.b7f2da20.js";import{W as U,P as X,S as j,i as E,z as V,m as M,H as B,I as G,c,J as p,b as P,K as Y,Q as q,X as H,Y as r,g as T,f as K,n as L}from"./vendor.cce8fb4b.js";class J{constructor(e){this.container=e,this.renderer=new U({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),this.camera=new X(45,e.offsetWidth/e.offsetHeight,.1,1e4),this.scene=new j,this.clock=new E,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,t)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const t=this.camera.fov*Math.PI/180,o=Math.abs((this.camera.position.z-e)*Math.tan(t/2)*2);return{width:o*this.camera.aspect,height:o}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(Q(this.renderer)){const t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function Q(i){const e=i.domElement,t=e.clientWidth,o=e.clientHeight,s=e.width!==t||e.height!==o;return s&&i.setSize(t,o,!1),s}const Z=i=>Array.isArray(i)?i[Math.floor(Math.random()*i.length)]:i;class A{constructor(e,t){this.app=e,this.options=t,this.fragmentShader=`
    #include <fog_pars_fragment>
    uniform vec3 uColor;
      varying vec2 vUv;
      uniform float uSpeed;
      varying float vprogress;
      uniform float uTime;
      varying vec3 vColors;


      void main(){
          
          float d = step(0.0, uSpeed);
          float alpha = smoothstep(1.0 - d, d + .0, vUv.x);

        //   vec3 color1 = vec3(0.984,0.773,0.043);
        //   vec3 color2 = vec3(0.871,0.365,0.);
        //   float mixValue = distance(vUv.x,vec2(0,1));
        //   vec3 color = mix(color1,color2,mixValue);


            vec3 color = vColors;
        //color *= 1.5 + sin(vprogress * 90. + uTime );

          alpha *= smoothstep(0.,.2, 1.-vprogress);
          gl_FragColor = vec4(color,alpha);
          if (gl_FragColor.a < 0.0001) discard;
          

      }
  `,this.vertexShader=`
    #include <fog_pars_vertex>

    uniform float uTime;

    #include <getDistortion_vertex>
    uniform float uSpeed;
    uniform float uTravelLength;
    varying vec2 vUv;
    varying float vprogress;
    varying vec3 vColors;
    attribute vec3 aOffset;
    attribute vec3 aColors;
    attribute vec2 aMetrics;
      void main() {
        #include <begin_vertex>
        #include <project_vertex>
        #include <fog_vertex>
        vUv = uv;
        
        float radius = aMetrics.r;
            float len = aMetrics.g;
            vColors = aColors;

          

        // set the radius and length
        transformed.xy *= radius;
        transformed.z *= len;

        // Keep them separated to make the next step easier!
        float zOffset = uTime * uSpeed + aOffset.z;
        zOffset = len - mod(zOffset, uTravelLength);
        transformed.z += zOffset;
        transformed.xy += aOffset.xy;

        float progress = abs(transformed.z / uTravelLength);
        vprogress = progress;
        transformed.xyz += getDistortion(progress);
        
    
        mvPosition = modelViewMatrix * vec4(transformed,1.);
        gl_Position = projectionMatrix * mvPosition;
        //gl_Position = projectionMatrix * modelViewMatrix * vec4(position.xyz, 1.);


      }
  `}init(){const e=this.options;let t=new V(new M(0,0,0),new M(0,0,-1)),o=new B(t,20,2,8,!1),s=new G().copy(o);s.instanceCount=e.nPairs*2;let n=this.options.roadWidth/this.options.roadSections,h=[],v=[],f=[];for(let l=0;l<e.nPairs;l++){let u=Math.random()*.1+.1,x=Math.random()*e.length*.08+e.length*.02;const _=Z(e.colors);let w=new c(_).toArray();f.push(...w),f.push(...w),v.push(u,x,u,x);let y=l%3*n-e.roadWidth/2+n/2,S=.5*n,C=.5*Math.random(),b=u*1.3,F=Math.random()*this.options.length;h.push(y-S/2+C),h.push(b),h.push(-F),h.push(y+S/2+C),h.push(b),h.push(-F)}s.setAttribute("aOffset",new p(new Float32Array(h),3,!1)),s.setAttribute("aMetrics",new p(new Float32Array(v),2,!1)),s.setAttribute("aColors",new p(new Float32Array(f),3,!1));let g=new P({fog:!0,fragmentShader:this.fragmentShader,vertexShader:this.vertexShader,transparent:!0,side:Y,uniforms:a(d(a({},q.merge([H.fog])),{uTime:new r(0),uSpeed:new r(e.speed||1),uColor:new r(new c(e.color)),uTravelLength:new r(e.length)}),this.options.distortion.uniforms)});g.onBeforeCompile=l=>{l.vertexShader=l.vertexShader.replace("#include <getDistortion_vertex>",this.options.distortion.vshader)};let m=new T(s,g);m.frustumCulled=!1,this.mesh=m,this.app.scene.add(m)}update(e){this.mesh.material.uniforms.uTime.value=e}}class N{constructor(e,t){this.app=e,this.options=a({},t),this.fragmentShader=`
      uniform vec3 uColor;
      void main(){
          gl_FragColor = vec4(uColor,1.);
      }
  `,this.vertexShader=`
      uniform float uTime;

      #include <getDistortion_vertex>
      uniform float uTravelLength;
      void main(){
          vec3 transformed = position.xyz;
          float progress = (transformed.y + uTravelLength / 2.) / uTravelLength;
          vec3 distortion  = getDistortion(progress);
          transformed.x += distortion.x;
            transformed.z += distortion.y;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed.xyz, 1.);
      }
  `}init(){const e=this.options,t=new K(e.width,e.length,20,200);let o=new P({fragmentShader:this.fragmentShader,vertexShader:this.vertexShader,uniforms:a({uTime:new r(0),uColor:new r(new c("#000000")),uTravelLength:new r(e.length)},this.options.distortion.uniforms)});o.onBeforeCompile=n=>{n.vertexShader=n.vertexShader.replace("#include <getDistortion_vertex>",this.options.distortion.vshader)};const s=new T(t,o);this.mesh=s,s.rotation.x=-Math.PI/2,s.position.z=-e.length/2,this.app.scene.add(s)}update(e){this.mesh.material.uniforms.uTime.value=e}}const $={uDistortionX:new r(new L(80,3)),uDistortionY:new r(new L(-40,2.5))},ee=`
  #define PI 3.14159265358979
    uniform vec2 uDistortionX;
    uniform vec2 uDistortionY;
  
      float nsin(float val){
      return sin(val) * 0.5+0.5;
      }
    vec3 getDistortion(float progress){
          progress = clamp(progress, 0.,1.);
          float xAmp = uDistortionX.r;
          float xFreq = uDistortionX.g;
          float yAmp = uDistortionY.r;
          float yFreq = uDistortionY.g;
          return vec3( 
              xAmp * nsin(progress* PI * xFreq   - PI / 2.) ,
              yAmp * nsin(progress * PI *yFreq - PI / 2.  ) ,
              0.
          );
      }
  `,te={uniforms:$,vshader:ee};class ie extends J{constructor(e){const t=a({container:document.getElementById("container"),length:400,width:20,roadWidth:9,islandWidth:2,nPairs:100,roadSections:3,color:"#111111",distortion:te},e);super(t.container);this.options=t,this.camera.position.z=6,this.camera.position.y=7,this.camera.position.x=0;let o=["#ff0000","#00ff00","#0000ff"],s=["#ff0000","#00ff00","#0000ff"];o=["#fbc50b","#de5d00","#f9f5d6"],s=["#eb6333","#b1d5de","#182c37"],o=["#0CECDD","#FFF338","#FF67E7","#C400FF"],s=["#0E185F","#2FA4FF","#00FFDD","#E8FFC2"],this.road=new N(this,t),this.leftLights=new A(this,d(a({},t),{colors:o,color:65322,speed:30})),this.rightLights=new A(this,d(a({},t),{colors:s,color:16722474,speed:-30}));const n=new c("black");this.scene.background=n}init(){this.road.init(),this.leftLights.init(),this.leftLights.mesh.position.setX(this.options.roadWidth/2+this.options.islandWidth/2),this.rightLights.init(),this.rightLights.mesh.position.setX(-this.options.roadWidth/2-this.options.islandWidth/2),this.tick()}update(e){let t=this.clock.elapsedTime;this.road.update(t),this.leftLights.update(t),this.rightLights.update(t)}}const se=new ie;se.init();
//# sourceMappingURL=headlights.1f4f8ac9.js.map
