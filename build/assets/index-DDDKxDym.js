function PC(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function jC(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var rm={exports:{}},ec={},sm={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var d0;function OC(){if(d0)return Le;d0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function E(V){return V===null||typeof V!="object"?null:(V=x&&V[x]||V["@@iterator"],typeof V=="function"?V:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,U={};function L(V,H,oe){this.props=V,this.context=H,this.refs=U,this.updater=oe||A}L.prototype.isReactComponent={},L.prototype.setState=function(V,H){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,H,"setState")},L.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function Q(){}Q.prototype=L.prototype;function ee(V,H,oe){this.props=V,this.context=H,this.refs=U,this.updater=oe||A}var ae=ee.prototype=new Q;ae.constructor=ee,M(ae,L.prototype),ae.isPureReactComponent=!0;var G=Array.isArray,ce=Object.prototype.hasOwnProperty,me={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function I(V,H,oe){var he,fe={},Oe=null,be=null;if(H!=null)for(he in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(Oe=""+H.key),H)ce.call(H,he)&&!O.hasOwnProperty(he)&&(fe[he]=H[he]);var Ue=arguments.length-2;if(Ue===1)fe.children=oe;else if(1<Ue){for(var Ye=Array(Ue),rt=0;rt<Ue;rt++)Ye[rt]=arguments[rt+2];fe.children=Ye}if(V&&V.defaultProps)for(he in Ue=V.defaultProps,Ue)fe[he]===void 0&&(fe[he]=Ue[he]);return{$$typeof:n,type:V,key:Oe,ref:be,props:fe,_owner:me.current}}function k(V,H){return{$$typeof:n,type:V.type,key:H,ref:V.ref,props:V.props,_owner:V._owner}}function C(V){return typeof V=="object"&&V!==null&&V.$$typeof===n}function P(V){var H={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(oe){return H[oe]})}var R=/\/+/g;function S(V,H){return typeof V=="object"&&V!==null&&V.key!=null?P(""+V.key):H.toString(36)}function qe(V,H,oe,he,fe){var Oe=typeof V;(Oe==="undefined"||Oe==="boolean")&&(V=null);var be=!1;if(V===null)be=!0;else switch(Oe){case"string":case"number":be=!0;break;case"object":switch(V.$$typeof){case n:case e:be=!0}}if(be)return be=V,fe=fe(be),V=he===""?"."+S(be,0):he,G(fe)?(oe="",V!=null&&(oe=V.replace(R,"$&/")+"/"),qe(fe,H,oe,"",function(rt){return rt})):fe!=null&&(C(fe)&&(fe=k(fe,oe+(!fe.key||be&&be.key===fe.key?"":(""+fe.key).replace(R,"$&/")+"/")+V)),H.push(fe)),1;if(be=0,he=he===""?".":he+":",G(V))for(var Ue=0;Ue<V.length;Ue++){Oe=V[Ue];var Ye=he+S(Oe,Ue);be+=qe(Oe,H,oe,Ye,fe)}else if(Ye=E(V),typeof Ye=="function")for(V=Ye.call(V),Ue=0;!(Oe=V.next()).done;)Oe=Oe.value,Ye=he+S(Oe,Ue++),be+=qe(Oe,H,oe,Ye,fe);else if(Oe==="object")throw H=String(V),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function He(V,H,oe){if(V==null)return V;var he=[],fe=0;return qe(V,he,"","",function(Oe){return H.call(oe,Oe,fe++)}),he}function Ge(V){if(V._status===-1){var H=V._result;H=H(),H.then(function(oe){(V._status===0||V._status===-1)&&(V._status=1,V._result=oe)},function(oe){(V._status===0||V._status===-1)&&(V._status=2,V._result=oe)}),V._status===-1&&(V._status=0,V._result=H)}if(V._status===1)return V._result.default;throw V._result}var Pe={current:null},B={transition:null},le={ReactCurrentDispatcher:Pe,ReactCurrentBatchConfig:B,ReactCurrentOwner:me};function te(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:He,forEach:function(V,H,oe){He(V,function(){H.apply(this,arguments)},oe)},count:function(V){var H=0;return He(V,function(){H++}),H},toArray:function(V){return He(V,function(H){return H})||[]},only:function(V){if(!C(V))throw Error("React.Children.only expected to receive a single React element child.");return V}},Le.Component=L,Le.Fragment=t,Le.Profiler=i,Le.PureComponent=ee,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,Le.act=te,Le.cloneElement=function(V,H,oe){if(V==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+V+".");var he=M({},V.props),fe=V.key,Oe=V.ref,be=V._owner;if(H!=null){if(H.ref!==void 0&&(Oe=H.ref,be=me.current),H.key!==void 0&&(fe=""+H.key),V.type&&V.type.defaultProps)var Ue=V.type.defaultProps;for(Ye in H)ce.call(H,Ye)&&!O.hasOwnProperty(Ye)&&(he[Ye]=H[Ye]===void 0&&Ue!==void 0?Ue[Ye]:H[Ye])}var Ye=arguments.length-2;if(Ye===1)he.children=oe;else if(1<Ye){Ue=Array(Ye);for(var rt=0;rt<Ye;rt++)Ue[rt]=arguments[rt+2];he.children=Ue}return{$$typeof:n,type:V.type,key:fe,ref:Oe,props:he,_owner:be}},Le.createContext=function(V){return V={$$typeof:l,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},V.Provider={$$typeof:a,_context:V},V.Consumer=V},Le.createElement=I,Le.createFactory=function(V){var H=I.bind(null,V);return H.type=V,H},Le.createRef=function(){return{current:null}},Le.forwardRef=function(V){return{$$typeof:f,render:V}},Le.isValidElement=C,Le.lazy=function(V){return{$$typeof:v,_payload:{_status:-1,_result:V},_init:Ge}},Le.memo=function(V,H){return{$$typeof:m,type:V,compare:H===void 0?null:H}},Le.startTransition=function(V){var H=B.transition;B.transition={};try{V()}finally{B.transition=H}},Le.unstable_act=te,Le.useCallback=function(V,H){return Pe.current.useCallback(V,H)},Le.useContext=function(V){return Pe.current.useContext(V)},Le.useDebugValue=function(){},Le.useDeferredValue=function(V){return Pe.current.useDeferredValue(V)},Le.useEffect=function(V,H){return Pe.current.useEffect(V,H)},Le.useId=function(){return Pe.current.useId()},Le.useImperativeHandle=function(V,H,oe){return Pe.current.useImperativeHandle(V,H,oe)},Le.useInsertionEffect=function(V,H){return Pe.current.useInsertionEffect(V,H)},Le.useLayoutEffect=function(V,H){return Pe.current.useLayoutEffect(V,H)},Le.useMemo=function(V,H){return Pe.current.useMemo(V,H)},Le.useReducer=function(V,H,oe){return Pe.current.useReducer(V,H,oe)},Le.useRef=function(V){return Pe.current.useRef(V)},Le.useState=function(V){return Pe.current.useState(V)},Le.useSyncExternalStore=function(V,H,oe){return Pe.current.useSyncExternalStore(V,H,oe)},Le.useTransition=function(){return Pe.current.useTransition()},Le.version="18.3.1",Le}var h0;function Cg(){return h0||(h0=1,sm.exports=OC()),sm.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f0;function DC(){if(f0)return ec;f0=1;var n=Cg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(f,p,m){var v,x={},E=null,A=null;m!==void 0&&(E=""+m),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(A=p.ref);for(v in p)r.call(p,v)&&!a.hasOwnProperty(v)&&(x[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:f,key:E,ref:A,props:x,_owner:i.current}}return ec.Fragment=t,ec.jsx=l,ec.jsxs=l,ec}var p0;function MC(){return p0||(p0=1,rm.exports=DC()),rm.exports}var d=MC(),kd={},im={exports:{}},En={},om={exports:{}},am={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var m0;function LC(){return m0||(m0=1,(function(n){function e(B,le){var te=B.length;B.push(le);e:for(;0<te;){var V=te-1>>>1,H=B[V];if(0<i(H,le))B[V]=le,B[te]=H,te=V;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var le=B[0],te=B.pop();if(te!==le){B[0]=te;e:for(var V=0,H=B.length,oe=H>>>1;V<oe;){var he=2*(V+1)-1,fe=B[he],Oe=he+1,be=B[Oe];if(0>i(fe,te))Oe<H&&0>i(be,fe)?(B[V]=be,B[Oe]=te,V=Oe):(B[V]=fe,B[he]=te,V=he);else if(Oe<H&&0>i(be,te))B[V]=be,B[Oe]=te,V=Oe;else break e}}return le}function i(B,le){var te=B.sortIndex-le.sortIndex;return te!==0?te:B.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var l=Date,f=l.now();n.unstable_now=function(){return l.now()-f}}var p=[],m=[],v=1,x=null,E=3,A=!1,M=!1,U=!1,L=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,ee=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function ae(B){for(var le=t(m);le!==null;){if(le.callback===null)r(m);else if(le.startTime<=B)r(m),le.sortIndex=le.expirationTime,e(p,le);else break;le=t(m)}}function G(B){if(U=!1,ae(B),!M)if(t(p)!==null)M=!0,Ge(ce);else{var le=t(m);le!==null&&Pe(G,le.startTime-B)}}function ce(B,le){M=!1,U&&(U=!1,Q(I),I=-1),A=!0;var te=E;try{for(ae(le),x=t(p);x!==null&&(!(x.expirationTime>le)||B&&!P());){var V=x.callback;if(typeof V=="function"){x.callback=null,E=x.priorityLevel;var H=V(x.expirationTime<=le);le=n.unstable_now(),typeof H=="function"?x.callback=H:x===t(p)&&r(p),ae(le)}else r(p);x=t(p)}if(x!==null)var oe=!0;else{var he=t(m);he!==null&&Pe(G,he.startTime-le),oe=!1}return oe}finally{x=null,E=te,A=!1}}var me=!1,O=null,I=-1,k=5,C=-1;function P(){return!(n.unstable_now()-C<k)}function R(){if(O!==null){var B=n.unstable_now();C=B;var le=!0;try{le=O(!0,B)}finally{le?S():(me=!1,O=null)}}else me=!1}var S;if(typeof ee=="function")S=function(){ee(R)};else if(typeof MessageChannel<"u"){var qe=new MessageChannel,He=qe.port2;qe.port1.onmessage=R,S=function(){He.postMessage(null)}}else S=function(){L(R,0)};function Ge(B){O=B,me||(me=!0,S())}function Pe(B,le){I=L(function(){B(n.unstable_now())},le)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||A||(M=!0,Ge(ce))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(B){switch(E){case 1:case 2:case 3:var le=3;break;default:le=E}var te=E;E=le;try{return B()}finally{E=te}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,le){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=E;E=B;try{return le()}finally{E=te}},n.unstable_scheduleCallback=function(B,le,te){var V=n.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?V+te:V):te=V,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=te+H,B={id:v++,callback:le,priorityLevel:B,startTime:te,expirationTime:H,sortIndex:-1},te>V?(B.sortIndex=te,e(m,B),t(p)===null&&B===t(m)&&(U?(Q(I),I=-1):U=!0,Pe(G,te-V))):(B.sortIndex=H,e(p,B),M||A||(M=!0,Ge(ce))),B},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(B){var le=E;return function(){var te=E;E=le;try{return B.apply(this,arguments)}finally{E=te}}}})(am)),am}var g0;function VC(){return g0||(g0=1,om.exports=LC()),om.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _0;function FC(){if(_0)return En;_0=1;var n=Cg(),e=VC();function t(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,c=1;c<arguments.length;c++)o+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){l(s,o),l(s+"Capture",o)}function l(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function E(s){return p.call(x,s)?!0:p.call(v,s)?!1:m.test(s)?x[s]=!0:(v[s]=!0,!1)}function A(s,o,c,h){if(c!==null&&c.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:c!==null?!c.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function M(s,o,c,h){if(o===null||typeof o>"u"||A(s,o,c,h))return!0;if(h)return!1;if(c!==null)switch(c.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function U(s,o,c,h,g,y,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=g,this.mustUseProperty=c,this.propertyName=s,this.type=o,this.sanitizeURL=y,this.removeEmptyString=T}var L={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){L[s]=new U(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];L[o]=new U(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){L[s]=new U(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){L[s]=new U(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){L[s]=new U(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){L[s]=new U(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){L[s]=new U(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){L[s]=new U(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){L[s]=new U(s,5,!1,s.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function ee(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(Q,ee);L[o]=new U(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(Q,ee);L[o]=new U(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(Q,ee);L[o]=new U(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){L[s]=new U(s,1,!1,s.toLowerCase(),null,!1,!1)}),L.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){L[s]=new U(s,1,!1,s.toLowerCase(),null,!0,!0)});function ae(s,o,c,h){var g=L.hasOwnProperty(o)?L[o]:null;(g!==null?g.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(M(o,c,g,h)&&(c=null),h||g===null?E(o)&&(c===null?s.removeAttribute(o):s.setAttribute(o,""+c)):g.mustUseProperty?s[g.propertyName]=c===null?g.type===3?!1:"":c:(o=g.attributeName,h=g.attributeNamespace,c===null?s.removeAttribute(o):(g=g.type,c=g===3||g===4&&c===!0?"":""+c,h?s.setAttributeNS(h,o,c):s.setAttribute(o,c))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ce=Symbol.for("react.element"),me=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),P=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),qe=Symbol.for("react.suspense_list"),He=Symbol.for("react.memo"),Ge=Symbol.for("react.lazy"),Pe=Symbol.for("react.offscreen"),B=Symbol.iterator;function le(s){return s===null||typeof s!="object"?null:(s=B&&s[B]||s["@@iterator"],typeof s=="function"?s:null)}var te=Object.assign,V;function H(s){if(V===void 0)try{throw Error()}catch(c){var o=c.stack.trim().match(/\n( *(at )?)/);V=o&&o[1]||""}return`
`+V+s}var oe=!1;function he(s,o){if(!s||oe)return"";oe=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(s,[],o)}else{try{o.call()}catch(W){h=W}s.call(o.prototype)}else{try{throw Error()}catch(W){h=W}s()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var g=W.stack.split(`
`),y=h.stack.split(`
`),T=g.length-1,N=y.length-1;1<=T&&0<=N&&g[T]!==y[N];)N--;for(;1<=T&&0<=N;T--,N--)if(g[T]!==y[N]){if(T!==1||N!==1)do if(T--,N--,0>N||g[T]!==y[N]){var j=`
`+g[T].replace(" at new "," at ");return s.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",s.displayName)),j}while(1<=T&&0<=N);break}}}finally{oe=!1,Error.prepareStackTrace=c}return(s=s?s.displayName||s.name:"")?H(s):""}function fe(s){switch(s.tag){case 5:return H(s.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return s=he(s.type,!1),s;case 11:return s=he(s.type.render,!1),s;case 1:return s=he(s.type,!0),s;default:return""}}function Oe(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case O:return"Fragment";case me:return"Portal";case k:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case qe:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case P:return(s.displayName||"Context")+".Consumer";case C:return(s._context.displayName||"Context")+".Provider";case R:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case He:return o=s.displayName||null,o!==null?o:Oe(s.type)||"Memo";case Ge:o=s._payload,s=s._init;try{return Oe(s(o))}catch{}}return null}function be(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Oe(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ue(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Ye(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function rt(s){var o=Ye(s)?"checked":"value",c=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),h=""+s[o];if(!s.hasOwnProperty(o)&&typeof c<"u"&&typeof c.get=="function"&&typeof c.set=="function"){var g=c.get,y=c.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return g.call(this)},set:function(T){h=""+T,y.call(this,T)}}),Object.defineProperty(s,o,{enumerable:c.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function Pn(s){s._valueTracker||(s._valueTracker=rt(s))}function Zn(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var c=o.getValue(),h="";return s&&(h=Ye(s)?s.checked?"true":"false":s.value),s=h,s!==c?(o.setValue(s),!0):!1}function Rs(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Pi(s,o){var c=o.checked;return te({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:c??s._wrapperState.initialChecked})}function Ao(s,o){var c=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;c=Ue(o.value!=null?o.value:c),s._wrapperState={initialChecked:h,initialValue:c,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function ol(s,o){o=o.checked,o!=null&&ae(s,"checked",o,!1)}function al(s,o){ol(s,o);var c=Ue(o.value),h=o.type;if(c!=null)h==="number"?(c===0&&s.value===""||s.value!=c)&&(s.value=""+c):s.value!==""+c&&(s.value=""+c);else if(h==="submit"||h==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?Ro(s,o.type,c):o.hasOwnProperty("defaultValue")&&Ro(s,o.type,Ue(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function fu(s,o,c){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,c||o===s.value||(s.value=o),s.defaultValue=o}c=s.name,c!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,c!==""&&(s.name=c)}function Ro(s,o,c){(o!=="number"||Rs(s.ownerDocument)!==s)&&(c==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+c&&(s.defaultValue=""+c))}var Jr=Array.isArray;function Zr(s,o,c,h){if(s=s.options,o){o={};for(var g=0;g<c.length;g++)o["$"+c[g]]=!0;for(c=0;c<s.length;c++)g=o.hasOwnProperty("$"+s[c].value),s[c].selected!==g&&(s[c].selected=g),g&&h&&(s[c].defaultSelected=!0)}else{for(c=""+Ue(c),o=null,g=0;g<s.length;g++){if(s[g].value===c){s[g].selected=!0,h&&(s[g].defaultSelected=!0);return}o!==null||s[g].disabled||(o=s[g])}o!==null&&(o.selected=!0)}}function ll(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return te({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function Po(s,o){var c=o.value;if(c==null){if(c=o.children,o=o.defaultValue,c!=null){if(o!=null)throw Error(t(92));if(Jr(c)){if(1<c.length)throw Error(t(93));c=c[0]}o=c}o==null&&(o=""),c=o}s._wrapperState={initialValue:Ue(c)}}function jo(s,o){var c=Ue(o.value),h=Ue(o.defaultValue);c!=null&&(c=""+c,c!==s.value&&(s.value=c),o.defaultValue==null&&s.defaultValue!==c&&(s.defaultValue=c)),h!=null&&(s.defaultValue=""+h)}function cl(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function St(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function At(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?St(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var es,ul=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,c,h,g){MSApp.execUnsafeLocalFunction(function(){return s(o,c,h,g)})}:s})(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(es=es||document.createElement("div"),es.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=es.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Ps(s,o){if(o){var c=s.firstChild;if(c&&c===s.lastChild&&c.nodeType===3){c.nodeValue=o;return}}s.textContent=o}var ji={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oi=["Webkit","ms","Moz","O"];Object.keys(ji).forEach(function(s){Oi.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),ji[o]=ji[s]})});function dl(s,o,c){return o==null||typeof o=="boolean"||o===""?"":c||typeof o!="number"||o===0||ji.hasOwnProperty(s)&&ji[s]?(""+o).trim():o+"px"}function hl(s,o){s=s.style;for(var c in o)if(o.hasOwnProperty(c)){var h=c.indexOf("--")===0,g=dl(c,o[c],h);c==="float"&&(c="cssFloat"),h?s.setProperty(c,g):s[c]=g}}var fl=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pl(s,o){if(o){if(fl[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ml(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Di=null;function Oo(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Do=null,Bn=null,br=null;function Mo(s){if(s=Fl(s)){if(typeof Do!="function")throw Error(t(280));var o=s.stateNode;o&&(o=$u(o),Do(s.stateNode,s.type,o))}}function Ir(s){Bn?br?br.push(s):br=[s]:Bn=s}function gl(){if(Bn){var s=Bn,o=br;if(br=Bn=null,Mo(s),o)for(s=0;s<o.length;s++)Mo(o[s])}}function Mi(s,o){return s(o)}function _l(){}var ts=!1;function yl(s,o,c){if(ts)return s(o,c);ts=!0;try{return Mi(s,o,c)}finally{ts=!1,(Bn!==null||br!==null)&&(_l(),gl())}}function xt(s,o){var c=s.stateNode;if(c===null)return null;var h=$u(c);if(h===null)return null;c=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(c&&typeof c!="function")throw Error(t(231,o,typeof c));return c}var Lo=!1;if(f)try{var er={};Object.defineProperty(er,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",er,er),window.removeEventListener("test",er,er)}catch{Lo=!1}function Li(s,o,c,h,g,y,T,N,j){var W=Array.prototype.slice.call(arguments,3);try{o.apply(c,W)}catch(J){this.onError(J)}}var Vi=!1,Vo=null,tr=!1,vl=null,Rf={onError:function(s){Vi=!0,Vo=s}};function Fo(s,o,c,h,g,y,T,N,j){Vi=!1,Vo=null,Li.apply(Rf,arguments)}function pu(s,o,c,h,g,y,T,N,j){if(Fo.apply(this,arguments),Vi){if(Vi){var W=Vo;Vi=!1,Vo=null}else throw Error(t(198));tr||(tr=!0,vl=W)}}function nr(s){var o=s,c=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,(o.flags&4098)!==0&&(c=o.return),s=o.return;while(s)}return o.tag===3?c:null}function Fi(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function rr(s){if(nr(s)!==s)throw Error(t(188))}function mu(s){var o=s.alternate;if(!o){if(o=nr(s),o===null)throw Error(t(188));return o!==s?null:s}for(var c=s,h=o;;){var g=c.return;if(g===null)break;var y=g.alternate;if(y===null){if(h=g.return,h!==null){c=h;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===c)return rr(g),s;if(y===h)return rr(g),o;y=y.sibling}throw Error(t(188))}if(c.return!==h.return)c=g,h=y;else{for(var T=!1,N=g.child;N;){if(N===c){T=!0,c=g,h=y;break}if(N===h){T=!0,h=g,c=y;break}N=N.sibling}if(!T){for(N=y.child;N;){if(N===c){T=!0,c=y,h=g;break}if(N===h){T=!0,h=y,c=g;break}N=N.sibling}if(!T)throw Error(t(189))}}if(c.alternate!==h)throw Error(t(190))}if(c.tag!==3)throw Error(t(188));return c.stateNode.current===c?s:o}function wl(s){return s=mu(s),s!==null?Uo(s):null}function Uo(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=Uo(s);if(o!==null)return o;s=s.sibling}return null}var zo=e.unstable_scheduleCallback,xl=e.unstable_cancelCallback,gu=e.unstable_shouldYield,Pf=e.unstable_requestPaint,at=e.unstable_now,_u=e.unstable_getCurrentPriorityLevel,Ui=e.unstable_ImmediatePriority,js=e.unstable_UserBlockingPriority,$n=e.unstable_NormalPriority,El=e.unstable_LowPriority,yu=e.unstable_IdlePriority,zi=null,jn=null;function vu(s){if(jn&&typeof jn.onCommitFiberRoot=="function")try{jn.onCommitFiberRoot(zi,s,void 0,(s.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:xu,Tl=Math.log,wu=Math.LN2;function xu(s){return s>>>=0,s===0?32:31-(Tl(s)/wu|0)|0}var Bo=64,$o=4194304;function Os(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Bi(s,o){var c=s.pendingLanes;if(c===0)return 0;var h=0,g=s.suspendedLanes,y=s.pingedLanes,T=c&268435455;if(T!==0){var N=T&~g;N!==0?h=Os(N):(y&=T,y!==0&&(h=Os(y)))}else T=c&~g,T!==0?h=Os(T):y!==0&&(h=Os(y));if(h===0)return 0;if(o!==0&&o!==h&&(o&g)===0&&(g=h&-h,y=o&-o,g>=y||g===16&&(y&4194240)!==0))return o;if((h&4)!==0&&(h|=c&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=h;0<o;)c=31-dn(o),g=1<<c,h|=s[c],o&=~g;return h}function jf(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ns(s,o){for(var c=s.suspendedLanes,h=s.pingedLanes,g=s.expirationTimes,y=s.pendingLanes;0<y;){var T=31-dn(y),N=1<<T,j=g[T];j===-1?((N&c)===0||(N&h)!==0)&&(g[T]=jf(N,o)):j<=o&&(s.expiredLanes|=N),y&=~N}}function On(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function $i(){var s=Bo;return Bo<<=1,(Bo&4194240)===0&&(Bo=64),s}function Ds(s){for(var o=[],c=0;31>c;c++)o.push(s);return o}function Ms(s,o,c){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-dn(o),s[o]=c}function st(s,o){var c=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var h=s.eventTimes;for(s=s.expirationTimes;0<c;){var g=31-dn(c),y=1<<g;o[g]=0,h[g]=-1,s[g]=-1,c&=~y}}function Ls(s,o){var c=s.entangledLanes|=o;for(s=s.entanglements;c;){var h=31-dn(c),g=1<<h;g&o|s[h]&o&&(s[h]|=o),c&=~g}}var We=0;function Vs(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var Eu,Wo,Tu,bu,Iu,bl=!1,Cr=[],Qt=null,sr=null,ir=null,Fs=new Map,Wn=new Map,Nr=[],Of="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cu(s,o){switch(s){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":Fs.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wn.delete(o.pointerId)}}function mn(s,o,c,h,g,y){return s===null||s.nativeEvent!==y?(s={blockedOn:o,domEventName:c,eventSystemFlags:h,nativeEvent:y,targetContainers:[g]},o!==null&&(o=Fl(o),o!==null&&Wo(o)),s):(s.eventSystemFlags|=h,o=s.targetContainers,g!==null&&o.indexOf(g)===-1&&o.push(g),s)}function Df(s,o,c,h,g){switch(o){case"focusin":return Qt=mn(Qt,s,o,c,h,g),!0;case"dragenter":return sr=mn(sr,s,o,c,h,g),!0;case"mouseover":return ir=mn(ir,s,o,c,h,g),!0;case"pointerover":var y=g.pointerId;return Fs.set(y,mn(Fs.get(y)||null,s,o,c,h,g)),!0;case"gotpointercapture":return y=g.pointerId,Wn.set(y,mn(Wn.get(y)||null,s,o,c,h,g)),!0}return!1}function Nu(s){var o=Ki(s.target);if(o!==null){var c=nr(o);if(c!==null){if(o=c.tag,o===13){if(o=Fi(c),o!==null){s.blockedOn=o,Iu(s.priority,function(){Tu(c)});return}}else if(o===3&&c.stateNode.current.memoizedState.isDehydrated){s.blockedOn=c.tag===3?c.stateNode.containerInfo:null;return}}}s.blockedOn=null}function rs(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var c=qo(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(c===null){c=s.nativeEvent;var h=new c.constructor(c.type,c);Di=h,c.target.dispatchEvent(h),Di=null}else return o=Fl(c),o!==null&&Wo(o),s.blockedOn=c,!1;o.shift()}return!0}function Wi(s,o,c){rs(s)&&c.delete(o)}function ku(){bl=!1,Qt!==null&&rs(Qt)&&(Qt=null),sr!==null&&rs(sr)&&(sr=null),ir!==null&&rs(ir)&&(ir=null),Fs.forEach(Wi),Wn.forEach(Wi)}function or(s,o){s.blockedOn===o&&(s.blockedOn=null,bl||(bl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ku)))}function ar(s){function o(g){return or(g,s)}if(0<Cr.length){or(Cr[0],s);for(var c=1;c<Cr.length;c++){var h=Cr[c];h.blockedOn===s&&(h.blockedOn=null)}}for(Qt!==null&&or(Qt,s),sr!==null&&or(sr,s),ir!==null&&or(ir,s),Fs.forEach(o),Wn.forEach(o),c=0;c<Nr.length;c++)h=Nr[c],h.blockedOn===s&&(h.blockedOn=null);for(;0<Nr.length&&(c=Nr[0],c.blockedOn===null);)Nu(c),c.blockedOn===null&&Nr.shift()}var ss=G.ReactCurrentBatchConfig,Us=!0;function mt(s,o,c,h){var g=We,y=ss.transition;ss.transition=null;try{We=1,Il(s,o,c,h)}finally{We=g,ss.transition=y}}function Mf(s,o,c,h){var g=We,y=ss.transition;ss.transition=null;try{We=4,Il(s,o,c,h)}finally{We=g,ss.transition=y}}function Il(s,o,c,h){if(Us){var g=qo(s,o,c,h);if(g===null)Gf(s,o,h,qi,c),Cu(s,h);else if(Df(g,s,o,c,h))h.stopPropagation();else if(Cu(s,h),o&4&&-1<Of.indexOf(s)){for(;g!==null;){var y=Fl(g);if(y!==null&&Eu(y),y=qo(s,o,c,h),y===null&&Gf(s,o,h,qi,c),y===g)break;g=y}g!==null&&h.stopPropagation()}else Gf(s,o,h,null,c)}}var qi=null;function qo(s,o,c,h){if(qi=null,s=Oo(h),s=Ki(s),s!==null)if(o=nr(s),o===null)s=null;else if(c=o.tag,c===13){if(s=Fi(o),s!==null)return s;s=null}else if(c===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return qi=s,null}function Cl(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_u()){case Ui:return 1;case js:return 4;case $n:case El:return 16;case yu:return 536870912;default:return 16}default:return 16}}var Dn=null,Ho=null,gn=null;function Nl(){if(gn)return gn;var s,o=Ho,c=o.length,h,g="value"in Dn?Dn.value:Dn.textContent,y=g.length;for(s=0;s<c&&o[s]===g[s];s++);var T=c-s;for(h=1;h<=T&&o[c-h]===g[y-h];h++);return gn=g.slice(s,1<h?1-h:void 0)}function Go(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function kr(){return!0}function kl(){return!1}function Yt(s){function o(c,h,g,y,T){this._reactName=c,this._targetInst=g,this.type=h,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var N in s)s.hasOwnProperty(N)&&(c=s[N],this[N]=c?c(y):y[N]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?kr:kl,this.isPropagationStopped=kl,this}return te(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=kr)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=kr)},persist:function(){},isPersistent:kr}),o}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ko=Yt(lr),Sr=te({},lr,{view:0,detail:0}),Lf=Yt(Sr),Qo,is,zs,Hi=te({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ar,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==zs&&(zs&&s.type==="mousemove"?(Qo=s.screenX-zs.screenX,is=s.screenY-zs.screenY):is=Qo=0,zs=s),Qo)},movementY:function(s){return"movementY"in s?s.movementY:is}}),Yo=Yt(Hi),Sl=te({},Hi,{dataTransfer:0}),Su=Yt(Sl),Xo=te({},Sr,{relatedTarget:0}),Jo=Yt(Xo),Au=te({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),os=Yt(Au),Ru=te({},lr,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Pu=Yt(Ru),ju=te({},lr,{data:0}),Al=Yt(ju),Zo={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ou={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Du(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Ou[s])?!!o[s]:!1}function Ar(){return Du}var u=te({},Sr,{key:function(s){if(s.key){var o=Zo[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=Go(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?hn[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ar,charCode:function(s){return s.type==="keypress"?Go(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Go(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),_=Yt(u),w=te({},Hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b=Yt(w),F=te({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ar}),q=Yt(F),ie=te({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),nt=Yt(ie),Rt=te({},Hi,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),Ke=Yt(Rt),Ut=[9,13,27,32],bt=f&&"CompositionEvent"in window,qn=null;f&&"documentMode"in document&&(qn=document.documentMode);var Mn=f&&"TextEvent"in window&&!qn,Gi=f&&(!bt||qn&&8<qn&&11>=qn),ea=" ",iy=!1;function oy(s,o){switch(s){case"keyup":return Ut.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ay(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var ta=!1;function SI(s,o){switch(s){case"compositionend":return ay(o);case"keypress":return o.which!==32?null:(iy=!0,ea);case"textInput":return s=o.data,s===ea&&iy?null:s;default:return null}}function AI(s,o){if(ta)return s==="compositionend"||!bt&&oy(s,o)?(s=Nl(),gn=Ho=Dn=null,ta=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return Gi&&o.locale!=="ko"?null:o.data;default:return null}}var RI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ly(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!RI[s.type]:o==="textarea"}function cy(s,o,c,h){Ir(h),o=Uu(o,"onChange"),0<o.length&&(c=new Ko("onChange","change",null,c,h),s.push({event:c,listeners:o}))}var Rl=null,Pl=null;function PI(s){Ny(s,0)}function Mu(s){var o=oa(s);if(Zn(o))return s}function jI(s,o){if(s==="change")return o}var uy=!1;if(f){var Vf;if(f){var Ff="oninput"in document;if(!Ff){var dy=document.createElement("div");dy.setAttribute("oninput","return;"),Ff=typeof dy.oninput=="function"}Vf=Ff}else Vf=!1;uy=Vf&&(!document.documentMode||9<document.documentMode)}function hy(){Rl&&(Rl.detachEvent("onpropertychange",fy),Pl=Rl=null)}function fy(s){if(s.propertyName==="value"&&Mu(Pl)){var o=[];cy(o,Pl,s,Oo(s)),yl(PI,o)}}function OI(s,o,c){s==="focusin"?(hy(),Rl=o,Pl=c,Rl.attachEvent("onpropertychange",fy)):s==="focusout"&&hy()}function DI(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Mu(Pl)}function MI(s,o){if(s==="click")return Mu(o)}function LI(s,o){if(s==="input"||s==="change")return Mu(o)}function VI(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var cr=typeof Object.is=="function"?Object.is:VI;function jl(s,o){if(cr(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var c=Object.keys(s),h=Object.keys(o);if(c.length!==h.length)return!1;for(h=0;h<c.length;h++){var g=c[h];if(!p.call(o,g)||!cr(s[g],o[g]))return!1}return!0}function py(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function my(s,o){var c=py(s);s=0;for(var h;c;){if(c.nodeType===3){if(h=s+c.textContent.length,s<=o&&h>=o)return{node:c,offset:o-s};s=h}e:{for(;c;){if(c.nextSibling){c=c.nextSibling;break e}c=c.parentNode}c=void 0}c=py(c)}}function gy(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?gy(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function _y(){for(var s=window,o=Rs();o instanceof s.HTMLIFrameElement;){try{var c=typeof o.contentWindow.location.href=="string"}catch{c=!1}if(c)s=o.contentWindow;else break;o=Rs(s.document)}return o}function Uf(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function FI(s){var o=_y(),c=s.focusedElem,h=s.selectionRange;if(o!==c&&c&&c.ownerDocument&&gy(c.ownerDocument.documentElement,c)){if(h!==null&&Uf(c)){if(o=h.start,s=h.end,s===void 0&&(s=o),"selectionStart"in c)c.selectionStart=o,c.selectionEnd=Math.min(s,c.value.length);else if(s=(o=c.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var g=c.textContent.length,y=Math.min(h.start,g);h=h.end===void 0?y:Math.min(h.end,g),!s.extend&&y>h&&(g=h,h=y,y=g),g=my(c,y);var T=my(c,h);g&&T&&(s.rangeCount!==1||s.anchorNode!==g.node||s.anchorOffset!==g.offset||s.focusNode!==T.node||s.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(g.node,g.offset),s.removeAllRanges(),y>h?(s.addRange(o),s.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),s.addRange(o)))}}for(o=[],s=c;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<o.length;c++)s=o[c],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var UI=f&&"documentMode"in document&&11>=document.documentMode,na=null,zf=null,Ol=null,Bf=!1;function yy(s,o,c){var h=c.window===c?c.document:c.nodeType===9?c:c.ownerDocument;Bf||na==null||na!==Rs(h)||(h=na,"selectionStart"in h&&Uf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ol&&jl(Ol,h)||(Ol=h,h=Uu(zf,"onSelect"),0<h.length&&(o=new Ko("onSelect","select",null,o,c),s.push({event:o,listeners:h}),o.target=na)))}function Lu(s,o){var c={};return c[s.toLowerCase()]=o.toLowerCase(),c["Webkit"+s]="webkit"+o,c["Moz"+s]="moz"+o,c}var ra={animationend:Lu("Animation","AnimationEnd"),animationiteration:Lu("Animation","AnimationIteration"),animationstart:Lu("Animation","AnimationStart"),transitionend:Lu("Transition","TransitionEnd")},$f={},vy={};f&&(vy=document.createElement("div").style,"AnimationEvent"in window||(delete ra.animationend.animation,delete ra.animationiteration.animation,delete ra.animationstart.animation),"TransitionEvent"in window||delete ra.transitionend.transition);function Vu(s){if($f[s])return $f[s];if(!ra[s])return s;var o=ra[s],c;for(c in o)if(o.hasOwnProperty(c)&&c in vy)return $f[s]=o[c];return s}var wy=Vu("animationend"),xy=Vu("animationiteration"),Ey=Vu("animationstart"),Ty=Vu("transitionend"),by=new Map,Iy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bs(s,o){by.set(s,o),a(o,[s])}for(var Wf=0;Wf<Iy.length;Wf++){var qf=Iy[Wf],zI=qf.toLowerCase(),BI=qf[0].toUpperCase()+qf.slice(1);Bs(zI,"on"+BI)}Bs(wy,"onAnimationEnd"),Bs(xy,"onAnimationIteration"),Bs(Ey,"onAnimationStart"),Bs("dblclick","onDoubleClick"),Bs("focusin","onFocus"),Bs("focusout","onBlur"),Bs(Ty,"onTransitionEnd"),l("onMouseEnter",["mouseout","mouseover"]),l("onMouseLeave",["mouseout","mouseover"]),l("onPointerEnter",["pointerout","pointerover"]),l("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Dl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$I=new Set("cancel close invalid load scroll toggle".split(" ").concat(Dl));function Cy(s,o,c){var h=s.type||"unknown-event";s.currentTarget=c,pu(h,o,void 0,s),s.currentTarget=null}function Ny(s,o){o=(o&4)!==0;for(var c=0;c<s.length;c++){var h=s[c],g=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var T=h.length-1;0<=T;T--){var N=h[T],j=N.instance,W=N.currentTarget;if(N=N.listener,j!==y&&g.isPropagationStopped())break e;Cy(g,N,W),y=j}else for(T=0;T<h.length;T++){if(N=h[T],j=N.instance,W=N.currentTarget,N=N.listener,j!==y&&g.isPropagationStopped())break e;Cy(g,N,W),y=j}}}if(tr)throw s=vl,tr=!1,vl=null,s}function ut(s,o){var c=o[Zf];c===void 0&&(c=o[Zf]=new Set);var h=s+"__bubble";c.has(h)||(ky(o,s,2,!1),c.add(h))}function Hf(s,o,c){var h=0;o&&(h|=4),ky(c,s,h,o)}var Fu="_reactListening"+Math.random().toString(36).slice(2);function Ml(s){if(!s[Fu]){s[Fu]=!0,r.forEach(function(c){c!=="selectionchange"&&($I.has(c)||Hf(c,!1,s),Hf(c,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[Fu]||(o[Fu]=!0,Hf("selectionchange",!1,o))}}function ky(s,o,c,h){switch(Cl(o)){case 1:var g=mt;break;case 4:g=Mf;break;default:g=Il}c=g.bind(null,o,c,s),g=void 0,!Lo||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(g=!0),h?g!==void 0?s.addEventListener(o,c,{capture:!0,passive:g}):s.addEventListener(o,c,!0):g!==void 0?s.addEventListener(o,c,{passive:g}):s.addEventListener(o,c,!1)}function Gf(s,o,c,h,g){var y=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===g||N.nodeType===8&&N.parentNode===g)break;if(T===4)for(T=h.return;T!==null;){var j=T.tag;if((j===3||j===4)&&(j=T.stateNode.containerInfo,j===g||j.nodeType===8&&j.parentNode===g))return;T=T.return}for(;N!==null;){if(T=Ki(N),T===null)return;if(j=T.tag,j===5||j===6){h=y=T;continue e}N=N.parentNode}}h=h.return}yl(function(){var W=y,J=Oo(c),Z=[];e:{var Y=by.get(s);if(Y!==void 0){var ue=Ko,ge=s;switch(s){case"keypress":if(Go(c)===0)break e;case"keydown":case"keyup":ue=_;break;case"focusin":ge="focus",ue=Jo;break;case"focusout":ge="blur",ue=Jo;break;case"beforeblur":case"afterblur":ue=Jo;break;case"click":if(c.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=Yo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=Su;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=q;break;case wy:case xy:case Ey:ue=os;break;case Ty:ue=nt;break;case"scroll":ue=Lf;break;case"wheel":ue=Ke;break;case"copy":case"cut":case"paste":ue=Pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=b}var ve=(o&4)!==0,Et=!ve&&s==="scroll",z=ve?Y!==null?Y+"Capture":null:Y;ve=[];for(var D=W,$;D!==null;){$=D;var ne=$.stateNode;if($.tag===5&&ne!==null&&($=ne,z!==null&&(ne=xt(D,z),ne!=null&&ve.push(Ll(D,ne,$)))),Et)break;D=D.return}0<ve.length&&(Y=new ue(Y,ge,null,c,J),Z.push({event:Y,listeners:ve}))}}if((o&7)===0){e:{if(Y=s==="mouseover"||s==="pointerover",ue=s==="mouseout"||s==="pointerout",Y&&c!==Di&&(ge=c.relatedTarget||c.fromElement)&&(Ki(ge)||ge[as]))break e;if((ue||Y)&&(Y=J.window===J?J:(Y=J.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(ge=c.relatedTarget||c.toElement,ue=W,ge=ge?Ki(ge):null,ge!==null&&(Et=nr(ge),ge!==Et||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(ue=null,ge=W),ue!==ge)){if(ve=Yo,ne="onMouseLeave",z="onMouseEnter",D="mouse",(s==="pointerout"||s==="pointerover")&&(ve=b,ne="onPointerLeave",z="onPointerEnter",D="pointer"),Et=ue==null?Y:oa(ue),$=ge==null?Y:oa(ge),Y=new ve(ne,D+"leave",ue,c,J),Y.target=Et,Y.relatedTarget=$,ne=null,Ki(J)===W&&(ve=new ve(z,D+"enter",ge,c,J),ve.target=$,ve.relatedTarget=Et,ne=ve),Et=ne,ue&&ge)t:{for(ve=ue,z=ge,D=0,$=ve;$;$=sa($))D++;for($=0,ne=z;ne;ne=sa(ne))$++;for(;0<D-$;)ve=sa(ve),D--;for(;0<$-D;)z=sa(z),$--;for(;D--;){if(ve===z||z!==null&&ve===z.alternate)break t;ve=sa(ve),z=sa(z)}ve=null}else ve=null;ue!==null&&Sy(Z,Y,ue,ve,!1),ge!==null&&Et!==null&&Sy(Z,Et,ge,ve,!0)}}e:{if(Y=W?oa(W):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var we=jI;else if(ly(Y))if(uy)we=LI;else{we=DI;var Ie=OI}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(we=MI);if(we&&(we=we(s,W))){cy(Z,we,c,J);break e}Ie&&Ie(s,Y,W),s==="focusout"&&(Ie=Y._wrapperState)&&Ie.controlled&&Y.type==="number"&&Ro(Y,"number",Y.value)}switch(Ie=W?oa(W):window,s){case"focusin":(ly(Ie)||Ie.contentEditable==="true")&&(na=Ie,zf=W,Ol=null);break;case"focusout":Ol=zf=na=null;break;case"mousedown":Bf=!0;break;case"contextmenu":case"mouseup":case"dragend":Bf=!1,yy(Z,c,J);break;case"selectionchange":if(UI)break;case"keydown":case"keyup":yy(Z,c,J)}var Ce;if(bt)e:{switch(s){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else ta?oy(s,c)&&(Ae="onCompositionEnd"):s==="keydown"&&c.keyCode===229&&(Ae="onCompositionStart");Ae&&(Gi&&c.locale!=="ko"&&(ta||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&ta&&(Ce=Nl()):(Dn=J,Ho="value"in Dn?Dn.value:Dn.textContent,ta=!0)),Ie=Uu(W,Ae),0<Ie.length&&(Ae=new Al(Ae,s,null,c,J),Z.push({event:Ae,listeners:Ie}),Ce?Ae.data=Ce:(Ce=ay(c),Ce!==null&&(Ae.data=Ce)))),(Ce=Mn?SI(s,c):AI(s,c))&&(W=Uu(W,"onBeforeInput"),0<W.length&&(J=new Al("onBeforeInput","beforeinput",null,c,J),Z.push({event:J,listeners:W}),J.data=Ce))}Ny(Z,o)})}function Ll(s,o,c){return{instance:s,listener:o,currentTarget:c}}function Uu(s,o){for(var c=o+"Capture",h=[];s!==null;){var g=s,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=xt(s,c),y!=null&&h.unshift(Ll(s,y,g)),y=xt(s,o),y!=null&&h.push(Ll(s,y,g))),s=s.return}return h}function sa(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function Sy(s,o,c,h,g){for(var y=o._reactName,T=[];c!==null&&c!==h;){var N=c,j=N.alternate,W=N.stateNode;if(j!==null&&j===h)break;N.tag===5&&W!==null&&(N=W,g?(j=xt(c,y),j!=null&&T.unshift(Ll(c,j,N))):g||(j=xt(c,y),j!=null&&T.push(Ll(c,j,N)))),c=c.return}T.length!==0&&s.push({event:o,listeners:T})}var WI=/\r\n?/g,qI=/\u0000|\uFFFD/g;function Ay(s){return(typeof s=="string"?s:""+s).replace(WI,`
`).replace(qI,"")}function zu(s,o,c){if(o=Ay(o),Ay(s)!==o&&c)throw Error(t(425))}function Bu(){}var Kf=null,Qf=null;function Yf(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,HI=typeof clearTimeout=="function"?clearTimeout:void 0,Ry=typeof Promise=="function"?Promise:void 0,GI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ry<"u"?function(s){return Ry.resolve(null).then(s).catch(KI)}:Xf;function KI(s){setTimeout(function(){throw s})}function Jf(s,o){var c=o,h=0;do{var g=c.nextSibling;if(s.removeChild(c),g&&g.nodeType===8)if(c=g.data,c==="/$"){if(h===0){s.removeChild(g),ar(o);return}h--}else c!=="$"&&c!=="$?"&&c!=="$!"||h++;c=g}while(c);ar(o)}function $s(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function Py(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var c=s.data;if(c==="$"||c==="$!"||c==="$?"){if(o===0)return s;o--}else c==="/$"&&o++}s=s.previousSibling}return null}var ia=Math.random().toString(36).slice(2),Rr="__reactFiber$"+ia,Vl="__reactProps$"+ia,as="__reactContainer$"+ia,Zf="__reactEvents$"+ia,QI="__reactListeners$"+ia,YI="__reactHandles$"+ia;function Ki(s){var o=s[Rr];if(o)return o;for(var c=s.parentNode;c;){if(o=c[as]||c[Rr]){if(c=o.alternate,o.child!==null||c!==null&&c.child!==null)for(s=Py(s);s!==null;){if(c=s[Rr])return c;s=Py(s)}return o}s=c,c=s.parentNode}return null}function Fl(s){return s=s[Rr]||s[as],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function oa(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function $u(s){return s[Vl]||null}var ep=[],aa=-1;function Ws(s){return{current:s}}function dt(s){0>aa||(s.current=ep[aa],ep[aa]=null,aa--)}function lt(s,o){aa++,ep[aa]=s.current,s.current=o}var qs={},tn=Ws(qs),_n=Ws(!1),Qi=qs;function la(s,o){var c=s.type.contextTypes;if(!c)return qs;var h=s.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in c)g[y]=o[y];return h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=g),g}function yn(s){return s=s.childContextTypes,s!=null}function Wu(){dt(_n),dt(tn)}function jy(s,o,c){if(tn.current!==qs)throw Error(t(168));lt(tn,o),lt(_n,c)}function Oy(s,o,c){var h=s.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return c;h=h.getChildContext();for(var g in h)if(!(g in o))throw Error(t(108,be(s)||"Unknown",g));return te({},c,h)}function qu(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||qs,Qi=tn.current,lt(tn,s),lt(_n,_n.current),!0}function Dy(s,o,c){var h=s.stateNode;if(!h)throw Error(t(169));c?(s=Oy(s,o,Qi),h.__reactInternalMemoizedMergedChildContext=s,dt(_n),dt(tn),lt(tn,s)):dt(_n),lt(_n,c)}var ls=null,Hu=!1,tp=!1;function My(s){ls===null?ls=[s]:ls.push(s)}function XI(s){Hu=!0,My(s)}function Hs(){if(!tp&&ls!==null){tp=!0;var s=0,o=We;try{var c=ls;for(We=1;s<c.length;s++){var h=c[s];do h=h(!0);while(h!==null)}ls=null,Hu=!1}catch(g){throw ls!==null&&(ls=ls.slice(s+1)),zo(Ui,Hs),g}finally{We=o,tp=!1}}return null}var ca=[],ua=0,Gu=null,Ku=0,Hn=[],Gn=0,Yi=null,cs=1,us="";function Xi(s,o){ca[ua++]=Ku,ca[ua++]=Gu,Gu=s,Ku=o}function Ly(s,o,c){Hn[Gn++]=cs,Hn[Gn++]=us,Hn[Gn++]=Yi,Yi=s;var h=cs;s=us;var g=32-dn(h)-1;h&=~(1<<g),c+=1;var y=32-dn(o)+g;if(30<y){var T=g-g%5;y=(h&(1<<T)-1).toString(32),h>>=T,g-=T,cs=1<<32-dn(o)+g|c<<g|h,us=y+s}else cs=1<<y|c<<g|h,us=s}function np(s){s.return!==null&&(Xi(s,1),Ly(s,1,0))}function rp(s){for(;s===Gu;)Gu=ca[--ua],ca[ua]=null,Ku=ca[--ua],ca[ua]=null;for(;s===Yi;)Yi=Hn[--Gn],Hn[Gn]=null,us=Hn[--Gn],Hn[Gn]=null,cs=Hn[--Gn],Hn[Gn]=null}var Ln=null,Vn=null,gt=!1,ur=null;function Vy(s,o){var c=Xn(5,null,null,0);c.elementType="DELETED",c.stateNode=o,c.return=s,o=s.deletions,o===null?(s.deletions=[c],s.flags|=16):o.push(c)}function Fy(s,o){switch(s.tag){case 5:var c=s.type;return o=o.nodeType!==1||c.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Ln=s,Vn=$s(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Ln=s,Vn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(c=Yi!==null?{id:cs,overflow:us}:null,s.memoizedState={dehydrated:o,treeContext:c,retryLane:1073741824},c=Xn(18,null,null,0),c.stateNode=o,c.return=s,s.child=c,Ln=s,Vn=null,!0):!1;default:return!1}}function sp(s){return(s.mode&1)!==0&&(s.flags&128)===0}function ip(s){if(gt){var o=Vn;if(o){var c=o;if(!Fy(s,o)){if(sp(s))throw Error(t(418));o=$s(c.nextSibling);var h=Ln;o&&Fy(s,o)?Vy(h,c):(s.flags=s.flags&-4097|2,gt=!1,Ln=s)}}else{if(sp(s))throw Error(t(418));s.flags=s.flags&-4097|2,gt=!1,Ln=s}}}function Uy(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Ln=s}function Qu(s){if(s!==Ln)return!1;if(!gt)return Uy(s),gt=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!Yf(s.type,s.memoizedProps)),o&&(o=Vn)){if(sp(s))throw zy(),Error(t(418));for(;o;)Vy(s,o),o=$s(o.nextSibling)}if(Uy(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var c=s.data;if(c==="/$"){if(o===0){Vn=$s(s.nextSibling);break e}o--}else c!=="$"&&c!=="$!"&&c!=="$?"||o++}s=s.nextSibling}Vn=null}}else Vn=Ln?$s(s.stateNode.nextSibling):null;return!0}function zy(){for(var s=Vn;s;)s=$s(s.nextSibling)}function da(){Vn=Ln=null,gt=!1}function op(s){ur===null?ur=[s]:ur.push(s)}var JI=G.ReactCurrentBatchConfig;function Ul(s,o,c){if(s=c.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(c._owner){if(c=c._owner,c){if(c.tag!==1)throw Error(t(309));var h=c.stateNode}if(!h)throw Error(t(147,s));var g=h,y=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(T){var N=g.refs;T===null?delete N[y]:N[y]=T},o._stringRef=y,o)}if(typeof s!="string")throw Error(t(284));if(!c._owner)throw Error(t(290,s))}return s}function Yu(s,o){throw s=Object.prototype.toString.call(o),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function By(s){var o=s._init;return o(s._payload)}function $y(s){function o(z,D){if(s){var $=z.deletions;$===null?(z.deletions=[D],z.flags|=16):$.push(D)}}function c(z,D){if(!s)return null;for(;D!==null;)o(z,D),D=D.sibling;return null}function h(z,D){for(z=new Map;D!==null;)D.key!==null?z.set(D.key,D):z.set(D.index,D),D=D.sibling;return z}function g(z,D){return z=ei(z,D),z.index=0,z.sibling=null,z}function y(z,D,$){return z.index=$,s?($=z.alternate,$!==null?($=$.index,$<D?(z.flags|=2,D):$):(z.flags|=2,D)):(z.flags|=1048576,D)}function T(z){return s&&z.alternate===null&&(z.flags|=2),z}function N(z,D,$,ne){return D===null||D.tag!==6?(D=Xp($,z.mode,ne),D.return=z,D):(D=g(D,$),D.return=z,D)}function j(z,D,$,ne){var we=$.type;return we===O?J(z,D,$.props.children,ne,$.key):D!==null&&(D.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ge&&By(we)===D.type)?(ne=g(D,$.props),ne.ref=Ul(z,D,$),ne.return=z,ne):(ne=wd($.type,$.key,$.props,null,z.mode,ne),ne.ref=Ul(z,D,$),ne.return=z,ne)}function W(z,D,$,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==$.containerInfo||D.stateNode.implementation!==$.implementation?(D=Jp($,z.mode,ne),D.return=z,D):(D=g(D,$.children||[]),D.return=z,D)}function J(z,D,$,ne,we){return D===null||D.tag!==7?(D=io($,z.mode,ne,we),D.return=z,D):(D=g(D,$),D.return=z,D)}function Z(z,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Xp(""+D,z.mode,$),D.return=z,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case ce:return $=wd(D.type,D.key,D.props,null,z.mode,$),$.ref=Ul(z,null,D),$.return=z,$;case me:return D=Jp(D,z.mode,$),D.return=z,D;case Ge:var ne=D._init;return Z(z,ne(D._payload),$)}if(Jr(D)||le(D))return D=io(D,z.mode,$,null),D.return=z,D;Yu(z,D)}return null}function Y(z,D,$,ne){var we=D!==null?D.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return we!==null?null:N(z,D,""+$,ne);if(typeof $=="object"&&$!==null){switch($.$$typeof){case ce:return $.key===we?j(z,D,$,ne):null;case me:return $.key===we?W(z,D,$,ne):null;case Ge:return we=$._init,Y(z,D,we($._payload),ne)}if(Jr($)||le($))return we!==null?null:J(z,D,$,ne,null);Yu(z,$)}return null}function ue(z,D,$,ne,we){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return z=z.get($)||null,N(D,z,""+ne,we);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case ce:return z=z.get(ne.key===null?$:ne.key)||null,j(D,z,ne,we);case me:return z=z.get(ne.key===null?$:ne.key)||null,W(D,z,ne,we);case Ge:var Ie=ne._init;return ue(z,D,$,Ie(ne._payload),we)}if(Jr(ne)||le(ne))return z=z.get($)||null,J(D,z,ne,we,null);Yu(D,ne)}return null}function ge(z,D,$,ne){for(var we=null,Ie=null,Ce=D,Ae=D=0,$t=null;Ce!==null&&Ae<$.length;Ae++){Ce.index>Ae?($t=Ce,Ce=null):$t=Ce.sibling;var Je=Y(z,Ce,$[Ae],ne);if(Je===null){Ce===null&&(Ce=$t);break}s&&Ce&&Je.alternate===null&&o(z,Ce),D=y(Je,D,Ae),Ie===null?we=Je:Ie.sibling=Je,Ie=Je,Ce=$t}if(Ae===$.length)return c(z,Ce),gt&&Xi(z,Ae),we;if(Ce===null){for(;Ae<$.length;Ae++)Ce=Z(z,$[Ae],ne),Ce!==null&&(D=y(Ce,D,Ae),Ie===null?we=Ce:Ie.sibling=Ce,Ie=Ce);return gt&&Xi(z,Ae),we}for(Ce=h(z,Ce);Ae<$.length;Ae++)$t=ue(Ce,z,Ae,$[Ae],ne),$t!==null&&(s&&$t.alternate!==null&&Ce.delete($t.key===null?Ae:$t.key),D=y($t,D,Ae),Ie===null?we=$t:Ie.sibling=$t,Ie=$t);return s&&Ce.forEach(function(ti){return o(z,ti)}),gt&&Xi(z,Ae),we}function ve(z,D,$,ne){var we=le($);if(typeof we!="function")throw Error(t(150));if($=we.call($),$==null)throw Error(t(151));for(var Ie=we=null,Ce=D,Ae=D=0,$t=null,Je=$.next();Ce!==null&&!Je.done;Ae++,Je=$.next()){Ce.index>Ae?($t=Ce,Ce=null):$t=Ce.sibling;var ti=Y(z,Ce,Je.value,ne);if(ti===null){Ce===null&&(Ce=$t);break}s&&Ce&&ti.alternate===null&&o(z,Ce),D=y(ti,D,Ae),Ie===null?we=ti:Ie.sibling=ti,Ie=ti,Ce=$t}if(Je.done)return c(z,Ce),gt&&Xi(z,Ae),we;if(Ce===null){for(;!Je.done;Ae++,Je=$.next())Je=Z(z,Je.value,ne),Je!==null&&(D=y(Je,D,Ae),Ie===null?we=Je:Ie.sibling=Je,Ie=Je);return gt&&Xi(z,Ae),we}for(Ce=h(z,Ce);!Je.done;Ae++,Je=$.next())Je=ue(Ce,z,Ae,Je.value,ne),Je!==null&&(s&&Je.alternate!==null&&Ce.delete(Je.key===null?Ae:Je.key),D=y(Je,D,Ae),Ie===null?we=Je:Ie.sibling=Je,Ie=Je);return s&&Ce.forEach(function(RC){return o(z,RC)}),gt&&Xi(z,Ae),we}function Et(z,D,$,ne){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case ce:e:{for(var we=$.key,Ie=D;Ie!==null;){if(Ie.key===we){if(we=$.type,we===O){if(Ie.tag===7){c(z,Ie.sibling),D=g(Ie,$.props.children),D.return=z,z=D;break e}}else if(Ie.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Ge&&By(we)===Ie.type){c(z,Ie.sibling),D=g(Ie,$.props),D.ref=Ul(z,Ie,$),D.return=z,z=D;break e}c(z,Ie);break}else o(z,Ie);Ie=Ie.sibling}$.type===O?(D=io($.props.children,z.mode,ne,$.key),D.return=z,z=D):(ne=wd($.type,$.key,$.props,null,z.mode,ne),ne.ref=Ul(z,D,$),ne.return=z,z=ne)}return T(z);case me:e:{for(Ie=$.key;D!==null;){if(D.key===Ie)if(D.tag===4&&D.stateNode.containerInfo===$.containerInfo&&D.stateNode.implementation===$.implementation){c(z,D.sibling),D=g(D,$.children||[]),D.return=z,z=D;break e}else{c(z,D);break}else o(z,D);D=D.sibling}D=Jp($,z.mode,ne),D.return=z,z=D}return T(z);case Ge:return Ie=$._init,Et(z,D,Ie($._payload),ne)}if(Jr($))return ge(z,D,$,ne);if(le($))return ve(z,D,$,ne);Yu(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,D!==null&&D.tag===6?(c(z,D.sibling),D=g(D,$),D.return=z,z=D):(c(z,D),D=Xp($,z.mode,ne),D.return=z,z=D),T(z)):c(z,D)}return Et}var ha=$y(!0),Wy=$y(!1),Xu=Ws(null),Ju=null,fa=null,ap=null;function lp(){ap=fa=Ju=null}function cp(s){var o=Xu.current;dt(Xu),s._currentValue=o}function up(s,o,c){for(;s!==null;){var h=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),s===c)break;s=s.return}}function pa(s,o){Ju=s,ap=fa=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&o)!==0&&(vn=!0),s.firstContext=null)}function Kn(s){var o=s._currentValue;if(ap!==s)if(s={context:s,memoizedValue:o,next:null},fa===null){if(Ju===null)throw Error(t(308));fa=s,Ju.dependencies={lanes:0,firstContext:s}}else fa=fa.next=s;return o}var Ji=null;function dp(s){Ji===null?Ji=[s]:Ji.push(s)}function qy(s,o,c,h){var g=o.interleaved;return g===null?(c.next=c,dp(o)):(c.next=g.next,g.next=c),o.interleaved=c,ds(s,h)}function ds(s,o){s.lanes|=o;var c=s.alternate;for(c!==null&&(c.lanes|=o),c=s,s=s.return;s!==null;)s.childLanes|=o,c=s.alternate,c!==null&&(c.childLanes|=o),c=s,s=s.return;return c.tag===3?c.stateNode:null}var Gs=!1;function hp(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hy(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function hs(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function Ks(s,o,c){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,(Xe&2)!==0){var g=h.pending;return g===null?o.next=o:(o.next=g.next,g.next=o),h.pending=o,ds(s,c)}return g=h.interleaved,g===null?(o.next=o,dp(h)):(o.next=g.next,g.next=o),h.interleaved=o,ds(s,c)}function Zu(s,o,c){if(o=o.updateQueue,o!==null&&(o=o.shared,(c&4194240)!==0)){var h=o.lanes;h&=s.pendingLanes,c|=h,o.lanes=c,Ls(s,c)}}function Gy(s,o){var c=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,c===h)){var g=null,y=null;if(c=c.firstBaseUpdate,c!==null){do{var T={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};y===null?g=y=T:y=y.next=T,c=c.next}while(c!==null);y===null?g=y=o:y=y.next=o}else g=y=o;c={baseState:h.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:h.shared,effects:h.effects},s.updateQueue=c;return}s=c.lastBaseUpdate,s===null?c.firstBaseUpdate=o:s.next=o,c.lastBaseUpdate=o}function ed(s,o,c,h){var g=s.updateQueue;Gs=!1;var y=g.firstBaseUpdate,T=g.lastBaseUpdate,N=g.shared.pending;if(N!==null){g.shared.pending=null;var j=N,W=j.next;j.next=null,T===null?y=W:T.next=W,T=j;var J=s.alternate;J!==null&&(J=J.updateQueue,N=J.lastBaseUpdate,N!==T&&(N===null?J.firstBaseUpdate=W:N.next=W,J.lastBaseUpdate=j))}if(y!==null){var Z=g.baseState;T=0,J=W=j=null,N=y;do{var Y=N.lane,ue=N.eventTime;if((h&Y)===Y){J!==null&&(J=J.next={eventTime:ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ge=s,ve=N;switch(Y=o,ue=c,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){Z=ge.call(ue,Z,Y);break e}Z=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,Y=typeof ge=="function"?ge.call(ue,Z,Y):ge,Y==null)break e;Z=te({},Z,Y);break e;case 2:Gs=!0}}N.callback!==null&&N.lane!==0&&(s.flags|=64,Y=g.effects,Y===null?g.effects=[N]:Y.push(N))}else ue={eventTime:ue,lane:Y,tag:N.tag,payload:N.payload,callback:N.callback,next:null},J===null?(W=J=ue,j=Z):J=J.next=ue,T|=Y;if(N=N.next,N===null){if(N=g.shared.pending,N===null)break;Y=N,N=Y.next,Y.next=null,g.lastBaseUpdate=Y,g.shared.pending=null}}while(!0);if(J===null&&(j=Z),g.baseState=j,g.firstBaseUpdate=W,g.lastBaseUpdate=J,o=g.shared.interleaved,o!==null){g=o;do T|=g.lane,g=g.next;while(g!==o)}else y===null&&(g.shared.lanes=0);to|=T,s.lanes=T,s.memoizedState=Z}}function Ky(s,o,c){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var h=s[o],g=h.callback;if(g!==null){if(h.callback=null,h=c,typeof g!="function")throw Error(t(191,g));g.call(h)}}}var zl={},Pr=Ws(zl),Bl=Ws(zl),$l=Ws(zl);function Zi(s){if(s===zl)throw Error(t(174));return s}function fp(s,o){switch(lt($l,o),lt(Bl,s),lt(Pr,zl),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:At(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=At(o,s)}dt(Pr),lt(Pr,o)}function ma(){dt(Pr),dt(Bl),dt($l)}function Qy(s){Zi($l.current);var o=Zi(Pr.current),c=At(o,s.type);o!==c&&(lt(Bl,s),lt(Pr,c))}function pp(s){Bl.current===s&&(dt(Pr),dt(Bl))}var _t=Ws(0);function td(s){for(var o=s;o!==null;){if(o.tag===13){var c=o.memoizedState;if(c!==null&&(c=c.dehydrated,c===null||c.data==="$?"||c.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var mp=[];function gp(){for(var s=0;s<mp.length;s++)mp[s]._workInProgressVersionPrimary=null;mp.length=0}var nd=G.ReactCurrentDispatcher,_p=G.ReactCurrentBatchConfig,eo=0,yt=null,Pt=null,zt=null,rd=!1,Wl=!1,ql=0,ZI=0;function nn(){throw Error(t(321))}function yp(s,o){if(o===null)return!1;for(var c=0;c<o.length&&c<s.length;c++)if(!cr(s[c],o[c]))return!1;return!0}function vp(s,o,c,h,g,y){if(eo=y,yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,nd.current=s===null||s.memoizedState===null?rC:sC,s=c(h,g),Wl){y=0;do{if(Wl=!1,ql=0,25<=y)throw Error(t(301));y+=1,zt=Pt=null,o.updateQueue=null,nd.current=iC,s=c(h,g)}while(Wl)}if(nd.current=od,o=Pt!==null&&Pt.next!==null,eo=0,zt=Pt=yt=null,rd=!1,o)throw Error(t(300));return s}function wp(){var s=ql!==0;return ql=0,s}function jr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?yt.memoizedState=zt=s:zt=zt.next=s,zt}function Qn(){if(Pt===null){var s=yt.alternate;s=s!==null?s.memoizedState:null}else s=Pt.next;var o=zt===null?yt.memoizedState:zt.next;if(o!==null)zt=o,Pt=s;else{if(s===null)throw Error(t(310));Pt=s,s={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},zt===null?yt.memoizedState=zt=s:zt=zt.next=s}return zt}function Hl(s,o){return typeof o=="function"?o(s):o}function xp(s){var o=Qn(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=s;var h=Pt,g=h.baseQueue,y=c.pending;if(y!==null){if(g!==null){var T=g.next;g.next=y.next,y.next=T}h.baseQueue=g=y,c.pending=null}if(g!==null){y=g.next,h=h.baseState;var N=T=null,j=null,W=y;do{var J=W.lane;if((eo&J)===J)j!==null&&(j=j.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:s(h,W.action);else{var Z={lane:J,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};j===null?(N=j=Z,T=h):j=j.next=Z,yt.lanes|=J,to|=J}W=W.next}while(W!==null&&W!==y);j===null?T=h:j.next=N,cr(h,o.memoizedState)||(vn=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=j,c.lastRenderedState=h}if(s=c.interleaved,s!==null){g=s;do y=g.lane,yt.lanes|=y,to|=y,g=g.next;while(g!==s)}else g===null&&(c.lanes=0);return[o.memoizedState,c.dispatch]}function Ep(s){var o=Qn(),c=o.queue;if(c===null)throw Error(t(311));c.lastRenderedReducer=s;var h=c.dispatch,g=c.pending,y=o.memoizedState;if(g!==null){c.pending=null;var T=g=g.next;do y=s(y,T.action),T=T.next;while(T!==g);cr(y,o.memoizedState)||(vn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),c.lastRenderedState=y}return[y,h]}function Yy(){}function Xy(s,o){var c=yt,h=Qn(),g=o(),y=!cr(h.memoizedState,g);if(y&&(h.memoizedState=g,vn=!0),h=h.queue,Tp(ev.bind(null,c,h,s),[s]),h.getSnapshot!==o||y||zt!==null&&zt.memoizedState.tag&1){if(c.flags|=2048,Gl(9,Zy.bind(null,c,h,g,o),void 0,null),Bt===null)throw Error(t(349));(eo&30)!==0||Jy(c,o,g)}return g}function Jy(s,o,c){s.flags|=16384,s={getSnapshot:o,value:c},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.stores=[s]):(c=o.stores,c===null?o.stores=[s]:c.push(s))}function Zy(s,o,c,h){o.value=c,o.getSnapshot=h,tv(o)&&nv(s)}function ev(s,o,c){return c(function(){tv(o)&&nv(s)})}function tv(s){var o=s.getSnapshot;s=s.value;try{var c=o();return!cr(s,c)}catch{return!0}}function nv(s){var o=ds(s,1);o!==null&&pr(o,s,1,-1)}function rv(s){var o=jr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Hl,lastRenderedState:s},o.queue=s,s=s.dispatch=nC.bind(null,yt,s),[o.memoizedState,s]}function Gl(s,o,c,h){return s={tag:s,create:o,destroy:c,deps:h,next:null},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.lastEffect=s.next=s):(c=o.lastEffect,c===null?o.lastEffect=s.next=s:(h=c.next,c.next=s,s.next=h,o.lastEffect=s)),s}function sv(){return Qn().memoizedState}function sd(s,o,c,h){var g=jr();yt.flags|=s,g.memoizedState=Gl(1|o,c,void 0,h===void 0?null:h)}function id(s,o,c,h){var g=Qn();h=h===void 0?null:h;var y=void 0;if(Pt!==null){var T=Pt.memoizedState;if(y=T.destroy,h!==null&&yp(h,T.deps)){g.memoizedState=Gl(o,c,y,h);return}}yt.flags|=s,g.memoizedState=Gl(1|o,c,y,h)}function iv(s,o){return sd(8390656,8,s,o)}function Tp(s,o){return id(2048,8,s,o)}function ov(s,o){return id(4,2,s,o)}function av(s,o){return id(4,4,s,o)}function lv(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function cv(s,o,c){return c=c!=null?c.concat([s]):null,id(4,4,lv.bind(null,o,s),c)}function bp(){}function uv(s,o){var c=Qn();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&yp(o,h[1])?h[0]:(c.memoizedState=[s,o],s)}function dv(s,o){var c=Qn();o=o===void 0?null:o;var h=c.memoizedState;return h!==null&&o!==null&&yp(o,h[1])?h[0]:(s=s(),c.memoizedState=[s,o],s)}function hv(s,o,c){return(eo&21)===0?(s.baseState&&(s.baseState=!1,vn=!0),s.memoizedState=c):(cr(c,o)||(c=$i(),yt.lanes|=c,to|=c,s.baseState=!0),o)}function eC(s,o){var c=We;We=c!==0&&4>c?c:4,s(!0);var h=_p.transition;_p.transition={};try{s(!1),o()}finally{We=c,_p.transition=h}}function fv(){return Qn().memoizedState}function tC(s,o,c){var h=Js(s);if(c={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null},pv(s))mv(o,c);else if(c=qy(s,o,c,h),c!==null){var g=pn();pr(c,s,h,g),gv(c,o,h)}}function nC(s,o,c){var h=Js(s),g={lane:h,action:c,hasEagerState:!1,eagerState:null,next:null};if(pv(s))mv(o,g);else{var y=s.alternate;if(s.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var T=o.lastRenderedState,N=y(T,c);if(g.hasEagerState=!0,g.eagerState=N,cr(N,T)){var j=o.interleaved;j===null?(g.next=g,dp(o)):(g.next=j.next,j.next=g),o.interleaved=g;return}}catch{}finally{}c=qy(s,o,g,h),c!==null&&(g=pn(),pr(c,s,h,g),gv(c,o,h))}}function pv(s){var o=s.alternate;return s===yt||o!==null&&o===yt}function mv(s,o){Wl=rd=!0;var c=s.pending;c===null?o.next=o:(o.next=c.next,c.next=o),s.pending=o}function gv(s,o,c){if((c&4194240)!==0){var h=o.lanes;h&=s.pendingLanes,c|=h,o.lanes=c,Ls(s,c)}}var od={readContext:Kn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},rC={readContext:Kn,useCallback:function(s,o){return jr().memoizedState=[s,o===void 0?null:o],s},useContext:Kn,useEffect:iv,useImperativeHandle:function(s,o,c){return c=c!=null?c.concat([s]):null,sd(4194308,4,lv.bind(null,o,s),c)},useLayoutEffect:function(s,o){return sd(4194308,4,s,o)},useInsertionEffect:function(s,o){return sd(4,2,s,o)},useMemo:function(s,o){var c=jr();return o=o===void 0?null:o,s=s(),c.memoizedState=[s,o],s},useReducer:function(s,o,c){var h=jr();return o=c!==void 0?c(o):o,h.memoizedState=h.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},h.queue=s,s=s.dispatch=tC.bind(null,yt,s),[h.memoizedState,s]},useRef:function(s){var o=jr();return s={current:s},o.memoizedState=s},useState:rv,useDebugValue:bp,useDeferredValue:function(s){return jr().memoizedState=s},useTransition:function(){var s=rv(!1),o=s[0];return s=eC.bind(null,s[1]),jr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,c){var h=yt,g=jr();if(gt){if(c===void 0)throw Error(t(407));c=c()}else{if(c=o(),Bt===null)throw Error(t(349));(eo&30)!==0||Jy(h,o,c)}g.memoizedState=c;var y={value:c,getSnapshot:o};return g.queue=y,iv(ev.bind(null,h,y,s),[s]),h.flags|=2048,Gl(9,Zy.bind(null,h,y,c,o),void 0,null),c},useId:function(){var s=jr(),o=Bt.identifierPrefix;if(gt){var c=us,h=cs;c=(h&~(1<<32-dn(h)-1)).toString(32)+c,o=":"+o+"R"+c,c=ql++,0<c&&(o+="H"+c.toString(32)),o+=":"}else c=ZI++,o=":"+o+"r"+c.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},sC={readContext:Kn,useCallback:uv,useContext:Kn,useEffect:Tp,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:dv,useReducer:xp,useRef:sv,useState:function(){return xp(Hl)},useDebugValue:bp,useDeferredValue:function(s){var o=Qn();return hv(o,Pt.memoizedState,s)},useTransition:function(){var s=xp(Hl)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:Yy,useSyncExternalStore:Xy,useId:fv,unstable_isNewReconciler:!1},iC={readContext:Kn,useCallback:uv,useContext:Kn,useEffect:Tp,useImperativeHandle:cv,useInsertionEffect:ov,useLayoutEffect:av,useMemo:dv,useReducer:Ep,useRef:sv,useState:function(){return Ep(Hl)},useDebugValue:bp,useDeferredValue:function(s){var o=Qn();return Pt===null?o.memoizedState=s:hv(o,Pt.memoizedState,s)},useTransition:function(){var s=Ep(Hl)[0],o=Qn().memoizedState;return[s,o]},useMutableSource:Yy,useSyncExternalStore:Xy,useId:fv,unstable_isNewReconciler:!1};function dr(s,o){if(s&&s.defaultProps){o=te({},o),s=s.defaultProps;for(var c in s)o[c]===void 0&&(o[c]=s[c]);return o}return o}function Ip(s,o,c,h){o=s.memoizedState,c=c(h,o),c=c==null?o:te({},o,c),s.memoizedState=c,s.lanes===0&&(s.updateQueue.baseState=c)}var ad={isMounted:function(s){return(s=s._reactInternals)?nr(s)===s:!1},enqueueSetState:function(s,o,c){s=s._reactInternals;var h=pn(),g=Js(s),y=hs(h,g);y.payload=o,c!=null&&(y.callback=c),o=Ks(s,y,g),o!==null&&(pr(o,s,g,h),Zu(o,s,g))},enqueueReplaceState:function(s,o,c){s=s._reactInternals;var h=pn(),g=Js(s),y=hs(h,g);y.tag=1,y.payload=o,c!=null&&(y.callback=c),o=Ks(s,y,g),o!==null&&(pr(o,s,g,h),Zu(o,s,g))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var c=pn(),h=Js(s),g=hs(c,h);g.tag=2,o!=null&&(g.callback=o),o=Ks(s,g,h),o!==null&&(pr(o,s,h,c),Zu(o,s,h))}};function _v(s,o,c,h,g,y,T){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,y,T):o.prototype&&o.prototype.isPureReactComponent?!jl(c,h)||!jl(g,y):!0}function yv(s,o,c){var h=!1,g=qs,y=o.contextType;return typeof y=="object"&&y!==null?y=Kn(y):(g=yn(o)?Qi:tn.current,h=o.contextTypes,y=(h=h!=null)?la(s,g):qs),o=new o(c,y),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=ad,s.stateNode=o,o._reactInternals=s,h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=g,s.__reactInternalMemoizedMaskedChildContext=y),o}function vv(s,o,c,h){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(c,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(c,h),o.state!==s&&ad.enqueueReplaceState(o,o.state,null)}function Cp(s,o,c,h){var g=s.stateNode;g.props=c,g.state=s.memoizedState,g.refs={},hp(s);var y=o.contextType;typeof y=="object"&&y!==null?g.context=Kn(y):(y=yn(o)?Qi:tn.current,g.context=la(s,y)),g.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(Ip(s,o,y,c),g.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(o=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),o!==g.state&&ad.enqueueReplaceState(g,g.state,null),ed(s,c,g,h),g.state=s.memoizedState),typeof g.componentDidMount=="function"&&(s.flags|=4194308)}function ga(s,o){try{var c="",h=o;do c+=fe(h),h=h.return;while(h);var g=c}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:s,source:o,stack:g,digest:null}}function Np(s,o,c){return{value:s,source:null,stack:c??null,digest:o??null}}function kp(s,o){try{console.error(o.value)}catch(c){setTimeout(function(){throw c})}}var oC=typeof WeakMap=="function"?WeakMap:Map;function wv(s,o,c){c=hs(-1,c),c.tag=3,c.payload={element:null};var h=o.value;return c.callback=function(){pd||(pd=!0,$p=h),kp(s,o)},c}function xv(s,o,c){c=hs(-1,c),c.tag=3;var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var g=o.value;c.payload=function(){return h(g)},c.callback=function(){kp(s,o)}}var y=s.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(c.callback=function(){kp(s,o),typeof h!="function"&&(Ys===null?Ys=new Set([this]):Ys.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),c}function Ev(s,o,c){var h=s.pingCache;if(h===null){h=s.pingCache=new oC;var g=new Set;h.set(o,g)}else g=h.get(o),g===void 0&&(g=new Set,h.set(o,g));g.has(c)||(g.add(c),s=wC.bind(null,s,o,c),o.then(s,s))}function Tv(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function bv(s,o,c,h,g){return(s.mode&1)===0?(s===o?s.flags|=65536:(s.flags|=128,c.flags|=131072,c.flags&=-52805,c.tag===1&&(c.alternate===null?c.tag=17:(o=hs(-1,1),o.tag=2,Ks(c,o,1))),c.lanes|=1),s):(s.flags|=65536,s.lanes=g,s)}var aC=G.ReactCurrentOwner,vn=!1;function fn(s,o,c,h){o.child=s===null?Wy(o,null,c,h):ha(o,s.child,c,h)}function Iv(s,o,c,h,g){c=c.render;var y=o.ref;return pa(o,g),h=vp(s,o,c,h,y,g),c=wp(),s!==null&&!vn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,fs(s,o,g)):(gt&&c&&np(o),o.flags|=1,fn(s,o,h,g),o.child)}function Cv(s,o,c,h,g){if(s===null){var y=c.type;return typeof y=="function"&&!Yp(y)&&y.defaultProps===void 0&&c.compare===null&&c.defaultProps===void 0?(o.tag=15,o.type=y,Nv(s,o,y,h,g)):(s=wd(c.type,null,h,o,o.mode,g),s.ref=o.ref,s.return=o,o.child=s)}if(y=s.child,(s.lanes&g)===0){var T=y.memoizedProps;if(c=c.compare,c=c!==null?c:jl,c(T,h)&&s.ref===o.ref)return fs(s,o,g)}return o.flags|=1,s=ei(y,h),s.ref=o.ref,s.return=o,o.child=s}function Nv(s,o,c,h,g){if(s!==null){var y=s.memoizedProps;if(jl(y,h)&&s.ref===o.ref)if(vn=!1,o.pendingProps=h=y,(s.lanes&g)!==0)(s.flags&131072)!==0&&(vn=!0);else return o.lanes=s.lanes,fs(s,o,g)}return Sp(s,o,c,h,g)}function kv(s,o,c){var h=o.pendingProps,g=h.children,y=s!==null?s.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(ya,Fn),Fn|=c;else{if((c&1073741824)===0)return s=y!==null?y.baseLanes|c:c,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,lt(ya,Fn),Fn|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:c,lt(ya,Fn),Fn|=h}else y!==null?(h=y.baseLanes|c,o.memoizedState=null):h=c,lt(ya,Fn),Fn|=h;return fn(s,o,g,c),o.child}function Sv(s,o){var c=o.ref;(s===null&&c!==null||s!==null&&s.ref!==c)&&(o.flags|=512,o.flags|=2097152)}function Sp(s,o,c,h,g){var y=yn(c)?Qi:tn.current;return y=la(o,y),pa(o,g),c=vp(s,o,c,h,y,g),h=wp(),s!==null&&!vn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~g,fs(s,o,g)):(gt&&h&&np(o),o.flags|=1,fn(s,o,c,g),o.child)}function Av(s,o,c,h,g){if(yn(c)){var y=!0;qu(o)}else y=!1;if(pa(o,g),o.stateNode===null)cd(s,o),yv(o,c,h),Cp(o,c,h,g),h=!0;else if(s===null){var T=o.stateNode,N=o.memoizedProps;T.props=N;var j=T.context,W=c.contextType;typeof W=="object"&&W!==null?W=Kn(W):(W=yn(c)?Qi:tn.current,W=la(o,W));var J=c.getDerivedStateFromProps,Z=typeof J=="function"||typeof T.getSnapshotBeforeUpdate=="function";Z||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||j!==W)&&vv(o,T,h,W),Gs=!1;var Y=o.memoizedState;T.state=Y,ed(o,h,T,g),j=o.memoizedState,N!==h||Y!==j||_n.current||Gs?(typeof J=="function"&&(Ip(o,c,J,h),j=o.memoizedState),(N=Gs||_v(o,c,N,h,Y,j,W))?(Z||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=j),T.props=h,T.state=j,T.context=W,h=N):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Hy(s,o),N=o.memoizedProps,W=o.type===o.elementType?N:dr(o.type,N),T.props=W,Z=o.pendingProps,Y=T.context,j=c.contextType,typeof j=="object"&&j!==null?j=Kn(j):(j=yn(c)?Qi:tn.current,j=la(o,j));var ue=c.getDerivedStateFromProps;(J=typeof ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==Z||Y!==j)&&vv(o,T,h,j),Gs=!1,Y=o.memoizedState,T.state=Y,ed(o,h,T,g);var ge=o.memoizedState;N!==Z||Y!==ge||_n.current||Gs?(typeof ue=="function"&&(Ip(o,c,ue,h),ge=o.memoizedState),(W=Gs||_v(o,c,W,h,Y,ge,j)||!1)?(J||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,ge,j),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,ge,j)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ge),T.props=h,T.state=ge,T.context=j,h=W):(typeof T.componentDidUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=1024),h=!1)}return Ap(s,o,c,h,y,g)}function Ap(s,o,c,h,g,y){Sv(s,o);var T=(o.flags&128)!==0;if(!h&&!T)return g&&Dy(o,c,!1),fs(s,o,y);h=o.stateNode,aC.current=o;var N=T&&typeof c.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,s!==null&&T?(o.child=ha(o,s.child,null,y),o.child=ha(o,null,N,y)):fn(s,o,N,y),o.memoizedState=h.state,g&&Dy(o,c,!0),o.child}function Rv(s){var o=s.stateNode;o.pendingContext?jy(s,o.pendingContext,o.pendingContext!==o.context):o.context&&jy(s,o.context,!1),fp(s,o.containerInfo)}function Pv(s,o,c,h,g){return da(),op(g),o.flags|=256,fn(s,o,c,h),o.child}var Rp={dehydrated:null,treeContext:null,retryLane:0};function Pp(s){return{baseLanes:s,cachePool:null,transitions:null}}function jv(s,o,c){var h=o.pendingProps,g=_t.current,y=!1,T=(o.flags&128)!==0,N;if((N=T)||(N=s!==null&&s.memoizedState===null?!1:(g&2)!==0),N?(y=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(g|=1),lt(_t,g&1),s===null)return ip(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((o.mode&1)===0?o.lanes=1:s.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,s=h.fallback,y?(h=o.mode,y=o.child,T={mode:"hidden",children:T},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=T):y=xd(T,h,0,null),s=io(s,h,c,null),y.return=o,s.return=o,y.sibling=s,o.child=y,o.child.memoizedState=Pp(c),o.memoizedState=Rp,s):jp(o,T));if(g=s.memoizedState,g!==null&&(N=g.dehydrated,N!==null))return lC(s,o,T,h,N,g,c);if(y){y=h.fallback,T=o.mode,g=s.child,N=g.sibling;var j={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==g?(h=o.child,h.childLanes=0,h.pendingProps=j,o.deletions=null):(h=ei(g,j),h.subtreeFlags=g.subtreeFlags&14680064),N!==null?y=ei(N,y):(y=io(y,T,c,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,T=s.child.memoizedState,T=T===null?Pp(c):{baseLanes:T.baseLanes|c,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=s.childLanes&~c,o.memoizedState=Rp,h}return y=s.child,s=y.sibling,h=ei(y,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=c),h.return=o,h.sibling=null,s!==null&&(c=o.deletions,c===null?(o.deletions=[s],o.flags|=16):c.push(s)),o.child=h,o.memoizedState=null,h}function jp(s,o){return o=xd({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function ld(s,o,c,h){return h!==null&&op(h),ha(o,s.child,null,c),s=jp(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function lC(s,o,c,h,g,y,T){if(c)return o.flags&256?(o.flags&=-257,h=Np(Error(t(422))),ld(s,o,T,h)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(y=h.fallback,g=o.mode,h=xd({mode:"visible",children:h.children},g,0,null),y=io(y,g,T,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,(o.mode&1)!==0&&ha(o,s.child,null,T),o.child.memoizedState=Pp(T),o.memoizedState=Rp,y);if((o.mode&1)===0)return ld(s,o,T,null);if(g.data==="$!"){if(h=g.nextSibling&&g.nextSibling.dataset,h)var N=h.dgst;return h=N,y=Error(t(419)),h=Np(y,h,void 0),ld(s,o,T,h)}if(N=(T&s.childLanes)!==0,vn||N){if(h=Bt,h!==null){switch(T&-T){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(h.suspendedLanes|T))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,ds(s,g),pr(h,s,g,-1))}return Qp(),h=Np(Error(t(421))),ld(s,o,T,h)}return g.data==="$?"?(o.flags|=128,o.child=s.child,o=xC.bind(null,s),g._reactRetry=o,null):(s=y.treeContext,Vn=$s(g.nextSibling),Ln=o,gt=!0,ur=null,s!==null&&(Hn[Gn++]=cs,Hn[Gn++]=us,Hn[Gn++]=Yi,cs=s.id,us=s.overflow,Yi=o),o=jp(o,h.children),o.flags|=4096,o)}function Ov(s,o,c){s.lanes|=o;var h=s.alternate;h!==null&&(h.lanes|=o),up(s.return,o,c)}function Op(s,o,c,h,g){var y=s.memoizedState;y===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:c,tailMode:g}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=c,y.tailMode=g)}function Dv(s,o,c){var h=o.pendingProps,g=h.revealOrder,y=h.tail;if(fn(s,o,h.children,c),h=_t.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&Ov(s,c,o);else if(s.tag===19)Ov(s,c,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}h&=1}if(lt(_t,h),(o.mode&1)===0)o.memoizedState=null;else switch(g){case"forwards":for(c=o.child,g=null;c!==null;)s=c.alternate,s!==null&&td(s)===null&&(g=c),c=c.sibling;c=g,c===null?(g=o.child,o.child=null):(g=c.sibling,c.sibling=null),Op(o,!1,g,c,y);break;case"backwards":for(c=null,g=o.child,o.child=null;g!==null;){if(s=g.alternate,s!==null&&td(s)===null){o.child=g;break}s=g.sibling,g.sibling=c,c=g,g=s}Op(o,!0,c,null,y);break;case"together":Op(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function cd(s,o){(o.mode&1)===0&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function fs(s,o,c){if(s!==null&&(o.dependencies=s.dependencies),to|=o.lanes,(c&o.childLanes)===0)return null;if(s!==null&&o.child!==s.child)throw Error(t(153));if(o.child!==null){for(s=o.child,c=ei(s,s.pendingProps),o.child=c,c.return=o;s.sibling!==null;)s=s.sibling,c=c.sibling=ei(s,s.pendingProps),c.return=o;c.sibling=null}return o.child}function cC(s,o,c){switch(o.tag){case 3:Rv(o),da();break;case 5:Qy(o);break;case 1:yn(o.type)&&qu(o);break;case 4:fp(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,g=o.memoizedProps.value;lt(Xu,h._currentValue),h._currentValue=g;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(lt(_t,_t.current&1),o.flags|=128,null):(c&o.child.childLanes)!==0?jv(s,o,c):(lt(_t,_t.current&1),s=fs(s,o,c),s!==null?s.sibling:null);lt(_t,_t.current&1);break;case 19:if(h=(c&o.childLanes)!==0,(s.flags&128)!==0){if(h)return Dv(s,o,c);o.flags|=128}if(g=o.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),lt(_t,_t.current),h)break;return null;case 22:case 23:return o.lanes=0,kv(s,o,c)}return fs(s,o,c)}var Mv,Dp,Lv,Vv;Mv=function(s,o){for(var c=o.child;c!==null;){if(c.tag===5||c.tag===6)s.appendChild(c.stateNode);else if(c.tag!==4&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===o)break;for(;c.sibling===null;){if(c.return===null||c.return===o)return;c=c.return}c.sibling.return=c.return,c=c.sibling}},Dp=function(){},Lv=function(s,o,c,h){var g=s.memoizedProps;if(g!==h){s=o.stateNode,Zi(Pr.current);var y=null;switch(c){case"input":g=Pi(s,g),h=Pi(s,h),y=[];break;case"select":g=te({},g,{value:void 0}),h=te({},h,{value:void 0}),y=[];break;case"textarea":g=ll(s,g),h=ll(s,h),y=[];break;default:typeof g.onClick!="function"&&typeof h.onClick=="function"&&(s.onclick=Bu)}pl(c,h);var T;c=null;for(W in g)if(!h.hasOwnProperty(W)&&g.hasOwnProperty(W)&&g[W]!=null)if(W==="style"){var N=g[W];for(T in N)N.hasOwnProperty(T)&&(c||(c={}),c[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(i.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in h){var j=h[W];if(N=g?.[W],h.hasOwnProperty(W)&&j!==N&&(j!=null||N!=null))if(W==="style")if(N){for(T in N)!N.hasOwnProperty(T)||j&&j.hasOwnProperty(T)||(c||(c={}),c[T]="");for(T in j)j.hasOwnProperty(T)&&N[T]!==j[T]&&(c||(c={}),c[T]=j[T])}else c||(y||(y=[]),y.push(W,c)),c=j;else W==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,N=N?N.__html:void 0,j!=null&&N!==j&&(y=y||[]).push(W,j)):W==="children"?typeof j!="string"&&typeof j!="number"||(y=y||[]).push(W,""+j):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(i.hasOwnProperty(W)?(j!=null&&W==="onScroll"&&ut("scroll",s),y||N===j||(y=[])):(y=y||[]).push(W,j))}c&&(y=y||[]).push("style",c);var W=y;(o.updateQueue=W)&&(o.flags|=4)}},Vv=function(s,o,c,h){c!==h&&(o.flags|=4)};function Kl(s,o){if(!gt)switch(s.tailMode){case"hidden":o=s.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?s.tail=null:c.sibling=null;break;case"collapsed":c=s.tail;for(var h=null;c!==null;)c.alternate!==null&&(h=c),c=c.sibling;h===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function rn(s){var o=s.alternate!==null&&s.alternate.child===s.child,c=0,h=0;if(o)for(var g=s.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags&14680064,h|=g.flags&14680064,g.return=s,g=g.sibling;else for(g=s.child;g!==null;)c|=g.lanes|g.childLanes,h|=g.subtreeFlags,h|=g.flags,g.return=s,g=g.sibling;return s.subtreeFlags|=h,s.childLanes=c,o}function uC(s,o,c){var h=o.pendingProps;switch(rp(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(o),null;case 1:return yn(o.type)&&Wu(),rn(o),null;case 3:return h=o.stateNode,ma(),dt(_n),dt(tn),gp(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(s===null||s.child===null)&&(Qu(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,ur!==null&&(Hp(ur),ur=null))),Dp(s,o),rn(o),null;case 5:pp(o);var g=Zi($l.current);if(c=o.type,s!==null&&o.stateNode!=null)Lv(s,o,c,h,g),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return rn(o),null}if(s=Zi(Pr.current),Qu(o)){h=o.stateNode,c=o.type;var y=o.memoizedProps;switch(h[Rr]=o,h[Vl]=y,s=(o.mode&1)!==0,c){case"dialog":ut("cancel",h),ut("close",h);break;case"iframe":case"object":case"embed":ut("load",h);break;case"video":case"audio":for(g=0;g<Dl.length;g++)ut(Dl[g],h);break;case"source":ut("error",h);break;case"img":case"image":case"link":ut("error",h),ut("load",h);break;case"details":ut("toggle",h);break;case"input":Ao(h,y),ut("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},ut("invalid",h);break;case"textarea":Po(h,y),ut("invalid",h)}pl(c,y),g=null;for(var T in y)if(y.hasOwnProperty(T)){var N=y[T];T==="children"?typeof N=="string"?h.textContent!==N&&(y.suppressHydrationWarning!==!0&&zu(h.textContent,N,s),g=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(y.suppressHydrationWarning!==!0&&zu(h.textContent,N,s),g=["children",""+N]):i.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&ut("scroll",h)}switch(c){case"input":Pn(h),fu(h,y,!0);break;case"textarea":Pn(h),cl(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=Bu)}h=g,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=g.nodeType===9?g:g.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=St(c)),s==="http://www.w3.org/1999/xhtml"?c==="script"?(s=T.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof h.is=="string"?s=T.createElement(c,{is:h.is}):(s=T.createElement(c),c==="select"&&(T=s,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):s=T.createElementNS(s,c),s[Rr]=o,s[Vl]=h,Mv(s,o,!1,!1),o.stateNode=s;e:{switch(T=ml(c,h),c){case"dialog":ut("cancel",s),ut("close",s),g=h;break;case"iframe":case"object":case"embed":ut("load",s),g=h;break;case"video":case"audio":for(g=0;g<Dl.length;g++)ut(Dl[g],s);g=h;break;case"source":ut("error",s),g=h;break;case"img":case"image":case"link":ut("error",s),ut("load",s),g=h;break;case"details":ut("toggle",s),g=h;break;case"input":Ao(s,h),g=Pi(s,h),ut("invalid",s);break;case"option":g=h;break;case"select":s._wrapperState={wasMultiple:!!h.multiple},g=te({},h,{value:void 0}),ut("invalid",s);break;case"textarea":Po(s,h),g=ll(s,h),ut("invalid",s);break;default:g=h}pl(c,g),N=g;for(y in N)if(N.hasOwnProperty(y)){var j=N[y];y==="style"?hl(s,j):y==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&ul(s,j)):y==="children"?typeof j=="string"?(c!=="textarea"||j!=="")&&Ps(s,j):typeof j=="number"&&Ps(s,""+j):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(i.hasOwnProperty(y)?j!=null&&y==="onScroll"&&ut("scroll",s):j!=null&&ae(s,y,j,T))}switch(c){case"input":Pn(s),fu(s,h,!1);break;case"textarea":Pn(s),cl(s);break;case"option":h.value!=null&&s.setAttribute("value",""+Ue(h.value));break;case"select":s.multiple=!!h.multiple,y=h.value,y!=null?Zr(s,!!h.multiple,y,!1):h.defaultValue!=null&&Zr(s,!!h.multiple,h.defaultValue,!0);break;default:typeof g.onClick=="function"&&(s.onclick=Bu)}switch(c){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return rn(o),null;case 6:if(s&&o.stateNode!=null)Vv(s,o,s.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(c=Zi($l.current),Zi(Pr.current),Qu(o)){if(h=o.stateNode,c=o.memoizedProps,h[Rr]=o,(y=h.nodeValue!==c)&&(s=Ln,s!==null))switch(s.tag){case 3:zu(h.nodeValue,c,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&zu(h.nodeValue,c,(s.mode&1)!==0)}y&&(o.flags|=4)}else h=(c.nodeType===9?c:c.ownerDocument).createTextNode(h),h[Rr]=o,o.stateNode=h}return rn(o),null;case 13:if(dt(_t),h=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(gt&&Vn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)zy(),da(),o.flags|=98560,y=!1;else if(y=Qu(o),h!==null&&h.dehydrated!==null){if(s===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Rr]=o}else da(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;rn(o),y=!1}else ur!==null&&(Hp(ur),ur=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=c,o):(h=h!==null,h!==(s!==null&&s.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(s===null||(_t.current&1)!==0?jt===0&&(jt=3):Qp())),o.updateQueue!==null&&(o.flags|=4),rn(o),null);case 4:return ma(),Dp(s,o),s===null&&Ml(o.stateNode.containerInfo),rn(o),null;case 10:return cp(o.type._context),rn(o),null;case 17:return yn(o.type)&&Wu(),rn(o),null;case 19:if(dt(_t),y=o.memoizedState,y===null)return rn(o),null;if(h=(o.flags&128)!==0,T=y.rendering,T===null)if(h)Kl(y,!1);else{if(jt!==0||s!==null&&(s.flags&128)!==0)for(s=o.child;s!==null;){if(T=td(s),T!==null){for(o.flags|=128,Kl(y,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=c,c=o.child;c!==null;)y=c,s=h,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=s,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,s=T.dependencies,y.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),c=c.sibling;return lt(_t,_t.current&1|2),o.child}s=s.sibling}y.tail!==null&&at()>va&&(o.flags|=128,h=!0,Kl(y,!1),o.lanes=4194304)}else{if(!h)if(s=td(T),s!==null){if(o.flags|=128,h=!0,c=s.updateQueue,c!==null&&(o.updateQueue=c,o.flags|=4),Kl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!gt)return rn(o),null}else 2*at()-y.renderingStartTime>va&&c!==1073741824&&(o.flags|=128,h=!0,Kl(y,!1),o.lanes=4194304);y.isBackwards?(T.sibling=o.child,o.child=T):(c=y.last,c!==null?c.sibling=T:o.child=T,y.last=T)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=at(),o.sibling=null,c=_t.current,lt(_t,h?c&1|2:c&1),o):(rn(o),null);case 22:case 23:return Kp(),h=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Fn&1073741824)!==0&&(rn(o),o.subtreeFlags&6&&(o.flags|=8192)):rn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function dC(s,o){switch(rp(o),o.tag){case 1:return yn(o.type)&&Wu(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return ma(),dt(_n),dt(tn),gp(),s=o.flags,(s&65536)!==0&&(s&128)===0?(o.flags=s&-65537|128,o):null;case 5:return pp(o),null;case 13:if(dt(_t),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(t(340));da()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return dt(_t),null;case 4:return ma(),null;case 10:return cp(o.type._context),null;case 22:case 23:return Kp(),null;case 24:return null;default:return null}}var ud=!1,sn=!1,hC=typeof WeakSet=="function"?WeakSet:Set,pe=null;function _a(s,o){var c=s.ref;if(c!==null)if(typeof c=="function")try{c(null)}catch(h){wt(s,o,h)}else c.current=null}function Mp(s,o,c){try{c()}catch(h){wt(s,o,h)}}var Fv=!1;function fC(s,o){if(Kf=Us,s=_y(),Uf(s)){if("selectionStart"in s)var c={start:s.selectionStart,end:s.selectionEnd};else e:{c=(c=s.ownerDocument)&&c.defaultView||window;var h=c.getSelection&&c.getSelection();if(h&&h.rangeCount!==0){c=h.anchorNode;var g=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{c.nodeType,y.nodeType}catch{c=null;break e}var T=0,N=-1,j=-1,W=0,J=0,Z=s,Y=null;t:for(;;){for(var ue;Z!==c||g!==0&&Z.nodeType!==3||(N=T+g),Z!==y||h!==0&&Z.nodeType!==3||(j=T+h),Z.nodeType===3&&(T+=Z.nodeValue.length),(ue=Z.firstChild)!==null;)Y=Z,Z=ue;for(;;){if(Z===s)break t;if(Y===c&&++W===g&&(N=T),Y===y&&++J===h&&(j=T),(ue=Z.nextSibling)!==null)break;Z=Y,Y=Z.parentNode}Z=ue}c=N===-1||j===-1?null:{start:N,end:j}}else c=null}c=c||{start:0,end:0}}else c=null;for(Qf={focusedElem:s,selectionRange:c},Us=!1,pe=o;pe!==null;)if(o=pe,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,pe=s;else for(;pe!==null;){o=pe;try{var ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,Et=ge.memoizedState,z=o.stateNode,D=z.getSnapshotBeforeUpdate(o.elementType===o.type?ve:dr(o.type,ve),Et);z.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ne){wt(o,o.return,ne)}if(s=o.sibling,s!==null){s.return=o.return,pe=s;break}pe=o.return}return ge=Fv,Fv=!1,ge}function Ql(s,o,c){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var g=h=h.next;do{if((g.tag&s)===s){var y=g.destroy;g.destroy=void 0,y!==void 0&&Mp(o,c,y)}g=g.next}while(g!==h)}}function dd(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var c=o=o.next;do{if((c.tag&s)===s){var h=c.create;c.destroy=h()}c=c.next}while(c!==o)}}function Lp(s){var o=s.ref;if(o!==null){var c=s.stateNode;switch(s.tag){case 5:s=c;break;default:s=c}typeof o=="function"?o(s):o.current=s}}function Uv(s){var o=s.alternate;o!==null&&(s.alternate=null,Uv(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[Rr],delete o[Vl],delete o[Zf],delete o[QI],delete o[YI])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function zv(s){return s.tag===5||s.tag===3||s.tag===4}function Bv(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||zv(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function Vp(s,o,c){var h=s.tag;if(h===5||h===6)s=s.stateNode,o?c.nodeType===8?c.parentNode.insertBefore(s,o):c.insertBefore(s,o):(c.nodeType===8?(o=c.parentNode,o.insertBefore(s,c)):(o=c,o.appendChild(s)),c=c._reactRootContainer,c!=null||o.onclick!==null||(o.onclick=Bu));else if(h!==4&&(s=s.child,s!==null))for(Vp(s,o,c),s=s.sibling;s!==null;)Vp(s,o,c),s=s.sibling}function Fp(s,o,c){var h=s.tag;if(h===5||h===6)s=s.stateNode,o?c.insertBefore(s,o):c.appendChild(s);else if(h!==4&&(s=s.child,s!==null))for(Fp(s,o,c),s=s.sibling;s!==null;)Fp(s,o,c),s=s.sibling}var Xt=null,hr=!1;function Qs(s,o,c){for(c=c.child;c!==null;)$v(s,o,c),c=c.sibling}function $v(s,o,c){if(jn&&typeof jn.onCommitFiberUnmount=="function")try{jn.onCommitFiberUnmount(zi,c)}catch{}switch(c.tag){case 5:sn||_a(c,o);case 6:var h=Xt,g=hr;Xt=null,Qs(s,o,c),Xt=h,hr=g,Xt!==null&&(hr?(s=Xt,c=c.stateNode,s.nodeType===8?s.parentNode.removeChild(c):s.removeChild(c)):Xt.removeChild(c.stateNode));break;case 18:Xt!==null&&(hr?(s=Xt,c=c.stateNode,s.nodeType===8?Jf(s.parentNode,c):s.nodeType===1&&Jf(s,c),ar(s)):Jf(Xt,c.stateNode));break;case 4:h=Xt,g=hr,Xt=c.stateNode.containerInfo,hr=!0,Qs(s,o,c),Xt=h,hr=g;break;case 0:case 11:case 14:case 15:if(!sn&&(h=c.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){g=h=h.next;do{var y=g,T=y.destroy;y=y.tag,T!==void 0&&((y&2)!==0||(y&4)!==0)&&Mp(c,o,T),g=g.next}while(g!==h)}Qs(s,o,c);break;case 1:if(!sn&&(_a(c,o),h=c.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=c.memoizedProps,h.state=c.memoizedState,h.componentWillUnmount()}catch(N){wt(c,o,N)}Qs(s,o,c);break;case 21:Qs(s,o,c);break;case 22:c.mode&1?(sn=(h=sn)||c.memoizedState!==null,Qs(s,o,c),sn=h):Qs(s,o,c);break;default:Qs(s,o,c)}}function Wv(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var c=s.stateNode;c===null&&(c=s.stateNode=new hC),o.forEach(function(h){var g=EC.bind(null,s,h);c.has(h)||(c.add(h),h.then(g,g))})}}function fr(s,o){var c=o.deletions;if(c!==null)for(var h=0;h<c.length;h++){var g=c[h];try{var y=s,T=o,N=T;e:for(;N!==null;){switch(N.tag){case 5:Xt=N.stateNode,hr=!1;break e;case 3:Xt=N.stateNode.containerInfo,hr=!0;break e;case 4:Xt=N.stateNode.containerInfo,hr=!0;break e}N=N.return}if(Xt===null)throw Error(t(160));$v(y,T,g),Xt=null,hr=!1;var j=g.alternate;j!==null&&(j.return=null),g.return=null}catch(W){wt(g,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)qv(o,s),o=o.sibling}function qv(s,o){var c=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(fr(o,s),Or(s),h&4){try{Ql(3,s,s.return),dd(3,s)}catch(ve){wt(s,s.return,ve)}try{Ql(5,s,s.return)}catch(ve){wt(s,s.return,ve)}}break;case 1:fr(o,s),Or(s),h&512&&c!==null&&_a(c,c.return);break;case 5:if(fr(o,s),Or(s),h&512&&c!==null&&_a(c,c.return),s.flags&32){var g=s.stateNode;try{Ps(g,"")}catch(ve){wt(s,s.return,ve)}}if(h&4&&(g=s.stateNode,g!=null)){var y=s.memoizedProps,T=c!==null?c.memoizedProps:y,N=s.type,j=s.updateQueue;if(s.updateQueue=null,j!==null)try{N==="input"&&y.type==="radio"&&y.name!=null&&ol(g,y),ml(N,T);var W=ml(N,y);for(T=0;T<j.length;T+=2){var J=j[T],Z=j[T+1];J==="style"?hl(g,Z):J==="dangerouslySetInnerHTML"?ul(g,Z):J==="children"?Ps(g,Z):ae(g,J,Z,W)}switch(N){case"input":al(g,y);break;case"textarea":jo(g,y);break;case"select":var Y=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Zr(g,!!y.multiple,ue,!1):Y!==!!y.multiple&&(y.defaultValue!=null?Zr(g,!!y.multiple,y.defaultValue,!0):Zr(g,!!y.multiple,y.multiple?[]:"",!1))}g[Vl]=y}catch(ve){wt(s,s.return,ve)}}break;case 6:if(fr(o,s),Or(s),h&4){if(s.stateNode===null)throw Error(t(162));g=s.stateNode,y=s.memoizedProps;try{g.nodeValue=y}catch(ve){wt(s,s.return,ve)}}break;case 3:if(fr(o,s),Or(s),h&4&&c!==null&&c.memoizedState.isDehydrated)try{ar(o.containerInfo)}catch(ve){wt(s,s.return,ve)}break;case 4:fr(o,s),Or(s);break;case 13:fr(o,s),Or(s),g=s.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Bp=at())),h&4&&Wv(s);break;case 22:if(J=c!==null&&c.memoizedState!==null,s.mode&1?(sn=(W=sn)||J,fr(o,s),sn=W):fr(o,s),Or(s),h&8192){if(W=s.memoizedState!==null,(s.stateNode.isHidden=W)&&!J&&(s.mode&1)!==0)for(pe=s,J=s.child;J!==null;){for(Z=pe=J;pe!==null;){switch(Y=pe,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:Ql(4,Y,Y.return);break;case 1:_a(Y,Y.return);var ge=Y.stateNode;if(typeof ge.componentWillUnmount=="function"){h=Y,c=Y.return;try{o=h,ge.props=o.memoizedProps,ge.state=o.memoizedState,ge.componentWillUnmount()}catch(ve){wt(h,c,ve)}}break;case 5:_a(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Kv(Z);continue}}ue!==null?(ue.return=Y,pe=ue):Kv(Z)}J=J.sibling}e:for(J=null,Z=s;;){if(Z.tag===5){if(J===null){J=Z;try{g=Z.stateNode,W?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(N=Z.stateNode,j=Z.memoizedProps.style,T=j!=null&&j.hasOwnProperty("display")?j.display:null,N.style.display=dl("display",T))}catch(ve){wt(s,s.return,ve)}}}else if(Z.tag===6){if(J===null)try{Z.stateNode.nodeValue=W?"":Z.memoizedProps}catch(ve){wt(s,s.return,ve)}}else if((Z.tag!==22&&Z.tag!==23||Z.memoizedState===null||Z===s)&&Z.child!==null){Z.child.return=Z,Z=Z.child;continue}if(Z===s)break e;for(;Z.sibling===null;){if(Z.return===null||Z.return===s)break e;J===Z&&(J=null),Z=Z.return}J===Z&&(J=null),Z.sibling.return=Z.return,Z=Z.sibling}}break;case 19:fr(o,s),Or(s),h&4&&Wv(s);break;case 21:break;default:fr(o,s),Or(s)}}function Or(s){var o=s.flags;if(o&2){try{e:{for(var c=s.return;c!==null;){if(zv(c)){var h=c;break e}c=c.return}throw Error(t(160))}switch(h.tag){case 5:var g=h.stateNode;h.flags&32&&(Ps(g,""),h.flags&=-33);var y=Bv(s);Fp(s,y,g);break;case 3:case 4:var T=h.stateNode.containerInfo,N=Bv(s);Vp(s,N,T);break;default:throw Error(t(161))}}catch(j){wt(s,s.return,j)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function pC(s,o,c){pe=s,Hv(s)}function Hv(s,o,c){for(var h=(s.mode&1)!==0;pe!==null;){var g=pe,y=g.child;if(g.tag===22&&h){var T=g.memoizedState!==null||ud;if(!T){var N=g.alternate,j=N!==null&&N.memoizedState!==null||sn;N=ud;var W=sn;if(ud=T,(sn=j)&&!W)for(pe=g;pe!==null;)T=pe,j=T.child,T.tag===22&&T.memoizedState!==null?Qv(g):j!==null?(j.return=T,pe=j):Qv(g);for(;y!==null;)pe=y,Hv(y),y=y.sibling;pe=g,ud=N,sn=W}Gv(s)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,pe=y):Gv(s)}}function Gv(s){for(;pe!==null;){var o=pe;if((o.flags&8772)!==0){var c=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:sn||dd(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!sn)if(c===null)h.componentDidMount();else{var g=o.elementType===o.type?c.memoizedProps:dr(o.type,c.memoizedProps);h.componentDidUpdate(g,c.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&Ky(o,y,h);break;case 3:var T=o.updateQueue;if(T!==null){if(c=null,o.child!==null)switch(o.child.tag){case 5:c=o.child.stateNode;break;case 1:c=o.child.stateNode}Ky(o,T,c)}break;case 5:var N=o.stateNode;if(c===null&&o.flags&4){c=N;var j=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&c.focus();break;case"img":j.src&&(c.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var J=W.memoizedState;if(J!==null){var Z=J.dehydrated;Z!==null&&ar(Z)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}sn||o.flags&512&&Lp(o)}catch(Y){wt(o,o.return,Y)}}if(o===s){pe=null;break}if(c=o.sibling,c!==null){c.return=o.return,pe=c;break}pe=o.return}}function Kv(s){for(;pe!==null;){var o=pe;if(o===s){pe=null;break}var c=o.sibling;if(c!==null){c.return=o.return,pe=c;break}pe=o.return}}function Qv(s){for(;pe!==null;){var o=pe;try{switch(o.tag){case 0:case 11:case 15:var c=o.return;try{dd(4,o)}catch(j){wt(o,c,j)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var g=o.return;try{h.componentDidMount()}catch(j){wt(o,g,j)}}var y=o.return;try{Lp(o)}catch(j){wt(o,y,j)}break;case 5:var T=o.return;try{Lp(o)}catch(j){wt(o,T,j)}}}catch(j){wt(o,o.return,j)}if(o===s){pe=null;break}var N=o.sibling;if(N!==null){N.return=o.return,pe=N;break}pe=o.return}}var mC=Math.ceil,hd=G.ReactCurrentDispatcher,Up=G.ReactCurrentOwner,Yn=G.ReactCurrentBatchConfig,Xe=0,Bt=null,It=null,Jt=0,Fn=0,ya=Ws(0),jt=0,Yl=null,to=0,fd=0,zp=0,Xl=null,wn=null,Bp=0,va=1/0,ps=null,pd=!1,$p=null,Ys=null,md=!1,Xs=null,gd=0,Jl=0,Wp=null,_d=-1,yd=0;function pn(){return(Xe&6)!==0?at():_d!==-1?_d:_d=at()}function Js(s){return(s.mode&1)===0?1:(Xe&2)!==0&&Jt!==0?Jt&-Jt:JI.transition!==null?(yd===0&&(yd=$i()),yd):(s=We,s!==0||(s=window.event,s=s===void 0?16:Cl(s.type)),s)}function pr(s,o,c,h){if(50<Jl)throw Jl=0,Wp=null,Error(t(185));Ms(s,c,h),((Xe&2)===0||s!==Bt)&&(s===Bt&&((Xe&2)===0&&(fd|=c),jt===4&&Zs(s,Jt)),xn(s,h),c===1&&Xe===0&&(o.mode&1)===0&&(va=at()+500,Hu&&Hs()))}function xn(s,o){var c=s.callbackNode;ns(s,o);var h=Bi(s,s===Bt?Jt:0);if(h===0)c!==null&&xl(c),s.callbackNode=null,s.callbackPriority=0;else if(o=h&-h,s.callbackPriority!==o){if(c!=null&&xl(c),o===1)s.tag===0?XI(Xv.bind(null,s)):My(Xv.bind(null,s)),GI(function(){(Xe&6)===0&&Hs()}),c=null;else{switch(Vs(h)){case 1:c=Ui;break;case 4:c=js;break;case 16:c=$n;break;case 536870912:c=yu;break;default:c=$n}c=i0(c,Yv.bind(null,s))}s.callbackPriority=o,s.callbackNode=c}}function Yv(s,o){if(_d=-1,yd=0,(Xe&6)!==0)throw Error(t(327));var c=s.callbackNode;if(wa()&&s.callbackNode!==c)return null;var h=Bi(s,s===Bt?Jt:0);if(h===0)return null;if((h&30)!==0||(h&s.expiredLanes)!==0||o)o=vd(s,h);else{o=h;var g=Xe;Xe|=2;var y=Zv();(Bt!==s||Jt!==o)&&(ps=null,va=at()+500,ro(s,o));do try{yC();break}catch(N){Jv(s,N)}while(!0);lp(),hd.current=y,Xe=g,It!==null?o=0:(Bt=null,Jt=0,o=jt)}if(o!==0){if(o===2&&(g=On(s),g!==0&&(h=g,o=qp(s,g))),o===1)throw c=Yl,ro(s,0),Zs(s,h),xn(s,at()),c;if(o===6)Zs(s,h);else{if(g=s.current.alternate,(h&30)===0&&!gC(g)&&(o=vd(s,h),o===2&&(y=On(s),y!==0&&(h=y,o=qp(s,y))),o===1))throw c=Yl,ro(s,0),Zs(s,h),xn(s,at()),c;switch(s.finishedWork=g,s.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:so(s,wn,ps);break;case 3:if(Zs(s,h),(h&130023424)===h&&(o=Bp+500-at(),10<o)){if(Bi(s,0)!==0)break;if(g=s.suspendedLanes,(g&h)!==h){pn(),s.pingedLanes|=s.suspendedLanes&g;break}s.timeoutHandle=Xf(so.bind(null,s,wn,ps),o);break}so(s,wn,ps);break;case 4:if(Zs(s,h),(h&4194240)===h)break;for(o=s.eventTimes,g=-1;0<h;){var T=31-dn(h);y=1<<T,T=o[T],T>g&&(g=T),h&=~y}if(h=g,h=at()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*mC(h/1960))-h,10<h){s.timeoutHandle=Xf(so.bind(null,s,wn,ps),h);break}so(s,wn,ps);break;case 5:so(s,wn,ps);break;default:throw Error(t(329))}}}return xn(s,at()),s.callbackNode===c?Yv.bind(null,s):null}function qp(s,o){var c=Xl;return s.current.memoizedState.isDehydrated&&(ro(s,o).flags|=256),s=vd(s,o),s!==2&&(o=wn,wn=c,o!==null&&Hp(o)),s}function Hp(s){wn===null?wn=s:wn.push.apply(wn,s)}function gC(s){for(var o=s;;){if(o.flags&16384){var c=o.updateQueue;if(c!==null&&(c=c.stores,c!==null))for(var h=0;h<c.length;h++){var g=c[h],y=g.getSnapshot;g=g.value;try{if(!cr(y(),g))return!1}catch{return!1}}}if(c=o.child,o.subtreeFlags&16384&&c!==null)c.return=o,o=c;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Zs(s,o){for(o&=~zp,o&=~fd,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var c=31-dn(o),h=1<<c;s[c]=-1,o&=~h}}function Xv(s){if((Xe&6)!==0)throw Error(t(327));wa();var o=Bi(s,0);if((o&1)===0)return xn(s,at()),null;var c=vd(s,o);if(s.tag!==0&&c===2){var h=On(s);h!==0&&(o=h,c=qp(s,h))}if(c===1)throw c=Yl,ro(s,0),Zs(s,o),xn(s,at()),c;if(c===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,so(s,wn,ps),xn(s,at()),null}function Gp(s,o){var c=Xe;Xe|=1;try{return s(o)}finally{Xe=c,Xe===0&&(va=at()+500,Hu&&Hs())}}function no(s){Xs!==null&&Xs.tag===0&&(Xe&6)===0&&wa();var o=Xe;Xe|=1;var c=Yn.transition,h=We;try{if(Yn.transition=null,We=1,s)return s()}finally{We=h,Yn.transition=c,Xe=o,(Xe&6)===0&&Hs()}}function Kp(){Fn=ya.current,dt(ya)}function ro(s,o){s.finishedWork=null,s.finishedLanes=0;var c=s.timeoutHandle;if(c!==-1&&(s.timeoutHandle=-1,HI(c)),It!==null)for(c=It.return;c!==null;){var h=c;switch(rp(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Wu();break;case 3:ma(),dt(_n),dt(tn),gp();break;case 5:pp(h);break;case 4:ma();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:cp(h.type._context);break;case 22:case 23:Kp()}c=c.return}if(Bt=s,It=s=ei(s.current,null),Jt=Fn=o,jt=0,Yl=null,zp=fd=to=0,wn=Xl=null,Ji!==null){for(o=0;o<Ji.length;o++)if(c=Ji[o],h=c.interleaved,h!==null){c.interleaved=null;var g=h.next,y=c.pending;if(y!==null){var T=y.next;y.next=g,h.next=T}c.pending=h}Ji=null}return s}function Jv(s,o){do{var c=It;try{if(lp(),nd.current=od,rd){for(var h=yt.memoizedState;h!==null;){var g=h.queue;g!==null&&(g.pending=null),h=h.next}rd=!1}if(eo=0,zt=Pt=yt=null,Wl=!1,ql=0,Up.current=null,c===null||c.return===null){jt=1,Yl=o,It=null;break}e:{var y=s,T=c.return,N=c,j=o;if(o=Jt,N.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var W=j,J=N,Z=J.tag;if((J.mode&1)===0&&(Z===0||Z===11||Z===15)){var Y=J.alternate;Y?(J.updateQueue=Y.updateQueue,J.memoizedState=Y.memoizedState,J.lanes=Y.lanes):(J.updateQueue=null,J.memoizedState=null)}var ue=Tv(T);if(ue!==null){ue.flags&=-257,bv(ue,T,N,y,o),ue.mode&1&&Ev(y,W,o),o=ue,j=W;var ge=o.updateQueue;if(ge===null){var ve=new Set;ve.add(j),o.updateQueue=ve}else ge.add(j);break e}else{if((o&1)===0){Ev(y,W,o),Qp();break e}j=Error(t(426))}}else if(gt&&N.mode&1){var Et=Tv(T);if(Et!==null){(Et.flags&65536)===0&&(Et.flags|=256),bv(Et,T,N,y,o),op(ga(j,N));break e}}y=j=ga(j,N),jt!==4&&(jt=2),Xl===null?Xl=[y]:Xl.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var z=wv(y,j,o);Gy(y,z);break e;case 1:N=j;var D=y.type,$=y.stateNode;if((y.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Ys===null||!Ys.has($)))){y.flags|=65536,o&=-o,y.lanes|=o;var ne=xv(y,N,o);Gy(y,ne);break e}}y=y.return}while(y!==null)}t0(c)}catch(we){o=we,It===c&&c!==null&&(It=c=c.return);continue}break}while(!0)}function Zv(){var s=hd.current;return hd.current=od,s===null?od:s}function Qp(){(jt===0||jt===3||jt===2)&&(jt=4),Bt===null||(to&268435455)===0&&(fd&268435455)===0||Zs(Bt,Jt)}function vd(s,o){var c=Xe;Xe|=2;var h=Zv();(Bt!==s||Jt!==o)&&(ps=null,ro(s,o));do try{_C();break}catch(g){Jv(s,g)}while(!0);if(lp(),Xe=c,hd.current=h,It!==null)throw Error(t(261));return Bt=null,Jt=0,jt}function _C(){for(;It!==null;)e0(It)}function yC(){for(;It!==null&&!gu();)e0(It)}function e0(s){var o=s0(s.alternate,s,Fn);s.memoizedProps=s.pendingProps,o===null?t0(s):It=o,Up.current=null}function t0(s){var o=s;do{var c=o.alternate;if(s=o.return,(o.flags&32768)===0){if(c=uC(c,o,Fn),c!==null){It=c;return}}else{if(c=dC(c,o),c!==null){c.flags&=32767,It=c;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{jt=6,It=null;return}}if(o=o.sibling,o!==null){It=o;return}It=o=s}while(o!==null);jt===0&&(jt=5)}function so(s,o,c){var h=We,g=Yn.transition;try{Yn.transition=null,We=1,vC(s,o,c,h)}finally{Yn.transition=g,We=h}return null}function vC(s,o,c,h){do wa();while(Xs!==null);if((Xe&6)!==0)throw Error(t(327));c=s.finishedWork;var g=s.finishedLanes;if(c===null)return null;if(s.finishedWork=null,s.finishedLanes=0,c===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var y=c.lanes|c.childLanes;if(st(s,y),s===Bt&&(It=Bt=null,Jt=0),(c.subtreeFlags&2064)===0&&(c.flags&2064)===0||md||(md=!0,i0($n,function(){return wa(),null})),y=(c.flags&15990)!==0,(c.subtreeFlags&15990)!==0||y){y=Yn.transition,Yn.transition=null;var T=We;We=1;var N=Xe;Xe|=4,Up.current=null,fC(s,c),qv(c,s),FI(Qf),Us=!!Kf,Qf=Kf=null,s.current=c,pC(c),Pf(),Xe=N,We=T,Yn.transition=y}else s.current=c;if(md&&(md=!1,Xs=s,gd=g),y=s.pendingLanes,y===0&&(Ys=null),vu(c.stateNode),xn(s,at()),o!==null)for(h=s.onRecoverableError,c=0;c<o.length;c++)g=o[c],h(g.value,{componentStack:g.stack,digest:g.digest});if(pd)throw pd=!1,s=$p,$p=null,s;return(gd&1)!==0&&s.tag!==0&&wa(),y=s.pendingLanes,(y&1)!==0?s===Wp?Jl++:(Jl=0,Wp=s):Jl=0,Hs(),null}function wa(){if(Xs!==null){var s=Vs(gd),o=Yn.transition,c=We;try{if(Yn.transition=null,We=16>s?16:s,Xs===null)var h=!1;else{if(s=Xs,Xs=null,gd=0,(Xe&6)!==0)throw Error(t(331));var g=Xe;for(Xe|=4,pe=s.current;pe!==null;){var y=pe,T=y.child;if((pe.flags&16)!==0){var N=y.deletions;if(N!==null){for(var j=0;j<N.length;j++){var W=N[j];for(pe=W;pe!==null;){var J=pe;switch(J.tag){case 0:case 11:case 15:Ql(8,J,y)}var Z=J.child;if(Z!==null)Z.return=J,pe=Z;else for(;pe!==null;){J=pe;var Y=J.sibling,ue=J.return;if(Uv(J),J===W){pe=null;break}if(Y!==null){Y.return=ue,pe=Y;break}pe=ue}}}var ge=y.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var Et=ve.sibling;ve.sibling=null,ve=Et}while(ve!==null)}}pe=y}}if((y.subtreeFlags&2064)!==0&&T!==null)T.return=y,pe=T;else e:for(;pe!==null;){if(y=pe,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Ql(9,y,y.return)}var z=y.sibling;if(z!==null){z.return=y.return,pe=z;break e}pe=y.return}}var D=s.current;for(pe=D;pe!==null;){T=pe;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,pe=$;else e:for(T=D;pe!==null;){if(N=pe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:dd(9,N)}}catch(we){wt(N,N.return,we)}if(N===T){pe=null;break e}var ne=N.sibling;if(ne!==null){ne.return=N.return,pe=ne;break e}pe=N.return}}if(Xe=g,Hs(),jn&&typeof jn.onPostCommitFiberRoot=="function")try{jn.onPostCommitFiberRoot(zi,s)}catch{}h=!0}return h}finally{We=c,Yn.transition=o}}return!1}function n0(s,o,c){o=ga(c,o),o=wv(s,o,1),s=Ks(s,o,1),o=pn(),s!==null&&(Ms(s,1,o),xn(s,o))}function wt(s,o,c){if(s.tag===3)n0(s,s,c);else for(;o!==null;){if(o.tag===3){n0(o,s,c);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Ys===null||!Ys.has(h))){s=ga(c,s),s=xv(o,s,1),o=Ks(o,s,1),s=pn(),o!==null&&(Ms(o,1,s),xn(o,s));break}}o=o.return}}function wC(s,o,c){var h=s.pingCache;h!==null&&h.delete(o),o=pn(),s.pingedLanes|=s.suspendedLanes&c,Bt===s&&(Jt&c)===c&&(jt===4||jt===3&&(Jt&130023424)===Jt&&500>at()-Bp?ro(s,0):zp|=c),xn(s,o)}function r0(s,o){o===0&&((s.mode&1)===0?o=1:(o=$o,$o<<=1,($o&130023424)===0&&($o=4194304)));var c=pn();s=ds(s,o),s!==null&&(Ms(s,o,c),xn(s,c))}function xC(s){var o=s.memoizedState,c=0;o!==null&&(c=o.retryLane),r0(s,c)}function EC(s,o){var c=0;switch(s.tag){case 13:var h=s.stateNode,g=s.memoizedState;g!==null&&(c=g.retryLane);break;case 19:h=s.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),r0(s,c)}var s0;s0=function(s,o,c){if(s!==null)if(s.memoizedProps!==o.pendingProps||_n.current)vn=!0;else{if((s.lanes&c)===0&&(o.flags&128)===0)return vn=!1,cC(s,o,c);vn=(s.flags&131072)!==0}else vn=!1,gt&&(o.flags&1048576)!==0&&Ly(o,Ku,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;cd(s,o),s=o.pendingProps;var g=la(o,tn.current);pa(o,c),g=vp(null,o,h,s,g,c);var y=wp();return o.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,yn(h)?(y=!0,qu(o)):y=!1,o.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,hp(o),g.updater=ad,o.stateNode=g,g._reactInternals=o,Cp(o,h,s,c),o=Ap(null,o,h,!0,y,c)):(o.tag=0,gt&&y&&np(o),fn(null,o,g,c),o=o.child),o;case 16:h=o.elementType;e:{switch(cd(s,o),s=o.pendingProps,g=h._init,h=g(h._payload),o.type=h,g=o.tag=bC(h),s=dr(h,s),g){case 0:o=Sp(null,o,h,s,c);break e;case 1:o=Av(null,o,h,s,c);break e;case 11:o=Iv(null,o,h,s,c);break e;case 14:o=Cv(null,o,h,dr(h.type,s),c);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:dr(h,g),Sp(s,o,h,g,c);case 1:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:dr(h,g),Av(s,o,h,g,c);case 3:e:{if(Rv(o),s===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,g=y.element,Hy(s,o),ed(o,h,null,c);var T=o.memoizedState;if(h=T.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){g=ga(Error(t(423)),o),o=Pv(s,o,h,c,g);break e}else if(h!==g){g=ga(Error(t(424)),o),o=Pv(s,o,h,c,g);break e}else for(Vn=$s(o.stateNode.containerInfo.firstChild),Ln=o,gt=!0,ur=null,c=Wy(o,null,h,c),o.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else{if(da(),h===g){o=fs(s,o,c);break e}fn(s,o,h,c)}o=o.child}return o;case 5:return Qy(o),s===null&&ip(o),h=o.type,g=o.pendingProps,y=s!==null?s.memoizedProps:null,T=g.children,Yf(h,g)?T=null:y!==null&&Yf(h,y)&&(o.flags|=32),Sv(s,o),fn(s,o,T,c),o.child;case 6:return s===null&&ip(o),null;case 13:return jv(s,o,c);case 4:return fp(o,o.stateNode.containerInfo),h=o.pendingProps,s===null?o.child=ha(o,null,h,c):fn(s,o,h,c),o.child;case 11:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:dr(h,g),Iv(s,o,h,g,c);case 7:return fn(s,o,o.pendingProps,c),o.child;case 8:return fn(s,o,o.pendingProps.children,c),o.child;case 12:return fn(s,o,o.pendingProps.children,c),o.child;case 10:e:{if(h=o.type._context,g=o.pendingProps,y=o.memoizedProps,T=g.value,lt(Xu,h._currentValue),h._currentValue=T,y!==null)if(cr(y.value,T)){if(y.children===g.children&&!_n.current){o=fs(s,o,c);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var N=y.dependencies;if(N!==null){T=y.child;for(var j=N.firstContext;j!==null;){if(j.context===h){if(y.tag===1){j=hs(-1,c&-c),j.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var J=W.pending;J===null?j.next=j:(j.next=J.next,J.next=j),W.pending=j}}y.lanes|=c,j=y.alternate,j!==null&&(j.lanes|=c),up(y.return,c,o),N.lanes|=c;break}j=j.next}}else if(y.tag===10)T=y.type===o.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=c,N=T.alternate,N!==null&&(N.lanes|=c),up(T,c,o),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===o){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}fn(s,o,g.children,c),o=o.child}return o;case 9:return g=o.type,h=o.pendingProps.children,pa(o,c),g=Kn(g),h=h(g),o.flags|=1,fn(s,o,h,c),o.child;case 14:return h=o.type,g=dr(h,o.pendingProps),g=dr(h.type,g),Cv(s,o,h,g,c);case 15:return Nv(s,o,o.type,o.pendingProps,c);case 17:return h=o.type,g=o.pendingProps,g=o.elementType===h?g:dr(h,g),cd(s,o),o.tag=1,yn(h)?(s=!0,qu(o)):s=!1,pa(o,c),yv(o,h,g),Cp(o,h,g,c),Ap(null,o,h,!0,s,c);case 19:return Dv(s,o,c);case 22:return kv(s,o,c)}throw Error(t(156,o.tag))};function i0(s,o){return zo(s,o)}function TC(s,o,c,h){this.tag=s,this.key=c,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(s,o,c,h){return new TC(s,o,c,h)}function Yp(s){return s=s.prototype,!(!s||!s.isReactComponent)}function bC(s){if(typeof s=="function")return Yp(s)?1:0;if(s!=null){if(s=s.$$typeof,s===R)return 11;if(s===He)return 14}return 2}function ei(s,o){var c=s.alternate;return c===null?(c=Xn(s.tag,o,s.key,s.mode),c.elementType=s.elementType,c.type=s.type,c.stateNode=s.stateNode,c.alternate=s,s.alternate=c):(c.pendingProps=o,c.type=s.type,c.flags=0,c.subtreeFlags=0,c.deletions=null),c.flags=s.flags&14680064,c.childLanes=s.childLanes,c.lanes=s.lanes,c.child=s.child,c.memoizedProps=s.memoizedProps,c.memoizedState=s.memoizedState,c.updateQueue=s.updateQueue,o=s.dependencies,c.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},c.sibling=s.sibling,c.index=s.index,c.ref=s.ref,c}function wd(s,o,c,h,g,y){var T=2;if(h=s,typeof s=="function")Yp(s)&&(T=1);else if(typeof s=="string")T=5;else e:switch(s){case O:return io(c.children,g,y,o);case I:T=8,g|=8;break;case k:return s=Xn(12,c,o,g|2),s.elementType=k,s.lanes=y,s;case S:return s=Xn(13,c,o,g),s.elementType=S,s.lanes=y,s;case qe:return s=Xn(19,c,o,g),s.elementType=qe,s.lanes=y,s;case Pe:return xd(c,g,y,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case C:T=10;break e;case P:T=9;break e;case R:T=11;break e;case He:T=14;break e;case Ge:T=16,h=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return o=Xn(T,c,o,g),o.elementType=s,o.type=h,o.lanes=y,o}function io(s,o,c,h){return s=Xn(7,s,h,o),s.lanes=c,s}function xd(s,o,c,h){return s=Xn(22,s,h,o),s.elementType=Pe,s.lanes=c,s.stateNode={isHidden:!1},s}function Xp(s,o,c){return s=Xn(6,s,null,o),s.lanes=c,s}function Jp(s,o,c){return o=Xn(4,s.children!==null?s.children:[],s.key,o),o.lanes=c,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function IC(s,o,c,h,g){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ds(0),this.expirationTimes=Ds(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ds(0),this.identifierPrefix=h,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function Zp(s,o,c,h,g,y,T,N,j){return s=new IC(s,o,c,N,j),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Xn(3,null,null,o),s.current=y,y.stateNode=s,y.memoizedState={element:h,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null},hp(y),s}function CC(s,o,c){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:me,key:h==null?null:""+h,children:s,containerInfo:o,implementation:c}}function o0(s){if(!s)return qs;s=s._reactInternals;e:{if(nr(s)!==s||s.tag!==1)throw Error(t(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(yn(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(s.tag===1){var c=s.type;if(yn(c))return Oy(s,c,o)}return o}function a0(s,o,c,h,g,y,T,N,j){return s=Zp(c,h,!0,s,g,y,T,N,j),s.context=o0(null),c=s.current,h=pn(),g=Js(c),y=hs(h,g),y.callback=o??null,Ks(c,y,g),s.current.lanes=g,Ms(s,g,h),xn(s,h),s}function Ed(s,o,c,h){var g=o.current,y=pn(),T=Js(g);return c=o0(c),o.context===null?o.context=c:o.pendingContext=c,o=hs(y,T),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Ks(g,o,T),s!==null&&(pr(s,g,T,y),Zu(s,g,T)),T}function Td(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function l0(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var c=s.retryLane;s.retryLane=c!==0&&c<o?c:o}}function em(s,o){l0(s,o),(s=s.alternate)&&l0(s,o)}function NC(){return null}var c0=typeof reportError=="function"?reportError:function(s){console.error(s)};function tm(s){this._internalRoot=s}bd.prototype.render=tm.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(t(409));Ed(s,o,null,null)},bd.prototype.unmount=tm.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;no(function(){Ed(null,s,null,null)}),o[as]=null}};function bd(s){this._internalRoot=s}bd.prototype.unstable_scheduleHydration=function(s){if(s){var o=bu();s={blockedOn:null,target:s,priority:o};for(var c=0;c<Nr.length&&o!==0&&o<Nr[c].priority;c++);Nr.splice(c,0,s),c===0&&Nu(s)}};function nm(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function Id(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function u0(){}function kC(s,o,c,h,g){if(g){if(typeof h=="function"){var y=h;h=function(){var W=Td(T);y.call(W)}}var T=a0(o,h,s,0,null,!1,!1,"",u0);return s._reactRootContainer=T,s[as]=T.current,Ml(s.nodeType===8?s.parentNode:s),no(),T}for(;g=s.lastChild;)s.removeChild(g);if(typeof h=="function"){var N=h;h=function(){var W=Td(j);N.call(W)}}var j=Zp(s,0,!1,null,null,!1,!1,"",u0);return s._reactRootContainer=j,s[as]=j.current,Ml(s.nodeType===8?s.parentNode:s),no(function(){Ed(o,j,c,h)}),j}function Cd(s,o,c,h,g){var y=c._reactRootContainer;if(y){var T=y;if(typeof g=="function"){var N=g;g=function(){var j=Td(T);N.call(j)}}Ed(o,T,s,g)}else T=kC(c,o,s,g,h);return Td(T)}Eu=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var c=Os(o.pendingLanes);c!==0&&(Ls(o,c|1),xn(o,at()),(Xe&6)===0&&(va=at()+500,Hs()))}break;case 13:no(function(){var h=ds(s,1);if(h!==null){var g=pn();pr(h,s,1,g)}}),em(s,1)}},Wo=function(s){if(s.tag===13){var o=ds(s,134217728);if(o!==null){var c=pn();pr(o,s,134217728,c)}em(s,134217728)}},Tu=function(s){if(s.tag===13){var o=Js(s),c=ds(s,o);if(c!==null){var h=pn();pr(c,s,o,h)}em(s,o)}},bu=function(){return We},Iu=function(s,o){var c=We;try{return We=s,o()}finally{We=c}},Do=function(s,o,c){switch(o){case"input":if(al(s,c),o=c.name,c.type==="radio"&&o!=null){for(c=s;c.parentNode;)c=c.parentNode;for(c=c.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<c.length;o++){var h=c[o];if(h!==s&&h.form===s.form){var g=$u(h);if(!g)throw Error(t(90));Zn(h),al(h,g)}}}break;case"textarea":jo(s,c);break;case"select":o=c.value,o!=null&&Zr(s,!!c.multiple,o,!1)}},Mi=Gp,_l=no;var SC={usingClientEntryPoint:!1,Events:[Fl,oa,$u,Ir,gl,Gp]},Zl={findFiberByHostInstance:Ki,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},AC={bundleType:Zl.bundleType,version:Zl.version,rendererPackageName:Zl.rendererPackageName,rendererConfig:Zl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=wl(s),s===null?null:s.stateNode},findFiberByHostInstance:Zl.findFiberByHostInstance||NC,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nd.isDisabled&&Nd.supportsFiber)try{zi=Nd.inject(AC),jn=Nd}catch{}}return En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=SC,En.createPortal=function(s,o){var c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nm(o))throw Error(t(200));return CC(s,o,null,c)},En.createRoot=function(s,o){if(!nm(s))throw Error(t(299));var c=!1,h="",g=c0;return o!=null&&(o.unstable_strictMode===!0&&(c=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(g=o.onRecoverableError)),o=Zp(s,1,!1,null,null,c,!1,h,g),s[as]=o.current,Ml(s.nodeType===8?s.parentNode:s),new tm(o)},En.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=wl(o),s=s===null?null:s.stateNode,s},En.flushSync=function(s){return no(s)},En.hydrate=function(s,o,c){if(!Id(o))throw Error(t(200));return Cd(null,s,o,!0,c)},En.hydrateRoot=function(s,o,c){if(!nm(s))throw Error(t(405));var h=c!=null&&c.hydratedSources||null,g=!1,y="",T=c0;if(c!=null&&(c.unstable_strictMode===!0&&(g=!0),c.identifierPrefix!==void 0&&(y=c.identifierPrefix),c.onRecoverableError!==void 0&&(T=c.onRecoverableError)),o=a0(o,null,s,1,c??null,g,!1,y,T),s[as]=o.current,Ml(s),h)for(s=0;s<h.length;s++)c=h[s],g=c._getVersion,g=g(c._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[c,g]:o.mutableSourceEagerHydrationData.push(c,g);return new bd(o)},En.render=function(s,o,c){if(!Id(o))throw Error(t(200));return Cd(null,s,o,!1,c)},En.unmountComponentAtNode=function(s){if(!Id(s))throw Error(t(40));return s._reactRootContainer?(no(function(){Cd(null,null,s,!1,function(){s._reactRootContainer=null,s[as]=null})}),!0):!1},En.unstable_batchedUpdates=Gp,En.unstable_renderSubtreeIntoContainer=function(s,o,c,h){if(!Id(c))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return Cd(s,o,c,!1,h)},En.version="18.3.1-next-f1338f8080-20240426",En}var y0;function UC(){if(y0)return im.exports;y0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),im.exports=FC(),im.exports}var v0;function zC(){if(v0)return kd;v0=1;var n=UC();return kd.createRoot=n.createRoot,kd.hydrateRoot=n.hydrateRoot,kd}var BC=zC(),re=Cg();const $C=jC(re),WC=PC({__proto__:null,default:$C},[re]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),HC=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),w0=n=>{const e=HC(n);return e.charAt(0).toUpperCase()+e.slice(1)},cE=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var GC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=re.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:l,...f},p)=>re.createElement("svg",{ref:p,...GC,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:cE("lucide",i),...f},[...l.map(([m,v])=>re.createElement(m,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=(n,e)=>{const t=re.forwardRef(({className:r,...i},a)=>re.createElement(KC,{ref:a,iconNode:e,className:cE(`lucide-${qC(w0(n))}`,`lucide-${n}`,r),...i}));return t.displayName=w0(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],YC=Te("arrow-left",QC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],$h=Te("award",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JC=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],uE=Te("bell",JC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],sh=Te("building-2",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],tN=Te("calendar",eN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],x0=Te("chart-column",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],sN=Te("check",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],oN=Te("chevron-left",iN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],lN=Te("chevron-right",aN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],E0=Te("circle-alert",cN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Nc=Te("circle-check-big",uN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],qd=Te("circle-help",dN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],fN=Te("circle-x",hN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],lc=Te("clock",pN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],lm=Te("dollar-sign",mN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],T0=Te("download",gN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],yN=Te("external-link",_N);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],b0=Te("file-text",vN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],xN=Te("flag",wN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],TN=Te("funnel",EN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],IN=Te("globe",bN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],NN=Te("house",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],SN=Te("info",kN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],dE=Te("log-in",AN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],PN=Te("log-out",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],ON=Te("mail",jN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],kc=Te("map-pin",DN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],LN=Te("menu",MN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],li=Te("message-circle",VN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=[["path",{d:"M5 12h14",key:"1ays0h"}]],UN=Te("minus",FN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],Ta=Te("package",zN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],$N=Te("paperclip",BN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],qN=Te("phone",WN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Dr=Te("plus",HN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],I0=Te("save",GN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],hE=Te("search",KN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],YN=Te("send",QN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XN=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],fE=Te("settings",XN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],ZN=Te("shield-alert",JN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],Dm=Te("shopping-cart",ek);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],nk=Te("smile",tk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],cm=Te("square-pen",rk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],ik=Te("star",sk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],ak=Te("store",ok);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],ck=Te("tag",lk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Sd=Te("trash-2",uk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Hd=Te("trending-up",dk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],C0=Te("triangle-alert",hk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],pk=Te("trophy",fk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],ih=Te("users",mk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],_k=Te("wrench",gk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ni=Te("x",yk);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],wk=Te("zap",vk);function N0(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function xk(...n){return e=>{let t=!1;const r=n.map(i=>{const a=N0(i,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():N0(n[i],null)}}}}var Ek=Symbol.for("react.lazy"),oh=WC[" use ".trim().toString()];function Tk(n){return typeof n=="object"&&n!==null&&"then"in n}function pE(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===Ek&&"_payload"in n&&Tk(n._payload)}function bk(n){const e=Ik(n),t=re.forwardRef((r,i)=>{let{children:a,...l}=r;pE(a)&&typeof oh=="function"&&(a=oh(a._payload));const f=re.Children.toArray(a),p=f.find(Nk);if(p){const m=p.props.children,v=f.map(x=>x===p?re.Children.count(m)>1?re.Children.only(null):re.isValidElement(m)?m.props.children:null:x);return d.jsx(e,{...l,ref:i,children:re.isValidElement(m)?re.cloneElement(m,void 0,v):null})}return d.jsx(e,{...l,ref:i,children:a})});return t.displayName=`${n}.Slot`,t}var mE=bk("Slot");function Ik(n){const e=re.forwardRef((t,r)=>{let{children:i,...a}=t;if(pE(i)&&typeof oh=="function"&&(i=oh(i._payload)),re.isValidElement(i)){const l=Sk(i),f=kk(a,i.props);return i.type!==re.Fragment&&(f.ref=r?xk(r,l):l),re.cloneElement(i,f)}return re.Children.count(i)>1?re.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var Ck=Symbol("radix.slottable");function Nk(n){return re.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===Ck}function kk(n,e){const t={...e};for(const r in e){const i=n[r],a=e[r];/^on[A-Z]/.test(r)?i&&a?t[r]=(...f)=>{const p=a(...f);return i(...f),p}:i&&(t[r]=i):r==="style"?t[r]={...i,...a}:r==="className"&&(t[r]=[i,a].filter(Boolean).join(" "))}return{...n,...t}}function Sk(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function gE(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=gE(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function _E(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=gE(n))&&(r&&(r+=" "),r+=e);return r}const k0=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,S0=_E,yE=(n,e)=>t=>{var r;if(e?.variants==null)return S0(n,t?.class,t?.className);const{variants:i,defaultVariants:a}=e,l=Object.keys(i).map(m=>{const v=t?.[m],x=a?.[m];if(v===null)return null;const E=k0(v)||k0(x);return i[m][E]}),f=t&&Object.entries(t).reduce((m,v)=>{let[x,E]=v;return E===void 0||(m[x]=E),m},{}),p=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((m,v)=>{let{class:x,className:E,...A}=v;return Object.entries(A).every(M=>{let[U,L]=M;return Array.isArray(L)?L.includes({...a,...f}[U]):{...a,...f}[U]===L})?[...m,x,E]:m},[]);return S0(n,l,p,t?.class,t?.className)},Ak=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},Rk=(n,e)=>({classGroupId:n,validator:e}),vE=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),ah="-",A0=[],Pk="arbitrary..",jk=n=>{const e=Dk(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:l=>{if(l.startsWith("[")&&l.endsWith("]"))return Ok(l);const f=l.split(ah),p=f[0]===""&&f.length>1?1:0;return wE(f,p,e)},getConflictingClassGroupIds:(l,f)=>{if(f){const p=r[l],m=t[l];return p?m?Ak(m,p):p:m||A0}return t[l]||A0}}},wE=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const i=n[e],a=t.nextPart.get(i);if(a){const m=wE(n,e+1,a);if(m)return m}const l=t.validators;if(l===null)return;const f=e===0?n.join(ah):n.slice(e).join(ah),p=l.length;for(let m=0;m<p;m++){const v=l[m];if(v.validator(f))return v.classGroupId}},Ok=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?Pk+r:void 0})(),Dk=n=>{const{theme:e,classGroups:t}=n;return Mk(t,e)},Mk=(n,e)=>{const t=vE();for(const r in n){const i=n[r];Ng(i,t,r,e)}return t},Ng=(n,e,t,r)=>{const i=n.length;for(let a=0;a<i;a++){const l=n[a];Lk(l,e,t,r)}},Lk=(n,e,t,r)=>{if(typeof n=="string"){Vk(n,e,t);return}if(typeof n=="function"){Fk(n,e,t,r);return}Uk(n,e,t,r)},Vk=(n,e,t)=>{const r=n===""?e:xE(e,n);r.classGroupId=t},Fk=(n,e,t,r)=>{if(zk(n)){Ng(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(Rk(t,n))},Uk=(n,e,t,r)=>{const i=Object.entries(n),a=i.length;for(let l=0;l<a;l++){const[f,p]=i[l];Ng(p,xE(e,f),t,r)}},xE=(n,e)=>{let t=n;const r=e.split(ah),i=r.length;for(let a=0;a<i;a++){const l=r[a];let f=t.nextPart.get(l);f||(f=vE(),t.nextPart.set(l,f)),t=f}return t},zk=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,Bk=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const i=(a,l)=>{t[a]=l,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(a){let l=t[a];if(l!==void 0)return l;if((l=r[a])!==void 0)return i(a,l),l},set(a,l){a in t?t[a]=l:i(a,l)}}},Mm="!",R0=":",$k=[],P0=(n,e,t,r,i)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:i}),Wk=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=i=>{const a=[];let l=0,f=0,p=0,m;const v=i.length;for(let U=0;U<v;U++){const L=i[U];if(l===0&&f===0){if(L===R0){a.push(i.slice(p,U)),p=U+1;continue}if(L==="/"){m=U;continue}}L==="["?l++:L==="]"?l--:L==="("?f++:L===")"&&f--}const x=a.length===0?i:i.slice(p);let E=x,A=!1;x.endsWith(Mm)?(E=x.slice(0,-1),A=!0):x.startsWith(Mm)&&(E=x.slice(1),A=!0);const M=m&&m>p?m-p:void 0;return P0(a,A,E,M)};if(e){const i=e+R0,a=r;r=l=>l.startsWith(i)?a(l.slice(i.length)):P0($k,!1,l,void 0,!0)}if(t){const i=r;r=a=>t({className:a,parseClassName:i})}return r},qk=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let i=[];for(let a=0;a<t.length;a++){const l=t[a],f=l[0]==="[",p=e.has(l);f||p?(i.length>0&&(i.sort(),r.push(...i),i=[]),r.push(l)):i.push(l)}return i.length>0&&(i.sort(),r.push(...i)),r}},Hk=n=>({cache:Bk(n.cacheSize),parseClassName:Wk(n),sortModifiers:qk(n),...jk(n)}),Gk=/\s+/,Kk=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=e,l=[],f=n.trim().split(Gk);let p="";for(let m=f.length-1;m>=0;m-=1){const v=f[m],{isExternal:x,modifiers:E,hasImportantModifier:A,baseClassName:M,maybePostfixModifierPosition:U}=t(v);if(x){p=v+(p.length>0?" "+p:p);continue}let L=!!U,Q=r(L?M.substring(0,U):M);if(!Q){if(!L){p=v+(p.length>0?" "+p:p);continue}if(Q=r(M),!Q){p=v+(p.length>0?" "+p:p);continue}L=!1}const ee=E.length===0?"":E.length===1?E[0]:a(E).join(":"),ae=A?ee+Mm:ee,G=ae+Q;if(l.indexOf(G)>-1)continue;l.push(G);const ce=i(Q,L);for(let me=0;me<ce.length;++me){const O=ce[me];l.push(ae+O)}p=v+(p.length>0?" "+p:p)}return p},Qk=(...n)=>{let e=0,t,r,i="";for(;e<n.length;)(t=n[e++])&&(r=EE(t))&&(i&&(i+=" "),i+=r);return i},EE=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=EE(n[r]))&&(t&&(t+=" "),t+=e);return t},Yk=(n,...e)=>{let t,r,i,a;const l=p=>{const m=e.reduce((v,x)=>x(v),n());return t=Hk(m),r=t.cache.get,i=t.cache.set,a=f,f(p)},f=p=>{const m=r(p);if(m)return m;const v=Kk(p,t);return i(p,v),v};return a=l,(...p)=>a(Qk(...p))},Xk=[],Ot=n=>{const e=t=>t[n]||Xk;return e.isThemeGetter=!0,e},TE=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,bE=/^\((?:(\w[\w-]*):)?(.+)\)$/i,Jk=/^\d+\/\d+$/,Zk=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,eS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,tS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,nS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,rS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,xa=n=>Jk.test(n),De=n=>!!n&&!Number.isNaN(Number(n)),ni=n=>!!n&&Number.isInteger(Number(n)),um=n=>n.endsWith("%")&&De(n.slice(0,-1)),ms=n=>Zk.test(n),sS=()=>!0,iS=n=>eS.test(n)&&!tS.test(n),IE=()=>!1,oS=n=>nS.test(n),aS=n=>rS.test(n),lS=n=>!_e(n)&&!ye(n),cS=n=>Ka(n,kE,IE),_e=n=>TE.test(n),oo=n=>Ka(n,SE,iS),dm=n=>Ka(n,pS,De),j0=n=>Ka(n,CE,IE),uS=n=>Ka(n,NE,aS),Ad=n=>Ka(n,AE,oS),ye=n=>bE.test(n),tc=n=>Qa(n,SE),dS=n=>Qa(n,mS),O0=n=>Qa(n,CE),hS=n=>Qa(n,kE),fS=n=>Qa(n,NE),Rd=n=>Qa(n,AE,!0),Ka=(n,e,t)=>{const r=TE.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Qa=(n,e,t=!1)=>{const r=bE.exec(n);return r?r[1]?e(r[1]):t:!1},CE=n=>n==="position"||n==="percentage",NE=n=>n==="image"||n==="url",kE=n=>n==="length"||n==="size"||n==="bg-size",SE=n=>n==="length",pS=n=>n==="number",mS=n=>n==="family-name",AE=n=>n==="shadow",gS=()=>{const n=Ot("color"),e=Ot("font"),t=Ot("text"),r=Ot("font-weight"),i=Ot("tracking"),a=Ot("leading"),l=Ot("breakpoint"),f=Ot("container"),p=Ot("spacing"),m=Ot("radius"),v=Ot("shadow"),x=Ot("inset-shadow"),E=Ot("text-shadow"),A=Ot("drop-shadow"),M=Ot("blur"),U=Ot("perspective"),L=Ot("aspect"),Q=Ot("ease"),ee=Ot("animate"),ae=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],ce=()=>[...G(),ye,_e],me=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],I=()=>[ye,_e,p],k=()=>[xa,"full","auto",...I()],C=()=>[ni,"none","subgrid",ye,_e],P=()=>["auto",{span:["full",ni,ye,_e]},ni,ye,_e],R=()=>[ni,"auto",ye,_e],S=()=>["auto","min","max","fr",ye,_e],qe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],He=()=>["start","end","center","stretch","center-safe","end-safe"],Ge=()=>["auto",...I()],Pe=()=>[xa,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],B=()=>[n,ye,_e],le=()=>[...G(),O0,j0,{position:[ye,_e]}],te=()=>["no-repeat",{repeat:["","x","y","space","round"]}],V=()=>["auto","cover","contain",hS,cS,{size:[ye,_e]}],H=()=>[um,tc,oo],oe=()=>["","none","full",m,ye,_e],he=()=>["",De,tc,oo],fe=()=>["solid","dashed","dotted","double"],Oe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],be=()=>[De,um,O0,j0],Ue=()=>["","none",M,ye,_e],Ye=()=>["none",De,ye,_e],rt=()=>["none",De,ye,_e],Pn=()=>[De,ye,_e],Zn=()=>[xa,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ms],breakpoint:[ms],color:[sS],container:[ms],"drop-shadow":[ms],ease:["in","out","in-out"],font:[lS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ms],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ms],shadow:[ms],spacing:["px",De],text:[ms],"text-shadow":[ms],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",xa,_e,ye,L]}],container:["container"],columns:[{columns:[De,_e,ye,f]}],"break-after":[{"break-after":ae()}],"break-before":[{"break-before":ae()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:ce()}],overflow:[{overflow:me()}],"overflow-x":[{"overflow-x":me()}],"overflow-y":[{"overflow-y":me()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:k()}],"inset-x":[{"inset-x":k()}],"inset-y":[{"inset-y":k()}],start:[{start:k()}],end:[{end:k()}],top:[{top:k()}],right:[{right:k()}],bottom:[{bottom:k()}],left:[{left:k()}],visibility:["visible","invisible","collapse"],z:[{z:[ni,"auto",ye,_e]}],basis:[{basis:[xa,"full","auto",f,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[De,xa,"auto","initial","none",_e]}],grow:[{grow:["",De,ye,_e]}],shrink:[{shrink:["",De,ye,_e]}],order:[{order:[ni,"first","last","none",ye,_e]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:P()}],"col-start":[{"col-start":R()}],"col-end":[{"col-end":R()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:P()}],"row-start":[{"row-start":R()}],"row-end":[{"row-end":R()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":S()}],"auto-rows":[{"auto-rows":S()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...qe(),"normal"]}],"justify-items":[{"justify-items":[...He(),"normal"]}],"justify-self":[{"justify-self":["auto",...He()]}],"align-content":[{content:["normal",...qe()]}],"align-items":[{items:[...He(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...He(),{baseline:["","last"]}]}],"place-content":[{"place-content":qe()}],"place-items":[{"place-items":[...He(),"baseline"]}],"place-self":[{"place-self":["auto",...He()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:Ge()}],mx:[{mx:Ge()}],my:[{my:Ge()}],ms:[{ms:Ge()}],me:[{me:Ge()}],mt:[{mt:Ge()}],mr:[{mr:Ge()}],mb:[{mb:Ge()}],ml:[{ml:Ge()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:Pe()}],w:[{w:[f,"screen",...Pe()]}],"min-w":[{"min-w":[f,"screen","none",...Pe()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[l]},...Pe()]}],h:[{h:["screen","lh",...Pe()]}],"min-h":[{"min-h":["screen","lh","none",...Pe()]}],"max-h":[{"max-h":["screen","lh",...Pe()]}],"font-size":[{text:["base",t,tc,oo]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ye,dm]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",um,_e]}],"font-family":[{font:[dS,_e,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,ye,_e]}],"line-clamp":[{"line-clamp":[De,"none",ye,dm]}],leading:[{leading:[a,...I()]}],"list-image":[{"list-image":["none",ye,_e]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ye,_e]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...fe(),"wavy"]}],"text-decoration-thickness":[{decoration:[De,"from-font","auto",ye,oo]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[De,"auto",ye,_e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ye,_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ye,_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:le()}],"bg-repeat":[{bg:te()}],"bg-size":[{bg:V()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},ni,ye,_e],radial:["",ye,_e],conic:[ni,ye,_e]},fS,uS]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:oe()}],"rounded-s":[{"rounded-s":oe()}],"rounded-e":[{"rounded-e":oe()}],"rounded-t":[{"rounded-t":oe()}],"rounded-r":[{"rounded-r":oe()}],"rounded-b":[{"rounded-b":oe()}],"rounded-l":[{"rounded-l":oe()}],"rounded-ss":[{"rounded-ss":oe()}],"rounded-se":[{"rounded-se":oe()}],"rounded-ee":[{"rounded-ee":oe()}],"rounded-es":[{"rounded-es":oe()}],"rounded-tl":[{"rounded-tl":oe()}],"rounded-tr":[{"rounded-tr":oe()}],"rounded-br":[{"rounded-br":oe()}],"rounded-bl":[{"rounded-bl":oe()}],"border-w":[{border:he()}],"border-w-x":[{"border-x":he()}],"border-w-y":[{"border-y":he()}],"border-w-s":[{"border-s":he()}],"border-w-e":[{"border-e":he()}],"border-w-t":[{"border-t":he()}],"border-w-r":[{"border-r":he()}],"border-w-b":[{"border-b":he()}],"border-w-l":[{"border-l":he()}],"divide-x":[{"divide-x":he()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":he()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...fe(),"hidden","none"]}],"divide-style":[{divide:[...fe(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...fe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[De,ye,_e]}],"outline-w":[{outline:["",De,tc,oo]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",v,Rd,Ad]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",x,Rd,Ad]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:he()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[De,oo]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":he()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",E,Rd,Ad]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[De,ye,_e]}],"mix-blend":[{"mix-blend":[...Oe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Oe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[De]}],"mask-image-linear-from-pos":[{"mask-linear-from":be()}],"mask-image-linear-to-pos":[{"mask-linear-to":be()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":be()}],"mask-image-t-to-pos":[{"mask-t-to":be()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":be()}],"mask-image-r-to-pos":[{"mask-r-to":be()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":be()}],"mask-image-b-to-pos":[{"mask-b-to":be()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":be()}],"mask-image-l-to-pos":[{"mask-l-to":be()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":be()}],"mask-image-x-to-pos":[{"mask-x-to":be()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":be()}],"mask-image-y-to-pos":[{"mask-y-to":be()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[ye,_e]}],"mask-image-radial-from-pos":[{"mask-radial-from":be()}],"mask-image-radial-to-pos":[{"mask-radial-to":be()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":G()}],"mask-image-conic-pos":[{"mask-conic":[De]}],"mask-image-conic-from-pos":[{"mask-conic-from":be()}],"mask-image-conic-to-pos":[{"mask-conic-to":be()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:le()}],"mask-repeat":[{mask:te()}],"mask-size":[{mask:V()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ye,_e]}],filter:[{filter:["","none",ye,_e]}],blur:[{blur:Ue()}],brightness:[{brightness:[De,ye,_e]}],contrast:[{contrast:[De,ye,_e]}],"drop-shadow":[{"drop-shadow":["","none",A,Rd,Ad]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",De,ye,_e]}],"hue-rotate":[{"hue-rotate":[De,ye,_e]}],invert:[{invert:["",De,ye,_e]}],saturate:[{saturate:[De,ye,_e]}],sepia:[{sepia:["",De,ye,_e]}],"backdrop-filter":[{"backdrop-filter":["","none",ye,_e]}],"backdrop-blur":[{"backdrop-blur":Ue()}],"backdrop-brightness":[{"backdrop-brightness":[De,ye,_e]}],"backdrop-contrast":[{"backdrop-contrast":[De,ye,_e]}],"backdrop-grayscale":[{"backdrop-grayscale":["",De,ye,_e]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[De,ye,_e]}],"backdrop-invert":[{"backdrop-invert":["",De,ye,_e]}],"backdrop-opacity":[{"backdrop-opacity":[De,ye,_e]}],"backdrop-saturate":[{"backdrop-saturate":[De,ye,_e]}],"backdrop-sepia":[{"backdrop-sepia":["",De,ye,_e]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ye,_e]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[De,"initial",ye,_e]}],ease:[{ease:["linear","initial",Q,ye,_e]}],delay:[{delay:[De,ye,_e]}],animate:[{animate:["none",ee,ye,_e]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[U,ye,_e]}],"perspective-origin":[{"perspective-origin":ce()}],rotate:[{rotate:Ye()}],"rotate-x":[{"rotate-x":Ye()}],"rotate-y":[{"rotate-y":Ye()}],"rotate-z":[{"rotate-z":Ye()}],scale:[{scale:rt()}],"scale-x":[{"scale-x":rt()}],"scale-y":[{"scale-y":rt()}],"scale-z":[{"scale-z":rt()}],"scale-3d":["scale-3d"],skew:[{skew:Pn()}],"skew-x":[{"skew-x":Pn()}],"skew-y":[{"skew-y":Pn()}],transform:[{transform:[ye,_e,"","none","gpu","cpu"]}],"transform-origin":[{origin:ce()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Zn()}],"translate-x":[{"translate-x":Zn()}],"translate-y":[{"translate-y":Zn()}],"translate-z":[{"translate-z":Zn()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ye,_e]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ye,_e]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[De,tc,oo,dm]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},_S=Yk(gS);function kg(...n){return _S(_E(n))}const yS=yE("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function Cn({className:n,variant:e,asChild:t=!1,...r}){const i=t?mE:"span";return d.jsx(i,{"data-slot":"badge",className:kg(yS({variant:e}),n),...r})}function vS(n){const[e,t]=re.useState("idle");return re.useEffect(()=>{if(window.google?.maps){t("ready");return}const r=document.querySelector("script[data-google-maps]");if(r){r.addEventListener("load",()=>t("ready")),r.addEventListener("error",()=>t("error")),t("loading");return}const i=document.createElement("script");return i.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,i.async=!0,i.defer=!0,i.setAttribute("data-google-maps","true"),i.onload=()=>t("ready"),i.onerror=()=>t("error"),document.head.appendChild(i),t("loading"),()=>{i.onload=null,i.onerror=null}},[n]),e}const wS={lat:-23.55052,lng:-46.633308},hm=8;function xS({pins:n,onPinClick:e,onCreatePin:t,isLoggedIn:r}){const i=re.useRef(null),a=re.useRef(null),l=re.useRef(null),f=re.useRef(null),p=re.useRef([]),[m,v]=re.useState(null),[x,E]=re.useState(null),M=vS("AIzaSyC9L73Xsb0F3DHMlsjRH-HlcHdqqbNknmw"),U=re.useMemo(()=>m?n.filter(L=>ES(m,{lat:L.lat,lng:L.lng})<=hm):n,[n,m]);return re.useEffect(()=>{M!=="ready"||a.current||!i.current||(a.current=new google.maps.Map(i.current,{center:wS,zoom:13,disableDefaultUI:!0,zoomControl:!0,streetViewControl:!1,mapTypeControl:!1}))},[M]),re.useEffect(()=>{if(M!=="ready")return;const L=navigator.geolocation.watchPosition(Q=>{const ee={lat:Q.coords.latitude,lng:Q.coords.longitude};v(ee),E(null)},Q=>{E(Q.message||"Não foi possível obter sua localização.")},{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4});return()=>navigator.geolocation.clearWatch(L)},[M]),re.useEffect(()=>{!a.current||!m||M!=="ready"||(a.current.setCenter(m),a.current.setZoom(15),l.current?l.current.setPosition(m):l.current=new google.maps.Marker({map:a.current,position:m,icon:{path:google.maps.SymbolPath.CIRCLE,scale:10,fillColor:"#2563eb",fillOpacity:1,strokeColor:"#ffffff",strokeWeight:3},title:"Você está aqui"}),f.current?f.current.setCenter(m):f.current=new google.maps.Circle({map:a.current,center:m,radius:hm*1e3,fillColor:"#3b82f6",fillOpacity:.08,strokeColor:"#2563eb",strokeOpacity:.5,strokeWeight:1}))},[m,M]),re.useEffect(()=>{if(!(!a.current||M!=="ready"))return p.current.forEach(L=>L.setMap(null)),p.current=[],U.forEach(L=>{const Q=new google.maps.Marker({map:a.current,position:{lat:L.lat,lng:L.lng},title:L.name,icon:{path:"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z",fillColor:L.type==="business"?"#3b82f6":L.type==="public"?"#22c55e":"#a855f7",fillOpacity:1,strokeColor:"#ffffff",strokeWeight:2,scale:1.2,anchor:new google.maps.Point(12,24)}});Q.addListener("click",()=>e(L)),p.current.push(Q)}),()=>{p.current.forEach(L=>L.setMap(null)),p.current=[]}},[U,e,M]),d.jsxs("div",{className:"relative w-full h-full",children:[d.jsx("div",{ref:i,className:"absolute inset-0 rounded-2xl overflow-hidden bg-gray-100"}),M==="error"&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/90 text-sm text-red-600",children:"Configure a chave `VITE_GOOGLE_MAPS_API_KEY` para carregar o mapa."}),x&&d.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2 text-xs text-gray-700",children:x}),d.jsx("div",{className:"absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-10",children:d.jsxs("div",{className:"bg-white rounded-full shadow-lg border border-gray-200 flex items-center p-2",children:[d.jsx(hE,{className:"w-5 h-5 text-gray-400 ml-2"}),d.jsx("input",{type:"text",placeholder:"Buscar endereço, estabelecimento ou serviço...",className:"flex-1 px-4 py-2 focus:outline-none"}),d.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(TN,{className:"w-5 h-5 text-gray-600"})})]})}),d.jsxs("div",{className:"absolute top-20 left-4 flex flex-wrap gap-2 z-10",children:[d.jsx(Cn,{variant:"default",className:"bg-white text-gray-900 hover:bg-gray-100 cursor-pointer",children:"Todos"}),d.jsx(Cn,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Comércios"}),d.jsx(Cn,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Serviços públicos"}),d.jsx(Cn,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Pessoas"})]}),r&&d.jsx("button",{onClick:t,className:"absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-10",children:d.jsx(Dr,{className:"w-7 h-7"})}),d.jsxs("div",{className:"absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 z-10",children:[d.jsx("h4",{className:"text-sm text-gray-900 mb-3",children:"Legenda"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Comércios"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Serviços públicos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Pessoas/Grupos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 border border-blue-500/60 rounded-full"}),d.jsxs("span",{className:"text-xs text-gray-700",children:["Raio ",hm," km"]})]})]})]})]})}function ES(n,e){const r=Pd(e.lat-n.lat),i=Pd(e.lng-n.lng),a=Pd(n.lat),l=Pd(e.lat),f=Math.sin(r/2),p=Math.sin(i/2),m=f*f+p*p*Math.cos(a)*Math.cos(l);return 6371*(2*Math.atan2(Math.sqrt(m),Math.sqrt(1-m)))}function Pd(n){return n*Math.PI/180}const TS=yE("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Ze({className:n,variant:e,size:t,asChild:r=!1,...i}){const a=r?mE:"button";return d.jsx(a,{"data-slot":"button",className:kg(TS({variant:e,size:t,className:n})),...i})}function bS({isOpen:n,onClose:e,isLoggedIn:t,currentUser:r,onOpenRewards:i,onOpenModeration:a}){const l=[{icon:NN,label:"Início",href:"#"},{icon:SN,label:"Como funciona",href:"#como-funciona"},{icon:ih,label:"Para pessoas",href:"#pessoas"},{icon:sh,label:"Para negócios",href:"#negocios"},{icon:sh,label:"Para serviços públicos",href:"#servicos"},{icon:qd,label:"FAQ",href:"#faq"}],f=t?[{icon:$h,label:"Minhas recompensas",action:i},{icon:ZN,label:"Moderação",action:a},{icon:fE,label:"Configurações",href:"#config"}]:[];return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"p-6 border-b border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white",children:"G"})}),d.jsx("span",{className:"text-gray-900",children:"Groupby.Me"})]}),d.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(Ni,{className:"w-6 h-6 text-gray-600"})})]}),t&&r&&d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white",children:r.name.charAt(0)})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:r.name}),d.jsx("div",{className:"text-sm text-gray-600",children:r.email})]})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"text-sm text-gray-700",children:["Nível ",r.level]}),d.jsxs("div",{className:"bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm",children:[r.points," pontos"]})]})]})]}),d.jsxs("nav",{className:"p-4",children:[d.jsx("div",{className:"space-y-1",children:l.map(p=>d.jsxs("a",{href:p.href,onClick:e,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(p.icon,{className:"w-5 h-5"}),d.jsx("span",{children:p.label})]},p.label))}),t&&f.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-4 border-t border-gray-200"}),d.jsx("div",{className:"space-y-1",children:f.map(p=>d.jsxs("button",{onClick:()=>{p.action?p.action():e()},className:"w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(p.icon,{className:"w-5 h-5"}),d.jsx("span",{children:p.label})]},p.label))})]})]}),d.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white",children:[d.jsx("div",{className:"text-xs text-gray-500 mb-3",children:"© 2024 Groupby.Me • Internet 4.0 • Figital"}),t&&d.jsxs(Ze,{variant:"outline",className:"w-full",children:[d.jsx(PN,{className:"w-4 h-4 mr-2"}),"Sair"]})]})]})]}):null}function IS({isLoggedIn:n,currentUser:e,onMenuClick:t,onNotificationClick:r,onLogin:i,onLogout:a}){return d.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm z-30",children:d.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:d.jsx(LN,{className:"w-6 h-6 text-gray-700"})}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white text-sm",children:"G"})}),d.jsx("span",{className:"text-gray-900 hidden sm:inline",children:"Groupby.Me"})]})]}),d.jsx("div",{className:"flex items-center gap-2",children:n?d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:r,className:"relative p-2 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(uE,{className:"w-6 h-6 text-gray-700"}),d.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-3 ml-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx($h,{className:"w-4 h-4 text-blue-600"}),d.jsxs("span",{className:"text-sm text-gray-700",children:["Nível ",e?.level]})]}),d.jsxs(Cn,{variant:"secondary",className:"bg-yellow-100 text-yellow-800",children:[e?.points," pts"]})]}),d.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white text-sm",children:e?.name?.charAt(0)||"U"})}),d.jsx("span",{className:"text-sm text-gray-900 hidden md:inline",children:e?.name})]})]}):d.jsxs(Ze,{onClick:i,className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(dE,{className:"w-4 h-4 mr-2"}),"Entrar"]})})]})})}function CS({isOpen:n,onClose:e,onCreate:t,currentUser:r}){const[i,a]=re.useState(1),[l,f]=re.useState("personal"),[p,m]=re.useState(""),[v,x]=re.useState(null),[E,A]=re.useState({name:"",description:"",phone:"",email:"",cnpj:"",website:"",hours:"",categories:[],products:"",services:""}),M=re.useRef(null);re.useRef(null),re.useRef(null);const U="AIzaSyC9L73Xsb0F3DHMlsjRH-HlcHdqqbNknmw",[L,Q]=re.useState(null),[ee,ae]=re.useState("idle"),[G,ce]=re.useState([]),[me,O]=re.useState(!1),I=re.useRef(crypto.randomUUID()),k=()=>{t({type:l,name:E.name,lat:v?.lat||-23.55052,lng:v?.lng||-46.633308,address:v?.address||p,description:E.description,businessInfo:l!=="personal"?{cnpj:E.cnpj,phone:E.phone,email:E.email,website:E.website,hours:E.hours,categories:E.categories,products:E.products.split(",").map(R=>R.trim()),services:E.services.split(",").map(R=>R.trim())}:void 0}),a(1),A({name:"",description:"",phone:"",email:"",cnpj:"",website:"",hours:"",categories:[],products:"",services:""})};re.useEffect(()=>{ae("ready"),Q(null)},[U]),re.useEffect(()=>{if(ee!=="ready")return;if(!p||p.length<3){ce([]);return}O(!0);const R=new AbortController,S=async()=>{try{const He=await fetch(`https://places.googleapis.com/v1/places:autocomplete?key=${U}`,{method:"POST",mode:"cors",signal:R.signal,headers:{"Content-Type":"application/json","X-Goog-FieldMask":"predictions.placeId,predictions.text","X-Goog-Session-Token":I.current},body:JSON.stringify({input:p,types:["route","street_address"]})});if(!He.ok)throw new Error("Falha ao consultar Places API (New)");const Pe=((await He.json())?.predictions||[]).map(B=>({placeId:B.placeId,mainText:B.text?.primaryText||B.text?.text||"",secondaryText:B.text?.secondaryText||""}));ce(Pe),Q(Pe.length===0?"Nenhum endereço encontrado. Refine a busca.":null)}catch(He){He.name!=="AbortError"&&(Q(He.message||"Erro ao buscar endereços."),ce([]))}finally{O(!1)}},qe=window.setTimeout(S,300);return()=>{R.abort(),window.clearTimeout(qe)}},[U,p,ee]);const C=async R=>{try{const S=await fetch(`https://places.googleapis.com/v1/places/${R.placeId}?key=${U}`,{method:"GET",headers:{"X-Goog-FieldMask":"id,displayName,formattedAddress,location","X-Goog-Session-Token":I.current}});if(!S.ok)throw new Error("Não foi possível obter detalhes do endereço.");const qe=await S.json(),He=qe?.location?.latitude,Ge=qe?.location?.longitude,Pe=qe?.formattedAddress||qe?.displayName?.text||p;if(He===void 0||Ge===void 0)throw new Error("Endereço sem coordenadas.");x({address:Pe,lat:He,lng:Ge}),m(Pe),ce([]),Q(null),I.current=crypto.randomUUID()}catch(S){Q(S.message||"Erro ao obter detalhes do endereço.")}},P=()=>{G.length>0?C(G[0]):p.length>=3&&Q("Selecione uma sugestão da lista para validar o endereço.")};return n?d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 p-6 flex items-center justify-between",children:[d.jsx("h2",{className:"text-white",children:"Criar novo pino"}),d.jsx("button",{onClick:e,className:"w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors",children:d.jsx(Ni,{className:"w-6 h-6 text-white"})})]}),d.jsxs("div",{className:"px-6 py-4 border-b border-gray-200",children:[d.jsx("div",{className:"flex items-center gap-2",children:[1,2,3].map(R=>d.jsxs("div",{className:"flex items-center flex-1",children:[d.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${i>=R?"bg-blue-600 text-white":"bg-gray-200 text-gray-500"}`,children:R}),R<3&&d.jsx("div",{className:`flex-1 h-1 mx-2 ${i>R?"bg-blue-600":"bg-gray-200"}`})]},R))}),d.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-600",children:[d.jsx("span",{children:"Tipo"}),d.jsx("span",{children:"Localização"}),d.jsx("span",{children:"Detalhes"})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[i===1&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Selecione o tipo de pino"}),d.jsx("button",{onClick:()=>f("personal"),className:`w-full p-6 rounded-xl border-2 transition-all ${l==="personal"?"border-purple-500 bg-purple-50":"border-gray-200 hover:border-purple-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center",children:d.jsx(ih,{className:"w-6 h-6 text-purple-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Pessoa física / Grupo"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Crie um pino para você ou um grupo de pessoas. Chat em grupo (n:n)."})]})]})}),d.jsx("button",{onClick:()=>f("business"),className:`w-full p-6 rounded-xl border-2 transition-all ${l==="business"?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",children:d.jsx(sh,{className:"w-6 h-6 text-blue-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Negócio / Empresa"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Cadastre seu estabelecimento comercial. Chat privado (1:1) com clientes."})]})]})}),d.jsx("button",{onClick:()=>f("public"),className:`w-full p-6 rounded-xl border-2 transition-all ${l==="public"?"border-green-500 bg-green-50":"border-gray-200 hover:border-green-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center",children:d.jsx(sh,{className:"w-6 h-6 text-green-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Órgão público"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre um serviço público. Chat privado (1:1) com cidadãos."})]})]})})]}),i===2&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Encontre o endereço"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx(hE,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),d.jsx("input",{type:"text",ref:M,value:p,onChange:R=>m(R.target.value),placeholder:"Digite o nome da rua...",className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:ee==="loading"})]}),d.jsx(Ze,{className:"bg-blue-600 hover:bg-blue-700",type:"button",onClick:P,disabled:ee!=="ready",children:"Buscar"})]}),ee!=="ready"&&d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800",children:"Carregando Google Places..."}),L&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700",children:L}),me&&p.length>=3&&d.jsx("div",{className:"text-xs text-gray-500 mt-2",children:"Buscando sugestões..."}),G.length>0&&d.jsx("div",{className:"mt-3 border border-gray-200 rounded-lg divide-y max-h-48 overflow-y-auto bg-white shadow-sm",children:G.map(R=>d.jsxs("button",{type:"button",className:"w-full text-left px-4 py-3 hover:bg-gray-50 flex items-start gap-3",onClick:()=>C(R),children:[d.jsx(kc,{className:"w-5 h-5 text-green-600 mt-0.5"}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900 text-sm font-medium",children:R.mainText}),d.jsx("div",{className:"text-xs text-gray-600",children:R.secondaryText})]})]},R.placeId))}),v&&d.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx(kc,{className:"w-5 h-5 text-green-600 mt-1"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Endereço encontrado"}),d.jsx("p",{className:"text-sm text-gray-600",children:v.address}),d.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Lat: ",v.lat.toFixed(6),", Lng: ",v.lng.toFixed(6)]})]})]})})]}),i===3&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Informações do pino"}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Nome *"}),d.jsx("input",{type:"text",value:E.name,onChange:R=>A({...E,name:R.target.value}),placeholder:l==="personal"?"Ex: Grupo Moradores da Rua X":"Ex: Farmácia Central",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Descrição"}),d.jsx("textarea",{value:E.description,onChange:R=>A({...E,description:R.target.value}),placeholder:"Descreva brevemente...",rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),l!=="personal"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Telefone *"}),d.jsx("input",{type:"tel",value:E.phone,onChange:R=>A({...E,phone:R.target.value}),placeholder:"(11) 98765-4321",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"E-mail *"}),d.jsx("input",{type:"email",value:E.email,onChange:R=>A({...E,email:R.target.value}),placeholder:"contato@exemplo.com",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),l==="business"&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"CNPJ *"}),d.jsx("input",{type:"text",value:E.cnpj,onChange:R=>A({...E,cnpj:R.target.value}),placeholder:"00.000.000/0000-00",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Horário de funcionamento"}),d.jsx("input",{type:"text",value:E.hours,onChange:R=>A({...E,hours:R.target.value}),placeholder:"Seg-Sex: 8h-18h, Sáb: 8h-12h",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm text-gray-700 mb-2",children:[l==="business"?"Produtos":"Serviços"," (separados por vírgula)"]}),d.jsx("input",{type:"text",value:l==="business"?E.products:E.services,onChange:R=>A({...E,[l==="business"?"products":"services"]:R.target.value}),placeholder:l==="business"?"Medicamentos, Cosméticos, Higiene":"Atendimento emergencial, Consultas, Exames",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]})]}),d.jsxs("div",{className:"p-6 border-t border-gray-200 flex items-center justify-between",children:[i>1&&d.jsx(Ze,{variant:"outline",onClick:()=>a(i-1),children:"Voltar"}),d.jsx("div",{className:"flex-1"}),i<3?d.jsx(Ze,{onClick:()=>a(i+1),disabled:i===2&&!v,className:"bg-blue-600 hover:bg-blue-700",children:"Próximo"}):d.jsx(Ze,{onClick:k,disabled:!E.name||l!=="personal"&&(!E.phone||!E.email),className:"bg-green-600 hover:bg-green-700",children:"Criar pino"})]})]})}):null}function NS({isOpen:n,onClose:e,pin:t,onStartChat:r,isLoggedIn:i,onLogin:a}){const[l,f]=re.useState({}),[p,m]=re.useState({}),[v,x]=re.useState(!1);if(!n)return null;const E=t.type==="business"?"from-blue-600 to-blue-700":"from-green-600 to-green-700",A=t.type==="business",M=t.businessInfo?.products&&t.businessInfo.products.length>0,U=t.businessInfo?.services&&t.businessInfo.services.length>0,L=(G,ce)=>{f(me=>{const O=me[G]||0,I=Math.max(0,O+ce);if(I===0){const{[G]:k,...C}=me;return C}return{...me,[G]:I}})},Q=G=>{m(ce=>({...ce,[G]:!ce[G]}))},ee=()=>{const G=Object.values(l).reduce((me,O)=>me+O,0),ce=Object.values(p).filter(Boolean).length;return G+ce},ae=()=>{const G={products:Object.entries(l).map(([ce,me])=>({name:ce,quantity:me})),services:Object.entries(p).filter(([ce,me])=>me).map(([ce])=>({name:ce}))};G.products.length>0||G.services.length>0?r(G):r()};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col",children:[d.jsxs("div",{className:`bg-gradient-to-r ${E} p-6 relative`,children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm","aria-label":"Fechar",children:d.jsx(Ni,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{className:"flex items-start gap-4 mt-2",children:[d.jsx("div",{className:"w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(kc,{className:"w-10 h-10 text-white"})}),d.jsxs("div",{className:"flex-1 pr-12",children:[d.jsx("h2",{className:"text-white mb-2",children:t.name}),d.jsx("p",{className:"text-white/80 text-sm mb-3",children:t.description}),d.jsxs("div",{className:"flex items-center gap-2 text-white/80 text-sm",children:[d.jsx(kc,{className:"w-4 h-4"}),t.address]})]})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.views}),d.jsx("div",{className:"text-xs text-gray-600",children:"Visualizações"})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.chatsStarted}),d.jsx("div",{className:"text-xs text-gray-600",children:"Conversas iniciadas"})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.messages}),d.jsx("div",{className:"text-xs text-gray-600",children:"Mensagens trocadas"})]})]}),t.businessInfo&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Informações de contato"}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(qN,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.phone})]}),d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(ON,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.email})]}),t.businessInfo.website&&d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(IN,{className:"w-5 h-5 text-gray-400"}),d.jsxs("a",{href:`https://${t.businessInfo.website}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline flex items-center gap-1",children:[t.businessInfo.website,d.jsx(yN,{className:"w-4 h-4"})]})]}),t.businessInfo.hours&&d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(lc,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.hours})]})]})]}),t.businessInfo.cnpj&&d.jsxs("div",{children:[d.jsx("h4",{className:"text-sm text-gray-600 mb-2",children:"CNPJ"}),d.jsx("p",{className:"text-gray-900",children:t.businessInfo.cnpj})]}),t.businessInfo.categories&&t.businessInfo.categories.length>0&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-3",children:"Categorias"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:t.businessInfo.categories.map((G,ce)=>d.jsxs(Cn,{variant:"secondary",children:[d.jsx(ck,{className:"w-3 h-3 mr-1"}),G]},ce))})]}),A&&M&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Produtos disponíveis"}),ee()>0&&d.jsxs(Cn,{className:"bg-blue-600 text-white",children:[d.jsx(Dm,{className:"w-3 h-3 mr-1"}),ee()," ",ee()===1?"item":"itens"]})]}),d.jsx("div",{className:"space-y-3",children:t.businessInfo.products.map((G,ce)=>d.jsx("div",{className:`border-2 rounded-xl p-4 transition-all ${l[G]?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-300"}`,children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:G}),d.jsx("p",{className:"text-sm text-gray-600",children:"Disponível para consulta"})]}),d.jsx("div",{className:"flex items-center gap-2",children:l[G]?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>L(G,-1),className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors",children:d.jsx(UN,{className:"w-4 h-4"})}),d.jsx("span",{className:"w-8 text-center text-gray-900",children:l[G]}),d.jsx("button",{onClick:()=>L(G,1),className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors",children:d.jsx(Dr,{className:"w-4 h-4"})})]}):d.jsxs("button",{onClick:()=>L(G,1),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[d.jsx(Dr,{className:"w-4 h-4"}),"Adicionar"]})})]})},ce))})]}),A&&U&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Serviços disponíveis"}),d.jsx("div",{className:"space-y-3",children:t.businessInfo.services.map((G,ce)=>d.jsx("div",{className:`border-2 rounded-xl p-4 transition-all cursor-pointer ${p[G]?"border-green-500 bg-green-50":"border-gray-200 hover:border-green-300"}`,onClick:()=>Q(G),children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:G}),d.jsx("p",{className:"text-sm text-gray-600",children:"Clique para demonstrar interesse"})]}),d.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${p[G]?"bg-green-600 border-green-600":"border-gray-300"}`,children:p[G]&&d.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})]})},ce))})]}),!A&&U&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-3",children:"Serviços"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:t.businessInfo.services.map((G,ce)=>d.jsxs("div",{className:"bg-green-50 rounded-lg px-3 py-2 text-sm text-gray-700",children:["• ",G]},ce))})]})]}),A&&ee()>0&&d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(Dm,{className:"w-5 h-5 text-blue-600"}),"Seu interesse será enviado"]}),d.jsxs("div",{className:"space-y-2 text-sm",children:[Object.entries(l).map(([G,ce])=>d.jsxs("div",{className:"flex items-center justify-between text-gray-700",children:[d.jsxs("span",{children:["• ",G]}),d.jsxs(Cn,{variant:"secondary",children:["Qtd: ",ce]})]},G)),Object.entries(p).filter(([G,ce])=>ce).map(([G])=>d.jsx("div",{className:"flex items-center text-gray-700",children:d.jsxs("span",{children:["• ",G]})},G))]}),d.jsx("p",{className:"text-xs text-gray-600 mt-3",children:"💡 O estabelecimento receberá uma notificação com seus interesses e poderá responder via chat."})]})]}),d.jsx("div",{className:"p-6 border-t border-gray-200 bg-white",children:i?d.jsxs(Ze,{onClick:ae,className:`w-full bg-gradient-to-r ${E}`,children:[d.jsx(li,{className:"w-5 h-5 mr-2"}),ee()>0?`Iniciar conversa e enviar interesse (${ee()} ${ee()===1?"item":"itens"})`:"Iniciar conversa (1:1)"]}):d.jsxs("div",{className:"text-center",children:[d.jsxs("p",{className:"text-gray-600 mb-3",children:["Faça login para ",ee()>0?"enviar seu interesse e ":"","iniciar uma conversa"]}),d.jsx(Ze,{className:"bg-blue-600 hover:bg-blue-700",onClick:a,children:"Entrar ou criar conta"})]})})]})})}function kS({userName:n,products:e=[],services:t=[]}){return e.length===0&&t.length===0?null:d.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4 mb-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0",children:d.jsx(Dm,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("h4",{className:"text-gray-900 mb-2",children:[n," demonstrou interesse!"]}),e.length>0&&d.jsxs("div",{className:"mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(Ta,{className:"w-4 h-4 text-blue-600"}),d.jsx("span",{className:"text-sm text-gray-700",children:"Produtos:"})]}),d.jsx("div",{className:"space-y-1",children:e.map((r,i)=>d.jsxs("div",{className:"flex items-center justify-between bg-white rounded-lg px-3 py-2",children:[d.jsx("span",{className:"text-sm text-gray-900",children:r.name}),d.jsxs(Cn,{variant:"secondary",className:"bg-blue-100 text-blue-800",children:["Qtd: ",r.quantity]})]},i))})]}),t.length>0&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(_k,{className:"w-4 h-4 text-green-600"}),d.jsx("span",{className:"text-sm text-gray-700",children:"Serviços:"})]}),d.jsx("div",{className:"space-y-1",children:t.map((r,i)=>d.jsx("div",{className:"bg-white rounded-lg px-3 py-2",children:d.jsx("span",{className:"text-sm text-gray-900",children:r.name})},i))})]}),d.jsx("p",{className:"text-xs text-gray-600 mt-3",children:"💬 Responda para fornecer mais informações sobre disponibilidade e preços!"})]})]})})}function SS({isOpen:n,onClose:e,pin:t,isLoggedIn:r,currentUser:i,onLogin:a,interest:l}){const[f,p]=re.useState([{id:1,sender:"Carlos S.",senderId:"carlos",message:"Olá! Está funcionando?",time:"10:15",isOwn:!1},{id:2,sender:t.name,senderId:t.id,message:"Sim! Como posso ajudar?",time:"10:16",isOwn:!1,isOfficial:!0}]),[m,v]=re.useState(""),[x,E]=re.useState(!1),[A,M]=re.useState(!1);if(re.useEffect(()=>{l&&(l.products.length>0||l.services.length>0)&&M(!0)},[l]),!n)return null;const U=t.type==="personal",L=t.type==="business"?"bg-gradient-to-r from-blue-600 to-blue-700":t.type==="public"?"bg-gradient-to-r from-green-600 to-green-700":"bg-gradient-to-r from-purple-600 to-purple-700",Q=()=>{if(m.trim()&&r){const ee={id:f.length+1,sender:i?.name||"Você",senderId:i?.id||"you",message:m,time:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),isOwn:!0};p([...f,ee]),v("")}};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden",children:[d.jsxs("div",{className:`${L} p-4 flex items-center justify-between relative`,children:[d.jsxs("div",{className:"flex items-center gap-3 flex-1 pr-12",children:[d.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center",children:d.jsx(kc,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white",children:t.name}),d.jsx("p",{className:"text-white/80 text-sm",children:U?`${t.stats.chatsStarted} participantes`:"Chat privado (1:1)"})]})]}),d.jsx("button",{onClick:e,className:"absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm","aria-label":"Fechar",children:d.jsx(Ni,{className:"w-6 h-6 text-white"})})]}),d.jsxs("div",{className:"flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto",children:[A&&l&&i?.id===t.createdBy&&d.jsx(kS,{userName:i?.name||"Usuário",products:l.products,services:l.services}),f.map(ee=>d.jsx(AS,{...ee},ee.id))]}),r?d.jsx("div",{className:"p-4 border-t border-gray-200 bg-white",children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:d.jsx($N,{className:"w-5 h-5"})}),d.jsx("input",{type:"text",placeholder:"Digite sua mensagem...",className:"flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500",value:m,onChange:ee=>v(ee.target.value),onKeyPress:ee=>ee.key==="Enter"&&Q()}),d.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:d.jsx(nk,{className:"w-5 h-5"})}),d.jsx("button",{className:"p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors",onClick:Q,children:d.jsx(YN,{className:"w-5 h-5"})})]})}):d.jsx("div",{className:"p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-green-50",children:d.jsxs("div",{className:"flex flex-col items-center gap-3 py-2",children:[d.jsxs("div",{className:"flex items-center gap-2 text-gray-700",children:[d.jsx(dE,{className:"w-5 h-5"}),d.jsx("span",{children:"Faça login para participar da conversa"})]}),d.jsx(Ze,{onClick:a,className:"bg-blue-600 hover:bg-blue-700",children:"Entrar ou Criar conta"})]})})]})})}function AS({sender:n,message:e,time:t,isOwn:r,isOfficial:i}){return d.jsx("div",{className:`flex flex-col ${r?"items-end":"items-start"}`,children:d.jsxs("div",{className:`max-w-[80%] rounded-2xl px-4 py-2 ${r?"bg-blue-600 text-white":i?"bg-green-100 border border-green-300":"bg-white border border-gray-200"}`,children:[!r&&d.jsxs("div",{className:`text-xs mb-1 ${i?"text-green-700":"text-gray-600"}`,children:[n," ",i&&"✓"]}),d.jsx("div",{className:`${r?"text-white":i?"text-green-900":"text-gray-900"}`,children:e}),d.jsx("div",{className:`text-xs mt-1 ${r?"text-blue-100":"text-gray-500"}`,children:t})]})})}function RS({isOpen:n,onClose:e,currentUser:t}){const r=[{id:1,type:"message",title:"Nova mensagem",description:"Farmácia Central respondeu sua pergunta",time:"5 min atrás",icon:li,color:"text-blue-600",bgColor:"bg-blue-50",unread:!0},{id:2,type:"reward",title:"Conquista desbloqueada!",description:"Você alcançou o nível 3 e ganhou 50 pontos",time:"1 hora atrás",icon:$h,color:"text-yellow-600",bgColor:"bg-yellow-50",unread:!0},{id:3,type:"moderation",title:"Seu pino foi aprovado",description:'O pino "Grupo Moradores" passou pela moderação',time:"2 horas atrás",icon:Nc,color:"text-green-600",bgColor:"bg-green-50",unread:!1},{id:4,type:"interaction",title:"Seu pino teve interação",description:"15 pessoas iniciaram conversa no seu pino",time:"1 dia atrás",icon:li,color:"text-purple-600",bgColor:"bg-purple-50",unread:!1}];return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between",children:[d.jsx("h3",{className:"text-gray-900",children:"Notificações"}),d.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(Ni,{className:"w-5 h-5 text-gray-600"})})]}),d.jsx("div",{className:"divide-y divide-gray-200",children:r.map(i=>d.jsx("div",{className:`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${i.unread?"bg-blue-50/30":""}`,children:d.jsxs("div",{className:"flex gap-3",children:[d.jsx("div",{className:`w-10 h-10 ${i.bgColor} rounded-full flex items-center justify-center flex-shrink-0`,children:d.jsx(i.icon,{className:`w-5 h-5 ${i.color}`})}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-start justify-between mb-1",children:[d.jsx("h4",{className:"text-sm text-gray-900",children:i.title}),i.unread&&d.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1"})]}),d.jsx("p",{className:"text-sm text-gray-600 mb-1",children:i.description}),d.jsx("span",{className:"text-xs text-gray-500",children:i.time})]})]})},i.id))}),r.length===0&&d.jsxs("div",{className:"p-8 text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(li,{className:"w-8 h-8 text-gray-400"})}),d.jsx("p",{className:"text-gray-600",children:"Nenhuma notificação"})]})]})]}):null}function PS({isOpen:n,onClose:e,currentUser:t}){const r=[{id:1,name:"Primeira Conversa",description:"Inicie sua primeira conversa em um pino",points:10,icon:ik,unlocked:!0,color:"text-yellow-600",bgColor:"bg-yellow-50"},{id:2,name:"Criador de Comunidade",description:"Crie 5 pinos diferentes",points:50,icon:pk,unlocked:!0,color:"text-blue-600",bgColor:"bg-blue-50"},{id:3,name:"Influenciador Local",description:"Tenha 100 interações nos seus pinos",points:100,icon:Hd,unlocked:!1,progress:45,color:"text-purple-600",bgColor:"bg-purple-50"},{id:4,name:"Super Ativo",description:"Envie 500 mensagens",points:150,icon:wk,unlocked:!1,progress:230,color:"text-green-600",bgColor:"bg-green-50"}],i=[{level:1,minPoints:0,name:"Iniciante",color:"bg-gray-400"},{level:2,minPoints:50,name:"Explorador",color:"bg-blue-400"},{level:3,minPoints:150,name:"Contribuidor",color:"bg-purple-400"},{level:4,minPoints:300,name:"Líder",color:"bg-yellow-400"},{level:5,minPoints:500,name:"Lenda",color:"bg-red-400"}],a=i.find(p=>t?.points>=p.minPoints&&(i[p.level]?t?.points<i[p.level].minPoints:!0))||i[0],l=i[a.level]||null,f=l?(t?.points-a.minPoints)/(l.minPoints-a.minPoints)*100:100;return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-6",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors",children:d.jsx(Ni,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx($h,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white mb-1",children:"Recompensas"}),d.jsx("p",{className:"text-white/80 text-sm",children:t?.name})]})]}),d.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-xl p-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"text-white/80 text-sm mb-1",children:["Nível ",t?.level]}),d.jsxs("div",{className:"text-white text-2xl",children:[t?.points," pontos"]})]}),d.jsx(Cn,{className:`${a.color} text-white`,children:a.name})]}),l&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-full bg-white/30 rounded-full h-2 mb-2",children:d.jsx("div",{className:"bg-white rounded-full h-2 transition-all",style:{width:`${f}%`}})}),d.jsxs("div",{className:"text-white/80 text-xs",children:[l.minPoints-t?.points," pontos para o próximo nível"]})]})]})]}),d.jsxs("div",{className:"p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-4",children:"Conquistas"}),d.jsx("div",{className:"space-y-3",children:r.map(p=>d.jsx("div",{className:`p-4 rounded-xl border-2 transition-all ${p.unlocked?`${p.bgColor} border-${p.color.replace("text-","")}`:"bg-gray-50 border-gray-200 opacity-60"}`,children:d.jsxs("div",{className:"flex gap-3",children:[d.jsx("div",{className:`w-12 h-12 ${p.unlocked?p.bgColor:"bg-gray-200"} rounded-xl flex items-center justify-center flex-shrink-0`,children:d.jsx(p.icon,{className:`w-6 h-6 ${p.unlocked?p.color:"text-gray-400"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between mb-1",children:[d.jsx("h5",{className:"text-sm text-gray-900",children:p.name}),p.unlocked&&d.jsxs(Cn,{variant:"secondary",className:"bg-yellow-100 text-yellow-800",children:["+",p.points," pts"]})]}),d.jsx("p",{className:"text-xs text-gray-600 mb-2",children:p.description}),!p.unlocked&&p.progress!==void 0&&d.jsxs("div",{children:[d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1.5 mb-1",children:d.jsx("div",{className:"bg-blue-600 rounded-full h-1.5",style:{width:`${p.progress/100*100}%`}})}),d.jsxs("div",{className:"text-xs text-gray-500",children:[p.progress,"/100"]})]})]})]})},p.id))}),d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Como ganhar pontos"}),d.jsxs("div",{className:"space-y-2 text-sm text-gray-700",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs",children:"+5"}),d.jsx("span",{children:"Por cada conversa iniciada"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs",children:"+10"}),d.jsx("span",{children:"Por cada pino criado"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs",children:"+20"}),d.jsx("span",{children:"Por cada 10 interações nos seus pinos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs",children:"+50"}),d.jsx("span",{children:"Por cada conquista desbloqueada"})]})]})]})]})]})]}):null}function jS({isOpen:n,onClose:e,pins:t,onModerate:r}){const i=t.filter(a=>a.reported||a.moderationStatus==="pending");return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 p-6",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors",children:d.jsx(Ni,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(C0,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white mb-1",children:"Moderação"}),d.jsxs("p",{className:"text-white/80 text-sm",children:[i.length," pino(s) aguardando revisão"]})]})]})]}),d.jsxs("div",{className:"p-4",children:[i.length===0?d.jsxs("div",{className:"py-12 text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(Nc,{className:"w-8 h-8 text-green-600"})}),d.jsx("h4",{className:"text-gray-900 mb-2",children:"Tudo em ordem!"}),d.jsx("p",{className:"text-gray-600 text-sm",children:"Não há pinos pendentes de moderação no momento."})]}):d.jsx("div",{className:"space-y-4",children:i.map(a=>d.jsxs("div",{className:"bg-white border-2 border-orange-200 rounded-xl p-4",children:[d.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[d.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${a.type==="business"?"bg-blue-100":a.type==="public"?"bg-green-100":"bg-purple-100"}`,children:d.jsx(xN,{className:`w-6 h-6 ${a.type==="business"?"text-blue-600":a.type==="public"?"text-green-600":"text-purple-600"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("h4",{className:"text-gray-900",children:a.name}),d.jsx(Cn,{variant:"secondary",className:"bg-orange-100 text-orange-800",children:a.type==="business"?"Negócio":a.type==="public"?"Público":"Pessoal"})]}),d.jsx("p",{className:"text-sm text-gray-600 mb-2",children:a.address}),a.description&&d.jsx("p",{className:"text-sm text-gray-700 bg-gray-50 rounded-lg p-2 mb-2",children:a.description}),d.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-500",children:[d.jsxs("span",{children:["Por: ",a.createdBy]}),d.jsx("span",{children:new Date(a.createdAt).toLocaleDateString("pt-BR")})]})]})]}),d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx(C0,{className:"w-4 h-4 text-red-600 mt-0.5"}),d.jsxs("div",{children:[d.jsx("h5",{className:"text-sm text-red-900 mb-1",children:"Motivo da denúncia"}),d.jsx("p",{className:"text-sm text-red-700",children:"Conteúdo inapropriado ou informações falsas reportadas por 3 usuários."})]})]})}),a.businessInfo&&d.jsx("div",{className:"bg-gray-50 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.views}),d.jsx("div",{className:"text-xs text-gray-600",children:"Visualizações"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.chatsStarted}),d.jsx("div",{className:"text-xs text-gray-600",children:"Conversas"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.messages}),d.jsx("div",{className:"text-xs text-gray-600",children:"Mensagens"})]})]})}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs(Ze,{onClick:()=>r(a.id,"approved"),variant:"outline",className:"flex-1 border-green-300 text-green-700 hover:bg-green-50",children:[d.jsx(Nc,{className:"w-4 h-4 mr-2"}),"Aprovar"]}),d.jsxs(Ze,{onClick:()=>r(a.id,"rejected"),variant:"outline",className:"flex-1 border-red-300 text-red-700 hover:bg-red-50",children:[d.jsx(fN,{className:"w-4 h-4 mr-2"}),"Rejeitar"]})]})]},a.id))}),d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Sobre a moderação"}),d.jsxs("div",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("p",{children:"• Pinos podem ser denunciados por usuários quando contêm informações falsas ou conteúdo inapropriado."}),d.jsx("p",{children:"• Após 3 denúncias, o pino entra automaticamente na fila de moderação."}),d.jsx("p",{children:"• Pinos rejeitados são removidos da plataforma e o criador é notificado."}),d.jsx("p",{children:"• Pinos aprovados voltam ao mapa e as denúncias são descartadas."})]})]})]})]})]}):null}function OS({isOpen:n,onClose:e,pinType:t}){const[r,i]=re.useState(0);if(!n)return null;const l=t==="business"?[{title:"Bem-vindo ao Groupby.Me! 🎉",description:"Seu estabelecimento agora está no mapa e visível para clientes próximos em tempo real.",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"O Groupby.Me conecta seu negócio com pessoas que estão próximas e procurando exatamente o que você oferece."}),d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"Por que usar o Groupby.Me?"}),d.jsxs("ul",{className:"space-y-2 text-sm text-blue-800",children:[d.jsx("li",{children:"✓ Clientes encontram você no mapa ao buscar produtos/serviços"}),d.jsx("li",{children:"✓ Conversas diretas em tempo real (como WhatsApp)"}),d.jsx("li",{children:"✓ Clientes demonstram interesse antes de comprar"}),d.jsx("li",{children:"✓ Aumente suas vendas locais sem intermediários"})]})]})]})},{title:"Como seu pino funciona 📍",description:"Entenda como clientes veem e interagem com seu estabelecimento",content:d.jsx("div",{className:"space-y-4",children:d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Quando alguém clica no seu pino:"}),d.jsxs("ol",{className:"space-y-3 text-gray-700",children:[d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"1"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Vê suas informações:"})," Nome, descrição, horários, contato"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"2"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Escolhe produtos/serviços:"})," Pode adicionar itens de interesse (como no iFood)"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"3"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Inicia conversa:"})," Você recebe uma notificação com os interesses dele"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"4"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Você responde:"})," Informa preços, disponibilidade e fecha a venda!"]})]})]})]})})},{title:"Configure seus produtos 📦",description:"Mantenha seu catálogo sempre atualizado",content:d.jsxs("div",{className:"space-y-4",children:[d.jsxs("p",{className:"text-gray-700",children:["Na aba ",d.jsx("strong",{children:'"Produtos"'}),", você cadastra tudo que oferece. Isso ajuda clientes a:"]}),d.jsxs("ul",{className:"space-y-2 text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Ver o que você tem disponível"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Demonstrar interesse em itens específicos"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Iniciar conversas mais objetivas (você já sabe o que eles querem!)"})]})]}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:d.jsxs("p",{className:"text-sm text-yellow-900",children:["💡 ",d.jsx("strong",{children:"Dica:"})," Atualize seus produtos regularmente! Isso aumenta as chances de aparecer nas buscas."]})})]})},{title:"Atenda com agilidade 💬",description:"Responda rápido e conquiste mais clientes",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"Quando um cliente demonstra interesse, você recebe:"}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-2",children:"🔔 Notificação com:"}),d.jsxs("ul",{className:"space-y-1 text-gray-700 text-sm",children:[d.jsx("li",{children:"• Nome do cliente"}),d.jsx("li",{children:"• Produtos de interesse (com quantidades)"}),d.jsx("li",{children:"• Serviços solicitados"})]})]}),d.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"✅ Melhores práticas:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-green-800",children:[d.jsx("li",{children:"→ Responda em até 5 minutos (cliente está esperando!)"}),d.jsx("li",{children:"→ Confirme disponibilidade e informe preços"}),d.jsx("li",{children:"→ Seja cordial e profissional"}),d.jsx("li",{children:"→ Ofereça opções de entrega/retirada"})]})]})]})},{title:"Dicas para ter sucesso 🚀",description:"Maximize seus resultados no Groupby.Me",content:d.jsx("div",{className:"space-y-4",children:d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"📝 Preencha tudo"}),d.jsx("p",{className:"text-sm text-blue-800",children:"Descrição completa, horários, categorias, produtos. Quanto mais informação, melhor!"})]}),d.jsxs("div",{className:"bg-green-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"⚡ Seja rápido"}),d.jsx("p",{className:"text-sm text-green-800",children:"Responda mensagens rapidamente. Taxa de resposta alta = mais visibilidade!"})]}),d.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-purple-900 mb-2",children:"🎯 Mantenha atualizado"}),d.jsx("p",{className:"text-sm text-purple-800",children:"Atualize horários, produtos em falta, promoções. Clientes valorizam informação precisa."})]}),d.jsxs("div",{className:"bg-yellow-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-yellow-900 mb-2",children:"🌟 Seja profissional"}),d.jsx("p",{className:"text-sm text-yellow-800",children:"Bom atendimento gera mais conversas, mais vendas e melhor reputação."})]})]})})}]:[{title:"Bem-vindo ao Groupby.Me! 🏛️",description:"Seu órgão público agora está mais acessível aos cidadãos",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"O Groupby.Me facilita a comunicação entre serviços públicos e cidadãos de forma direta e em tempo real."}),d.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"Benefícios para serviços públicos:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-green-800",children:[d.jsx("li",{children:"✓ Canal direto de atendimento ao cidadão"}),d.jsx("li",{children:"✓ Respostas rápidas a dúvidas e emergências"}),d.jsx("li",{children:"✓ Transparência e proximidade com a população"}),d.jsx("li",{children:"✓ Redução de filas presenciais"})]})]})]})},{title:"Configure seus serviços 🛠️",description:"Informe o que seu órgão oferece",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"Liste todos os serviços disponíveis para que cidadãos saibam como você pode ajudá-los:"}),d.jsxs("ul",{className:"space-y-2 text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Atendimento emergencial (hospitais, polícia, bombeiros)"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Serviços administrativos (certidões, licenças)"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Informações e orientações"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Recebimento de denúncias e solicitações"})]})]})]})},{title:"Atenda o cidadão 👥",description:"Comunicação eficiente e transparente",content:d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"💬 Quando um cidadão entrar em contato:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-blue-800",children:[d.jsx("li",{children:"• Identifique a necessidade ou emergência"}),d.jsx("li",{children:"• Forneça informações claras e precisas"}),d.jsx("li",{children:"• Oriente sobre procedimentos necessários"}),d.jsx("li",{children:"• Registre protocolos de atendimento quando aplicável"})]})]}),d.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:d.jsxs("p",{className:"text-sm text-green-800",children:[d.jsx("strong",{children:"Lembre-se:"})," Respostas rápidas e profissionais fortalecem a confiança da população no serviço público."]})})]})}],f=r===l.length-1;return d.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 p-6 relative",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors",children:d.jsx(Ni,{className:"w-6 h-6 text-white"})}),d.jsx("h2",{className:"text-white pr-12",children:l[r].title}),d.jsx("p",{className:"text-white/80 text-sm mt-1",children:l[r].description})]}),d.jsxs("div",{className:"px-6 py-4 bg-gray-50 border-b border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-sm text-gray-600",children:["Passo ",r+1," de ",l.length]}),d.jsxs("span",{className:"text-sm text-gray-600",children:[Math.round((r+1)/l.length*100),"% completo"]})]}),d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:d.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all",style:{width:`${(r+1)/l.length*100}%`}})})]}),d.jsx("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:l[r].content}),d.jsxs("div",{className:"p-6 border-t border-gray-200 flex items-center justify-between",children:[d.jsxs(Ze,{onClick:()=>i(Math.max(0,r-1)),disabled:r===0,variant:"outline",children:[d.jsx(oN,{className:"w-4 h-4 mr-2"}),"Anterior"]}),f?d.jsxs(Ze,{onClick:e,className:"bg-green-600 hover:bg-green-700",children:[d.jsx(sN,{className:"w-4 h-4 mr-2"}),"Concluir tutorial"]}):d.jsxs(Ze,{onClick:()=>i(r+1),className:"bg-blue-600 hover:bg-blue-700",children:["Próximo",d.jsx(lN,{className:"w-4 h-4 ml-2"})]})]})]})})}function DS({pin:n,onBack:e,onUpdate:t}){const[r,i]=re.useState("dashboard"),[a,l]=re.useState(!1),[f,p]=re.useState(!1),[m,v]=re.useState({name:n.name,description:n.description||"",phone:n.businessInfo?.phone||"",email:n.businessInfo?.email||"",website:n.businessInfo?.website||"",hours:n.businessInfo?.hours||"",categories:n.businessInfo?.categories||[],products:n.businessInfo?.products||[],services:n.businessInfo?.services||[]}),[x,E]=re.useState(""),[A,M]=re.useState({name:"",price:"",stock:""}),[U,L]=re.useState({name:"",description:"",duration:""}),Q=n.type==="business",ee=[{id:"dashboard",label:"Painel",icon:x0},{id:"info",label:"Informações",icon:fE},{id:"products",label:Q?"Produtos":"Serviços",icon:Ta},{id:"inventory",label:"Estoque",icon:Ta,commerceOnly:!0},{id:"schedule",label:"Horários",icon:lc},{id:"cashflow",label:"Fluxo de Caixa",icon:lm},{id:"operations",label:"Operacional",icon:b0},{id:"messages",label:"Mensagens",icon:li}].filter(C=>!C.commerceOnly||Q),ae=()=>{t({name:m.name,description:m.description,businessInfo:{...n.businessInfo,phone:m.phone,email:m.email,website:m.website,hours:m.hours,categories:m.categories,products:m.products,services:m.services}}),l(!1)},G=()=>{x.trim()&&(v({...m,categories:[...m.categories,x]}),E(""))},ce=C=>{v({...m,categories:m.categories.filter((P,R)=>R!==C)})},me=()=>{A.name.trim()&&(v({...m,products:[...m.products,A.name]}),M({name:"",price:"",stock:""}))},O=C=>{v({...m,products:m.products.filter((P,R)=>R!==C)})},I=()=>{U.name.trim()&&(v({...m,services:[...m.services,U.name]}),L({name:"",description:"",duration:""}))},k=C=>{v({...m,services:m.services.filter((P,R)=>R!==C)})};return d.jsxs("div",{className:"fixed inset-0 z-50 bg-white flex flex-col overflow-hidden",children:[d.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 shadow-lg",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("button",{onClick:e,className:"flex items-center gap-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors",children:[d.jsx(YC,{className:"w-5 h-5"}),d.jsx("span",{children:"Voltar ao mapa"})]}),d.jsxs(Ze,{onClick:()=>p(!0),variant:"outline",className:"bg-white/20 border-white/30 text-white hover:bg-white/30",children:[d.jsx(qd,{className:"w-4 h-4 mr-2"}),"Ajuda e Tutorial"]})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(ak,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl mb-1",children:n.name}),d.jsx("p",{className:"text-white/80",children:n.address})]}),d.jsx(Cn,{className:"ml-auto bg-white/20 text-white border-white/30",children:Q?"Comércio":"Serviço Público"})]})]})}),d.jsx("div",{className:"border-b border-gray-200 bg-white",children:d.jsx("div",{className:"max-w-7xl mx-auto px-6",children:d.jsx("div",{className:"flex gap-1 overflow-x-auto",children:ee.map(C=>d.jsxs("button",{onClick:()=>i(C.id),className:`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${r===C.id?"border-blue-600 text-blue-600":"border-transparent text-gray-600 hover:text-gray-900"}`,children:[d.jsx(C.icon,{className:"w-4 h-4"}),C.label]},C.id))})})}),d.jsx("div",{className:"flex-1 overflow-y-auto bg-gray-50",children:d.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[r==="dashboard"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6",children:[d.jsxs("h2",{className:"text-gray-900 mb-3",children:["Bem-vindo à gestão do seu ",Q?"estabelecimento":"órgão","!"]}),d.jsx("p",{className:"text-gray-700 mb-4",children:Q?"Aqui você gerencia todas as informações do seu negócio no Groupby.Me. Configure seus produtos, serviços, horários e atenda clientes próximos em tempo real.":"Aqui você gerencia as informações do serviço público. Configure os serviços oferecidos, horários de atendimento e mantenha comunicação direta com os cidadãos."}),d.jsxs("div",{className:"flex flex-wrap gap-3",children:[d.jsxs(Ze,{onClick:()=>p(!0),className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(qd,{className:"w-4 h-4 mr-2"}),"Ver tutorial completo"]}),d.jsxs(Ze,{onClick:()=>i("info"),variant:"outline",children:[d.jsx(cm,{className:"w-4 h-4 mr-2"}),"Editar informações"]})]})]}),d.jsxs("div",{className:"grid md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Visualizações"}),d.jsx(Hd,{className:"w-5 h-5 text-blue-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.views}),d.jsx("div",{className:"text-sm text-green-600",children:"+12% esta semana"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Conversas"}),d.jsx(li,{className:"w-5 h-5 text-green-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.chatsStarted}),d.jsx("div",{className:"text-sm text-green-600",children:"+8% esta semana"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Mensagens"}),d.jsx(uE,{className:"w-5 h-5 text-purple-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.messages}),d.jsx("div",{className:"text-sm text-blue-600",children:"23 não lidas"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Taxa de resposta"}),d.jsx(Nc,{className:"w-5 h-5 text-yellow-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"94%"}),d.jsx("div",{className:"text-sm text-gray-600",children:"Tempo médio: 5min"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Ações rápidas"}),d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("button",{onClick:()=>i("products"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left",children:[d.jsx(Ta,{className:"w-6 h-6 text-blue-600 mb-2"}),d.jsxs("div",{className:"text-gray-900 mb-1",children:["Gerenciar ",Q?"Produtos":"Serviços"]}),d.jsxs("div",{className:"text-sm text-gray-600",children:[m.products.length+m.services.length," cadastrados"]})]}),d.jsxs("button",{onClick:()=>i("schedule"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left",children:[d.jsx(lc,{className:"w-6 h-6 text-green-600 mb-2"}),d.jsx("div",{className:"text-gray-900 mb-1",children:"Horário de funcionamento"}),d.jsx("div",{className:"text-sm text-gray-600",children:m.hours||"Não configurado"})]}),d.jsxs("button",{onClick:()=>i("messages"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left",children:[d.jsx(li,{className:"w-6 h-6 text-purple-600 mb-2"}),d.jsx("div",{className:"text-gray-900 mb-1",children:"Ver mensagens"}),d.jsx("div",{className:"text-sm text-gray-600",children:"23 não respondidas"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Atividade recente"}),d.jsx("div",{className:"space-y-3",children:[{user:"Maria Silva",action:"demonstrou interesse em Medicamentos",time:"5 min atrás",type:"interest"},{user:"João Santos",action:"iniciou uma conversa",time:"15 min atrás",type:"chat"},{user:"Ana Costa",action:"visualizou seu pino",time:"30 min atrás",type:"view"},{user:"Pedro Lima",action:"perguntou sobre horários",time:"1 hora atrás",type:"question"}].map((C,P)=>d.jsxs("div",{className:"flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors",children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${C.type==="interest"?"bg-blue-100":C.type==="chat"?"bg-green-100":C.type==="view"?"bg-purple-100":"bg-yellow-100"}`,children:d.jsx(ih,{className:`w-5 h-5 ${C.type==="interest"?"text-blue-600":C.type==="chat"?"text-green-600":C.type==="view"?"text-purple-600":"text-yellow-600"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"text-sm text-gray-900",children:[d.jsx("span",{className:"font-medium",children:C.user})," ",C.action]}),d.jsx("div",{className:"text-xs text-gray-500",children:C.time})]})]},P))})]})]}),r==="info"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("h2",{className:"text-gray-900",children:"Informações básicas"}),a?d.jsxs("div",{className:"flex gap-2",children:[d.jsx(Ze,{onClick:()=>l(!1),variant:"outline",children:"Cancelar"}),d.jsxs(Ze,{onClick:ae,className:"bg-green-600 hover:bg-green-700",children:[d.jsx(I0,{className:"w-4 h-4 mr-2"}),"Salvar"]})]}):d.jsxs(Ze,{onClick:()=>l(!0),className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(cm,{className:"w-4 h-4 mr-2"}),"Editar"]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Nome do estabelecimento *"}),d.jsx("input",{type:"text",value:m.name,onChange:C=>v({...m,name:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Descrição"}),d.jsx("textarea",{value:m.description,onChange:C=>v({...m,description:C.target.value}),disabled:!a,rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50",placeholder:"Descreva seu estabelecimento para atrair mais clientes..."})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Telefone *"}),d.jsx("input",{type:"tel",value:m.phone,onChange:C=>v({...m,phone:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"E-mail *"}),d.jsx("input",{type:"email",value:m.email,onChange:C=>v({...m,email:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Website"}),d.jsx("input",{type:"text",value:m.website,onChange:C=>v({...m,website:C.target.value}),disabled:!a,placeholder:"www.seusite.com.br",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Categorias"}),d.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:m.categories.map((C,P)=>d.jsxs(Cn,{variant:"secondary",className:"flex items-center gap-1",children:[C,a&&d.jsx("button",{onClick:()=>ce(P),className:"ml-1 hover:text-red-600",children:d.jsx(Sd,{className:"w-3 h-3"})})]},P))}),a&&d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",value:x,onChange:C=>E(C.target.value),placeholder:"Nova categoria",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:C=>C.key==="Enter"&&G()}),d.jsx(Ze,{onClick:G,children:d.jsx(Dr,{className:"w-4 h-4"})})]})]})]})]})}),r==="products"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:Q?"Gerenciar Produtos":"Gerenciar Serviços"}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("p",{className:"text-sm text-blue-900",children:["💡 ",Q?"Mantenha seu catálogo atualizado! Clientes podem demonstrar interesse em produtos específicos e iniciar conversas sobre disponibilidade e preços.":"Liste todos os serviços oferecidos. Cidadãos poderão ver o que está disponível e entrar em contato diretamente."]})}),Q?d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Produtos cadastrados"}),d.jsx("div",{className:"space-y-2",children:m.products.map((C,P)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsx("div",{className:"flex-1",children:d.jsx("div",{className:"text-gray-900",children:C})}),d.jsx("button",{onClick:()=>O(P),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:d.jsx(Sd,{className:"w-4 h-4"})})]},P))}),d.jsxs("div",{className:"border-t border-gray-200 pt-4 mt-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Adicionar novo produto"}),d.jsxs("div",{className:"space-y-3",children:[d.jsx("input",{type:"text",value:A.name,onChange:C=>M({...A,name:C.target.value}),placeholder:"Nome do produto",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),d.jsxs(Ze,{onClick:me,className:"w-full bg-blue-600 hover:bg-blue-700",children:[d.jsx(Dr,{className:"w-4 h-4 mr-2"}),"Adicionar produto"]})]})]})]}):d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Serviços oferecidos"}),d.jsx("div",{className:"space-y-2",children:m.services.map((C,P)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsx("div",{className:"flex-1",children:d.jsx("div",{className:"text-gray-900",children:C})}),d.jsx("button",{onClick:()=>k(P),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:d.jsx(Sd,{className:"w-4 h-4"})})]},P))}),d.jsxs("div",{className:"border-t border-gray-200 pt-4 mt-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Adicionar novo serviço"}),d.jsxs("div",{className:"space-y-3",children:[d.jsx("input",{type:"text",value:U.name,onChange:C=>L({...U,name:C.target.value}),placeholder:"Nome do serviço",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),d.jsxs(Ze,{onClick:I,className:"w-full bg-green-600 hover:bg-green-700",children:[d.jsx(Dr,{className:"w-4 h-4 mr-2"}),"Adicionar serviço"]})]})]})]})]})}),r==="schedule"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:"Horário de funcionamento"}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:d.jsx("p",{className:"text-sm text-yellow-900",children:"⏰ Mantenha seus horários sempre atualizados para que os clientes saibam quando você está disponível."})}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Horários"}),d.jsx("textarea",{value:m.hours,onChange:C=>v({...m,hours:C.target.value}),rows:4,placeholder:"Ex: Seg-Sex: 8h-18h, Sáb: 8h-12h, Dom: Fechado",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs(Ze,{onClick:ae,className:"mt-4 bg-green-600 hover:bg-green-700",children:[d.jsx(I0,{className:"w-4 h-4 mr-2"}),"Salvar horários"]})]})}),r==="messages"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:"Central de mensagens"}),d.jsx("p",{className:"text-gray-600",children:"Gerencie todas as conversas com seus clientes em um só lugar. Responda rapidamente para manter uma boa reputação!"}),d.jsxs("div",{className:"mt-6 p-8 text-center border-2 border-dashed border-gray-300 rounded-lg",children:[d.jsx(li,{className:"w-12 h-12 text-gray-400 mx-auto mb-3"}),d.jsx("p",{className:"text-gray-600",children:"Esta funcionalidade estará disponível em breve"})]})]})}),r==="cashflow"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-green-100",children:"Receitas"}),d.jsx(Hd,{className:"w-5 h-5 text-green-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 12.450"}),d.jsx("div",{className:"text-sm text-green-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-red-100",children:"Despesas"}),d.jsx(Hd,{className:"w-5 h-5 text-red-100 rotate-180"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 7.890"}),d.jsx("div",{className:"text-sm text-red-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-blue-100",children:"Lucro"}),d.jsx(lm,{className:"w-5 h-5 text-blue-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 4.560"}),d.jsx("div",{className:"text-sm text-blue-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-purple-100",children:"Margem"}),d.jsx(x0,{className:"w-5 h-5 text-purple-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"36.6%"}),d.jsx("div",{className:"text-sm text-purple-100",children:"Lucro líquido"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Ações rápidas"}),d.jsxs(Ze,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(Dr,{className:"w-4 h-4 mr-2"}),"Nova transação"]})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("button",{className:"p-4 border-2 border-green-200 bg-green-50 rounded-lg hover:border-green-400 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("div",{className:"w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center",children:d.jsx(Dr,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"text-gray-900",children:"Adicionar receita"})]}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre vendas e recebimentos"})]}),d.jsxs("button",{className:"p-4 border-2 border-red-200 bg-red-50 rounded-lg hover:border-red-400 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("div",{className:"w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center",children:d.jsx(Sd,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"text-gray-900",children:"Adicionar despesa"})]}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre custos e pagamentos"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Transações recentes"}),d.jsxs(Ze,{variant:"outline",children:[d.jsx(T0,{className:"w-4 h-4 mr-2"}),"Exportar"]})]}),d.jsx("div",{className:"space-y-3",children:[{type:"income",description:"Venda - Cliente #1234",value:150,date:"14/11/2024 14:30",category:"Vendas"},{type:"income",description:"Venda - Cliente #1235",value:89.9,date:"14/11/2024 13:15",category:"Vendas"},{type:"expense",description:"Compra de estoque",value:450,date:"14/11/2024 10:00",category:"Estoque"},{type:"expense",description:"Conta de luz",value:320,date:"13/11/2024 16:45",category:"Contas"},{type:"income",description:"Venda - Cliente #1236",value:230,date:"13/11/2024 15:20",category:"Vendas"}].map((C,P)=>d.jsxs("div",{className:"flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${C.type==="income"?"bg-green-100":"bg-red-100"}`,children:d.jsx(lm,{className:`w-5 h-5 ${C.type==="income"?"text-green-600":"text-red-600"}`})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:C.description}),d.jsxs("div",{className:"text-sm text-gray-500",children:[C.date," • ",C.category]})]})]}),d.jsxs("div",{className:`text-lg ${C.type==="income"?"text-green-600":"text-red-600"}`,children:[C.type==="income"?"+":"-"," R$ ",C.value.toFixed(2)]})]},P))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(qd,{className:"w-5 h-5 text-blue-600"}),"Dicas de gestão financeira"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Registre todas as transações diariamente para controle preciso"}),d.jsx("li",{children:"• Separe receitas e despesas por categorias para melhor análise"}),d.jsx("li",{children:"• Monitore sua margem de lucro semanalmente"}),d.jsx("li",{children:"• Planeje reservas para despesas fixas e emergências"}),d.jsx("li",{children:"• Analise períodos de maior/menor movimento para otimizar estoque"})]})]})]}),r==="inventory"&&Q&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-red-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(E0,{className:"w-5 h-5 text-red-600"}),d.jsx("span",{className:"text-gray-900",children:"Estoque baixo"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"8"}),d.jsx("div",{className:"text-sm text-gray-600",children:"produtos precisam reposição"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-yellow-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(lc,{className:"w-5 h-5 text-yellow-600"}),d.jsx("span",{className:"text-gray-900",children:"Próximo ao vencimento"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"3"}),d.jsx("div",{className:"text-sm text-gray-600",children:"produtos em 7 dias"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-green-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(Ta,{className:"w-5 h-5 text-green-600"}),d.jsx("span",{className:"text-gray-900",children:"Total em estoque"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"R$ 15.4k"}),d.jsx("div",{className:"text-sm text-gray-600",children:"valor total do inventário"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Controle de estoque"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs(Ze,{variant:"outline",children:[d.jsx(T0,{className:"w-4 h-4 mr-2"}),"Exportar"]}),d.jsxs(Ze,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(Dr,{className:"w-4 h-4 mr-2"}),"Adicionar produto"]})]})]}),d.jsx("div",{className:"space-y-2",children:[{name:"Dipirona 500mg",sku:"MED-001",quantity:145,min:50,max:200,price:8.5,status:"ok"},{name:"Paracetamol 750mg",sku:"MED-002",quantity:89,min:50,max:150,price:6.9,status:"ok"},{name:"Ibuprofeno 600mg",sku:"MED-003",quantity:23,min:50,max:100,price:12.3,status:"low"},{name:"Amoxicilina 500mg",sku:"MED-004",quantity:67,min:40,max:120,price:15.8,status:"ok"},{name:"Losartana 50mg",sku:"MED-005",quantity:12,min:30,max:80,price:9.9,status:"critical"}].map((C,P)=>d.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("h4",{className:"text-gray-900",children:C.name}),C.status==="low"&&d.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",children:"Estoque baixo"}),C.status==="critical"&&d.jsxs("span",{className:"px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full flex items-center gap-1",children:[d.jsx(E0,{className:"w-3 h-3"}),"Crítico"]})]}),d.jsxs("div",{className:"text-sm text-gray-500 mt-1",children:["SKU: ",C.sku]})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg text-gray-900",children:[C.quantity," un."]}),d.jsxs("div",{className:"text-sm text-gray-500",children:["R$ ",C.price.toFixed(2),"/un"]})]})]}),d.jsxs("div",{className:"mt-3",children:[d.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-600 mb-1",children:[d.jsxs("span",{children:["Mín: ",C.min]}),d.jsxs("span",{children:["Máx: ",C.max]})]}),d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:d.jsx("div",{className:`h-2 rounded-full ${C.status==="critical"?"bg-red-500":C.status==="low"?"bg-yellow-500":"bg-green-500"}`,style:{width:`${C.quantity/C.max*100}%`}})})]}),d.jsxs("div",{className:"mt-3 flex gap-2",children:[d.jsxs(Ze,{variant:"outline",size:"sm",className:"flex-1",children:[d.jsx(cm,{className:"w-3 h-3 mr-1"}),"Editar"]}),d.jsxs(Ze,{variant:"outline",size:"sm",className:"flex-1",children:[d.jsx(Dr,{className:"w-3 h-3 mr-1"}),"Adicionar estoque"]})]})]},P))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(Ta,{className:"w-5 h-5 text-purple-600"}),"Dicas de gestão de estoque"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Configure alertas para quando produtos atingirem o estoque mínimo"}),d.jsx("li",{children:"• Monitore produtos próximos ao vencimento semanalmente"}),d.jsx("li",{children:"• Use o histórico de vendas para prever demanda"}),d.jsx("li",{children:"• Mantenha relacionamento com fornecedores para reposição rápida"}),d.jsx("li",{children:"• Faça inventário completo mensalmente para evitar divergências"})]})]})]}),r==="operations"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Atendimentos hoje"}),d.jsx(ih,{className:"w-5 h-5 text-blue-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"47"}),d.jsx("div",{className:"text-sm text-green-600",children:"+15% vs ontem"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Tempo médio"}),d.jsx(lc,{className:"w-5 h-5 text-green-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"12min"}),d.jsx("div",{className:"text-sm text-gray-600",children:"por atendimento"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Satisfação"}),d.jsx(Nc,{className:"w-5 h-5 text-yellow-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"4.8/5"}),d.jsx("div",{className:"text-sm text-gray-600",children:"avaliação média"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Escala de funcionários"}),d.jsxs(Ze,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(tN,{className:"w-4 h-4 mr-2"}),"Gerenciar escala"]})]}),d.jsx("div",{className:"space-y-3",children:[{name:"Maria Silva",role:"Farmacêutica",shift:"Manhã (8h-14h)",status:"working"},{name:"João Santos",role:"Atendente",shift:"Integral (8h-18h)",status:"working"},{name:"Ana Costa",role:"Farmacêutica",shift:"Tarde (14h-20h)",status:"scheduled"},{name:"Pedro Lima",role:"Entregador",shift:"Tarde (14h-20h)",status:"scheduled"}].map((C,P)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white",children:C.name.split(" ").map(R=>R[0]).join("")}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:C.name}),d.jsx("div",{className:"text-sm text-gray-600",children:C.role})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-sm text-gray-900",children:C.shift}),d.jsx("div",{className:"text-xs",children:C.status==="working"?d.jsxs("span",{className:"text-green-600 flex items-center gap-1",children:[d.jsx("div",{className:"w-2 h-2 bg-green-600 rounded-full animate-pulse"}),"Trabalhando agora"]}):d.jsx("span",{className:"text-gray-500",children:"Agendado"})})]})]},P))})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Checklist operacional diário"}),d.jsx("span",{className:"text-sm text-gray-600",children:"6/10 concluídas"})]}),d.jsx("div",{className:"space-y-2",children:[{task:"Abertura do caixa",completed:!0,time:"08:00"},{task:"Conferência de estoque",completed:!0,time:"08:15"},{task:"Limpeza e organização",completed:!0,time:"08:30"},{task:"Verificar validades",completed:!0,time:"09:00"},{task:"Atualizar preços promocionais",completed:!0,time:"09:30"},{task:"Conferir pedidos online",completed:!0,time:"10:00"},{task:"Almoço e revezamento",completed:!1,time:"12:00"},{task:"Reposição de produtos",completed:!1,time:"14:00"},{task:"Fechamento parcial",completed:!1,time:"18:00"},{task:"Fechamento do caixa",completed:!1,time:"20:00"}].map((C,P)=>d.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg border ${C.completed?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,children:[d.jsx("input",{type:"checkbox",checked:C.completed,className:"w-5 h-5 text-green-600 rounded",readOnly:!0}),d.jsx("div",{className:"flex-1",children:d.jsx("span",{className:C.completed?"text-gray-500 line-through":"text-gray-900",children:C.task})}),d.jsx("span",{className:"text-sm text-gray-500",children:C.time})]},P))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(b0,{className:"w-5 h-5 text-green-600"}),"Dicas de gestão operacional"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Mantenha checklists padronizados para garantir qualidade constante"}),d.jsx("li",{children:"• Monitore o tempo médio de atendimento para otimizar processos"}),d.jsx("li",{children:"• Treine equipe regularmente sobre produtos e atendimento"}),d.jsx("li",{children:"• Documente procedimentos para facilitar integração de novos funcionários"}),d.jsx("li",{children:"• Peça feedback dos clientes para melhorias contínuas"})]})]})]})]})}),f&&d.jsx(OS,{isOpen:f,onClose:()=>p(!1),pinType:n.type})]})}const MS=()=>{};var D0={};/**
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
 */const RE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const se=function(n,e){if(!n)throw Ya(e)},Ya=function(n){return new Error("Firebase Database ("+RE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const PE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},LS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],l=n[t++],f=n[t++],p=((i&7)<<18|(a&63)<<12|(l&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],l=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|l&63)}}return e.join("")},Wh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],l=i+1<n.length,f=l?n[i+1]:0,p=i+2<n.length,m=p?n[i+2]:0,v=a>>2,x=(a&3)<<4|f>>4;let E=(f&15)<<2|m>>6,A=m&63;p||(A=64,l||(E=64)),r.push(t[v],t[x],t[E],t[A])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(PE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],f=i<n.length?t[n.charAt(i)]:0;++i;const m=i<n.length?t[n.charAt(i)]:64;++i;const x=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||f==null||m==null||x==null)throw new VS;const E=a<<2|f>>4;if(r.push(E),m!==64){const A=f<<4&240|m>>2;if(r.push(A),x!==64){const M=m<<6&192|x;r.push(M)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class VS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jE=function(n){const e=PE(n);return Wh.encodeByteArray(e,!0)},lh=function(n){return jE(n).replace(/\./g,"")},ch=function(n){try{return Wh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FS(n){return OE(void 0,n)}function OE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!US(t)||(n[t]=OE(n[t],e[t]));return n}function US(n){return n!=="__proto__"}/**
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
 */function DE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zS=()=>DE().__FIREBASE_DEFAULTS__,BS=()=>{if(typeof process>"u"||typeof D0>"u")return;const n=D0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},$S=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&ch(n[1]);return e&&JSON.parse(e)},qh=()=>{try{return MS()||zS()||BS()||$S()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ME=n=>{var e,t;return(t=(e=qh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Sg=n=>{const e=ME(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},LE=()=>{var n;return(n=qh())===null||n===void 0?void 0:n.config},VE=n=>{var e;return(e=qh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Es{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ks(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Hh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Ag(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[lh(JSON.stringify(t)),lh(JSON.stringify(l)),""].join(".")}const mc={};function WS(){const n={prod:[],emulator:[]};for(const e of Object.keys(mc))mc[e]?n.emulator.push(e):n.prod.push(e);return n}function qS(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let M0=!1;function Gh(n,e){if(typeof window>"u"||typeof document>"u"||!ks(window.location.host)||mc[n]===e||mc[n]||M0)return;mc[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",a=WS().prod.length>0;function l(){const E=document.getElementById(r);E&&E.remove()}function f(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function p(E,A){E.setAttribute("width","24"),E.setAttribute("id",A),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function m(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{M0=!0,l()},E}function v(E,A){E.setAttribute("id",A),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function x(){const E=qS(r),A=t("text"),M=document.getElementById(A)||document.createElement("span"),U=t("learnmore"),L=document.getElementById(U)||document.createElement("a"),Q=t("preprendIcon"),ee=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const ae=E.element;f(ae),v(L,U);const G=m();p(ee,Q),ae.append(ee,M,L,G),document.body.appendChild(ae)}a?(M.innerText="Preview backend disconnected.",ee.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ee.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,M.innerText="Preview backend running in this workspace."),M.setAttribute("id",A)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function un(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(un())}function HS(){var n;const e=(n=qh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function GS(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function KS(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function FE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function QS(){const n=un();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YS(){return RE.NODE_ADMIN===!0}function XS(){return!HS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Pg(){try{return typeof indexedDB=="object"}catch{return!1}}function JS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const ZS="FirebaseError";class Qr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=ZS,Object.setPrototypeOf(this,Qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xa.prototype.create)}}class Xa{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],l=a?eA(a,r):"Error",f=`${this.serviceName}: ${l} (${i}).`;return new Qr(i,f,r)}}function eA(n,e){return n.replace(tA,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const tA=/\{\$([^}]+)}/g;/**
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
 */function Sc(n){return JSON.parse(n)}function Kt(n){return JSON.stringify(n)}/**
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
 */const UE=function(n){let e={},t={},r={},i="";try{const a=n.split(".");e=Sc(ch(a[0])||""),t=Sc(ch(a[1])||""),i=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},nA=function(n){const e=UE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},rA=function(n){const e=UE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Tr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function go(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Lm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function uh(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function _i(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],l=e[i];if(L0(a)&&L0(l)){if(!_i(a,l))return!1}else if(a!==l)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function L0(n){return n!==null&&typeof n=="object"}/**
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
 */function Ja(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function cc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function uc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class sA{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let x=0;x<16;x++)r[x]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let x=0;x<16;x++)r[x]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let x=16;x<80;x++){const E=r[x-3]^r[x-8]^r[x-14]^r[x-16];r[x]=(E<<1|E>>>31)&4294967295}let i=this.chain_[0],a=this.chain_[1],l=this.chain_[2],f=this.chain_[3],p=this.chain_[4],m,v;for(let x=0;x<80;x++){x<40?x<20?(m=f^a&(l^f),v=1518500249):(m=a^l^f,v=1859775393):x<60?(m=a&l|f&(a|l),v=2400959708):(m=a^l^f,v=3395469782);const E=(i<<5|i>>>27)+m+p+v+r[x]&4294967295;p=f,f=l,l=(a<<30|a>>>2)&4294967295,a=i,i=E}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+l&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const a=this.buf_;let l=this.inbuf_;for(;i<t;){if(l===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(a[l]=e.charCodeAt(i),++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}else for(;i<t;)if(a[l]=e[i],++l,++i,l===this.blockSize){this.compress_(a),l=0;break}}this.inbuf_=l,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}function iA(n,e){const t=new oA(n,e);return t.subscribe.bind(t)}class oA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");aA(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=fm),i.error===void 0&&(i.error=fm),i.complete===void 0&&(i.complete=fm);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function fm(){}function jg(n,e){return`${n} failed: ${e} argument `}/**
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
 */const lA=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const a=i-55296;r++,se(r<n.length,"Surrogate pair missing trail surrogate.");const l=n.charCodeAt(r)-56320;i=65536+(a<<10)+l}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Kh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */const cA=1e3,uA=2,dA=14400*1e3,hA=.5;function fA(n,e=cA,t=uA){const r=e*Math.pow(t,n),i=Math.round(hA*r*(Math.random()-.5)*2);return Math.min(dA,r+i)}/**
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
 */function it(n){return n&&n._delegate?n._delegate:n}class xr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ao="[DEFAULT]";/**
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
 */class pA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Es;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(gA(e))try{this.getOrInitializeService({instanceIdentifier:ao})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=ao){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ao){return this.instances.has(e)}getOptions(e=ao){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,l]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&l.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const l=this.instances.get(i);return l&&e(l,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:mA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ao){return this.component?this.component.multipleInstances?e:ao:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function mA(n){return n===ao?void 0:n}function gA(n){return n.instantiationMode==="EAGER"}/**
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
 */class _A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const yA={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},vA=ze.INFO,wA={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},xA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=wA[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qc{constructor(e){this.name=e,this._logLevel=vA,this._logHandler=xA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const EA=(n,e)=>e.some(t=>n instanceof t);let V0,F0;function TA(){return V0||(V0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bA(){return F0||(F0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zE=new WeakMap,Vm=new WeakMap,BE=new WeakMap,pm=new WeakMap,Og=new WeakMap;function IA(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{t(di(n.result)),i()},l=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",l)});return e.then(t=>{t instanceof IDBCursor&&zE.set(t,n)}).catch(()=>{}),Og.set(e,n),e}function CA(n){if(Vm.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",l),n.removeEventListener("abort",l)},a=()=>{t(),i()},l=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",l),n.addEventListener("abort",l)});Vm.set(n,e)}let Fm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Vm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||BE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return di(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function NA(n){Fm=n(Fm)}function kA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(mm(this),e,...t);return BE.set(r,e.sort?e.sort():[e]),di(r)}:bA().includes(n)?function(...e){return n.apply(mm(this),e),di(zE.get(this))}:function(...e){return di(n.apply(mm(this),e))}}function SA(n){return typeof n=="function"?kA(n):(n instanceof IDBTransaction&&CA(n),EA(n,TA())?new Proxy(n,Fm):n)}function di(n){if(n instanceof IDBRequest)return IA(n);if(pm.has(n))return pm.get(n);const e=SA(n);return e!==n&&(pm.set(n,e),Og.set(e,n)),e}const mm=n=>Og.get(n);function AA(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const l=indexedDB.open(n,e),f=di(l);return r&&l.addEventListener("upgradeneeded",p=>{r(di(l.result),p.oldVersion,p.newVersion,di(l.transaction),p)}),t&&l.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),i&&p.addEventListener("versionchange",m=>i(m.oldVersion,m.newVersion,m))}).catch(()=>{}),f}const RA=["get","getKey","getAll","getAllKeys","count"],PA=["put","add","delete","clear"],gm=new Map;function U0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(gm.get(e))return gm.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=PA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||RA.includes(t)))return;const a=async function(l,...f){const p=this.transaction(l,i?"readwrite":"readonly");let m=p.store;return r&&(m=m.index(f.shift())),(await Promise.all([m[t](...f),i&&p.done]))[0]};return gm.set(e,a),a}NA(n=>({...n,get:(e,t,r)=>U0(e,t)||n.get(e,t,r),has:(e,t)=>!!U0(e,t)||n.has(e,t)}));/**
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
 */class jA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(OA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function OA(n){const e=n.getComponent();return e?.type==="VERSION"}const Um="@firebase/app",z0="0.13.2";/**
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
 */const Ts=new Qc("@firebase/app"),DA="@firebase/app-compat",MA="@firebase/analytics-compat",LA="@firebase/analytics",VA="@firebase/app-check-compat",FA="@firebase/app-check",UA="@firebase/auth",zA="@firebase/auth-compat",BA="@firebase/database",$A="@firebase/data-connect",WA="@firebase/database-compat",qA="@firebase/functions",HA="@firebase/functions-compat",GA="@firebase/installations",KA="@firebase/installations-compat",QA="@firebase/messaging",YA="@firebase/messaging-compat",XA="@firebase/performance",JA="@firebase/performance-compat",ZA="@firebase/remote-config",e2="@firebase/remote-config-compat",t2="@firebase/storage",n2="@firebase/storage-compat",r2="@firebase/firestore",s2="@firebase/ai",i2="@firebase/firestore-compat",o2="firebase",a2="11.10.0";/**
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
 */const zm="[DEFAULT]",l2={[Um]:"fire-core",[DA]:"fire-core-compat",[LA]:"fire-analytics",[MA]:"fire-analytics-compat",[FA]:"fire-app-check",[VA]:"fire-app-check-compat",[UA]:"fire-auth",[zA]:"fire-auth-compat",[BA]:"fire-rtdb",[$A]:"fire-data-connect",[WA]:"fire-rtdb-compat",[qA]:"fire-fn",[HA]:"fire-fn-compat",[GA]:"fire-iid",[KA]:"fire-iid-compat",[QA]:"fire-fcm",[YA]:"fire-fcm-compat",[XA]:"fire-perf",[JA]:"fire-perf-compat",[ZA]:"fire-rc",[e2]:"fire-rc-compat",[t2]:"fire-gcs",[n2]:"fire-gcs-compat",[r2]:"fire-fst",[i2]:"fire-fst-compat",[s2]:"fire-vertex","fire-js":"fire-js",[o2]:"fire-js-all"};/**
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
 */const dh=new Map,c2=new Map,Bm=new Map;function B0(n,e){try{n.container.addComponent(e)}catch(t){Ts.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Wr(n){const e=n.name;if(Bm.has(e))return Ts.debug(`There were multiple attempts to register component ${e}.`),!1;Bm.set(e,n);for(const t of dh.values())B0(t,n);for(const t of c2.values())B0(t,n);return!0}function Io(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function bn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const u2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new Xa("app","Firebase",u2);/**
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
 */class d2{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
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
 */const ki=a2;function $E(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:zm,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw hi.create("bad-app-name",{appName:String(i)});if(t||(t=LE()),!t)throw hi.create("no-options");const a=dh.get(i);if(a){if(_i(t,a.options)&&_i(r,a.config))return a;throw hi.create("duplicate-app",{appName:i})}const l=new _A(i);for(const p of Bm.values())l.addComponent(p);const f=new d2(t,r,l);return dh.set(i,f),f}function Yc(n=zm){const e=dh.get(n);if(!e&&n===zm&&LE())return $E();if(!e)throw hi.create("no-app",{appName:n});return e}function zn(n,e,t){var r;let i=(r=l2[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),l=e.match(/\s|\//);if(a||l){const f=[`Unable to register library "${i}" with version "${e}":`];a&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&l&&f.push("and"),l&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ts.warn(f.join(" "));return}Wr(new xr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const h2="firebase-heartbeat-database",f2=1,Ac="firebase-heartbeat-store";let _m=null;function WE(){return _m||(_m=AA(h2,f2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ac)}catch(t){console.warn(t)}}}}).catch(n=>{throw hi.create("idb-open",{originalErrorMessage:n.message})})),_m}async function p2(n){try{const t=(await WE()).transaction(Ac),r=await t.objectStore(Ac).get(qE(n));return await t.done,r}catch(e){if(e instanceof Qr)Ts.warn(e.message);else{const t=hi.create("idb-get",{originalErrorMessage:e?.message});Ts.warn(t.message)}}}async function $0(n,e){try{const r=(await WE()).transaction(Ac,"readwrite");await r.objectStore(Ac).put(e,qE(n)),await r.done}catch(t){if(t instanceof Qr)Ts.warn(t.message);else{const r=hi.create("idb-set",{originalErrorMessage:t?.message});Ts.warn(r.message)}}}function qE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const m2=1024,g2=30;class _2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new v2(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=W0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(l=>l.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>g2){const l=w2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Ts.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=W0(),{heartbeatsToSend:r,unsentEntries:i}=y2(this._heartbeatsCache.heartbeats),a=lh(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return Ts.warn(t),""}}}function W0(){return new Date().toISOString().substring(0,10)}function y2(n,e=m2){const t=[];let r=n.slice();for(const i of n){const a=t.find(l=>l.agent===i.agent);if(a){if(a.dates.push(i.date),q0(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),q0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class v2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Pg()?JS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await p2(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return $0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function q0(n){return lh(JSON.stringify({version:2,heartbeats:n})).length}function w2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function x2(n){Wr(new xr("platform-logger",e=>new jA(e),"PRIVATE")),Wr(new xr("heartbeat",e=>new _2(e),"PRIVATE")),zn(Um,z0,n),zn(Um,z0,"esm2017"),zn("fire-js","")}x2("");var H0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,HE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,I){function k(){}k.prototype=I.prototype,O.D=I.prototype,O.prototype=new k,O.prototype.constructor=O,O.C=function(C,P,R){for(var S=Array(arguments.length-2),qe=2;qe<arguments.length;qe++)S[qe-2]=arguments[qe];return I.prototype[P].apply(C,S)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(O,I,k){k||(k=0);var C=Array(16);if(typeof I=="string")for(var P=0;16>P;++P)C[P]=I.charCodeAt(k++)|I.charCodeAt(k++)<<8|I.charCodeAt(k++)<<16|I.charCodeAt(k++)<<24;else for(P=0;16>P;++P)C[P]=I[k++]|I[k++]<<8|I[k++]<<16|I[k++]<<24;I=O.g[0],k=O.g[1],P=O.g[2];var R=O.g[3],S=I+(R^k&(P^R))+C[0]+3614090360&4294967295;I=k+(S<<7&4294967295|S>>>25),S=R+(P^I&(k^P))+C[1]+3905402710&4294967295,R=I+(S<<12&4294967295|S>>>20),S=P+(k^R&(I^k))+C[2]+606105819&4294967295,P=R+(S<<17&4294967295|S>>>15),S=k+(I^P&(R^I))+C[3]+3250441966&4294967295,k=P+(S<<22&4294967295|S>>>10),S=I+(R^k&(P^R))+C[4]+4118548399&4294967295,I=k+(S<<7&4294967295|S>>>25),S=R+(P^I&(k^P))+C[5]+1200080426&4294967295,R=I+(S<<12&4294967295|S>>>20),S=P+(k^R&(I^k))+C[6]+2821735955&4294967295,P=R+(S<<17&4294967295|S>>>15),S=k+(I^P&(R^I))+C[7]+4249261313&4294967295,k=P+(S<<22&4294967295|S>>>10),S=I+(R^k&(P^R))+C[8]+1770035416&4294967295,I=k+(S<<7&4294967295|S>>>25),S=R+(P^I&(k^P))+C[9]+2336552879&4294967295,R=I+(S<<12&4294967295|S>>>20),S=P+(k^R&(I^k))+C[10]+4294925233&4294967295,P=R+(S<<17&4294967295|S>>>15),S=k+(I^P&(R^I))+C[11]+2304563134&4294967295,k=P+(S<<22&4294967295|S>>>10),S=I+(R^k&(P^R))+C[12]+1804603682&4294967295,I=k+(S<<7&4294967295|S>>>25),S=R+(P^I&(k^P))+C[13]+4254626195&4294967295,R=I+(S<<12&4294967295|S>>>20),S=P+(k^R&(I^k))+C[14]+2792965006&4294967295,P=R+(S<<17&4294967295|S>>>15),S=k+(I^P&(R^I))+C[15]+1236535329&4294967295,k=P+(S<<22&4294967295|S>>>10),S=I+(P^R&(k^P))+C[1]+4129170786&4294967295,I=k+(S<<5&4294967295|S>>>27),S=R+(k^P&(I^k))+C[6]+3225465664&4294967295,R=I+(S<<9&4294967295|S>>>23),S=P+(I^k&(R^I))+C[11]+643717713&4294967295,P=R+(S<<14&4294967295|S>>>18),S=k+(R^I&(P^R))+C[0]+3921069994&4294967295,k=P+(S<<20&4294967295|S>>>12),S=I+(P^R&(k^P))+C[5]+3593408605&4294967295,I=k+(S<<5&4294967295|S>>>27),S=R+(k^P&(I^k))+C[10]+38016083&4294967295,R=I+(S<<9&4294967295|S>>>23),S=P+(I^k&(R^I))+C[15]+3634488961&4294967295,P=R+(S<<14&4294967295|S>>>18),S=k+(R^I&(P^R))+C[4]+3889429448&4294967295,k=P+(S<<20&4294967295|S>>>12),S=I+(P^R&(k^P))+C[9]+568446438&4294967295,I=k+(S<<5&4294967295|S>>>27),S=R+(k^P&(I^k))+C[14]+3275163606&4294967295,R=I+(S<<9&4294967295|S>>>23),S=P+(I^k&(R^I))+C[3]+4107603335&4294967295,P=R+(S<<14&4294967295|S>>>18),S=k+(R^I&(P^R))+C[8]+1163531501&4294967295,k=P+(S<<20&4294967295|S>>>12),S=I+(P^R&(k^P))+C[13]+2850285829&4294967295,I=k+(S<<5&4294967295|S>>>27),S=R+(k^P&(I^k))+C[2]+4243563512&4294967295,R=I+(S<<9&4294967295|S>>>23),S=P+(I^k&(R^I))+C[7]+1735328473&4294967295,P=R+(S<<14&4294967295|S>>>18),S=k+(R^I&(P^R))+C[12]+2368359562&4294967295,k=P+(S<<20&4294967295|S>>>12),S=I+(k^P^R)+C[5]+4294588738&4294967295,I=k+(S<<4&4294967295|S>>>28),S=R+(I^k^P)+C[8]+2272392833&4294967295,R=I+(S<<11&4294967295|S>>>21),S=P+(R^I^k)+C[11]+1839030562&4294967295,P=R+(S<<16&4294967295|S>>>16),S=k+(P^R^I)+C[14]+4259657740&4294967295,k=P+(S<<23&4294967295|S>>>9),S=I+(k^P^R)+C[1]+2763975236&4294967295,I=k+(S<<4&4294967295|S>>>28),S=R+(I^k^P)+C[4]+1272893353&4294967295,R=I+(S<<11&4294967295|S>>>21),S=P+(R^I^k)+C[7]+4139469664&4294967295,P=R+(S<<16&4294967295|S>>>16),S=k+(P^R^I)+C[10]+3200236656&4294967295,k=P+(S<<23&4294967295|S>>>9),S=I+(k^P^R)+C[13]+681279174&4294967295,I=k+(S<<4&4294967295|S>>>28),S=R+(I^k^P)+C[0]+3936430074&4294967295,R=I+(S<<11&4294967295|S>>>21),S=P+(R^I^k)+C[3]+3572445317&4294967295,P=R+(S<<16&4294967295|S>>>16),S=k+(P^R^I)+C[6]+76029189&4294967295,k=P+(S<<23&4294967295|S>>>9),S=I+(k^P^R)+C[9]+3654602809&4294967295,I=k+(S<<4&4294967295|S>>>28),S=R+(I^k^P)+C[12]+3873151461&4294967295,R=I+(S<<11&4294967295|S>>>21),S=P+(R^I^k)+C[15]+530742520&4294967295,P=R+(S<<16&4294967295|S>>>16),S=k+(P^R^I)+C[2]+3299628645&4294967295,k=P+(S<<23&4294967295|S>>>9),S=I+(P^(k|~R))+C[0]+4096336452&4294967295,I=k+(S<<6&4294967295|S>>>26),S=R+(k^(I|~P))+C[7]+1126891415&4294967295,R=I+(S<<10&4294967295|S>>>22),S=P+(I^(R|~k))+C[14]+2878612391&4294967295,P=R+(S<<15&4294967295|S>>>17),S=k+(R^(P|~I))+C[5]+4237533241&4294967295,k=P+(S<<21&4294967295|S>>>11),S=I+(P^(k|~R))+C[12]+1700485571&4294967295,I=k+(S<<6&4294967295|S>>>26),S=R+(k^(I|~P))+C[3]+2399980690&4294967295,R=I+(S<<10&4294967295|S>>>22),S=P+(I^(R|~k))+C[10]+4293915773&4294967295,P=R+(S<<15&4294967295|S>>>17),S=k+(R^(P|~I))+C[1]+2240044497&4294967295,k=P+(S<<21&4294967295|S>>>11),S=I+(P^(k|~R))+C[8]+1873313359&4294967295,I=k+(S<<6&4294967295|S>>>26),S=R+(k^(I|~P))+C[15]+4264355552&4294967295,R=I+(S<<10&4294967295|S>>>22),S=P+(I^(R|~k))+C[6]+2734768916&4294967295,P=R+(S<<15&4294967295|S>>>17),S=k+(R^(P|~I))+C[13]+1309151649&4294967295,k=P+(S<<21&4294967295|S>>>11),S=I+(P^(k|~R))+C[4]+4149444226&4294967295,I=k+(S<<6&4294967295|S>>>26),S=R+(k^(I|~P))+C[11]+3174756917&4294967295,R=I+(S<<10&4294967295|S>>>22),S=P+(I^(R|~k))+C[2]+718787259&4294967295,P=R+(S<<15&4294967295|S>>>17),S=k+(R^(P|~I))+C[9]+3951481745&4294967295,O.g[0]=O.g[0]+I&4294967295,O.g[1]=O.g[1]+(P+(S<<21&4294967295|S>>>11))&4294967295,O.g[2]=O.g[2]+P&4294967295,O.g[3]=O.g[3]+R&4294967295}r.prototype.u=function(O,I){I===void 0&&(I=O.length);for(var k=I-this.blockSize,C=this.B,P=this.h,R=0;R<I;){if(P==0)for(;R<=k;)i(this,O,R),R+=this.blockSize;if(typeof O=="string"){for(;R<I;)if(C[P++]=O.charCodeAt(R++),P==this.blockSize){i(this,C),P=0;break}}else for(;R<I;)if(C[P++]=O[R++],P==this.blockSize){i(this,C),P=0;break}}this.h=P,this.o+=I},r.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var I=1;I<O.length-8;++I)O[I]=0;var k=8*this.o;for(I=O.length-8;I<O.length;++I)O[I]=k&255,k/=256;for(this.u(O),O=Array(16),I=k=0;4>I;++I)for(var C=0;32>C;C+=8)O[k++]=this.g[I]>>>C&255;return O};function a(O,I){var k=f;return Object.prototype.hasOwnProperty.call(k,O)?k[O]:k[O]=I(O)}function l(O,I){this.h=I;for(var k=[],C=!0,P=O.length-1;0<=P;P--){var R=O[P]|0;C&&R==I||(k[P]=R,C=!1)}this.g=k}var f={};function p(O){return-128<=O&&128>O?a(O,function(I){return new l([I|0],0>I?-1:0)}):new l([O|0],0>O?-1:0)}function m(O){if(isNaN(O)||!isFinite(O))return x;if(0>O)return L(m(-O));for(var I=[],k=1,C=0;O>=k;C++)I[C]=O/k|0,k*=4294967296;return new l(I,0)}function v(O,I){if(O.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(O.charAt(0)=="-")return L(v(O.substring(1),I));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var k=m(Math.pow(I,8)),C=x,P=0;P<O.length;P+=8){var R=Math.min(8,O.length-P),S=parseInt(O.substring(P,P+R),I);8>R?(R=m(Math.pow(I,R)),C=C.j(R).add(m(S))):(C=C.j(k),C=C.add(m(S)))}return C}var x=p(0),E=p(1),A=p(16777216);n=l.prototype,n.m=function(){if(U(this))return-L(this).m();for(var O=0,I=1,k=0;k<this.g.length;k++){var C=this.i(k);O+=(0<=C?C:4294967296+C)*I,I*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(M(this))return"0";if(U(this))return"-"+L(this).toString(O);for(var I=m(Math.pow(O,6)),k=this,C="";;){var P=G(k,I).g;k=Q(k,P.j(I));var R=((0<k.g.length?k.g[0]:k.h)>>>0).toString(O);if(k=P,M(k))return R+C;for(;6>R.length;)R="0"+R;C=R+C}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function M(O){if(O.h!=0)return!1;for(var I=0;I<O.g.length;I++)if(O.g[I]!=0)return!1;return!0}function U(O){return O.h==-1}n.l=function(O){return O=Q(this,O),U(O)?-1:M(O)?0:1};function L(O){for(var I=O.g.length,k=[],C=0;C<I;C++)k[C]=~O.g[C];return new l(k,~O.h).add(E)}n.abs=function(){return U(this)?L(this):this},n.add=function(O){for(var I=Math.max(this.g.length,O.g.length),k=[],C=0,P=0;P<=I;P++){var R=C+(this.i(P)&65535)+(O.i(P)&65535),S=(R>>>16)+(this.i(P)>>>16)+(O.i(P)>>>16);C=S>>>16,R&=65535,S&=65535,k[P]=S<<16|R}return new l(k,k[k.length-1]&-2147483648?-1:0)};function Q(O,I){return O.add(L(I))}n.j=function(O){if(M(this)||M(O))return x;if(U(this))return U(O)?L(this).j(L(O)):L(L(this).j(O));if(U(O))return L(this.j(L(O)));if(0>this.l(A)&&0>O.l(A))return m(this.m()*O.m());for(var I=this.g.length+O.g.length,k=[],C=0;C<2*I;C++)k[C]=0;for(C=0;C<this.g.length;C++)for(var P=0;P<O.g.length;P++){var R=this.i(C)>>>16,S=this.i(C)&65535,qe=O.i(P)>>>16,He=O.i(P)&65535;k[2*C+2*P]+=S*He,ee(k,2*C+2*P),k[2*C+2*P+1]+=R*He,ee(k,2*C+2*P+1),k[2*C+2*P+1]+=S*qe,ee(k,2*C+2*P+1),k[2*C+2*P+2]+=R*qe,ee(k,2*C+2*P+2)}for(C=0;C<I;C++)k[C]=k[2*C+1]<<16|k[2*C];for(C=I;C<2*I;C++)k[C]=0;return new l(k,0)};function ee(O,I){for(;(O[I]&65535)!=O[I];)O[I+1]+=O[I]>>>16,O[I]&=65535,I++}function ae(O,I){this.g=O,this.h=I}function G(O,I){if(M(I))throw Error("division by zero");if(M(O))return new ae(x,x);if(U(O))return I=G(L(O),I),new ae(L(I.g),L(I.h));if(U(I))return I=G(O,L(I)),new ae(L(I.g),I.h);if(30<O.g.length){if(U(O)||U(I))throw Error("slowDivide_ only works with positive integers.");for(var k=E,C=I;0>=C.l(O);)k=ce(k),C=ce(C);var P=me(k,1),R=me(C,1);for(C=me(C,2),k=me(k,2);!M(C);){var S=R.add(C);0>=S.l(O)&&(P=P.add(k),R=S),C=me(C,1),k=me(k,1)}return I=Q(O,P.j(I)),new ae(P,I)}for(P=x;0<=O.l(I);){for(k=Math.max(1,Math.floor(O.m()/I.m())),C=Math.ceil(Math.log(k)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),R=m(k),S=R.j(I);U(S)||0<S.l(O);)k-=C,R=m(k),S=R.j(I);M(R)&&(R=E),P=P.add(R),O=Q(O,S)}return new ae(P,O)}n.A=function(O){return G(this,O).h},n.and=function(O){for(var I=Math.max(this.g.length,O.g.length),k=[],C=0;C<I;C++)k[C]=this.i(C)&O.i(C);return new l(k,this.h&O.h)},n.or=function(O){for(var I=Math.max(this.g.length,O.g.length),k=[],C=0;C<I;C++)k[C]=this.i(C)|O.i(C);return new l(k,this.h|O.h)},n.xor=function(O){for(var I=Math.max(this.g.length,O.g.length),k=[],C=0;C<I;C++)k[C]=this.i(C)^O.i(C);return new l(k,this.h^O.h)};function ce(O){for(var I=O.g.length+1,k=[],C=0;C<I;C++)k[C]=O.i(C)<<1|O.i(C-1)>>>31;return new l(k,O.h)}function me(O,I){var k=I>>5;I%=32;for(var C=O.g.length-k,P=[],R=0;R<C;R++)P[R]=0<I?O.i(R+k)>>>I|O.i(R+k+1)<<32-I:O.i(R+k);return new l(P,O.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,HE=r,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=m,l.fromString=v,fi=l}).apply(typeof H0<"u"?H0:typeof self<"u"?self:typeof window<"u"?window:{});var jd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var GE,dc,KE,Gd,$m,QE,YE,XE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,_,w){return u==Array.prototype||u==Object.prototype||(u[_]=w.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof jd=="object"&&jd];for(var _=0;_<u.length;++_){var w=u[_];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var r=t(this);function i(u,_){if(_)e:{var w=r;u=u.split(".");for(var b=0;b<u.length-1;b++){var F=u[b];if(!(F in w))break e;w=w[F]}u=u[u.length-1],b=w[u],_=_(b),_!=b&&_!=null&&e(w,u,{configurable:!0,writable:!0,value:_})}}function a(u,_){u instanceof String&&(u+="");var w=0,b=!1,F={next:function(){if(!b&&w<u.length){var q=w++;return{value:_(q,u[q]),done:!1}}return b=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(u){return u||function(){return a(this,function(_,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},f=this||self;function p(u){var _=typeof u;return _=_!="object"?_:u?Array.isArray(u)?"array":_:"null",_=="array"||_=="object"&&typeof u.length=="number"}function m(u){var _=typeof u;return _=="object"&&u!=null||_=="function"}function v(u,_,w){return u.call.apply(u.bind,arguments)}function x(u,_,w){if(!u)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,b),u.apply(_,F)}}return function(){return u.apply(_,arguments)}}function E(u,_,w){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:x,E.apply(null,arguments)}function A(u,_){var w=Array.prototype.slice.call(arguments,1);return function(){var b=w.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function M(u,_){function w(){}w.prototype=_.prototype,u.aa=_.prototype,u.prototype=new w,u.prototype.constructor=u,u.Qb=function(b,F,q){for(var ie=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)ie[nt-2]=arguments[nt];return _.prototype[F].apply(b,ie)}}function U(u){const _=u.length;if(0<_){const w=Array(_);for(let b=0;b<_;b++)w[b]=u[b];return w}return[]}function L(u,_){for(let w=1;w<arguments.length;w++){const b=arguments[w];if(p(b)){const F=u.length||0,q=b.length||0;u.length=F+q;for(let ie=0;ie<q;ie++)u[F+ie]=b[ie]}else u.push(b)}}class Q{constructor(_,w){this.i=_,this.j=w,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function ee(u){return/^[\s\xa0]*$/.test(u)}function ae(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function G(u){return G[" "](u),u}G[" "]=function(){};var ce=ae().indexOf("Gecko")!=-1&&!(ae().toLowerCase().indexOf("webkit")!=-1&&ae().indexOf("Edge")==-1)&&!(ae().indexOf("Trident")!=-1||ae().indexOf("MSIE")!=-1)&&ae().indexOf("Edge")==-1;function me(u,_,w){for(const b in u)_.call(w,u[b],b,u)}function O(u,_){for(const w in u)_.call(void 0,u[w],w,u)}function I(u){const _={};for(const w in u)_[w]=u[w];return _}const k="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,_){let w,b;for(let F=1;F<arguments.length;F++){b=arguments[F];for(w in b)u[w]=b[w];for(let q=0;q<k.length;q++)w=k[q],Object.prototype.hasOwnProperty.call(b,w)&&(u[w]=b[w])}}function P(u){var _=1;u=u.split(":");const w=[];for(;0<_&&u.length;)w.push(u.shift()),_--;return u.length&&w.push(u.join(":")),w}function R(u){f.setTimeout(()=>{throw u},0)}function S(){var u=le;let _=null;return u.g&&(_=u.g,u.g=u.g.next,u.g||(u.h=null),_.next=null),_}class qe{constructor(){this.h=this.g=null}add(_,w){const b=He.get();b.set(_,w),this.h?this.h.next=b:this.g=b,this.h=b}}var He=new Q(()=>new Ge,u=>u.reset());class Ge{constructor(){this.next=this.g=this.h=null}set(_,w){this.h=_,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let Pe,B=!1,le=new qe,te=()=>{const u=f.Promise.resolve(void 0);Pe=()=>{u.then(V)}};var V=()=>{for(var u;u=S();){try{u.h.call(u.g)}catch(w){R(w)}var _=He;_.j(u),100>_.h&&(_.h++,u.next=_.g,_.g=u)}B=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(u,_){this.type=u,this.g=this.target=_,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var he=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,_=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const w=()=>{};f.addEventListener("test",w,_),f.removeEventListener("test",w,_)}catch{}return u})();function fe(u,_){if(oe.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var w=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=_,_=u.relatedTarget){if(ce){e:{try{G(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else w=="mouseover"?_=u.fromElement:w=="mouseout"&&(_=u.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:Oe[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&fe.aa.h.call(this)}}M(fe,oe);var Oe={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Ye(u,_,w,b,F){this.listener=u,this.proxy=null,this.src=_,this.type=w,this.capture=!!b,this.ha=F,this.key=++Ue,this.da=this.fa=!1}function rt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Pn(u){this.src=u,this.g={},this.h=0}Pn.prototype.add=function(u,_,w,b,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ie=Rs(u,_,b,F);return-1<ie?(_=u[ie],w||(_.fa=!1)):(_=new Ye(_,this.src,q,!!b,F),_.fa=w,u.push(_)),_};function Zn(u,_){var w=_.type;if(w in u.g){var b=u.g[w],F=Array.prototype.indexOf.call(b,_,void 0),q;(q=0<=F)&&Array.prototype.splice.call(b,F,1),q&&(rt(_),u.g[w].length==0&&(delete u.g[w],u.h--))}}function Rs(u,_,w,b){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==_&&q.capture==!!w&&q.ha==b)return F}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Ao={};function ol(u,_,w,b,F){if(Array.isArray(_)){for(var q=0;q<_.length;q++)ol(u,_[q],w,b,F);return null}return w=cl(w),u&&u[be]?u.K(_,w,m(b)?!!b.capture:!1,F):al(u,_,w,!1,b,F)}function al(u,_,w,b,F,q){if(!_)throw Error("Invalid event type");var ie=m(F)?!!F.capture:!!F,nt=Po(u);if(nt||(u[Pi]=nt=new Pn(u)),w=nt.add(_,w,b,ie,q),w.proxy)return w;if(b=fu(),w.proxy=b,b.src=u,b.listener=w,u.addEventListener)he||(F=ie),F===void 0&&(F=!1),u.addEventListener(_.toString(),b,F);else if(u.attachEvent)u.attachEvent(Zr(_.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return w}function fu(){function u(w){return _.call(u.src,u.listener,w)}const _=ll;return u}function Ro(u,_,w,b,F){if(Array.isArray(_))for(var q=0;q<_.length;q++)Ro(u,_[q],w,b,F);else b=m(b)?!!b.capture:!!b,w=cl(w),u&&u[be]?(u=u.i,_=String(_).toString(),_ in u.g&&(q=u.g[_],w=Rs(q,w,b,F),-1<w&&(rt(q[w]),Array.prototype.splice.call(q,w,1),q.length==0&&(delete u.g[_],u.h--)))):u&&(u=Po(u))&&(_=u.g[_.toString()],u=-1,_&&(u=Rs(_,w,b,F)),(w=-1<u?_[u]:null)&&Jr(w))}function Jr(u){if(typeof u!="number"&&u&&!u.da){var _=u.src;if(_&&_[be])Zn(_.i,u);else{var w=u.type,b=u.proxy;_.removeEventListener?_.removeEventListener(w,b,u.capture):_.detachEvent?_.detachEvent(Zr(w),b):_.addListener&&_.removeListener&&_.removeListener(b),(w=Po(_))?(Zn(w,u),w.h==0&&(w.src=null,_[Pi]=null)):rt(u)}}}function Zr(u){return u in Ao?Ao[u]:Ao[u]="on"+u}function ll(u,_){if(u.da)u=!0;else{_=new fe(_,this);var w=u.listener,b=u.ha||u.src;u.fa&&Jr(u),u=w.call(b,_)}return u}function Po(u){return u=u[Pi],u instanceof Pn?u:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function cl(u){return typeof u=="function"?u:(u[jo]||(u[jo]=function(_){return u.handleEvent(_)}),u[jo])}function St(){H.call(this),this.i=new Pn(this),this.M=this,this.F=null}M(St,H),St.prototype[be]=!0,St.prototype.removeEventListener=function(u,_,w,b){Ro(this,u,_,w,b)};function At(u,_){var w,b=u.F;if(b)for(w=[];b;b=b.F)w.push(b);if(u=u.M,b=_.type||_,typeof _=="string")_=new oe(_,u);else if(_ instanceof oe)_.target=_.target||u;else{var F=_;_=new oe(b,u),C(_,F)}if(F=!0,w)for(var q=w.length-1;0<=q;q--){var ie=_.g=w[q];F=es(ie,b,!0,_)&&F}if(ie=_.g=u,F=es(ie,b,!0,_)&&F,F=es(ie,b,!1,_)&&F,w)for(q=0;q<w.length;q++)ie=_.g=w[q],F=es(ie,b,!1,_)&&F}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var u=this.i,_;for(_ in u.g){for(var w=u.g[_],b=0;b<w.length;b++)rt(w[b]);delete u.g[_],u.h--}}this.F=null},St.prototype.K=function(u,_,w,b){return this.i.add(String(u),_,!1,w,b)},St.prototype.L=function(u,_,w,b){return this.i.add(String(u),_,!0,w,b)};function es(u,_,w,b){if(_=u.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,q=0;q<_.length;++q){var ie=_[q];if(ie&&!ie.da&&ie.capture==w){var nt=ie.listener,Rt=ie.ha||ie.src;ie.fa&&Zn(u.i,ie),F=nt.call(Rt,b)!==!1&&F}}return F&&!b.defaultPrevented}function ul(u,_,w){if(typeof u=="function")w&&(u=E(u,w));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(u,_||0)}function Ps(u){u.g=ul(()=>{u.g=null,u.i&&(u.i=!1,Ps(u))},u.l);const _=u.h;u.h=null,u.m.apply(null,_)}class ji extends H{constructor(_,w){super(),this.m=_,this.l=w,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ps(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Oi(u){H.call(this),this.h=u,this.g={}}M(Oi,H);var dl=[];function hl(u){me(u.g,function(_,w){this.g.hasOwnProperty(w)&&Jr(_)},u),u.g={}}Oi.prototype.N=function(){Oi.aa.N.call(this),hl(this)},Oi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fl=f.JSON.stringify,pl=f.JSON.parse,ml=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Di(){}Di.prototype.h=null;function Oo(u){return u.h||(u.h=u.i())}function Do(){}var Bn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function br(){oe.call(this,"d")}M(br,oe);function Mo(){oe.call(this,"c")}M(Mo,oe);var Ir={},gl=null;function Mi(){return gl=gl||new St}Ir.La="serverreachability";function _l(u){oe.call(this,Ir.La,u)}M(_l,oe);function ts(u){const _=Mi();At(_,new _l(_))}Ir.STAT_EVENT="statevent";function yl(u,_){oe.call(this,Ir.STAT_EVENT,u),this.stat=_}M(yl,oe);function xt(u){const _=Mi();At(_,new yl(_,u))}Ir.Ma="timingevent";function Lo(u,_){oe.call(this,Ir.Ma,u),this.size=_}M(Lo,oe);function er(u,_){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},_)}function Li(){this.g=!0}Li.prototype.xa=function(){this.g=!1};function Vi(u,_,w,b,F,q){u.info(function(){if(u.g)if(q)for(var ie="",nt=q.split("&"),Rt=0;Rt<nt.length;Rt++){var Ke=nt[Rt].split("=");if(1<Ke.length){var Ut=Ke[0];Ke=Ke[1];var bt=Ut.split("_");ie=2<=bt.length&&bt[1]=="type"?ie+(Ut+"="+Ke+"&"):ie+(Ut+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+b+") [attempt "+F+"]: "+_+`
`+w+`
`+ie})}function Vo(u,_,w,b,F,q,ie){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+F+"]: "+_+`
`+w+`
`+q+" "+ie})}function tr(u,_,w,b){u.info(function(){return"XMLHTTP TEXT ("+_+"): "+Rf(u,w)+(b?" "+b:"")})}function vl(u,_){u.info(function(){return"TIMEOUT: "+_})}Li.prototype.info=function(){};function Rf(u,_){if(!u.g)return _;if(!_)return null;try{var w=JSON.parse(_);if(w){for(u=0;u<w.length;u++)if(Array.isArray(w[u])){var b=w[u];if(!(2>b.length)){var F=b[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return fl(w)}catch{return _}}var Fo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nr;function Fi(){}M(Fi,Di),Fi.prototype.g=function(){return new XMLHttpRequest},Fi.prototype.i=function(){return{}},nr=new Fi;function rr(u,_,w,b){this.j=u,this.i=_,this.l=w,this.R=b||1,this.U=new Oi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new mu}function mu(){this.i=null,this.g="",this.h=!1}var wl={},Uo={};function zo(u,_,w){u.L=1,u.v=Ls(On(_)),u.m=w,u.P=!0,xl(u,null)}function xl(u,_){u.F=Date.now(),at(u),u.A=On(u.v);var w=u.A,b=u.R;Array.isArray(b)||(b=[String(b)]),Fs(w.i,"t",b),u.C=0,w=u.j.J,u.h=new mu,u.g=ju(u.j,w?_:null,!u.m),0<u.O&&(u.M=new ji(E(u.Y,u,u.g),u.O)),_=u.U,w=u.g,b=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(dl[0]=F.toString()),F=dl);for(var q=0;q<F.length;q++){var ie=ol(w,F[q],b||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,_)):(u.u="GET",u.g.ea(u.A,u.u,null,_)),ts(),Vi(u.i,u.u,u.A,u.l,u.R,u.m)}rr.prototype.ca=function(u){u=u.target;const _=this.M;_&&gn(u)==3?_.j():this.Y(u)},rr.prototype.Y=function(u){try{if(u==this.g)e:{const bt=gn(this.g);var _=this.g.Ba();const qn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Nl(this.g)))){this.J||bt!=4||_==7||(_==8||0>=qn?ts(3):ts(2)),Ui(this);var w=this.g.Z();this.X=w;t:if(gu(this)){var b=Nl(this.g);u="";var F=b.length,q=gn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){$n(this),js(this);var ie="";break t}this.h.i=new f.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,u+=this.h.i.decode(b[_],{stream:!(q&&_==F-1)});b.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=w==200,Vo(this.i,this.u,this.A,this.l,this.R,bt,w),this.o){if(this.T&&!this.K){t:{if(this.g){var nt,Rt=this.g;if((nt=Rt.g?Rt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ee(nt)){var Ke=nt;break t}}Ke=null}if(w=Ke)tr(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,El(this,w);else{this.o=!1,this.s=3,xt(12),$n(this),js(this);break e}}if(this.P){w=!0;let Mn;for(;!this.J&&this.C<ie.length;)if(Mn=Pf(this,ie),Mn==Uo){bt==4&&(this.s=4,xt(14),w=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(Mn==wl){this.s=4,xt(15),tr(this.i,this.l,ie,"[Invalid Chunk]"),w=!1;break}else tr(this.i,this.l,Mn,null),El(this,Mn);if(gu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ie.length!=0||this.h.h||(this.s=1,xt(16),w=!1),this.o=this.o&&w,!w)tr(this.i,this.l,ie,"[Invalid Chunked Response]"),$n(this),js(this);else if(0<ie.length&&!this.W){this.W=!0;var Ut=this.j;Ut.g==this&&Ut.ba&&!Ut.M&&(Ut.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),Sl(Ut),Ut.M=!0,xt(11))}}else tr(this.i,this.l,ie,null),El(this,ie);bt==4&&$n(this),this.o&&!this.J&&(bt==4?Jo(this.j,this):(this.o=!1,at(this)))}else Go(this.g),w==400&&0<ie.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),$n(this),js(this)}}}catch{}finally{}};function gu(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Pf(u,_){var w=u.C,b=_.indexOf(`
`,w);return b==-1?Uo:(w=Number(_.substring(w,b)),isNaN(w)?wl:(b+=1,b+w>_.length?Uo:(_=_.slice(b,b+w),u.C=b+w,_)))}rr.prototype.cancel=function(){this.J=!0,$n(this)};function at(u){u.S=Date.now()+u.I,_u(u,u.I)}function _u(u,_){if(u.B!=null)throw Error("WatchDog timer not null");u.B=er(E(u.ba,u),_)}function Ui(u){u.B&&(f.clearTimeout(u.B),u.B=null)}rr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(vl(this.i,this.A),this.L!=2&&(ts(),xt(17)),$n(this),this.s=2,js(this)):_u(this,this.S-u)};function js(u){u.j.G==0||u.J||Jo(u.j,u)}function $n(u){Ui(u);var _=u.M;_&&typeof _.ma=="function"&&_.ma(),u.M=null,hl(u.U),u.g&&(_=u.g,u.g=null,_.abort(),_.ma())}function El(u,_){try{var w=u.j;if(w.G!=0&&(w.g==u||dn(w.h,u))){if(!u.K&&dn(w.h,u)&&w.G==3){try{var b=w.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var F=b;if(F[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<u.F)Xo(w),lr(w);else break e;Yo(w),xt(18)}}else w.za=F[1],0<w.za-w.T&&37500>F[2]&&w.F&&w.v==0&&!w.C&&(w.C=er(E(w.Za,w),6e3));if(1>=vu(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else os(w,11)}else if((u.K||w.g==u)&&Xo(w),!ee(_))for(F=w.Da.g.parse(_),_=0;_<F.length;_++){let Ke=F[_];if(w.T=Ke[0],Ke=Ke[1],w.G==2)if(Ke[0]=="c"){w.K=Ke[1],w.ia=Ke[2];const Ut=Ke[3];Ut!=null&&(w.la=Ut,w.j.info("VER="+w.la));const bt=Ke[4];bt!=null&&(w.Aa=bt,w.j.info("SVER="+w.Aa));const qn=Ke[5];qn!=null&&typeof qn=="number"&&0<qn&&(b=1.5*qn,w.L=b,w.j.info("backChannelRequestTimeoutMs_="+b)),b=w;const Mn=u.g;if(Mn){const Gi=Mn.g?Mn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Gi){var q=b.h;q.g||Gi.indexOf("spdy")==-1&&Gi.indexOf("quic")==-1&&Gi.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Tl(q,q.h),q.h=null))}if(b.D){const ea=Mn.g?Mn.g.getResponseHeader("X-HTTP-Session-Id"):null;ea&&(b.ya=ea,st(b.I,b.D,ea))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-u.F,w.j.info("Handshake RTT: "+w.R+"ms")),b=w;var ie=u;if(b.qa=Pu(b,b.J?b.ia:null,b.W),ie.K){wu(b.h,ie);var nt=ie,Rt=b.L;Rt&&(nt.I=Rt),nt.B&&(Ui(nt),at(nt)),b.g=ie}else Hi(b);0<w.i.length&&Sr(w)}else Ke[0]!="stop"&&Ke[0]!="close"||os(w,7);else w.G==3&&(Ke[0]=="stop"||Ke[0]=="close"?Ke[0]=="stop"?os(w,7):Yt(w):Ke[0]!="noop"&&w.l&&w.l.ta(Ke),w.v=0)}}ts(4)}catch{}}var yu=class{constructor(u,_){this.g=u,this.map=_}};function zi(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function jn(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function vu(u){return u.h?1:u.g?u.g.size:0}function dn(u,_){return u.h?u.h==_:u.g?u.g.has(_):!1}function Tl(u,_){u.g?u.g.add(_):u.h=_}function wu(u,_){u.h&&u.h==_?u.h=null:u.g&&u.g.has(_)&&u.g.delete(_)}zi.prototype.cancel=function(){if(this.i=xu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function xu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let _=u.i;for(const w of u.g.values())_=_.concat(w.D);return _}return U(u.i)}function Bo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var _=[],w=u.length,b=0;b<w;b++)_.push(u[b]);return _}_=[],w=0;for(b in u)_[w++]=u[b];return _}function $o(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var _=[];u=u.length;for(var w=0;w<u;w++)_.push(w);return _}_=[],w=0;for(const b in u)_[w++]=b;return _}}}function Os(u,_){if(u.forEach&&typeof u.forEach=="function")u.forEach(_,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,_,void 0);else for(var w=$o(u),b=Bo(u),F=b.length,q=0;q<F;q++)_.call(void 0,b[q],w&&w[q],u)}var Bi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jf(u,_){if(u){u=u.split("&");for(var w=0;w<u.length;w++){var b=u[w].indexOf("="),F=null;if(0<=b){var q=u[w].substring(0,b);F=u[w].substring(b+1)}else q=u[w];_(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function ns(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof ns){this.h=u.h,$i(this,u.j),this.o=u.o,this.g=u.g,Ds(this,u.s),this.l=u.l;var _=u.i,w=new Cr;w.i=_.i,_.g&&(w.g=new Map(_.g),w.h=_.h),Ms(this,w),this.m=u.m}else u&&(_=String(u).match(Bi))?(this.h=!1,$i(this,_[1]||"",!0),this.o=We(_[2]||""),this.g=We(_[3]||"",!0),Ds(this,_[4]),this.l=We(_[5]||"",!0),Ms(this,_[6]||"",!0),this.m=We(_[7]||"")):(this.h=!1,this.i=new Cr(null,this.h))}ns.prototype.toString=function(){var u=[],_=this.j;_&&u.push(Vs(_,Wo,!0),":");var w=this.g;return(w||_=="file")&&(u.push("//"),(_=this.o)&&u.push(Vs(_,Wo,!0),"@"),u.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&u.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&u.push("/"),u.push(Vs(w,w.charAt(0)=="/"?bu:Tu,!0))),(w=this.i.toString())&&u.push("?",w),(w=this.m)&&u.push("#",Vs(w,bl)),u.join("")};function On(u){return new ns(u)}function $i(u,_,w){u.j=w?We(_,!0):_,u.j&&(u.j=u.j.replace(/:$/,""))}function Ds(u,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);u.s=_}else u.s=null}function Ms(u,_,w){_ instanceof Cr?(u.i=_,Nr(u.i,u.h)):(w||(_=Vs(_,Iu)),u.i=new Cr(_,u.h))}function st(u,_,w){u.i.set(_,w)}function Ls(u){return st(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function We(u,_){return u?_?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Vs(u,_,w){return typeof u=="string"?(u=encodeURI(u).replace(_,Eu),w&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function Eu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Wo=/[#\/\?@]/g,Tu=/[#\?:]/g,bu=/[#\?]/g,Iu=/[#\?@]/g,bl=/#/g;function Cr(u,_){this.h=this.g=null,this.i=u||null,this.j=!!_}function Qt(u){u.g||(u.g=new Map,u.h=0,u.i&&jf(u.i,function(_,w){u.add(decodeURIComponent(_.replace(/\+/g," ")),w)}))}n=Cr.prototype,n.add=function(u,_){Qt(this),this.i=null,u=Wn(this,u);var w=this.g.get(u);return w||this.g.set(u,w=[]),w.push(_),this.h+=1,this};function sr(u,_){Qt(u),_=Wn(u,_),u.g.has(_)&&(u.i=null,u.h-=u.g.get(_).length,u.g.delete(_))}function ir(u,_){return Qt(u),_=Wn(u,_),u.g.has(_)}n.forEach=function(u,_){Qt(this),this.g.forEach(function(w,b){w.forEach(function(F){u.call(_,F,b,this)},this)},this)},n.na=function(){Qt(this);const u=Array.from(this.g.values()),_=Array.from(this.g.keys()),w=[];for(let b=0;b<_.length;b++){const F=u[b];for(let q=0;q<F.length;q++)w.push(_[b])}return w},n.V=function(u){Qt(this);let _=[];if(typeof u=="string")ir(this,u)&&(_=_.concat(this.g.get(Wn(this,u))));else{u=Array.from(this.g.values());for(let w=0;w<u.length;w++)_=_.concat(u[w])}return _},n.set=function(u,_){return Qt(this),this.i=null,u=Wn(this,u),ir(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[_]),this.h+=1,this},n.get=function(u,_){return u?(u=this.V(u),0<u.length?String(u[0]):_):_};function Fs(u,_,w){sr(u,_),0<w.length&&(u.i=null,u.g.set(Wn(u,_),U(w)),u.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],_=Array.from(this.g.keys());for(var w=0;w<_.length;w++){var b=_[w];const q=encodeURIComponent(String(b)),ie=this.V(b);for(b=0;b<ie.length;b++){var F=q;ie[b]!==""&&(F+="="+encodeURIComponent(String(ie[b]))),u.push(F)}}return this.i=u.join("&")};function Wn(u,_){return _=String(_),u.j&&(_=_.toLowerCase()),_}function Nr(u,_){_&&!u.j&&(Qt(u),u.i=null,u.g.forEach(function(w,b){var F=b.toLowerCase();b!=F&&(sr(this,b),Fs(this,F,w))},u)),u.j=_}function Of(u,_){const w=new Li;if(f.Image){const b=new Image;b.onload=A(mn,w,"TestLoadImage: loaded",!0,_,b),b.onerror=A(mn,w,"TestLoadImage: error",!1,_,b),b.onabort=A(mn,w,"TestLoadImage: abort",!1,_,b),b.ontimeout=A(mn,w,"TestLoadImage: timeout",!1,_,b),f.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else _(!1)}function Cu(u,_){const w=new Li,b=new AbortController,F=setTimeout(()=>{b.abort(),mn(w,"TestPingServer: timeout",!1,_)},1e4);fetch(u,{signal:b.signal}).then(q=>{clearTimeout(F),q.ok?mn(w,"TestPingServer: ok",!0,_):mn(w,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),mn(w,"TestPingServer: error",!1,_)})}function mn(u,_,w,b,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),b(w)}catch{}}function Df(){this.g=new ml}function Nu(u,_,w){const b=w||"";try{Os(u,function(F,q){let ie=F;m(F)&&(ie=fl(F)),_.push(b+q+"="+encodeURIComponent(ie))})}catch(F){throw _.push(b+"type="+encodeURIComponent("_badmap")),F}}function rs(u){this.l=u.Ub||null,this.j=u.eb||!1}M(rs,Di),rs.prototype.g=function(){return new Wi(this.l,this.j)},rs.prototype.i=(function(u){return function(){return u}})({});function Wi(u,_){St.call(this),this.D=u,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}M(Wi,St),n=Wi.prototype,n.open=function(u,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=_,this.readyState=1,ar(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(_.body=u),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,or(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ar(this)),this.g&&(this.readyState=3,ar(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ku(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function ku(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var _=u.value?u.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!u.done}))&&(this.response=this.responseText+=_)}u.done?or(this):ar(this),this.readyState==3&&ku(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,or(this))},n.Qa=function(u){this.g&&(this.response=u,or(this))},n.ga=function(){this.g&&or(this)};function or(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ar(u)}n.setRequestHeader=function(u,_){this.u.append(u,_)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],_=this.h.entries();for(var w=_.next();!w.done;)w=w.value,u.push(w[0]+": "+w[1]),w=_.next();return u.join(`\r
`)};function ar(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Wi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function ss(u){let _="";return me(u,function(w,b){_+=b,_+=":",_+=w,_+=`\r
`}),_}function Us(u,_,w){e:{for(b in w){var b=!1;break e}b=!0}b||(w=ss(w),typeof u=="string"?w!=null&&encodeURIComponent(String(w)):st(u,_,w))}function mt(u){St.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}M(mt,St);var Mf=/^https?$/i,Il=["POST","PUT"];n=mt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,_,w,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);_=_?_.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nr.g(),this.v=this.o?Oo(this.o):Oo(nr),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(_,String(u),!0),this.B=!1}catch(q){qi(this,q);return}if(u=w||"",w=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var F in b)w.set(F,b[F]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const q of b.keys())w.set(q,b.get(q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(w.keys()).find(q=>q.toLowerCase()=="content-type"),F=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(Il,_,void 0))||b||F||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of w)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ho(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){qi(this,q)}};function qi(u,_){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=_,u.m=5,qo(u),Dn(u)}function qo(u){u.A||(u.A=!0,At(u,"complete"),At(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,At(this,"complete"),At(this,"abort"),Dn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Dn(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Cl(this):this.bb())},n.bb=function(){Cl(this)};function Cl(u){if(u.h&&typeof l<"u"&&(!u.v[1]||gn(u)!=4||u.Z()!=2)){if(u.u&&gn(u)==4)ul(u.Ea,0,u);else if(At(u,"readystatechange"),gn(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var w;if(!(w=_)){var b;if(b=ie===0){var F=String(u.D).match(Bi)[1]||null;!F&&f.self&&f.self.location&&(F=f.self.location.protocol.slice(0,-1)),b=!Mf.test(F?F.toLowerCase():"")}w=b}if(w)At(u,"complete"),At(u,"success");else{u.m=6;try{var q=2<gn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",qo(u)}}finally{Dn(u)}}}}function Dn(u,_){if(u.g){Ho(u);const w=u.g,b=u.v[0]?()=>{}:null;u.g=null,u.v=null,_||At(u,"ready");try{w.onreadystatechange=b}catch{}}}function Ho(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function gn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<gn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var _=this.g.responseText;return u&&_.indexOf(u)==0&&(_=_.substring(u.length)),pl(_)}};function Nl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Go(u){const _={};u=(u.g&&2<=gn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(ee(u[b]))continue;var w=P(u[b]);const F=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const q=_[F]||[];_[F]=q,q.push(w)}O(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function kr(u,_,w){return w&&w.internalChannelParams&&w.internalChannelParams[u]||_}function kl(u){this.Aa=0,this.i=[],this.j=new Li,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=kr("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=kr("baseRetryDelayMs",5e3,u),this.cb=kr("retryDelaySeedMs",1e4,u),this.Wa=kr("forwardChannelMaxRetries",2,u),this.wa=kr("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new zi(u&&u.concurrentRequestLimit),this.Da=new Df,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=kl.prototype,n.la=8,n.G=1,n.connect=function(u,_,w,b){xt(0),this.W=u,this.H=_||{},w&&b!==void 0&&(this.H.OSID=w,this.H.OAID=b),this.F=this.X,this.I=Pu(this,null,this.W),Sr(this)};function Yt(u){if(Ko(u),u.G==3){var _=u.U++,w=On(u.I);if(st(w,"SID",u.K),st(w,"RID",_),st(w,"TYPE","terminate"),is(u,w),_=new rr(u,u.j,_),_.L=2,_.v=Ls(On(w)),w=!1,f.navigator&&f.navigator.sendBeacon)try{w=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!w&&f.Image&&(new Image().src=_.v,w=!0),w||(_.g=ju(_.j,null),_.g.ea(_.v)),_.F=Date.now(),at(_)}Ru(u)}function lr(u){u.g&&(Sl(u),u.g.cancel(),u.g=null)}function Ko(u){lr(u),u.u&&(f.clearTimeout(u.u),u.u=null),Xo(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Sr(u){if(!jn(u.h)&&!u.s){u.s=!0;var _=u.Ga;Pe||te(),B||(Pe(),B=!0),le.add(_,u),u.B=0}}function Lf(u,_){return vu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=_.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=er(E(u.Ga,u,_),Au(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new rr(this,this.j,u);let q=this.o;if(this.S&&(q?(q=I(q),C(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var _=0,w=0;w<this.i.length;w++){t:{var b=this.i[w];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=w;break e}if(_===4096||w===this.i.length-1){_=w+1;break e}}_=1e3}else _=1e3;_=zs(this,F,_),w=On(this.I),st(w,"RID",u),st(w,"CVER",22),this.D&&st(w,"X-HTTP-Session-Id",this.D),is(this,w),q&&(this.O?_="headers="+encodeURIComponent(String(ss(q)))+"&"+_:this.m&&Us(w,this.m,q)),Tl(this.h,F),this.Ua&&st(w,"TYPE","init"),this.P?(st(w,"$req",_),st(w,"SID","null"),F.T=!0,zo(F,w,null)):zo(F,w,_),this.G=2}}else this.G==3&&(u?Qo(this,u):this.i.length==0||jn(this.h)||Qo(this))};function Qo(u,_){var w;_?w=_.l:w=u.U++;const b=On(u.I);st(b,"SID",u.K),st(b,"RID",w),st(b,"AID",u.T),is(u,b),u.m&&u.o&&Us(b,u.m,u.o),w=new rr(u,u.j,w,u.B+1),u.m===null&&(w.H=u.o),_&&(u.i=_.D.concat(u.i)),_=zs(u,w,1e3),w.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),Tl(u.h,w),zo(w,b,_)}function is(u,_){u.H&&me(u.H,function(w,b){st(_,b,w)}),u.l&&Os({},function(w,b){st(_,b,w)})}function zs(u,_,w){w=Math.min(u.i.length,w);var b=u.l?E(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const ie=["count="+w];q==-1?0<w?(q=F[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let nt=!0;for(let Rt=0;Rt<w;Rt++){let Ke=F[Rt].g;const Ut=F[Rt].map;if(Ke-=q,0>Ke)q=Math.max(0,F[Rt].g-100),nt=!1;else try{Nu(Ut,ie,"req"+Ke+"_")}catch{b&&b(Ut)}}if(nt){b=ie.join("&");break e}}}return u=u.i.splice(0,w),_.D=u,b}function Hi(u){if(!u.g&&!u.u){u.Y=1;var _=u.Fa;Pe||te(),B||(Pe(),B=!0),le.add(_,u),u.v=0}}function Yo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=er(E(u.Fa,u),Au(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,Su(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=er(E(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),lr(this),Su(this))};function Sl(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function Su(u){u.g=new rr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var _=On(u.qa);st(_,"RID","rpc"),st(_,"SID",u.K),st(_,"AID",u.T),st(_,"CI",u.F?"0":"1"),!u.F&&u.ja&&st(_,"TO",u.ja),st(_,"TYPE","xmlhttp"),is(u,_),u.m&&u.o&&Us(_,u.m,u.o),u.L&&(u.g.I=u.L);var w=u.g;u=u.ia,w.L=1,w.v=Ls(On(_)),w.m=null,w.P=!0,xl(w,u)}n.Za=function(){this.C!=null&&(this.C=null,lr(this),Yo(this),xt(19))};function Xo(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Jo(u,_){var w=null;if(u.g==_){Xo(u),Sl(u),u.g=null;var b=2}else if(dn(u.h,_))w=_.D,wu(u.h,_),b=1;else return;if(u.G!=0){if(_.o)if(b==1){w=_.m?_.m.length:0,_=Date.now()-_.F;var F=u.B;b=Mi(),At(b,new Lo(b,w)),Sr(u)}else Hi(u);else if(F=_.s,F==3||F==0&&0<_.X||!(b==1&&Lf(u,_)||b==2&&Yo(u)))switch(w&&0<w.length&&(_=u.h,_.i=_.i.concat(w)),F){case 1:os(u,5);break;case 4:os(u,10);break;case 3:os(u,6);break;default:os(u,2)}}}function Au(u,_){let w=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(w*=2),w*_}function os(u,_){if(u.j.info("Error code "+_),_==2){var w=E(u.fb,u),b=u.Xa;const F=!b;b=new ns(b||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||$i(b,"https"),Ls(b),F?Of(b.toString(),w):Cu(b.toString(),w)}else xt(2);u.G=0,u.l&&u.l.sa(_),Ru(u),Ko(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Ru(u){if(u.G=0,u.ka=[],u.l){const _=xu(u.h);(_.length!=0||u.i.length!=0)&&(L(u.ka,_),L(u.ka,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.ra()}}function Pu(u,_,w){var b=w instanceof ns?On(w):new ns(w);if(b.g!="")_&&(b.g=_+"."+b.g),Ds(b,b.s);else{var F=f.location;b=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var q=new ns(null);b&&$i(q,b),_&&(q.g=_),F&&Ds(q,F),w&&(q.l=w),b=q}return w=u.D,_=u.ya,w&&_&&st(b,w,_),st(b,"VER",u.la),is(u,b),b}function ju(u,_,w){if(_&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=u.Ca&&!u.pa?new mt(new rs({eb:w})):new mt(u.pa),_.Ha(u.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Al(){}n=Al.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Zo(){}Zo.prototype.g=function(u,_){return new hn(u,_)};function hn(u,_){St.call(this),this.g=new kl(_),this.l=u,this.h=_&&_.messageUrlParams||null,u=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(u?u["X-WebChannel-Content-Type"]=_.messageContentType:u={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(u?u["X-WebChannel-Client-Profile"]=_.va:u={"X-WebChannel-Client-Profile":_.va}),this.g.S=u,(u=_&&_.Sb)&&!ee(u)&&(this.g.m=u),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!ee(_)&&(this.g.D=_,u=this.h,u!==null&&_ in u&&(u=this.h,_ in u&&delete u[_])),this.j=new Ar(this)}M(hn,St),hn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},hn.prototype.close=function(){Yt(this.g)},hn.prototype.o=function(u){var _=this.g;if(typeof u=="string"){var w={};w.__data__=u,u=w}else this.u&&(w={},w.__data__=fl(u),u=w);_.i.push(new yu(_.Ya++,u)),_.G==3&&Sr(_)},hn.prototype.N=function(){this.g.l=null,delete this.j,Yt(this.g),delete this.g,hn.aa.N.call(this)};function Ou(u){br.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var _=u.__sm__;if(_){e:{for(const w in _){u=w;break e}u=void 0}(this.i=u)&&(u=this.i,_=_!==null&&u in _?_[u]:void 0),this.data=_}else this.data=u}M(Ou,br);function Du(){Mo.call(this),this.status=1}M(Du,Mo);function Ar(u){this.g=u}M(Ar,Al),Ar.prototype.ua=function(){At(this.g,"a")},Ar.prototype.ta=function(u){At(this.g,new Ou(u))},Ar.prototype.sa=function(u){At(this.g,new Du)},Ar.prototype.ra=function(){At(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,hn.prototype.send=hn.prototype.o,hn.prototype.open=hn.prototype.m,hn.prototype.close=hn.prototype.close,XE=function(){return new Zo},YE=function(){return Mi()},QE=Ir,$m={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Fo.NO_ERROR=0,Fo.TIMEOUT=8,Fo.HTTP_ERROR=6,Gd=Fo,pu.COMPLETE="complete",KE=pu,Do.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",St.prototype.listen=St.prototype.K,dc=Do,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,GE=mt}).apply(typeof jd<"u"?jd:typeof self<"u"?self:typeof window<"u"?window:{});const G0="@firebase/firestore",K0="4.8.0";/**
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
 */class an{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}an.UNAUTHENTICATED=new an(null),an.GOOGLE_CREDENTIALS=new an("google-credentials-uid"),an.FIRST_PARTY=new an("first-party-uid"),an.MOCK_USER=new an("mock-user");/**
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
 */let Za="11.10.0";/**
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
 */const _o=new Qc("@firebase/firestore");function ba(){return _o.logLevel}function de(n,...e){if(_o.logLevel<=ze.DEBUG){const t=e.map(Dg);_o.debug(`Firestore (${Za}): ${n}`,...t)}}function bs(n,...e){if(_o.logLevel<=ze.ERROR){const t=e.map(Dg);_o.error(`Firestore (${Za}): ${n}`,...t)}}function yi(n,...e){if(_o.logLevel<=ze.WARN){const t=e.map(Dg);_o.warn(`Firestore (${Za}): ${n}`,...t)}}function Dg(n){if(typeof n=="string")return n;try{/**
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
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
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
 */function Se(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,JE(n,r,t)}function JE(n,e,t){let r=`FIRESTORE (${Za}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw bs(r),new Error(r)}function tt(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||JE(e,i,r)}function je(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xe extends Qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class fo{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class ZE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class E2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(an.UNAUTHENTICATED)))}shutdown(){}}class T2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class b2{constructor(e){this.t=e,this.currentUser=an.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){tt(this.o===void 0,42304);let r=this.i;const i=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new fo;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new fo,e.enqueueRetryable((()=>i(this.currentUser)))};const l=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await i(this.currentUser)}))},f=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new fo)}}),0),l()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string",31837,{l:r}),new ZE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return tt(e===null||typeof e=="string",2055,{h:e}),new an(e)}}class I2{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=an.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class C2{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new I2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(an.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Q0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class N2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,bn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){tt(this.o===void 0,3512);const r=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const l=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Q0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(tt(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Q0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function k2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function e1(){return new TextEncoder}/**
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
 */class Mg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=k2(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function Me(n,e){return n<e?-1:n>e?1:0}function Wm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return Me(r,i);{const a=e1(),l=S2(a.encode(Y0(n,t)),a.encode(Y0(e,t)));return l!==0?l:Me(r,i)}}t+=r>65535?2:1}return Me(n.length,e.length)}function Y0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function S2(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Me(n[t],e[t]);return Me(n.length,e.length)}function Fa(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const X0="__name__";class Mr{constructor(e,t,r){t===void 0?t=0:t>e.length&&Se(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&Se(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Mr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Mr.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return Me(e.length,t.length)}static compareSegments(e,t){const r=Mr.isNumericId(e),i=Mr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Mr.extractNumericId(e).compare(Mr.extractNumericId(t)):Wm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class ft extends Mr{construct(e,t,r){return new ft(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new xe(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ft(t)}static emptyPath(){return new ft([])}}const A2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Zt extends Mr{construct(e,t,r){return new Zt(e,t,r)}static isValidIdentifier(e){return A2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Zt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===X0}static keyField(){return new Zt([X0])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new xe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let l=!1;for(;i<e.length;){const f=e[i];if(f==="\\"){if(i+1===e.length)throw new xe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[i+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new xe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,i+=2}else f==="`"?(l=!l,i++):f!=="."||l?(r+=f,i++):(a(),i++)}if(a(),l)throw new xe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Zt(t)}static emptyPath(){return new Zt([])}}/**
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
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(ft.fromString(e))}static fromName(e){return new Ee(ft.fromString(e).popFirst(5))}static empty(){return new Ee(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ft.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ft.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new ft(e.slice()))}}/**
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
 */function t1(n,e,t){if(!t)throw new xe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function R2(n,e,t,r){if(e===!0&&r===!0)throw new xe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function J0(n){if(!Ee.isDocumentKey(n))throw new xe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Z0(n){if(Ee.isDocumentKey(n))throw new xe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function n1(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Lg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se(12329,{type:typeof n})}function po(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new xe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Lg(n);throw new xe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Nt(n,e){const t={typeString:n};return e&&(t.value=e),t}function Xc(n,e){if(!n1(n))throw new xe(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const l=n[r];if(i&&typeof l!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&l!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new xe(X.INVALID_ARGUMENT,t);return!0}/**
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
 */const ew=-62135596800,tw=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*tw);return new pt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ew)throw new xe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tw}_compareTo(e){return this.seconds===e.seconds?Me(this.nanoseconds,e.nanoseconds):Me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Xc(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ew;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Nt("string",pt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class Re{static fromTimestamp(e){return new Re(e)}static min(){return new Re(new pt(0,0))}static max(){return new Re(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Rc=-1;function P2(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Re.fromTimestamp(r===1e9?new pt(t+1,0):new pt(t,r));return new vi(i,Ee.empty(),e)}function j2(n){return new vi(n.readTime,n.key,Rc)}class vi{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new vi(Re.min(),Ee.empty(),Rc)}static max(){return new vi(Re.max(),Ee.empty(),Rc)}}function O2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Me(n.largestBatchId,e.largestBatchId))}/**
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
 */const D2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class M2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function el(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==D2)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let i=0,a=0,l=!1;e.forEach((f=>{++i,f.next((()=>{++a,l&&a===i&&t()}),(p=>r(p)))})),l=!0,a===i&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((i=>i?K.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,i)=>{const a=e.length,l=new Array(a);let f=0;for(let p=0;p<a;p++){const m=p;t(e[m]).next((v=>{l[m]=v,++f,f===a&&r(l)}),(v=>i(v)))}}))}static doWhile(e,t){return new K(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function L2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function tl(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Qh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Qh.ue=-1;/**
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
 */const Vg=-1;function Yh(n){return n==null}function hh(n){return n===0&&1/n==-1/0}function V2(n){return typeof n=="number"&&Number.isInteger(n)&&!hh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const r1="";function F2(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nw(e)),e=U2(n.get(t),e);return nw(e)}function U2(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case r1:t+="";break;default:t+=a}}return t}function nw(n){return n+r1+""}/**
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
 */function rw(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Si(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function s1(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let kt=class qm{constructor(e,t){this.comparator=e,this.root=t||pi.EMPTY}insert(e,t){return new qm(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,pi.BLACK,null,null))}remove(e){return new qm(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Od(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Od(this.root,e,this.comparator,!1)}getReverseIterator(){return new Od(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Od(this.root,e,this.comparator,!0)}},Od=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},pi=class gs{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??gs.RED,this.left=i??gs.EMPTY,this.right=a??gs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new gs(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return gs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return gs.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,gs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,gs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Se(27949);return e+(this.isRed()?0:1)}};pi.EMPTY=null,pi.RED=!0,pi.BLACK=!1;pi.EMPTY=new class{constructor(){this.size=0}get key(){throw Se(57766)}get value(){throw Se(16141)}get color(){throw Se(16727)}get left(){throw Se(29726)}get right(){throw Se(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new pi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(e){this.comparator=e,this.data=new kt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sw(this.data.getIterator())}getIteratorFrom(e){return new sw(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class sw{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(Zt.comparator)}static empty(){return new Un([])}unionWith(e){let t=new Vt(Zt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Un(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Fa(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class i1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class en{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new i1("Invalid base64 string: "+a):a}})(e);return new en(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let l=0;l<i.length;++l)a+=String.fromCharCode(i[l]);return a})(e);return new en(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}en.EMPTY_BYTE_STRING=new en("");const z2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wi(n){if(tt(!!n,39018),typeof n=="string"){let e=0;const t=z2.exec(n);if(tt(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function xi(n){return typeof n=="string"?en.fromBase64String(n):en.fromUint8Array(n)}/**
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
 */const o1="server_timestamp",a1="__type__",l1="__previous_value__",c1="__local_write_time__";function Fg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[a1])===null||t===void 0?void 0:t.stringValue)===o1}function Xh(n){const e=n.mapValue.fields[l1];return Fg(e)?Xh(e):e}function Pc(n){const e=wi(n.mapValue.fields[c1].timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class B2{constructor(e,t,r,i,a,l,f,p,m,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=l,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=m,this.isUsingEmulator=v}}const fh="(default)";class jc{constructor(e,t){this.projectId=e,this.database=t||fh}static empty(){return new jc("","")}get isDefaultDatabase(){return this.database===fh}isEqual(e){return e instanceof jc&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const u1="__type__",$2="__max__",Dd={mapValue:{}},d1="__vector__",ph="value";function Ei(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Fg(n)?4:q2(n)?9007199254740991:W2(n)?10:11:Se(28295,{value:n})}function qr(n,e){if(n===e)return!0;const t=Ei(n);if(t!==Ei(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Pc(n).isEqual(Pc(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const l=wi(i.timestampValue),f=wi(a.timestampValue);return l.seconds===f.seconds&&l.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return xi(i.bytesValue).isEqual(xi(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return Tt(i.geoPointValue.latitude)===Tt(a.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return Tt(i.integerValue)===Tt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const l=Tt(i.doubleValue),f=Tt(a.doubleValue);return l===f?hh(l)===hh(f):isNaN(l)&&isNaN(f)}return!1})(n,e);case 9:return Fa(n.arrayValue.values||[],e.arrayValue.values||[],qr);case 10:case 11:return(function(i,a){const l=i.mapValue.fields||{},f=a.mapValue.fields||{};if(rw(l)!==rw(f))return!1;for(const p in l)if(l.hasOwnProperty(p)&&(f[p]===void 0||!qr(l[p],f[p])))return!1;return!0})(n,e);default:return Se(52216,{left:n})}}function Oc(n,e){return(n.values||[]).find((t=>qr(t,e)))!==void 0}function Ua(n,e){if(n===e)return 0;const t=Ei(n),r=Ei(e);if(t!==r)return Me(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return Me(n.booleanValue,e.booleanValue);case 2:return(function(a,l){const f=Tt(a.integerValue||a.doubleValue),p=Tt(l.integerValue||l.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return iw(n.timestampValue,e.timestampValue);case 4:return iw(Pc(n),Pc(e));case 5:return Wm(n.stringValue,e.stringValue);case 6:return(function(a,l){const f=xi(a),p=xi(l);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,l){const f=a.split("/"),p=l.split("/");for(let m=0;m<f.length&&m<p.length;m++){const v=Me(f[m],p[m]);if(v!==0)return v}return Me(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,l){const f=Me(Tt(a.latitude),Tt(l.latitude));return f!==0?f:Me(Tt(a.longitude),Tt(l.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return ow(n.arrayValue,e.arrayValue);case 10:return(function(a,l){var f,p,m,v;const x=a.fields||{},E=l.fields||{},A=(f=x[ph])===null||f===void 0?void 0:f.arrayValue,M=(p=E[ph])===null||p===void 0?void 0:p.arrayValue,U=Me(((m=A?.values)===null||m===void 0?void 0:m.length)||0,((v=M?.values)===null||v===void 0?void 0:v.length)||0);return U!==0?U:ow(A,M)})(n.mapValue,e.mapValue);case 11:return(function(a,l){if(a===Dd.mapValue&&l===Dd.mapValue)return 0;if(a===Dd.mapValue)return 1;if(l===Dd.mapValue)return-1;const f=a.fields||{},p=Object.keys(f),m=l.fields||{},v=Object.keys(m);p.sort(),v.sort();for(let x=0;x<p.length&&x<v.length;++x){const E=Wm(p[x],v[x]);if(E!==0)return E;const A=Ua(f[p[x]],m[v[x]]);if(A!==0)return A}return Me(p.length,v.length)})(n.mapValue,e.mapValue);default:throw Se(23264,{le:t})}}function iw(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Me(n,e);const t=wi(n),r=wi(e),i=Me(t.seconds,r.seconds);return i!==0?i:Me(t.nanos,r.nanos)}function ow(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Ua(t[i],r[i]);if(a)return a}return Me(t.length,r.length)}function za(n){return Hm(n)}function Hm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=wi(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return xi(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Hm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const l of r)a?a=!1:i+=",",i+=`${l}:${Hm(t.fields[l])}`;return i+"}"})(n.mapValue):Se(61005,{value:n})}function Kd(n){switch(Ei(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(n);return e?16+Kd(e):16;case 5:return 2*n.stringValue.length;case 6:return xi(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Kd(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Si(r.fields,((a,l)=>{i+=a.length+Kd(l)})),i})(n.mapValue);default:throw Se(13486,{value:n})}}function Gm(n){return!!n&&"integerValue"in n}function Ug(n){return!!n&&"arrayValue"in n}function aw(n){return!!n&&"nullValue"in n}function lw(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Qd(n){return!!n&&"mapValue"in n}function W2(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[u1])===null||t===void 0?void 0:t.stringValue)===d1}function gc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Si(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=gc(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=gc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function q2(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===$2}/**
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
 */class In{constructor(e){this.value=e}static empty(){return new In({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Qd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=gc(t)}setAll(e){let t=Zt.emptyPath(),r={},i=[];e.forEach(((l,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,r,i),r={},i=[],t=f.popLast()}l?r[f.lastSegment()]=gc(l):i.push(f.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());Qd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Qd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Si(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new In(gc(this.value))}}function h1(n){const e=[];return Si(n.fields,((t,r)=>{const i=new Zt([t]);if(Qd(r)){const a=h1(r.mapValue).fields;if(a.length===0)e.push(i);else for(const l of a)e.push(i.child(l))}else e.push(i)})),new Un(e)}/**
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
 */class ln{constructor(e,t,r,i,a,l,f){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=l,this.documentState=f}static newInvalidDocument(e){return new ln(e,0,Re.min(),Re.min(),Re.min(),In.empty(),0)}static newFoundDocument(e,t,r,i){return new ln(e,1,t,Re.min(),r,i,0)}static newNoDocument(e,t){return new ln(e,2,t,Re.min(),Re.min(),In.empty(),0)}static newUnknownDocument(e,t){return new ln(e,3,t,Re.min(),Re.min(),In.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=In.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=In.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mh{constructor(e,t){this.position=e,this.inclusive=t}}function cw(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],l=n.position[i];if(a.field.isKeyField()?r=Ee.comparator(Ee.fromName(l.referenceValue),t.key):r=Ua(l,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function uw(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!qr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class gh{constructor(e,t="asc"){this.field=e,this.dir=t}}function H2(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class f1{}class Dt extends f1{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new K2(e,t,r):t==="array-contains"?new X2(e,r):t==="in"?new J2(e,r):t==="not-in"?new Z2(e,r):t==="array-contains-any"?new eR(e,r):new Dt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Q2(e,r):new Y2(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Ua(t,this.value)):t!==null&&Ei(this.value)===Ei(t)&&this.matchesComparison(Ua(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Hr extends f1{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Hr(e,t)}matches(e){return p1(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function p1(n){return n.op==="and"}function m1(n){return G2(n)&&p1(n)}function G2(n){for(const e of n.filters)if(e instanceof Hr)return!1;return!0}function Km(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+za(n.value);if(m1(n))return n.filters.map((e=>Km(e))).join(",");{const e=n.filters.map((t=>Km(t))).join(",");return`${n.op}(${e})`}}function g1(n,e){return n instanceof Dt?(function(r,i){return i instanceof Dt&&r.op===i.op&&r.field.isEqual(i.field)&&qr(r.value,i.value)})(n,e):n instanceof Hr?(function(r,i){return i instanceof Hr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,l,f)=>a&&g1(l,i.filters[f])),!0):!1})(n,e):void Se(19439)}function _1(n){return n instanceof Dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${za(t.value)}`})(n):n instanceof Hr?(function(t){return t.op.toString()+" {"+t.getFilters().map(_1).join(" ,")+"}"})(n):"Filter"}class K2 extends Dt{constructor(e,t,r){super(e,t,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class Q2 extends Dt{constructor(e,t){super(e,"in",t),this.keys=y1("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Y2 extends Dt{constructor(e,t){super(e,"not-in",t),this.keys=y1("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function y1(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ee.fromName(r.referenceValue)))}class X2 extends Dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ug(t)&&Oc(t.arrayValue,this.value)}}class J2 extends Dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Oc(this.value.arrayValue,t)}}class Z2 extends Dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Oc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Oc(this.value.arrayValue,t)}}class eR extends Dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ug(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Oc(this.value.arrayValue,r)))}}/**
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
 */class tR{constructor(e,t=null,r=[],i=[],a=null,l=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=l,this.endAt=f,this.Pe=null}}function dw(n,e=null,t=[],r=[],i=null,a=null,l=null){return new tR(n,e,t,r,i,a,l)}function zg(n){const e=je(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Km(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Yh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>za(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>za(r))).join(",")),e.Pe=t}return e.Pe}function Bg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!H2(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!g1(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!uw(n.startAt,e.startAt)&&uw(n.endAt,e.endAt)}function Qm(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Jh{constructor(e,t=null,r=[],i=[],a=null,l="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=l,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function nR(n,e,t,r,i,a,l,f){return new Jh(n,e,t,r,i,a,l,f)}function $g(n){return new Jh(n)}function hw(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function rR(n){return n.collectionGroup!==null}function _c(n){const e=je(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(l){let f=new Vt(Zt.comparator);return l.filters.forEach((p=>{p.getFlattenedFilters().forEach((m=>{m.isInequality()&&(f=f.add(m.field))}))})),f})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new gh(a,r))})),t.has(Zt.keyField().canonicalString())||e.Te.push(new gh(Zt.keyField(),r))}return e.Te}function Lr(n){const e=je(n);return e.Ie||(e.Ie=sR(e,_c(n))),e.Ie}function sR(n,e){if(n.limitType==="F")return dw(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new gh(i.field,a)}));const t=n.endAt?new mh(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new mh(n.startAt.position,n.startAt.inclusive):null;return dw(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ym(n,e,t){return new Jh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zh(n,e){return Bg(Lr(n),Lr(e))&&n.limitType===e.limitType}function v1(n){return`${zg(Lr(n))}|lt:${n.limitType}`}function Ia(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>_1(i))).join(", ")}]`),Yh(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(l){return`${l.field.canonicalString()} (${l.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>za(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>za(i))).join(",")),`Target(${r})`})(Lr(n))}; limitType=${n.limitType})`}function ef(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ee.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of _c(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(l,f,p){const m=cw(l,f,p);return l.inclusive?m<=0:m<0})(r.startAt,_c(r),i)||r.endAt&&!(function(l,f,p){const m=cw(l,f,p);return l.inclusive?m>=0:m>0})(r.endAt,_c(r),i))})(n,e)}function iR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function w1(n){return(e,t)=>{let r=!1;for(const i of _c(n)){const a=oR(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function oR(n,e,t){const r=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(a,l,f){const p=l.data.field(a),m=f.data.field(a);return p!==null&&m!==null?Ua(p,m):Se(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return Se(19790,{direction:n.dir})}}/**
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
 */class Co{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Si(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return s1(this.inner)}size(){return this.innerSize}}/**
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
 */const aR=new kt(Ee.comparator);function Is(){return aR}const x1=new kt(Ee.comparator);function hc(...n){let e=x1;for(const t of n)e=e.insert(t.key,t);return e}function E1(n){let e=x1;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function co(){return yc()}function T1(){return yc()}function yc(){return new Co((n=>n.toString()),((n,e)=>n.isEqual(e)))}const lR=new kt(Ee.comparator),cR=new Vt(Ee.comparator);function $e(...n){let e=cR;for(const t of n)e=e.add(t);return e}const uR=new Vt(Me);function dR(){return uR}/**
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
 */function Wg(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hh(e)?"-0":e}}function b1(n){return{integerValue:""+n}}function I1(n,e){return V2(e)?b1(e):Wg(n,e)}/**
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
 */class tf{constructor(){this._=void 0}}function hR(n,e,t){return n instanceof Dc?(function(i,a){const l={fields:{[a1]:{stringValue:o1},[c1]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Fg(a)&&(a=Xh(a)),a&&(l.fields[l1]=a),{mapValue:l}})(t,e):n instanceof Mc?N1(n,e):n instanceof Lc?k1(n,e):(function(i,a){const l=C1(i,a),f=fw(l)+fw(i.Ee);return Gm(l)&&Gm(i.Ee)?b1(f):Wg(i.serializer,f)})(n,e)}function fR(n,e,t){return n instanceof Mc?N1(n,e):n instanceof Lc?k1(n,e):t}function C1(n,e){return n instanceof Vc?(function(r){return Gm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Dc extends tf{}class Mc extends tf{constructor(e){super(),this.elements=e}}function N1(n,e){const t=S1(e);for(const r of n.elements)t.some((i=>qr(i,r)))||t.push(r);return{arrayValue:{values:t}}}class Lc extends tf{constructor(e){super(),this.elements=e}}function k1(n,e){let t=S1(e);for(const r of n.elements)t=t.filter((i=>!qr(i,r)));return{arrayValue:{values:t}}}class Vc extends tf{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function fw(n){return Tt(n.integerValue||n.doubleValue)}function S1(n){return Ug(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class A1{constructor(e,t){this.field=e,this.transform=t}}function pR(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Mc&&i instanceof Mc||r instanceof Lc&&i instanceof Lc?Fa(r.elements,i.elements,qr):r instanceof Vc&&i instanceof Vc?qr(r.Ee,i.Ee):r instanceof Dc&&i instanceof Dc})(n.transform,e.transform)}class mR{constructor(e,t){this.version=e,this.transformResults=t}}class Vr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Vr}static exists(e){return new Vr(void 0,e)}static updateTime(e){return new Vr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Yd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class nf{}function R1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new j1(n.key,Vr.none()):new Jc(n.key,n.data,Vr.none());{const t=n.data,r=In.empty();let i=new Vt(Zt.comparator);for(let a of e.fields)if(!i.has(a)){let l=t.field(a);l===null&&a.length>1&&(a=a.popLast(),l=t.field(a)),l===null?r.delete(a):r.set(a,l),i=i.add(a)}return new Ai(n.key,r,new Un(i.toArray()),Vr.none())}}function gR(n,e,t){n instanceof Jc?(function(i,a,l){const f=i.value.clone(),p=mw(i.fieldTransforms,a,l.transformResults);f.setAll(p),a.convertToFoundDocument(l.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ai?(function(i,a,l){if(!Yd(i.precondition,a))return void a.convertToUnknownDocument(l.version);const f=mw(i.fieldTransforms,a,l.transformResults),p=a.data;p.setAll(P1(i)),p.setAll(f),a.convertToFoundDocument(l.version,p).setHasCommittedMutations()})(n,e,t):(function(i,a,l){a.convertToNoDocument(l.version).setHasCommittedMutations()})(0,e,t)}function vc(n,e,t,r){return n instanceof Jc?(function(a,l,f,p){if(!Yd(a.precondition,l))return f;const m=a.value.clone(),v=gw(a.fieldTransforms,p,l);return m.setAll(v),l.convertToFoundDocument(l.version,m).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ai?(function(a,l,f,p){if(!Yd(a.precondition,l))return f;const m=gw(a.fieldTransforms,p,l),v=l.data;return v.setAll(P1(a)),v.setAll(m),l.convertToFoundDocument(l.version,v).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((x=>x.field)))})(n,e,t,r):(function(a,l,f){return Yd(a.precondition,l)?(l.convertToNoDocument(l.version).setHasLocalMutations(),null):f})(n,e,t)}function _R(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=C1(r.transform,i||null);a!=null&&(t===null&&(t=In.empty()),t.set(r.field,a))}return t||null}function pw(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Fa(r,i,((a,l)=>pR(a,l)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Jc extends nf{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ai extends nf{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function P1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function mw(n,e,t){const r=new Map;tt(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const a=n[i],l=a.transform,f=e.data.field(a.field);r.set(a.field,fR(l,f,t[i]))}return r}function gw(n,e,t){const r=new Map;for(const i of n){const a=i.transform,l=t.data.field(i.field);r.set(i.field,hR(a,l,e))}return r}class j1 extends nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yR extends nf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vR{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&gR(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=vc(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=vc(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=T1();return this.mutations.forEach((i=>{const a=e.get(i.key),l=a.overlayedDocument;let f=this.applyToLocalView(l,a.mutatedFields);f=t.has(i.key)?null:f;const p=R1(l,f);p!==null&&r.set(i.key,p),l.isValidDocument()||l.convertToNoDocument(Re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$e())}isEqual(e){return this.batchId===e.batchId&&Fa(this.mutations,e.mutations,((t,r)=>pw(t,r)))&&Fa(this.baseMutations,e.baseMutations,((t,r)=>pw(t,r)))}}class qg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){tt(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return lR})();const a=e.mutations;for(let l=0;l<a.length;l++)i=i.insert(a[l].key,r[l].version);return new qg(e,t,r,i)}}/**
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
 */class wR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ct,Qe;function ER(n){switch(n){case X.OK:return Se(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return Se(15467,{code:n})}}function O1(n){if(n===void 0)return bs("GRPC error has no .code"),X.UNKNOWN;switch(n){case Ct.OK:return X.OK;case Ct.CANCELLED:return X.CANCELLED;case Ct.UNKNOWN:return X.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return X.INTERNAL;case Ct.UNAVAILABLE:return X.UNAVAILABLE;case Ct.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Ct.NOT_FOUND:return X.NOT_FOUND;case Ct.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Ct.ABORTED:return X.ABORTED;case Ct.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Ct.DATA_LOSS:return X.DATA_LOSS;default:return Se(39323,{code:n})}}(Qe=Ct||(Ct={}))[Qe.OK=0]="OK",Qe[Qe.CANCELLED=1]="CANCELLED",Qe[Qe.UNKNOWN=2]="UNKNOWN",Qe[Qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Qe[Qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Qe[Qe.NOT_FOUND=5]="NOT_FOUND",Qe[Qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Qe[Qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Qe[Qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Qe[Qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Qe[Qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Qe[Qe.ABORTED=10]="ABORTED",Qe[Qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Qe[Qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Qe[Qe.INTERNAL=13]="INTERNAL",Qe[Qe.UNAVAILABLE=14]="UNAVAILABLE",Qe[Qe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const TR=new fi([4294967295,4294967295],0);function _w(n){const e=e1().encode(n),t=new HE;return t.update(e),new Uint8Array(t.digest())}function yw(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new fi([t,r],0),new fi([i,a],0)]}class Hg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new fc(`Invalid padding: ${t}`);if(r<0)throw new fc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new fc(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new fc(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=fi.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(fi.fromNumber(r)));return i.compare(TR)===1&&(i=new fi([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=_w(e),[r,i]=yw(t);for(let a=0;a<this.hashCount;a++){const l=this.pe(r,i,a);if(!this.ye(l))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),l=new Hg(a,i,t);return r.forEach((f=>l.insert(f))),l}insert(e){if(this.fe===0)return;const t=_w(e),[r,i]=yw(t);for(let a=0;a<this.hashCount;a++){const l=this.pe(r,i,a);this.we(l)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class fc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rf{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Zc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new rf(Re.min(),i,new kt(Me),Is(),$e())}}class Zc{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Zc(r,t,$e(),$e(),$e())}}/**
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
 */class Xd{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class D1{constructor(e,t){this.targetId=e,this.De=t}}class M1{constructor(e,t,r=en.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class vw{constructor(){this.ve=0,this.Ce=ww(),this.Fe=en.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=$e(),t=$e(),r=$e();return this.Ce.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:Se(38017,{changeType:a})}})),new Zc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=ww()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,tt(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class bR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Is(),this.je=Md(),this.Je=Md(),this.He=new kt(Me)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:Se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const a=i.target;if(Qm(a))if(r===0){const l=new Ee(a.path);this.Xe(t,l,ln.newNoDocument(l,Re.min()))}else tt(r===1,20013,{expectedCount:r});else{const l=this.ot(t);if(l!==r){const f=this._t(e),p=f?this.ut(f,e,l):1;if(p!==0){this.rt(t);const m=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,m)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let l,f;try{l=xi(r).toUint8Array()}catch(p){if(p instanceof i1)return yi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new Hg(l,i,a)}catch(p){return yi(p instanceof fc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const l=this.We.lt(),f=`projects/${l.projectId}/databases/${l.database}/documents/${a.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,a,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((a,l)=>{const f=this.st(l);if(f){if(a.current&&Qm(f.target)){const p=new Ee(f.target.path);this.Tt(p).has(l)||this.It(l,p)||this.Xe(l,p,ln.newNoDocument(p,e))}a.Ne&&(t.set(l,a.Le()),a.ke())}}));let r=$e();this.Je.forEach(((a,l)=>{let f=!0;l.forEachWhile((p=>{const m=this.st(p);return!m||m.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(r=r.add(a))})),this.ze.forEach(((a,l)=>l.setReadTime(e)));const i=new rf(e,t,this.He,this.ze,r);return this.ze=Is(),this.je=Md(),this.Je=Md(),this.He=new kt(Me),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new vw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Vt(Me),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Vt(Me),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new vw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Md(){return new kt(Ee.comparator)}function ww(){return new kt(Ee.comparator)}const IR={asc:"ASCENDING",desc:"DESCENDING"},CR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},NR={and:"AND",or:"OR"};class kR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Xm(n,e){return n.useProto3Json||Yh(e)?e:{value:e}}function _h(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function L1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function SR(n,e){return _h(n,e.toTimestamp())}function Fr(n){return tt(!!n,49232),Re.fromTimestamp((function(t){const r=wi(t);return new pt(r.seconds,r.nanos)})(n))}function Gg(n,e){return Jm(n,e).canonicalString()}function Jm(n,e){const t=(function(i){return new ft(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function V1(n){const e=ft.fromString(n);return tt($1(e),10190,{key:e.toString()}),e}function Zm(n,e){return Gg(n.databaseId,e.path)}function ym(n,e){const t=V1(e);if(t.get(1)!==n.databaseId.projectId)throw new xe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new xe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(U1(t))}function F1(n,e){return Gg(n.databaseId,e)}function AR(n){const e=V1(n);return e.length===4?ft.emptyPath():U1(e)}function eg(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function U1(n){return tt(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function xw(n,e,t){return{name:Zm(n,e),fields:t.value.mapValue.fields}}function RR(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(m){return m==="NO_CHANGE"?0:m==="ADD"?1:m==="REMOVE"?2:m==="CURRENT"?3:m==="RESET"?4:Se(39313,{state:m})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(m,v){return m.useProto3Json?(tt(v===void 0||typeof v=="string",58123),en.fromBase64String(v||"")):(tt(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),en.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),l=e.targetChange.cause,f=l&&(function(m){const v=m.code===void 0?X.UNKNOWN:O1(m.code);return new xe(v,m.message||"")})(l);t=new M1(r,i,a,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ym(n,r.document.name),a=Fr(r.document.updateTime),l=r.document.createTime?Fr(r.document.createTime):Re.min(),f=new In({mapValue:{fields:r.document.fields}}),p=ln.newFoundDocument(i,a,l,f),m=r.targetIds||[],v=r.removedTargetIds||[];t=new Xd(m,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ym(n,r.document),a=r.readTime?Fr(r.readTime):Re.min(),l=ln.newNoDocument(i,a),f=r.removedTargetIds||[];t=new Xd([],f,l.key,l)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ym(n,r.document),a=r.removedTargetIds||[];t=new Xd([],a,i,null)}else{if(!("filter"in e))return Se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,l=new xR(i,a),f=r.targetId;t=new D1(f,l)}}return t}function PR(n,e){let t;if(e instanceof Jc)t={update:xw(n,e.key,e.value)};else if(e instanceof j1)t={delete:Zm(n,e.key)};else if(e instanceof Ai)t={update:xw(n,e.key,e.data),updateMask:zR(e.fieldMask)};else{if(!(e instanceof yR))return Se(16599,{Rt:e.type});t={verify:Zm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,l){const f=l.transform;if(f instanceof Dc)return{fieldPath:l.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Mc)return{fieldPath:l.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof Lc)return{fieldPath:l.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Vc)return{fieldPath:l.field.canonicalString(),increment:f.Ee};throw Se(20930,{transform:l.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:SR(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:Se(27497)})(n,e.precondition)),t}function jR(n,e){return n&&n.length>0?(tt(e!==void 0,14353),n.map((t=>(function(i,a){let l=i.updateTime?Fr(i.updateTime):Fr(a);return l.isEqual(Re.min())&&(l=Fr(a)),new mR(l,i.transformResults||[])})(t,e)))):[]}function OR(n,e){return{documents:[F1(n,e.path)]}}function DR(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=F1(n,i);const a=(function(m){if(m.length!==0)return B1(Hr.create(m,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const l=(function(m){if(m.length!==0)return m.map((v=>(function(E){return{field:Ca(E.field),direction:VR(E.dir)}})(v)))})(e.orderBy);l&&(t.structuredQuery.orderBy=l);const f=Xm(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(m){return{before:m.inclusive,values:m.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(m){return{before:!m.inclusive,values:m.position}})(e.endAt)),{Vt:t,parent:i}}function MR(n){let e=AR(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){tt(r===1,65062);const v=t.from[0];v.allDescendants?i=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(x){const E=z1(x);return E instanceof Hr&&m1(E)?E.getFilters():[E]})(t.where));let l=[];t.orderBy&&(l=(function(x){return x.map((E=>(function(M){return new gh(Na(M.field),(function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(M.direction))})(E)))})(t.orderBy));let f=null;t.limit&&(f=(function(x){let E;return E=typeof x=="object"?x.value:x,Yh(E)?null:E})(t.limit));let p=null;t.startAt&&(p=(function(x){const E=!!x.before,A=x.values||[];return new mh(A,E)})(t.startAt));let m=null;return t.endAt&&(m=(function(x){const E=!x.before,A=x.values||[];return new mh(A,E)})(t.endAt)),nR(e,i,l,a,f,"F",p,m)}function LR(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function z1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Na(t.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Na(t.unaryFilter.field);return Dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Na(t.unaryFilter.field);return Dt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const l=Na(t.unaryFilter.field);return Dt.create(l,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Se(61313);default:return Se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Dt.create(Na(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Se(58110);default:return Se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Hr.create(t.compositeFilter.filters.map((r=>z1(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Se(1026)}})(t.compositeFilter.op))})(n):Se(30097,{filter:n})}function VR(n){return IR[n]}function FR(n){return CR[n]}function UR(n){return NR[n]}function Ca(n){return{fieldPath:n.canonicalString()}}function Na(n){return Zt.fromServerFormat(n.fieldPath)}function B1(n){return n instanceof Dt?(function(t){if(t.op==="=="){if(lw(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NAN"}};if(aw(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(lw(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NAN"}};if(aw(t.value))return{unaryFilter:{field:Ca(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ca(t.field),op:FR(t.op),value:t.value}}})(n):n instanceof Hr?(function(t){const r=t.getFilters().map((i=>B1(i)));return r.length===1?r[0]:{compositeFilter:{op:UR(t.op),filters:r}}})(n):Se(54877,{filter:n})}function zR(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function $1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ci{constructor(e,t,r,i,a=Re.min(),l=Re.min(),f=en.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=l,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new ci(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ci(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class BR{constructor(e){this.gt=e}}function $R(n){const e=MR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ym(e,e.limit,"L"):e}/**
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
 */class WR{constructor(){this.Dn=new qR}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(vi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(vi.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class qR{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Vt(ft.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Vt(ft.comparator)).toArray()}}/**
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
 */const Ew={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},W1=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(W1,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
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
 */class Ba{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ba(0)}static ur(){return new Ba(-1)}}/**
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
 */const Tw="LruGarbageCollector",HR=1048576;function bw([n,e],[t,r]){const i=Me(n,t);return i===0?Me(e,r):i}class GR{constructor(e){this.Tr=e,this.buffer=new Vt(bw),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bw(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class KR{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){de(Tw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){tl(t)?de(Tw,"Ignoring IndexedDB error during garbage collection: ",t):await el(t)}await this.Rr(3e5)}))}}class QR{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Qh.ue);const r=new GR(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(Ew)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ew):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,a,l,f,p,m;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),i=this.params.maximumSequenceNumbersToCollect):i=x,l=Date.now(),this.nthSequenceNumber(e,i)))).next((x=>(r=x,f=Date.now(),this.removeTargets(e,r,t)))).next((x=>(a=x,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((x=>(m=Date.now(),ba()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${l-v}ms
	Determined least recently used ${i} in `+(f-l)+`ms
	Removed ${a} targets in `+(p-f)+`ms
	Removed ${x} documents in `+(m-p)+`ms
Total Duration: ${m-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:x}))))}}function YR(n,e){return new QR(n,e)}/**
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
 */class XR{constructor(){this.changes=new Co((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ln.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class JR{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class ZR{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&vc(r.mutation,i,Un.empty(),pt.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,$e()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=$e()){const i=co();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let l=hc();return a.forEach(((f,p)=>{l=l.insert(f,p.overlayedDocument)})),l}))))}getOverlayedDocuments(e,t){const r=co();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,$e())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((l,f)=>{t.set(l,f)}))}))}computeViews(e,t,r,i){let a=Is();const l=yc(),f=(function(){return yc()})();return t.forEach(((p,m)=>{const v=r.get(m.key);i.has(m.key)&&(v===void 0||v.mutation instanceof Ai)?a=a.insert(m.key,m):v!==void 0?(l.set(m.key,v.mutation.getFieldMask()),vc(v.mutation,m,v.mutation.getFieldMask(),pt.now())):l.set(m.key,Un.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((m,v)=>l.set(m,v))),t.forEach(((m,v)=>{var x;return f.set(m,new JR(v,(x=l.get(m))!==null&&x!==void 0?x:null))})),f)))}recalculateAndSaveOverlays(e,t){const r=yc();let i=new kt(((l,f)=>l-f)),a=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((l=>{for(const f of l)f.keys().forEach((p=>{const m=t.get(p);if(m===null)return;let v=r.get(p)||Un.empty();v=f.applyToLocalView(m,v),r.set(p,v);const x=(i.get(f.batchId)||$e()).add(p);i=i.insert(f.batchId,x)}))})).next((()=>{const l=[],f=i.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),m=p.key,v=p.value,x=T1();v.forEach((E=>{if(!a.has(E)){const A=R1(t.get(E),r.get(E));A!==null&&x.set(E,A),a=a.add(E)}})),l.push(this.documentOverlayCache.saveOverlays(e,m,x))}return K.waitFor(l)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(l){return Ee.isDocumentKey(l.path)&&l.collectionGroup===null&&l.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):rR(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const l=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):K.resolve(co());let f=Rc,p=a;return l.next((m=>K.forEach(m,((v,x)=>(f<x.largestBatchId&&(f=x.largestBatchId),a.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next((E=>{p=p.insert(v,E)}))))).next((()=>this.populateOverlays(e,m,a))).next((()=>this.computeViews(e,p,m,$e()))).next((v=>({batchId:f,changes:E1(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((r=>{let i=hc();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let l=hc();return this.indexManager.getCollectionParents(e,a).next((f=>K.forEach(f,(p=>{const m=(function(x,E){return new Jh(E,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,m,r,i).next((v=>{v.forEach(((x,E)=>{l=l.insert(x,E)}))}))})).next((()=>l))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((l=>(a=l,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((l=>{a.forEach(((p,m)=>{const v=m.getKey();l.get(v)===null&&(l=l.insert(v,ln.newInvalidDocument(v)))}));let f=hc();return l.forEach(((p,m)=>{const v=a.get(p);v!==void 0&&vc(v.mutation,m,Un.empty(),pt.now()),ef(t,m)&&(f=f.insert(p,m))})),f}))}}/**
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
 */class eP{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Fr(i.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:$R(i.bundledQuery),readTime:Fr(i.readTime)}})(t)),K.resolve()}}/**
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
 */class tP{constructor(){this.overlays=new kt(Ee.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=co();return K.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const i=co(),a=t.length+1,l=new Ee(t.child("")),f=this.overlays.getIteratorFrom(l);for(;f.hasNext();){const p=f.getNext().value,m=p.getKey();if(!t.isPrefixOf(m.path))break;m.path.length===a&&p.largestBatchId>r&&i.set(p.getKey(),p)}return K.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new kt(((m,v)=>m-v));const l=this.overlays.getIterator();for(;l.hasNext();){const m=l.getNext().value;if(m.getKey().getCollectionGroup()===t&&m.largestBatchId>r){let v=a.get(m.largestBatchId);v===null&&(v=co(),a=a.insert(m.largestBatchId,v)),v.set(m.getKey(),m)}}const f=co(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((m,v)=>f.set(m,v))),!(f.size()>=i)););return K.resolve(f)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const l=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,l)}this.overlays=this.overlays.insert(r.key,new wR(t,r));let a=this.kr.get(t);a===void 0&&(a=$e(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class nP{constructor(){this.sessionToken=en.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Kg{constructor(){this.qr=new Vt(qt.Qr),this.$r=new Vt(qt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new qt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new qt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ee(new ft([])),r=new qt(t,e),i=new qt(t,e+1),a=[];return this.$r.forEachInRange([r,i],(l=>{this.Wr(l),a.push(l.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ee(new ft([])),r=new qt(t,e),i=new qt(t,e+1);let a=$e();return this.$r.forEachInRange([r,i],(l=>{a=a.add(l.key)})),a}containsKey(e){const t=new qt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class qt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ee.comparator(e.key,t.key)||Me(e.Hr,t.Hr)}static Ur(e,t){return Me(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
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
 */class rP{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Vt(qt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const l=new vR(a,t,r,i);this.mutationQueue.push(l);for(const f of i)this.Yr=this.Yr.add(new qt(f.key,a)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(l)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),a=i<0?0:i;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Vg:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new qt(t,0),i=new qt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,i],(l=>{const f=this.Zr(l.Hr);a.push(f)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Vt(Me);return t.forEach((i=>{const a=new qt(i,0),l=new qt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,l],(f=>{r=r.add(f.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;Ee.isDocumentKey(a)||(a=a.child(""));const l=new qt(new Ee(a),0);let f=new Vt(Me);return this.Yr.forEachWhile((p=>{const m=p.key.path;return!!r.isPrefixOf(m)&&(m.length===i&&(f=f.add(p.Hr)),!0)}),l),K.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){tt(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(i=>{const a=new qt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new qt(t,0),i=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class sP{constructor(e){this.ni=e,this.docs=(function(){return new kt(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,l=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:l}),this.size+=l-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():ln.newInvalidDocument(t))}getEntries(e,t){let r=Is();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():ln.newInvalidDocument(i))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=Is();const l=t.path,f=new Ee(l.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:m,value:{document:v}}=p.getNext();if(!l.isPrefixOf(m.path))break;m.path.length>l.length+1||O2(j2(v),r)<=0||(i.has(v.key)||ef(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,i){Se(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new iP(this)}getSize(e){return K.resolve(this.size)}}class iP extends XR{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class oP{constructor(e){this.persistence=e,this.ii=new Co((t=>zg(t)),Bg),this.lastRemoteSnapshotVersion=Re.min(),this.highestTargetId=0,this.si=0,this.oi=new Kg,this.targetCount=0,this._i=Ba.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ba(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.ii.forEach(((l,f)=>{f.sequenceNumber<=t&&r.get(f.targetId)===null&&(this.ii.delete(l),a.push(this.removeMatchingKeysForTargetId(e,f.targetId)),i++)})),K.waitFor(a).next((()=>i))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((l=>{a.push(i.markPotentiallyOrphaned(e,l))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
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
 */class q1{constructor(e,t){this.ai={},this.overlays={},this.ui=new Qh(0),this.ci=!1,this.ci=!0,this.li=new nP,this.referenceDelegate=e(this),this.hi=new oP(this),this.indexManager=new WR,this.remoteDocumentCache=(function(i){return new sP(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new BR(t),this.Ti=new eP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tP,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new rP(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){de("MemoryPersistence","Starting transaction:",e);const i=new aP(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class aP extends M2{constructor(e){super(),this.currentSequenceNumber=e}}class Qg{constructor(e){this.persistence=e,this.Ai=new Kg,this.Ri=null}static Vi(e){return new Qg(e)}get mi(){if(this.Ri)return this.Ri;throw Se(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const i=Ee.fromPath(r);return this.fi(e,i).next((a=>{a||t.removeEntry(i,Re.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class yh{constructor(e,t){this.persistence=e,this.gi=new Co((r=>F2(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=YR(this,t)}static Vi(e,t){return new yh(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((a=>a?K.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ri(e,(l=>this.Sr(e,l,t).next((f=>{f||(r++,a.removeEntry(l,Re.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Kd(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return K.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Yg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=$e(),i=$e();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Yg(e,t.fromCache,r,i)}}/**
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
 */class lP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class cP{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return XS()?8:L2(un())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ps(e,t).next((l=>{a.result=l})).next((()=>{if(!a.result)return this.ys(e,t,i,r).next((l=>{a.result=l}))})).next((()=>{if(a.result)return;const l=new lP;return this.ws(e,t,l).next((f=>{if(a.result=f,this.Rs)return this.Ss(e,t,l,f.size)}))})).next((()=>a.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(ba()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",Ia(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(ba()<=ze.DEBUG&&de("QueryEngine","Query:",Ia(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(ba()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",Ia(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lr(t))):K.resolve())}ps(e,t){if(hw(t))return K.resolve(null);let r=Lr(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Ym(t,null,"F"),r=Lr(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const l=$e(...a);return this.gs.getDocuments(e,l).next((f=>this.indexManager.getMinOffset(e,r).next((p=>{const m=this.bs(t,f);return this.Ds(t,m,l,p.readTime)?this.ps(e,Ym(t,null,"F")):this.vs(e,m,t,p)}))))})))))}ys(e,t,r,i){return hw(t)||i.isEqual(Re.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const l=this.bs(t,a);return this.Ds(t,l,r,i)?K.resolve(null):(ba()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ia(t)),this.vs(e,l,t,P2(i,Rc)).next((f=>f)))}))}bs(e,t){let r=new Vt(w1(e));return t.forEach(((i,a)=>{ef(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ws(e,t,r){return ba()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",Ia(t)),this.gs.getDocumentsMatchingQuery(e,t,vi.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((l=>{a=a.insert(l.key,l)})),a)))}}/**
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
 */const Xg="LocalStore",uP=3e8;class dP{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new kt(Me),this.Ms=new Co((a=>zg(a)),Bg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ZR(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function hP(n,e,t,r){return new dP(n,e,t,r)}async function H1(n,e){const t=je(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const l=[],f=[];let p=$e();for(const m of i){l.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}for(const m of a){f.push(m.batchId);for(const v of m.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next((m=>({Bs:m,removedBatchIds:l,addedBatchIds:f})))}))}))}function fP(n,e){const t=je(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,m,v){const x=m.batch,E=x.keys();let A=K.resolve();return E.forEach((M=>{A=A.next((()=>v.getEntry(p,M))).next((U=>{const L=m.docVersions.get(M);tt(L!==null,48541),U.version.compareTo(L)<0&&(x.applyToRemoteDocument(U,m),U.isValidDocument()&&(U.setReadTime(m.commitVersion),v.addEntry(U)))}))})),A.next((()=>f.mutationQueue.removeMutationBatch(p,x)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(f){let p=$e();for(let m=0;m<f.mutationResults.length;++m)f.mutationResults[m].transformResults.length>0&&(p=p.add(f.batch.mutations[m].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function G1(n){const e=je(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function pP(n,e){const t=je(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const l=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const f=[];e.targetChanges.forEach(((v,x)=>{const E=i.get(x);if(!E)return;f.push(t.hi.removeMatchingKeys(a,v.removedDocuments,x).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,x))));let A=E.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(x)!==null?A=A.withResumeToken(en.EMPTY_BYTE_STRING,Re.min()).withLastLimboFreeSnapshotVersion(Re.min()):v.resumeToken.approximateByteSize()>0&&(A=A.withResumeToken(v.resumeToken,r)),i=i.insert(x,A),(function(U,L,Q){return U.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=uP?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(E,A,v)&&f.push(t.hi.updateTargetData(a,A))}));let p=Is(),m=$e();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),f.push(mP(a,l,e.documentUpdates).next((v=>{p=v.Ls,m=v.ks}))),!r.isEqual(Re.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((x=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));f.push(v)}return K.waitFor(f).next((()=>l.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,m))).next((()=>p))})).then((a=>(t.Fs=i,a)))}function mP(n,e,t){let r=$e(),i=$e();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let l=Is();return t.forEach(((f,p)=>{const m=a.get(f);p.isFoundDocument()!==m.isFoundDocument()&&(i=i.add(f)),p.isNoDocument()&&p.version.isEqual(Re.min())?(e.removeEntry(f,p.readTime),l=l.insert(f,p)):!m.isValidDocument()||p.version.compareTo(m.version)>0||p.version.compareTo(m.version)===0&&m.hasPendingWrites?(e.addEntry(p),l=l.insert(f,p)):de(Xg,"Ignoring outdated watch update for ",f,". Current version:",m.version," Watch version:",p.version)})),{Ls:l,ks:i}}))}function gP(n,e){const t=je(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Vg),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function _P(n,e){const t=je(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((a=>a?(i=a,K.resolve(i)):t.hi.allocateTargetId(r).next((l=>(i=new ci(e,l,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function tg(n,e,t){const r=je(n),i=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(l=>r.persistence.referenceDelegate.removeTarget(l,i)))}catch(l){if(!tl(l))throw l;de(Xg,`Failed to update sequence numbers for target ${e}: ${l}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function Iw(n,e,t){const r=je(n);let i=Re.min(),a=$e();return r.persistence.runTransaction("Execute query","readwrite",(l=>(function(p,m,v){const x=je(p),E=x.Ms.get(v);return E!==void 0?K.resolve(x.Fs.get(E)):x.hi.getTargetData(m,v)})(r,l,Lr(e)).next((f=>{if(f)return i=f.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(l,f.targetId).next((p=>{a=p}))})).next((()=>r.Cs.getDocumentsMatchingQuery(l,e,t?i:Re.min(),t?a:$e()))).next((f=>(yP(r,iR(e),f),{documents:f,qs:a})))))}function yP(n,e,t){let r=n.xs.get(e)||Re.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class Cw{constructor(){this.activeTargetIds=dR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vP{constructor(){this.Fo=new Cw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Cw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wP{xo(e){}shutdown(){}}/**
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
 */const Nw="ConnectivityMonitor";class kw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){de(Nw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){de(Nw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ld=null;function ng(){return Ld===null?Ld=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ld++,"0x"+Ld.toString(16)}/**
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
 */const vm="RestConnection",xP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class EP{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===fh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,a){const l=ng(),f=this.Go(e,t.toUriEncodedString());de(vm,`Sending RPC '${e}' ${l}:`,f,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,i,a);const{host:m}=new URL(f),v=ks(m);return this.jo(e,f,p,r,v).then((x=>(de(vm,`Received RPC '${e}' ${l}: `,x),x)),(x=>{throw yi(vm,`RPC '${e}' ${l} failed with error: `,x,"url: ",f,"request:",r),x}))}Jo(e,t,r,i,a,l){return this.Wo(e,t,r,i,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Za})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}Go(e,t){const r=xP[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class TP{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const on="WebChannelConnection";class bP extends EP{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,a){const l=ng();return new Promise(((f,p)=>{const m=new GE;m.setWithCredentials(!0),m.listenOnce(KE.COMPLETE,(()=>{try{switch(m.getLastErrorCode()){case Gd.NO_ERROR:const x=m.getResponseJson();de(on,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(x)),f(x);break;case Gd.TIMEOUT:de(on,`RPC '${e}' ${l} timed out`),p(new xe(X.DEADLINE_EXCEEDED,"Request time out"));break;case Gd.HTTP_ERROR:const E=m.getStatus();if(de(on,`RPC '${e}' ${l} failed with status:`,E,"response text:",m.getResponseText()),E>0){let A=m.getResponseJson();Array.isArray(A)&&(A=A[0]);const M=A?.error;if(M&&M.status&&M.message){const U=(function(Q){const ee=Q.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(ee)>=0?ee:X.UNKNOWN})(M.status);p(new xe(U,M.message))}else p(new xe(X.UNKNOWN,"Server responded with status "+m.getStatus()))}else p(new xe(X.UNAVAILABLE,"Connection failed."));break;default:Se(9055,{c_:e,streamId:l,l_:m.getLastErrorCode(),h_:m.getLastError()})}}finally{de(on,`RPC '${e}' ${l} completed.`)}}));const v=JSON.stringify(i);de(on,`RPC '${e}' ${l} sending request:`,i),m.send(t,"POST",v,r,15)}))}P_(e,t,r){const i=ng(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],l=XE(),f=YE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},m=this.longPollingOptions.timeoutSeconds;m!==void 0&&(p.longPollingTimeout=Math.round(1e3*m)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=a.join("");de(on,`Creating RPC '${e}' stream ${i}: ${v}`,p);const x=l.createWebChannel(v,p);this.T_(x);let E=!1,A=!1;const M=new TP({Ho:L=>{A?de(on,`Not sending because RPC '${e}' stream ${i} is closed:`,L):(E||(de(on,`Opening RPC '${e}' stream ${i} transport.`),x.open(),E=!0),de(on,`RPC '${e}' stream ${i} sending:`,L),x.send(L))},Yo:()=>x.close()}),U=(L,Q,ee)=>{L.listen(Q,(ae=>{try{ee(ae)}catch(G){setTimeout((()=>{throw G}),0)}}))};return U(x,dc.EventType.OPEN,(()=>{A||(de(on,`RPC '${e}' stream ${i} transport opened.`),M.s_())})),U(x,dc.EventType.CLOSE,(()=>{A||(A=!0,de(on,`RPC '${e}' stream ${i} transport closed`),M.__(),this.I_(x))})),U(x,dc.EventType.ERROR,(L=>{A||(A=!0,yi(on,`RPC '${e}' stream ${i} transport errored. Name:`,L.name,"Message:",L.message),M.__(new xe(X.UNAVAILABLE,"The operation could not be completed")))})),U(x,dc.EventType.MESSAGE,(L=>{var Q;if(!A){const ee=L.data[0];tt(!!ee,16349);const ae=ee,G=ae?.error||((Q=ae[0])===null||Q===void 0?void 0:Q.error);if(G){de(on,`RPC '${e}' stream ${i} received error:`,G);const ce=G.status;let me=(function(k){const C=Ct[k];if(C!==void 0)return O1(C)})(ce),O=G.message;me===void 0&&(me=X.INTERNAL,O="Unknown error status: "+ce+" with message "+G.message),A=!0,M.__(new xe(me,O)),x.close()}else de(on,`RPC '${e}' stream ${i} received:`,ee),M.a_(ee)}})),U(f,QE.STAT_EVENT,(L=>{L.stat===$m.PROXY?de(on,`RPC '${e}' stream ${i} detected buffering proxy`):L.stat===$m.NOPROXY&&de(on,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{M.o_()}),0),M}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function wm(){return typeof document<"u"?document:null}/**
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
 */function sf(n){return new kR(n,!0)}/**
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
 */class K1{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&de("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Sw="PersistentStream";class Q1{constructor(e,t,r,i,a,l,f,p){this.Fi=e,this.w_=r,this.S_=i,this.connection=a,this.authCredentialsProvider=l,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new K1(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(bs(t.toString()),bs("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new xe(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return de(Sw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(de(Sw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class IP extends Q1{constructor(e,t,r,i,a,l){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=RR(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Re.min();const l=a.targetChange;return l.targetIds&&l.targetIds.length?Re.min():l.readTime?Fr(l.readTime):Re.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=eg(this.serializer),t.addTarget=(function(a,l){let f;const p=l.target;if(f=Qm(p)?{documents:OR(a,p)}:{query:DR(a,p).Vt},f.targetId=l.targetId,l.resumeToken.approximateByteSize()>0){f.resumeToken=L1(a,l.resumeToken);const m=Xm(a,l.expectedCount);m!==null&&(f.expectedCount=m)}else if(l.snapshotVersion.compareTo(Re.min())>0){f.readTime=_h(a,l.snapshotVersion.toTimestamp());const m=Xm(a,l.expectedCount);m!==null&&(f.expectedCount=m)}return f})(this.serializer,e);const r=LR(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=eg(this.serializer),t.removeTarget=e,this.k_(t)}}class CP extends Q1{constructor(e,t,r,i,a,l){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,l),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return tt(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,tt(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){tt(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=jR(e.writeResults,e.commitTime),r=Fr(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=eg(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>PR(this.serializer,r)))};this.k_(t)}}/**
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
 */class NP{}class kP extends NP{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new xe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Wo(e,Jm(t,r),i,a,l))).catch((a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new xe(X.UNKNOWN,a.toString())}))}Jo(e,t,r,i,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,f])=>this.connection.Jo(e,Jm(t,r),i,l,f,a))).catch((l=>{throw l.name==="FirebaseError"?(l.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new xe(X.UNKNOWN,l.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class SP{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(bs(t),this._a=!1):de("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const yo="RemoteStore";class AP{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((l=>{r.enqueueAndForget((async()=>{No(this)&&(de(yo,"Restarting streams for network reachability change."),await(async function(p){const m=je(p);m.Ia.add(4),await eu(m),m.Aa.set("Unknown"),m.Ia.delete(4),await of(m)})(this))}))})),this.Aa=new SP(r,i)}}async function of(n){if(No(n))for(const e of n.da)await e(!0)}async function eu(n){for(const e of n.da)await e(!1)}function Y1(n,e){const t=je(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),t_(t)?e_(t):nl(t).x_()&&Zg(t,e))}function Jg(n,e){const t=je(n),r=nl(t);t.Ta.delete(e),r.x_()&&X1(t,e),t.Ta.size===0&&(r.x_()?r.B_():No(t)&&t.Aa.set("Unknown"))}function Zg(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}nl(n).H_(e)}function X1(n,e){n.Ra.$e(e),nl(n).Y_(e)}function e_(n){n.Ra=new bR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),nl(n).start(),n.Aa.aa()}function t_(n){return No(n)&&!nl(n).M_()&&n.Ta.size>0}function No(n){return je(n).Ia.size===0}function J1(n){n.Ra=void 0}async function RP(n){n.Aa.set("Online")}async function PP(n){n.Ta.forEach(((e,t)=>{Zg(n,e)}))}async function jP(n,e){J1(n),t_(n)?(n.Aa.la(e),e_(n)):n.Aa.set("Unknown")}async function OP(n,e,t){if(n.Aa.set("Online"),e instanceof M1&&e.state===2&&e.cause)try{await(async function(i,a){const l=a.cause;for(const f of a.targetIds)i.Ta.has(f)&&(await i.remoteSyncer.rejectListen(f,l),i.Ta.delete(f),i.Ra.removeTarget(f))})(n,e)}catch(r){de(yo,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vh(n,r)}else if(e instanceof Xd?n.Ra.Ye(e):e instanceof D1?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Re.min()))try{const r=await G1(n.localStore);t.compareTo(r)>=0&&await(function(a,l){const f=a.Ra.Pt(l);return f.targetChanges.forEach(((p,m)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.Ta.get(m);v&&a.Ta.set(m,v.withResumeToken(p.resumeToken,l))}})),f.targetMismatches.forEach(((p,m)=>{const v=a.Ta.get(p);if(!v)return;a.Ta.set(p,v.withResumeToken(en.EMPTY_BYTE_STRING,v.snapshotVersion)),X1(a,p);const x=new ci(v.target,p,m,v.sequenceNumber);Zg(a,x)})),a.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(r){de(yo,"Failed to raise snapshot:",r),await vh(n,r)}}async function vh(n,e,t){if(!tl(e))throw e;n.Ia.add(1),await eu(n),n.Aa.set("Offline"),t||(t=()=>G1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(yo,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await of(n)}))}function Z1(n,e){return e().catch((t=>vh(n,t,e)))}async function af(n){const e=je(n),t=Ti(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Vg;for(;DP(e);)try{const i=await gP(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,MP(e,i)}catch(i){await vh(e,i)}eT(e)&&tT(e)}function DP(n){return No(n)&&n.Pa.length<10}function MP(n,e){n.Pa.push(e);const t=Ti(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function eT(n){return No(n)&&!Ti(n).M_()&&n.Pa.length>0}function tT(n){Ti(n).start()}async function LP(n){Ti(n).na()}async function VP(n){const e=Ti(n);for(const t of n.Pa)e.X_(t.mutations)}async function FP(n,e,t){const r=n.Pa.shift(),i=qg.from(r,e,t);await Z1(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await af(n)}async function UP(n,e){e&&Ti(n).Z_&&await(async function(r,i){if((function(l){return ER(l)&&l!==X.ABORTED})(i.code)){const a=r.Pa.shift();Ti(r).N_(),await Z1(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await af(r)}})(n,e),eT(n)&&tT(n)}async function Aw(n,e){const t=je(n);t.asyncQueue.verifyOperationInProgress(),de(yo,"RemoteStore received new credentials");const r=No(t);t.Ia.add(3),await eu(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await of(t)}async function zP(n,e){const t=je(n);e?(t.Ia.delete(2),await of(t)):e||(t.Ia.add(2),await eu(t),t.Aa.set("Unknown"))}function nl(n){return n.Va||(n.Va=(function(t,r,i){const a=je(t);return a.ia(),new IP(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Zo:RP.bind(null,n),e_:PP.bind(null,n),n_:jP.bind(null,n),J_:OP.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),t_(n)?e_(n):n.Aa.set("Unknown")):(await n.Va.stop(),J1(n))}))),n.Va}function Ti(n){return n.ma||(n.ma=(function(t,r,i){const a=je(t);return a.ia(),new CP(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:LP.bind(null,n),n_:UP.bind(null,n),ea:VP.bind(null,n),ta:FP.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await af(n)):(await n.ma.stop(),n.Pa.length>0&&(de(yo,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class n_{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new fo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const l=Date.now()+r,f=new n_(e,t,l,i,a);return f.start(r),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new xe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function r_(n,e){if(bs("AsyncQueue",`${e}: ${n}`),tl(n))return new xe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ra{static emptySet(e){return new Ra(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ee.comparator(t.key,r.key):(t,r)=>Ee.comparator(t.key,r.key),this.keyedMap=hc(),this.sortedSet=new kt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ra)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ra;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Rw{constructor(){this.fa=new kt(Ee.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):Se(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class $a{constructor(e,t,r,i,a,l,f,p,m){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=l,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=m}static fromInitialDocuments(e,t,r,i,a){const l=[];return t.forEach((f=>{l.push({type:0,doc:f})})),new $a(e,t,Ra.emptySet(t),l,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class BP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class $P{constructor(){this.queries=Pw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=je(t),a=i.queries;i.queries=Pw(),a.forEach(((l,f)=>{for(const p of f.wa)p.onError(r)}))})(this,new xe(X.ABORTED,"Firestore shutting down"))}}function Pw(){return new Co((n=>v1(n)),Zh)}async function WP(n,e){const t=je(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.Sa()&&e.ba()&&(r=2):(a=new BP,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(i,!0);break;case 1:a.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(l){const f=r_(l,`Initialization of query '${Ia(e.query)}' failed`);return void e.onError(f)}t.queries.set(i,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&s_(t)}async function qP(n,e){const t=je(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const l=a.wa.indexOf(e);l>=0&&(a.wa.splice(l,1),a.wa.length===0?i=e.ba()?0:1:!a.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function HP(n,e){const t=je(n);let r=!1;for(const i of e){const a=i.query,l=t.queries.get(a);if(l){for(const f of l.wa)f.Ca(i)&&(r=!0);l.ya=i}}r&&s_(t)}function GP(n,e,t){const r=je(n),i=r.queries.get(e);if(i)for(const a of i.wa)a.onError(t);r.queries.delete(e)}function s_(n){n.Da.forEach((e=>{e.next()}))}var rg,jw;(jw=rg||(rg={})).Fa="default",jw.Cache="cache";class KP{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new $a(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=$a.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==rg.Cache}}/**
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
 */class nT{constructor(e){this.key=e}}class rT{constructor(e){this.key=e}}class QP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$e(),this.mutatedKeys=$e(),this.Xa=w1(e),this.eu=new Ra(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Rw,i=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,l=i,f=!1;const p=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,m=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((v,x)=>{const E=i.get(v),A=ef(this.query,x)?x:null,M=!!E&&this.mutatedKeys.has(E.key),U=!!A&&(A.hasLocalMutations||this.mutatedKeys.has(A.key)&&A.hasCommittedMutations);let L=!1;E&&A?E.data.isEqual(A.data)?M!==U&&(r.track({type:3,doc:A}),L=!0):this.iu(E,A)||(r.track({type:2,doc:A}),L=!0,(p&&this.Xa(A,p)>0||m&&this.Xa(A,m)<0)&&(f=!0)):!E&&A?(r.track({type:0,doc:A}),L=!0):E&&!A&&(r.track({type:1,doc:E}),L=!0,(p||m)&&(f=!0)),L&&(A?(l=l.add(A),a=U?a.add(v):a.delete(v)):(l=l.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;l.size>this.query.limit;){const v=this.query.limitType==="F"?l.last():l.first();l=l.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:l,ru:r,Ds:f,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const l=e.ru.pa();l.sort(((v,x)=>(function(A,M){const U=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se(20277,{At:L})}};return U(A)-U(M)})(v.type,x.type)||this.Xa(v.doc,x.doc))),this.su(r),i=i!=null&&i;const f=t&&!i?this.ou():[],p=this.Za.size===0&&this.current&&!i?1:0,m=p!==this.Ya;return this.Ya=p,l.length!==0||m?{snapshot:new $a(this.query,e.eu,a,l,e.mutatedKeys,p===0,m,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Rw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=$e(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new rT(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new nT(r))})),t}uu(e){this.Ha=e.qs,this.Za=$e();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return $a.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const i_="SyncEngine";class YP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class XP{constructor(e){this.key=e,this.lu=!1}}class JP{constructor(e,t,r,i,a,l){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=l,this.hu={},this.Pu=new Co((f=>v1(f)),Zh),this.Tu=new Map,this.Iu=new Set,this.du=new kt(Ee.comparator),this.Eu=new Map,this.Au=new Kg,this.Ru={},this.Vu=new Map,this.mu=Ba.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function ZP(n,e,t=!0){const r=cT(n);let i;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.cu()):i=await sT(r,e,t,!0),i}async function ej(n,e){const t=cT(n);await sT(t,e,!0,!1)}async function sT(n,e,t,r){const i=await _P(n.localStore,Lr(e)),a=i.targetId,l=n.sharedClientState.addLocalQueryTarget(a,t);let f;return r&&(f=await tj(n,e,a,l==="current",i.resumeToken)),n.isPrimaryClient&&t&&Y1(n.remoteStore,i),f}async function tj(n,e,t,r,i){n.gu=(x,E,A)=>(async function(U,L,Q,ee){let ae=L.view.nu(Q);ae.Ds&&(ae=await Iw(U.localStore,L.query,!1).then((({documents:O})=>L.view.nu(O,ae))));const G=ee&&ee.targetChanges.get(L.targetId),ce=ee&&ee.targetMismatches.get(L.targetId)!=null,me=L.view.applyChanges(ae,U.isPrimaryClient,G,ce);return Dw(U,L.targetId,me._u),me.snapshot})(n,x,E,A);const a=await Iw(n.localStore,e,!0),l=new QP(e,a.qs),f=l.nu(a.documents),p=Zc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),m=l.applyChanges(f,n.isPrimaryClient,p);Dw(n,t,m._u);const v=new YP(e,t,l);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),m.snapshot}async function nj(n,e,t){const r=je(n),i=r.Pu.get(e),a=r.Tu.get(i.targetId);if(a.length>1)return r.Tu.set(i.targetId,a.filter((l=>!Zh(l,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await tg(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Jg(r.remoteStore,i.targetId),sg(r,i.targetId)})).catch(el)):(sg(r,i.targetId),await tg(r.localStore,i.targetId,!0))}async function rj(n,e){const t=je(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Jg(t.remoteStore,r.targetId))}async function sj(n,e,t){const r=dj(n);try{const i=await(function(l,f){const p=je(l),m=pt.now(),v=f.reduce(((A,M)=>A.add(M.key)),$e());let x,E;return p.persistence.runTransaction("Locally write mutations","readwrite",(A=>{let M=Is(),U=$e();return p.Os.getEntries(A,v).next((L=>{M=L,M.forEach(((Q,ee)=>{ee.isValidDocument()||(U=U.add(Q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(A,M))).next((L=>{x=L;const Q=[];for(const ee of f){const ae=_R(ee,x.get(ee.key).overlayedDocument);ae!=null&&Q.push(new Ai(ee.key,ae,h1(ae.value.mapValue),Vr.exists(!0)))}return p.mutationQueue.addMutationBatch(A,m,Q,f)})).next((L=>{E=L;const Q=L.applyToLocalDocumentSet(x,U);return p.documentOverlayCache.saveOverlays(A,L.batchId,Q)}))})).then((()=>({batchId:E.batchId,changes:E1(x)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(l,f,p){let m=l.Ru[l.currentUser.toKey()];m||(m=new kt(Me)),m=m.insert(f,p),l.Ru[l.currentUser.toKey()]=m})(r,i.batchId,t),await tu(r,i.changes),await af(r.remoteStore)}catch(i){const a=r_(i,"Failed to persist write");t.reject(a)}}async function iT(n,e){const t=je(n);try{const r=await pP(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const l=t.Eu.get(a);l&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?l.lu=!0:i.modifiedDocuments.size>0?tt(l.lu,14607):i.removedDocuments.size>0&&(tt(l.lu,42227),l.lu=!1))})),await tu(t,r,e)}catch(r){await el(r)}}function Ow(n,e,t){const r=je(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((a,l)=>{const f=l.view.va(e);f.snapshot&&i.push(f.snapshot)})),(function(l,f){const p=je(l);p.onlineState=f;let m=!1;p.queries.forEach(((v,x)=>{for(const E of x.wa)E.va(f)&&(m=!0)})),m&&s_(p)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ij(n,e,t){const r=je(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),a=i&&i.key;if(a){let l=new kt(Ee.comparator);l=l.insert(a,ln.newNoDocument(a,Re.min()));const f=$e().add(a),p=new rf(Re.min(),new Map,new kt(Me),l,f);await iT(r,p),r.du=r.du.remove(a),r.Eu.delete(e),o_(r)}else await tg(r.localStore,e,!1).then((()=>sg(r,e,t))).catch(el)}async function oj(n,e){const t=je(n),r=e.batch.batchId;try{const i=await fP(t.localStore,e);aT(t,r,null),oT(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await tu(t,i)}catch(i){await el(i)}}async function aj(n,e,t){const r=je(n);try{const i=await(function(l,f){const p=je(l);return p.persistence.runTransaction("Reject batch","readwrite-primary",(m=>{let v;return p.mutationQueue.lookupMutationBatch(m,f).next((x=>(tt(x!==null,37113),v=x.keys(),p.mutationQueue.removeMutationBatch(m,x)))).next((()=>p.mutationQueue.performConsistencyCheck(m))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(m,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(m,v))).next((()=>p.localDocuments.getDocuments(m,v)))}))})(r.localStore,e);aT(r,e,t),oT(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await tu(r,i)}catch(i){await el(i)}}function oT(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function aT(n,e,t){const r=je(n);let i=r.Ru[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function sg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||lT(n,r)}))}function lT(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Jg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),o_(n))}function Dw(n,e,t){for(const r of t)r instanceof nT?(n.Au.addReference(r.key,e),lj(n,r)):r instanceof rT?(de(i_,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||lT(n,r.key)):Se(19791,{yu:r})}function lj(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(de(i_,"New document in limbo: "+t),n.Iu.add(r),o_(n))}function o_(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ee(ft.fromString(e)),r=n.mu.next();n.Eu.set(r,new XP(t)),n.du=n.du.insert(t,r),Y1(n.remoteStore,new ci(Lr($g(t.path)),r,"TargetPurposeLimboResolution",Qh.ue))}}async function tu(n,e,t){const r=je(n),i=[],a=[],l=[];r.Pu.isEmpty()||(r.Pu.forEach(((f,p)=>{l.push(r.gu(p,e,t).then((m=>{var v;if((m||t)&&r.isPrimaryClient){const x=m?!m.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,x?"current":"not-current")}if(m){i.push(m);const x=Yg.Es(p.targetId,m);a.push(x)}})))})),await Promise.all(l),r.hu.J_(i),await(async function(p,m){const v=je(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>K.forEach(m,(E=>K.forEach(E.Is,(A=>v.persistence.referenceDelegate.addReference(x,E.targetId,A))).next((()=>K.forEach(E.ds,(A=>v.persistence.referenceDelegate.removeReference(x,E.targetId,A)))))))))}catch(x){if(!tl(x))throw x;de(Xg,"Failed to update sequence numbers: "+x)}for(const x of m){const E=x.targetId;if(!x.fromCache){const A=v.Fs.get(E),M=A.snapshotVersion,U=A.withLastLimboFreeSnapshotVersion(M);v.Fs=v.Fs.insert(E,U)}}})(r.localStore,a))}async function cj(n,e){const t=je(n);if(!t.currentUser.isEqual(e)){de(i_,"User change. New user:",e.toKey());const r=await H1(t.localStore,e);t.currentUser=e,(function(a,l){a.Vu.forEach((f=>{f.forEach((p=>{p.reject(new xe(X.CANCELLED,l))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tu(t,r.Bs)}}function uj(n,e){const t=je(n),r=t.Eu.get(e);if(r&&r.lu)return $e().add(r.key);{let i=$e();const a=t.Tu.get(e);if(!a)return i;for(const l of a){const f=t.Pu.get(l);i=i.unionWith(f.view.tu)}return i}}function cT(n){const e=je(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=iT.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=uj.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ij.bind(null,e),e.hu.J_=HP.bind(null,e.eventManager),e.hu.pu=GP.bind(null,e.eventManager),e}function dj(n){const e=je(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oj.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aj.bind(null,e),e}class wh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=sf(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return hP(this.persistence,new cP,e.initialUser,this.serializer)}Du(e){return new q1(Qg.Vi,this.serializer)}bu(e){return new vP}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wh.provider={build:()=>new wh};class hj extends wh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){tt(this.persistence.referenceDelegate instanceof yh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new KR(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new q1((r=>yh.Vi(r,t)),this.serializer)}}class ig{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ow(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cj.bind(null,this.syncEngine),await zP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new $P})()}createDatastore(e){const t=sf(e.databaseInfo.databaseId),r=(function(a){return new bP(a)})(e.databaseInfo);return(function(a,l,f,p){return new kP(a,l,f,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,l,f){return new AP(r,i,a,l,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>Ow(this.syncEngine,t,0)),(function(){return kw.C()?new kw:new wP})())}createSyncEngine(e,t){return(function(i,a,l,f,p,m,v){const x=new JP(i,a,l,f,p,m);return v&&(x.fu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const a=je(i);de(yo,"RemoteStore shutting down."),a.Ia.add(5),await eu(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}ig.provider={build:()=>new ig};/**
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
 */class fj{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):bs("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const bi="FirestoreClient";class pj{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=an.UNAUTHENTICATED,this.clientId=Mg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async l=>{de(bi,"Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(r,(l=>(de(bi,"Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new fo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=r_(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function xm(n,e){n.asyncQueue.verifyOperationInProgress(),de(bi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await H1(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{yi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{de("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{yi("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function Mw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await mj(n);de(bi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Aw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>Aw(e.remoteStore,i))),n._onlineComponents=e}async function mj(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(bi,"Using user provided OfflineComponentProvider");try{await xm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;yi("Error using user provided cache. Falling back to memory cache: "+t),await xm(n,new wh)}}else de(bi,"Using default OfflineComponentProvider"),await xm(n,new hj(void 0));return n._offlineComponents}async function uT(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(bi,"Using user provided OnlineComponentProvider"),await Mw(n,n._uninitializedComponentsProvider._online)):(de(bi,"Using default OnlineComponentProvider"),await Mw(n,new ig))),n._onlineComponents}function gj(n){return uT(n).then((e=>e.syncEngine))}async function Lw(n){const e=await uT(n),t=e.eventManager;return t.onListen=ZP.bind(null,e.syncEngine),t.onUnlisten=nj.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=ej.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rj.bind(null,e.syncEngine),t}/**
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
 */function dT(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Vw=new Map;/**
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
 */const hT="firestore.googleapis.com",Fw=!0;class Uw{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new xe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=hT,this.ssl=Fw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Fw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=W1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<HR)throw new xe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}R2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dT((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class lf{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Uw({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new xe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Uw(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new E2;switch(r.type){case"firstParty":return new C2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new xe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Vw.get(t);r&&(de("ComponentProvider","Removing Datastore"),Vw.delete(t),r.terminate())})(this),Promise.resolve()}}function _j(n,e,t,r={}){var i;n=po(n,lf);const a=ks(e),l=n._getSettings(),f=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(Hh(`https://${p}`),Gh("Firestore",!0)),l.host!==hT&&l.host!==p&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:p,ssl:a,emulatorOptions:r});if(!_i(m,f)&&(n._setSettings(m),r.mockUserToken)){let v,x;if(typeof r.mockUserToken=="string")v=r.mockUserToken,x=an.MOCK_USER;else{v=Ag(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new xe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new an(E)}n._authCredentials=new T2(new ZE(v,x))}}/**
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
 */class cf{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new cf(this.firestore,e,this._query)}}class Lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Xc(t,Lt._jsonSchema))return new Lt(e,r||null,new Ee(ft.fromString(t.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Nt("string",Lt._jsonSchemaVersion),referencePath:Nt("string")};class mi extends cf{constructor(e,t,r){super(e,t,$g(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new Ee(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function zw(n,e,...t){if(n=it(n),t1("collection","path",e),n instanceof lf){const r=ft.fromString(e,...t);return Z0(r),new mi(n,null,r)}{if(!(n instanceof Lt||n instanceof mi))throw new xe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return Z0(r),new mi(n.firestore,null,r)}}function og(n,e,...t){if(n=it(n),arguments.length===1&&(e=Mg.newId()),t1("doc","path",e),n instanceof lf){const r=ft.fromString(e,...t);return J0(r),new Lt(n,null,new Ee(r))}{if(!(n instanceof Lt||n instanceof mi))throw new xe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return J0(r),new Lt(n.firestore,n instanceof mi?n.converter:null,new Ee(r))}}/**
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
 */const Bw="AsyncQueue";class $w{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new K1(this,"async_queue_retry"),this.oc=()=>{const r=wm();r&&de(Bw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=wm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=wm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new fo;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!tl(e))throw e;de(Bw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,bs("INTERNAL UNHANDLED ERROR: ",Ww(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=n_.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(i),i}ac(){this.tc&&Se(47125,{hc:Ww(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Ww(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
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
 */function qw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const a of r)if(a in i&&typeof i[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Fc extends lf{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new $w,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new $w(e),this._firestoreClient=void 0,await e}}}function yj(n,e){const t=typeof n=="object"?n:Yc(),r=typeof n=="string"?n:fh,i=Io(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Sg("firestore");a&&_j(i,...a)}return i}function fT(n){if(n._terminated)throw new xe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||vj(n),n._firestoreClient}function vj(n){var e,t,r;const i=n._freezeSettings(),a=(function(f,p,m,v){return new B2(f,p,m,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,dT(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new pj(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(f){const p=f?._online.build();return{_offline:f?._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Jn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jn(en.fromBase64String(e))}catch(t){throw new xe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Jn(en.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Jn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Xc(e,Jn._jsonSchema))return Jn.fromBase64String(e.bytes)}}Jn._jsonSchemaVersion="firestore/bytes/1.0",Jn._jsonSchema={type:Nt("string",Jn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class uf{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new xe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Zt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class nu{constructor(e){this._methodName=e}}/**
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
 */class Ur{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Me(this._lat,e._lat)||Me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Ur._jsonSchemaVersion}}static fromJSON(e){if(Xc(e,Ur._jsonSchema))return new Ur(e.latitude,e.longitude)}}Ur._jsonSchemaVersion="firestore/geoPoint/1.0",Ur._jsonSchema={type:Nt("string",Ur._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class zr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:zr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Xc(e,zr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new zr(e.vectorValues);throw new xe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}zr._jsonSchemaVersion="firestore/vectorValue/1.0",zr._jsonSchema={type:Nt("string",zr._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const wj=/^__.*__$/;class xj{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ai(e,this.data,this.fieldMask,t,this.fieldTransforms):new Jc(e,this.data,t,this.fieldTransforms)}}class pT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ai(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function mT(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se(40011,{Ec:n})}}class a_{constructor(e,t,r,i,a,l){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=l||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new a_(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return xh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(mT(this.Ec)&&wj.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Ej{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||sf(e)}Dc(e,t,r,i=!1){return new a_({Ec:e,methodName:t,bc:r,path:Zt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function gT(n){const e=n._freezeSettings(),t=sf(n._databaseId);return new Ej(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Tj(n,e,t,r,i,a={}){const l=n.Dc(a.merge||a.mergeFields?2:0,e,t,i);u_("Data must be an object, but it was:",l,r);const f=_T(r,l);let p,m;if(a.merge)p=new Un(l.fieldMask),m=l.fieldTransforms;else if(a.mergeFields){const v=[];for(const x of a.mergeFields){const E=ag(e,x,t);if(!l.contains(E))throw new xe(X.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);vT(v,E)||v.push(E)}p=new Un(v),m=l.fieldTransforms.filter((x=>p.covers(x.field)))}else p=null,m=l.fieldTransforms;return new xj(new In(f),p,m)}class df extends nu{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof df}}class l_ extends nu{_toFieldTransform(e){return new A1(e.path,new Dc)}isEqual(e){return e instanceof l_}}class c_ extends nu{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Vc(e.serializer,I1(e.serializer,this.Cc));return new A1(e.path,t)}isEqual(e){return e instanceof c_&&this.Cc===e.Cc}}function bj(n,e,t,r){const i=n.Dc(1,e,t);u_("Data must be an object, but it was:",i,r);const a=[],l=In.empty();Si(r,((p,m)=>{const v=d_(e,p,t);m=it(m);const x=i.gc(v);if(m instanceof df)a.push(v);else{const E=hf(m,x);E!=null&&(a.push(v),l.set(v,E))}}));const f=new Un(a);return new pT(l,f,i.fieldTransforms)}function Ij(n,e,t,r,i,a){const l=n.Dc(1,e,t),f=[ag(e,r,t)],p=[i];if(a.length%2!=0)throw new xe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)f.push(ag(e,a[E])),p.push(a[E+1]);const m=[],v=In.empty();for(let E=f.length-1;E>=0;--E)if(!vT(m,f[E])){const A=f[E];let M=p[E];M=it(M);const U=l.gc(A);if(M instanceof df)m.push(A);else{const L=hf(M,U);L!=null&&(m.push(A),v.set(A,L))}}const x=new Un(m);return new pT(v,x,l.fieldTransforms)}function hf(n,e){if(yT(n=it(n)))return u_("Unsupported field value:",e,n),_T(n,e);if(n instanceof nu)return(function(r,i){if(!mT(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const a=[];let l=0;for(const f of r){let p=hf(f,i.yc(l));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),l++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=it(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return I1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=pt.fromDate(r);return{timestampValue:_h(i.serializer,a)}}if(r instanceof pt){const a=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:_h(i.serializer,a)}}if(r instanceof Ur)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jn)return{bytesValue:L1(i.serializer,r._byteString)};if(r instanceof Lt){const a=i.databaseId,l=r.firestore._databaseId;if(!l.isEqual(a))throw i.wc(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Gg(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof zr)return(function(l,f){return{mapValue:{fields:{[u1]:{stringValue:d1},[ph]:{arrayValue:{values:l.toArray().map((m=>{if(typeof m!="number")throw f.wc("VectorValues must only contain numeric values.");return Wg(f.serializer,m)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${Lg(r)}`)})(n,e)}function _T(n,e){const t={};return s1(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Si(n,((r,i)=>{const a=hf(i,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function yT(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof Ur||n instanceof Jn||n instanceof Lt||n instanceof nu||n instanceof zr)}function u_(n,e,t){if(!yT(t)||!n1(t)){const r=Lg(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function ag(n,e,t){if((e=it(e))instanceof uf)return e._internalPath;if(typeof e=="string")return d_(n,e);throw xh("Field path arguments must be of type string or ",n,!1,void 0,t)}const Cj=new RegExp("[~\\*/\\[\\]]");function d_(n,e,t){if(e.search(Cj)>=0)throw xh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new uf(...e.split("."))._internalPath}catch{throw xh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function xh(n,e,t,r,i){const a=r&&!r.isEmpty(),l=i!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(a||l)&&(p+=" (found",a&&(p+=` in field ${r}`),l&&(p+=` in document ${i}`),p+=")"),new xe(X.INVALID_ARGUMENT,f+n+p)}function vT(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class wT{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Nj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(xT("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Nj extends wT{data(){return super.data()}}function xT(n,e){return typeof e=="string"?d_(n,e):e instanceof uf?e._internalPath:e._delegate._internalPath}/**
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
 */function kj(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new xe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Sj{convertValue(e,t="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(xi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Si(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[ph].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((l=>Tt(l.doubleValue)));return new zr(a)}convertGeoPoint(e){return new Ur(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Xh(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Pc(e));default:return null}}convertTimestamp(e){const t=wi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ft.fromString(e);tt($1(r),9688,{name:e});const i=new jc(r.get(1),r.get(3)),a=new Ee(r.popFirst(5));return i.isEqual(t)||bs(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function Aj(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class pc{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mo extends wT{constructor(e,t,r,i,a,l){super(e,t,r,i,l),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Jd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(xT("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new xe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mo._jsonSchemaVersion="firestore/documentSnapshot/1.0",mo._jsonSchema={type:Nt("string",mo._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class Jd extends mo{data(e={}){return super.data(e)}}class Pa{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new pc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new Jd(this._firestore,this._userDataWriter,r.key,r,new pc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new xe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let l=0;return i._snapshot.docChanges.map((f=>{const p=new Jd(i._firestore,i._userDataWriter,f.doc.key,f.doc,new pc(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:l++}}))}{let l=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((f=>a||f.type!==3)).map((f=>{const p=new Jd(i._firestore,i._userDataWriter,f.doc.key,f.doc,new pc(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);let m=-1,v=-1;return f.type!==0&&(m=l.indexOf(f.doc.key),l=l.delete(f.doc.key)),f.type!==1&&(l=l.add(f.doc),v=l.indexOf(f.doc.key)),{type:Rj(f.type),doc:p,oldIndex:m,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new xe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Pa._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Mg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Rj(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se(61501,{type:n})}}Pa._jsonSchemaVersion="firestore/querySnapshot/1.0",Pa._jsonSchema={type:Nt("string",Pa._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class ET extends Sj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function Hw(n,e,t,...r){n=po(n,Lt);const i=po(n.firestore,Fc),a=gT(i);let l;return l=typeof(e=it(e))=="string"||e instanceof uf?Ij(a,"updateDoc",n._key,e,t,r):bj(a,"updateDoc",n._key,e),TT(i,[l.toMutation(n._key,Vr.exists(!0))])}function Pj(n,e){const t=po(n.firestore,Fc),r=og(n),i=Aj(n.converter,e);return TT(t,[Tj(gT(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Vr.exists(!1))]).then((()=>r))}function jj(n,...e){var t,r,i;n=it(n);let a={includeMetadataChanges:!1,source:"default"},l=0;typeof e[l]!="object"||qw(e[l])||(a=e[l++]);const f={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(qw(e[l])){const x=e[l];e[l]=(t=x.next)===null||t===void 0?void 0:t.bind(x),e[l+1]=(r=x.error)===null||r===void 0?void 0:r.bind(x),e[l+2]=(i=x.complete)===null||i===void 0?void 0:i.bind(x)}let p,m,v;if(n instanceof Lt)m=po(n.firestore,Fc),v=$g(n._key.path),p={next:x=>{e[l]&&e[l](Oj(m,n,x))},error:e[l+1],complete:e[l+2]};else{const x=po(n,cf);m=po(x.firestore,Fc),v=x._query;const E=new ET(m);p={next:A=>{e[l]&&e[l](new Pa(m,E,x,A))},error:e[l+1],complete:e[l+2]},kj(n._query)}return(function(E,A,M,U){const L=new fj(U),Q=new KP(A,L,M);return E.asyncQueue.enqueueAndForget((async()=>WP(await Lw(E),Q))),()=>{L.Ou(),E.asyncQueue.enqueueAndForget((async()=>qP(await Lw(E),Q)))}})(fT(m),v,f,p)}function TT(n,e){return(function(r,i){const a=new fo;return r.asyncQueue.enqueueAndForget((async()=>sj(await gj(r),i,a))),a.promise})(fT(n),e)}function Oj(n,e,t){const r=t.docs.get(e._key),i=new ET(n);return new mo(n,i,e._key,r,new pc(t.hasPendingWrites,t.fromCache),e.converter)}function Gw(){return new l_("serverTimestamp")}function Kw(n){return new c_("increment",n)}(function(e,t=!0){(function(i){Za=i})(ki),Wr(new xr("firestore",((r,{instanceIdentifier:i,options:a})=>{const l=r.getProvider("app").getImmediate(),f=new Fc(new b2(r.getProvider("auth-internal")),new N2(l,r.getProvider("app-check-internal")),(function(m,v){if(!Object.prototype.hasOwnProperty.apply(m.options,["projectId"]))throw new xe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new jc(m.options.projectId,v)})(l,i),l);return a=Object.assign({useFetchStreams:t},a),f._setSettings(a),f}),"PUBLIC").setMultipleInstances(!0)),zn(G0,K0,e),zn(G0,K0,"esm2017")})();var Qw={};const Yw="@firebase/database",Xw="1.0.20";/**
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
 */let bT="";function Dj(n){bT=n}/**
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
 */class Mj{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Kt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Sc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Lj{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Tr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const IT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Mj(e)}}catch{}return new Lj},uo=IT("localStorage"),Vj=IT("sessionStorage");/**
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
 */const ja=new Qc("@firebase/database"),CT=(function(){let n=1;return function(){return n++}})(),NT=function(n){const e=lA(n),t=new sA;t.update(e);const r=t.digest();return Wh.encodeByteArray(r)},ru=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=ru.apply(null,r):typeof r=="object"?e+=Kt(r):e+=r,e+=" "}return e};let wc=null,Jw=!0;const Fj=function(n,e){se(!0,"Can't turn on custom loggers persistently."),ja.logLevel=ze.VERBOSE,wc=ja.log.bind(ja)},cn=function(...n){if(Jw===!0&&(Jw=!1,wc===null&&Vj.get("logging_enabled")===!0&&Fj()),wc){const e=ru.apply(null,n);wc(e)}},su=function(n){return function(...e){cn(n,...e)}},lg=function(...n){const e="FIREBASE INTERNAL ERROR: "+ru(...n);ja.error(e)},Cs=function(...n){const e=`FIREBASE FATAL ERROR: ${ru(...n)}`;throw ja.error(e),new Error(e)},An=function(...n){const e="FIREBASE WARNING: "+ru(...n);ja.warn(e)},Uj=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&An("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},h_=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},zj=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Wa="[MIN_NAME]",vo="[MAX_NAME]",rl=function(n,e){if(n===e)return 0;if(n===Wa||e===vo)return-1;if(e===Wa||n===vo)return 1;{const t=Zw(n),r=Zw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},Bj=function(n,e){return n===e?0:n<e?-1:1},nc=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Kt(e))},f_=function(n){if(typeof n!="object"||n===null)return Kt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Kt(e[r]),t+=":",t+=f_(n[e[r]]);return t+="}",t},kT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function Rn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ST=function(n){se(!h_(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,a,l,f,p;n===0?(a=0,l=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=f+r,l=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(a=0,l=Math.round(n/Math.pow(2,1-r-t))));const m=[];for(p=t;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);for(p=e;p;p-=1)m.push(a%2?1:0),a=Math.floor(a/2);m.push(i?1:0),m.reverse();const v=m.join("");let x="";for(p=0;p<64;p+=8){let E=parseInt(v.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),x=x+E}return x.toLowerCase()},$j=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Wj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function qj(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const Hj=new RegExp("^-?(0*)\\d{1,10}$"),Gj=-2147483648,Kj=2147483647,Zw=function(n){if(Hj.test(n)){const e=Number(n);if(e>=Gj&&e<=Kj)return e}return null},sl=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw An("Exception was thrown by user callback.",t),e},Math.floor(0))}},Qj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},xc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Yj{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,bn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){An(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Xj{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(cn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',An(e)}}class Zd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zd.OWNER="owner";/**
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
 */const p_="5",AT="v",RT="s",PT="r",jT="f",OT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,DT="ls",MT="p",cg="ac",LT="websocket",VT="long_polling";/**
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
 */class FT{constructor(e,t,r,i,a=!1,l="",f=!1,p=!1,m=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=a,this.persistenceKey=l,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=uo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&uo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Jj(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function UT(n,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let r;if(e===LT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===VT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Jj(n)&&(t.ns=n.namespace);const i=[];return Rn(t,(a,l)=>{i.push(a+"="+l)}),r+i.join("&")}/**
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
 */class Zj{constructor(){this.counters_={}}incrementCounter(e,t=1){Tr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return FS(this.counters_)}}/**
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
 */const Em={},Tm={};function m_(n){const e=n.toString();return Em[e]||(Em[e]=new Zj),Em[e]}function eO(n,e){const t=n.toString();return Tm[t]||(Tm[t]=e()),Tm[t]}/**
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
 */class tO{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&sl(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ex="start",nO="close",rO="pLPCommand",sO="pRTLPCB",zT="id",BT="pw",$T="ser",iO="cb",oO="seg",aO="ts",lO="d",cO="dframe",WT=1870,qT=30,uO=WT-qT,dO=25e3,hO=3e4;class ka{constructor(e,t,r,i,a,l,f){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.transportSessionId=l,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=su(e),this.stats_=m_(t),this.urlFn=p=>(this.appCheckToken&&(p[cg]=this.appCheckToken),UT(t,VT,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new tO(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hO)),zj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new g_((...a)=>{const[l,f,p,m,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,l===ex)this.id=f,this.password=p;else if(l===nO)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+l)},(...a)=>{const[l,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(l,f)},()=>{this.onClosed_()},this.urlFn);const r={};r[ex]="t",r[$T]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[iO]=this.scriptTagHolder.uniqueCallbackIdentifier),r[AT]=p_,this.transportSessionId&&(r[RT]=this.transportSessionId),this.lastSessionId&&(r[DT]=this.lastSessionId),this.applicationId&&(r[MT]=this.applicationId),this.appCheckToken&&(r[cg]=this.appCheckToken),typeof location<"u"&&location.hostname&&OT.test(location.hostname)&&(r[PT]=jT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ka.forceAllow_=!0}static forceDisallow(){ka.forceDisallow_=!0}static isAvailable(){return ka.forceAllow_?!0:!ka.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!$j()&&!Wj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=jE(t),i=kT(r,uO);for(let a=0;a<i.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[cO]="t",r[zT]=e,r[BT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Kt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class g_{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=CT(),window[rO+this.uniqueCallbackIdentifier]=e,window[sO+this.uniqueCallbackIdentifier]=t,this.myIFrame=g_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const l="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(l),this.myIFrame.doc.close()}catch(f){cn("frame writing exception"),f.stack&&cn(f.stack),cn(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||cn("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[zT]=this.myID,e[BT]=this.myPW,e[$T]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+qT+r.length<=WT;){const l=this.pendingSegs.shift();r=r+"&"+oO+i+"="+l.seg+"&"+aO+i+"="+l.ts+"&"+lO+i+"="+l.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(dO)),a=()=>{clearTimeout(i),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{cn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const fO=16384,pO=45e3;let Eh=null;typeof MozWebSocket<"u"?Eh=MozWebSocket:typeof WebSocket<"u"&&(Eh=WebSocket);class mr{constructor(e,t,r,i,a,l,f){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=su(this.connId),this.stats_=m_(t),this.connURL=mr.connectionURL_(t,l,f,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,a){const l={};return l[AT]=p_,typeof location<"u"&&location.hostname&&OT.test(location.hostname)&&(l[PT]=jT),t&&(l[RT]=t),r&&(l[DT]=r),i&&(l[cg]=i),a&&(l[MT]=a),UT(e,LT,l)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,uo.set("previous_websocket_failure",!0);try{let r;YS(),this.mySock=new Eh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){mr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Eh!==null&&!mr.forceDisallow_}static previouslyFailed(){return uo.isInMemoryStorage||uo.get("previous_websocket_failure")===!0}markConnectionHealthy(){uo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=Sc(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Kt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=kT(t,fO);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(pO))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}mr.responsesRequiredToBeHealthy=2;mr.healthyTimeout=3e4;/**
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
 */class Uc{static get ALL_TRANSPORTS(){return[ka,mr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=mr&&mr.isAvailable();let r=t&&!mr.previouslyFailed();if(e.webSocketOnly&&(t||An("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[mr];else{const i=this.transports_=[];for(const a of Uc.ALL_TRANSPORTS)a&&a.isAvailable()&&i.push(a);Uc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Uc.globalTransportInitialized_=!1;/**
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
 */const mO=6e4,gO=5e3,_O=10*1024,yO=100*1024,bm="t",tx="d",vO="s",nx="r",wO="e",rx="o",sx="a",ix="n",ox="p",xO="h";class EO{constructor(e,t,r,i,a,l,f,p,m,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=a,this.onMessage_=l,this.onReady_=f,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=su("c:"+this.id+":"),this.transportManager_=new Uc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=xc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>yO?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_O?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(bm in e){const t=e[bm];t===sx?this.upgradeIfSecondaryHealthy_():t===nx?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===rx&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=nc("t",e),r=nc("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:ox,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sx,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ix,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=nc("t",e),r=nc("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=nc(bm,e);if(tx in e){const r=e[tx];if(t===xO){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ix){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===vO?this.onConnectionShutdown_(r):t===nx?this.onReset_(r):t===wO?lg("Server Error: "+r):t===rx?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):lg("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),p_!==r&&An("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),xc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(mO))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):xc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gO))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:ox,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(uo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class HT{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class GT{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!r||r===i[a].context)){i.splice(a,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Th extends GT{static getInstance(){return new Th}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ax=32,lx=768;class ot{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function et(){return new ot("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Ii(n){return n.pieces_.length-n.pieceNum_}function ct(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new ot(n.pieces_,e)}function KT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function TO(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function QT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function YT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new ot(e,0)}function Mt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof ot)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new ot(t,0)}function Be(n){return n.pieceNum_>=n.pieces_.length}function Nn(n,e){const t=Ve(n),r=Ve(e);if(t===null)return e;if(t===r)return Nn(ct(n),ct(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function __(n,e){if(Ii(n)!==Ii(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function gr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(Ii(n)>Ii(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class bO{constructor(e,t){this.errorPrefix_=t,this.parts_=QT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Kh(this.parts_[r]);XT(this)}}function IO(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Kh(e),XT(n)}function CO(n){const e=n.parts_.pop();n.byteLength_-=Kh(e),n.parts_.length>0&&(n.byteLength_-=1)}function XT(n){if(n.byteLength_>lx)throw new Error(n.errorPrefix_+"has a key path longer than "+lx+" bytes ("+n.byteLength_+").");if(n.parts_.length>ax)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ax+") or object contains a cycle "+lo(n))}function lo(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class y_ extends GT{static getInstance(){return new y_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const rc=1e3,NO=300*1e3,cx=30*1e3,kO=1.3,SO=3e4,AO="server_kill",ux=3;class ws extends HT{constructor(e,t,r,i,a,l,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=l,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=ws.nextPersistentConnectionId_++,this.log_=su("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=rc,this.maxReconnectDelay_=NO,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");y_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Th.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(Kt(a)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Es,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:l=>{const f=l.d;l.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,i){this.initConnection_();const a=e._queryIdentifier,l=e._path.toString();this.log_("Listen called for "+l+" "+a),this.listens.has(l)||this.listens.set(l,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(l).has(a),"listen() called twice for same path/queryId.");const f={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(l).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const a={p:r},l="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(l,a,f=>{const p=f.d,m=f.s;ws.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",f),m!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Tr(e,"w")){const r=go(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();An(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||rA(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=cx)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=nA(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const a=i.s,l=i.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,l))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const a={p:e},l="n";i&&(a.q=r,a.t=i),this.sendRequest(l,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,l=>{i&&setTimeout(()=>{i(l.s,l.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,a){this.initConnection_();const l={p:t,d:r};a!==void 0&&(l.h=a),this.outstandingPuts_.push({action:e,request:l,onComplete:i}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Kt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):lg("Unrecognized action received from server: "+Kt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SO&&(this.reconnectDelay_=rc),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*kO)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+ws.nextConnectionId_++,a=this.lastSessionId;let l=!1,f=null;const p=function(){f?f.close():(l=!0,r())},m=function(x){se(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(x)};this.realtime_={close:p,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);l?cn("getToken() completed but was canceled"):(cn("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=E&&E.token,f=new EO(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,A=>{An(A+" ("+this.repoInfo_.toString()+")"),this.interrupt(AO)},a))}catch(x){this.log_("Failed to get token: "+x),l||(this.repoInfo_.nodeAdmin&&An(x),p())}}}interrupt(e){cn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){cn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Lm(this.interruptReasons_)&&(this.reconnectDelay_=rc,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>f_(a)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new ot(e).toString();let i;if(this.listens.has(r)){const a=this.listens.get(r);i=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){cn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ux&&(this.reconnectDelay_=cx,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){cn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ux&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+bT.replace(/\./g,"-")]=1,Rg()?e["framework.cordova"]=1:FE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Th.getInstance().currentlyOnline();return Lm(this.interruptReasons_)&&e}}ws.nextPersistentConnectionId_=0;ws.nextConnectionId_=0;/**
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
 */class Fe{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Fe(e,t)}}/**
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
 */class ff{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Fe(Wa,e),i=new Fe(Wa,t);return this.compare(r,i)!==0}minPost(){return Fe.MIN}}/**
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
 */let Vd;class JT extends ff{static get __EMPTY_NODE(){return Vd}static set __EMPTY_NODE(e){Vd=e}compare(e,t){return rl(e.name,t.name)}isDefinedOn(e){throw Ya("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(vo,Vd)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,Vd)}toString(){return".key"}}const Oa=new JT;/**
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
 */class Fd{constructor(e,t,r,i,a=null){this.isReverse_=i,this.resultGenerator_=a,this.nodeStack_=[];let l=1;for(;!e.isEmpty();)if(e=e,l=t?r(e.key,t):1,i&&(l*=-1),l<0)this.isReverse_?e=e.left:e=e.right;else if(l===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ht{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??Ht.RED,this.left=i??kn.EMPTY_NODE,this.right=a??kn.EMPTY_NODE}copy(e,t,r,i,a){return new Ht(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return a<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return kn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return kn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ht.RED=!0;Ht.BLACK=!1;class RO{copy(e,t,r,i,a){return this}insert(e,t,r){return new Ht(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class kn{constructor(e,t=kn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new kn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ht.BLACK,null,null))}remove(e){return new kn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ht.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Fd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Fd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Fd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Fd(this.root_,null,this.comparator_,!0,e)}}kn.EMPTY_NODE=new RO;/**
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
 */function PO(n,e){return rl(n.name,e.name)}function v_(n,e){return rl(n,e)}/**
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
 */let ug;function jO(n){ug=n}const ZT=function(n){return typeof n=="number"?"number:"+ST(n):"string:"+n},eb=function(n){if(n.isLeafNode()){const e=n.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Tr(e,".sv"),"Priority must be a string or number.")}else se(n===ug||n.isEmpty(),"priority of unexpected type.");se(n===ug||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let dx;class Wt{static set __childrenNodeConstructor(e){dx=e}static get __childrenNodeConstructor(){return dx}constructor(e,t=Wt.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),eb(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Wt(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Be(e)?this:Ve(e)===".priority"?this.priorityNode_:Wt.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:Wt.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ve(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(se(r!==".priority"||Ii(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Wt.__childrenNodeConstructor.EMPTY_NODE.updateChild(ct(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ZT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ST(this.value_):e+=this.value_,this.lazyHash_=NT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Wt.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Wt.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=Wt.VALUE_TYPE_ORDER.indexOf(t),a=Wt.VALUE_TYPE_ORDER.indexOf(r);return se(i>=0,"Unknown leaf type: "+t),se(a>=0,"Unknown leaf type: "+r),i===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}Wt.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let tb,nb;function OO(n){tb=n}function DO(n){nb=n}class MO extends ff{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),a=r.compareTo(i);return a===0?rl(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(vo,new Wt("[PRIORITY-POST]",nb))}makePost(e,t){const r=tb(e);return new Fe(t,new Wt("[PRIORITY-POST]",r))}toString(){return".priority"}}const vt=new MO;/**
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
 */const LO=Math.log(2);class VO{constructor(e){const t=a=>parseInt(Math.log(a)/LO,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const bh=function(n,e,t,r){n.sort(e);const i=function(p,m){const v=m-p;let x,E;if(v===0)return null;if(v===1)return x=n[p],E=t?t(x):x,new Ht(E,x.node,Ht.BLACK,null,null);{const A=parseInt(v/2,10)+p,M=i(p,A),U=i(A+1,m);return x=n[A],E=t?t(x):x,new Ht(E,x.node,Ht.BLACK,M,U)}},a=function(p){let m=null,v=null,x=n.length;const E=function(M,U){const L=x-M,Q=x;x-=M;const ee=i(L+1,Q),ae=n[L],G=t?t(ae):ae;A(new Ht(G,ae.node,U,null,ee))},A=function(M){m?(m.left=M,m=M):(v=M,m=M)};for(let M=0;M<p.count;++M){const U=p.nextBitIsOne(),L=Math.pow(2,p.count-(M+1));U?E(L,Ht.BLACK):(E(L,Ht.BLACK),E(L,Ht.RED))}return v},l=new VO(n.length),f=a(l);return new kn(r||e,f)};/**
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
 */let Im;const Ea={};class _s{static get Default(){return se(Ea&&vt,"ChildrenNode.ts has not been loaded"),Im=Im||new _s({".priority":Ea},{".priority":vt}),Im}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=go(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof kn?t:null}hasIndex(e){return Tr(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Oa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const a=t.getIterator(Fe.Wrap);let l=a.getNext();for(;l;)i=i||e.isDefinedOn(l.node),r.push(l),l=a.getNext();let f;i?f=bh(r,e.getCompare()):f=Ea;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new _s(v,m)}addToIndexes(e,t){const r=uh(this.indexes_,(i,a)=>{const l=go(this.indexSet_,a);if(se(l,"Missing index implementation for "+a),i===Ea)if(l.isDefinedOn(e.node)){const f=[],p=t.getIterator(Fe.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&f.push(m),m=p.getNext();return f.push(e),bh(f,l.getCompare())}else return Ea;else{const f=t.get(e.name);let p=i;return f&&(p=p.remove(new Fe(e.name,f))),p.insert(e,e.node)}});return new _s(r,this.indexSet_)}removeFromIndexes(e,t){const r=uh(this.indexes_,i=>{if(i===Ea)return i;{const a=t.get(e.name);return a?i.remove(new Fe(e.name,a)):i}});return new _s(r,this.indexSet_)}}/**
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
 */let sc;class ke{static get EMPTY_NODE(){return sc||(sc=new ke(new kn(v_),null,_s.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&eb(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||sc}updatePriority(e){return this.children_.isEmpty()?this:new ke(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?sc:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(ct(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Fe(e,t);let i,a;t.isEmpty()?(i=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const l=i.isEmpty()?sc:this.priorityNode_;return new ke(i,l,a)}}updateChild(e,t){const r=Ve(e);if(r===null)return t;{se(Ve(e)!==".priority"||Ii(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ct(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,a=!0;if(this.forEachChild(vt,(l,f)=>{t[l]=f.val(e),r++,a&&ke.INTEGER_REGEXP_.test(l)?i=Math.max(i,Number(l)):a=!1}),!e&&a&&i<2*r){const l=[];for(const f in t)l[f]=t[f];return l}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ZT(this.getPriority().val())+":"),this.forEachChild(vt,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":NT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const a=i.getPredecessorKey(new Fe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Fe.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)<0;)i.getNext(),a=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)>0;)i.getNext(),a=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===iu?-1:0}withIndex(e){if(e===Oa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new ke(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Oa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(vt),i=t.getIterator(vt);let a=r.getNext(),l=i.getNext();for(;a&&l;){if(a.name!==l.name||!a.node.equals(l.node))return!1;a=r.getNext(),l=i.getNext()}return a===null&&l===null}else return!1;else return!1}}resolveIndex_(e){return e===Oa?null:this.indexMap_.get(e.toString())}}ke.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FO extends ke{constructor(){super(new kn(v_),ke.EMPTY_NODE,_s.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return ke.EMPTY_NODE}isEmpty(){return!1}}const iu=new FO;Object.defineProperties(Fe,{MIN:{value:new Fe(Wa,ke.EMPTY_NODE)},MAX:{value:new Fe(vo,iu)}});JT.__EMPTY_NODE=ke.EMPTY_NODE;Wt.__childrenNodeConstructor=ke;jO(iu);DO(iu);/**
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
 */const UO=!0;function Gt(n,e=null){if(n===null)return ke.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new Wt(t,Gt(e))}if(!(n instanceof Array)&&UO){const t=[];let r=!1;if(Rn(n,(l,f)=>{if(l.substring(0,1)!=="."){const p=Gt(f);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new Fe(l,p)))}}),t.length===0)return ke.EMPTY_NODE;const a=bh(t,PO,l=>l.name,v_);if(r){const l=bh(t,vt.getCompare());return new ke(a,Gt(e),new _s({".priority":l},{".priority":vt}))}else return new ke(a,Gt(e),_s.Default)}else{let t=ke.EMPTY_NODE;return Rn(n,(r,i)=>{if(Tr(n,r)&&r.substring(0,1)!=="."){const a=Gt(i);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Gt(e))}}OO(Gt);/**
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
 */class zO extends ff{constructor(e){super(),this.indexPath_=e,se(!Be(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),a=r.compareTo(i);return a===0?rl(e.name,t.name):a}makePost(e,t){const r=Gt(e),i=ke.EMPTY_NODE.updateChild(this.indexPath_,r);return new Fe(t,i)}maxPost(){const e=ke.EMPTY_NODE.updateChild(this.indexPath_,iu);return new Fe(vo,e)}toString(){return QT(this.indexPath_,0).join("/")}}/**
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
 */class BO extends ff{compare(e,t){const r=e.node.compareTo(t.node);return r===0?rl(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const r=Gt(e);return new Fe(t,r)}toString(){return".value"}}const $O=new BO;/**
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
 */function rb(n){return{type:"value",snapshotNode:n}}function qa(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function zc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Bc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function WO(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class w_{constructor(e){this.index_=e}updateChild(e,t,r,i,a,l){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(i).equals(r.getChild(i))&&f.isEmpty()===r.isEmpty()||(l!=null&&(r.isEmpty()?e.hasChild(t)?l.trackChildChange(zc(t,f)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?l.trackChildChange(qa(t,r)):l.trackChildChange(Bc(t,r,f))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(vt,(i,a)=>{t.hasChild(i)||r.trackChildChange(zc(i,a))}),t.isLeafNode()||t.forEachChild(vt,(i,a)=>{if(e.hasChild(i)){const l=e.getImmediateChild(i);l.equals(a)||r.trackChildChange(Bc(i,a,l))}else r.trackChildChange(qa(i,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?ke.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class $c{constructor(e){this.indexedFilter_=new w_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=$c.getStartPost_(e),this.endPost_=$c.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,a,l){return this.matches(new Fe(t,r))||(r=ke.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,a,l)}updateFullNode(e,t,r){t.isLeafNode()&&(t=ke.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(ke.EMPTY_NODE);const a=this;return t.forEachChild(vt,(l,f)=>{a.matches(new Fe(l,f))||(i=i.updateImmediateChild(l,ke.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class qO{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new $c(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,a,l){return this.rangedFilter_.matches(new Fe(t,r))||(r=ke.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,a,l):this.fullLimitUpdateChild_(e,t,r,a,l)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=ke.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=ke.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let l=0;for(;a.hasNext()&&l<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))i=i.updateImmediateChild(f.name,f.node),l++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(ke.EMPTY_NODE);let a;this.reverse_?a=i.getReverseIterator(this.index_):a=i.getIterator(this.index_);let l=0;for(;a.hasNext();){const f=a.getNext();l<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?l++:i=i.updateImmediateChild(f.name,ke.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let l;if(this.reverse_){const x=this.index_.getCompare();l=(E,A)=>x(A,E)}else l=this.index_.getCompare();const f=e;se(f.numChildren()===this.limit_,"");const p=new Fe(t,r),m=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(t)){const x=f.getImmediateChild(t);let E=i.getChildAfterChild(this.index_,m,this.reverse_);for(;E!=null&&(E.name===t||f.hasChild(E.name));)E=i.getChildAfterChild(this.index_,E,this.reverse_);const A=E==null?1:l(E,p);if(v&&!r.isEmpty()&&A>=0)return a?.trackChildChange(Bc(t,r,x)),f.updateImmediateChild(t,r);{a?.trackChildChange(zc(t,x));const U=f.updateImmediateChild(t,ke.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(a?.trackChildChange(qa(E.name,E.node)),U.updateImmediateChild(E.name,E.node)):U}}else return r.isEmpty()?e:v&&l(m,p)>=0?(a!=null&&(a.trackChildChange(zc(m.name,m.node)),a.trackChildChange(qa(t,r))),f.updateImmediateChild(t,r).updateImmediateChild(m.name,ke.EMPTY_NODE)):e}}/**
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
 */class x_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Wa}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:vo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new x_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HO(n){return n.loadsAllData()?new w_(n.getIndex()):n.hasLimit()?new qO(n):new $c(n)}function hx(n){const e={};if(n.isDefault())return e;let t;if(n.index_===vt?t="$priority":n.index_===$O?t="$value":n.index_===Oa?t="$key":(se(n.index_ instanceof zO,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Kt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Kt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Kt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Kt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Kt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function fx(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==vt&&(e.i=n.index_.toString()),e}/**
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
 */class Ih extends HT{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=su("p:rest:"),this.listens_={}}listen(e,t,r,i){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const l=Ih.getListenId_(e,r),f={};this.listens_[l]=f;const p=hx(e._queryParams);this.restRequest_(a+".json",p,(m,v)=>{let x=v;if(m===404&&(x=null,m=null),m===null&&this.onDataUpdate_(a,x,!1,r),go(this.listens_,l)===f){let E;m?m===401?E="permission_denied":E="rest_error:"+m:E="ok",i(E,null)}})}unlisten(e,t){const r=Ih.getListenId_(e,t);delete this.listens_[r]}get(e){const t=hx(e._queryParams),r=e._path.toString(),i=new Es;return this.restRequest_(r+".json",t,(a,l)=>{let f=l;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(r,f,!1,null),i.resolve(f)):i.reject(new Error(f))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,a])=>{i&&i.accessToken&&(t.auth=i.accessToken),a&&a.token&&(t.ac=a.token);const l=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Ja(t);this.log_("Sending REST request for "+l);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(r&&f.readyState===4){this.log_("REST Response for "+l+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=Sc(f.responseText)}catch{An("Failed to parse JSON response for "+l+": "+f.responseText)}r(null,p)}else f.status!==401&&f.status!==404&&An("Got unsuccessful REST response for "+l+" Status: "+f.status),r(f.status);r=null}},f.open("GET",l,!0),f.send()})}}/**
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
 */class GO{constructor(){this.rootNode_=ke.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Ch(){return{value:null,children:new Map}}function sb(n,e,t){if(Be(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ve(e);n.children.has(r)||n.children.set(r,Ch());const i=n.children.get(r);e=ct(e),sb(i,e,t)}}function dg(n,e,t){n.value!==null?t(e,n.value):KO(n,(r,i)=>{const a=new ot(e.toString()+"/"+r);dg(i,a,t)})}function KO(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class QO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Rn(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const px=10*1e3,YO=30*1e3,XO=300*1e3;class JO{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new QO(e);const r=px+(YO-px)*Math.random();xc(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;Rn(e,(i,a)=>{a>0&&Tr(this.statsToReport_,i)&&(t[i]=a,r=!0)}),r&&this.server_.reportStats(t),xc(this.reportStats_.bind(this),Math.floor(Math.random()*2*XO))}}/**
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
 */var _r;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(_r||(_r={}));function ib(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function E_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function T_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Nh{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=_r.ACK_USER_WRITE,this.source=ib()}operationForChild(e){if(Be(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ot(e));return new Nh(et(),t,this.revert)}}else return se(Ve(this.path)===e,"operationForChild called for unrelated child."),new Nh(ct(this.path),this.affectedTree,this.revert)}}/**
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
 */class Wc{constructor(e,t){this.source=e,this.path=t,this.type=_r.LISTEN_COMPLETE}operationForChild(e){return Be(this.path)?new Wc(this.source,et()):new Wc(this.source,ct(this.path))}}/**
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
 */class wo{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=_r.OVERWRITE}operationForChild(e){return Be(this.path)?new wo(this.source,et(),this.snap.getImmediateChild(e)):new wo(this.source,ct(this.path),this.snap)}}/**
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
 */class qc{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=_r.MERGE}operationForChild(e){if(Be(this.path)){const t=this.children.subtree(new ot(e));return t.isEmpty()?null:t.value?new wo(this.source,et(),t.value):new qc(this.source,et(),t)}else return se(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new qc(this.source,ct(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class xo{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Be(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class ZO{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function eD(n,e,t,r){const i=[],a=[];return e.forEach(l=>{l.type==="child_changed"&&n.index_.indexedValueChanged(l.oldSnap,l.snapshotNode)&&a.push(WO(l.childName,l.snapshotNode))}),ic(n,i,"child_removed",e,r,t),ic(n,i,"child_added",e,r,t),ic(n,i,"child_moved",a,r,t),ic(n,i,"child_changed",e,r,t),ic(n,i,"value",e,r,t),i}function ic(n,e,t,r,i,a){const l=r.filter(f=>f.type===t);l.sort((f,p)=>nD(n,f,p)),l.forEach(f=>{const p=tD(n,f,a);i.forEach(m=>{m.respondsTo(f.type)&&e.push(m.createEvent(p,n.query_))})})}function tD(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function nD(n,e,t){if(e.childName==null||t.childName==null)throw Ya("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),i=new Fe(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function pf(n,e){return{eventCache:n,serverCache:e}}function Ec(n,e,t,r){return pf(new xo(e,t,r),n.serverCache)}function ob(n,e,t,r){return pf(n.eventCache,new xo(e,t,r))}function hg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Eo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let Cm;const rD=()=>(Cm||(Cm=new kn(Bj)),Cm);class ht{static fromObject(e){let t=new ht(null);return Rn(e,(r,i)=>{t=t.set(new ot(r),i)}),t}constructor(e,t=rD()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:et(),value:this.value};if(Be(e))return null;{const r=Ve(e),i=this.children.get(r);if(i!==null){const a=i.findRootMostMatchingPathAndValue(ct(e),t);return a!=null?{path:Mt(new ot(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Be(e))return this;{const t=Ve(e),r=this.children.get(t);return r!==null?r.subtree(ct(e)):new ht(null)}}set(e,t){if(Be(e))return new ht(t,this.children);{const r=Ve(e),a=(this.children.get(r)||new ht(null)).set(ct(e),t),l=this.children.insert(r,a);return new ht(this.value,l)}}remove(e){if(Be(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Ve(e),r=this.children.get(t);if(r){const i=r.remove(ct(e));let a;return i.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,i),this.value===null&&a.isEmpty()?new ht(null):new ht(this.value,a)}else return this}}get(e){if(Be(e))return this.value;{const t=Ve(e),r=this.children.get(t);return r?r.get(ct(e)):null}}setTree(e,t){if(Be(e))return t;{const r=Ve(e),a=(this.children.get(r)||new ht(null)).setTree(ct(e),t);let l;return a.isEmpty()?l=this.children.remove(r):l=this.children.insert(r,a),new ht(this.value,l)}}fold(e){return this.fold_(et(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,a)=>{r[i]=a.fold_(Mt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,et(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(Be(e))return null;{const a=Ve(e),l=this.children.get(a);return l?l.findOnPath_(ct(e),Mt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,et(),t)}foreachOnPath_(e,t,r){if(Be(e))return this;{this.value&&r(t,this.value);const i=Ve(e),a=this.children.get(i);return a?a.foreachOnPath_(ct(e),Mt(t,i),r):new ht(null)}}foreach(e){this.foreach_(et(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Mt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class wr{constructor(e){this.writeTree_=e}static empty(){return new wr(new ht(null))}}function Tc(n,e,t){if(Be(e))return new wr(new ht(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let a=r.value;const l=Nn(i,e);return a=a.updateChild(l,t),new wr(n.writeTree_.set(i,a))}else{const i=new ht(t),a=n.writeTree_.setTree(e,i);return new wr(a)}}}function mx(n,e,t){let r=n;return Rn(t,(i,a)=>{r=Tc(r,Mt(e,i),a)}),r}function gx(n,e){if(Be(e))return wr.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new wr(t)}}function fg(n,e){return ko(n,e)!=null}function ko(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Nn(t.path,e)):null}function _x(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(vt,(r,i)=>{e.push(new Fe(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Fe(r,i.value))}),e}function gi(n,e){if(Be(e))return n;{const t=ko(n,e);return t!=null?new wr(new ht(t)):new wr(n.writeTree_.subtree(e))}}function pg(n){return n.writeTree_.isEmpty()}function Ha(n,e){return ab(et(),n.writeTree_,e)}function ab(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,a)=>{i===".priority"?(se(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=ab(Mt(n,i),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Mt(n,".priority"),r)),t}}/**
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
 */function b_(n,e){return db(e,n)}function sD(n,e,t,r,i){se(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=Tc(n.visibleWrites,e,t)),n.lastWriteId=r}function iD(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function oD(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,a=!1,l=n.allWrites.length-1;for(;i&&l>=0;){const f=n.allWrites[l];f.visible&&(l>=t&&aD(f,r.path)?i=!1:gr(r.path,f.path)&&(a=!0)),l--}if(i){if(a)return lD(n),!0;if(r.snap)n.visibleWrites=gx(n.visibleWrites,r.path);else{const f=r.children;Rn(f,p=>{n.visibleWrites=gx(n.visibleWrites,Mt(r.path,p))})}return!0}else return!1}function aD(n,e){if(n.snap)return gr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&gr(Mt(n.path,t),e))return!0;return!1}function lD(n){n.visibleWrites=lb(n.allWrites,cD,et()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function cD(n){return n.visible}function lb(n,e,t){let r=wr.empty();for(let i=0;i<n.length;++i){const a=n[i];if(e(a)){const l=a.path;let f;if(a.snap)gr(t,l)?(f=Nn(t,l),r=Tc(r,f,a.snap)):gr(l,t)&&(f=Nn(l,t),r=Tc(r,et(),a.snap.getChild(f)));else if(a.children){if(gr(t,l))f=Nn(t,l),r=mx(r,f,a.children);else if(gr(l,t))if(f=Nn(l,t),Be(f))r=mx(r,et(),a.children);else{const p=go(a.children,Ve(f));if(p){const m=p.getChild(ct(f));r=Tc(r,et(),m)}}}else throw Ya("WriteRecord should have .snap or .children")}}return r}function cb(n,e,t,r,i){if(!r&&!i){const a=ko(n.visibleWrites,e);if(a!=null)return a;{const l=gi(n.visibleWrites,e);if(pg(l))return t;if(t==null&&!fg(l,et()))return null;{const f=t||ke.EMPTY_NODE;return Ha(l,f)}}}else{const a=gi(n.visibleWrites,e);if(!i&&pg(a))return t;if(!i&&t==null&&!fg(a,et()))return null;{const l=function(m){return(m.visible||i)&&(!r||!~r.indexOf(m.writeId))&&(gr(m.path,e)||gr(e,m.path))},f=lb(n.allWrites,l,e),p=t||ke.EMPTY_NODE;return Ha(f,p)}}}function uD(n,e,t){let r=ke.EMPTY_NODE;const i=ko(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(a,l)=>{r=r.updateImmediateChild(a,l)}),r;if(t){const a=gi(n.visibleWrites,e);return t.forEachChild(vt,(l,f)=>{const p=Ha(gi(a,new ot(l)),f);r=r.updateImmediateChild(l,p)}),_x(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}else{const a=gi(n.visibleWrites,e);return _x(a).forEach(l=>{r=r.updateImmediateChild(l.name,l.node)}),r}}function dD(n,e,t,r,i){se(r||i,"Either existingEventSnap or existingServerSnap must exist");const a=Mt(e,t);if(fg(n.visibleWrites,a))return null;{const l=gi(n.visibleWrites,a);return pg(l)?i.getChild(t):Ha(l,i.getChild(t))}}function hD(n,e,t,r){const i=Mt(e,t),a=ko(n.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(t)){const l=gi(n.visibleWrites,i);return Ha(l,r.getNode().getImmediateChild(t))}else return null}function fD(n,e){return ko(n.visibleWrites,e)}function pD(n,e,t,r,i,a,l){let f;const p=gi(n.visibleWrites,e),m=ko(p,et());if(m!=null)f=m;else if(t!=null)f=Ha(p,t);else return[];if(f=f.withIndex(l),!f.isEmpty()&&!f.isLeafNode()){const v=[],x=l.getCompare(),E=a?f.getReverseIteratorFrom(r,l):f.getIteratorFrom(r,l);let A=E.getNext();for(;A&&v.length<i;)x(A,r)!==0&&v.push(A),A=E.getNext();return v}else return[]}function mD(){return{visibleWrites:wr.empty(),allWrites:[],lastWriteId:-1}}function kh(n,e,t,r){return cb(n.writeTree,n.treePath,e,t,r)}function I_(n,e){return uD(n.writeTree,n.treePath,e)}function yx(n,e,t,r){return dD(n.writeTree,n.treePath,e,t,r)}function Sh(n,e){return fD(n.writeTree,Mt(n.treePath,e))}function gD(n,e,t,r,i,a){return pD(n.writeTree,n.treePath,e,t,r,i,a)}function C_(n,e,t){return hD(n.writeTree,n.treePath,e,t)}function ub(n,e){return db(Mt(n.treePath,e),n.writeTree)}function db(n,e){return{treePath:n,writeTree:e}}/**
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
 */class _D{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const a=i.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Bc(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,zc(r,i.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,qa(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Bc(r,e.snapshotNode,i.oldSnap));else throw Ya("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class yD{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const hb=new yD;class N_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new xo(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return C_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Eo(this.viewCache_),a=gD(this.writes_,i,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function vD(n){return{filter:n}}function wD(n,e){se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function xD(n,e,t,r,i){const a=new _D;let l,f;if(t.type===_r.OVERWRITE){const m=t;m.source.fromUser?l=mg(n,e,m.path,m.snap,r,i,a):(se(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered()&&!Be(m.path),l=Ah(n,e,m.path,m.snap,r,i,f,a))}else if(t.type===_r.MERGE){const m=t;m.source.fromUser?l=TD(n,e,m.path,m.children,r,i,a):(se(m.source.fromServer,"Unknown source."),f=m.source.tagged||e.serverCache.isFiltered(),l=gg(n,e,m.path,m.children,r,i,f,a))}else if(t.type===_r.ACK_USER_WRITE){const m=t;m.revert?l=CD(n,e,m.path,r,i,a):l=bD(n,e,m.path,m.affectedTree,r,i,a)}else if(t.type===_r.LISTEN_COMPLETE)l=ID(n,e,t.path,r,a);else throw Ya("Unknown operation type: "+t.type);const p=a.getChanges();return ED(e,l,p),{viewCache:l,changes:p}}function ED(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=hg(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(rb(hg(e)))}}function fb(n,e,t,r,i,a){const l=e.eventCache;if(Sh(r,t)!=null)return e;{let f,p;if(Be(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Eo(e),v=m instanceof ke?m:ke.EMPTY_NODE,x=I_(r,v);f=n.filter.updateFullNode(e.eventCache.getNode(),x,a)}else{const m=kh(r,Eo(e));f=n.filter.updateFullNode(e.eventCache.getNode(),m,a)}else{const m=Ve(t);if(m===".priority"){se(Ii(t)===1,"Can't have a priority with additional path components");const v=l.getNode();p=e.serverCache.getNode();const x=yx(r,t,v,p);x!=null?f=n.filter.updatePriority(v,x):f=l.getNode()}else{const v=ct(t);let x;if(l.isCompleteForChild(m)){p=e.serverCache.getNode();const E=yx(r,t,l.getNode(),p);E!=null?x=l.getNode().getImmediateChild(m).updateChild(v,E):x=l.getNode().getImmediateChild(m)}else x=C_(r,m,e.serverCache);x!=null?f=n.filter.updateChild(l.getNode(),m,x,v,i,a):f=l.getNode()}}return Ec(e,f,l.isFullyInitialized()||Be(t),n.filter.filtersNodes())}}function Ah(n,e,t,r,i,a,l,f){const p=e.serverCache;let m;const v=l?n.filter:n.filter.getIndexedFilter();if(Be(t))m=v.updateFullNode(p.getNode(),r,null);else if(v.filtersNodes()&&!p.isFiltered()){const A=p.getNode().updateChild(t,r);m=v.updateFullNode(p.getNode(),A,null)}else{const A=Ve(t);if(!p.isCompleteForPath(t)&&Ii(t)>1)return e;const M=ct(t),L=p.getNode().getImmediateChild(A).updateChild(M,r);A===".priority"?m=v.updatePriority(p.getNode(),L):m=v.updateChild(p.getNode(),A,L,M,hb,null)}const x=ob(e,m,p.isFullyInitialized()||Be(t),v.filtersNodes()),E=new N_(i,x,a);return fb(n,x,t,i,E,f)}function mg(n,e,t,r,i,a,l){const f=e.eventCache;let p,m;const v=new N_(i,e,a);if(Be(t))m=n.filter.updateFullNode(e.eventCache.getNode(),r,l),p=Ec(e,m,!0,n.filter.filtersNodes());else{const x=Ve(t);if(x===".priority")m=n.filter.updatePriority(e.eventCache.getNode(),r),p=Ec(e,m,f.isFullyInitialized(),f.isFiltered());else{const E=ct(t),A=f.getNode().getImmediateChild(x);let M;if(Be(E))M=r;else{const U=v.getCompleteChild(x);U!=null?KT(E)===".priority"&&U.getChild(YT(E)).isEmpty()?M=U:M=U.updateChild(E,r):M=ke.EMPTY_NODE}if(A.equals(M))p=e;else{const U=n.filter.updateChild(f.getNode(),x,M,E,v,l);p=Ec(e,U,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function vx(n,e){return n.eventCache.isCompleteForChild(e)}function TD(n,e,t,r,i,a,l){let f=e;return r.foreach((p,m)=>{const v=Mt(t,p);vx(e,Ve(v))&&(f=mg(n,f,v,m,i,a,l))}),r.foreach((p,m)=>{const v=Mt(t,p);vx(e,Ve(v))||(f=mg(n,f,v,m,i,a,l))}),f}function wx(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function gg(n,e,t,r,i,a,l,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;Be(t)?m=r:m=new ht(null).setTree(t,r);const v=e.serverCache.getNode();return m.children.inorderTraversal((x,E)=>{if(v.hasChild(x)){const A=e.serverCache.getNode().getImmediateChild(x),M=wx(n,A,E);p=Ah(n,p,new ot(x),M,i,a,l,f)}}),m.children.inorderTraversal((x,E)=>{const A=!e.serverCache.isCompleteForChild(x)&&E.value===null;if(!v.hasChild(x)&&!A){const M=e.serverCache.getNode().getImmediateChild(x),U=wx(n,M,E);p=Ah(n,p,new ot(x),U,i,a,l,f)}}),p}function bD(n,e,t,r,i,a,l){if(Sh(i,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(Be(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return Ah(n,e,t,p.getNode().getChild(t),i,a,f,l);if(Be(t)){let m=new ht(null);return p.getNode().forEachChild(Oa,(v,x)=>{m=m.set(new ot(v),x)}),gg(n,e,t,m,i,a,f,l)}else return e}else{let m=new ht(null);return r.foreach((v,x)=>{const E=Mt(t,v);p.isCompleteForPath(E)&&(m=m.set(v,p.getNode().getChild(E)))}),gg(n,e,t,m,i,a,f,l)}}function ID(n,e,t,r,i){const a=e.serverCache,l=ob(e,a.getNode(),a.isFullyInitialized()||Be(t),a.isFiltered());return fb(n,l,t,r,hb,i)}function CD(n,e,t,r,i,a){let l;if(Sh(r,t)!=null)return e;{const f=new N_(r,e,i),p=e.eventCache.getNode();let m;if(Be(t)||Ve(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=kh(r,Eo(e));else{const x=e.serverCache.getNode();se(x instanceof ke,"serverChildren would be complete if leaf node"),v=I_(r,x)}v=v,m=n.filter.updateFullNode(p,v,a)}else{const v=Ve(t);let x=C_(r,v,e.serverCache);x==null&&e.serverCache.isCompleteForChild(v)&&(x=p.getImmediateChild(v)),x!=null?m=n.filter.updateChild(p,v,x,ct(t),f,a):e.eventCache.getNode().hasChild(v)?m=n.filter.updateChild(p,v,ke.EMPTY_NODE,ct(t),f,a):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(l=kh(r,Eo(e)),l.isLeafNode()&&(m=n.filter.updateFullNode(m,l,a)))}return l=e.serverCache.isFullyInitialized()||Sh(r,et())!=null,Ec(e,m,l,n.filter.filtersNodes())}}/**
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
 */class ND{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new w_(r.getIndex()),a=HO(r);this.processor_=vD(a);const l=t.serverCache,f=t.eventCache,p=i.updateFullNode(ke.EMPTY_NODE,l.getNode(),null),m=a.updateFullNode(ke.EMPTY_NODE,f.getNode(),null),v=new xo(p,l.isFullyInitialized(),i.filtersNodes()),x=new xo(m,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=pf(x,v),this.eventGenerator_=new ZO(this.query_)}get query(){return this.query_}}function kD(n){return n.viewCache_.serverCache.getNode()}function SD(n,e){const t=Eo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Be(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function xx(n){return n.eventRegistrations_.length===0}function AD(n,e){n.eventRegistrations_.push(e)}function Ex(n,e,t){const r=[];if(t){se(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(a=>{const l=a.createCancelEvent(t,i);l&&r.push(l)})}if(e){let i=[];for(let a=0;a<n.eventRegistrations_.length;++a){const l=n.eventRegistrations_[a];if(!l.matches(e))i.push(l);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function Tx(n,e,t,r){e.type===_r.MERGE&&e.source.queryId!==null&&(se(Eo(n.viewCache_),"We should always have a full cache before handling merges"),se(hg(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,a=xD(n.processor_,i,e,t,r);return wD(n.processor_,a.viewCache),se(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,pb(n,a.changes,a.viewCache.eventCache.getNode(),null)}function RD(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(vt,(a,l)=>{r.push(qa(a,l))}),t.isFullyInitialized()&&r.push(rb(t.getNode())),pb(n,r,t.getNode(),e)}function pb(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return eD(n.eventGenerator_,e,t,i)}/**
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
 */let Rh;class PD{constructor(){this.views=new Map}}function jD(n){se(!Rh,"__referenceConstructor has already been defined"),Rh=n}function OD(){return se(Rh,"Reference.ts has not been loaded"),Rh}function DD(n){return n.views.size===0}function k_(n,e,t,r){const i=e.source.queryId;if(i!==null){const a=n.views.get(i);return se(a!=null,"SyncTree gave us an op for an invalid query."),Tx(a,e,t,r)}else{let a=[];for(const l of n.views.values())a=a.concat(Tx(l,e,t,r));return a}}function MD(n,e,t,r,i){const a=e._queryIdentifier,l=n.views.get(a);if(!l){let f=kh(t,i?r:null),p=!1;f?p=!0:r instanceof ke?(f=I_(t,r),p=!1):(f=ke.EMPTY_NODE,p=!1);const m=pf(new xo(f,p,!1),new xo(r,i,!1));return new ND(e,m)}return l}function LD(n,e,t,r,i,a){const l=MD(n,e,r,i,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,l),AD(l,t),RD(l,t)}function VD(n,e,t,r){const i=e._queryIdentifier,a=[];let l=[];const f=Ci(n);if(i==="default")for(const[p,m]of n.views.entries())l=l.concat(Ex(m,t,r)),xx(m)&&(n.views.delete(p),m.query._queryParams.loadsAllData()||a.push(m.query));else{const p=n.views.get(i);p&&(l=l.concat(Ex(p,t,r)),xx(p)&&(n.views.delete(i),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!Ci(n)&&a.push(new(OD())(e._repo,e._path)),{removed:a,events:l}}function mb(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Da(n,e){let t=null;for(const r of n.views.values())t=t||SD(r,e);return t}function gb(n,e){if(e._queryParams.loadsAllData())return mf(n);{const r=e._queryIdentifier;return n.views.get(r)}}function _b(n,e){return gb(n,e)!=null}function Ci(n){return mf(n)!=null}function mf(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ph;function FD(n){se(!Ph,"__referenceConstructor has already been defined"),Ph=n}function UD(){return se(Ph,"Reference.ts has not been loaded"),Ph}let zD=1;class bx{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=mD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function S_(n,e,t,r,i){return sD(n.pendingWriteTree_,e,t,r,i),i?ou(n,new wo(ib(),e,t)):[]}function ho(n,e,t=!1){const r=iD(n.pendingWriteTree_,e);if(oD(n.pendingWriteTree_,e)){let a=new ht(null);return r.snap!=null?a=a.set(et(),!0):Rn(r.children,l=>{a=a.set(new ot(l),!0)}),ou(n,new Nh(r.path,a,t))}else return[]}function gf(n,e,t){return ou(n,new wo(E_(),e,t))}function BD(n,e,t){const r=ht.fromObject(t);return ou(n,new qc(E_(),e,r))}function $D(n,e){return ou(n,new Wc(E_(),e))}function WD(n,e,t){const r=A_(n,t);if(r){const i=R_(r),a=i.path,l=i.queryId,f=Nn(a,e),p=new Wc(T_(l),f);return P_(n,a,p)}else return[]}function _g(n,e,t,r,i=!1){const a=e._path,l=n.syncPointTree_.get(a);let f=[];if(l&&(e._queryIdentifier==="default"||_b(l,e))){const p=VD(l,e,t,r);DD(l)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const m=p.removed;if(f=p.events,!i){const v=m.findIndex(E=>E._queryParams.loadsAllData())!==-1,x=n.syncPointTree_.findOnPath(a,(E,A)=>Ci(A));if(v&&!x){const E=n.syncPointTree_.subtree(a);if(!E.isEmpty()){const A=GD(E);for(let M=0;M<A.length;++M){const U=A[M],L=U.query,Q=wb(n,U);n.listenProvider_.startListening(bc(L),jh(n,L),Q.hashFn,Q.onComplete)}}}!x&&m.length>0&&!r&&(v?n.listenProvider_.stopListening(bc(e),null):m.forEach(E=>{const A=n.queryToTagMap.get(yf(E));n.listenProvider_.stopListening(bc(E),A)}))}KD(n,m)}return f}function qD(n,e,t,r){const i=A_(n,r);if(i!=null){const a=R_(i),l=a.path,f=a.queryId,p=Nn(l,e),m=new wo(T_(f),p,t);return P_(n,l,m)}else return[]}function HD(n,e,t,r){const i=A_(n,r);if(i){const a=R_(i),l=a.path,f=a.queryId,p=Nn(l,e),m=ht.fromObject(t),v=new qc(T_(f),p,m);return P_(n,l,v)}else return[]}function Ix(n,e,t,r=!1){const i=e._path;let a=null,l=!1;n.syncPointTree_.foreachOnPath(i,(E,A)=>{const M=Nn(E,i);a=a||Da(A,M),l=l||Ci(A)});let f=n.syncPointTree_.get(i);f?(l=l||Ci(f),a=a||Da(f,et())):(f=new PD,n.syncPointTree_=n.syncPointTree_.set(i,f));let p;a!=null?p=!0:(p=!1,a=ke.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((A,M)=>{const U=Da(M,et());U&&(a=a.updateImmediateChild(A,U))}));const m=_b(f,e);if(!m&&!e._queryParams.loadsAllData()){const E=yf(e);se(!n.queryToTagMap.has(E),"View does not exist, but we have a tag");const A=QD();n.queryToTagMap.set(E,A),n.tagToQueryMap.set(A,E)}const v=b_(n.pendingWriteTree_,i);let x=LD(f,e,t,v,a,p);if(!m&&!l&&!r){const E=gb(f,e);x=x.concat(YD(n,e,E))}return x}function _f(n,e,t){const i=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(l,f)=>{const p=Nn(l,e),m=Da(f,p);if(m)return m});return cb(i,e,a,t,!0)}function ou(n,e){return yb(e,n.syncPointTree_,null,b_(n.pendingWriteTree_,et()))}function yb(n,e,t,r){if(Be(n.path))return vb(n,e,t,r);{const i=e.get(et());t==null&&i!=null&&(t=Da(i,et()));let a=[];const l=Ve(n.path),f=n.operationForChild(l),p=e.children.get(l);if(p&&f){const m=t?t.getImmediateChild(l):null,v=ub(r,l);a=a.concat(yb(f,p,m,v))}return i&&(a=a.concat(k_(i,n,r,t))),a}}function vb(n,e,t,r){const i=e.get(et());t==null&&i!=null&&(t=Da(i,et()));let a=[];return e.children.inorderTraversal((l,f)=>{const p=t?t.getImmediateChild(l):null,m=ub(r,l),v=n.operationForChild(l);v&&(a=a.concat(vb(v,f,p,m)))}),i&&(a=a.concat(k_(i,n,r,t))),a}function wb(n,e){const t=e.query,r=jh(n,t);return{hashFn:()=>(kD(e)||ke.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?WD(n,t._path,r):$D(n,t._path);{const a=qj(i,t);return _g(n,t,null,a)}}}}function jh(n,e){const t=yf(e);return n.queryToTagMap.get(t)}function yf(n){return n._path.toString()+"$"+n._queryIdentifier}function A_(n,e){return n.tagToQueryMap.get(e)}function R_(n){const e=n.indexOf("$");return se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new ot(n.substr(0,e))}}function P_(n,e,t){const r=n.syncPointTree_.get(e);se(r,"Missing sync point for query tag that we're tracking");const i=b_(n.pendingWriteTree_,e);return k_(r,t,i,null)}function GD(n){return n.fold((e,t,r)=>{if(t&&Ci(t))return[mf(t)];{let i=[];return t&&(i=mb(t)),Rn(r,(a,l)=>{i=i.concat(l)}),i}})}function bc(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(UD())(n._repo,n._path):n}function KD(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=yf(r),a=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(a)}}}function QD(){return zD++}function YD(n,e,t){const r=e._path,i=jh(n,e),a=wb(n,t),l=n.listenProvider_.startListening(bc(e),i,a.hashFn,a.onComplete),f=n.syncPointTree_.subtree(r);if(i)se(!Ci(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((m,v,x)=>{if(!Be(m)&&v&&Ci(v))return[mf(v).query];{let E=[];return v&&(E=E.concat(mb(v).map(A=>A.query))),Rn(x,(A,M)=>{E=E.concat(M)}),E}});for(let m=0;m<p.length;++m){const v=p[m];n.listenProvider_.stopListening(bc(v),jh(n,v))}}return l}/**
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
 */class j_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new j_(t)}node(){return this.node_}}class O_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mt(this.path_,e);return new O_(this.syncTree_,t)}node(){return _f(this.syncTree_,this.path_)}}const XD=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Cx=function(n,e,t){if(!n||typeof n!="object")return n;if(se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return JD(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ZD(n[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},JD=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+n)}},ZD=function(n,e,t){n.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&se(!1,"Unexpected increment value: "+r);const i=e.node();if(se(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const l=i.getValue();return typeof l!="number"?r:l+r},e4=function(n,e,t,r){return M_(e,new O_(t,n),r)},D_=function(n,e,t){return M_(n,new j_(e),t)};function M_(n,e,t){const r=n.getPriority().val(),i=Cx(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const l=n,f=Cx(l.getValue(),e,t);return f!==l.getValue()||i!==l.getPriority().val()?new Wt(f,Gt(i)):n}else{const l=n;return a=l,i!==l.getPriority().val()&&(a=a.updatePriority(new Wt(i))),l.forEachChild(vt,(f,p)=>{const m=M_(p,e.getImmediateChild(f),t);m!==p&&(a=a.updateImmediateChild(f,m))}),a}}/**
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
 */class L_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function vf(n,e){let t=e instanceof ot?e:new ot(e),r=n,i=Ve(t);for(;i!==null;){const a=go(r.node.children,i)||{children:{},childCount:0};r=new L_(i,r,a),t=ct(t),i=Ve(t)}return r}function So(n){return n.node.value}function V_(n,e){n.node.value=e,yg(n)}function xb(n){return n.node.childCount>0}function t4(n){return So(n)===void 0&&!xb(n)}function wf(n,e){Rn(n.node.children,(t,r)=>{e(new L_(t,n,r))})}function Eb(n,e,t,r){t&&e(n),wf(n,i=>{Eb(i,e,!0)})}function n4(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function au(n){return new ot(n.parent===null?n.name:au(n.parent)+"/"+n.name)}function yg(n){n.parent!==null&&r4(n.parent,n.name,n)}function r4(n,e,t){const r=t4(t),i=Tr(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,yg(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,yg(n))}/**
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
 */const s4=/[\[\].#$\/\u0000-\u001F\u007F]/,i4=/[\[\].#$\u0000-\u001F\u007F]/,Nm=10*1024*1024,Tb=function(n){return typeof n=="string"&&n.length!==0&&!s4.test(n)},bb=function(n){return typeof n=="string"&&n.length!==0&&!i4.test(n)},o4=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),bb(n)},a4=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!h_(n)||n&&typeof n=="object"&&Tr(n,".sv")},l4=function(n,e,t,r){xf(jg(n,"value"),e,t)},xf=function(n,e,t){const r=t instanceof ot?new bO(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+lo(r));if(typeof e=="function")throw new Error(n+"contains a function "+lo(r)+" with contents = "+e.toString());if(h_(e))throw new Error(n+"contains "+e.toString()+" "+lo(r));if(typeof e=="string"&&e.length>Nm/3&&Kh(e)>Nm)throw new Error(n+"contains a string greater than "+Nm+" utf8 bytes "+lo(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,a=!1;if(Rn(e,(l,f)=>{if(l===".value")i=!0;else if(l!==".priority"&&l!==".sv"&&(a=!0,!Tb(l)))throw new Error(n+" contains an invalid key ("+l+") "+lo(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);IO(r,l),xf(n,f,r),CO(r)}),i&&a)throw new Error(n+' contains ".value" child '+lo(r)+" in addition to actual children.")}},Ib=function(n,e,t,r){if(!bb(t))throw new Error(jg(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},c4=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ib(n,e,t)},Cb=function(n,e){if(Ve(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},u4=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Tb(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!o4(t))throw new Error(jg(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class d4{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function F_(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],a=i.getPath();t!==null&&!__(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(i)}t&&n.eventLists_.push(t)}function Nb(n,e,t){F_(n,t),kb(n,r=>__(r,e))}function Gr(n,e,t){F_(n,t),kb(n,r=>gr(r,e)||gr(e,r))}function kb(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const a=i.path;e(a)?(h4(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function h4(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();wc&&cn("event: "+t.toString()),sl(r)}}}/**
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
 */const f4="repo_interrupt",p4=25;class m4{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new d4,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Ch(),this.transactionQueueTree_=new L_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function g4(n,e,t){if(n.stats_=m_(n.repoInfo_),n.forceRestClient_||Qj())n.server_=new Ih(n.repoInfo_,(r,i,a,l)=>{Nx(n,r,i,a,l)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>kx(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Kt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new ws(n.repoInfo_,e,(r,i,a,l)=>{Nx(n,r,i,a,l)},r=>{kx(n,r)},r=>{y4(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=eO(n.repoInfo_,()=>new JO(n.stats_,n.server_)),n.infoData_=new GO,n.infoSyncTree_=new bx({startListening:(r,i,a,l)=>{let f=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(f=gf(n.infoSyncTree_,r._path,p),setTimeout(()=>{l("ok")},0)),f},stopListening:()=>{}}),U_(n,"connected",!1),n.serverSyncTree_=new bx({startListening:(r,i,a,l)=>(n.server_.listen(r,a,i,(f,p)=>{const m=l(f,p);Gr(n.eventQueue_,r._path,m)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function _4(n){const t=n.infoData_.getNode(new ot(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Ef(n){return XD({timestamp:_4(n)})}function Nx(n,e,t,r,i){n.dataUpdateCount++;const a=new ot(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let l=[];if(i)if(r){const p=uh(t,m=>Gt(m));l=HD(n.serverSyncTree_,a,p,i)}else{const p=Gt(t);l=qD(n.serverSyncTree_,a,p,i)}else if(r){const p=uh(t,m=>Gt(m));l=BD(n.serverSyncTree_,a,p)}else{const p=Gt(t);l=gf(n.serverSyncTree_,a,p)}let f=a;l.length>0&&(f=If(n,a)),Gr(n.eventQueue_,f,l)}function kx(n,e){U_(n,"connected",e),e===!1&&w4(n)}function y4(n,e){Rn(e,(t,r)=>{U_(n,t,r)})}function U_(n,e,t){const r=new ot("/.info/"+e),i=Gt(t);n.infoData_.updateSnapshot(r,i);const a=gf(n.infoSyncTree_,r,i);Gr(n.eventQueue_,r,a)}function z_(n){return n.nextWriteId_++}function v4(n,e,t,r,i){Tf(n,"set",{path:e.toString(),value:t,priority:r});const a=Ef(n),l=Gt(t,r),f=_f(n.serverSyncTree_,e),p=D_(l,f,a),m=z_(n),v=S_(n.serverSyncTree_,e,p,m,!0);F_(n.eventQueue_,v),n.server_.put(e.toString(),l.val(!0),(E,A)=>{const M=E==="ok";M||An("set at "+e+" failed: "+E);const U=ho(n.serverSyncTree_,m,!M);Gr(n.eventQueue_,e,U),b4(n,i,E,A)});const x=Pb(n,e);If(n,x),Gr(n.eventQueue_,x,[])}function w4(n){Tf(n,"onDisconnectEvents");const e=Ef(n),t=Ch();dg(n.onDisconnect_,et(),(i,a)=>{const l=e4(i,a,n.serverSyncTree_,e);sb(t,i,l)});let r=[];dg(t,et(),(i,a)=>{r=r.concat(gf(n.serverSyncTree_,i,a));const l=Pb(n,i);If(n,l)}),n.onDisconnect_=Ch(),Gr(n.eventQueue_,et(),r)}function x4(n,e,t){let r;Ve(e._path)===".info"?r=Ix(n.infoSyncTree_,e,t):r=Ix(n.serverSyncTree_,e,t),Nb(n.eventQueue_,e._path,r)}function E4(n,e,t){let r;Ve(e._path)===".info"?r=_g(n.infoSyncTree_,e,t):r=_g(n.serverSyncTree_,e,t),Nb(n.eventQueue_,e._path,r)}function T4(n){n.persistentConnection_&&n.persistentConnection_.interrupt(f4)}function Tf(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),cn(t,...e)}function b4(n,e,t,r){e&&sl(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let a=i;r&&(a+=": "+r);const l=new Error(a);l.code=i,e(l)}})}function I4(n,e,t,r,i,a){Tf(n,"transaction on "+e);const l={path:e,update:t,onComplete:r,status:null,order:CT(),applyLocally:a,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},f=B_(n,e,void 0);l.currentInputSnapshot=f;const p=l.update(f.val());if(p===void 0)l.unwatcher(),l.currentOutputSnapshotRaw=null,l.currentOutputSnapshotResolved=null,l.onComplete&&l.onComplete(null,!1,l.currentInputSnapshot);else{xf("transaction failed: Data returned ",p,l.path),l.status=0;const m=vf(n.transactionQueueTree_,e),v=So(m)||[];v.push(l),V_(m,v);let x;typeof p=="object"&&p!==null&&Tr(p,".priority")?(x=go(p,".priority"),se(a4(x),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):x=(_f(n.serverSyncTree_,e)||ke.EMPTY_NODE).getPriority().val();const E=Ef(n),A=Gt(p,x),M=D_(A,f,E);l.currentOutputSnapshotRaw=A,l.currentOutputSnapshotResolved=M,l.currentWriteId=z_(n);const U=S_(n.serverSyncTree_,e,M,l.currentWriteId,l.applyLocally);Gr(n.eventQueue_,e,U),bf(n,n.transactionQueueTree_)}}function B_(n,e,t){return _f(n.serverSyncTree_,e,t)||ke.EMPTY_NODE}function bf(n,e=n.transactionQueueTree_){if(e||Cf(n,e),So(e)){const t=Ab(n,e);se(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&C4(n,au(e),t)}else xb(e)&&wf(e,t=>{bf(n,t)})}function C4(n,e,t){const r=t.map(m=>m.currentWriteId),i=B_(n,e,r);let a=i;const l=i.hash();for(let m=0;m<t.length;m++){const v=t[m];se(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const x=Nn(e,v.path);a=a.updateChild(x,v.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;n.server_.put(p.toString(),f,m=>{Tf(n,"transaction put response",{path:p.toString(),status:m});let v=[];if(m==="ok"){const x=[];for(let E=0;E<t.length;E++)t[E].status=2,v=v.concat(ho(n.serverSyncTree_,t[E].currentWriteId)),t[E].onComplete&&x.push(()=>t[E].onComplete(null,!0,t[E].currentOutputSnapshotResolved)),t[E].unwatcher();Cf(n,vf(n.transactionQueueTree_,e)),bf(n,n.transactionQueueTree_),Gr(n.eventQueue_,e,v);for(let E=0;E<x.length;E++)sl(x[E])}else{if(m==="datastale")for(let x=0;x<t.length;x++)t[x].status===3?t[x].status=4:t[x].status=0;else{An("transaction at "+p.toString()+" failed: "+m);for(let x=0;x<t.length;x++)t[x].status=4,t[x].abortReason=m}If(n,e)}},l)}function If(n,e){const t=Sb(n,e),r=au(t),i=Ab(n,t);return N4(n,i,r),r}function N4(n,e,t){if(e.length===0)return;const r=[];let i=[];const l=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],m=Nn(t,p.path);let v=!1,x;if(se(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,x=p.abortReason,i=i.concat(ho(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=p4)v=!0,x="maxretry",i=i.concat(ho(n.serverSyncTree_,p.currentWriteId,!0));else{const E=B_(n,p.path,l);p.currentInputSnapshot=E;const A=e[f].update(E.val());if(A!==void 0){xf("transaction failed: Data returned ",A,p.path);let M=Gt(A);typeof A=="object"&&A!=null&&Tr(A,".priority")||(M=M.updatePriority(E.getPriority()));const L=p.currentWriteId,Q=Ef(n),ee=D_(M,E,Q);p.currentOutputSnapshotRaw=M,p.currentOutputSnapshotResolved=ee,p.currentWriteId=z_(n),l.splice(l.indexOf(L),1),i=i.concat(S_(n.serverSyncTree_,p.path,ee,p.currentWriteId,p.applyLocally)),i=i.concat(ho(n.serverSyncTree_,L,!0))}else v=!0,x="nodata",i=i.concat(ho(n.serverSyncTree_,p.currentWriteId,!0))}Gr(n.eventQueue_,t,i),i=[],v&&(e[f].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(x==="nodata"?r.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):r.push(()=>e[f].onComplete(new Error(x),!1,null))))}Cf(n,n.transactionQueueTree_);for(let f=0;f<r.length;f++)sl(r[f]);bf(n,n.transactionQueueTree_)}function Sb(n,e){let t,r=n.transactionQueueTree_;for(t=Ve(e);t!==null&&So(r)===void 0;)r=vf(r,t),e=ct(e),t=Ve(e);return r}function Ab(n,e){const t=[];return Rb(n,e,t),t.sort((r,i)=>r.order-i.order),t}function Rb(n,e,t){const r=So(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);wf(e,i=>{Rb(n,i,t)})}function Cf(n,e){const t=So(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,V_(e,t.length>0?t:void 0)}wf(e,r=>{Cf(n,r)})}function Pb(n,e){const t=au(Sb(n,e)),r=vf(n.transactionQueueTree_,e);return n4(r,i=>{km(n,i)}),km(n,r),Eb(r,i=>{km(n,i)}),t}function km(n,e){const t=So(e);if(t){const r=[];let i=[],a=-1;for(let l=0;l<t.length;l++)t[l].status===3||(t[l].status===1?(se(a===l-1,"All SENT items should be at beginning of queue."),a=l,t[l].status=3,t[l].abortReason="set"):(se(t[l].status===0,"Unexpected transaction status in abort"),t[l].unwatcher(),i=i.concat(ho(n.serverSyncTree_,t[l].currentWriteId,!0)),t[l].onComplete&&r.push(t[l].onComplete.bind(null,new Error("set"),!1,null))));a===-1?V_(e,void 0):t.length=a+1,Gr(n.eventQueue_,au(e),i);for(let l=0;l<r.length;l++)sl(r[l])}}/**
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
 */function k4(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function S4(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):An(`Invalid query segment '${t}' in query '${n}'`)}return e}const Sx=function(n,e){const t=A4(n),r=t.namespace;t.domain==="firebase.com"&&Cs(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Cs("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Uj();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new FT(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new ot(t.pathString)}},A4=function(n){let e="",t="",r="",i="",a="",l=!0,f="https",p=443;if(typeof n=="string"){let m=n.indexOf("//");m>=0&&(f=n.substring(0,m-1),n=n.substring(m+2));let v=n.indexOf("/");v===-1&&(v=n.length);let x=n.indexOf("?");x===-1&&(x=n.length),e=n.substring(0,Math.min(v,x)),v<x&&(i=k4(n.substring(v,x)));const E=S4(n.substring(Math.min(n.length,x)));m=e.indexOf(":"),m>=0?(l=f==="https"||f==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const A=e.slice(0,m);if(A.toLowerCase()==="localhost")t="localhost";else if(A.split(".").length<=2)t=A;else{const M=e.indexOf(".");r=e.substring(0,M).toLowerCase(),t=e.substring(M+1),a=r}"ns"in E&&(a=E.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:l,scheme:f,pathString:i,namespace:a}};/**
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
 */class R4{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Kt(this.snapshot.exportVal())}}class P4{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class j4{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class $_{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return Be(this._path)?null:KT(this._path)}get ref(){return new Ss(this._repo,this._path)}get _queryIdentifier(){const e=fx(this._queryParams),t=f_(e);return t==="{}"?"default":t}get _queryObject(){return fx(this._queryParams)}isEqual(e){if(e=it(e),!(e instanceof $_))return!1;const t=this._repo===e._repo,r=__(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+TO(this._path)}}class Ss extends $_{constructor(e,t){super(e,t,new x_,!1)}get parent(){const e=YT(this._path);return e===null?null:new Ss(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Hc{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ot(e),r=vg(this.ref,e);return new Hc(this._node.getChild(t),r,vt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Hc(i,vg(this.ref,r),vt)))}hasChild(e){const t=new ot(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function oc(n,e){return n=it(n),n._checkNotDeleted("ref"),e!==void 0?vg(n._root,e):n._root}function vg(n,e){return n=it(n),Ve(n._path)===null?c4("child","path",e):Ib("child","path",e),new Ss(n._repo,Mt(n._path,e))}function Ax(n,e){n=it(n),Cb("set",n._path),l4("set",e,n._path);const t=new Es;return v4(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class W_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new R4("value",this,new Hc(e.snapshotNode,new Ss(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new P4(this,e,t):null}matches(e){return e instanceof W_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function O4(n,e,t,r,i){const a=new j4(t,void 0),l=new W_(a);return x4(n._repo,n,l),()=>E4(n._repo,n,l)}function jb(n,e,t,r){return O4(n,"value",e)}jD(Ss);FD(Ss);/**
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
 */const D4="FIREBASE_DATABASE_EMULATOR_HOST",wg={};let M4=!1;function L4(n,e,t,r){const i=e.lastIndexOf(":"),a=e.substring(0,i),l=ks(a);n.repoInfo_=new FT(e,l,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function V4(n,e,t,r,i){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Cs("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),cn("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let l=Sx(a,i),f=l.repoInfo,p;typeof process<"u"&&Qw&&(p=Qw[D4]),p?(a=`http://${p}?ns=${f.namespace}`,l=Sx(a,i),f=l.repoInfo):l.repoInfo.secure;const m=new Xj(n.name,n.options,e);u4("Invalid Firebase Database URL",l),Be(l.path)||Cs("Database URL must point to the root of a Firebase Database (not including a child path).");const v=U4(f,n,m,new Yj(n,t));return new z4(v,n)}function F4(n,e){const t=wg[e];(!t||t[n.key]!==n)&&Cs(`Database ${e}(${n.repoInfo_}) has already been deleted.`),T4(n),delete t[n.key]}function U4(n,e,t,r){let i=wg[e.name];i||(i={},wg[e.name]=i);let a=i[n.toURLString()];return a&&Cs("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new m4(n,M4,t,r),i[n.toURLString()]=a,a}class z4{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(g4(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ss(this._repo,et())),this._rootInternal}_delete(){return this._rootInternal!==null&&(F4(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Cs("Cannot call "+e+" on a deleted database.")}}function B4(n=Yc(),e){const t=Io(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=Sg("database");r&&$4(t,...r)}return t}function $4(n,e,t,r={}){n=it(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&_i(r,a.repoInfo_.emulatorOptions))return;Cs("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let l;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Cs('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),l=new Zd(Zd.OWNER);else if(r.mockUserToken){const f=typeof r.mockUserToken=="string"?r.mockUserToken:Ag(r.mockUserToken,n.app.options.projectId);l=new Zd(f)}ks(e)&&(Hh(e),Gh("Database",!0)),L4(a,i,r,l)}/**
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
 */function W4(n){Dj(ki),Wr(new xr("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return V4(r,i,a,t)},"PUBLIC").setMultipleInstances(!0)),zn(Yw,Xw,n),zn(Yw,Xw,"esm2017")}/**
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
 */const q4={".sv":"timestamp"};function Rx(){return q4}/**
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
 */class H4{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function Px(n,e,t){var r;if(n=it(n),Cb("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,a=new Es,l=(p,m,v)=>{let x=null;p?a.reject(p):(x=new Hc(v,new Ss(n._repo,n._path),vt),a.resolve(new H4(m,x)))},f=jb(n,()=>{});return I4(n._repo,n._path,e,l,f,i),a.promise}ws.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};ws.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};W4();function q_(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function Ob(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const G4=Ob,Db=new Xa("auth","Firebase",Ob());/**
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
 */const Oh=new Qc("@firebase/auth");function K4(n,...e){Oh.logLevel<=ze.WARN&&Oh.warn(`Auth (${ki}): ${n}`,...e)}function eh(n,...e){Oh.logLevel<=ze.ERROR&&Oh.error(`Auth (${ki}): ${n}`,...e)}/**
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
 */function Er(n,...e){throw H_(n,...e)}function Br(n,...e){return H_(n,...e)}function Mb(n,e,t){const r=Object.assign(Object.assign({},G4()),{[e]:t});return new Xa("auth","Firebase",r).create(e,{appName:n.name})}function xs(n){return Mb(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function H_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Db.create(n,...e)}function Ne(n,e,...t){if(!n)throw H_(e,...t)}function ys(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eh(e),new Error(e)}function Ns(n,e){n||ys(e)}/**
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
 */function xg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Q4(){return jx()==="http:"||jx()==="https:"}function jx(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Y4(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q4()||KS()||"connection"in navigator)?navigator.onLine:!0}function X4(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class lu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ns(t>e,"Short delay should be less than long delay!"),this.isMobile=Rg()||FE()}get(){return Y4()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function G_(n,e){Ns(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Lb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ys("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ys("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ys("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const J4={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Z4=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],eM=new lu(3e4,6e4);function As(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Yr(n,e,t,r,i={}){return Vb(n,i,async()=>{let a={},l={};r&&(e==="GET"?l=r:a={body:JSON.stringify(r)});const f=Ja(Object.assign({key:n.config.apiKey},l)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:e,headers:p},a);return GS()||(m.referrerPolicy="no-referrer"),n.emulatorConfig&&ks(n.emulatorConfig.host)&&(m.credentials="include"),Lb.fetch()(await Fb(n,n.config.apiHost,t,f),m)})}async function Vb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},J4),e);try{const i=new nM(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const l=await a.json();if("needConfirmation"in l)throw Ud(n,"account-exists-with-different-credential",l);if(a.ok&&!("errorMessage"in l))return l;{const f=a.ok?l.errorMessage:l.error.message,[p,m]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ud(n,"credential-already-in-use",l);if(p==="EMAIL_EXISTS")throw Ud(n,"email-already-in-use",l);if(p==="USER_DISABLED")throw Ud(n,"user-disabled",l);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Mb(n,v,m);Er(n,v)}}catch(i){if(i instanceof Qr)throw i;Er(n,"network-request-failed",{message:String(i)})}}async function cu(n,e,t,r,i={}){const a=await Yr(n,e,t,r,i);return"mfaPendingCredential"in a&&Er(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Fb(n,e,t,r){const i=`${e}${t}?${r}`,a=n,l=a.config.emulator?G_(n.config,i):`${n.config.apiScheme}://${i}`;return Z4.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(l).toString():l}function tM(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nM{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Br(this.auth,"network-request-failed")),eM.get())})}}function Ud(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Br(n,e,r);return i.customData._tokenResponse=t,i}function Ox(n){return n!==void 0&&n.enterprise!==void 0}class rM{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return tM(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function sM(n,e){return Yr(n,"GET","/v2/recaptchaConfig",As(n,e))}/**
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
 */async function iM(n,e){return Yr(n,"POST","/v1/accounts:delete",e)}async function Dh(n,e){return Yr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ic(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function oM(n,e=!1){const t=it(n),r=await t.getIdToken(e),i=K_(r);Ne(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,l=a?.sign_in_provider;return{claims:i,token:r,authTime:Ic(Sm(i.auth_time)),issuedAtTime:Ic(Sm(i.iat)),expirationTime:Ic(Sm(i.exp)),signInProvider:l||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Sm(n){return Number(n)*1e3}function K_(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eh("JWT malformed, contained fewer than 3 sections"),null;try{const i=ch(t);return i?JSON.parse(i):(eh("Failed to decode base64 JWT payload"),null)}catch(i){return eh("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Dx(n){const e=K_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ga(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Qr&&aM(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function aM({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class lM{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Eg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ic(this.lastLoginAt),this.creationTime=Ic(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Mh(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Ga(n,Dh(t,{idToken:r}));Ne(i?.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const l=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?Ub(a.providerUserInfo):[],f=uM(n.providerData,l),p=n.isAnonymous,m=!(n.email&&a.passwordHash)&&!f?.length,v=p?m:!1,x={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new Eg(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,x)}async function cM(n){const e=it(n);await Mh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function uM(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ub(n){return n.map(e=>{var{providerId:t}=e,r=q_(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function dM(n,e){const t=await Vb(n,{},async()=>{const r=Ja({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,l=await Fb(n,i,"/v1/token",`key=${a}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:r};return n.emulatorConfig&&ks(n.emulatorConfig.host)&&(p.credentials="include"),Lb.fetch()(l,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function hM(n,e){return Yr(n,"POST","/v2/accounts:revokeToken",As(n,e))}/**
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
 */class Ma{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=Dx(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await dM(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,l=new Ma;return r&&(Ne(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(Ne(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),a&&(Ne(typeof a=="number","internal-error",{appName:e}),l.expirationTime=a),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ma,this.toJSON())}_performRefresh(){return ys("not implemented")}}/**
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
 */function ri(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class yr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=q_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new lM(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new Eg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await Ga(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return oM(this,e)}reload(){return cM(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new yr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Mh(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(bn(this.auth.app))return Promise.reject(xs(this.auth));const e=await this.getIdToken();return await Ga(this,iM(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,l,f,p,m,v;const x=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,A=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,M=(l=t.photoURL)!==null&&l!==void 0?l:void 0,U=(f=t.tenantId)!==null&&f!==void 0?f:void 0,L=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(m=t.createdAt)!==null&&m!==void 0?m:void 0,ee=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:ae,emailVerified:G,isAnonymous:ce,providerData:me,stsTokenManager:O}=t;Ne(ae&&O,e,"internal-error");const I=Ma.fromJSON(this.name,O);Ne(typeof ae=="string",e,"internal-error"),ri(x,e.name),ri(E,e.name),Ne(typeof G=="boolean",e,"internal-error"),Ne(typeof ce=="boolean",e,"internal-error"),ri(A,e.name),ri(M,e.name),ri(U,e.name),ri(L,e.name),ri(Q,e.name),ri(ee,e.name);const k=new yr({uid:ae,auth:e,email:E,emailVerified:G,displayName:x,isAnonymous:ce,photoURL:M,phoneNumber:A,tenantId:U,stsTokenManager:I,createdAt:Q,lastLoginAt:ee});return me&&Array.isArray(me)&&(k.providerData=me.map(C=>Object.assign({},C))),L&&(k._redirectEventId=L),k}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ma;i.updateFromServerResponse(t);const a=new yr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mh(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Ne(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?Ub(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!a?.length,f=new Ma;f.updateFromIdToken(r);const p=new yr({uid:i.localId,auth:e,stsTokenManager:f,isAnonymous:l}),m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Eg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(p,m),p}}/**
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
 */const Mx=new Map;function vs(n){Ns(n instanceof Function,"Expected a class definition");let e=Mx.get(n);return e?(Ns(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Mx.set(n,e),e)}/**
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
 */class zb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}zb.type="NONE";const Lx=zb;/**
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
 */function th(n,e,t){return`firebase:${n}:${e}:${t}`}class La{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=th(this.userKey,i.apiKey,a),this.fullPersistenceKey=th("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Dh(this.auth,{idToken:e}).catch(()=>{});return t?yr._fromGetAccountInfoResponse(this.auth,t,e):null}return yr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new La(vs(Lx),e,r);const i=(await Promise.all(t.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let a=i[0]||vs(Lx);const l=th(r,e.config.apiKey,e.name);let f=null;for(const m of t)try{const v=await m._get(l);if(v){let x;if(typeof v=="string"){const E=await Dh(e,{idToken:v}).catch(()=>{});if(!E)break;x=await yr._fromGetAccountInfoResponse(e,E,v)}else x=yr._fromJSON(e,v);m!==a&&(f=x),a=m;break}}catch{}const p=i.filter(m=>m._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new La(a,e,r):(a=p[0],f&&await a._set(l,f.toJSON()),await Promise.all(t.map(async m=>{if(m!==a)try{await m._remove(l)}catch{}})),new La(a,e,r))}}/**
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
 */function Vx(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gb(e))return"Blackberry";if(Kb(e))return"Webos";if($b(e))return"Safari";if((e.includes("chrome/")||Wb(e))&&!e.includes("edge/"))return"Chrome";if(Hb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bb(n=un()){return/firefox\//i.test(n)}function $b(n=un()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wb(n=un()){return/crios\//i.test(n)}function qb(n=un()){return/iemobile/i.test(n)}function Hb(n=un()){return/android/i.test(n)}function Gb(n=un()){return/blackberry/i.test(n)}function Kb(n=un()){return/webos/i.test(n)}function Q_(n=un()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function fM(n=un()){var e;return Q_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function pM(){return QS()&&document.documentMode===10}function Qb(n=un()){return Q_(n)||Hb(n)||Kb(n)||Gb(n)||/windows phone/i.test(n)||qb(n)}/**
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
 */function Yb(n,e=[]){let t;switch(n){case"Browser":t=Vx(un());break;case"Worker":t=`${Vx(un())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ki}/${r}`}/**
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
 */class mM{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((l,f)=>{try{const p=e(a);l(p)}catch(p){f(p)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function gM(n,e={}){return Yr(n,"GET","/v2/passwordPolicy",As(n,e))}/**
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
 */const _M=6;class yM{constructor(e){var t,r,i,a;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=l.minPasswordLength)!==null&&t!==void 0?t:_M,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,l,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(i=p.containsLowercaseLetter)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsNumericCharacter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class vM{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fx(this),this.idTokenSubscription=new Fx(this),this.beforeStateQueue=new mM(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Db,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=vs(t)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await La.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Dh(this,{idToken:e}),r=await yr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(bn(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=i?._redirectEventId,p=await this.tryRedirectSignIn(e);(!l||l===f)&&p?.user&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Mh(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=X4()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(bn(this.app))return Promise.reject(xs(this));const t=e?it(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return bn(this.app)?Promise.reject(xs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return bn(this.app)?Promise.reject(xs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(vs(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gM(this),t=new yM(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Xa("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await hM(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&vs(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await La.create(this,[vs(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let l=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(f,this,"internal-error"),f.then(()=>{l||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,i);return()=>{l=!0,p()}}else{const p=e.addObserver(t);return()=>{l=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&K4(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ri(n){return it(n)}class Fx{constructor(e){this.auth=e,this.observer=null,this.addObserver=iA(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wM(n){Nf=n}function Xb(n){return Nf.loadJS(n)}function xM(){return Nf.recaptchaEnterpriseScript}function EM(){return Nf.gapiScript}function TM(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class bM{constructor(){this.enterprise=new IM}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class IM{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const CM="recaptcha-enterprise",Jb="NO_RECAPTCHA";class NM{constructor(e){this.type=CM,this.auth=Ri(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(l,f)=>{sM(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const m=new rM(p);return a.tenantId==null?a._agentRecaptchaConfig=m:a._tenantRecaptchaConfigs[a.tenantId]=m,l(m.siteKey)}}).catch(p=>{f(p)})})}function i(a,l,f){const p=window.grecaptcha;Ox(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(m=>{l(m)}).catch(()=>{l(Jb)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new bM().execute("siteKey",{action:"verify"}):new Promise((a,l)=>{r(this.auth).then(f=>{if(!t&&Ox(window.grecaptcha))i(f,a,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let p=xM();p.length!==0&&(p+=f),Xb(p).then(()=>{i(f,a,l)}).catch(m=>{l(m)})}}).catch(f=>{l(f)})})}}async function Ux(n,e,t,r=!1,i=!1){const a=new NM(n);let l;if(i)l=Jb;else try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,m=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:l,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:l}):Object.assign(f,{captchaResponse:l}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Lh(n,e,t,r,i){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Ux(n,e,t,t==="getOobCode");return r(n,l)}else return r(n,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ux(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(l)})}/**
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
 */function kM(n,e){const t=Io(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(_i(a,e??{}))return i;Er(i,"already-initialized")}return t.initialize({options:e})}function SM(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(vs);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function AM(n,e,t){const r=Ri(n);Ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Zb(e),{host:l,port:f}=RM(e),p=f===null?"":`:${f}`,m={url:`${a}//${l}${p}/`},v=Object.freeze({host:l,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ne(_i(m,r.config.emulator)&&_i(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=m,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,ks(l)?(Hh(`${a}//${l}${p}`),Gh("Auth",!0)):PM()}function Zb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function RM(n){const e=Zb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:zx(r.substr(a.length+1))}}else{const[a,l]=r.split(":");return{host:a,port:zx(l)}}}function zx(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function PM(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Y_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ys("not implemented")}_getIdTokenResponse(e){return ys("not implemented")}_linkToIdToken(e,t){return ys("not implemented")}_getReauthenticationResolver(e){return ys("not implemented")}}async function jM(n,e){return Yr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function OM(n,e){return cu(n,"POST","/v1/accounts:signInWithPassword",As(n,e))}async function DM(n,e){return Yr(n,"POST","/v1/accounts:sendOobCode",As(n,e))}async function MM(n,e){return DM(n,e)}/**
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
 */async function LM(n,e){return cu(n,"POST","/v1/accounts:signInWithEmailLink",As(n,e))}async function VM(n,e){return cu(n,"POST","/v1/accounts:signInWithEmailLink",As(n,e))}/**
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
 */class Gc extends Y_{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Gc(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Gc(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,t,"signInWithPassword",OM);case"emailLink":return LM(e,{email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Lh(e,r,"signUpPassword",jM);case"emailLink":return VM(e,{idToken:t,email:this._email,oobCode:this._password});default:Er(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Va(n,e){return cu(n,"POST","/v1/accounts:signInWithIdp",As(n,e))}/**
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
 */const FM="http://localhost";class To extends Y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new To(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Er("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=q_(t,["providerId","signInMethod"]);if(!r||!i)return null;const l=new To(r,i);return l.idToken=a.idToken||void 0,l.accessToken=a.accessToken||void 0,l.secret=a.secret,l.nonce=a.nonce,l.pendingToken=a.pendingToken||null,l}_getIdTokenResponse(e){const t=this.buildRequest();return Va(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Va(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Va(e,t)}buildRequest(){const e={requestUri:FM,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ja(t)}return e}}/**
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
 */function UM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zM(n){const e=cc(uc(n)).link,t=e?cc(uc(e)).deep_link_id:null,r=cc(uc(n)).deep_link_id;return(r?cc(uc(r)).link:null)||r||t||e||n}class X_{constructor(e){var t,r,i,a,l,f;const p=cc(uc(e)),m=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(r=p.oobCode)!==null&&r!==void 0?r:null,x=UM((i=p.mode)!==null&&i!==void 0?i:null);Ne(m&&v&&x,"argument-error"),this.apiKey=m,this.operation=x,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(l=p.lang)!==null&&l!==void 0?l:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=zM(e);try{return new X_(t)}catch{return null}}}/**
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
 */class il{constructor(){this.providerId=il.PROVIDER_ID}static credential(e,t){return Gc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=X_.parseLink(t);return Ne(r,"argument-error"),Gc._fromEmailAndCode(e,r.code,r.tenantId)}}il.PROVIDER_ID="password";il.EMAIL_PASSWORD_SIGN_IN_METHOD="password";il.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class eI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class uu extends eI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class si extends uu{constructor(){super("facebook.com")}static credential(e){return To._fromParams({providerId:si.PROVIDER_ID,signInMethod:si.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return si.credentialFromTaggedObject(e)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return si.credential(e.oauthAccessToken)}catch{return null}}}si.FACEBOOK_SIGN_IN_METHOD="facebook.com";si.PROVIDER_ID="facebook.com";/**
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
 */class ii extends uu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return To._fromParams({providerId:ii.PROVIDER_ID,signInMethod:ii.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ii.credentialFromTaggedObject(e)}static credentialFromError(e){return ii.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ii.credential(t,r)}catch{return null}}}ii.GOOGLE_SIGN_IN_METHOD="google.com";ii.PROVIDER_ID="google.com";/**
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
 */class oi extends uu{constructor(){super("github.com")}static credential(e){return To._fromParams({providerId:oi.PROVIDER_ID,signInMethod:oi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oi.credentialFromTaggedObject(e)}static credentialFromError(e){return oi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oi.credential(e.oauthAccessToken)}catch{return null}}}oi.GITHUB_SIGN_IN_METHOD="github.com";oi.PROVIDER_ID="github.com";/**
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
 */class ai extends uu{constructor(){super("twitter.com")}static credential(e,t){return To._fromParams({providerId:ai.PROVIDER_ID,signInMethod:ai.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ai.credentialFromTaggedObject(e)}static credentialFromError(e){return ai.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ai.credential(t,r)}catch{return null}}}ai.TWITTER_SIGN_IN_METHOD="twitter.com";ai.PROVIDER_ID="twitter.com";/**
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
 */async function BM(n,e){return cu(n,"POST","/v1/accounts:signUp",As(n,e))}/**
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
 */class bo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await yr._fromIdTokenResponse(e,r,i),l=Bx(r);return new bo({user:a,providerId:l,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Bx(r);return new bo({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Bx(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Vh extends Qr{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Vh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Vh(e,t,r,i)}}function tI(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Vh._fromErrorAndOperation(n,a,e,r):a})}async function $M(n,e,t=!1){const r=await Ga(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return bo._forOperation(n,"link",r)}/**
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
 */async function WM(n,e,t=!1){const{auth:r}=n;if(bn(r.app))return Promise.reject(xs(r));const i="reauthenticate";try{const a=await Ga(n,tI(r,i,e,n),t);Ne(a.idToken,r,"internal-error");const l=K_(a.idToken);Ne(l,r,"internal-error");const{sub:f}=l;return Ne(n.uid===f,r,"user-mismatch"),bo._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&Er(r,"user-mismatch"),a}}/**
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
 */async function nI(n,e,t=!1){if(bn(n.app))return Promise.reject(xs(n));const r="signIn",i=await tI(n,r,e),a=await bo._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function qM(n,e){return nI(Ri(n),e)}/**
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
 */async function rI(n){const e=Ri(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function HM(n,e,t){const r=Ri(n);await Lh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",MM)}async function GM(n,e,t){if(bn(n.app))return Promise.reject(xs(n));const r=Ri(n),l=await Lh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",BM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&rI(n),p}),f=await bo._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(f.user),f}function KM(n,e,t){return bn(n.app)?Promise.reject(xs(n)):qM(it(n),il.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&rI(n),r})}/**
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
 */async function QM(n,e){return Yr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function YM(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=it(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},l=await Ga(r,QM(r.auth,a));r.displayName=l.displayName||null,r.photoURL=l.photoUrl||null;const f=r.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(l)}function XM(n,e,t,r){return it(n).onIdTokenChanged(e,t,r)}function JM(n,e,t){return it(n).beforeAuthStateChanged(e,t)}function ZM(n,e,t,r){return it(n).onAuthStateChanged(e,t,r)}function eL(n){return it(n).signOut()}const Fh="__sak";/**
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
 */class sI{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Fh,"1"),this.storage.removeItem(Fh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tL=1e3,nL=10;class iI extends sI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((l,f,p)=>{this.notifyListeners(l,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const l=this.storage.getItem(r);!t&&this.localCache[r]===l||this.notifyListeners(r,l)},a=this.storage.getItem(r);pM()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,nL):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}iI.type="LOCAL";const rL=iI;/**
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
 */class oI extends sI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}oI.type="SESSION";const aI=oI;/**
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
 */function sL(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class kf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new kf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,l=this.handlersMap[i];if(!l?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const f=Array.from(l).map(async m=>m(t.origin,a)),p=await sL(f);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}kf.receivers=[];/**
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
 */function J_(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,l;return new Promise((f,p)=>{const m=J_("",20);i.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(x){const E=x;if(E.data.eventId===m)switch(E.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:m,data:t},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
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
 */function $r(){return window}function oL(n){$r().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function lI(){return typeof $r().WorkerGlobalScope<"u"&&typeof $r().importScripts=="function"}async function aL(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lL(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function cL(){return lI()?self:null}/**
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
 */const cI="firebaseLocalStorageDb",uL=1,Uh="firebaseLocalStorage",uI="fbase_key";class du{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Sf(n,e){return n.transaction([Uh],e?"readwrite":"readonly").objectStore(Uh)}function dL(){const n=indexedDB.deleteDatabase(cI);return new du(n).toPromise()}function Tg(){const n=indexedDB.open(cI,uL);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Uh,{keyPath:uI})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Uh)?e(r):(r.close(),await dL(),e(await Tg()))})})}async function $x(n,e,t){const r=Sf(n,!0).put({[uI]:e,value:t});return new du(r).toPromise()}async function hL(n,e){const t=Sf(n,!1).get(e),r=await new du(t).toPromise();return r===void 0?null:r.value}function Wx(n,e){const t=Sf(n,!0).delete(e);return new du(t).toPromise()}const fL=800,pL=3;class dI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Tg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>pL)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=kf._getInstance(cL()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await aL(),!this.activeServiceWorker)return;this.sender=new iL(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Tg();return await $x(e,Fh,"1"),await Wx(e,Fh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>$x(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>hL(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Wx(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Sf(i,!1).getAll();return new du(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),fL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dI.type="LOCAL";const mL=dI;new lu(3e4,6e4);/**
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
 */function gL(n,e){return e?vs(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Z_ extends Y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Va(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Va(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Va(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function _L(n){return nI(n.auth,new Z_(n),n.bypassAuthState)}function yL(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),WM(t,new Z_(n),n.bypassAuthState)}async function vL(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),$M(t,new Z_(n),n.bypassAuthState)}/**
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
 */class hI{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:l,type:f}=e;if(l){this.reject(l);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return _L;case"linkViaPopup":case"linkViaRedirect":return vL;case"reauthViaPopup":case"reauthViaRedirect":return yL;default:Er(this.auth,"internal-error")}}resolve(e){Ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ns(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const wL=new lu(2e3,1e4);class Sa extends hI{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Sa.currentPopupAction&&Sa.currentPopupAction.cancel(),Sa.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){Ns(this.filter.length===1,"Popup operations only handle one event");const e=J_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Br(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Br(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sa.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Br(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wL.get())};e()}}Sa.currentPopupAction=null;/**
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
 */const xL="pendingRedirect",nh=new Map;class EL extends hI{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=nh.get(this.auth._key());if(!e){try{const r=await TL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}nh.set(this.auth._key(),e)}return this.bypassAuthState||nh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TL(n,e){const t=CL(e),r=IL(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function bL(n,e){nh.set(n._key(),e)}function IL(n){return vs(n._redirectPersistence)}function CL(n){return th(xL,n.config.apiKey,n.name)}async function NL(n,e,t=!1){if(bn(n.app))return Promise.reject(xs(n));const r=Ri(n),i=gL(r,e),l=await new EL(r,i,t).execute();return l&&!t&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
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
 */const kL=600*1e3;class SL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AL(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!fI(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Br(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kL&&this.cachedEventUids.clear(),this.cachedEventUids.has(qx(e))}saveEventToCache(e){this.cachedEventUids.add(qx(e)),this.lastProcessedEventTime=Date.now()}}function qx(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function fI({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function AL(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fI(n);default:return!1}}/**
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
 */async function RL(n,e={}){return Yr(n,"GET","/v1/projects",e)}/**
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
 */const PL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,jL=/^https?/;async function OL(n){if(n.config.emulator)return;const{authorizedDomains:e}=await RL(n);for(const t of e)try{if(DL(t))return}catch{}Er(n,"unauthorized-domain")}function DL(n){const e=xg(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const l=new URL(n);return l.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&l.hostname===r}if(!jL.test(t))return!1;if(PL.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ML=new lu(3e4,6e4);function Hx(){const n=$r().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function LL(n){return new Promise((e,t)=>{var r,i,a;function l(){Hx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hx(),t(Br(n,"network-request-failed"))},timeout:ML.get()})}if(!((i=(r=$r().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=$r().gapi)===null||a===void 0)&&a.load)l();else{const f=TM("iframefcb");return $r()[f]=()=>{gapi.load?l():t(Br(n,"network-request-failed"))},Xb(`${EM()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw rh=null,e})}let rh=null;function VL(n){return rh=rh||LL(n),rh}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const FL=new lu(5e3,15e3),UL="__/auth/iframe",zL="emulator/auth/iframe",BL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$L=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WL(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?G_(e,zL):`https://${n.config.authDomain}/${UL}`,r={apiKey:e.apiKey,appName:n.name,v:ki},i=$L.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Ja(r).slice(1)}`}async function qL(n){const e=await VL(n),t=$r().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:WL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BL,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const l=Br(n,"network-request-failed"),f=$r().setTimeout(()=>{a(l)},FL.get());function p(){$r().clearTimeout(f),i(r)}r.ping(p).then(p,()=>{a(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const HL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GL=500,KL=600,QL="_blank",YL="http://localhost";class Gx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XL(n,e,t,r=GL,i=KL){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const p=Object.assign(Object.assign({},HL),{width:r.toString(),height:i.toString(),top:a,left:l}),m=un().toLowerCase();t&&(f=Wb(m)?QL:t),Bb(m)&&(e=e||YL,p.scrollbars="yes");const v=Object.entries(p).reduce((E,[A,M])=>`${E}${A}=${M},`,"");if(fM(m)&&f!=="_self")return JL(e||"",f),new Gx(null);const x=window.open(e||"",f,v);Ne(x,n,"popup-blocked");try{x.focus()}catch{}return new Gx(x)}function JL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ZL="__/auth/handler",e6="emulator/auth/handler",t6=encodeURIComponent("fac");async function Kx(n,e,t,r,i,a){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const l={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ki,eventId:i};if(e instanceof eI){e.setDefaultLanguage(n.languageCode),l.providerId=e.providerId||"",Lm(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,x]of Object.entries({}))l[v]=x}if(e instanceof uu){const v=e.getScopes().filter(x=>x!=="");v.length>0&&(l.scopes=v.join(","))}n.tenantId&&(l.tid=n.tenantId);const f=l;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await n._getAppCheckToken(),m=p?`#${t6}=${encodeURIComponent(p)}`:"";return`${n6(n)}?${Ja(f).slice(1)}${m}`}function n6({config:n}){return n.emulator?G_(n,e6):`https://${n.authDomain}/${ZL}`}/**
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
 */const Am="webStorageSupport";class r6{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aI,this._completeRedirectFn=NL,this._overrideRedirectResult=bL}async _openPopup(e,t,r,i){var a;Ns((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const l=await Kx(e,t,r,xg(),i);return XL(e,l,J_())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Kx(e,t,r,xg(),i);return oL(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Ns(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qL(e),r=new SL(e);return t.register("authEvent",i=>(Ne(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Am,{type:Am},i=>{var a;const l=(a=i?.[0])===null||a===void 0?void 0:a[Am];l!==void 0&&t(!!l),Er(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OL(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qb()||$b()||Q_()}}const s6=r6;var Qx="@firebase/auth",Yx="1.10.8";/**
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
 */class i6{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function o6(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function a6(n){Wr(new xr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:l,authDomain:f}=r.options;Ne(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:l,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yb(n)},m=new vM(r,i,a,p);return SM(m,t),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Wr(new xr("auth-internal",e=>{const t=Ri(e.getProvider("auth").getImmediate());return(r=>new i6(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),zn(Qx,Yx,o6(n)),zn(Qx,Yx,"esm2017")}/**
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
 */const l6=300,c6=VE("authIdTokenMaxAge")||l6;let Xx=null;const u6=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>c6)return;const i=t?.token;Xx!==i&&(Xx=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function d6(n=Yc()){const e=Io(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kM(n,{popupRedirectResolver:s6,persistence:[mL,rL,aI]}),r=VE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const l=u6(a.toString());JM(t,l,()=>l(t.currentUser)),XM(t,f=>l(f))}}const i=ME("auth");return i&&AM(t,`http://${i}`),t}function h6(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}wM({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Br("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",h6().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});a6("Browser");var f6="firebase",p6="11.10.0";/**
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
 */zn(f6,p6,"app");/**
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
 */const pI="firebasestorage.googleapis.com",m6="storageBucket",g6=120*1e3,_6=600*1e3;/**
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
 */class Xr extends Qr{constructor(e,t,r=0){super(Rm(e),`Firebase Storage: ${t} (${Rm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Rm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Kr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Kr||(Kr={}));function Rm(n){return"storage/"+n}function y6(){const n="An unknown error occurred, please check the error payload for server response.";return new Xr(Kr.UNKNOWN,n)}function v6(){return new Xr(Kr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function w6(){return new Xr(Kr.CANCELED,"User canceled the upload/download.")}function x6(n){return new Xr(Kr.INVALID_URL,"Invalid URL '"+n+"'.")}function E6(n){return new Xr(Kr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Jx(n){return new Xr(Kr.INVALID_ARGUMENT,n)}function mI(){return new Xr(Kr.APP_DELETED,"The Firebase app was deleted.")}function T6(n){return new Xr(Kr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class vr{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=vr.makeFromUrl(e,t)}catch{return new vr(e,"")}if(r.path==="")return r;throw E6(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const l="(/(.*))?$",f=new RegExp("^gs://"+i+l,"i"),p={bucket:1,path:3};function m(G){G.path_=decodeURIComponent(G.path)}const v="v[A-Za-z0-9_]+",x=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",A=new RegExp(`^https?://${x}/${v}/b/${i}/o${E}`,"i"),M={bucket:1,path:3},U=t===pI?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",Q=new RegExp(`^https?://${U}/${i}/${L}`,"i"),ae=[{regex:f,indices:p,postModify:a},{regex:A,indices:M,postModify:m},{regex:Q,indices:{bucket:1,path:2},postModify:m}];for(let G=0;G<ae.length;G++){const ce=ae[G],me=ce.regex.exec(e);if(me){const O=me[ce.indices.bucket];let I=me[ce.indices.path];I||(I=""),r=new vr(O,I),ce.postModify(r);break}}if(r==null)throw x6(e);return r}}class b6{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function I6(n,e,t){let r=1,i=null,a=null,l=!1,f=0;function p(){return f===2}let m=!1;function v(...L){m||(m=!0,e.apply(null,L))}function x(L){i=setTimeout(()=>{i=null,n(A,p())},L)}function E(){a&&clearTimeout(a)}function A(L,...Q){if(m){E();return}if(L){E(),v.call(null,L,...Q);return}if(p()||l){E(),v.call(null,L,...Q);return}r<64&&(r*=2);let ae;f===1?(f=2,ae=0):ae=(r+Math.random())*1e3,x(ae)}let M=!1;function U(L){M||(M=!0,E(),!m&&(i!==null?(L||(f=2),clearTimeout(i),x(0)):L||(f=1)))}return x(0),a=setTimeout(()=>{l=!0,U(!0)},t),U}function C6(n){n(!1)}/**
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
 */function N6(n){return n!==void 0}function Zx(n,e,t,r){if(r<e)throw Jx(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Jx(`Invalid value for '${n}'. Expected ${t} or less.`)}function k6(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var zh;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(zh||(zh={}));/**
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
 */function S6(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||i||a}/**
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
 */class A6{constructor(e,t,r,i,a,l,f,p,m,v,x,E=!0,A=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=l,this.callback_=f,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=x,this.retry=E,this.isUsingEmulator=A,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((M,U)=>{this.resolve_=M,this.reject_=U,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new zd(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const l=f=>{const p=f.loaded,m=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&a.addUploadProgressListener(l),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(l),this.pendingConnection_=null;const f=a.getErrorCode()===zh.NO_ERROR,p=a.getStatus();if(!f||S6(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===zh.ABORT;r(!1,new zd(!1,null,v));return}const m=this.successCodes_.indexOf(p)!==-1;r(!0,new zd(m,a))})},t=(r,i)=>{const a=this.resolve_,l=this.reject_,f=i.connection;if(i.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());N6(p)?a(p):a()}catch(p){l(p)}else if(f!==null){const p=y6();p.serverResponse=f.getErrorText(),this.errorCallback_?l(this.errorCallback_(f,p)):l(p)}else if(i.canceled){const p=this.appDelete_?mI():w6();l(p)}else{const p=v6();l(p)}};this.canceled_?t(!1,new zd(!1,null,!0)):this.backoffId_=I6(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&C6(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zd{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function R6(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function P6(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function j6(n,e){e&&(n["X-Firebase-GMPID"]=e)}function O6(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function D6(n,e,t,r,i,a,l=!0,f=!1){const p=k6(n.urlParams),m=n.url+p,v=Object.assign({},n.headers);return j6(v,e),R6(v,t),P6(v,a),O6(v,r),new A6(m,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,l,f)}/**
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
 */function M6(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function L6(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Bh{constructor(e,t){this._service=e,t instanceof vr?this._location=t:this._location=vr.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Bh(e,t)}get root(){const e=new vr(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return L6(this._location.path)}get storage(){return this._service}get parent(){const e=M6(this._location.path);if(e===null)return null;const t=new vr(this._location.bucket,e);return new Bh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw T6(e)}}function eE(n,e){const t=e?.[m6];return t==null?null:vr.makeFromBucketSpec(t,n)}function V6(n,e,t,r={}){n.host=`${e}:${t}`;const i=ks(e);i&&(Hh(`https://${n.host}/b`),Gh("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:Ag(a,n.app.options.projectId))}class F6{constructor(e,t,r,i,a,l=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._isUsingEmulator=l,this._bucket=null,this._host=pI,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=g6,this._maxUploadRetryTime=_6,this._requests=new Set,i!=null?this._bucket=vr.makeFromBucketSpec(i,this._host):this._bucket=eE(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vr.makeFromBucketSpec(this._url,e):this._bucket=eE(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(bn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Bh(this,e)}_makeRequest(e,t,r,i,a=!0){if(this._deleted)return new b6(mI());{const l=D6(e,this._appId,r,i,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const tE="@firebase/storage",nE="0.13.14";/**
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
 */const gI="storage";function U6(n=Yc(),e){n=it(n);const r=Io(n,gI).getImmediate({identifier:e}),i=Sg("storage");return i&&z6(r,...i),r}function z6(n,e,t,r={}){V6(n,e,t,r)}function B6(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new F6(t,r,i,e,ki)}function $6(){Wr(new xr(gI,B6,"PUBLIC").setMultipleInstances(!0)),zn(tE,nE,""),zn(tE,nE,"esm2017")}$6();/**
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
 */const bg=new Map,_I={activated:!1,tokenObservers:[]},W6={initialized:!1,enabled:!1};function Ft(n){return bg.get(n)||Object.assign({},_I)}function q6(n,e){return bg.set(n,e),bg.get(n)}function Af(){return W6}/**
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
 */const yI="https://content-firebaseappcheck.googleapis.com/v1",H6="exchangeRecaptchaV3Token",G6="exchangeDebugToken",rE={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:960*1e3},K6=1440*60*1e3;/**
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
 */class Q6{constructor(e,t,r,i,a){if(this.operation=e,this.retryPolicy=t,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=a,this.pending=null,this.nextErrorWaitInterval=i,i>a)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Es,this.pending.promise.catch(t=>{}),await Y6(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Es,this.pending.promise.catch(t=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(t){this.retryPolicy(t)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const t=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),t}}}function Y6(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */const X6={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Sn=new Xa("appCheck","AppCheck",X6);/**
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
 */function sE(n=!1){var e;return n?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function ey(n){if(!Ft(n).activated)throw Sn.create("use-before-activation",{appName:n.name})}function vI(n){const e=Math.round(n/1e3),t=Math.floor(e/(3600*24)),r=Math.floor((e-t*3600*24)/3600),i=Math.floor((e-t*3600*24-r*3600)/60),a=e-t*3600*24-r*3600-i*60;let l="";return t&&(l+=Bd(t)+"d:"),r&&(l+=Bd(r)+"h:"),l+=Bd(i)+"m:"+Bd(a)+"s",l}function Bd(n){return n===0?"00":n>=10?n.toString():"0"+n}/**
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
 */async function ty({url:n,body:e},t){const r={"Content-Type":"application/json"},i=t.getImmediate({optional:!0});if(i){const x=await i.getHeartbeatsHeader();x&&(r["X-Firebase-Client"]=x)}const a={method:"POST",body:JSON.stringify(e),headers:r};let l;try{l=await fetch(n,a)}catch(x){throw Sn.create("fetch-network-error",{originalErrorMessage:x?.message})}if(l.status!==200)throw Sn.create("fetch-status-error",{httpStatus:l.status});let f;try{f=await l.json()}catch(x){throw Sn.create("fetch-parse-error",{originalErrorMessage:x?.message})}const p=f.ttl.match(/^([\d.]+)(s)$/);if(!p||!p[2]||isNaN(Number(p[1])))throw Sn.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${f.ttl}`});const m=Number(p[1])*1e3,v=Date.now();return{token:f.token,expireTimeMillis:v+m,issuedAtTimeMillis:v}}function J6(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${yI}/projects/${t}/apps/${r}:${H6}?key=${i}`,body:{recaptcha_v3_token:e}}}function wI(n,e){const{projectId:t,appId:r,apiKey:i}=n.options;return{url:`${yI}/projects/${t}/apps/${r}:${G6}?key=${i}`,body:{debug_token:e}}}/**
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
 */const Z6="firebase-app-check-database",eV=1,Kc="firebase-app-check-store",xI="debug-token";let $d=null;function EI(){return $d||($d=new Promise((n,e)=>{try{const t=indexedDB.open(Z6,eV);t.onsuccess=r=>{n(r.target.result)},t.onerror=r=>{var i;e(Sn.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},t.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(Kc,{keyPath:"compositeKey"})}}}catch(t){e(Sn.create("storage-open",{originalErrorMessage:t?.message}))}}),$d)}function tV(n){return bI(II(n))}function nV(n,e){return TI(II(n),e)}function rV(n){return TI(xI,n)}function sV(){return bI(xI)}async function TI(n,e){const r=(await EI()).transaction(Kc,"readwrite"),a=r.objectStore(Kc).put({compositeKey:n,value:e});return new Promise((l,f)=>{a.onsuccess=p=>{l()},r.onerror=p=>{var m;f(Sn.create("storage-set",{originalErrorMessage:(m=p.target.error)===null||m===void 0?void 0:m.message}))}})}async function bI(n){const t=(await EI()).transaction(Kc,"readonly"),i=t.objectStore(Kc).get(n);return new Promise((a,l)=>{i.onsuccess=f=>{const p=f.target.result;a(p?p.value:void 0)},t.onerror=f=>{var p;l(Sn.create("storage-get",{originalErrorMessage:(p=f.target.error)===null||p===void 0?void 0:p.message}))}})}function II(n){return`${n.options.appId}-${n.name}`}/**
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
 */const ui=new Qc("@firebase/app-check");/**
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
 */async function iV(n){if(Pg()){let e;try{e=await tV(n)}catch(t){ui.warn(`Failed to read token from IndexedDB. Error: ${t}`)}return e}}function Pm(n,e){return Pg()?nV(n,e).catch(t=>{ui.warn(`Failed to write token to IndexedDB. Error: ${t}`)}):Promise.resolve()}async function oV(){let n;try{n=await sV()}catch{}if(n)return n;{const e=crypto.randomUUID();return rV(e).catch(t=>ui.warn(`Failed to persist debug token to IndexedDB. Error: ${t}`)),e}}/**
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
 */function ny(){return Af().enabled}async function ry(){const n=Af();if(n.enabled&&n.token)return n.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function aV(){const n=DE(),e=Af();if(e.initialized=!0,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&n.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const t=new Es;e.token=t,typeof n.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?t.resolve(n.FIREBASE_APPCHECK_DEBUG_TOKEN):t.resolve(oV())}/**
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
 */const lV={error:"UNKNOWN_ERROR"};function cV(n){return Wh.encodeString(JSON.stringify(n),!1)}async function Ig(n,e=!1,t=!1){const r=n.app;ey(r);const i=Ft(r);let a=i.token,l;if(a&&!Aa(a)&&(i.token=void 0,a=void 0),!a){const m=await i.cachedTokenPromise;m&&(Aa(m)?a=m:await Pm(r,void 0))}if(!e&&a&&Aa(a))return{token:a.token};let f=!1;if(ny())try{i.exchangeTokenPromise||(i.exchangeTokenPromise=ty(wI(r,await ry()),n.heartbeatServiceProvider).finally(()=>{i.exchangeTokenPromise=void 0}),f=!0);const m=await i.exchangeTokenPromise;return await Pm(r,m),i.token=m,{token:m.token}}catch(m){return m.code==="appCheck/throttled"||m.code==="appCheck/initial-throttle"?ui.warn(m.message):t&&ui.error(m),jm(m)}try{i.exchangeTokenPromise||(i.exchangeTokenPromise=i.provider.getToken().finally(()=>{i.exchangeTokenPromise=void 0}),f=!0),a=await Ft(r).exchangeTokenPromise}catch(m){m.code==="appCheck/throttled"||m.code==="appCheck/initial-throttle"?ui.warn(m.message):t&&ui.error(m),l=m}let p;return a?l?Aa(a)?p={token:a.token,internalError:l}:p=jm(l):(p={token:a.token},i.token=a,await Pm(r,a)):p=jm(l),f&&kI(r,p),p}async function uV(n){const e=n.app;ey(e);const{provider:t}=Ft(e);if(ny()){const r=await ry(),{token:i}=await ty(wI(e,r),n.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await t.getToken();return{token:r}}}function CI(n,e,t,r){const{app:i}=n,a=Ft(i),l={next:t,error:r,type:e};if(a.tokenObservers=[...a.tokenObservers,l],a.token&&Aa(a.token)){const f=a.token;Promise.resolve().then(()=>{t({token:f.token}),iE(n)}).catch(()=>{})}a.cachedTokenPromise.then(()=>iE(n))}function NI(n,e){const t=Ft(n),r=t.tokenObservers.filter(i=>i.next!==e);r.length===0&&t.tokenRefresher&&t.tokenRefresher.isRunning()&&t.tokenRefresher.stop(),t.tokenObservers=r}function iE(n){const{app:e}=n,t=Ft(e);let r=t.tokenRefresher;r||(r=dV(n),t.tokenRefresher=r),!r.isRunning()&&t.isTokenAutoRefreshEnabled&&r.start()}function dV(n){const{app:e}=n;return new Q6(async()=>{const t=Ft(e);let r;if(t.token?r=await Ig(n,!0):r=await Ig(n),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const t=Ft(e);if(t.token){let r=t.token.issuedAtTimeMillis+(t.token.expireTimeMillis-t.token.issuedAtTimeMillis)*.5+3e5;const i=t.token.expireTimeMillis-300*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},rE.RETRIAL_MIN_WAIT,rE.RETRIAL_MAX_WAIT)}function kI(n,e){const t=Ft(n).tokenObservers;for(const r of t)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Aa(n){return n.expireTimeMillis-Date.now()>0}function jm(n){return{token:cV(lV),error:n}}/**
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
 */class hV{constructor(e,t){this.app=e,this.heartbeatServiceProvider=t}_delete(){const{tokenObservers:e}=Ft(this.app);for(const t of e)NI(this.app,t.next);return Promise.resolve()}}function fV(n,e){return new hV(n,e)}function pV(n){return{getToken:e=>Ig(n,e),getLimitedUseToken:()=>uV(n),addTokenListener:e=>CI(n,"INTERNAL",e),removeTokenListener:e=>NI(n.app,e)}}const mV="@firebase/app-check",gV="0.10.1";/**
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
 */const _V="https://www.google.com/recaptcha/api.js";function yV(n,e){const t=new Es,r=Ft(n);r.reCAPTCHAState={initialized:t};const i=vV(n),a=sE(!1);return a?oE(n,e,a,i,t):EV(()=>{const l=sE(!1);if(!l)throw new Error("no recaptcha");oE(n,e,l,i,t)}),t.promise}function oE(n,e,t,r,i){t.ready(()=>{xV(n,e,t,r),i.resolve(t)})}function vV(n){const e=`fire_app_check_${n.name}`,t=document.createElement("div");return t.id=e,t.style.display="none",document.body.appendChild(t),e}async function wV(n){ey(n);const t=await Ft(n).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const a=Ft(n).reCAPTCHAState;t.ready(()=>{r(t.execute(a.widgetId,{action:"fire_app_check"}))})})}function xV(n,e,t,r){const i=t.render(r,{sitekey:e,size:"invisible",callback:()=>{Ft(n).reCAPTCHAState.succeeded=!0},"error-callback":()=>{Ft(n).reCAPTCHAState.succeeded=!1}}),a=Ft(n);a.reCAPTCHAState=Object.assign(Object.assign({},a.reCAPTCHAState),{widgetId:i})}function EV(n){const e=document.createElement("script");e.src=_V,e.onload=n,document.head.appendChild(e)}/**
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
 */class sy{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,t,r;bV(this._throttleData);const i=await wV(this._app).catch(l=>{throw Sn.create("recaptcha-error")});if(!(!((e=Ft(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw Sn.create("recaptcha-error");let a;try{a=await ty(J6(this._app,i),this._heartbeatServiceProvider)}catch(l){throw!((t=l.code)===null||t===void 0)&&t.includes("fetch-status-error")?(this._throttleData=TV(Number((r=l.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),Sn.create("initial-throttle",{time:vI(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):l}return this._throttleData=null,a}initialize(e){this._app=e,this._heartbeatServiceProvider=Io(e,"heartbeat"),yV(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof sy?this._siteKey===e._siteKey:!1}}function TV(n,e){if(n===404||n===403)return{backoffCount:1,allowRequestsAfter:Date.now()+K6,httpStatus:n};{const t=e?e.backoffCount:0,r=fA(t,1e3,2);return{backoffCount:t+1,allowRequestsAfter:Date.now()+r,httpStatus:n}}}function bV(n){if(n&&Date.now()-n.allowRequestsAfter<=0)throw Sn.create("throttled",{time:vI(n.allowRequestsAfter-Date.now()),httpStatus:n.httpStatus})}/**
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
 */function IV(n=Yc(),e){n=it(n);const t=Io(n,"app-check");if(Af().initialized||aV(),ny()&&ry().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(a.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&a.provider.isEqual(e.provider))return i;throw Sn.create("already-initialized",{appName:n.name})}const r=t.initialize({options:e});return CV(n,e.provider,e.isTokenAutoRefreshEnabled),Ft(n).isTokenAutoRefreshEnabled&&CI(r,"INTERNAL",()=>{}),r}function CV(n,e,t=!1){const r=q6(n,Object.assign({},_I));r.activated=!0,r.provider=e,r.cachedTokenPromise=iV(n).then(i=>(i&&Aa(i)&&(r.token=i,kI(n,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=t&&n.automaticDataCollectionEnabled,!n.automaticDataCollectionEnabled&&t&&ui.warn("`isTokenAutoRefreshEnabled` is true but `automaticDataCollectionEnabled` was set to false during `initializeApp()`. This blocks automatic token refresh."),r.provider.initialize(n)}const NV="app-check",aE="app-check-internal";function kV(){Wr(new xr(NV,n=>{const e=n.getProvider("app").getImmediate(),t=n.getProvider("heartbeat");return fV(e,t)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((n,e,t)=>{n.getProvider(aE).initialize()})),Wr(new xr(aE,n=>{const e=n.getProvider("app-check").getImmediate();return pV(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),zn(mV,gV)}kV();const SV={apiKey:"AIzaSyBwptsaCYLtLGdKIh1ut84-FZnt8OiToYo",authDomain:"groupby-me.firebaseapp.com",databaseURL:"https://groupby-me-default-rtdb.firebaseio.com/",projectId:"groupby-me",storageBucket:"groupby-me.firebasestorage.app",messagingSenderId:"106122999914",appId:"1:106122999914:web:a7ad014f757346abb93213"},hu=$E(SV),Cc=d6(hu),Wd=yj(hu);U6(hu);const ac=B4(hu);let lE;typeof window<"u"&&!lE&&(lE=IV(hu,{provider:new sy("6Ld25xgsAAAAAOIkK9dXA48fiJCUR0fPxwyBqT4e"),isTokenAutoRefreshEnabled:!0}));function Om({className:n,type:e,...t}){return d.jsx("input",{type:e,"data-slot":"input",className:kg("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...t})}function AV({isOpen:n,onClose:e,onLoginSuccess:t}){const[r,i]=re.useState("login"),[a,l]=re.useState(""),[f,p]=re.useState(""),[m,v]=re.useState(""),[x,E]=re.useState(""),[A,M]=re.useState(""),[U,L]=re.useState(!1);if(!n)return null;const Q=()=>{E(""),M(""),p("")},ee=async G=>{G.preventDefault(),L(!0),M(""),E("");try{if(r==="login")await KM(Cc,a,f),t();else if(r==="register"){const ce=await GM(Cc,a,f);m&&await YM(ce.user,{displayName:m}),t()}else await HM(Cc,a),E("Enviamos um link para redefinir sua senha."),i("login")}catch(ce){M(ce?.message||"Não foi possível concluir a ação. Tente novamente.")}finally{L(!1)}},ae={login:"Entrar",register:"Criar conta",reset:"Recuperar senha"};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative",children:[d.jsx("button",{onClick:()=>{e(),i("login"),l(""),p(""),v(""),Q()},className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700","aria-label":"Fechar",children:"X"}),d.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-6",children:ae[r]}),d.jsxs("form",{className:"space-y-4",onSubmit:ee,children:[r==="register"&&d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"Nome"}),d.jsx(Om,{type:"text",placeholder:"Seu nome",value:m,onChange:G=>v(G.target.value),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"E-mail"}),d.jsx(Om,{type:"email",placeholder:"voce@email.com",value:a,onChange:G=>l(G.target.value),required:!0})]}),r!=="reset"&&d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"Senha"}),d.jsx(Om,{type:"password",placeholder:"Sua senha",value:f,onChange:G=>p(G.target.value),required:!0})]}),A&&d.jsx("p",{className:"text-sm text-red-600",children:A}),x&&d.jsx("p",{className:"text-sm text-green-600",children:x}),d.jsx(Ze,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700",disabled:U,children:U?"Processando...":ae[r]})]}),d.jsxs("div",{className:"mt-4 text-sm text-gray-600 flex items-center justify-between",children:[r!=="reset"?d.jsx("button",{type:"button",onClick:()=>{i("reset"),Q()},className:"hover:text-gray-900",children:"Esqueci minha senha"}):d.jsx("button",{type:"button",onClick:()=>{i("login"),Q()},className:"hover:text-gray-900",children:"Voltar para login"}),d.jsx("button",{type:"button",onClick:()=>{i(r==="login"?"register":"login"),Q()},className:"hover:text-gray-900",children:r==="login"?"Criar conta":"Já tenho conta"})]})]})})}function RV(){const[n,e]=re.useState(!1),[t,r]=re.useState(null),[i,a]=re.useState(!1),[l,f]=re.useState(!1),[p,m]=re.useState(null),[v,x]=re.useState(!1),[E,A]=re.useState(!1),[M,U]=re.useState(!1),[L,Q]=re.useState(!1),[ee,ae]=re.useState(!1),[G,ce]=re.useState(void 0),[me,O]=re.useState(!1),[I,k]=re.useState(!1),C=re.useRef({}),[P,R]=re.useState([]);re.useEffect(()=>{const B=ZM(Cc,V=>{V?(e(!0),r({id:V.uid,name:V.displayName||V.email||"Usuário",email:V.email,type:"user",points:0,level:1})):(e(!1),r(null))}),le=zw(Wd,"pins"),te=jj(le,V=>{const H=V.docs.map(he=>{const fe=he.data(),Oe=fe.createdAt?.toDate?fe.createdAt.toDate():new Date(fe.createdAt??Date.now());return{id:he.id,type:fe.type,name:fe.name,lat:fe.lat,lng:fe.lng,address:fe.address,createdBy:fe.createdBy,createdAt:Oe,avatar:fe.avatar,description:fe.description,businessInfo:fe.businessInfo,stats:fe.stats??{views:0,chatsStarted:0,messages:0},reported:!!fe.reported,moderationStatus:fe.moderationStatus}});R(H);const oe=new Set(H.map(he=>he.id));Object.entries(C.current).forEach(([he,fe])=>{oe.has(he)||(fe(),delete C.current[he])}),H.forEach(he=>{if(C.current[he.id])return;const fe=oc(ac,`pinStats/${he.id}`),Oe=jb(fe,be=>{const Ue=be.val();Ue&&R(Ye=>Ye.map(rt=>rt.id===he.id?{...rt,stats:{...rt.stats,...Ue}}:rt))});C.current[he.id]=Oe})},V=>{console.error("Error loading pins from Firestore",V)});return()=>{B(),te(),Object.values(C.current).forEach(V=>V()),C.current={}}},[]);const S=async B=>{m(B);try{const le=og(Wd,"pins",B.id);await Hw(le,{"stats.views":Kw(1)}),await Px(oc(ac,`pinStats/${B.id}/views`),te=>(te||0)+1)}catch(le){console.error("Failed to increment views",le)}n&&t?.id===B.createdBy?O(!0):B.type==="business"||B.type==="public"?x(!0):A(!0)},qe=B=>{if(p){const le=og(Wd,"pins",p.id);Hw(le,{"stats.chatsStarted":Kw(1)}).catch(te=>{console.error("Failed to increment chat counter",te)}),Px(oc(ac,`pinStats/${p.id}/chatsStarted`),te=>(te||0)+1).catch(te=>{console.error("Failed to increment chat counter (RTDB)",te)})}x(!1),A(!0),B&&ce(B)},He=B=>{const le=B.type!=="personal"&&B.businessInfo?{...B.businessInfo,products:(B.businessInfo.products||[]).filter(Boolean),services:(B.businessInfo.services||[]).filter(Boolean),categories:(B.businessInfo.categories||[]).filter(Boolean)}:null,te={type:B.type,name:B.name,lat:B.lat,lng:B.lng,address:B.address,createdBy:t?.id||"user",createdAt:new Date,description:B.description,stats:{views:0,chatsStarted:0,messages:0},reported:!1},V=le?{...te}:te,H=le?{...te,businessInfo:le,createdAt:Gw()}:{...te,createdAt:Gw()};Pj(zw(Wd,"pins"),H).then(oe=>{const he=le?{...te,businessInfo:le,createdAt:Rx()}:{...te,createdAt:Rx()};Ax(oc(ac,`pins/${oe.id}`),he).then(()=>Ax(oc(ac,`pinStats/${oe.id}`),V.stats).catch(fe=>{console.error("Failed to seed stats in Realtime Database",fe)})).catch(fe=>{console.error("Failed to create pin in Realtime Database",fe)}),f(!1)}).catch(oe=>{console.error("Failed to create pin in Firestore",oe)})},Ge=()=>k(!0),Pe=()=>{eL(Cc).catch(B=>{console.error("Failed to logout",B)})};return d.jsx("div",{className:"h-screen flex flex-col overflow-hidden bg-gray-900",children:me&&p?d.jsx(DS,{pin:p,onBack:()=>{O(!1),m(null)},onUpdate:B=>{R(P.map(le=>le.id===p.id?{...le,...B}:le))}}):d.jsxs(d.Fragment,{children:[d.jsx(IS,{isLoggedIn:n,currentUser:t,onMenuClick:()=>a(!0),onNotificationClick:()=>U(!0),onLogin:Ge,onLogout:Pe}),d.jsx("div",{className:"flex-1 relative",children:d.jsx(xS,{pins:P,onPinClick:S,onCreatePin:()=>f(!0),isLoggedIn:n})}),d.jsx(bS,{isOpen:i,onClose:()=>a(!1),isLoggedIn:n,currentUser:t,onOpenRewards:()=>{Q(!0),a(!1)},onOpenModeration:()=>{ae(!0),a(!1)}}),d.jsx(CS,{isOpen:l,onClose:()=>f(!1),onCreate:He,currentUser:t}),p&&d.jsx(NS,{isOpen:v,onClose:()=>{x(!1),m(null)},pin:p,onStartChat:qe,isLoggedIn:n,onLogin:Ge}),p&&d.jsx(SS,{isOpen:E,onClose:()=>{A(!1),m(null),ce(void 0)},pin:p,isLoggedIn:n,currentUser:t,onLogin:Ge,interest:G}),d.jsx(RS,{isOpen:M,onClose:()=>U(!1),currentUser:t}),d.jsx(PS,{isOpen:L,onClose:()=>Q(!1),currentUser:t}),d.jsx(jS,{isOpen:ee,onClose:()=>ae(!1),pins:P,onModerate:(B,le)=>{R(P.map(te=>te.id===B?{...te,moderationStatus:le,reported:!1}:te))}}),d.jsx(AV,{isOpen:I,onClose:()=>k(!1),onLoginSuccess:()=>k(!1)})]})})}BC.createRoot(document.getElementById("root")).render(d.jsx(RV,{}));
