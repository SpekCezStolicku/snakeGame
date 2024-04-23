(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function sl(e,t){const n=new Set(e.split(","));return t?r=>n.has(r.toLowerCase()):r=>n.has(r)}const dt={},ar=[],he=()=>{},Xg=()=>!1,Ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),il=e=>e.startsWith("onUpdate:"),jt=Object.assign,ol=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Zg=Object.prototype.hasOwnProperty,Z=(e,t)=>Zg.call(e,t),F=Array.isArray,lr=e=>Cs(e)==="[object Map]",Rr=e=>Cs(e)==="[object Set]",$c=e=>Cs(e)==="[object Date]",G=e=>typeof e=="function",Pt=e=>typeof e=="string",hn=e=>typeof e=="symbol",mt=e=>e!==null&&typeof e=="object",qh=e=>(mt(e)||G(e))&&G(e.then)&&G(e.catch),zh=Object.prototype.toString,Cs=e=>zh.call(e),tm=e=>Cs(e).slice(8,-1),Hh=e=>Cs(e)==="[object Object]",al=e=>Pt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Wr=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Wi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},em=/-(\w)/g,pr=Wi(e=>e.replace(em,(t,n)=>n?n.toUpperCase():"")),nm=/\B([A-Z])/g,Cr=Wi(e=>e.replace(nm,"-$1").toLowerCase()),Gh=Wi(e=>e.charAt(0).toUpperCase()+e.slice(1)),$o=Wi(e=>e?`on${Gh(e)}`:""),fn=(e,t)=>!Object.is(e,t),hi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},vi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},as=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let qc;const Kh=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xt(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=Pt(r)?om(r):Xt(r);if(s)for(const i in s)t[i]=s[i]}return t}else if(Pt(e)||mt(e))return e}const rm=/;(?![^(]*\))/g,sm=/:([^]+)/,im=/\/\*[^]*?\*\//g;function om(e){const t={};return e.replace(im,"").split(rm).forEach(n=>{if(n){const r=n.split(sm);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ze(e){let t="";if(Pt(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=ze(e[n]);r&&(t+=r+" ")}else if(mt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=sl(am);function Wh(e){return!!e||e===""}function cm(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=Bn(e[r],t[r]);return n}function Bn(e,t){if(e===t)return!0;let n=$c(e),r=$c(t);if(n||r)return n&&r?e.getTime()===t.getTime():!1;if(n=hn(e),r=hn(t),n||r)return e===t;if(n=F(e),r=F(t),n||r)return n&&r?cm(e,t):!1;if(n=mt(e),r=mt(t),n||r){if(!n||!r)return!1;const s=Object.keys(e).length,i=Object.keys(t).length;if(s!==i)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Bn(e[o],t[o]))return!1}}return String(e)===String(t)}function ll(e,t){return e.findIndex(n=>Bn(n,t))}const Dt=e=>Pt(e)?e:e==null?"":F(e)||mt(e)&&(e.toString===zh||!G(e.toString))?JSON.stringify(e,Qh,2):String(e),Qh=(e,t)=>t&&t.__v_isRef?Qh(e,t.value):lr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s],i)=>(n[qo(r,i)+" =>"]=s,n),{})}:Rr(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>qo(n))}:hn(t)?qo(t):mt(t)&&!F(t)&&!Hh(t)?String(t):t,qo=(e,t="")=>{var n;return hn(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let oe;class Jh{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=oe,!t&&oe&&(this.index=(oe.scopes||(oe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=oe;try{return oe=this,t()}finally{oe=n}}}on(){oe=this}off(){oe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Yh(e){return new Jh(e)}function um(e,t=oe){t&&t.active&&t.effects.push(e)}function Xh(){return oe}function hm(e){oe&&oe.cleanups.push(e)}let Ln;class cl{constructor(t,n,r,s){this.fn=t,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,um(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Kn();for(let t=0;t<this._depsLength;t++){const n=this.deps[t];if(n.computed&&(fm(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Wn()}return this._dirtyLevel>=4}set dirty(t){this._dirtyLevel=t?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=sn,n=Ln;try{return sn=!0,Ln=this,this._runnings++,zc(this),this.fn()}finally{Hc(this),this._runnings--,Ln=n,sn=t}}stop(){var t;this.active&&(zc(this),Hc(this),(t=this.onStop)==null||t.call(this),this.active=!1)}}function fm(e){return e.value}function zc(e){e._trackId++,e._depsLength=0}function Hc(e){if(e.deps.length>e._depsLength){for(let t=e._depsLength;t<e.deps.length;t++)Zh(e.deps[t],e);e.deps.length=e._depsLength}}function Zh(e,t){const n=e.get(t);n!==void 0&&t._trackId!==n&&(e.delete(t),e.size===0&&e.cleanup())}let sn=!0,ma=0;const tf=[];function Kn(){tf.push(sn),sn=!1}function Wn(){const e=tf.pop();sn=e===void 0?!0:e}function ul(){ma++}function hl(){for(ma--;!ma&&_a.length;)_a.shift()()}function ef(e,t,n){if(t.get(e)!==e._trackId){t.set(e,e._trackId);const r=e.deps[e._depsLength];r!==t?(r&&Zh(r,e),e.deps[e._depsLength++]=t):e._depsLength++}}const _a=[];function nf(e,t,n){ul();for(const r of e.keys()){let s;r._dirtyLevel<t&&(s??(s=e.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=t),r._shouldSchedule&&(s??(s=e.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&_a.push(r.scheduler)))}hl()}const rf=(e,t)=>{const n=new Map;return n.cleanup=e,n.computed=t,n},wi=new WeakMap,Fn=Symbol(""),ya=Symbol("");function re(e,t,n){if(sn&&Ln){let r=wi.get(e);r||wi.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=rf(()=>r.delete(n))),ef(Ln,s)}}function je(e,t,n,r,s,i){const o=wi.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!hn(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":F(e)?al(n)&&a.push(o.get("length")):(a.push(o.get(Fn)),lr(e)&&a.push(o.get(ya)));break;case"delete":F(e)||(a.push(o.get(Fn)),lr(e)&&a.push(o.get(ya)));break;case"set":lr(e)&&a.push(o.get(Fn));break}ul();for(const l of a)l&&nf(l,4);hl()}function dm(e,t){var n;return(n=wi.get(e))==null?void 0:n.get(t)}const pm=sl("__proto__,__v_isRef,__isVue"),sf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(hn)),Gc=gm();function gm(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=et(this);for(let i=0,o=this.length;i<o;i++)re(r,"get",i+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(et)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Kn(),ul();const r=et(this)[t].apply(this,n);return hl(),Wn(),r}}),e}function mm(e){const t=et(this);return re(t,"has",e),t.hasOwnProperty(e)}class of{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Pm:uf:i?cf:lf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(r)?t:void 0;const o=F(t);if(!s){if(o&&Z(Gc,n))return Reflect.get(Gc,n,r);if(n==="hasOwnProperty")return mm}const a=Reflect.get(t,n,r);return(hn(n)?sf.has(n):pm(n))||(s||re(t,"get",n),i)?a:Rt(a)?o&&al(n)?a:a.value:mt(a)?s?hf(a):Ji(a):a}}class af extends of{constructor(t=!1){super(!1,t)}set(t,n,r,s){let i=t[n];if(!this._isShallow){const l=gr(i);if(!Ii(r)&&!gr(r)&&(i=et(i),r=et(r)),!F(t)&&Rt(i)&&!Rt(r))return l?!1:(i.value=r,!0)}const o=F(t)&&al(n)?Number(n)<t.length:Z(t,n),a=Reflect.set(t,n,r,s);return t===et(s)&&(o?fn(r,i)&&je(t,"set",n,r):je(t,"add",n,r)),a}deleteProperty(t,n){const r=Z(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&r&&je(t,"delete",n,void 0),s}has(t,n){const r=Reflect.has(t,n);return(!hn(n)||!sf.has(n))&&re(t,"has",n),r}ownKeys(t){return re(t,"iterate",F(t)?"length":Fn),Reflect.ownKeys(t)}}class _m extends of{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const ym=new af,Em=new _m,vm=new af(!0),fl=e=>e,Qi=e=>Reflect.getPrototypeOf(e);function Ws(e,t,n=!1,r=!1){e=e.__v_raw;const s=et(e),i=et(t);n||(fn(t,i)&&re(s,"get",t),re(s,"get",i));const{has:o}=Qi(s),a=r?fl:n?gl:ls;if(o.call(s,t))return a(e.get(t));if(o.call(s,i))return a(e.get(i));e!==s&&e.get(t)}function Qs(e,t=!1){const n=this.__v_raw,r=et(n),s=et(e);return t||(fn(e,s)&&re(r,"has",e),re(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function Js(e,t=!1){return e=e.__v_raw,!t&&re(et(e),"iterate",Fn),Reflect.get(e,"size",e)}function Kc(e){e=et(e);const t=et(this);return Qi(t).has.call(t,e)||(t.add(e),je(t,"add",e,e)),this}function Wc(e,t){t=et(t);const n=et(this),{has:r,get:s}=Qi(n);let i=r.call(n,e);i||(e=et(e),i=r.call(n,e));const o=s.call(n,e);return n.set(e,t),i?fn(t,o)&&je(n,"set",e,t):je(n,"add",e,t),this}function Qc(e){const t=et(this),{has:n,get:r}=Qi(t);let s=n.call(t,e);s||(e=et(e),s=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return s&&je(t,"delete",e,void 0),i}function Jc(){const e=et(this),t=e.size!==0,n=e.clear();return t&&je(e,"clear",void 0,void 0),n}function Ys(e,t){return function(r,s){const i=this,o=i.__v_raw,a=et(o),l=t?fl:e?gl:ls;return!e&&re(a,"iterate",Fn),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function Xs(e,t,n){return function(...r){const s=this.__v_raw,i=et(s),o=lr(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...r),u=n?fl:t?gl:ls;return!t&&re(i,"iterate",l?ya:Fn),{next(){const{value:h,done:p}=c.next();return p?{value:h,done:p}:{value:a?[u(h[0]),u(h[1])]:u(h),done:p}},[Symbol.iterator](){return this}}}}function Je(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function wm(){const e={get(i){return Ws(this,i)},get size(){return Js(this)},has:Qs,add:Kc,set:Wc,delete:Qc,clear:Jc,forEach:Ys(!1,!1)},t={get(i){return Ws(this,i,!1,!0)},get size(){return Js(this)},has:Qs,add:Kc,set:Wc,delete:Qc,clear:Jc,forEach:Ys(!1,!0)},n={get(i){return Ws(this,i,!0)},get size(){return Js(this,!0)},has(i){return Qs.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ys(!0,!1)},r={get(i){return Ws(this,i,!0,!0)},get size(){return Js(this,!0)},has(i){return Qs.call(this,i,!0)},add:Je("add"),set:Je("set"),delete:Je("delete"),clear:Je("clear"),forEach:Ys(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=Xs(i,!1,!1),n[i]=Xs(i,!0,!1),t[i]=Xs(i,!1,!0),r[i]=Xs(i,!0,!0)}),[e,n,t,r]}const[Im,Tm,Am,Sm]=wm();function dl(e,t){const n=t?e?Sm:Am:e?Tm:Im;return(r,s,i)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(Z(n,s)&&s in r?n:r,s,i)}const bm={get:dl(!1,!1)},Rm={get:dl(!1,!0)},Cm={get:dl(!0,!1)},lf=new WeakMap,cf=new WeakMap,uf=new WeakMap,Pm=new WeakMap;function xm(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(e){return e.__v_skip||!Object.isExtensible(e)?0:xm(tm(e))}function Ji(e){return gr(e)?e:pl(e,!1,ym,bm,lf)}function Dm(e){return pl(e,!1,vm,Rm,cf)}function hf(e){return pl(e,!0,Em,Cm,uf)}function pl(e,t,n,r,s){if(!mt(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=s.get(e);if(i)return i;const o=Vm(e);if(o===0)return e;const a=new Proxy(e,o===2?r:n);return s.set(e,a),a}function on(e){return gr(e)?on(e.__v_raw):!!(e&&e.__v_isReactive)}function gr(e){return!!(e&&e.__v_isReadonly)}function Ii(e){return!!(e&&e.__v_isShallow)}function ff(e){return on(e)||gr(e)}function et(e){const t=e&&e.__v_raw;return t?et(t):e}function Yi(e){return Object.isExtensible(e)&&vi(e,"__v_skip",!0),e}const ls=e=>mt(e)?Ji(e):e,gl=e=>mt(e)?hf(e):e;class df{constructor(t,n,r,s){this.getter=t,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cl(()=>t(this._value),()=>fi(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=et(this);return(!t._cacheable||t.effect.dirty)&&fn(t._value,t._value=t.effect.run())&&fi(t,4),pf(t),t.effect._dirtyLevel>=2&&fi(t,2),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function km(e,t,n=!1){let r,s;const i=G(e);return i?(r=e,s=he):(r=e.get,s=e.set),new df(r,s,i||!s,n)}function pf(e){var t;sn&&Ln&&(e=et(e),ef(Ln,(t=e.dep)!=null?t:e.dep=rf(()=>e.dep=void 0,e instanceof df?e:void 0)))}function fi(e,t=4,n){e=et(e);const r=e.dep;r&&nf(r,t)}function Rt(e){return!!(e&&e.__v_isRef===!0)}function mr(e){return Nm(e,!1)}function Nm(e,t){return Rt(e)?e:new Om(e,t)}class Om{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:et(t),this._value=n?t:ls(t)}get value(){return pf(this),this._value}set value(t){const n=this.__v_isShallow||Ii(t)||gr(t);t=n?t:et(t),fn(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:ls(t),fi(this,4))}}function N(e){return Rt(e)?e.value:e}const Mm={get:(e,t,n)=>N(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function gf(e){return on(e)?e:new Proxy(e,Mm)}function Lm(e){const t=F(e)?new Array(e.length):{};for(const n in e)t[n]=Um(e,n);return t}class Fm{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return dm(et(this._object),this._key)}}function Um(e,t,n){const r=e[t];return Rt(r)?r:new Fm(e,t,n)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function an(e,t,n,r){try{return r?e(...r):e()}catch(s){Xi(s,t,n)}}function ye(e,t,n,r){if(G(e)){const i=an(e,t,n,r);return i&&qh(i)&&i.catch(o=>{Xi(o,t,n)}),i}const s=[];for(let i=0;i<e.length;i++)s.push(ye(e[i],t,n,r));return s}function Xi(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](e,o,a)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){an(l,null,10,[e,o,a]);return}}Bm(e,n,s,r)}function Bm(e,t,n,r=!0){console.error(e)}let cs=!1,Ea=!1;const Gt=[];let Re=0;const cr=[];let Xe=null,Pn=0;const mf=Promise.resolve();let ml=null;function _l(e){const t=ml||mf;return e?t.then(this?e.bind(this):e):t}function jm(e){let t=Re+1,n=Gt.length;for(;t<n;){const r=t+n>>>1,s=Gt[r],i=us(s);i<e||i===e&&s.pre?t=r+1:n=r}return t}function yl(e){(!Gt.length||!Gt.includes(e,cs&&e.allowRecurse?Re+1:Re))&&(e.id==null?Gt.push(e):Gt.splice(jm(e.id),0,e),_f())}function _f(){!cs&&!Ea&&(Ea=!0,ml=mf.then(Ef))}function $m(e){const t=Gt.indexOf(e);t>Re&&Gt.splice(t,1)}function qm(e){F(e)?cr.push(...e):(!Xe||!Xe.includes(e,e.allowRecurse?Pn+1:Pn))&&cr.push(e),_f()}function Yc(e,t,n=cs?Re+1:0){for(;n<Gt.length;n++){const r=Gt[n];if(r&&r.pre){if(e&&r.id!==e.uid)continue;Gt.splice(n,1),n--,r()}}}function yf(e){if(cr.length){const t=[...new Set(cr)].sort((n,r)=>us(n)-us(r));if(cr.length=0,Xe){Xe.push(...t);return}for(Xe=t,Pn=0;Pn<Xe.length;Pn++)Xe[Pn]();Xe=null,Pn=0}}const us=e=>e.id==null?1/0:e.id,zm=(e,t)=>{const n=us(e)-us(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Ef(e){Ea=!1,cs=!0,Gt.sort(zm);try{for(Re=0;Re<Gt.length;Re++){const t=Gt[Re];t&&t.active!==!1&&an(t,null,14)}}finally{Re=0,Gt.length=0,yf(),cs=!1,ml=null,(Gt.length||cr.length)&&Ef()}}function Hm(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||dt;let s=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:p}=r[u]||dt;p&&(s=n.map(g=>Pt(g)?g.trim():g)),h&&(s=n.map(as))}let a,l=r[a=$o(t)]||r[a=$o(pr(t))];!l&&i&&(l=r[a=$o(Cr(t))]),l&&ye(l,e,6,s);const c=r[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ye(c,e,6,s)}}function vf(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const i=e.emits;let o={},a=!1;if(!G(e)){const l=c=>{const u=vf(c,t,!0);u&&(a=!0,jt(o,u))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!a?(mt(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):jt(o,i),mt(e)&&r.set(e,o),o)}function Zi(e,t){return!e||!Ki(t)?!1:(t=t.slice(2).replace(/Once$/,""),Z(e,t[0].toLowerCase()+t.slice(1))||Z(e,Cr(t))||Z(e,t))}let kt=null,wf=null;function Ti(e){const t=kt;return kt=e,wf=e&&e.type.__scopeId||null,t}function Ps(e,t=kt,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&au(-1);const i=Ti(t);let o;try{o=e(...s)}finally{Ti(i),r._d&&au(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function zo(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:p,setupState:g,ctx:D,inheritAttrs:C}=e;let V,q;const st=Ti(e);try{if(n.shapeFlag&4){const it=s||r,at=it;V=be(u.call(at,it,h,i,g,p,D)),q=l}else{const it=t;V=be(it.length>1?it(i,{attrs:l,slots:a,emit:c}):it(i,null)),q=t.props?l:Gm(l)}}catch(it){Xr.length=0,Xi(it,e,1),V=ut(dn)}let H=V;if(q&&C!==!1){const it=Object.keys(q),{shapeFlag:at}=H;it.length&&at&7&&(o&&it.some(il)&&(q=Km(q,o)),H=_r(H,q))}return n.dirs&&(H=_r(H),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),V=H,Ti(st),V}const Gm=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ki(n))&&((t||(t={}))[n]=e[n]);return t},Km=(e,t)=>{const n={};for(const r in e)(!il(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Wm(e,t,n){const{props:r,children:s,component:i}=e,{props:o,children:a,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Xc(r,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const p=u[h];if(o[p]!==r[p]&&!Zi(c,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Xc(r,o,c):!0:!!o;return!1}function Xc(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(t[i]!==e[i]&&!Zi(n,i))return!0}return!1}function Qm({vnode:e,parent:t},n){for(;t;){const r=t.subTree;if(r.suspense&&r.suspense.activeBranch===e&&(r.el=e.el),r===e)(e=t.vnode).el=n,t=t.parent;else break}}const Jm=Symbol.for("v-ndc"),Ym=e=>e.__isSuspense;function Xm(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):qm(e)}const Zm=Symbol.for("v-scx"),t_=()=>Yr(Zm),Zs={};function di(e,t,n){return If(e,t,n)}function If(e,t,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=dt){if(t&&i){const K=t;t=(...Tt)=>{K(...Tt),at()}}const l=Kt,c=K=>r===!0?K:Vn(K,r===!1?1:void 0);let u,h=!1,p=!1;if(Rt(e)?(u=()=>e.value,h=Ii(e)):on(e)?(u=()=>c(e),h=!0):F(e)?(p=!0,h=e.some(K=>on(K)||Ii(K)),u=()=>e.map(K=>{if(Rt(K))return K.value;if(on(K))return c(K);if(G(K))return an(K,l,2)})):G(e)?t?u=()=>an(e,l,2):u=()=>(g&&g(),ye(e,l,3,[D])):u=he,t&&r){const K=u;u=()=>Vn(K())}let g,D=K=>{g=H.onStop=()=>{an(K,l,4),g=H.onStop=void 0}},C;if(ro)if(D=he,t?n&&ye(t,l,3,[u(),p?[]:void 0,D]):u(),s==="sync"){const K=t_();C=K.__watcherHandles||(K.__watcherHandles=[])}else return he;let V=p?new Array(e.length).fill(Zs):Zs;const q=()=>{if(!(!H.active||!H.dirty))if(t){const K=H.run();(r||h||(p?K.some((Tt,J)=>fn(Tt,V[J])):fn(K,V)))&&(g&&g(),ye(t,l,3,[K,V===Zs?void 0:p&&V[0]===Zs?[]:V,D]),V=K)}else H.run()};q.allowRecurse=!!t;let st;s==="sync"?st=q:s==="post"?st=()=>te(q,l&&l.suspense):(q.pre=!0,l&&(q.id=l.uid),st=()=>yl(q));const H=new cl(u,he,st),it=Xh(),at=()=>{H.stop(),it&&ol(it.effects,H)};return t?n?q():V=H.run():s==="post"?te(H.run.bind(H),l&&l.suspense):H.run(),C&&C.push(at),at}function e_(e,t,n){const r=this.proxy,s=Pt(e)?e.includes(".")?Tf(r,e):()=>r[e]:e.bind(r,r);let i;G(t)?i=t:(i=t.handler,n=t);const o=xs(this),a=If(s,i.bind(r),n);return o(),a}function Tf(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Vn(e,t,n=0,r){if(!mt(e)||e.__v_skip)return e;if(t&&t>0){if(n>=t)return e;n++}if(r=r||new Set,r.has(e))return e;if(r.add(e),Rt(e))Vn(e.value,t,n,r);else if(F(e))for(let s=0;s<e.length;s++)Vn(e[s],t,n,r);else if(Rr(e)||lr(e))e.forEach(s=>{Vn(s,t,n,r)});else if(Hh(e))for(const s in e)Vn(e[s],t,n,r);return e}function n_(e,t){if(kt===null)return e;const n=so(kt)||kt.proxy,r=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[i,o,a,l=dt]=t[s];i&&(G(i)&&(i={mounted:i,updated:i}),i.deep&&Vn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function bn(e,t,n,r){const s=e.dirs,i=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(Kn(),ye(l,n,8,[e.el,a,e,t]),Wn())}}/*! #__NO_SIDE_EFFECTS__ */function $t(e,t){return G(e)?jt({name:e.name},t,{setup:e}):e}const Qr=e=>!!e.type.__asyncLoader,Af=e=>e.type.__isKeepAlive;function r_(e,t){Sf(e,"a",t)}function s_(e,t){Sf(e,"da",t)}function Sf(e,t,n=Kt){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(to(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Af(s.parent.vnode)&&i_(r,t,n,s),s=s.parent}}function i_(e,t,n,r){const s=to(t,e,r,!0);vl(()=>{ol(r[t],s)},n)}function to(e,t,n=Kt,r=!1){if(n){const s=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Kn();const a=xs(n),l=ye(t,n,e,o);return a(),Wn(),l});return r?s.unshift(i):s.push(i),i}}const We=e=>(t,n=Kt)=>(!ro||e==="sp")&&to(e,(...r)=>t(...r),n),o_=We("bm"),El=We("m"),a_=We("bu"),l_=We("u"),c_=We("bum"),vl=We("um"),u_=We("sp"),h_=We("rtg"),f_=We("rtc");function d_(e,t=Kt){to("ec",e,t)}function wl(e,t,n,r){let s;const i=n&&n[r];if(F(e)||Pt(e)){s=new Array(e.length);for(let o=0,a=e.length;o<a;o++)s[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){s=new Array(e);for(let o=0;o<e;o++)s[o]=t(o+1,o,void 0,i&&i[o])}else if(mt(e))if(e[Symbol.iterator])s=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=t(e[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}function p_(e,t,n={},r,s){if(kt.isCE||kt.parent&&Qr(kt.parent)&&kt.parent.isCE)return t!=="default"&&(n.name=t),ut("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),X();const o=i&&bf(i(n)),a=Pe(ee,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function bf(e){return e.some(t=>Lf(t)?!(t.type===dn||t.type===ee&&!bf(t.children)):!0)?e:null}const va=e=>e?Uf(e)?so(e)||e.proxy:va(e.parent):null,Jr=jt(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>va(e.parent),$root:e=>va(e.root),$emit:e=>e.emit,$options:e=>Il(e),$forceUpdate:e=>e.f||(e.f=()=>{e.effect.dirty=!0,yl(e.update)}),$nextTick:e=>e.n||(e.n=_l.bind(e.proxy)),$watch:e=>e_.bind(e)}),Ho=(e,t)=>e!==dt&&!e.__isScriptSetup&&Z(e,t),g_={get({_:e},t){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=e;let c;if(t[0]!=="$"){const g=o[t];if(g!==void 0)switch(g){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return i[t]}else{if(Ho(r,t))return o[t]=1,r[t];if(s!==dt&&Z(s,t))return o[t]=2,s[t];if((c=e.propsOptions[0])&&Z(c,t))return o[t]=3,i[t];if(n!==dt&&Z(n,t))return o[t]=4,n[t];wa&&(o[t]=0)}}const u=Jr[t];let h,p;if(u)return t==="$attrs"&&re(e,"get",t),u(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==dt&&Z(n,t))return o[t]=4,n[t];if(p=l.config.globalProperties,Z(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:i}=e;return Ho(s,t)?(s[t]=n,!0):r!==dt&&Z(r,t)?(r[t]=n,!0):Z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||e!==dt&&Z(e,o)||Ho(t,o)||(a=i[0])&&Z(a,o)||Z(r,o)||Z(Jr,o)||Z(s.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Zc(e){return F(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let wa=!0;function m_(e){const t=Il(e),n=e.proxy,r=e.ctx;wa=!1,t.beforeCreate&&tu(t.beforeCreate,e,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:p,beforeUpdate:g,updated:D,activated:C,deactivated:V,beforeDestroy:q,beforeUnmount:st,destroyed:H,unmounted:it,render:at,renderTracked:K,renderTriggered:Tt,errorCaptured:J,serverPrefetch:nt,expose:It,inheritAttrs:se,components:Ie,directives:Xn,filters:Lr}=t;if(c&&__(c,r,null),o)for(const Et in o){const ht=o[Et];G(ht)&&(r[Et]=ht.bind(n))}if(s){const Et=s.call(n,n);mt(Et)&&(e.data=Ji(Et))}if(wa=!0,i)for(const Et in i){const ht=i[Et],An=G(ht)?ht.bind(n,n):G(ht.get)?ht.get.bind(n,n):he,Gs=!G(ht)&&G(ht.set)?ht.set.bind(n):he,Sn=De({get:An,set:Gs});Object.defineProperty(r,Et,{enumerable:!0,configurable:!0,get:()=>Sn.value,set:Te=>Sn.value=Te})}if(a)for(const Et in a)Rf(a[Et],r,n,Et);if(l){const Et=G(l)?l.call(n):l;Reflect.ownKeys(Et).forEach(ht=>{T_(ht,Et[ht])})}u&&tu(u,e,"c");function lt(Et,ht){F(ht)?ht.forEach(An=>Et(An.bind(n))):ht&&Et(ht.bind(n))}if(lt(o_,h),lt(El,p),lt(a_,g),lt(l_,D),lt(r_,C),lt(s_,V),lt(d_,J),lt(f_,K),lt(h_,Tt),lt(c_,st),lt(vl,it),lt(u_,nt),F(It))if(It.length){const Et=e.exposed||(e.exposed={});It.forEach(ht=>{Object.defineProperty(Et,ht,{get:()=>n[ht],set:An=>n[ht]=An})})}else e.exposed||(e.exposed={});at&&e.render===he&&(e.render=at),se!=null&&(e.inheritAttrs=se),Ie&&(e.components=Ie),Xn&&(e.directives=Xn)}function __(e,t,n=he){F(e)&&(e=Ia(e));for(const r in e){const s=e[r];let i;mt(s)?"default"in s?i=Yr(s.from||r,s.default,!0):i=Yr(s.from||r):i=Yr(s),Rt(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function tu(e,t,n){ye(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Rf(e,t,n,r){const s=r.includes(".")?Tf(n,r):()=>n[r];if(Pt(e)){const i=t[e];G(i)&&di(s,i)}else if(G(e))di(s,e.bind(n));else if(mt(e))if(F(e))e.forEach(i=>Rf(i,t,n,r));else{const i=G(e.handler)?e.handler.bind(n):t[e.handler];G(i)&&di(s,i,e)}}function Il(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:!s.length&&!n&&!r?l=t:(l={},s.length&&s.forEach(c=>Ai(l,c,o,!0)),Ai(l,t,o)),mt(t)&&i.set(t,l),l}function Ai(e,t,n,r=!1){const{mixins:s,extends:i}=t;i&&Ai(e,i,n,!0),s&&s.forEach(o=>Ai(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const a=y_[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const y_={data:eu,props:nu,emits:nu,methods:qr,computed:qr,beforeCreate:Yt,created:Yt,beforeMount:Yt,mounted:Yt,beforeUpdate:Yt,updated:Yt,beforeDestroy:Yt,beforeUnmount:Yt,destroyed:Yt,unmounted:Yt,activated:Yt,deactivated:Yt,errorCaptured:Yt,serverPrefetch:Yt,components:qr,directives:qr,watch:v_,provide:eu,inject:E_};function eu(e,t){return t?e?function(){return jt(G(e)?e.call(this,this):e,G(t)?t.call(this,this):t)}:t:e}function E_(e,t){return qr(Ia(e),Ia(t))}function Ia(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Yt(e,t){return e?[...new Set([].concat(e,t))]:t}function qr(e,t){return e?jt(Object.create(null),e,t):t}function nu(e,t){return e?F(e)&&F(t)?[...new Set([...e,...t])]:jt(Object.create(null),Zc(e),Zc(t??{})):t}function v_(e,t){if(!e)return t;if(!t)return e;const n=jt(Object.create(null),e);for(const r in t)n[r]=Yt(e[r],t[r]);return n}function Cf(){return{app:null,config:{isNativeTag:Xg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let w_=0;function I_(e,t){return function(r,s=null){G(r)||(r=jt({},r)),s!=null&&!mt(s)&&(s=null);const i=Cf(),o=new WeakSet;let a=!1;const l=i.app={_uid:w_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:K_,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&G(c.install)?(o.add(c),c.install(l,...u)):G(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const p=ut(r,s);return p.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&t?t(p,c):e(p,c,h),a=!0,l._container=c,c.__vue_app__=l,so(p.component)||p.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=ur;ur=l;try{return c()}finally{ur=u}}};return l}}let ur=null;function T_(e,t){if(Kt){let n=Kt.provides;const r=Kt.parent&&Kt.parent.provides;r===n&&(n=Kt.provides=Object.create(r)),n[e]=t}}function Yr(e,t,n=!1){const r=Kt||kt;if(r||ur){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ur._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&G(t)?t.call(r&&r.proxy):t}}function A_(){return!!(Kt||kt||ur)}function S_(e,t,n,r=!1){const s={},i={};vi(i,no,1),e.propsDefaults=Object.create(null),Pf(e,t,s,i);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=r?s:Dm(s):e.type.props?e.props=s:e.props=i,e.attrs=i}function b_(e,t,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=e,a=et(s),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let h=0;h<u.length;h++){let p=u[h];if(Zi(e.emitsOptions,p))continue;const g=t[p];if(l)if(Z(i,p))g!==i[p]&&(i[p]=g,c=!0);else{const D=pr(p);s[D]=Ta(l,a,D,g,e,!1)}else g!==i[p]&&(i[p]=g,c=!0)}}}else{Pf(e,t,s,i)&&(c=!0);let u;for(const h in a)(!t||!Z(t,h)&&((u=Cr(h))===h||!Z(t,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Ta(l,a,h,void 0,e,!0)):delete s[h]);if(i!==a)for(const h in i)(!t||!Z(t,h))&&(delete i[h],c=!0)}c&&je(e,"set","$attrs")}function Pf(e,t,n,r){const[s,i]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(Wr(l))continue;const c=t[l];let u;s&&Z(s,u=pr(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Zi(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=et(n),c=a||dt;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Ta(s,l,h,c[h],e,!Z(c,h))}}return o}function Ta(e,t,n,r,s,i){const o=e[n];if(o!=null){const a=Z(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&G(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=xs(s);r=c[n]=l.call(null,t),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Cr(n))&&(r=!0))}return r}function xf(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const i=e.props,o={},a=[];let l=!1;if(!G(e)){const u=h=>{l=!0;const[p,g]=xf(h,t,!0);jt(o,p),g&&a.push(...g)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!i&&!l)return mt(e)&&r.set(e,ar),ar;if(F(i))for(let u=0;u<i.length;u++){const h=pr(i[u]);ru(h)&&(o[h]=dt)}else if(i)for(const u in i){const h=pr(u);if(ru(h)){const p=i[u],g=o[h]=F(p)||G(p)?{type:p}:jt({},p);if(g){const D=ou(Boolean,g.type),C=ou(String,g.type);g[0]=D>-1,g[1]=C<0||D<C,(D>-1||Z(g,"default"))&&a.push(h)}}}const c=[o,a];return mt(e)&&r.set(e,c),c}function ru(e){return e[0]!=="$"&&!Wr(e)}function su(e){return e===null?"null":typeof e=="function"?e.name||"":typeof e=="object"&&e.constructor&&e.constructor.name||""}function iu(e,t){return su(e)===su(t)}function ou(e,t){return F(t)?t.findIndex(n=>iu(n,e)):G(t)&&iu(t,e)?0:-1}const Vf=e=>e[0]==="_"||e==="$stable",Tl=e=>F(e)?e.map(be):[be(e)],R_=(e,t,n)=>{if(t._n)return t;const r=Ps((...s)=>Tl(t(...s)),n);return r._c=!1,r},Df=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Vf(s))continue;const i=e[s];if(G(i))t[s]=R_(s,i,r);else if(i!=null){const o=Tl(i);t[s]=()=>o}}},kf=(e,t)=>{const n=Tl(t);e.slots.default=()=>n},C_=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=et(t),vi(t,"_",n)):Df(t,e.slots={})}else e.slots={},t&&kf(e,t);vi(e.slots,no,1)},P_=(e,t,n)=>{const{vnode:r,slots:s}=e;let i=!0,o=dt;if(r.shapeFlag&32){const a=t._;a?n&&a===1?i=!1:(jt(s,t),!n&&a===1&&delete s._):(i=!t.$stable,Df(t,s)),o=t}else t&&(kf(e,t),o={default:1});if(i)for(const a in s)!Vf(a)&&o[a]==null&&delete s[a]};function Aa(e,t,n,r,s=!1){if(F(e)){e.forEach((p,g)=>Aa(p,t&&(F(t)?t[g]:t),n,r,s));return}if(Qr(r)&&!s)return;const i=r.shapeFlag&4?so(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=e,c=t&&t.r,u=a.refs===dt?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Pt(c)?(u[c]=null,Z(h,c)&&(h[c]=null)):Rt(c)&&(c.value=null)),G(l))an(l,a,12,[o,u]);else{const p=Pt(l),g=Rt(l);if(p||g){const D=()=>{if(e.f){const C=p?Z(h,l)?h[l]:u[l]:l.value;s?F(C)&&ol(C,i):F(C)?C.includes(i)||C.push(i):p?(u[l]=[i],Z(h,l)&&(h[l]=u[l])):(l.value=[i],e.k&&(u[e.k]=l.value))}else p?(u[l]=o,Z(h,l)&&(h[l]=o)):g&&(l.value=o,e.k&&(u[e.k]=o))};o?(D.id=-1,te(D,n)):D()}}}const te=Xm;function x_(e){return V_(e)}function V_(e,t){const n=Kh();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:p,setScopeId:g=he,insertStaticContent:D}=e,C=(f,d,m,E=null,v=null,T=null,R=void 0,I=null,A=!!d.dynamicChildren)=>{if(f===d)return;f&&!Ur(f,d)&&(E=Ks(f),Te(f,v,T,!0),f=null),d.patchFlag===-2&&(A=!1,d.dynamicChildren=null);const{type:w,ref:k,shapeFlag:L}=d;switch(w){case eo:V(f,d,m,E);break;case dn:q(f,d,m,E);break;case Ko:f==null&&st(d,m,E,R);break;case ee:Ie(f,d,m,E,v,T,R,I,A);break;default:L&1?at(f,d,m,E,v,T,R,I,A):L&6?Xn(f,d,m,E,v,T,R,I,A):(L&64||L&128)&&w.process(f,d,m,E,v,T,R,I,A,Zn)}k!=null&&v&&Aa(k,f&&f.ref,T,d||f,!d)},V=(f,d,m,E)=>{if(f==null)r(d.el=a(d.children),m,E);else{const v=d.el=f.el;d.children!==f.children&&c(v,d.children)}},q=(f,d,m,E)=>{f==null?r(d.el=l(d.children||""),m,E):d.el=f.el},st=(f,d,m,E)=>{[f.el,f.anchor]=D(f.children,d,m,E,f.el,f.anchor)},H=({el:f,anchor:d},m,E)=>{let v;for(;f&&f!==d;)v=p(f),r(f,m,E),f=v;r(d,m,E)},it=({el:f,anchor:d})=>{let m;for(;f&&f!==d;)m=p(f),s(f),f=m;s(d)},at=(f,d,m,E,v,T,R,I,A)=>{d.type==="svg"?R="svg":d.type==="math"&&(R="mathml"),f==null?K(d,m,E,v,T,R,I,A):nt(f,d,v,T,R,I,A)},K=(f,d,m,E,v,T,R,I)=>{let A,w;const{props:k,shapeFlag:L,transition:O,dirs:j}=f;if(A=f.el=o(f.type,T,k&&k.is,k),L&8?u(A,f.children):L&16&&J(f.children,A,null,E,v,Go(f,T),R,I),j&&bn(f,null,E,"created"),Tt(A,f,f.scopeId,R,E),k){for(const ct in k)ct!=="value"&&!Wr(ct)&&i(A,ct,null,k[ct],T,f.children,E,v,Fe);"value"in k&&i(A,"value",null,k.value,T),(w=k.onVnodeBeforeMount)&&Se(w,E,f)}j&&bn(f,null,E,"beforeMount");const W=D_(v,O);W&&O.beforeEnter(A),r(A,d,m),((w=k&&k.onVnodeMounted)||W||j)&&te(()=>{w&&Se(w,E,f),W&&O.enter(A),j&&bn(f,null,E,"mounted")},v)},Tt=(f,d,m,E,v)=>{if(m&&g(f,m),E)for(let T=0;T<E.length;T++)g(f,E[T]);if(v){let T=v.subTree;if(d===T){const R=v.vnode;Tt(f,R,R.scopeId,R.slotScopeIds,v.parent)}}},J=(f,d,m,E,v,T,R,I,A=0)=>{for(let w=A;w<f.length;w++){const k=f[w]=I?Ze(f[w]):be(f[w]);C(null,k,d,m,E,v,T,R,I)}},nt=(f,d,m,E,v,T,R)=>{const I=d.el=f.el;let{patchFlag:A,dynamicChildren:w,dirs:k}=d;A|=f.patchFlag&16;const L=f.props||dt,O=d.props||dt;let j;if(m&&Rn(m,!1),(j=O.onVnodeBeforeUpdate)&&Se(j,m,d,f),k&&bn(d,f,m,"beforeUpdate"),m&&Rn(m,!0),w?It(f.dynamicChildren,w,I,m,E,Go(d,v),T):R||ht(f,d,I,null,m,E,Go(d,v),T,!1),A>0){if(A&16)se(I,d,L,O,m,E,v);else if(A&2&&L.class!==O.class&&i(I,"class",null,O.class,v),A&4&&i(I,"style",L.style,O.style,v),A&8){const W=d.dynamicProps;for(let ct=0;ct<W.length;ct++){const _t=W[ct],xt=L[_t],ge=O[_t];(ge!==xt||_t==="value")&&i(I,_t,xt,ge,v,f.children,m,E,Fe)}}A&1&&f.children!==d.children&&u(I,d.children)}else!R&&w==null&&se(I,d,L,O,m,E,v);((j=O.onVnodeUpdated)||k)&&te(()=>{j&&Se(j,m,d,f),k&&bn(d,f,m,"updated")},E)},It=(f,d,m,E,v,T,R)=>{for(let I=0;I<d.length;I++){const A=f[I],w=d[I],k=A.el&&(A.type===ee||!Ur(A,w)||A.shapeFlag&70)?h(A.el):m;C(A,w,k,null,E,v,T,R,!0)}},se=(f,d,m,E,v,T,R)=>{if(m!==E){if(m!==dt)for(const I in m)!Wr(I)&&!(I in E)&&i(f,I,m[I],null,R,d.children,v,T,Fe);for(const I in E){if(Wr(I))continue;const A=E[I],w=m[I];A!==w&&I!=="value"&&i(f,I,w,A,R,d.children,v,T,Fe)}"value"in E&&i(f,"value",m.value,E.value,R)}},Ie=(f,d,m,E,v,T,R,I,A)=>{const w=d.el=f?f.el:a(""),k=d.anchor=f?f.anchor:a("");let{patchFlag:L,dynamicChildren:O,slotScopeIds:j}=d;j&&(I=I?I.concat(j):j),f==null?(r(w,m,E),r(k,m,E),J(d.children||[],m,k,v,T,R,I,A)):L>0&&L&64&&O&&f.dynamicChildren?(It(f.dynamicChildren,O,m,v,T,R,I),(d.key!=null||v&&d===v.subTree)&&Nf(f,d,!0)):ht(f,d,m,k,v,T,R,I,A)},Xn=(f,d,m,E,v,T,R,I,A)=>{d.slotScopeIds=I,f==null?d.shapeFlag&512?v.ctx.activate(d,m,E,R,A):Lr(d,m,E,v,T,R,A):Qe(f,d,A)},Lr=(f,d,m,E,v,T,R)=>{const I=f.component=j_(f,E,v);if(Af(f)&&(I.ctx.renderer=Zn),$_(I),I.asyncDep){if(v&&v.registerDep(I,lt),!f.el){const A=I.subTree=ut(dn);q(null,A,d,m)}}else lt(I,f,d,m,v,T,R)},Qe=(f,d,m)=>{const E=d.component=f.component;if(Wm(f,d,m))if(E.asyncDep&&!E.asyncResolved){Et(E,d,m);return}else E.next=d,$m(E.update),E.effect.dirty=!0,E.update();else d.el=f.el,E.vnode=d},lt=(f,d,m,E,v,T,R)=>{const I=()=>{if(f.isMounted){let{next:k,bu:L,u:O,parent:j,vnode:W}=f;{const tr=Of(f);if(tr){k&&(k.el=W.el,Et(f,k,R)),tr.asyncDep.then(()=>{f.isUnmounted||I()});return}}let ct=k,_t;Rn(f,!1),k?(k.el=W.el,Et(f,k,R)):k=W,L&&hi(L),(_t=k.props&&k.props.onVnodeBeforeUpdate)&&Se(_t,j,k,W),Rn(f,!0);const xt=zo(f),ge=f.subTree;f.subTree=xt,C(ge,xt,h(ge.el),Ks(ge),f,v,T),k.el=xt.el,ct===null&&Qm(f,xt.el),O&&te(O,v),(_t=k.props&&k.props.onVnodeUpdated)&&te(()=>Se(_t,j,k,W),v)}else{let k;const{el:L,props:O}=d,{bm:j,m:W,parent:ct}=f,_t=Qr(d);if(Rn(f,!1),j&&hi(j),!_t&&(k=O&&O.onVnodeBeforeMount)&&Se(k,ct,d),Rn(f,!0),L&&jo){const xt=()=>{f.subTree=zo(f),jo(L,f.subTree,f,v,null)};_t?d.type.__asyncLoader().then(()=>!f.isUnmounted&&xt()):xt()}else{const xt=f.subTree=zo(f);C(null,xt,m,E,f,v,T),d.el=xt.el}if(W&&te(W,v),!_t&&(k=O&&O.onVnodeMounted)){const xt=d;te(()=>Se(k,ct,xt),v)}(d.shapeFlag&256||ct&&Qr(ct.vnode)&&ct.vnode.shapeFlag&256)&&f.a&&te(f.a,v),f.isMounted=!0,d=m=E=null}},A=f.effect=new cl(I,he,()=>yl(w),f.scope),w=f.update=()=>{A.dirty&&A.run()};w.id=f.uid,Rn(f,!0),w()},Et=(f,d,m)=>{d.component=f;const E=f.vnode.props;f.vnode=d,f.next=null,b_(f,d.props,E,m),P_(f,d.children,m),Kn(),Yc(f),Wn()},ht=(f,d,m,E,v,T,R,I,A=!1)=>{const w=f&&f.children,k=f?f.shapeFlag:0,L=d.children,{patchFlag:O,shapeFlag:j}=d;if(O>0){if(O&128){Gs(w,L,m,E,v,T,R,I,A);return}else if(O&256){An(w,L,m,E,v,T,R,I,A);return}}j&8?(k&16&&Fe(w,v,T),L!==w&&u(m,L)):k&16?j&16?Gs(w,L,m,E,v,T,R,I,A):Fe(w,v,T,!0):(k&8&&u(m,""),j&16&&J(L,m,E,v,T,R,I,A))},An=(f,d,m,E,v,T,R,I,A)=>{f=f||ar,d=d||ar;const w=f.length,k=d.length,L=Math.min(w,k);let O;for(O=0;O<L;O++){const j=d[O]=A?Ze(d[O]):be(d[O]);C(f[O],j,m,null,v,T,R,I,A)}w>k?Fe(f,v,T,!0,!1,L):J(d,m,E,v,T,R,I,A,L)},Gs=(f,d,m,E,v,T,R,I,A)=>{let w=0;const k=d.length;let L=f.length-1,O=k-1;for(;w<=L&&w<=O;){const j=f[w],W=d[w]=A?Ze(d[w]):be(d[w]);if(Ur(j,W))C(j,W,m,null,v,T,R,I,A);else break;w++}for(;w<=L&&w<=O;){const j=f[L],W=d[O]=A?Ze(d[O]):be(d[O]);if(Ur(j,W))C(j,W,m,null,v,T,R,I,A);else break;L--,O--}if(w>L){if(w<=O){const j=O+1,W=j<k?d[j].el:E;for(;w<=O;)C(null,d[w]=A?Ze(d[w]):be(d[w]),m,W,v,T,R,I,A),w++}}else if(w>O)for(;w<=L;)Te(f[w],v,T,!0),w++;else{const j=w,W=w,ct=new Map;for(w=W;w<=O;w++){const ie=d[w]=A?Ze(d[w]):be(d[w]);ie.key!=null&&ct.set(ie.key,w)}let _t,xt=0;const ge=O-W+1;let tr=!1,Uc=0;const Fr=new Array(ge);for(w=0;w<ge;w++)Fr[w]=0;for(w=j;w<=L;w++){const ie=f[w];if(xt>=ge){Te(ie,v,T,!0);continue}let Ae;if(ie.key!=null)Ae=ct.get(ie.key);else for(_t=W;_t<=O;_t++)if(Fr[_t-W]===0&&Ur(ie,d[_t])){Ae=_t;break}Ae===void 0?Te(ie,v,T,!0):(Fr[Ae-W]=w+1,Ae>=Uc?Uc=Ae:tr=!0,C(ie,d[Ae],m,null,v,T,R,I,A),xt++)}const Bc=tr?k_(Fr):ar;for(_t=Bc.length-1,w=ge-1;w>=0;w--){const ie=W+w,Ae=d[ie],jc=ie+1<k?d[ie+1].el:E;Fr[w]===0?C(null,Ae,m,jc,v,T,R,I,A):tr&&(_t<0||w!==Bc[_t]?Sn(Ae,m,jc,2):_t--)}}},Sn=(f,d,m,E,v=null)=>{const{el:T,type:R,transition:I,children:A,shapeFlag:w}=f;if(w&6){Sn(f.component.subTree,d,m,E);return}if(w&128){f.suspense.move(d,m,E);return}if(w&64){R.move(f,d,m,Zn);return}if(R===ee){r(T,d,m);for(let L=0;L<A.length;L++)Sn(A[L],d,m,E);r(f.anchor,d,m);return}if(R===Ko){H(f,d,m);return}if(E!==2&&w&1&&I)if(E===0)I.beforeEnter(T),r(T,d,m),te(()=>I.enter(T),v);else{const{leave:L,delayLeave:O,afterLeave:j}=I,W=()=>r(T,d,m),ct=()=>{L(T,()=>{W(),j&&j()})};O?O(T,W,ct):ct()}else r(T,d,m)},Te=(f,d,m,E=!1,v=!1)=>{const{type:T,props:R,ref:I,children:A,dynamicChildren:w,shapeFlag:k,patchFlag:L,dirs:O}=f;if(I!=null&&Aa(I,null,m,f,!0),k&256){d.ctx.deactivate(f);return}const j=k&1&&O,W=!Qr(f);let ct;if(W&&(ct=R&&R.onVnodeBeforeUnmount)&&Se(ct,d,f),k&6)Yg(f.component,m,E);else{if(k&128){f.suspense.unmount(m,E);return}j&&bn(f,null,d,"beforeUnmount"),k&64?f.type.remove(f,d,m,v,Zn,E):w&&(T!==ee||L>0&&L&64)?Fe(w,d,m,!1,!0):(T===ee&&L&384||!v&&k&16)&&Fe(A,d,m),E&&Lc(f)}(W&&(ct=R&&R.onVnodeUnmounted)||j)&&te(()=>{ct&&Se(ct,d,f),j&&bn(f,null,d,"unmounted")},m)},Lc=f=>{const{type:d,el:m,anchor:E,transition:v}=f;if(d===ee){Jg(m,E);return}if(d===Ko){it(f);return}const T=()=>{s(m),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(f.shapeFlag&1&&v&&!v.persisted){const{leave:R,delayLeave:I}=v,A=()=>R(m,T);I?I(f.el,T,A):A()}else T()},Jg=(f,d)=>{let m;for(;f!==d;)m=p(f),s(f),f=m;s(d)},Yg=(f,d,m)=>{const{bum:E,scope:v,update:T,subTree:R,um:I}=f;E&&hi(E),v.stop(),T&&(T.active=!1,Te(R,f,d,m)),I&&te(I,d),te(()=>{f.isUnmounted=!0},d),d&&d.pendingBranch&&!d.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===d.pendingId&&(d.deps--,d.deps===0&&d.resolve())},Fe=(f,d,m,E=!1,v=!1,T=0)=>{for(let R=T;R<f.length;R++)Te(f[R],d,m,E,v)},Ks=f=>f.shapeFlag&6?Ks(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el);let Uo=!1;const Fc=(f,d,m)=>{f==null?d._vnode&&Te(d._vnode,null,null,!0):C(d._vnode||null,f,d,null,null,null,m),Uo||(Uo=!0,Yc(),yf(),Uo=!1),d._vnode=f},Zn={p:C,um:Te,m:Sn,r:Lc,mt:Lr,mc:J,pc:ht,pbc:It,n:Ks,o:e};let Bo,jo;return t&&([Bo,jo]=t(Zn)),{render:Fc,hydrate:Bo,createApp:I_(Fc,Bo)}}function Go({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Rn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function D_(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Nf(e,t,n=!1){const r=e.children,s=t.children;if(F(r)&&F(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Ze(s[i]),a.el=o.el),n||Nf(o,a)),a.type===eo&&(a.el=o.el)}}function k_(e){const t=e.slice(),n=[0];let r,s,i,o,a;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(s=n[n.length-1],e[s]<c){t[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,e[n[a]]<c?i=a+1:o=a;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}function Of(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Of(t)}const N_=e=>e.__isTeleport,ee=Symbol.for("v-fgt"),eo=Symbol.for("v-txt"),dn=Symbol.for("v-cmt"),Ko=Symbol.for("v-stc"),Xr=[];let me=null;function X(e=!1){Xr.push(me=e?null:[])}function O_(){Xr.pop(),me=Xr[Xr.length-1]||null}let hs=1;function au(e){hs+=e}function Mf(e){return e.dynamicChildren=hs>0?me||ar:null,O_(),hs>0&&me&&me.push(e),e}function yt(e,t,n,r,s,i){return Mf(x(e,t,n,r,s,i,!0))}function Pe(e,t,n,r,s){return Mf(ut(e,t,n,r,s,!0))}function Lf(e){return e?e.__v_isVNode===!0:!1}function Ur(e,t){return e.type===t.type&&e.key===t.key}const no="__vInternal",Ff=({key:e})=>e??null,pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Pt(e)||Rt(e)||G(e)?{i:kt,r:e,k:t,f:!!n}:e:null);function x(e,t=null,n=null,r=0,s=null,i=e===ee?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ff(t),ref:t&&pi(t),scopeId:wf,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return a?(Al(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Pt(n)?8:16),hs>0&&!o&&me&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&me.push(l),l}const ut=M_;function M_(e,t=null,n=null,r=0,s=null,i=!1){if((!e||e===Jm)&&(e=dn),Lf(e)){const a=_r(e,t,!0);return n&&Al(a,n),hs>0&&!i&&me&&(a.shapeFlag&6?me[me.indexOf(e)]=a:me.push(a)),a.patchFlag|=-2,a}if(G_(e)&&(e=e.__vccOpts),t){t=L_(t);let{class:a,style:l}=t;a&&!Pt(a)&&(t.class=ze(a)),mt(l)&&(ff(l)&&!F(l)&&(l=jt({},l)),t.style=Xt(l))}const o=Pt(e)?1:Ym(e)?128:N_(e)?64:mt(e)?4:G(e)?2:0;return x(e,t,n,r,s,o,i,!0)}function L_(e){return e?ff(e)||no in e?jt({},e):e:null}function _r(e,t,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=e,a=t?F_(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Ff(a),ref:t&&t.ref?n&&s?F(s)?s.concat(pi(t)):[s,pi(t)]:pi(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ee?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&_r(e.ssContent),ssFallback:e.ssFallback&&_r(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Ee(e=" ",t=0){return ut(eo,null,e,t)}function en(e="",t=!1){return t?(X(),Pe(dn,null,e)):ut(dn,null,e)}function be(e){return e==null||typeof e=="boolean"?ut(dn):F(e)?ut(ee,null,e.slice()):typeof e=="object"?Ze(e):ut(eo,null,String(e))}function Ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:_r(e)}function Al(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Al(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(no in t)?t._ctx=kt:s===3&&kt&&(kt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else G(t)?(t={default:t,_ctx:kt},n=32):(t=String(t),r&64?(n=16,t=[Ee(t)]):n=8);e.children=t,e.shapeFlag|=n}function F_(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ze([t.class,r.class]));else if(s==="style")t.style=Xt([t.style,r.style]);else if(Ki(s)){const i=t[s],o=r[s];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[s]=i?[].concat(i,o):o)}else s!==""&&(t[s]=r[s])}return t}function Se(e,t,n,r=null){ye(e,t,7,[n,r])}const U_=Cf();let B_=0;function j_(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||U_,i={uid:B_++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Jh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xf(r,s),emitsOptions:vf(r,s),emit:null,emitted:null,propsDefaults:dt,inheritAttrs:r.inheritAttrs,ctx:dt,data:dt,props:dt,attrs:dt,slots:dt,refs:dt,setupState:dt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Hm.bind(null,i),e.ce&&e.ce(i),i}let Kt=null,Si,Sa;{const e=Kh(),t=(n,r)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Si=t("__VUE_INSTANCE_SETTERS__",n=>Kt=n),Sa=t("__VUE_SSR_SETTERS__",n=>ro=n)}const xs=e=>{const t=Kt;return Si(e),e.scope.on(),()=>{e.scope.off(),Si(t)}},lu=()=>{Kt&&Kt.scope.off(),Si(null)};function Uf(e){return e.vnode.shapeFlag&4}let ro=!1;function $_(e,t=!1){t&&Sa(t);const{props:n,children:r}=e.vnode,s=Uf(e);S_(e,n,s,t),C_(e,r);const i=s?q_(e,t):void 0;return t&&Sa(!1),i}function q_(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Yi(new Proxy(e.ctx,g_));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?H_(e):null,i=xs(e);Kn();const o=an(r,e,0,[e.props,s]);if(Wn(),i(),qh(o)){if(o.then(lu,lu),t)return o.then(a=>{cu(e,a,t)}).catch(a=>{Xi(a,e,0)});e.asyncDep=o}else cu(e,o,t)}else Bf(e,t)}function cu(e,t,n){G(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:mt(t)&&(e.setupState=gf(t)),Bf(e,n)}let uu;function Bf(e,t,n){const r=e.type;if(!e.render){if(!t&&uu&&!r.render){const s=r.template||Il(e).template;if(s){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=r,c=jt(jt({isCustomElement:i,delimiters:a},o),l);r.render=uu(s,c)}}e.render=r.render||he}{const s=xs(e);Kn();try{m_(e)}finally{Wn(),s()}}}function z_(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return re(e,"get","$attrs"),t[n]}}))}function H_(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return z_(e)},slots:e.slots,emit:e.emit,expose:t}}function so(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(gf(Yi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Jr)return Jr[n](e)},has(t,n){return n in t||n in Jr}}))}function G_(e){return G(e)&&"__vccOpts"in e}const De=(e,t)=>km(e,t,ro),K_="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const W_="http://www.w3.org/2000/svg",Q_="http://www.w3.org/1998/Math/MathML",tn=typeof document<"u"?document:null,hu=tn&&tn.createElement("template"),J_={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t==="svg"?tn.createElementNS(W_,e):t==="mathml"?tn.createElementNS(Q_,e):tn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>tn.createTextNode(e),createComment:e=>tn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>tn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,i){const o=n?n.previousSibling:t.lastChild;if(s&&(s===i||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{hu.innerHTML=r==="svg"?`<svg>${e}</svg>`:r==="mathml"?`<math>${e}</math>`:e;const a=hu.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Y_=Symbol("_vtc");function X_(e,t,n){const r=e[Y_];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const fu=Symbol("_vod"),Z_=Symbol("_vsh"),ty=Symbol(""),ey=/(^|;)\s*display\s*:/;function ny(e,t,n){const r=e.style,s=Pt(n);let i=!1;if(n&&!s){if(t)if(Pt(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&gi(r,a,"")}else for(const o in t)n[o]==null&&gi(r,o,"");for(const o in n)o==="display"&&(i=!0),gi(r,o,n[o])}else if(s){if(t!==n){const o=r[ty];o&&(n+=";"+o),r.cssText=n,i=ey.test(n)}}else t&&e.removeAttribute("style");fu in e&&(e[fu]=i?r.display:"",e[Z_]&&(r.display="none"))}const du=/\s*!important$/;function gi(e,t,n){if(F(n))n.forEach(r=>gi(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=ry(e,t);du.test(n)?e.setProperty(Cr(r),n.replace(du,""),"important"):e[r]=n}}const pu=["Webkit","Moz","ms"],Wo={};function ry(e,t){const n=Wo[t];if(n)return n;let r=pr(t);if(r!=="filter"&&r in e)return Wo[t]=r;r=Gh(r);for(let s=0;s<pu.length;s++){const i=pu[s]+r;if(i in e)return Wo[t]=i}return t}const gu="http://www.w3.org/1999/xlink";function sy(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(gu,t.slice(6,t.length)):e.setAttributeNS(gu,t,n);else{const i=lm(t);n==null||i&&!Wh(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function iy(e,t,n,r,s,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,s,i),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?e.getAttribute("value")||"":e.value,u=n??"";(c!==u||!("_value"in e))&&(e.value=u),n==null&&e.removeAttribute(t),e._value=n;return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Wh(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Ue(e,t,n,r){e.addEventListener(t,n,r)}function oy(e,t,n,r){e.removeEventListener(t,n,r)}const mu=Symbol("_vei");function ay(e,t,n,r,s=null){const i=e[mu]||(e[mu]={}),o=i[t];if(r&&o)o.value=r;else{const[a,l]=ly(t);if(r){const c=i[t]=hy(r,s);Ue(e,a,c,l)}else o&&(oy(e,a,o,l),i[t]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function ly(e){let t;if(_u.test(e)){t={};let r;for(;r=e.match(_u);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Cr(e.slice(2)),t]}let Qo=0;const cy=Promise.resolve(),uy=()=>Qo||(cy.then(()=>Qo=0),Qo=Date.now());function hy(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ye(fy(r,n.value),t,5,[r])};return n.value=e,n.attached=uy(),n}function fy(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const yu=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,dy=(e,t,n,r,s,i,o,a,l)=>{const c=s==="svg";t==="class"?X_(e,r,c):t==="style"?ny(e,n,r):Ki(t)?il(t)||ay(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):py(e,t,r,c))?iy(e,t,r,i,o,a,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),sy(e,t,r,c))};function py(e,t,n,r){if(r)return!!(t==="innerHTML"||t==="textContent"||t in e&&yu(t)&&G(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yu(t)&&Pt(n)?!1:t in e}const pn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return F(t)?n=>hi(t,n):t};function gy(e){e.target.composing=!0}function Eu(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fe=Symbol("_assign"),vu={created(e,{modifiers:{lazy:t,trim:n,number:r}},s){e[fe]=pn(s);const i=r||s.props&&s.props.type==="number";Ue(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=as(a)),e[fe](a)}),n&&Ue(e,"change",()=>{e.value=e.value.trim()}),t||(Ue(e,"compositionstart",gy),Ue(e,"compositionend",Eu),Ue(e,"change",Eu))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:s}},i){if(e[fe]=pn(i),e.composing)return;const o=s||e.type==="number"?as(e.value):e.value,a=t??"";o!==a&&(document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===a)||(e.value=a))}},my={deep:!0,created(e,t,n){e[fe]=pn(n),Ue(e,"change",()=>{const r=e._modelValue,s=yr(e),i=e.checked,o=e[fe];if(F(r)){const a=ll(r,s),l=a!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const c=[...r];c.splice(a,1),o(c)}}else if(Rr(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(jf(e,i))})},mounted:wu,beforeUpdate(e,t,n){e[fe]=pn(n),wu(e,t,n)}};function wu(e,{value:t,oldValue:n},r){e._modelValue=t,F(t)?e.checked=ll(t,r.props.value)>-1:Rr(t)?e.checked=t.has(r.props.value):t!==n&&(e.checked=Bn(t,jf(e,!0)))}const _y={created(e,{value:t},n){e.checked=Bn(t,n.props.value),e[fe]=pn(n),Ue(e,"change",()=>{e[fe](yr(e))})},beforeUpdate(e,{value:t,oldValue:n},r){e[fe]=pn(r),t!==n&&(e.checked=Bn(t,r.props.value))}},yy={deep:!0,created(e,{value:t,modifiers:{number:n}},r){const s=Rr(t);Ue(e,"change",()=>{const i=Array.prototype.filter.call(e.options,o=>o.selected).map(o=>n?as(yr(o)):yr(o));e[fe](e.multiple?s?new Set(i):i:i[0]),e._assigning=!0,_l(()=>{e._assigning=!1})}),e[fe]=pn(r)},mounted(e,{value:t,modifiers:{number:n}}){Iu(e,t,n)},beforeUpdate(e,t,n){e[fe]=pn(n)},updated(e,{value:t,modifiers:{number:n}}){e._assigning||Iu(e,t,n)}};function Iu(e,t,n){const r=e.multiple,s=F(t);if(!(r&&!s&&!Rr(t))){for(let i=0,o=e.options.length;i<o;i++){const a=e.options[i],l=yr(a);if(r)if(s){const c=typeof l;c==="string"||c==="number"?a.selected=t.includes(n?as(l):l):a.selected=ll(t,l)>-1}else a.selected=t.has(l);else if(Bn(yr(a),t)){e.selectedIndex!==i&&(e.selectedIndex=i);return}}!r&&e.selectedIndex!==-1&&(e.selectedIndex=-1)}}function yr(e){return"_value"in e?e._value:e.value}function jf(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const Ey={created(e,t,n){ti(e,t,n,null,"created")},mounted(e,t,n){ti(e,t,n,null,"mounted")},beforeUpdate(e,t,n,r){ti(e,t,n,r,"beforeUpdate")},updated(e,t,n,r){ti(e,t,n,r,"updated")}};function vy(e,t){switch(e){case"SELECT":return yy;case"TEXTAREA":return vu;default:switch(t){case"checkbox":return my;case"radio":return _y;default:return vu}}}function ti(e,t,n,r,s){const o=vy(e.tagName,n.props&&n.props.type)[s];o&&o(e,t,n,r)}const wy=jt({patchProp:dy},J_);let Tu;function Iy(){return Tu||(Tu=x_(wy))}const Ty=(...e)=>{const t=Iy().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=Sy(r);if(!s)return;const i=t._component;!G(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Ay(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Ay(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Sy(e){return Pt(e)?document.querySelector(e):e}var by=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let $f;const io=e=>$f=e,qf=Symbol();function ba(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Zr;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Zr||(Zr={}));function Ry(){const e=Yh(!0),t=e.run(()=>mr({}));let n=[],r=[];const s=Yi({install(i){io(s),s._a=i,i.provide(qf,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!by?r.push(i):n.push(i),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return s}const zf=()=>{};function Au(e,t,n,r=zf){e.push(t);const s=()=>{const i=e.indexOf(t);i>-1&&(e.splice(i,1),r())};return!n&&Xh()&&hm(s),s}function er(e,...t){e.slice().forEach(n=>{n(...t)})}const Cy=e=>e();function Ra(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,r)=>e.set(r,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const r=t[n],s=e[n];ba(s)&&ba(r)&&e.hasOwnProperty(n)&&!Rt(r)&&!on(r)?e[n]=Ra(s,r):e[n]=r}return e}const Py=Symbol();function xy(e){return!ba(e)||!e.hasOwnProperty(Py)}const{assign:Ye}=Object;function Vy(e){return!!(Rt(e)&&e.effect)}function Dy(e,t,n,r){const{state:s,actions:i,getters:o}=t,a=n.state.value[e];let l;function c(){a||(n.state.value[e]=s?s():{});const u=Lm(n.state.value[e]);return Ye(u,i,Object.keys(o||{}).reduce((h,p)=>(h[p]=Yi(De(()=>{io(n);const g=n._s.get(e);return o[p].call(g,g)})),h),{}))}return l=Hf(e,c,t,n,r,!0),l}function Hf(e,t,n={},r,s,i){let o;const a=Ye({actions:{}},n),l={deep:!0};let c,u,h=[],p=[],g;const D=r.state.value[e];!i&&!D&&(r.state.value[e]={}),mr({});let C;function V(J){let nt;c=u=!1,typeof J=="function"?(J(r.state.value[e]),nt={type:Zr.patchFunction,storeId:e,events:g}):(Ra(r.state.value[e],J),nt={type:Zr.patchObject,payload:J,storeId:e,events:g});const It=C=Symbol();_l().then(()=>{C===It&&(c=!0)}),u=!0,er(h,nt,r.state.value[e])}const q=i?function(){const{state:nt}=n,It=nt?nt():{};this.$patch(se=>{Ye(se,It)})}:zf;function st(){o.stop(),h=[],p=[],r._s.delete(e)}function H(J,nt){return function(){io(r);const It=Array.from(arguments),se=[],Ie=[];function Xn(lt){se.push(lt)}function Lr(lt){Ie.push(lt)}er(p,{args:It,name:J,store:at,after:Xn,onError:Lr});let Qe;try{Qe=nt.apply(this&&this.$id===e?this:at,It)}catch(lt){throw er(Ie,lt),lt}return Qe instanceof Promise?Qe.then(lt=>(er(se,lt),lt)).catch(lt=>(er(Ie,lt),Promise.reject(lt))):(er(se,Qe),Qe)}}const it={_p:r,$id:e,$onAction:Au.bind(null,p),$patch:V,$reset:q,$subscribe(J,nt={}){const It=Au(h,J,nt.detached,()=>se()),se=o.run(()=>di(()=>r.state.value[e],Ie=>{(nt.flush==="sync"?u:c)&&J({storeId:e,type:Zr.direct,events:g},Ie)},Ye({},l,nt)));return It},$dispose:st},at=Ji(it);r._s.set(e,at);const Tt=(r._a&&r._a.runWithContext||Cy)(()=>r._e.run(()=>(o=Yh()).run(t)));for(const J in Tt){const nt=Tt[J];if(Rt(nt)&&!Vy(nt)||on(nt))i||(D&&xy(nt)&&(Rt(nt)?nt.value=D[J]:Ra(nt,D[J])),r.state.value[e][J]=nt);else if(typeof nt=="function"){const It=H(J,nt);Tt[J]=It,a.actions[J]=nt}}return Ye(at,Tt),Ye(et(at),Tt),Object.defineProperty(at,"$state",{get:()=>r.state.value[e],set:J=>{V(nt=>{Ye(nt,J)})}}),r._p.forEach(J=>{Ye(at,o.run(()=>J({store:at,app:r._a,pinia:r,options:a})))}),D&&i&&n.hydrate&&n.hydrate(at.$state,D),c=!0,u=!0,at}function Gf(e,t,n){let r,s;const i=typeof t=="function";typeof e=="string"?(r=e,s=i?n:t):(s=e,r=e.id);function o(a,l){const c=A_();return a=a||(c?Yr(qf,null):null),a&&io(a),a=$f,a._s.has(r)||(i?Hf(r,t,s,a):Dy(r,s,a)),a._s.get(r)}return o.$id=r,o}function Jo(e,t=0){return Math.floor(Math.random()*(e-t+1))+t}function ky(e){return e?e*-1:0}var Su={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kf=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ny=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=e[n++];t[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=e[n++],o=e[n++],a=e[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return t.join("")},Wf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const i=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let p=(a&15)<<2|c>>6,g=c&63;l||(g=64,o||(p=64)),r.push(n[u],n[h],n[p],n[g])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Kf(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ny(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const i=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const c=s<e.length?n[e.charAt(s)]:64;++s;const h=s<e.length?n[e.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new Oy;const p=i<<2|a>>4;if(r.push(p),c!==64){const g=a<<4&240|c>>2;if(r.push(g),h!==64){const D=c<<6&192|h;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Oy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const My=function(e){const t=Kf(e);return Wf.encodeByteArray(t,!0)},bi=function(e){return My(e).replace(/\./g,"")},Ly=function(e){try{return Wf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy=()=>Fy().__FIREBASE_DEFAULTS__,By=()=>{if(typeof process>"u"||typeof Su>"u")return;const e=Su.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},jy=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Ly(e[1]);return t&&JSON.parse(t)},Sl=()=>{try{return Uy()||By()||jy()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$y=e=>{var t,n;return(n=(t=Sl())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},qy=e=>{const t=$y(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},Qf=()=>{var e;return(e=Sl())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hy(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",s=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[bi(JSON.stringify(n)),bi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ri(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Gy(){var e;const t=(e=Sl())===null||e===void 0?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ky(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Wy(){return!Gy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bl(){try{return typeof indexedDB=="object"}catch{return!1}}function Jf(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;t(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){t(n)}})}function Qy(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy="FirebaseError";class vn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Jy,Object.setPrototypeOf(this,vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oo.prototype.create)}}class oo{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,i=this.errors[t],o=i?Yy(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new vn(s,a,r)}}function Yy(e,t){return e.replace(Xy,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Xy=/\{\$([^}]+)}/g;function Ci(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const i=e[s],o=t[s];if(bu(i)&&bu(o)){if(!Ci(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function bu(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=1e3,tE=2,eE=4*60*60*1e3,nE=.5;function Ru(e,t=Zy,n=tE){const r=t*Math.pow(n,e),s=Math.round(nE*r*(Math.random()-.5)*2);return Math.min(eE,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e){return e&&e._delegate?e._delegate:e}class He{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new zy;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(iE(t))try{this.getOrInitializeService({instanceIdentifier:Cn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(t=Cn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Cn){return this.instances.has(t)}getOptions(t=Cn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(t),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&t(o,s),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sE(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Cn){return this.component?this.component.multipleInstances?t:Cn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sE(e){return e===Cn?void 0:e}function iE(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new rE(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(tt||(tt={}));const aE={debug:tt.DEBUG,verbose:tt.VERBOSE,info:tt.INFO,warn:tt.WARN,error:tt.ERROR,silent:tt.SILENT},lE=tt.INFO,cE={[tt.DEBUG]:"log",[tt.VERBOSE]:"log",[tt.INFO]:"info",[tt.WARN]:"warn",[tt.ERROR]:"error"},uE=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=cE[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Rl{constructor(t){this.name=t,this._logLevel=lE,this._logHandler=uE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in tt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?aE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,tt.DEBUG,...t),this._logHandler(this,tt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,tt.VERBOSE,...t),this._logHandler(this,tt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,tt.INFO,...t),this._logHandler(this,tt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,tt.WARN,...t),this._logHandler(this,tt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,tt.ERROR,...t),this._logHandler(this,tt.ERROR,...t)}}const hE=(e,t)=>t.some(n=>e instanceof n);let Cu,Pu;function fE(){return Cu||(Cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dE(){return Pu||(Pu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Yf=new WeakMap,Ca=new WeakMap,Xf=new WeakMap,Yo=new WeakMap,Cl=new WeakMap;function pE(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",i),e.removeEventListener("error",o)},i=()=>{n(ln(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",i),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Yf.set(n,e)}).catch(()=>{}),Cl.set(t,e),t}function gE(e){if(Ca.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",o),e.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",i),e.addEventListener("error",o),e.addEventListener("abort",o)});Ca.set(e,t)}let Pa={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ca.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Xf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ln(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mE(e){Pa=e(Pa)}function _E(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Xo(this),t,...n);return Xf.set(r,t.sort?t.sort():[t]),ln(r)}:dE().includes(e)?function(...t){return e.apply(Xo(this),t),ln(Yf.get(this))}:function(...t){return ln(e.apply(Xo(this),t))}}function yE(e){return typeof e=="function"?_E(e):(e instanceof IDBTransaction&&gE(e),hE(e,fE())?new Proxy(e,Pa):e)}function ln(e){if(e instanceof IDBRequest)return pE(e);if(Yo.has(e))return Yo.get(e);const t=yE(e);return t!==e&&(Yo.set(e,t),Cl.set(t,e)),t}const Xo=e=>Cl.get(e);function Zf(e,t,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(e,t),a=ln(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ln(o.result),l.oldVersion,l.newVersion,ln(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const EE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],Zo=new Map;function xu(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Zo.get(t))return Zo.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=vE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||EE.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Zo.set(t,i),i}mE(e=>({...e,get:(t,n,r)=>xu(t,n)||e.get(t,n,r),has:(t,n)=>!!xu(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(IE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function IE(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xa="@firebase/app",Vu="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn=new Rl("@firebase/app"),TE="@firebase/app-compat",AE="@firebase/analytics-compat",SE="@firebase/analytics",bE="@firebase/app-check-compat",RE="@firebase/app-check",CE="@firebase/auth",PE="@firebase/auth-compat",xE="@firebase/database",VE="@firebase/database-compat",DE="@firebase/functions",kE="@firebase/functions-compat",NE="@firebase/installations",OE="@firebase/installations-compat",ME="@firebase/messaging",LE="@firebase/messaging-compat",FE="@firebase/performance",UE="@firebase/performance-compat",BE="@firebase/remote-config",jE="@firebase/remote-config-compat",$E="@firebase/storage",qE="@firebase/storage-compat",zE="@firebase/firestore",HE="@firebase/firestore-compat",GE="firebase",KE="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Va="[DEFAULT]",WE={[xa]:"fire-core",[TE]:"fire-core-compat",[SE]:"fire-analytics",[AE]:"fire-analytics-compat",[RE]:"fire-app-check",[bE]:"fire-app-check-compat",[CE]:"fire-auth",[PE]:"fire-auth-compat",[xE]:"fire-rtdb",[VE]:"fire-rtdb-compat",[DE]:"fire-fn",[kE]:"fire-fn-compat",[NE]:"fire-iid",[OE]:"fire-iid-compat",[ME]:"fire-fcm",[LE]:"fire-fcm-compat",[FE]:"fire-perf",[UE]:"fire-perf-compat",[BE]:"fire-rc",[jE]:"fire-rc-compat",[$E]:"fire-gcs",[qE]:"fire-gcs-compat",[zE]:"fire-fst",[HE]:"fire-fst-compat","fire-js":"fire-js",[GE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=new Map,QE=new Map,Da=new Map;function Du(e,t){try{e.container.addComponent(t)}catch(n){jn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mn(e){const t=e.name;if(Da.has(t))return jn.debug(`There were multiple attempts to register component ${t}.`),!1;Da.set(t,e);for(const n of Pi.values())Du(n,e);for(const n of QE.values())Du(n,e);return!0}function Vs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cn=new oo("app","Firebase",JE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new He("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw cn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XE=KE;function td(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Va,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw cn.create("bad-app-name",{appName:String(s)});if(n||(n=Qf()),!n)throw cn.create("no-options");const i=Pi.get(s);if(i){if(Ci(n,i.options)&&Ci(r,i.config))return i;throw cn.create("duplicate-app",{appName:s})}const o=new oE(s);for(const l of Da.values())o.addComponent(l);const a=new YE(n,r,o);return Pi.set(s,a),a}function ed(e=Va){const t=Pi.get(e);if(!t&&e===Va&&Qf())return td();if(!t)throw cn.create("no-app",{appName:e});return t}function ke(e,t,n){var r;let s=(r=WE[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${t}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),jn.warn(a.join(" "));return}mn(new He(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE="firebase-heartbeat-database",tv=1,fs="firebase-heartbeat-store";let ta=null;function nd(){return ta||(ta=Zf(ZE,tv,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fs)}catch(n){console.warn(n)}}}}).catch(e=>{throw cn.create("idb-open",{originalErrorMessage:e.message})})),ta}async function ev(e){try{const n=(await nd()).transaction(fs),r=await n.objectStore(fs).get(rd(e));return await n.done,r}catch(t){if(t instanceof vn)jn.warn(t.message);else{const n=cn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});jn.warn(n.message)}}}async function ku(e,t){try{const r=(await nd()).transaction(fs,"readwrite");await r.objectStore(fs).put(t,rd(e)),await r.done}catch(n){if(n instanceof vn)jn.warn(n.message);else{const r=cn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});jn.warn(r.message)}}}function rd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nv=1024,rv=30*24*60*60*1e3;class sv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ov(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Nu();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=rv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Nu(),{heartbeatsToSend:r,unsentEntries:s}=iv(this._heartbeatsCache.heartbeats),i=bi(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Nu(){return new Date().toISOString().substring(0,10)}function iv(e,t=nv){const n=[];let r=e.slice();for(const s of e){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ou(n)>t){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ou(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ov{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bl()?Jf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ev(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ou(e){return bi(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function av(e){mn(new He("platform-logger",t=>new wE(t),"PRIVATE")),mn(new He("heartbeat",t=>new sv(t),"PRIVATE")),ke(xa,Vu,e),ke(xa,Vu,"esm2017"),ke("fire-js","")}av("");var lv="firebase",cv="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke(lv,cv,"app");const sd="@firebase/installations",Pl="0.6.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id=1e4,od=`w:${Pl}`,ad="FIS_v2",uv="https://firebaseinstallations.googleapis.com/v1",hv=60*60*1e3,fv="installations",dv="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$n=new oo(fv,dv,pv);function ld(e){return e instanceof vn&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cd({projectId:e}){return`${uv}/projects/${e}/installations`}function ud(e){return{token:e.token,requestStatus:2,expiresIn:mv(e.expiresIn),creationTime:Date.now()}}async function hd(e,t){const r=(await t.json()).error;return $n.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function fd({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function gv(e,{refreshToken:t}){const n=fd(e);return n.append("Authorization",_v(t)),n}async function dd(e){const t=await e();return t.status>=500&&t.status<600?e():t}function mv(e){return Number(e.replace("s","000"))}function _v(e){return`${ad} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=cd(e),s=fd(e),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={fid:n,authVersion:ad,appId:e.appId,sdkVersion:od},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await dd(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||n,registrationStatus:2,refreshToken:c.refreshToken,authToken:ud(c.authToken)}}else throw await hd("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vv=/^[cdef][\w-]{21}$/,ka="";function wv(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Iv(e);return vv.test(n)?n:ka}catch{return ka}}function Iv(e){return Ev(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gd=new Map;function md(e,t){const n=ao(e);_d(n,t),Tv(n,t)}function _d(e,t){const n=gd.get(e);if(n)for(const r of n)r(t)}function Tv(e,t){const n=Av();n&&n.postMessage({key:e,fid:t}),Sv()}let Dn=null;function Av(){return!Dn&&"BroadcastChannel"in self&&(Dn=new BroadcastChannel("[Firebase] FID Change"),Dn.onmessage=e=>{_d(e.data.key,e.data.fid)}),Dn}function Sv(){gd.size===0&&Dn&&(Dn.close(),Dn=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bv="firebase-installations-database",Rv=1,qn="firebase-installations-store";let ea=null;function xl(){return ea||(ea=Zf(bv,Rv,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(qn)}}})),ea}async function xi(e,t){const n=ao(e),s=(await xl()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n);return await i.put(t,n),await s.done,(!o||o.fid!==t.fid)&&md(e,t.fid),t}async function yd(e){const t=ao(e),r=(await xl()).transaction(qn,"readwrite");await r.objectStore(qn).delete(t),await r.done}async function lo(e,t){const n=ao(e),s=(await xl()).transaction(qn,"readwrite"),i=s.objectStore(qn),o=await i.get(n),a=t(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&md(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vl(e){let t;const n=await lo(e.appConfig,r=>{const s=Cv(r),i=Pv(e,s);return t=i.registrationPromise,i.installationEntry});return n.fid===ka?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Cv(e){const t=e||{fid:wv(),registrationStatus:0};return Ed(t)}function Pv(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($n.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=xv(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Vv(e)}:{installationEntry:t}}async function xv(e,t){try{const n=await yv(e,t);return xi(e.appConfig,n)}catch(n){throw ld(n)&&n.customData.serverCode===409?await yd(e.appConfig):await xi(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Vv(e){let t=await Mu(e.appConfig);for(;t.registrationStatus===1;)await pd(100),t=await Mu(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Vl(e);return r||n}return t}function Mu(e){return lo(e,t=>{if(!t)throw $n.create("installation-not-found");return Ed(t)})}function Ed(e){return Dv(e)?{fid:e.fid,registrationStatus:0}:e}function Dv(e){return e.registrationStatus===1&&e.registrationTime+id<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv({appConfig:e,heartbeatServiceProvider:t},n){const r=Nv(e,n),s=gv(e,n),i=t.getImmediate({optional:!0});if(i){const c=await i.getHeartbeatsHeader();c&&s.append("x-firebase-client",c)}const o={installation:{sdkVersion:od,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await dd(()=>fetch(r,a));if(l.ok){const c=await l.json();return ud(c)}else throw await hd("Generate Auth Token",l)}function Nv(e,{fid:t}){return`${cd(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dl(e,t=!1){let n;const r=await lo(e.appConfig,i=>{if(!vd(i))throw $n.create("not-registered");const o=i.authToken;if(!t&&Lv(o))return i;if(o.requestStatus===1)return n=Ov(e,t),i;{if(!navigator.onLine)throw $n.create("app-offline");const a=Uv(i);return n=Mv(e,a),a}});return n?await n:r.authToken}async function Ov(e,t){let n=await Lu(e.appConfig);for(;n.authToken.requestStatus===1;)await pd(100),n=await Lu(e.appConfig);const r=n.authToken;return r.requestStatus===0?Dl(e,t):r}function Lu(e){return lo(e,t=>{if(!vd(t))throw $n.create("not-registered");const n=t.authToken;return Bv(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Mv(e,t){try{const n=await kv(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await xi(e.appConfig,r),n}catch(n){if(ld(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await yd(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await xi(e.appConfig,r)}throw n}}function vd(e){return e!==void 0&&e.registrationStatus===2}function Lv(e){return e.requestStatus===2&&!Fv(e)}function Fv(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+hv}function Uv(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Bv(e){return e.requestStatus===1&&e.requestTime+id<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(e){const t=e,{installationEntry:n,registrationPromise:r}=await Vl(t);return r?r.catch(console.error):Dl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $v(e,t=!1){const n=e;return await qv(n),(await Dl(n,t)).token}async function qv(e){const{registrationPromise:t}=await Vl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zv(e){if(!e||!e.options)throw na("App Configuration");if(!e.name)throw na("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw na(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function na(e){return $n.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="installations",Hv="installations-internal",Gv=e=>{const t=e.getProvider("app").getImmediate(),n=zv(t),r=Vs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Kv=e=>{const t=e.getProvider("app").getImmediate(),n=Vs(t,wd).getImmediate();return{getId:()=>jv(n),getToken:s=>$v(n,s)}};function Wv(){mn(new He(wd,Gv,"PUBLIC")),mn(new He(Hv,Kv,"PRIVATE"))}Wv();ke(sd,Pl);ke(sd,Pl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vi="analytics",Qv="firebase_id",Jv="origin",Yv=60*1e3,Xv="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kl="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ne=new Rl("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zv={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new oo("analytics","Analytics",Zv);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(e){if(!e.startsWith(kl)){const t=ae.create("invalid-gtag-resource",{gtagURL:e});return ne.warn(t.message),""}return e}function Id(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ew(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function nw(e,t){const n=ew("firebase-js-sdk-policy",{createScriptURL:tw}),r=document.createElement("script"),s=`${kl}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function rw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function sw(e,t,n,r,s,i){const o=r[s];try{if(o)await t[o];else{const l=(await Id(n)).find(c=>c.measurementId===s);l&&await t[l.appId]}}catch(a){ne.error(a)}e("config",s,i)}async function iw(e,t,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await Id(n);for(const l of o){const c=a.find(h=>h.measurementId===l),u=c&&t[c.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(t)),await Promise.all(i),e("event",r,s||{})}catch(i){ne.error(i)}}function ow(e,t,n,r){async function s(i,...o){try{if(i==="event"){const[a,l]=o;await iw(e,t,n,a,l)}else if(i==="config"){const[a,l]=o;await sw(e,t,n,r,a,l)}else if(i==="consent"){const[a]=o;e("consent","update",a)}else if(i==="get"){const[a,l,c]=o;e("get",a,l,c)}else if(i==="set"){const[a]=o;e("set",a)}else e(i,...o)}catch(a){ne.error(a)}}return s}function aw(e,t,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=ow(i,e,t,n),{gtagCore:i,wrappedGtag:window[s]}}function lw(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(kl)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cw=30,uw=1e3;class hw{constructor(t={},n=uw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Td=new hw;function fw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function dw(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:fw(r)},i=Xv.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const l=await o.json();!((t=l.error)===null||t===void 0)&&t.message&&(a=l.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function pw(e,t=Td,n){const{appId:r,apiKey:s,measurementId:i}=e.options;if(!r)throw ae.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw ae.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new _w;return setTimeout(async()=>{a.abort()},n!==void 0?n:Yv),Ad({appId:r,apiKey:s,measurementId:i},o,a,t)}async function Ad(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=Td){var i;const{appId:o,measurementId:a}=e;try{await gw(r,t)}catch(l){if(a)return ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw l}try{const l=await dw(e);return s.deleteThrottleMetadata(o),l}catch(l){const c=l;if(!mw(c)){if(s.deleteThrottleMetadata(o),a)return ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw l}const u=Number((i=c==null?void 0:c.customData)===null||i===void 0?void 0:i.httpStatus)===503?Ru(n,s.intervalMillis,cw):Ru(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),ne.debug(`Calling attemptFetch again in ${u} millis`),Ad(e,h,r,s)}}function gw(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),i=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(i),r(ae.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function mw(e){if(!(e instanceof vn)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class _w{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function yw(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const i=await t,o=Object.assign(Object.assign({},r),{send_to:i});e("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(){if(bl())try{await Jf()}catch(e){return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return ne.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function vw(e,t,n,r,s,i,o){var a;const l=pw(e);l.then(g=>{n[g.measurementId]=g.appId,e.options.measurementId&&g.measurementId!==e.options.measurementId&&ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${g.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(g=>ne.error(g)),t.push(l);const c=Ew().then(g=>{if(g)return r.getId()}),[u,h]=await Promise.all([l,c]);lw(i)||nw(i,u.measurementId),s("js",new Date);const p=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return p[Jv]="firebase",p.update=!0,h!=null&&(p[Qv]=h),s("config",u.measurementId,p),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ww{constructor(t){this.app=t}_delete(){return delete ts[this.app.options.appId],Promise.resolve()}}let ts={},Fu=[];const Uu={};let ra="dataLayer",Iw="gtag",Bu,Sd,ju=!1;function Tw(){const e=[];if(Ky()&&e.push("This is a browser extension environment."),Qy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:t});ne.warn(n.message)}}function Aw(e,t,n){Tw();const r=e.options.appId;if(!r)throw ae.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(ts[r]!=null)throw ae.create("already-exists",{id:r});if(!ju){rw(ra);const{wrappedGtag:i,gtagCore:o}=aw(ts,Fu,Uu,ra,Iw);Sd=i,Bu=o,ju=!0}return ts[r]=vw(e,Fu,Uu,t,Bu,ra,n),new ww(e)}function Sw(e=ed()){e=gn(e);const t=Vs(e,Vi);return t.isInitialized()?t.getImmediate():bw(e)}function bw(e,t={}){const n=Vs(e,Vi);if(n.isInitialized()){const s=n.getImmediate();if(Ci(t,n.getOptions()))return s;throw ae.create("already-initialized")}return n.initialize({options:t})}function Rw(e,t,n,r){e=gn(e),yw(Sd,ts[e.app.options.appId],t,n,r).catch(s=>ne.error(s))}const $u="@firebase/analytics",qu="0.10.2";function Cw(){mn(new He(Vi,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Aw(r,s,n)},"PUBLIC")),mn(new He("analytics-internal",e,"PRIVATE")),ke($u,qu),ke($u,qu,"esm2017");function e(t){try{const n=t.getProvider(Vi).getImmediate();return{logEvent:(r,s,i)=>Rw(n,r,s,i)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}Cw();var Pw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},b,Nl=Nl||{},B=Pw||self;function co(e){var t=typeof e;return t=t!="object"?t:e?Array.isArray(e)?"array":t:"null",t=="array"||t=="object"&&typeof e.length=="number"}function Ds(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}function xw(e){return Object.prototype.hasOwnProperty.call(e,sa)&&e[sa]||(e[sa]=++Vw)}var sa="closure_uid_"+(1e9*Math.random()>>>0),Vw=0;function Dw(e,t,n){return e.call.apply(e.bind,arguments)}function kw(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),e.apply(t,s)}}return function(){return e.apply(t,arguments)}}function Wt(e,t,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wt=Dw:Wt=kw,Wt.apply(null,arguments)}function ei(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),e.apply(this,r)}}function Ot(e,t){function n(){}n.prototype=t.prototype,e.$=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[s].apply(r,o)}}function wn(){this.s=this.s,this.o=this.o}var Nw=0;wn.prototype.s=!1;wn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Nw!=0)&&xw(this)};wn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const bd=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function Ol(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function zu(e,t){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(co(r)){const s=e.length||0,i=r.length||0;e.length=s+i;for(let o=0;o<i;o++)e[s+o]=r[o]}else e.push(r)}}function Qt(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}Qt.prototype.h=function(){this.defaultPrevented=!0};var Ow=function(){if(!B.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const n=()=>{};B.addEventListener("test",n,t),B.removeEventListener("test",n,t)}catch{}return e}();function ds(e){return/^[\s\xa0]*$/.test(e)}function uo(){var e=B.navigator;return e&&(e=e.userAgent)?e:""}function Ce(e){return uo().indexOf(e)!=-1}function Ml(e){return Ml[" "](e),e}Ml[" "]=function(){};function Mw(e,t){var n=CI;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}var Lw=Ce("Opera"),Er=Ce("Trident")||Ce("MSIE"),Rd=Ce("Edge"),Na=Rd||Er,Cd=Ce("Gecko")&&!(uo().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge"))&&!(Ce("Trident")||Ce("MSIE"))&&!Ce("Edge"),Fw=uo().toLowerCase().indexOf("webkit")!=-1&&!Ce("Edge");function Pd(){var e=B.document;return e?e.documentMode:void 0}var Oa;t:{var ia="",oa=function(){var e=uo();if(Cd)return/rv:([^\);]+)(\)|;)/.exec(e);if(Rd)return/Edge\/([\d\.]+)/.exec(e);if(Er)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e);if(Fw)return/WebKit\/(\S+)/.exec(e);if(Lw)return/(?:Version)[ \/]?(\S+)/.exec(e)}();if(oa&&(ia=oa?oa[1]:""),Er){var aa=Pd();if(aa!=null&&aa>parseFloat(ia)){Oa=String(aa);break t}}Oa=ia}var Ma;if(B.document&&Er){var Hu=Pd();Ma=Hu||parseInt(Oa,10)||void 0}else Ma=void 0;var Uw=Ma;function ps(e,t){if(Qt.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Cd){t:{try{Ml(t.nodeName);var s=!0;break t}catch{}s=!1}s||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:Bw[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ps.$.h.call(this)}}Ot(ps,Qt);var Bw={2:"touch",3:"pen",4:"mouse"};ps.prototype.h=function(){ps.$.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ks="closure_listenable_"+(1e6*Math.random()|0),jw=0;function $w(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.la=s,this.key=++jw,this.fa=this.ia=!1}function ho(e){e.fa=!0,e.listener=null,e.proxy=null,e.src=null,e.la=null}function Ll(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function qw(e,t){for(const n in e)t.call(void 0,e[n],n,e)}function xd(e){const t={};for(const n in e)t[n]=e[n];return t}const Gu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vd(e,t){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)e[n]=r[n];for(let i=0;i<Gu.length;i++)n=Gu[i],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function fo(e){this.src=e,this.g={},this.h=0}fo.prototype.add=function(e,t,n,r,s){var i=e.toString();e=this.g[i],e||(e=this.g[i]=[],this.h++);var o=Fa(e,t,r,s);return-1<o?(t=e[o],n||(t.ia=!1)):(t=new $w(t,this.src,i,!!r,s),t.ia=n,e.push(t)),t};function La(e,t){var n=t.type;if(n in e.g){var r=e.g[n],s=bd(r,t),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ho(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function Fa(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.fa&&i.listener==t&&i.capture==!!n&&i.la==r)return s}return-1}var Fl="closure_lm_"+(1e6*Math.random()|0),la={};function Dd(e,t,n,r,s){if(r&&r.once)return Nd(e,t,n,r,s);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Dd(e,t[i],n,r,s);return null}return n=jl(n),e&&e[ks]?e.O(t,n,Ds(r)?!!r.capture:!!r,s):kd(e,t,n,!1,r,s)}function kd(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var o=Ds(s)?!!s.capture:!!s,a=Bl(e);if(a||(e[Fl]=a=new fo(e)),n=a.add(t,n,r,o,i),n.proxy)return n;if(r=zw(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)Ow||(s=o),s===void 0&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(Md(t.toString()),r);else if(e.addListener&&e.removeListener)e.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function zw(){function e(n){return t.call(e.src,e.listener,n)}const t=Hw;return e}function Nd(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Nd(e,t[i],n,r,s);return null}return n=jl(n),e&&e[ks]?e.P(t,n,Ds(r)?!!r.capture:!!r,s):kd(e,t,n,!0,r,s)}function Od(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)Od(e,t[i],n,r,s);else r=Ds(r)?!!r.capture:!!r,n=jl(n),e&&e[ks]?(e=e.i,t=String(t).toString(),t in e.g&&(i=e.g[t],n=Fa(i,n,r,s),-1<n&&(ho(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--)))):e&&(e=Bl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=Fa(t,n,r,s)),(n=-1<e?t[e]:null)&&Ul(n))}function Ul(e){if(typeof e!="number"&&e&&!e.fa){var t=e.src;if(t&&t[ks])La(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Md(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Bl(t))?(La(n,e),n.h==0&&(n.src=null,t[Fl]=null)):ho(e)}}}function Md(e){return e in la?la[e]:la[e]="on"+e}function Hw(e,t){if(e.fa)e=!0;else{t=new ps(t,this);var n=e.listener,r=e.la||e.src;e.ia&&Ul(e),e=n.call(r,t)}return e}function Bl(e){return e=e[Fl],e instanceof fo?e:null}var ca="__closure_events_fn_"+(1e9*Math.random()>>>0);function jl(e){return typeof e=="function"?e:(e[ca]||(e[ca]=function(t){return e.handleEvent(t)}),e[ca])}function Nt(){wn.call(this),this.i=new fo(this),this.S=this,this.J=null}Ot(Nt,wn);Nt.prototype[ks]=!0;Nt.prototype.removeEventListener=function(e,t,n,r){Od(this,e,t,n,r)};function Ut(e,t){var n,r=e.J;if(r)for(n=[];r;r=r.J)n.push(r);if(e=e.S,r=t.type||t,typeof t=="string")t=new Qt(t,e);else if(t instanceof Qt)t.target=t.target||e;else{var s=t;t=new Qt(r,e),Vd(t,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=ni(o,r,!0,t)&&s}if(o=t.g=e,s=ni(o,r,!0,t)&&s,s=ni(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)o=t.g=n[i],s=ni(o,r,!1,t)&&s}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var e=this.i,t;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ho(n[r]);delete e.g[t],e.h--}}this.J=null};Nt.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)};Nt.prototype.P=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};function ni(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&La(e.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var $l=B.JSON.stringify;class Gw{constructor(t,n){this.i=t,this.j=n,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Kw(){var e=ql;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ww{constructor(){this.h=this.g=null}add(t,n){const r=Ld.get();r.set(t,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ld=new Gw(()=>new Qw,e=>e.reset());class Qw{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Jw(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function Yw(e){B.setTimeout(()=>{throw e},0)}let gs,ms=!1,ql=new Ww,Fd=()=>{const e=B.Promise.resolve(void 0);gs=()=>{e.then(Xw)}};var Xw=()=>{for(var e;e=Kw();){try{e.h.call(e.g)}catch(n){Yw(n)}var t=Ld;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}ms=!1};function po(e,t){Nt.call(this),this.h=e||1,this.g=t||B,this.j=Wt(this.qb,this),this.l=Date.now()}Ot(po,Nt);b=po.prototype;b.ga=!1;b.T=null;b.qb=function(){if(this.ga){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-e):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ut(this,"tick"),this.ga&&(zl(this),this.start()))}};b.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function zl(e){e.ga=!1,e.T&&(e.g.clearTimeout(e.T),e.T=null)}b.N=function(){po.$.N.call(this),zl(this),delete this.g};function Hl(e,t,n){if(typeof e=="function")n&&(e=Wt(e,n));else if(e&&typeof e.handleEvent=="function")e=Wt(e.handleEvent,e);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:B.setTimeout(e,t||0)}function Ud(e){e.g=Hl(()=>{e.g=null,e.i&&(e.i=!1,Ud(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}class Zw extends wn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Ud(this)}N(){super.N(),this.g&&(B.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _s(e){wn.call(this),this.h=e,this.g={}}Ot(_s,wn);var Ku=[];function Bd(e,t,n,r){Array.isArray(n)||(n&&(Ku[0]=n.toString()),n=Ku);for(var s=0;s<n.length;s++){var i=Dd(t,n[s],r||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function jd(e){Ll(e.g,function(t,n){this.g.hasOwnProperty(n)&&Ul(t)},e),e.g={}}_s.prototype.N=function(){_s.$.N.call(this),jd(this)};_s.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function go(){this.g=!0}go.prototype.Ea=function(){this.g=!1};function tI(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+`
`+n+`
`+o})}function eI(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+`
`+n+`
`+i+" "+o})}function or(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+rI(e,n)+(r?" "+r:"")})}function nI(e,t){e.info(function(){return"TIMEOUT: "+t})}go.prototype.info=function(){};function rI(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n){for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return $l(n)}catch{return t}}var Qn={},Wu=null;function mo(){return Wu=Wu||new Nt}Qn.Ta="serverreachability";function $d(e){Qt.call(this,Qn.Ta,e)}Ot($d,Qt);function ys(e){const t=mo();Ut(t,new $d(t))}Qn.STAT_EVENT="statevent";function qd(e,t){Qt.call(this,Qn.STAT_EVENT,e),this.stat=t}Ot(qd,Qt);function Zt(e){const t=mo();Ut(t,new qd(t,e))}Qn.Ua="timingevent";function zd(e,t){Qt.call(this,Qn.Ua,e),this.size=t}Ot(zd,Qt);function Ns(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return B.setTimeout(function(){e()},t)}var _o={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Hd={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Gl(){}Gl.prototype.h=null;function Qu(e){return e.h||(e.h=e.i())}function Gd(){}var Os={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Kl(){Qt.call(this,"d")}Ot(Kl,Qt);function Wl(){Qt.call(this,"c")}Ot(Wl,Qt);var Ua;function yo(){}Ot(yo,Gl);yo.prototype.g=function(){return new XMLHttpRequest};yo.prototype.i=function(){return{}};Ua=new yo;function Ms(e,t,n,r){this.l=e,this.j=t,this.m=n,this.W=r||1,this.U=new _s(this),this.P=sI,e=Na?125:void 0,this.V=new po(e),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Kd}function Kd(){this.i=null,this.g="",this.h=!1}var sI=45e3,Wd={},Ba={};b=Ms.prototype;b.setTimeout=function(e){this.P=e};function ja(e,t,n){e.L=1,e.A=vo(Ge(t)),e.u=n,e.S=!0,Qd(e,null)}function Qd(e,t){e.G=Date.now(),Ls(e),e.B=Ge(e.A);var n=e.B,r=e.W;Array.isArray(r)||(r=[String(r)]),rp(n.i,"t",r),e.o=0,n=e.l.J,e.h=new Kd,e.g=Ap(e.l,n?t:null,!e.u),0<e.O&&(e.M=new Zw(Wt(e.Pa,e,e.g),e.O)),Bd(e.U,e.g,"readystatechange",e.nb),t=e.I?xd(e.I):{},e.u?(e.v||(e.v="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ha(e.B,e.v,e.u,t)):(e.v="GET",e.g.ha(e.B,e.v,null,t)),ys(),tI(e.j,e.v,e.B,e.m,e.W,e.u)}b.nb=function(e){e=e.target;const t=this.M;t&&xe(e)==3?t.l():this.Pa(e)};b.Pa=function(e){try{if(e==this.g)t:{const u=xe(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Na||this.g&&(this.h.h||this.g.ja()||Zu(this.g)))){this.J||u!=4||t==7||(t==8||0>=h?ys(3):ys(2)),Eo(this);var n=this.g.da();this.ca=n;e:if(Jd(this)){var r=Zu(this.g);e="";var s=r.length,i=xe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){kn(this),es(this);var o="";break e}this.h.i=new B.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:i&&t==s-1});r.length=0,this.h.g+=e,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,eI(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ds(a)){var c=a;break e}}c=null}if(n=c)or(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,n);else{this.i=!1,this.s=3,Zt(12),kn(this),es(this);break t}}this.S?(Yd(this,u,o),Na&&this.i&&u==3&&(Bd(this.U,this.V,"tick",this.mb),this.V.start())):(or(this.j,this.m,o,null),$a(this,o)),u==4&&kn(this),this.i&&!this.J&&(u==4?vp(this.l,this):(this.i=!1,Ls(this)))}else SI(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,Zt(12)):(this.s=0,Zt(13)),kn(this),es(this)}}}catch{}finally{}};function Jd(e){return e.g?e.v=="GET"&&e.L!=2&&e.l.Ha:!1}function Yd(e,t,n){let r=!0,s;for(;!e.J&&e.o<n.length;)if(s=iI(e,n),s==Ba){t==4&&(e.s=4,Zt(14),r=!1),or(e.j,e.m,null,"[Incomplete Response]");break}else if(s==Wd){e.s=4,Zt(15),or(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}else or(e.j,e.m,s,null),$a(e,s);Jd(e)&&e.o!=0&&(e.h.g=e.h.g.slice(e.o),e.o=0),t!=4||n.length!=0||e.h.h||(e.s=1,Zt(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.ba&&(e.ba=!0,t=e.l,t.g==e&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),tc(t),t.M=!0,Zt(11))):(or(e.j,e.m,n,"[Invalid Chunked Response]"),kn(e),es(e))}b.mb=function(){if(this.g){var e=xe(this.g),t=this.g.ja();this.o<t.length&&(Eo(this),Yd(this,e,t),this.i&&e!=4&&Ls(this))}};function iI(e,t){var n=e.o,r=t.indexOf(`
`,n);return r==-1?Ba:(n=Number(t.substring(n,r)),isNaN(n)?Wd:(r+=1,r+n>t.length?Ba:(t=t.slice(r,r+n),e.o=r+n,t)))}b.cancel=function(){this.J=!0,kn(this)};function Ls(e){e.Y=Date.now()+e.P,Xd(e,e.P)}function Xd(e,t){if(e.C!=null)throw Error("WatchDog timer not null");e.C=Ns(Wt(e.lb,e),t)}function Eo(e){e.C&&(B.clearTimeout(e.C),e.C=null)}b.lb=function(){this.C=null;const e=Date.now();0<=e-this.Y?(nI(this.j,this.B),this.L!=2&&(ys(),Zt(17)),kn(this),this.s=2,es(this)):Xd(this,this.Y-e)};function es(e){e.l.H==0||e.J||vp(e.l,e)}function kn(e){Eo(e);var t=e.M;t&&typeof t.sa=="function"&&t.sa(),e.M=null,zl(e.V),jd(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.sa())}function $a(e,t){try{var n=e.l;if(n.H!=0&&(n.g==e||qa(n.i,e))){if(!e.K&&qa(n.i,e)&&n.H==3){try{var r=n.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){t:if(!n.u){if(n.g)if(n.g.G+3e3<e.G)Ni(n),Ao(n);else break t;Zl(n),Zt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Ns(Wt(n.ib,n),6e3));if(1>=op(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Nn(n,11)}else if((e.K||n.g==e)&&Ni(n),!ds(t))for(s=n.Ja.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=c[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=e.g;if(g){const D=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(D){var i=r.i;i.g||D.indexOf("spdy")==-1&&D.indexOf("quic")==-1&&D.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ql(i,i.h),i.h=null))}if(r.F){const C=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;C&&(r.Da=C,pt(r.I,r.F,C))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-e.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=e;if(r.wa=Tp(r,r.J?r.pa:null,r.Y),o.K){ap(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(Eo(a),Ls(a)),r.g=o}else yp(r);0<n.j.length&&So(n)}else c[0]!="stop"&&c[0]!="close"||Nn(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?Nn(n,7):Xl(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}ys(4)}catch{}}function oI(e){if(e.Z&&typeof e.Z=="function")return e.Z();if(typeof Map<"u"&&e instanceof Map||typeof Set<"u"&&e instanceof Set)return Array.from(e.values());if(typeof e=="string")return e.split("");if(co(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}t=[],n=0;for(r in e)t[n++]=e[r];return t}function aI(e){if(e.ta&&typeof e.ta=="function")return e.ta();if(!e.Z||typeof e.Z!="function"){if(typeof Map<"u"&&e instanceof Map)return Array.from(e.keys());if(!(typeof Set<"u"&&e instanceof Set)){if(co(e)||typeof e=="string"){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}function Zd(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(co(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=aI(e),r=oI(e),s=r.length,i=0;i<s;i++)t.call(void 0,r[i],n&&n[i],e)}var tp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lI(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Un(e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof Un){this.h=e.h,Di(this,e.j),this.s=e.s,this.g=e.g,ki(this,e.m),this.l=e.l;var t=e.i,n=new Es;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Ju(this,n),this.o=e.o}else e&&(t=String(e).match(tp))?(this.h=!1,Di(this,t[1]||"",!0),this.s=zr(t[2]||""),this.g=zr(t[3]||"",!0),ki(this,t[4]),this.l=zr(t[5]||"",!0),Ju(this,t[6]||"",!0),this.o=zr(t[7]||"")):(this.h=!1,this.i=new Es(null,this.h))}Un.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Hr(t,Yu,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(Hr(t,Yu,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(Hr(n,n.charAt(0)=="/"?hI:uI,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Hr(n,dI)),e.join("")};function Ge(e){return new Un(e)}function Di(e,t,n){e.j=n?zr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function ki(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Ju(e,t,n){t instanceof Es?(e.i=t,pI(e.i,e.h)):(n||(t=Hr(t,fI)),e.i=new Es(t,e.h))}function pt(e,t,n){e.i.set(t,n)}function vo(e){return pt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function zr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Hr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,cI),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function cI(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var Yu=/[#\/\?@]/g,uI=/[#\?:]/g,hI=/[#\?]/g,fI=/[#\?@]/g,dI=/#/g;function Es(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function In(e){e.g||(e.g=new Map,e.h=0,e.i&&lI(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}b=Es.prototype;b.add=function(e,t){In(this),this.i=null,e=Pr(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this};function ep(e,t){In(e),t=Pr(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function np(e,t){return In(e),t=Pr(e,t),e.g.has(t)}b.forEach=function(e,t){In(this),this.g.forEach(function(n,r){n.forEach(function(s){e.call(t,s,r,this)},this)},this)};b.ta=function(){In(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let i=0;i<s.length;i++)n.push(t[r])}return n};b.Z=function(e){In(this);let t=[];if(typeof e=="string")np(this,e)&&(t=t.concat(this.g.get(Pr(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t};b.set=function(e,t){return In(this),this.i=null,e=Pr(this,e),np(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this};b.get=function(e,t){return e?(e=this.Z(e),0<e.length?String(e[0]):t):t};function rp(e,t,n){ep(e,t),0<n.length&&(e.i=null,e.g.set(Pr(e,t),Ol(n)),e.h+=n.length)}b.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")};function Pr(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function pI(e,t){t&&!e.j&&(In(e),e.i=null,e.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(ep(this,r),rp(this,s,n))},e)),e.j=t}var gI=class{constructor(e,t){this.g=e,this.map=t}};function sp(e){this.l=e||mI,B.PerformanceNavigationTiming?(e=B.performance.getEntriesByType("navigation"),e=0<e.length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(B.g&&B.g.Ka&&B.g.Ka()&&B.g.Ka().dc),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var mI=10;function ip(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function op(e){return e.h?1:e.g?e.g.size:0}function qa(e,t){return e.h?e.h==t:e.g?e.g.has(t):!1}function Ql(e,t){e.g?e.g.add(t):e.h=t}function ap(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}sp.prototype.cancel=function(){if(this.i=lp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function lp(e){if(e.h!=null)return e.i.concat(e.h.F);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.F);return t}return Ol(e.i)}var _I=class{stringify(e){return B.JSON.stringify(e,void 0)}parse(e){return B.JSON.parse(e,void 0)}};function yI(){this.g=new _I}function EI(e,t,n){const r=n||"";try{Zd(e,function(s,i){let o=s;Ds(s)&&(o=$l(s)),t.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function vI(e,t){const n=new go;if(B.Image){const r=new Image;r.onload=ei(ri,n,r,"TestLoadImage: loaded",!0,t),r.onerror=ei(ri,n,r,"TestLoadImage: error",!1,t),r.onabort=ei(ri,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=ei(ri,n,r,"TestLoadImage: timeout",!1,t),B.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}function ri(e,t,n,r,s){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,s(r)}catch{}}function wo(e){this.l=e.ec||null,this.j=e.ob||!1}Ot(wo,Gl);wo.prototype.g=function(){return new Io(this.l,this.j)};wo.prototype.i=function(e){return function(){return e}}({});function Io(e,t){Nt.call(this),this.F=e,this.u=t,this.m=void 0,this.readyState=Jl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ot(Io,Nt);var Jl=0;b=Io.prototype;b.open=function(e,t){if(this.readyState!=Jl)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,vs(this)};b.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.F||B).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};b.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=Jl};b.$a=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,vs(this)),this.g&&(this.readyState=3,vs(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof B.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;cp(this)}else e.text().then(this.Za.bind(this),this.ka.bind(this))};function cp(e){e.j.read().then(e.Xa.bind(e)).catch(e.ka.bind(e))}b.Xa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Fs(this):vs(this),this.readyState==3&&cp(this)}};b.Za=function(e){this.g&&(this.response=this.responseText=e,Fs(this))};b.Ya=function(e){this.g&&(this.response=e,Fs(this))};b.ka=function(){this.g&&Fs(this)};function Fs(e){e.readyState=4,e.l=null,e.j=null,e.A=null,vs(e)}b.setRequestHeader=function(e,t){this.v.append(e,t)};b.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""};b.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)};function vs(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(Io.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var wI=B.JSON.parse;function wt(e){Nt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=up,this.L=this.M=!1}Ot(wt,Nt);var up="",II=/^https?$/i,TI=["POST","PUT"];b=wt.prototype;b.Oa=function(e){this.M=e};b.ha=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+e);t=t?t.toUpperCase():"GET",this.I=e,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ua.g(),this.C=this.u?Qu(this.u):Qu(Ua),this.g.onreadystatechange=Wt(this.La,this);try{this.G=!0,this.g.open(t,String(e),!0),this.G=!1}catch(i){Xu(this,i);return}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=B.FormData&&e instanceof B.FormData,!(0<=bd(TI,t))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{dp(this),0<this.B&&((this.L=AI(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Wt(this.ua,this)):this.A=Hl(this.ua,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){Xu(this,i)}};function AI(e){return Er&&typeof e.timeout=="number"&&e.ontimeout!==void 0}b.ua=function(){typeof Nl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ut(this,"timeout"),this.abort(8))};function Xu(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,hp(e),To(e)}function hp(e){e.F||(e.F=!0,Ut(e,"complete"),Ut(e,"error"))}b.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ut(this,"complete"),Ut(this,"abort"),To(this))};b.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),To(this,!0)),wt.$.N.call(this)};b.La=function(){this.s||(this.G||this.v||this.l?fp(this):this.kb())};b.kb=function(){fp(this)};function fp(e){if(e.h&&typeof Nl<"u"&&(!e.C[1]||xe(e)!=4||e.da()!=2)){if(e.v&&xe(e)==4)Hl(e.La,0,e);else if(Ut(e,"readystatechange"),xe(e)==4){e.h=!1;try{const o=e.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var r;if(r=o===0){var s=String(e.I).match(tp)[1]||null;!s&&B.self&&B.self.location&&(s=B.self.location.protocol.slice(0,-1)),r=!II.test(s?s.toLowerCase():"")}n=r}if(n)Ut(e,"complete"),Ut(e,"success");else{e.m=6;try{var i=2<xe(e)?e.g.statusText:""}catch{i=""}e.j=i+" ["+e.da()+"]",hp(e)}}finally{To(e)}}}}function To(e,t){if(e.g){dp(e);const n=e.g,r=e.C[0]?()=>{}:null;e.g=null,e.C=null,t||Ut(e,"ready");try{n.onreadystatechange=r}catch{}}}function dp(e){e.g&&e.L&&(e.g.ontimeout=null),e.A&&(B.clearTimeout(e.A),e.A=null)}b.isActive=function(){return!!this.g};function xe(e){return e.g?e.g.readyState:0}b.da=function(){try{return 2<xe(this)?this.g.status:-1}catch{return-1}};b.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};b.Wa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),wI(t)}};function Zu(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.K){case up:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function SI(e){const t={};e=(e.g&&2<=xe(e)&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<e.length;r++){if(ds(e[r]))continue;var n=Jw(e[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}qw(t,function(r){return r.join(", ")})}b.Ia=function(){return this.m};b.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function pp(e){let t="";return Ll(e,function(n,r){t+=r,t+=":",t+=n,t+=`\r
`}),t}function Yl(e,t,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=pp(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):pt(e,t,n))}function Br(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function gp(e){this.Ga=0,this.j=[],this.l=new go,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Br("failFast",!1,e),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Br("baseRetryDelayMs",5e3,e),this.hb=Br("retryDelaySeedMs",1e4,e),this.eb=Br("forwardChannelMaxRetries",2,e),this.xa=Br("forwardChannelRequestTimeoutMs",2e4,e),this.va=e&&e.xmlHttpFactory||void 0,this.Ha=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.i=new sp(e&&e.concurrentRequestLimit),this.Ja=new yI,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=e&&e.bc||!1,e&&e.Ea&&this.l.Ea(),e&&e.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&e&&e.detectBufferingProxy||!1,this.qa=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.qa=e.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}b=gp.prototype;b.ra=8;b.H=1;function Xl(e){if(mp(e),e.H==3){var t=e.W++,n=Ge(e.I);if(pt(n,"SID",e.K),pt(n,"RID",t),pt(n,"TYPE","terminate"),Us(e,n),t=new Ms(e,e.l,t),t.L=2,t.A=vo(Ge(n)),n=!1,B.navigator&&B.navigator.sendBeacon)try{n=B.navigator.sendBeacon(t.A.toString(),"")}catch{}!n&&B.Image&&(new Image().src=t.A,n=!0),n||(t.g=Ap(t.l,null),t.g.ha(t.A)),t.G=Date.now(),Ls(t)}Ip(e)}function Ao(e){e.g&&(tc(e),e.g.cancel(),e.g=null)}function mp(e){Ao(e),e.u&&(B.clearTimeout(e.u),e.u=null),Ni(e),e.i.cancel(),e.m&&(typeof e.m=="number"&&B.clearTimeout(e.m),e.m=null)}function So(e){if(!ip(e.i)&&!e.m){e.m=!0;var t=e.Na;gs||Fd(),ms||(gs(),ms=!0),ql.add(t,e),e.C=0}}function bI(e,t){return op(e.i)>=e.i.j-(e.m?1:0)?!1:e.m?(e.j=t.F.concat(e.j),!0):e.H==1||e.H==2||e.C>=(e.cb?0:e.eb)?!1:(e.m=Ns(Wt(e.Na,e,t),wp(e,e.C)),e.C++,!0)}b.Na=function(e){if(this.m)if(this.m=null,this.H==1){if(!e){this.W=Math.floor(1e5*Math.random()),e=this.W++;const s=new Ms(this,this.l,e);let i=this.s;if(this.U&&(i?(i=xd(i),Vd(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)t:{for(var t=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=n;break t}if(t===4096||n===this.j.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=_p(this,s,t),n=Ge(this.I),pt(n,"RID",e),pt(n,"CVER",22),this.F&&pt(n,"X-HTTP-Session-Id",this.F),Us(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(pp(i)))+"&"+t:this.o&&Yl(n,this.o,i)),Ql(this.i,s),this.bb&&pt(n,"TYPE","init"),this.P?(pt(n,"$req",t),pt(n,"SID","null"),s.aa=!0,ja(s,n,null)):ja(s,n,t),this.H=2}}else this.H==3&&(e?th(this,e):this.j.length==0||ip(this.i)||th(this))};function th(e,t){var n;t?n=t.m:n=e.W++;const r=Ge(e.I);pt(r,"SID",e.K),pt(r,"RID",n),pt(r,"AID",e.V),Us(e,r),e.o&&e.s&&Yl(r,e.o,e.s),n=new Ms(e,e.l,n,e.C+1),e.o===null&&(n.I=e.s),t&&(e.j=t.F.concat(e.j)),t=_p(e,n,1e3),n.setTimeout(Math.round(.5*e.xa)+Math.round(.5*e.xa*Math.random())),Ql(e.i,n),ja(n,r,t)}function Us(e,t){e.na&&Ll(e.na,function(n,r){pt(t,r,n)}),e.h&&Zd({},function(n,r){pt(t,r,n)})}function _p(e,t,n){n=Math.min(e.j.length,n);var r=e.h?Wt(e.h.Va,e.h,e):null;t:{var s=e.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{EI(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break t}}}return e=e.j.splice(0,n),t.F=e,r}function yp(e){if(!e.g&&!e.u){e.ba=1;var t=e.Ma;gs||Fd(),ms||(gs(),ms=!0),ql.add(t,e),e.A=0}}function Zl(e){return e.g||e.u||3<=e.A?!1:(e.ba++,e.u=Ns(Wt(e.Ma,e),wp(e,e.A)),e.A++,!0)}b.Ma=function(){if(this.u=null,Ep(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var e=2*this.S;this.l.info("BP detection timer enabled: "+e),this.B=Ns(Wt(this.jb,this),e)}};b.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Zt(10),Ao(this),Ep(this))};function tc(e){e.B!=null&&(B.clearTimeout(e.B),e.B=null)}function Ep(e){e.g=new Ms(e,e.l,"rpc",e.ba),e.o===null&&(e.g.I=e.s),e.g.O=0;var t=Ge(e.wa);pt(t,"RID","rpc"),pt(t,"SID",e.K),pt(t,"AID",e.V),pt(t,"CI",e.G?"0":"1"),!e.G&&e.qa&&pt(t,"TO",e.qa),pt(t,"TYPE","xmlhttp"),Us(e,t),e.o&&e.s&&Yl(t,e.o,e.s),e.L&&e.g.setTimeout(e.L);var n=e.g;e=e.pa,n.L=1,n.A=vo(Ge(t)),n.u=null,n.S=!0,Qd(n,e)}b.ib=function(){this.v!=null&&(this.v=null,Ao(this),Zl(this),Zt(19))};function Ni(e){e.v!=null&&(B.clearTimeout(e.v),e.v=null)}function vp(e,t){var n=null;if(e.g==t){Ni(e),tc(e),e.g=null;var r=2}else if(qa(e.i,t))n=t.F,ap(e.i,t),r=1;else return;if(e.H!=0){if(t.i)if(r==1){n=t.u?t.u.length:0,t=Date.now()-t.G;var s=e.C;r=mo(),Ut(r,new zd(r,n)),So(e)}else yp(e);else if(s=t.s,s==3||s==0&&0<t.ca||!(r==1&&bI(e,t)||r==2&&Zl(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),s){case 1:Nn(e,5);break;case 4:Nn(e,10);break;case 3:Nn(e,6);break;default:Nn(e,2)}}}function wp(e,t){let n=e.ab+Math.floor(Math.random()*e.hb);return e.isActive()||(n*=2),n*t}function Nn(e,t){if(e.l.info("Error code "+t),t==2){var n=null;e.h&&(n=null);var r=Wt(e.pb,e);n||(n=new Un("//www.google.com/images/cleardot.gif"),B.location&&B.location.protocol=="http"||Di(n,"https"),vo(n)),vI(n.toString(),r)}else Zt(2);e.H=0,e.h&&e.h.za(t),Ip(e),mp(e)}b.pb=function(e){e?(this.l.info("Successfully pinged google.com"),Zt(2)):(this.l.info("Failed to ping google.com"),Zt(1))};function Ip(e){if(e.H=0,e.ma=[],e.h){const t=lp(e.i);(t.length!=0||e.j.length!=0)&&(zu(e.ma,t),zu(e.ma,e.j),e.i.i.length=0,Ol(e.j),e.j.length=0),e.h.ya()}}function Tp(e,t,n){var r=n instanceof Un?Ge(n):new Un(n);if(r.g!="")t&&(r.g=t+"."+r.g),ki(r,r.m);else{var s=B.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var i=new Un(null);r&&Di(i,r),t&&(i.g=t),s&&ki(i,s),n&&(i.l=n),r=i}return n=e.F,t=e.Da,n&&t&&pt(r,n,t),pt(r,"VER",e.ra),Us(e,r),r}function Ap(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e.Ha&&!e.va?new wt(new wo({ob:n})):new wt(e.va),t.Oa(e.J),t}b.isActive=function(){return!!this.h&&this.h.isActive(this)};function Sp(){}b=Sp.prototype;b.Ba=function(){};b.Aa=function(){};b.za=function(){};b.ya=function(){};b.isActive=function(){return!0};b.Va=function(){};function Oi(){if(Er&&!(10<=Number(Uw)))throw Error("Environmental error: no available transport.")}Oi.prototype.g=function(e,t){return new le(e,t)};function le(e,t){Nt.call(this),this.g=new gp(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(e?e["X-WebChannel-Client-Profile"]=t.Ca:e={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=e,(e=t&&t.cc)&&!ds(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ds(t)&&(this.g.F=t,e=this.h,e!==null&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xr(this)}Ot(le,Nt);le.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var e=this.g,t=this.l,n=this.h||void 0;Zt(0),e.Y=t,e.na=n||{},e.G=e.aa,e.I=Tp(e,null,e.Y),So(e)};le.prototype.close=function(){Xl(this.g)};le.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=$l(e),e=n);t.j.push(new gI(t.fb++,e)),t.H==3&&So(t)};le.prototype.N=function(){this.g.h=null,delete this.j,Xl(this.g),delete this.g,le.$.N.call(this)};function bp(e){Kl.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}Ot(bp,Kl);function Rp(){Wl.call(this),this.status=1}Ot(Rp,Wl);function xr(e){this.g=e}Ot(xr,Sp);xr.prototype.Ba=function(){Ut(this.g,"a")};xr.prototype.Aa=function(e){Ut(this.g,new bp(e))};xr.prototype.za=function(e){Ut(this.g,new Rp)};xr.prototype.ya=function(){Ut(this.g,"b")};function RI(){this.blockSize=-1}function ve(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ot(ve,RI);ve.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function ua(e,t,n){n||(n=0);var r=Array(16);if(typeof t=="string")for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[1]+3905402710&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[4]+4118548399&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[5]+1200080426&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[8]+1770035416&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[9]+2336552879&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(i^n&(s^i))+r[12]+1804603682&4294967295,t=n+(o<<7&4294967295|o>>>25),o=i+(s^t&(n^s))+r[13]+4254626195&4294967295,i=t+(o<<12&4294967295|o>>>20),o=s+(n^i&(t^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(t^s&(i^t))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=t+(s^i&(n^s))+r[1]+4129170786&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[6]+3225465664&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[5]+3593408605&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[10]+38016083&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[9]+568446438&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[14]+3275163606&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(s^i&(n^s))+r[13]+2850285829&4294967295,t=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(t^n))+r[2]+4243563512&4294967295,i=t+(o<<9&4294967295|o>>>23),o=s+(t^n&(i^t))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^t&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=t+(n^s^i)+r[5]+4294588738&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[8]+2272392833&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[1]+2763975236&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[4]+1272893353&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[13]+681279174&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[0]+3936430074&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(n^s^i)+r[9]+3654602809&4294967295,t=n+(o<<4&4294967295|o>>>28),o=i+(t^n^s)+r[12]+3873151461&4294967295,i=t+(o<<11&4294967295|o>>>21),o=s+(i^t^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^t)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=t+(s^(n|~i))+r[0]+4096336452&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[7]+1126891415&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[12]+1700485571&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[3]+2399980690&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[8]+1873313359&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[15]+4264355552&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=t+(s^(n|~i))+r[4]+4149444226&4294967295,t=n+(o<<6&4294967295|o>>>26),o=i+(n^(t|~s))+r[11]+3174756917&4294967295,i=t+(o<<10&4294967295|o>>>22),o=s+(t^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}ve.prototype.j=function(e,t){t===void 0&&(t=e.length);for(var n=t-this.blockSize,r=this.m,s=this.h,i=0;i<t;){if(s==0)for(;i<=n;)ua(this,e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[s++]=e.charCodeAt(i++),s==this.blockSize){ua(this,r),s=0;break}}else for(;i<t;)if(r[s++]=e[i++],s==this.blockSize){ua(this,r),s=0;break}}this.h=s,this.i+=t};ve.prototype.l=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.i;for(t=e.length-8;t<e.length;++t)e[t]=n&255,n/=256;for(this.j(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};function ot(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=e[s]|0;r&&i==t||(n[s]=i,r=!1)}this.g=n}var CI={};function ec(e){return-128<=e&&128>e?Mw(e,function(t){return new ot([t|0],0>t?-1:0)}):new ot([e|0],0>e?-1:0)}function Ve(e){if(isNaN(e)||!isFinite(e))return hr;if(0>e)return Lt(Ve(-e));for(var t=[],n=1,r=0;e>=n;r++)t[r]=e/n|0,n*=za;return new ot(t,0)}function Cp(e,t){if(e.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(e.charAt(0)=="-")return Lt(Cp(e.substring(1),t));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Ve(Math.pow(t,8)),r=hr,s=0;s<e.length;s+=8){var i=Math.min(8,e.length-s),o=parseInt(e.substring(s,s+i),t);8>i?(i=Ve(Math.pow(t,i)),r=r.R(i).add(Ve(o))):(r=r.R(n),r=r.add(Ve(o)))}return r}var za=4294967296,hr=ec(0),Ha=ec(1),eh=ec(16777216);b=ot.prototype;b.ea=function(){if(ce(this))return-Lt(this).ea();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.D(n);e+=(0<=r?r:za+r)*t,t*=za}return e};b.toString=function(e){if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(Be(this))return"0";if(ce(this))return"-"+Lt(this).toString(e);for(var t=Ve(Math.pow(e,6)),n=this,r="";;){var s=Li(n,t).g;n=Mi(n,s.R(t));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(e);if(n=s,Be(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};b.D=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h};function Be(e){if(e.h!=0)return!1;for(var t=0;t<e.g.length;t++)if(e.g[t]!=0)return!1;return!0}function ce(e){return e.h==-1}b.X=function(e){return e=Mi(this,e),ce(e)?-1:Be(e)?0:1};function Lt(e){for(var t=e.g.length,n=[],r=0;r<t;r++)n[r]=~e.g[r];return new ot(n,~e.h).add(Ha)}b.abs=function(){return ce(this)?Lt(this):this};b.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0,s=0;s<=t;s++){var i=r+(this.D(s)&65535)+(e.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(e.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ot(n,n[n.length-1]&-2147483648?-1:0)};function Mi(e,t){return e.add(Lt(t))}b.R=function(e){if(Be(this)||Be(e))return hr;if(ce(this))return ce(e)?Lt(this).R(Lt(e)):Lt(Lt(this).R(e));if(ce(e))return Lt(this.R(Lt(e)));if(0>this.X(eh)&&0>e.X(eh))return Ve(this.ea()*e.ea());for(var t=this.g.length+e.g.length,n=[],r=0;r<2*t;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<e.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=e.D(s)>>>16,l=e.D(s)&65535;n[2*r+2*s]+=o*l,si(n,2*r+2*s),n[2*r+2*s+1]+=i*l,si(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,si(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,si(n,2*r+2*s+2)}for(r=0;r<t;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=t;r<2*t;r++)n[r]=0;return new ot(n,0)};function si(e,t){for(;(e[t]&65535)!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function jr(e,t){this.g=e,this.h=t}function Li(e,t){if(Be(t))throw Error("division by zero");if(Be(e))return new jr(hr,hr);if(ce(e))return t=Li(Lt(e),t),new jr(Lt(t.g),Lt(t.h));if(ce(t))return t=Li(e,Lt(t)),new jr(Lt(t.g),t.h);if(30<e.g.length){if(ce(e)||ce(t))throw Error("slowDivide_ only works with positive integers.");for(var n=Ha,r=t;0>=r.X(e);)n=nh(n),r=nh(r);var s=nr(n,1),i=nr(r,1);for(r=nr(r,2),n=nr(n,2);!Be(r);){var o=i.add(r);0>=o.X(e)&&(s=s.add(n),i=o),r=nr(r,1),n=nr(n,1)}return t=Mi(e,s.R(t)),new jr(s,t)}for(s=hr;0<=e.X(t);){for(n=Math.max(1,Math.floor(e.ea()/t.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Ve(n),o=i.R(t);ce(o)||0<o.X(e);)n-=r,i=Ve(n),o=i.R(t);Be(i)&&(i=Ha),s=s.add(i),e=Mi(e,o)}return new jr(s,e)}b.gb=function(e){return Li(this,e).h};b.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)&e.D(r);return new ot(n,this.h&e.h)};b.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)|e.D(r);return new ot(n,this.h|e.h)};b.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],r=0;r<t;r++)n[r]=this.D(r)^e.D(r);return new ot(n,this.h^e.h)};function nh(e){for(var t=e.g.length+1,n=[],r=0;r<t;r++)n[r]=e.D(r)<<1|e.D(r-1)>>>31;return new ot(n,e.h)}function nr(e,t){var n=t>>5;t%=32;for(var r=e.g.length-n,s=[],i=0;i<r;i++)s[i]=0<t?e.D(i+n)>>>t|e.D(i+n+1)<<32-t:e.D(i+n);return new ot(s,e.h)}Oi.prototype.createWebChannel=Oi.prototype.g;le.prototype.send=le.prototype.u;le.prototype.open=le.prototype.m;le.prototype.close=le.prototype.close;_o.NO_ERROR=0;_o.TIMEOUT=8;_o.HTTP_ERROR=6;Hd.COMPLETE="complete";Gd.EventType=Os;Os.OPEN="a";Os.CLOSE="b";Os.ERROR="c";Os.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;wt.prototype.listenOnce=wt.prototype.P;wt.prototype.getLastError=wt.prototype.Sa;wt.prototype.getLastErrorCode=wt.prototype.Ia;wt.prototype.getStatus=wt.prototype.da;wt.prototype.getResponseJson=wt.prototype.Wa;wt.prototype.getResponseText=wt.prototype.ja;wt.prototype.send=wt.prototype.ha;wt.prototype.setWithCredentials=wt.prototype.Oa;ve.prototype.digest=ve.prototype.l;ve.prototype.reset=ve.prototype.reset;ve.prototype.update=ve.prototype.j;ot.prototype.add=ot.prototype.add;ot.prototype.multiply=ot.prototype.R;ot.prototype.modulo=ot.prototype.gb;ot.prototype.compare=ot.prototype.X;ot.prototype.toNumber=ot.prototype.ea;ot.prototype.toString=ot.prototype.toString;ot.prototype.getBits=ot.prototype.D;ot.fromNumber=Ve;ot.fromString=Cp;var PI=function(){return new Oi},xI=function(){return mo()},ha=_o,VI=Hd,DI=Qn,rh={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ii=Gd,kI=wt,NI=ve,fr=ot;const sh="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vr="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn=new Rl("@firebase/firestore");function $r(){return zn.logLevel}function S(e,...t){if(zn.logLevel<=tt.DEBUG){const n=t.map(nc);zn.debug(`Firestore (${Vr}): ${e}`,...n)}}function Me(e,...t){if(zn.logLevel<=tt.ERROR){const n=t.map(nc);zn.error(`Firestore (${Vr}): ${e}`,...n)}}function vr(e,...t){if(zn.logLevel<=tt.WARN){const n=t.map(nc);zn.warn(`Firestore (${Vr}): ${e}`,...n)}}function nc(e){if(typeof e=="string")return e;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(e)}catch{return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e="Unexpected state"){const t=`FIRESTORE (${Vr}) INTERNAL ASSERTION FAILED: `+e;throw Me(t),new Error(t)}function ft(e,t){e||U()}function z(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends vn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class OI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class MI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class LI{constructor(t){this.t=t,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new $e;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new $e,t.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new $e)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==t?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ft(typeof r.accessToken=="string"),new Pp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ft(t===null||typeof t=="string"),new zt(t)}}class FI{constructor(t,n,r){this.l=t,this.h=n,this.P=r,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class UI{constructor(t,n,r){this.l=t,this.h=n,this.P=r}getToken(){return Promise.resolve(new FI(this.l,this.h,this.P))}start(t,n){t.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class BI{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class jI{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,n){const r=i=>{i.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>r(i))};const s=i=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(ft(typeof n.token=="string"),this.R=n.token,new BI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $I(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=$I(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=t.charAt(s[i]%t.length))}return r}}function rt(e,t){return e<t?-1:e>t?1:0}function wr(e,t,n){return e.length===t.length&&e.every((r,s)=>n(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new P(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Ct.fromMillis(Date.now())}static fromDate(t){return Ct.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*n));return new Ct(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?rt(this.nanoseconds,t.nanoseconds):rt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.timestamp=t}static fromTimestamp(t){return new $(t)}static min(){return new $(new Ct(0,0))}static max(){return new $(new Ct(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(t,n,r){n===void 0?n=0:n>t.length&&U(),r===void 0?r=t.length-n:r>t.length-n&&U(),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return ws.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof ws?t.forEach(r=>{n.push(r)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let s=0;s<r;s++){const i=t.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class gt extends ws{construct(t,n,r){return new gt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new P(_.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const qI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ft extends ws{construct(t,n,r){return new Ft(t,n,r)}static isValidIdentifier(t){return qI.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ft.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ft(["__name__"])}static fromServerFormat(t){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new P(_.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<t.length;){const a=t[s];if(a==="\\"){if(s+1===t.length)throw new P(_.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new P(_.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ft(n)}static emptyPath(){return new Ft([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t){this.path=t}static fromPath(t){return new M(gt.fromString(t))}static fromName(t){return new M(gt.fromString(t).popFirst(5))}static empty(){return new M(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return gt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new M(new gt(t.slice()))}}function zI(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=$.fromTimestamp(r===1e9?new Ct(n+1,0):new Ct(n,r));return new _n(s,M.empty(),t)}function HI(e){return new _n(e.readTime,e.key,-1)}class _n{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new _n($.min(),M.empty(),-1)}static max(){return new _n($.max(),M.empty(),-1)}}function GI(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=M.comparator(e.documentKey,t.documentKey),n!==0?n:rt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class WI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bs(e){if(e.code!==_.FAILED_PRECONDITION||e.message!==KI)throw e;S("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof y?n:y.resolve(n)}catch(n){return y.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):y.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):y.reject(n)}static resolve(t){return new y((n,r)=>{n(t)})}static reject(t){return new y((n,r)=>{r(t)})}static waitFor(t){return new y((n,r)=>{let s=0,i=0,o=!1;t.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(t){let n=y.resolve(!1);for(const r of t)n=n.next(s=>s?y.resolve(s):r());return n}static forEach(t,n){const r=[];return t.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(t,n){return new y((r,s)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(t[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(t,n){return new y((r,s)=>{const i=()=>{t()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,n){this.action=t,this.transaction=n,this.aborted=!1,this.V=new $e,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ns(t,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=sc(r.target.error);this.V.reject(new ns(t,s))}}static open(t,n,r,s){try{return new rc(n,t.transaction(s,r))}catch(i){throw new ns(n,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(S("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const n=this.transaction.objectStore(t);return new JI(n)}}class On{constructor(t,n,r){this.name=t,this.version=n,this.p=r,On.S(Ri())===12.2&&Me("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return S("SimpleDb","Removing database:",t),xn(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!bl())return!1;if(On.C())return!0;const t=Ri(),n=On.S(t),r=0<n&&n<10,s=On.v(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||r||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.F)==="YES"}static M(t,n){return t.store(n)}static S(t){const n=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(t){const n=t.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(t){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ns(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new P(_.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(_.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ns(t,o))},s.onupgradeneeded=i=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(t){this.L=t,this.db&&(this.db.onversionchange=n=>t(n))}async runTransaction(t,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(t);const a=rc.open(this.db,t,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),y.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class QI{constructor(t){this.k=t,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(t){this.k=t}done(){this.q=!0}U(t){this.K=t}delete(){return xn(this.k.delete())}}class ns extends P{constructor(t,n){super(_.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function js(e){return e.name==="IndexedDbTransactionError"}class JI{constructor(t){this.store=t}put(t,n){let r;return n!==void 0?(S("SimpleDb","PUT",this.store.name,t,n),r=this.store.put(n,t)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",t),r=this.store.put(t)),xn(r)}add(t){return S("SimpleDb","ADD",this.store.name,t,t),xn(this.store.add(t))}get(t){return xn(this.store.get(t)).next(n=>(n===void 0&&(n=null),S("SimpleDb","GET",this.store.name,t,n),n))}delete(t){return S("SimpleDb","DELETE",this.store.name,t),xn(this.store.delete(t))}count(){return S("SimpleDb","COUNT",this.store.name),xn(this.store.count())}W(t,n){const r=this.options(t,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new y((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(t,n){const r=this.store.getAll(t,n===null?void 0:n);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(t,n){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(t,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(t,n){let r;n?r=t:(r={},n=t);const s=this.cursor(r);return this.G(s,n)}Z(t){const n=this.cursor({});return new y((r,s)=>{n.onerror=i=>{const o=sc(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?t(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(t,n){const r=[];return new y((s,i)=>{t.onerror=o=>{i(o.target.error)},t.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new QI(a),c=n(a.primaryKey,a.value,l);if(c instanceof y){const u=c.catch(h=>(l.done(),y.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>y.waitFor(r))}options(t,n){let r;return t!==void 0&&(typeof t=="string"?r=t:n=t),{index:r,range:n}}cursor(t){let n="next";if(t.reverse&&(n="prev"),t.index){const r=this.store.index(t.index);return t.J?r.openKeyCursor(t.range,n):r.openCursor(t.range,n)}return this.store.openCursor(t.range,n)}}function xn(e){return new y((t,n)=>{e.onsuccess=r=>{const s=r.target.result;t(s)},e.onerror=r=>{const s=sc(r.target.error);n(s)}})}let ih=!1;function sc(e){const t=On.S(Ri());if(t>=12.2&&t<13){const n="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ih||(ih=!0,setTimeout(()=>{throw r},0)),r}}return e}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}ic._e=-1;function bo(e){return e==null}function Fi(e){return e===0&&1/e==-1/0}function YI(e){return typeof e=="number"&&Number.isInteger(e)&&!Fi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Dr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Vp(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t,n){this.comparator=t,this.root=n||Mt.EMPTY}insert(t,n){return new vt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Mt.BLACK,null,null))}remove(t){return new vt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Mt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,r)=>(t(n,r),!1))}toString(){const t=[];return this.inorderTraversal((n,r)=>(t.push(`${n}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new oi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new oi(this.root,t,this.comparator,!1)}getReverseIterator(){return new oi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new oi(this.root,t,this.comparator,!0)}}class oi{constructor(t,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?r(t.key,n):1,n&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Mt{constructor(t,n,r,s,i){this.key=t,this.value=n,this.color=r??Mt.RED,this.left=s??Mt.EMPTY,this.right=i??Mt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,s,i){return new Mt(t??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let s=this;const i=r(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(t,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Mt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,s=this;if(n(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(t,s.key)===0){if(s.right.isEmpty())return Mt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Mt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Mt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const t=this.left.check();if(t!==this.right.check())throw U();return t+(this.isRed()?0:1)}}Mt.EMPTY=null,Mt.RED=!0,Mt.BLACK=!1;Mt.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,n,r,s,i){return this}insert(t,n,r){return new Mt(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t){this.comparator=t,this.data=new vt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,r)=>(t(n),!1))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;n(s.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new ah(this.data.getIterator())}getIteratorFrom(t){return new ah(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(r=>{n=n.add(r)}),n}isEqual(t){if(!(t instanceof Bt)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Bt(this.comparator);return n.data=t,n}}class ah{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(t){this.fields=t,t.sort(Ft.comparator)}static empty(){return new _e([])}unionWith(t){let n=new Bt(Ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new _e(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return wr(this.fields,t.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Dp("Invalid base64 string: "+i):i}}(t);return new Jt(n)}static fromUint8Array(t){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(t);return new Jt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return rt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Jt.EMPTY_BYTE_STRING=new Jt("");const XI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yn(e){if(ft(!!e),typeof e=="string"){let t=0;const n=XI.exec(e);if(ft(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:St(e.seconds),nanos:St(e.nanos)}}function St(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Hn(e){return typeof e=="string"?Jt.fromBase64String(e):Jt.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ac(e){const t=e.mapValue.fields.__previous_value__;return oc(t)?ac(t):t}function Is(e){const t=yn(e.mapValue.fields.__local_write_time__.timestampValue);return new Ct(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(t,n,r,s,i,o,a,l,c){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Ts{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ts&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Gn(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?oc(e)?4:tT(e)?9007199254740991:10:U()}function Le(e,t){if(e===t)return!0;const n=Gn(e);if(n!==Gn(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Is(e).isEqual(Is(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yn(s.timestampValue),a=yn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,i){return Hn(s.bytesValue).isEqual(Hn(i.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,i){return St(s.geoPointValue.latitude)===St(i.geoPointValue.latitude)&&St(s.geoPointValue.longitude)===St(i.geoPointValue.longitude)}(e,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return St(s.integerValue)===St(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=St(s.doubleValue),a=St(i.doubleValue);return o===a?Fi(o)===Fi(a):isNaN(o)&&isNaN(a)}return!1}(e,t);case 9:return wr(e.arrayValue.values||[],t.arrayValue.values||[],Le);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(oh(o)!==oh(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Le(o[l],a[l])))return!1;return!0}(e,t);default:return U()}}function As(e,t){return(e.values||[]).find(n=>Le(n,t))!==void 0}function Ir(e,t){if(e===t)return 0;const n=Gn(e),r=Gn(t);if(n!==r)return rt(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return rt(e.booleanValue,t.booleanValue);case 2:return function(i,o){const a=St(i.integerValue||i.doubleValue),l=St(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return lh(e.timestampValue,t.timestampValue);case 4:return lh(Is(e),Is(t));case 5:return rt(e.stringValue,t.stringValue);case 6:return function(i,o){const a=Hn(i),l=Hn(o);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=rt(a[c],l[c]);if(u!==0)return u}return rt(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(i,o){const a=rt(St(i.latitude),St(o.latitude));return a!==0?a:rt(St(i.longitude),St(o.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=Ir(a[c],l[c]);if(u)return u}return rt(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(i,o){if(i===ai.mapValue&&o===ai.mapValue)return 0;if(i===ai.mapValue)return 1;if(o===ai.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const p=rt(l[h],u[h]);if(p!==0)return p;const g=Ir(a[l[h]],c[u[h]]);if(g!==0)return g}return rt(l.length,u.length)}(e.mapValue,t.mapValue);default:throw U()}}function lh(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return rt(e,t);const n=yn(e),r=yn(t),s=rt(n.seconds,r.seconds);return s!==0?s:rt(n.nanos,r.nanos)}function Tr(e){return Ga(e)}function Ga(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(n){const r=yn(n);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?function(n){return Hn(n).toBase64()}(e.bytesValue):"referenceValue"in e?function(n){return M.fromName(n).toString()}(e.referenceValue):"geoPointValue"in e?function(n){return`geo(${n.latitude},${n.longitude})`}(e.geoPointValue):"arrayValue"in e?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Ga(i);return r+"]"}(e.arrayValue):"mapValue"in e?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Ga(n.fields[o])}`;return s+"}"}(e.mapValue):U()}function ch(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Ka(e){return!!e&&"integerValue"in e}function lc(e){return!!e&&"arrayValue"in e}function uh(e){return!!e&&"nullValue"in e}function hh(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function mi(e){return!!e&&"mapValue"in e}function rs(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Dr(e.mapValue.fields,(n,r)=>t.mapValue.fields[n]=rs(r)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=rs(e.arrayValue.values[n]);return t}return Object.assign({},e)}function tT(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(t){this.value=t}static empty(){return new ue({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!mi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=rs(n)}setAll(t){let n=Ft.emptyPath(),r={},s=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=rs(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(t){const n=this.field(t.popLast());mi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Le(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=n.mapValue.fields[t.get(r)];mi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(t,n,r){Dr(n,(s,i)=>t[s]=i);for(const s of r)delete t[s]}clone(){return new ue(rs(this.value))}}function kp(e){const t=[];return Dr(e.fields,(n,r)=>{const s=new Ft([n]);if(mi(r)){const i=kp(r.mapValue).fields;if(i.length===0)t.push(s);else for(const o of i)t.push(s.child(o))}else t.push(s)}),new _e(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,n,r,s,i,o,a){this.key=t,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ht(t,0,$.min(),$.min(),$.min(),ue.empty(),0)}static newFoundDocument(t,n,r,s){return new Ht(t,1,n,$.min(),r,s,0)}static newNoDocument(t,n){return new Ht(t,2,n,$.min(),$.min(),ue.empty(),0)}static newUnknownDocument(t,n){return new Ht(t,3,n,$.min(),$.min(),ue.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual($.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=ue.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=ue.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=$.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ht&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,n){this.position=t,this.inclusive=n}}function fh(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(i.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Ir(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function dh(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Le(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(t,n="asc"){this.field=t,this.dir=n}}function eT(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np{}class bt extends Np{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new rT(t,n,r):n==="array-contains"?new oT(t,r):n==="in"?new aT(t,r):n==="not-in"?new lT(t,r):n==="array-contains-any"?new cT(t,r):new bt(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new sT(t,r):new iT(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ir(n,this.value)):n!==null&&Gn(this.value)===Gn(n)&&this.matchesComparison(Ir(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class we extends Np{constructor(t,n){super(),this.filters=t,this.op=n,this.ue=null}static create(t,n){return new we(t,n)}matches(t){return Op(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function Op(e){return e.op==="and"}function Mp(e){return nT(e)&&Op(e)}function nT(e){for(const t of e.filters)if(t instanceof we)return!1;return!0}function Wa(e){if(e instanceof bt)return e.field.canonicalString()+e.op.toString()+Tr(e.value);if(Mp(e))return e.filters.map(t=>Wa(t)).join(",");{const t=e.filters.map(n=>Wa(n)).join(",");return`${e.op}(${t})`}}function Lp(e,t){return e instanceof bt?function(r,s){return s instanceof bt&&r.op===s.op&&r.field.isEqual(s.field)&&Le(r.value,s.value)}(e,t):e instanceof we?function(r,s){return s instanceof we&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Lp(o,s.filters[a]),!0):!1}(e,t):void U()}function Fp(e){return e instanceof bt?function(n){return`${n.field.canonicalString()} ${n.op} ${Tr(n.value)}`}(e):e instanceof we?function(n){return n.op.toString()+" {"+n.getFilters().map(Fp).join(" ,")+"}"}(e):"Filter"}class rT extends bt{constructor(t,n,r){super(t,n,r),this.key=M.fromName(r.referenceValue)}matches(t){const n=M.comparator(t.key,this.key);return this.matchesComparison(n)}}class sT extends bt{constructor(t,n){super(t,"in",n),this.keys=Up("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class iT extends bt{constructor(t,n){super(t,"not-in",n),this.keys=Up("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Up(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class oT extends bt{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return lc(n)&&As(n.arrayValue,this.value)}}class aT extends bt{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&As(this.value.arrayValue,n)}}class lT extends bt{constructor(t,n){super(t,"not-in",n)}matches(t){if(As(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!As(this.value.arrayValue,n)}}class cT extends bt{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!lc(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>As(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(t,n=null,r=[],s=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ph(e,t=null,n=[],r=[],s=null,i=null,o=null){return new uT(e,t,n,r,s,i,o)}function cc(e){const t=z(e);if(t.ce===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(r=>Wa(r)).join(","),n+="|ob:",n+=t.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),bo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(r=>Tr(r)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(r=>Tr(r)).join(",")),t.ce=n}return t.ce}function uc(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!eT(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Lp(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!dh(e.startAt,t.startAt)&&dh(e.endAt,t.endAt)}function Qa(e){return M.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function hT(e,t,n,r,s,i,o,a){return new kr(e,t,n,r,s,i,o,a)}function Bp(e){return new kr(e)}function gh(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function jp(e){return e.collectionGroup!==null}function ss(e){const t=z(e);if(t.le===null){t.le=[];const n=new Set;for(const i of t.explicitOrderBy)t.le.push(i),n.add(i.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Bt(Ft.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(t).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||t.le.push(new Ss(i,r))}),n.has(Ft.keyField().canonicalString())||t.le.push(new Ss(Ft.keyField(),r))}return t.le}function Ne(e){const t=z(e);return t.he||(t.he=fT(t,ss(e))),t.he}function fT(e,t){if(e.limitType==="F")return ph(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ss(s.field,i)});const n=e.endAt?new Ui(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Ui(e.startAt.position,e.startAt.inclusive):null;return ph(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ja(e,t){const n=e.filters.concat([t]);return new kr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Bi(e,t,n){return new kr(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Ro(e,t){return uc(Ne(e),Ne(t))&&e.limitType===t.limitType}function $p(e){return`${cc(Ne(e))}|lt:${e.limitType}`}function rr(e){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Fp(s)).join(", ")}]`),bo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Tr(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Tr(s)).join(",")),`Target(${r})`}(Ne(e))}; limitType=${e.limitType})`}function Co(e,t){return t.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):M.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(e,t)&&function(r,s){for(const i of ss(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(e,t)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(e,t)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=fh(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ss(r),s)||r.endAt&&!function(o,a,l){const c=fh(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ss(r),s))}(e,t)}function dT(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function qp(e){return(t,n)=>{let r=!1;for(const s of ss(e)){const i=pT(s,t,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pT(e,t,n){const r=e.field.isKeyField()?M.comparator(t.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?Ir(l,c):U()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,n]);s.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Dr(this.inner,(n,r)=>{for(const[s,i]of r)t(s,i)})}isEmpty(){return Vp(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new vt(M.comparator);function Ke(){return gT}const zp=new vt(M.comparator);function Gr(...e){let t=zp;for(const n of e)t=t.insert(n.key,n);return t}function Hp(e){let t=zp;return e.forEach((n,r)=>t=t.insert(n,r.overlayedDocument)),t}function Mn(){return is()}function Gp(){return is()}function is(){return new Nr(e=>e.toString(),(e,t)=>e.isEqual(t))}const mT=new vt(M.comparator),_T=new Bt(M.comparator);function Q(...e){let t=_T;for(const n of e)t=t.add(n);return t}const yT=new Bt(rt);function ET(){return yT}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fi(t)?"-0":t}}function Wp(e){return{integerValue:""+e}}function vT(e,t){return YI(t)?Wp(t):Kp(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(){this._=void 0}}function wT(e,t,n){return e instanceof ji?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&oc(i)&&(i=ac(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,t):e instanceof bs?Jp(e,t):e instanceof Rs?Yp(e,t):function(s,i){const o=Qp(s,i),a=mh(o)+mh(s.Ie);return Ka(o)&&Ka(s.Ie)?Wp(a):Kp(s.serializer,a)}(e,t)}function IT(e,t,n){return e instanceof bs?Jp(e,t):e instanceof Rs?Yp(e,t):n}function Qp(e,t){return e instanceof $i?function(r){return Ka(r)||function(i){return!!i&&"doubleValue"in i}(r)}(t)?t:{integerValue:0}:null}class ji extends Po{}class bs extends Po{constructor(t){super(),this.elements=t}}function Jp(e,t){const n=Xp(t);for(const r of e.elements)n.some(s=>Le(s,r))||n.push(r);return{arrayValue:{values:n}}}class Rs extends Po{constructor(t){super(),this.elements=t}}function Yp(e,t){let n=Xp(t);for(const r of e.elements)n=n.filter(s=>!Le(s,r));return{arrayValue:{values:n}}}class $i extends Po{constructor(t,n){super(),this.serializer=t,this.Ie=n}}function mh(e){return St(e.integerValue||e.doubleValue)}function Xp(e){return lc(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}function TT(e,t){return e.field.isEqual(t.field)&&function(r,s){return r instanceof bs&&s instanceof bs||r instanceof Rs&&s instanceof Rs?wr(r.elements,s.elements,Le):r instanceof $i&&s instanceof $i?Le(r.Ie,s.Ie):r instanceof ji&&s instanceof ji}(e.transform,t.transform)}class AT{constructor(t,n){this.version=t,this.transformResults=n}}class qe{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new qe}static exists(t){return new qe(void 0,t)}static updateTime(t){return new qe(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function _i(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class xo{}function Zp(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new eg(e.key,qe.none()):new $s(e.key,e.data,qe.none());{const n=e.data,r=ue.empty();let s=new Bt(Ft.comparator);for(let i of t.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jn(e.key,r,new _e(s.toArray()),qe.none())}}function ST(e,t,n){e instanceof $s?function(s,i,o){const a=s.value.clone(),l=yh(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(e,t,n):e instanceof Jn?function(s,i,o){if(!_i(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=yh(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(tg(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(e,t,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,n)}function os(e,t,n,r){return e instanceof $s?function(i,o,a,l){if(!_i(i.precondition,o))return a;const c=i.value.clone(),u=Eh(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(e,t,n,r):e instanceof Jn?function(i,o,a,l){if(!_i(i.precondition,o))return a;const c=Eh(i.fieldTransforms,l,o),u=o.data;return u.setAll(tg(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(e,t,n,r):function(i,o,a){return _i(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(e,t,n)}function bT(e,t){let n=null;for(const r of e.fieldTransforms){const s=t.data.field(r.field),i=Qp(r.transform,s||null);i!=null&&(n===null&&(n=ue.empty()),n.set(r.field,i))}return n||null}function _h(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&wr(r,s,(i,o)=>TT(i,o))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class $s extends xo{constructor(t,n,r,s=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends xo{constructor(t,n,r,s,i=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function tg(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function yh(e,t,n){const r=new Map;ft(e.length===n.length);for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,IT(o,a,n[s]))}return r}function Eh(e,t,n){const r=new Map;for(const s of e){const i=s.transform,o=n.data.field(s.field);r.set(s.field,wT(i,o,t))}return r}class eg extends xo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class RT extends xo{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CT{constructor(t,n,r,s){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&ST(i,t,r[s])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=os(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=Gp();return this.mutations.forEach(s=>{const i=t.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Zp(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument($.min())}),r}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),Q())}isEqual(t){return this.batchId===t.batchId&&wr(this.mutations,t.mutations,(n,r)=>_h(n,r))&&wr(this.baseMutations,t.baseMutations,(n,r)=>_h(n,r))}}class hc{constructor(t,n,r,s){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(t,n,r){ft(t.mutations.length===r.length);let s=function(){return mT}();const i=t.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new hc(t,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PT{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xT{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var At,Y;function VT(e){switch(e){default:return U();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function ng(e){if(e===void 0)return Me("GRPC error has no .code"),_.UNKNOWN;switch(e){case At.OK:return _.OK;case At.CANCELLED:return _.CANCELLED;case At.UNKNOWN:return _.UNKNOWN;case At.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case At.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case At.INTERNAL:return _.INTERNAL;case At.UNAVAILABLE:return _.UNAVAILABLE;case At.UNAUTHENTICATED:return _.UNAUTHENTICATED;case At.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case At.NOT_FOUND:return _.NOT_FOUND;case At.ALREADY_EXISTS:return _.ALREADY_EXISTS;case At.PERMISSION_DENIED:return _.PERMISSION_DENIED;case At.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case At.ABORTED:return _.ABORTED;case At.OUT_OF_RANGE:return _.OUT_OF_RANGE;case At.UNIMPLEMENTED:return _.UNIMPLEMENTED;case At.DATA_LOSS:return _.DATA_LOSS;default:return U()}}(Y=At||(At={}))[Y.OK=0]="OK",Y[Y.CANCELLED=1]="CANCELLED",Y[Y.UNKNOWN=2]="UNKNOWN",Y[Y.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Y[Y.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Y[Y.NOT_FOUND=5]="NOT_FOUND",Y[Y.ALREADY_EXISTS=6]="ALREADY_EXISTS",Y[Y.PERMISSION_DENIED=7]="PERMISSION_DENIED",Y[Y.UNAUTHENTICATED=16]="UNAUTHENTICATED",Y[Y.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Y[Y.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Y[Y.ABORTED=10]="ABORTED",Y[Y.OUT_OF_RANGE=11]="OUT_OF_RANGE",Y[Y.UNIMPLEMENTED=12]="UNIMPLEMENTED",Y[Y.INTERNAL=13]="INTERNAL",Y[Y.UNAVAILABLE=14]="UNAVAILABLE",Y[Y.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DT(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=new fr([4294967295,4294967295],0);function vh(e){const t=DT().encode(e),n=new NI;return n.update(t),new Uint8Array(n.digest())}function wh(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new fr([n,r],0),new fr([s,i],0)]}class fc{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Kr(`Invalid padding: ${n}`);if(r<0)throw new Kr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Kr(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new Kr(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*t.length-n,this.Ee=fr.fromNumber(this.Te)}de(t,n,r){let s=t.add(n.multiply(fr.fromNumber(r)));return s.compare(kT)===1&&(s=new fr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const n=vh(t),[r,s]=wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(t,n,r){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),o=new fc(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const n=vh(t),[r,s]=wh(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class Kr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vo{constructor(t,n,r,s,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const s=new Map;return s.set(t,qs.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Vo($.min(),s,new vt(rt),Ke(),Q())}}class qs{constructor(t,n,r,s,i){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new qs(r,n,Q(),Q(),Q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(t,n,r,s){this.Ve=t,this.removedTargetIds=n,this.key=r,this.me=s}}class rg{constructor(t,n){this.targetId=t,this.fe=n}}class sg{constructor(t,n,r=Jt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Ih{constructor(){this.ge=0,this.pe=Ah(),this.ye=Jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=Q(),n=Q(),r=Q();return this.pe.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:U()}}),new qs(this.ye,this.we,t,n,r)}Fe(){this.Se=!1,this.pe=Ah()}Me(t,n){this.Se=!0,this.pe=this.pe.insert(t,n)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1,ft(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class NT{constructor(t){this.Be=t,this.ke=new Map,this.qe=Ke(),this.Qe=Th(),this.Ke=new vt(rt)}$e(t){for(const n of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(n,t.me):this.We(n,t.key,t.me);for(const n of t.removedTargetIds)this.We(n,t.key,t.me)}Ge(t){this.forEachTarget(t,n=>{const r=this.ze(n);switch(t.state){case 0:this.je(n)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(t.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(t.resumeToken));break;default:U()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(t){const n=t.targetId,r=t.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Qa(i))if(r===0){const o=new M(i.path);this.We(n,o,Ht.newNoDocument(o,$.min()))}else ft(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(t),l=a?this.et(a,t,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(t){const n=t.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Hn(r).toUint8Array()}catch(l){if(l instanceof Dp)return vr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new fc(o,s,i)}catch(l){return vr(l instanceof Kr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(t,n,r){return n.fe.count===r-this.rt(t,n.targetId)?0:2}rt(t,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;t.mightContain(a)||(this.We(n,i,null),s++)}),s}it(t){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Qa(a.target)){const l=new M(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,Ht.newNoDocument(l,t))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=Q();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(t));const s=new Vo(t,n,this.Ke,this.qe,r);return this.qe=Ke(),this.Qe=Th(),this.Ke=new vt(rt),s}Ue(t,n){if(!this.je(t))return;const r=this.st(t,n.key)?2:0;this.ze(t).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(t))}We(t,n,r){if(!this.je(t))return;const s=this.ze(t);this.st(t,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(t)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const n=this.ze(t).ve();return this.Be.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let n=this.ke.get(t);return n||(n=new Ih,this.ke.set(t,n)),n}ot(t){let n=this.Qe.get(t);return n||(n=new Bt(rt),this.Qe=this.Qe.insert(t,n)),n}je(t){const n=this.Ye(t)!==null;return n||S("WatchChangeAggregator","Detected inactive target",t),n}Ye(t){const n=this.ke.get(t);return n&&n.be?null:this.Be._t(t)}He(t){this.ke.set(t,new Ih),this.Be.getRemoteKeysForTarget(t).forEach(n=>{this.We(t,n,null)})}st(t,n){return this.Be.getRemoteKeysForTarget(t).has(n)}}function Th(){return new vt(M.comparator)}function Ah(){return new vt(M.comparator)}const OT={asc:"ASCENDING",desc:"DESCENDING"},MT={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},LT={and:"AND",or:"OR"};class FT{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Ya(e,t){return e.useProto3Json||bo(t)?t:{value:t}}function qi(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ig(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function UT(e,t){return qi(e,t.toTimestamp())}function Oe(e){return ft(!!e),$.fromTimestamp(function(n){const r=yn(n);return new Ct(r.seconds,r.nanos)}(e))}function dc(e,t){return Xa(e,t).canonicalString()}function Xa(e,t){const n=function(s){return new gt(["projects",s.projectId,"databases",s.database])}(e).child("documents");return t===void 0?n:n.child(t)}function og(e){const t=gt.fromString(e);return ft(hg(t)),t}function Za(e,t){return dc(e.databaseId,t.path)}function fa(e,t){const n=og(t);if(n.get(1)!==e.databaseId.projectId)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new M(lg(n))}function ag(e,t){return dc(e.databaseId,t)}function BT(e){const t=og(e);return t.length===4?gt.emptyPath():lg(t)}function tl(e){return new gt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function lg(e){return ft(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Sh(e,t,n){return{name:Za(e,t),fields:n.value.mapValue.fields}}function jT(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(ft(u===void 0||typeof u=="string"),Jt.fromBase64String(u||"")):(ft(u===void 0||u instanceof Buffer||u instanceof Uint8Array),Jt.fromUint8Array(u||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(c){const u=c.code===void 0?_.UNKNOWN:ng(c.code);return new P(u,c.message||"")}(o);n=new sg(r,s,i,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=fa(e,r.document.name),i=Oe(r.document.updateTime),o=r.document.createTime?Oe(r.document.createTime):$.min(),a=new ue({mapValue:{fields:r.document.fields}}),l=Ht.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new yi(c,u,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=fa(e,r.document),i=r.readTime?Oe(r.readTime):$.min(),o=Ht.newNoDocument(s,i),a=r.removedTargetIds||[];n=new yi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=fa(e,r.document),i=r.removedTargetIds||[];n=new yi([],i,s,null)}else{if(!("filter"in t))return U();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new xT(s,i),a=r.targetId;n=new rg(a,o)}}return n}function $T(e,t){let n;if(t instanceof $s)n={update:Sh(e,t.key,t.value)};else if(t instanceof eg)n={delete:Za(e,t.key)};else if(t instanceof Jn)n={update:Sh(e,t.key,t.data),updateMask:YT(t.fieldMask)};else{if(!(t instanceof RT))return U();n={verify:Za(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ji)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof bs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Rs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof $i)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw U()}(0,r))),t.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:UT(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(e,t.precondition)),n}function qT(e,t){return e&&e.length>0?(ft(t!==void 0),e.map(n=>function(s,i){let o=s.updateTime?Oe(s.updateTime):Oe(i);return o.isEqual($.min())&&(o=Oe(i)),new AT(o,s.transformResults||[])}(n,t))):[]}function zT(e,t){return{documents:[ag(e,t.path)]}}function HT(e,t){const n={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ag(e,s);const i=function(c){if(c.length!==0)return ug(we.create(c,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(p){return{field:sr(p.field),direction:WT(p.dir)}}(u))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Ya(e,t.limit);return a!==null&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(t.startAt)),t.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(t.endAt)),{ut:n,parent:s}}function GT(e){let t=BT(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){ft(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:t=t.child(u.collectionId)}let i=[];n.where&&(i=function(h){const p=cg(h);return p instanceof we&&Mp(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(D){return new Ss(ir(D.field),function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,bo(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,g=h.values||[];return new Ui(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const p=!h.before,g=h.values||[];return new Ui(g,p)}(n.endAt)),hT(t,s,o,i,a,"F",l,c)}function KT(e,t){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(t.purpose);return n==null?null:{"goog-listen-tags":n}}function cg(e){return e.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ir(n.unaryFilter.field);return bt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ir(n.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ir(n.unaryFilter.field);return bt.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ir(n.unaryFilter.field);return bt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(e):e.fieldFilter!==void 0?function(n){return bt.create(ir(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(n){return we.create(n.compositeFilter.filters.map(r=>cg(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(e):U()}function WT(e){return OT[e]}function QT(e){return MT[e]}function JT(e){return LT[e]}function sr(e){return{fieldPath:e.canonicalString()}}function ir(e){return Ft.fromServerFormat(e.fieldPath)}function ug(e){return e instanceof bt?function(n){if(n.op==="=="){if(hh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NAN"}};if(uh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(hh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NAN"}};if(uh(n.value))return{unaryFilter:{field:sr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:sr(n.field),op:QT(n.op),value:n.value}}}(e):e instanceof we?function(n){const r=n.getFilters().map(s=>ug(s));return r.length===1?r[0]:{compositeFilter:{op:JT(n.op),filters:r}}}(e):U()}function YT(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function hg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(t,n,r,s,i=$.min(),o=$.min(),a=Jt.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(t){return new nn(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new nn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(t){this.ct=t}}function ZT(e){const t=GT({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Bi(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(){this._n=new eA}addToCollectionParentIndex(t,n){return this._n.add(n),y.resolve()}getCollectionParents(t,n){return y.resolve(this._n.getEntries(n))}addFieldIndex(t,n){return y.resolve()}deleteFieldIndex(t,n){return y.resolve()}deleteAllFieldIndexes(t){return y.resolve()}createTargetIndexes(t,n){return y.resolve()}getDocumentsMatchingTarget(t,n){return y.resolve(null)}getIndexType(t,n){return y.resolve(0)}getFieldIndexes(t,n){return y.resolve([])}getNextCollectionGroupToUpdate(t){return y.resolve(null)}getMinOffset(t,n){return y.resolve(_n.min())}getMinOffsetFromCollectionGroup(t,n){return y.resolve(_n.min())}updateCollectionGroup(t,n,r){return y.resolve()}updateIndexEntries(t,n){return y.resolve()}}class eA{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n]||new Bt(gt.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(t){const n=t.lastSegment(),r=t.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(t){return(this.index[t]||new Bt(gt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ar(0)}static Ln(){return new Ar(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(){this.changes=new Nr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Ht.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?y.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(t,n,r,s){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,n))).next(s=>(r!==null&&os(r.mutation,s,_e.empty(),Ct.now()),s))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.getLocalViewOfDocuments(t,r,Q()).next(()=>r))}getLocalViewOfDocuments(t,n,r=Q()){const s=Mn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,r).next(i=>{let o=Gr();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const r=Mn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,Q()))}populateOverlays(t,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,r,s){let i=Ke();const o=is(),a=function(){return is()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof Jn)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),os(u.mutation,c,u.mutation.getFieldMask(),Ct.now())):o.set(c.key,_e.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new rA(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,n){const r=is();let s=new vt((o,a)=>o-a),i=Q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||_e.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||Q()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Gp();u.forEach(p=>{if(!i.has(p)){const g=Zp(n.get(p),r.get(p));g!==null&&h.set(p,g),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(t,c,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,n,r,s){return function(o){return M.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):jp(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,s):this.getDocumentsMatchingCollectionQuery(t,n,r,s)}getNextDocuments(t,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,s-i.size):y.resolve(Mn());let a=-1,l=i;return o.next(c=>y.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?y.resolve():this.remoteDocumentCache.getEntry(t,u).next(p=>{l=l.insert(u,p)}))).next(()=>this.populateOverlays(t,c,i)).next(()=>this.computeViews(t,l,c,Q())).next(u=>({batchId:a,changes:Hp(u)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new M(n)).next(r=>{let s=Gr();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,n,r,s){const i=n.collectionGroup;let o=Gr();return this.indexManager.getCollectionParents(t,i).next(a=>y.forEach(a,l=>{const c=function(h,p){return new kr(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,c,r,s).next(u=>{u.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,Ht.newInvalidDocument(u)))});let a=Gr();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&os(u.mutation,c,_e.empty(),Ct.now()),Co(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,n){return y.resolve(this.cr.get(n))}saveBundleMetadata(t,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:Oe(s.createTime)}}(n)),y.resolve()}getNamedQuery(t,n){return y.resolve(this.lr.get(n))}saveNamedQuery(t,n){return this.lr.set(n.name,function(s){return{name:s.name,query:ZT(s.bundledQuery),readTime:Oe(s.readTime)}}(n)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(){this.overlays=new vt(M.comparator),this.hr=new Map}getOverlay(t,n){return y.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Mn();return y.forEach(n,s=>this.getOverlay(t,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(t,n,r){return r.forEach((s,i)=>{this.ht(t,n,i)}),y.resolve()}removeOverlaysForBatchId(t,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),y.resolve()}getOverlaysForCollection(t,n,r){const s=Mn(),i=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return y.resolve(s)}getOverlaysForCollectionGroup(t,n,r,s){let i=new vt((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Mn(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Mn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return y.resolve(a)}ht(t,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new PT(n,r));let i=this.hr.get(n);i===void 0&&(i=Q(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.Pr=new Bt(Vt.Ir),this.Tr=new Bt(Vt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,n){const r=new Vt(t,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,n){t.forEach(r=>this.addReference(r,n))}removeReference(t,n){this.Ar(new Vt(t,n))}Rr(t,n){t.forEach(r=>this.removeReference(r,n))}Vr(t){const n=new M(new gt([])),r=new Vt(n,t),s=new Vt(n,t+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const n=new M(new gt([])),r=new Vt(n,t),s=new Vt(n,t+1);let i=Q();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Vt(t,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Vt{constructor(t,n){this.key=t,this.pr=n}static Ir(t,n){return M.comparator(t.key,n.key)||rt(t.pr,n.pr)}static Er(t,n){return rt(t.pr,n.pr)||M.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Bt(Vt.Ir)}checkEmpty(t){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new CT(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new Vt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(t,n){return y.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,s=this.br(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Vt(n,0),s=new Vt(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Bt(rt);return n.forEach(s=>{const i=new Vt(s,0),o=new Vt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),y.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,s=r.length+1;let i=r;M.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new M(i),0);let a=new Bt(rt);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),y.resolve(this.Dr(a))}Dr(t){const n=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(t,n){ft(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return y.forEach(n.mutations,s=>{const i=new Vt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,n){const r=new Vt(n,0),s=this.wr.firstAfterOrEqual(r);return y.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,y.resolve()}Cr(t,n){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const n=this.br(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(t){this.vr=t,this.docs=function(){return new vt(M.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return y.resolve(r?r.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(t,n){let r=Ke();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():Ht.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(t,n,r,s){let i=Ke();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||GI(HI(u),r)<=0||(s.has(u.key)||Co(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(t,n,r,s){U()}Fr(t,n){return y.forEach(this.docs,r=>n(r))}newChangeBuffer(t){return new cA(this)}getSize(t){return y.resolve(this.size)}}class cA extends nA{constructor(t){super(),this.ar=t}applyChanges(t){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),y.waitFor(n)}getFromCache(t,n){return this.ar.getEntry(t,n)}getAllFromCache(t,n){return this.ar.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uA{constructor(t){this.persistence=t,this.Mr=new Nr(n=>cc(n),uc),this.lastRemoteSnapshotVersion=$.min(),this.highestTargetId=0,this.Or=0,this.Nr=new pc,this.targetCount=0,this.Lr=Ar.Nn()}forEachTarget(t,n){return this.Mr.forEach((r,s)=>n(s)),y.resolve()}getLastRemoteSnapshotVersion(t){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return y.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),y.resolve()}qn(t){this.Mr.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.Lr=new Ar(n),this.highestTargetId=n),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,n){return this.qn(n),this.targetCount+=1,y.resolve()}updateTargetData(t,n){return this.qn(n),y.resolve()}removeTargetData(t,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,y.resolve()}removeTargets(t,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(t){return y.resolve(this.targetCount)}getTargetData(t,n){const r=this.Mr.get(n)||null;return y.resolve(r)}addMatchingKeys(t,n,r){return this.Nr.dr(n,r),y.resolve()}removeMatchingKeys(t,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(t,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.Nr.Vr(n),y.resolve()}getMatchingKeysForTargetId(t,n){const r=this.Nr.gr(n);return y.resolve(r)}containsKey(t,n){return y.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(t,n){this.Br={},this.overlays={},this.kr=new ic(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new uA(this),this.indexManager=new tA,this.remoteDocumentCache=function(s){return new lA(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new XT(n),this.$r=new iA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new oA,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.Br[t.toKey()];return r||(r=new aA(n,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,n,r){S("MemoryPersistence","Starting transaction:",t);const s=new fA(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,n){return y.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,n)))}}class fA extends WI{constructor(t){super(),this.currentSequenceNumber=t}}class gc{constructor(t){this.persistence=t,this.zr=new pc,this.jr=null}static Hr(t){return new gc(t)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(t,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),y.resolve()}removeReference(t,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),y.resolve()}markPotentiallyOrphaned(t,n){return this.Jr.add(n.toString()),y.resolve()}removeTarget(t,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(t,n))}Ur(){this.jr=new Set}Wr(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Jr,r=>{const s=M.fromPath(r);return this.Yr(t,s).next(i=>{i||n.removeEntry(s,$.min())})}).next(()=>(this.jr=null,n.apply(t)))}updateLimboDocument(t,n){return this.Yr(t,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(t){return 0}Yr(t,n){return y.or([()=>y.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Gr(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(t,n,r,s){this.targetId=t,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(t,n){let r=Q(),s=Q();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new mc(t,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Wy()?8:On.v(Ri())>0?6:4}()}initialize(t,n){this.zi=t,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(t,n,r,s){const i={result:null};return this.ji(t,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(t,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new dA;return this.Ji(t,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(t,n,o,a.size)})}).next(()=>i.result)}Yi(t,n,r,s){return r.documentReadCount<this.Wi?($r()<=tt.DEBUG&&S("QueryEngine","SDK will not create cache indexes for query:",rr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),y.resolve()):($r()<=tt.DEBUG&&S("QueryEngine","Query:",rr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?($r()<=tt.DEBUG&&S("QueryEngine","The SDK decides to create cache indexes for query:",rr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ne(n))):y.resolve())}ji(t,n){if(gh(n))return y.resolve(null);let r=Ne(n);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Bi(n,null,"F"),r=Ne(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next(i=>{const o=Q(...i);return this.zi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(t,Bi(n,null,"F")):this.es(t,c,n,l)}))})))}Hi(t,n,r,s){return gh(n)||s.isEqual($.min())?y.resolve(null):this.zi.getDocuments(t,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?y.resolve(null):($r()<=tt.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),rr(n)),this.es(t,o,n,zI(s,-1)).next(a=>a))})}Zi(t,n){let r=new Bt(qp(t));return n.forEach((s,i)=>{Co(t,i)&&(r=r.add(i))}),r}Xi(t,n,r,s){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,n,r){return $r()<=tt.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",rr(n)),this.zi.getDocumentsMatchingQuery(t,n,_n.min(),r)}es(t,n,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(t,n,r,s){this.persistence=t,this.ts=n,this.serializer=s,this.ns=new vt(rt),this.rs=new Nr(i=>cc(i),uc),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new sA(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.ns))}}function mA(e,t,n,r){return new gA(e,t,n,r)}async function fg(e,t){const n=z(e);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(t),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=Q();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function _A(e,t){const n=z(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,p=h.keys();let g=y.resolve();return p.forEach(D=>{g=g.next(()=>u.getEntry(l,D)).next(C=>{const V=c.docVersions.get(D);ft(V!==null),C.version.compareTo(V)<0&&(h.applyToRemoteDocument(C,c),C.isValidDocument()&&(C.setReadTime(c.commitVersion),u.addEntry(C)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,t,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=Q();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(t))).next(()=>n.localDocuments.getDocuments(r,s))})}function dg(e){const t=z(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Qr.getLastRemoteSnapshotVersion(n))}function yA(e,t){const n=z(e),r=t.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];t.targetChanges.forEach((u,h)=>{const p=s.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let g=p.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(h)!==null?g=g.withResumeToken(Jt.EMPTY_BYTE_STRING,$.min()).withLastLimboFreeSnapshotVersion($.min()):u.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(u.resumeToken,r)),s=s.insert(h,g),function(C,V,q){return C.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-C.snapshotVersion.toMicroseconds()>=3e8?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0}(p,g,u)&&a.push(n.Qr.updateTargetData(i,g))});let l=Ke(),c=Q();if(t.documentUpdates.forEach(u=>{t.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(EA(i,o,t.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual($.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function EA(e,t,n){let r=Q(),s=Q();return n.forEach(i=>r=r.add(i)),t.getEntries(e,r).next(i=>{let o=Ke();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual($.min())?(t.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(t.addEntry(l),o=o.insert(a,l)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function vA(e,t){const n=z(e);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function wA(e,t){const n=z(e);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,t).next(i=>i?(s=i,y.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new nn(t,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(t,r.targetId)),r})}async function el(e,t,n){const r=z(e),s=r.ns.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!js(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function bh(e,t,n){const r=z(e);let s=$.min(),i=Q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=z(l),p=h.rs.get(u);return p!==void 0?y.resolve(h.ns.get(p)):h.Qr.getTargetData(c,u)}(r,o,Ne(t)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,t,n?s:$.min(),n?i:Q())).next(a=>(IA(r,dT(t),a),{documents:a,hs:i})))}function IA(e,t,n){let r=e.ss.get(t)||$.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),e.ss.set(t,r)}class Rh{constructor(){this.activeTargetIds=ET()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class TA{constructor(){this.no=new Rh,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,n,r){this.ro[t]=n}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Rh,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li=null;function da(){return li===null?li=function(){return 268435456+Math.round(2147483648*Math.random())}():li++,"0x"+li.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}onMessage(t){this.Ao=t}close(){this.ho()}send(t){this.lo(t)}Ro(){this.Io()}Vo(t){this.Eo(t)}mo(t){this.Ao(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt="WebChannelConnection";class RA extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=da(),l=this.bo(n,r.toUriEncodedString());S("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(S("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vr("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vr}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=SA[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Co(t,n,r,s){const i=da();return new Promise((o,a)=>{const l=new kI;l.setWithCredentials(!0),l.listenOnce(VI.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ha.NO_ERROR:const u=l.getResponseJson();S(qt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(u)),o(u);break;case ha.TIMEOUT:S(qt,`RPC '${t}' ${i} timed out`),a(new P(_.DEADLINE_EXCEEDED,"Request time out"));break;case ha.HTTP_ERROR:const h=l.getStatus();if(S(qt,`RPC '${t}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const D=function(V){const q=V.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(q)>=0?q:_.UNKNOWN}(g.status);a(new P(D,g.message))}else a(new P(_.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new P(_.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{S(qt,`RPC '${t}' ${i} completed.`)}});const c=JSON.stringify(s);S(qt,`RPC '${t}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(t,n,r){const s=da(),i=[this.fo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=PI(),a=xI(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");S(qt,`Creating RPC '${t}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let p=!1,g=!1;const D=new bA({lo:V=>{g?S(qt,`Not sending because RPC '${t}' stream ${s} is closed:`,V):(p||(S(qt,`Opening RPC '${t}' stream ${s} transport.`),h.open(),p=!0),S(qt,`RPC '${t}' stream ${s} sending:`,V),h.send(V))},ho:()=>h.close()}),C=(V,q,st)=>{V.listen(q,H=>{try{st(H)}catch(it){setTimeout(()=>{throw it},0)}})};return C(h,ii.EventType.OPEN,()=>{g||S(qt,`RPC '${t}' stream ${s} transport opened.`)}),C(h,ii.EventType.CLOSE,()=>{g||(g=!0,S(qt,`RPC '${t}' stream ${s} transport closed`),D.Vo())}),C(h,ii.EventType.ERROR,V=>{g||(g=!0,vr(qt,`RPC '${t}' stream ${s} transport errored:`,V),D.Vo(new P(_.UNAVAILABLE,"The operation could not be completed")))}),C(h,ii.EventType.MESSAGE,V=>{var q;if(!g){const st=V.data[0];ft(!!st);const H=st,it=H.error||((q=H[0])===null||q===void 0?void 0:q.error);if(it){S(qt,`RPC '${t}' stream ${s} received error:`,it);const at=it.status;let K=function(nt){const It=At[nt];if(It!==void 0)return ng(It)}(at),Tt=it.message;K===void 0&&(K=_.INTERNAL,Tt="Unknown error status: "+at+" with message "+it.message),g=!0,D.Vo(new P(K,Tt)),h.close()}else S(qt,`RPC '${t}' stream ${s} received:`,st),D.mo(st)}}),C(a,DI.STAT_EVENT,V=>{V.stat===rh.PROXY?S(qt,`RPC '${t}' stream ${s} detected buffering proxy`):V.stat===rh.NOPROXY&&S(qt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.Ro()},0),D}}function pa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Do(e){return new FT(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pg{constructor(t,n,r=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(t){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&S("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),t())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t,n,r,s,i,o,a,l){this.oi=t,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new pg(t,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(t){this.n_(),this.stream.send(t)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(t,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,t!==4?this.jo.reset():n&&n.code===_.RESOURCE_EXHAUSTED?(Me(n.toString()),Me("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.To(n)}i_(){}auth(){this.state=1;const t=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{t(()=>{const s=new P(_.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(t,n){const r=this.s_(this.Wo);this.stream=this.a_(t,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(t){return S("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}s_(t){return n=>{this.oi.enqueueAndForget(()=>this.Wo===t?n():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CA extends gg{constructor(t,n,r,s,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(t,n){return this.connection.Fo("Listen",t,n)}onMessage(t){this.jo.reset();const n=jT(this.serializer,t),r=function(i){if(!("targetChange"in i))return $.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?$.min():o.readTime?Oe(o.readTime):$.min()}(t);return this.listener.u_(n,r)}c_(t){const n={};n.database=tl(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Qa(l)?{documents:zT(i,l)}:{query:HT(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ig(i,o.resumeToken);const c=Ya(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo($.min())>0){a.readTime=qi(i,o.snapshotVersion.toTimestamp());const c=Ya(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,t);const r=KT(this.serializer,t);r&&(n.labels=r),this.t_(n)}l_(t){const n={};n.database=tl(this.serializer),n.removeTarget=t,this.t_(n)}}class PA extends gg{constructor(t,n,r,s,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(t,n){return this.connection.Fo("Write",t,n)}onMessage(t){if(ft(!!t.streamToken),this.lastStreamToken=t.streamToken,this.h_){this.jo.reset();const n=qT(t.writeResults,t.commitTime),r=Oe(t.commitTime);return this.listener.T_(r,n)}return ft(!t.writeResults||t.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const t={};t.database=tl(this.serializer),this.t_(t)}I_(t){const n={streamToken:this.lastStreamToken,writes:t.map(r=>$T(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA extends class{}{constructor(t,n,r,s){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}So(t,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(t,Xa(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(_.UNKNOWN,i.toString())})}vo(t,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(t,Xa(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new P(_.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class VA{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(t){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.y_("Offline")))}set(t){this.b_(),this.m_=0,t==="Online"&&(this.g_=!1),this.y_(t)}y_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}w_(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Me(n),this.g_=!1):S("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(t,n,r,s,i){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Yn(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=z(l);c.v_.add(4),await zs(c),c.x_.set("Unknown"),c.v_.delete(4),await ko(c)}(this))})}),this.x_=new VA(r,s)}}async function ko(e){if(Yn(e))for(const t of e.F_)await t(!0)}async function zs(e){for(const t of e.F_)await t(!1)}function mg(e,t){const n=z(e);n.C_.has(t.targetId)||(n.C_.set(t.targetId,t),vc(n)?Ec(n):Or(n).Jo()&&yc(n,t))}function _c(e,t){const n=z(e),r=Or(n);n.C_.delete(t),r.Jo()&&_g(n,t),n.C_.size===0&&(r.Jo()?r.Xo():Yn(n)&&n.x_.set("Unknown"))}function yc(e,t){if(e.O_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo($.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}Or(e).c_(t)}function _g(e,t){e.O_.Oe(t),Or(e).l_(t)}function Ec(e){e.O_=new NT({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>e.C_.get(t)||null,nt:()=>e.datastore.serializer.databaseId}),Or(e).start(),e.x_.p_()}function vc(e){return Yn(e)&&!Or(e).Ho()&&e.C_.size>0}function Yn(e){return z(e).v_.size===0}function yg(e){e.O_=void 0}async function kA(e){e.C_.forEach((t,n)=>{yc(e,t)})}async function NA(e,t){yg(e),vc(e)?(e.x_.S_(t),Ec(e)):e.x_.set("Unknown")}async function OA(e,t,n){if(e.x_.set("Online"),t instanceof sg&&t.state===2&&t.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(e,t)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await zi(e,r)}else if(t instanceof yi?e.O_.$e(t):t instanceof rg?e.O_.Je(t):e.O_.Ge(t),!n.isEqual($.min()))try{const r=await dg(e.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(Jt.EMPTY_BYTE_STRING,u.snapshotVersion)),_g(i,l);const h=new nn(u.target,l,c,u.sequenceNumber);yc(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(e,n)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await zi(e,r)}}async function zi(e,t,n){if(!js(t))throw t;e.v_.add(1),await zs(e),e.x_.set("Offline"),n||(n=()=>dg(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await n(),e.v_.delete(1),await ko(e)})}function Eg(e,t){return t().catch(n=>zi(e,n,t))}async function No(e){const t=z(e),n=En(t);let r=t.D_.length>0?t.D_[t.D_.length-1].batchId:-1;for(;MA(t);)try{const s=await vA(t.localStore,r);if(s===null){t.D_.length===0&&n.Xo();break}r=s.batchId,LA(t,s)}catch(s){await zi(t,s)}vg(t)&&wg(t)}function MA(e){return Yn(e)&&e.D_.length<10}function LA(e,t){e.D_.push(t);const n=En(e);n.Jo()&&n.P_&&n.I_(t.mutations)}function vg(e){return Yn(e)&&!En(e).Ho()&&e.D_.length>0}function wg(e){En(e).start()}async function FA(e){En(e).d_()}async function UA(e){const t=En(e);for(const n of e.D_)t.I_(n.mutations)}async function BA(e,t,n){const r=e.D_.shift(),s=hc.from(r,t,n);await Eg(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await No(e)}async function jA(e,t){t&&En(e).P_&&await async function(r,s){if(function(o){return VT(o)&&o!==_.ABORTED}(s.code)){const i=r.D_.shift();En(r).Zo(),await Eg(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await No(r)}}(e,t),vg(e)&&wg(e)}async function Ph(e,t){const n=z(e);n.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=Yn(n);n.v_.add(3),await zs(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.v_.delete(3),await ko(n)}async function $A(e,t){const n=z(e);t?(n.v_.delete(2),await ko(n)):t||(n.v_.add(2),await zs(n),n.x_.set("Unknown"))}function Or(e){return e.N_||(e.N_=function(n,r,s){const i=z(n);return i.R_(),new CA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:kA.bind(null,e),To:NA.bind(null,e),u_:OA.bind(null,e)}),e.F_.push(async t=>{t?(e.N_.Zo(),vc(e)?Ec(e):e.x_.set("Unknown")):(await e.N_.stop(),yg(e))})),e.N_}function En(e){return e.L_||(e.L_=function(n,r,s){const i=z(n);return i.R_(),new PA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(e.datastore,e.asyncQueue,{Po:FA.bind(null,e),To:jA.bind(null,e),E_:UA.bind(null,e),T_:BA.bind(null,e)}),e.F_.push(async t=>{t?(e.L_.Zo(),await No(e)):(await e.L_.stop(),e.D_.length>0&&(S("RemoteStore",`Stopping write stream with ${e.D_.length} pending writes`),e.D_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,n,r,s,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new $e,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,s,i){const o=Date.now()+r,a=new wc(t,n,o,s,i);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ic(e,t){if(Me("AsyncQueue",`${t}: ${e}`),js(e))return new P(_.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t){this.comparator=t?(n,r)=>t(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=Gr(),this.sortedSet=new vt(this.comparator)}static emptySet(t){return new dr(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,r)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof dr)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new dr;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(){this.B_=new vt(M.comparator)}track(t){const n=t.doc.key,r=this.B_.get(n);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(n,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(n):t.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:t.doc}):U():this.B_=this.B_.insert(n,t)}k_(){const t=[];return this.B_.inorderTraversal((n,r)=>{t.push(r)}),t}}class Sr{constructor(t,n,r,s,i,o,a,l,c){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(t,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Sr(t,n,dr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Ro(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(t=>t.U_())}}class zA{constructor(){this.queries=new Nr(t=>$p(t),Ro),this.onlineState="Unknown",this.W_=new Set}}async function HA(e,t){const n=z(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.K_()&&t.U_()&&(r=2):(i=new qA,r=t.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Ic(o,`Initialization of query '${rr(t.query)}' failed`);return void t.onError(a)}n.queries.set(s,i),i.Q_.push(t),t.G_(n.onlineState),i.q_&&t.z_(i.q_)&&Tc(n)}async function GA(e,t){const n=z(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(t);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=t.U_()?0:1:!i.K_()&&t.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function KA(e,t){const n=z(e);let r=!1;for(const s of t){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&Tc(n)}function WA(e,t,n){const r=z(e),s=r.queries.get(t);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(t)}function Tc(e){e.W_.forEach(t=>{t.next()})}var nl,Vh;(Vh=nl||(nl={})).j_="default",Vh.Cache="cache";class QA{constructor(t,n,r){this.query=t,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Sr(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.J_?this.Z_(t)&&(this.H_.next(t),n=!0):this.X_(t,this.onlineState)&&(this.ea(t),n=!0),this.Y_=t,n}onError(t){this.H_.error(t)}G_(t){this.onlineState=t;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,t)&&(this.ea(this.Y_),n=!0),n}X_(t,n){if(!t.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Z_(t){if(t.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(t){t=Sr.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.J_=!0,this.H_.next(t)}U_(){return this.options.source!==nl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t){this.key=t}}class Tg{constructor(t){this.key=t}}class JA{constructor(t,n){this.query=t,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=Q(),this.mutatedKeys=Q(),this.ha=qp(t),this.Pa=new dr(this.ha)}get Ia(){return this.ua}Ta(t,n){const r=n?n.Ea:new xh,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((u,h)=>{const p=s.get(u),g=Co(this.query,h)?h:null,D=!!p&&this.mutatedKeys.has(p.key),C=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let V=!1;p&&g?p.data.isEqual(g.data)?D!==C&&(r.track({type:3,doc:g}),V=!0):this.da(p,g)||(r.track({type:2,doc:g}),V=!0,(l&&this.ha(g,l)>0||c&&this.ha(g,c)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),V=!0):p&&!g&&(r.track({type:1,doc:p}),V=!0,(l||c)&&(a=!0)),V&&(g?(o=o.add(g),i=C?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,s){const i=this.Pa;this.Pa=t.Pa,this.mutatedKeys=t.mutatedKeys;const o=t.Ea.k_();o.sort((u,h)=>function(g,D){const C=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return C(g)-C(D)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new Sr(this.query,t.Pa,i,o,t.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new xh,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(t){return!this.ua.has(t)&&!!this.Pa.has(t)&&!this.Pa.get(t).hasLocalMutations}Aa(t){t&&(t.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=t.current)}Ra(){if(!this.current)return[];const t=this.la;this.la=Q(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return t.forEach(r=>{this.la.has(r)||n.push(new Tg(r))}),this.la.forEach(r=>{t.has(r)||n.push(new Ig(r))}),n}fa(t){this.ua=t.hs,this.la=Q();const n=this.Ta(t.documents);return this.applyChanges(n,!0)}ga(){return Sr.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class YA{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class XA{constructor(t){this.key=t,this.pa=!1}}class ZA{constructor(t,n,r,s,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Nr(a=>$p(a),Ro),this.Sa=new Map,this.ba=new Set,this.Da=new vt(M.comparator),this.Ca=new Map,this.va=new pc,this.Fa={},this.Ma=new Map,this.xa=Ar.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function t0(e,t,n=!0){const r=Pg(e);let s;const i=r.wa.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await Ag(r,t,n,!0),s}async function e0(e,t){const n=Pg(e);await Ag(n,t,!0,!1)}async function Ag(e,t,n,r){const s=await wA(e.localStore,Ne(t)),i=s.targetId,o=n?e.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await n0(e,t,i,o==="current",s.resumeToken)),e.isPrimaryClient&&n&&mg(e.remoteStore,s),a}async function n0(e,t,n,r,s){e.Na=(h,p,g)=>async function(C,V,q,st){let H=V.view.Ta(q);H.Xi&&(H=await bh(C.localStore,V.query,!1).then(({documents:Tt})=>V.view.Ta(Tt,H)));const it=st&&st.targetChanges.get(V.targetId),at=st&&st.targetMismatches.get(V.targetId)!=null,K=V.view.applyChanges(H,C.isPrimaryClient,it,at);return kh(C,V.targetId,K.Va),K.snapshot}(e,h,p,g);const i=await bh(e.localStore,t,!0),o=new JA(t,i.hs),a=o.Ta(i.documents),l=qs.createSynthesizedTargetChangeForCurrentChange(n,r&&e.onlineState!=="Offline",s),c=o.applyChanges(a,e.isPrimaryClient,l);kh(e,n,c.Va);const u=new YA(t,n,o);return e.wa.set(t,u),e.Sa.has(n)?e.Sa.get(n).push(t):e.Sa.set(n,[t]),c.snapshot}async function r0(e,t,n){const r=z(e),s=r.wa.get(t),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!Ro(o,t))),void r.wa.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await el(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&_c(r.remoteStore,s.targetId),rl(r,s.targetId)}).catch(Bs)):(rl(r,s.targetId),await el(r.localStore,s.targetId,!0))}async function s0(e,t){const n=z(e),r=n.wa.get(t),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),_c(n.remoteStore,r.targetId))}async function i0(e,t,n){const r=f0(e);try{const s=await function(o,a){const l=z(o),c=Ct.now(),u=a.reduce((g,D)=>g.add(D.key),Q());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let D=Ke(),C=Q();return l.os.getEntries(g,u).next(V=>{D=V,D.forEach((q,st)=>{st.isValidDocument()||(C=C.add(q))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,D)).next(V=>{h=V;const q=[];for(const st of a){const H=bT(st,h.get(st.key).overlayedDocument);H!=null&&q.push(new Jn(st.key,H,kp(H.value.mapValue),qe.exists(!0)))}return l.mutationQueue.addMutationBatch(g,c,q,a)}).next(V=>{p=V;const q=V.applyToLocalDocumentSet(h,C);return l.documentOverlayCache.saveOverlays(g,V.batchId,q)})}).then(()=>({batchId:p.batchId,changes:Hp(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new vt(rt)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await Hs(r,s.changes),await No(r.remoteStore)}catch(s){const i=Ic(s,"Failed to persist write");n.reject(i)}}async function Sg(e,t){const n=z(e);try{const r=await yA(n.localStore,t);t.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(ft(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?ft(o.pa):s.removedDocuments.size>0&&(ft(o.pa),o.pa=!1))}),await Hs(n,r,t)}catch(r){await Bs(r)}}function Dh(e,t,n){const r=z(e);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(t);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=z(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const p of h.Q_)p.G_(a)&&(c=!0)}),c&&Tc(l)}(r.eventManager,t),s.length&&r.ya.u_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function o0(e,t,n){const r=z(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Ca.get(t),i=s&&s.key;if(i){let o=new vt(M.comparator);o=o.insert(i,Ht.newNoDocument(i,$.min()));const a=Q().add(i),l=new Vo($.min(),new Map,new vt(rt),o,a);await Sg(r,l),r.Da=r.Da.remove(i),r.Ca.delete(t),Ac(r)}else await el(r.localStore,t,!1).then(()=>rl(r,t,n)).catch(Bs)}async function a0(e,t){const n=z(e),r=t.batch.batchId;try{const s=await _A(n.localStore,t);Rg(n,r,null),bg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Hs(n,s)}catch(s){await Bs(s)}}async function l0(e,t,n){const r=z(e);try{const s=await function(o,a){const l=z(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(ft(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,t);Rg(r,t,n),bg(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Hs(r,s)}catch(s){await Bs(s)}}function bg(e,t){(e.Ma.get(t)||[]).forEach(n=>{n.resolve()}),e.Ma.delete(t)}function Rg(e,t,n){const r=z(e);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(t);i&&(n?i.reject(n):i.resolve(),s=s.remove(t)),r.Fa[r.currentUser.toKey()]=s}}function rl(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Sa.get(t))e.wa.delete(r),n&&e.ya.La(r,n);e.Sa.delete(t),e.isPrimaryClient&&e.va.Vr(t).forEach(r=>{e.va.containsKey(r)||Cg(e,r)})}function Cg(e,t){e.ba.delete(t.path.canonicalString());const n=e.Da.get(t);n!==null&&(_c(e.remoteStore,n),e.Da=e.Da.remove(t),e.Ca.delete(n),Ac(e))}function kh(e,t,n){for(const r of n)r instanceof Ig?(e.va.addReference(r.key,t),c0(e,r)):r instanceof Tg?(S("SyncEngine","Document no longer in limbo: "+r.key),e.va.removeReference(r.key,t),e.va.containsKey(r.key)||Cg(e,r.key)):U()}function c0(e,t){const n=t.key,r=n.path.canonicalString();e.Da.get(n)||e.ba.has(r)||(S("SyncEngine","New document in limbo: "+n),e.ba.add(r),Ac(e))}function Ac(e){for(;e.ba.size>0&&e.Da.size<e.maxConcurrentLimboResolutions;){const t=e.ba.values().next().value;e.ba.delete(t);const n=new M(gt.fromString(t)),r=e.xa.next();e.Ca.set(r,new XA(n)),e.Da=e.Da.insert(n,r),mg(e.remoteStore,new nn(Ne(Bp(n.path)),r,"TargetPurposeLimboResolution",ic._e))}}async function Hs(e,t,n){const r=z(e),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,t,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=mc.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,c){const u=z(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>y.forEach(c,p=>y.forEach(p.qi,g=>u.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>y.forEach(p.Qi,g=>u.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!js(h))throw h;S("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const p=h.targetId;if(!h.fromCache){const g=u.ns.get(p),D=g.snapshotVersion,C=g.withLastLimboFreeSnapshotVersion(D);u.ns=u.ns.insert(p,C)}}}(r.localStore,i))}async function u0(e,t){const n=z(e);if(!n.currentUser.isEqual(t)){S("SyncEngine","User change. New user:",t.toKey());const r=await fg(n.localStore,t);n.currentUser=t,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new P(_.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Hs(n,r.us)}}function h0(e,t){const n=z(e),r=n.Ca.get(t);if(r&&r.pa)return Q().add(r.key);{let s=Q();const i=n.Sa.get(t);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function Pg(e){const t=z(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Sg.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=h0.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=o0.bind(null,t),t.ya.u_=KA.bind(null,t.eventManager),t.ya.La=WA.bind(null,t.eventManager),t}function f0(e){const t=z(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=a0.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=l0.bind(null,t),t}class Nh{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Do(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return mA(this.persistence,new pA,t.initialUser,this.serializer)}createPersistence(t){return new hA(gc.Hr,this.serializer)}createSharedClientState(t){return new TA}async terminate(){var t,n;(t=this.gcScheduler)===null||t===void 0||t.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class d0{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Dh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=u0.bind(null,this.syncEngine),await $A(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new zA}()}createDatastore(t){const n=Do(t.databaseInfo.databaseId),r=function(i){return new RA(i)}(t.databaseInfo);return function(i,o,a,l){return new xA(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return function(r,s,i,o,a){return new DA(r,s,i,o,a)}(this.localStore,this.datastore,t.asyncQueue,n=>Dh(this.syncEngine,n,0),function(){return Ch.D()?new Ch:new AA}())}createSyncEngine(t,n){return function(s,i,o,a,l,c,u){const h=new ZA(s,i,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t;await async function(r){const s=z(r);S("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await zs(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.qa(this.observer.next,t)}error(t){this.observer.error?this.qa(this.observer.error,t):Me("Uncaught Error in snapshot listener:",t.toString())}Qa(){this.muted=!0}qa(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n,r,s){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=zt.UNAUTHENTICATED,this.clientId=xp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{S("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(S("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new $e;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=Ic(n,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function ga(e,t){e.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async s=>{r.isEqual(s)||(await fg(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Oh(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _0(e);S("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(r=>Ph(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,s)=>Ph(t.remoteStore,s)),e._onlineComponents=t}function m0(e){return e.name==="FirebaseError"?e.code===_.FAILED_PRECONDITION||e.code===_.UNIMPLEMENTED:!(typeof DOMException<"u"&&e instanceof DOMException)||e.code===22||e.code===20||e.code===11}async function _0(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await ga(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!m0(n))throw n;vr("Error using user provided cache. Falling back to memory cache: "+n),await ga(e,new Nh)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await ga(e,new Nh);return e._offlineComponents}async function xg(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await Oh(e,e._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await Oh(e,new d0))),e._onlineComponents}function y0(e){return xg(e).then(t=>t.syncEngine)}async function E0(e){const t=await xg(e),n=t.eventManager;return n.onListen=t0.bind(null,t.syncEngine),n.onUnlisten=r0.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=e0.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=s0.bind(null,t.syncEngine),n}function v0(e,t,n={}){const r=new $e;return e.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new p0({next:p=>{o.enqueueAndForget(()=>GA(i,h)),p.fromCache&&l.source==="server"?c.reject(new P(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),h=new QA(a,u,{includeMetadataChanges:!0,ta:!0});return HA(i,h)}(await E0(e),e.asyncQueue,t,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(e){const t={};return e.timeoutSeconds!==void 0&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e,t,n){if(!n)throw new P(_.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function w0(e,t,n,r){if(t===!0&&r===!0)throw new P(_.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Lh(e){if(!M.isDocumentKey(e))throw new P(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Fh(e){if(M.isDocumentKey(e))throw new P(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Oo(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":U()}function Hi(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Oo(e);throw new P(_.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function I0(e,t){if(t<=0)throw new P(_.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(t){var n,r;if(t.host===void 0){if(t.ssl!==void 0)throw new P(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new P(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}w0("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vg((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new P(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new P(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new P(_.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Mo{constructor(t,n,r,s){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uh({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new P(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uh(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new OI;switch(r.type){case"firstParty":return new UI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new P(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Mh.get(n);r&&(S("ComponentProvider","Removing Datastore"),Mh.delete(n),r.terminate())}(this),Promise.resolve()}}function T0(e,t,n,r={}){var s;const i=(e=Hi(e,Mo))._getSettings(),o=`${t}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=zt.MOCK_USER;else{a=Hy(r.mockUserToken,(s=e._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new P(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new zt(c)}e._authCredentials=new MI(new Pp(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new Tn(this.firestore,t,this._query)}}class de{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new un(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new de(this.firestore,t,this._key)}}class un extends Tn{constructor(t,n,r){super(t,n,Bp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new de(this.firestore,null,new M(t))}withConverter(t){return new un(this.firestore,t,this._path)}}function kg(e,t,...n){if(e=gn(e),Dg("collection","path",t),e instanceof Mo){const r=gt.fromString(t,...n);return Fh(r),new un(e,null,r)}{if(!(e instanceof de||e instanceof un))throw new P(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return Fh(r),new un(e.firestore,null,r)}}function A0(e,t,...n){if(e=gn(e),arguments.length===1&&(t=xp.newId()),Dg("doc","path",t),e instanceof Mo){const r=gt.fromString(t,...n);return Lh(r),new de(e,null,new M(r))}{if(!(e instanceof de||e instanceof un))throw new P(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(gt.fromString(t,...n));return Lh(r),new de(e.firestore,e instanceof un?e.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new pg(this,"async_queue_retry"),this.cu=()=>{const n=pa();n&&S("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const t=pa();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.lu(),this.hu(t)}enterRestrictedMode(t){if(!this.iu){this.iu=!0,this.au=t||!1;const n=pa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(t){if(this.lu(),this.iu)return new Promise(()=>{});const n=new $e;return this.hu(()=>this.iu&&this.au?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ru.push(t),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(t){if(!js(t))throw t;S("AsyncQueue","Operation failed with retryable error: "+t)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(t){const n=this.nu.then(()=>(this._u=!0,t().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Me("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(t,n,r){this.lu(),this.uu.indexOf(t)>-1&&(n=0);const s=wc.createAndSchedule(this,t,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&U()}verifyOperationInProgress(){}async Tu(){let t;do t=this.nu,await t;while(t!==this.nu)}Eu(t){for(const n of this.su)if(n.timerId===t)return!0;return!1}du(t){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tu()})}Au(t){this.uu.push(t)}Iu(t){const n=this.su.indexOf(t);this.su.splice(n,1)}}class Sc extends Mo{constructor(t,n,r,s){super(t,n,r,s),this.type="firestore",this._queue=function(){return new S0}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Og(this),this._firestoreClient.terminate()}}function b0(e,t){const n=typeof e=="object"?e:ed(),r=typeof e=="string"?e:t||"(default)",s=Vs(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=qy("firestore");i&&T0(s,...i)}return s}function Ng(e){return e._firestoreClient||Og(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Og(e){var t,n,r;const s=e._freezeSettings(),i=function(a,l,c,u){return new ZI(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Vg(u.experimentalLongPollingOptions),u.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,s);e._firestoreClient=new g0(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t){this._byteString=t}static fromBase64String(t){try{return new br(Jt.fromBase64String(t))}catch(n){throw new P(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new br(Jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new P(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ft(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new P(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new P(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return rt(this._lat,t._lat)||rt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=/^__.*__$/;class C0{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Jn(t,this.data,this.fieldMask,n,this.fieldTransforms):new $s(t,this.data,n,this.fieldTransforms)}}function Lg(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Cc{constructor(t,n,r,s,i,o){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(t){return new Cc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.pu(t),s}yu(t){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(t),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(t){return this.mu({path:void 0,gu:!0})}Su(t){return Gi(t,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let t=0;t<this.path.length;t++)this.pu(this.path.get(t))}pu(t){if(t.length===0)throw this.Su("Document fields must not be empty");if(Lg(this.Vu)&&R0.test(t))throw this.Su('Document fields cannot begin and end with "__"')}}class P0{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Do(t)}Cu(t,n,r,s=!1){return new Cc({Vu:t,methodName:n,Du:r,path:Ft.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fg(e){const t=e._freezeSettings(),n=Do(e._databaseId);return new P0(e._databaseId,!!t.ignoreUndefinedProperties,n)}function x0(e,t,n,r,s,i={}){const o=e.Cu(i.merge||i.mergeFields?2:0,t,n,s);jg("Data must be an object, but it was:",o,r);const a=Ug(r,o);let l,c;if(i.merge)l=new _e(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const p=D0(t,h,n);if(!o.contains(p))throw new P(_.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);N0(u,p)||u.push(p)}l=new _e(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new C0(new ue(a),l,c)}function V0(e,t,n,r=!1){return Pc(n,e.Cu(r?4:3,t))}function Pc(e,t){if(Bg(e=gn(e)))return jg("Unsupported field value:",t,e),Ug(e,t);if(e instanceof Mg)return function(r,s){if(!Lg(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.gu&&t.Vu!==4)throw t.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=Pc(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(e,t)}return function(r,s){if((r=gn(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return vT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ct.fromDate(r);return{timestampValue:qi(s.serializer,i)}}if(r instanceof Ct){const i=new Ct(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:qi(s.serializer,i)}}if(r instanceof Rc)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof br)return{bytesValue:ig(s.serializer,r._byteString)};if(r instanceof de){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dc(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${Oo(r)}`)}(e,t)}function Ug(e,t){const n={};return Vp(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Dr(e,(r,s)=>{const i=Pc(s,t.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Bg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Ct||e instanceof Rc||e instanceof br||e instanceof de||e instanceof Mg)}function jg(e,t,n){if(!Bg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Oo(n);throw r==="an object"?t.Su(e+" a custom object"):t.Su(e+" "+r)}}function D0(e,t,n){if((t=gn(t))instanceof bc)return t._internalPath;if(typeof t=="string")return $g(e,t);throw Gi("Field path arguments must be of type string or ",e,!1,void 0,n)}const k0=new RegExp("[~\\*/\\[\\]]");function $g(e,t,n){if(t.search(k0)>=0)throw Gi(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new bc(...t.split("."))._internalPath}catch{throw Gi(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Gi(e,t,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new P(_.INVALID_ARGUMENT,a+e+l)}function N0(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(t,n,r,s,i){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new de(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new O0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(xc("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class O0 extends qg{data(){return super.data()}}function xc(e,t){return typeof t=="string"?$g(e,t):t instanceof bc?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(e){if(e.limitType==="L"&&e.explicitOrderBy.length===0)throw new P(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vc{}class Dc extends Vc{}function L0(e,t,...n){let r=[];t instanceof Vc&&r.push(t),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof Nc).length,a=i.filter(l=>l instanceof kc).length;if(o>1||o>0&&a>0)throw new P(_.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class kc extends Dc{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new kc(t,n,r)}_apply(t){const n=this._parse(t);return zg(t._query,n),new Tn(t.firestore,t.converter,Ja(t._query,n))}_parse(t){const n=Fg(t.firestore);return function(i,o,a,l,c,u,h){let p;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(_.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){jh(h,u);const g=[];for(const D of h)g.push(Bh(l,i,D));p={arrayValue:{values:g}}}else p=Bh(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||jh(h,u),p=V0(a,o,h,u==="in"||u==="not-in");return bt.create(c,u,p)}(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Nc extends Vc{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Nc(t,n)}_parse(t){const n=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:we.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)zg(o,l),o=Ja(o,l)}(t._query,n),new Tn(t.firestore,t.converter,Ja(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Oc extends Dc{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Oc(t,n)}_apply(t){const n=function(s,i,o){if(s.startAt!==null)throw new P(_.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new P(_.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ss(i,o)}(t._query,this._field,this._direction);return new Tn(t.firestore,t.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new kr(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function F0(e,t="asc"){const n=t,r=xc("orderBy",e);return Oc._create(r,n)}class Mc extends Dc{constructor(t,n,r){super(),this.type=t,this._limit=n,this._limitType=r}static _create(t,n,r){return new Mc(t,n,r)}_apply(t){return new Tn(t.firestore,t.converter,Bi(t._query,this._limit,this._limitType))}}function U0(e){return I0("limit",e),Mc._create("limit",e,"F")}function Bh(e,t,n){if(typeof(n=gn(n))=="string"){if(n==="")throw new P(_.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!jp(t)&&n.indexOf("/")!==-1)throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(gt.fromString(n));if(!M.isDocumentKey(r))throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ch(e,new M(r))}if(n instanceof de)return ch(e,n._key);throw new P(_.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Oo(n)}.`)}function jh(e,t){if(!Array.isArray(e)||e.length===0)throw new P(_.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function zg(e,t){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new P(_.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new P(_.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class B0{convertValue(t,n="none"){switch(Gn(t)){case 0:return null;case 1:return t.booleanValue;case 2:return St(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Hn(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw U()}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Dr(t,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(t){return new Rc(St(t.latitude),St(t.longitude))}convertArray(t,n){return(t.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(t,n){switch(n){case"previous":const r=ac(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Is(t));default:return null}}convertTimestamp(t){const n=yn(t);return new Ct(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=gt.fromString(t);ft(hg(r));const s=new Ts(r.get(1),r.get(3)),i=new M(r.popFirst(5));return s.isEqual(n)||Me(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j0(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class $0 extends qg{constructor(t,n,r,s,i,o){super(t,n,r,s,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Ei(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(xc("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ei extends $0{data(t={}){return super.data(t)}}class q0{constructor(t,n,r,s){this._firestore=t,this._userDataWriter=n,this._snapshot=s,this.metadata=new ci(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(r=>{t.call(n,new Ei(this._firestore,this._userDataWriter,r.key,r,new ci(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Ei(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ci(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Ei(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ci(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:z0(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function z0(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class H0 extends B0{constructor(t){super(),this.firestore=t}convertBytes(t){return new br(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new de(this.firestore,null,n)}}function G0(e){e=Hi(e,Tn);const t=Hi(e.firestore,Sc),n=Ng(t),r=new H0(t);return M0(e._query),v0(n,e._query).then(s=>new q0(t,r,e,s))}function K0(e,t){const n=Hi(e.firestore,Sc),r=A0(e),s=j0(e.converter,t);return W0(n,[x0(Fg(e.firestore),"addDoc",r._key,s,e.converter!==null,{}).toMutation(r._key,qe.exists(!1))]).then(()=>r)}function W0(e,t){return function(r,s){const i=new $e;return r.asyncQueue.enqueueAndForget(async()=>i0(await y0(r),s,i)),i.promise}(Ng(e),t)}(function(t,n=!0){(function(s){Vr=s})(XE),mn(new He("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Sc(new LI(r.getProvider("auth-internal")),new jI(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new P(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ke(sh,"4.6.0",t),ke(sh,"4.6.0","esm2017")})();const Q0={apiKey:"AIzaSyA3q1Fpi4LtNn-q-KDZjBW8pIUNzrfH_kU",authDomain:"snake-fe592.firebaseapp.com",projectId:"snake-fe592",storageBucket:"snake-fe592.appspot.com",messagingSenderId:"679851192192",appId:"1:679851192192:web:58e5eb6c583b7dc9ac1b65",measurementId:"G-CWXLX61CHV"},Hg=td(Q0),Gg=b0(Hg);Sw(Hg);const pe=Gf("game",{state:()=>({gameSpeed:150,currentSpeed:150,minimumSpeed:50,level:1,snakeLength:3,score:0,player:localStorage.getItem("playerName")||"Johnny",playerHighscore:parseInt(localStorage.getItem("snakeHighscore")||"0"),playground:{xTiles:31,yTiles:31},tileSize:20,snakePosition:[{x:16,y:16},{x:16,y:17},{x:16,y:18}],direction:"UP",nextDirection:null,directionChanges:[],loot:[{name:"Apple",image:"apple",score:10,bodyIncrease:0,snakeSpeed:0},{name:"Banana",image:"banana",score:20,bodyIncrease:1,snakeSpeed:10},{name:"Cherries",image:"cherries",score:30,bodyIncrease:2,snakeSpeed:0},{name:"Grape",image:"grape",score:40,bodyIncrease:1,snakeSpeed:-20},{name:"Lemon",image:"lemon",score:50,bodyIncrease:1,snakeSpeed:-30},{name:"Peach",image:"peach",score:60,bodyIncrease:1,snakeSpeed:10},{name:"Melon",image:"melon",score:70,bodyIncrease:3,snakeSpeed:10},{name:"Pineapple",image:"pineapple",score:80,bodyIncrease:2,snakeSpeed:-10},{name:"Strawberry",image:"strawberry",score:90,bodyIncrease:3,snakeSpeed:0}],currentLootPosition:{x:0,y:0},currentLoot:null,gameStarted:!1,isGameOver:!1,intervalId:void 0,unpredictableMove:null}),actions:{moveSnake(){if(this.isGameOver)return;if(this.unpredictableMove&&this.nextDirection){const n=this.directionChanges.findIndex(r=>r===this.unpredictableMove);this.directionChanges[n].direction=this.nextDirection,this.unpredictableMove=null}this.nextDirection&&this.nextDirection!==this.getOppositeDirection(this.direction)&&(this.direction=this.nextDirection,this.nextDirection=null);const e=this.snakePosition[0],t={x:e.x,y:e.y,direction:this.direction};switch(this.direction){case"UP":t.y-=1;break;case"DOWN":t.y+=1;break;case"LEFT":t.x-=1;break;case"RIGHT":t.x+=1;break}if(t.x<1||t.x>this.playground.xTiles||t.y<1||t.y>this.playground.yTiles){this.gameOver();return}if(this.snakePosition.unshift(t),this.snakePosition.some((n,r)=>r!==0&&n.x===t.x&&n.y===t.y)){const n=this.directionChanges.findIndex(i=>i.x===t.x&&i.y===t.y);n!==-1&&(this.directionChanges[n].direction=this.direction,this.unpredictableMove=this.directionChanges[n]);const r=this.snakePosition.findIndex((i,o)=>o!==0&&i.x===t.x&&i.y===t.y),s=this.snakePosition.length-r;if(this.snakePosition.splice(r,s),this.updateScore(this.score-50*s),this.snakeLength-=s,this.score<0){this.gameOver();return}}if(this.isSnakeOnLoot()){if(this.updateScore(this.score+this.currentLoot.score),this.snakeLength+=this.currentLoot.bodyIncrease,this.currentLoot.snakeSpeed){const n=this.currentLoot.snakeSpeed;this.currentSpeed+=n,this.resetMovementInterval(),setTimeout(()=>{this.currentSpeed-=n,this.resetMovementInterval()},3e3)}this.getRandomLoot()}else this.snakePosition.length>this.snakeLength&&this.snakePosition.pop();this.directionChanges=this.directionChanges.filter(n=>this.snakePosition.some(r=>r.x===n.x&&r.y===n.y))},setDirection(e){const t=this.snakePosition[0];this.directionChanges.push({x:t.x,y:t.y,direction:e}),this.nextDirection=e},getOppositeDirection(e){switch(e){case"UP":return"DOWN";case"DOWN":return"UP";case"LEFT":return"RIGHT";case"RIGHT":return"LEFT"}},startGame(){this.isGameOver||(this.gameStarted=!0,this.resetMovementInterval(),this.getRandomLoot())},resetMovementInterval(){clearInterval(this.intervalId),this.intervalId=window.setInterval(()=>{this.gameStarted?this.moveSnake():clearInterval(this.intervalId)},this.currentSpeed)},updateScore(e){this.score=e;const t=Math.floor(this.score/500)+1;t>this.level&&(this.level=t,this.currentSpeed=Math.max(this.gameSpeed-this.gameSpeed*.1*(this.level-1),this.minimumSpeed),this.resetMovementInterval()),e>this.playerHighscore&&(this.playerHighscore=e,this.isGameOver&&localStorage.setItem("snakeHighscore",e.toString()))},getRandomLoot(){let e,t,n=0;do if(e=Jo(this.playground.xTiles,1),t=Jo(this.playground.yTiles,1),n++,n>=100){console.log("No room for loot");break}while(this.snakePosition.some(r=>r.x===e&&r.y===t));if(n<=100){this.currentLootPosition.x=e,this.currentLootPosition.y=t;const r=Jo(this.loot.length-1,0);this.currentLoot=this.loot[r]}},isSnakeOnLoot(){const e=this.snakePosition[0];return this.currentLootPosition.x===e.x&&this.currentLootPosition.y===e.y},async gameOver(){if(this.isGameOver=!0,localStorage.getItem("firstVisit")===null&&localStorage.setItem("firstVisit","true"),this.score>this.playerHighscore||localStorage.getItem("snakeHighscore")===null){this.playerHighscore=this.score,localStorage.setItem("snakeHighscore",this.score.toString());try{const e=await K0(kg(Gg,"scores"),{playerName:this.player,score:this.score,snakeLength:this.snakeLength,timestamp:new Date});console.log("Score written with ID: ",e.id)}catch(e){console.error("Error adding score: ",e)}}},resetGame(){this.gameStarted=!1,this.isGameOver=!1,this.snakePosition=[{x:16,y:16},{x:16,y:17},{x:16,y:18}],this.direction="UP",this.nextDirection=null,this.score=0,this.level=1,this.snakeLength=3,this.currentSpeed=this.gameSpeed,this.currentLoot=null},adjustTileSize(e,t){let r=this.playground.xTiles*this.tileSize+this.tileSize*2,s=this.playground.yTiles*this.tileSize+this.tileSize*14;if(e<r||t<s){this.tileSize=10;const i=10;r=this.playground.xTiles*i+i*2,s=this.playground.yTiles*i+i*14,(e<r||t<s)&&(this.tileSize=8);return}this.tileSize=20},setPlayerName(e){this.player=e,localStorage.setItem("playerName",e)}}}),J0=["src"],Y0="head",X0="body",Z0=$t({__name:"Snake",setup(e){const t=pe(),n=De(()=>t.snakePosition);function r(i){return i===0?Y0:X0}function s(i){let o=0;const a=t.directionChanges.find(c=>c.x===i.x&&c.y===i.y);switch(a?a.direction:i.direction||t.direction){case"UP":o=0;break;case"RIGHT":o=90;break;case"DOWN":o=180;break;case"LEFT":o=-90;break}return{gridColumnStart:i.x,gridRowStart:i.y,transform:`rotate(${o}deg)`}}return(i,o)=>(X(!0),yt(ee,null,wl(n.value,(a,l)=>(X(),yt("div",{key:`segment-${l}`,class:ze(["grid relative",l===0?"z-30 place-items-center":"place-items-end"]),style:Xt([s(a),l===0?{width:`${N(t).tileSize+N(t).tileSize/2}px`}:{height:`${N(t).tileSize}px`}])},[x("img",{src:`/snake/${r(l)}.png`,alt:"Snake Segment",style:Xt(l===0?{width:`${N(t).tileSize+N(t).tileSize/2}px`}:""),class:ze(l===0?"":"overflow-hidden")},null,14,J0)],6))),128))}}),tS=["src"],eS=$t({__name:"GameLoot",setup(e){const t=pe();return(n,r)=>N(t).currentLoot!==null?(X(),yt("img",{key:0,src:`/loot/${N(t).currentLoot.image}.png`,alt:"Loot",style:Xt({maxWidth:`${N(t).tileSize}px`,maxHeight:`${N(t).tileSize}px`,gridColumnStart:`${N(t).currentLootPosition.x}`,gridRowStart:`${N(t).currentLootPosition.y}`})},null,12,tS)):en("",!0)}}),nS=["src","alt"],rS=$t({__name:"BaseButton",props:{text:String,danger:{type:Boolean,default:!1},proceed:{type:Boolean,default:!1},icon:String,styled:{type:Boolean,default:!0}},setup(e){const t=e;return(n,r)=>(X(),yt("button",{class:ze(["text-sm md:text-lg flex items-center justify-center",{"pixel-btn":t.styled,"pixel-btn--reset":t.danger,"pixel-btn--proceed":t.proceed}])},[t.icon?(X(),yt("img",{key:0,class:"md:w-7 w-5 mr-2",src:`/src/assets/images/${t.icon}.png`,alt:t.icon},null,8,nS)):en("",!0),Ee(" "+Dt(t.text),1)],2))}}),Lo=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n},rn=Lo(rS,[["__scopeId","data-v-4a589231"]]),Mr=Gf("modal",{state:()=>({gameRules:!1,gameMenu:!1,leaderBoard:!1}),actions:{toggleModal(e){this.$state[e]=!this.$state[e]}}}),sS={class:"font-bold text-gradient from-green-600 to-teal-800 mb-4"},iS={class:"mb-5 text-lg md:text-2xl"},oS="Welcome to the slithering grounds, where cunning and twists know no bounds!",aS="Back for more hiss and twist? Let's see if you can top your last tryst!",lS=$t({__name:"GameInstructions",setup(e){const t=pe(),n=Mr();function r(){return localStorage.getItem("firstVisit")===null?oS:aS}return(s,i)=>N(t).gameStarted?en("",!0):(X(),yt("div",{key:0,class:"absolute z-50 text-xl md:text-3xl bg-white px_border mx-auto text-center",style:Xt({width:`${(N(t).playground.xTiles-5)*N(t).tileSize}px`})},[x("h1",sS,Dt(r()),1),x("h2",iS,[Ee(" Before you slither and slide, take a peek at the "),x("span",{onClick:i[0]||(i[0]=o=>N(n).toggleModal("gameRules")),class:"underline text-orange-600 font-bold cursor-pointer"},"rules inside!")]),x("div",null,[ut(rn,{class:"w-full px-4 my-2 md:my-4 text-xl md:text-2xl font-bold animate-[pulse_2s_linear_infinite]",text:"Let's play!",onClick:i[1]||(i[1]=o=>N(t).startGame())})])],4))}}),cS=$t({__name:"GameModal",setup(e){const t=pe();return(n,r)=>(X(),yt("div",{class:"absolute z-[60] text-xl md:text-3xl font-bold md:p-5 bg-white pixel-border animate-easeIn p-2",style:Xt({width:`${(N(t).playground.xTiles-3)*N(t).tileSize}px`})},[p_(n.$slots,"default",{},void 0,!0)],4))}}),Fo=Lo(cS,[["__scopeId","data-v-f4558e4c"]]),uS={class:"text-xs md:text-xl"},hS=x("p",{class:"mb-2 text-gradient from-green-600 to-teal-800"}," 1. Starting at a speed of 480,000 px/h, this game's snake moves lightning-fast from the get-go! ",-1),fS=x("p",{class:"mb-2 text-gradient from-orange-500 to-red-800"}," 2. If the snake bites its own body, each segment costs 50 points; dip below 0, and it's game over! ",-1),dS=x("p",{class:"mb-2 text-gradient from-blue-500 to-teal-800"}," 3. Edges aren't teleport portals here; hit them and you'll break your nose! ",-1),pS=x("p",{class:"mb-4"}," 4. Some fruits are tastier and more filling, while others are sour—don't let the snake go hungry! ",-1),gS={class:"flex items-center justify-start"},mS=["src","width","alt"],_S=["aria-level"],yS={class:"font-bold"},ES={class:"font-bold"},vS=$t({__name:"GameRules",setup(e){const t=pe(),n=Mr();return(r,s)=>(X(),Pe(Fo,null,{default:Ps(()=>[x("div",uS,[hS,fS,dS,pS,(X(!0),yt(ee,null,wl(N(t).loot,(i,o)=>(X(),yt("div",{class:"grid grid-cols-4 mb-2 text-center",key:o},[x("div",gS,[x("img",{src:`/src/assets/images/loot/${i.image}.png`,width:N(t).tileSize-5,class:"h-fit mr-2",alt:i.name},null,8,mS),x("h1",{"aria-level":o},Dt(i.name),9,_S)]),x("p",null,"Score: "+Dt(i.score),1),x("p",null,[Ee(" Speed: "),x("span",yS,Dt(N(ky)(i.snakeSpeed)),1)]),x("p",null,[Ee(" Size: "),x("span",ES,Dt(i.bodyIncrease),1)])]))),128)),ut(rn,{text:"Nothing can stop me now!",proceed:!0,onClick:s[0]||(s[0]=i=>N(n).toggleModal("gameRules")),class:"mt-4 text-xs md:text-xl w-full"})])]),_:1}))}}),wS="/snakeGame/assets/snake-DRw8Edqm.png",IS={class:"text-sm md:text-xl my-2 md:my-5 mr-3 md:mr-4 flex w-full items-center"},TS=["for"],AS=["id","placeholder","type"],SS=$t({__name:"BaseInput",props:{inputType:{type:String,default:"text"},placeholder:{type:String,default:"Enter here..."},labelFor:{type:String,default:"input"},label:{type:String,default:"Nickname:"}},emits:["update:modelValue"],setup(e,{emit:t}){const n=mr(""),r=e,s=t;function i(o){s("update:modelValue",o.target.value)}return(o,a)=>(X(),yt("div",IS,[x("label",{class:"font-bold mr-2",for:r.labelFor},Dt(r.label),9,TS),n_(x("input",{id:r.labelFor,placeholder:r.placeholder,class:"pixel-input text-sm :text-lg w-full",type:r.inputType,"onUpdate:modelValue":a[0]||(a[0]=l=>n.value=l),onInput:i},null,40,AS),[[Ey,n.value]])]))}}),bS=Lo(SS,[["__scopeId","data-v-858c9f82"]]),RS=x("h1",{class:"text-2xl md:text-3xl mb-3 w-fit mx-auto"},"Snake menu",-1),CS={key:0,class:"flex items-center justify-center"},PS={key:1,class:"flex justify-center items-center my-5 text-xl md:text-2xl"},xS=x("img",{class:"mr-2 w-8 md:w-10",src:wS,alt:"snake"},null,-1),VS={class:"font-bold mr-5 text-gradient from-orange-500 to-red-800"},DS={class:"flex-col flex"},kS=$t({__name:"GameMenu",setup(e){const t=Mr(),n=pe();let r=mr(!1);const s=mr("");function i(){n.setPlayerName(s.value),r.value=!1}return(o,a)=>(X(),Pe(Fo,{class:"px-3"},{default:Ps(()=>[x("div",null,[RS,N(n).player===""||N(r)?(X(),yt("div",CS,[ut(bS,{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=l=>s.value=l)},null,8,["modelValue"]),ut(rn,{text:"Ok",disabled:s.value.length===0,proceed:!0,onClick:i},null,8,["disabled"])])):(X(),yt("div",PS,[xS,x("p",VS,Dt(N(n).player),1),ut(rn,{onClick:a[1]||(a[1]=l=>Rt(r)?r.value=!N(r):r=!N(r)),styled:!1,icon:"edit",text:"edit"})])),x("div",DS,[ut(rn,{text:"World leaderboard",class:"my-5",onClick:a[2]||(a[2]=l=>N(t).toggleModal("leaderBoard"))}),ut(rn,{text:"Close menu",danger:!0,onClick:a[3]||(a[3]=l=>N(t).toggleModal("gameMenu"))})])])]),_:1}))}}),$h="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAADAFBMVEVHcEwHEScECx45HyYFCx0EDB8FCxwEECUkIDIEDCEVGS0RFyzVl3QIECcHDyM3HBgNFCoECyEMFSsBCSAHECesX1sIECcJESgKEienV1UIEigKECIWGSwKEygHDyQIEihYREcECyH5u4AJESc5MzkGDCMJESSrXVoIEyoLEicJEicLFCoJECdiUkwMEycKEygDDSTBopIjICxIMD5FOz396cksKTITGS2GL02pWlcYGi8HESmJaVAHESecU1ELFClbPDnypWu6gnMYGy+uYV0nJjH6sHPGpJHHqZT0qnH7sHISFSUOFismJTMjJzaPfHYyMzY/HzozKi4bGy+IjY+lVlS4ZlreiF3zoWj2pmvijWHpsoaqXVl7Ukb7r3DFeGPKqZRmUkcZGyq+i3xxZmbrnmy4fHH7s3fFpZKtXViBSk27czdsVkmlaDMuMS3RlGv/zEXssHZoZDZJOzSyoUCubDQFEir86sj510nbn3fprXL73bB0LUju69f079n///8A623/pd+duXb/vHedV1f/uXb9t3YrJTRgO0QNFizvqXHqoW7NmWg6MTgzLTaQb1X4rnMiIjKXV1b5tHRxWEx8SEsXHTHIp5TipWyDaFTrq29pVEhjQDL/q0FbS0XTiWntpW9PND/Ed2PKfWX4sXNFMDyiW1ezY1ylX1mzZl3Cc2CJTVHjmmpCLTt+Y0/HlGUFESovKDe1iGH9w4ghKz+wYlyRVFKzYVpzRkfyrHLUiGE7JjmDTU1uY2Lzr3KyYFxpRkiDdGkqHzabhn1QRkXco3vfpH3g28zekmrgj2JnQUWpcVq+bV5lXF7BfmDNg2i6hXjxwpJLNi+zazVZPzHlpz//10p5TzLIPl733LpfaHL97tKueFz5sXHTnGmualq+jmPMhmGhbVPPiGFWPUKwaFq7cV1RJD98cDlybGn/ykXdu0bOqEP/t0HuxEigYjOoaTXdiDnDeDfghTuAh4zloXZCQEvjrnqztrLKzcX///W+WgrqCAD2ABcACgNHcExPARUVAAABAHRSTlMAixQBDA8HPPQY2vULaSUE2h/rKIP+kjihGq4+lMJIzv8t/ZigNVXc+FCo8THxQ8x5Wrr8/vv0+fl47V3wcSnl6uku81N1L7imUe5L3lz1/MC95YD8FuZ4fR7vErzpYu7U4+L53PHZ04e4dub5+Y/t9PP7avP5s87C+OCl6v7+EMJ2//////////////////////////////////////7///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Acc6WdwAAA3ZJREFUSMdjYBgFVAOqgiRqYNYJyOMkWjWrIJsgm7BWSREjE4sgvyAbEVrUpLyN9GSLK16YM/oaScuqEqNFKKg0yDy74Op1bYfcJHtitLDycl/60Pvp1dvrV9732WuyEOMZFl6Oj2/eXbv2+uplH2824gJA0ezzXDC4rM9KnA4+LfMrc8DgkjxxWoS1Jq6bCQZHNsgT5RNhlSn9k5ubmzf19/RMSeRlIUZHf1trW9vkTS9vHVzfPEPXlZUoHa1tSzb1/fj1ZXZr6wwzWyYCWsTWtbbO6pk8q68z5Oet2W2tMzZqaBLSMntW6/rZ+2Yd6eyctuXg5s0zNgroEdAiwj1l8uRCJaXvR7ZsCam7fbPHT46fUGphXHquqrrc9Pbx48drb37d1OejQ0gHU/ChjfPyK48ePXbs2NH529qF9AikGBYZrpobFs5mfb1A0Nd3YGqnAIG8ySZmccNid6A4r5//4cOHvxm3TBWQJmAJv3jg80NlwooB/tOnT78wqWXPIX1Ckc9mYL9BSlFczNfQ0DBt5f6p7fIEg4tfzVZfhIEPGHf84WFAHbJyxCRKOWlxawaG6IioMzsmbtAXYTRgZWC2s7TkwadHR4SXmSHS8eSeiRsXLnwyWzeYicFFVF0Svw4GBp44x0ft7Xu271/VPSvHlYmAFmVGIOHmtaavc+r2ltWTzm/eZ2KQRVgLj6fXrvbOHS0Lp025aKpkomEsGhOKJ/olZKJ53NIn7OrtnLhx4mygji6TDUszJZlxRwyjtm5CBo9n6s6e3v57PTOaldY86+s0ssNjh5jD7rPuTgxO8fvaemY1t7YuWPR06bQdsYw4Uw2rjM391QopHh7uyYsXn+9qXbN4UcvSaeseP7SRwVUAcHKt7z4xZctBUAI70LJ4/qrVC9d2npoxYcJ6Lk6cWu4saX5wQGHv3r1npxl3dHTsnjhl3a4lzRNO49Yi0HFuX/OC0/MU1q5dqzAPCPrbmlvvLpi/GqcWVgntqfO7u7u7di5etKirDQQmd3efXLXsFE4tDKyyHSuWb926akHX5Mk7J7cu6epas3L58mUd3FI4yzI2Ce6OSdtatq48s6Br0Yl985evXC46adJCbi0mnFHJzCRh5TxtaUtLy4oVLctWLAMytm20slLGW15y8jFqcHMgAyFrPkI1M6c0OwoQZ2EYIgAAF4VUUSf8Yh8AAAAASUVORK5CYII=",Kg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAACIlBMVEVHcEwQGiMJERoAAQYBAQICBQkHCxFdoroJDhIAAAMKExoIERoUJDACAgUMFRoBBQoRHy0BAQURHy0IEhkGDRIQHCUCAwcXGRQLExcMEhYCAwYEBAVoaUoECA8IEBUmJBAxLhsBBQsJEBbLgA4EBgkABQkyLxN+aA0EBQmypxYHCgsdHxYEChEzLRdIRhJGSi4LDxNgPA8DBw5KMBFhXBIaFQhUURZdPRE/OxVjQRVpVhFqYxOsjhZwSBIXFweKghNPMgxQMwt4cRWmnRk6NBFONBUdGRL/9AD6yAD4xwD76AL5xwD55wCriAEaEAV3SQzQgQv4tQPtwAX5mgP5ogH5wgL//6uTkmg2IAb5qAL6mwb9/av5xQL52AL56AHnjgf68VX65QLouwP64AP4sgP57kL47zf55wXYrwbWkQRIPQr96wb4ugOqigc9MwrkuATywgL3zAT53QPnpQX9/KT89XT2xQT52wS0iwdOSA0KCAXOwBH1ngP30wT0mQRRMQkrJwn45wo6KQtoQAz04wjNpA756yj53lXdkwXxlQf3rATAjQP47jaQhgzMhwlcTQpkXQtHNgn8ywL320HQkALZsQTrsAb89Wj1wAXpngX56x/cjghRPwqxbxDm1QruyR/ZsASlcA3hjg7h0xN7chCXegidiA3ftAuSdgiymRDjy0fXrgL450N9Uwzu7qc4OCm4tWLq2A7ouk+QjUQAAgRHcEwdPeGQAAAAtnRSTlMADiDK/Z9CAVr2NRkE8iehB+gKL0AU4WNHU9n7/YM9wny/Tv7GpZz81Py2WX2G4ZJz85jZ5vbJ3brP9vb06f7x8P7t783HfO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ALwkrV0AAAPWSURBVFjD7Zf7VxJpGMdhDEGG6wByUVFUvKaV3e/X3XPeBihk2bSUJGlJFIsoMBBS0iy7rbpes3vbdXfbS39gcwMGtXpnqtM5e+bzA+c934HPPMPzvOe8IxIJCAgICAh8Q6RSKY/k48jVdomqINFJ7Gp5QaKS2O0mOJ0CM7pc+8xYvgApZiYSI6ZgJaatLtePrOQTqGzba8aTrU1ILkGaNhPJFlu+akNTa3K8Zm+tHOqBldc8XaNXtPmfq7RX097+X5W6XIKWhsamTx4rM32ZUM5PiEh2Phhq3NaG5n/e9gOZqPN/gqFtR+PrBzvtOqiZEckSCeLerKaITGWJRDMrEUmtykRiowhycnQVFeuRwqrXV1SoViXy/9PeU6waWZjkExhtK/tntllXJCabGVaHoXUjzSj7/hq0asS4KmlBNXDC6tL9z1qL2H22Wg4929LA7rOuYdPTvRYrnFD2/k52pyB6A/V4Zc+zWw/VkxMvJfYTsVOKIYXrSCFV4UYltbuKS3JCY4mM2aAnj5XAC4MvdldVKxDjjlCdTCyWbdj9Oh7e1WLWoMY6IjFg5pZdTzgJ+48+HKnFqsvuhQe1KkR7ZbQb4O2DDQZrSSgcUsoNlsF2t4eD8L/5JUKoyQvHunFCaOEtPPHzLw8Ha8WMUFV6b4yscKrBoFcuh5eVctQS4iq8PZY83HSk/nfnq/rKysZkkBDGxvdUVta/opI94zGuQkd/smM57HQ6X2Sm/ul3dAOAT7/MTJFJeCrzchrnLAym7t91kty9cdFHCgG+kE3uL+CAs9AXD0RvDTmHbkXdvbQQeDsXqWSx0wu4Cx0OfyT9m/PGcMpPrCkhAAPpPmdfeqAL4HyEvoiHFHb7WEIPIfQM4AB8XSHgJ3TEY9G+uVgv6WaE3kC0L+r28hU6ji4MR3zUihEC3J120yteQn88Rdbn6E1FcMboHfB+gdDho+u7CFbDT8iwUojjnMem5zrB0keEF0gC8EIzIbxEMh/054V4DnD+8ezsbJQQ6mF04uoN5X9fppg/y/DHzMzMo/Yc50nmJp9sqjJhEMc5bfmpniDF2Uun8rx5e47h8QWq5V2TNw+WIjDnQ0JIP+lST5aJiYlHZ3LE6BmavHkVWuinyTYlTreW1WQSDsKJAEWMnkV/KlLY5UAnxU9wQp2l/K9/T1PM9VLEgZegi4ZcLtKXTz89UIR+XqhBqt5lOij+7GRKKWT4Gn25I2NEoE5gxUUM22uOr0XNZuZ6LeQZViGmwZpda7JVjzHf4HBCZN7I1Gq1RMJ8MqjVbYiIL9K1EV6vBQQEvj8fAJn9qDxmk/WXAAAAAElFTkSuQmCC",NS={class:"text-sm md:text-xl"},OS=x("div",{class:"flex items-center justify-center mx-auto mb-5"},[x("img",{src:$h,alt:"leader snake",class:"w-6 md:w-8"}),x("h1",{class:"font-bold text-2xl md:text-3xl underline"},"Top Scores"),x("img",{src:$h,alt:"leader snake",class:"w-6 md:w-8 scale-x-[-1]"})],-1),MS=x("div",{class:"grid grid-cols-3 border-b-2 mb-2 font-normal"},[x("p",{class:"text-start"},"Player name"),x("p",null,"Total score"),x("p",{class:"text-end"},"Snake length")],-1),LS={class:"text-black mr-2"},FS={key:0,class:"w-5 md:w-7",src:Kg,alt:"crown"},US={class:"text-right"},BS=$t({__name:"LeaderBoard",setup(e){const t=Mr(),n=mr([]),r=async()=>{const s=kg(Gg,"scores"),i=L0(s,F0("score","desc"),U0(10)),o=await G0(i);n.value=o.docs.map(a=>{const l=a.data();return{playerName:l.playerName,score:l.score,snakeLength:l.snakeLength}})};return El(()=>{r()}),(s,i)=>(X(),Pe(Fo,null,{default:Ps(()=>[x("div",NS,[OS,MS,(X(!0),yt(ee,null,wl(n.value,(o,a)=>(X(),yt("div",{class:"grid grid-cols-3",key:a},[x("p",{class:ze(["text-left flex items-center flex-nowrap",{"text-amber-500":a===0,"text-slate-400":a===1,"text-orange-500":a===2}])},[x("span",LS,Dt(a+1)+". ",1),a===0?(X(),yt("img",FS)):en("",!0),Ee(" "+Dt(o.playerName),1)],2),x("p",null,Dt(o.score),1),x("p",US,Dt(o.snakeLength),1)]))),128)),ut(rn,{class:"mt-4",text:"I can do better",onClick:i[0]||(i[0]=o=>N(t).toggleModal("leaderBoard"))})])]),_:1}))}}),jS="/snakeGame/assets/gameOver-C9nVm0ni.webp",$S={class:"modal-content text-center w-full"},qS=["width","height"],zS=x("h1",{class:"text-3xl md:text-5xl mx-auto text-gradient bg-gradient-to-r from-orange-500 to-red-800 mb-4 w-fit"}," Game Over! ",-1),HS={key:0,class:"mb-4 text-xl md:text-2xl"},GS={key:1,class:"mb-4 text-xl md:text-2xl"},KS={class:"text-gradient bg-gradient-to-r from-green-600 to-teal-800"},WS={class:"text-gradient bg-gradient-to-r from-blue-500 to-teal-800"},QS=$t({__name:"GameOver",setup(e){const t=pe(),n=De(()=>t.score),r=De(()=>t.playerHighscore);function s(){t.resetGame()}return(i,o)=>(X(),Pe(Fo,null,{default:Ps(()=>[x("div",$S,[x("img",{src:jS,class:"mx-auto",alt:"Game over",width:N(t).tileSize*7,height:N(t).tileSize*7},null,8,qS),zS,n.value<0?(X(),yt("p",HS," Nibbled on tail, oh what a fail, game over, Snake's self-bite tale! ")):(X(),yt("p",GS," End of line, you hit the sign, game over, Mr. Slithering Vine! ")),x("p",null,[Ee(" Your score: "),x("span",KS,Dt(n.value),1)]),x("p",null,[Ee(" Your highscore: "),x("span",WS,Dt(r.value),1)]),ut(rn,{text:"Restart Game",danger:!0,class:"mx-auto mt-5",onClick:s})])]),_:1}))}}),JS=$t({__name:"GameBoard",setup(e){const t=pe(),n=Mr(),r=De(()=>t.isGameOver);function s(i){const a={ArrowUp:"UP",ArrowDown:"DOWN",ArrowLeft:"LEFT",ArrowRight:"RIGHT"}[i.key];if(a&&a!==t.direction&&t.nextDirection==null){const l={UP:"DOWN",DOWN:"UP",LEFT:"RIGHT",RIGHT:"LEFT"};t.direction!==l[a]&&t.setDirection(a)}}return El(()=>{window.addEventListener("keydown",s)}),vl(()=>{window.removeEventListener("keydown",s)}),(i,o)=>(X(),yt("section",{id:"board",class:ze(["grid game-board mx-auto text-center mb-5 md:mb-10 z-0 place-items-center bg-orange-100",{"animate-wiggle":r.value}]),style:Xt({width:`${N(t).tileSize*N(t).playground.xTiles}px`,height:`${N(t).tileSize*N(t).playground.yTiles}px`,gridTemplateColumns:`repeat(${N(t).playground.xTiles}, ${N(t).tileSize}px)`,gridTemplateRows:`repeat(${N(t).playground.yTiles}, ${N(t).tileSize}px)`})},[ut(Z0),ut(eS),ut(lS),N(t).isGameOver?(X(),Pe(QS,{key:0})):en("",!0),N(n).gameRules?(X(),Pe(vS,{key:1})):en("",!0),N(n).gameMenu?(X(),Pe(kS,{key:2})):en("",!0),N(n).leaderBoard?(X(),Pe(BS,{key:3})):en("",!0)],6))}}),YS="/snakeGame/assets/snakeLogo-DZt-Rg9P.png",XS=$t({__name:"GameHeader",setup(e){const t=pe(),n=De(()=>t.tileSize*6);return(r,s)=>(X(),yt("img",{src:YS,alt:"snake logo",class:"w-[80px] md:w-[100px] 4k:w-[120px] mx-auto",style:Xt({width:`${n.value}px`})},null,4))}}),ZS={class:"flex items-center justify-center"},tb=["width"],eb={class:"md:text-xl"},nb=$t({__name:"ScoreBoard",setup(e){const t=pe(),n=De(()=>t.tileSize*t.playground.xTiles),r=De(()=>t.tileSize+8),s=["text-red-900","text-blue-700","text-green-800","text-purple-700"],i=De(()=>s[t.level%s.length-1]);return(o,a)=>(X(),yt("div",{class:"grid grid-cols-[1fr_1fr_auto] mb-3 text-md md:text-2xl mx-auto",style:Xt({width:`${n.value}px`})},[x("p",null,[Ee(" Score: "),x("b",null,Dt(N(t).score),1)]),x("p",{class:ze(["font-bold",i.value])},"Level "+Dt(N(t).level),3),x("div",ZS,[x("img",{src:Kg,alt:"crown",width:r.value},null,8,tb),x("p",eb,[Ee(" Your Highscore: "),x("b",null,Dt(N(t).playerHighscore),1)])])],4))}}),rb={class:"mx-auto text-center mb-2 md:text-xl text-xs w-11/12 md:w-full"},sb=x("a",{class:"underline text-blue-600",target:"_blank",href:"https://github.com/SpekCezStolicku/"},"SpekCezStolicku",-1),ib=$t({__name:"GameFooter",setup(e){const t=new Date().getFullYear();return(n,r)=>(X(),yt("p",rb,[Ee(" Built with enthusiasm 🔥 and glazed with a little bit of magic ✨! ©"+Dt(N(t))+" - ",1),sb]))}}),ui="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAACTCAYAAAB4dbz1AAAACXBIWXMAABs0AAAbNAG7DiRNAAAGVElEQVR4nO2dQWhUVxSG/zeMkzEGlWARm0WEYhHqwkWklbQYNy4qri1diItiu4s7pZvGjZiddSXiQty129JNNpqFuGgWWSiUWiEBg5TQIBLjZDLllhkmmti557Rzuc4f+38QQrhz35z3PnJ577x7zy1CCOiWxqnDd1HgGEoBKICAAJQAFKH9g/ZP++9m26bPvP4dNvVp/b5UufH7RNfBbVFK/7cTZkdCyJAQMiSEDAkhQ0LIKCeGUwcwb7Q/B7AUaRsEsNPoW02MbUuSKqQCYNhoP77thwd3OzWsnTk4BuCO0be2NS9pGhqyyJAQMiSEDAkhQ0LIkBAyUtPvUyjwoZF+f44CS5H0+yAK7DTS74sohRcbU/Sb0/phAAWWm3+HDun8vsknY1tRSO7nkFRGMh6bEg1ZZEgIGRJChoSQISFkSAgZqbe95wHsNtoHACxH2o4CuGz0vQfgrNFupe63LElCyj/Nznbbd+3MQe8jjyrXH3d8l9KkPp7z8ad3aMgiQ0LIkBAyJIQMCSGj/Ndnn4xtnKUeNqaxS+hHEVaMFHg/CqwY6ffZbT8+eBY55QHnUhyof/PBWPy77c6rF4fG3kzJr8f5Ku43z/f1Z2arF/6MxZ2VsnM/P++k17324wBit66x55N1RgF8mXDyKedlxZ0VDVlkSAgZEkKGhJAhIWRICBllZznBIoBbRvtJ53T6jbY5AJeM9qozA/6r5kykSFvzvG4afY8YbXDizkrZuR+fK0/NRJcmN04dHnOm6qzEGrbd/rUppOtlz/Xx4e+s9r4rC9Fjr07sbbZ9bnSPxp0bDVlkSAgZEkKGhJAhIWRICBlF49OPg/E+5CmKsM94H/IUBfb1ohpQfXw4vIq5w/Hwz+NtfB+ygAJDxvuQN+LsfC6t89183Obv6e1fv+h6KYT3H1JPbGcl9kDZczRkkSEhZEgIGRJChoSQ4QmpJLanYM2qTyV11r+FN73JxAvst/LUzPuxxlZVUmCf0T+lGpA5L6ry/bwzMytOO/1upe+PVy8sdYy7dnWXF7c3vclEQxYZEkKGhJAhIWRICBkSQkYz/T5npN8XUYSfjbT2SRR4z0i/30OBR5H0+wEUGDXS7w9RCr8Y370bBZ4Z1YCsWSdXUOALI/1+DwiPIun3AyjCqJF+b1+zaOq/igK1EEnre9OA4Nyve9P6U5fKWlN1PKwpRrXMcXd9zTRkkSEhZEgIGRJChoSQISFkeOn35+0VqTGuOf2/BXA/0tbLakC3nFW2KVWMkq6ZJ2SpPDUTDbxx6nBsK4p17hvvQ5yu+aoB9U38Mdden/KfqV3d5XVZ2n5uJRr3y9sV85ppyCJDQsiQEDIkhAwJIcO7yxpsnBixKvIMOv2Prp0+FJn93rp9tEiqBmSxOrF3PwrsN9LvA0BY7px+d+MefHmj36hEZF8zT8jOf1FVx8K6X/dIrQZkcdZJkaeQdM00ZJEhIWRICBkSQoaEkCEhZHjVgJop6GmjfU/GzYkXnYyslSL3qGaM27tmdeu8vGlA0+WpmegS3/ZyhI+M/inLEW5Vrj/uulqQgzcNKGU5wvT2cyvZlkWLt4yEkCEhZEgIGRJChoSQ4T2H7GmcGLlrvJPwnkOurZ0+FNmcuHU/b/WtWpeqPj78Kq4OyxEGUIRl453EDi/u2uTgUuR9iBd3UkEe7zlk3nnO8JYjpGCViG1yLOHYOePuanrROhqyyJAQMiSEDAkhQ0LIYK4GlJOc1YCS6Fk1oNz0XVmIztxKqQaUGw1ZZEgIGRJChoSQISFkSAgZXvp9R+PEyISRfvfS2NHNtdbOHGwuCThrVAOqohRqxncvWJuCrV4cmjDS70e6jTs3uasBWZtr7U88tkeuuLOiIYsMCSFDQsiQEDIkhAwJIaOcuEGw127NwOh3ngUeOhsjp2xOnBJ3VooQQk++uLUcocCdXLu09U0+SVjJ3js0ZJEhIWRICBkSQoaEkCEhZCTd9ramARU4lmlz4gWUwpC74bBue98atBsI50RDFhkSQoaEkCEhZEgIGalCkjbidaBdMpCT1JP2yiOlVAO6mbEaEC0assiQEDIkhAwJIUNCyJAQMlJve+u9qgb0rpIqpNLDakDvJBqyyJAQMiSEDAkhQ0LIkBAyUm97zwPYbbRbOxh4uxv0bElAzwDwN1ddUpzkauj3AAAAAElFTkSuQmCC",ob={class:"grid grid-cols-3 grid-rows-3 p-4 my-3 md:my-5 w-fit mx-auto bg-slate-200 rounded-full md:mx-10 mx-5"},ab=["width"],lb=["width"],cb=["width"],ub=["width"],hb=x("div",{class:"bg-black flex justify-center col-start-2 row-start-2"},[x("div",{class:"w-full h-full border-2 md:border-4 border-orange-500 rounded-full"})],-1),fb=$t({__name:"GameController",setup(e){const t=pe();function n(r){if(t.gameStarted&&r!==t.direction&&t.nextDirection==null){const s={UP:"DOWN",DOWN:"UP",LEFT:"RIGHT",RIGHT:"LEFT"};t.direction!==s[r]&&t.setDirection(r)}}return(r,s)=>(X(),yt("div",ob,[x("div",{class:"col-start-2 row-start-1 mx-auto flex justify-center bg-black border-orange-500 border-2 md:border-4 border-b-0 md:border-b-0",style:Xt({width:`${N(t).tileSize*3.5}px`,height:`${N(t).tileSize*3.5}px`}),onClick:s[0]||(s[0]=i=>n("UP"))},[x("img",{class:"-rotate-90 cursor-pointer select-none m-auto",src:ui,width:N(t).tileSize*2,alt:"arrowUp"},null,8,ab)],4),x("div",{class:"col-start-1 row-start-2 mx-auto flex justify-center bg-black border-orange-500 border-2 md:border-4 border-r-0 md:border-r-0",style:Xt({width:`${N(t).tileSize*3.5}px`,height:`${N(t).tileSize*3.5}px`}),onClick:s[1]||(s[1]=i=>n("LEFT"))},[x("img",{class:"rotate-180 cursor-pointer select-none m-auto",src:ui,width:N(t).tileSize*2,alt:"arrowLeft"},null,8,lb)],4),x("div",{class:"col-start-2 row-start-3 mx-auto flex justify-center bg-black border-orange-500 border-2 md:border-4 border-t-0 md:border-t-0",style:Xt({width:`${N(t).tileSize*3.5}px`,height:`${N(t).tileSize*3.5}px`}),onClick:s[2]||(s[2]=i=>n("DOWN"))},[x("img",{class:"rotate-90 cursor-pointer select-none m-auto",src:ui,width:N(t).tileSize*2,alt:"arrowDown"},null,8,cb)],4),x("div",{class:"col-start-3 row-start-2 mx-auto flex justify-center bg-black border-orange-500 border-2 md:border-4 border-l-0 md:border-l-0",style:Xt({width:`${N(t).tileSize*3.5}px`,height:`${N(t).tileSize*3.5}px`}),onClick:s[3]||(s[3]=i=>n("RIGHT"))},[x("img",{class:"cursor-pointer select-none m-auto",src:ui,width:N(t).tileSize*2,alt:"arrowRight"},null,8,ub)],4),hb]))}}),db=$t({__name:"MenuButton",setup(e){const t=Mr();return(n,r)=>(X(),yt("button",{class:"text-sm md:text-lg font-bold text-orange-400 bg-black self-start 4k:self-start lg:self-center m-5 lg:m-10 lg:ml-24 4k:m-0 rounded-full",onClick:r[0]||(r[0]=s=>N(t).toggleModal("gameMenu"))}," Menu "))}}),pb=Lo(db,[["__scopeId","data-v-248f76c0"]]),gb={class:"select-none flex flex-col justify-between"},mb={class:"flex flex-col flex-wrap 4k:flex-col lg:flex-row items-center game-board p-2 md:p-5 4k:p-8 bg-repeat bg-amber-300 bg-[url('/src/assets/images/noise.png')]"},_b={class:"flex lg:flex-col-reverse flex-row 4k:flex-row justify-evenly items-center"},yb=$t({__name:"App",setup(e){return(t,n)=>(X(),yt("main",gb,[ut(XS),x("div",mb,[x("div",null,[ut(nb),ut(JS)]),x("div",_b,[ut(fb),ut(pb)])]),ut(ib)]))}}),Wg=Ty(yb),Eb=Ry();Wg.use(Eb);const vb=pe();function Qg(){vb.adjustTileSize(window.innerWidth,window.innerHeight)}Qg();window.addEventListener("resize",Qg);Wg.mount("#app");
