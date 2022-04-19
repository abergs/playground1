var gt=Object.defineProperty;var wt=(o,t,e)=>t in o?gt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var v=(o,t,e)=>(wt(o,typeof t!="symbol"?t+"":t,e),e);import"./modulepreload-polyfill.b7f2da20.js";import{W as yt,Z as At,S as bt,i as et,_ as S,$ as xt,a0 as st,a1 as _,a2 as W,a3 as h,T as X,m as g,a as kt,a4 as it,K as St,g as R,a5 as I,a6 as M,s as ot,b as F,Y as w,c as m,a7 as Bt,a8 as Et,f as It,n as Pt,a9 as f,aa as y,ab as Y,ac as q,ad as c,ae as r,af as G,ag as H,ah as K,ai as B,aj as U,ak as at,al as rt,am as Ct,an as _t,ao as Wt,ap as Rt,aq as Mt,ar as Ut,as as Vt}from"./vendor.744a91cf.js";class Qt{constructor(t){this.container=t,this.renderer=new yt({antialias:!0}),this.renderer.setSize(t.offsetWidth,t.offsetHeight,!1),t.append(this.renderer.domElement),t.offsetWidth,t.offsetHeight,100*t.offsetWidth/t.offsetHeight,100*t.offsetWidth/t.offsetHeight;const e=t.offsetWidth/t.offsetHeight,i=1e3,s=i/e;this.camera=new At(i/-2,i/2,s/2,s/-2,0,1e3),this.scene=new bt,this.scene.add(this.camera),this.clock=new et,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((t,e)=>{})}init(){this.tick()}getViewSizeAtDepth(t=0){const e=this.camera.fov*Math.PI/180,i=Math.abs((this.camera.position.z-t)*Math.tan(e/2)*2);return{width:i*this.camera.aspect,height:i}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(Dt(this.renderer)){const e=this.renderer.domElement;this.camera.aspect=e.clientWidth/e.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const t=this.clock.getDelta();this.render(t),this.update(t),requestAnimationFrame(this.tick)}}function Dt(o){const t=o.domElement,e=t.clientWidth,i=t.clientHeight,s=t.width!==e||t.height!==i;return s&&o.setSize(e,i,!1),s}var lt="data:image/png;base64,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";const Nt=container.offsetWidth/container.offsetHeight,p=1e3,u=p/Nt;var Tt="/playground1/assets/ball3.a882feb9.png",Ot="/playground1/assets/hit1.edfa9731.m4a",jt="/playground1/assets/hit2.b10388c2.m4a",Lt="/playground1/assets/hit3.401d0d66.m4a",zt="/playground1/assets/hit4.18e89af6.m4a",Xt="/playground1/assets/hit5.3595b5da.m4a";const V=S(0),Q=S(localStorage.getItem("playerName")||""),D=S(localStorage.getItem("personal_highscore")||0),N=S(!1),A=S(localStorage.getItem("musicVolume")||30),T=S(localStorage.getItem("gameVolume")||70),b=xt({bloodSugar:0,bloodSugarDate:new Date}),nt=st(()=>{const o=b.bloodSugarDate;return o?o.toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"}):""});st(()=>["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][b.bloodSugarDate.getDay()]);Yt({playerName:Q,personal_highscore:D,musicVolume:A});function Ft(o){V.value=o,o>D.value&&(D.value=o)}function Yt(o){Object.entries(o).forEach(t=>{_(t[1],(e,i)=>{localStorage.setItem(t[0],e)})})}const O=(o,t)=>{var e=new CustomEvent(o,{bubbles:!0,detail:t});window.dispatchEvent(e)},J=(o,t)=>{const e=Gt(t);return window.addEventListener(o,e),{listener:e,off:()=>{qt(o,e)}}},qt=(o,t)=>{window.removeEventListener(o,t)},Gt=o=>t=>{o(t.detail)};var Ht="/playground1/assets/tap.a11eec6b.mp3",Kt="/playground1/assets/music.8fa296fe.wav",Jt="/playground1/assets/dark.a835debc.mp3";let ht=.8;var Zt=[Ot,jt,Lt,zt,Xt],$t=Zt.map(o=>new W.Howl({src:o,volume:ht,sprite:{__default:[100,1e3]}}));const te=new W.Howl({src:Ht,volume:ht}),P=new W.Howl({src:Kt,loop:!0,volume:A.value/100}),j=new W.Howl({src:Jt,loop:!0,volume:0});j.volume(0);j.play();_(T,o=>{Howler.volume(o/100)});_(A,(o,t)=>{P.volume(o/100)});const ct=(o,t,e)=>{h.to(o,{volume:0,duration:e}),h.to(t,{volume:A.value/100,duration:e})};let L=P;J("bloodsugar:change",o=>{o.to=="low"&&(ct(L,j,2),L=j),o.to=="normal"&&(ct(L,P,2),L=P)});const Z=o=>Array.isArray(o)?o[Math.floor(Math.random()*o.length)]:o,E=o=>{if(!!o)return o.removeFromParent(),o.geometry.dispose(),o.material.dispose(),o.geometry=null,o.material=null,o=null,null},dt=new X;var ee=dt.load(lt);const ut=dt.load(Tt);ut.repeat.set(.6,.6);class mt{constructor(t){v(this,"ticks",0);this.app=t,this.vel=new g(1,1,0)}revive(){this.mesh.position.set(0,60,-radius),this.mesh.material.color.set(16777215)}dispose(){this.mesh=E(this.mesh),this.geometry=null,this.material=null,this.smoke2=E(this.smoke2)}hitBrick(t){this.mesh.material.color=t.mesh.material.uniforms.uColor.value.clone(),this.mesh.material.color.multiplyScalar(1),this.app.effects.showHit(t.mesh.position),h.fromTo(this.mesh.scale,{x:.5},{x:1,duration:.1})}init(){this.createdAt=Date.now(),this.radius=10,console.log(this.radius),this.geometry=new kt(this.radius,32,32),this.material=new it({side:St,map:ut,depthTest:!1,depthWrite:!1,transparent:!0});var t=new R(this.geometry,this.material);t.position.y=60,t.position.x=0,t.position.z=0,this.mesh=t,this.power=10,this.config={curve:1};const e=new I({map:ee});this.smoke2=new M(e),this.app.scene.add(this.smoke2),this.app.scene.add(t)}setCurve(t){let e=1;(t>0&&this.vel.x>0||t<0&&this.vel.x<0)&&(e=2),e=t*2*((Math.random()+1)/2),h.timeline().to(this.config,{curve:e,duration:.4}).to(this.config,{curve:1,delay:1,duration:1})}canDie(){let t=3e3;return Date.now()-this.createdAt>t}bounce(){this.bouncedAt=this.ticks;const t=Math.random()*20;this.smoke2.material.rotation=10*Math.random(),this.smoke2.position.copy(this.mesh.position),this.smoke2.position.z=5,te.play(),h.fromTo(this.mesh.scale,{x:.2},{x:1,duration:.1}),h.timeline().fromTo(this.smoke2.scale,{x:0,y:0,z:0},{duration:.1,x:50-t,y:50-t,z:1}).fromTo(this.smoke2.material,{opacity:1},{duration:.2,opacity:0},0)}update(t){this.ticks++;let e=Math.min(3+t*.04,7);this.app.modifiers.isBloodSugarLow()&&(e=3);let i=this.vel,s=this.radius/2,a=this.radius/2,n=this.mesh.position.x,l=this.mesh.position.y,d=100/2;n+s>=p/2||this.mesh.position.x-s<=-p/2?(i.reflect(new g(1,0,0)),this.bounce()):l+d>=u/2?(i.set(i.x,-1,0),this.bounce()):l-a<=-u/2&&(i.set(i.x,1,0),this.config.curve=h.utils.random(0,4));let k=i.clone().multiplyScalar(e);this.canDie()?this.mesh.material.opacity=1:this.mesh.material.opacity=.1+(Math.sin(t*15)+1)/2,this.mesh.rotateZ(.05),k.y-=this.config.curve,this.mesh.position.add(k),this.ticks%2==0&&this.app.effects.showClouds(1,this.mesh.position,50)}}class se{init(){this.startDate=new Date,this.dailyValues=[];let t=new Date;t.setHours(0,0,0,0);let e=5;new Array(600).fill(0).forEach((i,s)=>{t.setMinutes(t.getMinutes()+4);let a=new Date(t);e+=h.utils.random(-1.2,1.2),e=Math.max(e,2),this.dailyValues.push([a,e])})}isBloodSugarLow(){if(this.bloodSugar<=4)return!0}isBloodSugarNormal(){if(this.bloodSugar>4&&this.bloodSugar<10)return!0}isBloodSugarHigh(){if(this.bloodSugar>=10)return!0}getBloodSugar(t){let i=Math.round(t*3),s=this.dailyValues[this.dailyValues.length-1];const a=this.dailyValues[i]||s;return b.bloodSugar=a[1].toFixed(1),b.bloodSugarDate=a[0],a[1]}getBloodSugarString(){if(this.isBloodSugarLow())return"low";if(this.isBloodSugarNormal())return"normal";if(this.isBloodSugarHigh())return"high"}update(t){this.bloodSugar=this.getBloodSugar(t),b.bloodSugar=this.bloodSugar.toFixed(1);const e=this.getBloodSugarString(),i=this.bloodSugarString;e!=i&&(O("bloodsugar:change",{from:i,to:e}),this.bloodSugarString=e)}}const ie=`
uniform vec3 uColor;
uniform float uAlpha;
varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec3 normals;
varying vec2 vUv;
void main() {
	vec3 color = vec3(1., 1., 1.);
	vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
	float fresnelTerm = dot(viewDirectionW, vNormalW);
	fresnelTerm = clamp(fresnelTerm,0.9, 2.0);

	color = uColor;
	

	// borders
	
	// if(vUv.x > .95) {
	// 	color = vec3(1., 0., 0.);
	// }

	// float b = step(vUv.x, 0.95);	
	// color *= b;
	// b = step(0.05, vUv.x);
	// color *= b;

	//color.r *= vUv.x ;
	//color.r *= vPositionW.x;
	//color.g *= vUv.y;

    gl_FragColor = vec4(color, uAlpha);
    //gl_FragColor = vec4(uColor, 1.0);
}
`,oe=`
varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUv;

void main() {
    vUv = uv;
    vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);
    vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var ae="/playground1/assets/ball1.1a2ffa70.png",re="/playground1/assets/ball2.466a70af.png";const pt=new X,le=pt.load(ae),ne=pt.load(re),he=["","#fbff80","#cc6cf5","#80c6ff","orange"];class ce{constructor(t,e,i,s,a,n){this.app=t,this.brickPoints=e,this.rows=i,this.columns=s,this.row=a,this.column=n}init(){this.cstep=p/this.columns;const t=10;this.bheight=u*.05,this.bwidth=p/this.columns-t,this.points=Z(this.brickPoints),this.life=this.points,this.ability=this.getAbility(),this.reinit(),this.geometry=new ot(this.bwidth,this.bheight,1),this.material=new F({fragmentShader:ie,vertexShader:oe,uniforms:{uColor:new w(new m(this.config.color)),uAlpha:new w(1),uTime:new w(0)},transparent:!0,opacity:1});var e=new R(this.geometry,this.material);this.mesh=e,this.group=new Bt,this.group.add(e),this.setInitPos(),this.applyAbility(),this.app.scene.add(this.group)}setInitPos(){this.mesh.position.y=u/2-this.bheight/2-50,this.mesh.position.y-=this.bheight*(this.row+1)+10*this.row,this.mesh.position.x=-p/2+this.cstep*this.column,this.meshEffect&&(this.meshEffect.position.copy(this.mesh.position),this.meshEffect.position.z=5),h.from(this.group.position,{duration:1,ease:"elastic.out(1, 0.4)",y:this.mesh.position.y+300,delay:h.utils.random(0,1)})}dispose(){this.mesh=E(this.mesh),this.geometry=null,this.material=null,this.meshEffect=E(this.meshEffect),this.group.removeFromParent()}applyAbility(){if(this.ability){let t="";this.ability==="bomb-column"?t=le:this.ability==="extra-ball"&&(t=ne);const e=new I({map:t});this.meshEffect=new M(e),this.meshEffect.scale.set(40,40,10),this.meshEffect.position.copy(this.mesh.position),this.meshEffect.position.z=5,this.meshEffect.material.opacity=1,this.group.add(this.meshEffect)}else this.meshEffect&&(this.group.remove(this.meshEffect),this.meshEffect.material.dispose(),this.meshEffect.mater=null,this.meshEffect.geometry.dispose(),this.meshEffect.geometry=null,this.meshEffect=null)}reinit(){let t=he[this.points];this.config={opacity:1,color:t}}hit(t=1){this.life-=t,this.mesh.rotateZ(Math.random()*.2),Z($t).play(),this.isDead()&&this.destroy();const e=this.ability;return this.looseAbility(),{points:this.getPoints(),ability:e}}looseAbility(){this.ability=null,this.applyAbility()}getPoints(){if(this.isDead())return this.points}destroy(){this.app.effects.showExplosions(1,this.mesh.position),h.to(this.config,{duration:.5,opacity:0}),h.to(this.mesh.position,{y:-u/2,duration:.5}),this.meshEffect&&h.to(this.meshEffect.position,{y:0,duration:.5})}isDead(){return this.life<1}isActive(){return this.life>0}allChildren(t){this.group.children.forEach(e=>{e instanceof Et&&t(e)})}revive(){this.config.opacity=1,this.mesh.material.uniforms.uAlpha.value=1,this.mesh.rotation.z=0,this.ability=this.getAbility(),this.applyAbility(),this.setInitPos(),setTimeout(()=>{this.life=this.points},1e3)}getAbility(){return Math.random()<.9?null:Z(["bomb-column","extra-ball"])}update(t){this.time=t,this.mesh.material.uniforms.uTime.value=t,this.mesh.material.uniforms.uAlpha.value=this.config.opacity,this.allChildren(e=>{e.material instanceof I?e.material.opacity=this.config.opacity:e.material instanceof F&&e.material.uniforms.uPacity&&(e.material.uniforms.uOpacity.value=this.config.opacity)})}}const de=`
uniform vec3 uColor;
uniform float uAlpha;
uniform vec2 uResolution;
uniform float uTime;
varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUv;

float dist(vec2 p0, vec2 pf){return sqrt((pf.x-p0.x)*(pf.x-p0.x)+(pf.y-p0.y)*(pf.y-p0.y));}

void main() {

    
			vec3 color = vec3(1., 1., 1.);
			vec3 viewDirectionW = normalize(cameraPosition - vPositionW);
			float fresnelTerm = .5 - dot(viewDirectionW, vNormalW);
			fresnelTerm = clamp(fresnelTerm,0.0, .9);

		vec2 sc = vPositionW.xy/uResolution;
		float c = clamp(sc.x, .9, 1.);
		float a = c;
		float circle = dist(uResolution*0.5, vPositionW.xy) * 0.0011 + sin(uTime) * 0.1;
		float offset = .14 + sin(uTime * 2.) * 0.1;
        gl_FragColor = vec4( uColor, (circle - offset) * uAlpha);
    
	

    //gl_FragColor = vec4(uColor, 1.0);
}
`;class ue{constructor(t){this.app=t}dispose(){E(this.mesh)}init(){var t=new It(p,u);const e=["varying vec3 vPositionW;","varying vec3 vNormalW;varying vec2 vUv;","void main() {"," vUv = uv;","	vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);"," vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`);var i=new F({fragmentShader:de,vertexShader:e,transparent:!0,uniforms:{uReslution:new w(new Pt(p,u)),uColor:new w(new m("#000000")),uAlpha:new w(0),uTime:new w(0)}});this.mesh=new R(t,i),this.mesh.position.z=10,this.app.scene.add(this.mesh),this.isShown=!1}show(){this.isShown||(this.isShown=!0,h.to(this.mesh.material.uniforms.uAlpha,{duration:.5,value:.7}))}hide(){this.isShown&&(h.to(this.mesh.material.uniforms.uAlpha,{duration:.5,value:0}),this.isShown=!1)}update(t){this.mesh.material.uniforms.uTime.value=t}}class me{constructor(t){this.app=t,this.vel=new g(0,0,0)}dispose(){E(this.mesh)}init(){const t=5;var e=new ot(200,50,10),i=new it({color:new m("#56cc7d")}),s=new R(e,i);s.position.y=-u/2+t/2,s.position.x=0,this.mesh=s,this.app.scene.add(s);let a=[];const n=()=>{const l=a[0];l=="ArrowLeft"?this.vel.x=-1:l=="ArrowRight"?this.vel.x=1:this.vel.x=0};window.addEventListener("keydown",l=>{a.unshift(l.key),n()}),window.addEventListener("touchmove",l=>{var d=l.touches[0].clientX;console.log(d)}),window.addEventListener("keyup",l=>{a=a.filter(d=>d!==l.key),n()})}hit(){this.mesh.material.color.set(new m("lightBlue")),h.timeline().to(this.mesh.scale,{duration:.05,y:.3,ease:"expo.out",yoyo:!0,repeat:1}),h.fromTo(this.mesh.scale,{x:.5},{x:1,duration:.3})}update(t,e){let i=Math.max(6,b.bloodSugar),s=this.vel,a=200/2;this.mesh.position.x,e?(this.mesh.scale.x=.6,this.mesh.material.color=new m("#ff0000")):(this.mesh.scale.x=1,this.mesh.material.color=new m("#56cc7d"));let n=s.clone().multiplyScalar(i);this.mesh.position.add(n).clamp(new g(-p/2+a,-u),new g(p/2-a,u))}}var pe="data:image/png;base64,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";const ft=new X,fe=ft.load(pe),ve=ft.load(lt);class ge{constructor(){v(this,"explosions",[]);v(this,"clouds",[]);v(this,"lastExplosion",0);v(this,"lastCloud",0)}init(t){this.app=t,console.warn("hello from effects"),this.setupExplosions(),this.setupClouds()}showClouds(t,e,i,s){s=s||m.white;for(let a=0;a<t;a++){const n=this.lastCloud++%this.clouds.length,l=this.clouds[n];l.position.copy(e),l.material.color.set(s),i=i||40,i+=i/2*Math.random(),h.fromTo(l.material,{opacity:1},{duration:.7,opacity:0}),h.to(l.material,{duration:1,rotation:Math.PI*Math.random()*Math.PI}),h.fromTo(l.scale,{x:0,y:0},{duration:1,x:i,y:i})}}setupClouds(){this.clouds=[];const t=50;let e=ve;const i=new I({map:e});for(let s=0;s<t;s++){const a=new M(i.clone());a.scale.set(0,0,0),a.opacity=0,this.clouds.push(a),this.app.scene.add(a)}}setupExplosions(){this.explosions=[];const t=15;let e=fe;const i=new I({map:e});for(let s=0;s<t;s++){const a=new M(i.clone());a.scale.set(0,0,0),a.opacity=0,this.explosions.push(a),this.app.scene.add(a)}}showHit(t){let e=t.clone();e.z=1,this.showExplosions(1,e,40,m.red)}showExplosions(t,e,i,s){s=s||m.white;for(let a=0;a<t;a++){const n=this.lastExplosion++%this.explosions.length,l=this.explosions[n];l.position.copy(e),l.material.color.set(s),i=i||40,i+=i/2*Math.random(),h.fromTo(l.material,{opacity:1},{duration:.7,opacity:0}),h.to(l.material,{duration:1,rotation:Math.PI*Math.random()*Math.PI}),h.fromTo(l.scale,{x:0,y:0},{duration:1,x:i,y:i})}}}var $=(o,t)=>{const e=o.__vccOpts||o;for(const[i,s]of t)e[i]=s;return e};const C=o=>(H("data-v-7a616276"),o=o(),K(),o),we={class:"welcome-wrapper"},ye=C(()=>r("h2",null,"Sugar break!",-1)),Ae=C(()=>r("p",null,"Your goal: Get as many points as possible.",-1)),be=C(()=>r("p",null,"The game changes with the glucose and insulin levels of Anders. The data is fetched automatically from his insulin pump",-1)),xe=C(()=>r("p",{class:"small"},null,-1)),ke=C(()=>r("label",{for:""},"Enter your name:",-1)),Se={setup(o){function t(){console.log("start game"),O("game:start")}return(e,i)=>(f(),y("div",we,[ye,Ae,be,xe,ke,Y(r("input",{class:"input text","onUpdate:modelValue":i[0]||(i[0]=s=>G(Q)?Q.value=s:null),type:"text",placeholder:"Enter your name"},null,512),[[q,c(Q)]]),r("button",{class:"block",onClick:t},"Press space to start")]))}};var Be=$(Se,[["__scopeId","data-v-7a616276"]]),tt="/playground1/assets/star.d11f39db.svg";const vt=o=>(H("data-v-7be62a2a"),o=o(),K(),o),Ee=vt(()=>r("h2",null,"You died!",-1)),Ie=vt(()=>r("p",{class:"center"},"Did the bloodsugar get the best of you?",-1)),Pe={class:"center small"},Ce=rt(" Score: "),_e={class:"score"},We=rt(". "),Re={class:"center mt-2"},Me=["src"],Ue=["src"],Ve={setup(o){function t(){O("game:start")}let e=3;e+=h.utils.random(-1,1,1);const i=5-e,s={"--starUrl":"url('"+tt+"')"};return(a,n)=>(f(),y(U,null,[Ee,Ie,r("div",Pe,[r("strong",null,[Ce,r("span",_e,B(c(V)),1),We]),r("span",null,"You made it until "+B(c(nt))+", make it until midnight to win",1)]),r("div",Re,[(f(!0),y(U,null,at(c(e),l=>(f(),y("img",{src:c(tt),width:"40"},null,8,Me))),256)),(f(),y(U,null,at(i,l=>r("img",{width:"40",src:c(tt),class:"empty",style:s},null,8,Ue)),64))]),r("button",{class:"block game_start",onClick:t},"Press space to try again")],64))}};var Qe=$(Ve,[["__scopeId","data-v-7be62a2a"]]),De="/playground1/assets/header1.765088a2.svg";const x=o=>(H("data-v-2c9a23d0"),o=o(),K(),o),Ne={key:0,class:"popup-container"},Te={class:"toolbar"},Oe=x(()=>r("div",{class:"grid-leftleft"},null,-1)),je=x(()=>r("div",{class:"grid-rightright"},null,-1)),Le={class:"grid-left"},ze={class:"number-container score"},Xe=x(()=>r("div",{class:"label"},"Score",-1)),Fe={class:"value"},Ye={class:"number-container"},qe=x(()=>r("div",{class:"label"},"Highscore",-1)),Ge={class:"value"},He={class:"grid-center"},Ke={id:"bs"},Je=x(()=>r("span",{class:"label"},"Blood sugar",-1)),Ze={class:"text"},$e={class:"time"},ts={class:"grid-right"},es={class:"volume"},ss=x(()=>r("div",{class:"label"},"Music volume",-1)),is={class:"value"},os={class:"volume"},as=x(()=>r("div",{class:"label"},"Game volume",-1)),rs={class:"value"},ls={setup(o){const t=Ct(Be);J(["game:over"],()=>{t.value=Qe,N.value=!1});let e;return _(V,(i,s)=>{!e||(e.isActive()?console.log("active"):e.restart(!1))}),_t(()=>{e=h.fromTo(".score .value",{scale:1},{duration:.1,repeatRefresh:!0,color:"#f5d057",y:"random(5,35)",x:"random(-15,15)",rotation:"random(-20,20)",scale:"random(1,2.5)",ease:"power2.inOut",yoyo:!0,repeat:1})}),(i,s)=>(f(),y(U,null,[c(N)?Ut("",!0):(f(),y("div",Ne,[r("div",{class:"popup",style:Mt({backgroundImage:`url(${c(De)})`})},[(f(),Wt(Rt(c(t))))],4)])),r("div",Te,[Oe,je,r("div",Le,[r("div",ze,[Xe,r("div",Fe,B(c(V)),1)]),r("div",Ye,[qe,r("div",Ge,B(c(D)),1)])]),r("div",He,[r("div",Ke,[Je,r("span",Ze,B(c(b).bloodSugar),1),r("span",$e,B(c(nt)),1)])]),r("div",ts,[r("div",es,[ss,r("div",is,[Y(r("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":s[0]||(s[0]=a=>G(A)?A.value=a:null)},null,512),[[q,c(A)]])])]),r("div",os,[as,r("div",rs,[Y(r("input",{type:"range",min:"0",max:"100","onUpdate:modelValue":s[1]||(s[1]=a=>G(T)?T.value=a:null)},null,512),[[q,c(T)]])])])])])],64))}};var ns=$(ls,[["__scopeId","data-v-2c9a23d0"]]);class hs extends Qt{constructor(t){const e={container:document.getElementById("container")};super(e.container);v(this,"isBallAlignedWithBrick",t=>{const e=t.mesh.position.x,i=t.mesh.position.y;return this.bricks.filter(s=>s.isActive()).find(s=>{const a=s.mesh.position.x,n=s.mesh.geometry.parameters.width/2,l=s.mesh.position.y,d=s.mesh.geometry.parameters.height/2,k=e>a-n&&e<a+n,z=i<l+d&&i>l-d;return k&&z?s:!1})});this.options=e,this.initVue()}initVue(){Vt(ns).mount("#app")}initFirstOnly(){P.play(),this.running=!1,document.addEventListener("keydown",t=>{t.keyCode==32&&(N.value=!0,this.reset(),this.init())}),J("game:start",()=>{N.value=!0,this.reset(),this.init()})}init(t){if(this.running=!0,t&&this.initFirstOnly(),this.points=0,this.camera.position.z=10,this.camera.position.y=0,this.camera.rotation.z=0,this.balls=[],this.bricks=[],this.intervals=[],t){const n=new ge;this.effects=n,n.init(this),this.modifiers=new se,this.modifiers.init(),this.ui={bs:document.getElementById("bs"),bstext:document.querySelector("#bs .text"),gameover:document.querySelector("#game_over"),popups:document.querySelectorAll(".popup div")}}let e=new me(this);if(e.init(),this.padel=e,!t){const n=new mt(this);n.init(),this.balls=[n]}this.overlay=new ue(this),this.overlay.init(),this.bricks=[],this.hits=0,this.hits_last=0,this.hits_rate=0;const i=7,s=20,a=[1,1,1,1,2,2,2,3,3,4,4];for(let n=0;n<i;n++)for(let l=0;l<s;l++){const d=new ce(this,a,i,s,n,l);d.init(),this.bricks.push(d)}this.scene.background=new m("pink"),this.updateScores(),t&&this.tick()}updateScores(){Ft(this.points)}hitsFloor(t){return t.mesh.position.y<-u/2+10}updateBs(t,e){e?(this.overlay.show(),this.ui.bs.classList.add("low")):(this.overlay.hide(),this.ui.bs.classList.remove("low")),this.modifiers.isBloodSugarNormal()?this.ui.bs.classList.add("normal"):this.ui.bs.classList.remove("normal"),this.modifiers.isBloodSugarHigh()?this.ui.bs.classList.add("high"):this.ui.bs.classList.remove("high")}hitBrick(t,e,i){var s=t.hit(e);if((s==null?void 0:s.ability)=="bomb-column")this.bricks.forEach(a=>{if(a.column==t.column){const n=10;this.hitBrick(a,n,i)}});else if((s==null?void 0:s.ability)=="extra-ball"){const a=new mt(this);a.init(),i.push(a)}(s==null?void 0:s.points)>0&&(this.hits++,this.intervals.push(setTimeout(()=>{t&&t.revive()},3e4)),this.points+=s.points,this.shake2=!0,h.fromTo(this,{shake2:!0},{shake2:!1,duration:.2})),this.updateScores()}ballUpdate(t,e,i){if(t.update(e),this.hitsFloor(t)&&t.canDie())return console.log("dead"),t.dispose(),!1;this.isBallAlignedWithPaddle(t)&&t.vel.y<0&&(t.setCurve(this.padel.vel.x),this.padel.vel.x<0&&t.vel.x>0||this.padel.vel.x>0&&t.vel.x<0?t.vel.negate():t.vel.reflect(new g(0,1,0)),this.padel.hit(),t.bounce());let s=this.isBallAlignedWithBrick(t);return s&&(t.hitBrick(s),t.vel.reflect(new g(0,1,0)),this.hitBrick(s,t.power,i)),!0}update(t){if(!this.running)return;let e=this.clock.elapsedTime;this.modifiers.update(e);const i=this.modifiers.isBloodSugarLow();this.updateBs(e,i),this.overlay.update(e),e%2==0&&(this.hits_rate=Math.max(1,this.hits-this.hits_last)),this.padel.update(e,i);let s=[];this.balls=this.balls.filter(a=>this.ballUpdate(a,e,s)),this.balls=this.balls.concat(s),this.balls.length==0&&this.die(),this.bricks.forEach(a=>{a.update(e)}),this.shake?this.camera.rotation.z=Math.sin(e*100)*.02:this.shake2?this.camera.rotation.z=Math.sin(e*100)*.005:this.camera.rotation.z=0}reset(){this.clock=new et,this.intervals.forEach(t=>clearInterval(t)),this.balls.forEach(t=>t.dispose()),this.balls=[],this.bricks.forEach(t=>t.dispose()),this.bricks=[],this.overlay=this.overlay.dispose(),this.padel=this.padel.dispose(),this.renderer.renderLists.dispose(),this.renderer.dispose()}die(){const t=this.points;this.clock.stop(),O("game:over",{points:t}),this.updateScores()}isBallAlignedWithPaddle(t){const e=t.mesh.position.x,i=this.padel.mesh.position.x,s=this.padel.mesh.geometry.parameters.width/2,a=t.mesh.position.y,n=this.padel.mesh.position.y,l=this.padel.mesh.geometry.parameters.height/2,d=this.padel.mesh.geometry.parameters.height,k=e>i-s-d&&e<i+s+d,z=a<n+l&&a>n;return k&&z}}const cs=new hs;cs.init(!0);
//# sourceMappingURL=sugarbreak.d5c0e4fb.js.map
