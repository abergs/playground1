var F=Object.defineProperty;var M=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var z=(d,e,a)=>e in d?F(d,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[e]=a,k=(d,e)=>{for(var a in e||(e={}))G.call(e,a)&&z(d,a,e[a]);if(M)for(var a of M(e))R.call(e,a)&&z(d,a,e[a]);return d};var B=(d,e,a)=>(z(d,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill.b7f2da20.js";import{W as j,P as O,S as W,i as X,Y as E,n as w,T as Y,at as V,au as q,G as Q,c as n,a3 as p,av as Z,aw as H,U as J,ax as K,ay as N,s as $,a as ee,h as ae,az as ie,a7 as se,g as x,aA as S,aB as _e,a4 as te,aC as de,aD as re,v as le,w as ce,x as ne,A as pe,d as fe}from"./vendor.90716906.js";var oe="/playground1/assets/b2.0dc69ad7.png";class ge{constructor(e){this.container=e,this.renderer=new j({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),this.camera=new O(45,e.offsetWidth/e.offsetHeight,.1,300),this.scene=new W,this.clock=new X,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,a)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const a=this.camera.fov*Math.PI/180,s=Math.abs((this.camera.position.z-e)*Math.tan(a/2)*2);return{width:s*this.camera.aspect,height:s}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(ve(this.renderer)){const a=this.renderer.domElement;this.camera.aspect=a.clientWidth/a.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function ve(d){const e=d.domElement,a=e.clientWidth,s=e.clientHeight,t=e.width!==a||e.height!==s;return t&&d.setSize(a,s,!1),t}const ue={uDistortionX:new E(new w(80,3)),uDistortionY:new E(new w(-40,2.5))},ye=`
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
//# sourceMappingURL=d1.e60ab6d1.js.map