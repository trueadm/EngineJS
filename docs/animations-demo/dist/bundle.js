!function(){"use strict";function e(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=Array(n);t<n;t++)r[t]=e[t];return r}function n(e,n){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(t)return(t=t.call(e)).next.bind(t);if(Array.isArray(e)||(t=o(e))||n){t&&(e=t);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(){return t=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},t.apply(null,arguments)}function r(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,i(e,n)}function i(e,n){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},i(e,n)}function o(n,t){if(n){if("string"==typeof n)return e(n,t);var r={}.toString.call(n).slice(8,-1);return"Object"===r&&n.constructor&&(r=n.constructor.name),"Map"===r||"Set"===r?Array.from(n):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(n,t):void 0}}var a=Array.isArray;function l(e){var n=typeof e;return"string"===n||"number"===n}function u(e){return void 0===e||null===e}function s(e){return null===e||!1===e||!0===e||void 0===e}function c(e){return"function"===typeof e}function f(e){return"string"===typeof e}function d(e){return null===e}function p(e){return!d(e)&&"object"===typeof e}var v={},h=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function m(e){return e.substring(2).toLowerCase()}function g(e,n){e.appendChild(n)}function y(e,n,t){d(t)?g(e,n):e.insertBefore(n,t)}function b(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function k(e,n,t){e.replaceChild(n,t)}function $(e,n){e.removeChild(n)}function w(e){for(var n=0;n<e.length;n++)e[n]()}function C(e,n,t){var r=e.children;if(0!==(4&t))return r.$LI;if(0!==(8192&t))return 2===e.childFlags?r:r[n?0:r.length-1];return r}function A(e,n){for(var t,r=e;!u(r);){if(0!==(1521&(t=r.flags)))return r.dom;r=C(r,n,t)}return null}function S(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&c(n)&&n()}))}function I(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var r=e[t];y(r.parent,r.dom,r.next)}e.splice(0,e.length)}function T(e,n,t){for(;!u(e);){var r=e.flags;if(0!==(1521&r))return void(t&&e.dom.parentNode!==n||$(n,e.dom));var i=e.children;if(0!==(4&r)&&(e=i.$LI),0!==(8&r)&&(e=i),0!==(8192&r)){if(2!==e.childFlags){for(var o=0,a=i.length;o<a;++o)T(i[o],n,!1);return}e=i}}}function x(e,n){return function(){T(e,n,!0)}}function P(e,n,t){t.componentWillDisappear.length>0?S(t.componentWillDisappear,x(e,n)):T(e,n,!1)}function D(e,n,t,r,i,o,a,l){e.componentWillMove.push({dom:r,fn:function(){0!==(4&a)?t.componentWillMove(n,i,r):0!==(8&a)&&t.onComponentWillMove(n,i,r,l)},next:o,parent:i})}function N(e,n,t,r,i){for(var o,a,l=n.flags;!u(n);){var s=n.flags;if(0!==(1521&s))return void(u(o)||!c(o.componentWillMove)&&!c(o.onComponentWillMove)?y(t,n.dom,r):D(i,e,o,n.dom,t,r,l,a));var f=n.children;if(0!==(4&s))o=n.children,a=n.props,n=f.$LI;else if(0!==(8&s))o=n.ref,a=n.props,n=f;else if(0!==(8192&s)){if(2!==n.childFlags){for(var d=0,p=f.length;d<p;++d)N(e,f[d],t,r,i);return}n=f}}}function F(e,n,r){if(c(e.constructor.getDerivedStateFromProps))return t({},r,e.constructor.getDerivedStateFromProps(n,r));return r}var E={v:!1},U={createVNode:null};function L(e,n){e.textContent=n}function V(e,n){return p(e)&&e.event===n.event&&e.data===n.data}function M(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function W(e,n){return c(e)&&(e(n),!0)}var R="$";function O(e,n,t,r,i,o,a,l){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===i?null:i,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=l}function B(e,n,t,r,i,o,a,l){var u=void 0===i?1:i,s=new O(u,r,t,e,a,o,l,n);return 0===u&&Y(s,s.children),s}function _(e,n,t){if(4&e)return t;var r=(32768&e?n.render:n).defaultHooks;if(u(r))return t;if(u(t))return r;return M(t,r)}function j(e,n,r){var i=(32768&e?n.render:n).defaultProps;if(u(i))return r;if(u(r))return t({},i);return M(r,i)}function H(e,n){var t;if(12&e)return e;if(null!=(t=n.prototype)&&t.render)return 4;if(n.render)return 32776;return 8}function K(e,n,t,r,i){var o=new O(1,null,null,e=H(e,n),r,j(e,n,t),_(e,n,i),n);return c(U.createVNode)&&U.createVNode(o),o}function q(e,n){return new O(1,u(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function G(e,n,t){var r=B(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=z(),r.childFlags=2;break;case 16:r.children=[q(e)],r.childFlags=4}return r}function Q(e){var n=e.children,t=e.childFlags;return G(2===t?X(n):n.map(X),t,e.key)}function X(e){var n=-16385&e.flags,t=e.props;if(14&n&&!d(t)){var r=t;for(var i in t={},r)t[i]=r[i]}if(0===(8192&n))return new O(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return Q(e)}function z(){return q("",null)}function Z(e,n,t,r){for(var i=e.length;t<i;t++){var o=e[t];if(!s(o)){var u=r+R+t;if(a(o))Z(o,n,0,u);else{if(l(o))o=q(o,u);else{var c=o.key,p=f(c)&&c[0]===R;(81920&o.flags||p)&&(o=X(o)),o.flags|=65536,p?c.substring(0,r.length)!==r&&(o.key=r+c):d(c)?o.key=u:o.key=r+c}n.push(o)}}}}function J(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case"$F":return 8192;default:return 1}}function Y(e,n){var t,r=1;if(s(n))t=n;else if(l(n))r=16,t=n;else if(a(n)){for(var i=n.length,o=0;o<i;++o){var u=n[o];if(s(u)||a(u)){t=t||n.slice(0,o),Z(n,t,o,"");break}if(l(u))(t=t||n.slice(0,o)).push(q(u,R+o));else{var c=u.key,p=(81920&u.flags)>0,v=d(c),h=f(c)&&c[0]===R;p||v||h?(t=t||n.slice(0,o),(p||h)&&(u=X(u)),(v||h)&&(u.key=R+o),t.push(u)):t&&t.push(u),u.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=X(n)),r=2;return e.children=t,e.childFlags=r,e}function ee(e){if(s(e)||l(e))return q(e,null);if(a(e))return G(e,0,null);return 16384&e.flags?X(e):e}var ne="http://www.w3.org/1999/xlink",te="http://www.w3.org/XML/1998/namespace",re={"xlink:actuate":ne,"xlink:arcrole":ne,"xlink:href":ne,"xlink:role":ne,"xlink:show":ne,"xlink:title":ne,"xlink:type":ne,"xml:base":te,"xml:lang":te,"xml:space":te};function ie(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var oe=ie(0),ae=ie(null),le=ie(!0);function ue(e,n){var t=n.$EV;return t||(t=n.$EV=ie(null)),t[e]||1===++oe[e]&&(ae[e]=ye(e)),t}function se(e,n){var t=n.$EV;null!=t&&t[e]&&(0===--oe[e]&&(document.removeEventListener(m(e),ae[e]),ae[e]=null),t[e]=null)}function ce(e,n,t,r){if(c(t))ue(e,r)[e]=t;else if(p(t)){if(V(n,t))return;ue(e,r)[e]=t}else se(e,r)}function fe(e){return c(e.composedPath)?e.composedPath()[0]:e.target}function de(e,n,t,r){var i=fe(e);do{if(n&&i.disabled)return;var o=i.$EV;if(!u(o)){var a=o[t];if(a&&(r.dom=i,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}i=i.parentNode}while(!d(i))}function pe(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ve(){return this.defaultPrevented}function he(){return this.cancelBubble}function me(e){var n={dom:document};return e.isDefaultPrevented=ve,e.isPropagationStopped=he,e.stopPropagation=pe,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function ge(e){var n="onClick"===e||"onDblClick"===e;return function(t){de(t,n,e,me(t))}}function ye(e){var n=ge(e);return document.addEventListener(m(e),n),n}function be(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ke(e,n,t){var r=e[n];if(r)r.event?r.event(r.data,t):r(t);else{var i=n.toLowerCase();c(e[i])&&e[i](t)}}function $e(e,n){var t=function(t){var r,i=this.$V;if(u(i))return;var o=null!=(r=i.props)?r:v,a=i.dom;if(f(e))ke(o,e,t);else for(var l=0;l<e.length;++l)ke(o,e[l],t);if(c(n)){var s,d=this.$V,p=null!=(s=d.props)?s:v;n(p,a,!1,d)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function we(e,n,t){var r="$"+n,i=e[r];if(i){if(i[1].wrapped)return;e.removeEventListener(i[0],i[1]),e[r]=null}c(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function Ce(e){return"checkbox"===e||"radio"===e}var Ae=$e("onInput",xe),Se=$e(["onClick","onChange"],xe);function Ie(e){e.stopPropagation()}function Te(e,n){Ce(n.type)?(we(e,"change",Se),we(e,"click",Ie)):we(e,"input",Ae)}function xe(e,n){var t=e.type,r=e.value,i=e.checked,o=e.multiple,a=e.defaultValue,l=!u(r);null!=t&&t!==n.type&&n.setAttribute("type",t),u(o)||o===n.multiple||(n.multiple=o),u(a)||l||(n.defaultValue=a+""),Ce(t)?(l&&(n.value=r),u(i)||(n.checked=i)):l&&n.value!==r?(n.defaultValue=r,n.value=r):u(i)||(n.checked=i)}function Pe(e,n){if("option"===e.type)De(e,n);else{var t=e.children,r=e.flags;if(0!==(4&r))Pe(t.$LI,n);else if(0!==(8&r))Pe(t,n);else if(2===e.childFlags)Pe(t,n);else if(0!==(12&e.childFlags))for(var i=0,o=t.length;i<o;++i)Pe(t[i],n)}}function De(e,n){var t,r=null!=(t=e.props)?t:v,i=r.value,o=e.dom;o.value=i,i===n||a(n)&&n.includes(i)?o.selected=!0:u(n)&&u(r.selected)||(o.selected=Boolean(r.selected))}Ie.wrapped=!0;var Ne=$e("onChange",Ee);function Fe(e){we(e,"change",Ne)}function Ee(e,n,t,r){var i=Boolean(e.multiple);u(e.multiple)||i===n.multiple||(n.multiple=i);var o=e.selectedIndex;if(-1===o&&(n.selectedIndex=-1),1!==r.childFlags){var a=e.value;"number"===typeof o&&o>-1&&!u(n.options[o])&&(a=n.options[o].value),t&&u(a)&&(a=e.defaultValue),Pe(r,a)}}var Ue,Le,Ve=$e("onInput",Re),Me=$e("onChange");function We(e,n){we(e,"input",Ve),c(n.onChange)&&we(e,"change",Me)}function Re(e,n,t){var r=e.value,i=n.value;if(u(r)){if(t){var o=e.defaultValue;u(o)||o===i||(n.defaultValue=o,n.value=o)}}else i!==r&&(n.defaultValue=r,n.value=r)}function Oe(e,n,t,r,i,o){0!==(64&e)?xe(r,t):0!==(256&e)?Ee(r,t,i,n):0!==(128&e)&&Re(r,t,i),o&&(t.$V=n)}function Be(e,n,t){0!==(64&e)?Te(n,t):0!==(256&e)?Fe(n):0!==(128&e)&&We(n,t)}function _e(e){return Ce(e.type)?!u(e.checked):!u(e.value)}function je(e){u(e)||!W(e,null)&&e.current&&(e.current=null)}function He(e,n,t){u(e)||!c(e)&&void 0===e.current||t.push((function(){W(e,n)||void 0===e.current||(e.current=n)}))}function Ke(e,n,t){qe(e,t),P(e,n,t)}function qe(e,n){var t,r=e.flags,i=e.children;if(0!==(481&r)){t=e.ref;var o=e.props;je(t);var a=e.childFlags;if(!d(o))for(var l=Object.keys(o),s=0,f=l.length;s<f;s++){var p=l[s];le[p]&&se(p,e.dom)}12&a?Ge(i,n):2===a&&qe(i,n)}else if(i)if(4&r){c(i.componentWillUnmount)&&i.componentWillUnmount();var m=n;c(i.componentWillDisappear)&&(m=new h,Ze(n,i,i.$LI.dom,r,void 0)),je(e.ref),i.$UN=!0,qe(i.$LI,m)}else if(8&r){var g=n;if(!u(t=e.ref)){var y=null;c(t.onComponentWillUnmount)&&(y=A(e,!0),t.onComponentWillUnmount(y,e.props||v)),c(t.onComponentWillDisappear)&&(g=new h,Ze(n,t,y=y||A(e,!0),r,e.props))}qe(i,g)}else 1024&r?Ke(i,e.ref,n):8192&r&&12&e.childFlags&&Ge(i,n)}function Ge(e,n){for(var t=0,r=e.length;t<r;++t)qe(e[t],n)}function Qe(e,n){return function(){if(n)for(var t=0;t<e.length;t++)T(e[t],n,!1)}}function Xe(e,n,t){t.componentWillDisappear.length>0?S(t.componentWillDisappear,Qe(n,e)):e.textContent=""}function ze(e,n,t,r){Ge(t,r),8192&n.flags?P(n,e,r):Xe(e,t,r)}function Ze(e,n,t,r,i){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,i,e)}))}function Je(e){var n=e.event;return function(t){n(e.data,t)}}function Ye(e,n,t,r){if(p(t)){if(V(n,t))return;t=Je(t)}we(r,m(e),t)}function en(e,n,t){if(u(n))return void t.removeAttribute("style");var r,i,o=t.style;if(f(n))return void(o.cssText=n);if(u(e)||f(e))for(r in n)i=n[r],o.setProperty(r,i);else{for(r in n)(i=n[r])!==e[r]&&o.setProperty(r,i);for(r in e)u(n[r])&&o.removeProperty(r)}}function nn(e,n,t,r,i){var o=(null==e?void 0:e.__html)||"",a=(null==n?void 0:n.__html)||"";o!==a&&(u(a)||be(r,a)||(d(t)||(12&t.childFlags?Ge(t.children,i):2===t.childFlags&&qe(t.children,i),t.children=null,t.childFlags=1),r.innerHTML=a))}function tn(e,n,t){var r=u(e)?"":e;n[t]!==r&&(n[t]=r)}function rn(e,n,t,r,i,o,a,l){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(o&&"value"===e)break;tn(t,r,e);break;case"style":en(n,t,r);break;case"dangerouslySetInnerHTML":nn(n,t,a,r,l);break;default:le[e]?ce(e,n,t,r):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ye(e,n,t,r):u(t)?r.removeAttribute(e):i&&re[e]?r.setAttributeNS(re[e],e,t):r.setAttribute(e,t)}}function on(e,n,t,r,i,o){var a=!1,l=(448&n)>0;for(var u in l&&(a=_e(t))&&Be(n,r,t),t)rn(u,null,t[u],r,i,a,null,o);l&&Oe(n,e,r,t,!0,a)}function an(e,n,r){var i=ee(e.render(n,e.state,r)),o=r;return c(e.getChildContext)&&(o=t({},r,e.getChildContext())),e.$CX=o,i}function ln(e,n,t,r,i,o){var a=new n(t,r),l=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=i,a.$L=o,e.children=a,a.$BS=!1,a.context=r,a.props===v&&(a.props=t),l)a.state=F(a,t,a.state);else if(c(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var u=a.$PS;if(!d(u)){var s=a.state;if(d(s))a.state=u;else for(var f in u)s[f]=u[f];a.$PS=null}a.$BR=!1}return a.$LI=an(a,t,r),a}function un(e,n){var t=e.props||v;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function sn(e,n,t,r,i,o,a){var l=e.flags|=16384;0!==(481&l)?pn(e,n,t,r,i,o,a):0!==(4&l)?hn(e,n,t,r,i,o,a):8&l?mn(e,n,t,r,i,o,a):16&l?dn(e,n,i):8192&l?fn(e,t,n,r,i,o,a):1024&l&&cn(e,t,n,i,o,a)}function cn(e,n,t,r,i,o){sn(e.children,e.ref,n,!1,null,i,o);var a=z();dn(a,t,r),e.dom=a.dom}function fn(e,n,t,r,i,o,a){var l=e.children,u=e.childFlags;12&u&&0===l.length&&(u=e.childFlags=2,l=e.children=z()),2===u?sn(l,t,n,r,i,o,a):vn(l,t,n,r,i,o,a)}function dn(e,n,t){var r=e.dom=document.createTextNode(e.children);d(n)||y(n,r,t)}function pn(e,n,t,r,i,o,a){var l=e.flags,s=e.props,c=e.className,f=e.childFlags,p=e.dom=b(e.type,r=r||(32&l)>0),v=e.children;if(u(c)||""===c||(r?p.setAttribute("class",c):p.className=c),16===f)L(p,v);else if(1!==f){var h=r&&"foreignObject"!==e.type;2===f?(16384&v.flags&&(e.children=v=X(v)),sn(v,p,t,h,null,o,a)):8!==f&&4!==f||vn(v,p,t,h,null,o,a)}d(n)||y(n,p,i),d(s)||on(e,l,s,p,r,a),He(e.ref,p,o)}function vn(e,n,t,r,i,o,a){for(var l=0;l<e.length;++l){var u=e[l];16384&u.flags&&(e[l]=u=X(u)),sn(u,n,t,r,i,o,a)}}function hn(e,n,t,r,i,o,a){var l=ln(e,e.type,e.props||v,t,r,o),u=a;c(l.componentDidAppear)&&(u=new h),sn(l.$LI,n,l.$CX,r,i,o,u),kn(e.ref,l,o,a)}function mn(e,n,t,r,i,o,a){var l=e.ref,s=a;!u(l)&&c(l.onComponentDidAppear)&&(s=new h),sn(e.children=ee(un(e,t)),n,t,r,i,o,s),wn(e,o,a)}function gn(e){return function(){e.componentDidMount()}}function yn(e,n,t){e.componentDidAppear.push((function(){n.componentDidAppear(t)}))}function bn(e,n,t,r){e.componentDidAppear.push((function(){n.onComponentDidAppear(t,r)}))}function kn(e,n,t,r){He(e,n,t),c(n.componentDidMount)&&t.push(gn(n)),c(n.componentDidAppear)&&yn(r,n,n.$LI.dom)}function $n(e,n){return function(){e.onComponentDidMount(A(n,!0),n.props||v)}}function wn(e,n,t){var r=e.ref;u(r)||(W(r.onComponentWillMount,e.props||v),c(r.onComponentDidMount)&&n.push($n(r,e)),c(r.onComponentDidAppear)&&bn(t,r,A(e,!0),e.props))}function Cn(e,n,t,r,i,o,a){qe(e,a),0!==(n.flags&e.flags&1521)?(sn(n,null,r,i,null,o,a),k(t,n.dom,e.dom)):(sn(n,t,r,i,A(e,!0),o,a),P(e,t,a))}function An(e,n,t,r,i,o,a,l){var u=n.flags|=16384;e.flags!==u||e.type!==n.type||e.key!==n.key||2048&u?16384&e.flags?Cn(e,n,t,r,i,a,l):sn(n,t,r,i,o,a,l):481&u?Pn(e,n,r,i,a,l):4&u?Ln(e,n,t,r,i,o,a,l):8&u?Vn(e,n,t,r,i,o,a,l):16&u?Mn(e,n):8192&u?Tn(e,n,t,r,i,a,l):xn(e,n,r,a,l)}function Sn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:L(t,n))}function In(e,n){e.textContent!==n&&(e.textContent=n)}function Tn(e,n,t,r,i,o,a){var l=e.children,u=n.children,s=e.childFlags,c=n.childFlags,f=null;12&c&&0===u.length&&(c=n.childFlags=2,u=n.children=z());var d=0!==(2&c);if(12&s){var p=l.length;(8&s&&8&c||d||!d&&u.length>p)&&(f=A(l[p-1],!1).nextSibling)}Fn(s,c,l,u,t,r,i,f,e,o,a)}function xn(e,n,t,r,i){var o=e.ref,a=n.ref,l=n.children;if(Fn(e.childFlags,n.childFlags,e.children,l,o,t,!1,null,e,r,i),n.dom=e.dom,o!==a&&!s(l)){var u=l.dom;$(o,u),g(a,u)}}function Pn(e,n,t,r,i,o){var a,l=n.dom=e.dom,s=e.props,c=n.props,f=n.flags,d=!1,p=!1;if(r=r||(32&f)>0,s!==c){var h=s||v;if((a=c||v)!==v)for(var m in(d=(448&f)>0)&&(p=_e(a)),a){var g=h[m],y=a[m];g!==y&&rn(m,g,y,l,r,p,e,o)}if(h!==v)for(var b in h)u(a[b])&&!u(h[b])&&rn(b,h[b],null,l,r,p,e,o)}var k=n.children,$=n.className;e.className!==$&&(u($)?l.removeAttribute("class"):r?l.setAttribute("class",$):l.className=$),4096&f?In(l,k):Fn(e.childFlags,n.childFlags,e.children,k,l,t,r&&"foreignObject"!==n.type,null,e,i,o),d&&Oe(f,n,l,a,!1,p);var w=n.ref,C=e.ref;C!==w&&(je(C),He(w,l,i))}function Dn(e,n,t,r,i,o,a){qe(e,a),vn(n,t,r,i,A(e,!0),o,a),P(e,t,a)}function Nn(e,n,t,r,i,o,a,l,u,s,c){var f=0|e.length,d=0|n.length;0===f?d>0&&vn(n,t,r,i,o,a,l):0===d?ze(t,u,e,l):8===s&&8===c?Rn(e,n,t,r,i,f,d,o,u,a,l):Wn(e,n,t,r,i,f,d,o,a,l)}function Fn(e,n,t,r,i,o,a,l,u,s,c){switch(e){case 2:switch(n){case 2:An(t,r,i,o,a,l,s,c);break;case 1:Ke(t,i,c);break;case 16:qe(t,c),L(i,r);break;default:Dn(t,r,i,o,a,s,c)}break;case 1:switch(n){case 2:sn(r,i,o,a,l,s,c);break;case 1:break;case 16:L(i,r);break;default:vn(r,i,o,a,l,s,c)}break;case 16:switch(n){case 16:Sn(t,r,i);break;case 2:Xe(i,t,c),sn(r,i,o,a,l,s,c);break;case 1:Xe(i,t,c);break;default:Xe(i,t,c),vn(r,i,o,a,l,s,c)}break;default:switch(n){case 16:Ge(t,c),L(i,r);break;case 2:ze(i,u,t,c),sn(r,i,o,a,l,s,c);break;case 1:ze(i,u,t,c);break;default:Nn(t,r,i,o,a,l,s,c,u,n,e)}}}function En(e,n,t,r,i){i.push((function(){e.componentDidUpdate(n,t,r)}))}function Un(e,n,r,i,o,a,l,u,s,f){var d=e.state,p=e.props,v=Boolean(e.$N),h=c(e.shouldComponentUpdate);if(v&&(n=F(e,r,n!==d?t({},d,n):n)),l||!h||h&&e.shouldComponentUpdate(r,n,o)){!v&&c(e.componentWillUpdate)&&e.componentWillUpdate(r,n,o),e.props=r,e.state=n,e.context=o;var m=null,g=an(e,r,o);v&&c(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),An(e.$LI,g,i,e.$CX,a,u,s,f),e.$LI=g,c(e.componentDidUpdate)&&En(e,p,d,m,s)}else e.props=r,e.state=n,e.context=o}function Ln(e,n,r,i,o,a,l,u){var s=n.children=e.children;if(d(s))return;s.$L=l;var f=n.props||v,p=n.ref,h=e.ref,m=s.state;if(!s.$N){if(c(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(f,i),s.$UN)return;s.$BR=!1}d(s.$PS)||(m=t({},m,s.$PS),s.$PS=null)}Un(s,m,f,r,i,o,!1,a,l,u),h!==p&&(je(h),He(p,s,l))}function Vn(e,n,t,r,i,o,a,l){var s=!0,f=n.props||v,d=n.ref,p=e.props,h=!u(d),m=e.children;if(h&&c(d.onComponentShouldUpdate)&&(s=d.onComponentShouldUpdate(p,f)),s){h&&c(d.onComponentWillUpdate)&&d.onComponentWillUpdate(p,f);var g=ee(un(n,r));An(m,g,t,r,i,o,a,l),n.children=g,h&&c(d.onComponentDidUpdate)&&d.onComponentDidUpdate(p,f)}else n.children=m}function Mn(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function Wn(e,n,t,r,i,o,a,l,u,s){for(var c,f,d=o>a?a:o,p=0;p<d;++p)c=n[p],f=e[p],16384&c.flags&&(c=n[p]=X(c)),An(f,c,t,r,i,l,u,s),e[p]=c;if(o<a)for(p=d;p<a;++p)16384&(c=n[p]).flags&&(c=n[p]=X(c)),sn(c,t,r,i,l,u,s);else if(o>a)for(p=d;p<o;++p)Ke(e[p],t,s)}function Rn(e,n,t,r,i,o,a,l,u,s,c){var f,d,p=o-1,v=a-1,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=X(g)),An(m,g,t,r,i,l,s,c),e[h]=g,++h>p||h>v)break e;m=e[h],g=n[h]}for(m=e[p],g=n[v];m.key===g.key;){if(16384&g.flags&&(n[v]=g=X(g)),An(m,g,t,r,i,l,s,c),e[p]=g,v--,h>--p||h>v)break e;m=e[p],g=n[v]}}if(h>p){if(h<=v)for(d=(f=v+1)<a?A(n[f],!0):l;h<=v;)16384&(g=n[h]).flags&&(n[h]=g=X(g)),++h,sn(g,t,r,i,d,s,c)}else if(h>v)for(;h<=p;)Ke(e[h++],t,c);else On(e,n,r,o,a,p,v,h,t,i,l,u,s,c)}function On(e,n,t,r,i,o,a,l,u,s,c,f,d,p){var v,h,m=0,g=0,y=l,b=l,k=o-l+1,$=a-l+1,w=new Int32Array($+1),C=k===r,S=!1,T=0,x=0;if(i<4||(k|$)<32)for(g=y;g<=o;++g)if(v=e[g],x<$){for(l=b;l<=a;l++)if(h=n[l],v.key===h.key){if(w[l-b]=g+1,C)for(C=!1;y<g;)Ke(e[y++],u,p);T>l?S=!0:T=l,16384&h.flags&&(n[l]=h=X(h)),An(v,h,u,t,s,c,d,p),++x;break}!C&&l>a&&Ke(v,u,p)}else C||Ke(v,u,p);else{var P={};for(g=b;g<=a;++g)P[n[g].key]=g;for(g=y;g<=o;++g)if(v=e[g],x<$)if(void 0!==(l=P[v.key])){if(C)for(C=!1;g>y;)Ke(e[y++],u,p);w[l-b]=g+1,T>l?S=!0:T=l,16384&(h=n[l]).flags&&(n[l]=h=X(h)),An(v,h,u,t,s,c,d,p),++x}else C||Ke(v,u,p);else C||Ke(v,u,p)}if(C)ze(u,f,e,p),vn(n,u,t,s,c,d,p);else if(S){var D=_n(w);for(l=D.length-1,g=$-1;g>=0;g--)0===w[g]?(16384&(h=n[T=g+b]).flags&&(n[T]=h=X(h)),sn(h,u,t,s,(m=T+1)<i?A(n[m],!0):c,d,p)):l<0||g!==D[l]?N(f,h=n[T=g+b],u,(m=T+1)<i?A(n[m],!0):c,p):l--;p.componentWillMove.length>0&&I(p.componentWillMove)}else if(x!==$)for(g=$-1;g>=0;g--)0===w[g]&&(16384&(h=n[T=g+b]).flags&&(n[T]=h=X(h)),sn(h,u,t,s,(m=T+1)<i?A(n[m],!0):c,d,p))}var Bn=0;function _n(e){var n=0,t=0,r=0,i=0,o=0,a=0,l=0,u=e.length;for(u>Bn&&(Bn=u,Ue=new Int32Array(u),Le=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Ue[i]]<n){Le[t]=r,Ue[++i]=t;continue}for(o=0,a=i;o<a;)e[Ue[l=o+a>>1]]<n?o=l+1:a=l;n<e[Ue[o]]&&(o>0&&(Le[t]=Ue[o-1]),Ue[o]=t)}o=i+1;var s=new Int32Array(o);for(a=Ue[o-1];o-- >0;)s[o]=a,a=Le[a],Ue[o]=0;return s}function jn(e,n,t,r){var i=[],o=new h,a=n.$V;E.v=!0,u(a)?u(e)||(0!==(16384&e.flags)&&(e=X(e)),sn(e,n,r,!1,null,i,o),n.$V=e,a=e):u(e)?(Ke(a,n,o),n.$V=null):(16384&e.flags&&(e=X(e)),An(a,e,n,r,!1,null,i,o),a=n.$V=e),w(i),S(o.componentDidAppear),E.v=!1,c(t)&&t()}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Hn=[],Kn=Promise.resolve().then.bind(Promise.resolve()),qn=!1;function Gn(e,n,r,i){var o=e.$PS;if(c(n)&&(n=n(o?t({},e.state,o):e.state,e.props,e.context)),u(o))e.$PS=n;else for(var a in n)o[a]=n[a];if(e.$BR)c(r)&&e.$L.push(r.bind(e));else{if(!E.v&&0===Hn.length)return zn(e,i),void(c(r)&&r.call(e));if(Hn.includes(e)||Hn.push(e),i&&(e.$F=!0),qn||(qn=!0,Kn(Xn)),c(r)){var l=e.$QU;l||(l=e.$QU=[]),l.push(r)}}}function Qn(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Xn(){var e;for(qn=!1;e=Hn.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,zn(e,n),e.$QU&&Qn(e)}}function zn(e,n){if(n||!e.$BR){var r=e.$PS;e.$PS=null;var i=[],o=new h;E.v=!0,Un(e,t({},e.state,r),e.props,A(e.$LI,!0).parentNode,e.context,e.$SVG,n,null,i,o),w(i),S(o.componentDidAppear),E.v=!1}else e.state=e.$PS,e.$PS=null}var Zn=function(){function e(e,n){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||v,this.context=n||v}var n=e.prototype;return n.forceUpdate=function(e){if(this.$UN)return;Gn(this,{},e,!0)},n.setState=function(e,n){if(this.$UN)return;this.$BS||Gn(this,e,n,!1)},n.render=function(e,n,t){return null},e}();function Jn(e){return void 0===e||null===e}function Yn(e){return void 0===e}function et(e,n,t){var r,i,o,a=null,l=null,u=null,s=arguments.length-2;if(1===s)r=t;else if(s>1)for(r=[];s-- >0;)r[s]=arguments[s+2];if("string"!==typeof e){if(i=2,Yn(r)||(n||(n={}),n.children=r),!Jn(n))for(var c in o={},n)if("key"===c)l=n.key;else if("ref"===c)a=n.ref;else switch(c){case"onComponentDidAppear":case"onComponentDidMount":case"onComponentDidUpdate":case"onComponentShouldUpdate":case"onComponentWillDisappear":case"onComponentWillMount":case"onComponentWillUnmount":case"onComponentWillUpdate":a||(a={}),a[c]=n[c];break;default:o[c]=n[c]}return K(i,e,o,l,a)}if(i=J(e),!Jn(n))for(var f in o={},n)"className"===f||"class"===f?u=n[f]:"key"===f?l=n.key:"children"===f&&Yn(r)?r=n.children:"ref"===f?a=n.ref:("contenteditable"===f&&(i|=4096),o[f]=n[f]);if(8192&i)return G(1===s?[r]:r,0,l);return B(i,e,u,r,0,o,l,a)}function nt(e){return void 0===e||null===e}function tt(e){return""!==e}function rt(e){return e.split(" ").filter(tt)}function it(e,n){for(var t=rt(n),r=0;r<t.length;r++)e.classList.add(t[r])}function ot(e,n){for(var t=rt(n),r=0;r<t.length;r++)e.classList.remove(t[r])}function at(){return document.body.clientHeight}function lt(e){e.style||e.removeAttribute("style")}function ut(e){var n=e.style.getPropertyValue("display"),t="none"===window.getComputedStyle(e).getPropertyValue("display");t&&e.style.setProperty("display","block");var r=e.getBoundingClientRect();return t&&(e.style.setProperty("display",n),lt(e)),{height:r.height,width:r.width,x:r.x,y:r.y}}function st(e,n,t,r,i){void 0===r&&(r=1),void 0===i&&(i=1),1!==r||1!==i?(e.style.transformOrigin="0 0",e.style.transform="translate("+n+"px, "+t+"px) scale("+r+", "+i+")"):e.style.transform="translate("+n+"px, "+t+"px)"}function ct(e){e.style.transform="",e.style.transformOrigin=""}function ft(e,n,t){e.style.width=n+"px",e.style.height=t+"px"}function dt(e){e.style.width=e.style.height=""}function pt(e){for(var t=0,r=0,i=0;i<e.length;i++){var o=e[i];if(!o)continue;for(var a,l=window.getComputedStyle(o),u=l.getPropertyValue("transition-duration").split(","),s=l.getPropertyValue("transition-delay").split(","),c=n(l.getPropertyValue("transition-property").split(","));!(a=c()).done;){var f=a.value.trim();if("-"===f[0]){var d=f.split("-").splice(2).join("-");f.includes(d)&&t--}}for(var p=0,v=0;v<u.length;v++){var h=u[v],m=s[v],g=parseFloat(h)+parseFloat(m);g>p&&(p=g)}t+=u.length,p>r&&(r=p)}return{maxDuration:r,nrofTransitions:t}}Zn.defaultProps=null;var vt,ht=function(){if("undefined"===typeof document)return"";var e=document.createElement("div").style,n={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(var t in n)if(void 0!==e[t])return n[t]}();function mt(e,n){var t=e[0],r=pt(e).nrofTransitions,i=!1,o=function(a){if(!a||i)return;if(!a.timeout){for(var l=!1,u=0;u<e.length;u++)if(void 0!==e[u]&&a.target===e[u]){l=!0;break}if(!l)return;if(--r>0)return}i=!0,t.removeEventListener(ht,o,!1),"function"===typeof n&&n()};t.addEventListener(ht,o,!1)}!function(e){e[e.INITIALIZE=0]="INITIALIZE",e[e.MEASURE=1]="MEASURE",e[e.SET_START_STATE=2]="SET_START_STATE",e[e.ACTIVATE_TRANSITIONS=3]="ACTIVATE_TRANSITIONS",e[e.REGISTER_LISTENERS=4]="REGISTER_LISTENERS",e[e.ACTIVATE_ANIMATION=5]="ACTIVATE_ANIMATION",e[e.length=6]="length"}(vt||(vt={}));var gt={};function yt(){var e=!1;for(var n in gt)--gt[n].ticks<0?delete gt[n]:e=!0;e&&requestAnimationFrame(yt)}var bt=[],kt=[],$t=0,wt=0;function Ct(){wt=0;var e=kt;kt=[];for(var n=0;n<e.length;n++)e[n](5)}function At(){$t=0;var e=bt;bt=[];for(var n=0;n<6;n++){var t=n;if(5===t)kt=kt.concat(e),0===wt&&(wt=requestAnimationFrame(Ct));else{3===t&&at();for(var r=0;r<e.length;r++)e[r](t)}}}function St(e){bt.push(e),0===$t&&($t=requestAnimationFrame(At))}function It(e,n){var t;if(nt(e)||"object"!==typeof e){var r=(e||"inferno-animation")+n;t={active:r+"-active",end:r+"-end",start:r}}else t=e;return t}function Tt(e,n){var t,r,i,o,a,l=It(n.animation,"-enter"),u={},s=(r="none",(i=(t=e).style.getPropertyValue("display"))!==r&&t.style.setProperty("display",r),i),c=void 0===n.globalAnimationKey?null:(o=n.globalAnimationKey,void 0!==(a=gt[o])&&delete gt[o],a);St((function(n){Pt(n,e,l,u,s,c)}))}function xt(e,n){return function(){dt(e),ot(e,n.active+" "+n.end)}}function Pt(e,n,t,r,i,o){switch(e){case 0:return l=n,void(void 0!==(u=i)?l.style.setProperty("display",u):(l.style.removeProperty("display"),lt(l)));case 1:if("IMG"!==n.tagName||n.complete){var a=ut(n);r.x=a.x,r.y=a.y,r.width=a.width,r.height=a.height}else at();return;case 2:return nt(o)||0===r.width||0===r.height||st(n,o.x-r.x,o.y-r.y,o.width/r.width,o.height/r.height),void it(n,t.start);case 3:return void it(n,t.active);case 4:return void mt([n],xt(n,t));case 5:nt(o)||0===r.width||0===r.height||ct(n),ft(n,r.width,r.height),ot(n,t.start),it(n,t.end)}var l,u}function Dt(e,n,t){var r,i,o=It(n.animation,"-leave"),a=ut(e);St((function(n){Nt(n,e,t,o,a)})),void 0!==n.globalAnimationKey&&(r=n.globalAnimationKey,(i=a).ticks=5,gt[r]=i,null===yt&&requestAnimationFrame(yt),e.style.setProperty("visibility","hidden"))}function Nt(e,n,t,r,i){switch(e){case 1:return ft(n,i.width,i.height),void it(n,r.start);case 3:return void it(n,r.active);case 4:return void mt([n],t);case 5:it(n,r.end),ot(n,r.start),dt(n)}}var Ft=function(e){function n(){return e.apply(this,arguments)||this}r(n,e);var t=n.prototype;return t.componentDidAppear=function(e){Tt(e,this.props)},t.componentWillDisappear=function(e,n){Dt(e,this.props,n)},n}(Zn),Et=function(e){function n(){return e.apply(this,arguments)||this}return r(n,e),n.prototype.render=function(){var e=this;return et("li",{className:"item",onClick:function(n){return e.props.onClick(n,e.props.index)}},et("div",{className:"inner"},[et("img",{width:"120px",height:"120px",src:"avatar.png"}),et("div",{className:"body"},[et("h2",null,this.props.children),et("h3",null,"Inferno is a blazingly fast framework.")])]))},n}(Ft),Ut=function(e){function n(){var n;return(n=e.call(this)||this).doRemove=function(e,t){e.preventDefault();var r=n.state.items.concat([]);r.splice(t,1),n.setState({items:r})},n.doAdd=function(e){e.preventDefault();var t=n.state.items.concat([]),r=0===t.length?0:t[t.length-1].key+1;t.push({key:r}),n.setState({items:t})},n.renderItem=function(e,t){return et(Et,{key:e.key,index:t,animation:n.props.animation,onClick:n.doRemove},"This line is nice with "+(e.key+1)+" bar")},n.state={items:[]},n.items=[],n}r(n,e);var t=n.prototype;return t.componentDidMount=function(){for(var e=0;this.items.length<20;)this.items[this.items.length]={key:e++};this.setState({items:this.items})},t.render=function(){return et("div",null,[et("ul",null,this.state.items.map(this.renderItem)),et("h2",null,this.props.animation),et("p",null,this.props.description),et("button",{onClick:this.doAdd},"Add")])},n}(Zn);document.addEventListener("DOMContentLoaded",(function(){var e,n,t,r=document.querySelector("#App1");e=et(Ut,{animation:"Complex",description:"Each card <li> animates height and opacity on add. The image and body of each card animates using the card animation CSS-classes but with different transitions. The card inherits AnimatedComponet which is only aware of the card animation. The child animations need to be finished when the card animations are finished."}),void 0===n&&(n=null),void 0===t&&(t=v),jn(e,r,n,t)}))}();
