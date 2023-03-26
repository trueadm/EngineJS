!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function l(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function u(e,n){if(o(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(e){return e.substring(2).toLowerCase()}function p(e,n){e.appendChild(n)}function v(e,n,t){i(t)?p(e,n):e.insertBefore(n,t)}function h(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}function m(e,n,t){e.replaceChild(n,t)}function g(e,n){e.removeChild(n)}function k(e){for(var n=0;n<e.length;n++)e[n]()}function b(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function y(e,n){for(var t;e;){if(1521&(t=e.flags))return e.dom;e=b(e,n,t)}return null}function C(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&o(n)&&n()}))}function w(e){for(var n=0;n<e.length;n++)e[n].fn();for(var t=0;t<e.length;t++){var r=e[t];v(r.parent,r.dom,r.next)}e.splice(0,e.length)}function $(e,n,t){do{var r=e.flags;if(1521&r)return void(t&&e.dom.parentNode!==n||g(n,e.dom));var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)$(o[l],n,!1);return}e=o}}while(e)}function D(e,n){return function(){$(e,n,!0)}}function F(e,n,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,D(e,n)):$(e,n,!1)}function x(e,n,t,r,o,l,i,a){e.componentWillMove.push({dom:r,fn:function(){4&i?t.componentWillMove(n,o,r):8&i&&t.onComponentWillMove(n,o,r,a)},next:l,parent:o})}function P(e,n,r,l,i){var a,u,c=n.flags;do{var f=n.flags;if(1521&f)return void(t(a)||!o(a.componentWillMove)&&!o(a.onComponentWillMove)?v(r,n.dom,l):x(i,e,a,n.dom,r,l,c,u));var s=n.children;if(4&f)a=n.children,u=n.props,n=s.$LI;else if(8&f)a=n.ref,u=n.props,n=s;else if(8192&f){if(2!==n.childFlags){for(var d=0,p=s.length;d<p;++d)P(e,s[d],r,l,i);return}n=s}}while(n)}function W(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var A={componentComparator:null,createVNode:null,renderComplete:null};function L(e,n){e.textContent=n}function M(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function S(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function V(e,n){return!!o(e)&&(e(n),!0)}var I="$";function N(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function U(e,n,t,r,o,l,i,a){var u=void 0===o?1:o,c=new N(u,r,t,e,i,l,a,n);return 0===u&&q(c,c.children),c}function T(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return S(r,o)}function B(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return S(r,o)}function E(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}function H(e,n,t,r,o){return new N(1,null,null,e=E(e,n),r,B(e,n,t),T(e,n,o),n)}function O(e,n){return new N(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function R(e,n,t){var r=U(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=_(),r.childFlags=2;break;case 16:r.children=[O(e)],r.childFlags=4}return r}function j(e){var n=e.children,t=e.childFlags;return R(2===t?X(n):n.map(X),t,e.key)}function X(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new N(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return j(e)}function _(){return O("",null)}function K(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+I+a;if(e(f))K(f,o,0,s);else{if(n(f))f=O(f,s);else{var d=f.key,p=l(d)&&d[0]===I;(81920&f.flags||p)&&(f=X(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}o.push(f)}}}}function q(t,o){var a,u=1;if(r(o))a=o;else if(n(o))u=16,a=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){a=a||o.slice(0,f),K(o,a,f,"");break}if(n(s))(a=a||o.slice(0,f)).push(O(s,I+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=l(d)&&d[0]===I;p||v||h?(a=a||o.slice(0,f),(p||h)&&(s=X(s)),(v||h)&&(s.key=I+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=X(o)),u=2;return t.children=a,t.childFlags=u,t}function G(t){if(r(t)||n(t))return O(t,null);if(e(t))return R(t,0,null);return 16384&t.flags?X(t):t}var J="http://www.w3.org/1999/xlink",z="http://www.w3.org/XML/1998/namespace",Q={"xlink:actuate":J,"xlink:arcrole":J,"xlink:href":J,"xlink:role":J,"xlink:show":J,"xlink:title":J,"xlink:type":J,"xml:base":z,"xml:lang":z,"xml:space":z};function Y(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var Z=Y(0),ee=Y(null),ne=Y(!0);function te(e,n){var t=n.$EV;return t||(t=n.$EV=Y(null)),t[e]||1===++Z[e]&&(ee[e]=pe(e)),t}function re(e,n){var t=n.$EV;t&&t[e]&&(0===--Z[e]&&(document.removeEventListener(d(e),ee[e]),ee[e]=null),t[e]=null)}function oe(e,n,t,r){if(o(t))te(e,r)[e]=t;else if(c(t)){if(M(n,t))return;te(e,r)[e]=t}else re(e,r)}function le(e){return o(e.composedPath)?e.composedPath()[0]:e.target}function ie(e,n,t,r){var o=le(e);do{if(n&&o.disabled)return;var l=o.$EV;if(l){var a=l[t];if(a&&(r.dom=o,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}o=o.parentNode}while(!i(o))}function ae(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function ue(){return this.defaultPrevented}function ce(){return this.cancelBubble}function fe(e){var n={dom:document};return e.isDefaultPrevented=ue,e.isPropagationStopped=ce,e.stopPropagation=ae,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function se(e){return function(n){if(0!==n.button)return void n.stopPropagation();ie(n,!0,e,fe(n))}}function de(e){return function(n){ie(n,!1,e,fe(n))}}function pe(e){var n="onClick"===e||"onDblClick"===e?se(e):de(e);return document.addEventListener(d(e),n),n}function ve(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}function he(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function me(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(l(e))he(i,e,t);else for(var u=0;u<e.length;++u)he(i,e[u],t);if(o(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ge(e,n,t){var r="$"+n,l=e[r];if(l){if(l[1].wrapped)return;e.removeEventListener(l[0],l[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function ke(e){return"checkbox"===e||"radio"===e}var be=me("onInput",$e),ye=me(["onClick","onChange"],$e);function Ce(e){e.stopPropagation()}function we(e,n){ke(n.type)?(ge(e,"change",ye),ge(e,"click",Ce)):ge(e,"input",be)}function $e(e,n){var r=e.type,o=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),ke(r)?(u&&(n.value=o),t(l)||(n.checked=l)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(l)||(n.checked=l)}function De(e,n){if("option"===e.type)Fe(e,n);else{var t=e.children,r=e.flags;if(4&r)De(t.$LI,n);else if(8&r)De(t,n);else if(2===e.childFlags)De(t,n);else if(12&e.childFlags)for(var o=0,l=t.length;o<l;++o)De(t[o],n)}}function Fe(n,r){var o=n.props||f,l=n.dom;l.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?l.selected=!0:t(r)&&t(o.selected)||(l.selected=o.selected||!1)}Ce.wrapped=!0;var xe=me("onChange",We);function Pe(e){ge(e,"change",xe)}function We(e,n,r,o){var l=Boolean(e.multiple);t(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==o.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),De(o,a)}}var Ae,Le,Me=me("onInput",Ie),Se=me("onChange");function Ve(e,n){ge(e,"input",Me),n.onChange&&ge(e,"change",Se)}function Ie(e,n,r){var o=e.value,l=n.value;if(t(o)){if(r){var i=e.defaultValue;t(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==o&&(n.defaultValue=o,n.value=o)}function Ne(e,n,t,r,o,l){64&e?$e(r,t):256&e?We(r,t,o,n):128&e&&Ie(r,t,o),l&&(t.$V=n)}function Ue(e,n,t){64&e?we(n,t):256&e?Pe(n):128&e&&Ve(n,t)}function Te(e){return e.type&&ke(e.type)?!t(e.checked):!t(e.value)}function Be(e){e&&!V(e,null)&&e.current&&(e.current=null)}function Ee(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){V(e,n)||void 0===e.current||(e.current=n)}))}function He(e,n,t){Oe(e,t),F(e,n,t)}function Oe(e,n){var r,l=e.flags,a=e.children;if(481&l){r=e.ref;var u=e.props;Be(r);var c=e.childFlags;if(!i(u))for(var d=Object.keys(u),p=0,v=d.length;p<v;p++){var h=d[p];ne[h]&&re(h,e.dom)}12&c?Re(a,n):2===c&&Oe(a,n)}else if(a)if(4&l){o(a.componentWillUnmount)&&a.componentWillUnmount();var m=n;o(a.componentWillDisappear)&&(m=new s,Ke(n,a,a.$LI.dom,l,void 0)),Be(e.ref),a.$UN=!0,Oe(a.$LI,m)}else if(8&l){var g=n;if(!t(r=e.ref)){var k=null;o(r.onComponentWillUnmount)&&(k=y(e,!0),r.onComponentWillUnmount(k,e.props||f)),o(r.onComponentWillDisappear)&&(g=new s,Ke(n,r,k=k||y(e,!0),l,e.props))}Oe(a,g)}else 1024&l?He(a,e.ref,n):8192&l&&12&e.childFlags&&Re(a,n)}function Re(e,n){for(var t=0,r=e.length;t<r;++t)Oe(e[t],n)}function je(e,n){return function(){if(n)for(var t=0;t<e.length;t++)$(e[t],n,!1)}}function Xe(e,n,t){t.componentWillDisappear.length>0?C(t.componentWillDisappear,je(n,e)):e.textContent=""}function _e(e,n,t,r){Re(t,r),8192&n.flags?F(n,e,r):Xe(e,t,r)}function Ke(e,n,t,r,o){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,o,e)}))}function qe(e){var n=e.event;return function(t){n(e.data,t)}}function Ge(e,n,t,r){if(c(t)){if(M(n,t))return;t=qe(t)}ge(r,d(e),t)}function Je(e,n,r){if(t(n))return void r.removeAttribute("style");var o,i,a=r.style;if(l(n))return void(a.cssText=n);if(t(e)||l(e))for(o in n)i=n[o],a.setProperty(o,i);else{for(o in n)(i=n[o])!==e[o]&&a.setProperty(o,i);for(o in e)t(n[o])&&a.removeProperty(o)}}function ze(e,n,r,o,l){var a=e&&e.__html||"",u=n&&n.__html||"";a!==u&&(t(u)||ve(o,u)||(i(r)||(12&r.childFlags?Re(r.children,l):2===r.childFlags&&Oe(r.children,l),r.children=null,r.childFlags=1),o.innerHTML=u))}function Qe(e,n,r,o,l,i,a,u){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":o.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":o[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(i&&"value"===e)break;var c=t(r)?"":r;o[e]!==c&&(o[e]=c);break;case"style":Je(n,r,o);break;case"dangerouslySetInnerHTML":ze(n,r,a,o,u);break;default:ne[e]?oe(e,n,r,o):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?Ge(e,n,r,o):t(r)?o.removeAttribute(e):l&&Q[e]?o.setAttributeNS(Q[e],e,r):o.setAttribute(e,r)}}function Ye(e,n,t,r,o,l){var i=!1,a=(448&n)>0;for(var u in a&&(i=Te(t))&&Ue(n,r,t),t)Qe(u,null,t[u],r,o,i,null,l);a&&Ne(n,e,r,t,!0,i)}function Ze(e,n,t){var r=G(e.render(n,e.state,t)),l=t;return o(e.getChildContext)&&(l=a(t,e.getChildContext())),e.$CX=l,r}function en(e,n,t,r,l,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=l,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=W(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Ze(u,t,r),u}function nn(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function tn(e,n,t,r,o,l,i){var a=e.flags|=16384;481&a?an(e,n,t,r,o,l,i):4&a?cn(e,n,t,r,o,l,i):8&a?fn(e,n,t,r,o,l,i):16&a?ln(e,n,o):8192&a?on(e,t,n,r,o,l,i):1024&a&&rn(e,t,n,o,l,i)}function rn(e,n,t,r,o,l){tn(e.children,e.ref,n,!1,null,o,l);var i=_();ln(i,t,r),e.dom=i.dom}function on(e,n,t,r,o,l,i){var a=e.children,u=e.childFlags;12&u&&0===a.length&&(u=e.childFlags=2,a=e.children=_()),2===u?tn(a,t,n,r,o,l,i):un(a,t,n,r,o,l,i)}function ln(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||v(n,r,t)}function an(e,n,r,o,l,a,u){var c=e.flags,f=e.props,s=e.className,d=e.childFlags,p=e.dom=h(e.type,o=o||(32&c)>0),m=e.children;if(t(s)||""===s||(o?p.setAttribute("class",s):p.className=s),16===d)L(p,m);else if(1!==d){var g=o&&"foreignObject"!==e.type;2===d?(16384&m.flags&&(e.children=m=X(m)),tn(m,p,r,g,null,a,u)):8!==d&&4!==d||un(m,p,r,g,null,a,u)}i(n)||v(n,p,l),i(f)||Ye(e,c,f,p,o,u),Ee(e.ref,p,a)}function un(e,n,t,r,o,l,i){for(var a=0;a<e.length;++a){var u=e[a];16384&u.flags&&(e[a]=u=X(u)),tn(u,n,t,r,o,l,i)}}function cn(e,n,t,r,l,i,a){var u=en(e,e.type,e.props||f,t,r,i),c=a;o(u.componentDidAppear)&&(c=new s),tn(u.$LI,n,u.$CX,r,l,i,c),pn(e.ref,u,i,a)}function fn(e,n,r,l,i,a,u){var c=e.ref,f=u;!t(c)&&o(c.onComponentDidAppear)&&(f=new s),tn(e.children=G(nn(e,r)),n,r,l,i,a,f),hn(e,a,u)}function sn(e){return function(){e.componentDidMount()}}function dn(e,n,t,r,o){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,o)}))}function pn(e,n,t,r){Ee(e,n,t),o(n.componentDidMount)&&t.push(sn(n)),o(n.componentDidAppear)&&dn(r,n,n.$LI.dom,4,void 0)}function vn(e,n){return function(){e.onComponentDidMount(y(n,!0),n.props||f)}}function hn(e,n,r){var l=e.ref;t(l)||(V(l.onComponentWillMount,e.props||f),o(l.onComponentDidMount)&&n.push(vn(l,e)),o(l.onComponentDidAppear)&&dn(r,l,y(e,!0),8,e.props))}function mn(e,n,t,r,o,l,i){Oe(e,i),0!==(n.flags&e.flags&1521)?(tn(n,null,r,o,null,l,i),m(t,n.dom,e.dom)):(tn(n,t,r,o,y(e,!0),l,i),F(e,t,i))}function gn(e,n,t,r,o,l,i,a){var u=n.flags|=16384;e.flags!==u||e.type!==n.type||e.key!==n.key||2048&u?16384&e.flags?mn(e,n,t,r,o,i,a):tn(n,t,r,o,l,i,a):481&u?wn(e,n,r,o,u,i,a):4&u?Pn(e,n,t,r,o,l,i,a):8&u?Wn(e,n,t,r,o,l,i,a):16&u?An(e,n):8192&u?yn(e,n,t,r,o,i,a):Cn(e,n,r,i,a)}function kn(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:L(t,n))}function bn(e,n){e.textContent!==n&&(e.textContent=n)}function yn(e,n,t,r,o,l,i){var a=e.children,u=n.children,c=e.childFlags,f=n.childFlags,s=null;12&f&&0===u.length&&(f=n.childFlags=2,u=n.children=_());var d=0!==(2&f);if(12&c){var p=a.length;(8&c&&8&f||d||!d&&u.length>p)&&(s=y(a[p-1],!1).nextSibling)}Dn(c,f,a,u,t,r,o,s,e,l,i)}function Cn(e,n,t,o,l){var i=e.ref,a=n.ref,u=n.children;if(Dn(e.childFlags,n.childFlags,e.children,u,i,t,!1,null,e,o,l),n.dom=e.dom,i!==a&&!r(u)){var c=u.dom;g(i,c),p(a,c)}}function wn(e,n,r,o,l,i,a){var u,c=n.dom=e.dom,s=e.props,d=n.props,p=!1,v=!1;if(o=o||(32&l)>0,s!==d){var h=s||f;if((u=d||f)!==f)for(var m in(p=(448&l)>0)&&(v=Te(u)),u){var g=h[m],k=u[m];g!==k&&Qe(m,g,k,c,o,v,e,a)}if(h!==f)for(var b in h)t(u[b])&&!t(h[b])&&Qe(b,h[b],null,c,o,v,e,a)}var y=n.children,C=n.className;e.className!==C&&(t(C)?c.removeAttribute("class"):o?c.setAttribute("class",C):c.className=C),4096&l?bn(c,y):Dn(e.childFlags,n.childFlags,e.children,y,c,r,o&&"foreignObject"!==n.type,null,e,i,a),p&&Ne(l,n,c,u,!1,v);var w=n.ref,$=e.ref;$!==w&&(Be($),Ee(w,c,i))}function $n(e,n,t,r,o,l,i){Oe(e,i),un(n,t,r,o,y(e,!0),l,i),F(e,t,i)}function Dn(e,n,t,r,o,l,i,a,u,c,f){switch(e){case 2:switch(n){case 2:gn(t,r,o,l,i,a,c,f);break;case 1:He(t,o,f);break;case 16:Oe(t,f),L(o,r);break;default:$n(t,r,o,l,i,c,f)}break;case 1:switch(n){case 2:tn(r,o,l,i,a,c,f);break;case 1:break;case 16:L(o,r);break;default:un(r,o,l,i,a,c,f)}break;case 16:switch(n){case 16:kn(t,r,o);break;case 2:Xe(o,t,f),tn(r,o,l,i,a,c,f);break;case 1:Xe(o,t,f);break;default:Xe(o,t,f),un(r,o,l,i,a,c,f)}break;default:switch(n){case 16:Re(t,f),L(o,r);break;case 2:_e(o,u,t,f),tn(r,o,l,i,a,c,f);break;case 1:_e(o,u,t,f);break;default:var s=0|t.length,d=0|r.length;0===s?d>0&&un(r,o,l,i,a,c,f):0===d?_e(o,u,t,f):8===n&&8===e?Mn(t,r,o,l,i,s,d,a,u,c,f):Ln(t,r,o,l,i,s,d,a,c,f)}}}function Fn(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}function xn(e,n,t,r,l,i,u,c,f,s){var d=e.state,p=e.props,v=Boolean(e.$N),h=o(e.shouldComponentUpdate);if(v&&(n=W(e,t,n!==d?a(d,n):n)),u||!h||h&&e.shouldComponentUpdate(t,n,l)){!v&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,g=Ze(e,t,l);v&&o(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),gn(e.$LI,g,r,e.$CX,i,c,f,s),e.$LI=g,o(e.componentDidUpdate)&&Fn(e,p,d,m,f)}else e.props=t,e.state=n,e.context=l}function Pn(e,n,t,r,l,u,c,s){var d=n.children=e.children;if(i(d))return;d.$L=c;var p=n.props||f,v=n.ref,h=e.ref,m=d.state;if(!d.$N){if(o(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,r),d.$UN)return;d.$BR=!1}i(d.$PS)||(m=a(m,d.$PS),d.$PS=null)}xn(d,m,p,t,r,l,!1,u,c,s),h!==v&&(Be(h),Ee(v,d,c))}function Wn(e,n,r,l,i,a,u,c){var s=!0,d=n.props||f,p=n.ref,v=e.props,h=!t(p),m=e.children;if(h&&o(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),!1!==s){h&&o(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=G(nn(n,l));gn(m,g,r,l,i,a,u,c),n.children=g,h&&o(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else n.children=m}function An(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}function Ln(e,n,t,r,o,l,i,a,u,c){for(var f,s,d=l>i?i:l,p=0;p<d;++p)f=n[p],s=e[p],16384&f.flags&&(f=n[p]=X(f)),gn(s,f,t,r,o,a,u,c),e[p]=f;if(l<i)for(p=d;p<i;++p)16384&(f=n[p]).flags&&(f=n[p]=X(f)),tn(f,t,r,o,a,u,c);else if(l>i)for(p=d;p<l;++p)He(e[p],t,c)}function Mn(e,n,t,r,o,l,i,a,u,c,f){var s,d,p=l-1,v=i-1,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=X(g)),gn(m,g,t,r,o,a,c,f),e[h]=g,++h>p||h>v)break e;m=e[h],g=n[h]}for(m=e[p],g=n[v];m.key===g.key;){if(16384&g.flags&&(n[v]=g=X(g)),gn(m,g,t,r,o,a,c,f),e[p]=g,v--,h>--p||h>v)break e;m=e[p],g=n[v]}}if(h>p){if(h<=v)for(d=(s=v+1)<i?y(n[s],!0):a;h<=v;)16384&(g=n[h]).flags&&(n[h]=g=X(g)),++h,tn(g,t,r,o,d,c,f)}else if(h>v)for(;h<=p;)He(e[h++],t,f);else Sn(e,n,r,l,i,p,v,h,t,o,a,u,c,f)}function Sn(e,n,t,r,o,l,i,a,u,c,f,s,d,p){var v,h,m=0,g=0,k=a,b=a,C=l-a+1,$=i-a+1,D=new Int32Array($+1),F=C===r,x=!1,W=0,A=0;if(o<4||(C|$)<32)for(g=k;g<=l;++g)if(v=e[g],A<$){for(a=b;a<=i;a++)if(h=n[a],v.key===h.key){if(D[a-b]=g+1,F)for(F=!1;k<g;)He(e[k++],u,p);W>a?x=!0:W=a,16384&h.flags&&(n[a]=h=X(h)),gn(v,h,u,t,c,f,d,p),++A;break}!F&&a>i&&He(v,u,p)}else F||He(v,u,p);else{var L={};for(g=b;g<=i;++g)L[n[g].key]=g;for(g=k;g<=l;++g)if(v=e[g],A<$)if(void 0!==(a=L[v.key])){if(F)for(F=!1;g>k;)He(e[k++],u,p);D[a-b]=g+1,W>a?x=!0:W=a,16384&(h=n[a]).flags&&(n[a]=h=X(h)),gn(v,h,u,t,c,f,d,p),++A}else F||He(v,u,p);else F||He(v,u,p)}if(F)_e(u,s,e,p),un(n,u,t,c,f,d,p);else if(x){var M=In(D);for(a=M.length-1,g=$-1;g>=0;g--)0===D[g]?(16384&(h=n[W=g+b]).flags&&(n[W]=h=X(h)),tn(h,u,t,c,(m=W+1)<o?y(n[m],!0):f,d,p)):a<0||g!==M[a]?P(s,h=n[W=g+b],u,(m=W+1)<o?y(n[m],!0):f,p):a--;p.componentWillMove.length>0&&w(p.componentWillMove)}else if(A!==$)for(g=$-1;g>=0;g--)0===D[g]&&(16384&(h=n[W=g+b]).flags&&(n[W]=h=X(h)),tn(h,u,t,c,(m=W+1)<o?y(n[m],!0):f,d,p))}var Vn=0;function In(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>Vn&&(Vn=u,Ae=new Int32Array(u),Le=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=Ae[o]]<n){Le[t]=r,Ae[++o]=t;continue}for(l=0,i=o;l<i;)e[Ae[a=l+i>>1]]<n?l=a+1:i=a;n<e[Ae[l]]&&(l>0&&(Le[t]=Ae[l-1]),Ae[l]=t)}l=o+1;var c=new Int32Array(l);for(i=Ae[l-1];l-- >0;)c[l]=i,i=Le[i],Ae[l]=0;return c}function Nn(e,n,r,l){var i=[],a=new s,u=n.$V;t(u)?t(e)||(16384&e.flags&&(e=X(e)),tn(e,n,l,!1,null,i,a),n.$V=e,u=e):t(e)?(He(u,n,a),n.$V=null):(16384&e.flags&&(e=X(e)),gn(u,e,n,l,!1,null,i,a),u=n.$V=e),k(i),C(a.componentDidAppear),o(r)&&r(),o(A.renderComplete)&&A.renderComplete(u,n)}function Un(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=f),Nn(e,n,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno","8.1.0");var Tn={onComponentShouldUpdate:function(e,n){return e!==n}};function Bn(e){return U(1,"li","TreeLeaf",e.children,16,null,null,null)}function En(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=H(2,En,{data:l},i,null):r[o]=H(2,Bn,{children:i},i,null)}return U(1,"ul","TreeNode",r,8,null,null,null)}function Hn(e){return U(1,"div","Tree",H(2,En,{data:e.root},null,null),2,null,null,null)}function On(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return U(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Rn(e){for(var n=e.items,t=n.length,r=[],o=0;o<t;o++){var l=n[o];r.push(H(2,On,{data:l},l.id,null))}return U(1,"div","Anim",r,8,null,null,null)}function jn(e,n){console.log("Clicked",e),n.stopPropagation()}function Xn(e){var n=e.children;return U(1,"td","TableCell",n,16,{onClick:u(n,jn)},null,null)}function _n(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");for(var r=n.props,o=r.length+1,l=[H(2,Xn,{children:"#"+n.id},null,null)],i=1;i<o;i++)l.push(H(2,Xn,{children:r[i-1]},null,null));return U(1,"tr",t,l,4,{"data-id":n.id},null,null)}function Kn(e){for(var n=e.items,t=n.length,r=[],o=0;o<t;o++){var l=n[o];r.push(H(2,_n,{data:l},l.id,null))}return U(1,"table","Table",r,8,null,null,null)}Bn.defaultHooks=Tn,En.defaultHooks=Tn,On.defaultHooks=Tn,Xn.defaultHooks=Tn,_n.defaultHooks=Tn,document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,o;Un(("table"===(o=(t=e).location)?r=Kn(t.table):"anim"===o?r=Rn(t.anim):"tree"===o&&(r=Hn(t.tree)),U(1,"div","Main",r,2,null,null,null)),n)}),(function(e){Un(U(1,"pre",null,JSON.stringify(e,null," "),16,null,null,null),n)}))}))}();
