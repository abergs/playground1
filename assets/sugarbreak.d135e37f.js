var P=Object.defineProperty;var C=(r,e,t)=>e in r?P(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var w=(r,e,t)=>(C(r,typeof e!="symbol"?e+"":e,t),t);import"./modulepreload-polyfill.b7f2da20.js";import{W as I,Z as Q,S as U,i as A,T as j,m as d,a as E,_ as B,c as n,g as u,$ as k,a0 as b,a1 as M,s as x,b as y,Y as f,f as z,n as N,a2 as R,a3 as O,O as T}from"./vendor.7ccf6f95.js";class L{constructor(e){this.container=e,this.renderer=new I({antialias:!0}),this.renderer.setSize(e.offsetWidth,e.offsetHeight,!1),this.renderer.setPixelRatio(window.devicePixelRatio),e.append(this.renderer.domElement),e.offsetWidth,e.offsetHeight,100*e.offsetWidth/e.offsetHeight,100*e.offsetWidth/e.offsetHeight;const t=e.offsetWidth/e.offsetHeight,s=1e3,i=s/t;this.camera=new Q(s/-2,s/2,i/2,i/-2,0,1e3),this.scene=new U,this.clock=new A,this.assets={},this.disposed=!1,this.tick=this.tick.bind(this),this.init=this.init.bind(this)}loadAssets(){return new Promise((e,t)=>{})}init(){this.tick()}getViewSizeAtDepth(e=0){const t=this.camera.fov*Math.PI/180,s=Math.abs((this.camera.position.z-e)*Math.tan(t/2)*2);return{width:s*this.camera.aspect,height:s}}dispose(){this.disposed=!0}onResize(){}update(){}render(){this.renderer.render(this.scene,this.camera)}tick(){if(this.disposed)return;if(X(this.renderer)){const t=this.renderer.domElement;this.camera.aspect=t.clientWidth/t.clientHeight,this.camera.updateProjectionMatrix(),this.onResize()}const e=this.clock.getDelta();this.render(e),this.update(e),requestAnimationFrame(this.tick)}}function X(r){const e=r.domElement,t=e.clientWidth,s=e.clientHeight,i=e.width!==t||e.height!==s;return i&&r.setSize(t,s,!1),i}var Y="data:image/png;base64,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",V="data:image/png;base64,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";const D=container.offsetWidth/container.offsetHeight,c=1e3,m=c/D,S=new j;var F=S.load(Y),q=S.load(V);class G{constructor(e){this.app=e,this.vel=new d(1,1,0)}hitBrick(e){this.mesh.material.color=e.mesh.material.uniforms.uColor.value.clone(),this.mesh.material.color.multiplyScalar(1);const t=Math.random()*20;this.smoke1.material.rotation=10*Math.random(),this.smoke1.scale.set(40-t,40-t,1),this.smoke1.position.copy(this.mesh.position),this.smoke1.position.z=5,this.smoke1.material.color=e.mesh.material.uniforms.uColor.value.clone().multiplyScalar(1.6),setTimeout(()=>{this.smoke1.scale.set(0,0,0)},100)}init(){var e=new E(10,32,32),t=new B({color:new n("red"),wireframe:!0}),s=new u(e,t);s.position.y=60,s.position.x=0,s.position.z=0,this.mesh=s;const i=new k({map:F});this.smoke1=new b(i),this.smoke1.scale.set(40,40,1),this.app.scene.add(this.smoke1);const o=new k({map:q});this.smoke2=new b(o),this.app.scene.add(this.smoke2),this.app.scene.add(s)}bounce(){const e=Math.random()*20;this.smoke2.material.rotation=10*Math.random(),this.smoke2.scale.set(40-e,40-e,1),this.smoke2.position.copy(this.mesh.position),this.smoke2.position.z=5,setTimeout(()=>{this.smoke2.scale.set(0,0,0)},100)}update(e){let t=Math.min(5+e*.04,11),s=this.vel,i=10/2,o=10/2,a=this.mesh.position.x,l=this.mesh.position.y;(a+i>c/2||this.mesh.position.x-i<-c/2)&&(s.reflect(new d(1,0,0)),this.bounce()),(l+o>m/2||l-o<-m/2)&&(s.reflect(new d(0,1,0)),this.bounce());let h=s.clone().multiplyScalar(t);console.log(h),this.mesh.position.add(h)}}class K{init(){this.startDate=new Date}isBloodSugarLow(){if(this.bloodSugar<=4)return!0}isBloodSugarNormal(){if(this.bloodSugar>4&&this.bloodSugar<10)return!0}isBloodSugarHigh(){if(this.bloodSugar>=10)return!0}getBloodSugar(e){return Math.max(Math.cos(e*.1)*8.14+(1+Math.sin(e*.2))*7,2)}update(e){this.bloodSugar=this.getBloodSugar(e)}}const H=`
uniform vec3 uColor;
uniform float uAlpha;
varying vec3 vPositionW;
varying vec3 vNormalW;
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


    gl_FragColor = vec4(color, uAlpha);
    //gl_FragColor = vec4(uColor, 1.0);
}
`,J=`
varying vec3 vPositionW;
varying vec3 vNormalW;
varying vec2 vUv;

void main() {
    vUv = uv;
    vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);
    vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`;var Z="/playground1/assets/hit1.edfa9731.m4a",_="/playground1/assets/hit2.b10388c2.m4a",$="/playground1/assets/hit3.401d0d66.m4a",ee="/playground1/assets/hit4.18e89af6.m4a",te="/playground1/assets/hit5.3595b5da.m4a",se=[Z,_,$,ee,te],v=se.map(r=>new M.Howl({src:r,sprite:{__default:[100,1e3]}}));const W=r=>Array.isArray(r)?r[Math.floor(Math.random()*r.length)]:r;class ie{constructor(e,t,s,i,o,a){this.app=e,this.brickPoints=t,this.rows=s,this.columns=i,this.row=o,this.column=a}init(){const e=c/10,t=15,s=10;this.points=W(this.brickPoints),this.life=this.points;let o=["","#fbff80","#cc6cf5","#80c6ff","orange"][this.points];var a=new x(e-s,t,10),l=new y({fragmentShader:H,vertexShader:J,uniforms:{uColor:new f(new n(o)),uAlpha:new f(1),uTime:new f(0)},transparent:!0,opacity:1}),h=new u(a,l);h.position.y=m/2-t/2-50,h.position.y-=t*(this.row+1)+10*this.row,h.position.x=-c/2+e*this.column,this.mesh=h,this.app.scene.add(this.mesh)}hit(){if(this.life--,this.mesh.rotateZ(Math.random()*.2),W(v).play(),!this.isActive())return this.mesh.material.uniforms.uAlpha.value=0,this.points}isActive(){return this.life>0}revive(){this.life=this.points,this.mesh.material.uniforms.uAlpha.value=1,this.mesh.rotation.z=0}update(e){this.time=e,this.mesh.material.uniforms.uTime.value=e,this.life<this.points}}const oe=`
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
		float circle = dist(uResolution*0.5, vPositionW.xy) * 0.002 + sin(uTime) * 0.1;
		float offset = .14 + sin(uTime * 2.) * 0.1;
        gl_FragColor = vec4( uColor, (circle - offset) * uAlpha);
    
	

    //gl_FragColor = vec4(uColor, 1.0);
}
`;class ae{constructor(e){this.app=e}init(){var e=new z(c,m);const t=["varying vec3 vPositionW;","varying vec3 vNormalW;varying vec2 vUv;","void main() {"," vUv = uv;","	vPositionW = vec3( vec4( position, 1.0 ) * modelMatrix);"," vNormalW = normalize( vec3( vec4( normal, 0.0 ) * modelMatrix ) );","	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );","}"].join(`
`);var s=new y({color:new n("#ffffff"),fragmentShader:oe,vertexShader:t,transparent:!0,uniforms:{uReslution:new f(new N(c,m)),uColor:new f(new n("#000000")),uAlpha:new f(0),uTime:new f(0)}});this.mesh=new u(e,s),this.mesh.position.z=10,this.app.scene.add(this.mesh),this.isShown=!1}show(){this.isShown||(this.isShown=!0,R.to(this.mesh.material.uniforms.uAlpha,{duration:.5,value:.7}))}hide(){this.isShown&&(R.to(this.mesh.material.uniforms.uAlpha,{duration:.5,value:0}),this.isShown=!1)}update(e){this.mesh.material.uniforms.uTime.value=e}}class re{constructor(e){this.app=e,this.vel=new d(0,0,0)}init(){const e=5;var t=new x(200,50,10),s=new B({color:new n("#56cc7d")}),i=new u(t,s);i.position.y=-m/2+e/2,i.position.x=0,this.mesh=i,this.app.scene.add(i);let o=[];const a=()=>{const l=o[0];l=="ArrowLeft"?this.vel.x=-1:l=="ArrowRight"?this.vel.x=1:this.vel.x=0};window.addEventListener("keydown",l=>{o.unshift(l.key),a()}),window.addEventListener("touchmove",l=>{console.log(l),l.touches[0].clientX}),window.addEventListener("keyup",l=>{o=o.filter(h=>h!==l.key),a()})}hit(){this.mesh.material.color.set(new n("lightBlue")),this.mesh.scale.y=.6,setTimeout(()=>{this.mesh.material.color.set(new n("#56cc7d")),this.mesh.scale.y=1},100)}update(e,t){let s=10,i=this.vel,o=200/2;this.mesh.position.x,t?(this.mesh.scale.x=.6,this.mesh.material.color=new n("#ff0000")):(this.mesh.scale.x=1,this.mesh.material.color=new n("#56cc7d"));let a=i.clone().multiplyScalar(s);this.mesh.position.add(a).clamp(new d(-c/2+o,-m),new d(c/2-o,m))}}class le extends L{constructor(e){const t={container:document.getElementById("container")};super(t.container);w(this,"isBallAlignedWithBrick",()=>{const e=this.ball.mesh.position.x,t=this.ball.mesh.position.y;return this.bricks.filter(s=>s.life).find(s=>{const i=s.mesh.position.x,o=s.mesh.geometry.parameters.width/2,a=s.mesh.position.y,l=s.mesh.geometry.parameters.height/2,h=e>i-o&&e<i+o,p=t<a+l&&t>a-l;return h&&p?s:!1})});this.options=t,this.camera.position.z=10,this.camera.position.y=0,this.camera.rotation.z=0,this.modifiers=new K,this.ui={bs:document.getElementById("bs"),bstext:document.querySelector("#bs .text")};let s=new re(this);s.init(),this.padel=s,this.ball=new G(this),this.ball.init(),this.overlay=new ae(this),this.overlay.init(),this.bricks=[],this.points_record=0,this.hits=0,this.hits_last=0,this.hits_rate=0;const i=6,o=10,a=[1,1,1,1,2,2,2,3,3,4,4];for(let h=0;h<i;h++)for(let p=0;p<o;p++){const g=new ie(this,a,i,o,h,p);g.init(),this.bricks.push(g)}this.scene.background=new n("pink");const l=new O(5);this.scene.add(l)}init(){this.points=0,this.points_record=localStorage.getItem("points_record"),this.updateScores(),this.controls=new T(this.camera,this.renderer.domElement),this.controls.enabled=!1,this.tick()}updateScores(){document.getElementById("last_score").innerText=this.points_record,document.getElementById("score").innerText=this.points}hitsFloor(){return this.ball.mesh.position.y<-m/2+10}updateBs(e,t){var s=this.modifiers.getBloodSugar(e);this.ui.bstext.innerText=s.toFixed(1),t?(this.overlay.show(),v.forEach(a=>a.rate(.7)),this.ui.bs.classList.add("low")):(this.overlay.hide(),v.forEach(a=>a.rate(1)),this.ui.bs.classList.remove("low")),this.modifiers.isBloodSugarNormal()?this.ui.bs.classList.add("normal"):this.ui.bs.classList.remove("normal"),this.modifiers.isBloodSugarHigh()?this.ui.bs.classList.add("high"):this.ui.bs.classList.remove("high")}update(e){let t=this.clock.elapsedTime;this.modifiers.update(t);const s=this.modifiers.isBloodSugarLow();if(this.updateBs(t,s),this.overlay.update(t),this.controls.update(),t%2==0&&(this.hits_rate=Math.max(1,this.hits-this.hits_last)),this.padel.update(t,s),this.ball.update(t),this.bricks.forEach(a=>{a.update(t)}),this.hitsFloor()){this.ball.mesh.material.color=new n("#000000");const a=this.points;a>this.points_record&&(console.log("score",a,this.points_record),this.points_record=a,localStorage.setItem("points_record",this.points_record),this.updateScores()),this.clock=new A,setTimeout(()=>{this.points=0,this.ball.mesh.material.color=new n("#ff0000"),this.updateScores(),this.reviveAll()},1e3)}this.isBallAlignedWithPaddle()&&this.ball.vel.y<0&&(this.padel.vel.x<0&&this.ball.vel.x>0?this.ball.vel.negate():this.padel.vel.x>0&&this.ball.vel.x<0?this.ball.vel.negate():this.ball.vel.reflect(new d(0,1,0)),this.padel.hit(),this.ball.bounce(),setTimeout(()=>{this.shake=!1},500));let i=this.isBallAlignedWithBrick();if(i){this.ball.hitBrick(i),this.ball.vel.reflect(new d(0,1,0));var o=i.hit();o>0&&(this.hits++,setTimeout(()=>{i.revive()},4e4),this.points+=o,this.shake2=!0,setTimeout(()=>{this.shake2=!1},200)),document.getElementById("score").innerText=this.points}this.shake?this.camera.rotation.z=Math.sin(t*100)*.02:this.shake2?this.camera.rotation.z=Math.sin(t*100)*.005:this.camera.rotation.z=0}reviveAll(){this.bricks.forEach(e=>{e.revive()})}isBallAlignedWithPaddle(){const e=this.ball.mesh.position.x,t=this.padel.mesh.position.x,s=this.padel.mesh.geometry.parameters.width/2,i=this.ball.mesh.position.y,o=this.padel.mesh.position.y,a=this.padel.mesh.geometry.parameters.height/2,l=this.padel.mesh.geometry.parameters.height,h=e>t-s-l&&e<t+s+l,p=i<o+a&&i>o;return h&&p}}const he=new le;he.init();
//# sourceMappingURL=sugarbreak.d135e37f.js.map
