var H=Object.defineProperty;var I=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var A=(t,i,n)=>i in t?H(t,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[i]=n,F=(t,i)=>{for(var n in i||(i={}))q.call(i,n)&&A(t,n,i[n]);if(I)for(var n of I(i))N.call(i,n)&&A(t,n,i[n]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{j as O,k as T,l as J,m as E,R as K,W as Q,P as B,C as X,U as Y,S as $,f as ee,b as te,V as oe,c as x,A as ie,d as ne,B as L,h as g,n as ae,e as re}from"./vendor.7fb6b1a4.js";const se=`
uniform float time;
varying vec2 vUv;
varying vec3 vPosition;
varying float vColorRandoms;

attribute float randoms;
attribute float colorRandoms;
void main()	{
    vUv= uv;
    vColorRandoms= colorRandoms;
    vec4 mvPosition = modelViewMatrix* vec4(position, 1.);
    gl_PointSize = 2. +(500. * randoms ) * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;// vec4( position, 1.0 );
}
`,le=`
uniform float time;
uniform vec2 resolution;

uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;

varying float vColorRandoms;

void main()	{

    float disc = smoothstep(0.5,-0.3,length(gl_PointCoord - vec2(0.5)));

    vec3 finalColor = uColor1;
    if(vColorRandoms > .33) {
        finalColor = uColor2;
    } 
    if(vColorRandoms > .66) {
        finalColor = uColor3;
    }
    float x = mod(time + gl_FragCoord.x, 20.) < 10. ? 1. : 0.;
    float y = mod(time + gl_FragCoord.y, 20.) < 10. ? 1. : 0.;
    gl_FragColor = vec4(finalColor, 1.0);
    gl_FragColor = vec4(finalColor, disc);
}

`;de({el:"background"});console.log(O);function de(t){t=F({fov:75,cameraZ:75,xyCoef:50,zCoef:10,lightIntensity:.7,ambientColor:0,light1Color:330288,light2Color:3174,light3Color:255,light4Color:8308963},t);let i,n,a,C,p,P,b,s,m,M;const _=new T,z=new ae;new J(new E(0,0,1),0),new E,new K;const w=document.getElementById("noiseInput"),f=document.getElementById("heightInput");let y;V();function V(){i=new Q({canvas:document.getElementById(t.el),antialias:!0,alpha:!0}),a=new B(t.fov),a.position.z=t.cameraZ,i.setPixelRatio(window.devicePixelRatio),S(),window.addEventListener("resize",S,!1),W(),j(),U(),R()}function j(){y=new re(n,a,i);const e=new X,o=new Y;e.rate=.9,y.addComposer([e,o])}function U(){w.value=101-t.xyCoef,f.value=t.zCoef*100/25,w.addEventListener("input",e=>{t.xyCoef=101-w.value}),f.addEventListener("input",e=>{t.zCoef=f.value*25/100})}function W(){n=new $,D(),s=new ee(P,b,100,100),M=new te({uniforms:{time:{value:0},resolution:{value:new oe},uColor1:{value:new x(6366580)},uColor2:{value:new x(2700675)},uColor3:{value:new x(1660140)}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:se,fragmentShader:le,blending:ie}),m=new ne(s,M);var e=s.index.array.length;let o=new Float32Array(e),r=new Float32Array(e);for(let d=0;d<e;d++)o.set([Math.random()],d),r.set([Math.random()],d);s.setAttribute("randoms",new L(o,1)),s.setAttribute("colorRandoms",new L(r,1)),n.add(m),a.position.z=80}var u,h,c,v,l;function D(){const e=30,o=10,r=500;u=new g(t.light1Color,t.lightIntensity,r),u.position.set(0,o,e),h=new g(t.light2Color,t.lightIntensity,r),h.position.set(0,-o,-e),c=new g(t.light3Color,t.lightIntensity,r),c.position.set(e,o,0),v=new g(t.light4Color,t.lightIntensity,r),v.position.set(-e,o,0)}function R(){requestAnimationFrame(R),G(),Z(),i.render(n,a),y.render()}function G(){l=m.geometry.attributes.position.array;const e=Date.now()*2e-4;t.xyCoef=Math.abs(Math.sin(e*.8)*100)+10;for(let o=0;o<l.length;o+=3)l[o+2]=_.noise4D(l[o]/t.xyCoef,l[o+1]/t.xyCoef,e,z.x+z.y)*t.zCoef;m.geometry.attributes.position.needsUpdate=!0}function Z(){const e=Date.now()*.001,o=40;u.position.x=Math.sin(e*.1)*o,u.position.z=Math.cos(e*.2)*o,h.position.x=Math.cos(e*.3)*o,h.position.z=Math.sin(e*.4)*o,c.position.x=Math.sin(e*.5)*o,c.position.z=Math.sin(e*.6)*o,v.position.x=Math.sin(e*.7)*o,v.position.z=Math.cos(e*.8)*o}function S(){if(C=window.innerWidth,p=window.innerHeight,i&&a){i.setSize(C,p),a.aspect=C/p,a.updateProjectionMatrix();const e=k();P=e[0],b=e[1]}}function k(){const e=new B(a.fov,a.aspect),o=e.fov*Math.PI/180,r=2*Math.tan(o/2)*Math.abs(t.cameraZ);return[r*e.aspect,r]}}
//# sourceMappingURL=wavy.fffa676a.js.map
