var U=Object.defineProperty;var E=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(l,e,a)=>e in l?U(l,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):l[e]=a,k=(l,e)=>{for(var a in e||(e={}))R.call(e,a)&&w(l,a,e[a]);if(E)for(var a of E(e))j.call(e,a)&&w(l,a,e[a]);return l};var B=(l,e,a)=>(w(l,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill.b7f2da20.js";import{W,P as X,S as V,i as Y,Y as T,n as x,G as q,at as Q,au as Z,m as H,a7 as J,s as K,a as N,h as $,g as A,av as D,c as f,a3 as d,aw as ee,a4 as ae,ax as ie,ay as se,v as _e,w as te,x as de,A as re,d as le,T as ce,az as ne,aA as pe,aB as fe,U as oe,aC as ge,aD as ve}from"./vendor.273154ce.js";var ue="/playground1/assets/b2.0dc69ad7.png";class ye{constructor(e){this.container=e,this.renderer=new W({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),this.camera=new X(45,e.offsetWidth/e.offsetHeight,.1,300),this.scene=new V,this.clock=new Y,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,a)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const a=this.camera.fov*Math.PI/180,i=Math.abs((this.camera.position.z-e)*Math.tan(a/2)*2);return{width:i*this.camera.aspect,height:i}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(me(this.renderer)){const a=this.renderer.domElement;this.camera.aspect=a.clientWidth/a.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function me(l){const e=l.domElement,a=e.clientWidth,i=e.clientHeight,s=e.width!==a||e.height!==i;return s&&l.setSize(a,i,!1),s}const he={uDistortionX:new T(new x(80,3)),uDistortionY:new T(new x(-40,2.5))},be=`
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
//# sourceMappingURL=d1.b96213ae.js.map