!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"==n||"number"==n}function H(e){return v(e)||X(e)}function C(e){return X(e)||false===e||true===e||v(e)}function R(e){return"function"==typeof e}function p(e){return"string"==typeof e}function X(e){return null===e}function v(e){return void 0===e}function w(e,n){var t={};if(e)for(var l in e)t[l]=e[l];if(n)for(var r in n)t[r]=n[r];return t}var _={};function h(e){return e.substr(2).toLowerCase()}function $(e,n){e.appendChild(n)}function K(e,n,t){X(t)?$(e,n):e.insertBefore(n,t)}function F(e,n){e.removeChild(n)}function q(e,n){for(var t,l;e;){if(2033&(t=e.flags))return e.dom;l=e.children,e=8192&t?2===e.childFlags?l:l[n?0:l.length-1]:4&t?l.$LI:l}return null}function x(e,n){var t=e.flags;if(2033&t)F(n,e.dom);else{var l=e.children;if(4&t)x(l.$LI,n);else if(8&t)x(l,n);else if(8192&t)if(2===e.childFlags)x(l,n);else for(var r=0,o=l.length;r<o;++r)x(l[r],n)}}function M(e,n,t){var l=e.flags;if(2033&l)K(n,e.dom,t);else{var r=e.children;if(4&l)M(r.$LI,n,t);else if(8&l)M(r,n,t);else if(8192&l)if(2===e.childFlags)M(r,n,t);else for(var o=0,a=r.length;o<a;++o)M(r[o],n,t)}}function G(e,n,t){return e.constructor.getDerivedStateFromProps?w(t,e.constructor.getDerivedStateFromProps(n,t)):t}var m={componentComparator:null,createVNode:null,renderComplete:null};function z(e,n){e.textContent=n}function g(e,n){return e&&n&&typeof e==typeof n&&e.event===n.event&&e.data===n.data}var y="$";function k(e,n,t,l,r,o,a,i){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=l,this.key=void 0===r?null:r,this.props=void 0===o?null:o,this.ref=void 0===a?null:a,this.type=i}function s(e,n,t,l,r,o,a,i){var u=void 0===r?1:r,s=new k(u,l,t,e,a,o,i,n),c=m.createVNode;return R(c)&&c(s),0===u&&function(e,n){var t,l=1;if(C(n))t=n;else if(d(n))l=16,t=n;else if(f(n)){for(var r=n.length,o=0;o<r;++o){var a=n[o];if(C(a)||f(a)){t=t||n.slice(0,o),S(n,t,o,"");break}if(d(a))(t=t||n.slice(0,o)).push(P(a,y+o));else{var i=a.key,u=0<(81920&a.flags),s=X(i),c=p(i)&&i[0]===y;u||s||c?(t=t||n.slice(0,o),(u||c)&&(a=J(a)),(s||c)&&(a.key=y+o),t.push(a)):t&&t.push(a),a.flags|=65536}}l=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=J(n)),l=2;e.children=t,e.childFlags=l}(s,s.children),s}function b(e,n,t,l,r){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var o=n.defaultProps;if(!H(o))for(var a in t=t||{},o)v(t[a])&&(t[a]=o[a]);if(0<(8&e)&&0==(32768&e)){var i=n.defaultHooks;if(!H(i))if(r)for(var u in i)v(r[u])&&(r[u]=i[u]);else r=i}var s=new k(1,null,null,e,l,t,r,n),c=m.createVNode;return R(c)&&c(s),s}function P(e,n){return new k(1,H(e)?"":e,null,16,n,null,null,null)}function a(e,n,t){var l=s(8192,8192,null,e,n,null,t,null);switch(l.childFlags){case 1:l.children=Q(),l.childFlags=2;break;case 16:l.children=[P(e)],l.childFlags=4}return l}function J(e){var n=-16385&e.flags,t=e.props;if(14&n&&!X(t)){var l=t;for(var r in t={},l)t[r]=l[r]}return 0==(8192&n)?new k(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,l=e.childFlags;if(2===l)n=J(t);else if(12&l){n=[];for(var r=0,o=t.length;r<o;++r)n.push(J(t[r]))}return a(n,l,e.key)}(e)}function Q(){return P("",null)}function S(e,n,t,l){for(var r=e.length;t<r;t++){var o=e[t];if(!C(o)){var a=l+y+t;if(f(o))S(o,n,0,a);else{if(d(o))o=P(o,a);else{var i=o.key,u=p(i)&&i[0]===y;(81920&o.flags||u)&&(o=J(o)),o.flags|=65536,u?i.substring(0,l.length)!==l&&(o.key=l+i):X(i)?o.key=a:o.key=l+i}n.push(o)}}}}var e="http://www.w3.org/1999/xlink",n="http://www.w3.org/XML/1998/namespace",L={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":n,"xml:lang":n,"xml:space":n};function i(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var u=i(0),c=i(null),V=i(true);function N(e,n,t){var l,r=t.$EV;function o(e){var n="onClick"===l||"onDblClick"===l;if(n&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=I,e.isPropagationStopped=A,e.stopPropagation=U;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,l,r){var o=n;do{if(t&&o.disabled)return;var a=o.$EV;if(a){var i=a[l];if(i&&(r.dom=o,i.event?i.event(i.data,e):i(e),e.cancelBubble))return}o=o.parentNode}while(!X(o))}(e,e.target,n,l,t)}}n?(0===u[e]&&(c[e]=(l=e,document.addEventListener(h(l),o),o)),(r=r||(t.$EV=i(null)))[e]||++u[e],r[e]=n):r&&r[e]&&(0==--u[e]&&(document.removeEventListener(h(e),c[e]),c[e]=null),r[e]=null)}function U(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function I(){return this.defaultPrevented}function A(){return this.cancelBubble}function T(e,n,t){if(e[n]){var l=e[n];l.event?l.event(l.data,t):l(t)}else{var r=n.toLowerCase();e[r]&&e[r](t)}}function t(i,u){function e(e){var n=this.$V;if(n){var t=n.props||_,l=n.dom;if(p(i))T(t,i,e);else for(var r=0;r<i.length;++r)T(t,i[r],e);if(R(u)){var o=this.$V,a=o.props||_;u(a,l,false,o)}}}return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var l="$"+n,r=e[l];if(r){if(r[1].wrapped)return;e.removeEventListener.apply(e,r),e[l]=null}R(t)&&(e.addEventListener(n,t),e[l]=[n,t])}function Z(e){return"checkbox"===e||"radio"===e}var ee=t("onInput",D),ne=t(["onClick","onChange"],D);function te(e){e.stopPropagation()}function D(e,n){var t=e.type,l=e.value,r=e.checked,o=e.multiple,a=e.defaultValue,i=!H(l);t&&t!==n.type&&n.setAttribute("type",t),H(o)||o===n.multiple||(n.multiple=o),H(a)||i||(n.defaultValue=a+""),Z(t)?(i&&(n.value=l),H(r)||(n.checked=r)):i&&n.value!==l?(n.defaultValue=l,n.value=l):H(r)||(n.checked=r)}te.wrapped=true;var le=t("onChange",E);function E(e,n,t,l){var r=Boolean(e.multiple);H(e.multiple)||r===n.multiple||(n.multiple=r);var o=e.selectedIndex;if(-1===o&&(n.selectedIndex=-1),1!==l.childFlags){var a=e.value;"number"==typeof o&&-1<o&&n.options[o]&&(a=n.options[o].value),t&&H(a)&&(a=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(i=n).props||_,(c=i.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:H(u)&&H(s.selected)||(c.selected=s.selected||false);else{var l=n.children,r=n.flags;if(4&r)e(l.$LI,t);else if(8&r)e(l,t);else if(2===n.childFlags)e(l,t);else if(12&n.childFlags)for(var o=0,a=l.length;o<a;++o)e(l[o],t)}var i,u,s,c}(l,a)}}var B,W,re=t("onInput",O),oe=t("onChange");function O(e,n,t){var l=e.value,r=n.value;if(H(l)){if(t){var o=e.defaultValue;H(o)||o===r||(n.defaultValue=o,n.value=o)}}else r!==l&&(n.defaultValue=l,n.value=l)}function ae(e,n,t,l,r,o){64&e?D(l,t):256&e?E(l,t,r,n):128&e&&O(l,t,r),o&&(t.$V=n)}function ie(e){return e.type&&Z(e.type)?!H(e.checked):!H(e.value)}function j(e){e&&(R(e)?e(null):e.current&&(e.current=null))}function ue(e,n,t){e&&(R(e)||void 0!==e.current)&&t.push(function(){R(e)?e(n):void 0!==e.current&&(e.current=n)})}function se(e,n){ce(e),n&&x(e,n)}function ce(e){var n,t=e.flags,l=e.children;if(481&t){n=e.ref;var r=e.props;j(n);var o=e.childFlags;if(!X(r))for(var a=Object.keys(r),i=0,u=a.length;i<u;i++){var s=a[i];V[s]&&N(s,null,e.dom)}12&o?fe(l):2===o&&ce(l)}else l&&(4&t?(R(l.componentWillUnmount)&&l.componentWillUnmount(),j(e.ref),l.$UN=true,ce(l.$LI)):8&t?(!H(n=e.ref)&&R(n.onComponentWillUnmount)&&n.onComponentWillUnmount(q(e,true),e.props||_),ce(l)):1024&t?se(l,e.ref):8192&t&&12&e.childFlags&&fe(l))}function fe(e){for(var n=0,t=e.length;n<t;++n)ce(e[n])}function de(e){e.textContent=""}function pe(e,n,t){fe(t),8192&n.flags?x(n,e):de(e)}function ve(u,e,n,t,l,r,o){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":case"selectedIndex":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(r&&"value"===u)break;var a=H(n)?"":n;t[u]!==a&&(t[u]=a);break;case"style":!function(e,n,t){if(H(n))t.removeAttribute("style");else{var l,r,o=t.style;if(p(n))o.cssText=n;else if(H(e)||p(e))for(l in n)r=n[l],o.setProperty(l,r);else{for(l in n)(r=n[l])!==e[l]&&o.setProperty(l,r);for(l in e)H(n[l])&&o.removeProperty(l)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var i=e&&e.__html||"",s=n&&n.__html||"";i!==s&&(H(s)||(c=t,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||(X(o)||(12&o.childFlags?fe(o.children):2===o.childFlags&&ce(o.children),o.children=null,o.childFlags=1),t.innerHTML=s));break;default:V[u]?g(e,n)||N(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t,l){var r,o,a=h(u);if("object"!=typeof t||X(t))Y(l,a,t);else{var i=t.event;g(n,t)||Y(l,a,(r=i,o=t,function(e){r(o.data,e)}))}}(0,e,n,t):H(n)?t.removeAttribute(u):l&&L[u]?t.setAttributeNS(L[u],u,n):t.setAttribute(u,n)}var c,f,d}function he(e,n,t){var l=me(e.render(n,e.state,t)),r=t;return R(e.getChildContext)&&(r=w(t,e.getChildContext())),e.$CX=r,l}function me(e){return C(e)?e=Q():d(e)?e=P(e,null):f(e)?e=a(e,0,null):16384&e.flags&&(e=J(e)),e}function ge(e,n,t,l,r,o){var a,i,u,s,c,f,d,p,v,h,m,g,y,k,b,C,w,$,F,x,P,S,L,M,V,N,U,I,A,T,D,E,B,W,O,j=e.flags|=16384;481&j?function(e,n,t,l,r,o){var a,i=e.flags,u=e.props,s=e.className,c=e.children,f=e.childFlags,d=e.dom=(a=e.type,(l=l||0<(32&i))?document.createElementNS("http://www.w3.org/2000/svg",a):document.createElement(a));if(H(s)||""===s||(l?d.setAttribute("class",s):d.className=s),16===f)z(d,c);else if(1!==f){var p=l&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=J(c)),ge(c,d,t,p,null,o)):8!==f&&4!==f||ke(c,d,t,p,null,o)}X(n)||K(n,d,r),X(u)||function(e,n,t,l,r){var o,a,i,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=ie(t))&&(a=l,i=t,c=s=u=void 0,64&(o=n)?(c=a,Z(i.type)?(Y(c,"change",ne),Y(c,"click",te)):Y(c,"input",ee)):256&o?Y(a,"change",le):128&o&&(s=i,Y(u=a,"input",re),s.onChange&&Y(u,"change",oe))),t)ve(p,null,t[p],l,r,f,null);d&&ae(n,e,l,t,true,f)}(e,i,u,d,l),ue(e.ref,d,o)}(e,n,t,l,r,o):4&j?(U=n,I=t,A=l,T=r,D=o,ge((O=function(e,n,t,l,r,o){var a=new n(t,l),i=a.$N=Boolean(n.getDerivedStateFromProps||a.getSnapshotBeforeUpdate);if(a.$SVG=r,a.$L=o,(e.children=a).$BS=false,a.context=l,a.props===_&&(a.props=t),i)a.state=G(a,t,a.state);else if(R(a.componentWillMount)){a.$BR=true,a.componentWillMount();var u=a.$PS;if(!X(u)){var s=a.state;if(X(s))a.state=u;else for(var c in u)s[c]=u[c];a.$PS=null}a.$BR=false}return a.$LI=he(a,t,l),a}(N=e,N.type,N.props||_,I,A,D)).$LI,U,O.$CX,A,T,D),ue(N.ref,E=O,B=D),R(E.componentDidMount)&&B.push((W=E,function(){W.componentDidMount()}))):8&j?(h=n,m=t,g=l,y=r,k=o,S=(v=e).type,L=v.props||_,M=v.ref,V=me(32768&v.flags?S(L,M,m):S(L,m)),ge(v.children=V,h,m,g,y,k),b=L,w=v,$=k,H(C=M)||(R(C.onComponentWillMount)&&C.onComponentWillMount(b),R(C.onComponentDidMount)&&$.push((F=C,x=w,P=b,function(){F.onComponentDidMount(q(x,true),P)})))):512&j||16&j?ye(e,n,r):8192&j?(i=n,u=t,s=l,c=r,f=o,d=(a=e).children,12&(p=a.childFlags)&&0===d.length&&(p=a.childFlags=2,d=a.children=Q()),2===p?ge(d,i,c,s,c,f):ke(d,i,u,s,c,f)):1024&j&&function(e,n,t,l,r){ge(e.children,e.ref,n,false,null,r);var o=Q();ye(o,t,l),e.dom=o.dom}(e,t,n,r,o)}function ye(e,n,t){var l=e.dom=document.createTextNode(e.children);X(n)||K(n,l,t)}function ke(e,n,t,l,r,o){for(var a=0,i=e.length;a<i;++a){var u=e[a];16384&u.flags&&(e[a]=u=J(u)),ge(u,n,t,l,r,o)}}function be(e,n,t,l,r,o,a){var i,u,s,c,f,d,p,v,h,m,g,y,k,b=n.flags|=16384;e.flags!==b||e.type!==n.type||e.key!==n.key||0!=(2048&b)?16384&e.flags?(d=n,p=t,v=l,h=r,m=a,ce(f=e),0!=(d.flags&f.flags&2033)?(ge(d,null,v,h,null,m),g=p,y=d.dom,k=f.dom,g.replaceChild(y,k)):(ge(d,p,v,h,q(f,true),m),x(f,p))):ge(n,t,l,r,o,a):481&b?function(e,n,t,l,r,o){var a,i=n.dom=e.dom,u=e.props,s=n.props,c=false,f=false;if(l=l||0<(32&r),u!==s){var d=u||_;if((a=s||_)!==_)for(var p in(c=0<(448&r))&&(f=ie(a)),a){var v=d[p],h=a[p];v!==h&&ve(p,v,h,i,l,f,e)}if(d!==_)for(var m in d)H(a[m])&&!H(d[m])&&ve(m,d[m],null,i,l,f,e)}var g,y,k=n.children,b=n.className;e.className!==b&&(H(b)?i.removeAttribute("class"):l?i.setAttribute("class",b):i.className=b),4096&r?(y=k,(g=i).textContent!==y&&(g.textContent=y)):Ce(e.childFlags,n.childFlags,e.children,k,i,t,l&&"foreignObject"!==n.type,null,e,o),c&&ae(r,n,i,a,false,f);var C=n.ref,w=e.ref;w!==C&&(j(w),ue(C,i,o))}(e,n,l,r,b,a):4&b?function(e,n,t,l,r,o,a){var i=n.children=e.children;if(!X(i)){i.$L=a;var u=n.props||_,s=n.ref,c=e.ref,f=i.state;if(!i.$N){if(R(i.componentWillReceiveProps)){if(i.$BR=true,i.componentWillReceiveProps(u,l),i.$UN)return;i.$BR=false}X(i.$PS)||(f=w(f,i.$PS),i.$PS=null)}(function(e,n,t,l,r,o,a,i,u){var s,c,f,d,p=e.state,v=e.props,h=Boolean(e.$N),m=R(e.shouldComponentUpdate);if(h&&(n=G(e,t,n!==p?w(p,n):n)),!m||m&&e.shouldComponentUpdate(t,n,r)){!h&&R(e.componentWillUpdate)&&e.componentWillUpdate(t,n,r),e.props=t,e.state=n,e.context=r;var g=null,y=he(e,t,r);h&&R(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(v,p)),be(e.$LI,y,l,e.$CX,o,i,u),e.$LI=y,R(e.componentDidUpdate)&&(s=e,c=v,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=t,e.state=n,e.context=r})(i,f,u,t,l,r,0,o,a),c!==s&&(j(c),ue(s,i,a))}}(e,n,t,l,r,o,a):8&b?function(e,n,t,l,r,o,a){var i=true,u=n.props||_,s=n.ref,c=e.props,f=!H(s),d=e.children;if(f&&R(s.onComponentShouldUpdate)&&(i=s.onComponentShouldUpdate(c,u)),false!==i){f&&R(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,v=me(32768&n.flags?p(u,s,l):p(u,l));be(d,v,t,l,r,o,a),n.children=v,f&&R(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,t,l,r,o,a):16&b?(i=e,s=(u=n).children,c=u.dom=i.dom,s!==i.children&&(c.nodeValue=s)):512&b?n.dom=e.dom:8192&b?function(e,n,t,l,r,o){var a=e.children,i=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===i.length&&(s=n.childFlags=2,i=n.children=Q());var f=0!=(2&s);if(12&u){var d=a.length;(8&u&&8&s||f||!f&&i.length>d)&&(c=q(a[d-1],false).nextSibling)}Ce(u,s,a,i,t,l,r,c,e,o)}(e,n,t,l,r,a):function(e,n,t,l){var r=e.ref,o=n.ref,a=n.children;if(Ce(e.childFlags,n.childFlags,e.children,a,r,t,false,null,e,l),n.dom=e.dom,r!==o&&!C(a)){var i=a.dom;F(r,i),$(o,i)}}(e,n,l,a)}function Ce(e,n,t,l,r,o,a,i,u,s){switch(e){case 2:switch(n){case 2:be(t,l,r,o,a,i,s);break;case 1:se(t,r);break;case 16:ce(t),z(r,l);break;default:h=l,m=r,g=o,y=a,k=s,ce(v=t),ke(h,m,g,y,q(v,true),k),x(v,m)}break;case 1:switch(n){case 2:ge(l,r,o,a,i,s);break;case 1:break;case 16:z(r,l);break;default:ke(l,r,o,a,i,s)}break;case 16:switch(n){case 16:p=r,t!==(d=l)&&(""!==t?p.firstChild.nodeValue=d:z(p,d));break;case 2:de(r),ge(l,r,o,a,i,s);break;case 1:de(r);break;default:de(r),ke(l,r,o,a,i,s)}break;default:switch(n){case 16:fe(t),z(r,l);break;case 2:pe(r,u,t),ge(l,r,o,a,i,s);break;case 1:pe(r,u,t);break;default:var c=0|t.length,f=0|l.length;0==c?0<f&&ke(l,r,o,a,i,s):0==f?pe(r,u,t):8===n&&8===e?function(e,n,t,l,r,o,a,i,u,s){var c,f,d=o-1,p=a-1,v=0,h=0,m=e[h],g=n[h];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[h]=g=J(g)),be(m,g,t,l,r,i,s),e[h]=g,d<++h||p<h)break e;m=e[h],g=n[h]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=J(g)),be(m,g,t,l,r,i,s),e[d]=g,p--,--d<h||p<h)break e;m=e[d],g=n[p]}}if(d<h){if(h<=p)for(f=(c=p+1)<a?q(n[c],true):i;h<=p;)16384&(g=n[h]).flags&&(n[h]=g=J(g)),++h,ge(g,t,l,r,f,s)}else if(p<h)for(;h<=d;)se(e[h++],t);else{var y=h,k=h,b=d-h+1,C=p-h+1,w=new Int32Array(C-v+1),$=b==o,F=false,x=0,P=0;if(a<4||(b|C)<32)for(v=y;v<=d;++v)if(m=e[v],P<C){for(h=k;h<=p;h++)if(g=n[h],m.key===g.key){if(w[h-k]=v+1,$)for($=false;y<v;)se(e[y++],t);h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),be(m,g,t,l,r,i,s),++P;break}!$&&p<h&&se(m,t)}else $||se(m,t);else{var S={};for(v=k;v<=p;++v)S[n[v].key]=v;for(v=y;v<=d;++v)if(m=e[v],P<C)if(void 0!==(h=S[m.key])){if($)for($=false;y<v;)se(e[y++],t);g=n[h],w[h-k]=v+1,h<x?F=true:x=h,16384&g.flags&&(n[h]=g=J(g)),be(m,g,t,l,r,i,s),++P}else $||se(m,t);else $||se(m,t)}if($)pe(t,u,e),ke(n,t,l,r,i,s);else if(F){var L=function(e){var n=0,t=0,l=0,r=0,o=0,a=0,i=0,u=e.length;for(we<u&&(B=new Int32Array(we=u),W=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[l=B[r]]<n){W[t]=l,B[++r]=t;continue}for(o=0,a=r;o<a;)e[B[i=o+a>>1]]<n?o=i+1:a=i;n<e[B[o]]&&(0<o&&(W[t]=B[o-1]),B[o]=t)}o=r+1;var s=new Int32Array(o);for(a=B[o-1];0<o--;)s[o]=a,a=W[a],B[o]=0;return s}(w);for(h=L.length-1,v=C-1;0<=v;v--)0===w[v]?(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),ge(g,t,l,r,(c=x+1)<a?q(n[c],true):i,s)):h<0||v!==L[h]?M(g=n[x=v+k],t,(c=x+1)<a?q(n[c],true):i):h--}else if(P!==C)for(v=C-1;0<=v;v--)0===w[v]&&(16384&(g=n[x=v+k]).flags&&(n[x]=g=J(g)),ge(g,t,l,r,(c=x+1)<a?q(n[c],true):i,s))}}(t,l,r,o,a,c,f,i,u,s):function(e,n,t,l,r,o,a,i,u){for(var s,c,f=a<o?a:o,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=J(s)),be(c,s,t,l,r,i,u),e[d]=s;if(o<a)for(d=f;d<a;++d)16384&(s=n[d]).flags&&(s=n[d]=J(s)),ge(s,t,l,r,i,u);else if(a<o)for(d=f;d<o;++d)se(e[d],t)}(t,l,r,o,a,c,f,i,s)}}var d,p,v,h,m,g,y,k}var we=0;function $e(e,n,t,l){var r,o,a,i,u,s;void 0===t&&(t=null),void 0===l&&(l=_),r=e,a=t,i=l,u=[],H(s=(o=n).$V)?H(r)||(16384&r.flags&&(r=J(r)),ge(r,o,i,false,null,u),s=o.$V=r):H(r)?(se(s,o),o.$V=null):(16384&r.flags&&(r=J(r)),be(s,r,o,i,false,null,u),s=o.$V=r),0<u.length&&function(e){for(var n;void 0!==(n=e.shift());)n()}(u),R(a)&&a(),R(m.renderComplete)&&m.renderComplete(s,o)}function r(e){console.log("ok",e)}function Fe(e){return e.reduce(function(e,n){return e+n},0)/e.length}function xe(e){return Math.min.apply(Math,e)}function Pe(e){return Math.max.apply(Math,e)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null),"undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window);var Se=[function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e,n,t=[],l=0;l<500;l++)t.push(s(1,"li",null,l,16,{onclick:(e=l,n=r,R(n)?{data:e,event:n}:null)},null,null));return s(1,"ul",null,t,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onClick:r},null,null));return s(1,"ul",null,e,4,null,null,null)},function(){for(var e=[],n=0;n<500;n++)e.push(s(1,"li",null,n,16,{onclick:function(){console.log("ok")}},null,null));return s(1,"ul",null,e,4,null,null,null)}],Le=["hoistedNonSyntheticEvents","hoistedLinkEventNonSynthetic","hoistedSyntheticEvents","newFuncsNonSyntheticEvents"];function Me(e){for(var n=e.results,t=[],l=0;l<n.length;l++){var r=n[l],o=["mount","patch","unmount"];t.push(s(1,"div","test-name",r.name,0,null,null,null));for(var a=0;a<o.length;a++){var i=o[a],u=r[i];t.push(s(1,"div","test-part",i,0,null,null,null)),t.push(s(1,"div","test-result",[P("Avg: "),u.avg],0,null,null,null)),t.push(s(1,"div","test-result",[P("Min: "),u.min],0,null,null,null)),t.push(s(1,"div","test-result",[P("Max: "),u.max],0,null,null,null))}}return s(1,"div","results",t,4,null,null,null)}document.addEventListener("DOMContentLoaded",function(e){for(var r=document.querySelector("#App"),n=[],l=[],o=[],a=[],i=0,t=0;t<3;t++)for(var u=0;u<Se.length;u++)$e(b(8,Se[u]),r);function s(e){var n=performance.now();$e(b(8,Se[i]),r);var t=performance.now();l.push(t-n),setTimeout(c,30,e)}function c(e){for(var n=performance.now(),t=0;t<7;t++)$e(b(8,Se[i]),r);var l=performance.now();o.push(l-n),setTimeout(f,30,e)}function f(e){var n=performance.now();$e(null,r);var t=performance.now();a.push(t-n),setTimeout(e,30)}$e(null,r);var d=0;!function e(){d<10&&i<Se.length?(d++,setTimeout(s,30,e)):i<Se.length?(n.push({name:Le[i],mount:{min:xe(l),avg:Fe(l),max:Pe(l)},patch:{min:xe(o),avg:Fe(o),max:Pe(o)},unmount:{min:xe(a),avg:Fe(a),max:Pe(a)}}),l=[],o=[],a=[],i++,d=0,e()):setTimeout(function(){$e(b(2,Me,{results:n},null,null),r)},1e3)}()})}();