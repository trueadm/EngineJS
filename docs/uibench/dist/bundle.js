!function(){"use strict";var e=Array.isArray;function n(e){var n=typeof e;return"string"===n||"number"===n}function t(e){return void 0===e||null===e}function r(e){return null===e||!1===e||!0===e||void 0===e}function o(e){return"function"===typeof e}function l(e){return"string"===typeof e}function i(e){return null===e}function a(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function u(e,n){if(o(n))return{data:e,event:n};return null}function c(e){return!i(e)&&"object"===typeof e}var f={},s=function(){this.componentDidAppear=[],this.componentWillDisappear=[],this.componentWillMove=[]};function d(e){return e.substr(2).toLowerCase()}function p(e,n){e.appendChild(n)}function v(e,n,t){i(t)?p(e,n):e.insertBefore(n,t)}function h(e,n){e.removeChild(n)}function m(e,n,t){var r=e.children;if(4&t)return r.$LI;if(8192&t)return 2===e.childFlags?r:r[n?0:r.length-1];return r}function g(e,n){for(var t;e;){if(2033&(t=e.flags))return e.dom;e=m(e,n,t)}return null}function k(e,n){for(var t,r=e.length;void 0!==(t=e.pop());)t((function(){--r<=0&&o(n)&&n()}))}function b(e,n,t){do{var r=e.flags;if(2033&r)return void(t&&e.dom.parentNode!==n||h(n,e.dom));var o=e.children;if(4&r&&(e=o.$LI),8&r&&(e=o),8192&r){if(2!==e.childFlags){for(var l=0,i=o.length;l<i;++l)b(o[l],n,!1);return}e=o}}while(e)}function y(e,n,t){t.componentWillDisappear.length>0?k(t.componentWillDisappear,function(e,n){return function(){b(e,n,!0)}}(e,n)):b(e,n,!1)}function C(e,n,t,r,o,l,i,a){e.componentWillMove.push((function(){4&i?t.componentWillMove(n,o,r,l,a):8&i&&t.onComponentWillMove(n,o,r,l,a)}))}function w(e,n,t,r,l){var i,a,u=n.flags;do{var c=n.flags;if(2033&c)return void(o(i.componentWillMove)||o(i.onComponentWillMove)?C(l,e,i,n.dom,t,r,u,a):v(t,n.dom,r));var f=n.children;if(4&c&&(i=n.children,a=n.props,n=f.$LI),8&c&&(i=n.ref,a=n.props,n=f),8192&c){if(2!==n.childFlags){for(var s=0,d=f.length;s<d;++s)w(e,f[s],t,r,l);return}n=f}}while(n)}function $(e,n,t){if(e.constructor.getDerivedStateFromProps)return a(t,e.constructor.getDerivedStateFromProps(n,t));return t}var D={componentComparator:null,createVNode:null,renderComplete:null};function F(e,n){e.textContent=n}function P(e,n){return c(e)&&e.event===n.event&&e.data===n.data}function W(e,n){for(var t in n)void 0===e[t]&&(e[t]=n[t]);return e}function x(e,n){return!!o(e)&&(e(n),!0)}var A="$";function V(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function L(t,o,a,u,c,f,s,d){var p=void 0===c?1:c,v=new V(p,u,a,t,s,f,d,o);return D.createVNode&&D.createVNode(v),0===p&&function(t,o){var a,u=1;if(r(o))a=o;else if(n(o))u=16,a=o;else if(e(o)){for(var c=o.length,f=0;f<c;++f){var s=o[f];if(r(s)||e(s)){a=a||o.slice(0,f),T(o,a,f,"");break}if(n(s))(a=a||o.slice(0,f)).push(N(s,A+f));else{var d=s.key,p=(81920&s.flags)>0,v=i(d),h=l(d)&&d[0]===A;p||v||h?(a=a||o.slice(0,f),(p||h)&&(s=I(s)),(v||h)&&(s.key=A+f),a.push(s)):a&&a.push(s),s.flags|=65536}}u=0===(a=a||o).length?1:8}else(a=o).flags|=65536,81920&o.flags&&(a=I(o)),u=2;t.children=a,t.childFlags=u}(v,v.children),v}function M(e,n,r,o,l){var i=new V(1,null,null,e=function(e,n){if(12&e)return e;if(n.prototype&&n.prototype.render)return 4;if(n.render)return 32776;return 8}(e,n),o,function(e,n,r){var o=(32768&e?n.render:n).defaultProps;if(t(o))return r;if(t(r))return a(o,null);return W(r,o)}(e,n,r),function(e,n,r){if(4&e)return r;var o=(32768&e?n.render:n).defaultHooks;if(t(o))return r;if(t(r))return o;return W(r,o)}(e,n,l),n);return D.createVNode&&D.createVNode(i),i}function N(e,n){return new V(1,t(e)||!0===e||!1===e?"":e,null,16,n,null,null,null)}function S(e,n,t){var r=L(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=U(),r.childFlags=2;break;case 16:r.children=[N(e)],r.childFlags=4}return r}function I(e){var n=-16385&e.flags,t=e.props;if(14&n&&!i(t)){var r=t;for(var o in t={},r)t[o]=r[o]}if(0===(8192&n))return new V(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type);return function(e){var n=e.children,t=e.childFlags;return S(2===t?I(n):n.map(I),t,e.key)}(e)}function U(){return N("",null)}function T(t,o,a,u){for(var c=t.length;a<c;a++){var f=t[a];if(!r(f)){var s=u+A+a;if(e(f))T(f,o,0,s);else{if(n(f))f=N(f,s);else{var d=f.key,p=l(d)&&d[0]===A;(81920&f.flags||p)&&(f=I(f)),f.flags|=65536,p?d.substring(0,u.length)!==u&&(f.key=u+d):i(d)?f.key=s:f.key=u+d}o.push(f)}}}}function B(t){if(r(t)||n(t))return N(t,null);if(e(t))return S(t,0,null);return 16384&t.flags?I(t):t}var E="http://www.w3.org/1999/xlink",H="http://www.w3.org/XML/1998/namespace",O={"xlink:actuate":E,"xlink:arcrole":E,"xlink:href":E,"xlink:role":E,"xlink:show":E,"xlink:title":E,"xlink:type":E,"xml:base":H,"xml:lang":H,"xml:space":H};function R(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var j=R(0),X=R(null),_=R(!0);function K(e,n){var t=n.$EV;return t||(t=n.$EV=R(null)),t[e]||1===++j[e]&&(X[e]=function(e){var n="onClick"===e||"onDblClick"===e?function(e){return function(n){if(0!==n.button)return void n.stopPropagation();G(n,!0,e,Y(n))}}(e):function(e){return function(n){G(n,!1,e,Y(n))}}(e);return document.addEventListener(d(e),n),n}(e)),t}function q(e,n){var t=n.$EV;t&&t[e]&&(0===--j[e]&&(document.removeEventListener(d(e),X[e]),X[e]=null),t[e]=null)}function G(e,n,t,r){var l=function(e){return o(e.composedPath)?e.composedPath()[0]:e.target}(e);do{if(n&&l.disabled)return;var a=l.$EV;if(a){var u=a[t];if(u&&(r.dom=l,u.event?u.event(u.data,e):u(e),e.cancelBubble))return}l=l.parentNode}while(!i(l))}function J(){this.cancelBubble=!0,this.immediatePropagationStopped||this.stopImmediatePropagation()}function z(){return this.defaultPrevented}function Q(){return this.cancelBubble}function Y(e){var n={dom:document};return e.isDefaultPrevented=z,e.isPropagationStopped=Q,e.stopPropagation=J,Object.defineProperty(e,"currentTarget",{configurable:!0,get:function(){return n.dom}}),n}function Z(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function ee(e,n){var t=function(t){var r=this.$V;if(!r)return;var i=r.props||f,a=r.dom;if(l(e))Z(i,e,t);else for(var u=0;u<e.length;++u)Z(i,e[u],t);if(o(n)){var c=this.$V,s=c.props||f;n(s,a,!1,c)}};return Object.defineProperty(t,"wrapped",{configurable:!1,enumerable:!1,value:!0,writable:!1}),t}function ne(e,n,t){var r="$"+n,l=e[r];if(l){if(l[1].wrapped)return;e.removeEventListener(l[0],l[1]),e[r]=null}o(t)&&(e.addEventListener(n,t),e[r]=[n,t])}function te(e){return"checkbox"===e||"radio"===e}var re=ee("onInput",ie),oe=ee(["onClick","onChange"],ie);function le(e){e.stopPropagation()}function ie(e,n){var r=e.type,o=e.value,l=e.checked,i=e.multiple,a=e.defaultValue,u=!t(o);r&&r!==n.type&&n.setAttribute("type",r),t(i)||i===n.multiple||(n.multiple=i),t(a)||u||(n.defaultValue=a+""),te(r)?(u&&(n.value=o),t(l)||(n.checked=l)):u&&n.value!==o?(n.defaultValue=o,n.value=o):t(l)||(n.checked=l)}function ae(n,r){if("option"===n.type)!function(n,r){var o=n.props||f,l=n.dom;l.value=o.value,o.value===r||e(r)&&-1!==r.indexOf(o.value)?l.selected=!0:t(r)&&t(o.selected)||(l.selected=o.selected||!1)}(n,r);else{var o=n.children,l=n.flags;if(4&l)ae(o.$LI,r);else if(8&l)ae(o,r);else if(2===n.childFlags)ae(o,r);else if(12&n.childFlags)for(var i=0,a=o.length;i<a;++i)ae(o[i],r)}}le.wrapped=!0;var ue=ee("onChange",ce);function ce(e,n,r,o){var l=Boolean(e.multiple);t(e.multiple)||l===n.multiple||(n.multiple=l);var i=e.selectedIndex;if(-1===i&&(n.selectedIndex=-1),1!==o.childFlags){var a=e.value;"number"===typeof i&&i>-1&&n.options[i]&&(a=n.options[i].value),r&&t(a)&&(a=e.defaultValue),ae(o,a)}}var fe,se,de=ee("onInput",ve),pe=ee("onChange");function ve(e,n,r){var o=e.value,l=n.value;if(t(o)){if(r){var i=e.defaultValue;t(i)||i===l||(n.defaultValue=i,n.value=i)}}else l!==o&&(n.defaultValue=o,n.value=o)}function he(e,n,t,r,o,l){64&e?ie(r,t):256&e?ce(r,t,o,n):128&e&&ve(r,t,o),l&&(t.$V=n)}function me(e){return e.type&&te(e.type)?!t(e.checked):!t(e.value)}function ge(e){e&&!x(e,null)&&e.current&&(e.current=null)}function ke(e,n,t){e&&(o(e)||void 0!==e.current)&&t.push((function(){x(e,n)||void 0===e.current||(e.current=n)}))}function be(e,n,t){ye(e,t),y(e,n,t)}function ye(e,n){var r,l=e.flags,a=e.children;if(481&l){r=e.ref;var u=e.props;ge(r);var c=e.childFlags;if(!i(u))for(var d=Object.keys(u),p=0,v=d.length;p<v;p++){var h=d[p];_[h]&&q(h,e.dom)}12&c?Ce(a,n):2===c&&ye(a,n)}else if(a)if(4&l){o(a.componentWillUnmount)&&a.componentWillUnmount();var m=n;o(a.componentWillDisappear)&&(m=new s,De(n,a,a.$LI.dom,l,void 0)),ge(e.ref),a.$UN=!0,ye(a.$LI,m)}else if(8&l){var k=n;if(!t(r=e.ref)){var b=g(e,!0);o(r.onComponentWillUnmount)&&r.onComponentWillUnmount(b,e.props||f),o(r.onComponentWillDisappear)&&(k=new s,De(n,r,b,l,e.props))}ye(a,k)}else 1024&l?be(a,e.ref,n):8192&l&&12&e.childFlags&&Ce(a,n)}function Ce(e,n){for(var t=0,r=e.length;t<r;++t)ye(e[t],n)}function we(e,n,t){t.componentWillDisappear.length>0?k(t.componentWillDisappear,function(e,n){return function(){if(n)for(var t=0;t<e.length;t++)b(e[t],n,!1)}}(n,e)):e.textContent=""}function $e(e,n,t,r){Ce(t,r),8192&n.flags?y(n,e,r):we(e,t,r)}function De(e,n,t,r,o){e.componentWillDisappear.push((function(e){4&r?n.componentWillDisappear(t,e):8&r&&n.onComponentWillDisappear(t,o,e)}))}function Fe(e,n,r,a,u,f,s,p){switch(e){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":a.autofocus=!!r;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":a[e]=!!r;break;case"defaultChecked":case"value":case"volume":if(f&&"value"===e)break;var v=t(r)?"":r;a[e]!==v&&(a[e]=v);break;case"style":!function(e,n,r){if(t(n))return void r.removeAttribute("style");var o,i,a=r.style;if(l(n))return void(a.cssText=n);if(t(e)||l(e))for(o in n)i=n[o],a.setProperty(o,i);else{for(o in n)(i=n[o])!==e[o]&&a.setProperty(o,i);for(o in e)t(n[o])&&a.removeProperty(o)}}(n,r,a);break;case"dangerouslySetInnerHTML":!function(e,n,r,o,l){var a=e&&e.__html||"",u=n&&n.__html||"";a!==u&&(t(u)||function(e,n){var t=document.createElement("i");return t.innerHTML=n,t.innerHTML===e.innerHTML}(o,u)||(i(r)||(12&r.childFlags?Ce(r.children,l):2===r.childFlags&&ye(r.children,l),r.children=null,r.childFlags=1),o.innerHTML=u))}(n,r,s,a,p);break;default:_[e]?function(e,n,t,r){if(o(t))K(e,r)[e]=t;else if(c(t)){if(P(n,t))return;K(e,r)[e]=t}else q(e,r)}(e,n,r,a):111===e.charCodeAt(0)&&110===e.charCodeAt(1)?function(e,n,t,r){if(c(t)){if(P(n,t))return;t=function(e){var n=e.event;return function(t){n(e.data,t)}}(t)}ne(r,d(e),t)}(e,n,r,a):t(r)?a.removeAttribute(e):u&&O[e]?a.setAttributeNS(O[e],e,r):a.setAttribute(e,r)}}function Pe(e,n,t){var r=B(e.render(n,e.state,t)),l=t;return o(e.getChildContext)&&(l=a(t,e.getChildContext())),e.$CX=l,r}function We(e,n){var t=e.props||f;return 32768&e.flags?e.type.render(t,e.ref,n):e.type(t,n)}function xe(e,n,r,l,a,u,c){var d=e.flags|=16384;481&d?function(e,n,r,o,l,a,u){var c=e.flags,f=e.props,s=e.className,d=e.childFlags,p=e.dom=function(e,n){if(n)return document.createElementNS("http://www.w3.org/2000/svg",e);return document.createElement(e)}(e.type,o=o||(32&c)>0),h=e.children;if(t(s)||""===s||(o?p.setAttribute("class",s):p.className=s),16===d)F(p,h);else if(1!==d){var m=o&&"foreignObject"!==e.type;2===d?(16384&h.flags&&(e.children=h=I(h)),xe(h,p,r,m,null,a,u)):8!==d&&4!==d||Ve(h,p,r,m,null,a,u)}i(n)||v(n,p,l),i(f)||function(e,n,t,r,o,l){var i=!1,a=(448&n)>0;for(var u in a&&(i=me(t))&&function(e,n,t){64&e?function(e,n){te(n.type)?(ne(e,"change",oe),ne(e,"click",le)):ne(e,"input",re)}(n,t):256&e?function(e){ne(e,"change",ue)}(n):128&e&&function(e,n){ne(e,"input",de),n.onChange&&ne(e,"change",pe)}(n,t)}(n,r,t),t)Fe(u,null,t[u],r,o,i,null,l);a&&he(n,e,r,t,!0,i)}(e,c,f,p,o,u),ke(e.ref,p,a)}(e,n,r,l,a,u,c):4&d?function(e,n,t,r,l,a,u){var c=function(e,n,t,r,l,a){var u=new n(t,r),c=u.$N=Boolean(n.getDerivedStateFromProps||u.getSnapshotBeforeUpdate);if(u.$SVG=l,u.$L=a,e.children=u,u.$BS=!1,u.context=r,u.props===f&&(u.props=t),c)u.state=$(u,t,u.state);else if(o(u.componentWillMount)){u.$BR=!0,u.componentWillMount();var s=u.$PS;if(!i(s)){var d=u.state;if(i(d))u.state=s;else for(var p in s)d[p]=s[p];u.$PS=null}u.$BR=!1}return u.$LI=Pe(u,t,r),u}(e,e.type,e.props||f,t,r,a),d=u;o(c.componentDidAppear)&&(d=new s),xe(c.$LI,n,c.$CX,r,l,a,d),function(e,n,t,r){ke(e,n,t),o(n.componentDidMount)&&t.push(function(e){return function(){e.componentDidMount()}}(n)),o(n.componentDidAppear)&&Le(r,n,n.$LI.dom,4,void 0)}(e.ref,c,a,u)}(e,n,r,l,a,u,c):8&d?function(e,n,r,l,i,a,u){var c=e.ref,d=u;!t(c)&&o(c.onComponentDidAppear)&&(d=new s),xe(e.children=B(We(e,r)),n,r,l,i,a,d),function(e,n,r){var l=e.ref;t(l)||(x(l.onComponentWillMount,e.props||f),o(l.onComponentDidMount)&&n.push(function(e,n){return function(){e.onComponentDidMount(g(n,!0),n.props||f)}}(l,e)),o(l.onComponentDidAppear)&&Le(r,l,g(e,!0),8,e.props))}(e,a,u)}(e,n,r,l,a,u,c):512&d||16&d?Ae(e,n,a):8192&d?function(e,n,t,r,o,l,i){var a=e.children,u=e.childFlags;12&u&&0===a.length&&(u=e.childFlags=2,a=e.children=U()),2===u?xe(a,t,o,r,o,l,i):Ve(a,t,n,r,o,l,i)}(e,r,n,l,a,u,c):1024&d&&function(e,n,t,r,o,l){xe(e.children,e.ref,n,!1,null,o,l);var i=U();Ae(i,t,r),e.dom=i.dom}(e,r,n,a,u,c)}function Ae(e,n,t){var r=e.dom=document.createTextNode(e.children);i(n)||v(n,r,t)}function Ve(e,n,t,r,o,l,i){for(var a=0;a<e.length;++a){var u=e[a];16384&u.flags&&(e[a]=u=I(u)),xe(u,n,t,r,o,l,i)}}function Le(e,n,t,r,o){e.componentDidAppear.push((function(){4&r?n.componentDidAppear(t):8&r&&n.onComponentDidAppear(t,o)}))}function Me(e,n,l,u,c,s,d,v){var m=n.flags|=16384;e.flags!==m||e.type!==n.type||e.key!==n.key||2048&m?16384&e.flags?function(e,n,t,r,o,l,i){ye(e,i),0!==(n.flags&e.flags&2033)?(xe(n,null,r,o,null,l,i),function(e,n,t){e.replaceChild(n,t)}(t,n.dom,e.dom)):(xe(n,t,r,o,g(e,!0),l,i),y(e,t,i))}(e,n,l,u,c,d,v):xe(n,l,u,c,s,d,v):481&m?function(e,n,r,o,l,i,a){var u,c=n.dom=e.dom,s=e.props,d=n.props,p=!1,v=!1;if(o=o||(32&l)>0,s!==d){var h=s||f;if((u=d||f)!==f)for(var m in(p=(448&l)>0)&&(v=me(u)),u){var g=h[m],k=u[m];g!==k&&Fe(m,g,k,c,o,v,e,a)}if(h!==f)for(var b in h)t(u[b])&&!t(h[b])&&Fe(b,h[b],null,c,o,v,e,a)}var y=n.children,C=n.className;e.className!==C&&(t(C)?c.removeAttribute("class"):o?c.setAttribute("class",C):c.className=C),4096&l?function(e,n){e.textContent!==n&&(e.textContent=n)}(c,y):Ne(e.childFlags,n.childFlags,e.children,y,c,r,o&&"foreignObject"!==n.type,null,e,i,a),p&&he(l,n,c,u,!1,v);var w=n.ref,$=e.ref;$!==w&&(ge($),ke(w,c,i))}(e,n,u,c,m,d,v):4&m?function(e,n,t,r,l,u,c,s){var d=n.children=e.children;if(i(d))return;d.$L=c;var p=n.props||f,v=n.ref,h=e.ref,m=d.state;if(!d.$N){if(o(d.componentWillReceiveProps)){if(d.$BR=!0,d.componentWillReceiveProps(p,r),d.$UN)return;d.$BR=!1}i(d.$PS)||(m=a(m,d.$PS),d.$PS=null)}(function(e,n,t,r,l,i,u,c,f,s){var d=e.state,p=e.props,v=Boolean(e.$N),h=o(e.shouldComponentUpdate);if(v&&(n=$(e,t,n!==d?a(d,n):n)),!h||h&&e.shouldComponentUpdate(t,n,l)){!v&&o(e.componentWillUpdate)&&e.componentWillUpdate(t,n,l),e.props=t,e.state=n,e.context=l;var m=null,g=Pe(e,t,l);v&&o(e.getSnapshotBeforeUpdate)&&(m=e.getSnapshotBeforeUpdate(p,d)),Me(e.$LI,g,r,e.$CX,i,c,f,s),e.$LI=g,o(e.componentDidUpdate)&&function(e,n,t,r,o){o.push((function(){e.componentDidUpdate(n,t,r)}))}(e,p,d,m,f)}else e.props=t,e.state=n,e.context=l})(d,m,p,t,r,l,0,u,c,s),h!==v&&(ge(h),ke(v,d,c))}(e,n,l,u,c,s,d,v):8&m?function(e,n,r,l,i,a,u,c){var s=!0,d=n.props||f,p=n.ref,v=e.props,h=!t(p),m=e.children;if(h&&o(p.onComponentShouldUpdate)&&(s=p.onComponentShouldUpdate(v,d)),!1!==s){h&&o(p.onComponentWillUpdate)&&p.onComponentWillUpdate(v,d);var g=B(We(n,l));Me(m,g,r,l,i,a,u,c),n.children=g,h&&o(p.onComponentDidUpdate)&&p.onComponentDidUpdate(v,d)}else n.children=m}(e,n,l,u,c,s,d,v):16&m?function(e,n){var t=n.children,r=n.dom=e.dom;t!==e.children&&(r.nodeValue=t)}(e,n):512&m?n.dom=e.dom:8192&m?function(e,n,t,r,o,l,i){var a=e.children,u=n.children,c=e.childFlags,f=n.childFlags,s=null;12&f&&0===u.length&&(f=n.childFlags=2,u=n.children=U());var d=0!==(2&f);if(12&c){var p=a.length;(8&c&&8&f||d||!d&&u.length>p)&&(s=g(a[p-1],!1).nextSibling)}Ne(c,f,a,u,t,r,o,s,e,l,i)}(e,n,l,u,c,d,v):function(e,n,t,o,l){var i=e.ref,a=n.ref,u=n.children;if(Ne(e.childFlags,n.childFlags,e.children,u,i,t,!1,null,e,o,l),n.dom=e.dom,i!==a&&!r(u)){var c=u.dom;h(i,c),p(a,c)}}(e,n,u,d,v),v.componentWillMove.length>0&&function(e){for(var n;void 0!==(n=e.pop());)n()}(v.componentWillMove)}function Ne(e,n,t,r,o,l,i,a,u,c,f){switch(e){case 2:switch(n){case 2:Me(t,r,o,l,i,a,c,f);break;case 1:be(t,o,f);break;case 16:ye(t,f),F(o,r);break;default:!function(e,n,t,r,o,l,i){ye(e,i),Ve(n,t,r,o,g(e,!0),l,i),y(e,t,i)}(t,r,o,l,i,c,f)}break;case 1:switch(n){case 2:xe(r,o,l,i,a,c,f);break;case 1:break;case 16:F(o,r);break;default:Ve(r,o,l,i,a,c,f)}break;case 16:switch(n){case 16:!function(e,n,t){e!==n&&(""!==e?t.firstChild.nodeValue=n:F(t,n))}(t,r,o);break;case 2:we(o,t,f),xe(r,o,l,i,a,c,f);break;case 1:we(o,t,f);break;default:we(o,t,f),Ve(r,o,l,i,a,c,f)}break;default:switch(n){case 16:Ce(t,f),F(o,r);break;case 2:$e(o,u,t,f),xe(r,o,l,i,a,c,f);break;case 1:$e(o,u,t,f);break;default:var s=0|t.length,d=0|r.length;0===s?d>0&&Ve(r,o,l,i,a,c,f):0===d?$e(o,u,t,f):8===n&&8===e?function(e,n,t,r,o,l,i,a,u,c,f){var s,d,p=l-1,v=i-1,h=0,m=e[h],k=n[h];e:{for(;m.key===k.key;){if(16384&k.flags&&(n[h]=k=I(k)),Me(m,k,t,r,o,a,c,f),e[h]=k,++h>p||h>v)break e;m=e[h],k=n[h]}for(m=e[p],k=n[v];m.key===k.key;){if(16384&k.flags&&(n[v]=k=I(k)),Me(m,k,t,r,o,a,c,f),e[p]=k,v--,h>--p||h>v)break e;m=e[p],k=n[v]}}if(h>p){if(h<=v)for(d=(s=v+1)<i?g(n[s],!0):a;h<=v;)16384&(k=n[h]).flags&&(n[h]=k=I(k)),++h,xe(k,t,r,o,d,c,f)}else if(h>v)for(;h<=p;)be(e[h++],t,f);else!function(e,n,t,r,o,l,i,a,u,c,f,s,d,p){var v,h,m=0,k=0,b=a,y=a,C=l-a+1,$=i-a+1,D=new Int32Array($+1),F=C===r,P=!1,W=0,x=0;if(o<4||(C|$)<32)for(k=b;k<=l;++k)if(v=e[k],x<$){for(a=y;a<=i;a++)if(h=n[a],v.key===h.key){if(D[a-y]=k+1,F)for(F=!1;b<k;)be(e[b++],u,p);W>a?P=!0:W=a,16384&h.flags&&(n[a]=h=I(h)),Me(v,h,u,t,c,f,d,p),++x;break}!F&&a>i&&be(v,u,p)}else F||be(v,u,p);else{var A={};for(k=y;k<=i;++k)A[n[k].key]=k;for(k=b;k<=l;++k)if(v=e[k],x<$)if(void 0!==(a=A[v.key])){if(F)for(F=!1;k>b;)be(e[b++],u,p);D[a-y]=k+1,W>a?P=!0:W=a,16384&(h=n[a]).flags&&(n[a]=h=I(h)),Me(v,h,u,t,c,f,d,p),++x}else F||be(v,u,p);else F||be(v,u,p)}if(F)$e(u,s,e,p),Ve(n,u,t,c,f,d,p);else if(P){var V=function(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(u>Se&&(Se=u,fe=new Int32Array(u),se=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=fe[o]]<n){se[t]=r,fe[++o]=t;continue}for(l=0,i=o;l<i;)e[fe[a=l+i>>1]]<n?l=a+1:i=a;n<e[fe[l]]&&(l>0&&(se[t]=fe[l-1]),fe[l]=t)}l=o+1;var c=new Int32Array(l);for(i=fe[l-1];l-- >0;)c[l]=i,i=se[i],fe[l]=0;return c}(D);for(a=V.length-1,k=$-1;k>=0;k--)0===D[k]?(16384&(h=n[W=k+y]).flags&&(n[W]=h=I(h)),xe(h,u,t,c,(m=W+1)<o?g(n[m],!0):f,d,p)):a<0||k!==V[a]?w(s,h=n[W=k+y],u,(m=W+1)<o?g(n[m],!0):f,p):a--}else if(x!==$)for(k=$-1;k>=0;k--)0===D[k]&&(16384&(h=n[W=k+y]).flags&&(n[W]=h=I(h)),xe(h,u,t,c,(m=W+1)<o?g(n[m],!0):f,d,p))}(e,n,r,l,i,p,v,h,t,o,a,u,c,f)}(t,r,o,l,i,s,d,a,u,c,f):function(e,n,t,r,o,l,i,a,u,c){for(var f,s,d=l>i?i:l,p=0;p<d;++p)f=n[p],s=e[p],16384&f.flags&&(f=n[p]=I(f)),Me(s,f,t,r,o,a,u,c),e[p]=f;if(l<i)for(p=d;p<i;++p)16384&(f=n[p]).flags&&(f=n[p]=I(f)),xe(f,t,r,o,a,u,c);else if(l>i)for(p=d;p<l;++p)be(e[p],t,c)}(t,r,o,l,i,s,d,a,c,f)}}}var Se=0;function Ie(e,n,r,l){void 0===r&&(r=null),void 0===l&&(l=f),function(e,n,r,l){var i=[],a=new s,u=n.$V;t(u)?t(e)||(16384&e.flags&&(e=I(e)),xe(e,n,l,!1,null,i,a),n.$V=e,u=e):t(e)?(be(u,n,a),n.$V=null):(16384&e.flags&&(e=I(e)),Me(u,e,n,l,!1,null,i,a),u=n.$V=e),function(e){for(var n=0;n<e.length;n++)e[n]()}(i),k(a.componentDidAppear),o(r)&&r(),o(D.renderComplete)&&D.renderComplete(u,n)}(e,n,r,l)}"undefined"!==typeof document&&window.Node&&(Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!==typeof Promise&&Promise.resolve().then.bind(Promise.resolve()),uibench.init("Inferno","7.4.8");var Ue={onComponentShouldUpdate:function(e,n){return e!==n}};function Te(e){return L(1,"li","TreeLeaf",e.children,16,null,null,null)}function Be(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=M(2,Be,{data:l},i,null):r[o]=M(2,Te,{children:i},i,null)}return L(1,"ul","TreeNode",r,8,null,null,null)}function Ee(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return L(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function He(e,n){console.log("Clicked",e),n.stopPropagation()}function Oe(e){var n=e.children;return L(1,"td","TableCell",n,16,{onClick:u(n,He)},null,null)}function Re(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");for(var r=n.props,o=r.length+1,l=[M(2,Oe,{children:"#"+n.id},null,null)],i=1;i<o;i++)l.push(M(2,Oe,{children:r[i-1]},null,null));return L(1,"tr",t,l,4,{"data-id":n.id},null,null)}Te.defaultHooks=Ue,Be.defaultHooks=Ue,Ee.defaultHooks=Ue,Oe.defaultHooks=Ue,Re.defaultHooks=Ue,document.addEventListener("DOMContentLoaded",(function(e){var n=document.querySelector("#App");uibench.run((function(e){var t,r,o;Ie(("table"===(o=(t=e).location)?r=function(e){for(var n=e.items,t=n.length,r=[],o=0;o<t;o++){var l=n[o];r.push(M(2,Re,{data:l},l.id,null))}return L(1,"table","Table",r,8,null,null,null)}(t.table):"anim"===o?r=function(e){for(var n=e.items,t=n.length,r=[],o=0;o<t;o++){var l=n[o];r.push(M(2,Ee,{data:l},l.id,null))}return L(1,"div","Anim",r,8,null,null,null)}(t.anim):"tree"===o&&(r=function(e){return L(1,"div","Tree",M(2,Be,{data:e.root},null,null),2,null,null,null)}(t.tree)),L(1,"div","Main",r,2,null,null,null)),n)}),(function(e){Ie(L(1,"pre",null,JSON.stringify(e,null," "),16,null,null,null),n)}))}))}();
