(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Cl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const lt={},fr=[],An=()=>{},ku=()=>!1,la=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Rl=n=>n.startsWith("onUpdate:"),At=Object.assign,Pl=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},jh=Object.prototype.hasOwnProperty,et=(n,e)=>jh.call(n,e),Oe=Array.isArray,hr=n=>ca(n)==="[object Map]",Wu=n=>ca(n)==="[object Set]",ke=n=>typeof n=="function",vt=n=>typeof n=="string",Mi=n=>typeof n=="symbol",dt=n=>n!==null&&typeof n=="object",Xu=n=>(dt(n)||ke(n))&&ke(n.then)&&ke(n.catch),qu=Object.prototype.toString,ca=n=>qu.call(n),Zh=n=>ca(n).slice(8,-1),Yu=n=>ca(n)==="[object Object]",Dl=n=>vt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Vr=Cl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Jh=/-\w/g,gi=ua(n=>n.replace(Jh,e=>e.slice(1).toUpperCase())),Qh=/\B([A-Z])/g,Xi=ua(n=>n.replace(Qh,"-$1").toLowerCase()),$u=ua(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ca=ua(n=>n?`on${$u(n)}`:""),mi=(n,e)=>!Object.is(n,e),Ra=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Ku=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},ed=n=>{const e=parseFloat(n);return isNaN(e)?n:e},td=n=>{const e=vt(n)?Number(n):NaN;return isNaN(e)?n:e};let dc;const fa=()=>dc||(dc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ll(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=vt(i)?sd(i):Ll(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(vt(n)||dt(n))return n}const nd=/;(?![^(]*\))/g,id=/:([^]+)/,rd=/\/\*[^]*?\*\//g;function sd(n){const e={};return n.replace(rd,"").split(nd).forEach(t=>{if(t){const i=t.split(id);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function xr(n){let e="";if(vt(n))e=n;else if(Oe(n))for(let t=0;t<n.length;t++){const i=xr(n[t]);i&&(e+=i+" ")}else if(dt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const ad="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",od=Cl(ad);function ju(n){return!!n||n===""}const Zu=n=>!!(n&&n.__v_isRef===!0),Ju=n=>vt(n)?n:n==null?"":Oe(n)||dt(n)&&(n.toString===qu||!ke(n.toString))?Zu(n)?Ju(n.value):JSON.stringify(n,Qu,2):String(n),Qu=(n,e)=>Zu(e)?Qu(n,e.value):hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Pa(i,s)+" =>"]=r,t),{})}:Wu(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Pa(t))}:Mi(e)?Pa(e):dt(e)&&!Oe(e)&&!Yu(e)?String(e):e,Pa=(n,e="")=>{var t;return Mi(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let Wt;class ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Wt;try{return Wt=this,e()}finally{Wt=t}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function cd(){return Wt}let ft;const Da=new WeakSet;class ef{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||nf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,pc(this),rf(this);const e=ft,t=pn;ft=this,pn=!0;try{return this.fn()}finally{sf(this),ft=e,pn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Nl(e);this.deps=this.depsTail=void 0,pc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){So(this)&&this.run()}get dirty(){return So(this)}}let tf=0,Hr,Gr;function nf(n,e=!1){if(n.flags|=8,e){n.next=Gr,Gr=n;return}n.next=Hr,Hr=n}function Il(){tf++}function Ul(){if(--tf>0)return;if(Gr){let e=Gr;for(Gr=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Hr;){let e=Hr;for(Hr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function rf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function sf(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Nl(i),ud(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function So(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(af(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function af(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Yr)||(n.globalVersion=Yr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!So(n))))return;n.flags|=2;const e=n.dep,t=ft,i=pn;ft=n,pn=!0;try{rf(n);const r=n.fn(n._value);(e.version===0||mi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{ft=t,pn=i,sf(n),n.flags&=-3}}function Nl(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Nl(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function ud(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let pn=!0;const of=[];function $n(){of.push(pn),pn=!1}function Kn(){const n=of.pop();pn=n===void 0?!0:n}function pc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Yr=0;class fd{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Fl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!pn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new fd(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,lf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Yr++,this.notify(e)}notify(e){Il();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ul()}}}function lf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)lf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Mo=new WeakMap,Gi=Symbol(""),Eo=Symbol(""),$r=Symbol("");function Rt(n,e,t){if(pn&&ft){let i=Mo.get(n);i||Mo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Fl),r.map=i,r.key=t),r.track()}}function Hn(n,e,t,i,r,s){const a=Mo.get(n);if(!a){Yr++;return}const o=l=>{l&&l.trigger()};if(Il(),e==="clear")a.forEach(o);else{const l=Oe(n),c=l&&Dl(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===$r||!Mi(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get($r)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Gi)),hr(n)&&o(a.get(Eo)));break;case"delete":l||(o(a.get(Gi)),hr(n)&&o(a.get(Eo)));break;case"set":hr(n)&&o(a.get(Gi));break}}Ul()}function Yi(n){const e=Je(n);return e===n?e:(Rt(e,"iterate",$r),mn(n)?e:e.map(jn))}function Ol(n){return Rt(n=Je(n),"iterate",$r),n}function ci(n,e){return _i(n)?dr(n)?Kr(jn(e)):Kr(e):jn(e)}const hd={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,n=>ci(this,n))},concat(...n){return Yi(this).concat(...n.map(e=>Oe(e)?Yi(e):e))},entries(){return La(this,"entries",n=>(n[1]=ci(this,n[1]),n))},every(n,e){return Ln(this,"every",n,e,void 0,arguments)},filter(n,e){return Ln(this,"filter",n,e,t=>t.map(i=>ci(this,i)),arguments)},find(n,e){return Ln(this,"find",n,e,t=>ci(this,t),arguments)},findIndex(n,e){return Ln(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Ln(this,"findLast",n,e,t=>ci(this,t),arguments)},findLastIndex(n,e){return Ln(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Ln(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ia(this,"includes",n)},indexOf(...n){return Ia(this,"indexOf",n)},join(n){return Yi(this).join(n)},lastIndexOf(...n){return Ia(this,"lastIndexOf",n)},map(n,e){return Ln(this,"map",n,e,void 0,arguments)},pop(){return wr(this,"pop")},push(...n){return wr(this,"push",n)},reduce(n,...e){return mc(this,"reduce",n,e)},reduceRight(n,...e){return mc(this,"reduceRight",n,e)},shift(){return wr(this,"shift")},some(n,e){return Ln(this,"some",n,e,void 0,arguments)},splice(...n){return wr(this,"splice",n)},toReversed(){return Yi(this).toReversed()},toSorted(n){return Yi(this).toSorted(n)},toSpliced(...n){return Yi(this).toSpliced(...n)},unshift(...n){return wr(this,"unshift",n)},values(){return La(this,"values",n=>ci(this,n))}};function La(n,e,t){const i=Ol(n),r=i[e]();return i!==n&&!mn(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const dd=Array.prototype;function Ln(n,e,t,i,r,s){const a=Ol(n),o=a!==n&&!mn(n),l=a[e];if(l!==dd[e]){const f=l.apply(n,s);return o?jn(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,ci(n,f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function mc(n,e,t,i){const r=Ol(n);let s=t;return r!==n&&(mn(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,ci(n,o),l,n)}),r[e](s,...i)}function Ia(n,e,t){const i=Je(n);Rt(i,"iterate",$r);const r=i[e](...t);return(r===-1||r===!1)&&Hl(t[0])?(t[0]=Je(t[0]),i[e](...t)):r}function wr(n,e,t=[]){$n(),Il();const i=Je(n)[e].apply(n,t);return Ul(),Kn(),i}const pd=Cl("__proto__,__v_isRef,__isVue"),cf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mi));function md(n){Mi(n)||(n=String(n));const e=Je(this);return Rt(e,"has",n),e.hasOwnProperty(n)}class uf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Td:pf:s?df:hf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Oe(e);if(!r){let l;if(a&&(l=hd[t]))return l;if(t==="hasOwnProperty")return md}const o=Reflect.get(e,t,Dt(e)?e:i);if((Mi(t)?cf.has(t):pd(t))||(r||Rt(e,"get",t),s))return o;if(Dt(o)){const l=a&&Dl(t)?o:o.value;return r&&dt(l)?bo(l):l}return dt(o)?r?bo(o):zl(o):o}}class ff extends uf{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const a=Oe(e)&&Dl(t);if(!this._isShallow){const c=_i(s);if(!mn(i)&&!_i(i)&&(s=Je(s),i=Je(i)),!a&&Dt(s)&&!Dt(i))return c||(s.value=i),!0}const o=a?Number(t)<e.length:et(e,t),l=Reflect.set(e,t,i,Dt(e)?e:r);return e===Je(r)&&(o?mi(i,s)&&Hn(e,"set",t,i):Hn(e,"add",t,i)),l}deleteProperty(e,t){const i=et(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Hn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Mi(t)||!cf.has(t))&&Rt(e,"has",t),i}ownKeys(e){return Rt(e,"iterate",Oe(e)?"length":Gi),Reflect.ownKeys(e)}}class gd extends uf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const _d=new ff,xd=new gd,vd=new ff(!0);const yo=n=>n,ms=n=>Reflect.getPrototypeOf(n);function Sd(n,e,t){return function(...i){const r=this.__v_raw,s=Je(r),a=hr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?yo:e?Kr:jn;return!e&&Rt(s,"iterate",l?Eo:Gi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function gs(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Md(n,e){const t={get(r){const s=this.__v_raw,a=Je(s),o=Je(r);n||(mi(r,o)&&Rt(a,"get",r),Rt(a,"get",o));const{has:l}=ms(a),c=e?yo:n?Kr:jn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&Rt(Je(r),"iterate",Gi),r.size},has(r){const s=this.__v_raw,a=Je(s),o=Je(r);return n||(mi(r,o)&&Rt(a,"has",r),Rt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=Je(o),c=e?yo:n?Kr:jn;return!n&&Rt(l,"iterate",Gi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return At(t,n?{add:gs("add"),set:gs("set"),delete:gs("delete"),clear:gs("clear")}:{add(r){!e&&!mn(r)&&!_i(r)&&(r=Je(r));const s=Je(this);return ms(s).has.call(s,r)||(s.add(r),Hn(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!_i(s)&&(s=Je(s));const a=Je(this),{has:o,get:l}=ms(a);let c=o.call(a,r);c||(r=Je(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?mi(s,u)&&Hn(a,"set",r,s):Hn(a,"add",r,s),this},delete(r){const s=Je(this),{has:a,get:o}=ms(s);let l=a.call(s,r);l||(r=Je(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Hn(s,"delete",r,void 0),c},clear(){const r=Je(this),s=r.size!==0,a=r.clear();return s&&Hn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Sd(r,n,e)}),t}function Bl(n,e){const t=Md(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(et(t,r)&&r in i?t:i,r,s)}const Ed={get:Bl(!1,!1)},yd={get:Bl(!1,!0)},bd={get:Bl(!0,!1)};const hf=new WeakMap,df=new WeakMap,pf=new WeakMap,Td=new WeakMap;function Ad(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wd(n){return n.__v_skip||!Object.isExtensible(n)?0:Ad(Zh(n))}function zl(n){return _i(n)?n:Vl(n,!1,_d,Ed,hf)}function Cd(n){return Vl(n,!1,vd,yd,df)}function bo(n){return Vl(n,!0,xd,bd,pf)}function Vl(n,e,t,i,r){if(!dt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=wd(n);if(s===0)return n;const a=r.get(n);if(a)return a;const o=new Proxy(n,s===2?i:t);return r.set(n,o),o}function dr(n){return _i(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function _i(n){return!!(n&&n.__v_isReadonly)}function mn(n){return!!(n&&n.__v_isShallow)}function Hl(n){return n?!!n.__v_raw:!1}function Je(n){const e=n&&n.__v_raw;return e?Je(e):n}function Rd(n){return!et(n,"__v_skip")&&Object.isExtensible(n)&&Ku(n,"__v_skip",!0),n}const jn=n=>dt(n)?zl(n):n,Kr=n=>dt(n)?bo(n):n;function Dt(n){return n?n.__v_isRef===!0:!1}function Ft(n){return Pd(n,!1)}function Pd(n,e){return Dt(n)?n:new Dd(n,e)}class Dd{constructor(e,t){this.dep=new Fl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Je(e),this._value=t?e:jn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||mn(e)||_i(e);e=i?e:Je(e),mi(e,t)&&(this._rawValue=e,this._value=i?e:jn(e),this.dep.trigger())}}function Ld(n){return Dt(n)?n.value:n}const Id={get:(n,e,t)=>e==="__v_raw"?n:Ld(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Dt(r)&&!Dt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function mf(n){return dr(n)?n:new Proxy(n,Id)}class Ud{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Fl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Yr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return nf(this,!0),!0}get value(){const e=this.dep.track();return af(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Nd(n,e,t=!1){let i,r;return ke(n)?i=n:(i=n.get,r=n.set),new Ud(i,r,t)}const _s={},Zs=new WeakMap;let Ui;function Fd(n,e=!1,t=Ui){if(t){let i=Zs.get(t);i||Zs.set(t,i=[]),i.push(n)}}function Od(n,e,t=lt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=y=>r?y:mn(y)||r===!1||r===0?Gn(y,1):Gn(y);let u,f,h,p,x=!1,v=!1;if(Dt(n)?(f=()=>n.value,x=mn(n)):dr(n)?(f=()=>c(n),x=!0):Oe(n)?(v=!0,x=n.some(y=>dr(y)||mn(y)),f=()=>n.map(y=>{if(Dt(y))return y.value;if(dr(y))return c(y);if(ke(y))return l?l(y,2):y()})):ke(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){$n();try{h()}finally{Kn()}}const y=Ui;Ui=u;try{return l?l(n,3,[p]):n(p)}finally{Ui=y}}:f=An,e&&r){const y=f,A=r===!0?1/0:r;f=()=>Gn(y(),A)}const g=cd(),d=()=>{u.stop(),g&&g.active&&Pl(g.effects,u)};if(s&&e){const y=e;e=(...A)=>{y(...A),d()}}let T=v?new Array(n.length).fill(_s):_s;const w=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const A=u.run();if(r||x||(v?A.some((R,C)=>mi(R,T[C])):mi(A,T))){h&&h();const R=Ui;Ui=u;try{const C=[A,T===_s?void 0:v&&T[0]===_s?[]:T,p];T=A,l?l(e,3,C):e(...C)}finally{Ui=R}}}else u.run()};return o&&o(w),u=new ef(f),u.scheduler=a?()=>a(w,!1):w,p=y=>Fd(y,!1,u),h=u.onStop=()=>{const y=Zs.get(u);if(y){if(l)l(y,4);else for(const A of y)A();Zs.delete(u)}},e?i?w(!0):T=u.run():a?a(w.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function Gn(n,e=1/0,t){if(e<=0||!dt(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Dt(n))Gn(n.value,e,t);else if(Oe(n))for(let i=0;i<n.length;i++)Gn(n[i],e,t);else if(Wu(n)||hr(n))n.forEach(i=>{Gn(i,e,t)});else if(Yu(n)){for(const i in n)Gn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gn(n[i],e,t)}return n}function as(n,e,t,i){try{return i?n(...i):n()}catch(r){ha(r,e,t)}}function gn(n,e,t,i){if(ke(n)){const r=as(n,e,t,i);return r&&Xu(r)&&r.catch(s=>{ha(s,e,t)}),r}if(Oe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(gn(n[s],e,t,i));return r}}function ha(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||lt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){$n(),as(s,null,10,[n,l,c]),Kn();return}}Bd(n,t,r,i,a)}function Bd(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Ot=[];let Mn=-1;const pr=[];let ui=null,ur=0;const gf=Promise.resolve();let Js=null;function zd(n){const e=Js||gf;return n?e.then(this?n.bind(this):n):e}function Vd(n){let e=Mn+1,t=Ot.length;for(;e<t;){const i=e+t>>>1,r=Ot[i],s=jr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Gl(n){if(!(n.flags&1)){const e=jr(n),t=Ot[Ot.length-1];!t||!(n.flags&2)&&e>=jr(t)?Ot.push(n):Ot.splice(Vd(e),0,n),n.flags|=1,_f()}}function _f(){Js||(Js=gf.then(vf))}function Hd(n){Oe(n)?pr.push(...n):ui&&n.id===-1?ui.splice(ur+1,0,n):n.flags&1||(pr.push(n),n.flags|=1),_f()}function gc(n,e,t=Mn+1){for(;t<Ot.length;t++){const i=Ot[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Ot.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function xf(n){if(pr.length){const e=[...new Set(pr)].sort((t,i)=>jr(t)-jr(i));if(pr.length=0,ui){ui.push(...e);return}for(ui=e,ur=0;ur<ui.length;ur++){const t=ui[ur];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}ui=null,ur=0}}const jr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function vf(n){try{for(Mn=0;Mn<Ot.length;Mn++){const e=Ot[Mn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),as(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Mn<Ot.length;Mn++){const e=Ot[Mn];e&&(e.flags&=-2)}Mn=-1,Ot.length=0,xf(),Js=null,(Ot.length||pr.length)&&vf()}}let on=null,Sf=null;function Qs(n){const e=on;return on=n,Sf=n&&n.type.__scopeId||null,e}function Mf(n,e=on,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&na(-1);const s=Qs(e);let a;try{a=n(...r)}finally{Qs(s),i._d&&na(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Gd(n,e){if(on===null)return n;const t=xa(on),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,a,o,l=lt]=e[r];s&&(ke(s)&&(s={mounted:s,updated:s}),s.deep&&Gn(a),i.push({dir:s,instance:t,value:a,oldValue:void 0,arg:o,modifiers:l}))}return n}function bi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&($n(),gn(l,t,8,[n.el,o,n,e]),Kn())}}function kd(n,e){if(Vt){let t=Vt.provides;const i=Vt.parent&&Vt.parent.provides;i===t&&(t=Vt.provides=Object.create(i)),t[n]=e}}function Gs(n,e,t=!1){const i=Jf();if(i||mr){let r=mr?mr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ke(e)?e.call(i&&i.proxy):e}}const Wd=Symbol.for("v-scx"),Xd=()=>Gs(Wd);function hi(n,e,t){return Ef(n,e,t)}function Ef(n,e,t=lt){const{immediate:i,deep:r,flush:s,once:a}=t,o=At({},t),l=e&&i||!e&&s!=="post";let c;if(Qr){if(s==="sync"){const p=Xd();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=An,p.resume=An,p.pause=An,p}}const u=Vt;o.call=(p,x,v)=>gn(p,u,x,v);let f=!1;s==="post"?o.scheduler=p=>{Zt(p,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(p,x)=>{x?p():Gl(p)}),o.augmentJob=p=>{e&&(p.flags|=4),f&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const h=Od(n,e,o);return Qr&&(c?c.push(h):l&&h()),h}function qd(n,e,t){const i=this.proxy,r=vt(n)?n.includes(".")?yf(i,n):()=>i[n]:n.bind(i,i);let s;ke(e)?s=e:(s=e.handler,t=e);const a=os(this),o=Ef(r,s.bind(i),t);return a(),o}function yf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Yd=Symbol("_vte"),bf=n=>n.__isTeleport,Vn=Symbol("_leaveCb"),xs=Symbol("_enterCb");function $d(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return kl(()=>{n.isMounted=!0}),ma(()=>{n.isUnmounting=!0}),n}const en=[Function,Array],Tf={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:en,onEnter:en,onAfterEnter:en,onEnterCancelled:en,onBeforeLeave:en,onLeave:en,onAfterLeave:en,onLeaveCancelled:en,onBeforeAppear:en,onAppear:en,onAfterAppear:en,onAppearCancelled:en},Af=n=>{const e=n.subTree;return e.component?Af(e.component):e},Kd={name:"BaseTransition",props:Tf,setup(n,{slots:e}){const t=Jf(),i=$d();return()=>{const r=e.default&&Rf(e.default(),!0);if(!r||!r.length)return;const s=wf(r),a=Je(n),{mode:o}=a;if(i.isLeaving)return Ua(s);const l=_c(s);if(!l)return Ua(s);let c=To(l,a,i,t,f=>c=f);l.type!==Bt&&Zr(l,c);let u=t.subTree&&_c(t.subTree);if(u&&u.type!==Bt&&!Fi(u,l)&&Af(t).type!==Bt){let f=To(u,a,i,t);if(Zr(u,f),o==="out-in"&&l.type!==Bt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,t.job.flags&8||t.update(),delete f.afterLeave,u=void 0},Ua(s);o==="in-out"&&l.type!==Bt?f.delayLeave=(h,p,x)=>{const v=Cf(i,u);v[String(u.key)]=u,h[Vn]=()=>{p(),h[Vn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{x(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function wf(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==Bt){e=t;break}}return e}const jd=Kd;function Cf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function To(n,e,t,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:h,onLeave:p,onAfterLeave:x,onLeaveCancelled:v,onBeforeAppear:g,onAppear:d,onAfterAppear:T,onAppearCancelled:w}=e,y=String(n.key),A=Cf(t,n),R=(_,S)=>{_&&gn(_,i,9,S)},C=(_,S)=>{const L=S[1];R(_,S),Oe(_)?_.every(U=>U.length<=1)&&L():_.length<=1&&L()},N={mode:a,persisted:o,beforeEnter(_){let S=l;if(!t.isMounted)if(s)S=g||l;else return;_[Vn]&&_[Vn](!0);const L=A[y];L&&Fi(n,L)&&L.el[Vn]&&L.el[Vn](),R(S,[_])},enter(_){let S=c,L=u,U=f;if(!t.isMounted)if(s)S=d||c,L=T||u,U=w||f;else return;let z=!1;const j=_[xs]=Z=>{z||(z=!0,Z?R(U,[_]):R(L,[_]),N.delayedLeave&&N.delayedLeave(),_[xs]=void 0)};S?C(S,[_,j]):j()},leave(_,S){const L=String(n.key);if(_[xs]&&_[xs](!0),t.isUnmounting)return S();R(h,[_]);let U=!1;const z=_[Vn]=j=>{U||(U=!0,S(),j?R(v,[_]):R(x,[_]),_[Vn]=void 0,A[L]===n&&delete A[L])};A[L]=n,p?C(p,[_,z]):z()},clone(_){const S=To(_,e,t,i,r);return r&&r(S),S}};return N}function Ua(n){if(da(n))return n=vi(n),n.children=null,n}function _c(n){if(!da(n))return bf(n.type)&&n.children?wf(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&ke(t.default))return t.default()}}function Zr(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Zr(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rf(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let a=n[s];const o=t==null?a.key:String(t)+String(a.key!=null?a.key:s);a.type===rn?(a.patchFlag&128&&r++,i=i.concat(Rf(a.children,e,o))):(e||a.type!==Bt)&&i.push(o!=null?vi(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function Pf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const ea=new WeakMap;function kr(n,e,t,i,r=!1){if(Oe(n)){n.forEach((x,v)=>kr(x,e&&(Oe(e)?e[v]:e),t,i,r));return}if(Wr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&kr(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?xa(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===lt?o.refs={}:o.refs,f=o.setupState,h=Je(f),p=f===lt?ku:x=>et(h,x);if(c!=null&&c!==l){if(xc(e),vt(c))u[c]=null,p(c)&&(f[c]=null);else if(Dt(c)){c.value=null;const x=e;x.k&&(u[x.k]=null)}}if(ke(l))as(l,o,12,[a,u]);else{const x=vt(l),v=Dt(l);if(x||v){const g=()=>{if(n.f){const d=x?p(l)?f[l]:u[l]:l.value;if(r)Oe(d)&&Pl(d,s);else if(Oe(d))d.includes(s)||d.push(s);else if(x)u[l]=[s],p(l)&&(f[l]=u[l]);else{const T=[s];l.value=T,n.k&&(u[n.k]=T)}}else x?(u[l]=a,p(l)&&(f[l]=a)):v&&(l.value=a,n.k&&(u[n.k]=a))};if(a){const d=()=>{g(),ea.delete(n)};d.id=-1,ea.set(n,d),Zt(d,t)}else xc(n),g()}}}function xc(n){const e=ea.get(n);e&&(e.flags|=8,ea.delete(n))}fa().requestIdleCallback;fa().cancelIdleCallback;const Wr=n=>!!n.type.__asyncLoader,da=n=>n.type.__isKeepAlive;function Zd(n,e){Df(n,"a",e)}function Jd(n,e){Df(n,"da",e)}function Df(n,e,t=Vt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(pa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)da(r.parent.vnode)&&Qd(i,e,t,r),r=r.parent}}function Qd(n,e,t,i){const r=pa(e,n,i,!0);Lf(()=>{Pl(i[e],r)},t)}function pa(n,e,t=Vt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{$n();const o=os(t),l=gn(e,t,n,a);return o(),Kn(),l});return i?r.unshift(s):r.push(s),s}}const ti=n=>(e,t=Vt)=>{(!Qr||n==="sp")&&pa(n,(...i)=>e(...i),t)},ep=ti("bm"),kl=ti("m"),tp=ti("bu"),np=ti("u"),ma=ti("bum"),Lf=ti("um"),ip=ti("sp"),rp=ti("rtg"),sp=ti("rtc");function ap(n,e=Vt){pa("ec",n,e)}const op=Symbol.for("v-ndc"),Ao=n=>n?Qf(n)?xa(n):Ao(n.parent):null,Xr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ao(n.parent),$root:n=>Ao(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Uf(n),$forceUpdate:n=>n.f||(n.f=()=>{Gl(n.update)}),$nextTick:n=>n.n||(n.n=zd.bind(n.proxy)),$watch:n=>qd.bind(n)}),Na=(n,e)=>n!==lt&&!n.__isScriptSetup&&et(n,e),lp={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;if(e[0]!=="$"){const h=a[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Na(i,e))return a[e]=1,i[e];if(r!==lt&&et(r,e))return a[e]=2,r[e];if(et(s,e))return a[e]=3,s[e];if(t!==lt&&et(t,e))return a[e]=4,t[e];wo&&(a[e]=0)}}const c=Xr[e];let u,f;if(c)return e==="$attrs"&&Rt(n.attrs,"get",""),c(n);if((u=o.__cssModules)&&(u=u[e]))return u;if(t!==lt&&et(t,e))return a[e]=4,t[e];if(f=l.config.globalProperties,et(f,e))return f[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Na(r,e)?(r[e]=t,!0):i!==lt&&et(i,e)?(i[e]=t,!0):et(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(t[o]||n!==lt&&o[0]!=="$"&&et(n,o)||Na(e,o)||et(s,o)||et(i,o)||et(Xr,o)||et(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:et(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function vc(n){return Oe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let wo=!0;function cp(n){const e=Uf(n),t=n.proxy,i=n.ctx;wo=!1,e.beforeCreate&&Sc(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:p,updated:x,activated:v,deactivated:g,beforeDestroy:d,beforeUnmount:T,destroyed:w,unmounted:y,render:A,renderTracked:R,renderTriggered:C,errorCaptured:N,serverPrefetch:_,expose:S,inheritAttrs:L,components:U,directives:z,filters:j}=e;if(c&&up(c,i,null),a)for(const B in a){const J=a[B];ke(J)&&(i[B]=J.bind(t))}if(r){const B=r.call(t,t);dt(B)&&(n.data=zl(B))}if(wo=!0,s)for(const B in s){const J=s[B],ge=ke(J)?J.bind(t,t):ke(J.get)?J.get.bind(t,t):An,de=!ke(J)&&ke(J.set)?J.set.bind(t):An,_e=th({get:ge,set:de});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>_e.value,set:Ne=>_e.value=Ne})}if(o)for(const B in o)If(o[B],i,t,B);if(l){const B=ke(l)?l.call(t):l;Reflect.ownKeys(B).forEach(J=>{kd(J,B[J])})}u&&Sc(u,n,"c");function X(B,J){Oe(J)?J.forEach(ge=>B(ge.bind(t))):J&&B(J.bind(t))}if(X(ep,f),X(kl,h),X(tp,p),X(np,x),X(Zd,v),X(Jd,g),X(ap,N),X(sp,R),X(rp,C),X(ma,T),X(Lf,y),X(ip,_),Oe(S))if(S.length){const B=n.exposed||(n.exposed={});S.forEach(J=>{Object.defineProperty(B,J,{get:()=>t[J],set:ge=>t[J]=ge,enumerable:!0})})}else n.exposed||(n.exposed={});A&&n.render===An&&(n.render=A),L!=null&&(n.inheritAttrs=L),U&&(n.components=U),z&&(n.directives=z),_&&Pf(n)}function up(n,e,t=An){Oe(n)&&(n=Co(n));for(const i in n){const r=n[i];let s;dt(r)?"default"in r?s=Gs(r.from||i,r.default,!0):s=Gs(r.from||i):s=Gs(r),Dt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Sc(n,e,t){gn(Oe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function If(n,e,t,i){let r=i.includes(".")?yf(t,i):()=>t[i];if(vt(n)){const s=e[n];ke(s)&&hi(r,s)}else if(ke(n))hi(r,n.bind(t));else if(dt(n))if(Oe(n))n.forEach(s=>If(s,e,t,i));else{const s=ke(n.handler)?n.handler.bind(t):e[n.handler];ke(s)&&hi(r,s,n)}}function Uf(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>ta(l,c,a,!0)),ta(l,e,a)),dt(e)&&s.set(e,l),l}function ta(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&ta(n,s,t,!0),r&&r.forEach(a=>ta(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=fp[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const fp={data:Mc,props:Ec,emits:Ec,methods:Or,computed:Or,beforeCreate:Ut,created:Ut,beforeMount:Ut,mounted:Ut,beforeUpdate:Ut,updated:Ut,beforeDestroy:Ut,beforeUnmount:Ut,destroyed:Ut,unmounted:Ut,activated:Ut,deactivated:Ut,errorCaptured:Ut,serverPrefetch:Ut,components:Or,directives:Or,watch:dp,provide:Mc,inject:hp};function Mc(n,e){return e?n?function(){return At(ke(n)?n.call(this,this):n,ke(e)?e.call(this,this):e)}:e:n}function hp(n,e){return Or(Co(n),Co(e))}function Co(n){if(Oe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function Ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Or(n,e){return n?At(Object.create(null),n,e):e}function Ec(n,e){return n?Oe(n)&&Oe(e)?[...new Set([...n,...e])]:At(Object.create(null),vc(n),vc(e??{})):e}function dp(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=Ut(n[i],e[i]);return t}function Nf(){return{app:null,config:{isNativeTag:ku,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let pp=0;function mp(n,e){return function(i,r=null){ke(i)||(i=At({},i)),r!=null&&!dt(r)&&(r=null);const s=Nf(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:pp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Kp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&ke(u.install)?(a.add(u),u.install(c,...f)):ke(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const p=c._ceVNode||bt(i,r);return p.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),n(p,u,h),l=!0,c._container=u,u.__vue_app__=c,xa(p.component)}},onUnmount(u){o.push(u)},unmount(){l&&(gn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=mr;mr=c;try{return u()}finally{mr=f}}};return c}}let mr=null;const gp=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${gi(e)}Modifiers`]||n[`${Xi(e)}Modifiers`];function _p(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||lt;let r=t;const s=e.startsWith("update:"),a=s&&gp(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>vt(u)?u.trim():u)),a.number&&(r=t.map(ed)));let o,l=i[o=Ca(e)]||i[o=Ca(gi(e))];!l&&s&&(l=i[o=Ca(Xi(e))]),l&&gn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,gn(c,n,6,r)}}const xp=new WeakMap;function Ff(n,e,t=!1){const i=t?xp:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!ke(n)){const l=c=>{const u=Ff(c,e,!0);u&&(o=!0,At(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(dt(n)&&i.set(n,null),null):(Oe(s)?s.forEach(l=>a[l]=null):At(a,s),dt(n)&&i.set(n,a),a)}function ga(n,e){return!n||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),et(n,e[0].toLowerCase()+e.slice(1))||et(n,Xi(e))||et(n,e))}function yc(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:p,ctx:x,inheritAttrs:v}=n,g=Qs(n);let d,T;try{if(t.shapeFlag&4){const y=r||i,A=y;d=En(c.call(A,y,u,f,p,h,x)),T=o}else{const y=e;d=En(y.length>1?y(f,{attrs:o,slots:a,emit:l}):y(f,null)),T=e.props?o:vp(o)}}catch(y){qr.length=0,ha(y,n,1),d=bt(Bt)}let w=d;if(T&&v!==!1){const y=Object.keys(T),{shapeFlag:A}=w;y.length&&A&7&&(s&&y.some(Rl)&&(T=Sp(T,s)),w=vi(w,T,!1,!0))}return t.dirs&&(w=vi(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(t.dirs):t.dirs),t.transition&&Zr(w,t.transition),d=w,Qs(g),d}const vp=n=>{let e;for(const t in n)(t==="class"||t==="style"||la(t))&&((e||(e={}))[t]=n[t]);return e},Sp=(n,e)=>{const t={};for(const i in n)(!Rl(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Mp(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?bc(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!ga(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?bc(i,a,c):!0:!!a;return!1}function bc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!ga(t,s))return!0}return!1}function Ep({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const Of={},Bf=()=>Object.create(Of),zf=n=>Object.getPrototypeOf(n)===Of;function yp(n,e,t,i=!1){const r={},s=Bf();n.propsDefaults=Object.create(null),Vf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Cd(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function bp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=Je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(ga(n.emitsOptions,h))continue;const p=e[h];if(l)if(et(s,h))p!==s[h]&&(s[h]=p,c=!0);else{const x=gi(h);r[x]=Ro(l,o,x,p,n,!1)}else p!==s[h]&&(s[h]=p,c=!0)}}}else{Vf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!et(e,f)&&((u=Xi(f))===f||!et(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ro(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!et(e,f))&&(delete s[f],c=!0)}c&&Hn(n.attrs,"set","")}function Vf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Vr(l))continue;const c=e[l];let u;r&&et(r,u=gi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:ga(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=Je(t),c=o||lt;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ro(r,l,f,c[f],n,!et(c,f))}}return a}function Ro(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=et(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&ke(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=os(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Xi(t))&&(i=!0))}return i}const Tp=new WeakMap;function Hf(n,e,t=!1){const i=t?Tp:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!ke(n)){const u=f=>{l=!0;const[h,p]=Hf(f,e,!0);At(a,h),p&&o.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return dt(n)&&i.set(n,fr),fr;if(Oe(s))for(let u=0;u<s.length;u++){const f=gi(s[u]);Tc(f)&&(a[f]=lt)}else if(s)for(const u in s){const f=gi(u);if(Tc(f)){const h=s[u],p=a[f]=Oe(h)||ke(h)?{type:h}:At({},h),x=p.type;let v=!1,g=!0;if(Oe(x))for(let d=0;d<x.length;++d){const T=x[d],w=ke(T)&&T.name;if(w==="Boolean"){v=!0;break}else w==="String"&&(g=!1)}else v=ke(x)&&x.name==="Boolean";p[0]=v,p[1]=g,(v||et(p,"default"))&&o.push(f)}}const c=[a,o];return dt(n)&&i.set(n,c),c}function Tc(n){return n[0]!=="$"&&!Vr(n)}const Wl=n=>n==="_"||n==="_ctx"||n==="$stable",Xl=n=>Oe(n)?n.map(En):[En(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=Mf((...r)=>Xl(e(...r)),t);return i._c=!1,i},Gf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Wl(r))continue;const s=n[r];if(ke(s))e[r]=Ap(r,s,i);else if(s!=null){const a=Xl(s);e[r]=()=>a}}},kf=(n,e)=>{const t=Xl(e);n.slots.default=()=>t},Wf=(n,e,t)=>{for(const i in e)(t||!Wl(i))&&(n[i]=e[i])},wp=(n,e,t)=>{const i=n.slots=Bf();if(n.vnode.shapeFlag&32){const r=e._;r?(Wf(i,e,t),t&&Ku(i,"_",r,!0)):Gf(e,i)}else e&&kf(n,e)},Cp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=lt;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:Wf(r,e,t):(s=!e.$stable,Gf(e,r)),a=e}else e&&(kf(n,e),a={default:1});if(s)for(const o in r)!Wl(o)&&a[o]==null&&delete r[o]},Zt=Ip;function Rp(n){return Pp(n)}function Pp(n,e){const t=fa();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:p=An,insertStaticContent:x}=n,v=(P,I,G,ee=null,$=null,ne=null,b=void 0,oe=null,ie=!!I.dynamicChildren)=>{if(P===I)return;P&&!Fi(P,I)&&(ee=ae(P),Ne(P,$,ne,!0),P=null),I.patchFlag===-2&&(ie=!1,I.dynamicChildren=null);const{type:Q,ref:re,shapeFlag:M}=I;switch(Q){case _a:g(P,I,G,ee);break;case Bt:d(P,I,G,ee);break;case Oa:P==null&&T(I,G,ee,b);break;case rn:U(P,I,G,ee,$,ne,b,oe,ie);break;default:M&1?A(P,I,G,ee,$,ne,b,oe,ie):M&6?z(P,I,G,ee,$,ne,b,oe,ie):(M&64||M&128)&&Q.process(P,I,G,ee,$,ne,b,oe,ie,Ce)}re!=null&&$?kr(re,P&&P.ref,ne,I||P,!I):re==null&&P&&P.ref!=null&&kr(P.ref,null,ne,P,!0)},g=(P,I,G,ee)=>{if(P==null)i(I.el=o(I.children),G,ee);else{const $=I.el=P.el;I.children!==P.children&&c($,I.children)}},d=(P,I,G,ee)=>{P==null?i(I.el=l(I.children||""),G,ee):I.el=P.el},T=(P,I,G,ee)=>{[P.el,P.anchor]=x(P.children,I,G,ee,P.el,P.anchor)},w=({el:P,anchor:I},G,ee)=>{let $;for(;P&&P!==I;)$=h(P),i(P,G,ee),P=$;i(I,G,ee)},y=({el:P,anchor:I})=>{let G;for(;P&&P!==I;)G=h(P),r(P),P=G;r(I)},A=(P,I,G,ee,$,ne,b,oe,ie)=>{if(I.type==="svg"?b="svg":I.type==="math"&&(b="mathml"),P==null)R(I,G,ee,$,ne,b,oe,ie);else{const Q=P.el&&P.el._isVueCE?P.el:null;try{Q&&Q._beginPatch(),_(P,I,$,ne,b,oe,ie)}finally{Q&&Q._endPatch()}}},R=(P,I,G,ee,$,ne,b,oe)=>{let ie,Q;const{props:re,shapeFlag:M,transition:m,dirs:D}=P;if(ie=P.el=a(P.type,ne,re&&re.is,re),M&8?u(ie,P.children):M&16&&N(P.children,ie,null,ee,$,Fa(P,ne),b,oe),D&&bi(P,null,ee,"created"),C(ie,P,P.scopeId,b,ee),re){for(const K in re)K!=="value"&&!Vr(K)&&s(ie,K,null,re[K],ne,ee);"value"in re&&s(ie,"value",null,re.value,ne),(Q=re.onVnodeBeforeMount)&&vn(Q,ee,P)}D&&bi(P,null,ee,"beforeMount");const k=Dp($,m);k&&m.beforeEnter(ie),i(ie,I,G),((Q=re&&re.onVnodeMounted)||k||D)&&Zt(()=>{Q&&vn(Q,ee,P),k&&m.enter(ie),D&&bi(P,null,ee,"mounted")},$)},C=(P,I,G,ee,$)=>{if(G&&p(P,G),ee)for(let ne=0;ne<ee.length;ne++)p(P,ee[ne]);if($){let ne=$.subTree;if(I===ne||$f(ne.type)&&(ne.ssContent===I||ne.ssFallback===I)){const b=$.vnode;C(P,b,b.scopeId,b.slotScopeIds,$.parent)}}},N=(P,I,G,ee,$,ne,b,oe,ie=0)=>{for(let Q=ie;Q<P.length;Q++){const re=P[Q]=oe?fi(P[Q]):En(P[Q]);v(null,re,I,G,ee,$,ne,b,oe)}},_=(P,I,G,ee,$,ne,b)=>{const oe=I.el=P.el;let{patchFlag:ie,dynamicChildren:Q,dirs:re}=I;ie|=P.patchFlag&16;const M=P.props||lt,m=I.props||lt;let D;if(G&&Ti(G,!1),(D=m.onVnodeBeforeUpdate)&&vn(D,G,I,P),re&&bi(I,P,G,"beforeUpdate"),G&&Ti(G,!0),(M.innerHTML&&m.innerHTML==null||M.textContent&&m.textContent==null)&&u(oe,""),Q?S(P.dynamicChildren,Q,oe,G,ee,Fa(I,$),ne):b||J(P,I,oe,null,G,ee,Fa(I,$),ne,!1),ie>0){if(ie&16)L(oe,M,m,G,$);else if(ie&2&&M.class!==m.class&&s(oe,"class",null,m.class,$),ie&4&&s(oe,"style",M.style,m.style,$),ie&8){const k=I.dynamicProps;for(let K=0;K<k.length;K++){const H=k[K],Me=M[H],ce=m[H];(ce!==Me||H==="value")&&s(oe,H,Me,ce,$,G)}}ie&1&&P.children!==I.children&&u(oe,I.children)}else!b&&Q==null&&L(oe,M,m,G,$);((D=m.onVnodeUpdated)||re)&&Zt(()=>{D&&vn(D,G,I,P),re&&bi(I,P,G,"updated")},ee)},S=(P,I,G,ee,$,ne,b)=>{for(let oe=0;oe<I.length;oe++){const ie=P[oe],Q=I[oe],re=ie.el&&(ie.type===rn||!Fi(ie,Q)||ie.shapeFlag&198)?f(ie.el):G;v(ie,Q,re,null,ee,$,ne,b,!0)}},L=(P,I,G,ee,$)=>{if(I!==G){if(I!==lt)for(const ne in I)!Vr(ne)&&!(ne in G)&&s(P,ne,I[ne],null,$,ee);for(const ne in G){if(Vr(ne))continue;const b=G[ne],oe=I[ne];b!==oe&&ne!=="value"&&s(P,ne,oe,b,$,ee)}"value"in G&&s(P,"value",I.value,G.value,$)}},U=(P,I,G,ee,$,ne,b,oe,ie)=>{const Q=I.el=P?P.el:o(""),re=I.anchor=P?P.anchor:o("");let{patchFlag:M,dynamicChildren:m,slotScopeIds:D}=I;D&&(oe=oe?oe.concat(D):D),P==null?(i(Q,G,ee),i(re,G,ee),N(I.children||[],G,re,$,ne,b,oe,ie)):M>0&&M&64&&m&&P.dynamicChildren&&P.dynamicChildren.length===m.length?(S(P.dynamicChildren,m,G,$,ne,b,oe),(I.key!=null||$&&I===$.subTree)&&Xf(P,I,!0)):J(P,I,G,re,$,ne,b,oe,ie)},z=(P,I,G,ee,$,ne,b,oe,ie)=>{I.slotScopeIds=oe,P==null?I.shapeFlag&512?$.ctx.activate(I,G,ee,b,ie):j(I,G,ee,$,ne,b,ie):Z(P,I,ie)},j=(P,I,G,ee,$,ne,b)=>{const oe=P.component=Gp(P,ee,$);if(da(P)&&(oe.ctx.renderer=Ce),kp(oe,!1,b),oe.asyncDep){if($&&$.registerDep(oe,X,b),!P.el){const ie=oe.subTree=bt(Bt);d(null,ie,I,G),P.placeholder=ie.el}}else X(oe,P,I,G,$,ne,b)},Z=(P,I,G)=>{const ee=I.component=P.component;if(Mp(P,I,G))if(ee.asyncDep&&!ee.asyncResolved){B(ee,I,G);return}else ee.next=I,ee.update();else I.el=P.el,ee.vnode=I},X=(P,I,G,ee,$,ne,b)=>{const oe=()=>{if(P.isMounted){let{next:M,bu:m,u:D,parent:k,vnode:K}=P;{const De=qf(P);if(De){M&&(M.el=K.el,B(P,M,b)),De.asyncDep.then(()=>{P.isUnmounted||oe()});return}}let H=M,Me;Ti(P,!1),M?(M.el=K.el,B(P,M,b)):M=K,m&&Ra(m),(Me=M.props&&M.props.onVnodeBeforeUpdate)&&vn(Me,k,M,K),Ti(P,!0);const ce=yc(P),be=P.subTree;P.subTree=ce,v(be,ce,f(be.el),ae(be),P,$,ne),M.el=ce.el,H===null&&Ep(P,ce.el),D&&Zt(D,$),(Me=M.props&&M.props.onVnodeUpdated)&&Zt(()=>vn(Me,k,M,K),$)}else{let M;const{el:m,props:D}=I,{bm:k,m:K,parent:H,root:Me,type:ce}=P,be=Wr(I);Ti(P,!1),k&&Ra(k),!be&&(M=D&&D.onVnodeBeforeMount)&&vn(M,H,I),Ti(P,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(ce);const De=P.subTree=yc(P);v(null,De,G,ee,P,$,ne),I.el=De.el}if(K&&Zt(K,$),!be&&(M=D&&D.onVnodeMounted)){const De=I;Zt(()=>vn(M,H,De),$)}(I.shapeFlag&256||H&&Wr(H.vnode)&&H.vnode.shapeFlag&256)&&P.a&&Zt(P.a,$),P.isMounted=!0,I=G=ee=null}};P.scope.on();const ie=P.effect=new ef(oe);P.scope.off();const Q=P.update=ie.run.bind(ie),re=P.job=ie.runIfDirty.bind(ie);re.i=P,re.id=P.uid,ie.scheduler=()=>Gl(re),Ti(P,!0),Q()},B=(P,I,G)=>{I.component=P;const ee=P.vnode.props;P.vnode=I,P.next=null,bp(P,I.props,ee,G),Cp(P,I.children,G),$n(),gc(P),Kn()},J=(P,I,G,ee,$,ne,b,oe,ie=!1)=>{const Q=P&&P.children,re=P?P.shapeFlag:0,M=I.children,{patchFlag:m,shapeFlag:D}=I;if(m>0){if(m&128){de(Q,M,G,ee,$,ne,b,oe,ie);return}else if(m&256){ge(Q,M,G,ee,$,ne,b,oe,ie);return}}D&8?(re&16&&te(Q,$,ne),M!==Q&&u(G,M)):re&16?D&16?de(Q,M,G,ee,$,ne,b,oe,ie):te(Q,$,ne,!0):(re&8&&u(G,""),D&16&&N(M,G,ee,$,ne,b,oe,ie))},ge=(P,I,G,ee,$,ne,b,oe,ie)=>{P=P||fr,I=I||fr;const Q=P.length,re=I.length,M=Math.min(Q,re);let m;for(m=0;m<M;m++){const D=I[m]=ie?fi(I[m]):En(I[m]);v(P[m],D,G,null,$,ne,b,oe,ie)}Q>re?te(P,$,ne,!0,!1,M):N(I,G,ee,$,ne,b,oe,ie,M)},de=(P,I,G,ee,$,ne,b,oe,ie)=>{let Q=0;const re=I.length;let M=P.length-1,m=re-1;for(;Q<=M&&Q<=m;){const D=P[Q],k=I[Q]=ie?fi(I[Q]):En(I[Q]);if(Fi(D,k))v(D,k,G,null,$,ne,b,oe,ie);else break;Q++}for(;Q<=M&&Q<=m;){const D=P[M],k=I[m]=ie?fi(I[m]):En(I[m]);if(Fi(D,k))v(D,k,G,null,$,ne,b,oe,ie);else break;M--,m--}if(Q>M){if(Q<=m){const D=m+1,k=D<re?I[D].el:ee;for(;Q<=m;)v(null,I[Q]=ie?fi(I[Q]):En(I[Q]),G,k,$,ne,b,oe,ie),Q++}}else if(Q>m)for(;Q<=M;)Ne(P[Q],$,ne,!0),Q++;else{const D=Q,k=Q,K=new Map;for(Q=k;Q<=m;Q++){const xe=I[Q]=ie?fi(I[Q]):En(I[Q]);xe.key!=null&&K.set(xe.key,Q)}let H,Me=0;const ce=m-k+1;let be=!1,De=0;const le=new Array(ce);for(Q=0;Q<ce;Q++)le[Q]=0;for(Q=D;Q<=M;Q++){const xe=P[Q];if(Me>=ce){Ne(xe,$,ne,!0);continue}let Te;if(xe.key!=null)Te=K.get(xe.key);else for(H=k;H<=m;H++)if(le[H-k]===0&&Fi(xe,I[H])){Te=H;break}Te===void 0?Ne(xe,$,ne,!0):(le[Te-k]=Q+1,Te>=De?De=Te:be=!0,v(xe,I[Te],G,null,$,ne,b,oe,ie),Me++)}const pe=be?Lp(le):fr;for(H=pe.length-1,Q=ce-1;Q>=0;Q--){const xe=k+Q,Te=I[xe],he=I[xe+1],Ge=xe+1<re?he.el||Yf(he):ee;le[Q]===0?v(null,Te,G,Ge,$,ne,b,oe,ie):be&&(H<0||Q!==pe[H]?_e(Te,G,Ge,2):H--)}}},_e=(P,I,G,ee,$=null)=>{const{el:ne,type:b,transition:oe,children:ie,shapeFlag:Q}=P;if(Q&6){_e(P.component.subTree,I,G,ee);return}if(Q&128){P.suspense.move(I,G,ee);return}if(Q&64){b.move(P,I,G,Ce);return}if(b===rn){i(ne,I,G);for(let M=0;M<ie.length;M++)_e(ie[M],I,G,ee);i(P.anchor,I,G);return}if(b===Oa){w(P,I,G);return}if(ee!==2&&Q&1&&oe)if(ee===0)oe.beforeEnter(ne),i(ne,I,G),Zt(()=>oe.enter(ne),$);else{const{leave:M,delayLeave:m,afterLeave:D}=oe,k=()=>{P.ctx.isUnmounted?r(ne):i(ne,I,G)},K=()=>{ne._isLeaving&&ne[Vn](!0),M(ne,()=>{k(),D&&D()})};m?m(ne,k,K):K()}else i(ne,I,G)},Ne=(P,I,G,ee=!1,$=!1)=>{const{type:ne,props:b,ref:oe,children:ie,dynamicChildren:Q,shapeFlag:re,patchFlag:M,dirs:m,cacheIndex:D}=P;if(M===-2&&($=!1),oe!=null&&($n(),kr(oe,null,G,P,!0),Kn()),D!=null&&(I.renderCache[D]=void 0),re&256){I.ctx.deactivate(P);return}const k=re&1&&m,K=!Wr(P);let H;if(K&&(H=b&&b.onVnodeBeforeUnmount)&&vn(H,I,P),re&6)at(P.component,G,ee);else{if(re&128){P.suspense.unmount(G,ee);return}k&&bi(P,null,I,"beforeUnmount"),re&64?P.type.remove(P,I,G,Ce,ee):Q&&!Q.hasOnce&&(ne!==rn||M>0&&M&64)?te(Q,I,G,!1,!0):(ne===rn&&M&384||!$&&re&16)&&te(ie,I,G),ee&&He(P)}(K&&(H=b&&b.onVnodeUnmounted)||k)&&Zt(()=>{H&&vn(H,I,P),k&&bi(P,null,I,"unmounted")},G)},He=P=>{const{type:I,el:G,anchor:ee,transition:$}=P;if(I===rn){ht(G,ee);return}if(I===Oa){y(P);return}const ne=()=>{r(G),$&&!$.persisted&&$.afterLeave&&$.afterLeave()};if(P.shapeFlag&1&&$&&!$.persisted){const{leave:b,delayLeave:oe}=$,ie=()=>b(G,ne);oe?oe(P.el,ne,ie):ie()}else ne()},ht=(P,I)=>{let G;for(;P!==I;)G=h(P),r(P),P=G;r(I)},at=(P,I,G)=>{const{bum:ee,scope:$,job:ne,subTree:b,um:oe,m:ie,a:Q}=P;Ac(ie),Ac(Q),ee&&Ra(ee),$.stop(),ne&&(ne.flags|=8,Ne(b,P,I,G)),oe&&Zt(oe,I),Zt(()=>{P.isUnmounted=!0},I)},te=(P,I,G,ee=!1,$=!1,ne=0)=>{for(let b=ne;b<P.length;b++)Ne(P[b],I,G,ee,$)},ae=P=>{if(P.shapeFlag&6)return ae(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const I=h(P.anchor||P.el),G=I&&I[Yd];return G?h(G):I};let we=!1;const Be=(P,I,G)=>{let ee;P==null?I._vnode&&(Ne(I._vnode,null,null,!0),ee=I._vnode.component):v(I._vnode||null,P,I,null,null,null,G),I._vnode=P,we||(we=!0,gc(ee),xf(),we=!1)},Ce={p:v,um:Ne,m:_e,r:He,mt:j,mc:N,pc:J,pbc:S,n:ae,o:n};return{render:Be,hydrate:void 0,createApp:mp(Be)}}function Fa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ti({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Dp(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Xf(n,e,t=!1){const i=n.children,r=e.children;if(Oe(i)&&Oe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=fi(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&Xf(a,o)),o.type===_a&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(n.type===rn?1:0)),o.type===Bt&&!o.el&&(o.el=a.el)}}function Lp(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function qf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:qf(e)}function Ac(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Yf(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Yf(e.subTree):null}const $f=n=>n.__isSuspense;function Ip(n,e){e&&e.pendingBranch?Oe(n)?e.effects.push(...n):e.effects.push(n):Hd(n)}const rn=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Bt=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),qr=[];let Jt=null;function xi(n=!1){qr.push(Jt=n?null:[])}function Up(){qr.pop(),Jt=qr[qr.length-1]||null}let Jr=1;function na(n,e=!1){Jr+=n,n<0&&Jt&&e&&(Jt.hasOnce=!0)}function Kf(n){return n.dynamicChildren=Jr>0?Jt||fr:null,Up(),Jr>0&&Jt&&Jt.push(n),n}function ki(n,e,t,i,r,s){return Kf(zt(n,e,t,i,r,s,!0))}function Np(n,e,t,i,r){return Kf(bt(n,e,t,i,r,!0))}function ia(n){return n?n.__v_isVNode===!0:!1}function Fi(n,e){return n.type===e.type&&n.key===e.key}const jf=({key:n})=>n??null,ks=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?vt(n)||Dt(n)||ke(n)?{i:on,r:n,k:e,f:!!t}:n:null);function zt(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&jf(e),ref:e&&ks(e),scopeId:Sf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return o?(ql(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=vt(t)?8:16),Jr>0&&!a&&Jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Jt.push(l),l}const bt=Fp;function Fp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===op)&&(n=Bt),ia(n)){const o=vi(n,e,!0);return t&&ql(o,t),Jr>0&&!s&&Jt&&(o.shapeFlag&6?Jt[Jt.indexOf(n)]=o:Jt.push(o)),o.patchFlag=-2,o}if(Yp(n)&&(n=n.__vccOpts),e){e=Op(e);let{class:o,style:l}=e;o&&!vt(o)&&(e.class=xr(o)),dt(l)&&(Hl(l)&&!Oe(l)&&(l=At({},l)),e.style=Ll(l))}const a=vt(n)?1:$f(n)?128:bf(n)?64:dt(n)?4:ke(n)?2:0;return zt(n,e,t,i,r,a,s,!0)}function Op(n){return n?Hl(n)||zf(n)?At({},n):n:null}function vi(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?zp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&jf(c),ref:e&&e.ref?t&&s?Oe(s)?s.concat(ks(e)):[s,ks(e)]:ks(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vi(n.ssContent),ssFallback:n.ssFallback&&vi(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Zr(u,l.clone(u)),u}function Bp(n=" ",e=0){return bt(_a,null,n,e)}function Zf(n="",e=!1){return e?(xi(),Np(Bt,null,n)):bt(Bt,null,n)}function En(n){return n==null||typeof n=="boolean"?bt(Bt):Oe(n)?bt(rn,null,n.slice()):ia(n)?fi(n):bt(_a,null,String(n))}function fi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vi(n)}function ql(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Oe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ql(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!zf(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ke(e)?(e={default:e,_ctx:on},t=32):(e=String(e),i&64?(t=16,e=[Bp(e)]):t=8);n.children=e,n.shapeFlag|=t}function zp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=xr([e.class,i.class]));else if(r==="style")e.style=Ll([e.style,i.style]);else if(la(r)){const s=e[r],a=i[r];a&&s!==a&&!(Oe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function vn(n,e,t,i=null){gn(n,e,7,[t,i])}const Vp=Nf();let Hp=0;function Gp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Vp,s={uid:Hp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hf(i,r),emitsOptions:Ff(i,r),emit:null,emitted:null,propsDefaults:lt,inheritAttrs:i.inheritAttrs,ctx:lt,data:lt,props:lt,attrs:lt,slots:lt,refs:lt,setupState:lt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=_p.bind(null,s),n.ce&&n.ce(s),s}let Vt=null;const Jf=()=>Vt||on;let ra,Po;{const n=fa(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",t=>Vt=t),Po=e("__VUE_SSR_SETTERS__",t=>Qr=t)}const os=n=>{const e=Vt;return ra(n),n.scope.on(),()=>{n.scope.off(),ra(e)}},wc=()=>{Vt&&Vt.scope.off(),ra(null)};function Qf(n){return n.vnode.shapeFlag&4}let Qr=!1;function kp(n,e=!1,t=!1){e&&Po(e);const{props:i,children:r}=n.vnode,s=Qf(n);yp(n,i,s,e),wp(n,r,t||e);const a=s?Wp(n,e):void 0;return e&&Po(!1),a}function Wp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,lp);const{setup:i}=t;if(i){$n();const r=n.setupContext=i.length>1?qp(n):null,s=os(n),a=as(i,n,0,[n.props,r]),o=Xu(a);if(Kn(),s(),(o||n.sp)&&!Wr(n)&&Pf(n),o){if(a.then(wc,wc),e)return a.then(l=>{Cc(n,l)}).catch(l=>{ha(l,n,0)});n.asyncDep=a}else Cc(n,a)}else eh(n)}function Cc(n,e,t){ke(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:dt(e)&&(n.setupState=mf(e)),eh(n)}function eh(n,e,t){const i=n.type;n.render||(n.render=i.render||An);{const r=os(n);$n();try{cp(n)}finally{Kn(),r()}}}const Xp={get(n,e){return Rt(n,"get",""),n[e]}};function qp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Xp),slots:n.slots,emit:n.emit,expose:e}}function xa(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(mf(Rd(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Xr)return Xr[t](n)},has(e,t){return t in e||t in Xr}})):n.proxy}function Yp(n){return ke(n)&&"__vccOpts"in n}const th=(n,e)=>Nd(n,e,Qr);function $p(n,e,t){try{na(-1);const i=arguments.length;return i===2?dt(e)&&!Oe(e)?ia(e)?bt(n,null,[e]):bt(n,e):bt(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&ia(t)&&(t=[t]),bt(n,e,t))}finally{na(1)}}const Kp="3.5.26";let Do;const Rc=typeof window<"u"&&window.trustedTypes;if(Rc)try{Do=Rc.createPolicy("vue",{createHTML:n=>n})}catch{}const nh=Do?n=>Do.createHTML(n):n=>n,jp="http://www.w3.org/2000/svg",Zp="http://www.w3.org/1998/Math/MathML",zn=typeof document<"u"?document:null,Pc=zn&&zn.createElement("template"),Jp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?zn.createElementNS(jp,n):e==="mathml"?zn.createElementNS(Zp,n):t?zn.createElement(n,{is:t}):zn.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>zn.createTextNode(n),createComment:n=>zn.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>zn.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Pc.innerHTML=nh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=Pc.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ni="transition",Cr="animation",es=Symbol("_vtc"),ih={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qp=At({},Tf,ih),em=n=>(n.displayName="Transition",n.props=Qp,n),tm=em((n,{slots:e})=>$p(jd,nm(n),e)),Ai=(n,e=[])=>{Oe(n)?n.forEach(t=>t(...e)):n&&n(...e)},Dc=n=>n?Oe(n)?n.some(e=>e.length>1):n.length>1:!1;function nm(n){const e={};for(const U in n)U in ih||(e[U]=n[U]);if(n.css===!1)return e;const{name:t="v",type:i,duration:r,enterFromClass:s=`${t}-enter-from`,enterActiveClass:a=`${t}-enter-active`,enterToClass:o=`${t}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${t}-leave-from`,leaveActiveClass:h=`${t}-leave-active`,leaveToClass:p=`${t}-leave-to`}=n,x=im(r),v=x&&x[0],g=x&&x[1],{onBeforeEnter:d,onEnter:T,onEnterCancelled:w,onLeave:y,onLeaveCancelled:A,onBeforeAppear:R=d,onAppear:C=T,onAppearCancelled:N=w}=e,_=(U,z,j,Z)=>{U._enterCancelled=Z,wi(U,z?u:o),wi(U,z?c:a),j&&j()},S=(U,z)=>{U._isLeaving=!1,wi(U,f),wi(U,p),wi(U,h),z&&z()},L=U=>(z,j)=>{const Z=U?C:T,X=()=>_(z,U,j);Ai(Z,[z,X]),Lc(()=>{wi(z,U?l:s),In(z,U?u:o),Dc(Z)||Ic(z,i,v,X)})};return At(e,{onBeforeEnter(U){Ai(d,[U]),In(U,s),In(U,a)},onBeforeAppear(U){Ai(R,[U]),In(U,l),In(U,c)},onEnter:L(!1),onAppear:L(!0),onLeave(U,z){U._isLeaving=!0;const j=()=>S(U,z);In(U,f),U._enterCancelled?(In(U,h),Fc(U)):(Fc(U),In(U,h)),Lc(()=>{U._isLeaving&&(wi(U,f),In(U,p),Dc(y)||Ic(U,i,g,j))}),Ai(y,[U,j])},onEnterCancelled(U){_(U,!1,void 0,!0),Ai(w,[U])},onAppearCancelled(U){_(U,!0,void 0,!0),Ai(N,[U])},onLeaveCancelled(U){S(U),Ai(A,[U])}})}function im(n){if(n==null)return null;if(dt(n))return[Ba(n.enter),Ba(n.leave)];{const e=Ba(n);return[e,e]}}function Ba(n){return td(n)}function In(n,e){e.split(/\s+/).forEach(t=>t&&n.classList.add(t)),(n[es]||(n[es]=new Set)).add(e)}function wi(n,e){e.split(/\s+/).forEach(i=>i&&n.classList.remove(i));const t=n[es];t&&(t.delete(e),t.size||(n[es]=void 0))}function Lc(n){requestAnimationFrame(()=>{requestAnimationFrame(n)})}let rm=0;function Ic(n,e,t,i){const r=n._endId=++rm,s=()=>{r===n._endId&&i()};if(t!=null)return setTimeout(s,t);const{type:a,timeout:o,propCount:l}=sm(n,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{n.removeEventListener(c,h),s()},h=p=>{p.target===n&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),n.addEventListener(c,h)}function sm(n,e){const t=window.getComputedStyle(n),i=x=>(t[x]||"").split(", "),r=i(`${ni}Delay`),s=i(`${ni}Duration`),a=Uc(r,s),o=i(`${Cr}Delay`),l=i(`${Cr}Duration`),c=Uc(o,l);let u=null,f=0,h=0;e===ni?a>0&&(u=ni,f=a,h=s.length):e===Cr?c>0&&(u=Cr,f=c,h=l.length):(f=Math.max(a,c),u=f>0?a>c?ni:Cr:null,h=u?u===ni?s.length:l.length:0);const p=u===ni&&/\b(?:transform|all)(?:,|$)/.test(i(`${ni}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:p}}function Uc(n,e){for(;n.length<e.length;)n=n.concat(n);return Math.max(...e.map((t,i)=>Nc(t)+Nc(n[i])))}function Nc(n){return n==="auto"?0:Number(n.slice(0,-1).replace(",","."))*1e3}function Fc(n){return(n?n.ownerDocument:document).body.offsetHeight}function am(n,e,t){const i=n[es];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const sa=Symbol("_vod"),rh=Symbol("_vsh"),om={name:"show",beforeMount(n,{value:e},{transition:t}){n[sa]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):Rr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),Rr(n,!0),i.enter(n)):i.leave(n,()=>{Rr(n,!1)}):Rr(n,e))},beforeUnmount(n,{value:e}){Rr(n,e)}};function Rr(n,e){n.style.display=e?n[sa]:"none",n[rh]=!e}const lm=Symbol(""),cm=/(?:^|;)\s*display\s*:/;function um(n,e,t){const i=n.style,r=vt(t);let s=!1;if(t&&!r){if(e)if(vt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ws(i,o,"")}else for(const a in e)t[a]==null&&Ws(i,a,"");for(const a in t)a==="display"&&(s=!0),Ws(i,a,t[a])}else if(r){if(e!==t){const a=i[lm];a&&(t+=";"+a),i.cssText=t,s=cm.test(t)}}else e&&n.removeAttribute("style");sa in n&&(n[sa]=s?i.display:"",n[rh]&&(i.display="none"))}const Oc=/\s*!important$/;function Ws(n,e,t){if(Oe(t))t.forEach(i=>Ws(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=fm(n,e);Oc.test(t)?n.setProperty(Xi(i),t.replace(Oc,""),"important"):n[i]=t}}const Bc=["Webkit","Moz","ms"],za={};function fm(n,e){const t=za[e];if(t)return t;let i=gi(e);if(i!=="filter"&&i in n)return za[e]=i;i=$u(i);for(let r=0;r<Bc.length;r++){const s=Bc[r]+i;if(s in n)return za[e]=s}return e}const zc="http://www.w3.org/1999/xlink";function Vc(n,e,t,i,r,s=od(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(zc,e.slice(6,e.length)):n.setAttributeNS(zc,e,t):t==null||s&&!ju(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Mi(t)?String(t):t)}function Hc(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?nh(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=ju(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function hm(n,e,t,i){n.addEventListener(e,t,i)}function dm(n,e,t,i){n.removeEventListener(e,t,i)}const Gc=Symbol("_vei");function pm(n,e,t,i,r=null){const s=n[Gc]||(n[Gc]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=mm(e);if(i){const c=s[e]=xm(i,r);hm(n,o,c,l)}else a&&(dm(n,o,a,l),s[e]=void 0)}}const kc=/(?:Once|Passive|Capture)$/;function mm(n){let e;if(kc.test(n)){e={};let i;for(;i=n.match(kc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Xi(n.slice(2)),e]}let Va=0;const gm=Promise.resolve(),_m=()=>Va||(gm.then(()=>Va=0),Va=Date.now());function xm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;gn(vm(i,t.value),e,5,[i])};return t.value=n,t.attached=_m(),t}function vm(n,e){if(Oe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Wc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Sm=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?am(n,i,a):e==="style"?um(n,t,i):la(e)?Rl(e)||pm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Mm(n,e,i,a))?(Hc(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Vc(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!vt(i))?Hc(n,gi(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Vc(n,e,i,a))};function Mm(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Wc(e)&&ke(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Wc(e)&&vt(t)?!1:e in n}const Em=At({patchProp:Sm},Jp);let Xc;function ym(){return Xc||(Xc=Rp(Em))}const bm=((...n)=>{const e=ym().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Am(i);if(!r)return;const s=e._component;!ke(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Tm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e});function Tm(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Am(n){return vt(n)?document.querySelector(n):n}const Yl="182",wm=0,qc=1,Cm=2,Xs=1,Rm=2,Br=3,Si=0,Xt=1,kn=2,Xn=0,gr=1,Lo=2,Yc=3,$c=4,Pm=5,Oi=100,Dm=101,Lm=102,Im=103,Um=104,Nm=200,Fm=201,Om=202,Bm=203,Io=204,Uo=205,zm=206,Vm=207,Hm=208,Gm=209,km=210,Wm=211,Xm=212,qm=213,Ym=214,No=0,Fo=1,Oo=2,vr=3,Bo=4,zo=5,Vo=6,Ho=7,sh=0,$m=1,Km=2,wn=0,ah=1,oh=2,lh=3,ch=4,uh=5,fh=6,hh=7,dh=300,Wi=301,Sr=302,Go=303,ko=304,va=306,Wo=1e3,Wn=1001,Xo=1002,Tt=1003,jm=1004,vs=1005,Pt=1006,Ha=1007,zi=1008,an=1009,ph=1010,mh=1011,ts=1012,$l=1013,Rn=1014,bn=1015,Zn=1016,Kl=1017,jl=1018,ns=1020,gh=35902,_h=35899,xh=1021,vh=1022,dn=1023,Jn=1026,Vi=1027,Sh=1028,Zl=1029,Mr=1030,Jl=1031,Ql=1033,qs=33776,Ys=33777,$s=33778,Ks=33779,qo=35840,Yo=35841,$o=35842,Ko=35843,jo=36196,Zo=37492,Jo=37496,Qo=37488,el=37489,tl=37490,nl=37491,il=37808,rl=37809,sl=37810,al=37811,ol=37812,ll=37813,cl=37814,ul=37815,fl=37816,hl=37817,dl=37818,pl=37819,ml=37820,gl=37821,_l=36492,xl=36494,vl=36495,Sl=36283,Ml=36284,El=36285,yl=36286,Zm=3200,Jm=0,Qm=1,di="",nn="srgb",Er="srgb-linear",aa="linear",it="srgb",$i=7680,Kc=519,eg=512,tg=513,ng=514,ec=515,ig=516,rg=517,tc=518,sg=519,jc=35044,Zc="300 es",Tn=2e3,oa=2001;function Mh(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ag(){const n=is("canvas");return n.style.display="block",n}const Jc={};function Qc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Ve(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Ze(...n){const e="THREE."+n.shift();console.error(e,...n)}function rs(...n){const e=n.join(" ");e in Jc||(Jc[e]=!0,Ve(...n))}function og(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ga=Math.PI/180,bl=180/Math.PI;function ls(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(wt[n&255]+wt[n>>8&255]+wt[n>>16&255]+wt[n>>24&255]+"-"+wt[e&255]+wt[e>>8&255]+"-"+wt[e>>16&15|64]+wt[e>>24&255]+"-"+wt[t&63|128]+wt[t>>8&255]+"-"+wt[t>>16&255]+wt[t>>24&255]+wt[i&255]+wt[i>>8&255]+wt[i>>16&255]+wt[i>>24&255]).toLowerCase()}function Ye(n,e,t){return Math.max(e,Math.min(t,n))}function lg(n,e){return(n%e+e)%e}function ka(n,e,t){return(1-t)*n+t*e}function Pr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a+0],p=s[a+1],x=s[a+2],v=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=v;return}if(f!==v||l!==h||c!==p||u!==x){let g=l*h+c*p+u*x+f*v;g<0&&(h=-h,p=-p,x=-x,v=-v,g=-g);let d=1-o;if(g<.9995){const T=Math.acos(g),w=Math.sin(T);d=Math.sin(d*T)/w,o=Math.sin(o*T)/w,l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+v*o}else{l=l*d+h*o,c=c*d+p*o,u=u*d+x*o,f=f*d+v*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],p=s[a+2],x=s[a+3];return e[t]=o*x+u*f+l*p-c*h,e[t+1]=l*x+u*h+c*f-o*p,e[t+2]=c*x+u*p+o*h-l*f,e[t+3]=u*x-o*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"YXZ":this._x=h*u*f+c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"ZXY":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f-h*p*x;break;case"ZYX":this._x=h*u*f-c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f+h*p*x;break;case"YZX":this._x=h*u*f+c*p*x,this._y=c*p*f+h*u*x,this._z=c*u*x-h*p*f,this._w=c*u*f-h*p*x;break;case"XZY":this._x=h*u*f-c*p*x,this._y=c*p*f-h*u*x,this._z=c*u*x+h*p*f,this._w=c*u*f+h*p*x;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(i>o&&i>f){const p=2*Math.sqrt(1+i-o-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-i-f);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Wa.copy(this).projectOnVector(e),this.sub(Wa)}reflect(e){return this.sub(Wa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ye(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wa=new W,eu=new cs;class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],x=i[8],v=r[0],g=r[3],d=r[6],T=r[1],w=r[4],y=r[7],A=r[2],R=r[5],C=r[8];return s[0]=a*v+o*T+l*A,s[3]=a*g+o*w+l*R,s[6]=a*d+o*y+l*C,s[1]=c*v+u*T+f*A,s[4]=c*g+u*w+f*R,s[7]=c*d+u*y+f*C,s[2]=h*v+p*T+x*A,s[5]=h*g+p*w+x*R,s[8]=h*d+p*y+x*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,p=c*s-a*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/x;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=h*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Xa.makeScale(e,t)),this}rotate(e){return this.premultiply(Xa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xa=new We,tu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nu=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cg(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===it&&(r.r=qn(r.r),r.g=qn(r.g),r.b=qn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(r.r=_r(r.r),r.g=_r(r.g),r.b=_r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===di?aa:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:it,toXYZ:tu,fromXYZ:nu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const Ke=cg();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function _r(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ki;class ug{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ki===void 0&&(Ki=is("canvas")),Ki.width=e.width,Ki.height=e.height;const r=Ki.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=qn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qn(t[i]/255)*255):t[i]=qn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class nc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ls(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(qa(r[a].image)):s.push(qa(r[a]))}else s=qa(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ug.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let hg=0;const Ya=new W;class Lt extends br{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Wn,r=Wn,s=Pt,a=zi,o=dn,l=an,c=Lt.DEFAULT_ANISOTROPY,u=di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ls(),this.name="",this.source=new nc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ya).x}get height(){return this.source.getSize(Ya).y}get depth(){return this.source.getSize(Ya).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wo:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case Xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wo:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case Xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=dh;Lt.DEFAULT_ANISOTROPY=1;class gt{constructor(e=0,t=0,i=0,r=1){gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],x=l[9],v=l[2],g=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(x-g)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(x+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(d+1)/2,R=(u+h)/4,C=(f+v)/4,N=(x+g)/4;return w>y&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=R/i,s=C/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=R/r,s=N/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=C/s,r=N/s),this.set(i,r,s,t),this}let T=Math.sqrt((g-x)*(g-x)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(g-x)/T,this.y=(f-v)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ye(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class dg extends br{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new gt(0,0,e,t),this.scissorTest=!1,this.viewport=new gt(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new Lt(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new nc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cn extends dg{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Eh extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pg extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Tt,this.minFilter=Tt,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class us{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ss.copy(i.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dr),Ms.subVectors(this.max,Dr),ji.subVectors(e.a,Dr),Zi.subVectors(e.b,Dr),Ji.subVectors(e.c,Dr),ii.subVectors(Zi,ji),ri.subVectors(Ji,Zi),Ci.subVectors(ji,Ji);let t=[0,-ii.z,ii.y,0,-ri.z,ri.y,0,-Ci.z,Ci.y,ii.z,0,-ii.x,ri.z,0,-ri.x,Ci.z,0,-Ci.x,-ii.y,ii.x,0,-ri.y,ri.x,0,-Ci.y,Ci.x,0];return!$a(t,ji,Zi,Ji,Ms)||(t=[1,0,0,0,1,0,0,0,1],!$a(t,ji,Zi,Ji,Ms))?!1:(Es.crossVectors(ii,ri),t=[Es.x,Es.y,Es.z],$a(t,ji,Zi,Ji,Ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Un=[new W,new W,new W,new W,new W,new W,new W,new W],cn=new W,Ss=new us,ji=new W,Zi=new W,Ji=new W,ii=new W,ri=new W,Ci=new W,Dr=new W,Ms=new W,Es=new W,Ri=new W;function $a(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ri.fromArray(n,s);const o=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const mg=new us,Lr=new W,Ka=new W;class Sa{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):mg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Lr.subVectors(e,this.center);const t=Lr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Lr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ka.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Lr.copy(e.center).add(Ka)),this.expandByPoint(Lr.copy(e.center).sub(Ka))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Nn=new W,ja=new W,ys=new W,si=new W,Za=new W,bs=new W,Ja=new W;class yh{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){ja.copy(e).add(t).multiplyScalar(.5),ys.copy(t).sub(e).normalize(),si.copy(this.origin).sub(ja);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ys),o=si.dot(this.direction),l=-si.dot(ys),c=si.lengthSq(),u=Math.abs(1-a*a);let f,h,p,x;if(u>0)if(f=a*l-o,h=a*o-l,x=s*u,f>=0)if(h>=-x)if(h<=x){const v=1/u;f*=v,h*=v,p=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;else h<=-x?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(ja).addScaledVector(ys,h),p}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){Za.subVectors(t,e),bs.subVectors(i,e),Ja.crossVectors(Za,bs);let a=this.direction.dot(Ja),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(si,bs));if(l<0)return null;const c=o*this.direction.dot(Za.cross(si));if(c<0||l+c>a)return null;const u=-o*si.dot(Ja);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,f,h,p,x,v,g){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,p,x,v,g)}set(e,t,i,r,s,a,o,l,c,u,f,h,p,x,v,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=v,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/Qi.setFromMatrixColumn(e,0).length(),s=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+x*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=x+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,x=c*u,v=c*f;t[0]=h+v*o,t[4]=x*o-p,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=p*o-x,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,x=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=x+p*o,t[1]=p+x*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*f,x=o*u,v=o*f;t[0]=l*u,t[4]=x*c-p,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=p*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=x*f+p,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*f+x,t[10]=h-v*f}else if(e.order==="XZY"){const h=a*l,p=a*c,x=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=p*f-x,t[2]=x*f-p,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,_g)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),ai.crossVectors(i,Kt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),ai.crossVectors(i,Kt)),ai.normalize(),Ts.crossVectors(Kt,ai),r[0]=ai.x,r[4]=Ts.x,r[8]=Kt.x,r[1]=ai.y,r[5]=Ts.y,r[9]=Kt.y,r[2]=ai.z,r[6]=Ts.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],x=i[2],v=i[6],g=i[10],d=i[14],T=i[3],w=i[7],y=i[11],A=i[15],R=r[0],C=r[4],N=r[8],_=r[12],S=r[1],L=r[5],U=r[9],z=r[13],j=r[2],Z=r[6],X=r[10],B=r[14],J=r[3],ge=r[7],de=r[11],_e=r[15];return s[0]=a*R+o*S+l*j+c*J,s[4]=a*C+o*L+l*Z+c*ge,s[8]=a*N+o*U+l*X+c*de,s[12]=a*_+o*z+l*B+c*_e,s[1]=u*R+f*S+h*j+p*J,s[5]=u*C+f*L+h*Z+p*ge,s[9]=u*N+f*U+h*X+p*de,s[13]=u*_+f*z+h*B+p*_e,s[2]=x*R+v*S+g*j+d*J,s[6]=x*C+v*L+g*Z+d*ge,s[10]=x*N+v*U+g*X+d*de,s[14]=x*_+v*z+g*B+d*_e,s[3]=T*R+w*S+y*j+A*J,s[7]=T*C+w*L+y*Z+A*ge,s[11]=T*N+w*U+y*X+A*de,s[15]=T*_+w*z+y*B+A*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],x=e[3],v=e[7],g=e[11],d=e[15],T=l*p-c*h,w=o*p-c*f,y=o*h-l*f,A=a*p-c*u,R=a*h-l*u,C=a*f-o*u;return t*(v*T-g*w+d*y)-i*(x*T-g*A+d*R)+r*(x*w-v*A+d*C)-s*(x*y-v*R+g*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],x=e[12],v=e[13],g=e[14],d=e[15],T=f*g*c-v*h*c+v*l*p-o*g*p-f*l*d+o*h*d,w=x*h*c-u*g*c-x*l*p+a*g*p+u*l*d-a*h*d,y=u*v*c-x*f*c+x*o*p-a*v*p-u*o*d+a*f*d,A=x*f*l-u*v*l-x*o*h+a*v*h+u*o*g-a*f*g,R=t*T+i*w+r*y+s*A;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(v*h*s-f*g*s-v*r*p+i*g*p+f*r*d-i*h*d)*C,e[2]=(o*g*s-v*l*s+v*r*c-i*g*c-o*r*d+i*l*d)*C,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*p-i*l*p)*C,e[4]=w*C,e[5]=(u*g*s-x*h*s+x*r*p-t*g*p-u*r*d+t*h*d)*C,e[6]=(x*l*s-a*g*s-x*r*c+t*g*c+a*r*d-t*l*d)*C,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*C,e[8]=y*C,e[9]=(x*f*s-u*v*s-x*i*p+t*v*p+u*i*d-t*f*d)*C,e[10]=(a*v*s-x*o*s+x*i*c-t*v*c-a*i*d+t*o*d)*C,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*p-t*o*p)*C,e[12]=A*C,e[13]=(u*v*r-x*f*r+x*i*h-t*v*h-u*i*g+t*f*g)*C,e[14]=(x*o*r-a*v*r-x*i*l+t*v*l+a*i*g-t*o*g)*C,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,p=s*u,x=s*f,v=a*u,g=a*f,d=o*f,T=l*c,w=l*u,y=l*f,A=i.x,R=i.y,C=i.z;return r[0]=(1-(v+d))*A,r[1]=(p+y)*A,r[2]=(x-w)*A,r[3]=0,r[4]=(p-y)*R,r[5]=(1-(h+d))*R,r[6]=(g+T)*R,r[7]=0,r[8]=(x+w)*C,r[9]=(g-T)*C,r[10]=(1-(h+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),t.identity(),this;let s=Qi.set(r[0],r[1],r[2]).length();const a=Qi.set(r[4],r[5],r[6]).length(),o=Qi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),un.copy(this);const c=1/s,u=1/a,f=1/o;return un.elements[0]*=c,un.elements[1]*=c,un.elements[2]*=c,un.elements[4]*=u,un.elements[5]*=u,un.elements[6]*=u,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,t.setFromRotationMatrix(un),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(i-r),h=(t+e)/(t-e),p=(i+r)/(i-r);let x,v;if(l)x=s/(a-s),v=a*s/(a-s);else if(o===Tn)x=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===oa)x=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Tn,l=!1){const c=this.elements,u=2/(t-e),f=2/(i-r),h=-(t+e)/(t-e),p=-(i+r)/(i-r);let x,v;if(l)x=1/(a-s),v=a/(a-s);else if(o===Tn)x=-2/(a-s),v=-(a+s)/(a-s);else if(o===oa)x=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=x,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qi=new W,un=new _t,gg=new W(0,0,0),_g=new W(1,1,1),ai=new W,Ts=new W,Kt=new W,iu=new _t,ru=new cs;class Qn{constructor(e=0,t=0,i=0,r=Qn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(iu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qn.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xg=0;const su=new W,er=new cs,Fn=new _t,As=new W,Ir=new W,vg=new W,Sg=new cs,au=new W(1,0,0),ou=new W(0,1,0),lu=new W(0,0,1),cu={type:"added"},Mg={type:"removed"},tr={type:"childadded",child:null},Qa={type:"childremoved",child:null};class qt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xg++}),this.uuid=ls(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qt.DEFAULT_UP.clone();const e=new W,t=new Qn,i=new cs,r=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.multiply(er),this}rotateOnWorldAxis(e,t){return er.setFromAxisAngle(e,t),this.quaternion.premultiply(er),this}rotateX(e){return this.rotateOnAxis(au,e)}rotateY(e){return this.rotateOnAxis(ou,e)}rotateZ(e){return this.rotateOnAxis(lu,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(au,e)}translateY(e){return this.translateOnAxis(ou,e)}translateZ(e){return this.translateOnAxis(lu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?As.copy(e):As.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Ir,As,this.up):Fn.lookAt(As,Ir,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),er.setFromRotationMatrix(Fn),this.quaternion.premultiply(er.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cu),tr.child=e,this.dispatchEvent(tr),tr.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Mg),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cu),tr.child=e,this.dispatchEvent(tr),tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,vg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),p=a(e.animations),x=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}qt.DEFAULT_UP=new W(0,1,0);qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const fn=new W,On=new W,eo=new W,Bn=new W,nr=new W,ir=new W,uu=new W,to=new W,no=new W,io=new W,ro=new gt,so=new gt,ao=new gt;class hn{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),fn.subVectors(e,t),r.cross(fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){fn.subVectors(r,t),On.subVectors(i,t),eo.subVectors(e,t);const a=fn.dot(fn),o=fn.dot(On),l=fn.dot(eo),c=On.dot(On),u=On.dot(eo),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-o*u)*h,x=(a*u-o*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ro.setScalar(0),so.setScalar(0),ao.setScalar(0),ro.fromBufferAttribute(e,t),so.fromBufferAttribute(e,i),ao.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ro,s.x),a.addScaledVector(so,s.y),a.addScaledVector(ao,s.z),a}static isFrontFacing(e,t,i,r){return fn.subVectors(i,t),On.subVectors(e,t),fn.cross(On).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),fn.cross(On).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;nr.subVectors(r,i),ir.subVectors(s,i),to.subVectors(e,i);const l=nr.dot(to),c=ir.dot(to);if(l<=0&&c<=0)return t.copy(i);no.subVectors(e,r);const u=nr.dot(no),f=ir.dot(no);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(nr,a);io.subVectors(e,s);const p=nr.dot(io),x=ir.dot(io);if(x>=0&&p<=x)return t.copy(s);const v=p*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(i).addScaledVector(ir,o);const g=u*x-p*f;if(g<=0&&f-u>=0&&p-x>=0)return uu.subVectors(s,r),o=(f-u)/(f-u+(p-x)),t.copy(r).addScaledVector(uu,o);const d=1/(g+v+h);return a=v*d,o=h*d,t.copy(i).addScaledVector(nr,a).addScaledVector(ir,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},ws={h:0,s:0,l:0};function oo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ke.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=Ke.workingColorSpace){if(e=lg(e,1),t=Ye(t,0,1),i=Ye(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=oo(a,s,e+1/3),this.g=oo(a,s,e),this.b=oo(a,s,e-1/3)}return Ke.colorSpaceToWorking(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=Th[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qn(e.r),this.g=qn(e.g),this.b=qn(e.b),this}copyLinearToSRGB(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return Ke.workingToColorSpace(Ct.copy(this),e),Math.round(Ye(Ct.r*255,0,255))*65536+Math.round(Ye(Ct.g*255,0,255))*256+Math.round(Ye(Ct.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.workingToColorSpace(Ct.copy(this),t);const i=Ct.r,r=Ct.g,s=Ct.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ke.workingColorSpace){return Ke.workingToColorSpace(Ct.copy(this),t),e.r=Ct.r,e.g=Ct.g,e.b=Ct.b,e}getStyle(e=nn){Ke.workingToColorSpace(Ct.copy(this),e);const t=Ct.r,i=Ct.g,r=Ct.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(oi),this.setHSL(oi.h+e,oi.s+t,oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(oi),e.getHSL(ws);const i=ka(oi.h,ws.h,t),r=ka(oi.s,ws.s,t),s=ka(oi.l,ws.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ct=new Qe;Qe.NAMES=Th;let Eg=0;class fs extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=ls(),this.name="",this.type="Material",this.blending=gr,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Uo,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$i,this.stencilZFail=$i,this.stencilZPass=$i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Si&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Io&&(i.blendSrc=this.blendSrc),this.blendDst!==Uo&&(i.blendDst=this.blendDst),this.blendEquation!==Oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$i&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$i&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$i&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ah extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qn,this.combine=sh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new W,Cs=new st;let yg=0;class ln{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jc,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Cs.fromBufferAttribute(this,t),Cs.applyMatrix3(e),this.setXY(t,Cs.x,Cs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Pr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Pr(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Pr(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Pr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Pr(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),i=kt(i,this.array),r=kt(r,this.array),s=kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jc&&(e.usage=this.usage),e}}class wh extends ln{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ch extends ln{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Yn extends ln{constructor(e,t,i){super(new Float32Array(e),t,i)}}let bg=0;const tn=new _t,lo=new qt,rr=new W,jt=new us,Ur=new us,Et=new W;class _n extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bg++}),this.uuid=ls(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mh(e)?Ch:wh)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return lo.lookAt(e),lo.updateMatrix(),this.applyMatrix4(lo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Yn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Sa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(jt.min,Ur.min),jt.expandByPoint(Et),Et.addVectors(jt.max,Ur.max),jt.expandByPoint(Et)):(jt.expandByPoint(Ur.min),jt.expandByPoint(Ur.max))}jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Et.fromBufferAttribute(o,c),l&&(rr.fromBufferAttribute(e,c),Et.add(rr)),r=Math.max(r,i.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let N=0;N<i.count;N++)o[N]=new W,l[N]=new W;const c=new W,u=new W,f=new W,h=new st,p=new st,x=new st,v=new W,g=new W;function d(N,_,S){c.fromBufferAttribute(i,N),u.fromBufferAttribute(i,_),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,N),p.fromBufferAttribute(s,_),x.fromBufferAttribute(s,S),u.sub(c),f.sub(c),p.sub(h),x.sub(h);const L=1/(p.x*x.y-x.x*p.y);isFinite(L)&&(v.copy(u).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(L),g.copy(f).multiplyScalar(p.x).addScaledVector(u,-x.x).multiplyScalar(L),o[N].add(v),o[_].add(v),o[S].add(v),l[N].add(g),l[_].add(g),l[S].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,_=T.length;N<_;++N){const S=T[N],L=S.start,U=S.count;for(let z=L,j=L+U;z<j;z+=3)d(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const w=new W,y=new W,A=new W,R=new W;function C(N){A.fromBufferAttribute(r,N),R.copy(A);const _=o[N];w.copy(_),w.sub(A.multiplyScalar(A.dot(_))).normalize(),y.crossVectors(R,_);const L=y.dot(l[N])<0?-1:1;a.setXYZW(N,w.x,w.y,w.z,L)}for(let N=0,_=T.length;N<_;++N){const S=T[N],L=S.start,U=S.count;for(let z=L,j=L+U;z<j;z+=3)C(e.getX(z+0)),C(e.getX(z+1)),C(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new W,s=new W,a=new W,o=new W,l=new W,c=new W,u=new W,f=new W;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),v=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,x),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let p=0,x=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)h[x++]=c[p++]}return new ln(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _n,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fu=new _t,Pi=new yh,Rs=new Sa,hu=new W,Ps=new W,Ds=new W,Ls=new W,co=new W,Is=new W,du=new W,Us=new W;class ei extends qt{constructor(e=new _n,t=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Is.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(co.fromBufferAttribute(f,e),a?Is.addScaledVector(co,u):Is.addScaledVector(co.sub(t),u))}t.add(Is)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(Rs.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Rs,hu)===null||Pi.origin.distanceToSquared(hu)>(e.far-e.near)**2))&&(fu.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),w=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=w;y<A;y+=3){const R=o.getX(y),C=o.getX(y+1),N=o.getX(y+2);r=Ns(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let g=x,d=v;g<d;g+=3){const T=o.getX(g),w=o.getX(g+1),y=o.getX(g+2);r=Ns(this,a,e,i,c,u,f,T,w,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=h.length;x<v;x++){const g=h[x],d=a[g.materialIndex],T=Math.max(g.start,p.start),w=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=T,A=w;y<A;y+=3){const R=y,C=y+1,N=y+2;r=Ns(this,d,e,i,c,u,f,R,C,N),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let g=x,d=v;g<d;g+=3){const T=g,w=g+1,y=g+2;r=Ns(this,a,e,i,c,u,f,T,w,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function Tg(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Si,o),l===null)return null;Us.copy(o),Us.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Us);return c<t.near||c>t.far?null:{distance:c,point:Us.clone(),object:n}}function Ns(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Ps),n.getVertexPosition(l,Ds),n.getVertexPosition(c,Ls);const u=Tg(n,e,t,i,Ps,Ds,Ls,du);if(u){const f=new W;hn.getBarycoord(du,Ps,Ds,Ls,f),r&&(u.uv=hn.getInterpolatedAttribute(r,o,l,c,f,new st)),s&&(u.uv1=hn.getInterpolatedAttribute(s,o,l,c,f,new st)),a&&(u.normal=hn.getInterpolatedAttribute(a,o,l,c,f,new W),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new W,materialIndex:0};hn.getNormal(Ps,Ds,Ls,h.normal),u.face=h,u.barycoord=f}return u}class hs extends _n{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,a,s,0),x("z","y","x",1,-1,i,t,-e,a,s,1),x("x","z","y",1,1,e,i,t,r,a,2),x("x","z","y",1,-1,e,i,-t,r,a,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Yn(c,3)),this.setAttribute("normal",new Yn(u,3)),this.setAttribute("uv",new Yn(f,2));function x(v,g,d,T,w,y,A,R,C,N,_){const S=y/C,L=A/N,U=y/2,z=A/2,j=R/2,Z=C+1,X=N+1;let B=0,J=0;const ge=new W;for(let de=0;de<X;de++){const _e=de*L-z;for(let Ne=0;Ne<Z;Ne++){const He=Ne*S-U;ge[v]=He*T,ge[g]=_e*w,ge[d]=j,c.push(ge.x,ge.y,ge.z),ge[v]=0,ge[g]=0,ge[d]=R>0?1:-1,u.push(ge.x,ge.y,ge.z),f.push(Ne/C),f.push(1-de/N),B+=1}}for(let de=0;de<N;de++)for(let _e=0;_e<C;_e++){const Ne=h+_e+Z*de,He=h+_e+Z*(de+1),ht=h+(_e+1)+Z*(de+1),at=h+(_e+1)+Z*de;l.push(Ne,He,at),l.push(He,ht,at),J+=6}o.addGroup(p,J,_),p+=J,h+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Nt(n){const e={};for(let t=0;t<n.length;t++){const i=yr(n[t]);for(const r in i)e[r]=i[r]}return e}function Ag(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Rh(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ke.workingColorSpace}const wg={clone:yr,merge:Nt};var Cg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Cg,this.fragmentShader=Rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yr(e.uniforms),this.uniformsGroups=Ag(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ph extends qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const li=new W,pu=new st,mu=new st;class sn extends Ph{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ga*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bl*2*Math.atan(Math.tan(Ga*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(li.x,li.y).multiplyScalar(-e/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(li.x,li.y).multiplyScalar(-e/li.z)}getViewSize(e,t){return this.getViewBounds(e,pu,mu),t.subVectors(mu,pu)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ga*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const sr=-90,ar=1;class Pg extends qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(sr,ar,e,t);r.layers=this.layers,this.add(r);const s=new sn(sr,ar,e,t);s.layers=this.layers,this.add(s);const a=new sn(sr,ar,e,t);a.layers=this.layers,this.add(a);const o=new sn(sr,ar,e,t);o.layers=this.layers,this.add(o);const l=new sn(sr,ar,e,t);l.layers=this.layers,this.add(l);const c=new sn(sr,ar,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Tn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class Dh extends Lt{constructor(e=[],t=Wi,i,r,s,a,o,l,c,u){super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lh extends Cn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Dh(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hs(5,5,5),s=new Pn({name:"CubemapFromEquirect",uniforms:yr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Xn});s.uniforms.tEquirect.value=t;const a=new ei(r,s),o=t.minFilter;return t.minFilter===zi&&(t.minFilter=Pt),new Pg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Fs extends qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class uo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,i),d=this._getHandJoint(c,v);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,x=.005;c.inputState.pinching&&h>p+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Fs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ic{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=t}clone(){return new ic(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Lg extends qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qn,this.environmentIntensity=1,this.environmentRotation=new Qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ig extends Lt{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Tt,u=Tt,f,h){super(null,a,o,l,c,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const fo=new W,Ug=new W,Ng=new We;class Ni{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=fo.subVectors(i,t).cross(Ug.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(fo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Ng.getNormalMatrix(e),r=this.coplanarPoint(fo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Di=new Sa,Fg=new st(.5,.5),Os=new W;class Ih{constructor(e=new Ni,t=new Ni,i=new Ni,r=new Ni,s=new Ni,a=new Ni){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Tn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],p=s[7],x=s[8],v=s[9],g=s[10],d=s[11],T=s[12],w=s[13],y=s[14],A=s[15];if(r[0].setComponents(c-a,p-u,d-x,A-T).normalize(),r[1].setComponents(c+a,p+u,d+x,A+T).normalize(),r[2].setComponents(c+o,p+f,d+v,A+w).normalize(),r[3].setComponents(c-o,p-f,d-v,A-w).normalize(),i)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,p-h,d-g,A-y).normalize();else if(r[4].setComponents(c-l,p-h,d-g,A-y).normalize(),t===Tn)r[5].setComponents(c+l,p+h,d+g,A+y).normalize();else if(t===oa)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);const t=Fg.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Os.x=r.normal.x>0?e.max.x:e.min.x,Os.y=r.normal.y>0?e.max.y:e.min.y,Os.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Os)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uh extends fs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gu=new _t,Tl=new yh,Bs=new Sa,zs=new W;class Og extends qt{constructor(e=new _n,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bs.copy(i.boundingSphere),Bs.applyMatrix4(r),Bs.radius+=s,e.ray.intersectsSphere(Bs)===!1)return;gu.copy(r).invert(),Tl.copy(e.ray).applyMatrix4(gu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let x=h,v=p;x<v;x++){const g=c.getX(x);zs.fromBufferAttribute(f,g),_u(zs,g,l,r,e,t,this)}}else{const h=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=h,v=p;x<v;x++)zs.fromBufferAttribute(f,x),_u(zs,x,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _u(n,e,t,i,r,s,a){const o=Tl.distanceSqToPoint(n);if(o<t){const l=new W;Tl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ss extends Lt{constructor(e,t,i=Rn,r,s,a,o=Tt,l=Tt,c,u=Jn,f=1){if(u!==Jn&&u!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Bg extends ss{constructor(e,t=Rn,i=Wi,r,s,a=Tt,o=Tt,l,c=Jn){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Nh extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ma extends _n{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,p=[],x=[],v=[],g=[];for(let d=0;d<u;d++){const T=d*h-a;for(let w=0;w<c;w++){const y=w*f-s;x.push(y,-T,0),v.push(0,0,1),g.push(w/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<o;T++){const w=T+c*d,y=T+c*(d+1),A=T+1+c*(d+1),R=T+1+c*d;p.push(w,y,R),p.push(y,A,R)}this.setIndex(p),this.setAttribute("position",new Yn(x,3)),this.setAttribute("normal",new Yn(v,3)),this.setAttribute("uv",new Yn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.widthSegments,e.heightSegments)}}class zg extends Pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vg extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hg extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ho={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Gg{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],x=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const kg=new Gg;class rc{constructor(e){this.manager=e!==void 0?e:kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}rc.DEFAULT_MATERIAL_NAME="__DEFAULT";const or=new WeakMap;class Wg extends rc{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=ho.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=or.get(a);f===void 0&&(f=[],or.set(a,f)),f.push({onLoad:t,onError:r})}return a}const o=is("img");function l(){u(),t&&t(this);const f=or.get(this)||[];for(let h=0;h<f.length;h++){const p=f[h];p.onLoad&&p.onLoad(this)}or.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),ho.remove(`image:${e}`);const h=or.get(this)||[];for(let p=0;p<h.length;p++){const x=h[p];x.onError&&x.onError(f)}or.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ho.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Xg extends rc{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,a=new Wg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Fh extends Ph{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qg extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function xu(n,e,t,i){const r=Yg(i);switch(t){case xh:return n*e;case Sh:return n*e/r.components*r.byteLength;case Zl:return n*e/r.components*r.byteLength;case Mr:return n*e*2/r.components*r.byteLength;case Jl:return n*e*2/r.components*r.byteLength;case vh:return n*e*3/r.components*r.byteLength;case dn:return n*e*4/r.components*r.byteLength;case Ql:return n*e*4/r.components*r.byteLength;case qs:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:case Ks:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yo:case Ko:return Math.max(n,16)*Math.max(e,8)/4;case qo:case $o:return Math.max(n,8)*Math.max(e,8)/2;case jo:case Zo:case Qo:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jo:case tl:case nl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case al:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case _l:case xl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Sl:case Ml:return Math.ceil(n/4)*Math.ceil(e/4)*8;case El:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yg(n){switch(n){case an:case ph:return{byteLength:1,components:1};case ts:case mh:case Zn:return{byteLength:2,components:1};case Kl:case jl:return{byteLength:2,components:4};case Rn:case $l:case bn:return{byteLength:4,components:1};case gh:case _h:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yl}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yl);function Oh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function $g(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((p,x)=>p.start-x.start);let h=0;for(let p=1;p<f.length;p++){const x=f[h],v=f[p];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++h,f[h]=v)}f.length=h+1;for(let p=0,x=f.length;p<x;p++){const v=f[p];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Zg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,e_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,n_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,i_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,r_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,a_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,l_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,c_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,u_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,f_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,p_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,m_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,g_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,x_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,v_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,S_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,M_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,E_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,T_="gl_FragColor = linearToOutputTexel( gl_FragColor );",A_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,C_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,R_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,P_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,D_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,L_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,I_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,U_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,N_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,O_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,V_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,H_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,G_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,W_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,X_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,q_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,K_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,j_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Z_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,J_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,n0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,i0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,r0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,a0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,o0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,c0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,x0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,v0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,S0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,E0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,b0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,w0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,R0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,D0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,I0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,U0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,F0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,O0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,B0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,z0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,V0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,q0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,J0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,nx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ax=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,cx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,dx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,gx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ax=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xe={alphahash_fragment:Kg,alphahash_pars_fragment:jg,alphamap_fragment:Zg,alphamap_pars_fragment:Jg,alphatest_fragment:Qg,alphatest_pars_fragment:e_,aomap_fragment:t_,aomap_pars_fragment:n_,batching_pars_vertex:i_,batching_vertex:r_,begin_vertex:s_,beginnormal_vertex:a_,bsdfs:o_,iridescence_fragment:l_,bumpmap_pars_fragment:c_,clipping_planes_fragment:u_,clipping_planes_pars_fragment:f_,clipping_planes_pars_vertex:h_,clipping_planes_vertex:d_,color_fragment:p_,color_pars_fragment:m_,color_pars_vertex:g_,color_vertex:__,common:x_,cube_uv_reflection_fragment:v_,defaultnormal_vertex:S_,displacementmap_pars_vertex:M_,displacementmap_vertex:E_,emissivemap_fragment:y_,emissivemap_pars_fragment:b_,colorspace_fragment:T_,colorspace_pars_fragment:A_,envmap_fragment:w_,envmap_common_pars_fragment:C_,envmap_pars_fragment:R_,envmap_pars_vertex:P_,envmap_physical_pars_fragment:H_,envmap_vertex:D_,fog_vertex:L_,fog_pars_vertex:I_,fog_fragment:U_,fog_pars_fragment:N_,gradientmap_pars_fragment:F_,lightmap_pars_fragment:O_,lights_lambert_fragment:B_,lights_lambert_pars_fragment:z_,lights_pars_begin:V_,lights_toon_fragment:G_,lights_toon_pars_fragment:k_,lights_phong_fragment:W_,lights_phong_pars_fragment:X_,lights_physical_fragment:q_,lights_physical_pars_fragment:Y_,lights_fragment_begin:$_,lights_fragment_maps:K_,lights_fragment_end:j_,logdepthbuf_fragment:Z_,logdepthbuf_pars_fragment:J_,logdepthbuf_pars_vertex:Q_,logdepthbuf_vertex:e0,map_fragment:t0,map_pars_fragment:n0,map_particle_fragment:i0,map_particle_pars_fragment:r0,metalnessmap_fragment:s0,metalnessmap_pars_fragment:a0,morphinstance_vertex:o0,morphcolor_vertex:l0,morphnormal_vertex:c0,morphtarget_pars_vertex:u0,morphtarget_vertex:f0,normal_fragment_begin:h0,normal_fragment_maps:d0,normal_pars_fragment:p0,normal_pars_vertex:m0,normal_vertex:g0,normalmap_pars_fragment:_0,clearcoat_normal_fragment_begin:x0,clearcoat_normal_fragment_maps:v0,clearcoat_pars_fragment:S0,iridescence_pars_fragment:M0,opaque_fragment:E0,packing:y0,premultiplied_alpha_fragment:b0,project_vertex:T0,dithering_fragment:A0,dithering_pars_fragment:w0,roughnessmap_fragment:C0,roughnessmap_pars_fragment:R0,shadowmap_pars_fragment:P0,shadowmap_pars_vertex:D0,shadowmap_vertex:L0,shadowmask_pars_fragment:I0,skinbase_vertex:U0,skinning_pars_vertex:N0,skinning_vertex:F0,skinnormal_vertex:O0,specularmap_fragment:B0,specularmap_pars_fragment:z0,tonemapping_fragment:V0,tonemapping_pars_fragment:H0,transmission_fragment:G0,transmission_pars_fragment:k0,uv_pars_fragment:W0,uv_pars_vertex:X0,uv_vertex:q0,worldpos_vertex:Y0,background_vert:$0,background_frag:K0,backgroundCube_vert:j0,backgroundCube_frag:Z0,cube_vert:J0,cube_frag:Q0,depth_vert:ex,depth_frag:tx,distance_vert:nx,distance_frag:ix,equirect_vert:rx,equirect_frag:sx,linedashed_vert:ax,linedashed_frag:ox,meshbasic_vert:lx,meshbasic_frag:cx,meshlambert_vert:ux,meshlambert_frag:fx,meshmatcap_vert:hx,meshmatcap_frag:dx,meshnormal_vert:px,meshnormal_frag:mx,meshphong_vert:gx,meshphong_frag:_x,meshphysical_vert:xx,meshphysical_frag:vx,meshtoon_vert:Sx,meshtoon_frag:Mx,points_vert:Ex,points_frag:yx,shadow_vert:bx,shadow_frag:Tx,sprite_vert:Ax,sprite_frag:wx},Se={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},yn={basic:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Nt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Nt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Nt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Nt([Se.points,Se.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Nt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Nt([Se.common,Se.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Nt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Nt([Se.sprite,Se.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:Nt([Se.common,Se.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:Nt([Se.lights,Se.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};yn.physical={uniforms:Nt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Vs={r:0,b:0,g:0},Li=new Qn,Cx=new _t;function Rx(n,e,t,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function x(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function v(w){let y=!1;const A=x(w);A===null?d(o,l):A&&A.isColor&&(d(A,1),y=!0);const R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(w,y){const A=x(y);A&&(A.isCubeTexture||A.mapping===va)?(u===void 0&&(u=new ei(new hs(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:yr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(y.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=A,u.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Cx.makeRotationFromEuler(Li)),u.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,(f!==A||h!==A.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new ei(new Ma(2,2),new Pn({name:"BackgroundMaterial",uniforms:yr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Ke.getTransfer(A.colorSpace)!==it,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||h!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=A,h=A.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function d(w,y){w.getRGB(Vs,Rh(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,y,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,d(o,l)},render:v,addToRenderList:g,dispose:T}}function Px(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(S,L,U,z,j){let Z=!1;const X=f(z,U,L);s!==X&&(s=X,c(s.object)),Z=p(S,z,U,j),Z&&x(S,z,U,j),j!==null&&e.update(j,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(S,L,U,z),j!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return n.createVertexArray()}function c(S){return n.bindVertexArray(S)}function u(S){return n.deleteVertexArray(S)}function f(S,L,U){const z=U.wireframe===!0;let j=i[S.id];j===void 0&&(j={},i[S.id]=j);let Z=j[L.id];Z===void 0&&(Z={},j[L.id]=Z);let X=Z[z];return X===void 0&&(X=h(l()),Z[z]=X),X}function h(S){const L=[],U=[],z=[];for(let j=0;j<t;j++)L[j]=0,U[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:z,object:S,attributes:{},index:null}}function p(S,L,U,z){const j=s.attributes,Z=L.attributes;let X=0;const B=U.getAttributes();for(const J in B)if(B[J].location>=0){const de=j[J];let _e=Z[J];if(_e===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),de===void 0||de.attribute!==_e||_e&&de.data!==_e.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function x(S,L,U,z){const j={},Z=L.attributes;let X=0;const B=U.getAttributes();for(const J in B)if(B[J].location>=0){let de=Z[J];de===void 0&&(J==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),J==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const _e={};_e.attribute=de,de&&de.data&&(_e.data=de.data),j[J]=_e,X++}s.attributes=j,s.attributesNum=X,s.index=z}function v(){const S=s.newAttributes;for(let L=0,U=S.length;L<U;L++)S[L]=0}function g(S){d(S,0)}function d(S,L){const U=s.newAttributes,z=s.enabledAttributes,j=s.attributeDivisors;U[S]=1,z[S]===0&&(n.enableVertexAttribArray(S),z[S]=1),j[S]!==L&&(n.vertexAttribDivisor(S,L),j[S]=L)}function T(){const S=s.newAttributes,L=s.enabledAttributes;for(let U=0,z=L.length;U<z;U++)L[U]!==S[U]&&(n.disableVertexAttribArray(U),L[U]=0)}function w(S,L,U,z,j,Z,X){X===!0?n.vertexAttribIPointer(S,L,U,j,Z):n.vertexAttribPointer(S,L,U,z,j,Z)}function y(S,L,U,z){v();const j=z.attributes,Z=U.getAttributes(),X=L.defaultAttributeValues;for(const B in Z){const J=Z[B];if(J.location>=0){let ge=j[B];if(ge===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ge=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ge=S.instanceColor)),ge!==void 0){const de=ge.normalized,_e=ge.itemSize,Ne=e.get(ge);if(Ne===void 0)continue;const He=Ne.buffer,ht=Ne.type,at=Ne.bytesPerElement,te=ht===n.INT||ht===n.UNSIGNED_INT||ge.gpuType===$l;if(ge.isInterleavedBufferAttribute){const ae=ge.data,we=ae.stride,Be=ge.offset;if(ae.isInstancedInterleavedBuffer){for(let Ce=0;Ce<J.locationSize;Ce++)d(J.location+Ce,ae.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ce=0;Ce<J.locationSize;Ce++)g(J.location+Ce);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ce=0;Ce<J.locationSize;Ce++)w(J.location+Ce,_e/J.locationSize,ht,de,we*at,(Be+_e/J.locationSize*Ce)*at,te)}else{if(ge.isInstancedBufferAttribute){for(let ae=0;ae<J.locationSize;ae++)d(J.location+ae,ge.meshPerAttribute);S.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ae=0;ae<J.locationSize;ae++)g(J.location+ae);n.bindBuffer(n.ARRAY_BUFFER,He);for(let ae=0;ae<J.locationSize;ae++)w(J.location+ae,_e/J.locationSize,ht,de,_e*at,_e/J.locationSize*ae*at,te)}}else if(X!==void 0){const de=X[B];if(de!==void 0)switch(de.length){case 2:n.vertexAttrib2fv(J.location,de);break;case 3:n.vertexAttrib3fv(J.location,de);break;case 4:n.vertexAttrib4fv(J.location,de);break;default:n.vertexAttrib1fv(J.location,de)}}}}T()}function A(){N();for(const S in i){const L=i[S];for(const U in L){const z=L[U];for(const j in z)u(z[j].object),delete z[j];delete L[U]}delete i[S]}}function R(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const U in L){const z=L[U];for(const j in z)u(z[j].object),delete z[j];delete L[U]}delete i[S.id]}function C(S){for(const L in i){const U=i[L];if(U[S.id]===void 0)continue;const z=U[S.id];for(const j in z)u(z[j].object),delete z[j];delete U[S.id]}}function N(){_(),a=!0,s!==r&&(s=r,c(s.object))}function _(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:T}}function Dx(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let x=0;x<f;x++)p+=u[x];t.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<c.length;x++)a(c[x],u[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let x=0;for(let v=0;v<f;v++)x+=u[v]*h[v];t.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Lx(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==dn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const N=C===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==an&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==bn&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=n.getParameter(n.MAX_SAMPLES),R=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:R}}function Ix(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ni,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,v=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?u(null):c();else{const T=s?0:i,w=T*4;let y=d.clippingState||null;l.value=y,y=u(x,h,w,p);for(let A=0;A!==w;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,x){const v=f!==null?f.length:0;let g=null;if(v!==0){if(g=l.value,x!==!0||g===null){const d=p+v*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<d)&&(g=new Float32Array(d));for(let w=0,y=p;w!==v;++w,y+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function Ux(n){let e=new WeakMap;function t(a,o){return o===Go?a.mapping=Wi:o===ko&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Go||o===ko)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const pi=4,vu=[.125,.215,.35,.446,.526,.582],Bi=20,Nx=256,Nr=new Fh,Su=new Qe;let po=null,mo=0,go=0,_o=!1;const Fx=new W;class Mu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:a=256,position:o=Fx}=s;po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(po,mo,go),this._renderer.xr.enabled=_o,e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wi||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),po=this._renderer.getRenderTarget(),mo=this._renderer.getActiveCubeFace(),go=this._renderer.getActiveMipmapLevel(),_o=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pt,minFilter:Pt,generateMipmaps:!1,type:Zn,format:dn,colorSpace:Er,depthBuffer:!1},r=Eu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Ox(s)),this._blurMaterial=zx(s,e,t),this._ggxMaterial=Bx(s,e,t)}return r}_compileMaterial(e){const t=new ei(new _n,e);this._renderer.compile(t,Nr)}_sceneToCubeUV(e,t,i,r,s){const l=new sn(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Su),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ei(new hs,new Ah({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,g=v.material;let d=!1;const T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,d=!0):(g.color.copy(Su),d=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const A=this._cubeSize;lr(r,y*A,w>2?A:0,A,A),f.setRenderTarget(r),d&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Wi||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yu());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;lr(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Nr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,p=f*h,{_lodMax:x}=this,v=this._sizeLods[i],g=3*v*(i>x-pi?i-x+pi:0),d=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=x-t,lr(s,g,d,3*v,2*v),r.setRenderTarget(s),r.render(o,Nr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,lr(e,g,d,3*v,2*v),r.setRenderTarget(e),r.render(o,Nr)}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Bi-1),v=s/x,g=isFinite(s)?1+Math.floor(u*v):Bi;g>Bi&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Bi}`);const d=[];let T=0;for(let C=0;C<Bi;++C){const N=C/v,_=Math.exp(-N*N/2);d.push(_),C===0?T+=_:C<g&&(T+=2*_)}for(let C=0;C<d.length;C++)d[C]=d[C]/T;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=x,h.mipInt.value=w-i;const y=this._sizeLods[r],A=3*y*(r>w-pi?r-w+pi:0),R=4*(this._cubeSize-y);lr(t,A,R,3*y,2*y),l.setRenderTarget(t),l.render(f,Nr)}}function Ox(n){const e=[],t=[],i=[];let r=n;const s=n-pi+1+vu.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>n-pi?l=vu[a-n+pi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,x=6,v=3,g=2,d=1,T=new Float32Array(v*x*p),w=new Float32Array(g*x*p),y=new Float32Array(d*x*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,N=R>2?0:-1,_=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];T.set(_,v*x*R),w.set(h,g*x*R);const S=[R,R,R,R,R,R];y.set(S,d*x*R)}const A=new _n;A.setAttribute("position",new ln(T,v)),A.setAttribute("uv",new ln(w,g)),A.setAttribute("faceIndex",new ln(y,d)),i.push(new ei(A,null)),r>pi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Eu(n,e,t){const i=new Cn(n,e,t);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function lr(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Bx(n,e,t){return new Pn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nx,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ea(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function zx(n,e,t){const i=new Float32Array(Bi),r=new W(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:Bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function yu(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function bu(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ea(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function Ea(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Vx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Go||l===ko,u=l===Wi||l===Sr;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Mu(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new Mu(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Hx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&rs("WebGLRenderer: "+i+" extension not supported."),r}}}function Gx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],n.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,x=f.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let w=0,y=T.length;w<y;w+=3){const A=T[w+0],R=T[w+1],C=T[w+2];h.push(A,R,R,C,C,A)}}else if(x!==void 0){const T=x.array;v=x.version;for(let w=0,y=T.length/3-1;w<y;w+=3){const A=w+0,R=w+1,C=w+2;h.push(A,R,R,C,C,A)}}else return;const g=new(Mh(h)?Ch:wh)(h,1);g.version=v;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function kx(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*a),t.update(p,i,1)}function c(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,h*a,x),t.update(p,i,x))}function u(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,x);let g=0;for(let d=0;d<x;d++)g+=p[d];t.update(g,i,1)}function f(h,p,x,v){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<h.length;d++)c(h[d]/a,p[d],v[d]);else{g.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,v,0,x);let d=0;for(let T=0;T<x;T++)d+=p[T]*v[T];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Wx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xx(n,e,t){const i=new WeakMap,r=new gt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let S=function(){N.dispose(),i.delete(o),o.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;x===!0&&(y=1),v===!0&&(y=2),g===!0&&(y=3);let A=o.attributes.position.count*y,R=1;A>e.maxTextureSize&&(R=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const C=new Float32Array(A*R*4*f),N=new Eh(C,A,R,f);N.type=bn,N.needsUpdate=!0;const _=y*4;for(let L=0;L<f;L++){const U=d[L],z=T[L],j=w[L],Z=A*R*4*L;for(let X=0;X<U.count;X++){const B=X*_;x===!0&&(r.fromBufferAttribute(U,X),C[Z+B+0]=r.x,C[Z+B+1]=r.y,C[Z+B+2]=r.z,C[Z+B+3]=0),v===!0&&(r.fromBufferAttribute(z,X),C[Z+B+4]=r.x,C[Z+B+5]=r.y,C[Z+B+6]=r.z,C[Z+B+7]=0),g===!0&&(r.fromBufferAttribute(j,X),C[Z+B+8]=r.x,C[Z+B+9]=r.y,C[Z+B+10]=r.z,C[Z+B+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:N,size:new st(A,R)},i.set(o,h),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let x=0;for(let g=0;g<c.length;g++)x+=c[g];const v=o.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function qx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Yx={[ah]:"LINEAR_TONE_MAPPING",[oh]:"REINHARD_TONE_MAPPING",[lh]:"CINEON_TONE_MAPPING",[ch]:"ACES_FILMIC_TONE_MAPPING",[fh]:"AGX_TONE_MAPPING",[hh]:"NEUTRAL_TONE_MAPPING",[uh]:"CUSTOM_TONE_MAPPING"};function $x(n,e,t,i,r){const s=new Cn(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),a=new Cn(e,t,{type:Zn,depthBuffer:!1,stencilBuffer:!1}),o=new _n;o.setAttribute("position",new Yn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Yn([0,2,0,0,2,0],2));const l=new zg({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new ei(o,l),u=new Fh(-1,1,1,-1,0,1);let f=null,h=null,p=!1,x,v=null,g=[],d=!1;this.setSize=function(T,w){s.setSize(T,w),a.setSize(T,w);for(let y=0;y<g.length;y++){const A=g[y];A.setSize&&A.setSize(T,w)}},this.setEffects=function(T){g=T,d=g.length>0&&g[0].isRenderPass===!0;const w=s.width,y=s.height;for(let A=0;A<g.length;A++){const R=g[A];R.setSize&&R.setSize(w,y)}},this.begin=function(T,w){if(p||T.toneMapping===wn&&g.length===0)return!1;if(v=w,w!==null){const y=w.width,A=w.height;(s.width!==y||s.height!==A)&&this.setSize(y,A)}return d===!1&&T.setRenderTarget(s),x=T.toneMapping,T.toneMapping=wn,!0},this.hasRenderPass=function(){return d},this.end=function(T,w){T.toneMapping=x,p=!0;let y=s,A=a;for(let R=0;R<g.length;R++){const C=g[R];if(C.enabled!==!1&&(C.render(T,A,y,w),C.needsSwap!==!1)){const N=y;y=A,A=N}}if(f!==T.outputColorSpace||h!==T.toneMapping){f=T.outputColorSpace,h=T.toneMapping,l.defines={},Ke.getTransfer(f)===it&&(l.defines.SRGB_TRANSFER="");const R=Yx[h];R&&(l.defines[R]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(v),T.render(c,u),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Bh=new Lt,Al=new ss(1,1),zh=new Eh,Vh=new pg,Hh=new Dh,Tu=[],Au=[],wu=new Float32Array(16),Cu=new Float32Array(9),Ru=new Float32Array(4);function Tr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Tu[r];if(s===void 0&&(s=new Float32Array(r),Tu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function St(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Mt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ya(n,e){let t=Au[e];t===void 0&&(t=new Int32Array(e),Au[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Kx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2fv(this.addr,e),Mt(t,e)}}function Zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(St(t,e))return;n.uniform3fv(this.addr,e),Mt(t,e)}}function Jx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4fv(this.addr,e),Mt(t,e)}}function Qx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Ru.set(i),n.uniformMatrix2fv(this.addr,!1,Ru),Mt(t,i)}}function ev(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;Cu.set(i),n.uniformMatrix3fv(this.addr,!1,Cu),Mt(t,i)}}function tv(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(St(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(St(t,i))return;wu.set(i),n.uniformMatrix4fv(this.addr,!1,wu),Mt(t,i)}}function nv(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function iv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2iv(this.addr,e),Mt(t,e)}}function rv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3iv(this.addr,e),Mt(t,e)}}function sv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4iv(this.addr,e),Mt(t,e)}}function av(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ov(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(St(t,e))return;n.uniform2uiv(this.addr,e),Mt(t,e)}}function lv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(St(t,e))return;n.uniform3uiv(this.addr,e),Mt(t,e)}}function cv(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(St(t,e))return;n.uniform4uiv(this.addr,e),Mt(t,e)}}function uv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Al.compareFunction=t.isReversedDepthBuffer()?tc:ec,s=Al):s=Bh,t.setTexture2D(e||s,r)}function fv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vh,r)}function hv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hh,r)}function dv(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||zh,r)}function pv(n){switch(n){case 5126:return Kx;case 35664:return jx;case 35665:return Zx;case 35666:return Jx;case 35674:return Qx;case 35675:return ev;case 35676:return tv;case 5124:case 35670:return nv;case 35667:case 35671:return iv;case 35668:case 35672:return rv;case 35669:case 35673:return sv;case 5125:return av;case 36294:return ov;case 36295:return lv;case 36296:return cv;case 35678:case 36198:case 36298:case 36306:case 35682:return uv;case 35679:case 36299:case 36307:return fv;case 35680:case 36300:case 36308:case 36293:return hv;case 36289:case 36303:case 36311:case 36292:return dv}}function mv(n,e){n.uniform1fv(this.addr,e)}function gv(n,e){const t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function _v(n,e){const t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function xv(n,e){const t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function vv(n,e){const t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Sv(n,e){const t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Mv(n,e){const t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Ev(n,e){n.uniform1iv(this.addr,e)}function yv(n,e){n.uniform2iv(this.addr,e)}function bv(n,e){n.uniform3iv(this.addr,e)}function Tv(n,e){n.uniform4iv(this.addr,e)}function Av(n,e){n.uniform1uiv(this.addr,e)}function wv(n,e){n.uniform2uiv(this.addr,e)}function Cv(n,e){n.uniform3uiv(this.addr,e)}function Rv(n,e){n.uniform4uiv(this.addr,e)}function Pv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));let a;this.type===n.SAMPLER_2D_SHADOW?a=Al:a=Bh;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Dv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Vh,s[a])}function Lv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Hh,s[a])}function Iv(n,e,t){const i=this.cache,r=e.length,s=ya(t,r);St(i,s)||(n.uniform1iv(this.addr,s),Mt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||zh,s[a])}function Uv(n){switch(n){case 5126:return mv;case 35664:return gv;case 35665:return _v;case 35666:return xv;case 35674:return vv;case 35675:return Sv;case 35676:return Mv;case 5124:case 35670:return Ev;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Tv;case 5125:return Av;case 36294:return wv;case 36295:return Cv;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Pv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Lv;case 36289:case 36303:case 36311:case 36292:return Iv}}class Nv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=pv(t.type)}}class Fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Uv(t.type)}}class Ov{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const xo=/(\w+)(\])?(\[|\.)?/g;function Pu(n,e){n.seq.push(e),n.map[e.id]=e}function Bv(n,e,t){const i=n.name,r=i.length;for(xo.lastIndex=0;;){const s=xo.exec(i),a=xo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Pu(t,c===void 0?new Nv(o,n,e):new Fv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Ov(o),Pu(t,f)),t=f}}}class js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Bv(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Du(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const zv=37297;let Vv=0;function Hv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Lu=new We;function Gv(n){Ke._getMatrix(Lu,Ke.workingColorSpace,n);const e=`mat3( ${Lu.elements.map(t=>t.toFixed(4))} )`;switch(Ke.getTransfer(n)){case aa:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Iu(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Hv(n.getShaderSource(e),o)}else return s}function kv(n,e){const t=Gv(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const Wv={[ah]:"Linear",[oh]:"Reinhard",[lh]:"Cineon",[ch]:"ACESFilmic",[fh]:"AgX",[hh]:"Neutral",[uh]:"Custom"};function Xv(n,e){const t=Wv[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hs=new W;function qv(){Ke.getLuminanceCoefficients(Hs);const n=Hs.x.toFixed(4),e=Hs.y.toFixed(4),t=Hs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zr).join(`
`)}function $v(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kv(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function zr(n){return n!==""}function Uu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wl(n){return n.replace(jv,Jv)}const Zv=new Map;function Jv(n,e){let t=Xe[e];if(t===void 0){const i=Zv.get(e);if(i!==void 0)t=Xe[i],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return wl(t)}const Qv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fu(n){return n.replace(Qv,eS)}function eS(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ou(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const tS={[Xs]:"SHADOWMAP_TYPE_PCF",[Br]:"SHADOWMAP_TYPE_VSM"};function nS(n){return tS[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const iS={[Wi]:"ENVMAP_TYPE_CUBE",[Sr]:"ENVMAP_TYPE_CUBE",[va]:"ENVMAP_TYPE_CUBE_UV"};function rS(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":iS[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const sS={[Sr]:"ENVMAP_MODE_REFRACTION"};function aS(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oS={[sh]:"ENVMAP_BLENDING_MULTIPLY",[$m]:"ENVMAP_BLENDING_MIX",[Km]:"ENVMAP_BLENDING_ADD"};function lS(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":oS[n.combine]||"ENVMAP_BLENDING_NONE"}function cS(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function uS(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=nS(t),c=rS(t),u=aS(t),f=lS(t),h=cS(t),p=Yv(t),x=$v(s),v=r.createProgram();let g,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zr).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(zr).join(`
`),d.length>0&&(d+=`
`)):(g=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zr).join(`
`),d=[Ou(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Xe.tonemapping_pars_fragment:"",t.toneMapping!==wn?Xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,kv("linearToOutputTexel",t.outputColorSpace),qv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zr).join(`
`)),a=wl(a),a=Uu(a,t),a=Nu(a,t),o=wl(o),o=Uu(o,t),o=Nu(o,t),a=Fu(a),o=Fu(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=T+g+a,y=T+d+o,A=Du(r,r.VERTEX_SHADER,w),R=Du(r,r.FRAGMENT_SHADER,y);r.attachShader(v,A),r.attachShader(v,R),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(L){if(n.debug.checkShaderErrors){const U=r.getProgramInfoLog(v)||"",z=r.getShaderInfoLog(A)||"",j=r.getShaderInfoLog(R)||"",Z=U.trim(),X=z.trim(),B=j.trim();let J=!0,ge=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,A,R);else{const de=Iu(r,A,"vertex"),_e=Iu(r,R,"fragment");Ze("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Z+`
`+de+`
`+_e)}else Z!==""?Ve("WebGLProgram: Program Info Log:",Z):(X===""||B==="")&&(ge=!1);ge&&(L.diagnostics={runnable:J,programLog:Z,vertexShader:{log:X,prefix:g},fragmentShader:{log:B,prefix:d}})}r.deleteShader(A),r.deleteShader(R),N=new js(r,v),_=Kv(r,v)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let _;this.getAttributes=function(){return _===void 0&&C(this),_};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,zv)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Vv++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=R,this}let fS=0;class hS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new dS(e),t.set(e,i)),i}}class dS{constructor(e){this.id=fS++,this.code=e,this.usedTimes=0}}function pS(n,e,t,i,r,s,a){const o=new bh,l=new hS,c=new Set,u=[],f=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,L,U,z){const j=U.fog,Z=z.geometry,X=_.isMeshStandardMaterial?U.environment:null,B=(_.isMeshStandardMaterial?t:e).get(_.envMap||X),J=B&&B.mapping===va?B.image.height:null,ge=x[_.type];_.precision!==null&&(p=r.getMaxPrecision(_.precision),p!==_.precision&&Ve("WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const de=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,_e=de!==void 0?de.length:0;let Ne=0;Z.morphAttributes.position!==void 0&&(Ne=1),Z.morphAttributes.normal!==void 0&&(Ne=2),Z.morphAttributes.color!==void 0&&(Ne=3);let He,ht,at,te;if(ge){const tt=yn[ge];He=tt.vertexShader,ht=tt.fragmentShader}else He=_.vertexShader,ht=_.fragmentShader,l.update(_),at=l.getVertexShaderID(_),te=l.getFragmentShaderID(_);const ae=n.getRenderTarget(),we=n.state.buffers.depth.getReversed(),Be=z.isInstancedMesh===!0,Ce=z.isBatchedMesh===!0,$e=!!_.map,P=!!_.matcap,I=!!B,G=!!_.aoMap,ee=!!_.lightMap,$=!!_.bumpMap,ne=!!_.normalMap,b=!!_.displacementMap,oe=!!_.emissiveMap,ie=!!_.metalnessMap,Q=!!_.roughnessMap,re=_.anisotropy>0,M=_.clearcoat>0,m=_.dispersion>0,D=_.iridescence>0,k=_.sheen>0,K=_.transmission>0,H=re&&!!_.anisotropyMap,Me=M&&!!_.clearcoatMap,ce=M&&!!_.clearcoatNormalMap,be=M&&!!_.clearcoatRoughnessMap,De=D&&!!_.iridescenceMap,le=D&&!!_.iridescenceThicknessMap,pe=k&&!!_.sheenColorMap,xe=k&&!!_.sheenRoughnessMap,Te=!!_.specularMap,he=!!_.specularColorMap,Ge=!!_.specularIntensityMap,F=K&&!!_.transmissionMap,ye=K&&!!_.thicknessMap,fe=!!_.gradientMap,Ae=!!_.alphaMap,ue=_.alphaTest>0,se=!!_.alphaHash,me=!!_.extensions;let ze=wn;_.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(ze=n.toneMapping);const ct={shaderID:ge,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:ht,defines:_.defines,customVertexShaderID:at,customFragmentShaderID:te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:Ce,batchingColor:Ce&&z._colorsTexture!==null,instancing:Be,instancingColor:Be&&z.instanceColor!==null,instancingMorph:Be&&z.morphTexture!==null,outputColorSpace:ae===null?n.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Er,alphaToCoverage:!!_.alphaToCoverage,map:$e,matcap:P,envMap:I,envMapMode:I&&B.mapping,envMapCubeUVHeight:J,aoMap:G,lightMap:ee,bumpMap:$,normalMap:ne,displacementMap:b,emissiveMap:oe,normalMapObjectSpace:ne&&_.normalMapType===Qm,normalMapTangentSpace:ne&&_.normalMapType===Jm,metalnessMap:ie,roughnessMap:Q,anisotropy:re,anisotropyMap:H,clearcoat:M,clearcoatMap:Me,clearcoatNormalMap:ce,clearcoatRoughnessMap:be,dispersion:m,iridescence:D,iridescenceMap:De,iridescenceThicknessMap:le,sheen:k,sheenColorMap:pe,sheenRoughnessMap:xe,specularMap:Te,specularColorMap:he,specularIntensityMap:Ge,transmission:K,transmissionMap:F,thicknessMap:ye,gradientMap:fe,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ue,alphaHash:se,combine:_.combine,mapUv:$e&&v(_.map.channel),aoMapUv:G&&v(_.aoMap.channel),lightMapUv:ee&&v(_.lightMap.channel),bumpMapUv:$&&v(_.bumpMap.channel),normalMapUv:ne&&v(_.normalMap.channel),displacementMapUv:b&&v(_.displacementMap.channel),emissiveMapUv:oe&&v(_.emissiveMap.channel),metalnessMapUv:ie&&v(_.metalnessMap.channel),roughnessMapUv:Q&&v(_.roughnessMap.channel),anisotropyMapUv:H&&v(_.anisotropyMap.channel),clearcoatMapUv:Me&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:ce&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:be&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(_.sheenRoughnessMap.channel),specularMapUv:Te&&v(_.specularMap.channel),specularColorMapUv:he&&v(_.specularColorMap.channel),specularIntensityMapUv:Ge&&v(_.specularIntensityMap.channel),transmissionMapUv:F&&v(_.transmissionMap.channel),thicknessMapUv:ye&&v(_.thicknessMap.channel),alphaMapUv:Ae&&v(_.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(ne||re),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Z.attributes.uv&&($e||Ae),fog:!!j,useFog:_.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:_.flatShading===!0&&_.wireframe===!1,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:we,skinning:z.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Ne,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:$e&&_.map.isVideoTexture===!0&&Ke.getTransfer(_.map.colorSpace)===it,decodeVideoTextureEmissive:oe&&_.emissiveMap.isVideoTexture===!0&&Ke.getTransfer(_.emissiveMap.colorSpace)===it,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===Xt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:me&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(me&&_.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function d(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const L in _.defines)S.push(L),S.push(_.defines[L]);return _.isRawShaderMaterial===!1&&(T(S,_),w(S,_),S.push(n.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function T(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function w(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),_.push(o.mask)}function y(_){const S=x[_.type];let L;if(S){const U=yn[S];L=wg.clone(U.uniforms)}else L=_.uniforms;return L}function A(_,S){let L=f.get(S);return L!==void 0?++L.usedTimes:(L=new uS(n,S,_,s),u.push(L),f.set(S,L)),L}function R(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),f.delete(_.cacheKey),_.destroy()}}function C(_){l.remove(_)}function N(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:R,releaseShaderCache:C,programs:u,dispose:N}}function mS(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function gS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bu(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function zu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,p,x,v,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:v,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=v,d.group=g),e++,d}function o(f,h,p,x,v,g){const d=a(f,h,p,x,v,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,v,g){const d=a(f,h,p,x,v,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||gS),i.length>1&&i.sort(h||Bu),r.length>1&&r.sort(h||Bu)}function u(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function _S(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new zu,n.set(i,[a])):r>=s.length?(a=new zu,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function xS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Qe};break;case"SpotLight":t={position:new W,direction:new W,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new W,halfWidth:new W,halfHeight:new W};break}return n[e.id]=t,t}}}function vS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let SS=0;function MS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ES(n){const e=new xS,t=vS(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new W);const r=new W,s=new _t,a=new _t;function o(c){let u=0,f=0,h=0;for(let _=0;_<9;_++)i.probe[_].set(0,0,0);let p=0,x=0,v=0,g=0,d=0,T=0,w=0,y=0,A=0,R=0,C=0;c.sort(MS);for(let _=0,S=c.length;_<S;_++){const L=c[_],U=L.color,z=L.intensity,j=L.distance;let Z=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Mr?Z=L.shadow.map.texture:Z=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=U.r*z,f+=U.g*z,h+=U.b*z;else if(L.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(L.sh.coefficients[X],z);C++}else if(L.isDirectionalLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,J=t.get(L);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.directionalShadow[p]=J,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,T++}i.directional[p]=X,p++}else if(L.isSpotLight){const X=e.get(L);X.position.setFromMatrixPosition(L.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=j,X.coneCos=Math.cos(L.angle),X.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),X.decay=L.decay,i.spot[v]=X;const B=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,B.updateMatrices(L),L.castShadow&&R++),i.spotLightMatrix[v]=B.matrix,L.castShadow){const J=t.get(L);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,i.spotShadow[v]=J,i.spotShadowMap[v]=Z,y++}v++}else if(L.isRectAreaLight){const X=e.get(L);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(L.width*.5,0,0),X.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=X,g++}else if(L.isPointLight){const X=e.get(L);if(X.color.copy(L.color).multiplyScalar(L.intensity),X.distance=L.distance,X.decay=L.decay,L.castShadow){const B=L.shadow,J=t.get(L);J.shadowIntensity=B.intensity,J.shadowBias=B.bias,J.shadowNormalBias=B.normalBias,J.shadowRadius=B.radius,J.shadowMapSize=B.mapSize,J.shadowCameraNear=B.camera.near,J.shadowCameraFar=B.camera.far,i.pointShadow[x]=J,i.pointShadowMap[x]=Z,i.pointShadowMatrix[x]=L.shadow.matrix,w++}i.point[x]=X,x++}else if(L.isHemisphereLight){const X=e.get(L);X.skyColor.copy(L.color).multiplyScalar(z),X.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[d]=X,d++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Se.LTC_FLOAT_1,i.rectAreaLTC2=Se.LTC_FLOAT_2):(i.rectAreaLTC1=Se.LTC_HALF_1,i.rectAreaLTC2=Se.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const N=i.hash;(N.directionalLength!==p||N.pointLength!==x||N.spotLength!==v||N.rectAreaLength!==g||N.hemiLength!==d||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==y||N.numSpotMaps!==A||N.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=g,i.point.length=x,i.hemi.length=d,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+A-R,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,N.directionalLength=p,N.pointLength=x,N.spotLength=v,N.rectAreaLength=g,N.hemiLength=d,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=y,N.numSpotMaps=A,N.numLightProbes=C,i.version=SS++)}function l(c,u){let f=0,h=0,p=0,x=0,v=0;const g=u.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const w=c[d];if(w.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),f++}else if(w.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),p++}else if(w.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(w.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(g),h++}else if(w.isHemisphereLight){const y=i.hemi[v];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:i}}function Vu(n){const e=new ES(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function yS(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Vu(n),e.set(r,[o])):s>=a.length?(o=new Vu(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const bS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,AS=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],wS=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Hu=new _t,Fr=new W,vo=new W;function CS(n,e,t){let i=new Ih;const r=new st,s=new st,a=new gt,o=new Vg,l=new Hg,c={},u=t.maxTextureSize,f={[Si]:Xt,[Xt]:Si,[kn]:kn},h=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:bS,fragmentShader:TS}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new _n;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ei(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xs;let d=this.type;this.render=function(R,C,N){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||R.length===0)return;R.type===Rm&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),R.type=Xs);const _=n.getRenderTarget(),S=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Xn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=d!==this.type;z&&C.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(Z=>Z.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,Z=R.length;j<Z;j++){const X=R[j],B=X.shadow;if(B===void 0){Ve("WebGLShadowMap:",X,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const J=B.getFrameExtents();if(r.multiply(J),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,B.mapSize.y=s.y)),B.map===null||z===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Br){if(X.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Cn(r.x,r.y,{format:Mr,type:Zn,minFilter:Pt,magFilter:Pt,generateMipmaps:!1}),B.map.texture.name=X.name+".shadowMap",B.map.depthTexture=new ss(r.x,r.y,bn),B.map.depthTexture.name=X.name+".shadowMapDepth",B.map.depthTexture.format=Jn,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt}else{X.isPointLight?(B.map=new Lh(r.x),B.map.depthTexture=new Bg(r.x,Rn)):(B.map=new Cn(r.x,r.y),B.map.depthTexture=new ss(r.x,r.y,Rn)),B.map.depthTexture.name=X.name+".shadowMap",B.map.depthTexture.format=Jn;const de=n.state.buffers.depth.getReversed();this.type===Xs?(B.map.depthTexture.compareFunction=de?tc:ec,B.map.depthTexture.minFilter=Pt,B.map.depthTexture.magFilter=Pt):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=Tt,B.map.depthTexture.magFilter=Tt)}B.camera.updateProjectionMatrix()}const ge=B.map.isWebGLCubeRenderTarget?6:1;for(let de=0;de<ge;de++){if(B.map.isWebGLCubeRenderTarget)n.setRenderTarget(B.map,de),n.clear();else{de===0&&(n.setRenderTarget(B.map),n.clear());const _e=B.getViewport(de);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),U.viewport(a)}if(X.isPointLight){const _e=B.camera,Ne=B.matrix,He=X.distance||_e.far;He!==_e.far&&(_e.far=He,_e.updateProjectionMatrix()),Fr.setFromMatrixPosition(X.matrixWorld),_e.position.copy(Fr),vo.copy(_e.position),vo.add(AS[de]),_e.up.copy(wS[de]),_e.lookAt(vo),_e.updateMatrixWorld(),Ne.makeTranslation(-Fr.x,-Fr.y,-Fr.z),Hu.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Hu,_e.coordinateSystem,_e.reversedDepth)}else B.updateMatrices(X);i=B.getFrustum(),y(C,N,B.camera,X,this.type)}B.isPointLightShadow!==!0&&this.type===Br&&T(B,N),B.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(_,S,L)};function T(R,C){const N=e.update(v);h.defines.VSM_SAMPLES!==R.blurSamples&&(h.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Cn(r.x,r.y,{format:Mr,type:Zn})),h.uniforms.shadow_pass.value=R.map.depthTexture,h.uniforms.resolution.value=R.mapSize,h.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(C,null,N,h,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(C,null,N,p,v,null)}function w(R,C,N,_){let S=null;const L=N.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=N.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=S.uuid,z=C.uuid;let j=c[U];j===void 0&&(j={},c[U]=j);let Z=j[z];Z===void 0&&(Z=S.clone(),j[z]=Z,C.addEventListener("dispose",A)),S=Z}if(S.visible=C.visible,S.wireframe=C.wireframe,_===Br?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:f[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,N.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const U=n.properties.get(S);U.light=N}return S}function y(R,C,N,_,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Br)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,R.matrixWorld);const z=e.update(R),j=R.material;if(Array.isArray(j)){const Z=z.groups;for(let X=0,B=Z.length;X<B;X++){const J=Z[X],ge=j[J.materialIndex];if(ge&&ge.visible){const de=w(R,ge,_,S);R.onBeforeShadow(n,R,C,N,z,de,J),n.renderBufferDirect(N,null,z,de,R,J),R.onAfterShadow(n,R,C,N,z,de,J)}}}else if(j.visible){const Z=w(R,j,_,S);R.onBeforeShadow(n,R,C,N,z,Z,null),n.renderBufferDirect(N,null,z,Z,R,null),R.onAfterShadow(n,R,C,N,z,Z,null)}}const U=R.children;for(let z=0,j=U.length;z<j;z++)y(U[z],C,N,_,S)}function A(R){R.target.removeEventListener("dispose",A);for(const N in c){const _=c[N],S=R.target.uuid;S in _&&(_[S].dispose(),delete _[S])}}}const RS={[No]:Fo,[Oo]:Vo,[Bo]:Ho,[vr]:zo,[Fo]:No,[Vo]:Oo,[Ho]:Bo,[zo]:vr};function PS(n,e){function t(){let F=!1;const ye=new gt;let fe=null;const Ae=new gt(0,0,0,0);return{setMask:function(ue){fe!==ue&&!F&&(n.colorMask(ue,ue,ue,ue),fe=ue)},setLocked:function(ue){F=ue},setClear:function(ue,se,me,ze,ct){ct===!0&&(ue*=ze,se*=ze,me*=ze),ye.set(ue,se,me,ze),Ae.equals(ye)===!1&&(n.clearColor(ue,se,me,ze),Ae.copy(ye))},reset:function(){F=!1,fe=null,Ae.set(-1,0,0,0)}}}function i(){let F=!1,ye=!1,fe=null,Ae=null,ue=null;return{setReversed:function(se){if(ye!==se){const me=e.get("EXT_clip_control");se?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),ye=se;const ze=ue;ue=null,this.setClear(ze)}},getReversed:function(){return ye},setTest:function(se){se?ae(n.DEPTH_TEST):we(n.DEPTH_TEST)},setMask:function(se){fe!==se&&!F&&(n.depthMask(se),fe=se)},setFunc:function(se){if(ye&&(se=RS[se]),Ae!==se){switch(se){case No:n.depthFunc(n.NEVER);break;case Fo:n.depthFunc(n.ALWAYS);break;case Oo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case Bo:n.depthFunc(n.EQUAL);break;case zo:n.depthFunc(n.GEQUAL);break;case Vo:n.depthFunc(n.GREATER);break;case Ho:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ae=se}},setLocked:function(se){F=se},setClear:function(se){ue!==se&&(ye&&(se=1-se),n.clearDepth(se),ue=se)},reset:function(){F=!1,fe=null,Ae=null,ue=null,ye=!1}}}function r(){let F=!1,ye=null,fe=null,Ae=null,ue=null,se=null,me=null,ze=null,ct=null;return{setTest:function(tt){F||(tt?ae(n.STENCIL_TEST):we(n.STENCIL_TEST))},setMask:function(tt){ye!==tt&&!F&&(n.stencilMask(tt),ye=tt)},setFunc:function(tt,xn,Dn){(fe!==tt||Ae!==xn||ue!==Dn)&&(n.stencilFunc(tt,xn,Dn),fe=tt,Ae=xn,ue=Dn)},setOp:function(tt,xn,Dn){(se!==tt||me!==xn||ze!==Dn)&&(n.stencilOp(tt,xn,Dn),se=tt,me=xn,ze=Dn)},setLocked:function(tt){F=tt},setClear:function(tt){ct!==tt&&(n.clearStencil(tt),ct=tt)},reset:function(){F=!1,ye=null,fe=null,Ae=null,ue=null,se=null,me=null,ze=null,ct=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,p=[],x=null,v=!1,g=null,d=null,T=null,w=null,y=null,A=null,R=null,C=new Qe(0,0,0),N=0,_=!1,S=null,L=null,U=null,z=null,j=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,B=0;const J=n.getParameter(n.VERSION);J.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(J)[1]),X=B>=1):J.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),X=B>=2);let ge=null,de={};const _e=n.getParameter(n.SCISSOR_BOX),Ne=n.getParameter(n.VIEWPORT),He=new gt().fromArray(_e),ht=new gt().fromArray(Ne);function at(F,ye,fe,Ae){const ue=new Uint8Array(4),se=n.createTexture();n.bindTexture(F,se),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let me=0;me<fe;me++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,Ae,0,n.RGBA,n.UNSIGNED_BYTE,ue):n.texImage2D(ye+me,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ue);return se}const te={};te[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),te[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),te[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ae(n.DEPTH_TEST),a.setFunc(vr),$(!1),ne(qc),ae(n.CULL_FACE),G(Xn);function ae(F){u[F]!==!0&&(n.enable(F),u[F]=!0)}function we(F){u[F]!==!1&&(n.disable(F),u[F]=!1)}function Be(F,ye){return f[F]!==ye?(n.bindFramebuffer(F,ye),f[F]=ye,F===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=ye),F===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Ce(F,ye){let fe=p,Ae=!1;if(F){fe=h.get(ye),fe===void 0&&(fe=[],h.set(ye,fe));const ue=F.textures;if(fe.length!==ue.length||fe[0]!==n.COLOR_ATTACHMENT0){for(let se=0,me=ue.length;se<me;se++)fe[se]=n.COLOR_ATTACHMENT0+se;fe.length=ue.length,Ae=!0}}else fe[0]!==n.BACK&&(fe[0]=n.BACK,Ae=!0);Ae&&n.drawBuffers(fe)}function $e(F){return x!==F?(n.useProgram(F),x=F,!0):!1}const P={[Oi]:n.FUNC_ADD,[Dm]:n.FUNC_SUBTRACT,[Lm]:n.FUNC_REVERSE_SUBTRACT};P[Im]=n.MIN,P[Um]=n.MAX;const I={[Nm]:n.ZERO,[Fm]:n.ONE,[Om]:n.SRC_COLOR,[Io]:n.SRC_ALPHA,[km]:n.SRC_ALPHA_SATURATE,[Hm]:n.DST_COLOR,[zm]:n.DST_ALPHA,[Bm]:n.ONE_MINUS_SRC_COLOR,[Uo]:n.ONE_MINUS_SRC_ALPHA,[Gm]:n.ONE_MINUS_DST_COLOR,[Vm]:n.ONE_MINUS_DST_ALPHA,[Wm]:n.CONSTANT_COLOR,[Xm]:n.ONE_MINUS_CONSTANT_COLOR,[qm]:n.CONSTANT_ALPHA,[Ym]:n.ONE_MINUS_CONSTANT_ALPHA};function G(F,ye,fe,Ae,ue,se,me,ze,ct,tt){if(F===Xn){v===!0&&(we(n.BLEND),v=!1);return}if(v===!1&&(ae(n.BLEND),v=!0),F!==Pm){if(F!==g||tt!==_){if((d!==Oi||y!==Oi)&&(n.blendEquation(n.FUNC_ADD),d=Oi,y=Oi),tt)switch(F){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lo:n.blendFunc(n.ONE,n.ONE);break;case Yc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $c:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ze("WebGLState: Invalid blending: ",F);break}else switch(F){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Lo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Yc:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $c:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",F);break}T=null,w=null,A=null,R=null,C.set(0,0,0),N=0,g=F,_=tt}return}ue=ue||ye,se=se||fe,me=me||Ae,(ye!==d||ue!==y)&&(n.blendEquationSeparate(P[ye],P[ue]),d=ye,y=ue),(fe!==T||Ae!==w||se!==A||me!==R)&&(n.blendFuncSeparate(I[fe],I[Ae],I[se],I[me]),T=fe,w=Ae,A=se,R=me),(ze.equals(C)===!1||ct!==N)&&(n.blendColor(ze.r,ze.g,ze.b,ct),C.copy(ze),N=ct),g=F,_=!1}function ee(F,ye){F.side===kn?we(n.CULL_FACE):ae(n.CULL_FACE);let fe=F.side===Xt;ye&&(fe=!fe),$(fe),F.blending===gr&&F.transparent===!1?G(Xn):G(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Ae=F.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),oe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ae(n.SAMPLE_ALPHA_TO_COVERAGE):we(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(F){S!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),S=F)}function ne(F){F!==wm?(ae(n.CULL_FACE),F!==L&&(F===qc?n.cullFace(n.BACK):F===Cm?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):we(n.CULL_FACE),L=F}function b(F){F!==U&&(X&&n.lineWidth(F),U=F)}function oe(F,ye,fe){F?(ae(n.POLYGON_OFFSET_FILL),(z!==ye||j!==fe)&&(n.polygonOffset(ye,fe),z=ye,j=fe)):we(n.POLYGON_OFFSET_FILL)}function ie(F){F?ae(n.SCISSOR_TEST):we(n.SCISSOR_TEST)}function Q(F){F===void 0&&(F=n.TEXTURE0+Z-1),ge!==F&&(n.activeTexture(F),ge=F)}function re(F,ye,fe){fe===void 0&&(ge===null?fe=n.TEXTURE0+Z-1:fe=ge);let Ae=de[fe];Ae===void 0&&(Ae={type:void 0,texture:void 0},de[fe]=Ae),(Ae.type!==F||Ae.texture!==ye)&&(ge!==fe&&(n.activeTexture(fe),ge=fe),n.bindTexture(F,ye||te[F]),Ae.type=F,Ae.texture=ye)}function M(){const F=de[ge];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function m(){try{n.compressedTexImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function D(){try{n.compressedTexImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function k(){try{n.texSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function K(){try{n.texSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function H(){try{n.compressedTexSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ce(){try{n.texStorage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function be(){try{n.texStorage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function De(){try{n.texImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function le(){try{n.texImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function pe(F){He.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),He.copy(F))}function xe(F){ht.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),ht.copy(F))}function Te(F,ye){let fe=c.get(ye);fe===void 0&&(fe=new WeakMap,c.set(ye,fe));let Ae=fe.get(F);Ae===void 0&&(Ae=n.getUniformBlockIndex(ye,F.name),fe.set(F,Ae))}function he(F,ye){const Ae=c.get(ye).get(F);l.get(ye)!==Ae&&(n.uniformBlockBinding(ye,Ae,F.__bindingPointIndex),l.set(ye,Ae))}function Ge(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ge=null,de={},f={},h=new WeakMap,p=[],x=null,v=!1,g=null,d=null,T=null,w=null,y=null,A=null,R=null,C=new Qe(0,0,0),N=0,_=!1,S=null,L=null,U=null,z=null,j=null,He.set(0,0,n.canvas.width,n.canvas.height),ht.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ae,disable:we,bindFramebuffer:Be,drawBuffers:Ce,useProgram:$e,setBlending:G,setMaterial:ee,setFlipSided:$,setCullFace:ne,setLineWidth:b,setPolygonOffset:oe,setScissorTest:ie,activeTexture:Q,bindTexture:re,unbindTexture:M,compressedTexImage2D:m,compressedTexImage3D:D,texImage2D:De,texImage3D:le,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:ce,texStorage3D:be,texSubImage2D:k,texSubImage3D:K,compressedTexSubImage2D:H,compressedTexSubImage3D:Me,scissor:pe,viewport:xe,reset:Ge}}function DS(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(M,m){return p?new OffscreenCanvas(M,m):is("canvas")}function v(M,m,D){let k=1;const K=re(M);if((K.width>D||K.height>D)&&(k=D/Math.max(K.width,K.height)),k<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const H=Math.floor(k*K.width),Me=Math.floor(k*K.height);f===void 0&&(f=x(H,Me));const ce=m?x(H,Me):f;return ce.width=H,ce.height=Me,ce.getContext("2d").drawImage(M,0,0,H,Me),Ve("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+H+"x"+Me+")."),ce}else return"data"in M&&Ve("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function g(M){return M.generateMipmaps}function d(M){n.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?n.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(M,m,D,k,K=!1){if(M!==null){if(n[M]!==void 0)return n[M];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let H=m;if(m===n.RED&&(D===n.FLOAT&&(H=n.R32F),D===n.HALF_FLOAT&&(H=n.R16F),D===n.UNSIGNED_BYTE&&(H=n.R8)),m===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.R8UI),D===n.UNSIGNED_SHORT&&(H=n.R16UI),D===n.UNSIGNED_INT&&(H=n.R32UI),D===n.BYTE&&(H=n.R8I),D===n.SHORT&&(H=n.R16I),D===n.INT&&(H=n.R32I)),m===n.RG&&(D===n.FLOAT&&(H=n.RG32F),D===n.HALF_FLOAT&&(H=n.RG16F),D===n.UNSIGNED_BYTE&&(H=n.RG8)),m===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RG8UI),D===n.UNSIGNED_SHORT&&(H=n.RG16UI),D===n.UNSIGNED_INT&&(H=n.RG32UI),D===n.BYTE&&(H=n.RG8I),D===n.SHORT&&(H=n.RG16I),D===n.INT&&(H=n.RG32I)),m===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGB8UI),D===n.UNSIGNED_SHORT&&(H=n.RGB16UI),D===n.UNSIGNED_INT&&(H=n.RGB32UI),D===n.BYTE&&(H=n.RGB8I),D===n.SHORT&&(H=n.RGB16I),D===n.INT&&(H=n.RGB32I)),m===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(H=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(H=n.RGBA16UI),D===n.UNSIGNED_INT&&(H=n.RGBA32UI),D===n.BYTE&&(H=n.RGBA8I),D===n.SHORT&&(H=n.RGBA16I),D===n.INT&&(H=n.RGBA32I)),m===n.RGB&&(D===n.UNSIGNED_INT_5_9_9_9_REV&&(H=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(H=n.R11F_G11F_B10F)),m===n.RGBA){const Me=K?aa:Ke.getTransfer(k);D===n.FLOAT&&(H=n.RGBA32F),D===n.HALF_FLOAT&&(H=n.RGBA16F),D===n.UNSIGNED_BYTE&&(H=Me===it?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT_4_4_4_4&&(H=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(H=n.RGB5_A1)}return(H===n.R16F||H===n.R32F||H===n.RG16F||H===n.RG32F||H===n.RGBA16F||H===n.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function y(M,m){let D;return M?m===null||m===Rn||m===ns?D=n.DEPTH24_STENCIL8:m===bn?D=n.DEPTH32F_STENCIL8:m===ts&&(D=n.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):m===null||m===Rn||m===ns?D=n.DEPTH_COMPONENT24:m===bn?D=n.DEPTH_COMPONENT32F:m===ts&&(D=n.DEPTH_COMPONENT16),D}function A(M,m){return g(M)===!0||M.isFramebufferTexture&&M.minFilter!==Tt&&M.minFilter!==Pt?Math.log2(Math.max(m.width,m.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?m.mipmaps.length:1}function R(M){const m=M.target;m.removeEventListener("dispose",R),N(m),m.isVideoTexture&&u.delete(m)}function C(M){const m=M.target;m.removeEventListener("dispose",C),S(m)}function N(M){const m=i.get(M);if(m.__webglInit===void 0)return;const D=M.source,k=h.get(D);if(k){const K=k[m.__cacheKey];K.usedTimes--,K.usedTimes===0&&_(M),Object.keys(k).length===0&&h.delete(D)}i.remove(M)}function _(M){const m=i.get(M);n.deleteTexture(m.__webglTexture);const D=M.source,k=h.get(D);delete k[m.__cacheKey],a.memory.textures--}function S(M){const m=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(m.__webglFramebuffer[k]))for(let K=0;K<m.__webglFramebuffer[k].length;K++)n.deleteFramebuffer(m.__webglFramebuffer[k][K]);else n.deleteFramebuffer(m.__webglFramebuffer[k]);m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer[k])}else{if(Array.isArray(m.__webglFramebuffer))for(let k=0;k<m.__webglFramebuffer.length;k++)n.deleteFramebuffer(m.__webglFramebuffer[k]);else n.deleteFramebuffer(m.__webglFramebuffer);if(m.__webglDepthbuffer&&n.deleteRenderbuffer(m.__webglDepthbuffer),m.__webglMultisampledFramebuffer&&n.deleteFramebuffer(m.__webglMultisampledFramebuffer),m.__webglColorRenderbuffer)for(let k=0;k<m.__webglColorRenderbuffer.length;k++)m.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(m.__webglColorRenderbuffer[k]);m.__webglDepthRenderbuffer&&n.deleteRenderbuffer(m.__webglDepthRenderbuffer)}const D=M.textures;for(let k=0,K=D.length;k<K;k++){const H=i.get(D[k]);H.__webglTexture&&(n.deleteTexture(H.__webglTexture),a.memory.textures--),i.remove(D[k])}i.remove(M)}let L=0;function U(){L=0}function z(){const M=L;return M>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),L+=1,M}function j(M){const m=[];return m.push(M.wrapS),m.push(M.wrapT),m.push(M.wrapR||0),m.push(M.magFilter),m.push(M.minFilter),m.push(M.anisotropy),m.push(M.internalFormat),m.push(M.format),m.push(M.type),m.push(M.generateMipmaps),m.push(M.premultiplyAlpha),m.push(M.flipY),m.push(M.unpackAlignment),m.push(M.colorSpace),m.join()}function Z(M,m){const D=i.get(M);if(M.isVideoTexture&&ie(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&D.__version!==M.version){const k=M.image;if(k===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{te(D,M,m);return}}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+m)}function X(M,m){const D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){te(D,M,m);return}else M.isExternalTexture&&(D.__webglTexture=M.sourceTexture?M.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+m)}function B(M,m){const D=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&D.__version!==M.version){te(D,M,m);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+m)}function J(M,m){const D=i.get(M);if(M.isCubeDepthTexture!==!0&&M.version>0&&D.__version!==M.version){ae(D,M,m);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+m)}const ge={[Wo]:n.REPEAT,[Wn]:n.CLAMP_TO_EDGE,[Xo]:n.MIRRORED_REPEAT},de={[Tt]:n.NEAREST,[jm]:n.NEAREST_MIPMAP_NEAREST,[vs]:n.NEAREST_MIPMAP_LINEAR,[Pt]:n.LINEAR,[Ha]:n.LINEAR_MIPMAP_NEAREST,[zi]:n.LINEAR_MIPMAP_LINEAR},_e={[eg]:n.NEVER,[sg]:n.ALWAYS,[tg]:n.LESS,[ec]:n.LEQUAL,[ng]:n.EQUAL,[tc]:n.GEQUAL,[ig]:n.GREATER,[rg]:n.NOTEQUAL};function Ne(M,m){if(m.type===bn&&e.has("OES_texture_float_linear")===!1&&(m.magFilter===Pt||m.magFilter===Ha||m.magFilter===vs||m.magFilter===zi||m.minFilter===Pt||m.minFilter===Ha||m.minFilter===vs||m.minFilter===zi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(M,n.TEXTURE_WRAP_S,ge[m.wrapS]),n.texParameteri(M,n.TEXTURE_WRAP_T,ge[m.wrapT]),(M===n.TEXTURE_3D||M===n.TEXTURE_2D_ARRAY)&&n.texParameteri(M,n.TEXTURE_WRAP_R,ge[m.wrapR]),n.texParameteri(M,n.TEXTURE_MAG_FILTER,de[m.magFilter]),n.texParameteri(M,n.TEXTURE_MIN_FILTER,de[m.minFilter]),m.compareFunction&&(n.texParameteri(M,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(M,n.TEXTURE_COMPARE_FUNC,_e[m.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(m.magFilter===Tt||m.minFilter!==vs&&m.minFilter!==zi||m.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(m.anisotropy>1||i.get(m).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(M,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(m.anisotropy,r.getMaxAnisotropy())),i.get(m).__currentAnisotropy=m.anisotropy}}}function He(M,m){let D=!1;M.__webglInit===void 0&&(M.__webglInit=!0,m.addEventListener("dispose",R));const k=m.source;let K=h.get(k);K===void 0&&(K={},h.set(k,K));const H=j(m);if(H!==M.__cacheKey){K[H]===void 0&&(K[H]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),K[H].usedTimes++;const Me=K[M.__cacheKey];Me!==void 0&&(K[M.__cacheKey].usedTimes--,Me.usedTimes===0&&_(m)),M.__cacheKey=H,M.__webglTexture=K[H].texture}return D}function ht(M,m,D){return Math.floor(Math.floor(M/D)/m)}function at(M,m,D,k){const H=M.updateRanges;if(H.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,m.width,m.height,D,k,m.data);else{H.sort((le,pe)=>le.start-pe.start);let Me=0;for(let le=1;le<H.length;le++){const pe=H[Me],xe=H[le],Te=pe.start+pe.count,he=ht(xe.start,m.width,4),Ge=ht(pe.start,m.width,4);xe.start<=Te+1&&he===Ge&&ht(xe.start+xe.count-1,m.width,4)===he?pe.count=Math.max(pe.count,xe.start+xe.count-pe.start):(++Me,H[Me]=xe)}H.length=Me+1;const ce=n.getParameter(n.UNPACK_ROW_LENGTH),be=n.getParameter(n.UNPACK_SKIP_PIXELS),De=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,m.width);for(let le=0,pe=H.length;le<pe;le++){const xe=H[le],Te=Math.floor(xe.start/4),he=Math.ceil(xe.count/4),Ge=Te%m.width,F=Math.floor(Te/m.width),ye=he,fe=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ge),n.pixelStorei(n.UNPACK_SKIP_ROWS,F),t.texSubImage2D(n.TEXTURE_2D,0,Ge,F,ye,fe,D,k,m.data)}M.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,be),n.pixelStorei(n.UNPACK_SKIP_ROWS,De)}}function te(M,m,D){let k=n.TEXTURE_2D;(m.isDataArrayTexture||m.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),m.isData3DTexture&&(k=n.TEXTURE_3D);const K=He(M,m),H=m.source;t.bindTexture(k,M.__webglTexture,n.TEXTURE0+D);const Me=i.get(H);if(H.version!==Me.__version||K===!0){t.activeTexture(n.TEXTURE0+D);const ce=Ke.getPrimaries(Ke.workingColorSpace),be=m.colorSpace===di?null:Ke.getPrimaries(m.colorSpace),De=m.colorSpace===di||ce===be?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let le=v(m.image,!1,r.maxTextureSize);le=Q(m,le);const pe=s.convert(m.format,m.colorSpace),xe=s.convert(m.type);let Te=w(m.internalFormat,pe,xe,m.colorSpace,m.isVideoTexture);Ne(k,m);let he;const Ge=m.mipmaps,F=m.isVideoTexture!==!0,ye=Me.__version===void 0||K===!0,fe=H.dataReady,Ae=A(m,le);if(m.isDepthTexture)Te=y(m.format===Vi,m.type),ye&&(F?t.texStorage2D(n.TEXTURE_2D,1,Te,le.width,le.height):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,pe,xe,null));else if(m.isDataTexture)if(Ge.length>0){F&&ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,Ge[0].width,Ge[0].height);for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,xe,he.data):t.texImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,pe,xe,he.data);m.generateMipmaps=!1}else F?(ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,le.width,le.height),fe&&at(m,le,pe,xe)):t.texImage2D(n.TEXTURE_2D,0,Te,le.width,le.height,0,pe,xe,le.data);else if(m.isCompressedTexture)if(m.isCompressedArrayTexture){F&&ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,Ge[0].width,Ge[0].height,le.depth);for(let ue=0,se=Ge.length;ue<se;ue++)if(he=Ge[ue],m.format!==dn)if(pe!==null)if(F){if(fe)if(m.layerUpdates.size>0){const me=xu(he.width,he.height,m.format,m.type);for(const ze of m.layerUpdates){const ct=he.data.subarray(ze*me/he.data.BYTES_PER_ELEMENT,(ze+1)*me/he.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,ze,he.width,he.height,1,pe,ct)}m.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,le.depth,pe,he.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ue,Te,he.width,he.height,le.depth,0,he.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?fe&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ue,0,0,0,he.width,he.height,le.depth,pe,xe,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ue,Te,he.width,he.height,le.depth,0,pe,xe,he.data)}else{F&&ye&&t.texStorage2D(n.TEXTURE_2D,Ae,Te,Ge[0].width,Ge[0].height);for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],m.format!==dn?pe!==null?F?fe&&t.compressedTexSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,he.data):t.compressedTexImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,he.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,he.width,he.height,pe,xe,he.data):t.texImage2D(n.TEXTURE_2D,ue,Te,he.width,he.height,0,pe,xe,he.data)}else if(m.isDataArrayTexture)if(F){if(ye&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,Te,le.width,le.height,le.depth),fe)if(m.layerUpdates.size>0){const ue=xu(le.width,le.height,m.format,m.type);for(const se of m.layerUpdates){const me=le.data.subarray(se*ue/le.data.BYTES_PER_ELEMENT,(se+1)*ue/le.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,le.width,le.height,1,pe,xe,me)}m.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,le.width,le.height,le.depth,pe,xe,le.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,le.width,le.height,le.depth,0,pe,xe,le.data);else if(m.isData3DTexture)F?(ye&&t.texStorage3D(n.TEXTURE_3D,Ae,Te,le.width,le.height,le.depth),fe&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,le.width,le.height,le.depth,pe,xe,le.data)):t.texImage3D(n.TEXTURE_3D,0,Te,le.width,le.height,le.depth,0,pe,xe,le.data);else if(m.isFramebufferTexture){if(ye)if(F)t.texStorage2D(n.TEXTURE_2D,Ae,Te,le.width,le.height);else{let ue=le.width,se=le.height;for(let me=0;me<Ae;me++)t.texImage2D(n.TEXTURE_2D,me,Te,ue,se,0,pe,xe,null),ue>>=1,se>>=1}}else if(Ge.length>0){if(F&&ye){const ue=re(Ge[0]);t.texStorage2D(n.TEXTURE_2D,Ae,Te,ue.width,ue.height)}for(let ue=0,se=Ge.length;ue<se;ue++)he=Ge[ue],F?fe&&t.texSubImage2D(n.TEXTURE_2D,ue,0,0,pe,xe,he):t.texImage2D(n.TEXTURE_2D,ue,Te,pe,xe,he);m.generateMipmaps=!1}else if(F){if(ye){const ue=re(le);t.texStorage2D(n.TEXTURE_2D,Ae,Te,ue.width,ue.height)}fe&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe,xe,le)}else t.texImage2D(n.TEXTURE_2D,0,Te,pe,xe,le);g(m)&&d(k),Me.__version=H.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function ae(M,m,D){if(m.image.length!==6)return;const k=He(M,m),K=m.source;t.bindTexture(n.TEXTURE_CUBE_MAP,M.__webglTexture,n.TEXTURE0+D);const H=i.get(K);if(K.version!==H.__version||k===!0){t.activeTexture(n.TEXTURE0+D);const Me=Ke.getPrimaries(Ke.workingColorSpace),ce=m.colorSpace===di?null:Ke.getPrimaries(m.colorSpace),be=m.colorSpace===di||Me===ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,m.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,m.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,m.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const De=m.isCompressedTexture||m.image[0].isCompressedTexture,le=m.image[0]&&m.image[0].isDataTexture,pe=[];for(let se=0;se<6;se++)!De&&!le?pe[se]=v(m.image[se],!0,r.maxCubemapSize):pe[se]=le?m.image[se].image:m.image[se],pe[se]=Q(m,pe[se]);const xe=pe[0],Te=s.convert(m.format,m.colorSpace),he=s.convert(m.type),Ge=w(m.internalFormat,Te,he,m.colorSpace),F=m.isVideoTexture!==!0,ye=H.__version===void 0||k===!0,fe=K.dataReady;let Ae=A(m,xe);Ne(n.TEXTURE_CUBE_MAP,m);let ue;if(De){F&&ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ge,xe.width,xe.height);for(let se=0;se<6;se++){ue=pe[se].mipmaps;for(let me=0;me<ue.length;me++){const ze=ue[me];m.format!==dn?Te!==null?F?fe&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,ze.width,ze.height,Te,ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ge,ze.width,ze.height,0,ze.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,0,0,ze.width,ze.height,Te,he,ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me,Ge,ze.width,ze.height,0,Te,he,ze.data)}}}else{if(ue=m.mipmaps,F&&ye){ue.length>0&&Ae++;const se=re(pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,Ge,se.width,se.height)}for(let se=0;se<6;se++)if(le){F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,pe[se].width,pe[se].height,Te,he,pe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,pe[se].width,pe[se].height,0,Te,he,pe[se].data);for(let me=0;me<ue.length;me++){const ct=ue[me].image[se].image;F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,ct.width,ct.height,Te,he,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ge,ct.width,ct.height,0,Te,he,ct.data)}}else{F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Te,he,pe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ge,Te,he,pe[se]);for(let me=0;me<ue.length;me++){const ze=ue[me];F?fe&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,0,0,Te,he,ze.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,me+1,Ge,Te,he,ze.image[se])}}}g(m)&&d(n.TEXTURE_CUBE_MAP),H.__version=K.version,m.onUpdate&&m.onUpdate(m)}M.__version=m.version}function we(M,m,D,k,K,H){const Me=s.convert(D.format,D.colorSpace),ce=s.convert(D.type),be=w(D.internalFormat,Me,ce,D.colorSpace),De=i.get(m),le=i.get(D);if(le.__renderTarget=m,!De.__hasExternalTextures){const pe=Math.max(1,m.width>>H),xe=Math.max(1,m.height>>H);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,H,be,pe,xe,m.depth,0,Me,ce,null):t.texImage2D(K,H,be,pe,xe,0,Me,ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,M),oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,K,le.__webglTexture,0,b(m)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,K,le.__webglTexture,H),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(M,m,D){if(n.bindRenderbuffer(n.RENDERBUFFER,M),m.depthBuffer){const k=m.depthTexture,K=k&&k.isDepthTexture?k.type:null,H=y(m.stencilBuffer,K),Me=m.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;oe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),H,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),H,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,H,m.width,m.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,M)}else{const k=m.textures;for(let K=0;K<k.length;K++){const H=k[K],Me=s.convert(H.format,H.colorSpace),ce=s.convert(H.type),be=w(H.internalFormat,Me,ce,H.colorSpace);oe(m)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,b(m),be,m.width,m.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,b(m),be,m.width,m.height):n.renderbufferStorage(n.RENDERBUFFER,be,m.width,m.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ce(M,m,D){const k=m.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,M),!(m.depthTexture&&m.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(m.depthTexture);if(K.__renderTarget=m,(!K.__webglTexture||m.depthTexture.image.width!==m.width||m.depthTexture.image.height!==m.height)&&(m.depthTexture.image.width=m.width,m.depthTexture.image.height=m.height,m.depthTexture.needsUpdate=!0),k){if(K.__webglInit===void 0&&(K.__webglInit=!0,m.depthTexture.addEventListener("dispose",R)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m.depthTexture);const De=s.convert(m.depthTexture.format),le=s.convert(m.depthTexture.type);let pe;m.depthTexture.format===Jn?pe=n.DEPTH_COMPONENT24:m.depthTexture.format===Vi&&(pe=n.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,pe,m.width,m.height,0,De,le,null)}}else Z(m.depthTexture,0);const H=K.__webglTexture,Me=b(m),ce=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,be=m.depthTexture.format===Vi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(m.depthTexture.format===Jn)oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,H,0);else if(m.depthTexture.format===Vi)oe(m)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,be,ce,H,0,Me):n.framebufferTexture2D(n.FRAMEBUFFER,be,ce,H,0);else throw new Error("Unknown depthTexture format")}function $e(M){const m=i.get(M),D=M.isWebGLCubeRenderTarget===!0;if(m.__boundDepthTexture!==M.depthTexture){const k=M.depthTexture;if(m.__depthDisposeCallback&&m.__depthDisposeCallback(),k){const K=()=>{delete m.__boundDepthTexture,delete m.__depthDisposeCallback,k.removeEventListener("dispose",K)};k.addEventListener("dispose",K),m.__depthDisposeCallback=K}m.__boundDepthTexture=k}if(M.depthTexture&&!m.__autoAllocateDepthBuffer)if(D)for(let k=0;k<6;k++)Ce(m.__webglFramebuffer[k],M,k);else{const k=M.texture.mipmaps;k&&k.length>0?Ce(m.__webglFramebuffer[0],M,0):Ce(m.__webglFramebuffer,M,0)}else if(D){m.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[k]),m.__webglDepthbuffer[k]===void 0)m.__webglDepthbuffer[k]=n.createRenderbuffer(),Be(m.__webglDepthbuffer[k],M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}else{const k=M.texture.mipmaps;if(k&&k.length>0?t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,m.__webglFramebuffer),m.__webglDepthbuffer===void 0)m.__webglDepthbuffer=n.createRenderbuffer(),Be(m.__webglDepthbuffer,M,!1);else{const K=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,H=m.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,H),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,H)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function P(M,m,D){const k=i.get(M);m!==void 0&&we(k.__webglFramebuffer,M,M.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&$e(M)}function I(M){const m=M.texture,D=i.get(M),k=i.get(m);M.addEventListener("dispose",C);const K=M.textures,H=M.isWebGLCubeRenderTarget===!0,Me=K.length>1;if(Me||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=m.version,a.memory.textures++),H){D.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer[ce]=[];for(let be=0;be<m.mipmaps.length;be++)D.__webglFramebuffer[ce][be]=n.createFramebuffer()}else D.__webglFramebuffer[ce]=n.createFramebuffer()}else{if(m.mipmaps&&m.mipmaps.length>0){D.__webglFramebuffer=[];for(let ce=0;ce<m.mipmaps.length;ce++)D.__webglFramebuffer[ce]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ce=0,be=K.length;ce<be;ce++){const De=i.get(K[ce]);De.__webglTexture===void 0&&(De.__webglTexture=n.createTexture(),a.memory.textures++)}if(M.samples>0&&oe(M)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let ce=0;ce<K.length;ce++){const be=K[ce];D.__webglColorRenderbuffer[ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[ce]);const De=s.convert(be.format,be.colorSpace),le=s.convert(be.type),pe=w(be.internalFormat,De,le,be.colorSpace,M.isXRRenderTarget===!0),xe=b(M);n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,pe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ce,n.RENDERBUFFER,D.__webglColorRenderbuffer[ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),M.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Be(D.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(H){t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Ne(n.TEXTURE_CUBE_MAP,m);for(let ce=0;ce<6;ce++)if(m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)we(D.__webglFramebuffer[ce][be],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,be);else we(D.__webglFramebuffer[ce],M,m,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);g(m)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ce=0,be=K.length;ce<be;ce++){const De=K[ce],le=i.get(De);let pe=n.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,le.__webglTexture),Ne(pe,De),we(D.__webglFramebuffer,M,De,n.COLOR_ATTACHMENT0+ce,pe,0),g(De)&&d(pe)}t.unbindTexture()}else{let ce=n.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ce=M.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ce,k.__webglTexture),Ne(ce,m),m.mipmaps&&m.mipmaps.length>0)for(let be=0;be<m.mipmaps.length;be++)we(D.__webglFramebuffer[be],M,m,n.COLOR_ATTACHMENT0,ce,be);else we(D.__webglFramebuffer,M,m,n.COLOR_ATTACHMENT0,ce,0);g(m)&&d(ce),t.unbindTexture()}M.depthBuffer&&$e(M)}function G(M){const m=M.textures;for(let D=0,k=m.length;D<k;D++){const K=m[D];if(g(K)){const H=T(M),Me=i.get(K).__webglTexture;t.bindTexture(H,Me),d(H),t.unbindTexture()}}}const ee=[],$=[];function ne(M){if(M.samples>0){if(oe(M)===!1){const m=M.textures,D=M.width,k=M.height;let K=n.COLOR_BUFFER_BIT;const H=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(M),ce=m.length>1;if(ce)for(let De=0;De<m.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const be=M.texture.mipmaps;be&&be.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let De=0;De<m.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const le=i.get(m[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,le,0)}n.blitFramebuffer(0,0,D,k,0,0,D,k,K,n.NEAREST),l===!0&&(ee.length=0,$.length=0,ee.push(n.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(ee.push(H),$.push(H),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,$)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ee))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ce)for(let De=0;De<m.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Me.__webglColorRenderbuffer[De]);const le=i.get(m[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const m=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[m])}}}function b(M){return Math.min(r.maxSamples,M.samples)}function oe(M){const m=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&m.__useRenderToTexture!==!1}function ie(M){const m=a.render.frame;u.get(M)!==m&&(u.set(M,m),M.update())}function Q(M,m){const D=M.colorSpace,k=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||D!==Er&&D!==di&&(Ke.getTransfer(D)===it?(k!==dn||K!==an)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",D)),m}function re(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=U,this.setTexture2D=Z,this.setTexture2DArray=X,this.setTexture3D=B,this.setTextureCube=J,this.rebindTextures=P,this.setupRenderTarget=I,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ne,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=we,this.useMultisampledRTT=oe,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function LS(n,e){function t(i,r=di){let s;const a=Ke.getTransfer(r);if(i===an)return n.UNSIGNED_BYTE;if(i===Kl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===jl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===gh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_h)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ph)return n.BYTE;if(i===mh)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===$l)return n.INT;if(i===Rn)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===Zn)return n.HALF_FLOAT;if(i===xh)return n.ALPHA;if(i===vh)return n.RGB;if(i===dn)return n.RGBA;if(i===Jn)return n.DEPTH_COMPONENT;if(i===Vi)return n.DEPTH_STENCIL;if(i===Sh)return n.RED;if(i===Zl)return n.RED_INTEGER;if(i===Mr)return n.RG;if(i===Jl)return n.RG_INTEGER;if(i===Ql)return n.RGBA_INTEGER;if(i===qs||i===Ys||i===$s||i===Ks)if(a===it)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===qs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===qs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ks)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===qo||i===Yo||i===$o||i===Ko)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===qo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$o)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ko)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jo||i===Zo||i===Jo||i===Qo||i===el||i===tl||i===nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===jo||i===Zo)return a===it?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jo)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qo)return s.COMPRESSED_R11_EAC;if(i===el)return s.COMPRESSED_SIGNED_R11_EAC;if(i===tl)return s.COMPRESSED_RG11_EAC;if(i===nl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===il||i===rl||i===sl||i===al||i===ol||i===ll||i===cl||i===ul||i===fl||i===hl||i===dl||i===pl||i===ml||i===gl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===il)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===al)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ol)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ll)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ul)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===dl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ml)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gl)return a===it?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_l||i===xl||i===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===_l)return a===it?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sl||i===Ml||i===El||i===yl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ml)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===El)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ns?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const IS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class NS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nh(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Pn({vertexShader:IS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ei(new Ma(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FS extends br{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,x=null;const v=typeof XRWebGLBinding<"u",g=new NS,d={},T=t.getContextAttributes();let w=null,y=null;const A=[],R=[],C=new st;let N=null;const _=new sn;_.viewport=new gt;const S=new sn;S.viewport=new gt;const L=[_,S],U=new qg;let z=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let ae=A[te];return ae===void 0&&(ae=new uo,A[te]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(te){let ae=A[te];return ae===void 0&&(ae=new uo,A[te]=ae),ae.getGripSpace()},this.getHand=function(te){let ae=A[te];return ae===void 0&&(ae=new uo,A[te]=ae),ae.getHandSpace()};function Z(te){const ae=R.indexOf(te.inputSource);if(ae===-1)return;const we=A[ae];we!==void 0&&(we.update(te.inputSource,te.frame,c||a),we.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",B);for(let te=0;te<A.length;te++){const ae=R[te];ae!==null&&(R[te]=null,A[te].disconnect(ae))}z=null,j=null,g.reset();for(const te in d)delete d[te];e.setRenderTarget(w),p=null,h=null,f=null,r=null,y=null,at.stop(),i.isPresenting=!1,e.setPixelRatio(N),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",X),r.addEventListener("inputsourceschange",B),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Be=null,Ce=null;T.depth&&(Ce=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=T.stencil?Vi:Jn,Be=T.stencil?ns:Rn);const $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer($e),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Cn(h.textureWidth,h.textureHeight,{format:dn,type:an,depthTexture:new ss(h.textureWidth,h.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const we={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,we),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Cn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:an,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),at.setContext(r),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function B(te){for(let ae=0;ae<te.removed.length;ae++){const we=te.removed[ae],Be=R.indexOf(we);Be>=0&&(R[Be]=null,A[Be].disconnect(we))}for(let ae=0;ae<te.added.length;ae++){const we=te.added[ae];let Be=R.indexOf(we);if(Be===-1){for(let $e=0;$e<A.length;$e++)if($e>=R.length){R.push(we),Be=$e;break}else if(R[$e]===null){R[$e]=we,Be=$e;break}if(Be===-1)break}const Ce=A[Be];Ce&&Ce.connect(we)}}const J=new W,ge=new W;function de(te,ae,we){J.setFromMatrixPosition(ae.matrixWorld),ge.setFromMatrixPosition(we.matrixWorld);const Be=J.distanceTo(ge),Ce=ae.projectionMatrix.elements,$e=we.projectionMatrix.elements,P=Ce[14]/(Ce[10]-1),I=Ce[14]/(Ce[10]+1),G=(Ce[9]+1)/Ce[5],ee=(Ce[9]-1)/Ce[5],$=(Ce[8]-1)/Ce[0],ne=($e[8]+1)/$e[0],b=P*$,oe=P*ne,ie=Be/(-$+ne),Q=ie*-$;if(ae.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Q),te.translateZ(ie),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Ce[10]===-1)te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{const re=P+ie,M=I+ie,m=b-Q,D=oe+(Be-Q),k=G*I/M*re,K=ee*I/M*re;te.projectionMatrix.makePerspective(m,D,k,K,re,M),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function _e(te,ae){ae===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(ae.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let ae=te.near,we=te.far;g.texture!==null&&(g.depthNear>0&&(ae=g.depthNear),g.depthFar>0&&(we=g.depthFar)),U.near=S.near=_.near=ae,U.far=S.far=_.far=we,(z!==U.near||j!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),z=U.near,j=U.far),U.layers.mask=te.layers.mask|6,_.layers.mask=U.layers.mask&3,S.layers.mask=U.layers.mask&5;const Be=te.parent,Ce=U.cameras;_e(U,Be);for(let $e=0;$e<Ce.length;$e++)_e(Ce[$e],Be);Ce.length===2?de(U,_,S):U.projectionMatrix.copy(_.projectionMatrix),Ne(te,U,Be)};function Ne(te,ae,we){we===null?te.matrix.copy(ae.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(ae.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(ae.projectionMatrix),te.projectionMatrixInverse.copy(ae.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=bl*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(te){return d[te]};let He=null;function ht(te,ae){if(u=ae.getViewerPose(c||a),x=ae,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let Be=!1;we.length!==U.cameras.length&&(U.cameras.length=0,Be=!0);for(let I=0;I<we.length;I++){const G=we[I];let ee=null;if(p!==null)ee=p.getViewport(G);else{const ne=f.getViewSubImage(h,G);ee=ne.viewport,I===0&&(e.setRenderTargetTextures(y,ne.colorTexture,ne.depthStencilTexture),e.setRenderTarget(y))}let $=L[I];$===void 0&&($=new sn,$.layers.enable(I),$.viewport=new gt,L[I]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(ee.x,ee.y,ee.width,ee.height),I===0&&(U.matrix.copy($.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Be===!0&&U.cameras.push($)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const I=f.getDepthInformation(we[0]);I&&I.isValid&&I.texture&&g.init(I,r.renderState)}if(Ce&&Ce.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let I=0;I<we.length;I++){const G=we[I].camera;if(G){let ee=d[G];ee||(ee=new Nh,d[G]=ee);const $=f.getCameraImage(G);ee.sourceTexture=$}}}}for(let we=0;we<A.length;we++){const Be=R[we],Ce=A[we];Be!==null&&Ce!==void 0&&Ce.update(Be,ae,c||a)}He&&He(te,ae),ae.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ae}),x=null}const at=new Oh;at.setAnimationLoop(ht),this.setAnimationLoop=function(te){He=te},this.dispose=function(){}}}const Ii=new Qn,OS=new _t;function BS(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,Rh(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,T,w,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),u(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),v(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,T,w):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===Xt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===Xt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const T=e.get(d),w=T.envMap,y=T.envMapRotation;w&&(g.envMap.value=w,Ii.copy(y),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),g.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Ii)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,T,w){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*T,g.scale.value=w*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,T){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Xt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function v(g,d){const T=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function zS(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,w){const y=w.program;i.uniformBlockBinding(T,y)}function c(T,w){let y=r[T.id];y===void 0&&(x(T),y=u(T),r[T.id]=y,T.addEventListener("dispose",g));const A=w.program;i.updateUBOMapping(T,A);const R=e.render.frame;s[T.id]!==R&&(h(T),s[T.id]=R)}function u(T){const w=f();T.__bindingPointIndex=w;const y=n.createBuffer(),A=T.__size,R=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const w=r[T.id],y=T.uniforms,A=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let R=0,C=y.length;R<C;R++){const N=Array.isArray(y[R])?y[R]:[y[R]];for(let _=0,S=N.length;_<S;_++){const L=N[_];if(p(L,R,_,A)===!0){const U=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let j=0;for(let Z=0;Z<z.length;Z++){const X=z[Z],B=v(X);typeof X=="number"||typeof X=="boolean"?(L.__data[0]=X,n.bufferSubData(n.UNIFORM_BUFFER,U+j,L.__data)):X.isMatrix3?(L.__data[0]=X.elements[0],L.__data[1]=X.elements[1],L.__data[2]=X.elements[2],L.__data[3]=0,L.__data[4]=X.elements[3],L.__data[5]=X.elements[4],L.__data[6]=X.elements[5],L.__data[7]=0,L.__data[8]=X.elements[6],L.__data[9]=X.elements[7],L.__data[10]=X.elements[8],L.__data[11]=0):(X.toArray(L.__data,j),j+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(T,w,y,A){const R=T.value,C=w+"_"+y;if(A[C]===void 0)return typeof R=="number"||typeof R=="boolean"?A[C]=R:A[C]=R.clone(),!0;{const N=A[C];if(typeof R=="number"||typeof R=="boolean"){if(N!==R)return A[C]=R,!0}else if(N.equals(R)===!1)return N.copy(R),!0}return!1}function x(T){const w=T.uniforms;let y=0;const A=16;for(let C=0,N=w.length;C<N;C++){const _=Array.isArray(w[C])?w[C]:[w[C]];for(let S=0,L=_.length;S<L;S++){const U=_[S],z=Array.isArray(U.value)?U.value:[U.value];for(let j=0,Z=z.length;j<Z;j++){const X=z[j],B=v(X),J=y%A,ge=J%B.boundary,de=J+ge;y+=ge,de!==0&&A-de<B.storage&&(y+=A-de),U.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=B.storage}}}const R=y%A;return R>0&&(y+=A-R),T.__size=y,T.__cache={},this}function v(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ve("WebGLRenderer: Unsupported uniform value type.",T),w}function g(T){const w=T.target;w.removeEventListener("dispose",g);const y=a.indexOf(w.__bindingPointIndex);a.splice(y,1),n.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function d(){for(const T in r)n.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}const VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Sn=null;function HS(){return Sn===null&&(Sn=new Ig(VS,16,16,Mr,Zn),Sn.name="DFG_LUT",Sn.minFilter=Pt,Sn.magFilter=Pt,Sn.wrapS=Wn,Sn.wrapT=Wn,Sn.generateMipmaps=!1,Sn.needsUpdate=!0),Sn}class GS{constructor(e={}){const{canvas:t=ag(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:p=an}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=a;const v=p,g=new Set([Ql,Jl,Zl]),d=new Set([an,Rn,ts,ns,Kl,jl]),T=new Uint32Array(4),w=new Int32Array(4);let y=null,A=null;const R=[],C=[];let N=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const _=this;let S=!1;this._outputColorSpace=nn;let L=0,U=0,z=null,j=-1,Z=null;const X=new gt,B=new gt;let J=null;const ge=new Qe(0);let de=0,_e=t.width,Ne=t.height,He=1,ht=null,at=null;const te=new gt(0,0,_e,Ne),ae=new gt(0,0,_e,Ne);let we=!1;const Be=new Ih;let Ce=!1,$e=!1;const P=new _t,I=new W,G=new gt,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ne(){return z===null?He:1}let b=i;function oe(E,O){return t.getContext(E,O)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yl}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",tt,!1),b===null){const O="webgl2";if(b=oe(O,E),b===null)throw oe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ze("WebGLRenderer: "+E.message),E}let ie,Q,re,M,m,D,k,K,H,Me,ce,be,De,le,pe,xe,Te,he,Ge,F,ye,fe,Ae,ue;function se(){ie=new Hx(b),ie.init(),fe=new LS(b,ie),Q=new Lx(b,ie,e,fe),re=new PS(b,ie),Q.reversedDepthBuffer&&h&&re.buffers.depth.setReversed(!0),M=new Wx(b),m=new mS,D=new DS(b,ie,re,m,Q,fe,M),k=new Ux(_),K=new Vx(_),H=new $g(b),Ae=new Px(b,H),Me=new Gx(b,H,M,Ae),ce=new qx(b,Me,H,M),Ge=new Xx(b,Q,D),xe=new Ix(m),be=new pS(_,k,K,ie,Q,Ae,xe),De=new BS(_,m),le=new _S,pe=new yS(ie),he=new Rx(_,k,K,re,ce,x,l),Te=new CS(_,ce,Q),ue=new zS(b,M,Q,re),F=new Dx(b,ie,M),ye=new kx(b,ie,M),M.programs=be.programs,_.capabilities=Q,_.extensions=ie,_.properties=m,_.renderLists=le,_.shadowMap=Te,_.state=re,_.info=M}se(),v!==an&&(N=new $x(v,t.width,t.height,r,s));const me=new FS(_,b);this.xr=me,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(E){E!==void 0&&(He=E,this.setSize(_e,Ne,!1))},this.getSize=function(E){return E.set(_e,Ne)},this.setSize=function(E,O,Y=!0){if(me.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}_e=E,Ne=O,t.width=Math.floor(E*He),t.height=Math.floor(O*He),Y===!0&&(t.style.width=E+"px",t.style.height=O+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(_e*He,Ne*He).floor()},this.setDrawingBufferSize=function(E,O,Y){_e=E,Ne=O,He=Y,t.width=Math.floor(E*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,E,O)},this.setEffects=function(E){if(v===an){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let O=0;O<E.length;O++)if(E[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(X)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,O,Y,q){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,O,Y,q),re.viewport(X.copy(te).multiplyScalar(He).round())},this.getScissor=function(E){return E.copy(ae)},this.setScissor=function(E,O,Y,q){E.isVector4?ae.set(E.x,E.y,E.z,E.w):ae.set(E,O,Y,q),re.scissor(B.copy(ae).multiplyScalar(He).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(E){re.setScissorTest(we=E)},this.setOpaqueSort=function(E){ht=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor(...arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha(...arguments)},this.clear=function(E=!0,O=!0,Y=!0){let q=0;if(E){let V=!1;if(z!==null){const ve=z.texture.format;V=g.has(ve)}if(V){const ve=z.texture.type,Re=d.has(ve),Ee=he.getClearColor(),Pe=he.getClearAlpha(),Le=Ee.r,Fe=Ee.g,Ie=Ee.b;Re?(T[0]=Le,T[1]=Fe,T[2]=Ie,T[3]=Pe,b.clearBufferuiv(b.COLOR,0,T)):(w[0]=Le,w[1]=Fe,w[2]=Ie,w[3]=Pe,b.clearBufferiv(b.COLOR,0,w))}else q|=b.COLOR_BUFFER_BIT}O&&(q|=b.DEPTH_BUFFER_BIT),Y&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",tt,!1),he.dispose(),le.dispose(),pe.dispose(),m.dispose(),k.dispose(),K.dispose(),ce.dispose(),Ae.dispose(),ue.dispose(),be.dispose(),me.dispose(),me.removeEventListener("sessionstart",ac),me.removeEventListener("sessionend",oc),Ei.stop()};function ze(E){E.preventDefault(),Qc("WebGLRenderer: Context Lost."),S=!0}function ct(){Qc("WebGLRenderer: Context Restored."),S=!1;const E=M.autoReset,O=Te.enabled,Y=Te.autoUpdate,q=Te.needsUpdate,V=Te.type;se(),M.autoReset=E,Te.enabled=O,Te.autoUpdate=Y,Te.needsUpdate=q,Te.type=V}function tt(E){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function xn(E){const O=E.target;O.removeEventListener("dispose",xn),Dn(O)}function Dn(E){Gh(E),m.remove(E)}function Gh(E){const O=m.get(E).programs;O!==void 0&&(O.forEach(function(Y){be.releaseProgram(Y)}),E.isShaderMaterial&&be.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,Y,q,V,ve){O===null&&(O=ee);const Re=V.isMesh&&V.matrixWorld.determinant()<0,Ee=Wh(E,O,Y,q,V);re.setMaterial(q,Re);let Pe=Y.index,Le=1;if(q.wireframe===!0){if(Pe=Me.getWireframeAttribute(Y),Pe===void 0)return;Le=2}const Fe=Y.drawRange,Ie=Y.attributes.position;let qe=Fe.start*Le,rt=(Fe.start+Fe.count)*Le;ve!==null&&(qe=Math.max(qe,ve.start*Le),rt=Math.min(rt,(ve.start+ve.count)*Le)),Pe!==null?(qe=Math.max(qe,0),rt=Math.min(rt,Pe.count)):Ie!=null&&(qe=Math.max(qe,0),rt=Math.min(rt,Ie.count));const pt=rt-qe;if(pt<0||pt===1/0)return;Ae.setup(V,q,Ee,Y,Pe);let mt,ot=F;if(Pe!==null&&(mt=H.get(Pe),ot=ye,ot.setIndex(mt)),V.isMesh)q.wireframe===!0?(re.setLineWidth(q.wireframeLinewidth*ne()),ot.setMode(b.LINES)):ot.setMode(b.TRIANGLES);else if(V.isLine){let Ue=q.linewidth;Ue===void 0&&(Ue=1),re.setLineWidth(Ue*ne()),V.isLineSegments?ot.setMode(b.LINES):V.isLineLoop?ot.setMode(b.LINE_LOOP):ot.setMode(b.LINE_STRIP)}else V.isPoints?ot.setMode(b.POINTS):V.isSprite&&ot.setMode(b.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)rs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ot.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))ot.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ue=V._multiDrawStarts,nt=V._multiDrawCounts,je=V._multiDrawCount,Yt=Pe?H.get(Pe).bytesPerElement:1,qi=m.get(q).currentProgram.getUniforms();for(let $t=0;$t<je;$t++)qi.setValue(b,"_gl_DrawID",$t),ot.render(Ue[$t]/Yt,nt[$t])}else if(V.isInstancedMesh)ot.renderInstances(qe,pt,V.count);else if(Y.isInstancedBufferGeometry){const Ue=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,nt=Math.min(Y.instanceCount,Ue);ot.renderInstances(qe,pt,nt)}else ot.render(qe,pt)};function sc(E,O,Y){E.transparent===!0&&E.side===kn&&E.forceSinglePass===!1?(E.side=Xt,E.needsUpdate=!0,ps(E,O,Y),E.side=Si,E.needsUpdate=!0,ps(E,O,Y),E.side=kn):ps(E,O,Y)}this.compile=function(E,O,Y=null){Y===null&&(Y=E),A=pe.get(Y),A.init(O),C.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),E!==Y&&E.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights();const q=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ve=V.material;if(ve)if(Array.isArray(ve))for(let Re=0;Re<ve.length;Re++){const Ee=ve[Re];sc(Ee,Y,V),q.add(Ee)}else sc(ve,Y,V),q.add(ve)}),A=C.pop(),q},this.compileAsync=function(E,O,Y=null){const q=this.compile(E,O,Y);return new Promise(V=>{function ve(){if(q.forEach(function(Re){m.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){V(E);return}setTimeout(ve,10)}ie.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Ta=null;function kh(E){Ta&&Ta(E)}function ac(){Ei.stop()}function oc(){Ei.start()}const Ei=new Oh;Ei.setAnimationLoop(kh),typeof self<"u"&&Ei.setContext(self),this.setAnimationLoop=function(E){Ta=E,me.setAnimationLoop(E),E===null?Ei.stop():Ei.start()},me.addEventListener("sessionstart",ac),me.addEventListener("sessionend",oc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Y=me.enabled===!0&&me.isPresenting===!0,q=N!==null&&(z===null||Y)&&N.begin(_,z);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),me.enabled===!0&&me.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(me.cameraAutoUpdate===!0&&me.updateCamera(O),O=me.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,z),A=pe.get(E,C.length),A.init(O),C.push(A),P.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Be.setFromProjectionMatrix(P,Tn,O.reversedDepth),$e=this.localClippingEnabled,Ce=xe.init(this.clippingPlanes,$e),y=le.get(E,R.length),y.init(),R.push(y),me.enabled===!0&&me.isPresenting===!0){const Re=_.xr.getDepthSensingMesh();Re!==null&&Aa(Re,O,-1/0,_.sortObjects)}Aa(E,O,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(ht,at),$=me.enabled===!1||me.isPresenting===!1||me.hasDepthSensing()===!1,$&&he.addToRenderList(y,E),this.info.render.frame++,Ce===!0&&xe.beginShadows();const V=A.state.shadowsArray;if(Te.render(V,E,O),Ce===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(q&&N.hasRenderPass())===!1){const Re=y.opaque,Ee=y.transmissive;if(A.setupLights(),O.isArrayCamera){const Pe=O.cameras;if(Ee.length>0)for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le];cc(Re,Ee,E,Ie)}$&&he.render(E);for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le];lc(y,E,Ie,Ie.viewport)}}else Ee.length>0&&cc(Re,Ee,E,O),$&&he.render(E),lc(y,E,O)}z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),q&&N.end(_),E.isScene===!0&&E.onAfterRender(_,E,O),Ae.resetDefaultState(),j=-1,Z=null,C.pop(),C.length>0?(A=C[C.length-1],Ce===!0&&xe.setGlobalState(_.clippingPlanes,A.state.camera)):A=null,R.pop(),R.length>0?y=R[R.length-1]:y=null};function Aa(E,O,Y,q){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Be.intersectsSprite(E)){q&&G.setFromMatrixPosition(E.matrixWorld).applyMatrix4(P);const Re=ce.update(E),Ee=E.material;Ee.visible&&y.push(E,Re,Ee,Y,G.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Be.intersectsObject(E))){const Re=ce.update(E),Ee=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),G.copy(E.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),G.copy(Re.boundingSphere.center)),G.applyMatrix4(E.matrixWorld).applyMatrix4(P)),Array.isArray(Ee)){const Pe=Re.groups;for(let Le=0,Fe=Pe.length;Le<Fe;Le++){const Ie=Pe[Le],qe=Ee[Ie.materialIndex];qe&&qe.visible&&y.push(E,Re,qe,Y,G.z,Ie)}}else Ee.visible&&y.push(E,Re,Ee,Y,G.z,null)}}const ve=E.children;for(let Re=0,Ee=ve.length;Re<Ee;Re++)Aa(ve[Re],O,Y,q)}function lc(E,O,Y,q){const{opaque:V,transmissive:ve,transparent:Re}=E;A.setupLightsView(Y),Ce===!0&&xe.setGlobalState(_.clippingPlanes,Y),q&&re.viewport(X.copy(q)),V.length>0&&ds(V,O,Y),ve.length>0&&ds(ve,O,Y),Re.length>0&&ds(Re,O,Y),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function cc(E,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[q.id]===void 0){const qe=ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[q.id]=new Cn(1,1,{generateMipmaps:!0,type:qe?Zn:an,minFilter:zi,samples:Q.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ke.workingColorSpace})}const ve=A.state.transmissionRenderTarget[q.id],Re=q.viewport||X;ve.setSize(Re.z*_.transmissionResolutionScale,Re.w*_.transmissionResolutionScale);const Ee=_.getRenderTarget(),Pe=_.getActiveCubeFace(),Le=_.getActiveMipmapLevel();_.setRenderTarget(ve),_.getClearColor(ge),de=_.getClearAlpha(),de<1&&_.setClearColor(16777215,.5),_.clear(),$&&he.render(Y);const Fe=_.toneMapping;_.toneMapping=wn;const Ie=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),A.setupLightsView(q),Ce===!0&&xe.setGlobalState(_.clippingPlanes,q),ds(E,Y,q),D.updateMultisampleRenderTarget(ve),D.updateRenderTargetMipmap(ve),ie.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let rt=0,pt=O.length;rt<pt;rt++){const mt=O[rt],{object:ot,geometry:Ue,material:nt,group:je}=mt;if(nt.side===kn&&ot.layers.test(q.layers)){const Yt=nt.side;nt.side=Xt,nt.needsUpdate=!0,uc(ot,Y,q,Ue,nt,je),nt.side=Yt,nt.needsUpdate=!0,qe=!0}}qe===!0&&(D.updateMultisampleRenderTarget(ve),D.updateRenderTargetMipmap(ve))}_.setRenderTarget(Ee,Pe,Le),_.setClearColor(ge,de),Ie!==void 0&&(q.viewport=Ie),_.toneMapping=Fe}function ds(E,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let V=0,ve=E.length;V<ve;V++){const Re=E[V],{object:Ee,geometry:Pe,group:Le}=Re;let Fe=Re.material;Fe.allowOverride===!0&&q!==null&&(Fe=q),Ee.layers.test(Y.layers)&&uc(Ee,O,Y,Pe,Fe,Le)}}function uc(E,O,Y,q,V,ve){E.onBeforeRender(_,O,Y,q,V,ve),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(_,O,Y,q,E,ve),V.transparent===!0&&V.side===kn&&V.forceSinglePass===!1?(V.side=Xt,V.needsUpdate=!0,_.renderBufferDirect(Y,O,q,V,E,ve),V.side=Si,V.needsUpdate=!0,_.renderBufferDirect(Y,O,q,V,E,ve),V.side=kn):_.renderBufferDirect(Y,O,q,V,E,ve),E.onAfterRender(_,O,Y,q,V,ve)}function ps(E,O,Y){O.isScene!==!0&&(O=ee);const q=m.get(E),V=A.state.lights,ve=A.state.shadowsArray,Re=V.state.version,Ee=be.getParameters(E,V.state,ve,O,Y),Pe=be.getProgramCacheKey(Ee);let Le=q.programs;q.environment=E.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(E.isMeshStandardMaterial?K:k).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Le===void 0&&(E.addEventListener("dispose",xn),Le=new Map,q.programs=Le);let Fe=Le.get(Pe);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===Re)return hc(E,Ee),Fe}else Ee.uniforms=be.getUniforms(E),E.onBeforeCompile(Ee,_),Fe=be.acquireProgram(Ee,Pe),Le.set(Pe,Fe),q.uniforms=Ee.uniforms;const Ie=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=xe.uniform),hc(E,Ee),q.needsLights=qh(E),q.lightsStateVersion=Re,q.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function fc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=js.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function hc(E,O){const Y=m.get(E);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Wh(E,O,Y,q,V){O.isScene!==!0&&(O=ee),D.resetTextureUnits();const ve=O.fog,Re=q.isMeshStandardMaterial?O.environment:null,Ee=z===null?_.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Er,Pe=(q.isMeshStandardMaterial?K:k).get(q.envMap||Re),Le=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Fe=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ie=!!Y.morphAttributes.position,qe=!!Y.morphAttributes.normal,rt=!!Y.morphAttributes.color;let pt=wn;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(pt=_.toneMapping);const mt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ot=mt!==void 0?mt.length:0,Ue=m.get(q),nt=A.state.lights;if(Ce===!0&&($e===!0||E!==Z)){const It=E===Z&&q.id===j;xe.setState(q,E,It)}let je=!1;q.version===Ue.__version?(Ue.needsLights&&Ue.lightsStateVersion!==nt.state.version||Ue.outputColorSpace!==Ee||V.isBatchedMesh&&Ue.batching===!1||!V.isBatchedMesh&&Ue.batching===!0||V.isBatchedMesh&&Ue.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ue.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ue.instancing===!1||!V.isInstancedMesh&&Ue.instancing===!0||V.isSkinnedMesh&&Ue.skinning===!1||!V.isSkinnedMesh&&Ue.skinning===!0||V.isInstancedMesh&&Ue.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ue.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ue.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ue.instancingMorph===!1&&V.morphTexture!==null||Ue.envMap!==Pe||q.fog===!0&&Ue.fog!==ve||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==xe.numPlanes||Ue.numIntersection!==xe.numIntersection)||Ue.vertexAlphas!==Le||Ue.vertexTangents!==Fe||Ue.morphTargets!==Ie||Ue.morphNormals!==qe||Ue.morphColors!==rt||Ue.toneMapping!==pt||Ue.morphTargetsCount!==ot)&&(je=!0):(je=!0,Ue.__version=q.version);let Yt=Ue.currentProgram;je===!0&&(Yt=ps(q,O,V));let qi=!1,$t=!1,Ar=!1;const ut=Yt.getUniforms(),Ht=Ue.uniforms;if(re.useProgram(Yt.program)&&(qi=!0,$t=!0,Ar=!0),q.id!==j&&(j=q.id,$t=!0),qi||Z!==E){re.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),ut.setValue(b,"projectionMatrix",E.projectionMatrix),ut.setValue(b,"viewMatrix",E.matrixWorldInverse);const Gt=ut.map.cameraPosition;Gt!==void 0&&Gt.setValue(b,I.setFromMatrixPosition(E.matrixWorld)),Q.logarithmicDepthBuffer&&ut.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ut.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,$t=!0,Ar=!0)}if(Ue.needsLights&&(nt.state.directionalShadowMap.length>0&&ut.setValue(b,"directionalShadowMap",nt.state.directionalShadowMap,D),nt.state.spotShadowMap.length>0&&ut.setValue(b,"spotShadowMap",nt.state.spotShadowMap,D),nt.state.pointShadowMap.length>0&&ut.setValue(b,"pointShadowMap",nt.state.pointShadowMap,D)),V.isSkinnedMesh){ut.setOptional(b,V,"bindMatrix"),ut.setOptional(b,V,"bindMatrixInverse");const It=V.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),ut.setValue(b,"boneTexture",It.boneTexture,D))}V.isBatchedMesh&&(ut.setOptional(b,V,"batchingTexture"),ut.setValue(b,"batchingTexture",V._matricesTexture,D),ut.setOptional(b,V,"batchingIdTexture"),ut.setValue(b,"batchingIdTexture",V._indirectTexture,D),ut.setOptional(b,V,"batchingColorTexture"),V._colorsTexture!==null&&ut.setValue(b,"batchingColorTexture",V._colorsTexture,D));const Qt=Y.morphAttributes;if((Qt.position!==void 0||Qt.normal!==void 0||Qt.color!==void 0)&&Ge.update(V,Y,Yt),($t||Ue.receiveShadow!==V.receiveShadow)&&(Ue.receiveShadow=V.receiveShadow,ut.setValue(b,"receiveShadow",V.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ht.envMap.value=Pe,Ht.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Ht.envMapIntensity.value=O.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=HS()),$t&&(ut.setValue(b,"toneMappingExposure",_.toneMappingExposure),Ue.needsLights&&Xh(Ht,Ar),ve&&q.fog===!0&&De.refreshFogUniforms(Ht,ve),De.refreshMaterialUniforms(Ht,q,He,Ne,A.state.transmissionRenderTarget[E.id]),js.upload(b,fc(Ue),Ht,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(js.upload(b,fc(Ue),Ht,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ut.setValue(b,"center",V.center),ut.setValue(b,"modelViewMatrix",V.modelViewMatrix),ut.setValue(b,"normalMatrix",V.normalMatrix),ut.setValue(b,"modelMatrix",V.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const It=q.uniformsGroups;for(let Gt=0,wa=It.length;Gt<wa;Gt++){const yi=It[Gt];ue.update(yi,Yt),ue.bind(yi,Yt)}}return Yt}function Xh(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function qh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(E,O,Y){const q=m.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),m.get(E.texture).__webglTexture=O,m.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,O){const Y=m.get(E);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const Yh=b.createFramebuffer();this.setRenderTarget=function(E,O=0,Y=0){z=E,L=O,U=Y;let q=null,V=!1,ve=!1;if(E){const Ee=m.get(E);if(Ee.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(b.FRAMEBUFFER,Ee.__webglFramebuffer),X.copy(E.viewport),B.copy(E.scissor),J=E.scissorTest,re.viewport(X),re.scissor(B),re.setScissorTest(J),j=-1;return}else if(Ee.__webglFramebuffer===void 0)D.setupRenderTarget(E);else if(Ee.__hasExternalTextures)D.rebindTextures(E,m.get(E.texture).__webglTexture,m.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Fe=E.depthTexture;if(Ee.__boundDepthTexture!==Fe){if(Fe!==null&&m.has(Fe)&&(E.width!==Fe.image.width||E.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ve=!0);const Le=m.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?q=Le[O][Y]:q=Le[O],V=!0):E.samples>0&&D.useMultisampledRTT(E)===!1?q=m.get(E).__webglMultisampledFramebuffer:Array.isArray(Le)?q=Le[Y]:q=Le,X.copy(E.viewport),B.copy(E.scissor),J=E.scissorTest}else X.copy(te).multiplyScalar(He).floor(),B.copy(ae).multiplyScalar(He).floor(),J=we;if(Y!==0&&(q=Yh),re.bindFramebuffer(b.FRAMEBUFFER,q)&&re.drawBuffers(E,q),re.viewport(X),re.scissor(B),re.setScissorTest(J),V){const Ee=m.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ee.__webglTexture,Y)}else if(ve){const Ee=O;for(let Pe=0;Pe<E.textures.length;Pe++){const Le=m.get(E.textures[Pe]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Pe,Le.__webglTexture,Y,Ee)}}else if(E!==null&&Y!==0){const Ee=m.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ee.__webglTexture,Y)}j=-1},this.readRenderTargetPixels=function(E,O,Y,q,V,ve,Re,Ee=0){if(!(E&&E.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe){re.bindFramebuffer(b.FRAMEBUFFER,Pe);try{const Le=E.textures[Ee],Fe=Le.format,Ie=Le.type;if(!Q.textureFormatReadable(Fe)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Q.textureTypeReadable(Ie)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-q&&Y>=0&&Y<=E.height-V&&(E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ee),b.readPixels(O,Y,q,V,fe.convert(Fe),fe.convert(Ie),ve))}finally{const Le=z!==null?m.get(z).__webglFramebuffer:null;re.bindFramebuffer(b.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(E,O,Y,q,V,ve,Re,Ee=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=m.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Re!==void 0&&(Pe=Pe[Re]),Pe)if(O>=0&&O<=E.width-q&&Y>=0&&Y<=E.height-V){re.bindFramebuffer(b.FRAMEBUFFER,Pe);const Le=E.textures[Ee],Fe=Le.format,Ie=Le.type;if(!Q.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Q.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,qe),b.bufferData(b.PIXEL_PACK_BUFFER,ve.byteLength,b.STREAM_READ),E.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+Ee),b.readPixels(O,Y,q,V,fe.convert(Fe),fe.convert(Ie),0);const rt=z!==null?m.get(z).__webglFramebuffer:null;re.bindFramebuffer(b.FRAMEBUFFER,rt);const pt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await og(b,pt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,qe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ve),b.deleteBuffer(qe),b.deleteSync(pt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,O=null,Y=0){const q=Math.pow(2,-Y),V=Math.floor(E.image.width*q),ve=Math.floor(E.image.height*q),Re=O!==null?O.x:0,Ee=O!==null?O.y:0;D.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,Y,0,0,Re,Ee,V,ve),re.unbindTexture()};const $h=b.createFramebuffer(),Kh=b.createFramebuffer();this.copyTextureToTexture=function(E,O,Y=null,q=null,V=0,ve=null){ve===null&&(V!==0?(rs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ve=V,V=0):ve=0);let Re,Ee,Pe,Le,Fe,Ie,qe,rt,pt;const mt=E.isCompressedTexture?E.mipmaps[ve]:E.image;if(Y!==null)Re=Y.max.x-Y.min.x,Ee=Y.max.y-Y.min.y,Pe=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Fe=Y.min.y,Ie=Y.isBox3?Y.min.z:0;else{const Qt=Math.pow(2,-V);Re=Math.floor(mt.width*Qt),Ee=Math.floor(mt.height*Qt),E.isDataArrayTexture?Pe=mt.depth:E.isData3DTexture?Pe=Math.floor(mt.depth*Qt):Pe=1,Le=0,Fe=0,Ie=0}q!==null?(qe=q.x,rt=q.y,pt=q.z):(qe=0,rt=0,pt=0);const ot=fe.convert(O.format),Ue=fe.convert(O.type);let nt;O.isData3DTexture?(D.setTexture3D(O,0),nt=b.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(D.setTexture2DArray(O,0),nt=b.TEXTURE_2D_ARRAY):(D.setTexture2D(O,0),nt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,O.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,O.unpackAlignment);const je=b.getParameter(b.UNPACK_ROW_LENGTH),Yt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),qi=b.getParameter(b.UNPACK_SKIP_PIXELS),$t=b.getParameter(b.UNPACK_SKIP_ROWS),Ar=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,mt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,mt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Le),b.pixelStorei(b.UNPACK_SKIP_ROWS,Fe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ie);const ut=E.isDataArrayTexture||E.isData3DTexture,Ht=O.isDataArrayTexture||O.isData3DTexture;if(E.isDepthTexture){const Qt=m.get(E),It=m.get(O),Gt=m.get(Qt.__renderTarget),wa=m.get(It.__renderTarget);re.bindFramebuffer(b.READ_FRAMEBUFFER,Gt.__webglFramebuffer),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,wa.__webglFramebuffer);for(let yi=0;yi<Pe;yi++)ut&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(E).__webglTexture,V,Ie+yi),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,m.get(O).__webglTexture,ve,pt+yi)),b.blitFramebuffer(Le,Fe,Re,Ee,qe,rt,Re,Ee,b.DEPTH_BUFFER_BIT,b.NEAREST);re.bindFramebuffer(b.READ_FRAMEBUFFER,null),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||m.has(E)){const Qt=m.get(E),It=m.get(O);re.bindFramebuffer(b.READ_FRAMEBUFFER,$h),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,Kh);for(let Gt=0;Gt<Pe;Gt++)ut?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Qt.__webglTexture,V,Ie+Gt):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Qt.__webglTexture,V),Ht?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,ve,pt+Gt):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,It.__webglTexture,ve),V!==0?b.blitFramebuffer(Le,Fe,Re,Ee,qe,rt,Re,Ee,b.COLOR_BUFFER_BIT,b.NEAREST):Ht?b.copyTexSubImage3D(nt,ve,qe,rt,pt+Gt,Le,Fe,Re,Ee):b.copyTexSubImage2D(nt,ve,qe,rt,Le,Fe,Re,Ee);re.bindFramebuffer(b.READ_FRAMEBUFFER,null),re.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Ht?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(nt,ve,qe,rt,pt,Re,Ee,Pe,ot,Ue,mt.data):O.isCompressedArrayTexture?b.compressedTexSubImage3D(nt,ve,qe,rt,pt,Re,Ee,Pe,ot,mt.data):b.texSubImage3D(nt,ve,qe,rt,pt,Re,Ee,Pe,ot,Ue,mt):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,ve,qe,rt,Re,Ee,ot,Ue,mt.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,ve,qe,rt,mt.width,mt.height,ot,mt.data):b.texSubImage2D(b.TEXTURE_2D,ve,qe,rt,Re,Ee,ot,Ue,mt);b.pixelStorei(b.UNPACK_ROW_LENGTH,je),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Yt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,qi),b.pixelStorei(b.UNPACK_SKIP_ROWS,$t),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Ar),ve===0&&O.generateMipmaps&&b.generateMipmap(nt),re.unbindTexture()},this.initRenderTarget=function(E){m.get(E).__webglFramebuffer===void 0&&D.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?D.setTextureCube(E,0):E.isData3DTexture?D.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?D.setTexture2DArray(E,0):D.setTexture2D(E,0),re.unbindTexture()},this.resetState=function(){L=0,U=0,z=null,re.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ke._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ke._getUnpackColorSpace()}}const Hi=window.innerWidth<768,yt={particleCount:Hi?3500:7e3,particleSize:Hi?1.8:1.2,textScale:Hi?.2:.25,canvasFont:Hi?'900 80px "Microsoft YaHei", sans-serif':'900 120px "Microsoft YaHei", sans-serif'};function cr(n){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=Hi?512:1024,e.height=256,t.fillStyle="black",t.fillRect(0,0,e.width,e.height),t.fillStyle="white",t.font=yt.canvasFont,t.textAlign="center",t.textBaseline="middle",n.includes(`
`)||Hi&&n.length>5,t.fillText(n,e.width/2,e.height/2);const i=t.getImageData(0,0,e.width,e.height),r=[],s=Hi?3:2;for(let a=0;a<e.height;a+=s)for(let o=0;o<e.width;o+=s)i.data[(a*e.width+o)*4]>100&&r.push({x:(o-e.width/2)*yt.textScale,y:-(a-e.height/2)*yt.textScale,z:0});return r}function kS(n){const e=[];for(let t=0;t<n;t++){const i=Math.random()*Math.PI*2,r=16*Math.pow(Math.sin(i),3),s=13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i);e.push({x:r*2.5,y:s*2.5,z:(Math.random()-.5)*20})}return e}function WS(n){const e=[];for(let t=0;t<n;t++){const i=Math.random()*Math.PI*2,r=Math.acos(2*Math.random()-1),s=30+Math.random()*40;e.push({x:s*Math.sin(r)*Math.cos(i),y:s*Math.sin(r)*Math.sin(i),z:s*Math.cos(r)})}return e}function XS(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*120;let r;i>0?r=i*.8+2:r=-i*.8+2;const s=Math.random()*Math.PI*2;e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}function qS(n){const e=[];for(let t=0;t<n;t++){const i=(Math.random()-.5)*120;let r=0;i>30?r=10*(60-i)/30:i>-40?r=10:r=10+(-40-i)*.8,r<0&&(r=0);const s=Math.random()*Math.PI*2;e.push({x:r*Math.cos(s),y:i,z:r*Math.sin(s)})}return e}const ba=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},YS={__name:"ParticleScene",props:{currentShape:String,currentText:String,currentTheme:String,customColor:String,explosionForce:Number,isExploded:Boolean},setup(n){const e=n,t=Ft(null);let i,r,s,a,o,l,c=[],u=[],f;const h=window.innerWidth<768;let p=0;const x=async()=>{i=new Lg,i.fog=new ic(0,.0015),r=new sn(75,window.innerWidth/window.innerHeight,.1,1e3),r.position.z=h?120:100,s=new GS({antialias:!0,alpha:!1}),s.setSize(window.innerWidth,window.innerHeight),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.value&&t.value.appendChild(s.domElement),v(),T()},v=()=>{o=new _n;const y=new Float32Array(yt.particleCount*3),A=new Float32Array(yt.particleCount*3);c=new Float32Array(yt.particleCount*3),u=new Float32Array(yt.particleCount*3);for(let C=0;C<yt.particleCount;C++){const N=C*3;y[N]=(Math.random()-.5)*400,y[N+1]=(Math.random()-.5)*400,y[N+2]=(Math.random()-.5)*400,A[N]=1,A[N+1]=1,A[N+2]=1}o.setAttribute("position",new ln(y,3)),o.setAttribute("color",new ln(A,3));const R=new Xg().load("https://threejs.org/examples/textures/sprites/spark1.png");l=new Uh({size:yt.particleSize,map:R,transparent:!0,opacity:.9,vertexColors:!0,blending:Lo,depthWrite:!1,sizeAttenuation:!0}),a=new Og(o,l),i.add(a),g()},g=()=>{p=0;let y=[],A=[];e.currentShape==="hourglass"?(y=XS(yt.particleCount),cr("2025"),cr("今年辛苦啦")):e.currentShape==="rocket"?(y=qS(yt.particleCount),A=cr("2026")):e.currentShape==="heart"?y=kS(yt.particleCount*.7):e.currentShape==="fireworks"?y=WS(yt.particleCount):e.currentShape==="text"&&(y=cr(e.currentText));for(let R=0;R<yt.particleCount;R++){const C=R*3;R<y.length?(c[C]=y[R].x,c[C+1]=y[R].y,c[C+2]=y[R].z):(c[C]=(Math.random()-.5)*400,c[C+1]=(Math.random()-.5)*400,c[C+2]=(Math.random()-.5)*200-50),e.currentShape==="rocket"&&A.length>0&&(R<A.length?(u[C]=A[R].x,u[C+1]=A[R].y,u[C+2]=A[R].z):u[C]=c[C]*3),e.currentShape}d()},d=()=>{if(!o)return;const y=o.attributes.color,A=new Qe(e.customColor);for(let R=0;R<yt.particleCount;R++){let C,N,_;if(e.currentTheme==="custom")C=A.r,N=A.g,_=A.b;else if(e.currentTheme==="warm"){const S=Math.random();S>.6?(C=1,N=.8,_=.2):S>.3?(C=1,N=.4,_=.1):(C=1,N=1,_=.9)}else if(e.currentTheme==="cyber"){const S=Math.random();S>.6?(C=.1,N=1,_=.8):S>.3?(C=.6,N=0,_=1):(C=1,N=1,_=1)}y.setXYZ(R,C,N,_)}y.needsUpdate=!0},T=()=>{f=requestAnimationFrame(T);const y=o.attributes.position.array;p+=.01;let A=null,R=null;e.currentShape==="hourglass"&&(window.cached2025||(window.cached2025=cr("2025")),window.cachedMsg||(window.cachedMsg=cr("今年辛苦啦")),A=window.cached2025,R=window.cachedMsg);for(let C=0;C<yt.particleCount;C++){const N=C*3;let _,S,L;if(e.currentShape==="hourglass")if(C<yt.particleCount*.6){const X=C/(yt.particleCount*.6)*5;if(p<X){const B=C%A.length;_=A[B].x,S=A[B].y+50,L=A[B].z}else if(p<X+2){const B=(p-X)/2;_=(Math.random()-.5)*10*(1-B),S=50-B*100,L=(Math.random()-.5)*10}else{const B=C%R.length;_=R[B].x,S=R[B].y-50,L=R[B].z}}else _=c[N],S=c[N+1],L=c[N+2];else e.currentShape==="rocket"?e.isExploded?(_=u[N],S=u[N+1],L=u[N+2]):(_=c[N],S=c[N+1],L=c[N+2],S+=(Math.random()-.5)*2):(_=c[N],S=c[N+1],L=c[N+2]);let U=1;e.currentShape==="heart"&&e.explosionForce>.1&&e.explosionForce<.2&&(U=1+Math.sin(Date.now()*.01)*.2),e.currentShape==="rocket"&&!e.isExploded&&Math.random()>.9&&(S-=20);const z=_*U,j=S*U,Z=L*U;y[N]+=(z-y[N])*.1,y[N+1]+=(j-y[N+1])*.1,y[N+2]+=(Z-y[N+2])*.1}o.attributes.position.needsUpdate=!0,e.currentShape==="rocket"&&!e.isExploded?a.rotation.y+=.02:a.rotation.y+=.002,s.render(i,r)};hi(()=>e.currentShape,g),hi(()=>e.currentText,g),hi(()=>e.isExploded,g),hi(()=>e.currentTheme,d),hi(()=>e.customColor,d),kl(()=>{x(),window.addEventListener("resize",w)}),ma(()=>{cancelAnimationFrame(f),window.removeEventListener("resize",w)});const w=()=>{!r||!s||(r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),s.setSize(window.innerWidth,window.innerHeight),g())};return(y,A)=>(xi(),ki("div",{ref_key:"canvasContainer",ref:t,class:"canvas-wrapper"},null,512))}},$S=ba(YS,[["__scopeId","data-v-19cda10d"]]),KS={id:"ui-container"},jS={class:"year-row"},ZS={class:"color-picker-mini"},JS=["value"],QS={__name:"ControlPanel",props:{currentYear:String,customColor:String},emits:["select-year","set-theme","update:customColor"],setup(n){return(e,t)=>(xi(),ki("div",KS,[zt("div",jS,[zt("button",{class:xr(["year-btn year-2025",{active:n.currentYear==="2025"}]),onClick:t[0]||(t[0]=i=>e.$emit("select-year","2025"))}," 2025 ",2),zt("button",{class:xr(["year-btn year-2026",{active:n.currentYear==="2026"}]),onClick:t[1]||(t[1]=i=>e.$emit("select-year","2026"))}," 2026 ",2)]),zt("div",ZS,[zt("input",{type:"color",value:n.customColor,onInput:t[2]||(t[2]=i=>{e.$emit("update:customColor",i.target.value),e.$emit("set-theme","custom")})},null,40,JS)])]))}},eM=ba(QS,[["__scopeId","data-v-0c714ff3"]]);function Gu(n){return new Promise((e,t)=>{if(document.querySelector(`script[src="${n}"]`)){e();return}const i=document.createElement("script");i.src=n,i.async=!0,i.crossOrigin="anonymous",i.onload=()=>e(),i.onerror=()=>t(new Error(`Script load error: ${n}`)),document.head.appendChild(i)})}const tM={class:"camera-wrapper"},nM={__name:"CameraInput",props:{isActive:Boolean},emits:["update-force","status-change","camera-error","gesture","hand-x"],setup(n,{expose:e,emit:t}){const i=n,r=t,s=Ft(null),a=Ft(null);let o=null,l=null,c=-1;const u=(v,g)=>Math.sqrt(Math.pow(v.x-g.x,2)+Math.pow(v.y-g.y,2)),f=(v,g,d)=>{const T=v[0],w=v[g],y=v[d];return u(T,w)>u(T,y)*1.2},h=async()=>{try{r("status-change","启动视觉引擎..."),await Promise.all([Gu("https://cdn.jsdelivr.net/npm/@mediapipe/hands/hands.js"),Gu("https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js")]);const v=window.Hands;o=new v({locateFile:T=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${T}`}),o.setOptions({maxNumHands:2,modelComplexity:0,minDetectionConfidence:.3,minTrackingConfidence:.3}),o.onResults(x);const g={video:{facingMode:"user",width:{ideal:320},height:{ideal:240},frameRate:{ideal:30}}},d=await navigator.mediaDevices.getUserMedia(g);s.value.srcObject=d,s.value.onloadedmetadata=()=>{s.value.play(),a.value.width=s.value.videoWidth,a.value.height=s.value.videoHeight,r("status-change","准备就绪!"),p()}}catch(v){console.error(v);let g="OTHER";v.name==="NotAllowedError"?g="NO_PERMISSION":v.name==="NotFoundError"&&(g="NO_HARDWARE"),r("camera-error",g)}},p=async()=>{i.isActive&&(s.value&&s.value.readyState>=2&&s.value.currentTime!==c&&(c=s.value.currentTime,o&&await o.send({image:s.value})),l=requestAnimationFrame(p))},x=v=>{if(!a.value)return;const g=a.value.getContext("2d"),d=a.value.width,T=a.value.height;if(g.save(),g.clearRect(0,0,d,T),g.translate(d,0),g.scale(-1,1),g.drawImage(v.image,0,0,d,T),v.multiHandLandmarks&&v.multiHandLandmarks.length>0){const w=v.multiHandLandmarks[0];window.drawConnectors&&window.drawConnectors(g,w,window.HAND_CONNECTIONS,{color:"#00d2ff",lineWidth:2}),r("hand-x",w[0].x),f(w,4,2);const y=f(w,8,6),A=f(w,12,10),R=f(w,16,14),C=f(w,20,18);let N="NONE",_=0;y&&A&&!R&&!C?N="VICTORY":!y&&!A&&!R&&!C?(N="FIST",_=0):y&&A&&R&&C&&(N="PALM",_=1),r("gesture",N),r("update-force",_)}g.restore()};return e({startCamera:h}),ma(()=>{s.value?.srcObject&&s.value.srcObject.getTracks().forEach(v=>v.stop()),cancelAnimationFrame(l),o&&o.close()}),(v,g)=>(xi(),ki("div",tM,[zt("video",{ref_key:"inputVideo",ref:s,playsinline:"","webkit-playsinline":"",style:{display:"none"}},null,512),Gd(zt("canvas",{ref_key:"previewCanvas",ref:a,class:"video-preview"},null,512),[[om,n.isActive]])]))}},iM=ba(nM,[["__scopeId","data-v-8fa901b8"]]),rM={key:0,id:"overlay"},sM={__name:"IntroOverlay",props:{visible:Boolean,showGuide:Boolean},emits:["select-mode"],setup(n){return(e,t)=>(xi(),ki(rn,null,[n.visible?(xi(),ki("div",rM,[t[2]||(t[2]=zt("h2",{class:"title"},"Lynx",-1)),t[3]||(t[3]=zt("div",{class:"msg-box"},"请选择交互方式",-1)),zt("button",{id:"btn-cam",class:"action-btn",onClick:t[0]||(t[0]=i=>e.$emit("select-mode","camera"))},"开启摄像头"),zt("button",{id:"btn-touch",class:"action-btn",onClick:t[1]||(t[1]=i=>e.$emit("select-mode","touch"))},"触屏 / 鼠标模式")])):Zf("",!0),zt("div",{id:"touch-guide",class:xr({show:n.showGuide})},"⟵ 滑动屏幕控制扩散 ⟶",2)],64))}},aM=ba(sM,[["__scopeId","data-v-da6579d6"]]),oM={class:"app-container"},lM={key:0,class:"global-error-card"},cM={class:"error-msg"},uM={__name:"App",setup(n){const e=Ft("2025"),t=Ft(0),i=Ft("warm"),r=Ft("#00d2ff"),s=Ft(!0),a=Ft(!1),o=Ft(""),l=Ft(0),c=Ft(!1),u=Ft(""),f=Ft(""),h=Ft(null);let p=!1;const x={2025:[{shape:"hourglass",text:""},{shape:"heart",text:""}],2026:[{shape:"rocket",text:""},{shape:"fireworks",text:"新年快乐"}]},v=th(()=>{const S=x[e.value];return S[t.value]||S[0]}),g=S=>{e.value=S,t.value=0,c.value=!1,S==="2025"?i.value="warm":i.value="cyber"};let d=-1,T=0;const w=S=>{if(p||o.value!=="camera")return;if(d===-1){d=S;return}const L=S-d;d=S,e.value==="2025"?L>.04?(T++,T>3&&y()):T=Math.max(0,T-1):e.value==="2026"&&(L<-.04?(T++,T>3&&y()):T=Math.max(0,T-1))},y=()=>{p=!0,T=0,console.log("Magic Switch!");const S=x[e.value].length-1;t.value<S?t.value++:(t.value=0,c.value=!1),setTimeout(()=>{p=!1},1500)},A=S=>{e.value==="2026"&&t.value===1&&S==="VICTORY"&&!p&&C()},R=S=>{l.value=S,e.value==="2026"&&t.value===0&&!c.value&&S>.8&&(c.value=!0)},C=()=>{console.log("Firework launched!"),l.value=1,setTimeout(()=>l.value=0,500)},N=S=>{o.value=S,s.value=!1,S==="camera"?h.value.startCamera():(a.value=!0,setTimeout(()=>a.value=!1,3e3))},_=S=>{u.value=S==="NO_PERMISSION"?"请允许摄像头权限":"摄像头启动失败",setTimeout(()=>u.value="",5e3)};return(S,L)=>(xi(),ki("div",oM,[bt($S,{currentShape:v.value.shape,currentText:v.value.text,currentTheme:i.value,customColor:r.value,explosionForce:l.value,isExploded:c.value},null,8,["currentShape","currentText","currentTheme","customColor","explosionForce","isExploded"]),bt(tm,{name:"notice-fade"},{default:Mf(()=>[u.value?(xi(),ki("div",lM,[zt("div",cM,Ju(u.value),1)])):Zf("",!0)]),_:1}),bt(iM,{ref_key:"cameraInputRef",ref:h,isActive:o.value==="camera",onUpdateForce:R,onGesture:A,onHandX:w,onStatusChange:L[0]||(L[0]=U=>f.value=U),onCameraError:_},null,8,["isActive"]),bt(eM,{currentYear:e.value,customColor:r.value,"onUpdate:customColor":L[1]||(L[1]=U=>r.value=U),onSelectYear:g,onSetTheme:L[2]||(L[2]=U=>i.value=U)},null,8,["currentYear","customColor"]),bt(aM,{visible:s.value,showGuide:a.value,onSelectMode:N},null,8,["visible","showGuide"])]))}};bm(uM).mount("#app");
