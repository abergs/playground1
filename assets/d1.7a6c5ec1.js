var P=Object.defineProperty;var l=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var p=(s,t,e)=>t in s?P(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,m=(s,t)=>{for(var e in t||(t={}))y.call(t,e)&&p(s,e,t[e]);if(l)for(var e of l(t))x.call(t,e)&&p(s,e,t[e]);return s};import"./modulepreload-polyfill.b7f2da20.js";import{W as b,P as D,S as M,i as S,Y as f,n as u,a3 as k,at as z,G as I,c as g,au as A,s as R,h as W,g as w,a as C,a4 as G,av as H,aw as E,a7 as F,ax as j}from"./vendor.0b4ca83a.js";class q{constructor(t){this.container=t,this.renderer=new b({antialias:!0}),this.renderer.setSize(t.offsetWidth,t.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),t.append(this.renderer.domElement),this.camera=new D(45,t.offsetWidth/t.offsetHeight,.1,1e4),this.scene=new M,this.clock=new S,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((t,e)=>{})}init(){this.tick()}getViewSizeAtDepth(t=0){const e=this.camera.fov*Math.PI/180,a=Math.abs((this.camera.position.z-t)*Math.tan(e/2)*2);return{width:a*this.camera.aspect,height:a}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(L(this.renderer)){const e=this.renderer.domElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const t=this.clock.getDelta();this.render(t),this.update(t),requestAnimationFrame(this.tick)}}function L(s){const t=s.domElement,e=t.clientWidth,a=t.clientHeight,i=t.width!==e||t.height!==a;return i&&s.setSize(e,a,!1),i}const X={uDistortionX:new f(new u(80,3)),uDistortionY:new f(new u(-40,2.5))},Y=`
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
  `,B={uniforms:X,vshader:Y};class T{constructor(t,e){this.app=t,this.options=e}init(){let t=this.app.scene;t.add(new A(20,10));var e=10,a=10,i=30,r=Math.PI*2/i,h=.5,c=new R(2,3,1);const n=new W(16777215,1,200);n.position.set(0,0,-20),this.app.camera.add(n);let v=new w(new C(.2,32,32),new G({color:16777215}));n.add(v),t.add(new H(n)),t.add(new E(16777215,.2)),this.group=new F;for(let o=0;o<a*i;o++){let d=new w(c,new j({color:this.options.color}));d.position.set(Math.cos(r*o)*e,h*o,Math.sin(r*o)*e),this.group.add(d),d.rotation.y=-r*o}t.add(this.group)}update(t){this.group.children.forEach(function(e){})}}class U extends q{constructor(t){const e=m({container:document.getElementById("container"),length:400,width:20,roadWidth:9,islandWidth:2,nPairs:100,roadSections:3,color:"#0051c0",distortion:B},t);super(e.container);this.options=e,this.camera.position.z=0,this.camera.position.y=200,this.camera.rotateX(-Math.PI/2),k.to(this.camera.position,{y:50,duration:30,ease:"power1.inOut",yoyo:!0,repeat:-1}),this.scene.add(this.camera);const a=new z(this.camera);this.scene.add(a);const i=new I;i.add(this.camera.position,"x"),i.add(this.camera.position,"y"),i.add(this.camera.position,"z"),i.addFolder("Rotation"),i.add(this.camera.rotation,"x"),i.add(this.camera.rotation,"y"),i.add(this.camera.rotation,"z"),i.addColor(this.options,"color").onChange(h=>{this.spiral.group.children.forEach(c=>{c.material.color=new g(h)})}),this.spiral=new T(this,e);const r=new g("black");console.log(this.camera),console.log(this.camera.position),console.log(this.camera.rotation),this.scene.background=r}init(){this.spiral.init(),this.tick()}update(t){this.clock.elapsedTime,this.spiral.update(t)}}const V=new U;V.init();
//# sourceMappingURL=d1.7a6c5ec1.js.map
