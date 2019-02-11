!function(){"use strict";var f=Array.isArray;function d(e){var n=typeof e;return"string"===n||"number"===n}function w(e){return h(e)||$(e)}function C(e){return $(e)||false===e||true===e||h(e)}function x(e){return"function"==typeof e}function p(e){return"string"==typeof e}function $(e){return null===e}function h(e){return void 0===e}function v(e){return"object"==typeof e}function S(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}var V={},n="$F";function m(e){return e.substr(2).toLowerCase()}function N(e,n){e.appendChild(n)}function g(e,n,t){$(t)?N(e,n):e.insertBefore(n,t)}function U(e,n){e.removeChild(n)}function i(e){for(var n;void 0!==(n=e.shift());)n()}function F(e,n){for(var t,r;e;){if(2033&(t=e.flags))return e.dom;r=e.children,e=8192&t?2===e.childFlags?r:r[n?0:r.length-1]:4&t?r.$LI:r}return null}function P(e,n){var t=e.flags;if(2033&t)U(n,e.dom);else{var r=e.children;if(4&t)P(r.$LI,n);else if(8&t)P(r,n);else if(8192&t)if(2===e.childFlags)P(r,n);else for(var o=0,l=r.length;o<l;++o)P(r[o],n)}}function M(e,n,t){var r=e.flags;if(2033&r)g(n,e.dom,t);else{var o=e.children;if(4&r)M(o.$LI,n,t);else if(8&r)M(o,n,t);else if(8192&r)if(2===e.childFlags)M(o,n,t);else for(var l=0,i=o.length;l<i;++l)M(o[l],n,t)}}function b(e,n,t){return e.constructor.getDerivedStateFromProps?S(t,e.constructor.getDerivedStateFromProps(n,t)):t}var a={v:false},y={componentComparator:null,createVNode:null,renderComplete:null};function L(e,n){e.textContent=n}function k(e,n){return e&&n&&v(e)&&v(n)&&e.event===n.event&&e.data===n.data}var I="$";function T(e,n,t,r,o,l,i,a){this.childFlags=e,this.children=n,this.className=t,this.dom=null,this.flags=r,this.key=void 0===o?null:o,this.props=void 0===l?null:l,this.ref=void 0===i?null:i,this.type=a}function _(e,n,t,r,o,l,i,a){var u=void 0===o?1:o,s=new T(u,r,t,e,i,l,a,n),c=y.createVNode;return x(c)&&c(s),0===u&&j(s,s.children),s}function A(e,n,t,r,o){0!=(2&e)&&(n.prototype&&n.prototype.render?e=4:n.render?(e=32776,n=n.render):e=8);var l=n.defaultProps;if(!w(l))for(var i in t||(t={}),l)h(t[i])&&(t[i]=l[i]);if(0<(8&e)&&0==(32768&e)){var a=n.defaultHooks;if(!w(a))if(o)for(var u in a)h(o[u])&&(o[u]=a[u]);else o=a}var s=new T(1,null,null,e,r,t,o,n),c=y.createVNode;return x(c)&&c(s),s}function D(e,n){return new T(1,w(e)?"":e,null,16,n,null,null,null)}function E(e,n,t){var r=_(8192,8192,null,e,n,null,t,null);switch(r.childFlags){case 1:r.children=B(),r.childFlags=2;break;case 16:r.children=[D(e)],r.childFlags=4}return r}function c(e){var n=e.props;if(n){var t=e.flags;481&t&&(void 0!==n.children&&w(e.children)&&j(e,n.children),void 0!==n.className&&(e.className=n.className||null,n.className=void 0)),void 0!==n.key&&(e.key=n.key,n.key=void 0),void 0!==n.ref&&(e.ref=8&t?S(e.ref,n.ref):n.ref,n.ref=void 0)}return e}function O(e){var n=-16385&e.flags,t=e.props;if(14&n&&!$(t)){var r=t;for(var o in t={},r)t[o]=r[o]}return 0==(8192&n)?new T(e.childFlags,e.children,e.className,n,e.key,t,e.ref,e.type):function(e){var n,t=e.children,r=e.childFlags;if(2===r)n=O(t);else if(12&r){n=[];for(var o=0,l=t.length;o<l;++o)n.push(O(t[o]))}return E(n,r,e.key)}(e)}function B(){return D("",null)}function R(e,n,t,r){for(var o=e.length;t<o;t++){var l=e[t];if(!C(l)){var i=r+I+t;if(f(l))R(l,n,0,i);else{if(d(l))l=D(l,i);else{var a=l.key,u=p(a)&&a[0]===I;(81920&l.flags||u)&&(l=O(l)),l.flags|=65536,$(a)||u?l.key=i:l.key=r+a}n.push(l)}}}}function W(e){switch(e){case"svg":return 32;case"input":return 64;case"select":return 256;case"textarea":return 128;case n:return 8192;default:return 1}}function j(e,n){var t,r=1;if(C(n))t=n;else if(d(n))r=16,t=n;else if(f(n)){for(var o=n.length,l=0;l<o;++l){var i=n[l];if(C(i)||f(i)){R(n,t=t||n.slice(0,l),l,"");break}if(d(i))(t=t||n.slice(0,l)).push(D(i,I+l));else{var a=i.key,u=0<(81920&i.flags),s=$(a),c=!s&&p(a)&&a[0]===I;u||s||c?(t=t||n.slice(0,l),(u||c)&&(i=O(i)),(s||c)&&(i.key=I+l),t.push(i)):t&&t.push(i),i.flags|=65536}}r=0===(t=t||n).length?1:8}else(t=n).flags|=65536,81920&n.flags&&(t=O(n)),r=2;return e.children=t,e.childFlags=r,e}function t(e,n){return x(n)?{data:e,event:n}:null}var e="http://www.w3.org/1999/xlink",r="http://www.w3.org/XML/1998/namespace",H={"xlink:actuate":e,"xlink:arcrole":e,"xlink:href":e,"xlink:role":e,"xlink:show":e,"xlink:title":e,"xlink:type":e,"xml:base":r,"xml:lang":r,"xml:space":r};function u(e){return{onClick:e,onDblClick:e,onFocusIn:e,onFocusOut:e,onKeyDown:e,onKeyPress:e,onKeyUp:e,onMouseDown:e,onMouseMove:e,onMouseUp:e,onSubmit:e,onTouchEnd:e,onTouchMove:e,onTouchStart:e}}var s=u(0),z=u(null),Q=u(true);function X(e,n,t){var r,o,l=t.$EV;n?(0===s[e]&&(z[e]=(r=e,o=function(e){var n="onClick"===r||"onDblClick"===r;if(n&&0!==e.button)e.stopPropagation();else{e.isDefaultPrevented=G,e.isPropagationStopped=K,e.stopPropagation=q;var t={dom:document};Object.defineProperty(e,"currentTarget",{configurable:true,get:function(){return t.dom}}),function(e,n,t,r,o){for(var l=n;!$(l);){if(t&&l.disabled)return;var i=l.$EV;if(i){var a=i[r];if(a&&(o.dom=l,a.event?a.event(a.data,e):a(e),e.cancelBubble))return}l=l.parentNode}}(e,e.target,n,r,t)}},document.addEventListener(m(r),o),o)),l||(l=t.$EV=u(null)),l[e]||++s[e],l[e]=n):l&&l[e]&&(0==--s[e]&&(document.removeEventListener(m(e),z[e]),z[e]=null),l[e]=null)}function q(){this.cancelBubble=true,this.immediatePropagationStopped||this.stopImmediatePropagation()}function G(){return this.defaultPrevented}function K(){return this.cancelBubble}function J(e,n,t){if(e[n]){var r=e[n];r.event?r.event(r.data,t):r(t)}else{var o=n.toLowerCase();e[o]&&e[o](t)}}function o(a,u){var e=function(e){var n=this.$V;if(n){var t=n.props||V,r=n.dom;if(p(a))J(t,a,e);else for(var o=0;o<a.length;++o)J(t,a[o],e);if(x(u)){var l=this.$V,i=l.props||V;u(i,r,false,l)}}};return Object.defineProperty(e,"wrapped",{configurable:false,enumerable:false,value:true,writable:false}),e}function Y(e,n,t){var r="$"+n,o=e[r];o&&o[1].wrapped||(o&&(e.removeEventListener.apply(e,o),e[r]=null),x(t)&&(e.addEventListener(n,t),e[r]=[n,t]))}function Z(e){return"checkbox"===e||"radio"===e}var ee=o("onInput",re),ne=o(["onClick","onChange"],re);function te(e){e.stopPropagation()}function re(e,n){var t=e.type,r=e.value,o=e.checked,l=e.multiple,i=e.defaultValue,a=!w(r);t&&t!==n.type&&n.setAttribute("type",t),w(l)||l===n.multiple||(n.multiple=l),w(i)||a||(n.defaultValue=i+""),Z(t)?(a&&(n.value=r),w(o)||(n.checked=o)):a&&n.value!==r?(n.defaultValue=r,n.value=r):w(o)||(n.checked=o)}te.wrapped=true;var oe=o("onChange",le);function le(e,n,t,r){var o=Boolean(e.multiple);w(e.multiple)||o===n.multiple||(n.multiple=o);var l=e.selectedIndex;if(-1===l&&(n.selectedIndex=-1),1!==r.childFlags){var i=e.value;"number"==typeof l&&-1<l&&n.options[l]&&(i=n.options[l].value),t&&w(i)&&(i=e.defaultValue),function e(n,t){if("option"===n.type)u=t,s=(a=n).props||V,(c=a.dom).value=s.value,s.value===u||f(u)&&-1!==u.indexOf(s.value)?c.selected=true:w(u)&&w(s.selected)||(c.selected=s.selected||false);else{var r=n.children,o=n.flags;if(4&o)e(r.$LI,t);else if(8&o)e(r,t);else if(2===n.childFlags)e(r,t);else if(12&n.childFlags)for(var l=0,i=r.length;l<i;++l)e(r[l],t)}var a,u,s,c}(r,i)}}var ie,ae,ue=o("onInput",ce),se=o("onChange");function ce(e,n,t){var r=e.value,o=n.value;if(w(r)){if(t){var l=e.defaultValue;w(l)||l===o||(n.defaultValue=l,n.value=l)}}else o!==r&&(n.defaultValue=r,n.value=r)}function fe(e,n,t,r,o,l){64&e?re(r,t):256&e?le(r,t,o,n):128&e&&ce(r,t,o),l&&(t.$V=n)}function de(e){return e.type&&Z(e.type)?!w(e.checked):!w(e.value)}function pe(e){e&&(x(e)?e(null):e.current&&(e.current=null))}function he(e,n,t){var r,o;e&&(x(e)?(r=n,o=e,t.push(function(){o(r)})):void 0!==e.current&&(e.current=n))}function ve(e,n){me(e),n&&P(e,n)}function me(e){var n,t=e.flags,r=e.children;if(481&t){n=e.ref;var o=e.props;pe(n);var l=e.childFlags;if(!$(o))for(var i=Object.keys(o),a=0,u=i.length;a<u;a++){var s=i[a];Q[s]&&X(s,null,e.dom)}12&l?ge(r):2===l&&me(r)}else r&&(4&t?(x(r.componentWillUnmount)&&r.componentWillUnmount(),pe(e.ref),r.$UN=true,me(r.$LI)):8&t?(!w(n=e.ref)&&x(n.onComponentWillUnmount)&&n.onComponentWillUnmount(F(e,true),e.props||V),me(r)):1024&t?ve(r,e.ref):8192&t&&12&e.childFlags&&ge(r))}function ge(e){for(var n=0,t=e.length;n<t;++n)me(e[n])}function ye(e){e.textContent=""}function be(e,n,t){ge(t),8192&n.flags?P(n,e):ye(e)}function ke(u,e,n,t,r,o,l){switch(u){case"children":case"childrenType":case"className":case"defaultValue":case"key":case"multiple":case"ref":break;case"autoFocus":t.autofocus=!!n;break;case"allowfullscreen":case"autoplay":case"capture":case"checked":case"controls":case"default":case"disabled":case"hidden":case"indeterminate":case"loop":case"muted":case"novalidate":case"open":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"selected":t[u]=!!n;break;case"defaultChecked":case"value":case"volume":if(o&&"value"===u)break;var i=w(n)?"":n;t[u]!==i&&(t[u]=i);break;case"style":!function(e,n,t){if(w(n))t.removeAttribute("style");else{var r,o,l=t.style;if(p(n))l.cssText=n;else if(w(e)||p(e))for(r in n)o=n[r],l.setProperty(r,o);else{for(r in n)(o=n[r])!==e[r]&&l.setProperty(r,o);for(r in e)w(n[r])&&l.removeProperty(r)}}}(e,n,t);break;case"dangerouslySetInnerHTML":var a=e&&e.__html||"",s=n&&n.__html||"";a!==s&&(w(s)||(c=t,f=s,(d=document.createElement("i")).innerHTML=f,d.innerHTML===c.innerHTML)||($(l)||(12&l.childFlags?ge(l.children):2===l.childFlags&&me(l.children),l.children=null,l.childFlags=1),t.innerHTML=s));break;default:Q[u]?k(e,n)||X(u,n,t):111===u.charCodeAt(0)&&110===u.charCodeAt(1)?function(e,n,t,r){var o,l,i=m(u);if(v(t)&&!$(t)){var a=t.event;k(n,t)||Y(r,i,(o=a,l=t,function(e){o(l.data,e)}))}else Y(r,i,t)}(0,e,n,t):w(n)?t.removeAttribute(u):r&&H[u]?t.setAttributeNS(H[u],u,n):t.setAttribute(u,n)}var c,f,d}function Ce(e,n,t,r,o){var l,i,a,u,s,c,f=false,d=0<(448&n);for(var p in d&&(f=de(t))&&(i=r,a=t,c=s=u=void 0,64&(l=n)?(c=i,Z(a.type)?(Y(c,"change",ne),Y(c,"click",te)):Y(c,"input",ee)):256&l?Y(i,"change",oe):128&l&&(s=a,Y(u=i,"input",ue),s.onChange&&Y(u,"change",se))),t)ke(p,null,t[p],r,o,f,null);d&&fe(n,e,r,t,true,f)}function xe(e,n,t){var r=$e(e.render(n,e.state,t)),o=t;return x(e.getChildContext)&&(o=S(t,e.getChildContext())),e.$CX=o,r}function we(e,n,t,r,o,l){var i=new n(t,r),a=i.$N=Boolean(n.getDerivedStateFromProps||i.getSnapshotBeforeUpdate);if(i.$SVG=o,i.$L=l,(e.children=i).$BS=false,i.context=r,i.props===V&&(i.props=t),a)i.state=b(i,t,i.state);else if(x(i.componentWillMount)){i.$BR=true,i.componentWillMount();var u=i.$PS;if(!$(u)){var s=i.state;if($(s))i.state=u;else for(var c in u)s[c]=u[c];i.$PS=null}i.$BR=false}return i.$LI=xe(i,t,r),i}function $e(e){return C(e)?e=B():d(e)?e=D(e,null):f(e)?e=E(e,0,null):16384&e.flags&&(e=O(e)),e}function Se(e,n,t,r,o,l){var i,a,u,s,c,f,d,p,h,v,m,g,y,b,k,C,x,w,$,S,N,U,P,F,M,L=e.flags|=16384;481&L?Ue(e,n,t,r,o,l):4&L?(g=n,y=t,b=r,k=o,C=l,Se((x=we(m=e,m.type,m.props||V,y,b,C)).$LI,g,x.$CX,b,k,C),Fe(m.ref,x,C)):8&L?(a=n,u=t,s=r,c=o,f=l,d=(i=e).type,p=i.props||V,h=i.ref,v=$e(32768&i.flags?d(p,h,u):d(p,u)),Se(i.children=v,a,u,s,c,f),Me(p,h,i,f)):512&L||16&L?Ne(e,n,o):8192&L?($=n,S=t,N=r,U=o,P=l,F=(w=e).children,12&(M=w.childFlags)&&0===F.length&&(M=w.childFlags=2,F=w.children=B()),2===M?Se(F,$,U,N,U,P):Pe(F,$,S,N,U,P)):1024&L&&function(e,n,t,r,o){Se(e.children,e.ref,n,false,null,o);var l=B();Ne(l,t,r),e.dom=l.dom}(e,t,n,o,l)}function Ne(e,n,t){var r=e.dom=document.createTextNode(e.children);$(n)||g(n,r,t)}function Ue(e,n,t,r,o,l){var i=e.flags,a=e.props,u=e.className,s=e.ref,c=e.children,f=e.childFlags;r=r||0<(32&i);var d,p=(d=e.type,r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d));if(e.dom=p,w(u)||""===u||(r?p.setAttribute("class",u):p.className=u),16===f)L(p,c);else if(1!==f){var h=r&&"foreignObject"!==e.type;2===f?(16384&c.flags&&(e.children=c=O(c)),Se(c,p,t,h,null,l)):8!==f&&4!==f||Pe(c,p,t,h,null,l)}$(n)||g(n,p,o),$(a)||Ce(e,i,a,p,r),he(s,p,l)}function Pe(e,n,t,r,o,l){for(var i=0,a=e.length;i<a;++i){var u=e[i];16384&u.flags&&(e[i]=u=O(u)),Se(u,n,t,r,o,l)}}function Fe(e,n,t){var r;he(e,n,t),x(n.componentDidMount)&&t.push((r=n,function(){r.componentDidMount()}))}function Me(e,n,t,r){var o,l,i;w(n)||(x(n.onComponentWillMount)&&n.onComponentWillMount(e),x(n.onComponentDidMount)&&r.push((o=n,l=t,i=e,function(){o.onComponentDidMount(F(l,true),i)})))}function Le(e,n,t,r,o,l,i){var a,u,s,c,f,d,p,h,v,m,g,y,b,k=n.flags|=16384;e.flags!==k||e.type!==n.type||e.key!==n.key||0!=(2048&k)?16384&e.flags?(u=n,s=t,c=r,f=o,d=i,me(a=e),0!=(u.flags&a.flags&2033)?(Se(u,null,c,f,null,d),p=s,h=u.dom,v=a.dom,p.replaceChild(h,v)):(Se(u,s,c,f,F(a,true),d),P(a,s))):Se(n,t,r,o,l,i):481&k?function(e,n,t,r,o,l){var i,a=e.dom,u=e.props,s=n.props,c=false,f=false;if(n.dom=a,r=r||0<(32&o),u!==s){var d=u||V;if((i=s||V)!==V)for(var p in(c=0<(448&o))&&(f=de(i)),i){var h=d[p],v=i[p];h!==v&&ke(p,h,v,a,r,f,e)}if(d!==V)for(var m in d)w(i[m])&&!w(d[m])&&ke(m,d[m],null,a,r,f,e)}var g,y,b=n.children,k=n.className;e.className!==k&&(w(k)?a.removeAttribute("class"):r?a.setAttribute("class",k):a.className=k),4096&o?(y=b,(g=a).textContent!==y&&(g.textContent=y)):Ve(e.childFlags,n.childFlags,e.children,b,a,t,r&&"foreignObject"!==n.type,null,e,l),c&&fe(o,n,a,i,false,f);var C=n.ref,x=e.ref;x!==C&&(pe(x),he(C,a,l))}(e,n,r,o,k,i):4&k?function(e,n,t,r,o,l,i){var a=n.children=e.children;if(!$(a)){a.$L=i;var u=n.props||V,s=n.ref,c=e.ref,f=a.state;if(!a.$N){if(x(a.componentWillReceiveProps)){if(a.$BR=true,a.componentWillReceiveProps(u,r),a.$UN)return;a.$BR=false}$(a.$PS)||(f=S(f,a.$PS),a.$PS=null)}Ie(a,f,u,t,r,o,false,l,i),c!==s&&(pe(c),he(s,a,i))}}(e,n,t,r,o,l,i):8&k?function(e,n,t,r,o,l,i){var a=true,u=n.props||V,s=n.ref,c=e.props,f=!w(s),d=e.children;if(f&&x(s.onComponentShouldUpdate)&&(a=s.onComponentShouldUpdate(c,u)),false!==a){f&&x(s.onComponentWillUpdate)&&s.onComponentWillUpdate(c,u);var p=n.type,h=$e(32768&n.flags?p(u,s,r):p(u,r));Le(d,h,t,r,o,l,i),n.children=h,f&&x(s.onComponentDidUpdate)&&s.onComponentDidUpdate(c,u)}else n.children=d}(e,n,t,r,o,l,i):16&k?(m=e,y=(g=n).children,b=m.dom,y!==m.children&&(b.nodeValue=y),g.dom=b):512&k?n.dom=e.dom:8192&k?function(e,n,t,r,o,l){var i=e.children,a=n.children,u=e.childFlags,s=n.childFlags,c=null;12&s&&0===a.length&&(s=n.childFlags=2,a=n.children=B());var f=0!=(2&s);if(12&u){var d=i.length;(8&u&&8&s||f||!f&&a.length>d)&&(c=F(i[d-1],false).nextSibling)}Ve(u,s,i,a,t,r,o,c,e,l)}(e,n,t,r,o,i):function(e,n,t,r){var o=e.ref,l=n.ref,i=n.children;if(Ve(e.childFlags,n.childFlags,e.children,i,o,t,false,null,e,r),n.dom=e.dom,o!==l&&!C(i)){var a=i.dom;U(o,a),N(l,a)}}(e,n,r,i)}function Ve(e,n,t,r,o,l,i,a,u,s){switch(e){case 2:switch(n){case 2:Le(t,r,o,l,i,a,s);break;case 1:ve(t,o);break;case 16:me(t),L(o,r);break;default:m=r,g=o,y=l,b=i,k=s,me(v=t),Pe(m,g,y,b,F(v,true),k),P(v,g)}break;case 1:switch(n){case 2:Se(r,o,l,i,a,s);break;case 1:break;case 16:L(o,r);break;default:Pe(r,o,l,i,a,s)}break;case 16:switch(n){case 16:h=o,(d=t)!==(p=r)&&(""!==d?h.firstChild.nodeValue=p:L(h,p));break;case 2:ye(o),Se(r,o,l,i,a,s);break;case 1:ye(o);break;default:ye(o),Pe(r,o,l,i,a,s)}break;default:switch(n){case 16:ge(t),L(o,r);break;case 2:be(o,u,t),Se(r,o,l,i,a,s);break;case 1:be(o,u,t);break;default:var c=0|t.length,f=0|r.length;0===c?0<f&&Pe(r,o,l,i,a,s):0===f?be(o,u,t):8===n&&8===e?function(e,n,t,r,o,l,i,a,u,s){var c,f,d=l-1,p=i-1,h=0,v=0,m=e[v],g=n[v];e:{for(;m.key===g.key;){if(16384&g.flags&&(n[v]=g=O(g)),Le(m,g,t,r,o,a,s),e[v]=g,d<++v||p<v)break e;m=e[v],g=n[v]}for(m=e[d],g=n[p];m.key===g.key;){if(16384&g.flags&&(n[p]=g=O(g)),Le(m,g,t,r,o,a,s),e[d]=g,p--,--d<v||p<v)break e;m=e[d],g=n[p]}}if(d<v){if(v<=p)for(f=(c=p+1)<i?F(n[c],true):a;v<=p;)16384&(g=n[v]).flags&&(n[v]=g=O(g)),++v,Se(g,t,r,o,f,s)}else if(p<v)for(;v<=d;)ve(e[v++],t);else{var y=v,b=v,k=d-v+1,C=p-v+1,x=new Int32Array(C-h+1);h=C+2;var w=k===l,$=false,S=0,N=0;if(i<4||(k|C)<32)for(h=y;h<=d;++h)if(m=e[h],N<C){for(v=b;v<=p;v++)if(g=n[v],m.key===g.key){if(x[v-b]=h+1,w)for(w=false;y<h;)ve(e[y++],t);v<S?$=true:S=v,16384&g.flags&&(n[v]=g=O(g)),Le(m,g,t,r,o,a,s),++N;break}!w&&p<v&&ve(m,t)}else w||ve(m,t);else{var U={};for(h=b;h<=p;++h)U[n[h].key]=h;for(h=y;h<=d;++h)if(m=e[h],N<C)if(void 0!==(v=U[m.key])){if(w)for(w=false;y<h;)ve(e[y++],t);g=n[v],x[v-b]=h+1,v<S?$=true:S=v,16384&g.flags&&(n[v]=g=O(g)),Le(m,g,t,r,o,a,s),++N}else w||ve(m,t);else w||ve(m,t)}if(w)be(t,u,e),Pe(n,t,r,o,a,s);else if($){var P=function(e){var n=0,t=0,r=0,o=0,l=0,i=0,a=0,u=e.length;for(Te<u&&(ie=new Int32Array(Te=u),ae=new Int32Array(u));t<u;++t)if(0!==(n=e[t])){if(e[r=ie[o]]<n){ae[t]=r,ie[++o]=t;continue}for(l=0,i=o;l<i;)e[ie[a=l+i>>1]]<n?l=a+1:i=a;n<e[ie[l]]&&(0<l&&(ae[t]=ie[l-1]),ie[l]=t)}l=t=o+1;var s=new Int32Array(l);for(i=ie[l-1];0<l--;)s[l]=i,i=ae[i];for(;0<t--;)ie[t]=0;return s}(x);for(v=P.length-1,h=C-1;0<=h;h--)0===x[h]?(16384&(g=n[S=h+b]).flags&&(n[S]=g=O(g)),Se(g,t,r,o,(c=S+1)<i?F(n[c],true):a,s)):v<0||h!==P[v]?M(g=n[S=h+b],t,(c=S+1)<i?F(n[c],true):a):v--}else if(N!==C)for(h=C-1;0<=h;h--)0===x[h]&&(16384&(g=n[S=h+b]).flags&&(n[S]=g=O(g)),Se(g,t,r,o,(c=S+1)<i?F(n[c],true):a,s))}}(t,r,o,l,i,c,f,a,u,s):function(e,n,t,r,o,l,i,a,u){for(var s,c,f=i<l?i:l,d=0;d<f;++d)s=n[d],c=e[d],16384&s.flags&&(s=n[d]=O(s)),Le(c,s,t,r,o,a,u),e[d]=s;if(l<i)for(d=f;d<i;++d)16384&(s=n[d]).flags&&(s=n[d]=O(s)),Se(s,t,r,o,a,u);else if(i<l)for(d=f;d<l;++d)ve(e[d],t)}(t,r,o,l,i,c,f,a,s)}}var d,p,h,v,m,g,y,b,k}function Ie(e,n,t,r,o,l,i,a,u){var s,c,f,d,p=e.state,h=e.props,v=Boolean(e.$N),m=x(e.shouldComponentUpdate);if(v&&(n=b(e,t,n!==p?S(p,n):n)),i||!m||m&&e.shouldComponentUpdate(t,n,o)){!v&&x(e.componentWillUpdate)&&e.componentWillUpdate(t,n,o),e.props=t,e.state=n,e.context=o;var g=null,y=xe(e,t,o);v&&x(e.getSnapshotBeforeUpdate)&&(g=e.getSnapshotBeforeUpdate(h,p)),Le(e.$LI,y,r,e.$CX,l,a,u),e.$LI=y,x(e.componentDidUpdate)&&(s=e,c=h,f=p,d=g,u.push(function(){s.componentDidUpdate(c,f,d)}))}else e.props=t,e.state=n,e.context=o}var Te=0;function l(e,n,t,r){var o=[],l=n.$V;a.v=true,w(l)?w(e)||(16384&e.flags&&(e=O(e)),Se(e,n,r,false,null,o),l=n.$V=e):w(e)?(ve(l,n),n.$V=null):(16384&e.flags&&(e=O(e)),Le(l,e,n,r,false,null,o),l=n.$V=e),0<o.length&&i(o),a.v=false,x(t)&&t(),x(y.renderComplete)&&y.renderComplete(l,n)}function _e(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=V),l(e,n,t,r)}"undefined"!=typeof document&&(document.body,Node.prototype.$EV=null,Node.prototype.$V=null);var Ae=[],De="undefined"!=typeof Promise?Promise.resolve().then.bind(Promise.resolve()):setTimeout.bind(window),Ee=false;function Oe(e,n,t,r){var o=e.$PS;if(x(n)&&(n=n(o?S(e.state,o):e.state,e.props,e.context)),w(o))e.$PS=n;else for(var l in n)o[l]=n[l];if(e.$BR)x(t)&&e.$L.push(t.bind(e));else{if(!a.v&&0===Ae.length)return void We(e,r,t);if(-1===Ae.indexOf(e)&&Ae.push(e),Ee||(Ee=true,De(Re)),x(t)){var i=e.$QU;i||(i=e.$QU=[]),i.push(t)}}}function Be(e){for(var n=e.$QU,t=0,r=n.length;t<r;++t)n[t].call(e);e.$QU=null}function Re(){var e;for(Ee=false;e=Ae.pop();)We(e,false,e.$QU?Be.bind(null,e):null)}function We(e,n,t){if(!e.$UN){if(n||!e.$BR){var r=e.$PS;e.$PS=null;var o=[];a.v=true,Ie(e,S(e.state,r),e.props,F(e.$LI,true).parentNode,e.context,e.$SVG,n,null,o),0<o.length&&i(o),a.v=false}else e.state=e.$PS,e.$PS=null;x(t)&&t.call(e)}}var je=function(e,n){this.state=null,this.$BR=false,this.$BS=true,this.$PS=null,this.$LI=null,this.$UN=false,this.$CX=null,this.$QU=null,this.$N=false,this.$L=null,this.$SVG=false,this.props=e||V,this.context=n||V};function He(e,n){var t={};if(e)for(var r in e)t[r]=e[r];if(n)for(var o in n)t[o]=n[o];return t}function ze(e,n,t){var r=arguments,o=e.flags,l=14&o?e.props&&e.props.children:e.children,i=arguments.length-2,a=e.className,u=e.key,s=e.ref;if(n?(void 0!==n.className&&(a=n.className),void 0!==n.ref&&(s=n.ref),void 0!==n.key&&(u=n.key),void 0!==n.children&&(l=n.children)):n={},1===i)l=t;else if(1<i)for(l=[];0<i--;)l[i]=r[i+2];return n.children=l,14&o?A(o,e.type,e.props||n?He(e.props,n):V,u,s):16&o?D(l):8192&o?E(1===i?[l]:l,0,u):c(_(o,e.type,a,null,1,He(e.props,n),u,s))}je.prototype.forceUpdate=function(e){this.$UN||Oe(this,{},e,true)},je.prototype.setState=function(e,n){this.$UN||this.$BS||Oe(this,e,n,false)},je.prototype.render=function(e,n,t){return null};var Qe="a runtime error occured! Use Inferno in development environment to find the error.";function Xe(e){throw e||(e=Qe),new Error("Inferno Error: "+e)}var qe={componentDidMount:1,componentDidUnmount:1,componentDidUpdate:1,componentWillMount:1,componentWillUnmount:1,componentWillUpdate:1,constructor:1,render:1,shouldComponentUpdate:1};function Ge(e,n){for(var t in n)e[t]=n[t];return e}function Ke(e,n){void 0===n&&(n={});for(var t=0,r=e.length;t<r;++t){var o=e[t];for(var l in o.mixins&&Ke(o.mixins,n),o)o.hasOwnProperty(l)&&"function"==typeof o[l]&&(n[l]||(n[l]=[])).push(o[l])}return n}function Je(l,i){return function(){for(var e,n=arguments,t=0,r=l.length;t<r;++t){var o=l[t].apply(this,n);i?e=i(e,o):o&&(e=o)}return e}}function Ye(e,n){if(n)for(var t in"object"==typeof n||Xe("Expected Mixin to return value to be an object or null."),e||(e={}),n)n.hasOwnProperty(t)&&(e.hasOwnProperty(t)&&Xe("Mixins return duplicate key "+t+" in their return values"),e[t]=n[t]);return e}function Ze(e){return en(e)||null===e}function en(e){return void 0===e}var nn={onComponentDidMount:1,onComponentDidUpdate:1,onComponentShouldUpdate:1,onComponentWillMount:1,onComponentWillUnmount:1,onComponentWillUpdate:1};function tn(e,n,t){var r,o,l=arguments,i=null,a=null,u=null,s=0,c=arguments.length-2;if(1===c)r=t;else if(1<c)for(r=[];0<c--;)r[c]=l[c+2];if("string"!=typeof e){if(s=2,en(r)||(n||(n={}),n.children=r),!Ze(n))for(var f in o={},n)"key"===f?a=n.key:"ref"===f?i=n.ref:1===nn[f]?(i||(i={}),i[f]=n[f]):o[f]=n[f];return A(s,e,o,a,i)}if(s=W(e),!Ze(n))for(var d in o={},n)"className"===d||"class"===d?u=n[d]:"key"===d?a=n.key:"children"===d&&en(r)?r=n.children:"ref"===d?i=n.ref:("contenteditable"===d&&(s|=4096),o[d]=n[d]);return 8192&s?E(1===c?[r]:r,0,a):_(s,e,u,r,0,o,a,i)}var rn="a runtime error occured! Use Inferno in development environment to find the error.";function on(e){return null===e}function ln(e){return void 0===e}function an(e,n,t,r,o,l){var i,a,u,s,c,f=e.childFlags,d=e.children,p=e.props,h=e.flags;if(1!==f){if(2===f)on(t)?Se(d,n,r,o,null,l):t=(t=sn(d,n,t,r,o,l))?t.nextSibling:null;else if(16===f)on(t)?n.appendChild(document.createTextNode(d)):1!==n.childNodes.length||3!==t.nodeType?n.textContent=d:t.nodeValue!==d&&(t.nodeValue=d),t=null;else if(12&f)for(var v=false,m=0,g=d.length;m<g;++m){var y=d[m];on(t)||v&&0<(16&y.flags)?Se(y,n,r,o,t,l):t=(t=sn(y,n,t,r,o,l))?t.nextSibling:null,v=0<(16&y.flags)}if(0==(8192&h))for(var b=null;t;)b=t.nextSibling,n.removeChild(t),t=b}else on(n.firstChild)||(i=n,a=p,Boolean(a&&a.dangerouslySetInnerHTML&&a.dangerouslySetInnerHTML.__html&&(u=i,s=a.dangerouslySetInnerHTML.__html,(c=document.createElement("i")).innerHTML=s,c.innerHTML===u.innerHTML)))||(n.textContent="",448&h&&(n.defaultValue=""))}function un(e,n,t){if(3!==t.nodeType)Ne(e,null,null),n.replaceChild(e.dom,t);else{var r=e.children;t.nodeValue!==r&&(t.nodeValue=r),e.dom=t}return e.dom}function sn(e,n,t,r,o,l){var i,a,u,s,c,f,d,p,h,v,m,g,y,b,k,C,x,w,$=e.flags|=16384;return 14&$?function(e,n,t,r,o,l,i){var a,u=e.type,s=e.ref,c=e.props||{};if(l){var f=we(e,u,c,r,o,i);a=sn(f.$LI,n,t,f.$CX,o,i),Fe(s,f,i)}else{var d=$e(u(c,r));a=sn(d,n,t,r,o,i),e.children=d,Me(c,s,e,i)}return a}(e,n,t,r,o,0<(4&$),l):481&$?(h=n,v=t,m=r,g=o,y=l,k=(p=e).props,C=p.className,x=p.flags,w=p.ref,g=g||0<(32&x),1!==v.nodeType||v.tagName.toLowerCase()!==p.type?(Ue(p,null,m,g,null,y),h.replaceChild(p.dom,v)):(p.dom=v,an(p,v,v.firstChild,m,g,y),on(k)||Ce(p,x,k,v,g),ln(b=C)||on(b)?""!==v.className&&v.removeAttribute("class"):g?v.setAttribute("class",C):v.className=C,he(w,v,y)),p.dom):16&$?un(e,n,t):512&$?e.dom=t:8192&$?(a=n,u=t,s=r,c=o,f=l,d=(i=e).children,2===i.childFlags?(un(d,a,u),d.dom):(an(i,a,u,s,c,f),function(e){for(var n,t;e;){if(2033&(n=e.flags))return e.dom;t=e.children,e=8192&n?2===e.childFlags?t:t[t.length-1]:4&n?t.$LI:t}return null}(d[d.length-1]))):(function(e){throw e||(e=rn),new Error("Inferno Error: "+e)}(),null)}var cn=Array.isArray;function fn(e){return hn(e)||pn(e)}function dn(e){return"string"==typeof e}function pn(e){return null===e}function hn(e){return void 0===e}function vn(){}var mn=function(){return vn},gn={any:mn,array:vn.isRequired=vn,arrayOf:mn,bool:vn,checkPropTypes:function(){return null},element:mn,func:vn,instanceOf:mn,node:mn,number:vn,object:vn,objectOf:mn,oneOf:mn,oneOfType:mn,shape:mn,string:vn,symbol:vn},yn={htmlFor:"for",onDoubleClick:"onDblClick"},bn=/[\-\:]([a-z])/g,kn=function(e){return e[1].toUpperCase()};function Cn(e,n){switch(e){case"animation-iteration-count":case"border-image-outset":case"border-image-slice":case"border-image-width":case"box-flex":case"box-flex-group":case"box-ordinal-group":case"column-count":case"fill-opacity":case"flex":case"flex-grow":case"flex-negative":case"flex-order":case"flex-positive":case"flex-shrink":case"flood-opacity":case"font-weight":case"grid-column":case"grid-row":case"line-clamp":case"line-height":case"opacity":case"order":case"orphans":case"stop-opacity":case"stroke-dasharray":case"stroke-dashoffset":case"stroke-miterlimit":case"stroke-opacity":case"stroke-width":case"tab-size":case"widows":case"z-index":case"zoom":return n;default:return n+"px"}}["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-constiant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","x-height","xlink:actuate","xlink:arcrole","xlink:href","xlink:role","xlink:show","xlink:title","xlink:type","xml:base","xmlns:xlink","xml:lang","xml:space"].forEach(function(e){var n=e.replace(bn,kn);yn[n]=e});var xn=/[A-Z]/g;y.reactStyles=true;var wn=[],$n={map:function(e,n,t){return fn(e)?e:(e=$n.toArray(e),t&&t!==e&&(n=n.bind(t)),e.map(n))},forEach:function(e,n,t){if(!fn(e)){e=$n.toArray(e),t&&t!==e&&(n=n.bind(t));for(var r=0,o=e.length;r<o;++r)n(pn(l=e[r])||false===l||true===l||hn(l)?null:e[r],r,e);var l}},count:function(e){return(e=$n.toArray(e)).length},only:function(e){if(1!==(e=$n.toArray(e)).length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){if(fn(e))return[];if(cn(e)){var n=[];return function e(n,t){for(var r=0,o=n.length;r<o;++r){var l=n[r];cn(l)?e(l,t):t.push(l)}return t}(e,n),n}return wn.concat(e)}};je.prototype.isReactComponent={};var Sn={date:true,"datetime-local":true,email:true,month:true,number:true,password:true,search:true,tel:true,text:true,time:true,url:true,week:true};if("undefined"!=typeof Event){var Nn=Event.prototype;Nn.persist||(Nn.persist=function(){})}var Un="undefined"==typeof window?global:window,Pn=void 0!==Un.Symbol,Fn=Pn?Un.Symbol.iterator:"",Mn=y.createVNode;function Ln(e,n){var t;for(t in e)if(!(t in n))return true;for(t in n)if(e[t]!==n[t])return true;return false}y.createVNode=function(e){var n=e.children,t=e.props;fn(t)&&(t=e.props={}),!Pn||pn(n)||"object"!=typeof n||cn(n)||"function"!=typeof n[Fn]||(e.children=function(e){for(var n,t=[];n=e.next(),t.push(n.value),!n.done;);return t}(n[Fn]())),!fn(n)&&fn(t.children)&&(t.children=n),14&e.flags&&dn(e.type)&&(e.flags=W(e.type),t&&c(e));var r=e.flags;448&r&&function(e,n){if(("input"===e||"textarea"===e)&&"radio"!==n.type&&n.onChange){var t,r=n.type&&n.type.toLowerCase();r&&!Sn[r]||(t="oninput"),t&&!n[t]&&(n[t]=n.onChange,n.onChange=void 0)}}(e.type,t),481&r&&(e.className&&(t.className=e.className),function(e){for(var n in e){var t=yn[n];if(t&&e[n]&&t!==n&&(e[t]=e[n],e[n]=void 0),y.reactStyles&&"style"===n){var r=e.style;if(r&&!dn(r)){var o={};for(var l in r){var i=r[l],a=l.replace(xn,"-$&").toLowerCase();o[a]="number"==typeof i?Cn(a,i):i}e.style=o}}}}(t)),Mn&&Mn(e)};var Vn=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),((n.prototype=Object.create(e&&e.prototype)).constructor=n).prototype.shouldComponentUpdate=function(e,n){return Ln(this.props,e)||Ln(this.state,n)},n}(je),In=function(e){function n(){e.apply(this,arguments)}return e&&(n.__proto__=e),((n.prototype=Object.create(e&&e.prototype)).constructor=n).prototype.getChildContext=function(){return this.props.context},n.prototype.render=function(e){return e.children},n}(je);function Tn(e,n,t,r){void 0===t&&(t=null),void 0===r&&(r=V),l(e,n,t,r);var o=n.$V;if(o&&14&o.flags)return o.children}if("undefined"!=typeof window&&void 0===window.React){var _n={Children:$n,Component:je,EMPTY_OBJ:V,Fragment:n,PropTypes:gn,PureComponent:Vn,_CI:we,_HI:$e,_M:Se,_MCCC:Fe,_ME:Ue,_MFCC:Me,_MP:Ce,_MR:he,_MT:Ne,__render:l,cloneElement:ze,cloneVNode:ze,createClass:function(e){var n=function(t){function e(e,n){t.call(this,e,n),function(e){for(var n in e){var t=e[n];"function"!=typeof t||t.__bound||qe[n]||((e[n]=t.bind(e)).__bound=true)}}(this),this.getInitialState&&(this.state=this.getInitialState())}return t&&(e.__proto__=t),((e.prototype=Object.create(t&&t.prototype)).constructor=e).prototype.replaceState=function(e,n){this.setState(e,n)},e.prototype.isMounted=function(){return null!==this.$LI&&!this.$UN},e}(je);return n.displayName=e.name||e.displayName||"Component",n.propTypes=e.propTypes,n.mixins=e.mixins&&Ke(e.mixins),n.getDefaultProps=e.getDefaultProps,Ge(n.prototype,e),e.statics&&Ge(n,e.statics),e.mixins&&function(e,n){for(var t in n)if(n.hasOwnProperty(t)){var r=n[t],o=void 0;o="getDefaultProps"===t?e:e.prototype,"function"==typeof r[0]?(a=r,u=void 0!==(i=o)[l=t]?a.concat(i[l]):a,i[l]="getDefaultProps"===l||"getInitialState"===l||"getChildContext"===l?Je(u,Ye):Je(u)):o[t]=r}var l,i,a,u}(n,Ke(e.mixins)),n.getDefaultProps&&(n.defaultProps=n.getDefaultProps()),n},createComponentVNode:A,createElement:tn,createFactory:function(e){return tn.bind(null,e)},createFragment:E,createPortal:function(e,n){return _(1024,1024,null,e,0,null,C(e)?null:e.key,n)},createRef:function(){return{current:null}},createRenderer:function(o){return function(e,n,t,r){o||(o=e),_e(n,o,t,r)}},createTextVNode:D,createVNode:_,directClone:O,findDOMNode:function(e){return e&&e.nodeType?e:!e||e.$UN?null:e.$LI?F(e.$LI,true):e.flags?F(e,true):null},findDOMfromVNode:F,forwardRef:function(e){return{render:e}},getFlagsForElementVnode:W,hydrate:function(e,n,t){var r,o=n.firstChild;if(on(o))_e(e,n,t);else{var l=[];for(on(r=e)||false===r||true===r||ln(r)||(o=sn(e,n,o,{},false,l));o&&(o=o.nextSibling);)n.removeChild(o);if(0<l.length)for(var i;void 0!==(i=l.shift());)i()}n.$V=e,"function"==typeof t&&t()},isValidElement:function(e){return false!=("object"==typeof e&&false===pn(e))&&0<(495&e.flags)},linkEvent:t,normalizeProps:c,options:y,render:Tn,rerender:Re,unmountComponentAtNode:function(e){return l(null,e,null,null),true},unstable_renderSubtreeIntoContainer:function(e,n,t,r){Tn(A(4,In,{children:n,context:e.context}),t,null);var o=n.children;return r&&r.call(o),o},version:"15.4.2"};window.React=_n,window.ReactDOM=_n}function An(e){return _(1,"li","TreeLeaf",D(e.children),0,null,null,null)}function Dn(e,n){return e!==n}function En(e){for(var n=e.data,t=n.children.length,r=new Array(t),o=0;o<t;o++){var l=n.children[o],i=l.id;l.container?r[o]=A(2,En,{data:l},i,{onComponentShouldUpdate:Dn}):r[o]=A(2,An,{children:i},i,{onComponentShouldUpdate:Dn})}return _(1,"ul","TreeNode",r,0,null,null,null)}function On(e){var n=e.data,t=n.time%10,r="border-radius:"+t+"px;background:rgba(0,0,0,"+(.5+t/10)+")";return _(1,"div","AnimBox",null,1,{"data-id":n.id,style:r},null,null)}function Bn(e,n){console.log("Clicked",e),n.stopPropagation()}function Rn(e){var n=e.children;return _(1,"td","TableCell",D(n),0,{onClick:t(n,Bn)},null,null)}function Wn(e){var n=e.data,t="TableRow";n.active&&(t="TableRow active");var r=n.props,o=r.length+1,l=new Array(o);l[0]=A(2,Rn,{children:"#"+n.id},null,{onComponentShouldUpdate:Dn});for(var i=1;i<o;i++)l[i]=A(2,Rn,{children:r[i-1]},null,{onComponentShouldUpdate:Dn});return _(1,"tr",t,l,0,{"data-id":n.id},null,null)}uibench.init("Inferno compat (simple)","15.4.2"),document.addEventListener("DOMContentLoaded",function(e){var r=document.querySelector("#App");uibench.run(function(e){var i,n,t;Tn(("table"===(t=(i=e).location)?n=function(e){for(var n=i.table.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=A(2,Wn,{data:l,children:l},l.id,{onComponentShouldUpdate:Dn})}return _(1,"table","Table",r,0,null,null,null)}():"anim"===t?n=function(e){for(var n=i.anim.items,t=n.length,r=new Array(t),o=0;o<t;o++){var l=n[o];r[o]=A(2,On,{data:l},l.id,{onComponentShouldUpdate:Dn})}return _(1,"div","Anim",r,0,null,null,null)}():"tree"===t&&(n=_(1,"div","Tree",A(2,En,{data:i.tree.root},null,{onComponentShouldUpdate:Dn}),2,null,null,null)),_(1,"div","Main",n,0,null,null,null)),r)},function(e){Tn(_(1,"pre",null,JSON.stringify(e,null," "),0,null,null,null),r)})})}();