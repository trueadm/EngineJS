!function(){"use strict";function n(n,t){n.prototype=Object.create(t.prototype),n.prototype.constructor=n,e(n,t)}function e(n,t){return(e=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n})(n,t)}var t=Array.isArray;function r(n){var e=typeof n;return"string"===e||"number"===e}function o(n){return void 0===n||null===n}function i(n){return null===n||!1===n||!0===n||void 0===n}function l(n){return"function"===typeof n}function a(n){return"string"===typeof n}function u(n){return null===n}function c(n,e){var t={};if(n)for(var r in n)t[r]=n[r];if(e)for(var o in e)t[o]=e[o];return t}function s(n){return!u(n)&&"object"===typeof n}var f={},p=function(){this.componentDidAppear=[],this.componentWillDisappear=[]};function d(n){return n.substr(2).toLowerCase()}function h(n,e){n.appendChild(e)}function v(n,e,t){u(t)?h(n,e):n.insertBefore(e,t)}function m(n,e){n.removeChild(e)}function g(n){for(var e=0;e<n.length;e++)n[e]()}function y(n,e,t){var r=n.children;if(4&t)return r.$LI;if(8192&t)return 2===n.childFlags?r:r[e?0:r.length-1];return r}function b(n,e){for(var t;n;){if(2033&(t=n.flags))return n.dom;n=y(n,e,t)}return null}function $(n,e){for(var t,r=n.length;void 0!==(t=n.pop());)t((function(){--r<=0&&l(e)&&e()}))}function k(n,e,t){do{var r=n.flags;if(2033&r)return void(t&&n.dom.parentNode!==e||m(e,n.dom));var o=n.children;if(4&r&&(n=o.$LI),8&r&&(n=o),8192&r){if(2!==n.childFlags){for(var i=0,l=o.length;i<l;++i)k(o[i],e,!1);return}n=o}}while(n)}function C(n,e,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,function(n,e){return function(){k(n,e,!0)}}(n,e)):k(n,e,!1)}function w(n,e,t){do{var r=n.flags;if(2033&r)return void v(e,n.dom,t);var o=n.children;if(4&r&&(n=o.$LI),8&r&&(n=o),8192&r){if(2!==n.childFlags){for(var i=0,l=o.length;i<l;++i)w(o[i],e,t);return}n=o}}while(n)}function U(n,e,t){if(n.constructor.getDerivedStateFromProps)return c(t,n.constructor.getDerivedStateFromProps(e,t));return t}var x={v:!1},P={componentComparator:null,createVNode:null,renderComplete:null};function F(n,e){n.textContent=e}function S(n,e){return s(n)&&n.event===e.event&&n.data===e.data}function D(n,e){for(var t in e)void 0===n[t]&&(n[t]=e[t]);return n}function N(n,e){return!!l(n)&&(n(e),!0)}var L="$";function V(n,e,t,r,o,i,l,a){this.childFlags=n,this.children=e,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===i?null:i,this.ref=void 0===l?null:l,this.type=a}function A(n,e,o,l,c,s,f,p){var d=void 0===c?1:c,h=new V(d,l,o,n,f,s,p,e);return P.createVNode&&P.createVNode(h),0===d&&function(n,e){var o,l=1;if(i(e))o=e;else if(r(e))l=16,o=e;else if(t(e)){for(var c=e.length,s=0;s<c;++s){var f=e[s];if(i(f)||t(f)){o=o||e.slice(0,s),E(e,o,s,"");break}if(r(f))(o=o||e.slice(0,s)).push(W(f,L+s));else{var p=f.key,d=(81920&f.flags)>0,h=u(p),v=a(p)&&p[0]===L;d||h||v?(o=o||e.slice(0,s),(d||v)&&(f=M(f)),(h||v)&&(f.key=L+s),o.push(f)):o&&o.push(f),f.flags|=65536}}l=0===(o=o||e).length?1:8}else(o=e).flags|=65536,81920&e.flags&&(o=M(e)),l=2;n.children=o,n.childFlags=l}(h,h.children),h}function I(n,e,t,r,i){var l=new V(1,null,null,n=function(n,e){if(12&n)return n;if(e.prototype&&e.prototype.render)return 4;if(e.render)return 32776;return 8}(n,e),r,function(n,e,t){var r=(32768&n?e.render:e).defaultProps;if(o(r))return t;if(o(t))return c(r,null);return D(t,r)}(n,e,t),function(n,e,t){if(4&n)return t;var r=(32768&n?e.render:e).defaultHooks;if(o(r))return t;if(o(t))return r;return D(t,r)}(n,e,i),e);return P.createVNode&&P.createVNode(l),l}function W(n,e){return new V(1,o(n)||!0===n||!1===n?"":n,null,16,e,null,null,null)}function B(n,e,t){var r=A(8192,8192,null,n,e,null,t,null);switch(r.childFlags){case 1:r.children=T(),r.childFlags=2;break;case 16:r.children=[W(n)],r.childFlags=4}return r}function M(n){var e=-16385&n.flags,t=n.props;if(14&e&&!u(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&e))return new V(n.childFlags,n.children,n.className,e,n.key,t,n.ref,n.type);return function(n){var e=n.children,t=n.childFlags;return B(2===t?M(e):e.map(M),t,n.key)}(n)}function T(){return W("",null)}function E(n,e,o,l){for(var c=n.length;o<c;o++){var s=n[o];if(!i(s)){var f=l+L+o;if(t(s))E(s,e,0,f);else{if(r(s))s=W(s,f);else{var p=s.key,d=a(p)&&p[0]===L;(81920&s.flags||d)&&(s=M(s)),s.flags|=65536,d?p.substring(0,l.length)!==l&&(s.key=l+p):u(p)?s.key=f:s.key=l+p}e.push(s)}}}}function O(n){if(i(n)||r(n))return W(n,null);if(t(n))return B(n,0,null);return 16384&n.flags?M(n):n}var R="http://www.w3.org/1999/xlink",j="http://www.w3.org/XML/1998/namespace",_={"xlink:actuate":R,"xlink:arcrole":R,"xlink:href":R,"xlink:role":R,"xlink:show":R,"xlink:title":R,"xlink:type":R,"xml:base":j,"xml:lang":j,"xml:space":j};function H(n){return{onClick:n,onDblClick:n,onFocusIn:n,onFocusOut:n,onKeyDown:n,onKeyPress:n,onKeyUp:n,onMouseDown:n,onMouseMove:n,onMouseUp:n,onTouchEnd:n,onTouchMove:n,onTouchStart:n}}var Q=H(0),X=H(null),G=H(!0);function K(n,e){var t=e.$EV;return t||(t=e.$EV=H(null)),t[n]||1===++Q[n]&&(X[n]=function(n){var e="onClick"===n||"onDblClick"===n?function(n){return function(e){if(0!==e.button)return void e.stopPropagation();J(e,!0,n,nn(e))}}(n):function(n){return function(e){J(e,!1,n,nn(e))}}(n);return document.addEventListener(d(n),e),e}(n)),t}function q(n,e){var t=e.$EV;t&&t[n]&&(0===--Q[n]&&(document.removeEventListener(d(n),X[n]),X[n]=null),t[n]=null)}function J(n,e,t,r){var o=function(n){return l(n.composedPath)?n.composedPath()[0]:n.target}(n);do{if(e&&o.disabled)return;var i=o.$EV;if(i){var a=i[t];if(a&&(r.dom=o,a.event?a.event(a.data,n):a(n),n.cancelBubble))return}o=o.parentNode}while(!u(o))}function z(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function Y(){return this.defaultPrevented}function Z(){return this.cancelBubble}function nn(n){var e={dom:document};return n.isDefaultPrevented=Y,n.isPropagationStopped=Z,n.stopPropagation=z,Object.defineProperty(n,"currentTarget",{configurable:!0,get:function(){return e.dom}}),e}function en(n,e,t){if(n[e]){var r=n[e];r.event?r.event(r.data,t):r(t)}else{var o=e.toLowerCase();n[o]&&n[o](t)}}function tn(n,e){var t=function(t){var r=this.$V;if(!r)return;var o=r.props||f,i=r.dom;if(a(n))en(o,n,t);else for(var u=0;u<n.length;++u)en(o,n[u],t);if(l(e)){var c=this.$V,s=c.props||f;e(s,i,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function rn(n,e,t){var r="$"+e,o=n[r];if(o){if(o[1].wrapped)return;n.removeEventListener(o[0],o[1]),n[r]=null}l(t)&&(n.addEventListener(e,t),n[r]=[e,t])}function on(n){return"checkbox"===n||"radio"===n}var ln=tn("onInput",cn),an=tn(["onClick","onChange"],cn);function un(n){n.stopPropagation()}function cn(n,e){var t=n.type,r=n.value,i=n.checked,l=n.multiple,a=n.defaultValue,u=!o(r);t&&t!==e.type&&e.setAttribute("type",t),o(l)||l===e.multiple||(e.multiple=l),o(a)||u||(e.defaultValue=a+""),on(t)?(u&&(e.value=r),o(i)||(e.checked=i)):u&&e.value!==r?(e.defaultValue=r,e.value=r):o(i)||(e.checked=i)}function sn(n,e){if("option"===n.type)!function(n,e){var r=n.props||f,i=n.dom;i.value=r.value,r.value===e||t(e)&&-1!==e.indexOf(r.value)?i.selected=!0:o(e)&&o(r.selected)||(i.selected=r.selected||!1)}(n,e);else{var r=n.children,i=n.flags;if(4&i)sn(r.$LI,e);else if(8&i)sn(r,e);else if(2===n.childFlags)sn(r,e);else if(12&n.childFlags)for(var l=0,a=r.length;l<a;++l)sn(r[l],e)}}un.wrapped=!0;var fn=tn("onChange",pn);function pn(n,e,t,r){var i=Boolean(n.multiple);o(n.multiple)||i===e.multiple||(e.multiple=i);var l=n.selectedIndex;if(-1===l&&(e.selectedIndex=-1),1!==r.childFlags){var a=n.value;"number"===typeof l&&l>-1&&e.options[l]&&(a=e.options[l].value),t&&o(a)&&(a=n.defaultValue),sn(r,a)}}var dn,hn,vn=tn("onInput",gn),mn=tn("onChange");function gn(n,e,t){var r=n.value,i=e.value;if(o(r)){if(t){var l=n.defaultValue;o(l)||l===i||(e.defaultValue=l,e.value=l)}}else i!==r&&(e.defaultValue=r,e.value=r)}function yn(n,e,t,r,o,i){64&n?cn(r,t):256&n?pn(r,t,o,e):128&n&&gn(r,t,o),i&&(t.$V=e)}function bn(n){return n.type&&on(n.type)?!o(n.checked):!o(n.value)}function $n(n){n&&!N(n,null)&&n.current&&(n.current=null)}function kn(n,e,t){n&&(l(n)||void 0!==n.current)&&t.push((function(){N(n,e)||void 0===n.current||(n.current=e)}))}function Cn(n,e,t){wn(n,t),C(n,e,t)}function wn(n,e){var t,r=n.flags,i=n.children;if(481&r){t=n.ref;var a=n.props;$n(t);var c=n.childFlags;if(!u(a))for(var s=Object.keys(a),d=0,h=s.length;d<h;d++){var v=s[d];G[v]&&q(v,n.dom)}12&c?Un(i,e):2===c&&wn(i,e)}else if(i)if(4&r){l(i.componentWillUnmount)&&i.componentWillUnmount();var m=e;l(i.componentWillDisappear)&&(m=new p,Fn(e,i,i.$LI.dom,r,void 0)),$n(n.ref),i.$UN=!0,wn(i.$LI,m)}else if(8&r){var g=e;if(!o(t=n.ref)){var y=b(n,!0);l(t.onComponentWillUnmount)&&t.onComponentWillUnmount(y,n.props||f),l(t.onComponentWillDisappear)&&(g=new p,Fn(e,t,y,r,n.props))}wn(i,g)}else 1024&r?Cn(i,n.ref,e):8192&r&&12&n.childFlags&&Un(i,e)}function Un(n,e){for(var t=0,r=n.length;t<r;++t)wn(n[t],e)}function xn(n,e,t){t.componentWillDisappear.length>0?$(t.componentWillDisappear,function(n,e){return function(){if(e)for(var t=0;t<n.length;t++)k(n[t],e,!1)}}(e,n)):n.textContent=""}function Pn(n,e,t,r){Un(t,r),8192&e.flags?C(e,n,r):xn(n,t,r)}function Fn(n,e,t,r,o){n.componentWillDisappear.push((function(n){4&r?e.componentWillDisappear(t,n):8&r&&e.onComponentWillDisappear(t,o,n)}))}function Sn(n,e,t,r,i,c,f,p){switch(n){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":r.autofocus=!!t;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":r[n]=!!t;break;case"defaultChecked":case"value":case"volume":if(c&&"value"===n)break;var h=o(t)?"":t;r[n]!==h&&(r[n]=h);break;case"style":!function(n,e,t){if(o(e))return void t.removeAttribute("style");var r,i,l=t.style;if(a(e))return void(l.cssText=e);if(o(n)||a(n))for(r in e)i=e[r],l.setProperty(r,i);else{for(r in e)(i=e[r])!==n[r]&&l.setProperty(r,i);for(r in n)o(e[r])&&l.removeProperty(r)}}(e,t,r);break;case"dangerouslySetInnerHTML":!function(n,e,t,r,i){var l=n&&n.__html||"",a=e&&e.__html||"";l!==a&&(o(a)||function(n,e){var t=document.createElement("i");return t.innerHTML=e,t.innerHTML===n.innerHTML}(r,a)||(u(t)||(12&t.childFlags?Un(t.children,i):2===t.childFlags&&wn(t.children,i),t.children=null,t.childFlags=1),r.innerHTML=a))}(e,t,f,r,p);break;default:G[n]?function(n,e,t,r){if(l(t))K(n,r)[n]=t;else if(s(t)){if(S(e,t))return;K(n,r)[n]=t}else q(n,r)}(n,e,t,r):111===n.charCodeAt(0)&&110===n.charCodeAt(1)?function(n,e,t,r){if(s(t)){if(S(e,t))return;t=function(n){var e=n.event;return function(t){e(n.data,t)}}(t)}rn(r,d(n),t)}(n,e,t,r):o(t)?r.removeAttribute(n):i&&_[n]?r.setAttributeNS(_[n],n,t):r.setAttribute(n,t)}}function Dn(n,e,t){var r=O(n.render(e,n.state,t)),o=t;return l(n.getChildContext)&&(o=c(t,n.getChildContext())),n.$CX=o,r}function Nn(n,e){var t=n.props||f;return 32768&n.flags?n.type.render(t,n.ref,e):n.type(t,e)}function Ln(n,e,t,r,i,a,c){var s=n.flags|=16384;481&s?function(n,e,t,r,i,l,a){var c=n.flags,s=n.props,f=n.className,p=n.childFlags,d=n.dom=function(n,e){if(e)return document.createElementNS("http://www.w3.org/2000/svg",n);return document.createElement(n)}(n.type,r=r||(32&c)>0),h=n.children;if(o(f)||""===f||(r?d.setAttribute("class",f):d.className=f),16===p)F(d,h);else if(1!==p){var m=r&&"foreignObject"!==n.type;2===p?(16384&h.flags&&(n.children=h=M(h)),Ln(h,d,t,m,null,l,a)):8!==p&&4!==p||An(h,d,t,m,null,l,a)}u(e)||v(e,d,i),u(s)||function(n,e,t,r,o,i){var l=!1,a=(448&e)>0;for(var u in a&&(l=bn(t))&&function(n,e,t){64&n?function(n,e){on(e.type)?(rn(n,"change",an),rn(n,"click",un)):rn(n,"input",ln)}(e,t):256&n?function(n){rn(n,"change",fn)}(e):128&n&&function(n,e){rn(n,"input",vn),e.onChange&&rn(n,"change",mn)}(e,t)}(e,r,t),t)Sn(u,null,t[u],r,o,l,null,i);a&&yn(e,n,r,t,!0,l)}(n,c,s,d,r,a),kn(n.ref,d,l)}(n,e,t,r,i,a,c):4&s?function(n,e,t,r,o,i,a){var c=function(n,e,t,r,o,i){var a=new e(t,r),c=a.$N=Boolean(e.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=o,a.$L=i,n.children=a,a.$BS=!1,a.context=r,a.props===f&&(a.props=t),c)a.state=U(a,t,a.state);else if(l(a.componentWillMount)){a.$BR=!0,a.componentWillMount();var s=a.$PS;if(!u(s)){var p=a.state;if(u(p))a.state=s;else for(var d in s)p[d]=s[d];a.$PS=null}a.$BR=!1}return a.$LI=Dn(a,t,r),a}(n,n.type,n.props||f,t,r,i),s=a;l(c.componentDidAppear)&&(s=new p),Ln(c.$LI,e,c.$CX,r,o,i,s),function(n,e,t,r){kn(n,e,t),l(e.componentDidMount)&&t.push(function(n){return function(){n.componentDidMount()}}(e)),l(e.componentDidAppear)&&In(r,e,e.$LI.dom,4,void 0)}(n.ref,c,i,a)}(n,e,t,r,i,a,c):8&s?function(n,e,t,r,i,a,u){var c=n.ref,s=u;!o(c)&&l(c.onComponentDidAppear)&&(s=new p),Ln(n.children=O(Nn(n,t)),e,t,r,i,a,s),function(n,e,t){var r=n.ref;o(r)||(N(r.onComponentWillMount,n.props||f),l(r.onComponentDidMount)&&e.push(function(n,e){return function(){n.onComponentDidMount(b(e,!0),e.props||f)}}(r,n)),l(r.onComponentDidAppear)&&In(t,r,b(n,!0),8,n.props))}(n,a,u)}(n,e,t,r,i,a,c):512&s||16&s?Vn(n,e,i):8192&s?function(n,e,t,r,o,i,l){var a=n.children,u=n.childFlags;12&u&&0===a.length&&(u=n.childFlags=2,a=n.children=T()),2===u?Ln(a,t,o,r,o,i,l):An(a,t,e,r,o,i,l)}(n,t,e,r,i,a,c):1024&s&&function(n,e,t,r,o,i){Ln(n.children,n.ref,e,!1,null,o,i);var l=T();Vn(l,t,r),n.dom=l.dom}(n,t,e,i,a,c)}function Vn(n,e,t){var r=n.dom=document.createTextNode(n.children);u(e)||v(e,r,t)}function An(n,e,t,r,o,i,l){for(var a=0;a<n.length;++a){var u=n[a];16384&u.flags&&(n[a]=u=M(u)),Ln(u,e,t,r,o,i,l)}}function In(n,e,t,r,o){n.componentDidAppear.push((function(){4&r?e.componentDidAppear(t):8&r&&e.onComponentDidAppear(t,o)}))}function Wn(n,e,t,r,a,s,p,d){var v=e.flags|=16384;n.flags!==v||n.type!==e.type||n.key!==e.key||2048&v?16384&n.flags?function(n,e,t,r,o,i,l){wn(n,l),0!==(e.flags&n.flags&2033)?(Ln(e,null,r,o,null,i,l),function(n,e,t){n.replaceChild(e,t)}(t,e.dom,n.dom)):(Ln(e,t,r,o,b(n,!0),i,l),C(n,t,l))}(n,e,t,r,a,p,d):Ln(e,t,r,a,s,p,d):481&v?function(n,e,t,r,i,l,a){var u,c=e.dom=n.dom,s=n.props,p=e.props,d=!1,h=!1;if(r=r||(32&i)>0,s!==p){var v=s||f;if((u=p||f)!==f)for(var m in(d=(448&i)>0)&&(h=bn(u)),u){var g=v[m],y=u[m];g!==y&&Sn(m,g,y,c,r,h,n,a)}if(v!==f)for(var b in v)o(u[b])&&!o(v[b])&&Sn(b,v[b],null,c,r,h,n,a)}var $=e.children,k=e.className;n.className!==k&&(o(k)?c.removeAttribute("class"):r?c.setAttribute("class",k):c.className=k),4096&i?function(n,e){n.textContent!==e&&(n.textContent=e)}(c,$):Bn(n.childFlags,e.childFlags,n.children,$,c,t,r&&"foreignObject"!==e.type,null,n,l,a),d&&yn(i,e,c,u,!1,h);var C=e.ref,w=n.ref;w!==C&&($n(w),kn(C,c,l))}(n,e,r,a,v,p,d):4&v?function(n,e,t,r,o,i,a,s){var p=e.children=n.children;if(u(p))return;p.$L=a;var d=e.props||f,h=e.ref,v=n.ref,m=p.state;if(!p.$N){if(l(p.componentWillReceiveProps)){if(p.$BR=!0,p.componentWillReceiveProps(d,r),p.$UN)return;p.$BR=!1}u(p.$PS)||(m=c(m,p.$PS),p.$PS=null)}Mn(p,m,d,t,r,o,!1,i,a,s),v!==h&&($n(v),kn(h,p,a))}(n,e,t,r,a,s,p,d):8&v?function(n,e,t,r,i,a,u,c){var s=!0,p=e.props||f,d=e.ref,h=n.props,v=!o(d),m=n.children;if(v&&l(d.onComponentShouldUpdate)&&(s=d.onComponentShouldUpdate(h,p)),!1!==s){v&&l(d.onComponentWillUpdate)&&d.onComponentWillUpdate(h,p);var g=O(Nn(e,r));Wn(m,g,t,r,i,a,u,c),e.children=g,v&&l(d.onComponentDidUpdate)&&d.onComponentDidUpdate(h,p)}else e.children=m}(n,e,t,r,a,s,p,d):16&v?function(n,e){var t=e.children,r=e.dom=n.dom;t!==n.children&&(r.nodeValue=t)}(n,e):512&v?e.dom=n.dom:8192&v?function(n,e,t,r,o,i,l){var a=n.children,u=e.children,c=n.childFlags,s=e.childFlags,f=null;12&s&&0===u.length&&(s=e.childFlags=2,u=e.children=T());var p=0!==(2&s);if(12&c){var d=a.length;(8&c&&8&s||p||!p&&u.length>d)&&(f=b(a[d-1],!1).nextSibling)}Bn(c,s,a,u,t,r,o,f,n,i,l)}(n,e,t,r,a,p,d):function(n,e,t,r,o){var l=n.ref,a=e.ref,u=e.children;if(Bn(n.childFlags,e.childFlags,n.children,u,l,t,!1,null,n,r,o),e.dom=n.dom,l!==a&&!i(u)){var c=u.dom;m(l,c),h(a,c)}}(n,e,r,p,d)}function Bn(n,e,t,r,o,i,l,a,u,c,s){switch(n){case 2:switch(e){case 2:Wn(t,r,o,i,l,a,c,s);break;case 1:Cn(t,o,s);break;case 16:wn(t,s),F(o,r);break;default:!function(n,e,t,r,o,i,l){wn(n,l),An(e,t,r,o,b(n,!0),i,l),C(n,t,l)}(t,r,o,i,l,c,s)}break;case 1:switch(e){case 2:Ln(r,o,i,l,a,c,s);break;case 1:break;case 16:F(o,r);break;default:An(r,o,i,l,a,c,s)}break;case 16:switch(e){case 16:!function(n,e,t){n!==e&&(""!==n?t.firstChild.nodeValue=e:F(t,e))}(t,r,o);break;case 2:xn(o,t,s),Ln(r,o,i,l,a,c,s);break;case 1:xn(o,t,s);break;default:xn(o,t,s),An(r,o,i,l,a,c,s)}break;default:switch(e){case 16:Un(t,s),F(o,r);break;case 2:Pn(o,u,t,s),Ln(r,o,i,l,a,c,s);break;case 1:Pn(o,u,t,s);break;default:var f=0|t.length,p=0|r.length;0===f?p>0&&An(r,o,i,l,a,c,s):0===p?Pn(o,u,t,s):8===e&&8===n?function(n,e,t,r,o,i,l,a,u,c,s){var f,p,d=i-1,h=l-1,v=0,m=n[v],g=e[v];n:{for(;m.key===g.key;){if(16384&g.flags&&(e[v]=g=M(g)),Wn(m,g,t,r,o,a,c,s),n[v]=g,++v>d||v>h)break n;m=n[v],g=e[v]}for(m=n[d],g=e[h];m.key===g.key;){if(16384&g.flags&&(e[h]=g=M(g)),Wn(m,g,t,r,o,a,c,s),n[d]=g,h--,v>--d||v>h)break n;m=n[d],g=e[h]}}if(v>d){if(v<=h)for(p=(f=h+1)<l?b(e[f],!0):a;v<=h;)16384&(g=e[v]).flags&&(e[v]=g=M(g)),++v,Ln(g,t,r,o,p,c,s)}else if(v>h)for(;v<=d;)Cn(n[v++],t,s);else!function(n,e,t,r,o,i,l,a,u,c,s,f,p,d){var h,v,m=0,g=0,y=a,$=a,k=i-a+1,C=l-a+1,U=new Int32Array(C+1),x=k===r,P=!1,F=0,S=0;if(o<4||(k|C)<32)for(g=y;g<=i;++g)if(h=n[g],S<C){for(a=$;a<=l;a++)if(v=e[a],h.key===v.key){if(U[a-$]=g+1,x)for(x=!1;y<g;)Cn(n[y++],u,d);F>a?P=!0:F=a,16384&v.flags&&(e[a]=v=M(v)),Wn(h,v,u,t,c,s,p,d),++S;break}!x&&a>l&&Cn(h,u,d)}else x||Cn(h,u,d);else{var D={};for(g=$;g<=l;++g)D[e[g].key]=g;for(g=y;g<=i;++g)if(h=n[g],S<C)if(void 0!==(a=D[h.key])){if(x)for(x=!1;g>y;)Cn(n[y++],u,d);U[a-$]=g+1,F>a?P=!0:F=a,16384&(v=e[a]).flags&&(e[a]=v=M(v)),Wn(h,v,u,t,c,s,p,d),++S}else x||Cn(h,u,d);else x||Cn(h,u,d)}if(x)Pn(u,f,n,d),An(e,u,t,c,s,p,d);else if(P){var N=function(n){var e=0,t=0,r=0,o=0,i=0,l=0,a=0,u=n.length;for(u>Tn&&(Tn=u,dn=new Int32Array(u),hn=new Int32Array(u));t<u;++t)if(0!==(e=n[t])){if(n[r=dn[o]]<e){hn[t]=r,dn[++o]=t;continue}for(i=0,l=o;i<l;)n[dn[a=i+l>>1]]<e?i=a+1:l=a;e<n[dn[i]]&&(i>0&&(hn[t]=dn[i-1]),dn[i]=t)}i=o+1;var c=new Int32Array(i);for(l=dn[i-1];i-- >0;)c[i]=l,l=hn[l],dn[i]=0;return c}(U);for(a=N.length-1,g=C-1;g>=0;g--)0===U[g]?(16384&(v=e[F=g+$]).flags&&(e[F]=v=M(v)),Ln(v,u,t,c,(m=F+1)<o?b(e[m],!0):s,p,d)):a<0||g!==N[a]?w(v=e[F=g+$],u,(m=F+1)<o?b(e[m],!0):s):a--}else if(S!==C)for(g=C-1;g>=0;g--)0===U[g]&&(16384&(v=e[F=g+$]).flags&&(e[F]=v=M(v)),Ln(v,u,t,c,(m=F+1)<o?b(e[m],!0):s,p,d))}(n,e,r,i,l,d,h,v,t,o,a,u,c,s)}(t,r,o,i,l,f,p,a,u,c,s):function(n,e,t,r,o,i,l,a,u,c){for(var s,f,p=i>l?l:i,d=0;d<p;++d)s=e[d],f=n[d],16384&s.flags&&(s=e[d]=M(s)),Wn(f,s,t,r,o,a,u,c),n[d]=s;if(i<l)for(d=p;d<l;++d)16384&(s=e[d]).flags&&(s=e[d]=M(s)),Ln(s,t,r,o,a,u,c);else if(i>l)for(d=p;d<i;++d)Cn(n[d],t,c)}(t,r,o,i,l,f,p,a,c,s)}}}function Mn(n,e,t,r,o,i,a,u,s,f){var p=n.state,d=n.props,h=Boolean(n.$N),v=l(n.shouldComponentUpdate);if(h&&(e=U(n,t,e!==p?c(p,e):e)),a||!v||v&&n.shouldComponentUpdate(t,e,o)){!h&&l(n.componentWillUpdate)&&n.componentWillUpdate(t,e,o),n.props=t,n.state=e,n.context=o;var m=null,g=Dn(n,t,o);h&&l(n.getSnapshotBeforeUpdate)&&(m=n.getSnapshotBeforeUpdate(d,p)),Wn(n.$LI,g,r,n.$CX,i,u,s,f),n.$LI=g,l(n.componentDidUpdate)&&function(n,e,t,r,o){o.push((function(){n.componentDidUpdate(e,t,r)}))}(n,d,p,m,s)}else n.props=t,n.state=e,n.context=o}var Tn=0;function En(n,e,t,r){void 0===t&&(t=null),void 0===r&&(r=f),function(n,e,t,r){var i=[],a=new p,u=e.$V;x.v=!0,o(u)?o(n)||(16384&n.flags&&(n=M(n)),Ln(n,e,r,!1,null,i,a),e.$V=n,u=n):o(n)?(Cn(u,e,a),e.$V=null):(16384&n.flags&&(n=M(n)),Wn(u,n,e,r,!1,null,i,a),u=e.$V=n),g(i),$(a.componentDidAppear),x.v=!1,l(t)&&t(),l(P.renderComplete)&&P.renderComplete(u,e)}(n,e,t,r)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null);var On=[],Rn="undefined"!==typeof Promise?Promise.resolve().then.bind(Promise.resolve()):function(n){window.setTimeout(n,0)},jn=!1;function _n(n,e,t,r){var i=n.$PS;if(l(e)&&(e=e(i?c(n.state,i):n.state,n.props,n.context)),o(i))n.$PS=e;else for(var a in e)i[a]=e[a];if(n.$BR)l(t)&&n.$L.push(t.bind(n));else{if(!x.v&&0===On.length)return Xn(n,r),void(l(t)&&t.call(n));if(-1===On.indexOf(n)&&On.push(n),r&&(n.$F=!0),jn||(jn=!0,Rn(Qn)),l(t)){var u=n.$QU;u||(u=n.$QU=[]),u.push(t)}}}function Hn(n){for(var e=n.$QU,t=0;t<e.length;++t)e[t].call(n);n.$QU=null}function Qn(){var n;for(jn=!1;n=On.shift();)if(!n.$UN){var e=n.$F;n.$F=!1,Xn(n,e),n.$QU&&Hn(n)}}function Xn(n,e){if(e||!n.$BR){var t=n.$PS;n.$PS=null;var r=[],o=new p;x.v=!0,Mn(n,c(n.state,t),n.props,b(n.$LI,!0).parentNode,n.context,n.$SVG,e,null,r,o),g(r),$(o.componentDidAppear),x.v=!1}else n.state=n.$PS,n.$PS=null}var Gn=function(n,e){this.state=null,this.$BR=!1,this.$BS=!0,this.$PS=null,this.$LI=null,this.$UN=!1,this.$CX=null,this.$QU=null,this.$N=!1,this.$L=null,this.$SVG=!1,this.$F=!1,this.props=n||f,this.context=e||f};Gn.prototype.forceUpdate=function(n){if(this.$UN)return;_n(this,{},n,!0)},Gn.prototype.setState=function(n,e){if(this.$UN)return;this.$BS||_n(this,n,e,!1)},Gn.prototype.render=function(n,e,t){return null},uibench.init("Inferno [same as react]","7.4.8");var Kn=function(e){function t(n){var t;return(t=e.call(this,n)||this).onClick=t.onClick.bind(function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(t)),t}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.text!==n.text},r.onClick=function(n){console.log("Clicked"+this.props.text),n.stopPropagation()},r.render=function(){return A(1,"td","TableCell",this.props.text,0,{onClick:this.onClick},null,null)},t}(Gn),qn=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=n.active?"TableRow active":"TableRow",t=n.props,r=[I(2,Kn,{text:"#"+n.id},-1,null)],o=0;o<t.length;o++)r.push(I(2,Kn,{text:t[o]},o,null));return A(1,"tr",e,r,0,{"data-id":n.id},null,null)},t}(Gn),Jn=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(I(2,qn,{data:r},r.id,null))}return A(1,"table","Table",A(1,"tbody",null,e,0,null,null,null),2,null,null,null)},t}(Gn),zn=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n=this.props.data,e=n.time,t={"border-radius":(e%10).toString()+"px",background:"rgba(0,0,0,"+(.5+e%10/10).toString()+")"};return A(1,"div","AnimBox",null,1,{"data-id":n.id,style:t},null,null)},t}(Gn),Yn=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data.items,e=[],t=0;t<n.length;t++){var r=n[t];e.push(I(2,zn,{data:r},r.id,null))}return A(1,"div","Anim",e,0,null,null,null)},t}(Gn),Zn=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return A(1,"li","TreeLeaf",this.props.data.id,0,null,null,null)},t}(Gn),ne=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){for(var n=this.props.data,e=[],r=0;r<n.children.length;r++){var o=n.children[r];o.container?e.push(I(2,t,{data:o},o.id,null)):e.push(I(2,Zn,{data:o},o.id,null))}return A(1,"ul","TreeNode",e,0,null,null,null)},t}(Gn),ee=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){return A(1,"div","Tree",I(2,ne,{data:this.props.data.root},null,null),2,null,null,null)},t}(Gn),te=function(e){function t(){return e.apply(this,arguments)||this}n(t,e);var r=t.prototype;return r.shouldComponentUpdate=function(n,e){return this.props.data!==n.data},r.render=function(){var n,e=this.props.data,t=e.location;return"table"===t?n=I(2,Jn,{data:e.table},null,null):"anim"===t?n=I(2,Yn,{data:e.anim},null,null):"tree"===t&&(n=I(2,ee,{data:e.tree},null,null)),A(1,"div","Main",n,0,null,null,null)},t}(Gn);document.addEventListener("DOMContentLoaded",(function(n){var e=document.querySelector("#App");uibench.run((function(n){En(I(2,te,{data:n},null,null),e)}),(function(n){En(A(1,"pre",null,JSON.stringify(n,null," "),0,null,null,null),e)}))}))}();
