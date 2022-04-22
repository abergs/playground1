import"./modulepreload-polyfill.b7f2da20.js";import{T as x,G as d,S as y,f as m,b as z,n as p,g as u,P,W as w,O as h,i as _}from"./vendor.346e2dca.js";var b="/playground1/assets/texture.fb0f5fdc.jpg",S="/playground1/assets/r2.dee41ee3.png",U="/playground1/assets/b2.0dc69ad7.png";const M=`
varying vec2 vUv;
uniform float uTime;
uniform vec2 uResolution;
uniform float scaleUp;
varying float noise;
uniform sampler2D alphaMap;


float map(float value, float min1, float max1, float min2, float max2) {
  return min2 + (value - min1) * (max2 - min2) / (max1 - min1);
}

vec2 skew (vec2 st, float a1, float a2) {
    vec2 r = vec2(0.0);
    r.x = a1 * st.x;
    r.y = st.y + a2 *r.x;
    return r;
}

float random (vec2 st) {
    return fract(sin(dot(st.xy,
                         vec2(12.9898,78.233)))*
        43758.5453123);
}

float aastep (float threshold, float dist) {
  float afwidth = fwidth(dist) * 0.5;
  return smoothstep(threshold - afwidth, threshold + afwidth, dist);
}

void main() {
    vec2 inp = vec2(vUv.x,vUv.y + uTime * 0.1 ) * 5.0;

    float scale = 16.0;
    vec2 coord = gl_FragCoord.xy;

    
    vec2 p = vUv * scaleUp;
  
  
    
    vec2 f = fract(p);
    vec3 bgColor = vec3(.0,.0,.1);

    float size = .01;
    float mixval = 1.0;
    vec3 wireColor = vec3(0.0,1.0,1.0);

    mixval *= aastep(size, f.x);
    mixval *= aastep(size, f.y);
    mixval *= aastep(size, abs(f.x-f.y));

    vec3 fc = mix(wireColor, bgColor, mixval);


    // add red line middle
    vec3 lc = vec3(1.0,0.2,0.2);
    
    float distort = (0.05+noise * .100);
    float lp = .5 + sin(vUv.y * 4. + uTime) * 0.1 * distort;
    
    float lw = 0.005;
    

  // mix the line color
    lc = mix(vec3(0.0,.5,0.3),lc, noise * .2);


    // generate the line
    // start painting
    float mixlc  = step(lp, vUv.x) ;
    // and remove painting
    mixlc -= step(lp +lw, vUv.x);

    float a2 = texture2D(alphaMap, vUv).r;

    
    fc = mix(fc, lc, mixlc);
    gl_FragColor = vec4(fc,a2);
    
}
`,C=`
varying vec2 vUv;
varying float noise;

uniform float uTime;
// uniform vec2 iResolution;
// uniform vec2 iMouse;
// uniform float audio1;
// uniform sampler2D iChannel0;
// uniform sampler2D iChannel1;
 
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/stegu/webgl-noise
//

vec3 mod289(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x)
{
  return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec3 P)
{
  vec3 Pi0 = floor(P); // Integer part for indexing
  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289(Pi0);
  Pi1 = mod289(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute(permute(ix) + iy);
  vec4 ixy0 = permute(ixy + iz0);
  vec4 ixy1 = permute(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
  return 2.2 * n_xyz;
}

float turbulence( vec3 p ) {

  float w = 100.0;
  float t = -.5;

  for (float f = 1.0 ; f <= 10.0 ; f++ ){
    float power = pow( 2.0, f );
    t += abs( pnoise( vec3( power * p ), vec3( 10.0, 10.0, 10.0 ) ) / power );
  }

  return t;

}

void main() {
  vUv = uv;

  float offset = uTime * .2;

  // get a turbulent 3d noise using the normal, normal to high freq
  //noise = 10.0 *  -.50 * turbulence( .5 * normal );
  // get a 3d noise using the position, low frequency
  float b = 25.0 * pnoise( 4.0 * vec3(uv.x,uv.y + offset, 1.0), vec3( 100.0 ) );
  noise = b;
  // compose both noises
  //float displacement = - 10. * noise;

  vec4 mvPosition = modelViewMatrix * vec4(position, 2.0 );

    //gl_PointSize = 2. +(500. * uTime ) * (1. / -mvPosition.z);
    //vec3 newPos = position  * displacement;
    //newPos.z = displacement;
  //gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
  
  vec2 suv = vUv;
  mvPosition.y -= b * 1.1;
  
  gl_Position = projectionMatrix * mvPosition;
  //gl_Position.z = sin(uv.y);
  //gl_Position.x += sin(uTime) * 0.1;
}`,n=new x;n.load(b);n.load(S);const v=n.load(U);new d;const T=document.querySelector("canvas"),a=new y;let g=16*12;const r=64,I=new m(g,g,r,r),c=new z({uniforms:{uTime:{value:0},uResolution:{type:"v2",value:new p},alphaMap:{type:"t",value:v},scaleUp:{value:r}},transparent:!0,depthTest:!1,fragmentShader:M,vertexShader:C,alphaMap:v});c.uniforms.uResolution.value.x=window.innerWidth;c.uniforms.uResolution.value.y=window.innerHeight;const i=new u(I,c);i.rotation.x=181;i.position.z=2;a.add(i);const e={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",()=>{e.width=window.innerWidth,e.height=window.innerHeight,t.aspect=e.width/e.height,t.updateProjectionMatrix(),o.setSize(e.width,e.height),o.setPixelRatio(Math.min(window.devicePixelRatio,2))});const t=new P(75,e.width/e.height,1,3e3);t.position.x=0;t.position.y=1;t.position.z=25;a.add(t);const o=new w({canvas:T,antialias:!0});o.setSize(e.width,e.height);o.setPixelRatio(Math.min(window.devicePixelRatio,2));const s=new h(t,o.domElement);s.enableDamping=!0;const R=new _,l=()=>{const f=R.getElapsedTime();i.material.uniforms.uTime.value=f,s.update(),o.render(a,t),window.requestAnimationFrame(l)};l();
//# sourceMappingURL=particles.fed4d8a9.js.map
