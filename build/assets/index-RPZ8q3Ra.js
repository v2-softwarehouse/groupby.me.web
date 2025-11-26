function YI(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in n)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(n,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function XI(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Kp={exports:{}},Gl={},Qp={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv;function JI(){if(Gv)return Le;Gv=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function E(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O=Object.assign,U={};function M(L,H,ae){this.props=L,this.context=H,this.refs=U,this.updater=ae||R}M.prototype.isReactComponent={},M.prototype.setState=function(L,H){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,H,"setState")},M.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function Q(){}Q.prototype=M.prototype;function te(L,H,ae){this.props=L,this.context=H,this.refs=U,this.updater=ae||R}var le=te.prototype=new Q;le.constructor=te,O(le,M.prototype),le.isPureReactComponent=!0;var G=Array.isArray,J=Object.prototype.hasOwnProperty,fe={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function I(L,H,ae){var he,pe={},je=null,be=null;if(H!=null)for(he in H.ref!==void 0&&(be=H.ref),H.key!==void 0&&(je=""+H.key),H)J.call(H,he)&&!j.hasOwnProperty(he)&&(pe[he]=H[he]);var Ue=arguments.length-2;if(Ue===1)pe.children=ae;else if(1<Ue){for(var Ge=Array(Ue),tt=0;tt<Ue;tt++)Ge[tt]=arguments[tt+2];pe.children=Ge}if(L&&L.defaultProps)for(he in Ue=L.defaultProps,Ue)pe[he]===void 0&&(pe[he]=Ue[he]);return{$$typeof:n,type:L,key:je,ref:be,props:pe,_owner:fe.current}}function S(L,H){return{$$typeof:n,type:L.type,key:H,ref:L.ref,props:L.props,_owner:L._owner}}function C(L){return typeof L=="object"&&L!==null&&L.$$typeof===n}function A(L){var H={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ae){return H[ae]})}var V=/\/+/g;function k(L,H){return typeof L=="object"&&L!==null&&L.key!=null?A(""+L.key):H.toString(36)}function nt(L,H,ae,he,pe){var je=typeof L;(je==="undefined"||je==="boolean")&&(L=null);var be=!1;if(L===null)be=!0;else switch(je){case"string":case"number":be=!0;break;case"object":switch(L.$$typeof){case n:case e:be=!0}}if(be)return be=L,pe=pe(be),L=he===""?"."+k(be,0):he,G(pe)?(ae="",L!=null&&(ae=L.replace(V,"$&/")+"/"),nt(pe,H,ae,"",function(tt){return tt})):pe!=null&&(C(pe)&&(pe=S(pe,ae+(!pe.key||be&&be.key===pe.key?"":(""+pe.key).replace(V,"$&/")+"/")+L)),H.push(pe)),1;if(be=0,he=he===""?".":he+":",G(L))for(var Ue=0;Ue<L.length;Ue++){je=L[Ue];var Ge=he+k(je,Ue);be+=nt(je,H,ae,Ge,pe)}else if(Ge=E(L),typeof Ge=="function")for(L=Ge.call(L),Ue=0;!(je=L.next()).done;)je=je.value,Ge=he+k(je,Ue++),be+=nt(je,H,ae,Ge,pe);else if(je==="object")throw H=String(L),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.");return be}function ct(L,H,ae){if(L==null)return L;var he=[],pe=0;return nt(L,he,"","",function(je){return H.call(ae,je,pe++)}),he}function Je(L){if(L._status===-1){var H=L._result;H=H(),H.then(function(ae){(L._status===0||L._status===-1)&&(L._status=1,L._result=ae)},function(ae){(L._status===0||L._status===-1)&&(L._status=2,L._result=ae)}),L._status===-1&&(L._status=0,L._result=H)}if(L._status===1)return L._result.default;throw L._result}var Me={current:null},B={transition:null},ce={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:B,ReactCurrentOwner:fe};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Le.Children={map:ct,forEach:function(L,H,ae){ct(L,function(){H.apply(this,arguments)},ae)},count:function(L){var H=0;return ct(L,function(){H++}),H},toArray:function(L){return ct(L,function(H){return H})||[]},only:function(L){if(!C(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},Le.Component=M,Le.Fragment=t,Le.Profiler=i,Le.PureComponent=te,Le.StrictMode=r,Le.Suspense=p,Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,Le.act=ne,Le.cloneElement=function(L,H,ae){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var he=O({},L.props),pe=L.key,je=L.ref,be=L._owner;if(H!=null){if(H.ref!==void 0&&(je=H.ref,be=fe.current),H.key!==void 0&&(pe=""+H.key),L.type&&L.type.defaultProps)var Ue=L.type.defaultProps;for(Ge in H)J.call(H,Ge)&&!j.hasOwnProperty(Ge)&&(he[Ge]=H[Ge]===void 0&&Ue!==void 0?Ue[Ge]:H[Ge])}var Ge=arguments.length-2;if(Ge===1)he.children=ae;else if(1<Ge){Ue=Array(Ge);for(var tt=0;tt<Ge;tt++)Ue[tt]=arguments[tt+2];he.children=Ue}return{$$typeof:n,type:L.type,key:pe,ref:je,props:he,_owner:be}},Le.createContext=function(L){return L={$$typeof:c,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:a,_context:L},L.Consumer=L},Le.createElement=I,Le.createFactory=function(L){var H=I.bind(null,L);return H.type=L,H},Le.createRef=function(){return{current:null}},Le.forwardRef=function(L){return{$$typeof:f,render:L}},Le.isValidElement=C,Le.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Je}},Le.memo=function(L,H){return{$$typeof:g,type:L,compare:H===void 0?null:H}},Le.startTransition=function(L){var H=B.transition;B.transition={};try{L()}finally{B.transition=H}},Le.unstable_act=ne,Le.useCallback=function(L,H){return Me.current.useCallback(L,H)},Le.useContext=function(L){return Me.current.useContext(L)},Le.useDebugValue=function(){},Le.useDeferredValue=function(L){return Me.current.useDeferredValue(L)},Le.useEffect=function(L,H){return Me.current.useEffect(L,H)},Le.useId=function(){return Me.current.useId()},Le.useImperativeHandle=function(L,H,ae){return Me.current.useImperativeHandle(L,H,ae)},Le.useInsertionEffect=function(L,H){return Me.current.useInsertionEffect(L,H)},Le.useLayoutEffect=function(L,H){return Me.current.useLayoutEffect(L,H)},Le.useMemo=function(L,H){return Me.current.useMemo(L,H)},Le.useReducer=function(L,H,ae){return Me.current.useReducer(L,H,ae)},Le.useRef=function(L){return Me.current.useRef(L)},Le.useState=function(L){return Me.current.useState(L)},Le.useSyncExternalStore=function(L,H,ae){return Me.current.useSyncExternalStore(L,H,ae)},Le.useTransition=function(){return Me.current.useTransition()},Le.version="18.3.1",Le}var Kv;function fg(){return Kv||(Kv=1,Qp.exports=JI()),Qp.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function ZI(){if(Qv)return Gl;Qv=1;var n=fg(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(f,p,g){var v,x={},E=null,R=null;g!==void 0&&(E=""+g),p.key!==void 0&&(E=""+p.key),p.ref!==void 0&&(R=p.ref);for(v in p)r.call(p,v)&&!a.hasOwnProperty(v)&&(x[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)x[v]===void 0&&(x[v]=p[v]);return{$$typeof:e,type:f,key:E,ref:R,props:x,_owner:i.current}}return Gl.Fragment=t,Gl.jsx=c,Gl.jsxs=c,Gl}var Yv;function eC(){return Yv||(Yv=1,Kp.exports=ZI()),Kp.exports}var d=eC(),vd={},Yp={exports:{}},xn={},Xp={exports:{}},Jp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xv;function tC(){return Xv||(Xv=1,(function(n){function e(B,ce){var ne=B.length;B.push(ce);e:for(;0<ne;){var L=ne-1>>>1,H=B[L];if(0<i(H,ce))B[L]=ce,B[ne]=H,ne=L;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ce=B[0],ne=B.pop();if(ne!==ce){B[0]=ne;e:for(var L=0,H=B.length,ae=H>>>1;L<ae;){var he=2*(L+1)-1,pe=B[he],je=he+1,be=B[je];if(0>i(pe,ne))je<H&&0>i(be,pe)?(B[L]=be,B[je]=ne,L=je):(B[L]=pe,B[he]=ne,L=he);else if(je<H&&0>i(be,ne))B[L]=be,B[je]=ne,L=je;else break e}}return ce}function i(B,ce){var ne=B.sortIndex-ce.sortIndex;return ne!==0?ne:B.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,f=c.now();n.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,x=null,E=3,R=!1,O=!1,U=!1,M=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,te=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function le(B){for(var ce=t(g);ce!==null;){if(ce.callback===null)r(g);else if(ce.startTime<=B)r(g),ce.sortIndex=ce.expirationTime,e(p,ce);else break;ce=t(g)}}function G(B){if(U=!1,le(B),!O)if(t(p)!==null)O=!0,Je(J);else{var ce=t(g);ce!==null&&Me(G,ce.startTime-B)}}function J(B,ce){O=!1,U&&(U=!1,Q(I),I=-1),R=!0;var ne=E;try{for(le(ce),x=t(p);x!==null&&(!(x.expirationTime>ce)||B&&!A());){var L=x.callback;if(typeof L=="function"){x.callback=null,E=x.priorityLevel;var H=L(x.expirationTime<=ce);ce=n.unstable_now(),typeof H=="function"?x.callback=H:x===t(p)&&r(p),le(ce)}else r(p);x=t(p)}if(x!==null)var ae=!0;else{var he=t(g);he!==null&&Me(G,he.startTime-ce),ae=!1}return ae}finally{x=null,E=ne,R=!1}}var fe=!1,j=null,I=-1,S=5,C=-1;function A(){return!(n.unstable_now()-C<S)}function V(){if(j!==null){var B=n.unstable_now();C=B;var ce=!0;try{ce=j(!0,B)}finally{ce?k():(fe=!1,j=null)}}else fe=!1}var k;if(typeof te=="function")k=function(){te(V)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,ct=nt.port2;nt.port1.onmessage=V,k=function(){ct.postMessage(null)}}else k=function(){M(V,0)};function Je(B){j=B,fe||(fe=!0,k())}function Me(B,ce){I=M(function(){B(n.unstable_now())},ce)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){O||R||(O=!0,Je(J))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return E},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(B){switch(E){case 1:case 2:case 3:var ce=3;break;default:ce=E}var ne=E;E=ce;try{return B()}finally{E=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ce){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=E;E=B;try{return ce()}finally{E=ne}},n.unstable_scheduleCallback=function(B,ce,ne){var L=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?L+ne:L):ne=L,B){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=ne+H,B={id:v++,callback:ce,priorityLevel:B,startTime:ne,expirationTime:H,sortIndex:-1},ne>L?(B.sortIndex=ne,e(g,B),t(p)===null&&B===t(g)&&(U?(Q(I),I=-1):U=!0,Me(G,ne-L))):(B.sortIndex=H,e(p,B),O||R||(O=!0,Je(J))),B},n.unstable_shouldYield=A,n.unstable_wrapCallback=function(B){var ce=E;return function(){var ne=E;E=ce;try{return B.apply(this,arguments)}finally{E=ne}}}})(Jp)),Jp}var Jv;function nC(){return Jv||(Jv=1,Xp.exports=tC()),Xp.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function rC(){if(Zv)return xn;Zv=1;var n=fg(),e=nC();function t(s){for(var o="https://reactjs.org/docs/error-decoder.html?invariant="+s,l=1;l<arguments.length;l++)o+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+s+"; visit "+o+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,i={};function a(s,o){c(s,o),c(s+"Capture",o)}function c(s,o){for(i[s]=o,s=0;s<o.length;s++)r.add(o[s])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,g=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function E(s){return p.call(x,s)?!0:p.call(v,s)?!1:g.test(s)?x[s]=!0:(v[s]=!0,!1)}function R(s,o,l,h){if(l!==null&&l.type===0)return!1;switch(typeof o){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(s=s.toLowerCase().slice(0,5),s!=="data-"&&s!=="aria-");default:return!1}}function O(s,o,l,h){if(o===null||typeof o>"u"||R(s,o,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!o;case 4:return o===!1;case 5:return isNaN(o);case 6:return isNaN(o)||1>o}return!1}function U(s,o,l,h,m,y,T){this.acceptsBooleans=o===2||o===3||o===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=s,this.type=o,this.sanitizeURL=y,this.removeEmptyString=T}var M={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(s){M[s]=new U(s,0,!1,s,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(s){var o=s[0];M[o]=new U(o,1,!1,s[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(s){M[s]=new U(s,2,!1,s.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(s){M[s]=new U(s,2,!1,s,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(s){M[s]=new U(s,3,!1,s.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(s){M[s]=new U(s,3,!0,s,null,!1,!1)}),["capture","download"].forEach(function(s){M[s]=new U(s,4,!1,s,null,!1,!1)}),["cols","rows","size","span"].forEach(function(s){M[s]=new U(s,6,!1,s,null,!1,!1)}),["rowSpan","start"].forEach(function(s){M[s]=new U(s,5,!1,s.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function te(s){return s[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(s){var o=s.replace(Q,te);M[o]=new U(o,1,!1,s,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(s){var o=s.replace(Q,te);M[o]=new U(o,1,!1,s,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(s){var o=s.replace(Q,te);M[o]=new U(o,1,!1,s,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(s){M[s]=new U(s,1,!1,s.toLowerCase(),null,!1,!1)}),M.xlinkHref=new U("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(s){M[s]=new U(s,1,!1,s.toLowerCase(),null,!0,!0)});function le(s,o,l,h){var m=M.hasOwnProperty(o)?M[o]:null;(m!==null?m.type!==0:h||!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(O(o,l,m,h)&&(l=null),h||m===null?E(o)&&(l===null?s.removeAttribute(o):s.setAttribute(o,""+l)):m.mustUseProperty?s[m.propertyName]=l===null?m.type===3?!1:"":l:(o=m.attributeName,h=m.attributeNamespace,l===null?s.removeAttribute(o):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?s.setAttributeNS(h,o,l):s.setAttribute(o,l))))}var G=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,J=Symbol.for("react.element"),fe=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),A=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),B=Symbol.iterator;function ce(s){return s===null||typeof s!="object"?null:(s=B&&s[B]||s["@@iterator"],typeof s=="function"?s:null)}var ne=Object.assign,L;function H(s){if(L===void 0)try{throw Error()}catch(l){var o=l.stack.trim().match(/\n( *(at )?)/);L=o&&o[1]||""}return`
`+L+s}var ae=!1;function he(s,o){if(!s||ae)return"";ae=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(o)if(o=function(){throw Error()},Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(W){var h=W}Reflect.construct(s,[],o)}else{try{o.call()}catch(W){h=W}s.call(o.prototype)}else{try{throw Error()}catch(W){h=W}s()}}catch(W){if(W&&h&&typeof W.stack=="string"){for(var m=W.stack.split(`
`),y=h.stack.split(`
`),T=m.length-1,N=y.length-1;1<=T&&0<=N&&m[T]!==y[N];)N--;for(;1<=T&&0<=N;T--,N--)if(m[T]!==y[N]){if(T!==1||N!==1)do if(T--,N--,0>N||m[T]!==y[N]){var P=`
`+m[T].replace(" at new "," at ");return s.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",s.displayName)),P}while(1<=T&&0<=N);break}}}finally{ae=!1,Error.prepareStackTrace=l}return(s=s?s.displayName||s.name:"")?H(s):""}function pe(s){switch(s.tag){case 5:return H(s.type);case 16:return H("Lazy");case 13:return H("Suspense");case 19:return H("SuspenseList");case 0:case 2:case 15:return s=he(s.type,!1),s;case 11:return s=he(s.type.render,!1),s;case 1:return s=he(s.type,!0),s;default:return""}}function je(s){if(s==null)return null;if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s;switch(s){case j:return"Fragment";case fe:return"Portal";case S:return"Profiler";case I:return"StrictMode";case k:return"Suspense";case nt:return"SuspenseList"}if(typeof s=="object")switch(s.$$typeof){case A:return(s.displayName||"Context")+".Consumer";case C:return(s._context.displayName||"Context")+".Provider";case V:var o=s.render;return s=s.displayName,s||(s=o.displayName||o.name||"",s=s!==""?"ForwardRef("+s+")":"ForwardRef"),s;case ct:return o=s.displayName||null,o!==null?o:je(s.type)||"Memo";case Je:o=s._payload,s=s._init;try{return je(s(o))}catch{}}return null}function be(s){var o=s.type;switch(s.tag){case 24:return"Cache";case 9:return(o.displayName||"Context")+".Consumer";case 10:return(o._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return s=o.render,s=s.displayName||s.name||"",o.displayName||(s!==""?"ForwardRef("+s+")":"ForwardRef");case 7:return"Fragment";case 5:return o;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(o);case 8:return o===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o}return null}function Ue(s){switch(typeof s){case"boolean":case"number":case"string":case"undefined":return s;case"object":return s;default:return""}}function Ge(s){var o=s.type;return(s=s.nodeName)&&s.toLowerCase()==="input"&&(o==="checkbox"||o==="radio")}function tt(s){var o=Ge(s)?"checked":"value",l=Object.getOwnPropertyDescriptor(s.constructor.prototype,o),h=""+s[o];if(!s.hasOwnProperty(o)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,y=l.set;return Object.defineProperty(s,o,{configurable:!0,get:function(){return m.call(this)},set:function(T){h=""+T,y.call(this,T)}}),Object.defineProperty(s,o,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(T){h=""+T},stopTracking:function(){s._valueTracker=null,delete s[o]}}}}function Rn(s){s._valueTracker||(s._valueTracker=tt(s))}function Xn(s){if(!s)return!1;var o=s._valueTracker;if(!o)return!0;var l=o.getValue(),h="";return s&&(h=Ge(s)?s.checked?"true":"false":s.value),s=h,s!==l?(o.setValue(s),!0):!1}function Ns(s){if(s=s||(typeof document<"u"?document:void 0),typeof s>"u")return null;try{return s.activeElement||s.body}catch{return s.body}}function Si(s,o){var l=o.checked;return ne({},o,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??s._wrapperState.initialChecked})}function Io(s,o){var l=o.defaultValue==null?"":o.defaultValue,h=o.checked!=null?o.checked:o.defaultChecked;l=Ue(o.value!=null?o.value:l),s._wrapperState={initialChecked:h,initialValue:l,controlled:o.type==="checkbox"||o.type==="radio"?o.checked!=null:o.value!=null}}function Za(s,o){o=o.checked,o!=null&&le(s,"checked",o,!1)}function el(s,o){Za(s,o);var l=Ue(o.value),h=o.type;if(l!=null)h==="number"?(l===0&&s.value===""||s.value!=l)&&(s.value=""+l):s.value!==""+l&&(s.value=""+l);else if(h==="submit"||h==="reset"){s.removeAttribute("value");return}o.hasOwnProperty("value")?Co(s,o.type,l):o.hasOwnProperty("defaultValue")&&Co(s,o.type,Ue(o.defaultValue)),o.checked==null&&o.defaultChecked!=null&&(s.defaultChecked=!!o.defaultChecked)}function su(s,o,l){if(o.hasOwnProperty("value")||o.hasOwnProperty("defaultValue")){var h=o.type;if(!(h!=="submit"&&h!=="reset"||o.value!==void 0&&o.value!==null))return;o=""+s._wrapperState.initialValue,l||o===s.value||(s.value=o),s.defaultValue=o}l=s.name,l!==""&&(s.name=""),s.defaultChecked=!!s._wrapperState.initialChecked,l!==""&&(s.name=l)}function Co(s,o,l){(o!=="number"||Ns(s.ownerDocument)!==s)&&(l==null?s.defaultValue=""+s._wrapperState.initialValue:s.defaultValue!==""+l&&(s.defaultValue=""+l))}var Kr=Array.isArray;function Qr(s,o,l,h){if(s=s.options,o){o={};for(var m=0;m<l.length;m++)o["$"+l[m]]=!0;for(l=0;l<s.length;l++)m=o.hasOwnProperty("$"+s[l].value),s[l].selected!==m&&(s[l].selected=m),m&&h&&(s[l].defaultSelected=!0)}else{for(l=""+Ue(l),o=null,m=0;m<s.length;m++){if(s[m].value===l){s[m].selected=!0,h&&(s[m].defaultSelected=!0);return}o!==null||s[m].disabled||(o=s[m])}o!==null&&(o.selected=!0)}}function tl(s,o){if(o.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},o,{value:void 0,defaultValue:void 0,children:""+s._wrapperState.initialValue})}function No(s,o){var l=o.value;if(l==null){if(l=o.children,o=o.defaultValue,l!=null){if(o!=null)throw Error(t(92));if(Kr(l)){if(1<l.length)throw Error(t(93));l=l[0]}o=l}o==null&&(o=""),l=o}s._wrapperState={initialValue:Ue(l)}}function So(s,o){var l=Ue(o.value),h=Ue(o.defaultValue);l!=null&&(l=""+l,l!==s.value&&(s.value=l),o.defaultValue==null&&s.defaultValue!==l&&(s.defaultValue=l)),h!=null&&(s.defaultValue=""+h)}function nl(s){var o=s.textContent;o===s._wrapperState.initialValue&&o!==""&&o!==null&&(s.value=o)}function kt(s){switch(s){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Rt(s,o){return s==null||s==="http://www.w3.org/1999/xhtml"?kt(o):s==="http://www.w3.org/2000/svg"&&o==="foreignObject"?"http://www.w3.org/1999/xhtml":s}var Yr,rl=(function(s){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(o,l,h,m){MSApp.execUnsafeLocalFunction(function(){return s(o,l,h,m)})}:s})(function(s,o){if(s.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in s)s.innerHTML=o;else{for(Yr=Yr||document.createElement("div"),Yr.innerHTML="<svg>"+o.valueOf().toString()+"</svg>",o=Yr.firstChild;s.firstChild;)s.removeChild(s.firstChild);for(;o.firstChild;)s.appendChild(o.firstChild)}});function Ss(s,o){if(o){var l=s.firstChild;if(l&&l===s.lastChild&&l.nodeType===3){l.nodeValue=o;return}}s.textContent=o}var ki={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ri=["Webkit","ms","Moz","O"];Object.keys(ki).forEach(function(s){Ri.forEach(function(o){o=o+s.charAt(0).toUpperCase()+s.substring(1),ki[o]=ki[s]})});function sl(s,o,l){return o==null||typeof o=="boolean"||o===""?"":l||typeof o!="number"||o===0||ki.hasOwnProperty(s)&&ki[s]?(""+o).trim():o+"px"}function il(s,o){s=s.style;for(var l in o)if(o.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=sl(l,o[l],h);l==="float"&&(l="cssFloat"),h?s.setProperty(l,m):s[l]=m}}var ol=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function al(s,o){if(o){if(ol[s]&&(o.children!=null||o.dangerouslySetInnerHTML!=null))throw Error(t(137,s));if(o.dangerouslySetInnerHTML!=null){if(o.children!=null)throw Error(t(60));if(typeof o.dangerouslySetInnerHTML!="object"||!("__html"in o.dangerouslySetInnerHTML))throw Error(t(61))}if(o.style!=null&&typeof o.style!="object")throw Error(t(62))}}function ll(s,o){if(s.indexOf("-")===-1)return typeof o.is=="string";switch(s){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ai=null;function ko(s){return s=s.target||s.srcElement||window,s.correspondingUseElement&&(s=s.correspondingUseElement),s.nodeType===3?s.parentNode:s}var Ro=null,Fn=null,xr=null;function Ao(s){if(s=Pl(s)){if(typeof Ro!="function")throw Error(t(280));var o=s.stateNode;o&&(o=Ou(o),Ro(s.stateNode,s.type,o))}}function Er(s){Fn?xr?xr.push(s):xr=[s]:Fn=s}function cl(){if(Fn){var s=Fn,o=xr;if(xr=Fn=null,Ao(s),o)for(s=0;s<o.length;s++)Ao(o[s])}}function Pi(s,o){return s(o)}function ul(){}var Xr=!1;function dl(s,o,l){if(Xr)return s(o,l);Xr=!0;try{return Pi(s,o,l)}finally{Xr=!1,(Fn!==null||xr!==null)&&(ul(),cl())}}function xt(s,o){var l=s.stateNode;if(l===null)return null;var h=Ou(l);if(h===null)return null;l=h[o];e:switch(o){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(s=s.type,h=!(s==="button"||s==="input"||s==="select"||s==="textarea")),s=!h;break e;default:s=!1}if(s)return null;if(l&&typeof l!="function")throw Error(t(231,o,typeof l));return l}var Po=!1;if(f)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){Po=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{Po=!1}function ji(s,o,l,h,m,y,T,N,P){var W=Array.prototype.slice.call(arguments,3);try{o.apply(l,W)}catch(Z){this.onError(Z)}}var Oi=!1,jo=null,Zn=!1,hl=null,Ef={onError:function(s){Oi=!0,jo=s}};function Oo(s,o,l,h,m,y,T,N,P){Oi=!1,jo=null,ji.apply(Ef,arguments)}function iu(s,o,l,h,m,y,T,N,P){if(Oo.apply(this,arguments),Oi){if(Oi){var W=jo;Oi=!1,jo=null}else throw Error(t(198));Zn||(Zn=!0,hl=W)}}function er(s){var o=s,l=s;if(s.alternate)for(;o.return;)o=o.return;else{s=o;do o=s,(o.flags&4098)!==0&&(l=o.return),s=o.return;while(s)}return o.tag===3?l:null}function Di(s){if(s.tag===13){var o=s.memoizedState;if(o===null&&(s=s.alternate,s!==null&&(o=s.memoizedState)),o!==null)return o.dehydrated}return null}function tr(s){if(er(s)!==s)throw Error(t(188))}function ou(s){var o=s.alternate;if(!o){if(o=er(s),o===null)throw Error(t(188));return o!==s?null:s}for(var l=s,h=o;;){var m=l.return;if(m===null)break;var y=m.alternate;if(y===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===y.child){for(y=m.child;y;){if(y===l)return tr(m),s;if(y===h)return tr(m),o;y=y.sibling}throw Error(t(188))}if(l.return!==h.return)l=m,h=y;else{for(var T=!1,N=m.child;N;){if(N===l){T=!0,l=m,h=y;break}if(N===h){T=!0,h=m,l=y;break}N=N.sibling}if(!T){for(N=y.child;N;){if(N===l){T=!0,l=y,h=m;break}if(N===h){T=!0,h=y,l=m;break}N=N.sibling}if(!T)throw Error(t(189))}}if(l.alternate!==h)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?s:o}function fl(s){return s=ou(s),s!==null?Do(s):null}function Do(s){if(s.tag===5||s.tag===6)return s;for(s=s.child;s!==null;){var o=Do(s);if(o!==null)return o;s=s.sibling}return null}var Mo=e.unstable_scheduleCallback,pl=e.unstable_cancelCallback,au=e.unstable_shouldYield,Tf=e.unstable_requestPaint,it=e.unstable_now,lu=e.unstable_getCurrentPriorityLevel,Mi=e.unstable_ImmediatePriority,ks=e.unstable_UserBlockingPriority,Un=e.unstable_NormalPriority,ml=e.unstable_LowPriority,cu=e.unstable_IdlePriority,Li=null,An=null;function uu(s){if(An&&typeof An.onCommitFiberRoot=="function")try{An.onCommitFiberRoot(Li,s,void 0,(s.current.flags&128)===128)}catch{}}var un=Math.clz32?Math.clz32:hu,gl=Math.log,du=Math.LN2;function hu(s){return s>>>=0,s===0?32:31-(gl(s)/du|0)|0}var Lo=64,Vo=4194304;function Rs(s){switch(s&-s){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return s&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return s}}function Vi(s,o){var l=s.pendingLanes;if(l===0)return 0;var h=0,m=s.suspendedLanes,y=s.pingedLanes,T=l&268435455;if(T!==0){var N=T&~m;N!==0?h=Rs(N):(y&=T,y!==0&&(h=Rs(y)))}else T=l&~m,T!==0?h=Rs(T):y!==0&&(h=Rs(y));if(h===0)return 0;if(o!==0&&o!==h&&(o&m)===0&&(m=h&-h,y=o&-o,m>=y||m===16&&(y&4194240)!==0))return o;if((h&4)!==0&&(h|=l&16),o=s.entangledLanes,o!==0)for(s=s.entanglements,o&=h;0<o;)l=31-un(o),m=1<<l,h|=s[l],o&=~m;return h}function bf(s,o){switch(s){case 1:case 2:case 4:return o+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jr(s,o){for(var l=s.suspendedLanes,h=s.pingedLanes,m=s.expirationTimes,y=s.pendingLanes;0<y;){var T=31-un(y),N=1<<T,P=m[T];P===-1?((N&l)===0||(N&h)!==0)&&(m[T]=bf(N,o)):P<=o&&(s.expiredLanes|=N),y&=~N}}function Pn(s){return s=s.pendingLanes&-1073741825,s!==0?s:s&1073741824?1073741824:0}function Fi(){var s=Lo;return Lo<<=1,(Lo&4194240)===0&&(Lo=64),s}function As(s){for(var o=[],l=0;31>l;l++)o.push(s);return o}function Ps(s,o,l){s.pendingLanes|=o,o!==536870912&&(s.suspendedLanes=0,s.pingedLanes=0),s=s.eventTimes,o=31-un(o),s[o]=l}function rt(s,o){var l=s.pendingLanes&~o;s.pendingLanes=o,s.suspendedLanes=0,s.pingedLanes=0,s.expiredLanes&=o,s.mutableReadLanes&=o,s.entangledLanes&=o,o=s.entanglements;var h=s.eventTimes;for(s=s.expirationTimes;0<l;){var m=31-un(l),y=1<<m;o[m]=0,h[m]=-1,s[m]=-1,l&=~y}}function js(s,o){var l=s.entangledLanes|=o;for(s=s.entanglements;l;){var h=31-un(l),m=1<<h;m&o|s[h]&o&&(s[h]|=o),l&=~m}}var We=0;function Os(s){return s&=-s,1<s?4<s?(s&268435455)!==0?16:536870912:4:1}var fu,Fo,pu,mu,gu,_l=!1,Tr=[],Kt=null,nr=null,rr=null,Ds=new Map,zn=new Map,br=[],If="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _u(s,o){switch(s){case"focusin":case"focusout":Kt=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ds.delete(o.pointerId);break;case"gotpointercapture":case"lostpointercapture":zn.delete(o.pointerId)}}function pn(s,o,l,h,m,y){return s===null||s.nativeEvent!==y?(s={blockedOn:o,domEventName:l,eventSystemFlags:h,nativeEvent:y,targetContainers:[m]},o!==null&&(o=Pl(o),o!==null&&Fo(o)),s):(s.eventSystemFlags|=h,o=s.targetContainers,m!==null&&o.indexOf(m)===-1&&o.push(m),s)}function Cf(s,o,l,h,m){switch(o){case"focusin":return Kt=pn(Kt,s,o,l,h,m),!0;case"dragenter":return nr=pn(nr,s,o,l,h,m),!0;case"mouseover":return rr=pn(rr,s,o,l,h,m),!0;case"pointerover":var y=m.pointerId;return Ds.set(y,pn(Ds.get(y)||null,s,o,l,h,m)),!0;case"gotpointercapture":return y=m.pointerId,zn.set(y,pn(zn.get(y)||null,s,o,l,h,m)),!0}return!1}function yu(s){var o=Wi(s.target);if(o!==null){var l=er(o);if(l!==null){if(o=l.tag,o===13){if(o=Di(l),o!==null){s.blockedOn=o,gu(s.priority,function(){pu(l)});return}}else if(o===3&&l.stateNode.current.memoizedState.isDehydrated){s.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}s.blockedOn=null}function Zr(s){if(s.blockedOn!==null)return!1;for(var o=s.targetContainers;0<o.length;){var l=Uo(s.domEventName,s.eventSystemFlags,o[0],s.nativeEvent);if(l===null){l=s.nativeEvent;var h=new l.constructor(l.type,l);Ai=h,l.target.dispatchEvent(h),Ai=null}else return o=Pl(l),o!==null&&Fo(o),s.blockedOn=l,!1;o.shift()}return!0}function Ui(s,o,l){Zr(s)&&l.delete(o)}function vu(){_l=!1,Kt!==null&&Zr(Kt)&&(Kt=null),nr!==null&&Zr(nr)&&(nr=null),rr!==null&&Zr(rr)&&(rr=null),Ds.forEach(Ui),zn.forEach(Ui)}function sr(s,o){s.blockedOn===o&&(s.blockedOn=null,_l||(_l=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vu)))}function ir(s){function o(m){return sr(m,s)}if(0<Tr.length){sr(Tr[0],s);for(var l=1;l<Tr.length;l++){var h=Tr[l];h.blockedOn===s&&(h.blockedOn=null)}}for(Kt!==null&&sr(Kt,s),nr!==null&&sr(nr,s),rr!==null&&sr(rr,s),Ds.forEach(o),zn.forEach(o),l=0;l<br.length;l++)h=br[l],h.blockedOn===s&&(h.blockedOn=null);for(;0<br.length&&(l=br[0],l.blockedOn===null);)yu(l),l.blockedOn===null&&br.shift()}var es=G.ReactCurrentBatchConfig,Ms=!0;function mt(s,o,l,h){var m=We,y=es.transition;es.transition=null;try{We=1,yl(s,o,l,h)}finally{We=m,es.transition=y}}function Nf(s,o,l,h){var m=We,y=es.transition;es.transition=null;try{We=4,yl(s,o,l,h)}finally{We=m,es.transition=y}}function yl(s,o,l,h){if(Ms){var m=Uo(s,o,l,h);if(m===null)Vf(s,o,h,zi,l),_u(s,h);else if(Cf(m,s,o,l,h))h.stopPropagation();else if(_u(s,h),o&4&&-1<If.indexOf(s)){for(;m!==null;){var y=Pl(m);if(y!==null&&fu(y),y=Uo(s,o,l,h),y===null&&Vf(s,o,h,zi,l),y===m)break;m=y}m!==null&&h.stopPropagation()}else Vf(s,o,h,null,l)}}var zi=null;function Uo(s,o,l,h){if(zi=null,s=ko(h),s=Wi(s),s!==null)if(o=er(s),o===null)s=null;else if(l=o.tag,l===13){if(s=Di(o),s!==null)return s;s=null}else if(l===3){if(o.stateNode.current.memoizedState.isDehydrated)return o.tag===3?o.stateNode.containerInfo:null;s=null}else o!==s&&(s=null);return zi=s,null}function vl(s){switch(s){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lu()){case Mi:return 1;case ks:return 4;case Un:case ml:return 16;case cu:return 536870912;default:return 16}default:return 16}}var jn=null,zo=null,mn=null;function wl(){if(mn)return mn;var s,o=zo,l=o.length,h,m="value"in jn?jn.value:jn.textContent,y=m.length;for(s=0;s<l&&o[s]===m[s];s++);var T=l-s;for(h=1;h<=T&&o[l-h]===m[y-h];h++);return mn=m.slice(s,1<h?1-h:void 0)}function Bo(s){var o=s.keyCode;return"charCode"in s?(s=s.charCode,s===0&&o===13&&(s=13)):s=o,s===10&&(s=13),32<=s||s===13?s:0}function Ir(){return!0}function xl(){return!1}function Qt(s){function o(l,h,m,y,T){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=y,this.target=T,this.currentTarget=null;for(var N in s)s.hasOwnProperty(N)&&(l=s[N],this[N]=l?l(y):y[N]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Ir:xl,this.isPropagationStopped=xl,this}return ne(o.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Ir)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Ir)},persist:function(){},isPersistent:Ir}),o}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(s){return s.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Qt(or),Cr=ne({},or,{view:0,detail:0}),Sf=Qt(Cr),Wo,ts,Ls,Bi=ne({},Cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nr,button:0,buttons:0,relatedTarget:function(s){return s.relatedTarget===void 0?s.fromElement===s.srcElement?s.toElement:s.fromElement:s.relatedTarget},movementX:function(s){return"movementX"in s?s.movementX:(s!==Ls&&(Ls&&s.type==="mousemove"?(Wo=s.screenX-Ls.screenX,ts=s.screenY-Ls.screenY):ts=Wo=0,Ls=s),Wo)},movementY:function(s){return"movementY"in s?s.movementY:ts}}),qo=Qt(Bi),El=ne({},Bi,{dataTransfer:0}),wu=Qt(El),Ho=ne({},Cr,{relatedTarget:0}),Go=Qt(Ho),xu=ne({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),ns=Qt(xu),Eu=ne({},or,{clipboardData:function(s){return"clipboardData"in s?s.clipboardData:window.clipboardData}}),Tu=Qt(Eu),bu=ne({},or,{data:0}),Tl=Qt(bu),Ko={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Iu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cu(s){var o=this.nativeEvent;return o.getModifierState?o.getModifierState(s):(s=Iu[s])?!!o[s]:!1}function Nr(){return Cu}var u=ne({},Cr,{key:function(s){if(s.key){var o=Ko[s.key]||s.key;if(o!=="Unidentified")return o}return s.type==="keypress"?(s=Bo(s),s===13?"Enter":String.fromCharCode(s)):s.type==="keydown"||s.type==="keyup"?dn[s.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nr,charCode:function(s){return s.type==="keypress"?Bo(s):0},keyCode:function(s){return s.type==="keydown"||s.type==="keyup"?s.keyCode:0},which:function(s){return s.type==="keypress"?Bo(s):s.type==="keydown"||s.type==="keyup"?s.keyCode:0}}),_=Qt(u),w=ne({},Bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),b=Qt(w),F=ne({},Cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nr}),q=Qt(F),ie=ne({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),et=Qt(ie),At=ne({},Bi,{deltaX:function(s){return"deltaX"in s?s.deltaX:"wheelDeltaX"in s?-s.wheelDeltaX:0},deltaY:function(s){return"deltaY"in s?s.deltaY:"wheelDeltaY"in s?-s.wheelDeltaY:"wheelDelta"in s?-s.wheelDelta:0},deltaZ:0,deltaMode:0}),qe=Qt(At),Ft=[9,13,27,32],bt=f&&"CompositionEvent"in window,Bn=null;f&&"documentMode"in document&&(Bn=document.documentMode);var On=f&&"TextEvent"in window&&!Bn,$i=f&&(!bt||Bn&&8<Bn&&11>=Bn),Qo=" ",z_=!1;function B_(s,o){switch(s){case"keyup":return Ft.indexOf(o.keyCode)!==-1;case"keydown":return o.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $_(s){return s=s.detail,typeof s=="object"&&"data"in s?s.data:null}var Yo=!1;function Gb(s,o){switch(s){case"compositionend":return $_(o);case"keypress":return o.which!==32?null:(z_=!0,Qo);case"textInput":return s=o.data,s===Qo&&z_?null:s;default:return null}}function Kb(s,o){if(Yo)return s==="compositionend"||!bt&&B_(s,o)?(s=wl(),mn=zo=jn=null,Yo=!1,s):null;switch(s){case"paste":return null;case"keypress":if(!(o.ctrlKey||o.altKey||o.metaKey)||o.ctrlKey&&o.altKey){if(o.char&&1<o.char.length)return o.char;if(o.which)return String.fromCharCode(o.which)}return null;case"compositionend":return $i&&o.locale!=="ko"?null:o.data;default:return null}}var Qb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function W_(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o==="input"?!!Qb[s.type]:o==="textarea"}function q_(s,o,l,h){Er(h),o=Au(o,"onChange"),0<o.length&&(l=new $o("onChange","change",null,l,h),s.push({event:l,listeners:o}))}var bl=null,Il=null;function Yb(s){cy(s,0)}function Nu(s){var o=ta(s);if(Xn(o))return s}function Xb(s,o){if(s==="change")return o}var H_=!1;if(f){var kf;if(f){var Rf="oninput"in document;if(!Rf){var G_=document.createElement("div");G_.setAttribute("oninput","return;"),Rf=typeof G_.oninput=="function"}kf=Rf}else kf=!1;H_=kf&&(!document.documentMode||9<document.documentMode)}function K_(){bl&&(bl.detachEvent("onpropertychange",Q_),Il=bl=null)}function Q_(s){if(s.propertyName==="value"&&Nu(Il)){var o=[];q_(o,Il,s,ko(s)),dl(Yb,o)}}function Jb(s,o,l){s==="focusin"?(K_(),bl=o,Il=l,bl.attachEvent("onpropertychange",Q_)):s==="focusout"&&K_()}function Zb(s){if(s==="selectionchange"||s==="keyup"||s==="keydown")return Nu(Il)}function eI(s,o){if(s==="click")return Nu(o)}function tI(s,o){if(s==="input"||s==="change")return Nu(o)}function nI(s,o){return s===o&&(s!==0||1/s===1/o)||s!==s&&o!==o}var ar=typeof Object.is=="function"?Object.is:nI;function Cl(s,o){if(ar(s,o))return!0;if(typeof s!="object"||s===null||typeof o!="object"||o===null)return!1;var l=Object.keys(s),h=Object.keys(o);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!p.call(o,m)||!ar(s[m],o[m]))return!1}return!0}function Y_(s){for(;s&&s.firstChild;)s=s.firstChild;return s}function X_(s,o){var l=Y_(s);s=0;for(var h;l;){if(l.nodeType===3){if(h=s+l.textContent.length,s<=o&&h>=o)return{node:l,offset:o-s};s=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Y_(l)}}function J_(s,o){return s&&o?s===o?!0:s&&s.nodeType===3?!1:o&&o.nodeType===3?J_(s,o.parentNode):"contains"in s?s.contains(o):s.compareDocumentPosition?!!(s.compareDocumentPosition(o)&16):!1:!1}function Z_(){for(var s=window,o=Ns();o instanceof s.HTMLIFrameElement;){try{var l=typeof o.contentWindow.location.href=="string"}catch{l=!1}if(l)s=o.contentWindow;else break;o=Ns(s.document)}return o}function Af(s){var o=s&&s.nodeName&&s.nodeName.toLowerCase();return o&&(o==="input"&&(s.type==="text"||s.type==="search"||s.type==="tel"||s.type==="url"||s.type==="password")||o==="textarea"||s.contentEditable==="true")}function rI(s){var o=Z_(),l=s.focusedElem,h=s.selectionRange;if(o!==l&&l&&l.ownerDocument&&J_(l.ownerDocument.documentElement,l)){if(h!==null&&Af(l)){if(o=h.start,s=h.end,s===void 0&&(s=o),"selectionStart"in l)l.selectionStart=o,l.selectionEnd=Math.min(s,l.value.length);else if(s=(o=l.ownerDocument||document)&&o.defaultView||window,s.getSelection){s=s.getSelection();var m=l.textContent.length,y=Math.min(h.start,m);h=h.end===void 0?y:Math.min(h.end,m),!s.extend&&y>h&&(m=h,h=y,y=m),m=X_(l,y);var T=X_(l,h);m&&T&&(s.rangeCount!==1||s.anchorNode!==m.node||s.anchorOffset!==m.offset||s.focusNode!==T.node||s.focusOffset!==T.offset)&&(o=o.createRange(),o.setStart(m.node,m.offset),s.removeAllRanges(),y>h?(s.addRange(o),s.extend(T.node,T.offset)):(o.setEnd(T.node,T.offset),s.addRange(o)))}}for(o=[],s=l;s=s.parentNode;)s.nodeType===1&&o.push({element:s,left:s.scrollLeft,top:s.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<o.length;l++)s=o[l],s.element.scrollLeft=s.left,s.element.scrollTop=s.top}}var sI=f&&"documentMode"in document&&11>=document.documentMode,Xo=null,Pf=null,Nl=null,jf=!1;function ey(s,o,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;jf||Xo==null||Xo!==Ns(h)||(h=Xo,"selectionStart"in h&&Af(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Nl&&Cl(Nl,h)||(Nl=h,h=Au(Pf,"onSelect"),0<h.length&&(o=new $o("onSelect","select",null,o,l),s.push({event:o,listeners:h}),o.target=Xo)))}function Su(s,o){var l={};return l[s.toLowerCase()]=o.toLowerCase(),l["Webkit"+s]="webkit"+o,l["Moz"+s]="moz"+o,l}var Jo={animationend:Su("Animation","AnimationEnd"),animationiteration:Su("Animation","AnimationIteration"),animationstart:Su("Animation","AnimationStart"),transitionend:Su("Transition","TransitionEnd")},Of={},ty={};f&&(ty=document.createElement("div").style,"AnimationEvent"in window||(delete Jo.animationend.animation,delete Jo.animationiteration.animation,delete Jo.animationstart.animation),"TransitionEvent"in window||delete Jo.transitionend.transition);function ku(s){if(Of[s])return Of[s];if(!Jo[s])return s;var o=Jo[s],l;for(l in o)if(o.hasOwnProperty(l)&&l in ty)return Of[s]=o[l];return s}var ny=ku("animationend"),ry=ku("animationiteration"),sy=ku("animationstart"),iy=ku("transitionend"),oy=new Map,ay="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Vs(s,o){oy.set(s,o),a(o,[s])}for(var Df=0;Df<ay.length;Df++){var Mf=ay[Df],iI=Mf.toLowerCase(),oI=Mf[0].toUpperCase()+Mf.slice(1);Vs(iI,"on"+oI)}Vs(ny,"onAnimationEnd"),Vs(ry,"onAnimationIteration"),Vs(sy,"onAnimationStart"),Vs("dblclick","onDoubleClick"),Vs("focusin","onFocus"),Vs("focusout","onBlur"),Vs(iy,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),aI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Sl));function ly(s,o,l){var h=s.type||"unknown-event";s.currentTarget=l,iu(h,o,void 0,s),s.currentTarget=null}function cy(s,o){o=(o&4)!==0;for(var l=0;l<s.length;l++){var h=s[l],m=h.event;h=h.listeners;e:{var y=void 0;if(o)for(var T=h.length-1;0<=T;T--){var N=h[T],P=N.instance,W=N.currentTarget;if(N=N.listener,P!==y&&m.isPropagationStopped())break e;ly(m,N,W),y=P}else for(T=0;T<h.length;T++){if(N=h[T],P=N.instance,W=N.currentTarget,N=N.listener,P!==y&&m.isPropagationStopped())break e;ly(m,N,W),y=P}}}if(Zn)throw s=hl,Zn=!1,hl=null,s}function ut(s,o){var l=o[Wf];l===void 0&&(l=o[Wf]=new Set);var h=s+"__bubble";l.has(h)||(uy(o,s,2,!1),l.add(h))}function Lf(s,o,l){var h=0;o&&(h|=4),uy(l,s,h,o)}var Ru="_reactListening"+Math.random().toString(36).slice(2);function kl(s){if(!s[Ru]){s[Ru]=!0,r.forEach(function(l){l!=="selectionchange"&&(aI.has(l)||Lf(l,!1,s),Lf(l,!0,s))});var o=s.nodeType===9?s:s.ownerDocument;o===null||o[Ru]||(o[Ru]=!0,Lf("selectionchange",!1,o))}}function uy(s,o,l,h){switch(vl(o)){case 1:var m=mt;break;case 4:m=Nf;break;default:m=yl}l=m.bind(null,o,l,s),m=void 0,!Po||o!=="touchstart"&&o!=="touchmove"&&o!=="wheel"||(m=!0),h?m!==void 0?s.addEventListener(o,l,{capture:!0,passive:m}):s.addEventListener(o,l,!0):m!==void 0?s.addEventListener(o,l,{passive:m}):s.addEventListener(o,l,!1)}function Vf(s,o,l,h,m){var y=h;if((o&1)===0&&(o&2)===0&&h!==null)e:for(;;){if(h===null)return;var T=h.tag;if(T===3||T===4){var N=h.stateNode.containerInfo;if(N===m||N.nodeType===8&&N.parentNode===m)break;if(T===4)for(T=h.return;T!==null;){var P=T.tag;if((P===3||P===4)&&(P=T.stateNode.containerInfo,P===m||P.nodeType===8&&P.parentNode===m))return;T=T.return}for(;N!==null;){if(T=Wi(N),T===null)return;if(P=T.tag,P===5||P===6){h=y=T;continue e}N=N.parentNode}}h=h.return}dl(function(){var W=y,Z=ko(l),ee=[];e:{var Y=oy.get(s);if(Y!==void 0){var ue=$o,ge=s;switch(s){case"keypress":if(Bo(l)===0)break e;case"keydown":case"keyup":ue=_;break;case"focusin":ge="focus",ue=Go;break;case"focusout":ge="blur",ue=Go;break;case"beforeblur":case"afterblur":ue=Go;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ue=qo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ue=wu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ue=q;break;case ny:case ry:case sy:ue=ns;break;case iy:ue=et;break;case"scroll":ue=Sf;break;case"wheel":ue=qe;break;case"copy":case"cut":case"paste":ue=Tu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ue=b}var ve=(o&4)!==0,Et=!ve&&s==="scroll",z=ve?Y!==null?Y+"Capture":null:Y;ve=[];for(var D=W,$;D!==null;){$=D;var re=$.stateNode;if($.tag===5&&re!==null&&($=re,z!==null&&(re=xt(D,z),re!=null&&ve.push(Rl(D,re,$)))),Et)break;D=D.return}0<ve.length&&(Y=new ue(Y,ge,null,l,Z),ee.push({event:Y,listeners:ve}))}}if((o&7)===0){e:{if(Y=s==="mouseover"||s==="pointerover",ue=s==="mouseout"||s==="pointerout",Y&&l!==Ai&&(ge=l.relatedTarget||l.fromElement)&&(Wi(ge)||ge[rs]))break e;if((ue||Y)&&(Y=Z.window===Z?Z:(Y=Z.ownerDocument)?Y.defaultView||Y.parentWindow:window,ue?(ge=l.relatedTarget||l.toElement,ue=W,ge=ge?Wi(ge):null,ge!==null&&(Et=er(ge),ge!==Et||ge.tag!==5&&ge.tag!==6)&&(ge=null)):(ue=null,ge=W),ue!==ge)){if(ve=qo,re="onMouseLeave",z="onMouseEnter",D="mouse",(s==="pointerout"||s==="pointerover")&&(ve=b,re="onPointerLeave",z="onPointerEnter",D="pointer"),Et=ue==null?Y:ta(ue),$=ge==null?Y:ta(ge),Y=new ve(re,D+"leave",ue,l,Z),Y.target=Et,Y.relatedTarget=$,re=null,Wi(Z)===W&&(ve=new ve(z,D+"enter",ge,l,Z),ve.target=$,ve.relatedTarget=Et,re=ve),Et=re,ue&&ge)t:{for(ve=ue,z=ge,D=0,$=ve;$;$=Zo($))D++;for($=0,re=z;re;re=Zo(re))$++;for(;0<D-$;)ve=Zo(ve),D--;for(;0<$-D;)z=Zo(z),$--;for(;D--;){if(ve===z||z!==null&&ve===z.alternate)break t;ve=Zo(ve),z=Zo(z)}ve=null}else ve=null;ue!==null&&dy(ee,Y,ue,ve,!1),ge!==null&&Et!==null&&dy(ee,Et,ge,ve,!0)}}e:{if(Y=W?ta(W):window,ue=Y.nodeName&&Y.nodeName.toLowerCase(),ue==="select"||ue==="input"&&Y.type==="file")var we=Xb;else if(W_(Y))if(H_)we=tI;else{we=Zb;var Ie=Jb}else(ue=Y.nodeName)&&ue.toLowerCase()==="input"&&(Y.type==="checkbox"||Y.type==="radio")&&(we=eI);if(we&&(we=we(s,W))){q_(ee,we,l,Z);break e}Ie&&Ie(s,Y,W),s==="focusout"&&(Ie=Y._wrapperState)&&Ie.controlled&&Y.type==="number"&&Co(Y,"number",Y.value)}switch(Ie=W?ta(W):window,s){case"focusin":(W_(Ie)||Ie.contentEditable==="true")&&(Xo=Ie,Pf=W,Nl=null);break;case"focusout":Nl=Pf=Xo=null;break;case"mousedown":jf=!0;break;case"contextmenu":case"mouseup":case"dragend":jf=!1,ey(ee,l,Z);break;case"selectionchange":if(sI)break;case"keydown":case"keyup":ey(ee,l,Z)}var Ce;if(bt)e:{switch(s){case"compositionstart":var Re="onCompositionStart";break e;case"compositionend":Re="onCompositionEnd";break e;case"compositionupdate":Re="onCompositionUpdate";break e}Re=void 0}else Yo?B_(s,l)&&(Re="onCompositionEnd"):s==="keydown"&&l.keyCode===229&&(Re="onCompositionStart");Re&&($i&&l.locale!=="ko"&&(Yo||Re!=="onCompositionStart"?Re==="onCompositionEnd"&&Yo&&(Ce=wl()):(jn=Z,zo="value"in jn?jn.value:jn.textContent,Yo=!0)),Ie=Au(W,Re),0<Ie.length&&(Re=new Tl(Re,s,null,l,Z),ee.push({event:Re,listeners:Ie}),Ce?Re.data=Ce:(Ce=$_(l),Ce!==null&&(Re.data=Ce)))),(Ce=On?Gb(s,l):Kb(s,l))&&(W=Au(W,"onBeforeInput"),0<W.length&&(Z=new Tl("onBeforeInput","beforeinput",null,l,Z),ee.push({event:Z,listeners:W}),Z.data=Ce))}cy(ee,o)})}function Rl(s,o,l){return{instance:s,listener:o,currentTarget:l}}function Au(s,o){for(var l=o+"Capture",h=[];s!==null;){var m=s,y=m.stateNode;m.tag===5&&y!==null&&(m=y,y=xt(s,l),y!=null&&h.unshift(Rl(s,y,m)),y=xt(s,o),y!=null&&h.push(Rl(s,y,m))),s=s.return}return h}function Zo(s){if(s===null)return null;do s=s.return;while(s&&s.tag!==5);return s||null}function dy(s,o,l,h,m){for(var y=o._reactName,T=[];l!==null&&l!==h;){var N=l,P=N.alternate,W=N.stateNode;if(P!==null&&P===h)break;N.tag===5&&W!==null&&(N=W,m?(P=xt(l,y),P!=null&&T.unshift(Rl(l,P,N))):m||(P=xt(l,y),P!=null&&T.push(Rl(l,P,N)))),l=l.return}T.length!==0&&s.push({event:o,listeners:T})}var lI=/\r\n?/g,cI=/\u0000|\uFFFD/g;function hy(s){return(typeof s=="string"?s:""+s).replace(lI,`
`).replace(cI,"")}function Pu(s,o,l){if(o=hy(o),hy(s)!==o&&l)throw Error(t(425))}function ju(){}var Ff=null,Uf=null;function zf(s,o){return s==="textarea"||s==="noscript"||typeof o.children=="string"||typeof o.children=="number"||typeof o.dangerouslySetInnerHTML=="object"&&o.dangerouslySetInnerHTML!==null&&o.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,uI=typeof clearTimeout=="function"?clearTimeout:void 0,fy=typeof Promise=="function"?Promise:void 0,dI=typeof queueMicrotask=="function"?queueMicrotask:typeof fy<"u"?function(s){return fy.resolve(null).then(s).catch(hI)}:Bf;function hI(s){setTimeout(function(){throw s})}function $f(s,o){var l=o,h=0;do{var m=l.nextSibling;if(s.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){s.removeChild(m),ir(o);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);ir(o)}function Fs(s){for(;s!=null;s=s.nextSibling){var o=s.nodeType;if(o===1||o===3)break;if(o===8){if(o=s.data,o==="$"||o==="$!"||o==="$?")break;if(o==="/$")return null}}return s}function py(s){s=s.previousSibling;for(var o=0;s;){if(s.nodeType===8){var l=s.data;if(l==="$"||l==="$!"||l==="$?"){if(o===0)return s;o--}else l==="/$"&&o++}s=s.previousSibling}return null}var ea=Math.random().toString(36).slice(2),Sr="__reactFiber$"+ea,Al="__reactProps$"+ea,rs="__reactContainer$"+ea,Wf="__reactEvents$"+ea,fI="__reactListeners$"+ea,pI="__reactHandles$"+ea;function Wi(s){var o=s[Sr];if(o)return o;for(var l=s.parentNode;l;){if(o=l[rs]||l[Sr]){if(l=o.alternate,o.child!==null||l!==null&&l.child!==null)for(s=py(s);s!==null;){if(l=s[Sr])return l;s=py(s)}return o}s=l,l=s.parentNode}return null}function Pl(s){return s=s[Sr]||s[rs],!s||s.tag!==5&&s.tag!==6&&s.tag!==13&&s.tag!==3?null:s}function ta(s){if(s.tag===5||s.tag===6)return s.stateNode;throw Error(t(33))}function Ou(s){return s[Al]||null}var qf=[],na=-1;function Us(s){return{current:s}}function dt(s){0>na||(s.current=qf[na],qf[na]=null,na--)}function ot(s,o){na++,qf[na]=s.current,s.current=o}var zs={},en=Us(zs),gn=Us(!1),qi=zs;function ra(s,o){var l=s.type.contextTypes;if(!l)return zs;var h=s.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===o)return h.__reactInternalMemoizedMaskedChildContext;var m={},y;for(y in l)m[y]=o[y];return h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=o,s.__reactInternalMemoizedMaskedChildContext=m),m}function _n(s){return s=s.childContextTypes,s!=null}function Du(){dt(gn),dt(en)}function my(s,o,l){if(en.current!==zs)throw Error(t(168));ot(en,o),ot(gn,l)}function gy(s,o,l){var h=s.stateNode;if(o=o.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in o))throw Error(t(108,be(s)||"Unknown",m));return ne({},l,h)}function Mu(s){return s=(s=s.stateNode)&&s.__reactInternalMemoizedMergedChildContext||zs,qi=en.current,ot(en,s),ot(gn,gn.current),!0}function _y(s,o,l){var h=s.stateNode;if(!h)throw Error(t(169));l?(s=gy(s,o,qi),h.__reactInternalMemoizedMergedChildContext=s,dt(gn),dt(en),ot(en,s)):dt(gn),ot(gn,l)}var ss=null,Lu=!1,Hf=!1;function yy(s){ss===null?ss=[s]:ss.push(s)}function mI(s){Lu=!0,yy(s)}function Bs(){if(!Hf&&ss!==null){Hf=!0;var s=0,o=We;try{var l=ss;for(We=1;s<l.length;s++){var h=l[s];do h=h(!0);while(h!==null)}ss=null,Lu=!1}catch(m){throw ss!==null&&(ss=ss.slice(s+1)),Mo(Mi,Bs),m}finally{We=o,Hf=!1}}return null}var sa=[],ia=0,Vu=null,Fu=0,$n=[],Wn=0,Hi=null,is=1,os="";function Gi(s,o){sa[ia++]=Fu,sa[ia++]=Vu,Vu=s,Fu=o}function vy(s,o,l){$n[Wn++]=is,$n[Wn++]=os,$n[Wn++]=Hi,Hi=s;var h=is;s=os;var m=32-un(h)-1;h&=~(1<<m),l+=1;var y=32-un(o)+m;if(30<y){var T=m-m%5;y=(h&(1<<T)-1).toString(32),h>>=T,m-=T,is=1<<32-un(o)+m|l<<m|h,os=y+s}else is=1<<y|l<<m|h,os=s}function Gf(s){s.return!==null&&(Gi(s,1),vy(s,1,0))}function Kf(s){for(;s===Vu;)Vu=sa[--ia],sa[ia]=null,Fu=sa[--ia],sa[ia]=null;for(;s===Hi;)Hi=$n[--Wn],$n[Wn]=null,os=$n[--Wn],$n[Wn]=null,is=$n[--Wn],$n[Wn]=null}var Dn=null,Mn=null,gt=!1,lr=null;function wy(s,o){var l=Kn(5,null,null,0);l.elementType="DELETED",l.stateNode=o,l.return=s,o=s.deletions,o===null?(s.deletions=[l],s.flags|=16):o.push(l)}function xy(s,o){switch(s.tag){case 5:var l=s.type;return o=o.nodeType!==1||l.toLowerCase()!==o.nodeName.toLowerCase()?null:o,o!==null?(s.stateNode=o,Dn=s,Mn=Fs(o.firstChild),!0):!1;case 6:return o=s.pendingProps===""||o.nodeType!==3?null:o,o!==null?(s.stateNode=o,Dn=s,Mn=null,!0):!1;case 13:return o=o.nodeType!==8?null:o,o!==null?(l=Hi!==null?{id:is,overflow:os}:null,s.memoizedState={dehydrated:o,treeContext:l,retryLane:1073741824},l=Kn(18,null,null,0),l.stateNode=o,l.return=s,s.child=l,Dn=s,Mn=null,!0):!1;default:return!1}}function Qf(s){return(s.mode&1)!==0&&(s.flags&128)===0}function Yf(s){if(gt){var o=Mn;if(o){var l=o;if(!xy(s,o)){if(Qf(s))throw Error(t(418));o=Fs(l.nextSibling);var h=Dn;o&&xy(s,o)?wy(h,l):(s.flags=s.flags&-4097|2,gt=!1,Dn=s)}}else{if(Qf(s))throw Error(t(418));s.flags=s.flags&-4097|2,gt=!1,Dn=s}}}function Ey(s){for(s=s.return;s!==null&&s.tag!==5&&s.tag!==3&&s.tag!==13;)s=s.return;Dn=s}function Uu(s){if(s!==Dn)return!1;if(!gt)return Ey(s),gt=!0,!1;var o;if((o=s.tag!==3)&&!(o=s.tag!==5)&&(o=s.type,o=o!=="head"&&o!=="body"&&!zf(s.type,s.memoizedProps)),o&&(o=Mn)){if(Qf(s))throw Ty(),Error(t(418));for(;o;)wy(s,o),o=Fs(o.nextSibling)}if(Ey(s),s.tag===13){if(s=s.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(t(317));e:{for(s=s.nextSibling,o=0;s;){if(s.nodeType===8){var l=s.data;if(l==="/$"){if(o===0){Mn=Fs(s.nextSibling);break e}o--}else l!=="$"&&l!=="$!"&&l!=="$?"||o++}s=s.nextSibling}Mn=null}}else Mn=Dn?Fs(s.stateNode.nextSibling):null;return!0}function Ty(){for(var s=Mn;s;)s=Fs(s.nextSibling)}function oa(){Mn=Dn=null,gt=!1}function Xf(s){lr===null?lr=[s]:lr.push(s)}var gI=G.ReactCurrentBatchConfig;function jl(s,o,l){if(s=l.ref,s!==null&&typeof s!="function"&&typeof s!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var h=l.stateNode}if(!h)throw Error(t(147,s));var m=h,y=""+s;return o!==null&&o.ref!==null&&typeof o.ref=="function"&&o.ref._stringRef===y?o.ref:(o=function(T){var N=m.refs;T===null?delete N[y]:N[y]=T},o._stringRef=y,o)}if(typeof s!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,s))}return s}function zu(s,o){throw s=Object.prototype.toString.call(o),Error(t(31,s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s))}function by(s){var o=s._init;return o(s._payload)}function Iy(s){function o(z,D){if(s){var $=z.deletions;$===null?(z.deletions=[D],z.flags|=16):$.push(D)}}function l(z,D){if(!s)return null;for(;D!==null;)o(z,D),D=D.sibling;return null}function h(z,D){for(z=new Map;D!==null;)D.key!==null?z.set(D.key,D):z.set(D.index,D),D=D.sibling;return z}function m(z,D){return z=Ys(z,D),z.index=0,z.sibling=null,z}function y(z,D,$){return z.index=$,s?($=z.alternate,$!==null?($=$.index,$<D?(z.flags|=2,D):$):(z.flags|=2,D)):(z.flags|=1048576,D)}function T(z){return s&&z.alternate===null&&(z.flags|=2),z}function N(z,D,$,re){return D===null||D.tag!==6?(D=Bp($,z.mode,re),D.return=z,D):(D=m(D,$),D.return=z,D)}function P(z,D,$,re){var we=$.type;return we===j?Z(z,D,$.props.children,re,$.key):D!==null&&(D.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Je&&by(we)===D.type)?(re=m(D,$.props),re.ref=jl(z,D,$),re.return=z,re):(re=dd($.type,$.key,$.props,null,z.mode,re),re.ref=jl(z,D,$),re.return=z,re)}function W(z,D,$,re){return D===null||D.tag!==4||D.stateNode.containerInfo!==$.containerInfo||D.stateNode.implementation!==$.implementation?(D=$p($,z.mode,re),D.return=z,D):(D=m(D,$.children||[]),D.return=z,D)}function Z(z,D,$,re,we){return D===null||D.tag!==7?(D=to($,z.mode,re,we),D.return=z,D):(D=m(D,$),D.return=z,D)}function ee(z,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return D=Bp(""+D,z.mode,$),D.return=z,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case J:return $=dd(D.type,D.key,D.props,null,z.mode,$),$.ref=jl(z,null,D),$.return=z,$;case fe:return D=$p(D,z.mode,$),D.return=z,D;case Je:var re=D._init;return ee(z,re(D._payload),$)}if(Kr(D)||ce(D))return D=to(D,z.mode,$,null),D.return=z,D;zu(z,D)}return null}function Y(z,D,$,re){var we=D!==null?D.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return we!==null?null:N(z,D,""+$,re);if(typeof $=="object"&&$!==null){switch($.$$typeof){case J:return $.key===we?P(z,D,$,re):null;case fe:return $.key===we?W(z,D,$,re):null;case Je:return we=$._init,Y(z,D,we($._payload),re)}if(Kr($)||ce($))return we!==null?null:Z(z,D,$,re,null);zu(z,$)}return null}function ue(z,D,$,re,we){if(typeof re=="string"&&re!==""||typeof re=="number")return z=z.get($)||null,N(D,z,""+re,we);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case J:return z=z.get(re.key===null?$:re.key)||null,P(D,z,re,we);case fe:return z=z.get(re.key===null?$:re.key)||null,W(D,z,re,we);case Je:var Ie=re._init;return ue(z,D,$,Ie(re._payload),we)}if(Kr(re)||ce(re))return z=z.get($)||null,Z(D,z,re,we,null);zu(D,re)}return null}function ge(z,D,$,re){for(var we=null,Ie=null,Ce=D,Re=D=0,Bt=null;Ce!==null&&Re<$.length;Re++){Ce.index>Re?(Bt=Ce,Ce=null):Bt=Ce.sibling;var Qe=Y(z,Ce,$[Re],re);if(Qe===null){Ce===null&&(Ce=Bt);break}s&&Ce&&Qe.alternate===null&&o(z,Ce),D=y(Qe,D,Re),Ie===null?we=Qe:Ie.sibling=Qe,Ie=Qe,Ce=Bt}if(Re===$.length)return l(z,Ce),gt&&Gi(z,Re),we;if(Ce===null){for(;Re<$.length;Re++)Ce=ee(z,$[Re],re),Ce!==null&&(D=y(Ce,D,Re),Ie===null?we=Ce:Ie.sibling=Ce,Ie=Ce);return gt&&Gi(z,Re),we}for(Ce=h(z,Ce);Re<$.length;Re++)Bt=ue(Ce,z,Re,$[Re],re),Bt!==null&&(s&&Bt.alternate!==null&&Ce.delete(Bt.key===null?Re:Bt.key),D=y(Bt,D,Re),Ie===null?we=Bt:Ie.sibling=Bt,Ie=Bt);return s&&Ce.forEach(function(Xs){return o(z,Xs)}),gt&&Gi(z,Re),we}function ve(z,D,$,re){var we=ce($);if(typeof we!="function")throw Error(t(150));if($=we.call($),$==null)throw Error(t(151));for(var Ie=we=null,Ce=D,Re=D=0,Bt=null,Qe=$.next();Ce!==null&&!Qe.done;Re++,Qe=$.next()){Ce.index>Re?(Bt=Ce,Ce=null):Bt=Ce.sibling;var Xs=Y(z,Ce,Qe.value,re);if(Xs===null){Ce===null&&(Ce=Bt);break}s&&Ce&&Xs.alternate===null&&o(z,Ce),D=y(Xs,D,Re),Ie===null?we=Xs:Ie.sibling=Xs,Ie=Xs,Ce=Bt}if(Qe.done)return l(z,Ce),gt&&Gi(z,Re),we;if(Ce===null){for(;!Qe.done;Re++,Qe=$.next())Qe=ee(z,Qe.value,re),Qe!==null&&(D=y(Qe,D,Re),Ie===null?we=Qe:Ie.sibling=Qe,Ie=Qe);return gt&&Gi(z,Re),we}for(Ce=h(z,Ce);!Qe.done;Re++,Qe=$.next())Qe=ue(Ce,z,Re,Qe.value,re),Qe!==null&&(s&&Qe.alternate!==null&&Ce.delete(Qe.key===null?Re:Qe.key),D=y(Qe,D,Re),Ie===null?we=Qe:Ie.sibling=Qe,Ie=Qe);return s&&Ce.forEach(function(QI){return o(z,QI)}),gt&&Gi(z,Re),we}function Et(z,D,$,re){if(typeof $=="object"&&$!==null&&$.type===j&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case J:e:{for(var we=$.key,Ie=D;Ie!==null;){if(Ie.key===we){if(we=$.type,we===j){if(Ie.tag===7){l(z,Ie.sibling),D=m(Ie,$.props.children),D.return=z,z=D;break e}}else if(Ie.elementType===we||typeof we=="object"&&we!==null&&we.$$typeof===Je&&by(we)===Ie.type){l(z,Ie.sibling),D=m(Ie,$.props),D.ref=jl(z,Ie,$),D.return=z,z=D;break e}l(z,Ie);break}else o(z,Ie);Ie=Ie.sibling}$.type===j?(D=to($.props.children,z.mode,re,$.key),D.return=z,z=D):(re=dd($.type,$.key,$.props,null,z.mode,re),re.ref=jl(z,D,$),re.return=z,z=re)}return T(z);case fe:e:{for(Ie=$.key;D!==null;){if(D.key===Ie)if(D.tag===4&&D.stateNode.containerInfo===$.containerInfo&&D.stateNode.implementation===$.implementation){l(z,D.sibling),D=m(D,$.children||[]),D.return=z,z=D;break e}else{l(z,D);break}else o(z,D);D=D.sibling}D=$p($,z.mode,re),D.return=z,z=D}return T(z);case Je:return Ie=$._init,Et(z,D,Ie($._payload),re)}if(Kr($))return ge(z,D,$,re);if(ce($))return ve(z,D,$,re);zu(z,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,D!==null&&D.tag===6?(l(z,D.sibling),D=m(D,$),D.return=z,z=D):(l(z,D),D=Bp($,z.mode,re),D.return=z,z=D),T(z)):l(z,D)}return Et}var aa=Iy(!0),Cy=Iy(!1),Bu=Us(null),$u=null,la=null,Jf=null;function Zf(){Jf=la=$u=null}function ep(s){var o=Bu.current;dt(Bu),s._currentValue=o}function tp(s,o,l){for(;s!==null;){var h=s.alternate;if((s.childLanes&o)!==o?(s.childLanes|=o,h!==null&&(h.childLanes|=o)):h!==null&&(h.childLanes&o)!==o&&(h.childLanes|=o),s===l)break;s=s.return}}function ca(s,o){$u=s,Jf=la=null,s=s.dependencies,s!==null&&s.firstContext!==null&&((s.lanes&o)!==0&&(yn=!0),s.firstContext=null)}function qn(s){var o=s._currentValue;if(Jf!==s)if(s={context:s,memoizedValue:o,next:null},la===null){if($u===null)throw Error(t(308));la=s,$u.dependencies={lanes:0,firstContext:s}}else la=la.next=s;return o}var Ki=null;function np(s){Ki===null?Ki=[s]:Ki.push(s)}function Ny(s,o,l,h){var m=o.interleaved;return m===null?(l.next=l,np(o)):(l.next=m.next,m.next=l),o.interleaved=l,as(s,h)}function as(s,o){s.lanes|=o;var l=s.alternate;for(l!==null&&(l.lanes|=o),l=s,s=s.return;s!==null;)s.childLanes|=o,l=s.alternate,l!==null&&(l.childLanes|=o),l=s,s=s.return;return l.tag===3?l.stateNode:null}var $s=!1;function rp(s){s.updateQueue={baseState:s.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sy(s,o){s=s.updateQueue,o.updateQueue===s&&(o.updateQueue={baseState:s.baseState,firstBaseUpdate:s.firstBaseUpdate,lastBaseUpdate:s.lastBaseUpdate,shared:s.shared,effects:s.effects})}function ls(s,o){return{eventTime:s,lane:o,tag:0,payload:null,callback:null,next:null}}function Ws(s,o,l){var h=s.updateQueue;if(h===null)return null;if(h=h.shared,(Ke&2)!==0){var m=h.pending;return m===null?o.next=o:(o.next=m.next,m.next=o),h.pending=o,as(s,l)}return m=h.interleaved,m===null?(o.next=o,np(h)):(o.next=m.next,m.next=o),h.interleaved=o,as(s,l)}function Wu(s,o,l){if(o=o.updateQueue,o!==null&&(o=o.shared,(l&4194240)!==0)){var h=o.lanes;h&=s.pendingLanes,l|=h,o.lanes=l,js(s,l)}}function ky(s,o){var l=s.updateQueue,h=s.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,y=null;if(l=l.firstBaseUpdate,l!==null){do{var T={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};y===null?m=y=T:y=y.next=T,l=l.next}while(l!==null);y===null?m=y=o:y=y.next=o}else m=y=o;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:y,shared:h.shared,effects:h.effects},s.updateQueue=l;return}s=l.lastBaseUpdate,s===null?l.firstBaseUpdate=o:s.next=o,l.lastBaseUpdate=o}function qu(s,o,l,h){var m=s.updateQueue;$s=!1;var y=m.firstBaseUpdate,T=m.lastBaseUpdate,N=m.shared.pending;if(N!==null){m.shared.pending=null;var P=N,W=P.next;P.next=null,T===null?y=W:T.next=W,T=P;var Z=s.alternate;Z!==null&&(Z=Z.updateQueue,N=Z.lastBaseUpdate,N!==T&&(N===null?Z.firstBaseUpdate=W:N.next=W,Z.lastBaseUpdate=P))}if(y!==null){var ee=m.baseState;T=0,Z=W=P=null,N=y;do{var Y=N.lane,ue=N.eventTime;if((h&Y)===Y){Z!==null&&(Z=Z.next={eventTime:ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ge=s,ve=N;switch(Y=o,ue=l,ve.tag){case 1:if(ge=ve.payload,typeof ge=="function"){ee=ge.call(ue,ee,Y);break e}ee=ge;break e;case 3:ge.flags=ge.flags&-65537|128;case 0:if(ge=ve.payload,Y=typeof ge=="function"?ge.call(ue,ee,Y):ge,Y==null)break e;ee=ne({},ee,Y);break e;case 2:$s=!0}}N.callback!==null&&N.lane!==0&&(s.flags|=64,Y=m.effects,Y===null?m.effects=[N]:Y.push(N))}else ue={eventTime:ue,lane:Y,tag:N.tag,payload:N.payload,callback:N.callback,next:null},Z===null?(W=Z=ue,P=ee):Z=Z.next=ue,T|=Y;if(N=N.next,N===null){if(N=m.shared.pending,N===null)break;Y=N,N=Y.next,Y.next=null,m.lastBaseUpdate=Y,m.shared.pending=null}}while(!0);if(Z===null&&(P=ee),m.baseState=P,m.firstBaseUpdate=W,m.lastBaseUpdate=Z,o=m.shared.interleaved,o!==null){m=o;do T|=m.lane,m=m.next;while(m!==o)}else y===null&&(m.shared.lanes=0);Xi|=T,s.lanes=T,s.memoizedState=ee}}function Ry(s,o,l){if(s=o.effects,o.effects=null,s!==null)for(o=0;o<s.length;o++){var h=s[o],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(t(191,m));m.call(h)}}}var Ol={},kr=Us(Ol),Dl=Us(Ol),Ml=Us(Ol);function Qi(s){if(s===Ol)throw Error(t(174));return s}function sp(s,o){switch(ot(Ml,o),ot(Dl,s),ot(kr,Ol),s=o.nodeType,s){case 9:case 11:o=(o=o.documentElement)?o.namespaceURI:Rt(null,"");break;default:s=s===8?o.parentNode:o,o=s.namespaceURI||null,s=s.tagName,o=Rt(o,s)}dt(kr),ot(kr,o)}function ua(){dt(kr),dt(Dl),dt(Ml)}function Ay(s){Qi(Ml.current);var o=Qi(kr.current),l=Rt(o,s.type);o!==l&&(ot(Dl,s),ot(kr,l))}function ip(s){Dl.current===s&&(dt(kr),dt(Dl))}var _t=Us(0);function Hu(s){for(var o=s;o!==null;){if(o.tag===13){var l=o.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return o}else if(o.tag===19&&o.memoizedProps.revealOrder!==void 0){if((o.flags&128)!==0)return o}else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return null;o=o.return}o.sibling.return=o.return,o=o.sibling}return null}var op=[];function ap(){for(var s=0;s<op.length;s++)op[s]._workInProgressVersionPrimary=null;op.length=0}var Gu=G.ReactCurrentDispatcher,lp=G.ReactCurrentBatchConfig,Yi=0,yt=null,Pt=null,Ut=null,Ku=!1,Ll=!1,Vl=0,_I=0;function tn(){throw Error(t(321))}function cp(s,o){if(o===null)return!1;for(var l=0;l<o.length&&l<s.length;l++)if(!ar(s[l],o[l]))return!1;return!0}function up(s,o,l,h,m,y){if(Yi=y,yt=o,o.memoizedState=null,o.updateQueue=null,o.lanes=0,Gu.current=s===null||s.memoizedState===null?xI:EI,s=l(h,m),Ll){y=0;do{if(Ll=!1,Vl=0,25<=y)throw Error(t(301));y+=1,Ut=Pt=null,o.updateQueue=null,Gu.current=TI,s=l(h,m)}while(Ll)}if(Gu.current=Xu,o=Pt!==null&&Pt.next!==null,Yi=0,Ut=Pt=yt=null,Ku=!1,o)throw Error(t(300));return s}function dp(){var s=Vl!==0;return Vl=0,s}function Rr(){var s={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?yt.memoizedState=Ut=s:Ut=Ut.next=s,Ut}function Hn(){if(Pt===null){var s=yt.alternate;s=s!==null?s.memoizedState:null}else s=Pt.next;var o=Ut===null?yt.memoizedState:Ut.next;if(o!==null)Ut=o,Pt=s;else{if(s===null)throw Error(t(310));Pt=s,s={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ut===null?yt.memoizedState=Ut=s:Ut=Ut.next=s}return Ut}function Fl(s,o){return typeof o=="function"?o(s):o}function hp(s){var o=Hn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var h=Pt,m=h.baseQueue,y=l.pending;if(y!==null){if(m!==null){var T=m.next;m.next=y.next,y.next=T}h.baseQueue=m=y,l.pending=null}if(m!==null){y=m.next,h=h.baseState;var N=T=null,P=null,W=y;do{var Z=W.lane;if((Yi&Z)===Z)P!==null&&(P=P.next={lane:0,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),h=W.hasEagerState?W.eagerState:s(h,W.action);else{var ee={lane:Z,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null};P===null?(N=P=ee,T=h):P=P.next=ee,yt.lanes|=Z,Xi|=Z}W=W.next}while(W!==null&&W!==y);P===null?T=h:P.next=N,ar(h,o.memoizedState)||(yn=!0),o.memoizedState=h,o.baseState=T,o.baseQueue=P,l.lastRenderedState=h}if(s=l.interleaved,s!==null){m=s;do y=m.lane,yt.lanes|=y,Xi|=y,m=m.next;while(m!==s)}else m===null&&(l.lanes=0);return[o.memoizedState,l.dispatch]}function fp(s){var o=Hn(),l=o.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=s;var h=l.dispatch,m=l.pending,y=o.memoizedState;if(m!==null){l.pending=null;var T=m=m.next;do y=s(y,T.action),T=T.next;while(T!==m);ar(y,o.memoizedState)||(yn=!0),o.memoizedState=y,o.baseQueue===null&&(o.baseState=y),l.lastRenderedState=y}return[y,h]}function Py(){}function jy(s,o){var l=yt,h=Hn(),m=o(),y=!ar(h.memoizedState,m);if(y&&(h.memoizedState=m,yn=!0),h=h.queue,pp(My.bind(null,l,h,s),[s]),h.getSnapshot!==o||y||Ut!==null&&Ut.memoizedState.tag&1){if(l.flags|=2048,Ul(9,Dy.bind(null,l,h,m,o),void 0,null),zt===null)throw Error(t(349));(Yi&30)!==0||Oy(l,o,m)}return m}function Oy(s,o,l){s.flags|=16384,s={getSnapshot:o,value:l},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.stores=[s]):(l=o.stores,l===null?o.stores=[s]:l.push(s))}function Dy(s,o,l,h){o.value=l,o.getSnapshot=h,Ly(o)&&Vy(s)}function My(s,o,l){return l(function(){Ly(o)&&Vy(s)})}function Ly(s){var o=s.getSnapshot;s=s.value;try{var l=o();return!ar(s,l)}catch{return!0}}function Vy(s){var o=as(s,1);o!==null&&hr(o,s,1,-1)}function Fy(s){var o=Rr();return typeof s=="function"&&(s=s()),o.memoizedState=o.baseState=s,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fl,lastRenderedState:s},o.queue=s,s=s.dispatch=wI.bind(null,yt,s),[o.memoizedState,s]}function Ul(s,o,l,h){return s={tag:s,create:o,destroy:l,deps:h,next:null},o=yt.updateQueue,o===null?(o={lastEffect:null,stores:null},yt.updateQueue=o,o.lastEffect=s.next=s):(l=o.lastEffect,l===null?o.lastEffect=s.next=s:(h=l.next,l.next=s,s.next=h,o.lastEffect=s)),s}function Uy(){return Hn().memoizedState}function Qu(s,o,l,h){var m=Rr();yt.flags|=s,m.memoizedState=Ul(1|o,l,void 0,h===void 0?null:h)}function Yu(s,o,l,h){var m=Hn();h=h===void 0?null:h;var y=void 0;if(Pt!==null){var T=Pt.memoizedState;if(y=T.destroy,h!==null&&cp(h,T.deps)){m.memoizedState=Ul(o,l,y,h);return}}yt.flags|=s,m.memoizedState=Ul(1|o,l,y,h)}function zy(s,o){return Qu(8390656,8,s,o)}function pp(s,o){return Yu(2048,8,s,o)}function By(s,o){return Yu(4,2,s,o)}function $y(s,o){return Yu(4,4,s,o)}function Wy(s,o){if(typeof o=="function")return s=s(),o(s),function(){o(null)};if(o!=null)return s=s(),o.current=s,function(){o.current=null}}function qy(s,o,l){return l=l!=null?l.concat([s]):null,Yu(4,4,Wy.bind(null,o,s),l)}function mp(){}function Hy(s,o){var l=Hn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&cp(o,h[1])?h[0]:(l.memoizedState=[s,o],s)}function Gy(s,o){var l=Hn();o=o===void 0?null:o;var h=l.memoizedState;return h!==null&&o!==null&&cp(o,h[1])?h[0]:(s=s(),l.memoizedState=[s,o],s)}function Ky(s,o,l){return(Yi&21)===0?(s.baseState&&(s.baseState=!1,yn=!0),s.memoizedState=l):(ar(l,o)||(l=Fi(),yt.lanes|=l,Xi|=l,s.baseState=!0),o)}function yI(s,o){var l=We;We=l!==0&&4>l?l:4,s(!0);var h=lp.transition;lp.transition={};try{s(!1),o()}finally{We=l,lp.transition=h}}function Qy(){return Hn().memoizedState}function vI(s,o,l){var h=Ks(s);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Yy(s))Xy(o,l);else if(l=Ny(s,o,l,h),l!==null){var m=fn();hr(l,s,h,m),Jy(l,o,h)}}function wI(s,o,l){var h=Ks(s),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Yy(s))Xy(o,m);else{var y=s.alternate;if(s.lanes===0&&(y===null||y.lanes===0)&&(y=o.lastRenderedReducer,y!==null))try{var T=o.lastRenderedState,N=y(T,l);if(m.hasEagerState=!0,m.eagerState=N,ar(N,T)){var P=o.interleaved;P===null?(m.next=m,np(o)):(m.next=P.next,P.next=m),o.interleaved=m;return}}catch{}finally{}l=Ny(s,o,m,h),l!==null&&(m=fn(),hr(l,s,h,m),Jy(l,o,h))}}function Yy(s){var o=s.alternate;return s===yt||o!==null&&o===yt}function Xy(s,o){Ll=Ku=!0;var l=s.pending;l===null?o.next=o:(o.next=l.next,l.next=o),s.pending=o}function Jy(s,o,l){if((l&4194240)!==0){var h=o.lanes;h&=s.pendingLanes,l|=h,o.lanes=l,js(s,l)}}var Xu={readContext:qn,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useInsertionEffect:tn,useLayoutEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useMutableSource:tn,useSyncExternalStore:tn,useId:tn,unstable_isNewReconciler:!1},xI={readContext:qn,useCallback:function(s,o){return Rr().memoizedState=[s,o===void 0?null:o],s},useContext:qn,useEffect:zy,useImperativeHandle:function(s,o,l){return l=l!=null?l.concat([s]):null,Qu(4194308,4,Wy.bind(null,o,s),l)},useLayoutEffect:function(s,o){return Qu(4194308,4,s,o)},useInsertionEffect:function(s,o){return Qu(4,2,s,o)},useMemo:function(s,o){var l=Rr();return o=o===void 0?null:o,s=s(),l.memoizedState=[s,o],s},useReducer:function(s,o,l){var h=Rr();return o=l!==void 0?l(o):o,h.memoizedState=h.baseState=o,s={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:s,lastRenderedState:o},h.queue=s,s=s.dispatch=vI.bind(null,yt,s),[h.memoizedState,s]},useRef:function(s){var o=Rr();return s={current:s},o.memoizedState=s},useState:Fy,useDebugValue:mp,useDeferredValue:function(s){return Rr().memoizedState=s},useTransition:function(){var s=Fy(!1),o=s[0];return s=yI.bind(null,s[1]),Rr().memoizedState=s,[o,s]},useMutableSource:function(){},useSyncExternalStore:function(s,o,l){var h=yt,m=Rr();if(gt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=o(),zt===null)throw Error(t(349));(Yi&30)!==0||Oy(h,o,l)}m.memoizedState=l;var y={value:l,getSnapshot:o};return m.queue=y,zy(My.bind(null,h,y,s),[s]),h.flags|=2048,Ul(9,Dy.bind(null,h,y,l,o),void 0,null),l},useId:function(){var s=Rr(),o=zt.identifierPrefix;if(gt){var l=os,h=is;l=(h&~(1<<32-un(h)-1)).toString(32)+l,o=":"+o+"R"+l,l=Vl++,0<l&&(o+="H"+l.toString(32)),o+=":"}else l=_I++,o=":"+o+"r"+l.toString(32)+":";return s.memoizedState=o},unstable_isNewReconciler:!1},EI={readContext:qn,useCallback:Hy,useContext:qn,useEffect:pp,useImperativeHandle:qy,useInsertionEffect:By,useLayoutEffect:$y,useMemo:Gy,useReducer:hp,useRef:Uy,useState:function(){return hp(Fl)},useDebugValue:mp,useDeferredValue:function(s){var o=Hn();return Ky(o,Pt.memoizedState,s)},useTransition:function(){var s=hp(Fl)[0],o=Hn().memoizedState;return[s,o]},useMutableSource:Py,useSyncExternalStore:jy,useId:Qy,unstable_isNewReconciler:!1},TI={readContext:qn,useCallback:Hy,useContext:qn,useEffect:pp,useImperativeHandle:qy,useInsertionEffect:By,useLayoutEffect:$y,useMemo:Gy,useReducer:fp,useRef:Uy,useState:function(){return fp(Fl)},useDebugValue:mp,useDeferredValue:function(s){var o=Hn();return Pt===null?o.memoizedState=s:Ky(o,Pt.memoizedState,s)},useTransition:function(){var s=fp(Fl)[0],o=Hn().memoizedState;return[s,o]},useMutableSource:Py,useSyncExternalStore:jy,useId:Qy,unstable_isNewReconciler:!1};function cr(s,o){if(s&&s.defaultProps){o=ne({},o),s=s.defaultProps;for(var l in s)o[l]===void 0&&(o[l]=s[l]);return o}return o}function gp(s,o,l,h){o=s.memoizedState,l=l(h,o),l=l==null?o:ne({},o,l),s.memoizedState=l,s.lanes===0&&(s.updateQueue.baseState=l)}var Ju={isMounted:function(s){return(s=s._reactInternals)?er(s)===s:!1},enqueueSetState:function(s,o,l){s=s._reactInternals;var h=fn(),m=Ks(s),y=ls(h,m);y.payload=o,l!=null&&(y.callback=l),o=Ws(s,y,m),o!==null&&(hr(o,s,m,h),Wu(o,s,m))},enqueueReplaceState:function(s,o,l){s=s._reactInternals;var h=fn(),m=Ks(s),y=ls(h,m);y.tag=1,y.payload=o,l!=null&&(y.callback=l),o=Ws(s,y,m),o!==null&&(hr(o,s,m,h),Wu(o,s,m))},enqueueForceUpdate:function(s,o){s=s._reactInternals;var l=fn(),h=Ks(s),m=ls(l,h);m.tag=2,o!=null&&(m.callback=o),o=Ws(s,m,h),o!==null&&(hr(o,s,h,l),Wu(o,s,h))}};function Zy(s,o,l,h,m,y,T){return s=s.stateNode,typeof s.shouldComponentUpdate=="function"?s.shouldComponentUpdate(h,y,T):o.prototype&&o.prototype.isPureReactComponent?!Cl(l,h)||!Cl(m,y):!0}function ev(s,o,l){var h=!1,m=zs,y=o.contextType;return typeof y=="object"&&y!==null?y=qn(y):(m=_n(o)?qi:en.current,h=o.contextTypes,y=(h=h!=null)?ra(s,m):zs),o=new o(l,y),s.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,o.updater=Ju,s.stateNode=o,o._reactInternals=s,h&&(s=s.stateNode,s.__reactInternalMemoizedUnmaskedChildContext=m,s.__reactInternalMemoizedMaskedChildContext=y),o}function tv(s,o,l,h){s=o.state,typeof o.componentWillReceiveProps=="function"&&o.componentWillReceiveProps(l,h),typeof o.UNSAFE_componentWillReceiveProps=="function"&&o.UNSAFE_componentWillReceiveProps(l,h),o.state!==s&&Ju.enqueueReplaceState(o,o.state,null)}function _p(s,o,l,h){var m=s.stateNode;m.props=l,m.state=s.memoizedState,m.refs={},rp(s);var y=o.contextType;typeof y=="object"&&y!==null?m.context=qn(y):(y=_n(o)?qi:en.current,m.context=ra(s,y)),m.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(gp(s,o,y,l),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(o=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),o!==m.state&&Ju.enqueueReplaceState(m,m.state,null),qu(s,l,m,h),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308)}function da(s,o){try{var l="",h=o;do l+=pe(h),h=h.return;while(h);var m=l}catch(y){m=`
Error generating stack: `+y.message+`
`+y.stack}return{value:s,source:o,stack:m,digest:null}}function yp(s,o,l){return{value:s,source:null,stack:l??null,digest:o??null}}function vp(s,o){try{console.error(o.value)}catch(l){setTimeout(function(){throw l})}}var bI=typeof WeakMap=="function"?WeakMap:Map;function nv(s,o,l){l=ls(-1,l),l.tag=3,l.payload={element:null};var h=o.value;return l.callback=function(){id||(id=!0,Op=h),vp(s,o)},l}function rv(s,o,l){l=ls(-1,l),l.tag=3;var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=o.value;l.payload=function(){return h(m)},l.callback=function(){vp(s,o)}}var y=s.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(l.callback=function(){vp(s,o),typeof h!="function"&&(Hs===null?Hs=new Set([this]):Hs.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})}),l}function sv(s,o,l){var h=s.pingCache;if(h===null){h=s.pingCache=new bI;var m=new Set;h.set(o,m)}else m=h.get(o),m===void 0&&(m=new Set,h.set(o,m));m.has(l)||(m.add(l),s=VI.bind(null,s,o,l),o.then(s,s))}function iv(s){do{var o;if((o=s.tag===13)&&(o=s.memoizedState,o=o!==null?o.dehydrated!==null:!0),o)return s;s=s.return}while(s!==null);return null}function ov(s,o,l,h,m){return(s.mode&1)===0?(s===o?s.flags|=65536:(s.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(o=ls(-1,1),o.tag=2,Ws(l,o,1))),l.lanes|=1),s):(s.flags|=65536,s.lanes=m,s)}var II=G.ReactCurrentOwner,yn=!1;function hn(s,o,l,h){o.child=s===null?Cy(o,null,l,h):aa(o,s.child,l,h)}function av(s,o,l,h,m){l=l.render;var y=o.ref;return ca(o,m),h=up(s,o,l,h,y,m),l=dp(),s!==null&&!yn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,cs(s,o,m)):(gt&&l&&Gf(o),o.flags|=1,hn(s,o,h,m),o.child)}function lv(s,o,l,h,m){if(s===null){var y=l.type;return typeof y=="function"&&!zp(y)&&y.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(o.tag=15,o.type=y,cv(s,o,y,h,m)):(s=dd(l.type,null,h,o,o.mode,m),s.ref=o.ref,s.return=o,o.child=s)}if(y=s.child,(s.lanes&m)===0){var T=y.memoizedProps;if(l=l.compare,l=l!==null?l:Cl,l(T,h)&&s.ref===o.ref)return cs(s,o,m)}return o.flags|=1,s=Ys(y,h),s.ref=o.ref,s.return=o,o.child=s}function cv(s,o,l,h,m){if(s!==null){var y=s.memoizedProps;if(Cl(y,h)&&s.ref===o.ref)if(yn=!1,o.pendingProps=h=y,(s.lanes&m)!==0)(s.flags&131072)!==0&&(yn=!0);else return o.lanes=s.lanes,cs(s,o,m)}return wp(s,o,l,h,m)}function uv(s,o,l){var h=o.pendingProps,m=h.children,y=s!==null?s.memoizedState:null;if(h.mode==="hidden")if((o.mode&1)===0)o.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(fa,Ln),Ln|=l;else{if((l&1073741824)===0)return s=y!==null?y.baseLanes|l:l,o.lanes=o.childLanes=1073741824,o.memoizedState={baseLanes:s,cachePool:null,transitions:null},o.updateQueue=null,ot(fa,Ln),Ln|=s,null;o.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=y!==null?y.baseLanes:l,ot(fa,Ln),Ln|=h}else y!==null?(h=y.baseLanes|l,o.memoizedState=null):h=l,ot(fa,Ln),Ln|=h;return hn(s,o,m,l),o.child}function dv(s,o){var l=o.ref;(s===null&&l!==null||s!==null&&s.ref!==l)&&(o.flags|=512,o.flags|=2097152)}function wp(s,o,l,h,m){var y=_n(l)?qi:en.current;return y=ra(o,y),ca(o,m),l=up(s,o,l,h,y,m),h=dp(),s!==null&&!yn?(o.updateQueue=s.updateQueue,o.flags&=-2053,s.lanes&=~m,cs(s,o,m)):(gt&&h&&Gf(o),o.flags|=1,hn(s,o,l,m),o.child)}function hv(s,o,l,h,m){if(_n(l)){var y=!0;Mu(o)}else y=!1;if(ca(o,m),o.stateNode===null)ed(s,o),ev(o,l,h),_p(o,l,h,m),h=!0;else if(s===null){var T=o.stateNode,N=o.memoizedProps;T.props=N;var P=T.context,W=l.contextType;typeof W=="object"&&W!==null?W=qn(W):(W=_n(l)?qi:en.current,W=ra(o,W));var Z=l.getDerivedStateFromProps,ee=typeof Z=="function"||typeof T.getSnapshotBeforeUpdate=="function";ee||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==h||P!==W)&&tv(o,T,h,W),$s=!1;var Y=o.memoizedState;T.state=Y,qu(o,h,T,m),P=o.memoizedState,N!==h||Y!==P||gn.current||$s?(typeof Z=="function"&&(gp(o,l,Z,h),P=o.memoizedState),(N=$s||Zy(o,l,N,h,Y,P,W))?(ee||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(o.flags|=4194308)):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),o.memoizedProps=h,o.memoizedState=P),T.props=h,T.state=P,T.context=W,h=N):(typeof T.componentDidMount=="function"&&(o.flags|=4194308),h=!1)}else{T=o.stateNode,Sy(s,o),N=o.memoizedProps,W=o.type===o.elementType?N:cr(o.type,N),T.props=W,ee=o.pendingProps,Y=T.context,P=l.contextType,typeof P=="object"&&P!==null?P=qn(P):(P=_n(l)?qi:en.current,P=ra(o,P));var ue=l.getDerivedStateFromProps;(Z=typeof ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==ee||Y!==P)&&tv(o,T,h,P),$s=!1,Y=o.memoizedState,T.state=Y,qu(o,h,T,m);var ge=o.memoizedState;N!==ee||Y!==ge||gn.current||$s?(typeof ue=="function"&&(gp(o,l,ue,h),ge=o.memoizedState),(W=$s||Zy(o,l,W,h,Y,ge,P)||!1)?(Z||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(h,ge,P),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(h,ge,P)),typeof T.componentDidUpdate=="function"&&(o.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(o.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=1024),o.memoizedProps=h,o.memoizedState=ge),T.props=h,T.state=ge,T.context=P,h=W):(typeof T.componentDidUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===s.memoizedProps&&Y===s.memoizedState||(o.flags|=1024),h=!1)}return xp(s,o,l,h,y,m)}function xp(s,o,l,h,m,y){dv(s,o);var T=(o.flags&128)!==0;if(!h&&!T)return m&&_y(o,l,!1),cs(s,o,y);h=o.stateNode,II.current=o;var N=T&&typeof l.getDerivedStateFromError!="function"?null:h.render();return o.flags|=1,s!==null&&T?(o.child=aa(o,s.child,null,y),o.child=aa(o,null,N,y)):hn(s,o,N,y),o.memoizedState=h.state,m&&_y(o,l,!0),o.child}function fv(s){var o=s.stateNode;o.pendingContext?my(s,o.pendingContext,o.pendingContext!==o.context):o.context&&my(s,o.context,!1),sp(s,o.containerInfo)}function pv(s,o,l,h,m){return oa(),Xf(m),o.flags|=256,hn(s,o,l,h),o.child}var Ep={dehydrated:null,treeContext:null,retryLane:0};function Tp(s){return{baseLanes:s,cachePool:null,transitions:null}}function mv(s,o,l){var h=o.pendingProps,m=_t.current,y=!1,T=(o.flags&128)!==0,N;if((N=T)||(N=s!==null&&s.memoizedState===null?!1:(m&2)!==0),N?(y=!0,o.flags&=-129):(s===null||s.memoizedState!==null)&&(m|=1),ot(_t,m&1),s===null)return Yf(o),s=o.memoizedState,s!==null&&(s=s.dehydrated,s!==null)?((o.mode&1)===0?o.lanes=1:s.data==="$!"?o.lanes=8:o.lanes=1073741824,null):(T=h.children,s=h.fallback,y?(h=o.mode,y=o.child,T={mode:"hidden",children:T},(h&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=T):y=hd(T,h,0,null),s=to(s,h,l,null),y.return=o,s.return=o,y.sibling=s,o.child=y,o.child.memoizedState=Tp(l),o.memoizedState=Ep,s):bp(o,T));if(m=s.memoizedState,m!==null&&(N=m.dehydrated,N!==null))return CI(s,o,T,h,N,m,l);if(y){y=h.fallback,T=o.mode,m=s.child,N=m.sibling;var P={mode:"hidden",children:h.children};return(T&1)===0&&o.child!==m?(h=o.child,h.childLanes=0,h.pendingProps=P,o.deletions=null):(h=Ys(m,P),h.subtreeFlags=m.subtreeFlags&14680064),N!==null?y=Ys(N,y):(y=to(y,T,l,null),y.flags|=2),y.return=o,h.return=o,h.sibling=y,o.child=h,h=y,y=o.child,T=s.child.memoizedState,T=T===null?Tp(l):{baseLanes:T.baseLanes|l,cachePool:null,transitions:T.transitions},y.memoizedState=T,y.childLanes=s.childLanes&~l,o.memoizedState=Ep,h}return y=s.child,s=y.sibling,h=Ys(y,{mode:"visible",children:h.children}),(o.mode&1)===0&&(h.lanes=l),h.return=o,h.sibling=null,s!==null&&(l=o.deletions,l===null?(o.deletions=[s],o.flags|=16):l.push(s)),o.child=h,o.memoizedState=null,h}function bp(s,o){return o=hd({mode:"visible",children:o},s.mode,0,null),o.return=s,s.child=o}function Zu(s,o,l,h){return h!==null&&Xf(h),aa(o,s.child,null,l),s=bp(o,o.pendingProps.children),s.flags|=2,o.memoizedState=null,s}function CI(s,o,l,h,m,y,T){if(l)return o.flags&256?(o.flags&=-257,h=yp(Error(t(422))),Zu(s,o,T,h)):o.memoizedState!==null?(o.child=s.child,o.flags|=128,null):(y=h.fallback,m=o.mode,h=hd({mode:"visible",children:h.children},m,0,null),y=to(y,m,T,null),y.flags|=2,h.return=o,y.return=o,h.sibling=y,o.child=h,(o.mode&1)!==0&&aa(o,s.child,null,T),o.child.memoizedState=Tp(T),o.memoizedState=Ep,y);if((o.mode&1)===0)return Zu(s,o,T,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var N=h.dgst;return h=N,y=Error(t(419)),h=yp(y,h,void 0),Zu(s,o,T,h)}if(N=(T&s.childLanes)!==0,yn||N){if(h=zt,h!==null){switch(T&-T){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(h.suspendedLanes|T))!==0?0:m,m!==0&&m!==y.retryLane&&(y.retryLane=m,as(s,m),hr(h,s,m,-1))}return Up(),h=yp(Error(t(421))),Zu(s,o,T,h)}return m.data==="$?"?(o.flags|=128,o.child=s.child,o=FI.bind(null,s),m._reactRetry=o,null):(s=y.treeContext,Mn=Fs(m.nextSibling),Dn=o,gt=!0,lr=null,s!==null&&($n[Wn++]=is,$n[Wn++]=os,$n[Wn++]=Hi,is=s.id,os=s.overflow,Hi=o),o=bp(o,h.children),o.flags|=4096,o)}function gv(s,o,l){s.lanes|=o;var h=s.alternate;h!==null&&(h.lanes|=o),tp(s.return,o,l)}function Ip(s,o,l,h,m){var y=s.memoizedState;y===null?s.memoizedState={isBackwards:o,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(y.isBackwards=o,y.rendering=null,y.renderingStartTime=0,y.last=h,y.tail=l,y.tailMode=m)}function _v(s,o,l){var h=o.pendingProps,m=h.revealOrder,y=h.tail;if(hn(s,o,h.children,l),h=_t.current,(h&2)!==0)h=h&1|2,o.flags|=128;else{if(s!==null&&(s.flags&128)!==0)e:for(s=o.child;s!==null;){if(s.tag===13)s.memoizedState!==null&&gv(s,l,o);else if(s.tag===19)gv(s,l,o);else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break e;for(;s.sibling===null;){if(s.return===null||s.return===o)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}h&=1}if(ot(_t,h),(o.mode&1)===0)o.memoizedState=null;else switch(m){case"forwards":for(l=o.child,m=null;l!==null;)s=l.alternate,s!==null&&Hu(s)===null&&(m=l),l=l.sibling;l=m,l===null?(m=o.child,o.child=null):(m=l.sibling,l.sibling=null),Ip(o,!1,m,l,y);break;case"backwards":for(l=null,m=o.child,o.child=null;m!==null;){if(s=m.alternate,s!==null&&Hu(s)===null){o.child=m;break}s=m.sibling,m.sibling=l,l=m,m=s}Ip(o,!0,l,null,y);break;case"together":Ip(o,!1,null,null,void 0);break;default:o.memoizedState=null}return o.child}function ed(s,o){(o.mode&1)===0&&s!==null&&(s.alternate=null,o.alternate=null,o.flags|=2)}function cs(s,o,l){if(s!==null&&(o.dependencies=s.dependencies),Xi|=o.lanes,(l&o.childLanes)===0)return null;if(s!==null&&o.child!==s.child)throw Error(t(153));if(o.child!==null){for(s=o.child,l=Ys(s,s.pendingProps),o.child=l,l.return=o;s.sibling!==null;)s=s.sibling,l=l.sibling=Ys(s,s.pendingProps),l.return=o;l.sibling=null}return o.child}function NI(s,o,l){switch(o.tag){case 3:fv(o),oa();break;case 5:Ay(o);break;case 1:_n(o.type)&&Mu(o);break;case 4:sp(o,o.stateNode.containerInfo);break;case 10:var h=o.type._context,m=o.memoizedProps.value;ot(Bu,h._currentValue),h._currentValue=m;break;case 13:if(h=o.memoizedState,h!==null)return h.dehydrated!==null?(ot(_t,_t.current&1),o.flags|=128,null):(l&o.child.childLanes)!==0?mv(s,o,l):(ot(_t,_t.current&1),s=cs(s,o,l),s!==null?s.sibling:null);ot(_t,_t.current&1);break;case 19:if(h=(l&o.childLanes)!==0,(s.flags&128)!==0){if(h)return _v(s,o,l);o.flags|=128}if(m=o.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),ot(_t,_t.current),h)break;return null;case 22:case 23:return o.lanes=0,uv(s,o,l)}return cs(s,o,l)}var yv,Cp,vv,wv;yv=function(s,o){for(var l=o.child;l!==null;){if(l.tag===5||l.tag===6)s.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===o)break;for(;l.sibling===null;){if(l.return===null||l.return===o)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Cp=function(){},vv=function(s,o,l,h){var m=s.memoizedProps;if(m!==h){s=o.stateNode,Qi(kr.current);var y=null;switch(l){case"input":m=Si(s,m),h=Si(s,h),y=[];break;case"select":m=ne({},m,{value:void 0}),h=ne({},h,{value:void 0}),y=[];break;case"textarea":m=tl(s,m),h=tl(s,h),y=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(s.onclick=ju)}al(l,h);var T;l=null;for(W in m)if(!h.hasOwnProperty(W)&&m.hasOwnProperty(W)&&m[W]!=null)if(W==="style"){var N=m[W];for(T in N)N.hasOwnProperty(T)&&(l||(l={}),l[T]="")}else W!=="dangerouslySetInnerHTML"&&W!=="children"&&W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&W!=="autoFocus"&&(i.hasOwnProperty(W)?y||(y=[]):(y=y||[]).push(W,null));for(W in h){var P=h[W];if(N=m?.[W],h.hasOwnProperty(W)&&P!==N&&(P!=null||N!=null))if(W==="style")if(N){for(T in N)!N.hasOwnProperty(T)||P&&P.hasOwnProperty(T)||(l||(l={}),l[T]="");for(T in P)P.hasOwnProperty(T)&&N[T]!==P[T]&&(l||(l={}),l[T]=P[T])}else l||(y||(y=[]),y.push(W,l)),l=P;else W==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,N=N?N.__html:void 0,P!=null&&N!==P&&(y=y||[]).push(W,P)):W==="children"?typeof P!="string"&&typeof P!="number"||(y=y||[]).push(W,""+P):W!=="suppressContentEditableWarning"&&W!=="suppressHydrationWarning"&&(i.hasOwnProperty(W)?(P!=null&&W==="onScroll"&&ut("scroll",s),y||N===P||(y=[])):(y=y||[]).push(W,P))}l&&(y=y||[]).push("style",l);var W=y;(o.updateQueue=W)&&(o.flags|=4)}},wv=function(s,o,l,h){l!==h&&(o.flags|=4)};function zl(s,o){if(!gt)switch(s.tailMode){case"hidden":o=s.tail;for(var l=null;o!==null;)o.alternate!==null&&(l=o),o=o.sibling;l===null?s.tail=null:l.sibling=null;break;case"collapsed":l=s.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?o||s.tail===null?s.tail=null:s.tail.sibling=null:h.sibling=null}}function nn(s){var o=s.alternate!==null&&s.alternate.child===s.child,l=0,h=0;if(o)for(var m=s.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=s,m=m.sibling;else for(m=s.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=s,m=m.sibling;return s.subtreeFlags|=h,s.childLanes=l,o}function SI(s,o,l){var h=o.pendingProps;switch(Kf(o),o.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nn(o),null;case 1:return _n(o.type)&&Du(),nn(o),null;case 3:return h=o.stateNode,ua(),dt(gn),dt(en),ap(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(s===null||s.child===null)&&(Uu(o)?o.flags|=4:s===null||s.memoizedState.isDehydrated&&(o.flags&256)===0||(o.flags|=1024,lr!==null&&(Lp(lr),lr=null))),Cp(s,o),nn(o),null;case 5:ip(o);var m=Qi(Ml.current);if(l=o.type,s!==null&&o.stateNode!=null)vv(s,o,l,h,m),s.ref!==o.ref&&(o.flags|=512,o.flags|=2097152);else{if(!h){if(o.stateNode===null)throw Error(t(166));return nn(o),null}if(s=Qi(kr.current),Uu(o)){h=o.stateNode,l=o.type;var y=o.memoizedProps;switch(h[Sr]=o,h[Al]=y,s=(o.mode&1)!==0,l){case"dialog":ut("cancel",h),ut("close",h);break;case"iframe":case"object":case"embed":ut("load",h);break;case"video":case"audio":for(m=0;m<Sl.length;m++)ut(Sl[m],h);break;case"source":ut("error",h);break;case"img":case"image":case"link":ut("error",h),ut("load",h);break;case"details":ut("toggle",h);break;case"input":Io(h,y),ut("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!y.multiple},ut("invalid",h);break;case"textarea":No(h,y),ut("invalid",h)}al(l,y),m=null;for(var T in y)if(y.hasOwnProperty(T)){var N=y[T];T==="children"?typeof N=="string"?h.textContent!==N&&(y.suppressHydrationWarning!==!0&&Pu(h.textContent,N,s),m=["children",N]):typeof N=="number"&&h.textContent!==""+N&&(y.suppressHydrationWarning!==!0&&Pu(h.textContent,N,s),m=["children",""+N]):i.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&ut("scroll",h)}switch(l){case"input":Rn(h),su(h,y,!0);break;case"textarea":Rn(h),nl(h);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(h.onclick=ju)}h=m,o.updateQueue=h,h!==null&&(o.flags|=4)}else{T=m.nodeType===9?m:m.ownerDocument,s==="http://www.w3.org/1999/xhtml"&&(s=kt(l)),s==="http://www.w3.org/1999/xhtml"?l==="script"?(s=T.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild)):typeof h.is=="string"?s=T.createElement(l,{is:h.is}):(s=T.createElement(l),l==="select"&&(T=s,h.multiple?T.multiple=!0:h.size&&(T.size=h.size))):s=T.createElementNS(s,l),s[Sr]=o,s[Al]=h,yv(s,o,!1,!1),o.stateNode=s;e:{switch(T=ll(l,h),l){case"dialog":ut("cancel",s),ut("close",s),m=h;break;case"iframe":case"object":case"embed":ut("load",s),m=h;break;case"video":case"audio":for(m=0;m<Sl.length;m++)ut(Sl[m],s);m=h;break;case"source":ut("error",s),m=h;break;case"img":case"image":case"link":ut("error",s),ut("load",s),m=h;break;case"details":ut("toggle",s),m=h;break;case"input":Io(s,h),m=Si(s,h),ut("invalid",s);break;case"option":m=h;break;case"select":s._wrapperState={wasMultiple:!!h.multiple},m=ne({},h,{value:void 0}),ut("invalid",s);break;case"textarea":No(s,h),m=tl(s,h),ut("invalid",s);break;default:m=h}al(l,m),N=m;for(y in N)if(N.hasOwnProperty(y)){var P=N[y];y==="style"?il(s,P):y==="dangerouslySetInnerHTML"?(P=P?P.__html:void 0,P!=null&&rl(s,P)):y==="children"?typeof P=="string"?(l!=="textarea"||P!=="")&&Ss(s,P):typeof P=="number"&&Ss(s,""+P):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(i.hasOwnProperty(y)?P!=null&&y==="onScroll"&&ut("scroll",s):P!=null&&le(s,y,P,T))}switch(l){case"input":Rn(s),su(s,h,!1);break;case"textarea":Rn(s),nl(s);break;case"option":h.value!=null&&s.setAttribute("value",""+Ue(h.value));break;case"select":s.multiple=!!h.multiple,y=h.value,y!=null?Qr(s,!!h.multiple,y,!1):h.defaultValue!=null&&Qr(s,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(s.onclick=ju)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(o.flags|=4)}o.ref!==null&&(o.flags|=512,o.flags|=2097152)}return nn(o),null;case 6:if(s&&o.stateNode!=null)wv(s,o,s.memoizedProps,h);else{if(typeof h!="string"&&o.stateNode===null)throw Error(t(166));if(l=Qi(Ml.current),Qi(kr.current),Uu(o)){if(h=o.stateNode,l=o.memoizedProps,h[Sr]=o,(y=h.nodeValue!==l)&&(s=Dn,s!==null))switch(s.tag){case 3:Pu(h.nodeValue,l,(s.mode&1)!==0);break;case 5:s.memoizedProps.suppressHydrationWarning!==!0&&Pu(h.nodeValue,l,(s.mode&1)!==0)}y&&(o.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[Sr]=o,o.stateNode=h}return nn(o),null;case 13:if(dt(_t),h=o.memoizedState,s===null||s.memoizedState!==null&&s.memoizedState.dehydrated!==null){if(gt&&Mn!==null&&(o.mode&1)!==0&&(o.flags&128)===0)Ty(),oa(),o.flags|=98560,y=!1;else if(y=Uu(o),h!==null&&h.dehydrated!==null){if(s===null){if(!y)throw Error(t(318));if(y=o.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Sr]=o}else oa(),(o.flags&128)===0&&(o.memoizedState=null),o.flags|=4;nn(o),y=!1}else lr!==null&&(Lp(lr),lr=null),y=!0;if(!y)return o.flags&65536?o:null}return(o.flags&128)!==0?(o.lanes=l,o):(h=h!==null,h!==(s!==null&&s.memoizedState!==null)&&h&&(o.child.flags|=8192,(o.mode&1)!==0&&(s===null||(_t.current&1)!==0?jt===0&&(jt=3):Up())),o.updateQueue!==null&&(o.flags|=4),nn(o),null);case 4:return ua(),Cp(s,o),s===null&&kl(o.stateNode.containerInfo),nn(o),null;case 10:return ep(o.type._context),nn(o),null;case 17:return _n(o.type)&&Du(),nn(o),null;case 19:if(dt(_t),y=o.memoizedState,y===null)return nn(o),null;if(h=(o.flags&128)!==0,T=y.rendering,T===null)if(h)zl(y,!1);else{if(jt!==0||s!==null&&(s.flags&128)!==0)for(s=o.child;s!==null;){if(T=Hu(s),T!==null){for(o.flags|=128,zl(y,!1),h=T.updateQueue,h!==null&&(o.updateQueue=h,o.flags|=4),o.subtreeFlags=0,h=l,l=o.child;l!==null;)y=l,s=h,y.flags&=14680066,T=y.alternate,T===null?(y.childLanes=0,y.lanes=s,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=T.childLanes,y.lanes=T.lanes,y.child=T.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=T.memoizedProps,y.memoizedState=T.memoizedState,y.updateQueue=T.updateQueue,y.type=T.type,s=T.dependencies,y.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),l=l.sibling;return ot(_t,_t.current&1|2),o.child}s=s.sibling}y.tail!==null&&it()>pa&&(o.flags|=128,h=!0,zl(y,!1),o.lanes=4194304)}else{if(!h)if(s=Hu(T),s!==null){if(o.flags|=128,h=!0,l=s.updateQueue,l!==null&&(o.updateQueue=l,o.flags|=4),zl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!T.alternate&&!gt)return nn(o),null}else 2*it()-y.renderingStartTime>pa&&l!==1073741824&&(o.flags|=128,h=!0,zl(y,!1),o.lanes=4194304);y.isBackwards?(T.sibling=o.child,o.child=T):(l=y.last,l!==null?l.sibling=T:o.child=T,y.last=T)}return y.tail!==null?(o=y.tail,y.rendering=o,y.tail=o.sibling,y.renderingStartTime=it(),o.sibling=null,l=_t.current,ot(_t,h?l&1|2:l&1),o):(nn(o),null);case 22:case 23:return Fp(),h=o.memoizedState!==null,s!==null&&s.memoizedState!==null!==h&&(o.flags|=8192),h&&(o.mode&1)!==0?(Ln&1073741824)!==0&&(nn(o),o.subtreeFlags&6&&(o.flags|=8192)):nn(o),null;case 24:return null;case 25:return null}throw Error(t(156,o.tag))}function kI(s,o){switch(Kf(o),o.tag){case 1:return _n(o.type)&&Du(),s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 3:return ua(),dt(gn),dt(en),ap(),s=o.flags,(s&65536)!==0&&(s&128)===0?(o.flags=s&-65537|128,o):null;case 5:return ip(o),null;case 13:if(dt(_t),s=o.memoizedState,s!==null&&s.dehydrated!==null){if(o.alternate===null)throw Error(t(340));oa()}return s=o.flags,s&65536?(o.flags=s&-65537|128,o):null;case 19:return dt(_t),null;case 4:return ua(),null;case 10:return ep(o.type._context),null;case 22:case 23:return Fp(),null;case 24:return null;default:return null}}var td=!1,rn=!1,RI=typeof WeakSet=="function"?WeakSet:Set,me=null;function ha(s,o){var l=s.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){wt(s,o,h)}else l.current=null}function Np(s,o,l){try{l()}catch(h){wt(s,o,h)}}var xv=!1;function AI(s,o){if(Ff=Ms,s=Z_(),Af(s)){if("selectionStart"in s)var l={start:s.selectionStart,end:s.selectionEnd};else e:{l=(l=s.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,y=h.focusNode;h=h.focusOffset;try{l.nodeType,y.nodeType}catch{l=null;break e}var T=0,N=-1,P=-1,W=0,Z=0,ee=s,Y=null;t:for(;;){for(var ue;ee!==l||m!==0&&ee.nodeType!==3||(N=T+m),ee!==y||h!==0&&ee.nodeType!==3||(P=T+h),ee.nodeType===3&&(T+=ee.nodeValue.length),(ue=ee.firstChild)!==null;)Y=ee,ee=ue;for(;;){if(ee===s)break t;if(Y===l&&++W===m&&(N=T),Y===y&&++Z===h&&(P=T),(ue=ee.nextSibling)!==null)break;ee=Y,Y=ee.parentNode}ee=ue}l=N===-1||P===-1?null:{start:N,end:P}}else l=null}l=l||{start:0,end:0}}else l=null;for(Uf={focusedElem:s,selectionRange:l},Ms=!1,me=o;me!==null;)if(o=me,s=o.child,(o.subtreeFlags&1028)!==0&&s!==null)s.return=o,me=s;else for(;me!==null;){o=me;try{var ge=o.alternate;if((o.flags&1024)!==0)switch(o.tag){case 0:case 11:case 15:break;case 1:if(ge!==null){var ve=ge.memoizedProps,Et=ge.memoizedState,z=o.stateNode,D=z.getSnapshotBeforeUpdate(o.elementType===o.type?ve:cr(o.type,ve),Et);z.__reactInternalSnapshotBeforeUpdate=D}break;case 3:var $=o.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(re){wt(o,o.return,re)}if(s=o.sibling,s!==null){s.return=o.return,me=s;break}me=o.return}return ge=xv,xv=!1,ge}function Bl(s,o,l){var h=o.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&s)===s){var y=m.destroy;m.destroy=void 0,y!==void 0&&Np(o,l,y)}m=m.next}while(m!==h)}}function nd(s,o){if(o=o.updateQueue,o=o!==null?o.lastEffect:null,o!==null){var l=o=o.next;do{if((l.tag&s)===s){var h=l.create;l.destroy=h()}l=l.next}while(l!==o)}}function Sp(s){var o=s.ref;if(o!==null){var l=s.stateNode;switch(s.tag){case 5:s=l;break;default:s=l}typeof o=="function"?o(s):o.current=s}}function Ev(s){var o=s.alternate;o!==null&&(s.alternate=null,Ev(o)),s.child=null,s.deletions=null,s.sibling=null,s.tag===5&&(o=s.stateNode,o!==null&&(delete o[Sr],delete o[Al],delete o[Wf],delete o[fI],delete o[pI])),s.stateNode=null,s.return=null,s.dependencies=null,s.memoizedProps=null,s.memoizedState=null,s.pendingProps=null,s.stateNode=null,s.updateQueue=null}function Tv(s){return s.tag===5||s.tag===3||s.tag===4}function bv(s){e:for(;;){for(;s.sibling===null;){if(s.return===null||Tv(s.return))return null;s=s.return}for(s.sibling.return=s.return,s=s.sibling;s.tag!==5&&s.tag!==6&&s.tag!==18;){if(s.flags&2||s.child===null||s.tag===4)continue e;s.child.return=s,s=s.child}if(!(s.flags&2))return s.stateNode}}function kp(s,o,l){var h=s.tag;if(h===5||h===6)s=s.stateNode,o?l.nodeType===8?l.parentNode.insertBefore(s,o):l.insertBefore(s,o):(l.nodeType===8?(o=l.parentNode,o.insertBefore(s,l)):(o=l,o.appendChild(s)),l=l._reactRootContainer,l!=null||o.onclick!==null||(o.onclick=ju));else if(h!==4&&(s=s.child,s!==null))for(kp(s,o,l),s=s.sibling;s!==null;)kp(s,o,l),s=s.sibling}function Rp(s,o,l){var h=s.tag;if(h===5||h===6)s=s.stateNode,o?l.insertBefore(s,o):l.appendChild(s);else if(h!==4&&(s=s.child,s!==null))for(Rp(s,o,l),s=s.sibling;s!==null;)Rp(s,o,l),s=s.sibling}var Yt=null,ur=!1;function qs(s,o,l){for(l=l.child;l!==null;)Iv(s,o,l),l=l.sibling}function Iv(s,o,l){if(An&&typeof An.onCommitFiberUnmount=="function")try{An.onCommitFiberUnmount(Li,l)}catch{}switch(l.tag){case 5:rn||ha(l,o);case 6:var h=Yt,m=ur;Yt=null,qs(s,o,l),Yt=h,ur=m,Yt!==null&&(ur?(s=Yt,l=l.stateNode,s.nodeType===8?s.parentNode.removeChild(l):s.removeChild(l)):Yt.removeChild(l.stateNode));break;case 18:Yt!==null&&(ur?(s=Yt,l=l.stateNode,s.nodeType===8?$f(s.parentNode,l):s.nodeType===1&&$f(s,l),ir(s)):$f(Yt,l.stateNode));break;case 4:h=Yt,m=ur,Yt=l.stateNode.containerInfo,ur=!0,qs(s,o,l),Yt=h,ur=m;break;case 0:case 11:case 14:case 15:if(!rn&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var y=m,T=y.destroy;y=y.tag,T!==void 0&&((y&2)!==0||(y&4)!==0)&&Np(l,o,T),m=m.next}while(m!==h)}qs(s,o,l);break;case 1:if(!rn&&(ha(l,o),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(N){wt(l,o,N)}qs(s,o,l);break;case 21:qs(s,o,l);break;case 22:l.mode&1?(rn=(h=rn)||l.memoizedState!==null,qs(s,o,l),rn=h):qs(s,o,l);break;default:qs(s,o,l)}}function Cv(s){var o=s.updateQueue;if(o!==null){s.updateQueue=null;var l=s.stateNode;l===null&&(l=s.stateNode=new RI),o.forEach(function(h){var m=UI.bind(null,s,h);l.has(h)||(l.add(h),h.then(m,m))})}}function dr(s,o){var l=o.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var y=s,T=o,N=T;e:for(;N!==null;){switch(N.tag){case 5:Yt=N.stateNode,ur=!1;break e;case 3:Yt=N.stateNode.containerInfo,ur=!0;break e;case 4:Yt=N.stateNode.containerInfo,ur=!0;break e}N=N.return}if(Yt===null)throw Error(t(160));Iv(y,T,m),Yt=null,ur=!1;var P=m.alternate;P!==null&&(P.return=null),m.return=null}catch(W){wt(m,o,W)}}if(o.subtreeFlags&12854)for(o=o.child;o!==null;)Nv(o,s),o=o.sibling}function Nv(s,o){var l=s.alternate,h=s.flags;switch(s.tag){case 0:case 11:case 14:case 15:if(dr(o,s),Ar(s),h&4){try{Bl(3,s,s.return),nd(3,s)}catch(ve){wt(s,s.return,ve)}try{Bl(5,s,s.return)}catch(ve){wt(s,s.return,ve)}}break;case 1:dr(o,s),Ar(s),h&512&&l!==null&&ha(l,l.return);break;case 5:if(dr(o,s),Ar(s),h&512&&l!==null&&ha(l,l.return),s.flags&32){var m=s.stateNode;try{Ss(m,"")}catch(ve){wt(s,s.return,ve)}}if(h&4&&(m=s.stateNode,m!=null)){var y=s.memoizedProps,T=l!==null?l.memoizedProps:y,N=s.type,P=s.updateQueue;if(s.updateQueue=null,P!==null)try{N==="input"&&y.type==="radio"&&y.name!=null&&Za(m,y),ll(N,T);var W=ll(N,y);for(T=0;T<P.length;T+=2){var Z=P[T],ee=P[T+1];Z==="style"?il(m,ee):Z==="dangerouslySetInnerHTML"?rl(m,ee):Z==="children"?Ss(m,ee):le(m,Z,ee,W)}switch(N){case"input":el(m,y);break;case"textarea":So(m,y);break;case"select":var Y=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!y.multiple;var ue=y.value;ue!=null?Qr(m,!!y.multiple,ue,!1):Y!==!!y.multiple&&(y.defaultValue!=null?Qr(m,!!y.multiple,y.defaultValue,!0):Qr(m,!!y.multiple,y.multiple?[]:"",!1))}m[Al]=y}catch(ve){wt(s,s.return,ve)}}break;case 6:if(dr(o,s),Ar(s),h&4){if(s.stateNode===null)throw Error(t(162));m=s.stateNode,y=s.memoizedProps;try{m.nodeValue=y}catch(ve){wt(s,s.return,ve)}}break;case 3:if(dr(o,s),Ar(s),h&4&&l!==null&&l.memoizedState.isDehydrated)try{ir(o.containerInfo)}catch(ve){wt(s,s.return,ve)}break;case 4:dr(o,s),Ar(s);break;case 13:dr(o,s),Ar(s),m=s.child,m.flags&8192&&(y=m.memoizedState!==null,m.stateNode.isHidden=y,!y||m.alternate!==null&&m.alternate.memoizedState!==null||(jp=it())),h&4&&Cv(s);break;case 22:if(Z=l!==null&&l.memoizedState!==null,s.mode&1?(rn=(W=rn)||Z,dr(o,s),rn=W):dr(o,s),Ar(s),h&8192){if(W=s.memoizedState!==null,(s.stateNode.isHidden=W)&&!Z&&(s.mode&1)!==0)for(me=s,Z=s.child;Z!==null;){for(ee=me=Z;me!==null;){switch(Y=me,ue=Y.child,Y.tag){case 0:case 11:case 14:case 15:Bl(4,Y,Y.return);break;case 1:ha(Y,Y.return);var ge=Y.stateNode;if(typeof ge.componentWillUnmount=="function"){h=Y,l=Y.return;try{o=h,ge.props=o.memoizedProps,ge.state=o.memoizedState,ge.componentWillUnmount()}catch(ve){wt(h,l,ve)}}break;case 5:ha(Y,Y.return);break;case 22:if(Y.memoizedState!==null){Rv(ee);continue}}ue!==null?(ue.return=Y,me=ue):Rv(ee)}Z=Z.sibling}e:for(Z=null,ee=s;;){if(ee.tag===5){if(Z===null){Z=ee;try{m=ee.stateNode,W?(y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(N=ee.stateNode,P=ee.memoizedProps.style,T=P!=null&&P.hasOwnProperty("display")?P.display:null,N.style.display=sl("display",T))}catch(ve){wt(s,s.return,ve)}}}else if(ee.tag===6){if(Z===null)try{ee.stateNode.nodeValue=W?"":ee.memoizedProps}catch(ve){wt(s,s.return,ve)}}else if((ee.tag!==22&&ee.tag!==23||ee.memoizedState===null||ee===s)&&ee.child!==null){ee.child.return=ee,ee=ee.child;continue}if(ee===s)break e;for(;ee.sibling===null;){if(ee.return===null||ee.return===s)break e;Z===ee&&(Z=null),ee=ee.return}Z===ee&&(Z=null),ee.sibling.return=ee.return,ee=ee.sibling}}break;case 19:dr(o,s),Ar(s),h&4&&Cv(s);break;case 21:break;default:dr(o,s),Ar(s)}}function Ar(s){var o=s.flags;if(o&2){try{e:{for(var l=s.return;l!==null;){if(Tv(l)){var h=l;break e}l=l.return}throw Error(t(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(Ss(m,""),h.flags&=-33);var y=bv(s);Rp(s,y,m);break;case 3:case 4:var T=h.stateNode.containerInfo,N=bv(s);kp(s,N,T);break;default:throw Error(t(161))}}catch(P){wt(s,s.return,P)}s.flags&=-3}o&4096&&(s.flags&=-4097)}function PI(s,o,l){me=s,Sv(s)}function Sv(s,o,l){for(var h=(s.mode&1)!==0;me!==null;){var m=me,y=m.child;if(m.tag===22&&h){var T=m.memoizedState!==null||td;if(!T){var N=m.alternate,P=N!==null&&N.memoizedState!==null||rn;N=td;var W=rn;if(td=T,(rn=P)&&!W)for(me=m;me!==null;)T=me,P=T.child,T.tag===22&&T.memoizedState!==null?Av(m):P!==null?(P.return=T,me=P):Av(m);for(;y!==null;)me=y,Sv(y),y=y.sibling;me=m,td=N,rn=W}kv(s)}else(m.subtreeFlags&8772)!==0&&y!==null?(y.return=m,me=y):kv(s)}}function kv(s){for(;me!==null;){var o=me;if((o.flags&8772)!==0){var l=o.alternate;try{if((o.flags&8772)!==0)switch(o.tag){case 0:case 11:case 15:rn||nd(5,o);break;case 1:var h=o.stateNode;if(o.flags&4&&!rn)if(l===null)h.componentDidMount();else{var m=o.elementType===o.type?l.memoizedProps:cr(o.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var y=o.updateQueue;y!==null&&Ry(o,y,h);break;case 3:var T=o.updateQueue;if(T!==null){if(l=null,o.child!==null)switch(o.child.tag){case 5:l=o.child.stateNode;break;case 1:l=o.child.stateNode}Ry(o,T,l)}break;case 5:var N=o.stateNode;if(l===null&&o.flags&4){l=N;var P=o.memoizedProps;switch(o.type){case"button":case"input":case"select":case"textarea":P.autoFocus&&l.focus();break;case"img":P.src&&(l.src=P.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(o.memoizedState===null){var W=o.alternate;if(W!==null){var Z=W.memoizedState;if(Z!==null){var ee=Z.dehydrated;ee!==null&&ir(ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}rn||o.flags&512&&Sp(o)}catch(Y){wt(o,o.return,Y)}}if(o===s){me=null;break}if(l=o.sibling,l!==null){l.return=o.return,me=l;break}me=o.return}}function Rv(s){for(;me!==null;){var o=me;if(o===s){me=null;break}var l=o.sibling;if(l!==null){l.return=o.return,me=l;break}me=o.return}}function Av(s){for(;me!==null;){var o=me;try{switch(o.tag){case 0:case 11:case 15:var l=o.return;try{nd(4,o)}catch(P){wt(o,l,P)}break;case 1:var h=o.stateNode;if(typeof h.componentDidMount=="function"){var m=o.return;try{h.componentDidMount()}catch(P){wt(o,m,P)}}var y=o.return;try{Sp(o)}catch(P){wt(o,y,P)}break;case 5:var T=o.return;try{Sp(o)}catch(P){wt(o,T,P)}}}catch(P){wt(o,o.return,P)}if(o===s){me=null;break}var N=o.sibling;if(N!==null){N.return=o.return,me=N;break}me=o.return}}var jI=Math.ceil,rd=G.ReactCurrentDispatcher,Ap=G.ReactCurrentOwner,Gn=G.ReactCurrentBatchConfig,Ke=0,zt=null,It=null,Xt=0,Ln=0,fa=Us(0),jt=0,$l=null,Xi=0,sd=0,Pp=0,Wl=null,vn=null,jp=0,pa=1/0,us=null,id=!1,Op=null,Hs=null,od=!1,Gs=null,ad=0,ql=0,Dp=null,ld=-1,cd=0;function fn(){return(Ke&6)!==0?it():ld!==-1?ld:ld=it()}function Ks(s){return(s.mode&1)===0?1:(Ke&2)!==0&&Xt!==0?Xt&-Xt:gI.transition!==null?(cd===0&&(cd=Fi()),cd):(s=We,s!==0||(s=window.event,s=s===void 0?16:vl(s.type)),s)}function hr(s,o,l,h){if(50<ql)throw ql=0,Dp=null,Error(t(185));Ps(s,l,h),((Ke&2)===0||s!==zt)&&(s===zt&&((Ke&2)===0&&(sd|=l),jt===4&&Qs(s,Xt)),wn(s,h),l===1&&Ke===0&&(o.mode&1)===0&&(pa=it()+500,Lu&&Bs()))}function wn(s,o){var l=s.callbackNode;Jr(s,o);var h=Vi(s,s===zt?Xt:0);if(h===0)l!==null&&pl(l),s.callbackNode=null,s.callbackPriority=0;else if(o=h&-h,s.callbackPriority!==o){if(l!=null&&pl(l),o===1)s.tag===0?mI(jv.bind(null,s)):yy(jv.bind(null,s)),dI(function(){(Ke&6)===0&&Bs()}),l=null;else{switch(Os(h)){case 1:l=Mi;break;case 4:l=ks;break;case 16:l=Un;break;case 536870912:l=cu;break;default:l=Un}l=zv(l,Pv.bind(null,s))}s.callbackPriority=o,s.callbackNode=l}}function Pv(s,o){if(ld=-1,cd=0,(Ke&6)!==0)throw Error(t(327));var l=s.callbackNode;if(ma()&&s.callbackNode!==l)return null;var h=Vi(s,s===zt?Xt:0);if(h===0)return null;if((h&30)!==0||(h&s.expiredLanes)!==0||o)o=ud(s,h);else{o=h;var m=Ke;Ke|=2;var y=Dv();(zt!==s||Xt!==o)&&(us=null,pa=it()+500,Zi(s,o));do try{MI();break}catch(N){Ov(s,N)}while(!0);Zf(),rd.current=y,Ke=m,It!==null?o=0:(zt=null,Xt=0,o=jt)}if(o!==0){if(o===2&&(m=Pn(s),m!==0&&(h=m,o=Mp(s,m))),o===1)throw l=$l,Zi(s,0),Qs(s,h),wn(s,it()),l;if(o===6)Qs(s,h);else{if(m=s.current.alternate,(h&30)===0&&!OI(m)&&(o=ud(s,h),o===2&&(y=Pn(s),y!==0&&(h=y,o=Mp(s,y))),o===1))throw l=$l,Zi(s,0),Qs(s,h),wn(s,it()),l;switch(s.finishedWork=m,s.finishedLanes=h,o){case 0:case 1:throw Error(t(345));case 2:eo(s,vn,us);break;case 3:if(Qs(s,h),(h&130023424)===h&&(o=jp+500-it(),10<o)){if(Vi(s,0)!==0)break;if(m=s.suspendedLanes,(m&h)!==h){fn(),s.pingedLanes|=s.suspendedLanes&m;break}s.timeoutHandle=Bf(eo.bind(null,s,vn,us),o);break}eo(s,vn,us);break;case 4:if(Qs(s,h),(h&4194240)===h)break;for(o=s.eventTimes,m=-1;0<h;){var T=31-un(h);y=1<<T,T=o[T],T>m&&(m=T),h&=~y}if(h=m,h=it()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*jI(h/1960))-h,10<h){s.timeoutHandle=Bf(eo.bind(null,s,vn,us),h);break}eo(s,vn,us);break;case 5:eo(s,vn,us);break;default:throw Error(t(329))}}}return wn(s,it()),s.callbackNode===l?Pv.bind(null,s):null}function Mp(s,o){var l=Wl;return s.current.memoizedState.isDehydrated&&(Zi(s,o).flags|=256),s=ud(s,o),s!==2&&(o=vn,vn=l,o!==null&&Lp(o)),s}function Lp(s){vn===null?vn=s:vn.push.apply(vn,s)}function OI(s){for(var o=s;;){if(o.flags&16384){var l=o.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],y=m.getSnapshot;m=m.value;try{if(!ar(y(),m))return!1}catch{return!1}}}if(l=o.child,o.subtreeFlags&16384&&l!==null)l.return=o,o=l;else{if(o===s)break;for(;o.sibling===null;){if(o.return===null||o.return===s)return!0;o=o.return}o.sibling.return=o.return,o=o.sibling}}return!0}function Qs(s,o){for(o&=~Pp,o&=~sd,s.suspendedLanes|=o,s.pingedLanes&=~o,s=s.expirationTimes;0<o;){var l=31-un(o),h=1<<l;s[l]=-1,o&=~h}}function jv(s){if((Ke&6)!==0)throw Error(t(327));ma();var o=Vi(s,0);if((o&1)===0)return wn(s,it()),null;var l=ud(s,o);if(s.tag!==0&&l===2){var h=Pn(s);h!==0&&(o=h,l=Mp(s,h))}if(l===1)throw l=$l,Zi(s,0),Qs(s,o),wn(s,it()),l;if(l===6)throw Error(t(345));return s.finishedWork=s.current.alternate,s.finishedLanes=o,eo(s,vn,us),wn(s,it()),null}function Vp(s,o){var l=Ke;Ke|=1;try{return s(o)}finally{Ke=l,Ke===0&&(pa=it()+500,Lu&&Bs())}}function Ji(s){Gs!==null&&Gs.tag===0&&(Ke&6)===0&&ma();var o=Ke;Ke|=1;var l=Gn.transition,h=We;try{if(Gn.transition=null,We=1,s)return s()}finally{We=h,Gn.transition=l,Ke=o,(Ke&6)===0&&Bs()}}function Fp(){Ln=fa.current,dt(fa)}function Zi(s,o){s.finishedWork=null,s.finishedLanes=0;var l=s.timeoutHandle;if(l!==-1&&(s.timeoutHandle=-1,uI(l)),It!==null)for(l=It.return;l!==null;){var h=l;switch(Kf(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Du();break;case 3:ua(),dt(gn),dt(en),ap();break;case 5:ip(h);break;case 4:ua();break;case 13:dt(_t);break;case 19:dt(_t);break;case 10:ep(h.type._context);break;case 22:case 23:Fp()}l=l.return}if(zt=s,It=s=Ys(s.current,null),Xt=Ln=o,jt=0,$l=null,Pp=sd=Xi=0,vn=Wl=null,Ki!==null){for(o=0;o<Ki.length;o++)if(l=Ki[o],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,y=l.pending;if(y!==null){var T=y.next;y.next=m,h.next=T}l.pending=h}Ki=null}return s}function Ov(s,o){do{var l=It;try{if(Zf(),Gu.current=Xu,Ku){for(var h=yt.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Ku=!1}if(Yi=0,Ut=Pt=yt=null,Ll=!1,Vl=0,Ap.current=null,l===null||l.return===null){jt=1,$l=o,It=null;break}e:{var y=s,T=l.return,N=l,P=o;if(o=Xt,N.flags|=32768,P!==null&&typeof P=="object"&&typeof P.then=="function"){var W=P,Z=N,ee=Z.tag;if((Z.mode&1)===0&&(ee===0||ee===11||ee===15)){var Y=Z.alternate;Y?(Z.updateQueue=Y.updateQueue,Z.memoizedState=Y.memoizedState,Z.lanes=Y.lanes):(Z.updateQueue=null,Z.memoizedState=null)}var ue=iv(T);if(ue!==null){ue.flags&=-257,ov(ue,T,N,y,o),ue.mode&1&&sv(y,W,o),o=ue,P=W;var ge=o.updateQueue;if(ge===null){var ve=new Set;ve.add(P),o.updateQueue=ve}else ge.add(P);break e}else{if((o&1)===0){sv(y,W,o),Up();break e}P=Error(t(426))}}else if(gt&&N.mode&1){var Et=iv(T);if(Et!==null){(Et.flags&65536)===0&&(Et.flags|=256),ov(Et,T,N,y,o),Xf(da(P,N));break e}}y=P=da(P,N),jt!==4&&(jt=2),Wl===null?Wl=[y]:Wl.push(y),y=T;do{switch(y.tag){case 3:y.flags|=65536,o&=-o,y.lanes|=o;var z=nv(y,P,o);ky(y,z);break e;case 1:N=P;var D=y.type,$=y.stateNode;if((y.flags&128)===0&&(typeof D.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(Hs===null||!Hs.has($)))){y.flags|=65536,o&=-o,y.lanes|=o;var re=rv(y,N,o);ky(y,re);break e}}y=y.return}while(y!==null)}Lv(l)}catch(we){o=we,It===l&&l!==null&&(It=l=l.return);continue}break}while(!0)}function Dv(){var s=rd.current;return rd.current=Xu,s===null?Xu:s}function Up(){(jt===0||jt===3||jt===2)&&(jt=4),zt===null||(Xi&268435455)===0&&(sd&268435455)===0||Qs(zt,Xt)}function ud(s,o){var l=Ke;Ke|=2;var h=Dv();(zt!==s||Xt!==o)&&(us=null,Zi(s,o));do try{DI();break}catch(m){Ov(s,m)}while(!0);if(Zf(),Ke=l,rd.current=h,It!==null)throw Error(t(261));return zt=null,Xt=0,jt}function DI(){for(;It!==null;)Mv(It)}function MI(){for(;It!==null&&!au();)Mv(It)}function Mv(s){var o=Uv(s.alternate,s,Ln);s.memoizedProps=s.pendingProps,o===null?Lv(s):It=o,Ap.current=null}function Lv(s){var o=s;do{var l=o.alternate;if(s=o.return,(o.flags&32768)===0){if(l=SI(l,o,Ln),l!==null){It=l;return}}else{if(l=kI(l,o),l!==null){l.flags&=32767,It=l;return}if(s!==null)s.flags|=32768,s.subtreeFlags=0,s.deletions=null;else{jt=6,It=null;return}}if(o=o.sibling,o!==null){It=o;return}It=o=s}while(o!==null);jt===0&&(jt=5)}function eo(s,o,l){var h=We,m=Gn.transition;try{Gn.transition=null,We=1,LI(s,o,l,h)}finally{Gn.transition=m,We=h}return null}function LI(s,o,l,h){do ma();while(Gs!==null);if((Ke&6)!==0)throw Error(t(327));l=s.finishedWork;var m=s.finishedLanes;if(l===null)return null;if(s.finishedWork=null,s.finishedLanes=0,l===s.current)throw Error(t(177));s.callbackNode=null,s.callbackPriority=0;var y=l.lanes|l.childLanes;if(rt(s,y),s===zt&&(It=zt=null,Xt=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||od||(od=!0,zv(Un,function(){return ma(),null})),y=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||y){y=Gn.transition,Gn.transition=null;var T=We;We=1;var N=Ke;Ke|=4,Ap.current=null,AI(s,l),Nv(l,s),rI(Uf),Ms=!!Ff,Uf=Ff=null,s.current=l,PI(l),Tf(),Ke=N,We=T,Gn.transition=y}else s.current=l;if(od&&(od=!1,Gs=s,ad=m),y=s.pendingLanes,y===0&&(Hs=null),uu(l.stateNode),wn(s,it()),o!==null)for(h=s.onRecoverableError,l=0;l<o.length;l++)m=o[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(id)throw id=!1,s=Op,Op=null,s;return(ad&1)!==0&&s.tag!==0&&ma(),y=s.pendingLanes,(y&1)!==0?s===Dp?ql++:(ql=0,Dp=s):ql=0,Bs(),null}function ma(){if(Gs!==null){var s=Os(ad),o=Gn.transition,l=We;try{if(Gn.transition=null,We=16>s?16:s,Gs===null)var h=!1;else{if(s=Gs,Gs=null,ad=0,(Ke&6)!==0)throw Error(t(331));var m=Ke;for(Ke|=4,me=s.current;me!==null;){var y=me,T=y.child;if((me.flags&16)!==0){var N=y.deletions;if(N!==null){for(var P=0;P<N.length;P++){var W=N[P];for(me=W;me!==null;){var Z=me;switch(Z.tag){case 0:case 11:case 15:Bl(8,Z,y)}var ee=Z.child;if(ee!==null)ee.return=Z,me=ee;else for(;me!==null;){Z=me;var Y=Z.sibling,ue=Z.return;if(Ev(Z),Z===W){me=null;break}if(Y!==null){Y.return=ue,me=Y;break}me=ue}}}var ge=y.alternate;if(ge!==null){var ve=ge.child;if(ve!==null){ge.child=null;do{var Et=ve.sibling;ve.sibling=null,ve=Et}while(ve!==null)}}me=y}}if((y.subtreeFlags&2064)!==0&&T!==null)T.return=y,me=T;else e:for(;me!==null;){if(y=me,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Bl(9,y,y.return)}var z=y.sibling;if(z!==null){z.return=y.return,me=z;break e}me=y.return}}var D=s.current;for(me=D;me!==null;){T=me;var $=T.child;if((T.subtreeFlags&2064)!==0&&$!==null)$.return=T,me=$;else e:for(T=D;me!==null;){if(N=me,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:nd(9,N)}}catch(we){wt(N,N.return,we)}if(N===T){me=null;break e}var re=N.sibling;if(re!==null){re.return=N.return,me=re;break e}me=N.return}}if(Ke=m,Bs(),An&&typeof An.onPostCommitFiberRoot=="function")try{An.onPostCommitFiberRoot(Li,s)}catch{}h=!0}return h}finally{We=l,Gn.transition=o}}return!1}function Vv(s,o,l){o=da(l,o),o=nv(s,o,1),s=Ws(s,o,1),o=fn(),s!==null&&(Ps(s,1,o),wn(s,o))}function wt(s,o,l){if(s.tag===3)Vv(s,s,l);else for(;o!==null;){if(o.tag===3){Vv(o,s,l);break}else if(o.tag===1){var h=o.stateNode;if(typeof o.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(Hs===null||!Hs.has(h))){s=da(l,s),s=rv(o,s,1),o=Ws(o,s,1),s=fn(),o!==null&&(Ps(o,1,s),wn(o,s));break}}o=o.return}}function VI(s,o,l){var h=s.pingCache;h!==null&&h.delete(o),o=fn(),s.pingedLanes|=s.suspendedLanes&l,zt===s&&(Xt&l)===l&&(jt===4||jt===3&&(Xt&130023424)===Xt&&500>it()-jp?Zi(s,0):Pp|=l),wn(s,o)}function Fv(s,o){o===0&&((s.mode&1)===0?o=1:(o=Vo,Vo<<=1,(Vo&130023424)===0&&(Vo=4194304)));var l=fn();s=as(s,o),s!==null&&(Ps(s,o,l),wn(s,l))}function FI(s){var o=s.memoizedState,l=0;o!==null&&(l=o.retryLane),Fv(s,l)}function UI(s,o){var l=0;switch(s.tag){case 13:var h=s.stateNode,m=s.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=s.stateNode;break;default:throw Error(t(314))}h!==null&&h.delete(o),Fv(s,l)}var Uv;Uv=function(s,o,l){if(s!==null)if(s.memoizedProps!==o.pendingProps||gn.current)yn=!0;else{if((s.lanes&l)===0&&(o.flags&128)===0)return yn=!1,NI(s,o,l);yn=(s.flags&131072)!==0}else yn=!1,gt&&(o.flags&1048576)!==0&&vy(o,Fu,o.index);switch(o.lanes=0,o.tag){case 2:var h=o.type;ed(s,o),s=o.pendingProps;var m=ra(o,en.current);ca(o,l),m=up(null,o,h,s,m,l);var y=dp();return o.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(o.tag=1,o.memoizedState=null,o.updateQueue=null,_n(h)?(y=!0,Mu(o)):y=!1,o.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,rp(o),m.updater=Ju,o.stateNode=m,m._reactInternals=o,_p(o,h,s,l),o=xp(null,o,h,!0,y,l)):(o.tag=0,gt&&y&&Gf(o),hn(null,o,m,l),o=o.child),o;case 16:h=o.elementType;e:{switch(ed(s,o),s=o.pendingProps,m=h._init,h=m(h._payload),o.type=h,m=o.tag=BI(h),s=cr(h,s),m){case 0:o=wp(null,o,h,s,l);break e;case 1:o=hv(null,o,h,s,l);break e;case 11:o=av(null,o,h,s,l);break e;case 14:o=lv(null,o,h,cr(h.type,s),l);break e}throw Error(t(306,h,""))}return o;case 0:return h=o.type,m=o.pendingProps,m=o.elementType===h?m:cr(h,m),wp(s,o,h,m,l);case 1:return h=o.type,m=o.pendingProps,m=o.elementType===h?m:cr(h,m),hv(s,o,h,m,l);case 3:e:{if(fv(o),s===null)throw Error(t(387));h=o.pendingProps,y=o.memoizedState,m=y.element,Sy(s,o),qu(o,h,null,l);var T=o.memoizedState;if(h=T.element,y.isDehydrated)if(y={element:h,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},o.updateQueue.baseState=y,o.memoizedState=y,o.flags&256){m=da(Error(t(423)),o),o=pv(s,o,h,l,m);break e}else if(h!==m){m=da(Error(t(424)),o),o=pv(s,o,h,l,m);break e}else for(Mn=Fs(o.stateNode.containerInfo.firstChild),Dn=o,gt=!0,lr=null,l=Cy(o,null,h,l),o.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(oa(),h===m){o=cs(s,o,l);break e}hn(s,o,h,l)}o=o.child}return o;case 5:return Ay(o),s===null&&Yf(o),h=o.type,m=o.pendingProps,y=s!==null?s.memoizedProps:null,T=m.children,zf(h,m)?T=null:y!==null&&zf(h,y)&&(o.flags|=32),dv(s,o),hn(s,o,T,l),o.child;case 6:return s===null&&Yf(o),null;case 13:return mv(s,o,l);case 4:return sp(o,o.stateNode.containerInfo),h=o.pendingProps,s===null?o.child=aa(o,null,h,l):hn(s,o,h,l),o.child;case 11:return h=o.type,m=o.pendingProps,m=o.elementType===h?m:cr(h,m),av(s,o,h,m,l);case 7:return hn(s,o,o.pendingProps,l),o.child;case 8:return hn(s,o,o.pendingProps.children,l),o.child;case 12:return hn(s,o,o.pendingProps.children,l),o.child;case 10:e:{if(h=o.type._context,m=o.pendingProps,y=o.memoizedProps,T=m.value,ot(Bu,h._currentValue),h._currentValue=T,y!==null)if(ar(y.value,T)){if(y.children===m.children&&!gn.current){o=cs(s,o,l);break e}}else for(y=o.child,y!==null&&(y.return=o);y!==null;){var N=y.dependencies;if(N!==null){T=y.child;for(var P=N.firstContext;P!==null;){if(P.context===h){if(y.tag===1){P=ls(-1,l&-l),P.tag=2;var W=y.updateQueue;if(W!==null){W=W.shared;var Z=W.pending;Z===null?P.next=P:(P.next=Z.next,Z.next=P),W.pending=P}}y.lanes|=l,P=y.alternate,P!==null&&(P.lanes|=l),tp(y.return,l,o),N.lanes|=l;break}P=P.next}}else if(y.tag===10)T=y.type===o.type?null:y.child;else if(y.tag===18){if(T=y.return,T===null)throw Error(t(341));T.lanes|=l,N=T.alternate,N!==null&&(N.lanes|=l),tp(T,l,o),T=y.sibling}else T=y.child;if(T!==null)T.return=y;else for(T=y;T!==null;){if(T===o){T=null;break}if(y=T.sibling,y!==null){y.return=T.return,T=y;break}T=T.return}y=T}hn(s,o,m.children,l),o=o.child}return o;case 9:return m=o.type,h=o.pendingProps.children,ca(o,l),m=qn(m),h=h(m),o.flags|=1,hn(s,o,h,l),o.child;case 14:return h=o.type,m=cr(h,o.pendingProps),m=cr(h.type,m),lv(s,o,h,m,l);case 15:return cv(s,o,o.type,o.pendingProps,l);case 17:return h=o.type,m=o.pendingProps,m=o.elementType===h?m:cr(h,m),ed(s,o),o.tag=1,_n(h)?(s=!0,Mu(o)):s=!1,ca(o,l),ev(o,h,m),_p(o,h,m,l),xp(null,o,h,!0,s,l);case 19:return _v(s,o,l);case 22:return uv(s,o,l)}throw Error(t(156,o.tag))};function zv(s,o){return Mo(s,o)}function zI(s,o,l,h){this.tag=s,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=o,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(s,o,l,h){return new zI(s,o,l,h)}function zp(s){return s=s.prototype,!(!s||!s.isReactComponent)}function BI(s){if(typeof s=="function")return zp(s)?1:0;if(s!=null){if(s=s.$$typeof,s===V)return 11;if(s===ct)return 14}return 2}function Ys(s,o){var l=s.alternate;return l===null?(l=Kn(s.tag,o,s.key,s.mode),l.elementType=s.elementType,l.type=s.type,l.stateNode=s.stateNode,l.alternate=s,s.alternate=l):(l.pendingProps=o,l.type=s.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=s.flags&14680064,l.childLanes=s.childLanes,l.lanes=s.lanes,l.child=s.child,l.memoizedProps=s.memoizedProps,l.memoizedState=s.memoizedState,l.updateQueue=s.updateQueue,o=s.dependencies,l.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext},l.sibling=s.sibling,l.index=s.index,l.ref=s.ref,l}function dd(s,o,l,h,m,y){var T=2;if(h=s,typeof s=="function")zp(s)&&(T=1);else if(typeof s=="string")T=5;else e:switch(s){case j:return to(l.children,m,y,o);case I:T=8,m|=8;break;case S:return s=Kn(12,l,o,m|2),s.elementType=S,s.lanes=y,s;case k:return s=Kn(13,l,o,m),s.elementType=k,s.lanes=y,s;case nt:return s=Kn(19,l,o,m),s.elementType=nt,s.lanes=y,s;case Me:return hd(l,m,y,o);default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case C:T=10;break e;case A:T=9;break e;case V:T=11;break e;case ct:T=14;break e;case Je:T=16,h=null;break e}throw Error(t(130,s==null?s:typeof s,""))}return o=Kn(T,l,o,m),o.elementType=s,o.type=h,o.lanes=y,o}function to(s,o,l,h){return s=Kn(7,s,h,o),s.lanes=l,s}function hd(s,o,l,h){return s=Kn(22,s,h,o),s.elementType=Me,s.lanes=l,s.stateNode={isHidden:!1},s}function Bp(s,o,l){return s=Kn(6,s,null,o),s.lanes=l,s}function $p(s,o,l){return o=Kn(4,s.children!==null?s.children:[],s.key,o),o.lanes=l,o.stateNode={containerInfo:s.containerInfo,pendingChildren:null,implementation:s.implementation},o}function $I(s,o,l,h,m){this.tag=o,this.containerInfo=s,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=As(0),this.expirationTimes=As(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=As(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Wp(s,o,l,h,m,y,T,N,P){return s=new $I(s,o,l,N,P),o===1?(o=1,y===!0&&(o|=8)):o=0,y=Kn(3,null,null,o),s.current=y,y.stateNode=s,y.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},rp(y),s}function WI(s,o,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fe,key:h==null?null:""+h,children:s,containerInfo:o,implementation:l}}function Bv(s){if(!s)return zs;s=s._reactInternals;e:{if(er(s)!==s||s.tag!==1)throw Error(t(170));var o=s;do{switch(o.tag){case 3:o=o.stateNode.context;break e;case 1:if(_n(o.type)){o=o.stateNode.__reactInternalMemoizedMergedChildContext;break e}}o=o.return}while(o!==null);throw Error(t(171))}if(s.tag===1){var l=s.type;if(_n(l))return gy(s,l,o)}return o}function $v(s,o,l,h,m,y,T,N,P){return s=Wp(l,h,!0,s,m,y,T,N,P),s.context=Bv(null),l=s.current,h=fn(),m=Ks(l),y=ls(h,m),y.callback=o??null,Ws(l,y,m),s.current.lanes=m,Ps(s,m,h),wn(s,h),s}function fd(s,o,l,h){var m=o.current,y=fn(),T=Ks(m);return l=Bv(l),o.context===null?o.context=l:o.pendingContext=l,o=ls(y,T),o.payload={element:s},h=h===void 0?null:h,h!==null&&(o.callback=h),s=Ws(m,o,T),s!==null&&(hr(s,m,T,y),Wu(s,m,T)),T}function pd(s){if(s=s.current,!s.child)return null;switch(s.child.tag){case 5:return s.child.stateNode;default:return s.child.stateNode}}function Wv(s,o){if(s=s.memoizedState,s!==null&&s.dehydrated!==null){var l=s.retryLane;s.retryLane=l!==0&&l<o?l:o}}function qp(s,o){Wv(s,o),(s=s.alternate)&&Wv(s,o)}function qI(){return null}var qv=typeof reportError=="function"?reportError:function(s){console.error(s)};function Hp(s){this._internalRoot=s}md.prototype.render=Hp.prototype.render=function(s){var o=this._internalRoot;if(o===null)throw Error(t(409));fd(s,o,null,null)},md.prototype.unmount=Hp.prototype.unmount=function(){var s=this._internalRoot;if(s!==null){this._internalRoot=null;var o=s.containerInfo;Ji(function(){fd(null,s,null,null)}),o[rs]=null}};function md(s){this._internalRoot=s}md.prototype.unstable_scheduleHydration=function(s){if(s){var o=mu();s={blockedOn:null,target:s,priority:o};for(var l=0;l<br.length&&o!==0&&o<br[l].priority;l++);br.splice(l,0,s),l===0&&yu(s)}};function Gp(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11)}function gd(s){return!(!s||s.nodeType!==1&&s.nodeType!==9&&s.nodeType!==11&&(s.nodeType!==8||s.nodeValue!==" react-mount-point-unstable "))}function Hv(){}function HI(s,o,l,h,m){if(m){if(typeof h=="function"){var y=h;h=function(){var W=pd(T);y.call(W)}}var T=$v(o,h,s,0,null,!1,!1,"",Hv);return s._reactRootContainer=T,s[rs]=T.current,kl(s.nodeType===8?s.parentNode:s),Ji(),T}for(;m=s.lastChild;)s.removeChild(m);if(typeof h=="function"){var N=h;h=function(){var W=pd(P);N.call(W)}}var P=Wp(s,0,!1,null,null,!1,!1,"",Hv);return s._reactRootContainer=P,s[rs]=P.current,kl(s.nodeType===8?s.parentNode:s),Ji(function(){fd(o,P,l,h)}),P}function _d(s,o,l,h,m){var y=l._reactRootContainer;if(y){var T=y;if(typeof m=="function"){var N=m;m=function(){var P=pd(T);N.call(P)}}fd(o,T,s,m)}else T=HI(l,o,s,m,h);return pd(T)}fu=function(s){switch(s.tag){case 3:var o=s.stateNode;if(o.current.memoizedState.isDehydrated){var l=Rs(o.pendingLanes);l!==0&&(js(o,l|1),wn(o,it()),(Ke&6)===0&&(pa=it()+500,Bs()))}break;case 13:Ji(function(){var h=as(s,1);if(h!==null){var m=fn();hr(h,s,1,m)}}),qp(s,1)}},Fo=function(s){if(s.tag===13){var o=as(s,134217728);if(o!==null){var l=fn();hr(o,s,134217728,l)}qp(s,134217728)}},pu=function(s){if(s.tag===13){var o=Ks(s),l=as(s,o);if(l!==null){var h=fn();hr(l,s,o,h)}qp(s,o)}},mu=function(){return We},gu=function(s,o){var l=We;try{return We=s,o()}finally{We=l}},Ro=function(s,o,l){switch(o){case"input":if(el(s,l),o=l.name,l.type==="radio"&&o!=null){for(l=s;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),o=0;o<l.length;o++){var h=l[o];if(h!==s&&h.form===s.form){var m=Ou(h);if(!m)throw Error(t(90));Xn(h),el(h,m)}}}break;case"textarea":So(s,l);break;case"select":o=l.value,o!=null&&Qr(s,!!l.multiple,o,!1)}},Pi=Vp,ul=Ji;var GI={usingClientEntryPoint:!1,Events:[Pl,ta,Ou,Er,cl,Vp]},Hl={findFiberByHostInstance:Wi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},KI={bundleType:Hl.bundleType,version:Hl.version,rendererPackageName:Hl.rendererPackageName,rendererConfig:Hl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:G.ReactCurrentDispatcher,findHostInstanceByFiber:function(s){return s=fl(s),s===null?null:s.stateNode},findFiberByHostInstance:Hl.findFiberByHostInstance||qI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yd.isDisabled&&yd.supportsFiber)try{Li=yd.inject(KI),An=yd}catch{}}return xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=GI,xn.createPortal=function(s,o){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gp(o))throw Error(t(200));return WI(s,o,null,l)},xn.createRoot=function(s,o){if(!Gp(s))throw Error(t(299));var l=!1,h="",m=qv;return o!=null&&(o.unstable_strictMode===!0&&(l=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onRecoverableError!==void 0&&(m=o.onRecoverableError)),o=Wp(s,1,!1,null,null,l,!1,h,m),s[rs]=o.current,kl(s.nodeType===8?s.parentNode:s),new Hp(o)},xn.findDOMNode=function(s){if(s==null)return null;if(s.nodeType===1)return s;var o=s._reactInternals;if(o===void 0)throw typeof s.render=="function"?Error(t(188)):(s=Object.keys(s).join(","),Error(t(268,s)));return s=fl(o),s=s===null?null:s.stateNode,s},xn.flushSync=function(s){return Ji(s)},xn.hydrate=function(s,o,l){if(!gd(o))throw Error(t(200));return _d(null,s,o,!0,l)},xn.hydrateRoot=function(s,o,l){if(!Gp(s))throw Error(t(405));var h=l!=null&&l.hydratedSources||null,m=!1,y="",T=qv;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(y=l.identifierPrefix),l.onRecoverableError!==void 0&&(T=l.onRecoverableError)),o=$v(o,null,s,1,l??null,m,!1,y,T),s[rs]=o.current,kl(s),h)for(s=0;s<h.length;s++)l=h[s],m=l._getVersion,m=m(l._source),o.mutableSourceEagerHydrationData==null?o.mutableSourceEagerHydrationData=[l,m]:o.mutableSourceEagerHydrationData.push(l,m);return new md(o)},xn.render=function(s,o,l){if(!gd(o))throw Error(t(200));return _d(null,s,o,!1,l)},xn.unmountComponentAtNode=function(s){if(!gd(s))throw Error(t(40));return s._reactRootContainer?(Ji(function(){_d(null,null,s,!1,function(){s._reactRootContainer=null,s[rs]=null})}),!0):!1},xn.unstable_batchedUpdates=Vp,xn.unstable_renderSubtreeIntoContainer=function(s,o,l,h){if(!gd(l))throw Error(t(200));if(s==null||s._reactInternals===void 0)throw Error(t(38));return _d(s,o,l,!1,h)},xn.version="18.3.1-next-f1338f8080-20240426",xn}var e0;function sC(){if(e0)return Yp.exports;e0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Yp.exports=rC(),Yp.exports}var t0;function iC(){if(t0)return vd;t0=1;var n=sC();return vd.createRoot=n.createRoot,vd.hydrateRoot=n.hydrateRoot,vd}var oC=iC(),oe=fg();const aC=XI(oe),lC=YI({__proto__:null,default:aC},[oe]);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),uC=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),n0=n=>{const e=uC(n);return e.charAt(0).toUpperCase()+e.slice(1)},Fx=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=oe.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:a,iconNode:c,...f},p)=>oe.createElement("svg",{ref:p,...dC,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:Fx("lucide",i),...f},[...c.map(([g,v])=>oe.createElement(g,v)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=(n,e)=>{const t=oe.forwardRef(({className:r,...i},a)=>oe.createElement(hC,{ref:a,iconNode:e,className:Fx(`lucide-${cC(n0(n))}`,`lucide-${n}`,r),...i}));return t.displayName=n0(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fC=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],pC=Te("arrow-left",fC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],jh=Te("award",mC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gC=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],Ux=Te("bell",gC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _C=[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]],Gd=Te("building-2",_C);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yC=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],vC=Te("calendar",yC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wC=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],r0=Te("chart-column",wC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],EC=Te("check",xC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],bC=Te("chevron-left",TC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IC=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],CC=Te("chevron-right",IC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],s0=Te("circle-alert",NC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SC=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],wc=Te("circle-check-big",SC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Od=Te("circle-help",kC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],AC=Te("circle-x",RC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],tc=Te("clock",PC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jC=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Zp=Te("dollar-sign",jC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OC=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],i0=Te("download",OC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],MC=Te("external-link",DC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LC=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],o0=Te("file-text",LC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VC=[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]],FC=Te("flag",VC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UC=[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],zC=Te("funnel",UC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],$C=Te("globe",BC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WC=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],qC=Te("house",WC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],GC=Te("info",HC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KC=[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]],zx=Te("log-in",KC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QC=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],YC=Te("log-out",QC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XC=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],JC=Te("mail",XC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZC=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Kd=Te("map-pin",ZC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],tN=Te("menu",eN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],si=Te("message-circle",nN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=[["path",{d:"M5 12h14",key:"1ays0h"}]],sN=Te("minus",rN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]],ya=Te("package",iN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=[["path",{d:"M13.234 20.252 21 12.3",key:"1cbrk9"}],["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486",key:"1pkts6"}]],aN=Te("paperclip",oN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],cN=Te("phone",lN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Pr=Te("plus",uN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],a0=Te("save",dN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],Bx=Te("search",hN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],pN=Te("send",fN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$x=Te("settings",mN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],_N=Te("shield-alert",gN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]],bm=Te("shopping-cart",yN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]],wN=Te("smile",vN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],em=Te("square-pen",xN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],TN=Te("star",EN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]],IN=Te("store",bN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],NN=Te("tag",CN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],wd=Te("trash-2",SN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Dd=Te("trending-up",kN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],l0=Te("triangle-alert",RN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]],PN=Te("trophy",AN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Qd=Te("users",jN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]],DN=Te("wrench",ON);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ti=Te("x",MN);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],VN=Te("zap",LN);function c0(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function FN(...n){return e=>{let t=!1;const r=n.map(i=>{const a=c0(i,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let i=0;i<r.length;i++){const a=r[i];typeof a=="function"?a():c0(n[i],null)}}}}var UN=Symbol.for("react.lazy"),Yd=lC[" use ".trim().toString()];function zN(n){return typeof n=="object"&&n!==null&&"then"in n}function Wx(n){return n!=null&&typeof n=="object"&&"$$typeof"in n&&n.$$typeof===UN&&"_payload"in n&&zN(n._payload)}function BN(n){const e=$N(n),t=oe.forwardRef((r,i)=>{let{children:a,...c}=r;Wx(a)&&typeof Yd=="function"&&(a=Yd(a._payload));const f=oe.Children.toArray(a),p=f.find(qN);if(p){const g=p.props.children,v=f.map(x=>x===p?oe.Children.count(g)>1?oe.Children.only(null):oe.isValidElement(g)?g.props.children:null:x);return d.jsx(e,{...c,ref:i,children:oe.isValidElement(g)?oe.cloneElement(g,void 0,v):null})}return d.jsx(e,{...c,ref:i,children:a})});return t.displayName=`${n}.Slot`,t}var qx=BN("Slot");function $N(n){const e=oe.forwardRef((t,r)=>{let{children:i,...a}=t;if(Wx(i)&&typeof Yd=="function"&&(i=Yd(i._payload)),oe.isValidElement(i)){const c=GN(i),f=HN(a,i.props);return i.type!==oe.Fragment&&(f.ref=r?FN(r,c):c),oe.cloneElement(i,f)}return oe.Children.count(i)>1?oe.Children.only(null):null});return e.displayName=`${n}.SlotClone`,e}var WN=Symbol("radix.slottable");function qN(n){return oe.isValidElement(n)&&typeof n.type=="function"&&"__radixId"in n.type&&n.type.__radixId===WN}function HN(n,e){const t={...e};for(const r in e){const i=n[r],a=e[r];/^on[A-Z]/.test(r)?i&&a?t[r]=(...f)=>{const p=a(...f);return i(...f),p}:i&&(t[r]=i):r==="style"?t[r]={...i,...a}:r==="className"&&(t[r]=[i,a].filter(Boolean).join(" "))}return{...n,...t}}function GN(n){let e=Object.getOwnPropertyDescriptor(n.props,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning;return t?n.ref:(e=Object.getOwnPropertyDescriptor(n,"ref")?.get,t=e&&"isReactWarning"in e&&e.isReactWarning,t?n.props.ref:n.props.ref||n.ref)}function Hx(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var i=n.length;for(e=0;e<i;e++)n[e]&&(t=Hx(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function Gx(){for(var n,e,t=0,r="",i=arguments.length;t<i;t++)(n=arguments[t])&&(e=Hx(n))&&(r&&(r+=" "),r+=e);return r}const u0=n=>typeof n=="boolean"?`${n}`:n===0?"0":n,d0=Gx,Kx=(n,e)=>t=>{var r;if(e?.variants==null)return d0(n,t?.class,t?.className);const{variants:i,defaultVariants:a}=e,c=Object.keys(i).map(g=>{const v=t?.[g],x=a?.[g];if(v===null)return null;const E=u0(v)||u0(x);return i[g][E]}),f=t&&Object.entries(t).reduce((g,v)=>{let[x,E]=v;return E===void 0||(g[x]=E),g},{}),p=e==null||(r=e.compoundVariants)===null||r===void 0?void 0:r.reduce((g,v)=>{let{class:x,className:E,...R}=v;return Object.entries(R).every(O=>{let[U,M]=O;return Array.isArray(M)?M.includes({...a,...f}[U]):{...a,...f}[U]===M})?[...g,x,E]:g},[]);return d0(n,c,p,t?.class,t?.className)},KN=(n,e)=>{const t=new Array(n.length+e.length);for(let r=0;r<n.length;r++)t[r]=n[r];for(let r=0;r<e.length;r++)t[n.length+r]=e[r];return t},QN=(n,e)=>({classGroupId:n,validator:e}),Qx=(n=new Map,e=null,t)=>({nextPart:n,validators:e,classGroupId:t}),Xd="-",h0=[],YN="arbitrary..",XN=n=>{const e=ZN(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return JN(c);const f=c.split(Xd),p=f[0]===""&&f.length>1?1:0;return Yx(f,p,e)},getConflictingClassGroupIds:(c,f)=>{if(f){const p=r[c],g=t[c];return p?g?KN(g,p):p:g||h0}return t[c]||h0}}},Yx=(n,e,t)=>{if(n.length-e===0)return t.classGroupId;const i=n[e],a=t.nextPart.get(i);if(a){const g=Yx(n,e+1,a);if(g)return g}const c=t.validators;if(c===null)return;const f=e===0?n.join(Xd):n.slice(e).join(Xd),p=c.length;for(let g=0;g<p;g++){const v=c[g];if(v.validator(f))return v.classGroupId}},JN=n=>n.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const e=n.slice(1,-1),t=e.indexOf(":"),r=e.slice(0,t);return r?YN+r:void 0})(),ZN=n=>{const{theme:e,classGroups:t}=n;return eS(t,e)},eS=(n,e)=>{const t=Qx();for(const r in n){const i=n[r];pg(i,t,r,e)}return t},pg=(n,e,t,r)=>{const i=n.length;for(let a=0;a<i;a++){const c=n[a];tS(c,e,t,r)}},tS=(n,e,t,r)=>{if(typeof n=="string"){nS(n,e,t);return}if(typeof n=="function"){rS(n,e,t,r);return}sS(n,e,t,r)},nS=(n,e,t)=>{const r=n===""?e:Xx(e,n);r.classGroupId=t},rS=(n,e,t,r)=>{if(iS(n)){pg(n(r),e,t,r);return}e.validators===null&&(e.validators=[]),e.validators.push(QN(t,n))},sS=(n,e,t,r)=>{const i=Object.entries(n),a=i.length;for(let c=0;c<a;c++){const[f,p]=i[c];pg(p,Xx(e,f),t,r)}},Xx=(n,e)=>{let t=n;const r=e.split(Xd),i=r.length;for(let a=0;a<i;a++){const c=r[a];let f=t.nextPart.get(c);f||(f=Qx(),t.nextPart.set(c,f)),t=f}return t},iS=n=>"isThemeGetter"in n&&n.isThemeGetter===!0,oS=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=Object.create(null),r=Object.create(null);const i=(a,c)=>{t[a]=c,e++,e>n&&(e=0,r=t,t=Object.create(null))};return{get(a){let c=t[a];if(c!==void 0)return c;if((c=r[a])!==void 0)return i(a,c),c},set(a,c){a in t?t[a]=c:i(a,c)}}},Im="!",f0=":",aS=[],p0=(n,e,t,r,i)=>({modifiers:n,hasImportantModifier:e,baseClassName:t,maybePostfixModifierPosition:r,isExternal:i}),lS=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=i=>{const a=[];let c=0,f=0,p=0,g;const v=i.length;for(let U=0;U<v;U++){const M=i[U];if(c===0&&f===0){if(M===f0){a.push(i.slice(p,U)),p=U+1;continue}if(M==="/"){g=U;continue}}M==="["?c++:M==="]"?c--:M==="("?f++:M===")"&&f--}const x=a.length===0?i:i.slice(p);let E=x,R=!1;x.endsWith(Im)?(E=x.slice(0,-1),R=!0):x.startsWith(Im)&&(E=x.slice(1),R=!0);const O=g&&g>p?g-p:void 0;return p0(a,R,E,O)};if(e){const i=e+f0,a=r;r=c=>c.startsWith(i)?a(c.slice(i.length)):p0(aS,!1,c,void 0,!0)}if(t){const i=r;r=a=>t({className:a,parseClassName:i})}return r},cS=n=>{const e=new Map;return n.orderSensitiveModifiers.forEach((t,r)=>{e.set(t,1e6+r)}),t=>{const r=[];let i=[];for(let a=0;a<t.length;a++){const c=t[a],f=c[0]==="[",p=e.has(c);f||p?(i.length>0&&(i.sort(),r.push(...i),i=[]),r.push(c)):i.push(c)}return i.length>0&&(i.sort(),r.push(...i)),r}},uS=n=>({cache:oS(n.cacheSize),parseClassName:lS(n),sortModifiers:cS(n),...XN(n)}),dS=/\s+/,hS=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:i,sortModifiers:a}=e,c=[],f=n.trim().split(dS);let p="";for(let g=f.length-1;g>=0;g-=1){const v=f[g],{isExternal:x,modifiers:E,hasImportantModifier:R,baseClassName:O,maybePostfixModifierPosition:U}=t(v);if(x){p=v+(p.length>0?" "+p:p);continue}let M=!!U,Q=r(M?O.substring(0,U):O);if(!Q){if(!M){p=v+(p.length>0?" "+p:p);continue}if(Q=r(O),!Q){p=v+(p.length>0?" "+p:p);continue}M=!1}const te=E.length===0?"":E.length===1?E[0]:a(E).join(":"),le=R?te+Im:te,G=le+Q;if(c.indexOf(G)>-1)continue;c.push(G);const J=i(Q,M);for(let fe=0;fe<J.length;++fe){const j=J[fe];c.push(le+j)}p=v+(p.length>0?" "+p:p)}return p},fS=(...n)=>{let e=0,t,r,i="";for(;e<n.length;)(t=n[e++])&&(r=Jx(t))&&(i&&(i+=" "),i+=r);return i},Jx=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=Jx(n[r]))&&(t&&(t+=" "),t+=e);return t},pS=(n,...e)=>{let t,r,i,a;const c=p=>{const g=e.reduce((v,x)=>x(v),n());return t=uS(g),r=t.cache.get,i=t.cache.set,a=f,f(p)},f=p=>{const g=r(p);if(g)return g;const v=hS(p,t);return i(p,v),v};return a=c,(...p)=>a(fS(...p))},mS=[],Ot=n=>{const e=t=>t[n]||mS;return e.isThemeGetter=!0,e},Zx=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,eE=/^\((?:(\w[\w-]*):)?(.+)\)$/i,gS=/^\d+\/\d+$/,_S=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,yS=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vS=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,wS=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,xS=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ga=n=>gS.test(n),Oe=n=>!!n&&!Number.isNaN(Number(n)),Js=n=>!!n&&Number.isInteger(Number(n)),tm=n=>n.endsWith("%")&&Oe(n.slice(0,-1)),ds=n=>_S.test(n),ES=()=>!0,TS=n=>yS.test(n)&&!vS.test(n),tE=()=>!1,bS=n=>wS.test(n),IS=n=>xS.test(n),CS=n=>!_e(n)&&!ye(n),NS=n=>Ba(n,sE,tE),_e=n=>Zx.test(n),no=n=>Ba(n,iE,TS),nm=n=>Ba(n,PS,Oe),m0=n=>Ba(n,nE,tE),SS=n=>Ba(n,rE,IS),xd=n=>Ba(n,oE,bS),ye=n=>eE.test(n),Kl=n=>$a(n,iE),kS=n=>$a(n,jS),g0=n=>$a(n,nE),RS=n=>$a(n,sE),AS=n=>$a(n,rE),Ed=n=>$a(n,oE,!0),Ba=(n,e,t)=>{const r=Zx.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},$a=(n,e,t=!1)=>{const r=eE.exec(n);return r?r[1]?e(r[1]):t:!1},nE=n=>n==="position"||n==="percentage",rE=n=>n==="image"||n==="url",sE=n=>n==="length"||n==="size"||n==="bg-size",iE=n=>n==="length",PS=n=>n==="number",jS=n=>n==="family-name",oE=n=>n==="shadow",OS=()=>{const n=Ot("color"),e=Ot("font"),t=Ot("text"),r=Ot("font-weight"),i=Ot("tracking"),a=Ot("leading"),c=Ot("breakpoint"),f=Ot("container"),p=Ot("spacing"),g=Ot("radius"),v=Ot("shadow"),x=Ot("inset-shadow"),E=Ot("text-shadow"),R=Ot("drop-shadow"),O=Ot("blur"),U=Ot("perspective"),M=Ot("aspect"),Q=Ot("ease"),te=Ot("animate"),le=()=>["auto","avoid","all","avoid-page","page","left","right","column"],G=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],J=()=>[...G(),ye,_e],fe=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],I=()=>[ye,_e,p],S=()=>[ga,"full","auto",...I()],C=()=>[Js,"none","subgrid",ye,_e],A=()=>["auto",{span:["full",Js,ye,_e]},Js,ye,_e],V=()=>[Js,"auto",ye,_e],k=()=>["auto","min","max","fr",ye,_e],nt=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ct=()=>["start","end","center","stretch","center-safe","end-safe"],Je=()=>["auto",...I()],Me=()=>[ga,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...I()],B=()=>[n,ye,_e],ce=()=>[...G(),g0,m0,{position:[ye,_e]}],ne=()=>["no-repeat",{repeat:["","x","y","space","round"]}],L=()=>["auto","cover","contain",RS,NS,{size:[ye,_e]}],H=()=>[tm,Kl,no],ae=()=>["","none","full",g,ye,_e],he=()=>["",Oe,Kl,no],pe=()=>["solid","dashed","dotted","double"],je=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],be=()=>[Oe,tm,g0,m0],Ue=()=>["","none",O,ye,_e],Ge=()=>["none",Oe,ye,_e],tt=()=>["none",Oe,ye,_e],Rn=()=>[Oe,ye,_e],Xn=()=>[ga,"full",...I()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[ds],breakpoint:[ds],color:[ES],container:[ds],"drop-shadow":[ds],ease:["in","out","in-out"],font:[CS],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[ds],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[ds],shadow:[ds],spacing:["px",Oe],text:[ds],"text-shadow":[ds],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ga,_e,ye,M]}],container:["container"],columns:[{columns:[Oe,_e,ye,f]}],"break-after":[{"break-after":le()}],"break-before":[{"break-before":le()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:J()}],overflow:[{overflow:fe()}],"overflow-x":[{"overflow-x":fe()}],"overflow-y":[{"overflow-y":fe()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:S()}],"inset-x":[{"inset-x":S()}],"inset-y":[{"inset-y":S()}],start:[{start:S()}],end:[{end:S()}],top:[{top:S()}],right:[{right:S()}],bottom:[{bottom:S()}],left:[{left:S()}],visibility:["visible","invisible","collapse"],z:[{z:[Js,"auto",ye,_e]}],basis:[{basis:[ga,"full","auto",f,...I()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Oe,ga,"auto","initial","none",_e]}],grow:[{grow:["",Oe,ye,_e]}],shrink:[{shrink:["",Oe,ye,_e]}],order:[{order:[Js,"first","last","none",ye,_e]}],"grid-cols":[{"grid-cols":C()}],"col-start-end":[{col:A()}],"col-start":[{"col-start":V()}],"col-end":[{"col-end":V()}],"grid-rows":[{"grid-rows":C()}],"row-start-end":[{row:A()}],"row-start":[{"row-start":V()}],"row-end":[{"row-end":V()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":k()}],"auto-rows":[{"auto-rows":k()}],gap:[{gap:I()}],"gap-x":[{"gap-x":I()}],"gap-y":[{"gap-y":I()}],"justify-content":[{justify:[...nt(),"normal"]}],"justify-items":[{"justify-items":[...ct(),"normal"]}],"justify-self":[{"justify-self":["auto",...ct()]}],"align-content":[{content:["normal",...nt()]}],"align-items":[{items:[...ct(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ct(),{baseline:["","last"]}]}],"place-content":[{"place-content":nt()}],"place-items":[{"place-items":[...ct(),"baseline"]}],"place-self":[{"place-self":["auto",...ct()]}],p:[{p:I()}],px:[{px:I()}],py:[{py:I()}],ps:[{ps:I()}],pe:[{pe:I()}],pt:[{pt:I()}],pr:[{pr:I()}],pb:[{pb:I()}],pl:[{pl:I()}],m:[{m:Je()}],mx:[{mx:Je()}],my:[{my:Je()}],ms:[{ms:Je()}],me:[{me:Je()}],mt:[{mt:Je()}],mr:[{mr:Je()}],mb:[{mb:Je()}],ml:[{ml:Je()}],"space-x":[{"space-x":I()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":I()}],"space-y-reverse":["space-y-reverse"],size:[{size:Me()}],w:[{w:[f,"screen",...Me()]}],"min-w":[{"min-w":[f,"screen","none",...Me()]}],"max-w":[{"max-w":[f,"screen","none","prose",{screen:[c]},...Me()]}],h:[{h:["screen","lh",...Me()]}],"min-h":[{"min-h":["screen","lh","none",...Me()]}],"max-h":[{"max-h":["screen","lh",...Me()]}],"font-size":[{text:["base",t,Kl,no]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,ye,nm]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",tm,_e]}],"font-family":[{font:[kS,_e,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[i,ye,_e]}],"line-clamp":[{"line-clamp":[Oe,"none",ye,nm]}],leading:[{leading:[a,...I()]}],"list-image":[{"list-image":["none",ye,_e]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",ye,_e]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[Oe,"from-font","auto",ye,no]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[Oe,"auto",ye,_e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:I()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ye,_e]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ye,_e]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:ce()}],"bg-repeat":[{bg:ne()}],"bg-size":[{bg:L()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Js,ye,_e],radial:["",ye,_e],conic:[Js,ye,_e]},AS,SS]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:H()}],"gradient-via-pos":[{via:H()}],"gradient-to-pos":[{to:H()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:ae()}],"rounded-s":[{"rounded-s":ae()}],"rounded-e":[{"rounded-e":ae()}],"rounded-t":[{"rounded-t":ae()}],"rounded-r":[{"rounded-r":ae()}],"rounded-b":[{"rounded-b":ae()}],"rounded-l":[{"rounded-l":ae()}],"rounded-ss":[{"rounded-ss":ae()}],"rounded-se":[{"rounded-se":ae()}],"rounded-ee":[{"rounded-ee":ae()}],"rounded-es":[{"rounded-es":ae()}],"rounded-tl":[{"rounded-tl":ae()}],"rounded-tr":[{"rounded-tr":ae()}],"rounded-br":[{"rounded-br":ae()}],"rounded-bl":[{"rounded-bl":ae()}],"border-w":[{border:he()}],"border-w-x":[{"border-x":he()}],"border-w-y":[{"border-y":he()}],"border-w-s":[{"border-s":he()}],"border-w-e":[{"border-e":he()}],"border-w-t":[{"border-t":he()}],"border-w-r":[{"border-r":he()}],"border-w-b":[{"border-b":he()}],"border-w-l":[{"border-l":he()}],"divide-x":[{"divide-x":he()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":he()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...pe(),"hidden","none"]}],"divide-style":[{divide:[...pe(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Oe,ye,_e]}],"outline-w":[{outline:["",Oe,Kl,no]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",v,Ed,xd]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",x,Ed,xd]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:he()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[Oe,no]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":he()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",E,Ed,xd]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[Oe,ye,_e]}],"mix-blend":[{"mix-blend":[...je(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":je()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Oe]}],"mask-image-linear-from-pos":[{"mask-linear-from":be()}],"mask-image-linear-to-pos":[{"mask-linear-to":be()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":be()}],"mask-image-t-to-pos":[{"mask-t-to":be()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":be()}],"mask-image-r-to-pos":[{"mask-r-to":be()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":be()}],"mask-image-b-to-pos":[{"mask-b-to":be()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":be()}],"mask-image-l-to-pos":[{"mask-l-to":be()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":be()}],"mask-image-x-to-pos":[{"mask-x-to":be()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":be()}],"mask-image-y-to-pos":[{"mask-y-to":be()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[ye,_e]}],"mask-image-radial-from-pos":[{"mask-radial-from":be()}],"mask-image-radial-to-pos":[{"mask-radial-to":be()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":G()}],"mask-image-conic-pos":[{"mask-conic":[Oe]}],"mask-image-conic-from-pos":[{"mask-conic-from":be()}],"mask-image-conic-to-pos":[{"mask-conic-to":be()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:ce()}],"mask-repeat":[{mask:ne()}],"mask-size":[{mask:L()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",ye,_e]}],filter:[{filter:["","none",ye,_e]}],blur:[{blur:Ue()}],brightness:[{brightness:[Oe,ye,_e]}],contrast:[{contrast:[Oe,ye,_e]}],"drop-shadow":[{"drop-shadow":["","none",R,Ed,xd]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",Oe,ye,_e]}],"hue-rotate":[{"hue-rotate":[Oe,ye,_e]}],invert:[{invert:["",Oe,ye,_e]}],saturate:[{saturate:[Oe,ye,_e]}],sepia:[{sepia:["",Oe,ye,_e]}],"backdrop-filter":[{"backdrop-filter":["","none",ye,_e]}],"backdrop-blur":[{"backdrop-blur":Ue()}],"backdrop-brightness":[{"backdrop-brightness":[Oe,ye,_e]}],"backdrop-contrast":[{"backdrop-contrast":[Oe,ye,_e]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Oe,ye,_e]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Oe,ye,_e]}],"backdrop-invert":[{"backdrop-invert":["",Oe,ye,_e]}],"backdrop-opacity":[{"backdrop-opacity":[Oe,ye,_e]}],"backdrop-saturate":[{"backdrop-saturate":[Oe,ye,_e]}],"backdrop-sepia":[{"backdrop-sepia":["",Oe,ye,_e]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":I()}],"border-spacing-x":[{"border-spacing-x":I()}],"border-spacing-y":[{"border-spacing-y":I()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",ye,_e]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Oe,"initial",ye,_e]}],ease:[{ease:["linear","initial",Q,ye,_e]}],delay:[{delay:[Oe,ye,_e]}],animate:[{animate:["none",te,ye,_e]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[U,ye,_e]}],"perspective-origin":[{"perspective-origin":J()}],rotate:[{rotate:Ge()}],"rotate-x":[{"rotate-x":Ge()}],"rotate-y":[{"rotate-y":Ge()}],"rotate-z":[{"rotate-z":Ge()}],scale:[{scale:tt()}],"scale-x":[{"scale-x":tt()}],"scale-y":[{"scale-y":tt()}],"scale-z":[{"scale-z":tt()}],"scale-3d":["scale-3d"],skew:[{skew:Rn()}],"skew-x":[{"skew-x":Rn()}],"skew-y":[{"skew-y":Rn()}],transform:[{transform:[ye,_e,"","none","gpu","cpu"]}],"transform-origin":[{origin:J()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Xn()}],"translate-x":[{"translate-x":Xn()}],"translate-y":[{"translate-y":Xn()}],"translate-z":[{"translate-z":Xn()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ye,_e]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":I()}],"scroll-mx":[{"scroll-mx":I()}],"scroll-my":[{"scroll-my":I()}],"scroll-ms":[{"scroll-ms":I()}],"scroll-me":[{"scroll-me":I()}],"scroll-mt":[{"scroll-mt":I()}],"scroll-mr":[{"scroll-mr":I()}],"scroll-mb":[{"scroll-mb":I()}],"scroll-ml":[{"scroll-ml":I()}],"scroll-p":[{"scroll-p":I()}],"scroll-px":[{"scroll-px":I()}],"scroll-py":[{"scroll-py":I()}],"scroll-ps":[{"scroll-ps":I()}],"scroll-pe":[{"scroll-pe":I()}],"scroll-pt":[{"scroll-pt":I()}],"scroll-pr":[{"scroll-pr":I()}],"scroll-pb":[{"scroll-pb":I()}],"scroll-pl":[{"scroll-pl":I()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ye,_e]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[Oe,Kl,no,nm]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},DS=pS(OS);function mg(...n){return DS(Gx(n))}const MS=Kx("inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",secondary:"border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",destructive:"border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"}},defaultVariants:{variant:"default"}});function In({className:n,variant:e,asChild:t=!1,...r}){const i=t?qx:"span";return d.jsx(i,{"data-slot":"badge",className:mg(MS({variant:e}),n),...r})}function aE(n){const[e,t]=oe.useState("idle");return oe.useEffect(()=>{if(window.google?.maps){t("ready");return}const r=document.querySelector("script[data-google-maps]");if(r){r.addEventListener("load",()=>t("ready")),r.addEventListener("error",()=>t("error")),t("loading");return}const i=document.createElement("script");return i.src=`https://maps.googleapis.com/maps/api/js?key=${n}&libraries=places`,i.async=!0,i.defer=!0,i.setAttribute("data-google-maps","true"),i.onload=()=>t("ready"),i.onerror=()=>t("error"),document.head.appendChild(i),t("loading"),()=>{i.onload=null,i.onerror=null}},[n]),e}const LS={lat:-23.55052,lng:-46.633308},rm=8;function VS({pins:n,onPinClick:e,onCreatePin:t,isLoggedIn:r}){const i=oe.useRef(null),a=oe.useRef(null),c=oe.useRef(null),f=oe.useRef(null),p=oe.useRef([]),[g,v]=oe.useState(null),[x,E]=oe.useState(null),O=aE("AIzaSyDZZ0VNVMWh0Q2_aEOXnPfyQYrNY0xUuu8"),U=oe.useMemo(()=>g?n.filter(M=>FS(g,{lat:M.lat,lng:M.lng})<=rm):n,[n,g]);return oe.useEffect(()=>{O!=="ready"||a.current||!i.current||(a.current=new google.maps.Map(i.current,{center:LS,zoom:13,disableDefaultUI:!0,zoomControl:!0,streetViewControl:!1,mapTypeControl:!1}))},[O]),oe.useEffect(()=>{if(O!=="ready")return;const M=navigator.geolocation.watchPosition(Q=>{const te={lat:Q.coords.latitude,lng:Q.coords.longitude};v(te),E(null)},Q=>{E(Q.message||"Não foi possível obter sua localização.")},{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4});return()=>navigator.geolocation.clearWatch(M)},[O]),oe.useEffect(()=>{!a.current||!g||O!=="ready"||(a.current.setCenter(g),a.current.setZoom(15),c.current?c.current.setPosition(g):c.current=new google.maps.Marker({map:a.current,position:g,icon:{path:google.maps.SymbolPath.CIRCLE,scale:10,fillColor:"#2563eb",fillOpacity:1,strokeColor:"#ffffff",strokeWeight:3},title:"Você está aqui"}),f.current?f.current.setCenter(g):f.current=new google.maps.Circle({map:a.current,center:g,radius:rm*1e3,fillColor:"#3b82f6",fillOpacity:.08,strokeColor:"#2563eb",strokeOpacity:.5,strokeWeight:1}))},[g,O]),oe.useEffect(()=>{if(!(!a.current||O!=="ready"))return p.current.forEach(M=>M.setMap(null)),p.current=[],U.forEach(M=>{const Q=new google.maps.Marker({map:a.current,position:{lat:M.lat,lng:M.lng},title:M.name,icon:{path:"M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7z",fillColor:M.type==="business"?"#3b82f6":M.type==="public"?"#22c55e":"#a855f7",fillOpacity:1,strokeColor:"#ffffff",strokeWeight:2,scale:1.2,anchor:new google.maps.Point(12,24)}});Q.addListener("click",()=>e(M)),p.current.push(Q)}),()=>{p.current.forEach(M=>M.setMap(null)),p.current=[]}},[U,e,O]),d.jsxs("div",{className:"relative w-full h-full",children:[d.jsx("div",{ref:i,className:"absolute inset-0 rounded-2xl overflow-hidden bg-gray-100"}),O==="error"&&d.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/90 text-sm text-red-600",children:"Configure a chave `VITE_GOOGLE_MAPS_API_KEY` para carregar o mapa."}),x&&d.jsx("div",{className:"absolute bottom-24 left-1/2 -translate-x-1/2 bg-white shadow-md rounded-full px-4 py-2 text-xs text-gray-700",children:x}),d.jsx("div",{className:"absolute top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-10",children:d.jsxs("div",{className:"bg-white rounded-full shadow-lg border border-gray-200 flex items-center p-2",children:[d.jsx(Bx,{className:"w-5 h-5 text-gray-400 ml-2"}),d.jsx("input",{type:"text",placeholder:"Buscar endereço, estabelecimento ou serviço...",className:"flex-1 px-4 py-2 focus:outline-none"}),d.jsx("button",{className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(zC,{className:"w-5 h-5 text-gray-600"})})]})}),d.jsxs("div",{className:"absolute top-20 left-4 flex flex-wrap gap-2 z-10",children:[d.jsx(In,{variant:"default",className:"bg-white text-gray-900 hover:bg-gray-100 cursor-pointer",children:"Todos"}),d.jsx(In,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Comércios"}),d.jsx(In,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Serviços públicos"}),d.jsx(In,{variant:"outline",className:"bg-white/90 backdrop-blur-sm cursor-pointer",children:"Pessoas"})]}),r&&d.jsx("button",{onClick:t,className:"absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-110 flex items-center justify-center z-10",children:d.jsx(Pr,{className:"w-7 h-7"})}),d.jsxs("div",{className:"absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200 z-10",children:[d.jsx("h4",{className:"text-sm text-gray-900 mb-3",children:"Legenda"}),d.jsxs("div",{className:"space-y-2",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-blue-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Comércios"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Serviços públicos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full"}),d.jsx("span",{className:"text-xs text-gray-700",children:"Pessoas/Grupos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-3 h-3 border border-blue-500/60 rounded-full"}),d.jsxs("span",{className:"text-xs text-gray-700",children:["Raio ",rm," km"]})]})]})]})]})}function FS(n,e){const r=Td(e.lat-n.lat),i=Td(e.lng-n.lng),a=Td(n.lat),c=Td(e.lat),f=Math.sin(r/2),p=Math.sin(i/2),g=f*f+p*p*Math.cos(a)*Math.cos(c);return 6371*(2*Math.atan2(Math.sqrt(g),Math.sqrt(1-g)))}function Td(n){return n*Math.PI/180}const US=Kx("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Ye({className:n,variant:e,size:t,asChild:r=!1,...i}){const a=r?qx:"button";return d.jsx(a,{"data-slot":"button",className:mg(US({variant:e,size:t,className:n})),...i})}function zS({isOpen:n,onClose:e,isLoggedIn:t,currentUser:r,onOpenRewards:i,onOpenModeration:a}){const c=[{icon:qC,label:"Início",href:"#"},{icon:GC,label:"Como funciona",href:"#como-funciona"},{icon:Qd,label:"Para pessoas",href:"#pessoas"},{icon:Gd,label:"Para negócios",href:"#negocios"},{icon:Gd,label:"Para serviços públicos",href:"#servicos"},{icon:Od,label:"FAQ",href:"#faq"}],f=t?[{icon:jh,label:"Minhas recompensas",action:i},{icon:_N,label:"Moderação",action:a},{icon:$x,label:"Configurações",href:"#config"}]:[];return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"p-6 border-b border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-10 h-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white",children:"G"})}),d.jsx("span",{className:"text-gray-900",children:"Groupby.Me"})]}),d.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(Ti,{className:"w-6 h-6 text-gray-600"})})]}),t&&r&&d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white",children:r.name.charAt(0)})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:r.name}),d.jsx("div",{className:"text-sm text-gray-600",children:r.email})]})]}),d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"text-sm text-gray-700",children:["Nível ",r.level]}),d.jsxs("div",{className:"bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm",children:[r.points," pontos"]})]})]})]}),d.jsxs("nav",{className:"p-4",children:[d.jsx("div",{className:"space-y-1",children:c.map(p=>d.jsxs("a",{href:p.href,onClick:e,className:"flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(p.icon,{className:"w-5 h-5"}),d.jsx("span",{children:p.label})]},p.label))}),t&&f.length>0&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"my-4 border-t border-gray-200"}),d.jsx("div",{className:"space-y-1",children:f.map(p=>d.jsxs("button",{onClick:()=>{p.action?p.action():e()},className:"w-full flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(p.icon,{className:"w-5 h-5"}),d.jsx("span",{children:p.label})]},p.label))})]})]}),d.jsxs("div",{className:"absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200 bg-white",children:[d.jsx("div",{className:"text-xs text-gray-500 mb-3",children:"© 2024 Groupby.Me • Internet 4.0 • Figital"}),t&&d.jsxs(Ye,{variant:"outline",className:"w-full",children:[d.jsx(YC,{className:"w-4 h-4 mr-2"}),"Sair"]})]})]})]}):null}function BS({isLoggedIn:n,currentUser:e,onMenuClick:t,onNotificationClick:r,onLogin:i,onLogout:a}){return d.jsx("header",{className:"bg-white border-b border-gray-200 shadow-sm z-30",children:d.jsxs("div",{className:"px-4 py-3 flex items-center justify-between",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("button",{onClick:t,className:"p-2 hover:bg-gray-100 rounded-lg transition-colors",children:d.jsx(tN,{className:"w-6 h-6 text-gray-700"})}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white text-sm",children:"G"})}),d.jsx("span",{className:"text-gray-900 hidden sm:inline",children:"Groupby.Me"})]})]}),d.jsx("div",{className:"flex items-center gap-2",children:n?d.jsxs(d.Fragment,{children:[d.jsxs("button",{onClick:r,className:"relative p-2 hover:bg-gray-100 rounded-lg transition-colors",children:[d.jsx(Ux,{className:"w-6 h-6 text-gray-700"}),d.jsx("span",{className:"absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"})]}),d.jsxs("div",{className:"hidden sm:flex items-center gap-3 ml-2 px-3 py-2 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx(jh,{className:"w-4 h-4 text-blue-600"}),d.jsxs("span",{className:"text-sm text-gray-700",children:["Nível ",e?.level]})]}),d.jsxs(In,{variant:"secondary",className:"bg-yellow-100 text-yellow-800",children:[e?.points," pts"]})]}),d.jsxs("div",{className:"flex items-center gap-2 ml-2",children:[d.jsx("div",{className:"w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center",children:d.jsx("span",{className:"text-white text-sm",children:e?.name?.charAt(0)||"U"})}),d.jsx("span",{className:"text-sm text-gray-900 hidden md:inline",children:e?.name})]})]}):d.jsxs(Ye,{onClick:i,className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(zx,{className:"w-4 h-4 mr-2"}),"Entrar"]})})]})})}function $S({isOpen:n,onClose:e,onCreate:t,currentUser:r}){const[i,a]=oe.useState(1),[c,f]=oe.useState("personal"),[p,g]=oe.useState(""),[v,x]=oe.useState(null),[E,R]=oe.useState({name:"",description:"",phone:"",email:"",cnpj:"",website:"",hours:"",categories:[],products:"",services:""}),O=oe.useRef(null),U=oe.useRef(null),Q=aE("AIzaSyDZZ0VNVMWh0Q2_aEOXnPfyQYrNY0xUuu8"),[te,le]=oe.useState(null);if(!n)return null;const G=()=>{t({type:c,name:E.name,lat:v?.lat||-23.55052,lng:v?.lng||-46.633308,address:v?.address||p,description:E.description,businessInfo:c!=="personal"?{cnpj:E.cnpj,phone:E.phone,email:E.email,website:E.website,hours:E.hours,categories:E.categories,products:E.products.split(",").map(J=>J.trim()),services:E.services.split(",").map(J=>J.trim())}:void 0}),a(1),R({name:"",description:"",phone:"",email:"",cnpj:"",website:"",hours:"",categories:[],products:"",services:""})};return oe.useEffect(()=>{if(!(Q!=="ready"||!O.current||U.current))try{U.current=new google.maps.places.Autocomplete(O.current,{fields:["formatted_address","geometry","name","types"],types:["geocode"]}),U.current.addListener("place_changed",()=>{const J=U.current?.getPlace(),fe=J?.geometry?.location;if(!J||!fe)return;const j=fe.lat(),I=fe.lng(),S=J.formatted_address||J.name||p;x({address:S,lat:j,lng:I}),g(S)})}catch(J){le("Não foi possível inicializar o autocomplete do Google Places."),console.error(J)}},[Q,p]),d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 p-6 flex items-center justify-between",children:[d.jsx("h2",{className:"text-white",children:"Criar novo pino"}),d.jsx("button",{onClick:e,className:"w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors",children:d.jsx(Ti,{className:"w-6 h-6 text-white"})})]}),d.jsxs("div",{className:"px-6 py-4 border-b border-gray-200",children:[d.jsx("div",{className:"flex items-center gap-2",children:[1,2,3].map(J=>d.jsxs("div",{className:"flex items-center flex-1",children:[d.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center ${i>=J?"bg-blue-600 text-white":"bg-gray-200 text-gray-500"}`,children:J}),J<3&&d.jsx("div",{className:`flex-1 h-1 mx-2 ${i>J?"bg-blue-600":"bg-gray-200"}`})]},J))}),d.jsxs("div",{className:"flex justify-between mt-2 text-sm text-gray-600",children:[d.jsx("span",{children:"Tipo"}),d.jsx("span",{children:"Localização"}),d.jsx("span",{children:"Detalhes"})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[i===1&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Selecione o tipo de pino"}),d.jsx("button",{onClick:()=>f("personal"),className:`w-full p-6 rounded-xl border-2 transition-all ${c==="personal"?"border-purple-500 bg-purple-50":"border-gray-200 hover:border-purple-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center",children:d.jsx(Qd,{className:"w-6 h-6 text-purple-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Pessoa física / Grupo"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Crie um pino para você ou um grupo de pessoas. Chat em grupo (n:n)."})]})]})}),d.jsx("button",{onClick:()=>f("business"),className:`w-full p-6 rounded-xl border-2 transition-all ${c==="business"?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center",children:d.jsx(Gd,{className:"w-6 h-6 text-blue-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Negócio / Empresa"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Cadastre seu estabelecimento comercial. Chat privado (1:1) com clientes."})]})]})}),d.jsx("button",{onClick:()=>f("public"),className:`w-full p-6 rounded-xl border-2 transition-all ${c==="public"?"border-green-500 bg-green-50":"border-gray-200 hover:border-green-300"}`,children:d.jsxs("div",{className:"flex items-start gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center",children:d.jsx(Gd,{className:"w-6 h-6 text-green-600"})}),d.jsxs("div",{className:"flex-1 text-left",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Órgão público"}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre um serviço público. Chat privado (1:1) com cidadãos."})]})]})})]}),i===2&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Encontre o endereço"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs("div",{className:"flex-1 relative",children:[d.jsx(Bx,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"}),d.jsx("input",{type:"text",ref:O,value:p,onChange:J=>g(J.target.value),placeholder:"Digite o nome da rua...",className:"w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",disabled:Q==="loading"})]}),d.jsx(Ye,{className:"bg-blue-600 hover:bg-blue-700",disabled:!0,title:"Escolha uma sugestão da lista do Google",children:"Buscar"})]}),Q!=="ready"&&d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm text-blue-800",children:"Carregando Google Places..."}),te&&d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700",children:te}),v&&d.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx(Kd,{className:"w-5 h-5 text-green-600 mt-1"}),d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:"Endereço encontrado"}),d.jsx("p",{className:"text-sm text-gray-600",children:v.address}),d.jsxs("p",{className:"text-xs text-gray-500 mt-1",children:["Lat: ",v.lat.toFixed(6),", Lng: ",v.lng.toFixed(6)]})]})]})})]}),i===3&&d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Informações do pino"}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Nome *"}),d.jsx("input",{type:"text",value:E.name,onChange:J=>R({...E,name:J.target.value}),placeholder:c==="personal"?"Ex: Grupo Moradores da Rua X":"Ex: Farmácia Central",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Descrição"}),d.jsx("textarea",{value:E.description,onChange:J=>R({...E,description:J.target.value}),placeholder:"Descreva brevemente...",rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),c!=="personal"&&d.jsxs(d.Fragment,{children:[d.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Telefone *"}),d.jsx("input",{type:"tel",value:E.phone,onChange:J=>R({...E,phone:J.target.value}),placeholder:"(11) 98765-4321",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"E-mail *"}),d.jsx("input",{type:"email",value:E.email,onChange:J=>R({...E,email:J.target.value}),placeholder:"contato@exemplo.com",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]}),c==="business"&&d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"CNPJ *"}),d.jsx("input",{type:"text",value:E.cnpj,onChange:J=>R({...E,cnpj:J.target.value}),placeholder:"00.000.000/0000-00",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Horário de funcionamento"}),d.jsx("input",{type:"text",value:E.hours,onChange:J=>R({...E,hours:J.target.value}),placeholder:"Seg-Sex: 8h-18h, Sáb: 8h-12h",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs("div",{children:[d.jsxs("label",{className:"block text-sm text-gray-700 mb-2",children:[c==="business"?"Produtos":"Serviços"," (separados por vírgula)"]}),d.jsx("input",{type:"text",value:c==="business"?E.products:E.services,onChange:J=>R({...E,[c==="business"?"products":"services"]:J.target.value}),placeholder:c==="business"?"Medicamentos, Cosméticos, Higiene":"Atendimento emergencial, Consultas, Exames",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]})]})]})]}),d.jsxs("div",{className:"p-6 border-t border-gray-200 flex items-center justify-between",children:[i>1&&d.jsx(Ye,{variant:"outline",onClick:()=>a(i-1),children:"Voltar"}),d.jsx("div",{className:"flex-1"}),i<3?d.jsx(Ye,{onClick:()=>a(i+1),disabled:i===2&&!v,className:"bg-blue-600 hover:bg-blue-700",children:"Próximo"}):d.jsx(Ye,{onClick:G,disabled:!E.name||c!=="personal"&&(!E.phone||!E.email),className:"bg-green-600 hover:bg-green-700",children:"Criar pino"})]})]})})}function WS({isOpen:n,onClose:e,pin:t,onStartChat:r,isLoggedIn:i,onLogin:a}){const[c,f]=oe.useState({}),[p,g]=oe.useState({}),[v,x]=oe.useState(!1);if(!n)return null;const E=t.type==="business"?"from-blue-600 to-blue-700":"from-green-600 to-green-700",R=t.type==="business",O=t.businessInfo?.products&&t.businessInfo.products.length>0,U=t.businessInfo?.services&&t.businessInfo.services.length>0,M=(G,J)=>{f(fe=>{const j=fe[G]||0,I=Math.max(0,j+J);if(I===0){const{[G]:S,...C}=fe;return C}return{...fe,[G]:I}})},Q=G=>{g(J=>({...J,[G]:!J[G]}))},te=()=>{const G=Object.values(c).reduce((fe,j)=>fe+j,0),J=Object.values(p).filter(Boolean).length;return G+J},le=()=>{const G={products:Object.entries(c).map(([J,fe])=>({name:J,quantity:fe})),services:Object.entries(p).filter(([J,fe])=>fe).map(([J])=>({name:J}))};G.products.length>0||G.services.length>0?r(G):r()};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col",children:[d.jsxs("div",{className:`bg-gradient-to-r ${E} p-6 relative`,children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-10 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm","aria-label":"Fechar",children:d.jsx(Ti,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{className:"flex items-start gap-4 mt-2",children:[d.jsx("div",{className:"w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(Kd,{className:"w-10 h-10 text-white"})}),d.jsxs("div",{className:"flex-1 pr-12",children:[d.jsx("h2",{className:"text-white mb-2",children:t.name}),d.jsx("p",{className:"text-white/80 text-sm mb-3",children:t.description}),d.jsxs("div",{className:"flex items-center gap-2 text-white/80 text-sm",children:[d.jsx(Kd,{className:"w-4 h-4"}),t.address]})]})]})]}),d.jsxs("div",{className:"flex-1 overflow-y-auto p-6",children:[d.jsxs("div",{className:"grid grid-cols-3 gap-4 mb-6",children:[d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.views}),d.jsx("div",{className:"text-xs text-gray-600",children:"Visualizações"})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.chatsStarted}),d.jsx("div",{className:"text-xs text-gray-600",children:"Conversas iniciadas"})]}),d.jsxs("div",{className:"bg-gray-50 rounded-lg p-4 text-center",children:[d.jsx("div",{className:"text-2xl text-gray-900 mb-1",children:t.stats.messages}),d.jsx("div",{className:"text-xs text-gray-600",children:"Mensagens trocadas"})]})]}),t.businessInfo&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Informações de contato"}),d.jsxs("div",{className:"space-y-3",children:[d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(cN,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.phone})]}),d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(JC,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.email})]}),t.businessInfo.website&&d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx($C,{className:"w-5 h-5 text-gray-400"}),d.jsxs("a",{href:`https://${t.businessInfo.website}`,target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 hover:underline flex items-center gap-1",children:[t.businessInfo.website,d.jsx(MC,{className:"w-4 h-4"})]})]}),t.businessInfo.hours&&d.jsxs("div",{className:"flex items-center gap-3 text-gray-700",children:[d.jsx(tc,{className:"w-5 h-5 text-gray-400"}),d.jsx("span",{children:t.businessInfo.hours})]})]})]}),t.businessInfo.cnpj&&d.jsxs("div",{children:[d.jsx("h4",{className:"text-sm text-gray-600 mb-2",children:"CNPJ"}),d.jsx("p",{className:"text-gray-900",children:t.businessInfo.cnpj})]}),t.businessInfo.categories&&t.businessInfo.categories.length>0&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-3",children:"Categorias"}),d.jsx("div",{className:"flex flex-wrap gap-2",children:t.businessInfo.categories.map((G,J)=>d.jsxs(In,{variant:"secondary",children:[d.jsx(NN,{className:"w-3 h-3 mr-1"}),G]},J))})]}),R&&O&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Produtos disponíveis"}),te()>0&&d.jsxs(In,{className:"bg-blue-600 text-white",children:[d.jsx(bm,{className:"w-3 h-3 mr-1"}),te()," ",te()===1?"item":"itens"]})]}),d.jsx("div",{className:"space-y-3",children:t.businessInfo.products.map((G,J)=>d.jsx("div",{className:`border-2 rounded-xl p-4 transition-all ${c[G]?"border-blue-500 bg-blue-50":"border-gray-200 hover:border-blue-300"}`,children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:G}),d.jsx("p",{className:"text-sm text-gray-600",children:"Disponível para consulta"})]}),d.jsx("div",{className:"flex items-center gap-2",children:c[G]?d.jsxs(d.Fragment,{children:[d.jsx("button",{onClick:()=>M(G,-1),className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors",children:d.jsx(sN,{className:"w-4 h-4"})}),d.jsx("span",{className:"w-8 text-center text-gray-900",children:c[G]}),d.jsx("button",{onClick:()=>M(G,1),className:"w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors",children:d.jsx(Pr,{className:"w-4 h-4"})})]}):d.jsxs("button",{onClick:()=>M(G,1),className:"px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2",children:[d.jsx(Pr,{className:"w-4 h-4"}),"Adicionar"]})})]})},J))})]}),R&&U&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Serviços disponíveis"}),d.jsx("div",{className:"space-y-3",children:t.businessInfo.services.map((G,J)=>d.jsx("div",{className:`border-2 rounded-xl p-4 transition-all cursor-pointer ${p[G]?"border-green-500 bg-green-50":"border-gray-200 hover:border-green-300"}`,onClick:()=>Q(G),children:d.jsxs("div",{className:"flex items-center justify-between",children:[d.jsxs("div",{className:"flex-1",children:[d.jsx("h4",{className:"text-gray-900 mb-1",children:G}),d.jsx("p",{className:"text-sm text-gray-600",children:"Clique para demonstrar interesse"})]}),d.jsx("div",{className:`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${p[G]?"bg-green-600 border-green-600":"border-gray-300"}`,children:p[G]&&d.jsx("svg",{className:"w-4 h-4 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:d.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})})]})},J))})]}),!R&&U&&d.jsxs("div",{children:[d.jsx("h3",{className:"text-gray-900 mb-3",children:"Serviços"}),d.jsx("div",{className:"grid grid-cols-2 gap-2",children:t.businessInfo.services.map((G,J)=>d.jsxs("div",{className:"bg-green-50 rounded-lg px-3 py-2 text-sm text-gray-700",children:["• ",G]},J))})]})]}),R&&te()>0&&d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(bm,{className:"w-5 h-5 text-blue-600"}),"Seu interesse será enviado"]}),d.jsxs("div",{className:"space-y-2 text-sm",children:[Object.entries(c).map(([G,J])=>d.jsxs("div",{className:"flex items-center justify-between text-gray-700",children:[d.jsxs("span",{children:["• ",G]}),d.jsxs(In,{variant:"secondary",children:["Qtd: ",J]})]},G)),Object.entries(p).filter(([G,J])=>J).map(([G])=>d.jsx("div",{className:"flex items-center text-gray-700",children:d.jsxs("span",{children:["• ",G]})},G))]}),d.jsx("p",{className:"text-xs text-gray-600 mt-3",children:"💡 O estabelecimento receberá uma notificação com seus interesses e poderá responder via chat."})]})]}),d.jsx("div",{className:"p-6 border-t border-gray-200 bg-white",children:i?d.jsxs(Ye,{onClick:le,className:`w-full bg-gradient-to-r ${E}`,children:[d.jsx(si,{className:"w-5 h-5 mr-2"}),te()>0?`Iniciar conversa e enviar interesse (${te()} ${te()===1?"item":"itens"})`:"Iniciar conversa (1:1)"]}):d.jsxs("div",{className:"text-center",children:[d.jsxs("p",{className:"text-gray-600 mb-3",children:["Faça login para ",te()>0?"enviar seu interesse e ":"","iniciar uma conversa"]}),d.jsx(Ye,{className:"bg-blue-600 hover:bg-blue-700",onClick:a,children:"Entrar ou criar conta"})]})})]})})}function qS({userName:n,products:e=[],services:t=[]}){return e.length===0&&t.length===0?null:d.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-300 rounded-xl p-4 mb-4",children:d.jsxs("div",{className:"flex items-start gap-3",children:[d.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0",children:d.jsx(bm,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("h4",{className:"text-gray-900 mb-2",children:[n," demonstrou interesse!"]}),e.length>0&&d.jsxs("div",{className:"mb-3",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(ya,{className:"w-4 h-4 text-blue-600"}),d.jsx("span",{className:"text-sm text-gray-700",children:"Produtos:"})]}),d.jsx("div",{className:"space-y-1",children:e.map((r,i)=>d.jsxs("div",{className:"flex items-center justify-between bg-white rounded-lg px-3 py-2",children:[d.jsx("span",{className:"text-sm text-gray-900",children:r.name}),d.jsxs(In,{variant:"secondary",className:"bg-blue-100 text-blue-800",children:["Qtd: ",r.quantity]})]},i))})]}),t.length>0&&d.jsxs("div",{children:[d.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[d.jsx(DN,{className:"w-4 h-4 text-green-600"}),d.jsx("span",{className:"text-sm text-gray-700",children:"Serviços:"})]}),d.jsx("div",{className:"space-y-1",children:t.map((r,i)=>d.jsx("div",{className:"bg-white rounded-lg px-3 py-2",children:d.jsx("span",{className:"text-sm text-gray-900",children:r.name})},i))})]}),d.jsx("p",{className:"text-xs text-gray-600 mt-3",children:"💬 Responda para fornecer mais informações sobre disponibilidade e preços!"})]})]})})}function HS({isOpen:n,onClose:e,pin:t,isLoggedIn:r,currentUser:i,onLogin:a,interest:c}){const[f,p]=oe.useState([{id:1,sender:"Carlos S.",senderId:"carlos",message:"Olá! Está funcionando?",time:"10:15",isOwn:!1},{id:2,sender:t.name,senderId:t.id,message:"Sim! Como posso ajudar?",time:"10:16",isOwn:!1,isOfficial:!0}]),[g,v]=oe.useState(""),[x,E]=oe.useState(!1),[R,O]=oe.useState(!1);if(oe.useEffect(()=>{c&&(c.products.length>0||c.services.length>0)&&O(!0)},[c]),!n)return null;const U=t.type==="personal",M=t.type==="business"?"bg-gradient-to-r from-blue-600 to-blue-700":t.type==="public"?"bg-gradient-to-r from-green-600 to-green-700":"bg-gradient-to-r from-purple-600 to-purple-700",Q=()=>{if(g.trim()&&r){const te={id:f.length+1,sender:i?.name||"Você",senderId:i?.id||"you",message:g,time:new Date().toLocaleTimeString("pt-BR",{hour:"2-digit",minute:"2-digit"}),isOwn:!0};p([...f,te]),v("")}};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col overflow-hidden",children:[d.jsxs("div",{className:`${M} p-4 flex items-center justify-between relative`,children:[d.jsxs("div",{className:"flex items-center gap-3 flex-1 pr-12",children:[d.jsx("div",{className:"w-12 h-12 bg-white/20 rounded-full flex items-center justify-center",children:d.jsx(Kd,{className:"w-6 h-6 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white",children:t.name}),d.jsx("p",{className:"text-white/80 text-sm",children:U?`${t.stats.chatsStarted} participantes`:"Chat privado (1:1)"})]})]}),d.jsx("button",{onClick:e,className:"absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm","aria-label":"Fechar",children:d.jsx(Ti,{className:"w-6 h-6 text-white"})})]}),d.jsxs("div",{className:"flex-1 p-4 space-y-4 bg-gray-50 overflow-y-auto",children:[R&&c&&i?.id===t.createdBy&&d.jsx(qS,{userName:i?.name||"Usuário",products:c.products,services:c.services}),f.map(te=>d.jsx(GS,{...te},te.id))]}),r?d.jsx("div",{className:"p-4 border-t border-gray-200 bg-white",children:d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:d.jsx(aN,{className:"w-5 h-5"})}),d.jsx("input",{type:"text",placeholder:"Digite sua mensagem...",className:"flex-1 px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500",value:g,onChange:te=>v(te.target.value),onKeyPress:te=>te.key==="Enter"&&Q()}),d.jsx("button",{className:"p-2 text-gray-400 hover:text-gray-600 transition-colors",children:d.jsx(wN,{className:"w-5 h-5"})}),d.jsx("button",{className:"p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors",onClick:Q,children:d.jsx(pN,{className:"w-5 h-5"})})]})}):d.jsx("div",{className:"p-4 border-t border-gray-200 bg-gradient-to-r from-blue-50 to-green-50",children:d.jsxs("div",{className:"flex flex-col items-center gap-3 py-2",children:[d.jsxs("div",{className:"flex items-center gap-2 text-gray-700",children:[d.jsx(zx,{className:"w-5 h-5"}),d.jsx("span",{children:"Faça login para participar da conversa"})]}),d.jsx(Ye,{onClick:a,className:"bg-blue-600 hover:bg-blue-700",children:"Entrar ou Criar conta"})]})})]})})}function GS({sender:n,message:e,time:t,isOwn:r,isOfficial:i}){return d.jsx("div",{className:`flex flex-col ${r?"items-end":"items-start"}`,children:d.jsxs("div",{className:`max-w-[80%] rounded-2xl px-4 py-2 ${r?"bg-blue-600 text-white":i?"bg-green-100 border border-green-300":"bg-white border border-gray-200"}`,children:[!r&&d.jsxs("div",{className:`text-xs mb-1 ${i?"text-green-700":"text-gray-600"}`,children:[n," ",i&&"✓"]}),d.jsx("div",{className:`${r?"text-white":i?"text-green-900":"text-gray-900"}`,children:e}),d.jsx("div",{className:`text-xs mt-1 ${r?"text-blue-100":"text-gray-500"}`,children:t})]})})}function KS({isOpen:n,onClose:e,currentUser:t}){const r=[{id:1,type:"message",title:"Nova mensagem",description:"Farmácia Central respondeu sua pergunta",time:"5 min atrás",icon:si,color:"text-blue-600",bgColor:"bg-blue-50",unread:!0},{id:2,type:"reward",title:"Conquista desbloqueada!",description:"Você alcançou o nível 3 e ganhou 50 pontos",time:"1 hora atrás",icon:jh,color:"text-yellow-600",bgColor:"bg-yellow-50",unread:!0},{id:3,type:"moderation",title:"Seu pino foi aprovado",description:'O pino "Grupo Moradores" passou pela moderação',time:"2 horas atrás",icon:wc,color:"text-green-600",bgColor:"bg-green-50",unread:!1},{id:4,type:"interaction",title:"Seu pino teve interação",description:"15 pessoas iniciaram conversa no seu pino",time:"1 dia atrás",icon:si,color:"text-purple-600",bgColor:"bg-purple-50",unread:!1}];return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between",children:[d.jsx("h3",{className:"text-gray-900",children:"Notificações"}),d.jsx("button",{onClick:e,className:"p-2 hover:bg-gray-100 rounded-full transition-colors",children:d.jsx(Ti,{className:"w-5 h-5 text-gray-600"})})]}),d.jsx("div",{className:"divide-y divide-gray-200",children:r.map(i=>d.jsx("div",{className:`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${i.unread?"bg-blue-50/30":""}`,children:d.jsxs("div",{className:"flex gap-3",children:[d.jsx("div",{className:`w-10 h-10 ${i.bgColor} rounded-full flex items-center justify-center flex-shrink-0`,children:d.jsx(i.icon,{className:`w-5 h-5 ${i.color}`})}),d.jsxs("div",{className:"flex-1 min-w-0",children:[d.jsxs("div",{className:"flex items-start justify-between mb-1",children:[d.jsx("h4",{className:"text-sm text-gray-900",children:i.title}),i.unread&&d.jsx("div",{className:"w-2 h-2 bg-blue-600 rounded-full flex-shrink-0 ml-2 mt-1"})]}),d.jsx("p",{className:"text-sm text-gray-600 mb-1",children:i.description}),d.jsx("span",{className:"text-xs text-gray-500",children:i.time})]})]})},i.id))}),r.length===0&&d.jsxs("div",{className:"p-8 text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(si,{className:"w-8 h-8 text-gray-400"})}),d.jsx("p",{className:"text-gray-600",children:"Nenhuma notificação"})]})]})]}):null}function QS({isOpen:n,onClose:e,currentUser:t}){const r=[{id:1,name:"Primeira Conversa",description:"Inicie sua primeira conversa em um pino",points:10,icon:TN,unlocked:!0,color:"text-yellow-600",bgColor:"bg-yellow-50"},{id:2,name:"Criador de Comunidade",description:"Crie 5 pinos diferentes",points:50,icon:PN,unlocked:!0,color:"text-blue-600",bgColor:"bg-blue-50"},{id:3,name:"Influenciador Local",description:"Tenha 100 interações nos seus pinos",points:100,icon:Dd,unlocked:!1,progress:45,color:"text-purple-600",bgColor:"bg-purple-50"},{id:4,name:"Super Ativo",description:"Envie 500 mensagens",points:150,icon:VN,unlocked:!1,progress:230,color:"text-green-600",bgColor:"bg-green-50"}],i=[{level:1,minPoints:0,name:"Iniciante",color:"bg-gray-400"},{level:2,minPoints:50,name:"Explorador",color:"bg-blue-400"},{level:3,minPoints:150,name:"Contribuidor",color:"bg-purple-400"},{level:4,minPoints:300,name:"Líder",color:"bg-yellow-400"},{level:5,minPoints:500,name:"Lenda",color:"bg-red-400"}],a=i.find(p=>t?.points>=p.minPoints&&(i[p.level]?t?.points<i[p.level].minPoints:!0))||i[0],c=i[a.level]||null,f=c?(t?.points-a.minPoints)/(c.minPoints-a.minPoints)*100:100;return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-gradient-to-r from-yellow-400 to-orange-500 p-6",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors",children:d.jsx(Ti,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(jh,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white mb-1",children:"Recompensas"}),d.jsx("p",{className:"text-white/80 text-sm",children:t?.name})]})]}),d.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-xl p-4",children:[d.jsxs("div",{className:"flex items-center justify-between mb-3",children:[d.jsxs("div",{children:[d.jsxs("div",{className:"text-white/80 text-sm mb-1",children:["Nível ",t?.level]}),d.jsxs("div",{className:"text-white text-2xl",children:[t?.points," pontos"]})]}),d.jsx(In,{className:`${a.color} text-white`,children:a.name})]}),c&&d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"w-full bg-white/30 rounded-full h-2 mb-2",children:d.jsx("div",{className:"bg-white rounded-full h-2 transition-all",style:{width:`${f}%`}})}),d.jsxs("div",{className:"text-white/80 text-xs",children:[c.minPoints-t?.points," pontos para o próximo nível"]})]})]})]}),d.jsxs("div",{className:"p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-4",children:"Conquistas"}),d.jsx("div",{className:"space-y-3",children:r.map(p=>d.jsx("div",{className:`p-4 rounded-xl border-2 transition-all ${p.unlocked?`${p.bgColor} border-${p.color.replace("text-","")}`:"bg-gray-50 border-gray-200 opacity-60"}`,children:d.jsxs("div",{className:"flex gap-3",children:[d.jsx("div",{className:`w-12 h-12 ${p.unlocked?p.bgColor:"bg-gray-200"} rounded-xl flex items-center justify-center flex-shrink-0`,children:d.jsx(p.icon,{className:`w-6 h-6 ${p.unlocked?p.color:"text-gray-400"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center justify-between mb-1",children:[d.jsx("h5",{className:"text-sm text-gray-900",children:p.name}),p.unlocked&&d.jsxs(In,{variant:"secondary",className:"bg-yellow-100 text-yellow-800",children:["+",p.points," pts"]})]}),d.jsx("p",{className:"text-xs text-gray-600 mb-2",children:p.description}),!p.unlocked&&p.progress!==void 0&&d.jsxs("div",{children:[d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-1.5 mb-1",children:d.jsx("div",{className:"bg-blue-600 rounded-full h-1.5",style:{width:`${p.progress/100*100}%`}})}),d.jsxs("div",{className:"text-xs text-gray-500",children:[p.progress,"/100"]})]})]})]})},p.id))}),d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Como ganhar pontos"}),d.jsxs("div",{className:"space-y-2 text-sm text-gray-700",children:[d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs",children:"+5"}),d.jsx("span",{children:"Por cada conversa iniciada"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs",children:"+10"}),d.jsx("span",{children:"Por cada pino criado"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-xs",children:"+20"}),d.jsx("span",{children:"Por cada 10 interações nos seus pinos"})]}),d.jsxs("div",{className:"flex items-center gap-2",children:[d.jsx("div",{className:"w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center text-xs",children:"+50"}),d.jsx("span",{children:"Por cada conquista desbloqueada"})]})]})]})]})]})]}):null}function YS({isOpen:n,onClose:e,pins:t,onModerate:r}){const i=t.filter(a=>a.reported||a.moderationStatus==="pending");return n?d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"fixed inset-0 bg-black/30 z-40",onClick:e}),d.jsxs("div",{className:"fixed top-0 right-0 h-full w-full sm:w-[500px] bg-white shadow-2xl z-50 overflow-y-auto",children:[d.jsxs("div",{className:"sticky top-0 bg-gradient-to-r from-orange-500 to-red-500 p-6",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors",children:d.jsx(Ti,{className:"w-5 h-5 text-white"})}),d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(l0,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h3",{className:"text-white mb-1",children:"Moderação"}),d.jsxs("p",{className:"text-white/80 text-sm",children:[i.length," pino(s) aguardando revisão"]})]})]})]}),d.jsxs("div",{className:"p-4",children:[i.length===0?d.jsxs("div",{className:"py-12 text-center",children:[d.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:d.jsx(wc,{className:"w-8 h-8 text-green-600"})}),d.jsx("h4",{className:"text-gray-900 mb-2",children:"Tudo em ordem!"}),d.jsx("p",{className:"text-gray-600 text-sm",children:"Não há pinos pendentes de moderação no momento."})]}):d.jsx("div",{className:"space-y-4",children:i.map(a=>d.jsxs("div",{className:"bg-white border-2 border-orange-200 rounded-xl p-4",children:[d.jsxs("div",{className:"flex items-start gap-3 mb-4",children:[d.jsx("div",{className:`w-12 h-12 rounded-xl flex items-center justify-center ${a.type==="business"?"bg-blue-100":a.type==="public"?"bg-green-100":"bg-purple-100"}`,children:d.jsx(FC,{className:`w-6 h-6 ${a.type==="business"?"text-blue-600":a.type==="public"?"text-green-600":"text-purple-600"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[d.jsx("h4",{className:"text-gray-900",children:a.name}),d.jsx(In,{variant:"secondary",className:"bg-orange-100 text-orange-800",children:a.type==="business"?"Negócio":a.type==="public"?"Público":"Pessoal"})]}),d.jsx("p",{className:"text-sm text-gray-600 mb-2",children:a.address}),a.description&&d.jsx("p",{className:"text-sm text-gray-700 bg-gray-50 rounded-lg p-2 mb-2",children:a.description}),d.jsxs("div",{className:"flex items-center gap-4 text-xs text-gray-500",children:[d.jsxs("span",{children:["Por: ",a.createdBy]}),d.jsx("span",{children:new Date(a.createdAt).toLocaleDateString("pt-BR")})]})]})]}),d.jsx("div",{className:"bg-red-50 border border-red-200 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"flex items-start gap-2",children:[d.jsx(l0,{className:"w-4 h-4 text-red-600 mt-0.5"}),d.jsxs("div",{children:[d.jsx("h5",{className:"text-sm text-red-900 mb-1",children:"Motivo da denúncia"}),d.jsx("p",{className:"text-sm text-red-700",children:"Conteúdo inapropriado ou informações falsas reportadas por 3 usuários."})]})]})}),a.businessInfo&&d.jsx("div",{className:"bg-gray-50 rounded-lg p-3 mb-4",children:d.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center",children:[d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.views}),d.jsx("div",{className:"text-xs text-gray-600",children:"Visualizações"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.chatsStarted}),d.jsx("div",{className:"text-xs text-gray-600",children:"Conversas"})]}),d.jsxs("div",{children:[d.jsx("div",{className:"text-lg text-gray-900",children:a.stats.messages}),d.jsx("div",{className:"text-xs text-gray-600",children:"Mensagens"})]})]})}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs(Ye,{onClick:()=>r(a.id,"approved"),variant:"outline",className:"flex-1 border-green-300 text-green-700 hover:bg-green-50",children:[d.jsx(wc,{className:"w-4 h-4 mr-2"}),"Aprovar"]}),d.jsxs(Ye,{onClick:()=>r(a.id,"rejected"),variant:"outline",className:"flex-1 border-red-300 text-red-700 hover:bg-red-50",children:[d.jsx(AC,{className:"w-4 h-4 mr-2"}),"Rejeitar"]})]})]},a.id))}),d.jsxs("div",{className:"mt-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Sobre a moderação"}),d.jsxs("div",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("p",{children:"• Pinos podem ser denunciados por usuários quando contêm informações falsas ou conteúdo inapropriado."}),d.jsx("p",{children:"• Após 3 denúncias, o pino entra automaticamente na fila de moderação."}),d.jsx("p",{children:"• Pinos rejeitados são removidos da plataforma e o criador é notificado."}),d.jsx("p",{children:"• Pinos aprovados voltam ao mapa e as denúncias são descartadas."})]})]})]})]})]}):null}function XS({isOpen:n,onClose:e,pinType:t}){const[r,i]=oe.useState(0);if(!n)return null;const c=t==="business"?[{title:"Bem-vindo ao Groupby.Me! 🎉",description:"Seu estabelecimento agora está no mapa e visível para clientes próximos em tempo real.",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"O Groupby.Me conecta seu negócio com pessoas que estão próximas e procurando exatamente o que você oferece."}),d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"Por que usar o Groupby.Me?"}),d.jsxs("ul",{className:"space-y-2 text-sm text-blue-800",children:[d.jsx("li",{children:"✓ Clientes encontram você no mapa ao buscar produtos/serviços"}),d.jsx("li",{children:"✓ Conversas diretas em tempo real (como WhatsApp)"}),d.jsx("li",{children:"✓ Clientes demonstram interesse antes de comprar"}),d.jsx("li",{children:"✓ Aumente suas vendas locais sem intermediários"})]})]})]})},{title:"Como seu pino funciona 📍",description:"Entenda como clientes veem e interagem com seu estabelecimento",content:d.jsx("div",{className:"space-y-4",children:d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Quando alguém clica no seu pino:"}),d.jsxs("ol",{className:"space-y-3 text-gray-700",children:[d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"1"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Vê suas informações:"})," Nome, descrição, horários, contato"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"2"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Escolhe produtos/serviços:"})," Pode adicionar itens de interesse (como no iFood)"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"3"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Inicia conversa:"})," Você recebe uma notificação com os interesses dele"]})]}),d.jsxs("li",{className:"flex gap-3",children:[d.jsx("span",{className:"flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm",children:"4"}),d.jsxs("div",{children:[d.jsx("strong",{children:"Você responde:"})," Informa preços, disponibilidade e fecha a venda!"]})]})]})]})})},{title:"Configure seus produtos 📦",description:"Mantenha seu catálogo sempre atualizado",content:d.jsxs("div",{className:"space-y-4",children:[d.jsxs("p",{className:"text-gray-700",children:["Na aba ",d.jsx("strong",{children:'"Produtos"'}),", você cadastra tudo que oferece. Isso ajuda clientes a:"]}),d.jsxs("ul",{className:"space-y-2 text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Ver o que você tem disponível"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Demonstrar interesse em itens específicos"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-green-600",children:"✓"}),d.jsx("span",{children:"Iniciar conversas mais objetivas (você já sabe o que eles querem!)"})]})]}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4",children:d.jsxs("p",{className:"text-sm text-yellow-900",children:["💡 ",d.jsx("strong",{children:"Dica:"})," Atualize seus produtos regularmente! Isso aumenta as chances de aparecer nas buscas."]})})]})},{title:"Atenda com agilidade 💬",description:"Responda rápido e conquiste mais clientes",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"Quando um cliente demonstra interesse, você recebe:"}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-gray-900 mb-2",children:"🔔 Notificação com:"}),d.jsxs("ul",{className:"space-y-1 text-gray-700 text-sm",children:[d.jsx("li",{children:"• Nome do cliente"}),d.jsx("li",{children:"• Produtos de interesse (com quantidades)"}),d.jsx("li",{children:"• Serviços solicitados"})]})]}),d.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"✅ Melhores práticas:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-green-800",children:[d.jsx("li",{children:"→ Responda em até 5 minutos (cliente está esperando!)"}),d.jsx("li",{children:"→ Confirme disponibilidade e informe preços"}),d.jsx("li",{children:"→ Seja cordial e profissional"}),d.jsx("li",{children:"→ Ofereça opções de entrega/retirada"})]})]})]})},{title:"Dicas para ter sucesso 🚀",description:"Maximize seus resultados no Groupby.Me",content:d.jsx("div",{className:"space-y-4",children:d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{className:"bg-blue-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"📝 Preencha tudo"}),d.jsx("p",{className:"text-sm text-blue-800",children:"Descrição completa, horários, categorias, produtos. Quanto mais informação, melhor!"})]}),d.jsxs("div",{className:"bg-green-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"⚡ Seja rápido"}),d.jsx("p",{className:"text-sm text-green-800",children:"Responda mensagens rapidamente. Taxa de resposta alta = mais visibilidade!"})]}),d.jsxs("div",{className:"bg-purple-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-purple-900 mb-2",children:"🎯 Mantenha atualizado"}),d.jsx("p",{className:"text-sm text-purple-800",children:"Atualize horários, produtos em falta, promoções. Clientes valorizam informação precisa."})]}),d.jsxs("div",{className:"bg-yellow-50 rounded-lg p-4",children:[d.jsx("h4",{className:"text-yellow-900 mb-2",children:"🌟 Seja profissional"}),d.jsx("p",{className:"text-sm text-yellow-800",children:"Bom atendimento gera mais conversas, mais vendas e melhor reputação."})]})]})})}]:[{title:"Bem-vindo ao Groupby.Me! 🏛️",description:"Seu órgão público agora está mais acessível aos cidadãos",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"O Groupby.Me facilita a comunicação entre serviços públicos e cidadãos de forma direta e em tempo real."}),d.jsxs("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-green-900 mb-2",children:"Benefícios para serviços públicos:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-green-800",children:[d.jsx("li",{children:"✓ Canal direto de atendimento ao cidadão"}),d.jsx("li",{children:"✓ Respostas rápidas a dúvidas e emergências"}),d.jsx("li",{children:"✓ Transparência e proximidade com a população"}),d.jsx("li",{children:"✓ Redução de filas presenciais"})]})]})]})},{title:"Configure seus serviços 🛠️",description:"Informe o que seu órgão oferece",content:d.jsxs("div",{className:"space-y-4",children:[d.jsx("p",{className:"text-gray-700",children:"Liste todos os serviços disponíveis para que cidadãos saibam como você pode ajudá-los:"}),d.jsxs("ul",{className:"space-y-2 text-gray-700",children:[d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Atendimento emergencial (hospitais, polícia, bombeiros)"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Serviços administrativos (certidões, licenças)"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Informações e orientações"})]}),d.jsxs("li",{className:"flex items-start gap-2",children:[d.jsx("span",{className:"text-blue-600",children:"→"}),d.jsx("span",{children:"Recebimento de denúncias e solicitações"})]})]})]})},{title:"Atenda o cidadão 👥",description:"Comunicação eficiente e transparente",content:d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4",children:[d.jsx("h4",{className:"text-blue-900 mb-2",children:"💬 Quando um cidadão entrar em contato:"}),d.jsxs("ul",{className:"space-y-2 text-sm text-blue-800",children:[d.jsx("li",{children:"• Identifique a necessidade ou emergência"}),d.jsx("li",{children:"• Forneça informações claras e precisas"}),d.jsx("li",{children:"• Oriente sobre procedimentos necessários"}),d.jsx("li",{children:"• Registre protocolos de atendimento quando aplicável"})]})]}),d.jsx("div",{className:"bg-green-50 border border-green-200 rounded-lg p-4",children:d.jsxs("p",{className:"text-sm text-green-800",children:[d.jsx("strong",{children:"Lembre-se:"})," Respostas rápidas e profissionais fortalecem a confiança da população no serviço público."]})})]})}],f=r===c.length-1;return d.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",children:d.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 p-6 relative",children:[d.jsx("button",{onClick:e,className:"absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors",children:d.jsx(Ti,{className:"w-6 h-6 text-white"})}),d.jsx("h2",{className:"text-white pr-12",children:c[r].title}),d.jsx("p",{className:"text-white/80 text-sm mt-1",children:c[r].description})]}),d.jsxs("div",{className:"px-6 py-4 bg-gray-50 border-b border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("span",{className:"text-sm text-gray-600",children:["Passo ",r+1," de ",c.length]}),d.jsxs("span",{className:"text-sm text-gray-600",children:[Math.round((r+1)/c.length*100),"% completo"]})]}),d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:d.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all",style:{width:`${(r+1)/c.length*100}%`}})})]}),d.jsx("div",{className:"p-6 max-h-[60vh] overflow-y-auto",children:c[r].content}),d.jsxs("div",{className:"p-6 border-t border-gray-200 flex items-center justify-between",children:[d.jsxs(Ye,{onClick:()=>i(Math.max(0,r-1)),disabled:r===0,variant:"outline",children:[d.jsx(bC,{className:"w-4 h-4 mr-2"}),"Anterior"]}),f?d.jsxs(Ye,{onClick:e,className:"bg-green-600 hover:bg-green-700",children:[d.jsx(EC,{className:"w-4 h-4 mr-2"}),"Concluir tutorial"]}):d.jsxs(Ye,{onClick:()=>i(r+1),className:"bg-blue-600 hover:bg-blue-700",children:["Próximo",d.jsx(CC,{className:"w-4 h-4 ml-2"})]})]})]})})}function JS({pin:n,onBack:e,onUpdate:t}){const[r,i]=oe.useState("dashboard"),[a,c]=oe.useState(!1),[f,p]=oe.useState(!1),[g,v]=oe.useState({name:n.name,description:n.description||"",phone:n.businessInfo?.phone||"",email:n.businessInfo?.email||"",website:n.businessInfo?.website||"",hours:n.businessInfo?.hours||"",categories:n.businessInfo?.categories||[],products:n.businessInfo?.products||[],services:n.businessInfo?.services||[]}),[x,E]=oe.useState(""),[R,O]=oe.useState({name:"",price:"",stock:""}),[U,M]=oe.useState({name:"",description:"",duration:""}),Q=n.type==="business",te=[{id:"dashboard",label:"Painel",icon:r0},{id:"info",label:"Informações",icon:$x},{id:"products",label:Q?"Produtos":"Serviços",icon:ya},{id:"inventory",label:"Estoque",icon:ya,commerceOnly:!0},{id:"schedule",label:"Horários",icon:tc},{id:"cashflow",label:"Fluxo de Caixa",icon:Zp},{id:"operations",label:"Operacional",icon:o0},{id:"messages",label:"Mensagens",icon:si}].filter(C=>!C.commerceOnly||Q),le=()=>{t({name:g.name,description:g.description,businessInfo:{...n.businessInfo,phone:g.phone,email:g.email,website:g.website,hours:g.hours,categories:g.categories,products:g.products,services:g.services}}),c(!1)},G=()=>{x.trim()&&(v({...g,categories:[...g.categories,x]}),E(""))},J=C=>{v({...g,categories:g.categories.filter((A,V)=>V!==C)})},fe=()=>{R.name.trim()&&(v({...g,products:[...g.products,R.name]}),O({name:"",price:"",stock:""}))},j=C=>{v({...g,products:g.products.filter((A,V)=>V!==C)})},I=()=>{U.name.trim()&&(v({...g,services:[...g.services,U.name]}),M({name:"",description:"",duration:""}))},S=C=>{v({...g,services:g.services.filter((A,V)=>V!==C)})};return d.jsxs("div",{className:"fixed inset-0 z-50 bg-white flex flex-col overflow-hidden",children:[d.jsx("div",{className:"bg-gradient-to-r from-blue-600 to-green-600 text-white p-6 shadow-lg",children:d.jsxs("div",{className:"max-w-7xl mx-auto",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsxs("button",{onClick:e,className:"flex items-center gap-2 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors",children:[d.jsx(pC,{className:"w-5 h-5"}),d.jsx("span",{children:"Voltar ao mapa"})]}),d.jsxs(Ye,{onClick:()=>p(!0),variant:"outline",className:"bg-white/20 border-white/30 text-white hover:bg-white/30",children:[d.jsx(Od,{className:"w-4 h-4 mr-2"}),"Ajuda e Tutorial"]})]}),d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center",children:d.jsx(IN,{className:"w-8 h-8 text-white"})}),d.jsxs("div",{children:[d.jsx("h1",{className:"text-2xl mb-1",children:n.name}),d.jsx("p",{className:"text-white/80",children:n.address})]}),d.jsx(In,{className:"ml-auto bg-white/20 text-white border-white/30",children:Q?"Comércio":"Serviço Público"})]})]})}),d.jsx("div",{className:"border-b border-gray-200 bg-white",children:d.jsx("div",{className:"max-w-7xl mx-auto px-6",children:d.jsx("div",{className:"flex gap-1 overflow-x-auto",children:te.map(C=>d.jsxs("button",{onClick:()=>i(C.id),className:`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors whitespace-nowrap ${r===C.id?"border-blue-600 text-blue-600":"border-transparent text-gray-600 hover:text-gray-900"}`,children:[d.jsx(C.icon,{className:"w-4 h-4"}),C.label]},C.id))})})}),d.jsx("div",{className:"flex-1 overflow-y-auto bg-gray-50",children:d.jsxs("div",{className:"max-w-7xl mx-auto p-6",children:[r==="dashboard"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6",children:[d.jsxs("h2",{className:"text-gray-900 mb-3",children:["Bem-vindo à gestão do seu ",Q?"estabelecimento":"órgão","!"]}),d.jsx("p",{className:"text-gray-700 mb-4",children:Q?"Aqui você gerencia todas as informações do seu negócio no Groupby.Me. Configure seus produtos, serviços, horários e atenda clientes próximos em tempo real.":"Aqui você gerencia as informações do serviço público. Configure os serviços oferecidos, horários de atendimento e mantenha comunicação direta com os cidadãos."}),d.jsxs("div",{className:"flex flex-wrap gap-3",children:[d.jsxs(Ye,{onClick:()=>p(!0),className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(Od,{className:"w-4 h-4 mr-2"}),"Ver tutorial completo"]}),d.jsxs(Ye,{onClick:()=>i("info"),variant:"outline",children:[d.jsx(em,{className:"w-4 h-4 mr-2"}),"Editar informações"]})]})]}),d.jsxs("div",{className:"grid md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Visualizações"}),d.jsx(Dd,{className:"w-5 h-5 text-blue-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.views}),d.jsx("div",{className:"text-sm text-green-600",children:"+12% esta semana"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Conversas"}),d.jsx(si,{className:"w-5 h-5 text-green-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.chatsStarted}),d.jsx("div",{className:"text-sm text-green-600",children:"+8% esta semana"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Mensagens"}),d.jsx(Ux,{className:"w-5 h-5 text-purple-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:n.stats.messages}),d.jsx("div",{className:"text-sm text-blue-600",children:"23 não lidas"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Taxa de resposta"}),d.jsx(wc,{className:"w-5 h-5 text-yellow-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"94%"}),d.jsx("div",{className:"text-sm text-gray-600",children:"Tempo médio: 5min"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Ações rápidas"}),d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("button",{onClick:()=>i("products"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all text-left",children:[d.jsx(ya,{className:"w-6 h-6 text-blue-600 mb-2"}),d.jsxs("div",{className:"text-gray-900 mb-1",children:["Gerenciar ",Q?"Produtos":"Serviços"]}),d.jsxs("div",{className:"text-sm text-gray-600",children:[g.products.length+g.services.length," cadastrados"]})]}),d.jsxs("button",{onClick:()=>i("schedule"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all text-left",children:[d.jsx(tc,{className:"w-6 h-6 text-green-600 mb-2"}),d.jsx("div",{className:"text-gray-900 mb-1",children:"Horário de funcionamento"}),d.jsx("div",{className:"text-sm text-gray-600",children:g.hours||"Não configurado"})]}),d.jsxs("button",{onClick:()=>i("messages"),className:"p-4 border-2 border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-all text-left",children:[d.jsx(si,{className:"w-6 h-6 text-purple-600 mb-2"}),d.jsx("div",{className:"text-gray-900 mb-1",children:"Ver mensagens"}),d.jsx("div",{className:"text-sm text-gray-600",children:"23 não respondidas"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h3",{className:"text-gray-900 mb-4",children:"Atividade recente"}),d.jsx("div",{className:"space-y-3",children:[{user:"Maria Silva",action:"demonstrou interesse em Medicamentos",time:"5 min atrás",type:"interest"},{user:"João Santos",action:"iniciou uma conversa",time:"15 min atrás",type:"chat"},{user:"Ana Costa",action:"visualizou seu pino",time:"30 min atrás",type:"view"},{user:"Pedro Lima",action:"perguntou sobre horários",time:"1 hora atrás",type:"question"}].map((C,A)=>d.jsxs("div",{className:"flex items-center gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors",children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${C.type==="interest"?"bg-blue-100":C.type==="chat"?"bg-green-100":C.type==="view"?"bg-purple-100":"bg-yellow-100"}`,children:d.jsx(Qd,{className:`w-5 h-5 ${C.type==="interest"?"text-blue-600":C.type==="chat"?"text-green-600":C.type==="view"?"text-purple-600":"text-yellow-600"}`})}),d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"text-sm text-gray-900",children:[d.jsx("span",{className:"font-medium",children:C.user})," ",C.action]}),d.jsx("div",{className:"text-xs text-gray-500",children:C.time})]})]},A))})]})]}),r==="info"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-6",children:[d.jsx("h2",{className:"text-gray-900",children:"Informações básicas"}),a?d.jsxs("div",{className:"flex gap-2",children:[d.jsx(Ye,{onClick:()=>c(!1),variant:"outline",children:"Cancelar"}),d.jsxs(Ye,{onClick:le,className:"bg-green-600 hover:bg-green-700",children:[d.jsx(a0,{className:"w-4 h-4 mr-2"}),"Salvar"]})]}):d.jsxs(Ye,{onClick:()=>c(!0),className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(em,{className:"w-4 h-4 mr-2"}),"Editar"]})]}),d.jsxs("div",{className:"space-y-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Nome do estabelecimento *"}),d.jsx("input",{type:"text",value:g.name,onChange:C=>v({...g,name:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Descrição"}),d.jsx("textarea",{value:g.description,onChange:C=>v({...g,description:C.target.value}),disabled:!a,rows:3,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50",placeholder:"Descreva seu estabelecimento para atrair mais clientes..."})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Telefone *"}),d.jsx("input",{type:"tel",value:g.phone,onChange:C=>v({...g,phone:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"E-mail *"}),d.jsx("input",{type:"email",value:g.email,onChange:C=>v({...g,email:C.target.value}),disabled:!a,className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Website"}),d.jsx("input",{type:"text",value:g.website,onChange:C=>v({...g,website:C.target.value}),disabled:!a,placeholder:"www.seusite.com.br",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-50"})]}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Categorias"}),d.jsx("div",{className:"flex flex-wrap gap-2 mb-2",children:g.categories.map((C,A)=>d.jsxs(In,{variant:"secondary",className:"flex items-center gap-1",children:[C,a&&d.jsx("button",{onClick:()=>J(A),className:"ml-1 hover:text-red-600",children:d.jsx(wd,{className:"w-3 h-3"})})]},A))}),a&&d.jsxs("div",{className:"flex gap-2",children:[d.jsx("input",{type:"text",value:x,onChange:C=>E(C.target.value),placeholder:"Nova categoria",className:"flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500",onKeyPress:C=>C.key==="Enter"&&G()}),d.jsx(Ye,{onClick:G,children:d.jsx(Pr,{className:"w-4 h-4"})})]})]})]})]})}),r==="products"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:Q?"Gerenciar Produtos":"Gerenciar Serviços"}),d.jsx("div",{className:"bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",children:d.jsxs("p",{className:"text-sm text-blue-900",children:["💡 ",Q?"Mantenha seu catálogo atualizado! Clientes podem demonstrar interesse em produtos específicos e iniciar conversas sobre disponibilidade e preços.":"Liste todos os serviços oferecidos. Cidadãos poderão ver o que está disponível e entrar em contato diretamente."]})}),Q?d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Produtos cadastrados"}),d.jsx("div",{className:"space-y-2",children:g.products.map((C,A)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsx("div",{className:"flex-1",children:d.jsx("div",{className:"text-gray-900",children:C})}),d.jsx("button",{onClick:()=>j(A),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:d.jsx(wd,{className:"w-4 h-4"})})]},A))}),d.jsxs("div",{className:"border-t border-gray-200 pt-4 mt-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Adicionar novo produto"}),d.jsxs("div",{className:"space-y-3",children:[d.jsx("input",{type:"text",value:R.name,onChange:C=>O({...R,name:C.target.value}),placeholder:"Nome do produto",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),d.jsxs(Ye,{onClick:fe,className:"w-full bg-blue-600 hover:bg-blue-700",children:[d.jsx(Pr,{className:"w-4 h-4 mr-2"}),"Adicionar produto"]})]})]})]}):d.jsxs("div",{className:"space-y-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Serviços oferecidos"}),d.jsx("div",{className:"space-y-2",children:g.services.map((C,A)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsx("div",{className:"flex-1",children:d.jsx("div",{className:"text-gray-900",children:C})}),d.jsx("button",{onClick:()=>S(A),className:"p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors",children:d.jsx(wd,{className:"w-4 h-4"})})]},A))}),d.jsxs("div",{className:"border-t border-gray-200 pt-4 mt-4",children:[d.jsx("h4",{className:"text-gray-900 mb-3",children:"Adicionar novo serviço"}),d.jsxs("div",{className:"space-y-3",children:[d.jsx("input",{type:"text",value:U.name,onChange:C=>M({...U,name:C.target.value}),placeholder:"Nome do serviço",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"}),d.jsxs(Ye,{onClick:I,className:"w-full bg-green-600 hover:bg-green-700",children:[d.jsx(Pr,{className:"w-4 h-4 mr-2"}),"Adicionar serviço"]})]})]})]})]})}),r==="schedule"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:"Horário de funcionamento"}),d.jsx("div",{className:"bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6",children:d.jsx("p",{className:"text-sm text-yellow-900",children:"⏰ Mantenha seus horários sempre atualizados para que os clientes saibam quando você está disponível."})}),d.jsxs("div",{children:[d.jsx("label",{className:"block text-sm text-gray-700 mb-2",children:"Horários"}),d.jsx("textarea",{value:g.hours,onChange:C=>v({...g,hours:C.target.value}),rows:4,placeholder:"Ex: Seg-Sex: 8h-18h, Sáb: 8h-12h, Dom: Fechado",className:"w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"})]}),d.jsxs(Ye,{onClick:le,className:"mt-4 bg-green-600 hover:bg-green-700",children:[d.jsx(a0,{className:"w-4 h-4 mr-2"}),"Salvar horários"]})]})}),r==="messages"&&d.jsx("div",{className:"space-y-6",children:d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsx("h2",{className:"text-gray-900 mb-4",children:"Central de mensagens"}),d.jsx("p",{className:"text-gray-600",children:"Gerencie todas as conversas com seus clientes em um só lugar. Responda rapidamente para manter uma boa reputação!"}),d.jsxs("div",{className:"mt-6 p-8 text-center border-2 border-dashed border-gray-300 rounded-lg",children:[d.jsx(si,{className:"w-12 h-12 text-gray-400 mx-auto mb-3"}),d.jsx("p",{className:"text-gray-600",children:"Esta funcionalidade estará disponível em breve"})]})]})}),r==="cashflow"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-4 gap-4",children:[d.jsxs("div",{className:"bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-green-100",children:"Receitas"}),d.jsx(Dd,{className:"w-5 h-5 text-green-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 12.450"}),d.jsx("div",{className:"text-sm text-green-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-red-100",children:"Despesas"}),d.jsx(Dd,{className:"w-5 h-5 text-red-100 rotate-180"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 7.890"}),d.jsx("div",{className:"text-sm text-red-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-blue-100",children:"Lucro"}),d.jsx(Zp,{className:"w-5 h-5 text-blue-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"R$ 4.560"}),d.jsx("div",{className:"text-sm text-blue-100",children:"Este mês"})]}),d.jsxs("div",{className:"bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-purple-100",children:"Margem"}),d.jsx(r0,{className:"w-5 h-5 text-purple-100"})]}),d.jsx("div",{className:"text-3xl mb-1",children:"36.6%"}),d.jsx("div",{className:"text-sm text-purple-100",children:"Lucro líquido"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Ações rápidas"}),d.jsxs(Ye,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(Pr,{className:"w-4 h-4 mr-2"}),"Nova transação"]})]}),d.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[d.jsxs("button",{className:"p-4 border-2 border-green-200 bg-green-50 rounded-lg hover:border-green-400 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("div",{className:"w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center",children:d.jsx(Pr,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"text-gray-900",children:"Adicionar receita"})]}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre vendas e recebimentos"})]}),d.jsxs("button",{className:"p-4 border-2 border-red-200 bg-red-50 rounded-lg hover:border-red-400 transition-all text-left",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx("div",{className:"w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center",children:d.jsx(wd,{className:"w-5 h-5 text-white"})}),d.jsx("span",{className:"text-gray-900",children:"Adicionar despesa"})]}),d.jsx("p",{className:"text-sm text-gray-600",children:"Registre custos e pagamentos"})]})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Transações recentes"}),d.jsxs(Ye,{variant:"outline",children:[d.jsx(i0,{className:"w-4 h-4 mr-2"}),"Exportar"]})]}),d.jsx("div",{className:"space-y-3",children:[{type:"income",description:"Venda - Cliente #1234",value:150,date:"14/11/2024 14:30",category:"Vendas"},{type:"income",description:"Venda - Cliente #1235",value:89.9,date:"14/11/2024 13:15",category:"Vendas"},{type:"expense",description:"Compra de estoque",value:450,date:"14/11/2024 10:00",category:"Estoque"},{type:"expense",description:"Conta de luz",value:320,date:"13/11/2024 16:45",category:"Contas"},{type:"income",description:"Venda - Cliente #1236",value:230,date:"13/11/2024 15:20",category:"Vendas"}].map((C,A)=>d.jsxs("div",{className:"flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors border border-gray-100",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:`w-10 h-10 rounded-full flex items-center justify-center ${C.type==="income"?"bg-green-100":"bg-red-100"}`,children:d.jsx(Zp,{className:`w-5 h-5 ${C.type==="income"?"text-green-600":"text-red-600"}`})}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:C.description}),d.jsxs("div",{className:"text-sm text-gray-500",children:[C.date," • ",C.category]})]})]}),d.jsxs("div",{className:`text-lg ${C.type==="income"?"text-green-600":"text-red-600"}`,children:[C.type==="income"?"+":"-"," R$ ",C.value.toFixed(2)]})]},A))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(Od,{className:"w-5 h-5 text-blue-600"}),"Dicas de gestão financeira"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Registre todas as transações diariamente para controle preciso"}),d.jsx("li",{children:"• Separe receitas e despesas por categorias para melhor análise"}),d.jsx("li",{children:"• Monitore sua margem de lucro semanalmente"}),d.jsx("li",{children:"• Planeje reservas para despesas fixas e emergências"}),d.jsx("li",{children:"• Analise períodos de maior/menor movimento para otimizar estoque"})]})]})]}),r==="inventory"&&Q&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-red-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(s0,{className:"w-5 h-5 text-red-600"}),d.jsx("span",{className:"text-gray-900",children:"Estoque baixo"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"8"}),d.jsx("div",{className:"text-sm text-gray-600",children:"produtos precisam reposição"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-yellow-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(tc,{className:"w-5 h-5 text-yellow-600"}),d.jsx("span",{className:"text-gray-900",children:"Próximo ao vencimento"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"3"}),d.jsx("div",{className:"text-sm text-gray-600",children:"produtos em 7 dias"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-4 border-l-4 border-green-500",children:[d.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[d.jsx(ya,{className:"w-5 h-5 text-green-600"}),d.jsx("span",{className:"text-gray-900",children:"Total em estoque"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"R$ 15.4k"}),d.jsx("div",{className:"text-sm text-gray-600",children:"valor total do inventário"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Controle de estoque"}),d.jsxs("div",{className:"flex gap-2",children:[d.jsxs(Ye,{variant:"outline",children:[d.jsx(i0,{className:"w-4 h-4 mr-2"}),"Exportar"]}),d.jsxs(Ye,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(Pr,{className:"w-4 h-4 mr-2"}),"Adicionar produto"]})]})]}),d.jsx("div",{className:"space-y-2",children:[{name:"Dipirona 500mg",sku:"MED-001",quantity:145,min:50,max:200,price:8.5,status:"ok"},{name:"Paracetamol 750mg",sku:"MED-002",quantity:89,min:50,max:150,price:6.9,status:"ok"},{name:"Ibuprofeno 600mg",sku:"MED-003",quantity:23,min:50,max:100,price:12.3,status:"low"},{name:"Amoxicilina 500mg",sku:"MED-004",quantity:67,min:40,max:120,price:15.8,status:"ok"},{name:"Losartana 50mg",sku:"MED-005",quantity:12,min:30,max:80,price:9.9,status:"critical"}].map((C,A)=>d.jsxs("div",{className:"p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsxs("div",{className:"flex-1",children:[d.jsxs("div",{className:"flex items-center gap-3",children:[d.jsx("h4",{className:"text-gray-900",children:C.name}),C.status==="low"&&d.jsx("span",{className:"px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full",children:"Estoque baixo"}),C.status==="critical"&&d.jsxs("span",{className:"px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full flex items-center gap-1",children:[d.jsx(s0,{className:"w-3 h-3"}),"Crítico"]})]}),d.jsxs("div",{className:"text-sm text-gray-500 mt-1",children:["SKU: ",C.sku]})]}),d.jsxs("div",{className:"text-right",children:[d.jsxs("div",{className:"text-lg text-gray-900",children:[C.quantity," un."]}),d.jsxs("div",{className:"text-sm text-gray-500",children:["R$ ",C.price.toFixed(2),"/un"]})]})]}),d.jsxs("div",{className:"mt-3",children:[d.jsxs("div",{className:"flex items-center justify-between text-xs text-gray-600 mb-1",children:[d.jsxs("span",{children:["Mín: ",C.min]}),d.jsxs("span",{children:["Máx: ",C.max]})]}),d.jsx("div",{className:"w-full bg-gray-200 rounded-full h-2",children:d.jsx("div",{className:`h-2 rounded-full ${C.status==="critical"?"bg-red-500":C.status==="low"?"bg-yellow-500":"bg-green-500"}`,style:{width:`${C.quantity/C.max*100}%`}})})]}),d.jsxs("div",{className:"mt-3 flex gap-2",children:[d.jsxs(Ye,{variant:"outline",size:"sm",className:"flex-1",children:[d.jsx(em,{className:"w-3 h-3 mr-1"}),"Editar"]}),d.jsxs(Ye,{variant:"outline",size:"sm",className:"flex-1",children:[d.jsx(Pr,{className:"w-3 h-3 mr-1"}),"Adicionar estoque"]})]})]},A))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(ya,{className:"w-5 h-5 text-purple-600"}),"Dicas de gestão de estoque"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Configure alertas para quando produtos atingirem o estoque mínimo"}),d.jsx("li",{children:"• Monitore produtos próximos ao vencimento semanalmente"}),d.jsx("li",{children:"• Use o histórico de vendas para prever demanda"}),d.jsx("li",{children:"• Mantenha relacionamento com fornecedores para reposição rápida"}),d.jsx("li",{children:"• Faça inventário completo mensalmente para evitar divergências"})]})]})]}),r==="operations"&&d.jsxs("div",{className:"space-y-6",children:[d.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Atendimentos hoje"}),d.jsx(Qd,{className:"w-5 h-5 text-blue-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"47"}),d.jsx("div",{className:"text-sm text-green-600",children:"+15% vs ontem"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Tempo médio"}),d.jsx(tc,{className:"w-5 h-5 text-green-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"12min"}),d.jsx("div",{className:"text-sm text-gray-600",children:"por atendimento"})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-2",children:[d.jsx("span",{className:"text-gray-600",children:"Satisfação"}),d.jsx(wc,{className:"w-5 h-5 text-yellow-600"})]}),d.jsx("div",{className:"text-3xl text-gray-900 mb-1",children:"4.8/5"}),d.jsx("div",{className:"text-sm text-gray-600",children:"avaliação média"})]})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Escala de funcionários"}),d.jsxs(Ye,{className:"bg-blue-600 hover:bg-blue-700",children:[d.jsx(vC,{className:"w-4 h-4 mr-2"}),"Gerenciar escala"]})]}),d.jsx("div",{className:"space-y-3",children:[{name:"Maria Silva",role:"Farmacêutica",shift:"Manhã (8h-14h)",status:"working"},{name:"João Santos",role:"Atendente",shift:"Integral (8h-18h)",status:"working"},{name:"Ana Costa",role:"Farmacêutica",shift:"Tarde (14h-20h)",status:"scheduled"},{name:"Pedro Lima",role:"Entregador",shift:"Tarde (14h-20h)",status:"scheduled"}].map((C,A)=>d.jsxs("div",{className:"flex items-center justify-between p-4 border border-gray-200 rounded-lg",children:[d.jsxs("div",{className:"flex items-center gap-4",children:[d.jsx("div",{className:"w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white",children:C.name.split(" ").map(V=>V[0]).join("")}),d.jsxs("div",{children:[d.jsx("div",{className:"text-gray-900",children:C.name}),d.jsx("div",{className:"text-sm text-gray-600",children:C.role})]})]}),d.jsxs("div",{className:"text-right",children:[d.jsx("div",{className:"text-sm text-gray-900",children:C.shift}),d.jsx("div",{className:"text-xs",children:C.status==="working"?d.jsxs("span",{className:"text-green-600 flex items-center gap-1",children:[d.jsx("div",{className:"w-2 h-2 bg-green-600 rounded-full animate-pulse"}),"Trabalhando agora"]}):d.jsx("span",{className:"text-gray-500",children:"Agendado"})})]})]},A))})]}),d.jsxs("div",{className:"bg-white rounded-xl p-6 border border-gray-200",children:[d.jsxs("div",{className:"flex items-center justify-between mb-4",children:[d.jsx("h3",{className:"text-gray-900",children:"Checklist operacional diário"}),d.jsx("span",{className:"text-sm text-gray-600",children:"6/10 concluídas"})]}),d.jsx("div",{className:"space-y-2",children:[{task:"Abertura do caixa",completed:!0,time:"08:00"},{task:"Conferência de estoque",completed:!0,time:"08:15"},{task:"Limpeza e organização",completed:!0,time:"08:30"},{task:"Verificar validades",completed:!0,time:"09:00"},{task:"Atualizar preços promocionais",completed:!0,time:"09:30"},{task:"Conferir pedidos online",completed:!0,time:"10:00"},{task:"Almoço e revezamento",completed:!1,time:"12:00"},{task:"Reposição de produtos",completed:!1,time:"14:00"},{task:"Fechamento parcial",completed:!1,time:"18:00"},{task:"Fechamento do caixa",completed:!1,time:"20:00"}].map((C,A)=>d.jsxs("div",{className:`flex items-center gap-3 p-3 rounded-lg border ${C.completed?"bg-green-50 border-green-200":"bg-gray-50 border-gray-200"}`,children:[d.jsx("input",{type:"checkbox",checked:C.completed,className:"w-5 h-5 text-green-600 rounded",readOnly:!0}),d.jsx("div",{className:"flex-1",children:d.jsx("span",{className:C.completed?"text-gray-500 line-through":"text-gray-900",children:C.task})}),d.jsx("span",{className:"text-sm text-gray-500",children:C.time})]},A))})]}),d.jsxs("div",{className:"bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-xl p-6",children:[d.jsxs("h4",{className:"text-gray-900 mb-3 flex items-center gap-2",children:[d.jsx(o0,{className:"w-5 h-5 text-green-600"}),"Dicas de gestão operacional"]}),d.jsxs("ul",{className:"space-y-2 text-sm text-gray-700",children:[d.jsx("li",{children:"• Mantenha checklists padronizados para garantir qualidade constante"}),d.jsx("li",{children:"• Monitore o tempo médio de atendimento para otimizar processos"}),d.jsx("li",{children:"• Treine equipe regularmente sobre produtos e atendimento"}),d.jsx("li",{children:"• Documente procedimentos para facilitar integração de novos funcionários"}),d.jsx("li",{children:"• Peça feedback dos clientes para melhorias contínuas"})]})]})]})]})}),f&&d.jsx(XS,{isOpen:f,onClose:()=>p(!1),pinType:n.type})]})}const ZS=()=>{};var _0={};/**
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
 */const lE={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const se=function(n,e){if(!n)throw Wa(e)},Wa=function(n){return new Error("Firebase Database ("+lE.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const cE=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},ek=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],f=n[t++],p=((i&7)<<18|(a&63)<<12|(c&63)<<6|f&63)-65536;e[r++]=String.fromCharCode(55296+(p>>10)),e[r++]=String.fromCharCode(56320+(p&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},gg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,f=c?n[i+1]:0,p=i+2<n.length,g=p?n[i+2]:0,v=a>>2,x=(a&3)<<4|f>>4;let E=(f&15)<<2|g>>6,R=g&63;p||(R=64,c||(E=64)),r.push(t[v],t[x],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(cE(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):ek(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],f=i<n.length?t[n.charAt(i)]:0;++i;const g=i<n.length?t[n.charAt(i)]:64;++i;const x=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||f==null||g==null||x==null)throw new tk;const E=a<<2|f>>4;if(r.push(E),g!==64){const R=f<<4&240|g>>2;if(r.push(R),x!==64){const O=g<<6&192|x;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class tk extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uE=function(n){const e=cE(n);return gg.encodeByteArray(e,!0)},Jd=function(n){return uE(n).replace(/\./g,"")},Zd=function(n){try{return gg.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function nk(n){return dE(void 0,n)}function dE(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!rk(t)||(n[t]=dE(n[t],e[t]));return n}function rk(n){return n!=="__proto__"}/**
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
 */function sk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ik=()=>sk().__FIREBASE_DEFAULTS__,ok=()=>{if(typeof process>"u"||typeof _0>"u")return;const n=_0.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ak=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Zd(n[1]);return e&&JSON.parse(e)},Oh=()=>{try{return ZS()||ik()||ok()||ak()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},hE=n=>{var e,t;return(t=(e=Oh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},_g=n=>{const e=hE(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},fE=()=>{var n;return(n=Oh())===null||n===void 0?void 0:n.config},pE=n=>{var e;return(e=Oh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Uc{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function bs(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Dh(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function yg(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Jd(JSON.stringify(t)),Jd(JSON.stringify(c)),""].join(".")}const lc={};function lk(){const n={prod:[],emulator:[]};for(const e of Object.keys(lc))lc[e]?n.emulator.push(e):n.prod.push(e);return n}function ck(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let y0=!1;function Mh(n,e){if(typeof window>"u"||typeof document>"u"||!bs(window.location.host)||lc[n]===e||lc[n]||y0)return;lc[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",a=lk().prod.length>0;function c(){const E=document.getElementById(r);E&&E.remove()}function f(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function p(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function g(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{y0=!0,c()},E}function v(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function x(){const E=ck(r),R=t("text"),O=document.getElementById(R)||document.createElement("span"),U=t("learnmore"),M=document.getElementById(U)||document.createElement("a"),Q=t("preprendIcon"),te=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const le=E.element;f(le),v(M,U);const G=g();p(te,Q),le.append(te,O,M,G),document.body.appendChild(le)}a?(O.innerText="Preview backend disconnected.",te.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(te.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,O.innerText="Preview backend running in this workspace."),O.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",x):x()}/**
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
 */function cn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cn())}function uk(){var n;const e=(n=Oh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dk(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hk(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function mE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fk(){const n=cn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function pk(){return lE.NODE_ADMIN===!0}function mk(){return!uk()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function gk(){try{return typeof indexedDB=="object"}catch{return!1}}function _k(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var a;e(((a=i.error)===null||a===void 0?void 0:a.message)||"")}}catch(t){e(t)}})}/**
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
 */const yk="FirebaseError";class qr extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=yk,Object.setPrototypeOf(this,qr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zc.prototype.create)}}class zc{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?vk(a,r):"Error",f=`${this.serviceName}: ${c} (${i}).`;return new qr(i,f,r)}}function vk(n,e){return n.replace(wk,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const wk=/\{\$([^}]+)}/g;/**
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
 */function xc(n){return JSON.parse(n)}function Gt(n){return JSON.stringify(n)}/**
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
 */const gE=function(n){let e={},t={},r={},i="";try{const a=n.split(".");e=xc(Zd(a[0])||""),t=xc(Zd(a[1])||""),i=a[2],r=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:r,signature:i}},xk=function(n){const e=gE(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},Ek=function(n){const e=gE(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function wr(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ho(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Cm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function eh(n,e,t){const r={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=e.call(t,n[i],i,n));return r}function hi(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(v0(a)&&v0(c)){if(!hi(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function v0(n){return n!==null&&typeof n=="object"}/**
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
 */function qa(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function nc(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function rc(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}/**
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
 */class Tk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const r=this.W_;if(typeof e=="string")for(let x=0;x<16;x++)r[x]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let x=0;x<16;x++)r[x]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let x=16;x<80;x++){const E=r[x-3]^r[x-8]^r[x-14]^r[x-16];r[x]=(E<<1|E>>>31)&4294967295}let i=this.chain_[0],a=this.chain_[1],c=this.chain_[2],f=this.chain_[3],p=this.chain_[4],g,v;for(let x=0;x<80;x++){x<40?x<20?(g=f^a&(c^f),v=1518500249):(g=a^c^f,v=1859775393):x<60?(g=a&c|f&(a|c),v=2400959708):(g=a^c^f,v=3395469782);const E=(i<<5|i>>>27)+g+p+v+r[x]&4294967295;p=f,f=c,c=(a<<30|a>>>2)&4294967295,a=i,i=E}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+a&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+f&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const r=t-this.blockSize;let i=0;const a=this.buf_;let c=this.inbuf_;for(;i<t;){if(c===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(a[c]=e.charCodeAt(i),++c,++i,c===this.blockSize){this.compress_(a),c=0;break}}else for(;i<t;)if(a[c]=e[i],++c,++i,c===this.blockSize){this.compress_(a),c=0;break}}this.inbuf_=c,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let a=24;a>=0;a-=8)e[r]=this.chain_[i]>>a&255,++r;return e}}function bk(n,e){const t=new Ik(n,e);return t.subscribe.bind(t)}class Ik{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ck(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=sm),i.error===void 0&&(i.error=sm),i.complete===void 0&&(i.complete=sm);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ck(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function sm(){}function wg(n,e){return`${n} failed: ${e} argument `}/**
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
 */const Nk=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);if(i>=55296&&i<=56319){const a=i-55296;r++,se(r<n.length,"Surrogate pair missing trail surrogate.");const c=n.charCodeAt(r)-56320;i=65536+(a<<10)+c}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lh=function(n){let e=0;for(let t=0;t<n.length;t++){const r=n.charCodeAt(t);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function lt(n){return n&&n._delegate?n._delegate:n}class ys{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ro="[DEFAULT]";/**
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
 */class Sk{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Uc;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),i=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(i)return null;throw a}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Rk(e))try{this.getOrInitializeService({instanceIdentifier:ro})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=ro){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ro){return this.instances.has(e)}getOptions(e=ro){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(a);r===f&&c.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),a=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(i,a);const c=this.instances.get(i);return c&&e(c,i),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kk(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ro){return this.component?this.component.multipleInstances?e:ro:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kk(n){return n===ro?void 0:n}function Rk(n){return n.instantiationMode==="EAGER"}/**
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
 */class Ak{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Sk(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ze;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ze||(ze={}));const Pk={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},jk=ze.INFO,Ok={[ze.DEBUG]:"log",[ze.VERBOSE]:"log",[ze.INFO]:"info",[ze.WARN]:"warn",[ze.ERROR]:"error"},Dk=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Ok[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vh{constructor(e){this.name=e,this._logLevel=jk,this._logHandler=Dk,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ze))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Pk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ze.DEBUG,...e),this._logHandler(this,ze.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ze.VERBOSE,...e),this._logHandler(this,ze.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ze.INFO,...e),this._logHandler(this,ze.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ze.WARN,...e),this._logHandler(this,ze.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ze.ERROR,...e),this._logHandler(this,ze.ERROR,...e)}}const Mk=(n,e)=>e.some(t=>n instanceof t);let w0,x0;function Lk(){return w0||(w0=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vk(){return x0||(x0=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _E=new WeakMap,Nm=new WeakMap,yE=new WeakMap,im=new WeakMap,xg=new WeakMap;function Fk(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(oi(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&_E.set(t,n)}).catch(()=>{}),xg.set(e,n),e}function Uk(n){if(Nm.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Nm.set(n,e)}let Sm={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Nm.get(n);if(e==="objectStoreNames")return n.objectStoreNames||yE.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return oi(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zk(n){Sm=n(Sm)}function Bk(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(om(this),e,...t);return yE.set(r,e.sort?e.sort():[e]),oi(r)}:Vk().includes(n)?function(...e){return n.apply(om(this),e),oi(_E.get(this))}:function(...e){return oi(n.apply(om(this),e))}}function $k(n){return typeof n=="function"?Bk(n):(n instanceof IDBTransaction&&Uk(n),Mk(n,Lk())?new Proxy(n,Sm):n)}function oi(n){if(n instanceof IDBRequest)return Fk(n);if(im.has(n))return im.get(n);const e=$k(n);return e!==n&&(im.set(n,e),xg.set(e,n)),e}const om=n=>xg.get(n);function Wk(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),f=oi(c);return r&&c.addEventListener("upgradeneeded",p=>{r(oi(c.result),p.oldVersion,p.newVersion,oi(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{a&&p.addEventListener("close",()=>a()),i&&p.addEventListener("versionchange",g=>i(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const qk=["get","getKey","getAll","getAllKeys","count"],Hk=["put","add","delete","clear"],am=new Map;function E0(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(am.get(e))return am.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Hk.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||qk.includes(t)))return;const a=async function(c,...f){const p=this.transaction(c,i?"readwrite":"readonly");let g=p.store;return r&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),i&&p.done]))[0]};return am.set(e,a),a}zk(n=>({...n,get:(e,t,r)=>E0(e,t)||n.get(e,t,r),has:(e,t)=>!!E0(e,t)||n.has(e,t)}));/**
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
 */class Gk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Kk(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Kk(n){const e=n.getComponent();return e?.type==="VERSION"}const km="@firebase/app",T0="0.13.2";/**
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
 */const vs=new Vh("@firebase/app"),Qk="@firebase/app-compat",Yk="@firebase/analytics-compat",Xk="@firebase/analytics",Jk="@firebase/app-check-compat",Zk="@firebase/app-check",e2="@firebase/auth",t2="@firebase/auth-compat",n2="@firebase/database",r2="@firebase/data-connect",s2="@firebase/database-compat",i2="@firebase/functions",o2="@firebase/functions-compat",a2="@firebase/installations",l2="@firebase/installations-compat",c2="@firebase/messaging",u2="@firebase/messaging-compat",d2="@firebase/performance",h2="@firebase/performance-compat",f2="@firebase/remote-config",p2="@firebase/remote-config-compat",m2="@firebase/storage",g2="@firebase/storage-compat",_2="@firebase/firestore",y2="@firebase/ai",v2="@firebase/firestore-compat",w2="firebase",x2="11.10.0";/**
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
 */const Rm="[DEFAULT]",E2={[km]:"fire-core",[Qk]:"fire-core-compat",[Xk]:"fire-analytics",[Yk]:"fire-analytics-compat",[Zk]:"fire-app-check",[Jk]:"fire-app-check-compat",[e2]:"fire-auth",[t2]:"fire-auth-compat",[n2]:"fire-rtdb",[r2]:"fire-data-connect",[s2]:"fire-rtdb-compat",[i2]:"fire-fn",[o2]:"fire-fn-compat",[a2]:"fire-iid",[l2]:"fire-iid-compat",[c2]:"fire-fcm",[u2]:"fire-fcm-compat",[d2]:"fire-perf",[h2]:"fire-perf-compat",[f2]:"fire-rc",[p2]:"fire-rc-compat",[m2]:"fire-gcs",[g2]:"fire-gcs-compat",[_2]:"fire-fst",[v2]:"fire-fst-compat",[y2]:"fire-vertex","fire-js":"fire-js",[w2]:"fire-js-all"};/**
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
 */const th=new Map,T2=new Map,Am=new Map;function b0(n,e){try{n.container.addComponent(e)}catch(t){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function fi(n){const e=n.name;if(Am.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;Am.set(e,n);for(const t of th.values())b0(t,n);for(const t of T2.values())b0(t,n);return!0}function Bc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Tn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const b2={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ai=new zc("app","Firebase",b2);/**
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
 */class I2{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ys("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ai.create("app-deleted",{appName:this._name})}}/**
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
 */const bi=x2;function vE(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Rm,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw ai.create("bad-app-name",{appName:String(i)});if(t||(t=fE()),!t)throw ai.create("no-options");const a=th.get(i);if(a){if(hi(t,a.options)&&hi(r,a.config))return a;throw ai.create("duplicate-app",{appName:i})}const c=new Ak(i);for(const p of Am.values())c.addComponent(p);const f=new I2(t,r,c);return th.set(i,f),f}function Fh(n=Rm){const e=th.get(n);if(!e&&n===Rm&&fE())return vE();if(!e)throw ai.create("no-app",{appName:n});return e}function Yn(n,e,t){var r;let i=(r=E2[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const a=i.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const f=[`Unable to register library "${i}" with version "${e}":`];a&&f.push(`library name "${i}" contains illegal characters (whitespace or "/")`),a&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(f.join(" "));return}fi(new ys(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const C2="firebase-heartbeat-database",N2=1,Ec="firebase-heartbeat-store";let lm=null;function wE(){return lm||(lm=Wk(C2,N2,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ec)}catch(t){console.warn(t)}}}}).catch(n=>{throw ai.create("idb-open",{originalErrorMessage:n.message})})),lm}async function S2(n){try{const t=(await wE()).transaction(Ec),r=await t.objectStore(Ec).get(xE(n));return await t.done,r}catch(e){if(e instanceof qr)vs.warn(e.message);else{const t=ai.create("idb-get",{originalErrorMessage:e?.message});vs.warn(t.message)}}}async function I0(n,e){try{const r=(await wE()).transaction(Ec,"readwrite");await r.objectStore(Ec).put(e,xE(n)),await r.done}catch(t){if(t instanceof qr)vs.warn(t.message);else{const r=ai.create("idb-set",{originalErrorMessage:t?.message});vs.warn(r.message)}}}function xE(n){return`${n.name}!${n.options.appId}`}/**
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
 */const k2=1024,R2=30;class A2{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new j2(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=C0();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(c=>c.date===a))return;if(this._heartbeatsCache.heartbeats.push({date:a,agent:i}),this._heartbeatsCache.heartbeats.length>R2){const c=O2(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){vs.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=C0(),{heartbeatsToSend:r,unsentEntries:i}=P2(this._heartbeatsCache.heartbeats),a=Jd(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}catch(t){return vs.warn(t),""}}}function C0(){return new Date().toISOString().substring(0,10)}function P2(n,e=k2){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),N0(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),N0(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class j2{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gk()?_k().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await S2(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return I0(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function N0(n){return Jd(JSON.stringify({version:2,heartbeats:n})).length}function O2(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function D2(n){fi(new ys("platform-logger",e=>new Gk(e),"PRIVATE")),fi(new ys("heartbeat",e=>new A2(e),"PRIVATE")),Yn(km,T0,n),Yn(km,T0,"esm2017"),Yn("fire-js","")}D2("");var S0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var li,EE;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(j,I){function S(){}S.prototype=I.prototype,j.D=I.prototype,j.prototype=new S,j.prototype.constructor=j,j.C=function(C,A,V){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return I.prototype[A].apply(C,k)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(j,I,S){S||(S=0);var C=Array(16);if(typeof I=="string")for(var A=0;16>A;++A)C[A]=I.charCodeAt(S++)|I.charCodeAt(S++)<<8|I.charCodeAt(S++)<<16|I.charCodeAt(S++)<<24;else for(A=0;16>A;++A)C[A]=I[S++]|I[S++]<<8|I[S++]<<16|I[S++]<<24;I=j.g[0],S=j.g[1],A=j.g[2];var V=j.g[3],k=I+(V^S&(A^V))+C[0]+3614090360&4294967295;I=S+(k<<7&4294967295|k>>>25),k=V+(A^I&(S^A))+C[1]+3905402710&4294967295,V=I+(k<<12&4294967295|k>>>20),k=A+(S^V&(I^S))+C[2]+606105819&4294967295,A=V+(k<<17&4294967295|k>>>15),k=S+(I^A&(V^I))+C[3]+3250441966&4294967295,S=A+(k<<22&4294967295|k>>>10),k=I+(V^S&(A^V))+C[4]+4118548399&4294967295,I=S+(k<<7&4294967295|k>>>25),k=V+(A^I&(S^A))+C[5]+1200080426&4294967295,V=I+(k<<12&4294967295|k>>>20),k=A+(S^V&(I^S))+C[6]+2821735955&4294967295,A=V+(k<<17&4294967295|k>>>15),k=S+(I^A&(V^I))+C[7]+4249261313&4294967295,S=A+(k<<22&4294967295|k>>>10),k=I+(V^S&(A^V))+C[8]+1770035416&4294967295,I=S+(k<<7&4294967295|k>>>25),k=V+(A^I&(S^A))+C[9]+2336552879&4294967295,V=I+(k<<12&4294967295|k>>>20),k=A+(S^V&(I^S))+C[10]+4294925233&4294967295,A=V+(k<<17&4294967295|k>>>15),k=S+(I^A&(V^I))+C[11]+2304563134&4294967295,S=A+(k<<22&4294967295|k>>>10),k=I+(V^S&(A^V))+C[12]+1804603682&4294967295,I=S+(k<<7&4294967295|k>>>25),k=V+(A^I&(S^A))+C[13]+4254626195&4294967295,V=I+(k<<12&4294967295|k>>>20),k=A+(S^V&(I^S))+C[14]+2792965006&4294967295,A=V+(k<<17&4294967295|k>>>15),k=S+(I^A&(V^I))+C[15]+1236535329&4294967295,S=A+(k<<22&4294967295|k>>>10),k=I+(A^V&(S^A))+C[1]+4129170786&4294967295,I=S+(k<<5&4294967295|k>>>27),k=V+(S^A&(I^S))+C[6]+3225465664&4294967295,V=I+(k<<9&4294967295|k>>>23),k=A+(I^S&(V^I))+C[11]+643717713&4294967295,A=V+(k<<14&4294967295|k>>>18),k=S+(V^I&(A^V))+C[0]+3921069994&4294967295,S=A+(k<<20&4294967295|k>>>12),k=I+(A^V&(S^A))+C[5]+3593408605&4294967295,I=S+(k<<5&4294967295|k>>>27),k=V+(S^A&(I^S))+C[10]+38016083&4294967295,V=I+(k<<9&4294967295|k>>>23),k=A+(I^S&(V^I))+C[15]+3634488961&4294967295,A=V+(k<<14&4294967295|k>>>18),k=S+(V^I&(A^V))+C[4]+3889429448&4294967295,S=A+(k<<20&4294967295|k>>>12),k=I+(A^V&(S^A))+C[9]+568446438&4294967295,I=S+(k<<5&4294967295|k>>>27),k=V+(S^A&(I^S))+C[14]+3275163606&4294967295,V=I+(k<<9&4294967295|k>>>23),k=A+(I^S&(V^I))+C[3]+4107603335&4294967295,A=V+(k<<14&4294967295|k>>>18),k=S+(V^I&(A^V))+C[8]+1163531501&4294967295,S=A+(k<<20&4294967295|k>>>12),k=I+(A^V&(S^A))+C[13]+2850285829&4294967295,I=S+(k<<5&4294967295|k>>>27),k=V+(S^A&(I^S))+C[2]+4243563512&4294967295,V=I+(k<<9&4294967295|k>>>23),k=A+(I^S&(V^I))+C[7]+1735328473&4294967295,A=V+(k<<14&4294967295|k>>>18),k=S+(V^I&(A^V))+C[12]+2368359562&4294967295,S=A+(k<<20&4294967295|k>>>12),k=I+(S^A^V)+C[5]+4294588738&4294967295,I=S+(k<<4&4294967295|k>>>28),k=V+(I^S^A)+C[8]+2272392833&4294967295,V=I+(k<<11&4294967295|k>>>21),k=A+(V^I^S)+C[11]+1839030562&4294967295,A=V+(k<<16&4294967295|k>>>16),k=S+(A^V^I)+C[14]+4259657740&4294967295,S=A+(k<<23&4294967295|k>>>9),k=I+(S^A^V)+C[1]+2763975236&4294967295,I=S+(k<<4&4294967295|k>>>28),k=V+(I^S^A)+C[4]+1272893353&4294967295,V=I+(k<<11&4294967295|k>>>21),k=A+(V^I^S)+C[7]+4139469664&4294967295,A=V+(k<<16&4294967295|k>>>16),k=S+(A^V^I)+C[10]+3200236656&4294967295,S=A+(k<<23&4294967295|k>>>9),k=I+(S^A^V)+C[13]+681279174&4294967295,I=S+(k<<4&4294967295|k>>>28),k=V+(I^S^A)+C[0]+3936430074&4294967295,V=I+(k<<11&4294967295|k>>>21),k=A+(V^I^S)+C[3]+3572445317&4294967295,A=V+(k<<16&4294967295|k>>>16),k=S+(A^V^I)+C[6]+76029189&4294967295,S=A+(k<<23&4294967295|k>>>9),k=I+(S^A^V)+C[9]+3654602809&4294967295,I=S+(k<<4&4294967295|k>>>28),k=V+(I^S^A)+C[12]+3873151461&4294967295,V=I+(k<<11&4294967295|k>>>21),k=A+(V^I^S)+C[15]+530742520&4294967295,A=V+(k<<16&4294967295|k>>>16),k=S+(A^V^I)+C[2]+3299628645&4294967295,S=A+(k<<23&4294967295|k>>>9),k=I+(A^(S|~V))+C[0]+4096336452&4294967295,I=S+(k<<6&4294967295|k>>>26),k=V+(S^(I|~A))+C[7]+1126891415&4294967295,V=I+(k<<10&4294967295|k>>>22),k=A+(I^(V|~S))+C[14]+2878612391&4294967295,A=V+(k<<15&4294967295|k>>>17),k=S+(V^(A|~I))+C[5]+4237533241&4294967295,S=A+(k<<21&4294967295|k>>>11),k=I+(A^(S|~V))+C[12]+1700485571&4294967295,I=S+(k<<6&4294967295|k>>>26),k=V+(S^(I|~A))+C[3]+2399980690&4294967295,V=I+(k<<10&4294967295|k>>>22),k=A+(I^(V|~S))+C[10]+4293915773&4294967295,A=V+(k<<15&4294967295|k>>>17),k=S+(V^(A|~I))+C[1]+2240044497&4294967295,S=A+(k<<21&4294967295|k>>>11),k=I+(A^(S|~V))+C[8]+1873313359&4294967295,I=S+(k<<6&4294967295|k>>>26),k=V+(S^(I|~A))+C[15]+4264355552&4294967295,V=I+(k<<10&4294967295|k>>>22),k=A+(I^(V|~S))+C[6]+2734768916&4294967295,A=V+(k<<15&4294967295|k>>>17),k=S+(V^(A|~I))+C[13]+1309151649&4294967295,S=A+(k<<21&4294967295|k>>>11),k=I+(A^(S|~V))+C[4]+4149444226&4294967295,I=S+(k<<6&4294967295|k>>>26),k=V+(S^(I|~A))+C[11]+3174756917&4294967295,V=I+(k<<10&4294967295|k>>>22),k=A+(I^(V|~S))+C[2]+718787259&4294967295,A=V+(k<<15&4294967295|k>>>17),k=S+(V^(A|~I))+C[9]+3951481745&4294967295,j.g[0]=j.g[0]+I&4294967295,j.g[1]=j.g[1]+(A+(k<<21&4294967295|k>>>11))&4294967295,j.g[2]=j.g[2]+A&4294967295,j.g[3]=j.g[3]+V&4294967295}r.prototype.u=function(j,I){I===void 0&&(I=j.length);for(var S=I-this.blockSize,C=this.B,A=this.h,V=0;V<I;){if(A==0)for(;V<=S;)i(this,j,V),V+=this.blockSize;if(typeof j=="string"){for(;V<I;)if(C[A++]=j.charCodeAt(V++),A==this.blockSize){i(this,C),A=0;break}}else for(;V<I;)if(C[A++]=j[V++],A==this.blockSize){i(this,C),A=0;break}}this.h=A,this.o+=I},r.prototype.v=function(){var j=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);j[0]=128;for(var I=1;I<j.length-8;++I)j[I]=0;var S=8*this.o;for(I=j.length-8;I<j.length;++I)j[I]=S&255,S/=256;for(this.u(j),j=Array(16),I=S=0;4>I;++I)for(var C=0;32>C;C+=8)j[S++]=this.g[I]>>>C&255;return j};function a(j,I){var S=f;return Object.prototype.hasOwnProperty.call(S,j)?S[j]:S[j]=I(j)}function c(j,I){this.h=I;for(var S=[],C=!0,A=j.length-1;0<=A;A--){var V=j[A]|0;C&&V==I||(S[A]=V,C=!1)}this.g=S}var f={};function p(j){return-128<=j&&128>j?a(j,function(I){return new c([I|0],0>I?-1:0)}):new c([j|0],0>j?-1:0)}function g(j){if(isNaN(j)||!isFinite(j))return x;if(0>j)return M(g(-j));for(var I=[],S=1,C=0;j>=S;C++)I[C]=j/S|0,S*=4294967296;return new c(I,0)}function v(j,I){if(j.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(j.charAt(0)=="-")return M(v(j.substring(1),I));if(0<=j.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(I,8)),C=x,A=0;A<j.length;A+=8){var V=Math.min(8,j.length-A),k=parseInt(j.substring(A,A+V),I);8>V?(V=g(Math.pow(I,V)),C=C.j(V).add(g(k))):(C=C.j(S),C=C.add(g(k)))}return C}var x=p(0),E=p(1),R=p(16777216);n=c.prototype,n.m=function(){if(U(this))return-M(this).m();for(var j=0,I=1,S=0;S<this.g.length;S++){var C=this.i(S);j+=(0<=C?C:4294967296+C)*I,I*=4294967296}return j},n.toString=function(j){if(j=j||10,2>j||36<j)throw Error("radix out of range: "+j);if(O(this))return"0";if(U(this))return"-"+M(this).toString(j);for(var I=g(Math.pow(j,6)),S=this,C="";;){var A=G(S,I).g;S=Q(S,A.j(I));var V=((0<S.g.length?S.g[0]:S.h)>>>0).toString(j);if(S=A,O(S))return V+C;for(;6>V.length;)V="0"+V;C=V+C}},n.i=function(j){return 0>j?0:j<this.g.length?this.g[j]:this.h};function O(j){if(j.h!=0)return!1;for(var I=0;I<j.g.length;I++)if(j.g[I]!=0)return!1;return!0}function U(j){return j.h==-1}n.l=function(j){return j=Q(this,j),U(j)?-1:O(j)?0:1};function M(j){for(var I=j.g.length,S=[],C=0;C<I;C++)S[C]=~j.g[C];return new c(S,~j.h).add(E)}n.abs=function(){return U(this)?M(this):this},n.add=function(j){for(var I=Math.max(this.g.length,j.g.length),S=[],C=0,A=0;A<=I;A++){var V=C+(this.i(A)&65535)+(j.i(A)&65535),k=(V>>>16)+(this.i(A)>>>16)+(j.i(A)>>>16);C=k>>>16,V&=65535,k&=65535,S[A]=k<<16|V}return new c(S,S[S.length-1]&-2147483648?-1:0)};function Q(j,I){return j.add(M(I))}n.j=function(j){if(O(this)||O(j))return x;if(U(this))return U(j)?M(this).j(M(j)):M(M(this).j(j));if(U(j))return M(this.j(M(j)));if(0>this.l(R)&&0>j.l(R))return g(this.m()*j.m());for(var I=this.g.length+j.g.length,S=[],C=0;C<2*I;C++)S[C]=0;for(C=0;C<this.g.length;C++)for(var A=0;A<j.g.length;A++){var V=this.i(C)>>>16,k=this.i(C)&65535,nt=j.i(A)>>>16,ct=j.i(A)&65535;S[2*C+2*A]+=k*ct,te(S,2*C+2*A),S[2*C+2*A+1]+=V*ct,te(S,2*C+2*A+1),S[2*C+2*A+1]+=k*nt,te(S,2*C+2*A+1),S[2*C+2*A+2]+=V*nt,te(S,2*C+2*A+2)}for(C=0;C<I;C++)S[C]=S[2*C+1]<<16|S[2*C];for(C=I;C<2*I;C++)S[C]=0;return new c(S,0)};function te(j,I){for(;(j[I]&65535)!=j[I];)j[I+1]+=j[I]>>>16,j[I]&=65535,I++}function le(j,I){this.g=j,this.h=I}function G(j,I){if(O(I))throw Error("division by zero");if(O(j))return new le(x,x);if(U(j))return I=G(M(j),I),new le(M(I.g),M(I.h));if(U(I))return I=G(j,M(I)),new le(M(I.g),I.h);if(30<j.g.length){if(U(j)||U(I))throw Error("slowDivide_ only works with positive integers.");for(var S=E,C=I;0>=C.l(j);)S=J(S),C=J(C);var A=fe(S,1),V=fe(C,1);for(C=fe(C,2),S=fe(S,2);!O(C);){var k=V.add(C);0>=k.l(j)&&(A=A.add(S),V=k),C=fe(C,1),S=fe(S,1)}return I=Q(j,A.j(I)),new le(A,I)}for(A=x;0<=j.l(I);){for(S=Math.max(1,Math.floor(j.m()/I.m())),C=Math.ceil(Math.log(S)/Math.LN2),C=48>=C?1:Math.pow(2,C-48),V=g(S),k=V.j(I);U(k)||0<k.l(j);)S-=C,V=g(S),k=V.j(I);O(V)&&(V=E),A=A.add(V),j=Q(j,k)}return new le(A,j)}n.A=function(j){return G(this,j).h},n.and=function(j){for(var I=Math.max(this.g.length,j.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)&j.i(C);return new c(S,this.h&j.h)},n.or=function(j){for(var I=Math.max(this.g.length,j.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)|j.i(C);return new c(S,this.h|j.h)},n.xor=function(j){for(var I=Math.max(this.g.length,j.g.length),S=[],C=0;C<I;C++)S[C]=this.i(C)^j.i(C);return new c(S,this.h^j.h)};function J(j){for(var I=j.g.length+1,S=[],C=0;C<I;C++)S[C]=j.i(C)<<1|j.i(C-1)>>>31;return new c(S,j.h)}function fe(j,I){var S=I>>5;I%=32;for(var C=j.g.length-S,A=[],V=0;V<C;V++)A[V]=0<I?j.i(V+S)>>>I|j.i(V+S+1)<<32-I:j.i(V+S);return new c(A,j.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,EE=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,li=c}).apply(typeof S0<"u"?S0:typeof self<"u"?self:typeof window<"u"?window:{});var bd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var TE,sc,bE,Md,Pm,IE,CE,NE;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(u,_,w){return u==Array.prototype||u==Object.prototype||(u[_]=w.value),u};function t(u){u=[typeof globalThis=="object"&&globalThis,u,typeof window=="object"&&window,typeof self=="object"&&self,typeof bd=="object"&&bd];for(var _=0;_<u.length;++_){var w=u[_];if(w&&w.Math==Math)return w}throw Error("Cannot find global object")}var r=t(this);function i(u,_){if(_)e:{var w=r;u=u.split(".");for(var b=0;b<u.length-1;b++){var F=u[b];if(!(F in w))break e;w=w[F]}u=u[u.length-1],b=w[u],_=_(b),_!=b&&_!=null&&e(w,u,{configurable:!0,writable:!0,value:_})}}function a(u,_){u instanceof String&&(u+="");var w=0,b=!1,F={next:function(){if(!b&&w<u.length){var q=w++;return{value:_(q,u[q]),done:!1}}return b=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}i("Array.prototype.values",function(u){return u||function(){return a(this,function(_,w){return w})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(u){var _=typeof u;return _=_!="object"?_:u?Array.isArray(u)?"array":_:"null",_=="array"||_=="object"&&typeof u.length=="number"}function g(u){var _=typeof u;return _=="object"&&u!=null||_=="function"}function v(u,_,w){return u.call.apply(u.bind,arguments)}function x(u,_,w){if(!u)throw Error();if(2<arguments.length){var b=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,b),u.apply(_,F)}}return function(){return u.apply(_,arguments)}}function E(u,_,w){return E=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:x,E.apply(null,arguments)}function R(u,_){var w=Array.prototype.slice.call(arguments,1);return function(){var b=w.slice();return b.push.apply(b,arguments),u.apply(this,b)}}function O(u,_){function w(){}w.prototype=_.prototype,u.aa=_.prototype,u.prototype=new w,u.prototype.constructor=u,u.Qb=function(b,F,q){for(var ie=Array(arguments.length-2),et=2;et<arguments.length;et++)ie[et-2]=arguments[et];return _.prototype[F].apply(b,ie)}}function U(u){const _=u.length;if(0<_){const w=Array(_);for(let b=0;b<_;b++)w[b]=u[b];return w}return[]}function M(u,_){for(let w=1;w<arguments.length;w++){const b=arguments[w];if(p(b)){const F=u.length||0,q=b.length||0;u.length=F+q;for(let ie=0;ie<q;ie++)u[F+ie]=b[ie]}else u.push(b)}}class Q{constructor(_,w){this.i=_,this.j=w,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function te(u){return/^[\s\xa0]*$/.test(u)}function le(){var u=f.navigator;return u&&(u=u.userAgent)?u:""}function G(u){return G[" "](u),u}G[" "]=function(){};var J=le().indexOf("Gecko")!=-1&&!(le().toLowerCase().indexOf("webkit")!=-1&&le().indexOf("Edge")==-1)&&!(le().indexOf("Trident")!=-1||le().indexOf("MSIE")!=-1)&&le().indexOf("Edge")==-1;function fe(u,_,w){for(const b in u)_.call(w,u[b],b,u)}function j(u,_){for(const w in u)_.call(void 0,u[w],w,u)}function I(u){const _={};for(const w in u)_[w]=u[w];return _}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function C(u,_){let w,b;for(let F=1;F<arguments.length;F++){b=arguments[F];for(w in b)u[w]=b[w];for(let q=0;q<S.length;q++)w=S[q],Object.prototype.hasOwnProperty.call(b,w)&&(u[w]=b[w])}}function A(u){var _=1;u=u.split(":");const w=[];for(;0<_&&u.length;)w.push(u.shift()),_--;return u.length&&w.push(u.join(":")),w}function V(u){f.setTimeout(()=>{throw u},0)}function k(){var u=ce;let _=null;return u.g&&(_=u.g,u.g=u.g.next,u.g||(u.h=null),_.next=null),_}class nt{constructor(){this.h=this.g=null}add(_,w){const b=ct.get();b.set(_,w),this.h?this.h.next=b:this.g=b,this.h=b}}var ct=new Q(()=>new Je,u=>u.reset());class Je{constructor(){this.next=this.g=this.h=null}set(_,w){this.h=_,this.g=w,this.next=null}reset(){this.next=this.g=this.h=null}}let Me,B=!1,ce=new nt,ne=()=>{const u=f.Promise.resolve(void 0);Me=()=>{u.then(L)}};var L=()=>{for(var u;u=k();){try{u.h.call(u.g)}catch(w){V(w)}var _=ct;_.j(u),100>_.h&&(_.h++,u.next=_.g,_.g=u)}B=!1};function H(){this.s=this.s,this.C=this.C}H.prototype.s=!1,H.prototype.ma=function(){this.s||(this.s=!0,this.N())},H.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ae(u,_){this.type=u,this.g=this.target=_,this.defaultPrevented=!1}ae.prototype.h=function(){this.defaultPrevented=!0};var he=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var u=!1,_=Object.defineProperty({},"passive",{get:function(){u=!0}});try{const w=()=>{};f.addEventListener("test",w,_),f.removeEventListener("test",w,_)}catch{}return u})();function pe(u,_){if(ae.call(this,u?u.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,u){var w=this.type=u.type,b=u.changedTouches&&u.changedTouches.length?u.changedTouches[0]:null;if(this.target=u.target||u.srcElement,this.g=_,_=u.relatedTarget){if(J){e:{try{G(_.nodeName);var F=!0;break e}catch{}F=!1}F||(_=null)}}else w=="mouseover"?_=u.fromElement:w=="mouseout"&&(_=u.toElement);this.relatedTarget=_,b?(this.clientX=b.clientX!==void 0?b.clientX:b.pageX,this.clientY=b.clientY!==void 0?b.clientY:b.pageY,this.screenX=b.screenX||0,this.screenY=b.screenY||0):(this.clientX=u.clientX!==void 0?u.clientX:u.pageX,this.clientY=u.clientY!==void 0?u.clientY:u.pageY,this.screenX=u.screenX||0,this.screenY=u.screenY||0),this.button=u.button,this.key=u.key||"",this.ctrlKey=u.ctrlKey,this.altKey=u.altKey,this.shiftKey=u.shiftKey,this.metaKey=u.metaKey,this.pointerId=u.pointerId||0,this.pointerType=typeof u.pointerType=="string"?u.pointerType:je[u.pointerType]||"",this.state=u.state,this.i=u,u.defaultPrevented&&pe.aa.h.call(this)}}O(pe,ae);var je={2:"touch",3:"pen",4:"mouse"};pe.prototype.h=function(){pe.aa.h.call(this);var u=this.i;u.preventDefault?u.preventDefault():u.returnValue=!1};var be="closure_listenable_"+(1e6*Math.random()|0),Ue=0;function Ge(u,_,w,b,F){this.listener=u,this.proxy=null,this.src=_,this.type=w,this.capture=!!b,this.ha=F,this.key=++Ue,this.da=this.fa=!1}function tt(u){u.da=!0,u.listener=null,u.proxy=null,u.src=null,u.ha=null}function Rn(u){this.src=u,this.g={},this.h=0}Rn.prototype.add=function(u,_,w,b,F){var q=u.toString();u=this.g[q],u||(u=this.g[q]=[],this.h++);var ie=Ns(u,_,b,F);return-1<ie?(_=u[ie],w||(_.fa=!1)):(_=new Ge(_,this.src,q,!!b,F),_.fa=w,u.push(_)),_};function Xn(u,_){var w=_.type;if(w in u.g){var b=u.g[w],F=Array.prototype.indexOf.call(b,_,void 0),q;(q=0<=F)&&Array.prototype.splice.call(b,F,1),q&&(tt(_),u.g[w].length==0&&(delete u.g[w],u.h--))}}function Ns(u,_,w,b){for(var F=0;F<u.length;++F){var q=u[F];if(!q.da&&q.listener==_&&q.capture==!!w&&q.ha==b)return F}return-1}var Si="closure_lm_"+(1e6*Math.random()|0),Io={};function Za(u,_,w,b,F){if(Array.isArray(_)){for(var q=0;q<_.length;q++)Za(u,_[q],w,b,F);return null}return w=nl(w),u&&u[be]?u.K(_,w,g(b)?!!b.capture:!1,F):el(u,_,w,!1,b,F)}function el(u,_,w,b,F,q){if(!_)throw Error("Invalid event type");var ie=g(F)?!!F.capture:!!F,et=No(u);if(et||(u[Si]=et=new Rn(u)),w=et.add(_,w,b,ie,q),w.proxy)return w;if(b=su(),w.proxy=b,b.src=u,b.listener=w,u.addEventListener)he||(F=ie),F===void 0&&(F=!1),u.addEventListener(_.toString(),b,F);else if(u.attachEvent)u.attachEvent(Qr(_.toString()),b);else if(u.addListener&&u.removeListener)u.addListener(b);else throw Error("addEventListener and attachEvent are unavailable.");return w}function su(){function u(w){return _.call(u.src,u.listener,w)}const _=tl;return u}function Co(u,_,w,b,F){if(Array.isArray(_))for(var q=0;q<_.length;q++)Co(u,_[q],w,b,F);else b=g(b)?!!b.capture:!!b,w=nl(w),u&&u[be]?(u=u.i,_=String(_).toString(),_ in u.g&&(q=u.g[_],w=Ns(q,w,b,F),-1<w&&(tt(q[w]),Array.prototype.splice.call(q,w,1),q.length==0&&(delete u.g[_],u.h--)))):u&&(u=No(u))&&(_=u.g[_.toString()],u=-1,_&&(u=Ns(_,w,b,F)),(w=-1<u?_[u]:null)&&Kr(w))}function Kr(u){if(typeof u!="number"&&u&&!u.da){var _=u.src;if(_&&_[be])Xn(_.i,u);else{var w=u.type,b=u.proxy;_.removeEventListener?_.removeEventListener(w,b,u.capture):_.detachEvent?_.detachEvent(Qr(w),b):_.addListener&&_.removeListener&&_.removeListener(b),(w=No(_))?(Xn(w,u),w.h==0&&(w.src=null,_[Si]=null)):tt(u)}}}function Qr(u){return u in Io?Io[u]:Io[u]="on"+u}function tl(u,_){if(u.da)u=!0;else{_=new pe(_,this);var w=u.listener,b=u.ha||u.src;u.fa&&Kr(u),u=w.call(b,_)}return u}function No(u){return u=u[Si],u instanceof Rn?u:null}var So="__closure_events_fn_"+(1e9*Math.random()>>>0);function nl(u){return typeof u=="function"?u:(u[So]||(u[So]=function(_){return u.handleEvent(_)}),u[So])}function kt(){H.call(this),this.i=new Rn(this),this.M=this,this.F=null}O(kt,H),kt.prototype[be]=!0,kt.prototype.removeEventListener=function(u,_,w,b){Co(this,u,_,w,b)};function Rt(u,_){var w,b=u.F;if(b)for(w=[];b;b=b.F)w.push(b);if(u=u.M,b=_.type||_,typeof _=="string")_=new ae(_,u);else if(_ instanceof ae)_.target=_.target||u;else{var F=_;_=new ae(b,u),C(_,F)}if(F=!0,w)for(var q=w.length-1;0<=q;q--){var ie=_.g=w[q];F=Yr(ie,b,!0,_)&&F}if(ie=_.g=u,F=Yr(ie,b,!0,_)&&F,F=Yr(ie,b,!1,_)&&F,w)for(q=0;q<w.length;q++)ie=_.g=w[q],F=Yr(ie,b,!1,_)&&F}kt.prototype.N=function(){if(kt.aa.N.call(this),this.i){var u=this.i,_;for(_ in u.g){for(var w=u.g[_],b=0;b<w.length;b++)tt(w[b]);delete u.g[_],u.h--}}this.F=null},kt.prototype.K=function(u,_,w,b){return this.i.add(String(u),_,!1,w,b)},kt.prototype.L=function(u,_,w,b){return this.i.add(String(u),_,!0,w,b)};function Yr(u,_,w,b){if(_=u.i.g[String(_)],!_)return!0;_=_.concat();for(var F=!0,q=0;q<_.length;++q){var ie=_[q];if(ie&&!ie.da&&ie.capture==w){var et=ie.listener,At=ie.ha||ie.src;ie.fa&&Xn(u.i,ie),F=et.call(At,b)!==!1&&F}}return F&&!b.defaultPrevented}function rl(u,_,w){if(typeof u=="function")w&&(u=E(u,w));else if(u&&typeof u.handleEvent=="function")u=E(u.handleEvent,u);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(u,_||0)}function Ss(u){u.g=rl(()=>{u.g=null,u.i&&(u.i=!1,Ss(u))},u.l);const _=u.h;u.h=null,u.m.apply(null,_)}class ki extends H{constructor(_,w){super(),this.m=_,this.l=w,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Ss(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(u){H.call(this),this.h=u,this.g={}}O(Ri,H);var sl=[];function il(u){fe(u.g,function(_,w){this.g.hasOwnProperty(w)&&Kr(_)},u),u.g={}}Ri.prototype.N=function(){Ri.aa.N.call(this),il(this)},Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ol=f.JSON.stringify,al=f.JSON.parse,ll=class{stringify(u){return f.JSON.stringify(u,void 0)}parse(u){return f.JSON.parse(u,void 0)}};function Ai(){}Ai.prototype.h=null;function ko(u){return u.h||(u.h=u.i())}function Ro(){}var Fn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xr(){ae.call(this,"d")}O(xr,ae);function Ao(){ae.call(this,"c")}O(Ao,ae);var Er={},cl=null;function Pi(){return cl=cl||new kt}Er.La="serverreachability";function ul(u){ae.call(this,Er.La,u)}O(ul,ae);function Xr(u){const _=Pi();Rt(_,new ul(_))}Er.STAT_EVENT="statevent";function dl(u,_){ae.call(this,Er.STAT_EVENT,u),this.stat=_}O(dl,ae);function xt(u){const _=Pi();Rt(_,new dl(_,u))}Er.Ma="timingevent";function Po(u,_){ae.call(this,Er.Ma,u),this.size=_}O(Po,ae);function Jn(u,_){if(typeof u!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){u()},_)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function Oi(u,_,w,b,F,q){u.info(function(){if(u.g)if(q)for(var ie="",et=q.split("&"),At=0;At<et.length;At++){var qe=et[At].split("=");if(1<qe.length){var Ft=qe[0];qe=qe[1];var bt=Ft.split("_");ie=2<=bt.length&&bt[1]=="type"?ie+(Ft+"="+qe+"&"):ie+(Ft+"=redacted&")}}else ie=null;else ie=q;return"XMLHTTP REQ ("+b+") [attempt "+F+"]: "+_+`
`+w+`
`+ie})}function jo(u,_,w,b,F,q,ie){u.info(function(){return"XMLHTTP RESP ("+b+") [ attempt "+F+"]: "+_+`
`+w+`
`+q+" "+ie})}function Zn(u,_,w,b){u.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ef(u,w)+(b?" "+b:"")})}function hl(u,_){u.info(function(){return"TIMEOUT: "+_})}ji.prototype.info=function(){};function Ef(u,_){if(!u.g)return _;if(!_)return null;try{var w=JSON.parse(_);if(w){for(u=0;u<w.length;u++)if(Array.isArray(w[u])){var b=w[u];if(!(2>b.length)){var F=b[1];if(Array.isArray(F)&&!(1>F.length)){var q=F[0];if(q!="noop"&&q!="stop"&&q!="close")for(var ie=1;ie<F.length;ie++)F[ie]=""}}}}return ol(w)}catch{return _}}var Oo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},iu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},er;function Di(){}O(Di,Ai),Di.prototype.g=function(){return new XMLHttpRequest},Di.prototype.i=function(){return{}},er=new Di;function tr(u,_,w,b){this.j=u,this.i=_,this.l=w,this.R=b||1,this.U=new Ri(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ou}function ou(){this.i=null,this.g="",this.h=!1}var fl={},Do={};function Mo(u,_,w){u.L=1,u.v=js(Pn(_)),u.m=w,u.P=!0,pl(u,null)}function pl(u,_){u.F=Date.now(),it(u),u.A=Pn(u.v);var w=u.A,b=u.R;Array.isArray(b)||(b=[String(b)]),Ds(w.i,"t",b),u.C=0,w=u.j.J,u.h=new ou,u.g=bu(u.j,w?_:null,!u.m),0<u.O&&(u.M=new ki(E(u.Y,u,u.g),u.O)),_=u.U,w=u.g,b=u.ca;var F="readystatechange";Array.isArray(F)||(F&&(sl[0]=F.toString()),F=sl);for(var q=0;q<F.length;q++){var ie=Za(w,F[q],b||_.handleEvent,!1,_.h||_);if(!ie)break;_.g[ie.key]=ie}_=u.H?I(u.H):{},u.m?(u.u||(u.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",u.g.ea(u.A,u.u,u.m,_)):(u.u="GET",u.g.ea(u.A,u.u,null,_)),Xr(),Oi(u.i,u.u,u.A,u.l,u.R,u.m)}tr.prototype.ca=function(u){u=u.target;const _=this.M;_&&mn(u)==3?_.j():this.Y(u)},tr.prototype.Y=function(u){try{if(u==this.g)e:{const bt=mn(this.g);var _=this.g.Ba();const Bn=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||wl(this.g)))){this.J||bt!=4||_==7||(_==8||0>=Bn?Xr(3):Xr(2)),Mi(this);var w=this.g.Z();this.X=w;t:if(au(this)){var b=wl(this.g);u="";var F=b.length,q=mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Un(this),ks(this);var ie="";break t}this.h.i=new f.TextDecoder}for(_=0;_<F;_++)this.h.h=!0,u+=this.h.i.decode(b[_],{stream:!(q&&_==F-1)});b.length=0,this.h.g+=u,this.C=0,ie=this.h.g}else ie=this.g.oa();if(this.o=w==200,jo(this.i,this.u,this.A,this.l,this.R,bt,w),this.o){if(this.T&&!this.K){t:{if(this.g){var et,At=this.g;if((et=At.g?At.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!te(et)){var qe=et;break t}}qe=null}if(w=qe)Zn(this.i,this.l,w,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ml(this,w);else{this.o=!1,this.s=3,xt(12),Un(this),ks(this);break e}}if(this.P){w=!0;let On;for(;!this.J&&this.C<ie.length;)if(On=Tf(this,ie),On==Do){bt==4&&(this.s=4,xt(14),w=!1),Zn(this.i,this.l,null,"[Incomplete Response]");break}else if(On==fl){this.s=4,xt(15),Zn(this.i,this.l,ie,"[Invalid Chunk]"),w=!1;break}else Zn(this.i,this.l,On,null),ml(this,On);if(au(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||ie.length!=0||this.h.h||(this.s=1,xt(16),w=!1),this.o=this.o&&w,!w)Zn(this.i,this.l,ie,"[Invalid Chunked Response]"),Un(this),ks(this);else if(0<ie.length&&!this.W){this.W=!0;var Ft=this.j;Ft.g==this&&Ft.ba&&!Ft.M&&(Ft.j.info("Great, no buffering proxy detected. Bytes received: "+ie.length),El(Ft),Ft.M=!0,xt(11))}}else Zn(this.i,this.l,ie,null),ml(this,ie);bt==4&&Un(this),this.o&&!this.J&&(bt==4?Go(this.j,this):(this.o=!1,it(this)))}else Bo(this.g),w==400&&0<ie.indexOf("Unknown SID")?(this.s=3,xt(12)):(this.s=0,xt(13)),Un(this),ks(this)}}}catch{}finally{}};function au(u){return u.g?u.u=="GET"&&u.L!=2&&u.j.Ca:!1}function Tf(u,_){var w=u.C,b=_.indexOf(`
`,w);return b==-1?Do:(w=Number(_.substring(w,b)),isNaN(w)?fl:(b+=1,b+w>_.length?Do:(_=_.slice(b,b+w),u.C=b+w,_)))}tr.prototype.cancel=function(){this.J=!0,Un(this)};function it(u){u.S=Date.now()+u.I,lu(u,u.I)}function lu(u,_){if(u.B!=null)throw Error("WatchDog timer not null");u.B=Jn(E(u.ba,u),_)}function Mi(u){u.B&&(f.clearTimeout(u.B),u.B=null)}tr.prototype.ba=function(){this.B=null;const u=Date.now();0<=u-this.S?(hl(this.i,this.A),this.L!=2&&(Xr(),xt(17)),Un(this),this.s=2,ks(this)):lu(this,this.S-u)};function ks(u){u.j.G==0||u.J||Go(u.j,u)}function Un(u){Mi(u);var _=u.M;_&&typeof _.ma=="function"&&_.ma(),u.M=null,il(u.U),u.g&&(_=u.g,u.g=null,_.abort(),_.ma())}function ml(u,_){try{var w=u.j;if(w.G!=0&&(w.g==u||un(w.h,u))){if(!u.K&&un(w.h,u)&&w.G==3){try{var b=w.Da.g.parse(_)}catch{b=null}if(Array.isArray(b)&&b.length==3){var F=b;if(F[0]==0){e:if(!w.u){if(w.g)if(w.g.F+3e3<u.F)Ho(w),or(w);else break e;qo(w),xt(18)}}else w.za=F[1],0<w.za-w.T&&37500>F[2]&&w.F&&w.v==0&&!w.C&&(w.C=Jn(E(w.Za,w),6e3));if(1>=uu(w.h)&&w.ca){try{w.ca()}catch{}w.ca=void 0}}else ns(w,11)}else if((u.K||w.g==u)&&Ho(w),!te(_))for(F=w.Da.g.parse(_),_=0;_<F.length;_++){let qe=F[_];if(w.T=qe[0],qe=qe[1],w.G==2)if(qe[0]=="c"){w.K=qe[1],w.ia=qe[2];const Ft=qe[3];Ft!=null&&(w.la=Ft,w.j.info("VER="+w.la));const bt=qe[4];bt!=null&&(w.Aa=bt,w.j.info("SVER="+w.Aa));const Bn=qe[5];Bn!=null&&typeof Bn=="number"&&0<Bn&&(b=1.5*Bn,w.L=b,w.j.info("backChannelRequestTimeoutMs_="+b)),b=w;const On=u.g;if(On){const $i=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if($i){var q=b.h;q.g||$i.indexOf("spdy")==-1&&$i.indexOf("quic")==-1&&$i.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(gl(q,q.h),q.h=null))}if(b.D){const Qo=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;Qo&&(b.ya=Qo,rt(b.I,b.D,Qo))}}w.G=3,w.l&&w.l.ua(),w.ba&&(w.R=Date.now()-u.F,w.j.info("Handshake RTT: "+w.R+"ms")),b=w;var ie=u;if(b.qa=Tu(b,b.J?b.ia:null,b.W),ie.K){du(b.h,ie);var et=ie,At=b.L;At&&(et.I=At),et.B&&(Mi(et),it(et)),b.g=ie}else Bi(b);0<w.i.length&&Cr(w)}else qe[0]!="stop"&&qe[0]!="close"||ns(w,7);else w.G==3&&(qe[0]=="stop"||qe[0]=="close"?qe[0]=="stop"?ns(w,7):Qt(w):qe[0]!="noop"&&w.l&&w.l.ta(qe),w.v=0)}}Xr(4)}catch{}}var cu=class{constructor(u,_){this.g=u,this.map=_}};function Li(u){this.l=u||10,f.PerformanceNavigationTiming?(u=f.performance.getEntriesByType("navigation"),u=0<u.length&&(u[0].nextHopProtocol=="hq"||u[0].nextHopProtocol=="h2")):u=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=u?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function An(u){return u.h?!0:u.g?u.g.size>=u.j:!1}function uu(u){return u.h?1:u.g?u.g.size:0}function un(u,_){return u.h?u.h==_:u.g?u.g.has(_):!1}function gl(u,_){u.g?u.g.add(_):u.h=_}function du(u,_){u.h&&u.h==_?u.h=null:u.g&&u.g.has(_)&&u.g.delete(_)}Li.prototype.cancel=function(){if(this.i=hu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const u of this.g.values())u.cancel();this.g.clear()}};function hu(u){if(u.h!=null)return u.i.concat(u.h.D);if(u.g!=null&&u.g.size!==0){let _=u.i;for(const w of u.g.values())_=_.concat(w.D);return _}return U(u.i)}function Lo(u){if(u.V&&typeof u.V=="function")return u.V();if(typeof Map<"u"&&u instanceof Map||typeof Set<"u"&&u instanceof Set)return Array.from(u.values());if(typeof u=="string")return u.split("");if(p(u)){for(var _=[],w=u.length,b=0;b<w;b++)_.push(u[b]);return _}_=[],w=0;for(b in u)_[w++]=u[b];return _}function Vo(u){if(u.na&&typeof u.na=="function")return u.na();if(!u.V||typeof u.V!="function"){if(typeof Map<"u"&&u instanceof Map)return Array.from(u.keys());if(!(typeof Set<"u"&&u instanceof Set)){if(p(u)||typeof u=="string"){var _=[];u=u.length;for(var w=0;w<u;w++)_.push(w);return _}_=[],w=0;for(const b in u)_[w++]=b;return _}}}function Rs(u,_){if(u.forEach&&typeof u.forEach=="function")u.forEach(_,void 0);else if(p(u)||typeof u=="string")Array.prototype.forEach.call(u,_,void 0);else for(var w=Vo(u),b=Lo(u),F=b.length,q=0;q<F;q++)_.call(void 0,b[q],w&&w[q],u)}var Vi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function bf(u,_){if(u){u=u.split("&");for(var w=0;w<u.length;w++){var b=u[w].indexOf("="),F=null;if(0<=b){var q=u[w].substring(0,b);F=u[w].substring(b+1)}else q=u[w];_(q,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Jr(u){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,u instanceof Jr){this.h=u.h,Fi(this,u.j),this.o=u.o,this.g=u.g,As(this,u.s),this.l=u.l;var _=u.i,w=new Tr;w.i=_.i,_.g&&(w.g=new Map(_.g),w.h=_.h),Ps(this,w),this.m=u.m}else u&&(_=String(u).match(Vi))?(this.h=!1,Fi(this,_[1]||"",!0),this.o=We(_[2]||""),this.g=We(_[3]||"",!0),As(this,_[4]),this.l=We(_[5]||"",!0),Ps(this,_[6]||"",!0),this.m=We(_[7]||"")):(this.h=!1,this.i=new Tr(null,this.h))}Jr.prototype.toString=function(){var u=[],_=this.j;_&&u.push(Os(_,Fo,!0),":");var w=this.g;return(w||_=="file")&&(u.push("//"),(_=this.o)&&u.push(Os(_,Fo,!0),"@"),u.push(encodeURIComponent(String(w)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),w=this.s,w!=null&&u.push(":",String(w))),(w=this.l)&&(this.g&&w.charAt(0)!="/"&&u.push("/"),u.push(Os(w,w.charAt(0)=="/"?mu:pu,!0))),(w=this.i.toString())&&u.push("?",w),(w=this.m)&&u.push("#",Os(w,_l)),u.join("")};function Pn(u){return new Jr(u)}function Fi(u,_,w){u.j=w?We(_,!0):_,u.j&&(u.j=u.j.replace(/:$/,""))}function As(u,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);u.s=_}else u.s=null}function Ps(u,_,w){_ instanceof Tr?(u.i=_,br(u.i,u.h)):(w||(_=Os(_,gu)),u.i=new Tr(_,u.h))}function rt(u,_,w){u.i.set(_,w)}function js(u){return rt(u,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),u}function We(u,_){return u?_?decodeURI(u.replace(/%25/g,"%2525")):decodeURIComponent(u):""}function Os(u,_,w){return typeof u=="string"?(u=encodeURI(u).replace(_,fu),w&&(u=u.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),u):null}function fu(u){return u=u.charCodeAt(0),"%"+(u>>4&15).toString(16)+(u&15).toString(16)}var Fo=/[#\/\?@]/g,pu=/[#\?:]/g,mu=/[#\?]/g,gu=/[#\?@]/g,_l=/#/g;function Tr(u,_){this.h=this.g=null,this.i=u||null,this.j=!!_}function Kt(u){u.g||(u.g=new Map,u.h=0,u.i&&bf(u.i,function(_,w){u.add(decodeURIComponent(_.replace(/\+/g," ")),w)}))}n=Tr.prototype,n.add=function(u,_){Kt(this),this.i=null,u=zn(this,u);var w=this.g.get(u);return w||this.g.set(u,w=[]),w.push(_),this.h+=1,this};function nr(u,_){Kt(u),_=zn(u,_),u.g.has(_)&&(u.i=null,u.h-=u.g.get(_).length,u.g.delete(_))}function rr(u,_){return Kt(u),_=zn(u,_),u.g.has(_)}n.forEach=function(u,_){Kt(this),this.g.forEach(function(w,b){w.forEach(function(F){u.call(_,F,b,this)},this)},this)},n.na=function(){Kt(this);const u=Array.from(this.g.values()),_=Array.from(this.g.keys()),w=[];for(let b=0;b<_.length;b++){const F=u[b];for(let q=0;q<F.length;q++)w.push(_[b])}return w},n.V=function(u){Kt(this);let _=[];if(typeof u=="string")rr(this,u)&&(_=_.concat(this.g.get(zn(this,u))));else{u=Array.from(this.g.values());for(let w=0;w<u.length;w++)_=_.concat(u[w])}return _},n.set=function(u,_){return Kt(this),this.i=null,u=zn(this,u),rr(this,u)&&(this.h-=this.g.get(u).length),this.g.set(u,[_]),this.h+=1,this},n.get=function(u,_){return u?(u=this.V(u),0<u.length?String(u[0]):_):_};function Ds(u,_,w){nr(u,_),0<w.length&&(u.i=null,u.g.set(zn(u,_),U(w)),u.h+=w.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const u=[],_=Array.from(this.g.keys());for(var w=0;w<_.length;w++){var b=_[w];const q=encodeURIComponent(String(b)),ie=this.V(b);for(b=0;b<ie.length;b++){var F=q;ie[b]!==""&&(F+="="+encodeURIComponent(String(ie[b]))),u.push(F)}}return this.i=u.join("&")};function zn(u,_){return _=String(_),u.j&&(_=_.toLowerCase()),_}function br(u,_){_&&!u.j&&(Kt(u),u.i=null,u.g.forEach(function(w,b){var F=b.toLowerCase();b!=F&&(nr(this,b),Ds(this,F,w))},u)),u.j=_}function If(u,_){const w=new ji;if(f.Image){const b=new Image;b.onload=R(pn,w,"TestLoadImage: loaded",!0,_,b),b.onerror=R(pn,w,"TestLoadImage: error",!1,_,b),b.onabort=R(pn,w,"TestLoadImage: abort",!1,_,b),b.ontimeout=R(pn,w,"TestLoadImage: timeout",!1,_,b),f.setTimeout(function(){b.ontimeout&&b.ontimeout()},1e4),b.src=u}else _(!1)}function _u(u,_){const w=new ji,b=new AbortController,F=setTimeout(()=>{b.abort(),pn(w,"TestPingServer: timeout",!1,_)},1e4);fetch(u,{signal:b.signal}).then(q=>{clearTimeout(F),q.ok?pn(w,"TestPingServer: ok",!0,_):pn(w,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(F),pn(w,"TestPingServer: error",!1,_)})}function pn(u,_,w,b,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),b(w)}catch{}}function Cf(){this.g=new ll}function yu(u,_,w){const b=w||"";try{Rs(u,function(F,q){let ie=F;g(F)&&(ie=ol(F)),_.push(b+q+"="+encodeURIComponent(ie))})}catch(F){throw _.push(b+"type="+encodeURIComponent("_badmap")),F}}function Zr(u){this.l=u.Ub||null,this.j=u.eb||!1}O(Zr,Ai),Zr.prototype.g=function(){return new Ui(this.l,this.j)},Zr.prototype.i=(function(u){return function(){return u}})({});function Ui(u,_){kt.call(this),this.D=u,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}O(Ui,kt),n=Ui.prototype,n.open=function(u,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=u,this.A=_,this.readyState=1,ir(this)},n.send=function(u){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};u&&(_.body=u),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,sr(this)),this.readyState=0},n.Sa=function(u){if(this.g&&(this.l=u,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=u.headers,this.readyState=2,ir(this)),this.g&&(this.readyState=3,ir(this),this.g)))if(this.responseType==="arraybuffer")u.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in u){if(this.j=u.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;vu(this)}else u.text().then(this.Ra.bind(this),this.ga.bind(this))};function vu(u){u.j.read().then(u.Pa.bind(u)).catch(u.ga.bind(u))}n.Pa=function(u){if(this.g){if(this.o&&u.value)this.response.push(u.value);else if(!this.o){var _=u.value?u.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!u.done}))&&(this.response=this.responseText+=_)}u.done?sr(this):ir(this),this.readyState==3&&vu(this)}},n.Ra=function(u){this.g&&(this.response=this.responseText=u,sr(this))},n.Qa=function(u){this.g&&(this.response=u,sr(this))},n.ga=function(){this.g&&sr(this)};function sr(u){u.readyState=4,u.l=null,u.j=null,u.v=null,ir(u)}n.setRequestHeader=function(u,_){this.u.append(u,_)},n.getResponseHeader=function(u){return this.h&&this.h.get(u.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const u=[],_=this.h.entries();for(var w=_.next();!w.done;)w=w.value,u.push(w[0]+": "+w[1]),w=_.next();return u.join(`\r
`)};function ir(u){u.onreadystatechange&&u.onreadystatechange.call(u)}Object.defineProperty(Ui.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(u){this.m=u?"include":"same-origin"}});function es(u){let _="";return fe(u,function(w,b){_+=b,_+=":",_+=w,_+=`\r
`}),_}function Ms(u,_,w){e:{for(b in w){var b=!1;break e}b=!0}b||(w=es(w),typeof u=="string"?w!=null&&encodeURIComponent(String(w)):rt(u,_,w))}function mt(u){kt.call(this),this.headers=new Map,this.o=u||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}O(mt,kt);var Nf=/^https?$/i,yl=["POST","PUT"];n=mt.prototype,n.Ha=function(u){this.J=u},n.ea=function(u,_,w,b){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+u);_=_?_.toUpperCase():"GET",this.D=u,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():er.g(),this.v=this.o?ko(this.o):ko(er),this.g.onreadystatechange=E(this.Ea,this);try{this.B=!0,this.g.open(_,String(u),!0),this.B=!1}catch(q){zi(this,q);return}if(u=w||"",w=new Map(this.headers),b)if(Object.getPrototypeOf(b)===Object.prototype)for(var F in b)w.set(F,b[F]);else if(typeof b.keys=="function"&&typeof b.get=="function")for(const q of b.keys())w.set(q,b.get(q));else throw Error("Unknown input type for opt_headers: "+String(b));b=Array.from(w.keys()).find(q=>q.toLowerCase()=="content-type"),F=f.FormData&&u instanceof f.FormData,!(0<=Array.prototype.indexOf.call(yl,_,void 0))||b||F||w.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,ie]of w)this.g.setRequestHeader(q,ie);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zo(this),this.u=!0,this.g.send(u),this.u=!1}catch(q){zi(this,q)}};function zi(u,_){u.h=!1,u.g&&(u.j=!0,u.g.abort(),u.j=!1),u.l=_,u.m=5,Uo(u),jn(u)}function Uo(u){u.A||(u.A=!0,Rt(u,"complete"),Rt(u,"error"))}n.abort=function(u){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=u||7,Rt(this,"complete"),Rt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),mt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?vl(this):this.bb())},n.bb=function(){vl(this)};function vl(u){if(u.h&&typeof c<"u"&&(!u.v[1]||mn(u)!=4||u.Z()!=2)){if(u.u&&mn(u)==4)rl(u.Ea,0,u);else if(Rt(u,"readystatechange"),mn(u)==4){u.h=!1;try{const ie=u.Z();e:switch(ie){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var w;if(!(w=_)){var b;if(b=ie===0){var F=String(u.D).match(Vi)[1]||null;!F&&f.self&&f.self.location&&(F=f.self.location.protocol.slice(0,-1)),b=!Nf.test(F?F.toLowerCase():"")}w=b}if(w)Rt(u,"complete"),Rt(u,"success");else{u.m=6;try{var q=2<mn(u)?u.g.statusText:""}catch{q=""}u.l=q+" ["+u.Z()+"]",Uo(u)}}finally{jn(u)}}}}function jn(u,_){if(u.g){zo(u);const w=u.g,b=u.v[0]?()=>{}:null;u.g=null,u.v=null,_||Rt(u,"ready");try{w.onreadystatechange=b}catch{}}}function zo(u){u.I&&(f.clearTimeout(u.I),u.I=null)}n.isActive=function(){return!!this.g};function mn(u){return u.g?u.g.readyState:0}n.Z=function(){try{return 2<mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(u){if(this.g){var _=this.g.responseText;return u&&_.indexOf(u)==0&&(_=_.substring(u.length)),al(_)}};function wl(u){try{if(!u.g)return null;if("response"in u.g)return u.g.response;switch(u.H){case"":case"text":return u.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in u.g)return u.g.mozResponseArrayBuffer}return null}catch{return null}}function Bo(u){const _={};u=(u.g&&2<=mn(u)&&u.g.getAllResponseHeaders()||"").split(`\r
`);for(let b=0;b<u.length;b++){if(te(u[b]))continue;var w=A(u[b]);const F=w[0];if(w=w[1],typeof w!="string")continue;w=w.trim();const q=_[F]||[];_[F]=q,q.push(w)}j(_,function(b){return b.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ir(u,_,w){return w&&w.internalChannelParams&&w.internalChannelParams[u]||_}function xl(u){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ir("failFast",!1,u),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ir("baseRetryDelayMs",5e3,u),this.cb=Ir("retryDelaySeedMs",1e4,u),this.Wa=Ir("forwardChannelMaxRetries",2,u),this.wa=Ir("forwardChannelRequestTimeoutMs",2e4,u),this.pa=u&&u.xmlHttpFactory||void 0,this.Xa=u&&u.Tb||void 0,this.Ca=u&&u.useFetchStreams||!1,this.L=void 0,this.J=u&&u.supportsCrossDomainXhr||!1,this.K="",this.h=new Li(u&&u.concurrentRequestLimit),this.Da=new Cf,this.P=u&&u.fastHandshake||!1,this.O=u&&u.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=u&&u.Rb||!1,u&&u.xa&&this.j.xa(),u&&u.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&u&&u.detectBufferingProxy||!1,this.ja=void 0,u&&u.longPollingTimeout&&0<u.longPollingTimeout&&(this.ja=u.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=xl.prototype,n.la=8,n.G=1,n.connect=function(u,_,w,b){xt(0),this.W=u,this.H=_||{},w&&b!==void 0&&(this.H.OSID=w,this.H.OAID=b),this.F=this.X,this.I=Tu(this,null,this.W),Cr(this)};function Qt(u){if($o(u),u.G==3){var _=u.U++,w=Pn(u.I);if(rt(w,"SID",u.K),rt(w,"RID",_),rt(w,"TYPE","terminate"),ts(u,w),_=new tr(u,u.j,_),_.L=2,_.v=js(Pn(w)),w=!1,f.navigator&&f.navigator.sendBeacon)try{w=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!w&&f.Image&&(new Image().src=_.v,w=!0),w||(_.g=bu(_.j,null),_.g.ea(_.v)),_.F=Date.now(),it(_)}Eu(u)}function or(u){u.g&&(El(u),u.g.cancel(),u.g=null)}function $o(u){or(u),u.u&&(f.clearTimeout(u.u),u.u=null),Ho(u),u.h.cancel(),u.s&&(typeof u.s=="number"&&f.clearTimeout(u.s),u.s=null)}function Cr(u){if(!An(u.h)&&!u.s){u.s=!0;var _=u.Ga;Me||ne(),B||(Me(),B=!0),ce.add(_,u),u.B=0}}function Sf(u,_){return uu(u.h)>=u.h.j-(u.s?1:0)?!1:u.s?(u.i=_.D.concat(u.i),!0):u.G==1||u.G==2||u.B>=(u.Va?0:u.Wa)?!1:(u.s=Jn(E(u.Ga,u,_),xu(u,u.B)),u.B++,!0)}n.Ga=function(u){if(this.s)if(this.s=null,this.G==1){if(!u){this.U=Math.floor(1e5*Math.random()),u=this.U++;const F=new tr(this,this.j,u);let q=this.o;if(this.S&&(q?(q=I(q),C(q,this.S)):q=this.S),this.m!==null||this.O||(F.H=q,q=null),this.P)e:{for(var _=0,w=0;w<this.i.length;w++){t:{var b=this.i[w];if("__data__"in b.map&&(b=b.map.__data__,typeof b=="string")){b=b.length;break t}b=void 0}if(b===void 0)break;if(_+=b,4096<_){_=w;break e}if(_===4096||w===this.i.length-1){_=w+1;break e}}_=1e3}else _=1e3;_=Ls(this,F,_),w=Pn(this.I),rt(w,"RID",u),rt(w,"CVER",22),this.D&&rt(w,"X-HTTP-Session-Id",this.D),ts(this,w),q&&(this.O?_="headers="+encodeURIComponent(String(es(q)))+"&"+_:this.m&&Ms(w,this.m,q)),gl(this.h,F),this.Ua&&rt(w,"TYPE","init"),this.P?(rt(w,"$req",_),rt(w,"SID","null"),F.T=!0,Mo(F,w,null)):Mo(F,w,_),this.G=2}}else this.G==3&&(u?Wo(this,u):this.i.length==0||An(this.h)||Wo(this))};function Wo(u,_){var w;_?w=_.l:w=u.U++;const b=Pn(u.I);rt(b,"SID",u.K),rt(b,"RID",w),rt(b,"AID",u.T),ts(u,b),u.m&&u.o&&Ms(b,u.m,u.o),w=new tr(u,u.j,w,u.B+1),u.m===null&&(w.H=u.o),_&&(u.i=_.D.concat(u.i)),_=Ls(u,w,1e3),w.I=Math.round(.5*u.wa)+Math.round(.5*u.wa*Math.random()),gl(u.h,w),Mo(w,b,_)}function ts(u,_){u.H&&fe(u.H,function(w,b){rt(_,b,w)}),u.l&&Rs({},function(w,b){rt(_,b,w)})}function Ls(u,_,w){w=Math.min(u.i.length,w);var b=u.l?E(u.l.Na,u.l,u):null;e:{var F=u.i;let q=-1;for(;;){const ie=["count="+w];q==-1?0<w?(q=F[0].g,ie.push("ofs="+q)):q=0:ie.push("ofs="+q);let et=!0;for(let At=0;At<w;At++){let qe=F[At].g;const Ft=F[At].map;if(qe-=q,0>qe)q=Math.max(0,F[At].g-100),et=!1;else try{yu(Ft,ie,"req"+qe+"_")}catch{b&&b(Ft)}}if(et){b=ie.join("&");break e}}}return u=u.i.splice(0,w),_.D=u,b}function Bi(u){if(!u.g&&!u.u){u.Y=1;var _=u.Fa;Me||ne(),B||(Me(),B=!0),ce.add(_,u),u.v=0}}function qo(u){return u.g||u.u||3<=u.v?!1:(u.Y++,u.u=Jn(E(u.Fa,u),xu(u,u.v)),u.v++,!0)}n.Fa=function(){if(this.u=null,wu(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var u=2*this.R;this.j.info("BP detection timer enabled: "+u),this.A=Jn(E(this.ab,this),u)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xt(10),or(this),wu(this))};function El(u){u.A!=null&&(f.clearTimeout(u.A),u.A=null)}function wu(u){u.g=new tr(u,u.j,"rpc",u.Y),u.m===null&&(u.g.H=u.o),u.g.O=0;var _=Pn(u.qa);rt(_,"RID","rpc"),rt(_,"SID",u.K),rt(_,"AID",u.T),rt(_,"CI",u.F?"0":"1"),!u.F&&u.ja&&rt(_,"TO",u.ja),rt(_,"TYPE","xmlhttp"),ts(u,_),u.m&&u.o&&Ms(_,u.m,u.o),u.L&&(u.g.I=u.L);var w=u.g;u=u.ia,w.L=1,w.v=js(Pn(_)),w.m=null,w.P=!0,pl(w,u)}n.Za=function(){this.C!=null&&(this.C=null,or(this),qo(this),xt(19))};function Ho(u){u.C!=null&&(f.clearTimeout(u.C),u.C=null)}function Go(u,_){var w=null;if(u.g==_){Ho(u),El(u),u.g=null;var b=2}else if(un(u.h,_))w=_.D,du(u.h,_),b=1;else return;if(u.G!=0){if(_.o)if(b==1){w=_.m?_.m.length:0,_=Date.now()-_.F;var F=u.B;b=Pi(),Rt(b,new Po(b,w)),Cr(u)}else Bi(u);else if(F=_.s,F==3||F==0&&0<_.X||!(b==1&&Sf(u,_)||b==2&&qo(u)))switch(w&&0<w.length&&(_=u.h,_.i=_.i.concat(w)),F){case 1:ns(u,5);break;case 4:ns(u,10);break;case 3:ns(u,6);break;default:ns(u,2)}}}function xu(u,_){let w=u.Ta+Math.floor(Math.random()*u.cb);return u.isActive()||(w*=2),w*_}function ns(u,_){if(u.j.info("Error code "+_),_==2){var w=E(u.fb,u),b=u.Xa;const F=!b;b=new Jr(b||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Fi(b,"https"),js(b),F?If(b.toString(),w):_u(b.toString(),w)}else xt(2);u.G=0,u.l&&u.l.sa(_),Eu(u),$o(u)}n.fb=function(u){u?(this.j.info("Successfully pinged google.com"),xt(2)):(this.j.info("Failed to ping google.com"),xt(1))};function Eu(u){if(u.G=0,u.ka=[],u.l){const _=hu(u.h);(_.length!=0||u.i.length!=0)&&(M(u.ka,_),M(u.ka,u.i),u.h.i.length=0,U(u.i),u.i.length=0),u.l.ra()}}function Tu(u,_,w){var b=w instanceof Jr?Pn(w):new Jr(w);if(b.g!="")_&&(b.g=_+"."+b.g),As(b,b.s);else{var F=f.location;b=F.protocol,_=_?_+"."+F.hostname:F.hostname,F=+F.port;var q=new Jr(null);b&&Fi(q,b),_&&(q.g=_),F&&As(q,F),w&&(q.l=w),b=q}return w=u.D,_=u.ya,w&&_&&rt(b,w,_),rt(b,"VER",u.la),ts(u,b),b}function bu(u,_,w){if(_&&!u.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=u.Ca&&!u.pa?new mt(new Zr({eb:w})):new mt(u.pa),_.Ha(u.J),_}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tl(){}n=Tl.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Ko(){}Ko.prototype.g=function(u,_){return new dn(u,_)};function dn(u,_){kt.call(this),this.g=new xl(_),this.l=u,this.h=_&&_.messageUrlParams||null,u=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(u?u["X-Client-Protocol"]="webchannel":u={"X-Client-Protocol":"webchannel"}),this.g.o=u,u=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(u?u["X-WebChannel-Content-Type"]=_.messageContentType:u={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(u?u["X-WebChannel-Client-Profile"]=_.va:u={"X-WebChannel-Client-Profile":_.va}),this.g.S=u,(u=_&&_.Sb)&&!te(u)&&(this.g.m=u),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!te(_)&&(this.g.D=_,u=this.h,u!==null&&_ in u&&(u=this.h,_ in u&&delete u[_])),this.j=new Nr(this)}O(dn,kt),dn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},dn.prototype.close=function(){Qt(this.g)},dn.prototype.o=function(u){var _=this.g;if(typeof u=="string"){var w={};w.__data__=u,u=w}else this.u&&(w={},w.__data__=ol(u),u=w);_.i.push(new cu(_.Ya++,u)),_.G==3&&Cr(_)},dn.prototype.N=function(){this.g.l=null,delete this.j,Qt(this.g),delete this.g,dn.aa.N.call(this)};function Iu(u){xr.call(this),u.__headers__&&(this.headers=u.__headers__,this.statusCode=u.__status__,delete u.__headers__,delete u.__status__);var _=u.__sm__;if(_){e:{for(const w in _){u=w;break e}u=void 0}(this.i=u)&&(u=this.i,_=_!==null&&u in _?_[u]:void 0),this.data=_}else this.data=u}O(Iu,xr);function Cu(){Ao.call(this),this.status=1}O(Cu,Ao);function Nr(u){this.g=u}O(Nr,Tl),Nr.prototype.ua=function(){Rt(this.g,"a")},Nr.prototype.ta=function(u){Rt(this.g,new Iu(u))},Nr.prototype.sa=function(u){Rt(this.g,new Cu)},Nr.prototype.ra=function(){Rt(this.g,"b")},Ko.prototype.createWebChannel=Ko.prototype.g,dn.prototype.send=dn.prototype.o,dn.prototype.open=dn.prototype.m,dn.prototype.close=dn.prototype.close,NE=function(){return new Ko},CE=function(){return Pi()},IE=Er,Pm={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Oo.NO_ERROR=0,Oo.TIMEOUT=8,Oo.HTTP_ERROR=6,Md=Oo,iu.COMPLETE="complete",bE=iu,Ro.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",kt.prototype.listen=kt.prototype.K,sc=Ro,mt.prototype.listenOnce=mt.prototype.L,mt.prototype.getLastError=mt.prototype.Ka,mt.prototype.getLastErrorCode=mt.prototype.Ba,mt.prototype.getStatus=mt.prototype.Z,mt.prototype.getResponseJson=mt.prototype.Oa,mt.prototype.getResponseText=mt.prototype.oa,mt.prototype.send=mt.prototype.ea,mt.prototype.setWithCredentials=mt.prototype.Ha,TE=mt}).apply(typeof bd<"u"?bd:typeof self<"u"?self:typeof window<"u"?window:{});const k0="@firebase/firestore",R0="4.8.0";/**
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
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
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
 */let Ha="11.10.0";/**
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
 */const fo=new Vh("@firebase/firestore");function va(){return fo.logLevel}function de(n,...e){if(fo.logLevel<=ze.DEBUG){const t=e.map(Eg);fo.debug(`Firestore (${Ha}): ${n}`,...t)}}function ws(n,...e){if(fo.logLevel<=ze.ERROR){const t=e.map(Eg);fo.error(`Firestore (${Ha}): ${n}`,...t)}}function pi(n,...e){if(fo.logLevel<=ze.WARN){const t=e.map(Eg);fo.warn(`Firestore (${Ha}): ${n}`,...t)}}function Eg(n){if(typeof n=="string")return n;try{/**
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
 */function ke(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,SE(n,r,t)}function SE(n,e,t){let r=`FIRESTORE (${Ha}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ws(r),new Error(r)}function Ze(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||SE(e,i,r)}function Pe(n,e){return n}/**
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
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class xe extends qr{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class lo{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class kE{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class M2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(on.UNAUTHENTICATED)))}shutdown(){}}class L2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class V2{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ze(this.o===void 0,42304);let r=this.i;const i=p=>this.i!==r?(r=this.i,t(p)):Promise.resolve();let a=new lo;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new lo,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const p=a;e.enqueueRetryable((async()=>{await p.promise,await i(this.currentUser)}))},f=p=>{de("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(de("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new lo)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(de("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ze(typeof r.accessToken=="string",31837,{l:r}),new kE(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ze(e===null||typeof e=="string",2055,{h:e}),new on(e)}}class F2{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=on.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class U2{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new F2(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(on.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class A0{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class z2{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Tn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ze(this.o===void 0,3512);const r=a=>{a.error!=null&&de("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,de("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{de("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):de("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new A0(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ze(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new A0(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function B2(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function RE(){return new TextEncoder}/**
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
 */class Tg{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=B2(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function De(n,e){return n<e?-1:n>e?1:0}function jm(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),i=e.codePointAt(t);if(r!==i){if(r<128&&i<128)return De(r,i);{const a=RE(),c=$2(a.encode(P0(n,t)),a.encode(P0(e,t)));return c!==0?c:De(r,i)}}t+=r>65535?2:1}return De(n.length,e.length)}function P0(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function $2(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return De(n[t],e[t]);return De(n.length,e.length)}function ja(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
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
 */const j0="__name__";class jr{constructor(e,t,r){t===void 0?t=0:t>e.length&&ke(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ke(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jr?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=jr.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return De(e.length,t.length)}static compareSegments(e,t){const r=jr.isNumericId(e),i=jr.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?jr.extractNumericId(e).compare(jr.extractNumericId(t)):jm(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return li.fromString(e.substring(4,e.length-2))}}class ft extends jr{construct(e,t,r){return new ft(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new xe(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new ft(t)}static emptyPath(){return new ft([])}}const W2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Jt extends jr{construct(e,t,r){return new Jt(e,t,r)}static isValidIdentifier(e){return W2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Jt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===j0}static keyField(){return new Jt([j0])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new xe(X.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const f=e[i];if(f==="\\"){if(i+1===e.length)throw new xe(X.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[i+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new xe(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=p,i+=2}else f==="`"?(c=!c,i++):f!=="."||c?(r+=f,i++):(a(),i++)}if(a(),c)throw new xe(X.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Jt(t)}static emptyPath(){return new Jt([])}}/**
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
 */function AE(n,e,t){if(!t)throw new xe(X.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function q2(n,e,t,r){if(e===!0&&r===!0)throw new xe(X.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function O0(n){if(!Ee.isDocumentKey(n))throw new xe(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function D0(n){if(Ee.isDocumentKey(n))throw new xe(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function PE(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function bg(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ke(12329,{type:typeof n})}function co(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new xe(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=bg(n);throw new xe(X.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Nt(n,e){const t={typeString:n};return e&&(t.value=e),t}function $c(n,e){if(!PE(n))throw new xe(X.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new xe(X.INVALID_ARGUMENT,t);return!0}/**
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
 */const M0=-62135596800,L0=1e6;class pt{static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*L0);return new pt(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new xe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new xe(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<M0)throw new xe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new xe(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/L0}_compareTo(e){return this.seconds===e.seconds?De(this.nanoseconds,e.nanoseconds):De(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:pt._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if($c(e,pt._jsonSchema))return new pt(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-M0;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}pt._jsonSchemaVersion="firestore/timestamp/1.0",pt._jsonSchema={type:Nt("string",pt._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class Ae{static fromTimestamp(e){return new Ae(e)}static min(){return new Ae(new pt(0,0))}static max(){return new Ae(new pt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Tc=-1;function H2(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=Ae.fromTimestamp(r===1e9?new pt(t+1,0):new pt(t,r));return new mi(i,Ee.empty(),e)}function G2(n){return new mi(n.readTime,n.key,Tc)}class mi{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new mi(Ae.min(),Ee.empty(),Tc)}static max(){return new mi(Ae.max(),Ee.empty(),Tc)}}function K2(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:De(n.largestBatchId,e.largestBatchId))}/**
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
 */const Q2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Y2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ga(n){if(n.code!==X.FAILED_PRECONDITION||n.message!==Q2)throw n;de("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class K{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ke(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new K(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof K?t:K.resolve(t)}catch(t){return K.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):K.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):K.reject(t)}static resolve(e){return new K(((t,r)=>{t(e)}))}static reject(e){return new K(((t,r)=>{r(e)}))}static waitFor(e){return new K(((t,r)=>{let i=0,a=0,c=!1;e.forEach((f=>{++i,f.next((()=>{++a,c&&a===i&&t()}),(p=>r(p)))})),c=!0,a===i&&t()}))}static or(e){let t=K.resolve(!1);for(const r of e)t=t.next((i=>i?K.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new K(((r,i)=>{const a=e.length,c=new Array(a);let f=0;for(let p=0;p<a;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++f,f===a&&r(c)}),(v=>i(v)))}}))}static doWhile(e,t){return new K(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function X2(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ka(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Uh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Uh.ue=-1;/**
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
 */const Ig=-1;function zh(n){return n==null}function nh(n){return n===0&&1/n==-1/0}function J2(n){return typeof n=="number"&&Number.isInteger(n)&&!nh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const jE="";function Z2(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=V0(e)),e=eR(n.get(t),e);return V0(e)}function eR(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case jE:t+="";break;default:t+=a}}return t}function V0(n){return n+jE+""}/**
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
 */function F0(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Ii(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function OE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */let St=class Om{constructor(e,t){this.comparator=e,this.root=t||ci.EMPTY}insert(e,t){return new Om(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ci.BLACK,null,null))}remove(e){return new Om(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ci.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Id(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Id(this.root,e,this.comparator,!1)}getReverseIterator(){return new Id(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Id(this.root,e,this.comparator,!0)}},Id=class{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},ci=class hs{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??hs.RED,this.left=i??hs.EMPTY,this.right=a??hs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new hs(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return hs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return hs.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ke(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ke(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ke(27949);return e+(this.isRed()?0:1)}};ci.EMPTY=null,ci.RED=!0,ci.BLACK=!1;ci.EMPTY=new class{constructor(){this.size=0}get key(){throw ke(57766)}get value(){throw ke(16141)}get color(){throw ke(16727)}get left(){throw ke(29726)}get right(){throw ke(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ci(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Vt{constructor(e){this.comparator=e,this.data=new St(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new U0(this.data.getIterator())}getIteratorFrom(e){return new U0(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Vt)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Vt(this.comparator);return t.data=e,t}}class U0{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Vn{constructor(e){this.fields=e,e.sort(Jt.comparator)}static empty(){return new Vn([])}unionWith(e){let t=new Vt(Jt.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ja(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class DE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Zt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new DE("Invalid base64 string: "+a):a}})(e);return new Zt(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new Zt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return De(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Zt.EMPTY_BYTE_STRING=new Zt("");const tR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(n){if(Ze(!!n,39018),typeof n=="string"){let e=0;const t=tR.exec(n);if(Ze(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Tt(n.seconds),nanos:Tt(n.nanos)}}function Tt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function _i(n){return typeof n=="string"?Zt.fromBase64String(n):Zt.fromUint8Array(n)}/**
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
 */const ME="server_timestamp",LE="__type__",VE="__previous_value__",FE="__local_write_time__";function Cg(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[LE])===null||t===void 0?void 0:t.stringValue)===ME}function Bh(n){const e=n.mapValue.fields[VE];return Cg(e)?Bh(e):e}function bc(n){const e=gi(n.mapValue.fields[FE].timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class nR{constructor(e,t,r,i,a,c,f,p,g,v){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g,this.isUsingEmulator=v}}const rh="(default)";class Ic{constructor(e,t){this.projectId=e,this.database=t||rh}static empty(){return new Ic("","")}get isDefaultDatabase(){return this.database===rh}isEqual(e){return e instanceof Ic&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const UE="__type__",rR="__max__",Cd={mapValue:{}},zE="__vector__",sh="value";function yi(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Cg(n)?4:iR(n)?9007199254740991:sR(n)?10:11:ke(28295,{value:n})}function zr(n,e){if(n===e)return!0;const t=yi(n);if(t!==yi(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return bc(n).isEqual(bc(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=gi(i.timestampValue),f=gi(a.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return _i(i.bytesValue).isEqual(_i(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return Tt(i.geoPointValue.latitude)===Tt(a.geoPointValue.latitude)&&Tt(i.geoPointValue.longitude)===Tt(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return Tt(i.integerValue)===Tt(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=Tt(i.doubleValue),f=Tt(a.doubleValue);return c===f?nh(c)===nh(f):isNaN(c)&&isNaN(f)}return!1})(n,e);case 9:return ja(n.arrayValue.values||[],e.arrayValue.values||[],zr);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},f=a.mapValue.fields||{};if(F0(c)!==F0(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!zr(c[p],f[p])))return!1;return!0})(n,e);default:return ke(52216,{left:n})}}function Cc(n,e){return(n.values||[]).find((t=>zr(t,e)))!==void 0}function Oa(n,e){if(n===e)return 0;const t=yi(n),r=yi(e);if(t!==r)return De(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return De(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const f=Tt(a.integerValue||a.doubleValue),p=Tt(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(n,e);case 3:return z0(n.timestampValue,e.timestampValue);case 4:return z0(bc(n),bc(e));case 5:return jm(n.stringValue,e.stringValue);case 6:return(function(a,c){const f=_i(a),p=_i(c);return f.compareTo(p)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const f=a.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=De(f[g],p[g]);if(v!==0)return v}return De(f.length,p.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const f=De(Tt(a.latitude),Tt(c.latitude));return f!==0?f:De(Tt(a.longitude),Tt(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return B0(n.arrayValue,e.arrayValue);case 10:return(function(a,c){var f,p,g,v;const x=a.fields||{},E=c.fields||{},R=(f=x[sh])===null||f===void 0?void 0:f.arrayValue,O=(p=E[sh])===null||p===void 0?void 0:p.arrayValue,U=De(((g=R?.values)===null||g===void 0?void 0:g.length)||0,((v=O?.values)===null||v===void 0?void 0:v.length)||0);return U!==0?U:B0(R,O)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===Cd.mapValue&&c===Cd.mapValue)return 0;if(a===Cd.mapValue)return 1;if(c===Cd.mapValue)return-1;const f=a.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let x=0;x<p.length&&x<v.length;++x){const E=jm(p[x],v[x]);if(E!==0)return E;const R=Oa(f[p[x]],g[v[x]]);if(R!==0)return R}return De(p.length,v.length)})(n.mapValue,e.mapValue);default:throw ke(23264,{le:t})}}function z0(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return De(n,e);const t=gi(n),r=gi(e),i=De(t.seconds,r.seconds);return i!==0?i:De(t.nanos,r.nanos)}function B0(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=Oa(t[i],r[i]);if(a)return a}return De(t.length,r.length)}function Da(n){return Dm(n)}function Dm(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=gi(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return _i(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Ee.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Dm(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${Dm(t.fields[c])}`;return i+"}"})(n.mapValue):ke(61005,{value:n})}function Ld(n){switch(yi(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bh(n);return e?16+Ld(e):16;case 5:return 2*n.stringValue.length;case 6:return _i(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Ld(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return Ii(r.fields,((a,c)=>{i+=a.length+Ld(c)})),i})(n.mapValue);default:throw ke(13486,{value:n})}}function Mm(n){return!!n&&"integerValue"in n}function Ng(n){return!!n&&"arrayValue"in n}function $0(n){return!!n&&"nullValue"in n}function W0(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Vd(n){return!!n&&"mapValue"in n}function sR(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{})[UE])===null||t===void 0?void 0:t.stringValue)===zE}function cc(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Ii(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=cc(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=cc(n.arrayValue.values[t]);return e}return Object.assign({},n)}function iR(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===rR}/**
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
 */class bn{constructor(e){this.value=e}static empty(){return new bn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Vd(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=cc(t)}setAll(e){let t=Jt.emptyPath(),r={},i=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,r,i),r={},i=[],t=f.popLast()}c?r[f.lastSegment()]=cc(c):i.push(f.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());Vd(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];Vd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){Ii(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new bn(cc(this.value))}}function BE(n){const e=[];return Ii(n.fields,((t,r)=>{const i=new Jt([t]);if(Vd(r)){const a=BE(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new Vn(e)}/**
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
 */class an{constructor(e,t,r,i,a,c,f){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=f}static newInvalidDocument(e){return new an(e,0,Ae.min(),Ae.min(),Ae.min(),bn.empty(),0)}static newFoundDocument(e,t,r,i){return new an(e,1,t,Ae.min(),r,i,0)}static newNoDocument(e,t){return new an(e,2,t,Ae.min(),Ae.min(),bn.empty(),0)}static newUnknownDocument(e,t){return new an(e,3,t,Ae.min(),Ae.min(),bn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ae.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ae.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ih{constructor(e,t){this.position=e,this.inclusive=t}}function q0(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=Ee.comparator(Ee.fromName(c.referenceValue),t.key):r=Oa(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function H0(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zr(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class oh{constructor(e,t="asc"){this.field=e,this.dir=t}}function oR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class $E{}class Dt extends $E{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lR(e,t,r):t==="array-contains"?new dR(e,r):t==="in"?new hR(e,r):t==="not-in"?new fR(e,r):t==="array-contains-any"?new pR(e,r):new Dt(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new cR(e,r):new uR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Oa(t,this.value)):t!==null&&yi(this.value)===yi(t)&&this.matchesComparison(Oa(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ke(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Br extends $E{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Br(e,t)}matches(e){return WE(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function WE(n){return n.op==="and"}function qE(n){return aR(n)&&WE(n)}function aR(n){for(const e of n.filters)if(e instanceof Br)return!1;return!0}function Lm(n){if(n instanceof Dt)return n.field.canonicalString()+n.op.toString()+Da(n.value);if(qE(n))return n.filters.map((e=>Lm(e))).join(",");{const e=n.filters.map((t=>Lm(t))).join(",");return`${n.op}(${e})`}}function HE(n,e){return n instanceof Dt?(function(r,i){return i instanceof Dt&&r.op===i.op&&r.field.isEqual(i.field)&&zr(r.value,i.value)})(n,e):n instanceof Br?(function(r,i){return i instanceof Br&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,f)=>a&&HE(c,i.filters[f])),!0):!1})(n,e):void ke(19439)}function GE(n){return n instanceof Dt?(function(t){return`${t.field.canonicalString()} ${t.op} ${Da(t.value)}`})(n):n instanceof Br?(function(t){return t.op.toString()+" {"+t.getFilters().map(GE).join(" ,")+"}"})(n):"Filter"}class lR extends Dt{constructor(e,t,r){super(e,t,r),this.key=Ee.fromName(r.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class cR extends Dt{constructor(e,t){super(e,"in",t),this.keys=KE("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class uR extends Dt{constructor(e,t){super(e,"not-in",t),this.keys=KE("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function KE(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Ee.fromName(r.referenceValue)))}class dR extends Dt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ng(t)&&Cc(t.arrayValue,this.value)}}class hR extends Dt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Cc(this.value.arrayValue,t)}}class fR extends Dt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Cc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Cc(this.value.arrayValue,t)}}class pR extends Dt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ng(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Cc(this.value.arrayValue,r)))}}/**
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
 */class mR{constructor(e,t=null,r=[],i=[],a=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=f,this.Pe=null}}function G0(n,e=null,t=[],r=[],i=null,a=null,c=null){return new mR(n,e,t,r,i,a,c)}function Sg(n){const e=Pe(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Lm(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),zh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Da(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Da(r))).join(",")),e.Pe=t}return e.Pe}function kg(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!oR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!HE(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!H0(n.startAt,e.startAt)&&H0(n.endAt,e.endAt)}function Vm(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $h{constructor(e,t=null,r=[],i=[],a=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=f,this.endAt=p,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function gR(n,e,t,r,i,a,c,f){return new $h(n,e,t,r,i,a,c,f)}function Rg(n){return new $h(n)}function K0(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function _R(n){return n.collectionGroup!==null}function uc(n){const e=Pe(n);if(e.Te===null){e.Te=[];const t=new Set;for(const a of e.explicitOrderBy)e.Te.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new Vt(Jt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Te.push(new oh(a,r))})),t.has(Jt.keyField().canonicalString())||e.Te.push(new oh(Jt.keyField(),r))}return e.Te}function Or(n){const e=Pe(n);return e.Ie||(e.Ie=yR(e,uc(n))),e.Ie}function yR(n,e){if(n.limitType==="F")return G0(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new oh(i.field,a)}));const t=n.endAt?new ih(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ih(n.startAt.position,n.startAt.inclusive):null;return G0(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Fm(n,e,t){return new $h(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Wh(n,e){return kg(Or(n),Or(e))&&n.limitType===e.limitType}function QE(n){return`${Sg(Or(n))}|lt:${n.limitType}`}function wa(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>GE(i))).join(", ")}]`),zh(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>Da(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>Da(i))).join(",")),`Target(${r})`})(Or(n))}; limitType=${n.limitType})`}function qh(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):Ee.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of uc(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,f,p){const g=q0(c,f,p);return c.inclusive?g<=0:g<0})(r.startAt,uc(r),i)||r.endAt&&!(function(c,f,p){const g=q0(c,f,p);return c.inclusive?g>=0:g>0})(r.endAt,uc(r),i))})(n,e)}function vR(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function YE(n){return(e,t)=>{let r=!1;for(const i of uc(n)){const a=wR(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function wR(n,e,t){const r=n.field.isKeyField()?Ee.comparator(e.key,t.key):(function(a,c,f){const p=c.data.field(a),g=f.data.field(a);return p!==null&&g!==null?Oa(p,g):ke(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ke(19790,{direction:n.dir})}}/**
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
 */class xo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ii(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return OE(this.inner)}size(){return this.innerSize}}/**
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
 */const xR=new St(Ee.comparator);function xs(){return xR}const XE=new St(Ee.comparator);function ic(...n){let e=XE;for(const t of n)e=e.insert(t.key,t);return e}function JE(n){let e=XE;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function io(){return dc()}function ZE(){return dc()}function dc(){return new xo((n=>n.toString()),((n,e)=>n.isEqual(e)))}const ER=new St(Ee.comparator),TR=new Vt(Ee.comparator);function $e(...n){let e=TR;for(const t of n)e=e.add(t);return e}const bR=new Vt(De);function IR(){return bR}/**
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
 */function Ag(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nh(e)?"-0":e}}function e1(n){return{integerValue:""+n}}function t1(n,e){return J2(e)?e1(e):Ag(n,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function CR(n,e,t){return n instanceof Nc?(function(i,a){const c={fields:{[LE]:{stringValue:ME},[FE]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&Cg(a)&&(a=Bh(a)),a&&(c.fields[VE]=a),{mapValue:c}})(t,e):n instanceof Sc?r1(n,e):n instanceof kc?s1(n,e):(function(i,a){const c=n1(i,a),f=Q0(c)+Q0(i.Ee);return Mm(c)&&Mm(i.Ee)?e1(f):Ag(i.serializer,f)})(n,e)}function NR(n,e,t){return n instanceof Sc?r1(n,e):n instanceof kc?s1(n,e):t}function n1(n,e){return n instanceof Rc?(function(r){return Mm(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Nc extends Hh{}class Sc extends Hh{constructor(e){super(),this.elements=e}}function r1(n,e){const t=i1(e);for(const r of n.elements)t.some((i=>zr(i,r)))||t.push(r);return{arrayValue:{values:t}}}class kc extends Hh{constructor(e){super(),this.elements=e}}function s1(n,e){let t=i1(e);for(const r of n.elements)t=t.filter((i=>!zr(i,r)));return{arrayValue:{values:t}}}class Rc extends Hh{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function Q0(n){return Tt(n.integerValue||n.doubleValue)}function i1(n){return Ng(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class o1{constructor(e,t){this.field=e,this.transform=t}}function SR(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof Sc&&i instanceof Sc||r instanceof kc&&i instanceof kc?ja(r.elements,i.elements,zr):r instanceof Rc&&i instanceof Rc?zr(r.Ee,i.Ee):r instanceof Nc&&i instanceof Nc})(n.transform,e.transform)}class kR{constructor(e,t){this.version=e,this.transformResults=t}}class Dr{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Dr}static exists(e){return new Dr(void 0,e)}static updateTime(e){return new Dr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fd(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gh{}function a1(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new c1(n.key,Dr.none()):new Wc(n.key,n.data,Dr.none());{const t=n.data,r=bn.empty();let i=new Vt(Jt.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new Ci(n.key,r,new Vn(i.toArray()),Dr.none())}}function RR(n,e,t){n instanceof Wc?(function(i,a,c){const f=i.value.clone(),p=X0(i.fieldTransforms,a,c.transformResults);f.setAll(p),a.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(n,e,t):n instanceof Ci?(function(i,a,c){if(!Fd(i.precondition,a))return void a.convertToUnknownDocument(c.version);const f=X0(i.fieldTransforms,a,c.transformResults),p=a.data;p.setAll(l1(i)),p.setAll(f),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function hc(n,e,t,r){return n instanceof Wc?(function(a,c,f,p){if(!Fd(a.precondition,c))return f;const g=a.value.clone(),v=J0(a.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(n,e,t,r):n instanceof Ci?(function(a,c,f,p){if(!Fd(a.precondition,c))return f;const g=J0(a.fieldTransforms,p,c),v=c.data;return v.setAll(l1(a)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((x=>x.field)))})(n,e,t,r):(function(a,c,f){return Fd(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(n,e,t)}function AR(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=n1(r.transform,i||null);a!=null&&(t===null&&(t=bn.empty()),t.set(r.field,a))}return t||null}function Y0(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&ja(r,i,((a,c)=>SR(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Wc extends Gh{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ci extends Gh{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function l1(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function X0(n,e,t){const r=new Map;Ze(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,f=e.data.field(a.field);r.set(a.field,NR(c,f,t[i]))}return r}function J0(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,CR(a,c,e))}return r}class c1 extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class PR extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class jR{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&RR(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=hc(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=hc(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=ZE();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let f=this.applyToLocalView(c,a.mutatedFields);f=t.has(i.key)?null:f;const p=a1(c,f);p!==null&&r.set(i.key,p),c.isValidDocument()||c.convertToNoDocument(Ae.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),$e())}isEqual(e){return this.batchId===e.batchId&&ja(this.mutations,e.mutations,((t,r)=>Y0(t,r)))&&ja(this.baseMutations,e.baseMutations,((t,r)=>Y0(t,r)))}}class Pg{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ze(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let i=(function(){return ER})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Pg(e,t,r,i)}}/**
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
 */class OR{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class DR{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Ct,He;function MR(n){switch(n){case X.OK:return ke(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return ke(15467,{code:n})}}function u1(n){if(n===void 0)return ws("GRPC error has no .code"),X.UNKNOWN;switch(n){case Ct.OK:return X.OK;case Ct.CANCELLED:return X.CANCELLED;case Ct.UNKNOWN:return X.UNKNOWN;case Ct.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Ct.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Ct.INTERNAL:return X.INTERNAL;case Ct.UNAVAILABLE:return X.UNAVAILABLE;case Ct.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Ct.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Ct.NOT_FOUND:return X.NOT_FOUND;case Ct.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Ct.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Ct.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Ct.ABORTED:return X.ABORTED;case Ct.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Ct.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Ct.DATA_LOSS:return X.DATA_LOSS;default:return ke(39323,{code:n})}}(He=Ct||(Ct={}))[He.OK=0]="OK",He[He.CANCELLED=1]="CANCELLED",He[He.UNKNOWN=2]="UNKNOWN",He[He.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",He[He.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",He[He.NOT_FOUND=5]="NOT_FOUND",He[He.ALREADY_EXISTS=6]="ALREADY_EXISTS",He[He.PERMISSION_DENIED=7]="PERMISSION_DENIED",He[He.UNAUTHENTICATED=16]="UNAUTHENTICATED",He[He.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",He[He.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",He[He.ABORTED=10]="ABORTED",He[He.OUT_OF_RANGE=11]="OUT_OF_RANGE",He[He.UNIMPLEMENTED=12]="UNIMPLEMENTED",He[He.INTERNAL=13]="INTERNAL",He[He.UNAVAILABLE=14]="UNAVAILABLE",He[He.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const LR=new li([4294967295,4294967295],0);function Z0(n){const e=RE().encode(n),t=new EE;return t.update(e),new Uint8Array(t.digest())}function ew(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new li([t,r],0),new li([i,a],0)]}class jg{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new oc(`Invalid padding: ${t}`);if(r<0)throw new oc(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oc(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new oc(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=li.fromNumber(this.fe)}pe(e,t,r){let i=e.add(t.multiply(li.fromNumber(r)));return i.compare(LR)===1&&(i=new li([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=Z0(e),[r,i]=ew(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(r,i,a);if(!this.ye(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new jg(a,i,t);return r.forEach((f=>c.insert(f))),c}insert(e){if(this.fe===0)return;const t=Z0(e),[r,i]=ew(t);for(let a=0;a<this.hashCount;a++){const c=this.pe(r,i,a);this.we(c)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class oc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kh{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,qc.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Kh(Ae.min(),i,new St(De),xs(),$e())}}class qc{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new qc(r,t,$e(),$e(),$e())}}/**
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
 */class Ud{constructor(e,t,r,i){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=i}}class d1{constructor(e,t){this.targetId=e,this.De=t}}class h1{constructor(e,t,r=Zt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class tw{constructor(){this.ve=0,this.Ce=nw(),this.Fe=Zt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=$e(),t=$e(),r=$e();return this.Ce.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ke(38017,{changeType:a})}})),new qc(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=nw()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ze(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class VR{constructor(e){this.We=e,this.Ge=new Map,this.ze=xs(),this.je=Nd(),this.Je=Nd(),this.He=new St(De)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:ke(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,i)=>{this.nt(i)&&t(i)}))}it(e){const t=e.targetId,r=e.De.count,i=this.st(t);if(i){const a=i.target;if(Vm(a))if(r===0){const c=new Ee(a.path);this.Xe(t,c,an.newNoDocument(c,Ae.min()))}else Ze(r===1,20013,{expectedCount:r});else{const c=this.ot(t);if(c!==r){const f=this._t(e),p=f?this.ut(f,e,c):1;if(p!==0){this.rt(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,g)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,f;try{c=_i(r).toUint8Array()}catch(p){if(p instanceof DE)return pi("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new jg(c,i,a)}catch(p){return pi(p instanceof oc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.fe===0?null:f}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.We.lt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(f)||(this.Xe(t,a,null),i++)})),i}Pt(e){const t=new Map;this.Ge.forEach(((a,c)=>{const f=this.st(c);if(f){if(a.current&&Vm(f.target)){const p=new Ee(f.target.path);this.Tt(p).has(c)||this.It(c,p)||this.Xe(c,p,an.newNoDocument(p,e))}a.Ne&&(t.set(c,a.Le()),a.ke())}}));let r=$e();this.Je.forEach(((a,c)=>{let f=!0;c.forEachWhile((p=>{const g=this.st(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(r=r.add(a))})),this.ze.forEach(((a,c)=>c.setReadTime(e)));const i=new Kh(e,t,this.He,this.ze,r);return this.ze=xs(),this.je=Nd(),this.Je=Nd(),this.He=new St(De),i}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const i=this.tt(e);this.It(e,t)?i.qe(t,1):i.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new tw,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new Vt(De),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new Vt(De),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||de("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tw),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Nd(){return new St(Ee.comparator)}function nw(){return new St(Ee.comparator)}const FR={asc:"ASCENDING",desc:"DESCENDING"},UR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},zR={and:"AND",or:"OR"};class BR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Um(n,e){return n.useProto3Json||zh(e)?e:{value:e}}function ah(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function f1(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function $R(n,e){return ah(n,e.toTimestamp())}function Mr(n){return Ze(!!n,49232),Ae.fromTimestamp((function(t){const r=gi(t);return new pt(r.seconds,r.nanos)})(n))}function Og(n,e){return zm(n,e).canonicalString()}function zm(n,e){const t=(function(i){return new ft(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function p1(n){const e=ft.fromString(n);return Ze(v1(e),10190,{key:e.toString()}),e}function Bm(n,e){return Og(n.databaseId,e.path)}function cm(n,e){const t=p1(e);if(t.get(1)!==n.databaseId.projectId)throw new xe(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new xe(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(g1(t))}function m1(n,e){return Og(n.databaseId,e)}function WR(n){const e=p1(n);return e.length===4?ft.emptyPath():g1(e)}function $m(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function g1(n){return Ze(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function rw(n,e,t){return{name:Bm(n,e),fields:t.value.mapValue.fields}}function qR(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:ke(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(g,v){return g.useProto3Json?(Ze(v===void 0||typeof v=="string",58123),Zt.fromBase64String(v||"")):(Ze(v===void 0||v instanceof Buffer||v instanceof Uint8Array,16193),Zt.fromUint8Array(v||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?X.UNKNOWN:u1(g.code);return new xe(v,g.message||"")})(c);t=new h1(r,i,a,f||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=cm(n,r.document.name),a=Mr(r.document.updateTime),c=r.document.createTime?Mr(r.document.createTime):Ae.min(),f=new bn({mapValue:{fields:r.document.fields}}),p=an.newFoundDocument(i,a,c,f),g=r.targetIds||[],v=r.removedTargetIds||[];t=new Ud(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=cm(n,r.document),a=r.readTime?Mr(r.readTime):Ae.min(),c=an.newNoDocument(i,a),f=r.removedTargetIds||[];t=new Ud([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=cm(n,r.document),a=r.removedTargetIds||[];t=new Ud([],a,i,null)}else{if(!("filter"in e))return ke(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new DR(i,a),f=r.targetId;t=new d1(f,c)}}return t}function HR(n,e){let t;if(e instanceof Wc)t={update:rw(n,e.key,e.value)};else if(e instanceof c1)t={delete:Bm(n,e.key)};else if(e instanceof Ci)t={update:rw(n,e.key,e.data),updateMask:tA(e.fieldMask)};else{if(!(e instanceof PR))return ke(16599,{Rt:e.type});t={verify:Bm(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const f=c.transform;if(f instanceof Nc)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Sc)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof kc)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Rc)return{fieldPath:c.field.canonicalString(),increment:f.Ee};throw ke(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:$R(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ke(27497)})(n,e.precondition)),t}function GR(n,e){return n&&n.length>0?(Ze(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?Mr(i.updateTime):Mr(a);return c.isEqual(Ae.min())&&(c=Mr(a)),new kR(c,i.transformResults||[])})(t,e)))):[]}function KR(n,e){return{documents:[m1(n,e.path)]}}function QR(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=m1(n,i);const a=(function(g){if(g.length!==0)return y1(Br.create(g,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(g){if(g.length!==0)return g.map((v=>(function(E){return{field:xa(E.field),direction:JR(E.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=Um(n,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{Vt:t,parent:i}}function YR(n){let e=WR(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ze(r===1,65062);const v=t.from[0];v.allDescendants?i=v.collectionId:e=e.child(v.collectionId)}let a=[];t.where&&(a=(function(x){const E=_1(x);return E instanceof Br&&qE(E)?E.getFilters():[E]})(t.where));let c=[];t.orderBy&&(c=(function(x){return x.map((E=>(function(O){return new oh(Ea(O.field),(function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(O.direction))})(E)))})(t.orderBy));let f=null;t.limit&&(f=(function(x){let E;return E=typeof x=="object"?x.value:x,zh(E)?null:E})(t.limit));let p=null;t.startAt&&(p=(function(x){const E=!!x.before,R=x.values||[];return new ih(R,E)})(t.startAt));let g=null;return t.endAt&&(g=(function(x){const E=!x.before,R=x.values||[];return new ih(R,E)})(t.endAt)),gR(e,i,c,a,f,"F",p,g)}function XR(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ke(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function _1(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Ea(t.unaryFilter.field);return Dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ea(t.unaryFilter.field);return Dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Ea(t.unaryFilter.field);return Dt.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Ea(t.unaryFilter.field);return Dt.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ke(61313);default:return ke(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Dt.create(Ea(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ke(58110);default:return ke(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Br.create(t.compositeFilter.filters.map((r=>_1(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ke(1026)}})(t.compositeFilter.op))})(n):ke(30097,{filter:n})}function JR(n){return FR[n]}function ZR(n){return UR[n]}function eA(n){return zR[n]}function xa(n){return{fieldPath:n.canonicalString()}}function Ea(n){return Jt.fromServerFormat(n.fieldPath)}function y1(n){return n instanceof Dt?(function(t){if(t.op==="=="){if(W0(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NAN"}};if($0(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(W0(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NAN"}};if($0(t.value))return{unaryFilter:{field:xa(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xa(t.field),op:ZR(t.op),value:t.value}}})(n):n instanceof Br?(function(t){const r=t.getFilters().map((i=>y1(i)));return r.length===1?r[0]:{compositeFilter:{op:eA(t.op),filters:r}}})(n):ke(54877,{filter:n})}function tA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function v1(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class ii{constructor(e,t,r,i,a=Ae.min(),c=Ae.min(),f=Zt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class nA{constructor(e){this.gt=e}}function rA(n){const e=YR({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Fm(e,e.limit,"L"):e}/**
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
 */class sA{constructor(){this.Dn=new iA}addToCollectionParentIndex(e,t){return this.Dn.add(t),K.resolve()}getCollectionParents(e,t){return K.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return K.resolve()}deleteFieldIndex(e,t){return K.resolve()}deleteAllFieldIndexes(e){return K.resolve()}createTargetIndexes(e,t){return K.resolve()}getDocumentsMatchingTarget(e,t){return K.resolve(null)}getIndexType(e,t){return K.resolve(0)}getFieldIndexes(e,t){return K.resolve([])}getNextCollectionGroupToUpdate(e){return K.resolve(null)}getMinOffset(e,t){return K.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,t){return K.resolve(mi.min())}updateCollectionGroup(e,t,r){return K.resolve()}updateIndexEntries(e,t){return K.resolve()}}class iA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Vt(ft.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Vt(ft.comparator)).toArray()}}/**
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
 */const sw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},w1=41943040;class En{static withCacheSize(e){return new En(e,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */En.DEFAULT_COLLECTION_PERCENTILE=10,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,En.DEFAULT=new En(w1,En.DEFAULT_COLLECTION_PERCENTILE,En.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),En.DISABLED=new En(-1,0,0);/**
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
 */class Ma{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ma(0)}static ur(){return new Ma(-1)}}/**
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
 */const iw="LruGarbageCollector",oA=1048576;function ow([n,e],[t,r]){const i=De(n,t);return i===0?De(e,r):i}class aA{constructor(e){this.Tr=e,this.buffer=new Vt(ow),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ow(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){de(iw,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ka(t)?de(iw,"Ignoring IndexedDB error during garbage collection: ",t):await Ga(t)}await this.Rr(3e5)}))}}class cA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return K.resolve(Uh.ue);const r=new aA(t);return this.Vr.forEachTarget(e,(i=>r.Er(i.sequenceNumber))).next((()=>this.Vr.gr(e,(i=>r.Er(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(de("LruGarbageCollector","Garbage collection skipped; disabled"),K.resolve(sw)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(de("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sw):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,i,a,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((x=>(x>this.params.maximumSequenceNumbersToCollect?(de("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${x}`),i=this.params.maximumSequenceNumbersToCollect):i=x,c=Date.now(),this.nthSequenceNumber(e,i)))).next((x=>(r=x,f=Date.now(),this.removeTargets(e,r,t)))).next((x=>(a=x,p=Date.now(),this.removeOrphanedDocuments(e,r)))).next((x=>(g=Date.now(),va()<=ze.DEBUG&&de("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${i} in `+(f-c)+`ms
	Removed ${a} targets in `+(p-f)+`ms
	Removed ${x} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),K.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:x}))))}}function uA(n,e){return new cA(n,e)}/**
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
 */class dA{constructor(){this.changes=new xo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?K.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class hA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class fA{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&hc(r.mutation,i,Vn.empty(),pt.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,$e()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=$e()){const i=io();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=ic();return a.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=io();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,$e())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,r,i){let a=xs();const c=dc(),f=(function(){return dc()})();return t.forEach(((p,g)=>{const v=r.get(g.key);i.has(g.key)&&(v===void 0||v.mutation instanceof Ci)?a=a.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),hc(v.mutation,g,v.mutation.getFieldMask(),pt.now())):c.set(g.key,Vn.empty())})),this.recalculateAndSaveOverlays(e,a).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>{var x;return f.set(g,new hA(v,(x=c.get(g))!==null&&x!==void 0?x:null))})),f)))}recalculateAndSaveOverlays(e,t){const r=dc();let i=new St(((c,f)=>c-f)),a=$e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=r.get(p)||Vn.empty();v=f.applyToLocalView(g,v),r.set(p,v);const x=(i.get(f.batchId)||$e()).add(p);i=i.insert(f.batchId,x)}))})).next((()=>{const c=[],f=i.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,x=ZE();v.forEach((E=>{if(!a.has(E)){const R=a1(t.get(E),r.get(E));R!==null&&x.set(E,R),a=a.add(E)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,x))}return K.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return Ee.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):_R(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):K.resolve(io());let f=Tc,p=a;return c.next((g=>K.forEach(g,((v,x)=>(f<x.largestBatchId&&(f=x.largestBatchId),a.get(v)?K.resolve():this.remoteDocumentCache.getEntry(e,v).next((E=>{p=p.insert(v,E)}))))).next((()=>this.populateOverlays(e,g,a))).next((()=>this.computeViews(e,p,g,$e()))).next((v=>({batchId:f,changes:JE(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next((r=>{let i=ic();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=ic();return this.indexManager.getCollectionParents(e,a).next((f=>K.forEach(f,(p=>{const g=(function(x,E){return new $h(E,null,x.explicitOrderBy.slice(),x.filters.slice(),x.limit,x.limitType,x.startAt,x.endAt)})(t,p.child(a));return this.getDocumentsMatchingCollectionQuery(e,g,r,i).next((v=>{v.forEach(((x,E)=>{c=c.insert(x,E)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,an.newInvalidDocument(v)))}));let f=ic();return c.forEach(((p,g)=>{const v=a.get(p);v!==void 0&&hc(v.mutation,g,Vn.empty(),pt.now()),qh(t,g)&&(f=f.insert(p,g))})),f}))}}/**
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
 */class pA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return K.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:Mr(i.createTime)}})(t)),K.resolve()}getNamedQuery(e,t){return K.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(i){return{name:i.name,query:rA(i.bundledQuery),readTime:Mr(i.readTime)}})(t)),K.resolve()}}/**
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
 */class mA{constructor(){this.overlays=new St(Ee.comparator),this.kr=new Map}getOverlay(e,t){return K.resolve(this.overlays.get(t))}getOverlays(e,t){const r=io();return K.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.wt(e,t,a)})),K.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.kr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.kr.delete(r)),K.resolve()}getOverlaysForCollection(e,t,r){const i=io(),a=t.length+1,c=new Ee(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===a&&p.largestBatchId>r&&i.set(p.getKey(),p)}return K.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new St(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>r){let v=a.get(g.largestBatchId);v===null&&(v=io(),a=a.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=io(),p=a.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=i)););return K.resolve(f)}wt(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.kr.get(i.largestBatchId).delete(r.key);this.kr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new OR(t,r));let a=this.kr.get(t);a===void 0&&(a=$e(),this.kr.set(t,a)),this.kr.set(t,a.add(r.key))}}/**
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
 */class gA{constructor(){this.sessionToken=Zt.EMPTY_BYTE_STRING}getSessionToken(e){return K.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,K.resolve()}}/**
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
 */class Dg{constructor(){this.qr=new Vt(Wt.Qr),this.$r=new Vt(Wt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Wt(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Wt(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Ee(new ft([])),r=new Wt(t,e),i=new Wt(t,e+1),a=[];return this.$r.forEachInRange([r,i],(c=>{this.Wr(c),a.push(c.key)})),a}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Ee(new ft([])),r=new Wt(t,e),i=new Wt(t,e+1);let a=$e();return this.$r.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new Wt(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Wt{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Ee.comparator(e.key,t.key)||De(e.Hr,t.Hr)}static Ur(e,t){return De(e.Hr,t.Hr)||Ee.comparator(e.key,t.key)}}/**
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
 */class _A{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new Vt(Wt.Qr)}checkEmpty(e){return K.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new jR(a,t,r,i);this.mutationQueue.push(c);for(const f of i)this.Yr=this.Yr.add(new Wt(f.key,a)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return K.resolve(c)}lookupMutationBatch(e,t){return K.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.Xr(r),a=i<0?0:i;return K.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return K.resolve(this.mutationQueue.length===0?Ig:this.er-1)}getAllMutationBatches(e){return K.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Wt(t,0),i=new Wt(t,Number.POSITIVE_INFINITY),a=[];return this.Yr.forEachInRange([r,i],(c=>{const f=this.Zr(c.Hr);a.push(f)})),K.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Vt(De);return t.forEach((i=>{const a=new Wt(i,0),c=new Wt(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([a,c],(f=>{r=r.add(f.Hr)}))})),K.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;Ee.isDocumentKey(a)||(a=a.child(""));const c=new Wt(new Ee(a),0);let f=new Vt(De);return this.Yr.forEachWhile((p=>{const g=p.key.path;return!!r.isPrefixOf(g)&&(g.length===i&&(f=f.add(p.Hr)),!0)}),c),K.resolve(this.ei(f))}ei(e){const t=[];return e.forEach((r=>{const i=this.Zr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ze(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return K.forEach(t.mutations,(i=>{const a=new Wt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Wt(t,0),i=this.Yr.firstAfterOrEqual(r);return K.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,K.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class yA{constructor(e){this.ni=e,this.docs=(function(){return new St(Ee.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return K.resolve(r?r.document.mutableCopy():an.newInvalidDocument(t))}getEntries(e,t){let r=xs();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():an.newInvalidDocument(i))})),K.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=xs();const c=t.path,f=new Ee(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||K2(G2(v),r)<=0||(i.has(v.key)||qh(t,v))&&(a=a.insert(v.key,v.mutableCopy()))}return K.resolve(a)}getAllFromCollectionGroup(e,t,r,i){ke(9500)}ri(e,t){return K.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new vA(this)}getSize(e){return K.resolve(this.size)}}class vA extends dA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Or.addEntry(e,i)):this.Or.removeEntry(r)})),K.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class wA{constructor(e){this.persistence=e,this.ii=new xo((t=>Sg(t)),kg),this.lastRemoteSnapshotVersion=Ae.min(),this.highestTargetId=0,this.si=0,this.oi=new Dg,this.targetCount=0,this._i=Ma.ar()}forEachTarget(e,t){return this.ii.forEach(((r,i)=>t(i))),K.resolve()}getLastRemoteSnapshotVersion(e){return K.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return K.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),K.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),K.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ma(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,K.resolve()}updateTargetData(e,t){return this.hr(t),K.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,K.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.ii.forEach(((c,f)=>{f.sequenceNumber<=t&&r.get(f.targetId)===null&&(this.ii.delete(c),a.push(this.removeMatchingKeysForTargetId(e,f.targetId)),i++)})),K.waitFor(a).next((()=>i))}getTargetCount(e){return K.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return K.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),K.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),K.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),K.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return K.resolve(r)}containsKey(e,t){return K.resolve(this.oi.containsKey(t))}}/**
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
 */class x1{constructor(e,t){this.ai={},this.overlays={},this.ui=new Uh(0),this.ci=!1,this.ci=!0,this.li=new gA,this.referenceDelegate=e(this),this.hi=new wA(this),this.indexManager=new sA,this.remoteDocumentCache=(function(i){return new yA(i)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new nA(t),this.Ti=new pA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new mA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new _A(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){de("MemoryPersistence","Starting transaction:",e);const i=new xA(this.ui.next());return this.referenceDelegate.Ii(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ei(e,t){return K.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class xA extends Y2{constructor(e){super(),this.currentSequenceNumber=e}}class Mg{constructor(e){this.persistence=e,this.Ai=new Dg,this.Ri=null}static Vi(e){return new Mg(e)}get mi(){if(this.Ri)return this.Ri;throw ke(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),K.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),K.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),K.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((i=>this.mi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.mi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return K.forEach(this.mi,(r=>{const i=Ee.fromPath(r);return this.fi(e,i).next((a=>{a||t.removeEntry(i,Ae.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return K.or([()=>K.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class lh{constructor(e,t){this.persistence=e,this.gi=new xo((r=>Z2(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=uA(this,t)}static Vi(e,t){return new lh(e,t)}Ii(){}di(e){return K.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return K.forEach(this.gi,((r,i)=>this.Sr(e,r,i).next((a=>a?K.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ri(e,(c=>this.Sr(e,c,t).next((f=>{f||(r++,a.removeEntry(c,Ae.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),K.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),K.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Ld(e.data.value)),t}Sr(e,t,r){return K.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.gi.get(t);return K.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Lg{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=i}static Es(e,t){let r=$e(),i=$e();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Lg(e,t.fromCache,r,i)}}/**
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
 */class EA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return mk()?8:X2(cn())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ps(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ys(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new EA;return this.ws(e,t,c).next((f=>{if(a.result=f,this.Rs)return this.Ss(e,t,c,f.size)}))})).next((()=>a.result))}Ss(e,t,r,i){return r.documentReadCount<this.Vs?(va()<=ze.DEBUG&&de("QueryEngine","SDK will not create cache indexes for query:",wa(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),K.resolve()):(va()<=ze.DEBUG&&de("QueryEngine","Query:",wa(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.fs*i?(va()<=ze.DEBUG&&de("QueryEngine","The SDK decides to create cache indexes for query:",wa(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Or(t))):K.resolve())}ps(e,t){if(K0(t))return K.resolve(null);let r=Or(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=Fm(t,null,"F"),r=Or(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=$e(...a);return this.gs.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,r).next((p=>{const g=this.bs(t,f);return this.Ds(t,g,c,p.readTime)?this.ps(e,Fm(t,null,"F")):this.vs(e,g,t,p)}))))})))))}ys(e,t,r,i){return K0(t)||i.isEqual(Ae.min())?K.resolve(null):this.gs.getDocuments(e,r).next((a=>{const c=this.bs(t,a);return this.Ds(t,c,r,i)?K.resolve(null):(va()<=ze.DEBUG&&de("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wa(t)),this.vs(e,c,t,H2(i,Tc)).next((f=>f)))}))}bs(e,t){let r=new Vt(YE(e));return t.forEach(((i,a)=>{qh(e,a)&&(r=r.add(a))})),r}Ds(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}ws(e,t,r){return va()<=ze.DEBUG&&de("QueryEngine","Using full collection scan to execute query:",wa(t)),this.gs.getDocumentsMatchingQuery(e,t,mi.min(),r)}vs(e,t,r,i){return this.gs.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
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
 */const Vg="LocalStore",bA=3e8;class IA{constructor(e,t,r,i){this.persistence=e,this.Cs=t,this.serializer=i,this.Fs=new St(De),this.Ms=new xo((a=>Sg(a)),kg),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new fA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function CA(n,e,t,r){return new IA(n,e,t,r)}async function E1(n,e){const t=Pe(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],f=[];let p=$e();for(const g of i){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of a){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(r,p).next((g=>({Bs:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function NA(n,e){const t=Pe(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Os.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,v){const x=g.batch,E=x.keys();let R=K.resolve();return E.forEach((O=>{R=R.next((()=>v.getEntry(p,O))).next((U=>{const M=g.docVersions.get(O);Ze(M!==null,48541),U.version.compareTo(M)<0&&(x.applyToRemoteDocument(U,g),U.isValidDocument()&&(U.setReadTime(g.commitVersion),v.addEntry(U)))}))})),R.next((()=>f.mutationQueue.removeMutationBatch(p,x)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(f){let p=$e();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function T1(n){const e=Pe(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function SA(n,e){const t=Pe(n),r=e.snapshotVersion;let i=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Os.newChangeBuffer({trackRemovals:!0});i=t.Fs;const f=[];e.targetChanges.forEach(((v,x)=>{const E=i.get(x);if(!E)return;f.push(t.hi.removeMatchingKeys(a,v.removedDocuments,x).next((()=>t.hi.addMatchingKeys(a,v.addedDocuments,x))));let R=E.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(x)!==null?R=R.withResumeToken(Zt.EMPTY_BYTE_STRING,Ae.min()).withLastLimboFreeSnapshotVersion(Ae.min()):v.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(v.resumeToken,r)),i=i.insert(x,R),(function(U,M,Q){return U.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=bA?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(E,R,v)&&f.push(t.hi.updateTargetData(a,R))}));let p=xs(),g=$e();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(a,v))})),f.push(kA(a,c,e.documentUpdates).next((v=>{p=v.Ls,g=v.ks}))),!r.isEqual(Ae.min())){const v=t.hi.getLastRemoteSnapshotVersion(a).next((x=>t.hi.setTargetsMetadata(a,a.currentSequenceNumber,r)));f.push(v)}return K.waitFor(f).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,p,g))).next((()=>p))})).then((a=>(t.Fs=i,a)))}function kA(n,e,t){let r=$e(),i=$e();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=xs();return t.forEach(((f,p)=>{const g=a.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(i=i.add(f)),p.isNoDocument()&&p.version.isEqual(Ae.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):de(Vg,"Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{Ls:c,ks:i}}))}function RA(n,e){const t=Pe(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Ig),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function AA(n,e){const t=Pe(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.hi.getTargetData(r,e).next((a=>a?(i=a,K.resolve(i)):t.hi.allocateTargetId(r).next((c=>(i=new ii(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Fs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Wm(n,e,t){const r=Pe(n),i=r.Fs.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Ka(c))throw c;de(Vg,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(i.target)}function aw(n,e,t){const r=Pe(n);let i=Ae.min(),a=$e();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const x=Pe(p),E=x.Ms.get(v);return E!==void 0?K.resolve(x.Fs.get(E)):x.hi.getTargetData(g,v)})(r,c,Or(e)).next((f=>{if(f)return i=f.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(c,f.targetId).next((p=>{a=p}))})).next((()=>r.Cs.getDocumentsMatchingQuery(c,e,t?i:Ae.min(),t?a:$e()))).next((f=>(PA(r,vR(e),f),{documents:f,qs:a})))))}function PA(n,e,t){let r=n.xs.get(e)||Ae.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.xs.set(e,r)}class lw{constructor(){this.activeTargetIds=IR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jA{constructor(){this.Fo=new lw,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new lw,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class OA{xo(e){}shutdown(){}}/**
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
 */const cw="ConnectivityMonitor";class uw{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){de(cw,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){de(cw,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Sd=null;function qm(){return Sd===null?Sd=(function(){return 268435456+Math.round(2147483648*Math.random())})():Sd++,"0x"+Sd.toString(16)}/**
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
 */const um="RestConnection",DA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class MA{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.Ko=this.databaseId.database===rh?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,t,r,i,a){const c=qm(),f=this.Go(e,t.toUriEncodedString());de(um,`Sending RPC '${e}' ${c}:`,f,r);const p={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(p,i,a);const{host:g}=new URL(f),v=bs(g);return this.jo(e,f,p,r,v).then((x=>(de(um,`Received RPC '${e}' ${c}: `,x),x)),(x=>{throw pi(um,`RPC '${e}' ${c} failed with error: `,x,"url: ",f,"request:",r),x}))}Jo(e,t,r,i,a,c){return this.Wo(e,t,r,i,a)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ha})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}Go(e,t){const r=DA[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class LA{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const sn="WebChannelConnection";class VA extends MA{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,i,a){const c=qm();return new Promise(((f,p)=>{const g=new TE;g.setWithCredentials(!0),g.listenOnce(bE.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Md.NO_ERROR:const x=g.getResponseJson();de(sn,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(x)),f(x);break;case Md.TIMEOUT:de(sn,`RPC '${e}' ${c} timed out`),p(new xe(X.DEADLINE_EXCEEDED,"Request time out"));break;case Md.HTTP_ERROR:const E=g.getStatus();if(de(sn,`RPC '${e}' ${c} failed with status:`,E,"response text:",g.getResponseText()),E>0){let R=g.getResponseJson();Array.isArray(R)&&(R=R[0]);const O=R?.error;if(O&&O.status&&O.message){const U=(function(Q){const te=Q.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(te)>=0?te:X.UNKNOWN})(O.status);p(new xe(U,O.message))}else p(new xe(X.UNKNOWN,"Server responded with status "+g.getStatus()))}else p(new xe(X.UNAVAILABLE,"Connection failed."));break;default:ke(9055,{c_:e,streamId:c,l_:g.getLastErrorCode(),h_:g.getLastError()})}}finally{de(sn,`RPC '${e}' ${c} completed.`)}}));const v=JSON.stringify(i);de(sn,`RPC '${e}' ${c} sending request:`,i),g.send(t,"POST",v,r,15)}))}P_(e,t,r){const i=qm(),a=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=NE(),f=CE(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.zo(p.initMessageHeaders,t,r),p.encodeInitMessageHeaders=!0;const v=a.join("");de(sn,`Creating RPC '${e}' stream ${i}: ${v}`,p);const x=c.createWebChannel(v,p);this.T_(x);let E=!1,R=!1;const O=new LA({Ho:M=>{R?de(sn,`Not sending because RPC '${e}' stream ${i} is closed:`,M):(E||(de(sn,`Opening RPC '${e}' stream ${i} transport.`),x.open(),E=!0),de(sn,`RPC '${e}' stream ${i} sending:`,M),x.send(M))},Yo:()=>x.close()}),U=(M,Q,te)=>{M.listen(Q,(le=>{try{te(le)}catch(G){setTimeout((()=>{throw G}),0)}}))};return U(x,sc.EventType.OPEN,(()=>{R||(de(sn,`RPC '${e}' stream ${i} transport opened.`),O.s_())})),U(x,sc.EventType.CLOSE,(()=>{R||(R=!0,de(sn,`RPC '${e}' stream ${i} transport closed`),O.__(),this.I_(x))})),U(x,sc.EventType.ERROR,(M=>{R||(R=!0,pi(sn,`RPC '${e}' stream ${i} transport errored. Name:`,M.name,"Message:",M.message),O.__(new xe(X.UNAVAILABLE,"The operation could not be completed")))})),U(x,sc.EventType.MESSAGE,(M=>{var Q;if(!R){const te=M.data[0];Ze(!!te,16349);const le=te,G=le?.error||((Q=le[0])===null||Q===void 0?void 0:Q.error);if(G){de(sn,`RPC '${e}' stream ${i} received error:`,G);const J=G.status;let fe=(function(S){const C=Ct[S];if(C!==void 0)return u1(C)})(J),j=G.message;fe===void 0&&(fe=X.INTERNAL,j="Unknown error status: "+J+" with message "+G.message),R=!0,O.__(new xe(fe,j)),x.close()}else de(sn,`RPC '${e}' stream ${i} received:`,te),O.a_(te)}})),U(f,IE.STAT_EVENT,(M=>{M.stat===Pm.PROXY?de(sn,`RPC '${e}' stream ${i} detected buffering proxy`):M.stat===Pm.NOPROXY&&de(sn,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{O.o_()}),0),O}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function dm(){return typeof document<"u"?document:null}/**
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
 */function Qh(n){return new BR(n,!0)}/**
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
 */class b1{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=i,this.A_=a,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),i=Math.max(0,t-r);i>0&&de("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const dw="PersistentStream";class I1{constructor(e,t,r,i,a,c,f,p){this.Fi=e,this.w_=r,this.S_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new b1(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===X.RESOURCE_EXHAUSTED?(ws(t.toString()),ws("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.b_===t&&this.W_(r,i)}),(r=>{e((()=>{const i=new xe(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(i)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{r((()=>this.G_(i)))})),this.stream.onMessage((i=>{r((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return de(dw,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(de(dw,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class FA extends I1{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=qR(this.serializer,e),r=(function(a){if(!("targetChange"in a))return Ae.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?Ae.min():c.readTime?Mr(c.readTime):Ae.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=$m(this.serializer),t.addTarget=(function(a,c){let f;const p=c.target;if(f=Vm(p)?{documents:KR(a,p)}:{query:QR(a,p).Vt},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=f1(a,c.resumeToken);const g=Um(a,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ae.min())>0){f.readTime=ah(a,c.snapshotVersion.toTimestamp());const g=Um(a,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const r=XR(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=$m(this.serializer),t.removeTarget=e,this.k_(t)}}class UA extends I1{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Ze(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ze(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ze(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=GR(e.writeResults,e.commitTime),r=Mr(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=$m(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>HR(this.serializer,r)))};this.k_(t)}}/**
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
 */class zA{}class BA extends zA{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new xe(X.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Wo(e,zm(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new xe(X.UNKNOWN,a.toString())}))}Jo(e,t,r,i,a){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.Jo(e,zm(t,r),i,c,f,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new xe(X.UNKNOWN,c.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class $A{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(ws(t),this._a=!1):de("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const po="RemoteStore";class WA{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=a,this.Ea.xo((c=>{r.enqueueAndForget((async()=>{Eo(this)&&(de(po,"Restarting streams for network reachability change."),await(async function(p){const g=Pe(p);g.Ia.add(4),await Hc(g),g.Aa.set("Unknown"),g.Ia.delete(4),await Yh(g)})(this))}))})),this.Aa=new $A(r,i)}}async function Yh(n){if(Eo(n))for(const e of n.da)await e(!0)}async function Hc(n){for(const e of n.da)await e(!1)}function C1(n,e){const t=Pe(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Bg(t)?zg(t):Qa(t).x_()&&Ug(t,e))}function Fg(n,e){const t=Pe(n),r=Qa(t);t.Ta.delete(e),r.x_()&&N1(t,e),t.Ta.size===0&&(r.x_()?r.B_():Eo(t)&&t.Aa.set("Unknown"))}function Ug(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ae.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Qa(n).H_(e)}function N1(n,e){n.Ra.$e(e),Qa(n).Y_(e)}function zg(n){n.Ra=new VR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),Qa(n).start(),n.Aa.aa()}function Bg(n){return Eo(n)&&!Qa(n).M_()&&n.Ta.size>0}function Eo(n){return Pe(n).Ia.size===0}function S1(n){n.Ra=void 0}async function qA(n){n.Aa.set("Online")}async function HA(n){n.Ta.forEach(((e,t)=>{Ug(n,e)}))}async function GA(n,e){S1(n),Bg(n)?(n.Aa.la(e),zg(n)):n.Aa.set("Unknown")}async function KA(n,e,t){if(n.Aa.set("Online"),e instanceof h1&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const f of a.targetIds)i.Ta.has(f)&&(await i.remoteSyncer.rejectListen(f,c),i.Ta.delete(f),i.Ra.removeTarget(f))})(n,e)}catch(r){de(po,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ch(n,r)}else if(e instanceof Ud?n.Ra.Ye(e):e instanceof d1?n.Ra.it(e):n.Ra.et(e),!t.isEqual(Ae.min()))try{const r=await T1(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const f=a.Ra.Pt(c);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=a.Ta.get(g);v&&a.Ta.set(g,v.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,g)=>{const v=a.Ta.get(p);if(!v)return;a.Ta.set(p,v.withResumeToken(Zt.EMPTY_BYTE_STRING,v.snapshotVersion)),N1(a,p);const x=new ii(v.target,p,g,v.sequenceNumber);Ug(a,x)})),a.remoteSyncer.applyRemoteEvent(f)})(n,t)}catch(r){de(po,"Failed to raise snapshot:",r),await ch(n,r)}}async function ch(n,e,t){if(!Ka(e))throw e;n.Ia.add(1),await Hc(n),n.Aa.set("Offline"),t||(t=()=>T1(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{de(po,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await Yh(n)}))}function k1(n,e){return e().catch((t=>ch(n,t,e)))}async function Xh(n){const e=Pe(n),t=vi(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Ig;for(;QA(e);)try{const i=await RA(e.localStore,r);if(i===null){e.Pa.length===0&&t.B_();break}r=i.batchId,YA(e,i)}catch(i){await ch(e,i)}R1(e)&&A1(e)}function QA(n){return Eo(n)&&n.Pa.length<10}function YA(n,e){n.Pa.push(e);const t=vi(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function R1(n){return Eo(n)&&!vi(n).M_()&&n.Pa.length>0}function A1(n){vi(n).start()}async function XA(n){vi(n).na()}async function JA(n){const e=vi(n);for(const t of n.Pa)e.X_(t.mutations)}async function ZA(n,e,t){const r=n.Pa.shift(),i=Pg.from(r,e,t);await k1(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Xh(n)}async function eP(n,e){e&&vi(n).Z_&&await(async function(r,i){if((function(c){return MR(c)&&c!==X.ABORTED})(i.code)){const a=r.Pa.shift();vi(r).N_(),await k1(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Xh(r)}})(n,e),R1(n)&&A1(n)}async function hw(n,e){const t=Pe(n);t.asyncQueue.verifyOperationInProgress(),de(po,"RemoteStore received new credentials");const r=Eo(t);t.Ia.add(3),await Hc(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await Yh(t)}async function tP(n,e){const t=Pe(n);e?(t.Ia.delete(2),await Yh(t)):e||(t.Ia.add(2),await Hc(t),t.Aa.set("Unknown"))}function Qa(n){return n.Va||(n.Va=(function(t,r,i){const a=Pe(t);return a.ia(),new FA(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Zo:qA.bind(null,n),e_:HA.bind(null,n),n_:GA.bind(null,n),J_:KA.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Bg(n)?zg(n):n.Aa.set("Unknown")):(await n.Va.stop(),S1(n))}))),n.Va}function vi(n){return n.ma||(n.ma=(function(t,r,i){const a=Pe(t);return a.ia(),new UA(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:XA.bind(null,n),n_:eP.bind(null,n),ea:JA.bind(null,n),ta:ZA.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await Xh(n)):(await n.ma.stop(),n.Pa.length>0&&(de(po,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class $g{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new lo,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,f=new $g(e,t,c,i,a);return f.start(r),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new xe(X.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wg(n,e){if(ws("AsyncQueue",`${e}: ${n}`),Ka(n))return new xe(X.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ia{static emptySet(e){return new Ia(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Ee.comparator(t.key,r.key):(t,r)=>Ee.comparator(t.key,r.key),this.keyedMap=ic(),this.sortedSet=new St(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ia)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ia;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class fw{constructor(){this.fa=new St(Ee.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):ke(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class La{constructor(e,t,r,i,a,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new La(e,t,Ia.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class nP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class rP{constructor(){this.queries=pw(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const i=Pe(t),a=i.queries;i.queries=pw(),a.forEach(((c,f)=>{for(const p of f.wa)p.onError(r)}))})(this,new xe(X.ABORTED,"Firestore shutting down"))}}function pw(){return new xo((n=>QE(n)),Wh)}async function sP(n,e){const t=Pe(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.Sa()&&e.ba()&&(r=2):(a=new nP,r=e.ba()?0:1);try{switch(r){case 0:a.ya=await t.onListen(i,!0);break;case 1:a.ya=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const f=Wg(c,`Initialization of query '${wa(e.query)}' failed`);return void e.onError(f)}t.queries.set(i,a),a.wa.push(e),e.va(t.onlineState),a.ya&&e.Ca(a.ya)&&qg(t)}async function iP(n,e){const t=Pe(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.wa.indexOf(e);c>=0&&(a.wa.splice(c,1),a.wa.length===0?i=e.ba()?0:1:!a.Sa()&&e.ba()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function oP(n,e){const t=Pe(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const f of c.wa)f.Ca(i)&&(r=!0);c.ya=i}}r&&qg(t)}function aP(n,e,t){const r=Pe(n),i=r.queries.get(e);if(i)for(const a of i.wa)a.onError(t);r.queries.delete(e)}function qg(n){n.Da.forEach((e=>{e.next()}))}var Hm,mw;(mw=Hm||(Hm={})).Fa="default",mw.Cache="cache";class lP{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new La(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=La.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Hm.Cache}}/**
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
 */class P1{constructor(e){this.key=e}}class j1{constructor(e){this.key=e}}class cP{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=$e(),this.mutatedKeys=$e(),this.Xa=YE(e),this.eu=new Ia(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new fw,i=t?t.eu:this.eu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,f=!1;const p=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,g=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((v,x)=>{const E=i.get(v),R=qh(this.query,x)?x:null,O=!!E&&this.mutatedKeys.has(E.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let M=!1;E&&R?E.data.isEqual(R.data)?O!==U&&(r.track({type:3,doc:R}),M=!0):this.iu(E,R)||(r.track({type:2,doc:R}),M=!0,(p&&this.Xa(R,p)>0||g&&this.Xa(R,g)<0)&&(f=!0)):!E&&R?(r.track({type:0,doc:R}),M=!0):E&&!R&&(r.track({type:1,doc:E}),M=!0,(p||g)&&(f=!0)),M&&(R?(c=c.add(R),a=U?a.add(v):a.delete(v)):(c=c.delete(v),a=a.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),a=a.delete(v.key),r.track({type:1,doc:v})}return{eu:c,ru:r,Ds:f,mutatedKeys:a}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const c=e.ru.pa();c.sort(((v,x)=>(function(R,O){const U=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ke(20277,{At:M})}};return U(R)-U(O)})(v.type,x.type)||this.Xa(v.doc,x.doc))),this.su(r),i=i!=null&&i;const f=t&&!i?this.ou():[],p=this.Za.size===0&&this.current&&!i?1:0,g=p!==this.Ya;return this.Ya=p,c.length!==0||g?{snapshot:new La(this.query,e.eu,a,c,e.mutatedKeys,p===0,g,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:f}:{_u:f}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new fw,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=$e(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new j1(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new P1(r))})),t}uu(e){this.Ha=e.qs,this.Za=$e();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return La.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Hg="SyncEngine";class uP{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class dP{constructor(e){this.key=e,this.lu=!1}}class hP{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.hu={},this.Pu=new xo((f=>QE(f)),Wh),this.Tu=new Map,this.Iu=new Set,this.du=new St(Ee.comparator),this.Eu=new Map,this.Au=new Dg,this.Ru={},this.Vu=new Map,this.mu=Ma.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function fP(n,e,t=!0){const r=F1(n);let i;const a=r.Pu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.cu()):i=await O1(r,e,t,!0),i}async function pP(n,e){const t=F1(n);await O1(t,e,!0,!1)}async function O1(n,e,t,r){const i=await AA(n.localStore,Or(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let f;return r&&(f=await mP(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&C1(n.remoteStore,i),f}async function mP(n,e,t,r,i){n.gu=(x,E,R)=>(async function(U,M,Q,te){let le=M.view.nu(Q);le.Ds&&(le=await aw(U.localStore,M.query,!1).then((({documents:j})=>M.view.nu(j,le))));const G=te&&te.targetChanges.get(M.targetId),J=te&&te.targetMismatches.get(M.targetId)!=null,fe=M.view.applyChanges(le,U.isPrimaryClient,G,J);return _w(U,M.targetId,fe._u),fe.snapshot})(n,x,E,R);const a=await aw(n.localStore,e,!0),c=new cP(e,a.qs),f=c.nu(a.documents),p=qc.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),g=c.applyChanges(f,n.isPrimaryClient,p);_w(n,t,g._u);const v=new uP(e,t,c);return n.Pu.set(e,v),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),g.snapshot}async function gP(n,e,t){const r=Pe(n),i=r.Pu.get(e),a=r.Tu.get(i.targetId);if(a.length>1)return r.Tu.set(i.targetId,a.filter((c=>!Wh(c,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await Wm(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Fg(r.remoteStore,i.targetId),Gm(r,i.targetId)})).catch(Ga)):(Gm(r,i.targetId),await Wm(r.localStore,i.targetId,!0))}async function _P(n,e){const t=Pe(n),r=t.Pu.get(e),i=t.Tu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Fg(t.remoteStore,r.targetId))}async function yP(n,e,t){const r=IP(n);try{const i=await(function(c,f){const p=Pe(c),g=pt.now(),v=f.reduce(((R,O)=>R.add(O.key)),$e());let x,E;return p.persistence.runTransaction("Locally write mutations","readwrite",(R=>{let O=xs(),U=$e();return p.Os.getEntries(R,v).next((M=>{O=M,O.forEach(((Q,te)=>{te.isValidDocument()||(U=U.add(Q))}))})).next((()=>p.localDocuments.getOverlayedDocuments(R,O))).next((M=>{x=M;const Q=[];for(const te of f){const le=AR(te,x.get(te.key).overlayedDocument);le!=null&&Q.push(new Ci(te.key,le,BE(le.value.mapValue),Dr.exists(!0)))}return p.mutationQueue.addMutationBatch(R,g,Q,f)})).next((M=>{E=M;const Q=M.applyToLocalDocumentSet(x,U);return p.documentOverlayCache.saveOverlays(R,M.batchId,Q)}))})).then((()=>({batchId:E.batchId,changes:JE(x)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,f,p){let g=c.Ru[c.currentUser.toKey()];g||(g=new St(De)),g=g.insert(f,p),c.Ru[c.currentUser.toKey()]=g})(r,i.batchId,t),await Gc(r,i.changes),await Xh(r.remoteStore)}catch(i){const a=Wg(i,"Failed to persist write");t.reject(a)}}async function D1(n,e){const t=Pe(n);try{const r=await SA(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Eu.get(a);c&&(Ze(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.lu=!0:i.modifiedDocuments.size>0?Ze(c.lu,14607):i.removedDocuments.size>0&&(Ze(c.lu,42227),c.lu=!1))})),await Gc(t,r,e)}catch(r){await Ga(r)}}function gw(n,e,t){const r=Pe(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Pu.forEach(((a,c)=>{const f=c.view.va(e);f.snapshot&&i.push(f.snapshot)})),(function(c,f){const p=Pe(c);p.onlineState=f;let g=!1;p.queries.forEach(((v,x)=>{for(const E of x.wa)E.va(f)&&(g=!0)})),g&&qg(p)})(r.eventManager,e),i.length&&r.hu.J_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vP(n,e,t){const r=Pe(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Eu.get(e),a=i&&i.key;if(a){let c=new St(Ee.comparator);c=c.insert(a,an.newNoDocument(a,Ae.min()));const f=$e().add(a),p=new Kh(Ae.min(),new Map,new St(De),c,f);await D1(r,p),r.du=r.du.remove(a),r.Eu.delete(e),Gg(r)}else await Wm(r.localStore,e,!1).then((()=>Gm(r,e,t))).catch(Ga)}async function wP(n,e){const t=Pe(n),r=e.batch.batchId;try{const i=await NA(t.localStore,e);L1(t,r,null),M1(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Gc(t,i)}catch(i){await Ga(i)}}async function xP(n,e,t){const r=Pe(n);try{const i=await(function(c,f){const p=Pe(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next((x=>(Ze(x!==null,37113),v=x.keys(),p.mutationQueue.removeMutationBatch(g,x)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(r.localStore,e);L1(r,e,t),M1(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Gc(r,i)}catch(i){await Ga(i)}}function M1(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function L1(n,e,t){const r=Pe(n);let i=r.Ru[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Ru[r.currentUser.toKey()]=i}}function Gm(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||V1(n,r)}))}function V1(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Fg(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Gg(n))}function _w(n,e,t){for(const r of t)r instanceof P1?(n.Au.addReference(r.key,e),EP(n,r)):r instanceof j1?(de(Hg,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||V1(n,r.key)):ke(19791,{yu:r})}function EP(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(de(Hg,"New document in limbo: "+t),n.Iu.add(r),Gg(n))}function Gg(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Ee(ft.fromString(e)),r=n.mu.next();n.Eu.set(r,new dP(t)),n.du=n.du.insert(t,r),C1(n.remoteStore,new ii(Or(Rg(t.path)),r,"TargetPurposeLimboResolution",Uh.ue))}}async function Gc(n,e,t){const r=Pe(n),i=[],a=[],c=[];r.Pu.isEmpty()||(r.Pu.forEach(((f,p)=>{c.push(r.gu(p,e,t).then((g=>{var v;if((g||t)&&r.isPrimaryClient){const x=g?!g.fromCache:(v=t?.targetChanges.get(p.targetId))===null||v===void 0?void 0:v.current;r.sharedClientState.updateQueryState(p.targetId,x?"current":"not-current")}if(g){i.push(g);const x=Lg.Es(p.targetId,g);a.push(x)}})))})),await Promise.all(c),r.hu.J_(i),await(async function(p,g){const v=Pe(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(x=>K.forEach(g,(E=>K.forEach(E.Is,(R=>v.persistence.referenceDelegate.addReference(x,E.targetId,R))).next((()=>K.forEach(E.ds,(R=>v.persistence.referenceDelegate.removeReference(x,E.targetId,R)))))))))}catch(x){if(!Ka(x))throw x;de(Vg,"Failed to update sequence numbers: "+x)}for(const x of g){const E=x.targetId;if(!x.fromCache){const R=v.Fs.get(E),O=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(O);v.Fs=v.Fs.insert(E,U)}}})(r.localStore,a))}async function TP(n,e){const t=Pe(n);if(!t.currentUser.isEqual(e)){de(Hg,"User change. New user:",e.toKey());const r=await E1(t.localStore,e);t.currentUser=e,(function(a,c){a.Vu.forEach((f=>{f.forEach((p=>{p.reject(new xe(X.CANCELLED,c))}))})),a.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Gc(t,r.Bs)}}function bP(n,e){const t=Pe(n),r=t.Eu.get(e);if(r&&r.lu)return $e().add(r.key);{let i=$e();const a=t.Tu.get(e);if(!a)return i;for(const c of a){const f=t.Pu.get(c);i=i.unionWith(f.view.tu)}return i}}function F1(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=D1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vP.bind(null,e),e.hu.J_=oP.bind(null,e.eventManager),e.hu.pu=aP.bind(null,e.eventManager),e}function IP(n){const e=Pe(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xP.bind(null,e),e}class uh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Qh(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return CA(this.persistence,new TA,e.initialUser,this.serializer)}Du(e){return new x1(Mg.Vi,this.serializer)}bu(e){return new jA}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}uh.provider={build:()=>new uh};class CP extends uh{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Ze(this.persistence.referenceDelegate instanceof lh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new lA(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?En.withCacheSize(this.cacheSizeBytes):En.DEFAULT;return new x1((r=>lh.Vi(r,t)),this.serializer)}}class Km{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>gw(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TP.bind(null,this.syncEngine),await tP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new rP})()}createDatastore(e){const t=Qh(e.databaseInfo.databaseId),r=(function(a){return new VA(a)})(e.databaseInfo);return(function(a,c,f,p){return new BA(a,c,f,p)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,f){return new WA(r,i,a,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>gw(this.syncEngine,t,0)),(function(){return uw.C()?new uw:new OA})())}createSyncEngine(e,t){return(function(i,a,c,f,p,g,v){const x=new hP(i,a,c,f,p,g);return v&&(x.fu=!0),x})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(i){const a=Pe(i);de(po,"RemoteStore shutting down."),a.Ia.add(5),await Hc(a),a.Ea.shutdown(),a.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Km.provider={build:()=>new Km};/**
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
 */class NP{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):ws("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const wi="FirestoreClient";class SP{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=on.UNAUTHENTICATED,this.clientId=Tg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{de(wi,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(de(wi,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new lo;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Wg(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function hm(n,e){n.asyncQueue.verifyOperationInProgress(),de(wi,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await E1(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>{pi("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{de("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{pi("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),n._offlineComponents=e}async function yw(n,e){n.asyncQueue.verifyOperationInProgress();const t=await kP(n);de(wi,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>hw(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>hw(e.remoteStore,i))),n._onlineComponents=e}async function kP(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){de(wi,"Using user provided OfflineComponentProvider");try{await hm(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===X.FAILED_PRECONDITION||i.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;pi("Error using user provided cache. Falling back to memory cache: "+t),await hm(n,new uh)}}else de(wi,"Using default OfflineComponentProvider"),await hm(n,new CP(void 0));return n._offlineComponents}async function U1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(de(wi,"Using user provided OnlineComponentProvider"),await yw(n,n._uninitializedComponentsProvider._online)):(de(wi,"Using default OnlineComponentProvider"),await yw(n,new Km))),n._onlineComponents}function RP(n){return U1(n).then((e=>e.syncEngine))}async function vw(n){const e=await U1(n),t=e.eventManager;return t.onListen=fP.bind(null,e.syncEngine),t.onUnlisten=gP.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=pP.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=_P.bind(null,e.syncEngine),t}/**
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
 */function z1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ww=new Map;/**
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
 */const B1="firestore.googleapis.com",xw=!0;class Ew{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new xe(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=B1,this.ssl=xw}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:xw;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=w1;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<oA)throw new xe(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}q2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=z1((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(a){if(a.timeoutSeconds!==void 0){if(isNaN(a.timeoutSeconds))throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (must not be NaN)`);if(a.timeoutSeconds<5)throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (minimum allowed value is 5)`);if(a.timeoutSeconds>30)throw new xe(X.INVALID_ARGUMENT,`invalid long polling timeout: ${a.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jh{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ew({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new xe(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new xe(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ew(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new M2;switch(r.type){case"firstParty":return new U2(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new xe(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=ww.get(t);r&&(de("ComponentProvider","Removing Datastore"),ww.delete(t),r.terminate())})(this),Promise.resolve()}}function AP(n,e,t,r={}){var i;n=co(n,Jh);const a=bs(e),c=n._getSettings(),f=Object.assign(Object.assign({},c),{emulatorOptions:n._getEmulatorOptions()}),p=`${e}:${t}`;a&&(Dh(`https://${p}`),Mh("Firestore",!0)),c.host!==B1&&c.host!==p&&pi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g=Object.assign(Object.assign({},c),{host:p,ssl:a,emulatorOptions:r});if(!hi(g,f)&&(n._setSettings(g),r.mockUserToken)){let v,x;if(typeof r.mockUserToken=="string")v=r.mockUserToken,x=on.MOCK_USER;else{v=yg(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new xe(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");x=new on(E)}n._authCredentials=new L2(new kE(v,x))}}/**
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
 */class Zh{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Zh(this.firestore,e,this._query)}}class Lt{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ui(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Lt(this.firestore,e,this._key)}toJSON(){return{type:Lt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if($c(t,Lt._jsonSchema))return new Lt(e,r||null,new Ee(ft.fromString(t.referencePath)))}}Lt._jsonSchemaVersion="firestore/documentReference/1.0",Lt._jsonSchema={type:Nt("string",Lt._jsonSchemaVersion),referencePath:Nt("string")};class ui extends Zh{constructor(e,t,r){super(e,t,Rg(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Lt(this.firestore,null,new Ee(e))}withConverter(e){return new ui(this.firestore,e,this._path)}}function Tw(n,e,...t){if(n=lt(n),AE("collection","path",e),n instanceof Jh){const r=ft.fromString(e,...t);return D0(r),new ui(n,null,r)}{if(!(n instanceof Lt||n instanceof ui))throw new xe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return D0(r),new ui(n.firestore,null,r)}}function Qm(n,e,...t){if(n=lt(n),arguments.length===1&&(e=Tg.newId()),AE("doc","path",e),n instanceof Jh){const r=ft.fromString(e,...t);return O0(r),new Lt(n,null,new Ee(r))}{if(!(n instanceof Lt||n instanceof ui))throw new xe(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(e,...t));return O0(r),new Lt(n.firestore,n instanceof ui?n.converter:null,new Ee(r))}}/**
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
 */const bw="AsyncQueue";class Iw{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new b1(this,"async_queue_retry"),this.oc=()=>{const r=dm();r&&de(bw,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=dm();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=dm();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new lo;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ka(e))throw e;de(bw,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,ws("INTERNAL UNHANDLED ERROR: ",Cw(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const i=$g.createAndSchedule(this,e,t,r,(a=>this.lc(a)));return this.ec.push(i),i}ac(){this.tc&&ke(47125,{hc:Cw(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Cw(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Nw(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const i=t;for(const a of r)if(a in i&&typeof i[a]=="function")return!0;return!1})(n,["next","error","complete"])}class Ac extends Jh{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new Iw,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Iw(e),this._firestoreClient=void 0,await e}}}function PP(n,e){const t=typeof n=="object"?n:Fh(),r=typeof n=="string"?n:rh,i=Bc(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=_g("firestore");a&&AP(i,...a)}return i}function $1(n){if(n._terminated)throw new xe(X.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||jP(n),n._firestoreClient}function jP(n){var e,t,r;const i=n._freezeSettings(),a=(function(f,p,g,v){return new nR(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,z1(v.experimentalLongPollingOptions),v.useFetchStreams,v.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,i);n._componentsProvider||!((t=i.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),n._firestoreClient=new SP(n._authCredentials,n._appCheckCredentials,n._queue,a,n._componentsProvider&&(function(f){const p=f?._online.build();return{_offline:f?._offline.build(p),_online:p}})(n._componentsProvider))}/**
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
 */class Qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qn(Zt.fromBase64String(e))}catch(t){throw new xe(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Qn(Zt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Qn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if($c(e,Qn._jsonSchema))return Qn.fromBase64String(e.bytes)}}Qn._jsonSchemaVersion="firestore/bytes/1.0",Qn._jsonSchema={type:Nt("string",Qn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class ef{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new xe(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Jt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Kc{constructor(e){this._methodName=e}}/**
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
 */class Lr{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new xe(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new xe(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return De(this._lat,e._lat)||De(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Lr._jsonSchemaVersion}}static fromJSON(e){if($c(e,Lr._jsonSchema))return new Lr(e.latitude,e.longitude)}}Lr._jsonSchemaVersion="firestore/geoPoint/1.0",Lr._jsonSchema={type:Nt("string",Lr._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class Vr{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Vr._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if($c(e,Vr._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Vr(e.vectorValues);throw new xe(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Vr._jsonSchemaVersion="firestore/vectorValue/1.0",Vr._jsonSchema={type:Nt("string",Vr._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const OP=/^__.*__$/;class DP{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms):new Wc(e,this.data,t,this.fieldTransforms)}}class W1{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Ci(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function q1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ke(40011,{Ec:n})}}class Kg{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Ac(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Kg(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.fc(e),i}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.Rc({path:r,mc:!1});return i.Ac(),i}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return dh(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(q1(this.Ec)&&OP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class MP{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Qh(e)}Dc(e,t,r,i=!1){return new Kg({Ec:e,methodName:t,bc:r,path:Jt.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function H1(n){const e=n._freezeSettings(),t=Qh(n._databaseId);return new MP(n._databaseId,!!e.ignoreUndefinedProperties,t)}function LP(n,e,t,r,i,a={}){const c=n.Dc(a.merge||a.mergeFields?2:0,e,t,i);Xg("Data must be an object, but it was:",c,r);const f=G1(r,c);let p,g;if(a.merge)p=new Vn(c.fieldMask),g=c.fieldTransforms;else if(a.mergeFields){const v=[];for(const x of a.mergeFields){const E=Ym(e,x,t);if(!c.contains(E))throw new xe(X.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);Q1(v,E)||v.push(E)}p=new Vn(v),g=c.fieldTransforms.filter((x=>p.covers(x.field)))}else p=null,g=c.fieldTransforms;return new DP(new bn(f),p,g)}class tf extends Kc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof tf}}class Qg extends Kc{_toFieldTransform(e){return new o1(e.path,new Nc)}isEqual(e){return e instanceof Qg}}class Yg extends Kc{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new Rc(e.serializer,t1(e.serializer,this.Cc));return new o1(e.path,t)}isEqual(e){return e instanceof Yg&&this.Cc===e.Cc}}function VP(n,e,t,r){const i=n.Dc(1,e,t);Xg("Data must be an object, but it was:",i,r);const a=[],c=bn.empty();Ii(r,((p,g)=>{const v=Jg(e,p,t);g=lt(g);const x=i.gc(v);if(g instanceof tf)a.push(v);else{const E=nf(g,x);E!=null&&(a.push(v),c.set(v,E))}}));const f=new Vn(a);return new W1(c,f,i.fieldTransforms)}function FP(n,e,t,r,i,a){const c=n.Dc(1,e,t),f=[Ym(e,r,t)],p=[i];if(a.length%2!=0)throw new xe(X.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let E=0;E<a.length;E+=2)f.push(Ym(e,a[E])),p.push(a[E+1]);const g=[],v=bn.empty();for(let E=f.length-1;E>=0;--E)if(!Q1(g,f[E])){const R=f[E];let O=p[E];O=lt(O);const U=c.gc(R);if(O instanceof tf)g.push(R);else{const M=nf(O,U);M!=null&&(g.push(R),v.set(R,M))}}const x=new Vn(g);return new W1(v,x,c.fieldTransforms)}function nf(n,e){if(K1(n=lt(n)))return Xg("Unsupported field value:",e,n),G1(n,e);if(n instanceof Kc)return(function(r,i){if(!q1(i.Ec))throw i.wc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const f of r){let p=nf(f,i.yc(c));p==null&&(p={nullValue:"NULL_VALUE"}),a.push(p),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=lt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return t1(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=pt.fromDate(r);return{timestampValue:ah(i.serializer,a)}}if(r instanceof pt){const a=new pt(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ah(i.serializer,a)}}if(r instanceof Lr)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qn)return{bytesValue:f1(i.serializer,r._byteString)};if(r instanceof Lt){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.wc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Og(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Vr)return(function(c,f){return{mapValue:{fields:{[UE]:{stringValue:zE},[sh]:{arrayValue:{values:c.toArray().map((g=>{if(typeof g!="number")throw f.wc("VectorValues must only contain numeric values.");return Ag(f.serializer,g)}))}}}}}})(r,i);throw i.wc(`Unsupported field value: ${bg(r)}`)})(n,e)}function G1(n,e){const t={};return OE(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ii(n,((r,i)=>{const a=nf(i,e.Vc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function K1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof pt||n instanceof Lr||n instanceof Qn||n instanceof Lt||n instanceof Kc||n instanceof Vr)}function Xg(n,e,t){if(!K1(t)||!PE(t)){const r=bg(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ym(n,e,t){if((e=lt(e))instanceof ef)return e._internalPath;if(typeof e=="string")return Jg(n,e);throw dh("Field path arguments must be of type string or ",n,!1,void 0,t)}const UP=new RegExp("[~\\*/\\[\\]]");function Jg(n,e,t){if(e.search(UP)>=0)throw dh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ef(...e.split("."))._internalPath}catch{throw dh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function dh(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(a||c)&&(p+=" (found",a&&(p+=` in field ${r}`),c&&(p+=` in document ${i}`),p+=")"),new xe(X.INVALID_ARGUMENT,f+n+p)}function Q1(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Y1{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Lt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(X1("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class zP extends Y1{data(){return super.data()}}function X1(n,e){return typeof e=="string"?Jg(n,e):e instanceof ef?e._internalPath:e._delegate._internalPath}/**
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
 */function BP(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new xe(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class $P{convertValue(e,t="none"){switch(yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Tt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(_i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ke(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Ii(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){var t,r,i;const a=(i=(r=(t=e.fields)===null||t===void 0?void 0:t[sh].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map((c=>Tt(c.doubleValue)));return new Vr(a)}convertGeoPoint(e){return new Lr(Tt(e.latitude),Tt(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(bc(e));default:return null}}convertTimestamp(e){const t=gi(e);return new pt(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=ft.fromString(e);Ze(v1(r),9688,{name:e});const i=new Ic(r.get(1),r.get(3)),a=new Ee(r.popFirst(5));return i.isEqual(t)||ws(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
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
 */function WP(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class ac{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uo extends Y1{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new zd(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(X1("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new xe(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=uo._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}uo._jsonSchemaVersion="firestore/documentSnapshot/1.0",uo._jsonSchema={type:Nt("string",uo._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class zd extends uo{data(e={}){return super.data(e)}}class Ca{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ac(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new zd(this._firestore,this._userDataWriter,r.key,r,new ac(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new xe(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((f=>{const p=new zd(i._firestore,i._userDataWriter,f.doc.key,f.doc,new ac(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((f=>a||f.type!==3)).map((f=>{const p=new zd(i._firestore,i._userDataWriter,f.doc.key,f.doc,new ac(i._snapshot.mutatedKeys.has(f.doc.key),i._snapshot.fromCache),i.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:qP(f.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new xe(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ca._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Tg.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function qP(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ke(61501,{type:n})}}Ca._jsonSchemaVersion="firestore/querySnapshot/1.0",Ca._jsonSchema={type:Nt("string",Ca._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class J1 extends $P{constructor(e){super(),this.firestore=e}convertBytes(e){return new Qn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Lt(this.firestore,null,t)}}function Sw(n,e,t,...r){n=co(n,Lt);const i=co(n.firestore,Ac),a=H1(i);let c;return c=typeof(e=lt(e))=="string"||e instanceof ef?FP(a,"updateDoc",n._key,e,t,r):VP(a,"updateDoc",n._key,e),Z1(i,[c.toMutation(n._key,Dr.exists(!0))])}function HP(n,e){const t=co(n.firestore,Ac),r=Qm(n),i=WP(n.converter,e);return Z1(t,[LP(H1(n.firestore),"addDoc",r._key,i,n.converter!==null,{}).toMutation(r._key,Dr.exists(!1))]).then((()=>r))}function GP(n,...e){var t,r,i;n=lt(n);let a={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Nw(e[c])||(a=e[c++]);const f={includeMetadataChanges:a.includeMetadataChanges,source:a.source};if(Nw(e[c])){const x=e[c];e[c]=(t=x.next)===null||t===void 0?void 0:t.bind(x),e[c+1]=(r=x.error)===null||r===void 0?void 0:r.bind(x),e[c+2]=(i=x.complete)===null||i===void 0?void 0:i.bind(x)}let p,g,v;if(n instanceof Lt)g=co(n.firestore,Ac),v=Rg(n._key.path),p={next:x=>{e[c]&&e[c](KP(g,n,x))},error:e[c+1],complete:e[c+2]};else{const x=co(n,Zh);g=co(x.firestore,Ac),v=x._query;const E=new J1(g);p={next:R=>{e[c]&&e[c](new Ca(g,E,x,R))},error:e[c+1],complete:e[c+2]},BP(n._query)}return(function(E,R,O,U){const M=new NP(U),Q=new lP(R,M,O);return E.asyncQueue.enqueueAndForget((async()=>sP(await vw(E),Q))),()=>{M.Ou(),E.asyncQueue.enqueueAndForget((async()=>iP(await vw(E),Q)))}})($1(g),v,f,p)}function Z1(n,e){return(function(r,i){const a=new lo;return r.asyncQueue.enqueueAndForget((async()=>yP(await RP(r),i,a))),a.promise})($1(n),e)}function KP(n,e,t){const r=t.docs.get(e._key),i=new J1(n);return new uo(n,i,e._key,r,new ac(t.hasPendingWrites,t.fromCache),e.converter)}function kw(){return new Qg("serverTimestamp")}function Rw(n){return new Yg("increment",n)}(function(e,t=!0){(function(i){Ha=i})(bi),fi(new ys("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),f=new Ac(new V2(r.getProvider("auth-internal")),new z2(c,r.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new xe(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ic(g.options.projectId,v)})(c,i),c);return a=Object.assign({useFetchStreams:t},a),f._setSettings(a),f}),"PUBLIC").setMultipleInstances(!0)),Yn(k0,R0,e),Yn(k0,R0,"esm2017")})();var Aw={};const Pw="@firebase/database",jw="1.0.20";/**
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
 */let eT="";function QP(n){eT=n}/**
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
 */class YP{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Gt(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:xc(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class XP{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return wr(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const tT=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new YP(e)}}catch{}return new XP},oo=tT("localStorage"),JP=tT("sessionStorage");/**
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
 */const Na=new Vh("@firebase/database"),nT=(function(){let n=1;return function(){return n++}})(),rT=function(n){const e=Nk(n),t=new Tk;t.update(e);const r=t.digest();return gg.encodeByteArray(r)},Qc=function(...n){let e="";for(let t=0;t<n.length;t++){const r=n[t];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=Qc.apply(null,r):typeof r=="object"?e+=Gt(r):e+=r,e+=" "}return e};let fc=null,Ow=!0;const ZP=function(n,e){se(!0,"Can't turn on custom loggers persistently."),Na.logLevel=ze.VERBOSE,fc=Na.log.bind(Na)},ln=function(...n){if(Ow===!0&&(Ow=!1,fc===null&&JP.get("logging_enabled")===!0&&ZP()),fc){const e=Qc.apply(null,n);fc(e)}},Yc=function(n){return function(...e){ln(n,...e)}},Xm=function(...n){const e="FIREBASE INTERNAL ERROR: "+Qc(...n);Na.error(e)},Es=function(...n){const e=`FIREBASE FATAL ERROR: ${Qc(...n)}`;throw Na.error(e),new Error(e)},Sn=function(...n){const e="FIREBASE WARNING: "+Qc(...n);Na.warn(e)},ej=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zg=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},tj=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Va="[MIN_NAME]",mo="[MAX_NAME]",Ya=function(n,e){if(n===e)return 0;if(n===Va||e===mo)return-1;if(e===Va||n===mo)return 1;{const t=Dw(n),r=Dw(e);return t!==null?r!==null?t-r===0?n.length-e.length:t-r:-1:r!==null?1:n<e?-1:1}},nj=function(n,e){return n===e?0:n<e?-1:1},Ql=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Gt(e))},e_=function(n){if(typeof n!="object"||n===null)return Gt(n);const e=[];for(const r in n)e.push(r);e.sort();let t="{";for(let r=0;r<e.length;r++)r!==0&&(t+=","),t+=Gt(e[r]),t+=":",t+=e_(n[e[r]]);return t+="}",t},sT=function(n,e){const t=n.length;if(t<=e)return[n];const r=[];for(let i=0;i<t;i+=e)i+e>t?r.push(n.substring(i,t)):r.push(n.substring(i,i+e));return r};function kn(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const iT=function(n){se(!Zg(n),"Invalid JSON number");const e=11,t=52,r=(1<<e-1)-1;let i,a,c,f,p;n===0?(a=0,c=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-r)?(f=Math.min(Math.floor(Math.log(n)/Math.LN2),r),a=f+r,c=Math.round(n*Math.pow(2,t-f)-Math.pow(2,t))):(a=0,c=Math.round(n/Math.pow(2,1-r-t))));const g=[];for(p=t;p;p-=1)g.push(c%2?1:0),c=Math.floor(c/2);for(p=e;p;p-=1)g.push(a%2?1:0),a=Math.floor(a/2);g.push(i?1:0),g.reverse();const v=g.join("");let x="";for(p=0;p<64;p+=8){let E=parseInt(v.substr(p,8),2).toString(16);E.length===1&&(E="0"+E),x=x+E}return x.toLowerCase()},rj=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},sj=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ij(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const r=new Error(n+" at "+e._path.toString()+": "+t);return r.code=n.toUpperCase(),r}const oj=new RegExp("^-?(0*)\\d{1,10}$"),aj=-2147483648,lj=2147483647,Dw=function(n){if(oj.test(n)){const e=Number(n);if(e>=aj&&e<=lj)return e}return null},Xa=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Sn("Exception was thrown by user callback.",t),e},Math.floor(0))}},cj=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},pc=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class uj{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,Tn(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(r=>this.appCheck=r)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){Sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class dj{constructor(e,t,r){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(ln("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,r):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Sn(e)}}class Bd{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Bd.OWNER="owner";/**
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
 */const t_="5",oT="v",aT="s",lT="r",cT="f",uT=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,dT="ls",hT="p",Jm="ac",fT="websocket",pT="long_polling";/**
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
 */class mT{constructor(e,t,r,i,a=!1,c="",f=!1,p=!1,g=null){this.secure=t,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=a,this.persistenceKey=c,this.includeNamespaceInQueryParams=f,this.isUsingEmulator=p,this.emulatorOptions=g,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=oo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&oo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function hj(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gT(n,e,t){se(typeof e=="string","typeof type must == string"),se(typeof t=="object","typeof params must == object");let r;if(e===fT)r=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===pT)r=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);hj(n)&&(t.ns=n.namespace);const i=[];return kn(t,(a,c)=>{i.push(a+"="+c)}),r+i.join("&")}/**
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
 */class fj{constructor(){this.counters_={}}incrementCounter(e,t=1){wr(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return nk(this.counters_)}}/**
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
 */const fm={},pm={};function n_(n){const e=n.toString();return fm[e]||(fm[e]=new fj),fm[e]}function pj(n,e){const t=n.toString();return pm[t]||(pm[t]=e()),pm[t]}/**
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
 */class mj{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Xa(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Mw="start",gj="close",_j="pLPCommand",yj="pRTLPCB",_T="id",yT="pw",vT="ser",vj="cb",wj="seg",xj="ts",Ej="d",Tj="dframe",wT=1870,xT=30,bj=wT-xT,Ij=25e3,Cj=3e4;class Ta{constructor(e,t,r,i,a,c,f){this.connId=e,this.repoInfo=t,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.transportSessionId=c,this.lastSessionId=f,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yc(e),this.stats_=n_(t),this.urlFn=p=>(this.appCheckToken&&(p[Jm]=this.appCheckToken),gT(t,pT,p))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new mj(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Cj)),tj(()=>{if(this.isClosed_)return;this.scriptTagHolder=new r_((...a)=>{const[c,f,p,g,v]=a;if(this.incrementIncomingBytes_(a),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,c===Mw)this.id=f,this.password=p;else if(c===gj)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+c)},(...a)=>{const[c,f]=a;this.incrementIncomingBytes_(a),this.myPacketOrderer.handleResponse(c,f)},()=>{this.onClosed_()},this.urlFn);const r={};r[Mw]="t",r[vT]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[vj]=this.scriptTagHolder.uniqueCallbackIdentifier),r[oT]=t_,this.transportSessionId&&(r[aT]=this.transportSessionId),this.lastSessionId&&(r[dT]=this.lastSessionId),this.applicationId&&(r[hT]=this.applicationId),this.appCheckToken&&(r[Jm]=this.appCheckToken),typeof location<"u"&&location.hostname&&uT.test(location.hostname)&&(r[lT]=cT);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ta.forceAllow_=!0}static forceDisallow(){Ta.forceDisallow_=!0}static isAvailable(){return Ta.forceAllow_?!0:!Ta.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!rj()&&!sj()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=uE(t),i=sT(r,bj);for(let a=0;a<i.length;a++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[a]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const r={};r[Tj]="t",r[_T]=e,r[yT]=t,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Gt(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class r_{constructor(e,t,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nT(),window[_j+this.uniqueCallbackIdentifier]=e,window[yj+this.uniqueCallbackIdentifier]=t,this.myIFrame=r_.createIFrame_();let a="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(a='<script>document.domain="'+document.domain+'";<\/script>');const c="<html><body>"+a+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(c),this.myIFrame.doc.close()}catch(f){ln("frame writing exception"),f.stack&&ln(f.stack),ln(f)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ln("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[_T]=this.myID,e[yT]=this.myPW,e[vT]=this.currentSerial;let t=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+xT+r.length<=wT;){const c=this.pendingSegs.shift();r=r+"&"+wj+i+"="+c.seg+"&"+xj+i+"="+c.ts+"&"+Ej+i+"="+c.d,i++}return t=t+r,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,r){this.pendingSegs.push({seg:e,ts:t,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const r=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(r,Math.floor(Ij)),a=()=>{clearTimeout(i),r()};this.addTag(e,a)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),t())},r.onerror=()=>{ln("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Nj=16384,Sj=45e3;let hh=null;typeof MozWebSocket<"u"?hh=MozWebSocket:typeof WebSocket<"u"&&(hh=WebSocket);class fr{constructor(e,t,r,i,a,c,f){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=a,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yc(this.connId),this.stats_=n_(t),this.connURL=fr.connectionURL_(t,c,f,i,r),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,r,i,a){const c={};return c[oT]=t_,typeof location<"u"&&location.hostname&&uT.test(location.hostname)&&(c[lT]=cT),t&&(c[aT]=t),r&&(c[dT]=r),i&&(c[Jm]=i),a&&(c[hT]=a),gT(e,fT,c)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,oo.set("previous_websocket_failure",!0);try{let r;pk(),this.mySock=new hh(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){fr.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(t);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&hh!==null&&!fr.forceDisallow_}static previouslyFailed(){return oo.isInMemoryStorage||oo.get("previous_websocket_failure")===!0}markConnectionHealthy(){oo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const r=xc(t);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(se(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const r=this.extractFrameCount_(t);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const t=Gt(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const r=sT(t,Nj);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Sj))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fr.responsesRequiredToBeHealthy=2;fr.healthyTimeout=3e4;/**
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
 */class Pc{static get ALL_TRANSPORTS(){return[Ta,fr]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=fr&&fr.isAvailable();let r=t&&!fr.previouslyFailed();if(e.webSocketOnly&&(t||Sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[fr];else{const i=this.transports_=[];for(const a of Pc.ALL_TRANSPORTS)a&&a.isAvailable()&&i.push(a);Pc.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Pc.globalTransportInitialized_=!1;/**
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
 */const kj=6e4,Rj=5e3,Aj=10*1024,Pj=100*1024,mm="t",Lw="d",jj="s",Vw="r",Oj="e",Fw="o",Uw="a",zw="n",Bw="p",Dj="h";class Mj{constructor(e,t,r,i,a,c,f,p,g,v){this.id=e,this.repoInfo_=t,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=a,this.onMessage_=c,this.onReady_=f,this.onDisconnect_=p,this.onKill_=g,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yc("c:"+this.id+":"),this.transportManager_=new Pc(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=pc(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Pj?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Aj?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(mm in e){const t=e[mm];t===Uw?this.upgradeIfSecondaryHealthy_():t===Vw?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Fw&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ql("t",e),r=Ql("d",e);if(t==="c")this.onSecondaryControl_(r);else if(t==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bw,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Uw,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:zw,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ql("t",e),r=Ql("d",e);t==="c"?this.onControl_(r):t==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ql(mm,e);if(Lw in e){const r=e[Lw];if(t===Dj){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===zw){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===jj?this.onConnectionShutdown_(r):t===Vw?this.onReset_(r):t===Oj?Xm("Server Error: "+r):t===Fw?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Xm("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),t_!==r&&Sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,r),pc(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(kj))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):pc(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Rj))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bw,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(oo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ET{put(e,t,r,i){}merge(e,t,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,r){}onDisconnectMerge(e,t,r){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class TT{constructor(e){this.allowedEvents_=e,this.listeners_={},se(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,t)}}on(e,t,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:r});const i=this.getInitialEvent(e);i&&t.apply(r,i)}off(e,t,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let a=0;a<i.length;a++)if(i[a].callback===t&&(!r||r===i[a].context)){i.splice(a,1);return}}validateEventType_(e){se(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class fh extends TT{static getInstance(){return new fh}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!vg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return se(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const $w=32,Ww=768;class st{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Xe(){return new st("")}function Ve(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function xi(n){return n.pieces_.length-n.pieceNum_}function at(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new st(n.pieces_,e)}function bT(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Lj(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function IT(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function CT(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new st(e,0)}function Mt(n,e){const t=[];for(let r=n.pieceNum_;r<n.pieces_.length;r++)t.push(n.pieces_[r]);if(e instanceof st)for(let r=e.pieceNum_;r<e.pieces_.length;r++)t.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&t.push(r[i])}return new st(t,0)}function Be(n){return n.pieceNum_>=n.pieces_.length}function Cn(n,e){const t=Ve(n),r=Ve(e);if(t===null)return e;if(t===r)return Cn(at(n),at(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function s_(n,e){if(xi(n)!==xi(e))return!1;for(let t=n.pieceNum_,r=e.pieceNum_;t<=n.pieces_.length;t++,r++)if(n.pieces_[t]!==e.pieces_[r])return!1;return!0}function pr(n,e){let t=n.pieceNum_,r=e.pieceNum_;if(xi(n)>xi(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[r])return!1;++t,++r}return!0}class Vj{constructor(e,t){this.errorPrefix_=t,this.parts_=IT(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Lh(this.parts_[r]);NT(this)}}function Fj(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Lh(e),NT(n)}function Uj(n){const e=n.parts_.pop();n.byteLength_-=Lh(e),n.parts_.length>0&&(n.byteLength_-=1)}function NT(n){if(n.byteLength_>Ww)throw new Error(n.errorPrefix_+"has a key path longer than "+Ww+" bytes ("+n.byteLength_+").");if(n.parts_.length>$w)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$w+") or object contains a cycle "+so(n))}function so(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class i_ extends TT{static getInstance(){return new i_}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}getInitialEvent(e){return se(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Yl=1e3,zj=300*1e3,qw=30*1e3,Bj=1.3,$j=3e4,Wj="server_kill",Hw=3;class gs extends ET{constructor(e,t,r,i,a,c,f,p){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=a,this.authTokenProvider_=c,this.appCheckTokenProvider_=f,this.authOverride_=p,this.id=gs.nextPersistentConnectionId_++,this.log_=Yc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Yl,this.maxReconnectDelay_=zj,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");i_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&fh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,r){const i=++this.requestNumber_,a={r:i,a:e,b:t};this.log_(Gt(a)),se(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(a),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const t=new Uc,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:c=>{const f=c.d;c.s==="ok"?t.resolve(f):t.reject(f)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const a=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(a),t.promise}listen(e,t,r,i){this.initConnection_();const a=e._queryIdentifier,c=e._path.toString();this.log_("Listen called for "+c+" "+a),this.listens.has(c)||this.listens.set(c,new Map),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),se(!this.listens.get(c).has(a),"listen() called twice for same path/queryId.");const f={onComplete:i,hashFn:t,query:e,tag:r};this.listens.get(c).set(a,f),this.connected_&&this.sendListen_(f)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(r)})}sendListen_(e){const t=e.query,r=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+r+" for "+i);const a={p:r},c="q";e.tag&&(a.q=t._queryObject,a.t=e.tag),a.h=e.hashFn(),this.sendRequest(c,a,f=>{const p=f.d,g=f.s;gs.warnOnListenWarnings_(p,t),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",f),g!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(g,p))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&wr(e,"w")){const r=ho(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',a=t._path.toString();Sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${a} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Ek(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=qw)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=xk(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(t,r,i=>{const a=i.s,c=i.d||"error";this.authToken_===e&&(a==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(a,c))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,r=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,r)})}unlisten(e,t){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),se(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,t)}sendUnlisten_(e,t,r,i){this.log_("Unlisten on "+e+" for "+t);const a={p:e},c="n";i&&(a.q=r,a.t=i),this.sendRequest(c,a)}onDisconnectPut(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:r})}onDisconnectMerge(e,t,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:r})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,r,i){const a={p:t,d:r};this.log_("onDisconnect "+e,a),this.sendRequest(e,a,c=>{i&&setTimeout(()=>{i(c.s,c.d)},Math.floor(0))})}put(e,t,r,i){this.putInternal("p",e,t,r,i)}merge(e,t,r,i){this.putInternal("m",e,t,r,i)}putInternal(e,t,r,i,a){this.initConnection_();const c={p:t,d:r};a!==void 0&&(c.h=a),this.outstandingPuts_.push({action:e,request:c,onComplete:i}),this.outstandingPutCount_++;const f=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(f):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,r,a=>{this.log_(t+" response",a),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(a.s,a.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,r=>{if(r.s!=="ok"){const a=r.d;this.log_("reportStats","Error sending stats: "+a)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Gt(e));const t=e.r,r=this.requestCBHash_[t];r&&(delete this.requestCBHash_[t],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Xm("Unrecognized action received from server: "+Gt(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){se(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Yl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Yl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>$j&&(this.reconnectDelay_=Yl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Bj)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+gs.nextConnectionId_++,a=this.lastSessionId;let c=!1,f=null;const p=function(){f?f.close():(c=!0,r())},g=function(x){se(f,"sendRequest call when we're not connected not allowed."),f.sendRequest(x)};this.realtime_={close:p,sendRequest:g};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[x,E]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);c?ln("getToken() completed but was canceled"):(ln("getToken() completed. Creating connection."),this.authToken_=x&&x.accessToken,this.appCheckToken_=E&&E.token,f=new Mj(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,r,R=>{Sn(R+" ("+this.repoInfo_.toString()+")"),this.interrupt(Wj)},a))}catch(x){this.log_("Failed to get token: "+x),c||(this.repoInfo_.nodeAdmin&&Sn(x),p())}}}interrupt(e){ln("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ln("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Cm(this.interruptReasons_)&&(this.reconnectDelay_=Yl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let r;t?r=t.map(a=>e_(a)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const r=new st(e).toString();let i;if(this.listens.has(r)){const a=this.listens.get(r);i=a.get(t),a.delete(t),a.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,t){ln("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hw&&(this.reconnectDelay_=qw,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){ln("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hw&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+eT.replace(/\./g,"-")]=1,vg()?e["framework.cordova"]=1:mE()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=fh.getInstance().currentlyOnline();return Cm(this.interruptReasons_)&&e}}gs.nextPersistentConnectionId_=0;gs.nextConnectionId_=0;/**
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
 */class rf{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const r=new Fe(Va,e),i=new Fe(Va,t);return this.compare(r,i)!==0}minPost(){return Fe.MIN}}/**
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
 */let kd;class ST extends rf{static get __EMPTY_NODE(){return kd}static set __EMPTY_NODE(e){kd=e}compare(e,t){return Ya(e.name,t.name)}isDefinedOn(e){throw Wa("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Fe.MIN}maxPost(){return new Fe(mo,kd)}makePost(e,t){return se(typeof e=="string","KeyIndex indexValue must always be a string."),new Fe(e,kd)}toString(){return".key"}}const Sa=new ST;/**
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
 */class Rd{constructor(e,t,r,i,a=null){this.isReverse_=i,this.resultGenerator_=a,this.nodeStack_=[];let c=1;for(;!e.isEmpty();)if(e=e,c=t?r(e.key,t):1,i&&(c*=-1),c<0)this.isReverse_?e=e.left:e=e.right;else if(c===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class qt{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??qt.RED,this.left=i??Nn.EMPTY_NODE,this.right=a??Nn.EMPTY_NODE}copy(e,t,r,i,a){return new qt(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return a<0?i=i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Nn.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let r,i;if(r=this,t(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),t(e,r.key)===0){if(r.right.isEmpty())return Nn.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}qt.RED=!0;qt.BLACK=!1;class qj{copy(e,t,r,i,a){return this}insert(e,t,r){return new qt(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Nn{constructor(e,t=Nn.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Nn(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,qt.BLACK,null,null))}remove(e){return new Nn(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,qt.BLACK,null,null))}get(e){let t,r=this.root_;for(;!r.isEmpty();){if(t=this.comparator_(e,r.key),t===0)return r.value;t<0?r=r.left:t>0&&(r=r.right)}return null}getPredecessorKey(e){let t,r=this.root_,i=null;for(;!r.isEmpty();)if(t=this.comparator_(e,r.key),t===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else t<0?r=r.left:t>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Rd(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Rd(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Rd(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Rd(this.root_,null,this.comparator_,!0,e)}}Nn.EMPTY_NODE=new qj;/**
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
 */function Hj(n,e){return Ya(n.name,e.name)}function o_(n,e){return Ya(n,e)}/**
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
 */let Zm;function Gj(n){Zm=n}const kT=function(n){return typeof n=="number"?"number:"+iT(n):"string:"+n},RT=function(n){if(n.isLeafNode()){const e=n.val();se(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wr(e,".sv"),"Priority must be a string or number.")}else se(n===Zm||n.isEmpty(),"priority of unexpected type.");se(n===Zm||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Gw;class $t{static set __childrenNodeConstructor(e){Gw=e}static get __childrenNodeConstructor(){return Gw}constructor(e,t=$t.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,se(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),RT(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new $t(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Be(e)?this:Ve(e)===".priority"?this.priorityNode_:$t.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:$t.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const r=Ve(e);return r===null?t:t.isEmpty()&&r!==".priority"?this:(se(r!==".priority"||xi(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,$t.__childrenNodeConstructor.EMPTY_NODE.updateChild(at(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+kT(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=iT(this.value_):e+=this.value_,this.lazyHash_=rT(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===$t.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof $t.__childrenNodeConstructor?-1:(se(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,r=typeof this.value_,i=$t.VALUE_TYPE_ORDER.indexOf(t),a=$t.VALUE_TYPE_ORDER.indexOf(r);return se(i>=0,"Unknown leaf type: "+t),se(a>=0,"Unknown leaf type: "+r),i===a?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:a-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}$t.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let AT,PT;function Kj(n){AT=n}function Qj(n){PT=n}class Yj extends rf{compare(e,t){const r=e.node.getPriority(),i=t.node.getPriority(),a=r.compareTo(i);return a===0?Ya(e.name,t.name):a}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Fe.MIN}maxPost(){return new Fe(mo,new $t("[PRIORITY-POST]",PT))}makePost(e,t){const r=AT(e);return new Fe(t,new $t("[PRIORITY-POST]",r))}toString(){return".priority"}}const vt=new Yj;/**
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
 */const Xj=Math.log(2);class Jj{constructor(e){const t=a=>parseInt(Math.log(a)/Xj,10),r=a=>parseInt(Array(a+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ph=function(n,e,t,r){n.sort(e);const i=function(p,g){const v=g-p;let x,E;if(v===0)return null;if(v===1)return x=n[p],E=t?t(x):x,new qt(E,x.node,qt.BLACK,null,null);{const R=parseInt(v/2,10)+p,O=i(p,R),U=i(R+1,g);return x=n[R],E=t?t(x):x,new qt(E,x.node,qt.BLACK,O,U)}},a=function(p){let g=null,v=null,x=n.length;const E=function(O,U){const M=x-O,Q=x;x-=O;const te=i(M+1,Q),le=n[M],G=t?t(le):le;R(new qt(G,le.node,U,null,te))},R=function(O){g?(g.left=O,g=O):(v=O,g=O)};for(let O=0;O<p.count;++O){const U=p.nextBitIsOne(),M=Math.pow(2,p.count-(O+1));U?E(M,qt.BLACK):(E(M,qt.BLACK),E(M,qt.RED))}return v},c=new Jj(n.length),f=a(c);return new Nn(r||e,f)};/**
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
 */let gm;const _a={};class fs{static get Default(){return se(_a&&vt,"ChildrenNode.ts has not been loaded"),gm=gm||new fs({".priority":_a},{".priority":vt}),gm}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ho(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Nn?t:null}hasIndex(e){return wr(this.indexSet_,e.toString())}addIndex(e,t){se(e!==Sa,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const a=t.getIterator(Fe.Wrap);let c=a.getNext();for(;c;)i=i||e.isDefinedOn(c.node),r.push(c),c=a.getNext();let f;i?f=ph(r,e.getCompare()):f=_a;const p=e.toString(),g=Object.assign({},this.indexSet_);g[p]=e;const v=Object.assign({},this.indexes_);return v[p]=f,new fs(v,g)}addToIndexes(e,t){const r=eh(this.indexes_,(i,a)=>{const c=ho(this.indexSet_,a);if(se(c,"Missing index implementation for "+a),i===_a)if(c.isDefinedOn(e.node)){const f=[],p=t.getIterator(Fe.Wrap);let g=p.getNext();for(;g;)g.name!==e.name&&f.push(g),g=p.getNext();return f.push(e),ph(f,c.getCompare())}else return _a;else{const f=t.get(e.name);let p=i;return f&&(p=p.remove(new Fe(e.name,f))),p.insert(e,e.node)}});return new fs(r,this.indexSet_)}removeFromIndexes(e,t){const r=eh(this.indexes_,i=>{if(i===_a)return i;{const a=t.get(e.name);return a?i.remove(new Fe(e.name,a)):i}});return new fs(r,this.indexSet_)}}/**
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
 */let Xl;class Se{static get EMPTY_NODE(){return Xl||(Xl=new Se(new Nn(o_),null,fs.Default))}constructor(e,t,r){this.children_=e,this.priorityNode_=t,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&RT(this.priorityNode_),this.children_.isEmpty()&&se(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Xl}updatePriority(e){return this.children_.isEmpty()?this:new Se(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Xl:t}}getChild(e){const t=Ve(e);return t===null?this:this.getImmediateChild(t).getChild(at(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(se(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const r=new Fe(e,t);let i,a;t.isEmpty()?(i=this.children_.remove(e),a=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,t),a=this.indexMap_.addToIndexes(r,this.children_));const c=i.isEmpty()?Xl:this.priorityNode_;return new Se(i,c,a)}}updateChild(e,t){const r=Ve(e);if(r===null)return t;{se(Ve(e)!==".priority"||xi(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(at(e),t);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let r=0,i=0,a=!0;if(this.forEachChild(vt,(c,f)=>{t[c]=f.val(e),r++,a&&Se.INTEGER_REGEXP_.test(c)?i=Math.max(i,Number(c)):a=!1}),!e&&a&&i<2*r){const c=[];for(const f in t)c[f]=t[f];return c}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+kT(this.getPriority().val())+":"),this.forEachChild(vt,(t,r)=>{const i=r.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":rT(e)}return this.lazyHash_}getPredecessorChildName(e,t,r){const i=this.resolveIndex_(r);if(i){const a=i.getPredecessorKey(new Fe(e,t));return a?a.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Fe(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const r=t.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Fe(t,this.children_.get(t)):null}forEachChild(e,t){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,Fe.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)<0;)i.getNext(),a=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const r=this.resolveIndex_(t);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,Fe.Wrap);let a=i.peek();for(;a!=null&&t.compare(a,e)>0;)i.getNext(),a=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Xc?-1:0}withIndex(e){if(e===Sa||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Se(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Sa||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const r=this.getIterator(vt),i=t.getIterator(vt);let a=r.getNext(),c=i.getNext();for(;a&&c;){if(a.name!==c.name||!a.node.equals(c.node))return!1;a=r.getNext(),c=i.getNext()}return a===null&&c===null}else return!1;else return!1}}resolveIndex_(e){return e===Sa?null:this.indexMap_.get(e.toString())}}Se.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zj extends Se{constructor(){super(new Nn(o_),Se.EMPTY_NODE,fs.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Se.EMPTY_NODE}isEmpty(){return!1}}const Xc=new Zj;Object.defineProperties(Fe,{MIN:{value:new Fe(Va,Se.EMPTY_NODE)},MAX:{value:new Fe(mo,Xc)}});ST.__EMPTY_NODE=Se.EMPTY_NODE;$t.__childrenNodeConstructor=Se;Gj(Xc);Qj(Xc);/**
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
 */const e4=!0;function Ht(n,e=null){if(n===null)return Se.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),se(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new $t(t,Ht(e))}if(!(n instanceof Array)&&e4){const t=[];let r=!1;if(kn(n,(c,f)=>{if(c.substring(0,1)!=="."){const p=Ht(f);p.isEmpty()||(r=r||!p.getPriority().isEmpty(),t.push(new Fe(c,p)))}}),t.length===0)return Se.EMPTY_NODE;const a=ph(t,Hj,c=>c.name,o_);if(r){const c=ph(t,vt.getCompare());return new Se(a,Ht(e),new fs({".priority":c},{".priority":vt}))}else return new Se(a,Ht(e),fs.Default)}else{let t=Se.EMPTY_NODE;return kn(n,(r,i)=>{if(wr(n,r)&&r.substring(0,1)!=="."){const a=Ht(i);(a.isLeafNode()||!a.isEmpty())&&(t=t.updateImmediateChild(r,a))}}),t.updatePriority(Ht(e))}}Kj(Ht);/**
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
 */class t4 extends rf{constructor(e){super(),this.indexPath_=e,se(!Be(e)&&Ve(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const r=this.extractChild(e.node),i=this.extractChild(t.node),a=r.compareTo(i);return a===0?Ya(e.name,t.name):a}makePost(e,t){const r=Ht(e),i=Se.EMPTY_NODE.updateChild(this.indexPath_,r);return new Fe(t,i)}maxPost(){const e=Se.EMPTY_NODE.updateChild(this.indexPath_,Xc);return new Fe(mo,e)}toString(){return IT(this.indexPath_,0).join("/")}}/**
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
 */class n4 extends rf{compare(e,t){const r=e.node.compareTo(t.node);return r===0?Ya(e.name,t.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Fe.MIN}maxPost(){return Fe.MAX}makePost(e,t){const r=Ht(e);return new Fe(t,r)}toString(){return".value"}}const r4=new n4;/**
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
 */function jT(n){return{type:"value",snapshotNode:n}}function Fa(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function jc(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Oc(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function s4(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class a_{constructor(e){this.index_=e}updateChild(e,t,r,i,a,c){se(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const f=e.getImmediateChild(t);return f.getChild(i).equals(r.getChild(i))&&f.isEmpty()===r.isEmpty()||(c!=null&&(r.isEmpty()?e.hasChild(t)?c.trackChildChange(jc(t,f)):se(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):f.isEmpty()?c.trackChildChange(Fa(t,r)):c.trackChildChange(Oc(t,r,f))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(t,r).withIndex(this.index_)}updateFullNode(e,t,r){return r!=null&&(e.isLeafNode()||e.forEachChild(vt,(i,a)=>{t.hasChild(i)||r.trackChildChange(jc(i,a))}),t.isLeafNode()||t.forEachChild(vt,(i,a)=>{if(e.hasChild(i)){const c=e.getImmediateChild(i);c.equals(a)||r.trackChildChange(Oc(i,a,c))}else r.trackChildChange(Fa(i,a))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Se.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Dc{constructor(e){this.indexedFilter_=new a_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Dc.getStartPost_(e),this.endPost_=Dc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&r}updateChild(e,t,r,i,a,c){return this.matches(new Fe(t,r))||(r=Se.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,r,i,a,c)}updateFullNode(e,t,r){t.isLeafNode()&&(t=Se.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(Se.EMPTY_NODE);const a=this;return t.forEachChild(vt,(c,f)=>{a.matches(new Fe(c,f))||(i=i.updateImmediateChild(c,Se.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class i4{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=t=>{const r=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Dc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,r,i,a,c){return this.rangedFilter_.matches(new Fe(t,r))||(r=Se.EMPTY_NODE),e.getImmediateChild(t).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,r,i,a,c):this.fullLimitUpdateChild_(e,t,r,a,c)}updateFullNode(e,t,r){let i;if(t.isLeafNode()||t.isEmpty())i=Se.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=Se.EMPTY_NODE.withIndex(this.index_);let a;this.reverse_?a=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):a=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let c=0;for(;a.hasNext()&&c<this.limit_;){const f=a.getNext();if(this.withinDirectionalStart(f))if(this.withinDirectionalEnd(f))i=i.updateImmediateChild(f.name,f.node),c++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(Se.EMPTY_NODE);let a;this.reverse_?a=i.getReverseIterator(this.index_):a=i.getIterator(this.index_);let c=0;for(;a.hasNext();){const f=a.getNext();c<this.limit_&&this.withinDirectionalStart(f)&&this.withinDirectionalEnd(f)?c++:i=i.updateImmediateChild(f.name,Se.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,r,i,a){let c;if(this.reverse_){const x=this.index_.getCompare();c=(E,R)=>x(R,E)}else c=this.index_.getCompare();const f=e;se(f.numChildren()===this.limit_,"");const p=new Fe(t,r),g=this.reverse_?f.getFirstChild(this.index_):f.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(f.hasChild(t)){const x=f.getImmediateChild(t);let E=i.getChildAfterChild(this.index_,g,this.reverse_);for(;E!=null&&(E.name===t||f.hasChild(E.name));)E=i.getChildAfterChild(this.index_,E,this.reverse_);const R=E==null?1:c(E,p);if(v&&!r.isEmpty()&&R>=0)return a?.trackChildChange(Oc(t,r,x)),f.updateImmediateChild(t,r);{a?.trackChildChange(jc(t,x));const U=f.updateImmediateChild(t,Se.EMPTY_NODE);return E!=null&&this.rangedFilter_.matches(E)?(a?.trackChildChange(Fa(E.name,E.node)),U.updateImmediateChild(E.name,E.node)):U}}else return r.isEmpty()?e:v&&c(g,p)>=0?(a!=null&&(a.trackChildChange(jc(g.name,g.node)),a.trackChildChange(Fa(t,r))),f.updateImmediateChild(t,r).updateImmediateChild(g.name,Se.EMPTY_NODE)):e}}/**
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
 */class l_{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=vt}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return se(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return se(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Va}hasEnd(){return this.endSet_}getIndexEndValue(){return se(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return se(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mo}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return se(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===vt}copy(){const e=new l_;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function o4(n){return n.loadsAllData()?new a_(n.getIndex()):n.hasLimit()?new i4(n):new Dc(n)}function Kw(n){const e={};if(n.isDefault())return e;let t;if(n.index_===vt?t="$priority":n.index_===r4?t="$value":n.index_===Sa?t="$key":(se(n.index_ instanceof t4,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Gt(t),n.startSet_){const r=n.startAfterSet_?"startAfter":"startAt";e[r]=Gt(n.indexStartValue_),n.startNameSet_&&(e[r]+=","+Gt(n.indexStartName_))}if(n.endSet_){const r=n.endBeforeSet_?"endBefore":"endAt";e[r]=Gt(n.indexEndValue_),n.endNameSet_&&(e[r]+=","+Gt(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Qw(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==vt&&(e.i=n.index_.toString()),e}/**
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
 */class mh extends ET{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(se(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Yc("p:rest:"),this.listens_={}}listen(e,t,r,i){const a=e._path.toString();this.log_("Listen called for "+a+" "+e._queryIdentifier);const c=mh.getListenId_(e,r),f={};this.listens_[c]=f;const p=Kw(e._queryParams);this.restRequest_(a+".json",p,(g,v)=>{let x=v;if(g===404&&(x=null,g=null),g===null&&this.onDataUpdate_(a,x,!1,r),ho(this.listens_,c)===f){let E;g?g===401?E="permission_denied":E="rest_error:"+g:E="ok",i(E,null)}})}unlisten(e,t){const r=mh.getListenId_(e,t);delete this.listens_[r]}get(e){const t=Kw(e._queryParams),r=e._path.toString(),i=new Uc;return this.restRequest_(r+".json",t,(a,c)=>{let f=c;a===404&&(f=null,a=null),a===null?(this.onDataUpdate_(r,f,!1,null),i.resolve(f)):i.reject(new Error(f))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},r){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,a])=>{i&&i.accessToken&&(t.auth=i.accessToken),a&&a.token&&(t.ac=a.token);const c=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+qa(t);this.log_("Sending REST request for "+c);const f=new XMLHttpRequest;f.onreadystatechange=()=>{if(r&&f.readyState===4){this.log_("REST Response for "+c+" received. status:",f.status,"response:",f.responseText);let p=null;if(f.status>=200&&f.status<300){try{p=xc(f.responseText)}catch{Sn("Failed to parse JSON response for "+c+": "+f.responseText)}r(null,p)}else f.status!==401&&f.status!==404&&Sn("Got unsuccessful REST response for "+c+" Status: "+f.status),r(f.status);r=null}},f.open("GET",c,!0),f.send()})}}/**
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
 */class a4{constructor(){this.rootNode_=Se.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function gh(){return{value:null,children:new Map}}function OT(n,e,t){if(Be(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const r=Ve(e);n.children.has(r)||n.children.set(r,gh());const i=n.children.get(r);e=at(e),OT(i,e,t)}}function eg(n,e,t){n.value!==null?t(e,n.value):l4(n,(r,i)=>{const a=new st(e.toString()+"/"+r);eg(i,a,t)})}function l4(n,e){n.children.forEach((t,r)=>{e(r,t)})}/**
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
 */class c4{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&kn(this.last_,(r,i)=>{t[r]=t[r]-i}),this.last_=e,t}}/**
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
 */const Yw=10*1e3,u4=30*1e3,d4=300*1e3;class h4{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new c4(e);const r=Yw+(u4-Yw)*Math.random();pc(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),t={};let r=!1;kn(e,(i,a)=>{a>0&&wr(this.statsToReport_,i)&&(t[i]=a,r=!0)}),r&&this.server_.reportStats(t),pc(this.reportStats_.bind(this),Math.floor(Math.random()*2*d4))}}/**
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
 */var mr;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(mr||(mr={}));function DT(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function c_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function u_(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class _h{constructor(e,t,r){this.path=e,this.affectedTree=t,this.revert=r,this.type=mr.ACK_USER_WRITE,this.source=DT()}operationForChild(e){if(Be(this.path)){if(this.affectedTree.value!=null)return se(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new st(e));return new _h(Xe(),t,this.revert)}}else return se(Ve(this.path)===e,"operationForChild called for unrelated child."),new _h(at(this.path),this.affectedTree,this.revert)}}/**
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
 */class Mc{constructor(e,t){this.source=e,this.path=t,this.type=mr.LISTEN_COMPLETE}operationForChild(e){return Be(this.path)?new Mc(this.source,Xe()):new Mc(this.source,at(this.path))}}/**
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
 */class go{constructor(e,t,r){this.source=e,this.path=t,this.snap=r,this.type=mr.OVERWRITE}operationForChild(e){return Be(this.path)?new go(this.source,Xe(),this.snap.getImmediateChild(e)):new go(this.source,at(this.path),this.snap)}}/**
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
 */class Lc{constructor(e,t,r){this.source=e,this.path=t,this.children=r,this.type=mr.MERGE}operationForChild(e){if(Be(this.path)){const t=this.children.subtree(new st(e));return t.isEmpty()?null:t.value?new go(this.source,Xe(),t.value):new Lc(this.source,Xe(),t)}else return se(Ve(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Lc(this.source,at(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class _o{constructor(e,t,r){this.node_=e,this.fullyInitialized_=t,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Be(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ve(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class f4{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function p4(n,e,t,r){const i=[],a=[];return e.forEach(c=>{c.type==="child_changed"&&n.index_.indexedValueChanged(c.oldSnap,c.snapshotNode)&&a.push(s4(c.childName,c.snapshotNode))}),Jl(n,i,"child_removed",e,r,t),Jl(n,i,"child_added",e,r,t),Jl(n,i,"child_moved",a,r,t),Jl(n,i,"child_changed",e,r,t),Jl(n,i,"value",e,r,t),i}function Jl(n,e,t,r,i,a){const c=r.filter(f=>f.type===t);c.sort((f,p)=>g4(n,f,p)),c.forEach(f=>{const p=m4(n,f,a);i.forEach(g=>{g.respondsTo(f.type)&&e.push(g.createEvent(p,n.query_))})})}function m4(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function g4(n,e,t){if(e.childName==null||t.childName==null)throw Wa("Should only compare child_ events.");const r=new Fe(e.childName,e.snapshotNode),i=new Fe(t.childName,t.snapshotNode);return n.index_.compare(r,i)}/**
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
 */function sf(n,e){return{eventCache:n,serverCache:e}}function mc(n,e,t,r){return sf(new _o(e,t,r),n.serverCache)}function MT(n,e,t,r){return sf(n.eventCache,new _o(e,t,r))}function tg(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function yo(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let _m;const _4=()=>(_m||(_m=new Nn(nj)),_m);class ht{static fromObject(e){let t=new ht(null);return kn(e,(r,i)=>{t=t.set(new st(r),i)}),t}constructor(e,t=_4()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Xe(),value:this.value};if(Be(e))return null;{const r=Ve(e),i=this.children.get(r);if(i!==null){const a=i.findRootMostMatchingPathAndValue(at(e),t);return a!=null?{path:Mt(new st(r),a.path),value:a.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Be(e))return this;{const t=Ve(e),r=this.children.get(t);return r!==null?r.subtree(at(e)):new ht(null)}}set(e,t){if(Be(e))return new ht(t,this.children);{const r=Ve(e),a=(this.children.get(r)||new ht(null)).set(at(e),t),c=this.children.insert(r,a);return new ht(this.value,c)}}remove(e){if(Be(e))return this.children.isEmpty()?new ht(null):new ht(null,this.children);{const t=Ve(e),r=this.children.get(t);if(r){const i=r.remove(at(e));let a;return i.isEmpty()?a=this.children.remove(t):a=this.children.insert(t,i),this.value===null&&a.isEmpty()?new ht(null):new ht(this.value,a)}else return this}}get(e){if(Be(e))return this.value;{const t=Ve(e),r=this.children.get(t);return r?r.get(at(e)):null}}setTree(e,t){if(Be(e))return t;{const r=Ve(e),a=(this.children.get(r)||new ht(null)).setTree(at(e),t);let c;return a.isEmpty()?c=this.children.remove(r):c=this.children.insert(r,a),new ht(this.value,c)}}fold(e){return this.fold_(Xe(),e)}fold_(e,t){const r={};return this.children.inorderTraversal((i,a)=>{r[i]=a.fold_(Mt(e,i),t)}),t(e,this.value,r)}findOnPath(e,t){return this.findOnPath_(e,Xe(),t)}findOnPath_(e,t,r){const i=this.value?r(t,this.value):!1;if(i)return i;if(Be(e))return null;{const a=Ve(e),c=this.children.get(a);return c?c.findOnPath_(at(e),Mt(t,a),r):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Xe(),t)}foreachOnPath_(e,t,r){if(Be(e))return this;{this.value&&r(t,this.value);const i=Ve(e),a=this.children.get(i);return a?a.foreachOnPath_(at(e),Mt(t,i),r):new ht(null)}}foreach(e){this.foreach_(Xe(),e)}foreach_(e,t){this.children.inorderTraversal((r,i)=>{i.foreach_(Mt(e,r),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,r)=>{r.value&&e(t,r.value)})}}/**
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
 */class yr{constructor(e){this.writeTree_=e}static empty(){return new yr(new ht(null))}}function gc(n,e,t){if(Be(e))return new yr(new ht(t));{const r=n.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let a=r.value;const c=Cn(i,e);return a=a.updateChild(c,t),new yr(n.writeTree_.set(i,a))}else{const i=new ht(t),a=n.writeTree_.setTree(e,i);return new yr(a)}}}function Xw(n,e,t){let r=n;return kn(t,(i,a)=>{r=gc(r,Mt(e,i),a)}),r}function Jw(n,e){if(Be(e))return yr.empty();{const t=n.writeTree_.setTree(e,new ht(null));return new yr(t)}}function ng(n,e){return To(n,e)!=null}function To(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Cn(t.path,e)):null}function Zw(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(vt,(r,i)=>{e.push(new Fe(r,i))}):n.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new Fe(r,i.value))}),e}function di(n,e){if(Be(e))return n;{const t=To(n,e);return t!=null?new yr(new ht(t)):new yr(n.writeTree_.subtree(e))}}function rg(n){return n.writeTree_.isEmpty()}function Ua(n,e){return LT(Xe(),n.writeTree_,e)}function LT(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let r=null;return e.children.inorderTraversal((i,a)=>{i===".priority"?(se(a.value!==null,"Priority writes must always be leaf nodes"),r=a.value):t=LT(Mt(n,i),a,t)}),!t.getChild(n).isEmpty()&&r!==null&&(t=t.updateChild(Mt(n,".priority"),r)),t}}/**
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
 */function d_(n,e){return zT(e,n)}function y4(n,e,t,r,i){se(r>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:r,visible:i}),i&&(n.visibleWrites=gc(n.visibleWrites,e,t)),n.lastWriteId=r}function v4(n,e){for(let t=0;t<n.allWrites.length;t++){const r=n.allWrites[t];if(r.writeId===e)return r}return null}function w4(n,e){const t=n.allWrites.findIndex(f=>f.writeId===e);se(t>=0,"removeWrite called with nonexistent writeId.");const r=n.allWrites[t];n.allWrites.splice(t,1);let i=r.visible,a=!1,c=n.allWrites.length-1;for(;i&&c>=0;){const f=n.allWrites[c];f.visible&&(c>=t&&x4(f,r.path)?i=!1:pr(r.path,f.path)&&(a=!0)),c--}if(i){if(a)return E4(n),!0;if(r.snap)n.visibleWrites=Jw(n.visibleWrites,r.path);else{const f=r.children;kn(f,p=>{n.visibleWrites=Jw(n.visibleWrites,Mt(r.path,p))})}return!0}else return!1}function x4(n,e){if(n.snap)return pr(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&pr(Mt(n.path,t),e))return!0;return!1}function E4(n){n.visibleWrites=VT(n.allWrites,T4,Xe()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function T4(n){return n.visible}function VT(n,e,t){let r=yr.empty();for(let i=0;i<n.length;++i){const a=n[i];if(e(a)){const c=a.path;let f;if(a.snap)pr(t,c)?(f=Cn(t,c),r=gc(r,f,a.snap)):pr(c,t)&&(f=Cn(c,t),r=gc(r,Xe(),a.snap.getChild(f)));else if(a.children){if(pr(t,c))f=Cn(t,c),r=Xw(r,f,a.children);else if(pr(c,t))if(f=Cn(c,t),Be(f))r=Xw(r,Xe(),a.children);else{const p=ho(a.children,Ve(f));if(p){const g=p.getChild(at(f));r=gc(r,Xe(),g)}}}else throw Wa("WriteRecord should have .snap or .children")}}return r}function FT(n,e,t,r,i){if(!r&&!i){const a=To(n.visibleWrites,e);if(a!=null)return a;{const c=di(n.visibleWrites,e);if(rg(c))return t;if(t==null&&!ng(c,Xe()))return null;{const f=t||Se.EMPTY_NODE;return Ua(c,f)}}}else{const a=di(n.visibleWrites,e);if(!i&&rg(a))return t;if(!i&&t==null&&!ng(a,Xe()))return null;{const c=function(g){return(g.visible||i)&&(!r||!~r.indexOf(g.writeId))&&(pr(g.path,e)||pr(e,g.path))},f=VT(n.allWrites,c,e),p=t||Se.EMPTY_NODE;return Ua(f,p)}}}function b4(n,e,t){let r=Se.EMPTY_NODE;const i=To(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(vt,(a,c)=>{r=r.updateImmediateChild(a,c)}),r;if(t){const a=di(n.visibleWrites,e);return t.forEachChild(vt,(c,f)=>{const p=Ua(di(a,new st(c)),f);r=r.updateImmediateChild(c,p)}),Zw(a).forEach(c=>{r=r.updateImmediateChild(c.name,c.node)}),r}else{const a=di(n.visibleWrites,e);return Zw(a).forEach(c=>{r=r.updateImmediateChild(c.name,c.node)}),r}}function I4(n,e,t,r,i){se(r||i,"Either existingEventSnap or existingServerSnap must exist");const a=Mt(e,t);if(ng(n.visibleWrites,a))return null;{const c=di(n.visibleWrites,a);return rg(c)?i.getChild(t):Ua(c,i.getChild(t))}}function C4(n,e,t,r){const i=Mt(e,t),a=To(n.visibleWrites,i);if(a!=null)return a;if(r.isCompleteForChild(t)){const c=di(n.visibleWrites,i);return Ua(c,r.getNode().getImmediateChild(t))}else return null}function N4(n,e){return To(n.visibleWrites,e)}function S4(n,e,t,r,i,a,c){let f;const p=di(n.visibleWrites,e),g=To(p,Xe());if(g!=null)f=g;else if(t!=null)f=Ua(p,t);else return[];if(f=f.withIndex(c),!f.isEmpty()&&!f.isLeafNode()){const v=[],x=c.getCompare(),E=a?f.getReverseIteratorFrom(r,c):f.getIteratorFrom(r,c);let R=E.getNext();for(;R&&v.length<i;)x(R,r)!==0&&v.push(R),R=E.getNext();return v}else return[]}function k4(){return{visibleWrites:yr.empty(),allWrites:[],lastWriteId:-1}}function yh(n,e,t,r){return FT(n.writeTree,n.treePath,e,t,r)}function h_(n,e){return b4(n.writeTree,n.treePath,e)}function ex(n,e,t,r){return I4(n.writeTree,n.treePath,e,t,r)}function vh(n,e){return N4(n.writeTree,Mt(n.treePath,e))}function R4(n,e,t,r,i,a){return S4(n.writeTree,n.treePath,e,t,r,i,a)}function f_(n,e,t){return C4(n.writeTree,n.treePath,e,t)}function UT(n,e){return zT(Mt(n.treePath,e),n.writeTree)}function zT(n,e){return{treePath:n,writeTree:e}}/**
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
 */class A4{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,r=e.childName;se(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),se(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const a=i.type;if(t==="child_added"&&a==="child_removed")this.changeMap.set(r,Oc(r,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&a==="child_added")this.changeMap.delete(r);else if(t==="child_removed"&&a==="child_changed")this.changeMap.set(r,jc(r,i.oldSnap));else if(t==="child_changed"&&a==="child_added")this.changeMap.set(r,Fa(r,e.snapshotNode));else if(t==="child_changed"&&a==="child_changed")this.changeMap.set(r,Oc(r,e.snapshotNode,i.oldSnap));else throw Wa("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class P4{getCompleteChild(e){return null}getChildAfterChild(e,t,r){return null}}const BT=new P4;class p_{constructor(e,t,r=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=r}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new _o(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return f_(this.writes_,e,r)}}getChildAfterChild(e,t,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yo(this.viewCache_),a=R4(this.writes_,i,t,1,r,e);return a.length===0?null:a[0]}}/**
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
 */function j4(n){return{filter:n}}function O4(n,e){se(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),se(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function D4(n,e,t,r,i){const a=new A4;let c,f;if(t.type===mr.OVERWRITE){const g=t;g.source.fromUser?c=sg(n,e,g.path,g.snap,r,i,a):(se(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered()&&!Be(g.path),c=wh(n,e,g.path,g.snap,r,i,f,a))}else if(t.type===mr.MERGE){const g=t;g.source.fromUser?c=L4(n,e,g.path,g.children,r,i,a):(se(g.source.fromServer,"Unknown source."),f=g.source.tagged||e.serverCache.isFiltered(),c=ig(n,e,g.path,g.children,r,i,f,a))}else if(t.type===mr.ACK_USER_WRITE){const g=t;g.revert?c=U4(n,e,g.path,r,i,a):c=V4(n,e,g.path,g.affectedTree,r,i,a)}else if(t.type===mr.LISTEN_COMPLETE)c=F4(n,e,t.path,r,a);else throw Wa("Unknown operation type: "+t.type);const p=a.getChanges();return M4(e,c,p),{viewCache:c,changes:p}}function M4(n,e,t){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),a=tg(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!r.getNode().equals(a)||!r.getNode().getPriority().equals(a.getPriority()))&&t.push(jT(tg(e)))}}function $T(n,e,t,r,i,a){const c=e.eventCache;if(vh(r,t)!=null)return e;{let f,p;if(Be(t))if(se(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const g=yo(e),v=g instanceof Se?g:Se.EMPTY_NODE,x=h_(r,v);f=n.filter.updateFullNode(e.eventCache.getNode(),x,a)}else{const g=yh(r,yo(e));f=n.filter.updateFullNode(e.eventCache.getNode(),g,a)}else{const g=Ve(t);if(g===".priority"){se(xi(t)===1,"Can't have a priority with additional path components");const v=c.getNode();p=e.serverCache.getNode();const x=ex(r,t,v,p);x!=null?f=n.filter.updatePriority(v,x):f=c.getNode()}else{const v=at(t);let x;if(c.isCompleteForChild(g)){p=e.serverCache.getNode();const E=ex(r,t,c.getNode(),p);E!=null?x=c.getNode().getImmediateChild(g).updateChild(v,E):x=c.getNode().getImmediateChild(g)}else x=f_(r,g,e.serverCache);x!=null?f=n.filter.updateChild(c.getNode(),g,x,v,i,a):f=c.getNode()}}return mc(e,f,c.isFullyInitialized()||Be(t),n.filter.filtersNodes())}}function wh(n,e,t,r,i,a,c,f){const p=e.serverCache;let g;const v=c?n.filter:n.filter.getIndexedFilter();if(Be(t))g=v.updateFullNode(p.getNode(),r,null);else if(v.filtersNodes()&&!p.isFiltered()){const R=p.getNode().updateChild(t,r);g=v.updateFullNode(p.getNode(),R,null)}else{const R=Ve(t);if(!p.isCompleteForPath(t)&&xi(t)>1)return e;const O=at(t),M=p.getNode().getImmediateChild(R).updateChild(O,r);R===".priority"?g=v.updatePriority(p.getNode(),M):g=v.updateChild(p.getNode(),R,M,O,BT,null)}const x=MT(e,g,p.isFullyInitialized()||Be(t),v.filtersNodes()),E=new p_(i,x,a);return $T(n,x,t,i,E,f)}function sg(n,e,t,r,i,a,c){const f=e.eventCache;let p,g;const v=new p_(i,e,a);if(Be(t))g=n.filter.updateFullNode(e.eventCache.getNode(),r,c),p=mc(e,g,!0,n.filter.filtersNodes());else{const x=Ve(t);if(x===".priority")g=n.filter.updatePriority(e.eventCache.getNode(),r),p=mc(e,g,f.isFullyInitialized(),f.isFiltered());else{const E=at(t),R=f.getNode().getImmediateChild(x);let O;if(Be(E))O=r;else{const U=v.getCompleteChild(x);U!=null?bT(E)===".priority"&&U.getChild(CT(E)).isEmpty()?O=U:O=U.updateChild(E,r):O=Se.EMPTY_NODE}if(R.equals(O))p=e;else{const U=n.filter.updateChild(f.getNode(),x,O,E,v,c);p=mc(e,U,f.isFullyInitialized(),n.filter.filtersNodes())}}}return p}function tx(n,e){return n.eventCache.isCompleteForChild(e)}function L4(n,e,t,r,i,a,c){let f=e;return r.foreach((p,g)=>{const v=Mt(t,p);tx(e,Ve(v))&&(f=sg(n,f,v,g,i,a,c))}),r.foreach((p,g)=>{const v=Mt(t,p);tx(e,Ve(v))||(f=sg(n,f,v,g,i,a,c))}),f}function nx(n,e,t){return t.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function ig(n,e,t,r,i,a,c,f){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,g;Be(t)?g=r:g=new ht(null).setTree(t,r);const v=e.serverCache.getNode();return g.children.inorderTraversal((x,E)=>{if(v.hasChild(x)){const R=e.serverCache.getNode().getImmediateChild(x),O=nx(n,R,E);p=wh(n,p,new st(x),O,i,a,c,f)}}),g.children.inorderTraversal((x,E)=>{const R=!e.serverCache.isCompleteForChild(x)&&E.value===null;if(!v.hasChild(x)&&!R){const O=e.serverCache.getNode().getImmediateChild(x),U=nx(n,O,E);p=wh(n,p,new st(x),U,i,a,c,f)}}),p}function V4(n,e,t,r,i,a,c){if(vh(i,t)!=null)return e;const f=e.serverCache.isFiltered(),p=e.serverCache;if(r.value!=null){if(Be(t)&&p.isFullyInitialized()||p.isCompleteForPath(t))return wh(n,e,t,p.getNode().getChild(t),i,a,f,c);if(Be(t)){let g=new ht(null);return p.getNode().forEachChild(Sa,(v,x)=>{g=g.set(new st(v),x)}),ig(n,e,t,g,i,a,f,c)}else return e}else{let g=new ht(null);return r.foreach((v,x)=>{const E=Mt(t,v);p.isCompleteForPath(E)&&(g=g.set(v,p.getNode().getChild(E)))}),ig(n,e,t,g,i,a,f,c)}}function F4(n,e,t,r,i){const a=e.serverCache,c=MT(e,a.getNode(),a.isFullyInitialized()||Be(t),a.isFiltered());return $T(n,c,t,r,BT,i)}function U4(n,e,t,r,i,a){let c;if(vh(r,t)!=null)return e;{const f=new p_(r,e,i),p=e.eventCache.getNode();let g;if(Be(t)||Ve(t)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=yh(r,yo(e));else{const x=e.serverCache.getNode();se(x instanceof Se,"serverChildren would be complete if leaf node"),v=h_(r,x)}v=v,g=n.filter.updateFullNode(p,v,a)}else{const v=Ve(t);let x=f_(r,v,e.serverCache);x==null&&e.serverCache.isCompleteForChild(v)&&(x=p.getImmediateChild(v)),x!=null?g=n.filter.updateChild(p,v,x,at(t),f,a):e.eventCache.getNode().hasChild(v)?g=n.filter.updateChild(p,v,Se.EMPTY_NODE,at(t),f,a):g=p,g.isEmpty()&&e.serverCache.isFullyInitialized()&&(c=yh(r,yo(e)),c.isLeafNode()&&(g=n.filter.updateFullNode(g,c,a)))}return c=e.serverCache.isFullyInitialized()||vh(r,Xe())!=null,mc(e,g,c,n.filter.filtersNodes())}}/**
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
 */class z4{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new a_(r.getIndex()),a=o4(r);this.processor_=j4(a);const c=t.serverCache,f=t.eventCache,p=i.updateFullNode(Se.EMPTY_NODE,c.getNode(),null),g=a.updateFullNode(Se.EMPTY_NODE,f.getNode(),null),v=new _o(p,c.isFullyInitialized(),i.filtersNodes()),x=new _o(g,f.isFullyInitialized(),a.filtersNodes());this.viewCache_=sf(x,v),this.eventGenerator_=new f4(this.query_)}get query(){return this.query_}}function B4(n){return n.viewCache_.serverCache.getNode()}function $4(n,e){const t=yo(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!Be(e)&&!t.getImmediateChild(Ve(e)).isEmpty())?t.getChild(e):null}function rx(n){return n.eventRegistrations_.length===0}function W4(n,e){n.eventRegistrations_.push(e)}function sx(n,e,t){const r=[];if(t){se(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(a=>{const c=a.createCancelEvent(t,i);c&&r.push(c)})}if(e){let i=[];for(let a=0;a<n.eventRegistrations_.length;++a){const c=n.eventRegistrations_[a];if(!c.matches(e))i.push(c);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(a+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return r}function ix(n,e,t,r){e.type===mr.MERGE&&e.source.queryId!==null&&(se(yo(n.viewCache_),"We should always have a full cache before handling merges"),se(tg(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,a=D4(n.processor_,i,e,t,r);return O4(n.processor_,a.viewCache),se(a.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=a.viewCache,WT(n,a.changes,a.viewCache.eventCache.getNode(),null)}function q4(n,e){const t=n.viewCache_.eventCache,r=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(vt,(a,c)=>{r.push(Fa(a,c))}),t.isFullyInitialized()&&r.push(jT(t.getNode())),WT(n,r,t.getNode(),e)}function WT(n,e,t,r){const i=r?[r]:n.eventRegistrations_;return p4(n.eventGenerator_,e,t,i)}/**
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
 */let xh;class H4{constructor(){this.views=new Map}}function G4(n){se(!xh,"__referenceConstructor has already been defined"),xh=n}function K4(){return se(xh,"Reference.ts has not been loaded"),xh}function Q4(n){return n.views.size===0}function m_(n,e,t,r){const i=e.source.queryId;if(i!==null){const a=n.views.get(i);return se(a!=null,"SyncTree gave us an op for an invalid query."),ix(a,e,t,r)}else{let a=[];for(const c of n.views.values())a=a.concat(ix(c,e,t,r));return a}}function Y4(n,e,t,r,i){const a=e._queryIdentifier,c=n.views.get(a);if(!c){let f=yh(t,i?r:null),p=!1;f?p=!0:r instanceof Se?(f=h_(t,r),p=!1):(f=Se.EMPTY_NODE,p=!1);const g=sf(new _o(f,p,!1),new _o(r,i,!1));return new z4(e,g)}return c}function X4(n,e,t,r,i,a){const c=Y4(n,e,r,i,a);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,c),W4(c,t),q4(c,t)}function J4(n,e,t,r){const i=e._queryIdentifier,a=[];let c=[];const f=Ei(n);if(i==="default")for(const[p,g]of n.views.entries())c=c.concat(sx(g,t,r)),rx(g)&&(n.views.delete(p),g.query._queryParams.loadsAllData()||a.push(g.query));else{const p=n.views.get(i);p&&(c=c.concat(sx(p,t,r)),rx(p)&&(n.views.delete(i),p.query._queryParams.loadsAllData()||a.push(p.query)))}return f&&!Ei(n)&&a.push(new(K4())(e._repo,e._path)),{removed:a,events:c}}function qT(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function ka(n,e){let t=null;for(const r of n.views.values())t=t||$4(r,e);return t}function HT(n,e){if(e._queryParams.loadsAllData())return of(n);{const r=e._queryIdentifier;return n.views.get(r)}}function GT(n,e){return HT(n,e)!=null}function Ei(n){return of(n)!=null}function of(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Eh;function Z4(n){se(!Eh,"__referenceConstructor has already been defined"),Eh=n}function eO(){return se(Eh,"Reference.ts has not been loaded"),Eh}let tO=1;class ox{constructor(e){this.listenProvider_=e,this.syncPointTree_=new ht(null),this.pendingWriteTree_=k4(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function g_(n,e,t,r,i){return y4(n.pendingWriteTree_,e,t,r,i),i?Jc(n,new go(DT(),e,t)):[]}function ao(n,e,t=!1){const r=v4(n.pendingWriteTree_,e);if(w4(n.pendingWriteTree_,e)){let a=new ht(null);return r.snap!=null?a=a.set(Xe(),!0):kn(r.children,c=>{a=a.set(new st(c),!0)}),Jc(n,new _h(r.path,a,t))}else return[]}function af(n,e,t){return Jc(n,new go(c_(),e,t))}function nO(n,e,t){const r=ht.fromObject(t);return Jc(n,new Lc(c_(),e,r))}function rO(n,e){return Jc(n,new Mc(c_(),e))}function sO(n,e,t){const r=__(n,t);if(r){const i=y_(r),a=i.path,c=i.queryId,f=Cn(a,e),p=new Mc(u_(c),f);return v_(n,a,p)}else return[]}function og(n,e,t,r,i=!1){const a=e._path,c=n.syncPointTree_.get(a);let f=[];if(c&&(e._queryIdentifier==="default"||GT(c,e))){const p=J4(c,e,t,r);Q4(c)&&(n.syncPointTree_=n.syncPointTree_.remove(a));const g=p.removed;if(f=p.events,!i){const v=g.findIndex(E=>E._queryParams.loadsAllData())!==-1,x=n.syncPointTree_.findOnPath(a,(E,R)=>Ei(R));if(v&&!x){const E=n.syncPointTree_.subtree(a);if(!E.isEmpty()){const R=aO(E);for(let O=0;O<R.length;++O){const U=R[O],M=U.query,Q=YT(n,U);n.listenProvider_.startListening(_c(M),Th(n,M),Q.hashFn,Q.onComplete)}}}!x&&g.length>0&&!r&&(v?n.listenProvider_.stopListening(_c(e),null):g.forEach(E=>{const R=n.queryToTagMap.get(cf(E));n.listenProvider_.stopListening(_c(E),R)}))}lO(n,g)}return f}function iO(n,e,t,r){const i=__(n,r);if(i!=null){const a=y_(i),c=a.path,f=a.queryId,p=Cn(c,e),g=new go(u_(f),p,t);return v_(n,c,g)}else return[]}function oO(n,e,t,r){const i=__(n,r);if(i){const a=y_(i),c=a.path,f=a.queryId,p=Cn(c,e),g=ht.fromObject(t),v=new Lc(u_(f),p,g);return v_(n,c,v)}else return[]}function ax(n,e,t,r=!1){const i=e._path;let a=null,c=!1;n.syncPointTree_.foreachOnPath(i,(E,R)=>{const O=Cn(E,i);a=a||ka(R,O),c=c||Ei(R)});let f=n.syncPointTree_.get(i);f?(c=c||Ei(f),a=a||ka(f,Xe())):(f=new H4,n.syncPointTree_=n.syncPointTree_.set(i,f));let p;a!=null?p=!0:(p=!1,a=Se.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((R,O)=>{const U=ka(O,Xe());U&&(a=a.updateImmediateChild(R,U))}));const g=GT(f,e);if(!g&&!e._queryParams.loadsAllData()){const E=cf(e);se(!n.queryToTagMap.has(E),"View does not exist, but we have a tag");const R=cO();n.queryToTagMap.set(E,R),n.tagToQueryMap.set(R,E)}const v=d_(n.pendingWriteTree_,i);let x=X4(f,e,t,v,a,p);if(!g&&!c&&!r){const E=HT(f,e);x=x.concat(uO(n,e,E))}return x}function lf(n,e,t){const i=n.pendingWriteTree_,a=n.syncPointTree_.findOnPath(e,(c,f)=>{const p=Cn(c,e),g=ka(f,p);if(g)return g});return FT(i,e,a,t,!0)}function Jc(n,e){return KT(e,n.syncPointTree_,null,d_(n.pendingWriteTree_,Xe()))}function KT(n,e,t,r){if(Be(n.path))return QT(n,e,t,r);{const i=e.get(Xe());t==null&&i!=null&&(t=ka(i,Xe()));let a=[];const c=Ve(n.path),f=n.operationForChild(c),p=e.children.get(c);if(p&&f){const g=t?t.getImmediateChild(c):null,v=UT(r,c);a=a.concat(KT(f,p,g,v))}return i&&(a=a.concat(m_(i,n,r,t))),a}}function QT(n,e,t,r){const i=e.get(Xe());t==null&&i!=null&&(t=ka(i,Xe()));let a=[];return e.children.inorderTraversal((c,f)=>{const p=t?t.getImmediateChild(c):null,g=UT(r,c),v=n.operationForChild(c);v&&(a=a.concat(QT(v,f,p,g)))}),i&&(a=a.concat(m_(i,n,r,t))),a}function YT(n,e){const t=e.query,r=Th(n,t);return{hashFn:()=>(B4(e)||Se.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?sO(n,t._path,r):rO(n,t._path);{const a=ij(i,t);return og(n,t,null,a)}}}}function Th(n,e){const t=cf(e);return n.queryToTagMap.get(t)}function cf(n){return n._path.toString()+"$"+n._queryIdentifier}function __(n,e){return n.tagToQueryMap.get(e)}function y_(n){const e=n.indexOf("$");return se(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new st(n.substr(0,e))}}function v_(n,e,t){const r=n.syncPointTree_.get(e);se(r,"Missing sync point for query tag that we're tracking");const i=d_(n.pendingWriteTree_,e);return m_(r,t,i,null)}function aO(n){return n.fold((e,t,r)=>{if(t&&Ei(t))return[of(t)];{let i=[];return t&&(i=qT(t)),kn(r,(a,c)=>{i=i.concat(c)}),i}})}function _c(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(eO())(n._repo,n._path):n}function lO(n,e){for(let t=0;t<e.length;++t){const r=e[t];if(!r._queryParams.loadsAllData()){const i=cf(r),a=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(a)}}}function cO(){return tO++}function uO(n,e,t){const r=e._path,i=Th(n,e),a=YT(n,t),c=n.listenProvider_.startListening(_c(e),i,a.hashFn,a.onComplete),f=n.syncPointTree_.subtree(r);if(i)se(!Ei(f.value),"If we're adding a query, it shouldn't be shadowed");else{const p=f.fold((g,v,x)=>{if(!Be(g)&&v&&Ei(v))return[of(v).query];{let E=[];return v&&(E=E.concat(qT(v).map(R=>R.query))),kn(x,(R,O)=>{E=E.concat(O)}),E}});for(let g=0;g<p.length;++g){const v=p[g];n.listenProvider_.stopListening(_c(v),Th(n,v))}}return c}/**
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
 */class w_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new w_(t)}node(){return this.node_}}class x_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Mt(this.path_,e);return new x_(this.syncTree_,t)}node(){return lf(this.syncTree_,this.path_)}}const dO=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},lx=function(n,e,t){if(!n||typeof n!="object")return n;if(se(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return hO(n[".sv"],e,t);if(typeof n[".sv"]=="object")return fO(n[".sv"],e);se(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},hO=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:se(!1,"Unexpected server value: "+n)}},fO=function(n,e,t){n.hasOwnProperty("increment")||se(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const r=n.increment;typeof r!="number"&&se(!1,"Unexpected increment value: "+r);const i=e.node();if(se(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const c=i.getValue();return typeof c!="number"?r:c+r},pO=function(n,e,t,r){return T_(e,new x_(t,n),r)},E_=function(n,e,t){return T_(n,new w_(e),t)};function T_(n,e,t){const r=n.getPriority().val(),i=lx(r,e.getImmediateChild(".priority"),t);let a;if(n.isLeafNode()){const c=n,f=lx(c.getValue(),e,t);return f!==c.getValue()||i!==c.getPriority().val()?new $t(f,Ht(i)):n}else{const c=n;return a=c,i!==c.getPriority().val()&&(a=a.updatePriority(new $t(i))),c.forEachChild(vt,(f,p)=>{const g=T_(p,e.getImmediateChild(f),t);g!==p&&(a=a.updateImmediateChild(f,g))}),a}}/**
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
 */class b_{constructor(e="",t=null,r={children:{},childCount:0}){this.name=e,this.parent=t,this.node=r}}function uf(n,e){let t=e instanceof st?e:new st(e),r=n,i=Ve(t);for(;i!==null;){const a=ho(r.node.children,i)||{children:{},childCount:0};r=new b_(i,r,a),t=at(t),i=Ve(t)}return r}function bo(n){return n.node.value}function I_(n,e){n.node.value=e,ag(n)}function XT(n){return n.node.childCount>0}function mO(n){return bo(n)===void 0&&!XT(n)}function df(n,e){kn(n.node.children,(t,r)=>{e(new b_(t,n,r))})}function JT(n,e,t,r){t&&e(n),df(n,i=>{JT(i,e,!0)})}function gO(n,e,t){let r=n.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Zc(n){return new st(n.parent===null?n.name:Zc(n.parent)+"/"+n.name)}function ag(n){n.parent!==null&&_O(n.parent,n.name,n)}function _O(n,e,t){const r=mO(t),i=wr(n.node.children,e);r&&i?(delete n.node.children[e],n.node.childCount--,ag(n)):!r&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ag(n))}/**
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
 */const yO=/[\[\].#$\/\u0000-\u001F\u007F]/,vO=/[\[\].#$\u0000-\u001F\u007F]/,ym=10*1024*1024,ZT=function(n){return typeof n=="string"&&n.length!==0&&!yO.test(n)},eb=function(n){return typeof n=="string"&&n.length!==0&&!vO.test(n)},wO=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),eb(n)},xO=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Zg(n)||n&&typeof n=="object"&&wr(n,".sv")},EO=function(n,e,t,r){hf(wg(n,"value"),e,t)},hf=function(n,e,t){const r=t instanceof st?new Vj(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+so(r));if(typeof e=="function")throw new Error(n+"contains a function "+so(r)+" with contents = "+e.toString());if(Zg(e))throw new Error(n+"contains "+e.toString()+" "+so(r));if(typeof e=="string"&&e.length>ym/3&&Lh(e)>ym)throw new Error(n+"contains a string greater than "+ym+" utf8 bytes "+so(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,a=!1;if(kn(e,(c,f)=>{if(c===".value")i=!0;else if(c!==".priority"&&c!==".sv"&&(a=!0,!ZT(c)))throw new Error(n+" contains an invalid key ("+c+") "+so(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Fj(r,c),hf(n,f,r),Uj(r)}),i&&a)throw new Error(n+' contains ".value" child '+so(r)+" in addition to actual children.")}},tb=function(n,e,t,r){if(!eb(t))throw new Error(wg(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},TO=function(n,e,t,r){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),tb(n,e,t)},nb=function(n,e){if(Ve(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},bO=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!ZT(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!wO(t))throw new Error(wg(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class IO{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function C_(n,e){let t=null;for(let r=0;r<e.length;r++){const i=e[r],a=i.getPath();t!==null&&!s_(a,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:a}),t.events.push(i)}t&&n.eventLists_.push(t)}function rb(n,e,t){C_(n,t),sb(n,r=>s_(r,e))}function $r(n,e,t){C_(n,t),sb(n,r=>pr(r,e)||pr(e,r))}function sb(n,e){n.recursionDepth_++;let t=!0;for(let r=0;r<n.eventLists_.length;r++){const i=n.eventLists_[r];if(i){const a=i.path;e(a)?(CO(n.eventLists_[r]),n.eventLists_[r]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function CO(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const r=t.getEventRunner();fc&&ln("event: "+t.toString()),Xa(r)}}}/**
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
 */const NO="repo_interrupt",SO=25;class kO{constructor(e,t,r,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IO,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=gh(),this.transactionQueueTree_=new b_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function RO(n,e,t){if(n.stats_=n_(n.repoInfo_),n.forceRestClient_||cj())n.server_=new mh(n.repoInfo_,(r,i,a,c)=>{cx(n,r,i,a,c)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ux(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Gt(t)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}n.persistentConnection_=new gs(n.repoInfo_,e,(r,i,a,c)=>{cx(n,r,i,a,c)},r=>{ux(n,r)},r=>{PO(n,r)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(r=>{n.server_.refreshAuthToken(r)}),n.appCheckProvider_.addTokenChangeListener(r=>{n.server_.refreshAppCheckToken(r.token)}),n.statsReporter_=pj(n.repoInfo_,()=>new h4(n.stats_,n.server_)),n.infoData_=new a4,n.infoSyncTree_=new ox({startListening:(r,i,a,c)=>{let f=[];const p=n.infoData_.getNode(r._path);return p.isEmpty()||(f=af(n.infoSyncTree_,r._path,p),setTimeout(()=>{c("ok")},0)),f},stopListening:()=>{}}),N_(n,"connected",!1),n.serverSyncTree_=new ox({startListening:(r,i,a,c)=>(n.server_.listen(r,a,i,(f,p)=>{const g=c(f,p);$r(n.eventQueue_,r._path,g)}),[]),stopListening:(r,i)=>{n.server_.unlisten(r,i)}})}function AO(n){const t=n.infoData_.getNode(new st(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function ff(n){return dO({timestamp:AO(n)})}function cx(n,e,t,r,i){n.dataUpdateCount++;const a=new st(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let c=[];if(i)if(r){const p=eh(t,g=>Ht(g));c=oO(n.serverSyncTree_,a,p,i)}else{const p=Ht(t);c=iO(n.serverSyncTree_,a,p,i)}else if(r){const p=eh(t,g=>Ht(g));c=nO(n.serverSyncTree_,a,p)}else{const p=Ht(t);c=af(n.serverSyncTree_,a,p)}let f=a;c.length>0&&(f=gf(n,a)),$r(n.eventQueue_,f,c)}function ux(n,e){N_(n,"connected",e),e===!1&&OO(n)}function PO(n,e){kn(e,(t,r)=>{N_(n,t,r)})}function N_(n,e,t){const r=new st("/.info/"+e),i=Ht(t);n.infoData_.updateSnapshot(r,i);const a=af(n.infoSyncTree_,r,i);$r(n.eventQueue_,r,a)}function S_(n){return n.nextWriteId_++}function jO(n,e,t,r,i){pf(n,"set",{path:e.toString(),value:t,priority:r});const a=ff(n),c=Ht(t,r),f=lf(n.serverSyncTree_,e),p=E_(c,f,a),g=S_(n),v=g_(n.serverSyncTree_,e,p,g,!0);C_(n.eventQueue_,v),n.server_.put(e.toString(),c.val(!0),(E,R)=>{const O=E==="ok";O||Sn("set at "+e+" failed: "+E);const U=ao(n.serverSyncTree_,g,!O);$r(n.eventQueue_,e,U),VO(n,i,E,R)});const x=lb(n,e);gf(n,x),$r(n.eventQueue_,x,[])}function OO(n){pf(n,"onDisconnectEvents");const e=ff(n),t=gh();eg(n.onDisconnect_,Xe(),(i,a)=>{const c=pO(i,a,n.serverSyncTree_,e);OT(t,i,c)});let r=[];eg(t,Xe(),(i,a)=>{r=r.concat(af(n.serverSyncTree_,i,a));const c=lb(n,i);gf(n,c)}),n.onDisconnect_=gh(),$r(n.eventQueue_,Xe(),r)}function DO(n,e,t){let r;Ve(e._path)===".info"?r=ax(n.infoSyncTree_,e,t):r=ax(n.serverSyncTree_,e,t),rb(n.eventQueue_,e._path,r)}function MO(n,e,t){let r;Ve(e._path)===".info"?r=og(n.infoSyncTree_,e,t):r=og(n.serverSyncTree_,e,t),rb(n.eventQueue_,e._path,r)}function LO(n){n.persistentConnection_&&n.persistentConnection_.interrupt(NO)}function pf(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),ln(t,...e)}function VO(n,e,t,r){e&&Xa(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let a=i;r&&(a+=": "+r);const c=new Error(a);c.code=i,e(c)}})}function FO(n,e,t,r,i,a){pf(n,"transaction on "+e);const c={path:e,update:t,onComplete:r,status:null,order:nT(),applyLocally:a,retryCount:0,unwatcher:i,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},f=k_(n,e,void 0);c.currentInputSnapshot=f;const p=c.update(f.val());if(p===void 0)c.unwatcher(),c.currentOutputSnapshotRaw=null,c.currentOutputSnapshotResolved=null,c.onComplete&&c.onComplete(null,!1,c.currentInputSnapshot);else{hf("transaction failed: Data returned ",p,c.path),c.status=0;const g=uf(n.transactionQueueTree_,e),v=bo(g)||[];v.push(c),I_(g,v);let x;typeof p=="object"&&p!==null&&wr(p,".priority")?(x=ho(p,".priority"),se(xO(x),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):x=(lf(n.serverSyncTree_,e)||Se.EMPTY_NODE).getPriority().val();const E=ff(n),R=Ht(p,x),O=E_(R,f,E);c.currentOutputSnapshotRaw=R,c.currentOutputSnapshotResolved=O,c.currentWriteId=S_(n);const U=g_(n.serverSyncTree_,e,O,c.currentWriteId,c.applyLocally);$r(n.eventQueue_,e,U),mf(n,n.transactionQueueTree_)}}function k_(n,e,t){return lf(n.serverSyncTree_,e,t)||Se.EMPTY_NODE}function mf(n,e=n.transactionQueueTree_){if(e||_f(n,e),bo(e)){const t=ob(n,e);se(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&UO(n,Zc(e),t)}else XT(e)&&df(e,t=>{mf(n,t)})}function UO(n,e,t){const r=t.map(g=>g.currentWriteId),i=k_(n,e,r);let a=i;const c=i.hash();for(let g=0;g<t.length;g++){const v=t[g];se(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const x=Cn(e,v.path);a=a.updateChild(x,v.currentOutputSnapshotRaw)}const f=a.val(!0),p=e;n.server_.put(p.toString(),f,g=>{pf(n,"transaction put response",{path:p.toString(),status:g});let v=[];if(g==="ok"){const x=[];for(let E=0;E<t.length;E++)t[E].status=2,v=v.concat(ao(n.serverSyncTree_,t[E].currentWriteId)),t[E].onComplete&&x.push(()=>t[E].onComplete(null,!0,t[E].currentOutputSnapshotResolved)),t[E].unwatcher();_f(n,uf(n.transactionQueueTree_,e)),mf(n,n.transactionQueueTree_),$r(n.eventQueue_,e,v);for(let E=0;E<x.length;E++)Xa(x[E])}else{if(g==="datastale")for(let x=0;x<t.length;x++)t[x].status===3?t[x].status=4:t[x].status=0;else{Sn("transaction at "+p.toString()+" failed: "+g);for(let x=0;x<t.length;x++)t[x].status=4,t[x].abortReason=g}gf(n,e)}},c)}function gf(n,e){const t=ib(n,e),r=Zc(t),i=ob(n,t);return zO(n,i,r),r}function zO(n,e,t){if(e.length===0)return;const r=[];let i=[];const c=e.filter(f=>f.status===0).map(f=>f.currentWriteId);for(let f=0;f<e.length;f++){const p=e[f],g=Cn(t,p.path);let v=!1,x;if(se(g!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,x=p.abortReason,i=i.concat(ao(n.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=SO)v=!0,x="maxretry",i=i.concat(ao(n.serverSyncTree_,p.currentWriteId,!0));else{const E=k_(n,p.path,c);p.currentInputSnapshot=E;const R=e[f].update(E.val());if(R!==void 0){hf("transaction failed: Data returned ",R,p.path);let O=Ht(R);typeof R=="object"&&R!=null&&wr(R,".priority")||(O=O.updatePriority(E.getPriority()));const M=p.currentWriteId,Q=ff(n),te=E_(O,E,Q);p.currentOutputSnapshotRaw=O,p.currentOutputSnapshotResolved=te,p.currentWriteId=S_(n),c.splice(c.indexOf(M),1),i=i.concat(g_(n.serverSyncTree_,p.path,te,p.currentWriteId,p.applyLocally)),i=i.concat(ao(n.serverSyncTree_,M,!0))}else v=!0,x="nodata",i=i.concat(ao(n.serverSyncTree_,p.currentWriteId,!0))}$r(n.eventQueue_,t,i),i=[],v&&(e[f].status=2,(function(E){setTimeout(E,Math.floor(0))})(e[f].unwatcher),e[f].onComplete&&(x==="nodata"?r.push(()=>e[f].onComplete(null,!1,e[f].currentInputSnapshot)):r.push(()=>e[f].onComplete(new Error(x),!1,null))))}_f(n,n.transactionQueueTree_);for(let f=0;f<r.length;f++)Xa(r[f]);mf(n,n.transactionQueueTree_)}function ib(n,e){let t,r=n.transactionQueueTree_;for(t=Ve(e);t!==null&&bo(r)===void 0;)r=uf(r,t),e=at(e),t=Ve(e);return r}function ob(n,e){const t=[];return ab(n,e,t),t.sort((r,i)=>r.order-i.order),t}function ab(n,e,t){const r=bo(e);if(r)for(let i=0;i<r.length;i++)t.push(r[i]);df(e,i=>{ab(n,i,t)})}function _f(n,e){const t=bo(e);if(t){let r=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[r]=t[i],r++);t.length=r,I_(e,t.length>0?t:void 0)}df(e,r=>{_f(n,r)})}function lb(n,e){const t=Zc(ib(n,e)),r=uf(n.transactionQueueTree_,e);return gO(r,i=>{vm(n,i)}),vm(n,r),JT(r,i=>{vm(n,i)}),t}function vm(n,e){const t=bo(e);if(t){const r=[];let i=[],a=-1;for(let c=0;c<t.length;c++)t[c].status===3||(t[c].status===1?(se(a===c-1,"All SENT items should be at beginning of queue."),a=c,t[c].status=3,t[c].abortReason="set"):(se(t[c].status===0,"Unexpected transaction status in abort"),t[c].unwatcher(),i=i.concat(ao(n.serverSyncTree_,t[c].currentWriteId,!0)),t[c].onComplete&&r.push(t[c].onComplete.bind(null,new Error("set"),!1,null))));a===-1?I_(e,void 0):t.length=a+1,$r(n.eventQueue_,Zc(e),i);for(let c=0;c<r.length;c++)Xa(r[c])}}/**
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
 */function BO(n){let e="";const t=n.split("/");for(let r=0;r<t.length;r++)if(t[r].length>0){let i=t[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function $O(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const r=t.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Sn(`Invalid query segment '${t}' in query '${n}'`)}return e}const dx=function(n,e){const t=WO(n),r=t.namespace;t.domain==="firebase.com"&&Es(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&t.domain!=="localhost"&&Es("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||ej();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new mT(t.host,t.secure,r,i,e,"",r!==t.subdomain),path:new st(t.pathString)}},WO=function(n){let e="",t="",r="",i="",a="",c=!0,f="https",p=443;if(typeof n=="string"){let g=n.indexOf("//");g>=0&&(f=n.substring(0,g-1),n=n.substring(g+2));let v=n.indexOf("/");v===-1&&(v=n.length);let x=n.indexOf("?");x===-1&&(x=n.length),e=n.substring(0,Math.min(v,x)),v<x&&(i=BO(n.substring(v,x)));const E=$O(n.substring(Math.min(n.length,x)));g=e.indexOf(":"),g>=0?(c=f==="https"||f==="wss",p=parseInt(e.substring(g+1),10)):g=e.length;const R=e.slice(0,g);if(R.toLowerCase()==="localhost")t="localhost";else if(R.split(".").length<=2)t=R;else{const O=e.indexOf(".");r=e.substring(0,O).toLowerCase(),t=e.substring(O+1),a=r}"ns"in E&&(a=E.ns)}return{host:e,port:p,domain:t,subdomain:r,secure:c,scheme:f,pathString:i,namespace:a}};/**
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
 */class qO{constructor(e,t,r,i){this.eventType=e,this.eventRegistration=t,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Gt(this.snapshot.exportVal())}}class HO{constructor(e,t,r){this.eventRegistration=e,this.error=t,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GO{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return se(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class R_{constructor(e,t,r,i){this._repo=e,this._path=t,this._queryParams=r,this._orderByCalled=i}get key(){return Be(this._path)?null:bT(this._path)}get ref(){return new Is(this._repo,this._path)}get _queryIdentifier(){const e=Qw(this._queryParams),t=e_(e);return t==="{}"?"default":t}get _queryObject(){return Qw(this._queryParams)}isEqual(e){if(e=lt(e),!(e instanceof R_))return!1;const t=this._repo===e._repo,r=s_(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lj(this._path)}}class Is extends R_{constructor(e,t){super(e,t,new l_,!1)}get parent(){const e=CT(this._path);return e===null?null:new Is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Vc{constructor(e,t,r){this._node=e,this.ref=t,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new st(e),r=lg(this.ref,e);return new Vc(this._node.getChild(t),r,vt)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Vc(i,lg(this.ref,r),vt)))}hasChild(e){const t=new st(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zl(n,e){return n=lt(n),n._checkNotDeleted("ref"),e!==void 0?lg(n._root,e):n._root}function lg(n,e){return n=lt(n),Ve(n._path)===null?TO("child","path",e):tb("child","path",e),new Is(n._repo,Mt(n._path,e))}function hx(n,e){n=lt(n),nb("set",n._path),EO("set",e,n._path);const t=new Uc;return jO(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class A_{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const r=t._queryParams.getIndex();return new qO("value",this,new Vc(e.snapshotNode,new Is(t._repo,t._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new HO(this,e,t):null}matches(e){return e instanceof A_?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function KO(n,e,t,r,i){const a=new GO(t,void 0),c=new A_(a);return DO(n._repo,n,c),()=>MO(n._repo,n,c)}function cb(n,e,t,r){return KO(n,"value",e)}G4(Is);Z4(Is);/**
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
 */const QO="FIREBASE_DATABASE_EMULATOR_HOST",cg={};let YO=!1;function XO(n,e,t,r){const i=e.lastIndexOf(":"),a=e.substring(0,i),c=bs(a);n.repoInfo_=new mT(e,c,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),r&&(n.authTokenProvider_=r)}function JO(n,e,t,r,i){let a=r||n.options.databaseURL;a===void 0&&(n.options.projectId||Es("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ln("Using default host for project ",n.options.projectId),a=`${n.options.projectId}-default-rtdb.firebaseio.com`);let c=dx(a,i),f=c.repoInfo,p;typeof process<"u"&&Aw&&(p=Aw[QO]),p?(a=`http://${p}?ns=${f.namespace}`,c=dx(a,i),f=c.repoInfo):c.repoInfo.secure;const g=new dj(n.name,n.options,e);bO("Invalid Firebase Database URL",c),Be(c.path)||Es("Database URL must point to the root of a Firebase Database (not including a child path).");const v=eD(f,n,g,new uj(n,t));return new tD(v,n)}function ZO(n,e){const t=cg[e];(!t||t[n.key]!==n)&&Es(`Database ${e}(${n.repoInfo_}) has already been deleted.`),LO(n),delete t[n.key]}function eD(n,e,t,r){let i=cg[e.name];i||(i={},cg[e.name]=i);let a=i[n.toURLString()];return a&&Es("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),a=new kO(n,YO,t,r),i[n.toURLString()]=a,a}class tD{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(RO(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Is(this._repo,Xe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZO(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Es("Cannot call "+e+" on a deleted database.")}}function nD(n=Fh(),e){const t=Bc(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const r=_g("database");r&&rD(t,...r)}return t}function rD(n,e,t,r={}){n=lt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,a=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&hi(r,a.repoInfo_.emulatorOptions))return;Es("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let c;if(a.repoInfo_.nodeAdmin)r.mockUserToken&&Es('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),c=new Bd(Bd.OWNER);else if(r.mockUserToken){const f=typeof r.mockUserToken=="string"?r.mockUserToken:yg(r.mockUserToken,n.app.options.projectId);c=new Bd(f)}bs(e)&&(Dh(e),Mh("Database",!0)),XO(a,i,r,c)}/**
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
 */function sD(n){QP(bi),fi(new ys("database",(e,{instanceIdentifier:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),a=e.getProvider("app-check-internal");return JO(r,i,a,t)},"PUBLIC").setMultipleInstances(!0)),Yn(Pw,jw,n),Yn(Pw,jw,"esm2017")}/**
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
 */const iD={".sv":"timestamp"};function fx(){return iD}/**
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
 */class oD{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}}function px(n,e,t){var r;if(n=lt(n),nb("Reference.transaction",n._path),n.key===".length"||n.key===".keys")throw"Reference.transaction failed: "+n.key+" is a read-only object.";const i=(r=void 0)!==null&&r!==void 0?r:!0,a=new Uc,c=(p,g,v)=>{let x=null;p?a.reject(p):(x=new Vc(v,new Is(n._repo,n._path),vt),a.resolve(new oD(g,x)))},f=cb(n,()=>{});return FO(n._repo,n._path,e,c,f,i),a.promise}gs.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};gs.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};sD();function P_(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function ub(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aD=ub,db=new zc("auth","Firebase",ub());/**
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
 */const bh=new Vh("@firebase/auth");function lD(n,...e){bh.logLevel<=ze.WARN&&bh.warn(`Auth (${bi}): ${n}`,...e)}function $d(n,...e){bh.logLevel<=ze.ERROR&&bh.error(`Auth (${bi}): ${n}`,...e)}/**
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
 */function vr(n,...e){throw j_(n,...e)}function Fr(n,...e){return j_(n,...e)}function hb(n,e,t){const r=Object.assign(Object.assign({},aD()),{[e]:t});return new zc("auth","Firebase",r).create(e,{appName:n.name})}function _s(n){return hb(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function j_(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return db.create(n,...e)}function Ne(n,e,...t){if(!n)throw j_(e,...t)}function ps(n){const e="INTERNAL ASSERTION FAILED: "+n;throw $d(e),new Error(e)}function Ts(n,e){n||ps(e)}/**
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
 */function ug(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cD(){return mx()==="http:"||mx()==="https:"}function mx(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function uD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cD()||hk()||"connection"in navigator)?navigator.onLine:!0}function dD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class eu{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ts(t>e,"Short delay should be less than long delay!"),this.isMobile=vg()||mE()}get(){return uD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function O_(n,e){Ts(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class fb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ps("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ps("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ps("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const fD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pD=new eu(3e4,6e4);function Cs(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Hr(n,e,t,r,i={}){return pb(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const f=qa(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},a);return dk()||(g.referrerPolicy="no-referrer"),n.emulatorConfig&&bs(n.emulatorConfig.host)&&(g.credentials="include"),fb.fetch()(await mb(n,n.config.apiHost,t,f),g)})}async function pb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},hD),e);try{const i=new gD(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Ad(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const f=a.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ad(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Ad(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Ad(n,"user-disabled",c);const v=r[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw hb(n,v,g);vr(n,v)}}catch(i){if(i instanceof qr)throw i;vr(n,"network-request-failed",{message:String(i)})}}async function tu(n,e,t,r,i={}){const a=await Hr(n,e,t,r,i);return"mfaPendingCredential"in a&&vr(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function mb(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?O_(n.config,i):`${n.config.apiScheme}://${i}`;return fD.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function mD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class gD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fr(this.auth,"network-request-failed")),pD.get())})}}function Ad(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fr(n,e,r);return i.customData._tokenResponse=t,i}function gx(n){return n!==void 0&&n.enterprise!==void 0}class _D{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yD(n,e){return Hr(n,"GET","/v2/recaptchaConfig",Cs(n,e))}/**
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
 */async function vD(n,e){return Hr(n,"POST","/v1/accounts:delete",e)}async function Ih(n,e){return Hr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function yc(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wD(n,e=!1){const t=lt(n),r=await t.getIdToken(e),i=D_(r);Ne(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:yc(wm(i.auth_time)),issuedAtTime:yc(wm(i.iat)),expirationTime:yc(wm(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function wm(n){return Number(n)*1e3}function D_(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return $d("JWT malformed, contained fewer than 3 sections"),null;try{const i=Zd(t);return i?JSON.parse(i):($d("Failed to decode base64 JWT payload"),null)}catch(i){return $d("Caught error parsing JWT payload as JSON",i?.toString()),null}}function _x(n){const e=D_(n);return Ne(e,"internal-error"),Ne(typeof e.exp<"u","internal-error"),Ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function za(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof qr&&xD(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function xD({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class ED{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class dg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=yc(this.lastLoginAt),this.creationTime=yc(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ch(n){var e;const t=n.auth,r=await n.getIdToken(),i=await za(n,Ih(t,{idToken:r}));Ne(i?.users.length,t,"internal-error");const a=i.users[0];n._notifyReloadListener(a);const c=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?gb(a.providerUserInfo):[],f=bD(n.providerData,c),p=n.isAnonymous,g=!(n.email&&a.passwordHash)&&!f?.length,v=p?g:!1,x={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:f,metadata:new dg(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(n,x)}async function TD(n){const e=lt(n);await Ch(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bD(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gb(n){return n.map(e=>{var{providerId:t}=e,r=P_(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ID(n,e){const t=await pb(n,{},async()=>{const r=qa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await mb(n,i,"/v1/token",`key=${a}`),f=await n._getAdditionalHeaders();f["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:f,body:r};return n.emulatorConfig&&bs(n.emulatorConfig.host)&&(p.credentials="include"),fb.fetch()(c,p)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function CD(n,e){return Hr(n,"POST","/v2/accounts:revokeToken",Cs(n,e))}/**
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
 */class Ra{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Ne(e.idToken,"internal-error"),Ne(typeof e.idToken<"u","internal-error"),Ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_x(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){Ne(e.length!==0,"internal-error");const t=_x(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(Ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await ID(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new Ra;return r&&(Ne(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(Ne(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(Ne(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ra,this.toJSON())}_performRefresh(){return ps("not implemented")}}/**
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
 */function Zs(n,e){Ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class gr{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,a=P_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ED(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new dg(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const t=await za(this,this.stsTokenManager.getToken(this.auth,e));return Ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return wD(this,e)}reload(){return TD(this)}_assign(e){this!==e&&(Ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new gr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){Ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Ch(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Tn(this.auth.app))return Promise.reject(_s(this.auth));const e=await this.getIdToken();return await za(this,vD(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,a,c,f,p,g,v;const x=(r=t.displayName)!==null&&r!==void 0?r:void 0,E=(i=t.email)!==null&&i!==void 0?i:void 0,R=(a=t.phoneNumber)!==null&&a!==void 0?a:void 0,O=(c=t.photoURL)!==null&&c!==void 0?c:void 0,U=(f=t.tenantId)!==null&&f!==void 0?f:void 0,M=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,Q=(g=t.createdAt)!==null&&g!==void 0?g:void 0,te=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:le,emailVerified:G,isAnonymous:J,providerData:fe,stsTokenManager:j}=t;Ne(le&&j,e,"internal-error");const I=Ra.fromJSON(this.name,j);Ne(typeof le=="string",e,"internal-error"),Zs(x,e.name),Zs(E,e.name),Ne(typeof G=="boolean",e,"internal-error"),Ne(typeof J=="boolean",e,"internal-error"),Zs(R,e.name),Zs(O,e.name),Zs(U,e.name),Zs(M,e.name),Zs(Q,e.name),Zs(te,e.name);const S=new gr({uid:le,auth:e,email:E,emailVerified:G,displayName:x,isAnonymous:J,photoURL:O,phoneNumber:R,tenantId:U,stsTokenManager:I,createdAt:Q,lastLoginAt:te});return fe&&Array.isArray(fe)&&(S.providerData=fe.map(C=>Object.assign({},C))),M&&(S._redirectEventId=M),S}static async _fromIdTokenResponse(e,t,r=!1){const i=new Ra;i.updateFromServerResponse(t);const a=new gr({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ch(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];Ne(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?gb(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,f=new Ra;f.updateFromIdToken(r);const p=new gr({uid:i.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new dg(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(p,g),p}}/**
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
 */const yx=new Map;function ms(n){Ts(n instanceof Function,"Expected a class definition");let e=yx.get(n);return e?(Ts(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,yx.set(n,e),e)}/**
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
 */class _b{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}_b.type="NONE";const vx=_b;/**
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
 */function Wd(n,e,t){return`firebase:${n}:${e}:${t}`}class Aa{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=Wd(this.userKey,i.apiKey,a),this.fullPersistenceKey=Wd("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ih(this.auth,{idToken:e}).catch(()=>{});return t?gr._fromGetAccountInfoResponse(this.auth,t,e):null}return gr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Aa(ms(vx),e,r);const i=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let a=i[0]||ms(vx);const c=Wd(r,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){let x;if(typeof v=="string"){const E=await Ih(e,{idToken:v}).catch(()=>{});if(!E)break;x=await gr._fromGetAccountInfoResponse(e,E,v)}else x=gr._fromJSON(e,v);g!==a&&(f=x),a=g;break}}catch{}const p=i.filter(g=>g._shouldAllowMigration);return!a._shouldAllowMigration||!p.length?new Aa(a,e,r):(a=p[0],f&&await a._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==a)try{await g._remove(c)}catch{}})),new Aa(a,e,r))}}/**
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
 */function wx(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(yb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tb(e))return"Blackberry";if(bb(e))return"Webos";if(vb(e))return"Safari";if((e.includes("chrome/")||wb(e))&&!e.includes("edge/"))return"Chrome";if(Eb(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function yb(n=cn()){return/firefox\//i.test(n)}function vb(n=cn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wb(n=cn()){return/crios\//i.test(n)}function xb(n=cn()){return/iemobile/i.test(n)}function Eb(n=cn()){return/android/i.test(n)}function Tb(n=cn()){return/blackberry/i.test(n)}function bb(n=cn()){return/webos/i.test(n)}function M_(n=cn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function ND(n=cn()){var e;return M_(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function SD(){return fk()&&document.documentMode===10}function Ib(n=cn()){return M_(n)||Eb(n)||bb(n)||Tb(n)||/windows phone/i.test(n)||xb(n)}/**
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
 */function Cb(n,e=[]){let t;switch(n){case"Browser":t=wx(cn());break;case"Worker":t=`${wx(cn())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${bi}/${r}`}/**
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
 */class kD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,f)=>{try{const p=e(a);c(p)}catch(p){f(p)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
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
 */async function RD(n,e={}){return Hr(n,"GET","/v2/passwordPolicy",Cs(n,e))}/**
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
 */const AD=6;class PD{constructor(e){var t,r,i,a;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:AD,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(a=e.forceUpgradeOnSignin)!==null&&a!==void 0?a:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,i,a,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(r=p.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),p.isValid&&(p.isValid=(i=p.containsLowercaseLetter)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsUppercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
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
 */class jD{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new xx(this),this.idTokenSubscription=new xx(this),this.beforeStateQueue=new kD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=db,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ms(t)),this._initializationPromise=this.queue(async()=>{var r,i,a;if(!this._deleted&&(this.persistenceManager=await Aa.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ih(this,{idToken:e}),r=await gr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Tn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=i?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(i=p.user,a=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(i)}catch(c){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Ch(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Tn(this.app))return Promise.reject(_s(this));const t=e?lt(e):null;return t&&Ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&Ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Tn(this.app)?Promise.reject(_s(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Tn(this.app)?Promise.reject(_s(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ms(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RD(this),t=new PD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new zc("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await CD(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ms(e)||this._popupRedirectResolver;Ne(t,this,"argument-error"),this.redirectPersistenceManager=await Aa.create(this,[ms(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(Ne(f,this,"internal-error"),f.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,r,i);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Cb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&lD(`Error while retrieving App Check token: ${t.error}`),t?.token}}function Ni(n){return lt(n)}class xx{constructor(e){this.auth=e,this.observer=null,this.addObserver=bk(t=>this.observer=t)}get next(){return Ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let yf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function OD(n){yf=n}function Nb(n){return yf.loadJS(n)}function DD(){return yf.recaptchaEnterpriseScript}function MD(){return yf.gapiScript}function LD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class VD{constructor(){this.enterprise=new FD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class FD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const UD="recaptcha-enterprise",Sb="NO_RECAPTCHA";class zD{constructor(e){this.type=UD,this.auth=Ni(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,f)=>{yD(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new _D(p);return a.tenantId==null?a._agentRecaptchaConfig=g:a._tenantRecaptchaConfigs[a.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function i(a,c,f){const p=window.grecaptcha;gx(p)?p.enterprise.ready(()=>{p.enterprise.execute(a,{action:e}).then(g=>{c(g)}).catch(()=>{c(Sb)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VD().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(f=>{if(!t&&gx(window.grecaptcha))i(f,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=DD();p.length!==0&&(p+=f),Nb(p).then(()=>{i(f,a,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Ex(n,e,t,r=!1,i=!1){const a=new zD(n);let c;if(i)c=Sb;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const f=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in f){const p=f.phoneEnrollmentInfo.phoneNumber,g=f.phoneEnrollmentInfo.recaptchaToken;Object.assign(f,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in f){const p=f.phoneSignInInfo.recaptchaToken;Object.assign(f,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return f}return r?Object.assign(f,{captchaResp:c}):Object.assign(f,{captchaResponse:c}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function Nh(n,e,t,r,i){var a;if(!((a=n._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await Ex(n,e,t,t==="getOobCode");return r(n,c)}else return r(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await Ex(n,e,t,t==="getOobCode");return r(n,f)}else return Promise.reject(c)})}/**
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
 */function BD(n,e){const t=Bc(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(hi(a,e??{}))return i;vr(i,"already-initialized")}return t.initialize({options:e})}function $D(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(ms);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function WD(n,e,t){const r=Ni(n);Ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=kb(e),{host:c,port:f}=qD(e),p=f===null?"":`:${f}`,g={url:`${a}//${c}${p}/`},v=Object.freeze({host:c,port:f,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){Ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),Ne(hi(g,r.config.emulator)&&hi(v,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=g,r.emulatorConfig=v,r.settings.appVerificationDisabledForTesting=!0,bs(c)?(Dh(`${a}//${c}${p}`),Mh("Auth",!0)):HD()}function kb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qD(n){const e=kb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Tx(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Tx(c)}}}function Tx(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class L_{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ps("not implemented")}_getIdTokenResponse(e){return ps("not implemented")}_linkToIdToken(e,t){return ps("not implemented")}_getReauthenticationResolver(e){return ps("not implemented")}}async function GD(n,e){return Hr(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function KD(n,e){return tu(n,"POST","/v1/accounts:signInWithPassword",Cs(n,e))}async function QD(n,e){return Hr(n,"POST","/v1/accounts:sendOobCode",Cs(n,e))}async function YD(n,e){return QD(n,e)}/**
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
 */async function XD(n,e){return tu(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,e))}async function JD(n,e){return tu(n,"POST","/v1/accounts:signInWithEmailLink",Cs(n,e))}/**
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
 */class Fc extends L_{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Fc(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Fc(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nh(e,t,"signInWithPassword",KD);case"emailLink":return XD(e,{email:this._email,oobCode:this._password});default:vr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Nh(e,r,"signUpPassword",GD);case"emailLink":return JD(e,{idToken:t,email:this._email,oobCode:this._password});default:vr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Pa(n,e){return tu(n,"POST","/v1/accounts:signInWithIdp",Cs(n,e))}/**
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
 */const ZD="http://localhost";class vo extends L_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vo(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):vr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,a=P_(t,["providerId","signInMethod"]);if(!r||!i)return null;const c=new vo(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Pa(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Pa(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pa(e,t)}buildRequest(){const e={requestUri:ZD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qa(t)}return e}}/**
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
 */function eM(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function tM(n){const e=nc(rc(n)).link,t=e?nc(rc(e)).deep_link_id:null,r=nc(rc(n)).deep_link_id;return(r?nc(rc(r)).link:null)||r||t||e||n}class V_{constructor(e){var t,r,i,a,c,f;const p=nc(rc(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(r=p.oobCode)!==null&&r!==void 0?r:null,x=eM((i=p.mode)!==null&&i!==void 0?i:null);Ne(g&&v&&x,"argument-error"),this.apiKey=g,this.operation=x,this.code=v,this.continueUrl=(a=p.continueUrl)!==null&&a!==void 0?a:null,this.languageCode=(c=p.lang)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=tM(e);try{return new V_(t)}catch{return null}}}/**
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
 */class Ja{constructor(){this.providerId=Ja.PROVIDER_ID}static credential(e,t){return Fc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=V_.parseLink(t);return Ne(r,"argument-error"),Fc._fromEmailAndCode(e,r.code,r.tenantId)}}Ja.PROVIDER_ID="password";Ja.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ja.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Rb{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class nu extends Rb{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ei extends nu{constructor(){super("facebook.com")}static credential(e){return vo._fromParams({providerId:ei.PROVIDER_ID,signInMethod:ei.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ei.credentialFromTaggedObject(e)}static credentialFromError(e){return ei.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ei.credential(e.oauthAccessToken)}catch{return null}}}ei.FACEBOOK_SIGN_IN_METHOD="facebook.com";ei.PROVIDER_ID="facebook.com";/**
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
 */class ti extends nu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vo._fromParams({providerId:ti.PROVIDER_ID,signInMethod:ti.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return ti.credentialFromTaggedObject(e)}static credentialFromError(e){return ti.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return ti.credential(t,r)}catch{return null}}}ti.GOOGLE_SIGN_IN_METHOD="google.com";ti.PROVIDER_ID="google.com";/**
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
 */class ni extends nu{constructor(){super("github.com")}static credential(e){return vo._fromParams({providerId:ni.PROVIDER_ID,signInMethod:ni.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ni.credentialFromTaggedObject(e)}static credentialFromError(e){return ni.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ni.credential(e.oauthAccessToken)}catch{return null}}}ni.GITHUB_SIGN_IN_METHOD="github.com";ni.PROVIDER_ID="github.com";/**
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
 */class ri extends nu{constructor(){super("twitter.com")}static credential(e,t){return vo._fromParams({providerId:ri.PROVIDER_ID,signInMethod:ri.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ri.credentialFromTaggedObject(e)}static credentialFromError(e){return ri.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return ri.credential(t,r)}catch{return null}}}ri.TWITTER_SIGN_IN_METHOD="twitter.com";ri.PROVIDER_ID="twitter.com";/**
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
 */async function nM(n,e){return tu(n,"POST","/v1/accounts:signUp",Cs(n,e))}/**
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
 */class wo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await gr._fromIdTokenResponse(e,r,i),c=bx(r);return new wo({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=bx(r);return new wo({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function bx(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Sh extends qr{constructor(e,t,r,i){var a;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Sh.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new Sh(e,t,r,i)}}function Ab(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?Sh._fromErrorAndOperation(n,a,e,r):a})}async function rM(n,e,t=!1){const r=await za(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return wo._forOperation(n,"link",r)}/**
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
 */async function sM(n,e,t=!1){const{auth:r}=n;if(Tn(r.app))return Promise.reject(_s(r));const i="reauthenticate";try{const a=await za(n,Ab(r,i,e,n),t);Ne(a.idToken,r,"internal-error");const c=D_(a.idToken);Ne(c,r,"internal-error");const{sub:f}=c;return Ne(n.uid===f,r,"user-mismatch"),wo._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&vr(r,"user-mismatch"),a}}/**
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
 */async function Pb(n,e,t=!1){if(Tn(n.app))return Promise.reject(_s(n));const r="signIn",i=await Ab(n,r,e),a=await wo._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function iM(n,e){return Pb(Ni(n),e)}/**
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
 */async function jb(n){const e=Ni(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function oM(n,e,t){const r=Ni(n);await Nh(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",YD)}async function aM(n,e,t){if(Tn(n.app))return Promise.reject(_s(n));const r=Ni(n),c=await Nh(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",nM).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&jb(n),p}),f=await wo._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(f.user),f}function lM(n,e,t){return Tn(n.app)?Promise.reject(_s(n)):iM(lt(n),Ja.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&jb(n),r})}/**
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
 */async function cM(n,e){return Hr(n,"POST","/v1/accounts:update",e)}/**
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
 */async function uM(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=lt(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await za(r,cM(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const f=r.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=r.displayName,f.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function dM(n,e,t,r){return lt(n).onIdTokenChanged(e,t,r)}function hM(n,e,t){return lt(n).beforeAuthStateChanged(e,t)}function fM(n,e,t,r){return lt(n).onAuthStateChanged(e,t,r)}function pM(n){return lt(n).signOut()}const kh="__sak";/**
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
 */class Ob{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(kh,"1"),this.storage.removeItem(kh),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const mM=1e3,gM=10;class Db extends Ob{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ib(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);SD()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,gM):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},mM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Db.type="LOCAL";const _M=Db;/**
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
 */class Mb extends Ob{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mb.type="SESSION";const Lb=Mb;/**
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
 */function yM(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class vf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new vf(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const f=Array.from(c).map(async g=>g(t.origin,a)),p=await yM(f);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vf.receivers=[];/**
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
 */function F_(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class vM{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((f,p)=>{const g=F_("",20);i.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(x){const E=x;if(E.data.eventId===g)switch(E.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),f(E.data.response);break;default:clearTimeout(v),clearTimeout(a),p(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ur(){return window}function wM(n){Ur().location.href=n}/**
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
 */function Vb(){return typeof Ur().WorkerGlobalScope<"u"&&typeof Ur().importScripts=="function"}async function xM(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function EM(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function TM(){return Vb()?self:null}/**
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
 */const Fb="firebaseLocalStorageDb",bM=1,Rh="firebaseLocalStorage",Ub="fbase_key";class ru{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function wf(n,e){return n.transaction([Rh],e?"readwrite":"readonly").objectStore(Rh)}function IM(){const n=indexedDB.deleteDatabase(Fb);return new ru(n).toPromise()}function hg(){const n=indexedDB.open(Fb,bM);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Rh,{keyPath:Ub})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Rh)?e(r):(r.close(),await IM(),e(await hg()))})})}async function Ix(n,e,t){const r=wf(n,!0).put({[Ub]:e,value:t});return new ru(r).toPromise()}async function CM(n,e){const t=wf(n,!1).get(e),r=await new ru(t).toPromise();return r===void 0?null:r.value}function Cx(n,e){const t=wf(n,!0).delete(e);return new ru(t).toPromise()}const NM=800,SM=3;class zb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>SM)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vf._getInstance(TM()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xM(),!this.activeServiceWorker)return;this.sender=new vM(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||EM()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hg();return await Ix(e,kh,"1"),await Cx(e,kh),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ix(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>CM(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Cx(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=wf(i,!1).getAll();return new ru(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),NM)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zb.type="LOCAL";const kM=zb;new eu(3e4,6e4);/**
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
 */function RM(n,e){return e?ms(e):(Ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class U_ extends L_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pa(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pa(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pa(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function AM(n){return Pb(n.auth,new U_(n),n.bypassAuthState)}function PM(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),sM(t,new U_(n),n.bypassAuthState)}async function jM(n){const{auth:e,user:t}=n;return Ne(t,e,"internal-error"),rM(t,new U_(n),n.bypassAuthState)}/**
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
 */class Bb{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AM;case"linkViaPopup":case"linkViaRedirect":return jM;case"reauthViaPopup":case"reauthViaRedirect":return PM;default:vr(this.auth,"internal-error")}}resolve(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ts(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OM=new eu(2e3,1e4);class ba extends Bb{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ba.currentPopupAction&&ba.currentPopupAction.cancel(),ba.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Ne(e,this.auth,"internal-error"),e}async onExecution(){Ts(this.filter.length===1,"Popup operations only handle one event");const e=F_();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ba.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,OM.get())};e()}}ba.currentPopupAction=null;/**
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
 */const DM="pendingRedirect",qd=new Map;class MM extends Bb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=qd.get(this.auth._key());if(!e){try{const r=await LM(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}qd.set(this.auth._key(),e)}return this.bypassAuthState||qd.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LM(n,e){const t=UM(e),r=FM(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function VM(n,e){qd.set(n._key(),e)}function FM(n){return ms(n._redirectPersistence)}function UM(n){return Wd(DM,n.config.apiKey,n.name)}async function zM(n,e,t=!1){if(Tn(n.app))return Promise.reject(_s(n));const r=Ni(n),i=RM(r,e),c=await new MM(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
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
 */const BM=600*1e3;class $M{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!WM(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!$b(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fr(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BM&&this.cachedEventUids.clear(),this.cachedEventUids.has(Nx(e))}saveEventToCache(e){this.cachedEventUids.add(Nx(e)),this.lastProcessedEventTime=Date.now()}}function Nx(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function $b({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function WM(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return $b(n);default:return!1}}/**
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
 */async function qM(n,e={}){return Hr(n,"GET","/v1/projects",e)}/**
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
 */const HM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,GM=/^https?/;async function KM(n){if(n.config.emulator)return;const{authorizedDomains:e}=await qM(n);for(const t of e)try{if(QM(t))return}catch{}vr(n,"unauthorized-domain")}function QM(n){const e=ug(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!GM.test(t))return!1;if(HM.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const YM=new eu(3e4,6e4);function Sx(){const n=Ur().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XM(n){return new Promise((e,t)=>{var r,i,a;function c(){Sx(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sx(),t(Fr(n,"network-request-failed"))},timeout:YM.get()})}if(!((i=(r=Ur().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((a=Ur().gapi)===null||a===void 0)&&a.load)c();else{const f=LD("iframefcb");return Ur()[f]=()=>{gapi.load?c():t(Fr(n,"network-request-failed"))},Nb(`${MD()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Hd=null,e})}let Hd=null;function JM(n){return Hd=Hd||XM(n),Hd}/**
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
 */const ZM=new eu(5e3,15e3),eL="__/auth/iframe",tL="emulator/auth/iframe",nL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function sL(n){const e=n.config;Ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?O_(e,tL):`https://${n.config.authDomain}/${eL}`,r={apiKey:e.apiKey,appName:n.name,v:bi},i=rL.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${qa(r).slice(1)}`}async function iL(n){const e=await JM(n),t=Ur().gapi;return Ne(t,n,"internal-error"),e.open({where:document.body,url:sL(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nL,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=Fr(n,"network-request-failed"),f=Ur().setTimeout(()=>{a(c)},ZM.get());function p(){Ur().clearTimeout(f),i(r)}r.ping(p).then(p,()=>{a(c)})}))}/**
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
 */const oL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},aL=500,lL=600,cL="_blank",uL="http://localhost";class kx{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function dL(n,e,t,r=aL,i=lL){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let f="";const p=Object.assign(Object.assign({},oL),{width:r.toString(),height:i.toString(),top:a,left:c}),g=cn().toLowerCase();t&&(f=wb(g)?cL:t),yb(g)&&(e=e||uL,p.scrollbars="yes");const v=Object.entries(p).reduce((E,[R,O])=>`${E}${R}=${O},`,"");if(ND(g)&&f!=="_self")return hL(e||"",f),new kx(null);const x=window.open(e||"",f,v);Ne(x,n,"popup-blocked");try{x.focus()}catch{}return new kx(x)}function hL(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const fL="__/auth/handler",pL="emulator/auth/handler",mL=encodeURIComponent("fac");async function Rx(n,e,t,r,i,a){Ne(n.config.authDomain,n,"auth-domain-config-required"),Ne(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:bi,eventId:i};if(e instanceof Rb){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Cm(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,x]of Object.entries({}))c[v]=x}if(e instanceof nu){const v=e.getScopes().filter(x=>x!=="");v.length>0&&(c.scopes=v.join(","))}n.tenantId&&(c.tid=n.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await n._getAppCheckToken(),g=p?`#${mL}=${encodeURIComponent(p)}`:"";return`${gL(n)}?${qa(f).slice(1)}${g}`}function gL({config:n}){return n.emulator?O_(n,pL):`https://${n.authDomain}/${fL}`}/**
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
 */const xm="webStorageSupport";class _L{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lb,this._completeRedirectFn=zM,this._overrideRedirectResult=VM}async _openPopup(e,t,r,i){var a;Ts((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const c=await Rx(e,t,r,ug(),i);return dL(e,c,F_())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Rx(e,t,r,ug(),i);return wM(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(Ts(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await iL(e),r=new $M(e);return t.register("authEvent",i=>(Ne(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xm,{type:xm},i=>{var a;const c=(a=i?.[0])===null||a===void 0?void 0:a[xm];c!==void 0&&t(!!c),vr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KM(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ib()||vb()||M_()}}const yL=_L;var Ax="@firebase/auth",Px="1.10.8";/**
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
 */class vL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){Ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function wL(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function xL(n){fi(new ys("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=r.options;Ne(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const p={apiKey:c,authDomain:f,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Cb(n)},g=new jD(r,i,a,p);return $D(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),fi(new ys("auth-internal",e=>{const t=Ni(e.getProvider("auth").getImmediate());return(r=>new vL(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Yn(Ax,Px,wL(n)),Yn(Ax,Px,"esm2017")}/**
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
 */const EL=300,TL=pE("authIdTokenMaxAge")||EL;let jx=null;const bL=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>TL)return;const i=t?.token;jx!==i&&(jx=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function IL(n=Fh()){const e=Bc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BD(n,{popupRedirectResolver:yL,persistence:[kM,_M,Lb]}),r=pE("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=bL(a.toString());hM(t,c,()=>c(t.currentUser)),dM(t,f=>c(f))}}const i=hE("auth");return i&&WD(t,`http://${i}`),t}function CL(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}OD({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Fr("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",CL().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});xL("Browser");var NL="firebase",SL="11.10.0";/**
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
 */Yn(NL,SL,"app");/**
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
 */const Wb="firebasestorage.googleapis.com",kL="storageBucket",RL=120*1e3,AL=600*1e3;/**
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
 */class Gr extends qr{constructor(e,t,r=0){super(Em(e),`Firebase Storage: ${t} (${Em(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Gr.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Em(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Wr;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Wr||(Wr={}));function Em(n){return"storage/"+n}function PL(){const n="An unknown error occurred, please check the error payload for server response.";return new Gr(Wr.UNKNOWN,n)}function jL(){return new Gr(Wr.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function OL(){return new Gr(Wr.CANCELED,"User canceled the upload/download.")}function DL(n){return new Gr(Wr.INVALID_URL,"Invalid URL '"+n+"'.")}function ML(n){return new Gr(Wr.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Ox(n){return new Gr(Wr.INVALID_ARGUMENT,n)}function qb(){return new Gr(Wr.APP_DELETED,"The Firebase app was deleted.")}function LL(n){return new Gr(Wr.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class _r{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let r;try{r=_r.makeFromUrl(e,t)}catch{return new _r(e,"")}if(r.path==="")return r;throw ML(e)}static makeFromUrl(e,t){let r=null;const i="([A-Za-z0-9.\\-_]+)";function a(G){G.path.charAt(G.path.length-1)==="/"&&(G.path_=G.path_.slice(0,-1))}const c="(/(.*))?$",f=new RegExp("^gs://"+i+c,"i"),p={bucket:1,path:3};function g(G){G.path_=decodeURIComponent(G.path)}const v="v[A-Za-z0-9_]+",x=t.replace(/[.]/g,"\\."),E="(/([^?#]*).*)?$",R=new RegExp(`^https?://${x}/${v}/b/${i}/o${E}`,"i"),O={bucket:1,path:3},U=t===Wb?"(?:storage.googleapis.com|storage.cloud.google.com)":t,M="([^?#]*)",Q=new RegExp(`^https?://${U}/${i}/${M}`,"i"),le=[{regex:f,indices:p,postModify:a},{regex:R,indices:O,postModify:g},{regex:Q,indices:{bucket:1,path:2},postModify:g}];for(let G=0;G<le.length;G++){const J=le[G],fe=J.regex.exec(e);if(fe){const j=fe[J.indices.bucket];let I=fe[J.indices.path];I||(I=""),r=new _r(j,I),J.postModify(r);break}}if(r==null)throw DL(e);return r}}class VL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function FL(n,e,t){let r=1,i=null,a=null,c=!1,f=0;function p(){return f===2}let g=!1;function v(...M){g||(g=!0,e.apply(null,M))}function x(M){i=setTimeout(()=>{i=null,n(R,p())},M)}function E(){a&&clearTimeout(a)}function R(M,...Q){if(g){E();return}if(M){E(),v.call(null,M,...Q);return}if(p()||c){E(),v.call(null,M,...Q);return}r<64&&(r*=2);let le;f===1?(f=2,le=0):le=(r+Math.random())*1e3,x(le)}let O=!1;function U(M){O||(O=!0,E(),!g&&(i!==null?(M||(f=2),clearTimeout(i),x(0)):M||(f=1)))}return x(0),a=setTimeout(()=>{c=!0,U(!0)},t),U}function UL(n){n(!1)}/**
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
 */function zL(n){return n!==void 0}function Dx(n,e,t,r){if(r<e)throw Ox(`Invalid value for '${n}'. Expected ${e} or greater.`);if(r>t)throw Ox(`Invalid value for '${n}'. Expected ${t} or less.`)}function BL(n){const e=encodeURIComponent;let t="?";for(const r in n)if(n.hasOwnProperty(r)){const i=e(r)+"="+e(n[r]);t=t+i+"&"}return t=t.slice(0,-1),t}var Ah;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ah||(Ah={}));/**
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
 */function $L(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,a=e.indexOf(n)!==-1;return t||i||a}/**
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
 */class WL{constructor(e,t,r,i,a,c,f,p,g,v,x,E=!0,R=!1){this.url_=e,this.method_=t,this.headers_=r,this.body_=i,this.successCodes_=a,this.additionalRetryCodes_=c,this.callback_=f,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=v,this.connectionFactory_=x,this.retry=E,this.isUsingEmulator=R,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,U)=>{this.resolve_=O,this.reject_=U,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Pd(!1,null,!0));return}const a=this.connectionFactory_();this.pendingConnection_=a;const c=f=>{const p=f.loaded,g=f.lengthComputable?f.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&a.addUploadProgressListener(c),a.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&a.removeUploadProgressListener(c),this.pendingConnection_=null;const f=a.getErrorCode()===Ah.NO_ERROR,p=a.getStatus();if(!f||$L(p,this.additionalRetryCodes_)&&this.retry){const v=a.getErrorCode()===Ah.ABORT;r(!1,new Pd(!1,null,v));return}const g=this.successCodes_.indexOf(p)!==-1;r(!0,new Pd(g,a))})},t=(r,i)=>{const a=this.resolve_,c=this.reject_,f=i.connection;if(i.wasSuccessCode)try{const p=this.callback_(f,f.getResponse());zL(p)?a(p):a()}catch(p){c(p)}else if(f!==null){const p=PL();p.serverResponse=f.getErrorText(),this.errorCallback_?c(this.errorCallback_(f,p)):c(p)}else if(i.canceled){const p=this.appDelete_?qb():OL();c(p)}else{const p=jL();c(p)}};this.canceled_?t(!1,new Pd(!1,null,!0)):this.backoffId_=FL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&UL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Pd{constructor(e,t,r){this.wasSuccessCode=e,this.connection=t,this.canceled=!!r}}function qL(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function HL(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function GL(n,e){e&&(n["X-Firebase-GMPID"]=e)}function KL(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function QL(n,e,t,r,i,a,c=!0,f=!1){const p=BL(n.urlParams),g=n.url+p,v=Object.assign({},n.headers);return GL(v,e),qL(v,t),HL(v,a),KL(v,r),new WL(g,n.method,v,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,c,f)}/**
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
 */function YL(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function XL(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Ph{constructor(e,t){this._service=e,t instanceof _r?this._location=t:this._location=_r.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Ph(e,t)}get root(){const e=new _r(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return XL(this._location.path)}get storage(){return this._service}get parent(){const e=YL(this._location.path);if(e===null)return null;const t=new _r(this._location.bucket,e);return new Ph(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw LL(e)}}function Mx(n,e){const t=e?.[kL];return t==null?null:_r.makeFromBucketSpec(t,n)}function JL(n,e,t,r={}){n.host=`${e}:${t}`;const i=bs(e);i&&(Dh(`https://${n.host}/b`),Mh("Storage",!0)),n._isUsingEmulator=!0,n._protocol=i?"https":"http";const{mockUserToken:a}=r;a&&(n._overrideAuthToken=typeof a=="string"?a:yg(a,n.app.options.projectId))}class ZL{constructor(e,t,r,i,a,c=!1){this.app=e,this._authProvider=t,this._appCheckProvider=r,this._url=i,this._firebaseVersion=a,this._isUsingEmulator=c,this._bucket=null,this._host=Wb,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=RL,this._maxUploadRetryTime=AL,this._requests=new Set,i!=null?this._bucket=_r.makeFromBucketSpec(i,this._host):this._bucket=Mx(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_r.makeFromBucketSpec(this._url,e):this._bucket=Mx(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Dx("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Dx("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Tn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Ph(this,e)}_makeRequest(e,t,r,i,a=!0){if(this._deleted)return new VL(qb());{const c=QL(e,this._appId,r,i,t,this._firebaseVersion,a,this._isUsingEmulator);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,r,i).getPromise()}}const Lx="@firebase/storage",Vx="0.13.14";/**
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
 */const Hb="storage";function e6(n=Fh(),e){n=lt(n);const r=Bc(n,Hb).getImmediate({identifier:e}),i=_g("storage");return i&&t6(r,...i),r}function t6(n,e,t,r={}){JL(n,e,t,r)}function n6(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new ZL(t,r,i,e,bi)}function r6(){fi(new ys(Hb,n6,"PUBLIC").setMultipleInstances(!0)),Yn(Lx,Vx,""),Yn(Lx,Vx,"esm2017")}r6();const s6={apiKey:"AIzaSyBwptsaCYLtLGdKIh1ut84-FZnt8OiToYo",authDomain:"groupby-me.firebaseapp.com",databaseURL:"https://groupby-me-default-rtdb.firebaseio.com/",projectId:"groupby-me",storageBucket:"groupby-me.firebasestorage.app",messagingSenderId:"106122999914",appId:"1:106122999914:web:a7ad014f757346abb93213"},xf=vE(s6),vc=IL(xf),jd=PP(xf);e6(xf);const ec=nD(xf);function Tm({className:n,type:e,...t}){return d.jsx("input",{type:e,"data-slot":"input",className:mg("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-input-background transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",n),...t})}function i6({isOpen:n,onClose:e,onLoginSuccess:t}){const[r,i]=oe.useState("login"),[a,c]=oe.useState(""),[f,p]=oe.useState(""),[g,v]=oe.useState(""),[x,E]=oe.useState(""),[R,O]=oe.useState(""),[U,M]=oe.useState(!1);if(!n)return null;const Q=()=>{E(""),O(""),p("")},te=async G=>{G.preventDefault(),M(!0),O(""),E("");try{if(r==="login")await lM(vc,a,f),t();else if(r==="register"){const J=await aM(vc,a,f);g&&await uM(J.user,{displayName:g}),t()}else await oM(vc,a),E("Enviamos um link para redefinir sua senha."),i("login")}catch(J){O(J?.message||"Não foi possível concluir a ação. Tente novamente.")}finally{M(!1)}},le={login:"Entrar",register:"Criar conta",reset:"Recuperar senha"};return d.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center px-4 py-6 bg-black/60 backdrop-blur-sm",children:d.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 relative",children:[d.jsx("button",{onClick:()=>{e(),i("login"),c(""),p(""),v(""),Q()},className:"absolute top-4 right-4 text-gray-500 hover:text-gray-700","aria-label":"Fechar",children:"X"}),d.jsx("h2",{className:"text-2xl font-semibold text-gray-900 mb-6",children:le[r]}),d.jsxs("form",{className:"space-y-4",onSubmit:te,children:[r==="register"&&d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"Nome"}),d.jsx(Tm,{type:"text",placeholder:"Seu nome",value:g,onChange:G=>v(G.target.value),required:!0})]}),d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"E-mail"}),d.jsx(Tm,{type:"email",placeholder:"voce@email.com",value:a,onChange:G=>c(G.target.value),required:!0})]}),r!=="reset"&&d.jsxs("div",{children:[d.jsx("label",{className:"text-sm text-gray-700 mb-1 block",children:"Senha"}),d.jsx(Tm,{type:"password",placeholder:"Sua senha",value:f,onChange:G=>p(G.target.value),required:!0})]}),R&&d.jsx("p",{className:"text-sm text-red-600",children:R}),x&&d.jsx("p",{className:"text-sm text-green-600",children:x}),d.jsx(Ye,{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-700",disabled:U,children:U?"Processando...":le[r]})]}),d.jsxs("div",{className:"mt-4 text-sm text-gray-600 flex items-center justify-between",children:[r!=="reset"?d.jsx("button",{type:"button",onClick:()=>{i("reset"),Q()},className:"hover:text-gray-900",children:"Esqueci minha senha"}):d.jsx("button",{type:"button",onClick:()=>{i("login"),Q()},className:"hover:text-gray-900",children:"Voltar para login"}),d.jsx("button",{type:"button",onClick:()=>{i(r==="login"?"register":"login"),Q()},className:"hover:text-gray-900",children:r==="login"?"Criar conta":"Já tenho conta"})]})]})})}function o6(){const[n,e]=oe.useState(!1),[t,r]=oe.useState(null),[i,a]=oe.useState(!1),[c,f]=oe.useState(!1),[p,g]=oe.useState(null),[v,x]=oe.useState(!1),[E,R]=oe.useState(!1),[O,U]=oe.useState(!1),[M,Q]=oe.useState(!1),[te,le]=oe.useState(!1),[G,J]=oe.useState(void 0),[fe,j]=oe.useState(!1),[I,S]=oe.useState(!1),C=oe.useRef({}),[A,V]=oe.useState([]);oe.useEffect(()=>{const B=fM(vc,L=>{L?(e(!0),r({id:L.uid,name:L.displayName||L.email||"Usuário",email:L.email,type:"user",points:0,level:1})):(e(!1),r(null))}),ce=Tw(jd,"pins"),ne=GP(ce,L=>{const H=L.docs.map(he=>{const pe=he.data(),je=pe.createdAt?.toDate?pe.createdAt.toDate():new Date(pe.createdAt??Date.now());return{id:he.id,type:pe.type,name:pe.name,lat:pe.lat,lng:pe.lng,address:pe.address,createdBy:pe.createdBy,createdAt:je,avatar:pe.avatar,description:pe.description,businessInfo:pe.businessInfo,stats:pe.stats??{views:0,chatsStarted:0,messages:0},reported:!!pe.reported,moderationStatus:pe.moderationStatus}});V(H);const ae=new Set(H.map(he=>he.id));Object.entries(C.current).forEach(([he,pe])=>{ae.has(he)||(pe(),delete C.current[he])}),H.forEach(he=>{if(C.current[he.id])return;const pe=Zl(ec,`pinStats/${he.id}`),je=cb(pe,be=>{const Ue=be.val();Ue&&V(Ge=>Ge.map(tt=>tt.id===he.id?{...tt,stats:{...tt.stats,...Ue}}:tt))});C.current[he.id]=je})},L=>{console.error("Error loading pins from Firestore",L)});return()=>{B(),ne(),Object.values(C.current).forEach(L=>L()),C.current={}}},[]);const k=async B=>{g(B);try{const ce=Qm(jd,"pins",B.id);await Sw(ce,{"stats.views":Rw(1)}),await px(Zl(ec,`pinStats/${B.id}/views`),ne=>(ne||0)+1)}catch(ce){console.error("Failed to increment views",ce)}n&&t?.id===B.createdBy?j(!0):B.type==="business"||B.type==="public"?x(!0):R(!0)},nt=B=>{if(p){const ce=Qm(jd,"pins",p.id);Sw(ce,{"stats.chatsStarted":Rw(1)}).catch(ne=>{console.error("Failed to increment chat counter",ne)}),px(Zl(ec,`pinStats/${p.id}/chatsStarted`),ne=>(ne||0)+1).catch(ne=>{console.error("Failed to increment chat counter (RTDB)",ne)})}x(!1),R(!0),B&&J(B)},ct=B=>{const ce=B.type!=="personal"&&B.businessInfo?{...B.businessInfo,products:(B.businessInfo.products||[]).filter(Boolean),services:(B.businessInfo.services||[]).filter(Boolean),categories:(B.businessInfo.categories||[]).filter(Boolean)}:null,ne={type:B.type,name:B.name,lat:B.lat,lng:B.lng,address:B.address,createdBy:t?.id||"user",createdAt:new Date,description:B.description,stats:{views:0,chatsStarted:0,messages:0},reported:!1},L=ce?{...ne}:ne,H=ce?{...ne,businessInfo:ce,createdAt:kw()}:{...ne,createdAt:kw()};HP(Tw(jd,"pins"),H).then(ae=>{const he=ce?{...ne,businessInfo:ce,createdAt:fx()}:{...ne,createdAt:fx()};hx(Zl(ec,`pins/${ae.id}`),he).then(()=>hx(Zl(ec,`pinStats/${ae.id}`),L.stats).catch(pe=>{console.error("Failed to seed stats in Realtime Database",pe)})).catch(pe=>{console.error("Failed to create pin in Realtime Database",pe)}),f(!1)}).catch(ae=>{console.error("Failed to create pin in Firestore",ae)})},Je=()=>S(!0),Me=()=>{pM(vc).catch(B=>{console.error("Failed to logout",B)})};return d.jsx("div",{className:"h-screen flex flex-col overflow-hidden bg-gray-900",children:fe&&p?d.jsx(JS,{pin:p,onBack:()=>{j(!1),g(null)},onUpdate:B=>{V(A.map(ce=>ce.id===p.id?{...ce,...B}:ce))}}):d.jsxs(d.Fragment,{children:[d.jsx(BS,{isLoggedIn:n,currentUser:t,onMenuClick:()=>a(!0),onNotificationClick:()=>U(!0),onLogin:Je,onLogout:Me}),d.jsx("div",{className:"flex-1 relative",children:d.jsx(VS,{pins:A,onPinClick:k,onCreatePin:()=>f(!0),isLoggedIn:n})}),d.jsx(zS,{isOpen:i,onClose:()=>a(!1),isLoggedIn:n,currentUser:t,onOpenRewards:()=>{Q(!0),a(!1)},onOpenModeration:()=>{le(!0),a(!1)}}),d.jsx($S,{isOpen:c,onClose:()=>f(!1),onCreate:ct,currentUser:t}),p&&d.jsx(WS,{isOpen:v,onClose:()=>{x(!1),g(null)},pin:p,onStartChat:nt,isLoggedIn:n,onLogin:Je}),p&&d.jsx(HS,{isOpen:E,onClose:()=>{R(!1),g(null),J(void 0)},pin:p,isLoggedIn:n,currentUser:t,onLogin:Je,interest:G}),d.jsx(KS,{isOpen:O,onClose:()=>U(!1),currentUser:t}),d.jsx(QS,{isOpen:M,onClose:()=>Q(!1),currentUser:t}),d.jsx(YS,{isOpen:te,onClose:()=>le(!1),pins:A,onModerate:(B,ce)=>{V(A.map(ne=>ne.id===B?{...ne,moderationStatus:ce,reported:!1}:ne))}}),d.jsx(i6,{isOpen:I,onClose:()=>S(!1),onLoginSuccess:()=>S(!1)})]})})}oC.createRoot(document.getElementById("root")).render(d.jsx(o6,{}));
