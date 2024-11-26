!function(){"use strict";function e(){return e=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},e.apply(null,arguments)}function n(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,t(e,n)}function t(e,n){return t=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},t(e,n)}var a=Array.isArray;function f(e){var n=typeof e;return"string"===n||"number"===n}function c(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function i(e){return"string"===typeof e}function l(e){return null===e}function d(e){return!l(e)&&"object"===typeof e}var u={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function p(e){return e.substring(2).toLowerCase()}function b(e,n){e.appendChild(n)}function h(e,n,t){l(t)?b(e,n):e.insertBefore(n,t)}function v(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function m(e,n,t){e.replaceChild(n,t)}function g(e,n){e.removeChild(n)}function y(e){for(var n=0;n<e.length;n++)e[n]()}function $(e,n,t){var a=e.children;if(0!==(4&t))return a.$LI;if(0!==(8192&t))return 2===e.childFlags?a:a[n?0:a.length-1];return a}function k(e,n){for(var t,a=e;!c(a);){if(0!==(1521&(t=a.flags)))return a.dom;a=$(a,n,t)}return null}function w(e,n){for(var t,a=e.length;void 0!==(t=e.pop());)t((function(){--a<=0&&o(n)&&n()}))}function C(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var a=e[t];h(a.parent,a.dom,a.next)}e.splice(0,e.length)}function x(e,n,t){for(;!c(e);){var a=e.flags;if(0!==(1521&a))return void(t&&e.dom.parentNode!==n||g(n,e.dom));var f=e.children;if(0!==(4&a)&&(e=f.$LI),0!==(8&a)&&(e=f),0!==(8192&a)){if(2!==e.childFlags){for(var r=0,o=f.length;r<o;++r)x(f[r],n,!1);return}e=f}}}function P(e,n){return function(){x(e,n,!0)}}function M(e,n,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,P(e,n)):x(e,n,!1)}function S(e,n,t,a,f,c,r,o){e.componentWillMove.push({dom:a,fn:function(){0!==(4&r)?t.componentWillMove(n,f,a):0!==(8&r)&&t.onComponentWillMove(n,f,a,o)},next:c,parent:f})}function D(e,n,t,a,f){for(var r,i,l=n.flags;!c(n);){var d=n.flags;if(0!==(1521&d))return void(c(r)||!o(r.componentWillMove)&&!o(r.onComponentWillMove)?h(t,n.dom,a):S(f,e,r,n.dom,t,a,l,i));var u=n.children;if(0!==(4&d))r=n.children,i=n.props,n=u.$LI;else if(0!==(8&d))r=n.ref,i=n.props,n=u;else if(0!==(8192&d)){if(2!==n.childFlags){for(var s=0,p=u.length;s<p;++s)D(e,u[s],t,a,f);return}n=u}}}function F(n,t,a){if(o(n.constructor.getDerivedStateFromProps))return e({},a,n.constructor.getDerivedStateFromProps(t,a));return a}var U={v:!1},W={createVNode:null};function A(e,n){e.textContent=n}function I(e,n){return d(e)&&e.event===n.event&&e.data===n.data}function N(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function L(e,n){return o(e)&&(e(n),!0)}var V="$";function B(e,n,t,a,f,c,r,o){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=a,this.key=void 0===f?null:f,this.props=void 0===c?null:c,this.ref=void 0===r?null:r,this.type=o}function O(e,n,t,a,f,c,r,o){var i=void 0===f?1:f,l=new B(i,a,t,e,r,c,o,n);return 0===i&&K(l,l.children),l}function E(e,n,t){if(4&e)return t;var a=(32768&e?n.render:n).defaultHooks;if(c(a))return t;if(c(t))return a;return N(t,a)}function j(n,t,a){var f=(32768&n?t.render:t).defaultProps;if(c(f))return a;if(c(a))return e({},f);return N(a,f)}function T(e,n){var t;if(12&e)return e;if(null!=(t=n.prototype)&&t.render)return 4;if(n.render)return 32776;return 8}function R(e,n,t,a,f){var c=new B(1,null,null,e=T(e,n),a,j(e,n,t),E(e,n,f),n);return o(W.createVNode)&&W.createVNode(c),c}function _(e,n){return new B(1,c(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function H(e,n,t){var a=O(8192,8192,null,e,n,null,t,null);switch(a.childFlags){case 1:a.children=X(),a.childFlags=2;break;case 16:a.children=[_(e)],a.childFlags=4}return a}function q(e){var n=e.children,t=e.childFlags;return H(2===t?Q(n):n.map(Q),t,e.key)}function Q(e){var n=-16385&e.flags,t=e.props;if(14&n&&!l(t)){var a=t;for(var f in t={},a)t[f]=a[f]}if(0===(8192&n))return new B(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return q(e)}function X(){return _("",null)}function G(e,n,t,c){for(var o=e.length;t<o;t++){var d=e[t];if(!r(d)){var u=c+V+t;if(a(d))G(d,n,0,u);else{if(f(d))d=_(d,u);else{var s=d.key,p=i(s)&&s[0]===V;(81920&d.flags||p)&&(d=Q(d)),d.flags|=65536,p?s.substring(0,c.length)!==c&&(d.key=c+s):l(s)?d.key=u:d.key=c+s}n.push(d)}}}}function K(e,n){var t,c=1;if(r(n))t=n;else if(f(n))c=16,t=n;else if(a(n)){for(var o=n.length,d=0;d<o;++d){var u=n[d];if(r(u)||a(u)){t=t||n.slice(0,d),G(n,t,d,"");break}if(f(u))(t=t||n.slice(0,d)).push(_(u,V+d));else{var s=u.key,p=(81920&u.flags)>0,b=l(s),h=i(s)&&s[0]===V;p||b||h?(t=t||n.slice(0,d),(p||h)&&(u=Q(u)),(b||h)&&(u.key=V+d),t.push(u)):t&&t.push(u),u.flags|=65536}}c=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=Q(n)),c=2;return e.children=t,e.childFlags=c,e}function J(e){if(r(e)||f(e))return _(e,null);if(a(e))return H(e,0,null);return 16384&e.flags?Q(e):e}var z="http://www.w3.org/1999/xlink",Y="http://www.w3.org/XML/1998/namespace",Z={"xlink:actuate":z,"xlink:arcrole":z,"xlink:href":z,"xlink:role":z,"xlink:show":z,"xlink:title":z,"xlink:type":z,"xml:base":Y,"xml:lang":Y,"xml:space":Y};function ee(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var ne=ee(0),te=ee(null),ae=ee(!0);function fe(e,n){var t=n.$EV;return t||(t=n.$EV=ee(null)),t[e]||1===++ne[e]&&(te[e]=be(e)),t}function ce(e,n){var t=n.$EV;null!=t&&t[e]&&(0===--ne[e]&&(document.removeEventListener(p(e),te[e]),te[e]=null),t[e]=null)}function re(e,n,t,a){if(o(t))fe(e,a)[e]=t;else if(d(t)){if(I(n,t))return;fe(e,a)[e]=t}else ce(e,a)}function oe(e){return o(e.composedPath)?e.composedPath()[0]:e.target}function ie(e,n,t,a){var f=oe(e);do{if(n&&f.disabled)return;var r=f.$EV;if(!c(r)){var o=r[t];if(o&&(a.dom=f,o.event?o.event(o.data,e):o(e),e.cancelBubble))return}f=f.parentNode}while(!l(f))}function le(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function de(){return this.defaultPrevented}function ue(){return this.cancelBubble}function se(e){var n={dom:document};return e.isDefaultPrevented=de,e.isPropagationStopped=ue,e.stopPropagation=le,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function pe(e){var n="onClick"===e||"onDblClick"===e;return function(t){ie(t,n,e,se(t))}}function be(e){var n=pe(e);return document.addEventListener(p(e),n),n}function he(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function ve(e,n,t){var a=e[n];if(a)a.event?a.event(a.data,t):a(t);else{var f=n.toLowerCase();o(e[f])&&e[f](t)}}function me(e,n){var t=function(t){var a,f=this.$V;if(c(f))return;var r=null!=(a=f.props)?a:u,l=f.dom;if(i(e))ve(r,e,t);else for(var d=0;d<e.length;++d)ve(r,e[d],t);if(o(n)){var s,p=this.$V,b=null!=(s=p.props)?s:u;n(b,l,!1,p)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ge(e,n,t){var a="$"+n,f=e[a];if(f){if(f[1].wrapped)return;e.removeEventListener(f[0],f[1]),e[a]=null}o(t)&&(e.addEventListener(n,t),e[a]=[n,t])}function ye(e){return"checkbox"===e||"radio"===e}var $e=me("onInput",xe),ke=me(["onClick","onChange"],xe);function we(e){e.stopPropagation()}function Ce(e,n){ye(n.type)?(ge(e,"change",ke),ge(e,"click",we)):ge(e,"input",$e)}function xe(e,n){var t=e.type,a=e.value,f=e.checked,r=e.multiple,o=e.defaultValue,i=!c(a);null!=t&&t!==n.type&&n.setAttribute("type",t),c(r)||r===n.multiple||(n.multiple=r),c(o)||i||(n.defaultValue=o+""),ye(t)?(i&&(n.value=a),c(f)||(n.checked=f)):i&&n.value!==a?(n.defaultValue=a,n.value=a):c(f)||(n.checked=f)}function Pe(e,n){if("option"===e.type)Me(e,n);else{var t=e.children,a=e.flags;if(0!==(4&a))Pe(t.$LI,n);else if(0!==(8&a))Pe(t,n);else if(2===e.childFlags)Pe(t,n);else if(0!==(12&e.childFlags))for(var f=0,c=t.length;f<c;++f)Pe(t[f],n)}}function Me(e,n){var t,f=null!=(t=e.props)?t:u,r=f.value,o=e.dom;o.value=r,r===n||a(n)&&n.includes(r)?o.selected=!0:c(n)&&c(f.selected)||(o.selected=Boolean(f.selected))}we.wrapped=!0;var Se=me("onChange",Fe);function De(e){ge(e,"change",Se)}function Fe(e,n,t,a){var f=Boolean(e.multiple);c(e.multiple)||f===n.multiple||(n.multiple=f);var r=e.selectedIndex;if(-1===r&&(n.selectedIndex=-1),1!==a.childFlags){var o=e.value;"number"===typeof r&&r>-1&&!c(n.options[r])&&(o=n.options[r].value),t&&c(o)&&(o=e.defaultValue),Pe(a,o)}}var Ue,We,Ae=me("onInput",Le),Ie=me("onChange");function Ne(e,n){ge(e,"input",Ae),o(n.onChange)&&ge(e,"change",Ie)}function Le(e,n,t){var a=e.value,f=n.value;if(c(a)){if(t){var r=e.defaultValue;c(r)||r===f||(n.defaultValue=r,n.value=r)}}else f!==a&&(n.defaultValue=a,n.value=a)}function Ve(e,n,t,a,f,c){0!==(64&e)?xe(a,t):0!==(256&e)?Fe(a,t,f,n):0!==(128&e)&&Le(a,t,f),c&&(t.$V=n)}function Be(e,n,t){0!==(64&e)?Ce(n,t):0!==(256&e)?De(n):0!==(128&e)&&Ne(n,t)}function Oe(e){return ye(e.type)?!c(e.checked):!c(e.value)}function Ee(e){c(e)||!L(e,null)&&e.current&&(e.current=null)}function je(e,n,t){c(e)||!o(e)&&void 0===e.current||t.push((function(){L(e,n)||void 0===e.current||(e.current=n)}))}function Te(e,n,t){Re(e,t),M(e,n,t)}function Re(e,n){var t,a=e.flags,f=e.children;if(0!==(481&a)){t=e.ref;var r=e.props;Ee(t);var i=e.childFlags;if(!l(r))for(var d=Object.keys(r),p=0,b=d.length;p<b;p++){var h=d[p];ae[h]&&ce(h,e.dom)}12&i?_e(f,n):2===i&&Re(f,n)}else if(f)if(4&a){o(f.componentWillUnmount)&&f.componentWillUnmount();var v=n;o(f.componentWillDisappear)&&(v=new s,Xe(n,f,f.$LI.dom,a,void 0)),Ee(e.ref),f.$UN=!0,Re(f.$LI,v)}else if(8&a){var m=n;if(!c(t=e.ref)){var g=null;o(t.onComponentWillUnmount)&&(g=k(e,!0),t.onComponentWillUnmount(g,e.props||u)),o(t.onComponentWillDisappear)&&(m=new s,Xe(n,t,g=g||k(e,!0),a,e.props))}Re(f,m)}else 1024&a?Te(f,e.ref,n):8192&a&&12&e.childFlags&&_e(f,n)}function _e(e,n){for(var t=0,a=e.length;t<a;++t)Re(e[t],n)}function He(e,n){return function(){if(n)for(var t=0;t<e.length;t++)x(e[t],n,!1)}}function qe(e,n,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,He(n,e)):e.textContent=""}function Qe(e,n,t,a){_e(t,a),8192&n.flags?M(n,e,a):qe(e,t,a)}function Xe(e,n,t,a,f){e.componentWillDisappear.push((function(e){4&a?n.componentWillDisappear(t,e):8&a&&n.onComponentWillDisappear(t,f,e)}))}function Ge(e){var n=e.event;return function(t){n(e.data,t)}}function Ke(e,n,t,a){if(d(t)){if(I(n,t))return;t=Ge(t)}ge(a,p(e),t)}function Je(e,n,t){if(c(n))return void t.removeAttribute("style");var a,f,r=t.style;if(i(n))return void(r.cssText=n);if(c(e)||i(e))for(a in n)f=n[a],r.setProperty(a,f);else{for(a in n)(f=n[a])!==e[a]&&r.setProperty(a,f);for(a in e)c(n[a])&&r.removeProperty(a)}}function ze(e,n,t,a,f){var r=(null==e?void 0:e.__html)||"",o=(null==n?void 0:n.__html)||"";r!==o&&(c(o)||he(a,o)||(l(t)||(12&t.childFlags?_e(t.children,f):2===t.childFlags&&Re(t.children,f),t.children=null,t.childFlags=1),a.innerHTML=o))}function Ye(e,n,t){var a=c(e)?"":e;n[t]!==a&&(n[t]=a)}function Ze(e,n,t,a,f,r,o,i){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!t;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===e)break;Ye(t,a,e);break;case"style":Je(n,t,a);break;case"dangerouslySetInnerHTML":ze(n,t,o,a,i);break;default:ae[e]?re(e,n,t,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ke(e,n,t,a):c(t)?a.removeAttribute(e):f&&Z[e]?a.setAttributeNS(Z[e],e,t):a.setAttribute(e,t)}}function en(e,n,t,a,f,c){var r=!1,o=(448&n)>0;for(var i in o&&(r=Oe(t))&&Be(n,a,t),t)Ze(i,null,t[i],a,f,r,null,c);o&&Ve(n,e,a,t,!0,r)}function nn(n,t,a){var f=J(n.render(t,n.state,a)),c=a;return o(n.getChildContext)&&(c=e({},a,n.getChildContext())),n.$CX=c,f}function tn(e,n,t,a,f,c){var r=new n(t,a),i=r.$N=Boolean(n.getDerivedStateFromProps||r.getSnapshotBeforeUpdate);if(r.$SVG=f,r.$L=c,e.children=r,r.$BS=!1,r.context=a,r.props===u&&(r.props=t),i)r.state=F(r,t,r.state);else if(o(r.componentWillMount)){r.$BR=!0,r.componentWillMount();var d=r.$PS;if(!l(d)){var s=r.state;if(l(s))r.state=d;else for(var p in d)s[p]=d[p];r.$PS=null}r.$BR=!1}return r.$LI=nn(r,t,a),r}function an(e,n){var t=e.props||u;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function fn(e,n,t,a,f,c,r){var o=e.flags|=16384;0!==(481&o)?ln(e,n,t,a,f,c,r):0!==(4&o)?un(e,n,t,a,f,c,r):8&o?sn(e,n,t,a,f,c,r):16&o?on(e,n,f):8192&o?rn(e,t,n,a,f,c,r):1024&o&&cn(e,t,n,f,c,r)}function cn(e,n,t,a,f,c){fn(e.children,e.ref,n,!1,null,f,c);var r=X();on(r,t,a),e.dom=r.dom}function rn(e,n,t,a,f,c,r){var o=e.children,i=e.childFlags;12&i&&0===o.length&&(i=e.childFlags=2,o=e.children=X()),2===i?fn(o,t,n,a,f,c,r):dn(o,t,n,a,f,c,r)}function on(e,n,t){var a=e.dom=document.createTextNode(e.children);l(n)||h(n,a,t)}function ln(e,n,t,a,f,r,o){var i=e.flags,d=e.props,u=e.className,s=e.childFlags,p=e.dom=v(e.type,a=a||(32&i)>0),b=e.children;if(c(u)||""===u||(a?p.setAttribute("class",u):p.className=u),16===s)A(p,b);else if(1!==s){var m=a&&"foreignObject"!==e.type;2===s?(16384&b.flags&&(e.children=b=Q(b)),fn(b,p,t,m,null,r,o)):8!==s&&4!==s||dn(b,p,t,m,null,r,o)}l(n)||h(n,p,f),l(d)||en(e,i,d,p,a,o),je(e.ref,p,r)}function dn(e,n,t,a,f,c,r){for(var o=0;o<e.length;++o){var i=e[o];16384&i.flags&&(e[o]=i=Q(i)),fn(i,n,t,a,f,c,r)}}function un(e,n,t,a,f,c,r){var i=tn(e,e.type,e.props||u,t,a,c),l=r;o(i.componentDidAppear)&&(l=new s),fn(i.$LI,n,i.$CX,a,f,c,l),vn(e.ref,i,c,r)}function sn(e,n,t,a,f,r,i){var l=e.ref,d=i;!c(l)&&o(l.onComponentDidAppear)&&(d=new s),fn(e.children=J(an(e,t)),n,t,a,f,r,d),gn(e,r,i)}function pn(e){return function(){e.componentDidMount()}}function bn(e,n,t){e.componentDidAppear.push((function(){n.componentDidAppear(t)}))}function hn(e,n,t,a){e.componentDidAppear.push((function(){n.onComponentDidAppear(t,a)}))}function vn(e,n,t,a){je(e,n,t),o(n.componentDidMount)&&t.push(pn(n)),o(n.componentDidAppear)&&bn(a,n,n.$LI.dom)}function mn(e,n){return function(){e.onComponentDidMount(k(n,!0),n.props||u)}}function gn(e,n,t){var a=e.ref;c(a)||(L(a.onComponentWillMount,e.props||u),o(a.onComponentDidMount)&&n.push(mn(a,e)),o(a.onComponentDidAppear)&&hn(t,a,k(e,!0),e.props))}function yn(e,n,t,a,f,c,r){Re(e,r),0!==(n.flags&e.flags&1521)?(fn(n,null,a,f,null,c,r),m(t,n.dom,e.dom)):(fn(n,t,a,f,k(e,!0),c,r),M(e,t,r))}function $n(e,n,t,a,f,c,r,o){var i=n.flags|=16384;e.flags!==i||e.type!==n.type||e.key!==n.key||2048&i?16384&e.flags?yn(e,n,t,a,f,r,o):fn(n,t,a,f,c,r,o):481&i?Pn(e,n,a,f,r,o):4&i?Wn(e,n,t,a,f,c,r,o):8&i?An(e,n,t,a,f,c,r,o):16&i?In(e,n):8192&i?Cn(e,n,t,a,f,r,o):xn(e,n,a,r,o)}function kn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:A(t,n))}function wn(e,n){e.textContent!==n&&(e.textContent=n)}function Cn(e,n,t,a,f,c,r){var o=e.children,i=n.children,l=e.childFlags,d=n.childFlags,u=null;12&d&&0===i.length&&(d=n.childFlags=2,i=n.children=X());var s=0!==(2&d);if(12&l){var p=o.length;(8&l&&8&d||s||!s&&i.length>p)&&(u=k(o[p-1],!1).nextSibling)}Dn(l,d,o,i,t,a,f,u,e,c,r)}function xn(e,n,t,a,f){var c=e.ref,o=n.ref,i=n.children;if(Dn(e.childFlags,n.childFlags,e.children,i,c,t,!1,null,e,a,f),n.dom=e.dom,c!==o&&!r(i)){var l=i.dom;g(c,l),b(o,l)}}function Pn(e,n,t,a,f,r){var o,i=n.dom=e.dom,l=e.props,d=n.props,s=n.flags,p=!1,b=!1;if(a=a||(32&s)>0,l!==d){var h=l||u;if((o=d||u)!==u)for(var v in(p=(448&s)>0)&&(b=Oe(o)),o){var m=h[v],g=o[v];m!==g&&Ze(v,m,g,i,a,b,e,r)}if(h!==u)for(var y in h)c(o[y])&&!c(h[y])&&Ze(y,h[y],null,i,a,b,e,r)}var $=n.children,k=n.className;e.className!==k&&(c(k)?i.removeAttribute("class"):a?i.setAttribute("class",k):i.className=k),4096&s?wn(i,$):Dn(e.childFlags,n.childFlags,e.children,$,i,t,a&&"foreignObject"!==n.type,null,e,f,r),p&&Ve(s,n,i,o,!1,b);var w=n.ref,C=e.ref;C!==w&&(Ee(C),je(w,i,f))}function Mn(e,n,t,a,f,c,r){Re(e,r),dn(n,t,a,f,k(e,!0),c,r),M(e,t,r)}function Sn(e,n,t,a,f,c,r,o,i,l,d){var u=0|e.length,s=0|n.length;0===u?s>0&&dn(n,t,a,f,c,r,o):0===s?Qe(t,i,e,o):8===l&&8===d?Ln(e,n,t,a,f,u,s,c,i,r,o):Nn(e,n,t,a,f,u,s,c,r,o)}function Dn(e,n,t,a,f,c,r,o,i,l,d){switch(e){case 2:switch(n){case 2:$n(t,a,f,c,r,o,l,d);break;case 1:Te(t,f,d);break;case 16:Re(t,d),A(f,a);break;default:Mn(t,a,f,c,r,l,d)}break;case 1:switch(n){case 2:fn(a,f,c,r,o,l,d);break;case 1:break;case 16:A(f,a);break;default:dn(a,f,c,r,o,l,d)}break;case 16:switch(n){case 16:kn(t,a,f);break;case 2:qe(f,t,d),fn(a,f,c,r,o,l,d);break;case 1:qe(f,t,d);break;default:qe(f,t,d),dn(a,f,c,r,o,l,d)}break;default:switch(n){case 16:_e(t,d),A(f,a);break;case 2:Qe(f,i,t,d),fn(a,f,c,r,o,l,d);break;case 1:Qe(f,i,t,d);break;default:Sn(t,a,f,c,r,o,l,d,i,n,e)}}}function Fn(e,n,t,a,f){f.push((function(){e.componentDidUpdate(n,t,a)}))}function Un(n,t,a,f,c,r,i,l,d,u){var s=n.state,p=n.props,b=Boolean(n.$N),h=o(n.shouldComponentUpdate);if(b&&(t=F(n,a,t!==s?e({},s,t):t)),i||!h||h&&n.shouldComponentUpdate(a,t,c)){!b&&o(n.componentWillUpdate)&&n.componentWillUpdate(a,t,c),n.props=a,n.state=t,n.context=c;var v=null,m=nn(n,a,c);b&&o(n.getSnapshotBeforeUpdate)&&(v=n.getSnapshotBeforeUpdate(p,s)),$n(n.$LI,m,f,n.$CX,r,l,d,u),n.$LI=m,o(n.componentDidUpdate)&&Fn(n,p,s,v,d)}else n.props=a,n.state=t,n.context=c}function Wn(n,t,a,f,c,r,i,d){var s=t.children=n.children;if(l(s))return;s.$L=i;var p=t.props||u,b=t.ref,h=n.ref,v=s.state;if(!s.$N){if(o(s.componentWillReceiveProps)){if(s.$BR=!0,s.componentWillReceiveProps(p,f),s.$UN)return;s.$BR=!1}l(s.$PS)||(v=e({},v,s.$PS),s.$PS=null)}Un(s,v,p,a,f,c,!1,r,i,d),h!==b&&(Ee(h),je(b,s,i))}function An(e,n,t,a,f,r,i,l){var d=!0,s=n.props||u,p=n.ref,b=e.props,h=!c(p),v=e.children;if(h&&o(p.onComponentShouldUpdate)&&(d=p.onComponentShouldUpdate(b,s)),d){h&&o(p.onComponentWillUpdate)&&p.onComponentWillUpdate(b,s);var m=J(an(n,a));$n(v,m,t,a,f,r,i,l),n.children=m,h&&o(p.onComponentDidUpdate)&&p.onComponentDidUpdate(b,s)}else n.children=v}function In(e,n){var t=n.children,a=n.dom=e.dom;t!==e.children&&(a.nodeValue=t)}function Nn(e,n,t,a,f,c,r,o,i,l){for(var d,u,s=c>r?r:c,p=0;p<s;++p)d=n[p],u=e[p],16384&d.flags&&(d=n[p]=Q(d)),$n(u,d,t,a,f,o,i,l),e[p]=d;if(c<r)for(p=s;p<r;++p)16384&(d=n[p]).flags&&(d=n[p]=Q(d)),fn(d,t,a,f,o,i,l);else if(c>r)for(p=s;p<c;++p)Te(e[p],t,l)}function Ln(e,n,t,a,f,c,r,o,i,l,d){var u,s,p=c-1,b=r-1,h=0,v=e[h],m=n[h];e:{for(;v.key===m.key;){if(16384&m.flags&&(n[h]=m=Q(m)),$n(v,m,t,a,f,o,l,d),e[h]=m,++h>p||h>b)break e;v=e[h],m=n[h]}for(v=e[p],m=n[b];v.key===m.key;){if(16384&m.flags&&(n[b]=m=Q(m)),$n(v,m,t,a,f,o,l,d),e[p]=m,b--,h>--p||h>b)break e;v=e[p],m=n[b]}}if(h>p){if(h<=b)for(s=(u=b+1)<r?k(n[u],!0):o;h<=b;)16384&(m=n[h]).flags&&(n[h]=m=Q(m)),++h,fn(m,t,a,f,s,l,d)}else if(h>b)for(;h<=p;)Te(e[h++],t,d);else Vn(e,n,a,c,r,p,b,h,t,f,o,i,l,d)}function Vn(e,n,t,a,f,c,r,o,i,l,d,u,s,p){var b,h,v=0,m=0,g=o,y=o,$=c-o+1,w=r-o+1,x=new Int32Array(w+1),P=$===a,M=!1,S=0,F=0;if(f<4||($|w)<32)for(m=g;m<=c;++m)if(b=e[m],F<w){for(o=y;o<=r;o++)if(h=n[o],b.key===h.key){if(x[o-y]=m+1,P)for(P=!1;g<m;)Te(e[g++],i,p);S>o?M=!0:S=o,16384&h.flags&&(n[o]=h=Q(h)),$n(b,h,i,t,l,d,s,p),++F;break}!P&&o>r&&Te(b,i,p)}else P||Te(b,i,p);else{var U={};for(m=y;m<=r;++m)U[n[m].key]=m;for(m=g;m<=c;++m)if(b=e[m],F<w)if(void 0!==(o=U[b.key])){if(P)for(P=!1;m>g;)Te(e[g++],i,p);x[o-y]=m+1,S>o?M=!0:S=o,16384&(h=n[o]).flags&&(n[o]=h=Q(h)),$n(b,h,i,t,l,d,s,p),++F}else P||Te(b,i,p);else P||Te(b,i,p)}if(P)Qe(i,u,e,p),dn(n,i,t,l,d,s,p);else if(M){var W=On(x);for(o=W.length-1,m=w-1;m>=0;m--)0===x[m]?(16384&(h=n[S=m+y]).flags&&(n[S]=h=Q(h)),fn(h,i,t,l,(v=S+1)<f?k(n[v],!0):d,s,p)):o<0||m!==W[o]?D(u,h=n[S=m+y],i,(v=S+1)<f?k(n[v],!0):d,p):o--;p.componentWillMove.length>0&&C(p.componentWillMove)}else if(F!==w)for(m=w-1;m>=0;m--)0===x[m]&&(16384&(h=n[S=m+y]).flags&&(n[S]=h=Q(h)),fn(h,i,t,l,(v=S+1)<f?k(n[v],!0):d,s,p))}var Bn=0;function On(e){var n=0,t=0,a=0,f=0,c=0,r=0,o=0,i=e.length;for(i>Bn&&(Bn=i,Ue=new Int32Array(i),We=new Int32Array(i));t<i;++t)if(0!==(n=e[t])){if(e[a=Ue[f]]<n){We[t]=a,Ue[++f]=t;continue}for(c=0,r=f;c<r;)e[Ue[o=c+r>>1]]<n?c=o+1:r=o;n<e[Ue[c]]&&(c>0&&(We[t]=Ue[c-1]),Ue[c]=t)}c=f+1;var l=new Int32Array(c);for(r=Ue[c-1];c-- >0;)l[c]=r,r=We[r],Ue[c]=0;return l}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var En=[],jn=Promise.resolve().then.bind(Promise.resolve()),Tn=!1;function Rn(n,t,a,f){var r=n.$PS;if(o(t)&&(t=t(r?e({},n.state,r):n.state,n.props,n.context)),c(r))n.$PS=t;else for(var i in t)r[i]=t[i];if(n.$BR)o(a)&&n.$L.push(a.bind(n));else{if(!U.v&&0===En.length)return qn(n,f),void(o(a)&&a.call(n));if(En.includes(n)||En.push(n),f&&(n.$F=!0),Tn||(Tn=!0,jn(Hn)),o(a)){var l=n.$QU;l||(l=n.$QU=[]),l.push(a)}}}function _n(e){for(var n=e.$QU,t=0;t<n.length;++t)n[t].call(e);e.$QU=null}function Hn(){var e;for(Tn=!1;e=En.shift();)if(!e.$UN){var n=e.$F;e.$F=!1,qn(e,n),e.$QU&&_n(e)}}function qn(n,t){if(t||!n.$BR){var a=n.$PS;n.$PS=null;var f=[],c=new s;U.v=!0,Un(n,e({},n.state,a),n.props,k(n.$LI,!0).parentNode,n.context,n.$SVG,t,null,f,c),y(f),w(c.componentDidAppear),U.v=!1}else n.state=n.$PS,n.$PS=null}var Qn=function(){function e(e,n){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=e||u,this.context=n||u}var n=e.prototype;return n.forceUpdate=function(e){if(this.$UN)return;Rn(this,{},e,!0)},n.setState=function(e,n){if(this.$UN)return;this.$BS||Rn(this,e,n,!1)},n.render=function(e,n,t){return null},e}();function Xn(e){for(var n=e.length/6|0,t=new Array(n),a=0;a<n;)t[a]="#"+e.slice(6*a,6*++a);return t}function Gn(e){var n=e.length;return function(t){return e[Math.max(0,Math.min(n-1,Math.floor(t*n)))]}}Qn.defaultProps=null;var Kn=Gn(Xn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));function Jn(e,n){for(var t=[],a=0;a<e.length;a++)t.push(n(e[a]));return t}Gn(Xn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),Gn(Xn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),Gn(Xn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));var zn=function(e){function t(n,t){var a;return(a=e.call(this,n,t)||this).state={numPoints:0},a.updateCount=a.updateCount.bind(a),a}n(t,e);var a=t.prototype;return a.updateCount=function(e){this.setState({numPoints:e.target.value})},a.componentDidMount=function(){this.setState({numPoints:1e3})},a.render=function(e,n){return O(1,"div","app-wrapper",[R(2,Zn,{count:n.numPoints},null,null),O(1,"div","controls",[_("# Points"),O(64,"input",null,null,1,{type:"range",min:10,max:1e4,value:n.numPoints,onInput:this.updateCount},null,null),n.numPoints],0,null,null,null),O(1,"div","about",[_("InfernoJS 1k Components Demo based on the Glimmer demo by"),_(" "),O(1,"a",null,"Michael Lange",16,{href:"http://mlange.io",target:"_blank"},null,null),_(".")],0,null,null,null)],4,null,null,null)},t}(Qn),Yn=[0,3,0,1,2],Zn=function(t){function a(e,n){var a;return(a=t.call(this,e,n)||this).layout=0,a.phyllotaxis=lt(100),a.grid=dt(100),a.wave=ut(100),a.spiral=st(100),a.points=[],a.step=0,a.numSteps=120,a}n(a,t);var f=a.prototype;return f.next=function(){var n=this;this.step=(this.step+1)%this.numSteps,0===this.step&&(this.layout=(this.layout+1)%Yn.length);var t=Math.min(1,this.step/(.8*this.numSteps)),a=Yn[this.layout],f=Yn[(this.layout+1)%Yn.length],c=rt(a),r=rt(f),o=ot(a),i=ot(f);this.points=this.points.map((function(n){var a=e({},n);return a.x=it(a,t,c,r),a.y=it(a,t,o,i),a})),this.setState(),requestAnimationFrame((function(){n.next()}))},f.setAnchors=function(e){var n=this;e.map((function(e,t){var a=ht(n.grid(t)),f=a[0],c=a[1],r=ht(n.wave(t)),o=r[0],i=r[1],l=ht(n.spiral(t)),d=l[0],u=l[1],s=ht(n.phyllotaxis(t)),p=s[0],b=s[1];Object.assign(e,{gx:f,gy:c,wx:o,wy:i,sx:d,sy:u,px:p,py:b})})),this.points=e},f.makePoints=function(e){for(var n=[],t=0;t<e;t++)n.push({x:0,y:0,color:Kn(t/e)});this.setAnchors(n)},f.componentWillReceiveProps=function(e){e.count!==this.props.count&&(this.phyllotaxis=lt(e.count),this.grid=dt(e.count),this.wave=ut(e.count),this.spiral=st(e.count),this.makePoints(e.count))},f.componentDidMount=function(){this.next()},f.renderPoint=function(e){return R(2,et,{x:e.x,y:e.y,color:e.color},null,null)},f.render=function(){return O(32,"svg","demo",O(32,"g",null,Jn(this.points,this.renderPoint),4,null,null,null),2,null,null,null)},a}(Qn);function et(e){var n=e.x,t=e.y,a=e.color;return O(32,"rect","point",null,1,{transform:"translate("+Math.floor(n)+", "+Math.floor(t)+")",fill:a},null,null)}var nt,tt,at,ft,ct=Math.PI*(3-Math.sqrt(5));function rt(e){switch(e){case 0:return"px";case 1:return"gx";case 2:return"wx";case 3:return"sx"}}function ot(e){switch(e){case 0:return"py";case 1:return"gy";case 2:return"wy";case 3:return"sy"}}function it(e,n,t,a){var f=e[t];return f+(e[a]-f)*n}function lt(e){return function(n){var t=Math.sqrt(n/e),a=n*ct;return[t*Math.cos(a),t*Math.sin(a)]}}function dt(e){var n=Math.round(Math.sqrt(e));return function(e){return[1.6/n*(e%n)-.8,1.6/n*Math.floor(e/n)-.8]}}function ut(e){var n=2/(e-1);return function(e){var t=e*n-1;return[t,.3*Math.sin(t*Math.PI*3)]}}function st(e){return function(n){var t=Math.sqrt(n/(e-1)),a=t*Math.PI*10;return[t*Math.cos(a),t*Math.sin(a)]}}function pt(e,n){return n.map((function(n){return n*e}))}function bt(e,n){return n.map((function(n,t){return n+e[t]}))}function ht(e){var n=window.innerHeight/2,t=window.innerWidth/2;return bt([t,n],pt(Math.min(n,t),e))}nt=R(2,zn,null,null,null),tt=document.getElementById("app"),void 0===at&&(at=null),void 0===ft&&(ft=u),function(e,n,t,a){var f=[],r=new s,i=n.$V;U.v=!0,c(i)?c(e)||(0!==(16384&e.flags)&&(e=Q(e)),fn(e,n,a,!1,null,f,r),n.$V=e,i=e):c(e)?(Te(i,n,r),n.$V=null):(16384&e.flags&&(e=Q(e)),$n(i,e,n,a,!1,null,f,r),i=n.$V=e),y(f),w(r.componentDidAppear),U.v=!1,o(t)&&t()}(nt,tt,at,ft)}();
