!function(){"use strict";function n(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,e(n,t)}function e(n,t){return e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},e(n,t)}function t(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}var r=Array.isArray;function o(n){var e=typeof n;return"string"===e||"number"===e}function i(n){return void 0===n||null===n}function l(n){return null===n||!1===n||!0===n||void 0===n}function a(n){return"function"===typeof n}function u(n){return"string"===typeof n}function c(n){return null===n}function s(n,e){var t={};if(n)for(var r in n)t[r]=n[r];if(e)for(var o in e)t[o]=e[o];return t}function f(n){return!c(n)&&"object"===typeof n}var p={},d=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function h(n){return n.substring(2).toLowerCase()}function v(n,e){n.appendChild(e)}function m(n,e,t){c(t)?v(n,e):n.insertBefore(e,t)}function g(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}function y(n,e,t){n.replaceChild(e,t)}function b(n,e){n.removeChild(e)}function $(n){for(var e=0;e<n.length;e++)n[e]()}function k(n,e,t){var r=n.children;if(4&t)return r.$LI;if(8192&t)return 2===n.childFlags?r:r[e?0:r.length-1];return r}function C(n,e){for(var t;n;){if(1521&(t=n.flags))return n.dom;n=k(n,e,t)}return null}function w(n,e){for(var t,r=n.length;void 0!==(t=n.pop());)t((function(){--r<=0&&a(e)&&e()}))}function x(n){for(var e=0;e<n.length;e++)n[e].fn();for(var t=0;t<n.length;t++){var r=n[t];m(r.parent,r.dom,r.next)}n.splice(0,n.length)}function U(n,e,t){do{var r=n.flags;if(1521&r)return void(t&&n.dom.parentNode!==e||b(e,n.dom));var o=n.children;if(4&r&&(n=o.$LI),8&r&&(n=o),8192&r){if(2!==n.childFlags){for(var i=0,l=o.length;i<l;++i)U(o[i],e,!1);return}n=o}}while(n)}function P(n,e){return function(){U(n,e,!0)}}function S(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,P(n,e)):U(n,e,!1)}function F(n,e,t,r,o,i,l,a){n.componentWillMove.push({dom:r,fn:function(){4&l?t.componentWillMove(e,o,r):8&l&&t.onComponentWillMove(e,o,r,a)},next:i,parent:o})}function D(n,e,t,r,o){var l,u,c=e.flags;do{var s=e.flags;if(1521&s)return void(i(l)||!a(l.componentWillMove)&&!a(l.onComponentWillMove)?m(t,e.dom,r):F(o,n,l,e.dom,t,r,c,u));var f=e.children;if(4&s)l=e.children,u=e.props,e=f.$LI;else if(8&s)l=e.ref,u=e.props,e=f;else if(8192&s){if(2!==e.childFlags){for(var p=0,d=f.length;p<d;++p)D(n,f[p],t,r,o);return}e=f}}while(e)}function L(n,e,t){if(n.constructor.getDerivedStateFromProps)return s(t,n.constructor.getDerivedStateFromProps(e,t));return t}var N={v:!1},W={componentComparator:null,createVNode:null,renderComplete:null};function A(n,e){n.textContent=e}function M(n,e){return f(n)&&n.event===e.event&&n.data===e.data}function V(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function I(n,e){return!!a(n)&&(n(e),!0)}var B="$";function T(n,e,t,r,o,i,l,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===i?null:i,this.ref=void 0===l?null:l,this.type=a}function O(n,e,t,r,o,i,l,a){var u=void 0===o?1:o,c=new T(u,r,t,n,l,i,a,e);return 0===u&&J(c,c.children),c}function E(n,e,t){if(4&n)return t;var r=(32768&n?e.render:e).defaultHooks;if(i(r))return t;if(i(t))return r;return V(t,r)}function R(n,e,t){var r=(32768&n?e.render:e).defaultProps;if(i(r))return t;if(i(t))return s(r,null);return V(t,r)}function j(n,e){if(12&n)return n;if(e.prototype&&e.prototype.render)return 4;if(e.render)return 32776;return 8}function _(n,e,t,r,o){return new T(1,null,null,n=j(n,e),r,R(n,e,t),E(n,e,o),e)}function H(n,e){return new T(1,i(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function Q(n,e,t){var r=O(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=K(),r.childFlags=2;break;case 16:r.children=[H(n)],r.childFlags=4}return r}function X(n){var e=n.children,t=n.childFlags;return Q(2===t?G(e):e.map(G),t,n.key)}function G(n){var e=-16385&n.flags,t=n.props;if(14&e&&!c(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new T(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return X(n)}function K(){return H("",null)}function q(n,e,t,i){for(var a=n.length;t<a;t++){var s=n[t];if(!l(s)){var f=i+B+t;if(r(s))q(s,e,0,f);else{if(o(s))s=H(s,f);else{var p=s.key,d=u(p)&&p[0]===B;(81920&s.flags||d)&&(s=G(s)),s.flags|=65536,d?p.substring(0,i.length)!==i&&(s.key=i+p):c(p)?s.key=f:s.key=i+p}e.push(s)}}}}function J(n,e){var t,i=1;if(l(e))t=e;else if(o(e))i=16,t=e;else if(r(e)){for(var a=e.length,s=0;s<a;++s){var f=e[s];if(l(f)||r(f)){t=t||e.slice(0,s),q(e,t,s,"");break}if(o(f))(t=t||e.slice(0,s)).push(H(f,B+s));else{var p=f.key,d=(81920&f.flags)>0,h=c(p),v=u(p)&&p[0]===B;d||h||v?(t=t||e.slice(0,s),(d||v)&&(f=G(f)),(h||v)&&(f.key=B+s),t.push(f)):t&&t.push(f),f.flags|=65536}}i=0===(t=t||e).length?1:8}else(t=e).flags|=65536,81920&e.flags&&(t=G(e)),i=2;return n.children=t,n.childFlags=i,n}function z(n){if(l(n)||o(n))return H(n,null);if(r(n))return Q(n,0,null);return 16384&n.flags?G(n):n}var Y="http://www.w3.org/1999/xlink",Z="http://www.w3.org/XML/1998/namespace",nn={"xlink:actuate":Y,"xlink:arcrole":Y,"xlink:href":Y,"xlink:role":Y,"xlink:show":Y,"xlink:title":Y,"xlink:type":Y,"xml:base":Z,"xml:lang":Z,"xml:space":Z};function en(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var tn=en(0),rn=en(null),on=en(!0);function ln(n,e){var t=e.$EV;return t||(t=e.$EV=en(null)),t[n]||1===++tn[n]&&(rn[n]=gn(n)),t}function an(n,e){var t=e.$EV;t&&t[n]&&(0===--tn[n]&&(document.removeEventListener(h(n),rn[n]),rn[n]=null),t[n]=null)}function un(n,e,t,r){if(a(t))ln(n,r)[n]=t;else if(f(t)){if(M(e,t))return;ln(n,r)[n]=t}else an(n,r)}function cn(n){return a(n.composedPath)?n.composedPath()[0]:n.target}function sn(n,e,t,r){var o=cn(n);do{if(e&&o.disabled)return;var i=o.$EV;if(i){var l=i[t];if(l&&(r.dom=o,l.event?l.event(l.data,n):l(n),n.cancelBubble))return}o=o.parentNode}while(!c(o))}function fn(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function pn(){return this.defaultPrevented}function dn(){return this.cancelBubble}function hn(n){var e={dom:document};return n.isDefaultPrevented=pn,n.isPropagationStopped=dn,n.stopPropagation=fn,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function vn(n){return function(e){if(0!==e.button)return void e.stopPropagation();sn(e,!0,n,hn(e))}}function mn(n){return function(e){sn(e,!1,n,hn(e))}}function gn(n){var e="onClick"===n||"onDblClick"===n?vn(n):mn(n);return document.addEventListener(h(n),e),e}function yn(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}function bn(n,e,t){if(n[e]){var r=n[e];r.event?r.event(r.data,t):r(t)}else{var o=e.toLowerCase();n[o]&&n[o](t)}}function $n(n,e){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||p,i=r.dom;if(u(n))bn(o,n,t);else for(var l=0;l<n.length;++l)bn(o,n[l],t);if(a(e)){var c=this.$V,s=c.props||p;e(s,i,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function kn(n,e,t){var r="$"+e,o=n[r];if(o){if(o[1].wrapped)return;n.removeEventListener(o[0],o[1]),n[r]=null}a(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function Cn(n){return"checkbox"===n||"radio"===n}var wn=$n("onInput",Sn),xn=$n(["onClick","onChange"],Sn);function Un(n){n.stopPropagation()}function Pn(n,e){Cn(e.type)?(kn(n,"change",xn),kn(n,"click",Un)):kn(n,"input",wn)}function Sn(n,e){var t=n.type,r=n.value,o=n.checked,l=n.multiple,a=n.defaultValue,u=!i(r);t&&t!==e.type&&e.setAttribute("type",t),i(l)||l===e.multiple||(e.multiple=l),i(a)||u||(e.defaultValue=a+""),Cn(t)?(u&&(e.value=r),i(o)||(e.checked=o)):u&&e.value!==r?(e.defaultValue=r,e.value=r):i(o)||(e.checked=o)}function Fn(n,e){if("option"===n.type)Dn(n,e);else{var t=n.children,r=n.flags;if(4&r)Fn(t.$LI,e);else if(8&r)Fn(t,e);else if(2===n.childFlags)Fn(t,e);else if(12&n.childFlags)for(var o=0,i=t.length;o<i;++o)Fn(t[o],e)}}function Dn(n,e){var t=n.props||p,o=n.dom;o.value=t.value,t.value===e||r(e)&&-1!==e.indexOf(t.value)?o.selected=!0:i(e)&&i(t.selected)||(o.selected=t.selected||!1)}Un.wrapped=!0;var Ln=$n("onChange",Wn);function Nn(n){kn(n,"change",Ln)}function Wn(n,e,t,r){var o=Boolean(n.multiple);i(n.multiple)||o===e.multiple||(e.multiple=o);var l=n.selectedIndex;if(-1===l&&(e.selectedIndex=-1),1!==r.childFlags){var a=n.value;"number"===typeof l&&l>-1&&e.options[l]&&(a=e.options[l].value),t&&i(a)&&(a=n.defaultValue),Fn(r,a)}}var An,Mn,Vn=$n("onInput",Tn),In=$n("onChange");function Bn(n,e){kn(n,"input",Vn),e.onChange&&kn(n,"change",In)}function Tn(n,e,t){var r=n.value,o=e.value;if(i(r)){if(t){var l=n.defaultValue;i(l)||l===o||(e.defaultValue=l,e.value=l)}}else o!==r&&(e.defaultValue=r,e.value=r)}function On(n,e,t,r,o,i){64&n?Sn(r,t):256&n?Wn(r,t,o,e):128&n&&Tn(r,t,o),i&&(t.$V=e)}function En(n,e,t){64&n?Pn(e,t):256&n?Nn(e):128&n&&Bn(e,t)}function Rn(n){return n.type&&Cn(n.type)?!i(n.checked):!i(n.value)}function jn(n){n&&!I(n,null)&&n.current&&(n.current=null)}function _n(n,e,t){n&&(a(n)||void 0!==n.current)&&t.push((function(){I(n,e)||void 0===n.current||(n.current=e)}))}function Hn(n,e,t){Qn(n,t),S(n,e,t)}function Qn(n,e){var t,r=n.flags,o=n.children;if(481&r){t=n.ref;var l=n.props;jn(t);var u=n.childFlags;if(!c(l))for(var s=Object.keys(l),f=0,h=s.length;f<h;f++){var v=s[f];on[v]&&an(v,n.dom)}12&u?Xn(o,e):2===u&&Qn(o,e)}else if(o)if(4&r){a(o.componentWillUnmount)&&o.componentWillUnmount();var m=e;a(o.componentWillDisappear)&&(m=new d,Jn(e,o,o.$LI.dom,r,void 0)),jn(n.ref),o.$UN=!0,Qn(o.$LI,m)}else if(8&r){var g=e;if(!i(t=n.ref)){var y=null;a(t.onComponentWillUnmount)&&(y=C(n,!0),t.onComponentWillUnmount(y,n.props||p)),a(t.onComponentWillDisappear)&&(g=new d,Jn(e,t,y=y||C(n,!0),r,n.props))}Qn(o,g)}else 1024&r?Hn(o,n.ref,e):8192&r&&12&n.childFlags&&Xn(o,e)}function Xn(n,e){for(var t=0,r=n.length;t<r;++t)Qn(n[t],e)}function Gn(n,e){return function(){if(e)for(var t=0;t<n.length;t++)U(n[t],e,!1)}}function Kn(n,e,t){t.componentWillDisappear.length>0?w(t.componentWillDisappear,Gn(e,n)):n.textContent=""}function qn(n,e,t,r){Xn(t,r),8192&e.flags?S(e,n,r):Kn(n,t,r)}function Jn(n,e,t,r,o){n.componentWillDisappear.push((function(n){4&r?e.componentWillDisappear(t,n):8&r&&e.onComponentWillDisappear(t,o,n)}))}function zn(n){var e=n.event;return function(t){e(n.data,t)}}function Yn(n,e,t,r){if(f(t)){if(M(e,t))return;t=zn(t)}kn(r,h(n),t)}function Zn(n,e,t){if(i(e))return void t.removeAttribute("style");var r,o,l=t.style;if(u(e))return void(l.cssText=e);if(i(n)||u(n))for(r in e)o=e[r],l.setProperty(r,o);else{for(r in e)(o=e[r])!==n[r]&&l.setProperty(r,o);for(r in n)i(e[r])&&l.removeProperty(r)}}function ne(n,e,t,r,o){var l=n&&n.__html||"",a=e&&e.__html||"";l!==a&&(i(a)||yn(r,a)||(c(t)||(12&t.childFlags?Xn(t.children,o):2===t.childFlags&&Qn(t.children,o),t.children=null,t.childFlags=1),r.innerHTML=a))}function ee(n,e,t,r,o,l,a,u){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(l&&"value"===n)break;var c=i(t)?"":t;r[n]!==c&&(r[n]=c);break;case"style":Zn(e,t,r);break;case"dangerouslySetInnerHTML":ne(e,t,a,r,u);break;default:on[n]?un(n,e,t,r):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?Yn(n,e,t,r):i(t)?r.removeAttribute(n):o&&nn[n]?r.setAttributeNS(nn[n],n,t):r.setAttribute(n,t)}}function te(n,e,t,r,o,i){var l=!1,a=(448&e)>0;for(var u in a&&(l=Rn(t))&&En(e,r,t),t)ee(u,null,t[u],r,o,l,null,i);a&&On(e,n,r,t,!0,l)}function re(n,e,t){var r=z(n.render(e,n.state,t)),o=t;return a(n.getChildContext)&&(o=s(t,n.getChildContext())),n.$CX=o,r}function oe(n,e,t,r,o,i){var l=new e(t,r),u=l.$N=Boolean(e.getDerivedStateFromProps||l.getSnapshotBeforeUpdate);if(l.$SVG=o,l.$L=i,n.children=l,l.$BS=!1,l.context=r,l.props===p&&(l.props=t),u)l.state=L(l,t,l.state);else if(a(l.componentWillMount)){l.$BR=!0,l.componentWillMount();var s=l.$PS;if(!c(s)){var f=l.state;if(c(f))l.state=s;else for(var d in s)f[d]=s[d];l.$PS=null}l.$BR=!1}return l.$LI=re(l,t,r),l}function ie(n,e){var t=n.props||p;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function le(n,e,t,r,o,i,l){var a=n.flags|=16384;481&a?se(n,e,t,r,o,i,l):4&a?pe(n,e,t,r,o,i,l):8&a?de(n,e,t,r,o,i,l):16&a?ce(n,e,o):8192&a?ue(n,t,e,r,o,i,l):1024&a&&ae(n,t,e,o,i,l)}function ae(n,e,t,r,o,i){le(n.children,n.ref,e,!1,null,o,i);var l=K();ce(l,t,r),n.dom=l.dom}function ue(n,e,t,r,o,i,l){var a=n.children,u=n.childFlags;12&u&&0===a.length&&(u=n.childFlags=2,a=n.children=K()),2===u?le(a,t,e,r,o,i,l):fe(a,t,e,r,o,i,l)}function ce(n,e,t){var r=n.dom=document.createTextNode(n.children);c(e)||m(e,r,t)}function se(n,e,t,r,o,l,a){var u=n.flags,s=n.props,f=n.className,p=n.childFlags,d=n.dom=g(n.type,r=r||(32&u)>0),h=n.children;if(i(f)||""===f||(r?d.setAttribute("class",f):d.className=f),16===p)A(d,h);else if(1!==p){var v=r&&"foreignObject"!==n.type;2===p?(16384&h.flags&&(n.children=h=G(h)),le(h,d,t,v,null,l,a)):8!==p&&4!==p||fe(h,d,t,v,null,l,a)}c(e)||m(e,d,o),c(s)||te(n,u,s,d,r,a),_n(n.ref,d,l)}function fe(n,e,t,r,o,i,l){for(var a=0;a<n.length;++a){var u=n[a];16384&u.flags&&(n[a]=u=G(u)),le(u,e,t,r,o,i,l)}}function pe(n,e,t,r,o,i,l){var u=oe(n,n.type,n.props||p,t,r,i),c=l;a(u.componentDidAppear)&&(c=new d),le(u.$LI,e,u.$CX,r,o,i,c),me(n.ref,u,i,l)}function de(n,e,t,r,o,l,u){var c=n.ref,s=u;!i(c)&&a(c.onComponentDidAppear)&&(s=new d),le(n.children=z(ie(n,t)),e,t,r,o,l,s),ye(n,l,u)}function he(n){return function(){n.componentDidMount()}}function ve(n,e,t,r,o){n.componentDidAppear.push((function(){4&r?e.componentDidAppear(t):8&r&&e.onComponentDidAppear(t,o)}))}function me(n,e,t,r){_n(n,e,t),a(e.componentDidMount)&&t.push(he(e)),a(e.componentDidAppear)&&ve(r,e,e.$LI.dom,4,void 0)}function ge(n,e){return function(){n.onComponentDidMount(C(e,!0),e.props||p)}}function ye(n,e,t){var r=n.ref;i(r)||(I(r.onComponentWillMount,n.props||p),a(r.onComponentDidMount)&&e.push(ge(r,n)),a(r.onComponentDidAppear)&&ve(t,r,C(n,!0),8,n.props))}function be(n,e,t,r,o,i,l){Qn(n,l),0!==(e.flags&n.flags&1521)?(le(e,null,r,o,null,i,l),y(t,e.dom,n.dom)):(le(e,t,r,o,C(n,!0),i,l),S(n,t,l))}function $e(n,e,t,r,o,i,l,a){var u=e.flags|=16384;n.flags!==u||n.type!==e.type||n.key!==e.key||2048&u?16384&n.flags?be(n,e,t,r,o,l,a):le(e,t,r,o,i,l,a):481&u?Ue(n,e,r,o,u,l,a):4&u?Le(n,e,t,r,o,i,l,a):8&u?Ne(n,e,t,r,o,i,l,a):16&u?We(n,e):8192&u?we(n,e,t,r,o,l,a):xe(n,e,r,l,a)}function ke(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:A(t,e))}function Ce(n,e){n.textContent!==e&&(n.textContent=e)}function we(n,e,t,r,o,i,l){var a=n.children,u=e.children,c=n.childFlags,s=e.childFlags,f=null;12&s&&0===u.length&&(s=e.childFlags=2,u=e.children=K());var p=0!==(2&s);if(12&c){var d=a.length;(8&c&&8&s||p||!p&&u.length>d)&&(f=C(a[d-1],!1).nextSibling)}Se(c,s,a,u,t,r,o,f,n,i,l)}function xe(n,e,t,r,o){var i=n.ref,a=e.ref,u=e.children;if(Se(n.childFlags,e.childFlags,n.children,u,i,t,!1,null,n,r,o),e.dom=n.dom,i!==a&&!l(u)){var c=u.dom;b(i,c),v(a,c)}}function Ue(n,e,t,r,o,l,a){var u,c=e.dom=n.dom,s=n.props,f=e.props,d=!1,h=!1;if(r=r||(32&o)>0,s!==f){var v=s||p;if((u=f||p)!==p)for(var m in(d=(448&o)>0)&&(h=Rn(u)),u){var g=v[m],y=u[m];g!==y&&ee(m,g,y,c,r,h,n,a)}if(v!==p)for(var b in v)i(u[b])&&!i(v[b])&&ee(b,v[b],null,c,r,h,n,a)}var $=e.children,k=e.className;n.className!==k&&(i(k)?c.removeAttribute("class"):r?c.setAttribute("class",k):c.className=k),4096&o?Ce(c,$):Se(n.childFlags,e.childFlags,n.children,$,c,t,r&&"foreignObject"!==e.type,null,n,l,a),d&&On(o,e,c,u,!1,h);var C=e.ref,w=n.ref;w!==C&&(jn(w),_n(C,c,l))}function Pe(n,e,t,r,o,i,l){Qn(n,l),fe(e,t,r,o,C(n,!0),i,l),S(n,t,l)}function Se(n,e,t,r,o,i,l,a,u,c,s){switch(n){case 2:switch(e){case 2:$e(t,r,o,i,l,a,c,s);break;case 1:Hn(t,o,s);break;case 16:Qn(t,s),A(o,r);break;default:Pe(t,r,o,i,l,c,s)}break;case 1:switch(e){case 2:le(r,o,i,l,a,c,s);break;case 1:break;case 16:A(o,r);break;default:fe(r,o,i,l,a,c,s)}break;case 16:switch(e){case 16:ke(t,r,o);break;case 2:Kn(o,t,s),le(r,o,i,l,a,c,s);break;case 1:Kn(o,t,s);break;default:Kn(o,t,s),fe(r,o,i,l,a,c,s)}break;default:switch(e){case 16:Xn(t,s),A(o,r);break;case 2:qn(o,u,t,s),le(r,o,i,l,a,c,s);break;case 1:qn(o,u,t,s);break;default:var f=0|t.length,p=0|r.length;0===f?p>0&&fe(r,o,i,l,a,c,s):0===p?qn(o,u,t,s):8===e&&8===n?Me(t,r,o,i,l,f,p,a,u,c,s):Ae(t,r,o,i,l,f,p,a,c,s)}}}function Fe(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}function De(n,e,t,r,o,i,l,u,c,f){var p=n.state,d=n.props,h=Boolean(n.$N),v=a(n.shouldComponentUpdate);if(h&&(e=L(n,t,e!==p?s(p,e):e)),l||!v||v&&n.shouldComponentUpdate(t,e,o)){!h&&a(n.componentWillUpdate)&&n.componentWillUpdate(t,e,o),n.props=t,n.state=e,n.context=o;var m=null,g=re(n,t,o);h&&a(n.getSnapshotBeforeUpdate)&&(m=n.getSnapshotBeforeUpdate(d,p)),$e(n.$LI,g,r,n.$CX,i,u,c,f),n.$LI=g,a(n.componentDidUpdate)&&Fe(n,d,p,m,c)}else n.props=t,n.state=e,n.context=o}function Le(n,e,t,r,o,i,l,u){var f=e.children=n.children;if(c(f))return;f.$L=l;var d=e.props||p,h=e.ref,v=n.ref,m=f.state;if(!f.$N){if(a(f.componentWillReceiveProps)){if(f.$BR=!0,f.componentWillReceiveProps(d,r),f.$UN)return;f.$BR=!1}c(f.$PS)||(m=s(m,f.$PS),f.$PS=null)}De(f,m,d,t,r,o,!1,i,l,u),v!==h&&(jn(v),_n(h,f,l))}function Ne(n,e,t,r,o,l,u,c){var s=!0,f=e.props||p,d=e.ref,h=n.props,v=!i(d),m=n.children;if(v&&a(d.onComponentShouldUpdate)&&(s=d.onComponentShouldUpdate(h,f)),!1!==s){v&&a(d.onComponentWillUpdate)&&d.onComponentWillUpdate(h,f);var g=z(ie(e,r));$e(m,g,t,r,o,l,u,c),e.children=g,v&&a(d.onComponentDidUpdate)&&d.onComponentDidUpdate(h,f)}else e.children=m}function We(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}function Ae(n,e,t,r,o,i,l,a,u,c){for(var s,f,p=i>l?l:i,d=0;d<p;++d)s=e[d],f=n[d],16384&s.flags&&(s=e[d]=G(s)),$e(f,s,t,r,o,a,u,c),n[d]=s;if(i<l)for(d=p;d<l;++d)16384&(s=e[d]).flags&&(s=e[d]=G(s)),le(s,t,r,o,a,u,c);else if(i>l)for(d=p;d<i;++d)Hn(n[d],t,c)}function Me(n,e,t,r,o,i,l,a,u,c,s){var f,p,d=i-1,h=l-1,v=0,m=n[v],g=e[v];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[v]=g=G(g)),$e(m,g,t,r,o,a,c,s),n[v]=g,++v>d||v>h)break n;m=n[v],g=e[v]}for(m=n[d],g=e[h];m.key===g.key;){if(16384&g.flags&&(e[h]=g=G(g)),$e(m,g,t,r,o,a,c,s),n[d]=g,h--,v>--d||v>h)break n;m=n[d],g=e[h]}}if(v>d){if(v<=h)for(p=(f=h+1)<l?C(e[f],!0):a;v<=h;)16384&(g=e[v]).flags&&(e[v]=g=G(g)),++v,le(g,t,r,o,p,c,s)}else if(v>h)for(;v<=d;)Hn(n[v++],t,s);else Ve(n,e,r,i,l,d,h,v,t,o,a,u,c,s)}function Ve(n,e,t,r,o,i,l,a,u,c,s,f,p,d){var h,v,m=0,g=0,y=a,b=a,$=i-a+1,k=l-a+1,w=new Int32Array(k+1),U=$===r,P=!1,S=0,F=0;if(o<4||($|k)<32)for(g=y;g<=i;++g)if(h=n[g],F<k){for(a=b;a<=l;a++)if(v=e[a],h.key===v.key){if(w[a-b]=g+1,U)for(U=!1;y<g;)Hn(n[y++],u,d);S>a?P=!0:S=a,16384&v.flags&&(e[a]=v=G(v)),$e(h,v,u,t,c,s,p,d),++F;break}!U&&a>l&&Hn(h,u,d)}else U||Hn(h,u,d);else{var L={};for(g=b;g<=l;++g)L[e[g].key]=g;for(g=y;g<=i;++g)if(h=n[g],F<k)if(void 0!==(a=L[h.key])){if(U)for(U=!1;g>y;)Hn(n[y++],u,d);w[a-b]=g+1,S>a?P=!0:S=a,16384&(v=e[a]).flags&&(e[a]=v=G(v)),$e(h,v,u,t,c,s,p,d),++F}else U||Hn(h,u,d);else U||Hn(h,u,d)}if(U)qn(u,f,n,d),fe(e,u,t,c,s,p,d);else if(P){var N=Be(w);for(a=N.length-1,g=k-1;g>=0;g--)0===w[g]?(16384&(v=e[S=g+b]).flags&&(e[S]=v=G(v)),le(v,u,t,c,(m=S+1)<o?C(e[m],!0):s,p,d)):a<0||g!==N[a]?D(f,v=e[S=g+b],u,(m=S+1)<o?C(e[m],!0):s,d):a--;d.componentWillMove.length>0&&x(d.componentWillMove)}else if(F!==k)for(g=k-1;g>=0;g--)0===w[g]&&(16384&(v=e[S=g+b]).flags&&(e[S]=v=G(v)),le(v,u,t,c,(m=S+1)<o?C(e[m],!0):s,p,d))}var Ie=0;function Be(n){var e=0,t=0,r=0,o=0,i=0,l=0,a=0,u=n.length;for(u>Ie&&(Ie=u,An=new Int32Array(u),Mn=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=An[o]]<e){Mn[t]=r,An[++o]=t;continue}for(i=0,l=o;i<l;)n[An[a=i+l>>1]]<e?i=a+1:l=a;e<n[An[i]]&&(i>0&&(Mn[t]=An[i-1]),An[i]=t)}i=o+1;var c=new Int32Array(i);for(l=An[i-1];i-- >0;)c[i]=l,l=Mn[l],An[i]=0;return c}function Te(n,e,t,r){var o=[],l=new d,u=e.$V;N.v=!0,i(u)?i(n)||(16384&n.flags&&(n=G(n)),le(n,e,r,!1,null,o,l),e.$V=n,u=n):i(n)?(Hn(u,e,l),e.$V=null):(16384&n.flags&&(n=G(n)),$e(u,n,e,r,!1,null,o,l),u=e.$V=n),$(o),w(l.componentDidAppear),N.v=!1,a(t)&&t(),a(W.renderComplete)&&W.renderComplete(u,e)}function Oe(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=p),Te(n,e,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var Ee=[],Re="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(n){window.setTimeout(n,0)},je=!1;function _e(n,e,t,r){var o=n.$PS;if(a(e)&&(e=e(o?s(n.state,o):n.state,n.props,n.context)),i(o))n.$PS=e;else for(var l in e)o[l]=e[l];if(n.$BR)a(t)&&n.$L.push(t.bind(n));else{if(!N.v&&0===Ee.length)return Xe(n,r),void(a(t)&&t.call(n));if(-1===Ee.indexOf(n)&&Ee.push(n),r&&(n.$F=!0),je||(je=!0,Re(Qe)),a(t)){var u=n.$QU;u||(u=n.$QU=[]),u.push(t)}}}function He(n){for(var e=n.$QU,t=0;t<e.length;++t)e[t].call(n);n.$QU=null}function Qe(){var n;for(je=!1;n=Ee.shift();)if(!n.$UN){var e=n.$F;n.$F=!1,Xe(n,e),n.$QU&&He(n)}}function Xe(n,e){if(e||!n.$BR){var t=n.$PS;n.$PS=null;var r=[],o=new d;N.v=!0,De(n,s(n.state,t),n.props,C(n.$LI,!0).parentNode,n.context,n.$SVG,e,null,r,o),$(r),w(o.componentDidAppear),N.v=!1}else n.state=n.$PS,n.$PS=null}var Ge=function(){function n(n,e){this.state=null,this.props=void 0,this.context=void 0,this.displayName=void 0,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$SSR=void 0,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=n||p,this.context=e||p}var e=n.prototype;return e.forceUpdate=function(n){if(this.$UN)return;_e(this,{},n,!0)},e.setState=function(n,e){if(this.$UN)return;this.$BS||_e(this,n,e,!1)},e.render=function(n,e,t){return null},n}();Ge.defaultProps=null,uibench.init("Inferno [same as react]","8.1.0");var Ke=function(e){function r(n){var r;return(r=e.call(this,n)||this).onClick=r.onClick.bind(t(r)),r}n(r,e);var o=r.prototype;return o.shouldComponentUpdate=function(n,e){return this.props.text!==n.text},o.onClick=function(n){console.log("Clicked"+this.props.text),n.stopPropagation()},o.render=function(){return O(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},r}(Ge),qe=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=n.active?"TableRow active":"TableRow",t=n.props,r=[_(2,Ke,{text:"#"+n.id},-1,null)],o=0;o<t.length;o++)r.push(_(2,Ke,{text:t[o]},o,null));return O(1,"tr",e,r,0,{"data-id":n.id},null,null)},t}(Ge),Je=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(_(2,qe,{data:r},r.id,null))}return O(1,"table","Table",O(1,"tbody",null,e,0,null,null,null),2,null,null,null)},t}(Ge),ze=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n=this.props.data,e=n.time,t={"border-radius":(e%10).toString()+"px",background:"rgba(0,0,0,"+(.5+e%10/10).toString()+")"};return O(1,"div","AnimBox",null,1,{"data-id":n.id,style:t},null,null)},t}(Ge),Ye=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(_(2,ze,{data:r},r.id,null))}return O(1,"div","Anim",e,0,null,null,null)},t}(Ge),Ze=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return O(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},t}(Ge),nt=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=[],r=0;r<n.children.length;r++){var o=n.children[r];o.container?e.push(_(2,t,{data:o},o.id,null)):e.push(_(2,Ze,{data:o},o.id,null))}return O(1,"ul","TreeNode",e,0,null,null,null)},t}(Ge),et=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return O(1,"div","Tree",_(2,nt,{data:this.props.data.root},null,null),2,null,null,null)},t}(Ge),tt=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n,e=this.props.data,t=e.location;return"table"===t?n=_(2,Je,{data:e.table},null,null):"anim"===t?n=_(2,Ye,{data:e.anim},null,null):"tree"===t&&(n=_(2,et,{data:e.tree},null,null)),O(1,"div","Main",n,0,null,null,null)},t}(Ge);document.addEventListener("DOMContentLoaded",(function(n){var e=document.querySelector("#App");uibench.run((function(n){Oe(_(2,tt,{data:n},null,null),e)}),(function(n){Oe(O(1,"pre",null,JSON.stringify(n,null," "),0,null,null,null),e)}))}))}();
