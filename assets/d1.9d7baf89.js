var A=Object.defineProperty;var m=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var h=(t,e,a)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,b=(t,e)=>{for(var a in e||(e={}))P.call(e,a)&&h(t,a,e[a]);if(m)for(var a of m(e))x.call(e,a)&&h(t,a,e[a]);return t};import"./modulepreload-polyfill.b7f2da20.js";import{W as k,P as C,S as B,i as M,Y as z,n as u,T as E,a3 as S,G as I,c as f,at as U,au as D,U as L,av as R,aw as T,s as G,h as W,ax as F,a7 as X,g as O,ay as Y,v as j,w as V,x as q,A as Q,d as Z}from"./vendor.6d7b6831.js";var H="/playground1/assets/b2.0dc69ad7.png";class J{constructor(e){this.container=e,this.renderer=new k({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),this.camera=new C(45,e.offsetWidth/e.offsetHeight,.1,1e4),this.scene=new B,this.clock=new M,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,a)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const a=this.camera.fov*Math.PI/180,s=Math.abs((this.camera.position.z-e)*Math.tan(a/2)*2);return{width:s*this.camera.aspect,height:s}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(K(this.renderer)){const a=this.renderer.domElement;this.camera.aspect=a.clientWidth/a.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function K(t){const e=t.domElement,a=e.clientWidth,s=e.clientHeight,i=e.width!==a||e.height!==s;return i&&t.setSize(a,s,!1),i}const N={uDistortionX:new z(new u(80,3)),uDistortionY:new z(new u(-40,2.5))},$=`
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
//# sourceMappingURL=d1.9d7baf89.js.map