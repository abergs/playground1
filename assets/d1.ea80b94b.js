var S=Object.defineProperty;var x=Object.getOwnPropertySymbols;var I=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var b=(d,e,a)=>e in d?S(d,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):d[e]=a,A=(d,e)=>{for(var a in e||(e={}))I.call(e,a)&&b(d,a,e[a]);if(x)for(var a of x(e))D.call(e,a)&&b(d,a,e[a]);return d};var P=(d,e,a)=>(b(d,typeof e!="symbol"?e+"":e,a),a);import"./modulepreload-polyfill.b7f2da20.js";import{W as L,P as U,S as T,i as F,Y as k,n as z,T as R,at as G,au as j,G as W,c as p,a3 as g,av as O,aw as X,U as Y,ax as V,ay as q,s as Q,h as Z,az as H,a7 as J,g as C,aA as K,aB as N,a4 as $,aC as ee,aD as ae,v as ie,w as se,x as _e,A as te,d as de}from"./vendor.90716906.js";var re="/playground1/assets/b2.0dc69ad7.png";class le{constructor(e){this.container=e,this.renderer=new L({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),this.camera=new U(45,e.offsetWidth/e.offsetHeight,.1,300),this.scene=new T,this.clock=new F,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,a)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const a=this.camera.fov*Math.PI/180,s=Math.abs((this.camera.position.z-e)*Math.tan(a/2)*2);return{width:s*this.camera.aspect,height:s}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(ce(this.renderer)){const a=this.renderer.domElement;this.camera.aspect=a.clientWidth/a.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function ce(d){const e=d.domElement,a=e.clientWidth,s=e.clientHeight,_=e.width!==a||e.height!==s;return _&&d.setSize(a,s,!1),_}const ne={uDistortionX:new k(new z(80,3)),uDistortionY:new k(new z(-40,2.5))},pe=`
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
//# sourceMappingURL=d1.ea80b94b.js.map