var z=Object.defineProperty;var h=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var p=(t,o,e)=>o in t?z(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,w=(t,o)=>{for(var e in o||(o={}))F.call(o,e)&&p(t,e,o[e]);if(h)for(var e of h(o))M.call(o,e)&&p(t,e,o[e]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{W as _,P,C as B,U as j,S as E,a as U,b as V,V as I,c as u,A as W,d as Z,B as x,e as G}from"./vendor.6d7b6831.js";const L=`
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
    gl_PointSize = 2. +(200. * randoms ) * (1. / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;// vec4( position, 1.0 );
}
`,k=`
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

`;q({el:"background"});function q(t){t=w({fov:75,cameraZ:75,xyCoef:50,zCoef:10,lightIntensity:.7,ambientColor:0,light1Color:330288,light2Color:3174,light3Color:255,light4Color:8308963},t);let o,e,r,m,c,d,i,f,v;b();function b(){const a=document.getElementById(t.el);o=new _({canvas:a,antialias:!0,alpha:!0}),r=new P(t.fov),r.position.z=t.cameraZ,o.setPixelRatio(window.devicePixelRatio),g(),window.addEventListener("resize",g,!1),R(),y(),C()}function y(){v=new G(e,r,o);const a=new B,n=new j;a.rate=.2,v.addComposer([a,n])}function R(){e=new E,d=new U(10,40,30),f=new V({uniforms:{time:{value:0},resolution:{value:new I},uColor1:{value:new u(16761600)},uColor2:{value:new u(16766474)},uColor3:{value:new u(1660140)}},transparent:!0,depthTest:!1,depthWrite:!1,vertexShader:L,fragmentShader:k,blending:W}),i=new Z(d,f);var a=3600/3;let n=new Float32Array(a),l=new Float32Array(a);for(let s=0;s<a;s++)n.set([Math.random()],s),l.set([Math.random()],s);d.setAttribute("randoms",new x(n,1)),d.setAttribute("colorRandoms",new x(l,1)),e.add(i),r.position.z=20}function C(){requestAnimationFrame(C),S(),o.render(e,r),v.render()}function S(){i.rotation.x+=.001,i.rotation.z+=.002,i.rotation.y+=.001}function g(){m=500,c=500,o&&r&&(o.setSize(m,c),r.aspect=m/c,r.updateProjectionMatrix(),A())}function A(){const a=new P(r.fov,r.aspect),n=a.fov*Math.PI/180,l=2*Math.tan(n/2)*Math.abs(t.cameraZ);return[l*a.aspect,l]}}
//# sourceMappingURL=main.a9cb5c5a.js.map
