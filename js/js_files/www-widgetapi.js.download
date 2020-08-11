(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var q;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function t(a,b){if(b)a:{for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];if(!(f in c))break a;c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
t("Symbol",function(a){function b(e){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c("jscomp_symbol_"+(e||"")+"_"+d++,e)}
function c(e,f){this.f=e;ba(this,"description",{configurable:!0,writable:!0,value:f})}
if(a)return a;c.prototype.toString=function(){return this.f};
var d=0;return b});
t("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ja(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},ra={};try{ra.__proto__=na;ma=ra.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=la;
function ta(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.D=b.prototype}
function ua(){this.m=!1;this.i=null;this.g=void 0;this.f=1;this.j=this.l=0;this.A=this.h=null}
function va(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}
ua.prototype.s=function(a){this.g=a};
function wa(a,b){a.h={ea:b,T:!0};a.f=a.l||a.j}
ua.prototype["return"]=function(a){this.h={"return":a};this.f=this.j};
function x(a,b,c){a.f=c;return{value:b}}
ua.prototype.v=function(a){this.f=a};
function Ba(a){a.l=2;a.j=3}
function Ca(a){a.l=0;a.h=null}
function Da(a){a.A=[a.h];a.l=0;a.j=0}
function Ea(a){var b=a.A.splice(0)[0];(b=a.h=a.h||b)?b.T?a.f=a.l||a.j:void 0!=b.v&&a.j<b.v?(a.f=b.v,a.h=null):a.f=a.j:a.f=0}
function Fa(a){this.f=new ua;this.g=a}
function Ga(a,b){va(a.f);var c=a.f.i;if(c)return Ja(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.f["return"]);
a.f["return"](b);return Ka(a)}
function Ja(a,b,c,d){try{var e=b.call(a.f.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.f.m=!1,e;var f=e.value}catch(g){return a.f.i=null,wa(a.f,g),Ka(a)}a.f.i=null;d.call(a.f,f);return Ka(a)}
function Ka(a){for(;a.f.f;)try{var b=a.g(a.f);if(b)return a.f.m=!1,{value:b.value,done:!1}}catch(c){a.f.g=void 0,wa(a.f,c)}a.f.m=!1;if(a.f.h){b=a.f.h;a.f.h=null;if(b.T)throw b.ea;return{value:b["return"],done:!0}}return{value:void 0,done:!0}}
function La(a){this.next=function(b){va(a.f);a.f.i?b=Ja(a,a.f.i.next,b,a.f.s):(a.f.s(b),b=Ka(a));return b};
this["throw"]=function(b){va(a.f);a.f.i?b=Ja(a,a.f.i["throw"],b,a.f.s):(wa(a.f,b),b=Ka(a));return b};
this["return"]=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function y(a,b){var c=new La(new Fa(b));sa&&a.prototype&&sa(c,a.prototype);return c}
t("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
function Ma(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
t("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
t("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ma(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),k=0;k<f&&g<e;)if(d[g++]!=b[k++])return!1;return k>=f}});
function Na(a,b){a instanceof String&&(a+="");var c=0,d={next:function(){if(c<a.length){var e=c++;return{value:b(e,a[e]),done:!1}}d.next=function(){return{done:!0,value:void 0}};
return d.next()}};
d[Symbol.iterator]=function(){return d};
return d}
t("Array.prototype.keys",function(a){return a?a:function(){return Na(this,function(b){return b})}});
t("Array.prototype.values",function(a){return a?a:function(){return Na(this,function(b,c){return c})}});
function z(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var Oa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)z(d,e)&&(a[e]=d[e])}return a};
t("Object.assign",function(a){return a||Oa});
t("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var k=this.i();try{g(k.resolve,k.reject)}catch(h){k.reject(h)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(k){k(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var k=this;this.h(function(){k.j()})}this.f.push(g)};
var e=fa.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var k=0;k<g.length;++k){var h=g[k];g[k]=null;try{h()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){h||(h=!0,l.call(k,m))}}
var k=this,h=!1;return{resolve:g(this.F),reject:g(this.j)}};
b.prototype.F=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.oa(g);else{a:switch(typeof g){case "object":var k=null!=g;break a;case "function":k=!0;break a;default:k=!1}k?this.A(g):this.l(g)}};
b.prototype.A=function(g){var k=void 0;try{k=g.then}catch(h){this.j(h);return}"function"==typeof k?this.ca(k,g):this.l(g)};
b.prototype.j=function(g){this.m(2,g)};
b.prototype.l=function(g){this.m(1,g)};
b.prototype.m=function(g,k){if(0!=this.g)throw Error("Cannot settle("+g+", "+k+"): Promise already settled in state"+this.g);this.g=g;this.h=k;this.s()};
b.prototype.s=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.oa=function(g){var k=this.i();g.G(k.resolve,k.reject)};
b.prototype.ca=function(g,k){var h=this.i();try{g.call(k,h.resolve,h.reject)}catch(l){h.reject(l)}};
b.prototype.then=function(g,k){function h(r,p){return"function"==typeof r?function(v){try{l(r(v))}catch(w){m(w)}}:p}
var l,m,n=new b(function(r,p){l=r;m=p});
this.G(h(g,l),h(k,m));return n};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.G=function(g,k){function h(){switch(l.g){case 1:g(l.h);break;case 2:k(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(h):this.f.push(h)};
b.resolve=d;b.reject=function(g){return new b(function(k,h){h(g)})};
b.race=function(g){return new b(function(k,h){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).G(k,h)})};
b.all=function(g){var k=u(g),h=k.next();return h.done?d([]):new b(function(l,m){function n(v){return function(w){r[v]=w;p--;0==p&&l(r)}}
var r=[],p=0;do r.push(void 0),p++,d(h.value).G(n(r.length-1),m),h=k.next();while(!h.done)})};
return b});
t("Object.setPrototypeOf",function(a){return a||sa});
t("Array.prototype.entries",function(a){return a?a:function(){return Na(this,function(b,c){return[b,c]})}});
t("WeakMap",function(a){function b(h){this.f=(k+=Math.random()+1).toString();if(h){h=u(h);for(var l;!(l=h.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(h){var l=typeof h;return"object"===l&&null!==h||"function"===l}
function e(h){if(!z(h,g)){var l=new c;ba(h,g,{value:l})}}
function f(h){var l=Object[h];l&&(Object[h]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var h=Object.seal({}),l=Object.seal({}),m=new a([[h,2],[l,3]]);if(2!=m.get(h)||3!=m.get(l))return!1;m["delete"](h);m.set(l,4);return!m.has(h)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var k=0;b.prototype.set=function(h,l){if(!d(h))throw Error("Invalid WeakMap key");e(h);if(!z(h,g))throw Error("WeakMap key fail: "+h);h[g][this.f]=l;return this};
b.prototype.get=function(h){return d(h)&&z(h,g)?h[g][this.f]:void 0};
b.prototype.has=function(h){return d(h)&&z(h,g)&&z(h[g],this.f)};
b.prototype["delete"]=function(h){return d(h)&&z(h,g)&&z(h[g],this.f)?delete h[g][this.f]:!1};
return b});
t("Map",function(a){function b(){var k={};return k.previous=k.next=k.head=k}
function c(k,h){var l=k.f;return ha(function(){if(l){for(;l.head!=k.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:h(l)};l=null}return{done:!0,value:void 0}})}
function d(k,h){var l=h&&typeof h;"object"==l||"function"==l?f.has(h)?l=f.get(h):(l=""+ ++g,f.set(h,l)):l="p_"+h;var m=k.g[l];if(m&&z(k.g,l))for(var n=0;n<m.length;n++){var r=m[n];if(h!==h&&r.key!==r.key||h===r.key)return{id:l,list:m,index:n,o:r}}return{id:l,list:m,index:-1,o:void 0}}
function e(k){this.g={};this.f=b();this.size=0;if(k){k=u(k);for(var h;!(h=k.next()).done;)h=h.value,this.set(h[0],h[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var k=Object.seal({x:4}),h=new a(u([[k,"s"]]));if("s"!=h.get(k)||1!=h.size||h.get({x:4})||h.set({x:4},"t")!=h||2!=h.size)return!1;var l=h.entries(),m=l.next();if(m.done||m.value[0]!=k||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(k,h){k=0===k?0:k;var l=d(this,k);l.list||(l.list=this.g[l.id]=[]);l.o?l.o.value=h:(l.o={next:this.f,previous:this.f.previous,head:this.f,key:k,value:h},l.list.push(l.o),this.f.previous.next=l.o,this.f.previous=l.o,this.size++);return this};
e.prototype["delete"]=function(k){k=d(this,k);return k.o&&k.list?(k.list.splice(k.index,1),k.list.length||delete this.g[k.id],k.o.previous.next=k.o.next,k.o.next.previous=k.o.previous,k.o.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(k){return!!d(this,k).o};
e.prototype.get=function(k){return(k=d(this,k).o)&&k.value};
e.prototype.entries=function(){return c(this,function(k){return[k.key,k.value]})};
e.prototype.keys=function(){return c(this,function(k){return k.key})};
e.prototype.values=function(){return c(this,function(k){return k.value})};
e.prototype.forEach=function(k,h){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,k.call(h,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
t("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)z(b,d)&&c.push([d,b[d]]);return c}});
t("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
t("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length,f=c||0;for(0>f&&(f=Math.max(f+e,0));f<e;f++){var g=d[f];if(g===b||Object.is(g,b))return!0}return!1}});
t("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ma(this,b,"includes").indexOf(b,c||0)}});
t("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
var A=this||self;function B(a,b){for(var c=a.split("."),d=b||A,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function Pa(){}
function Qa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Sa(a){var b=Qa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ta(a){return"function"==Qa(a)}
function Ua(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Va(a){return Object.prototype.hasOwnProperty.call(a,Wa)&&a[Wa]||(a[Wa]=++Xa)}
var Wa="closure_uid_"+(1E9*Math.random()>>>0),Xa=0;function Ya(a,b,c){return a.call.apply(a.bind,arguments)}
function Za(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function eb(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?eb=Ya:eb=Za;return eb.apply(null,arguments)}
var C=Date.now;function D(a,b){var c=a.split("."),d=A;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.D=b.prototype;a.prototype=new c;a.prototype.constructor=a}
function fb(a){return a}
;function gb(a){if(Error.captureStackTrace)Error.captureStackTrace(this,gb);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(gb,Error);gb.prototype.name="CustomError";var hb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function kb(a){return Array.prototype.concat.apply([],arguments)}
function lb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function mb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Sa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function nb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function ob(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function pb(a){var b=qb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function rb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function sb(a){var b=Qa(a);if("object"==b||"array"==b){if(Ta(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=sb(a[c]);return b}return a}
var tb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ub(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<tb.length;f++)c=tb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;var wb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},xb=/&/g,yb=/</g,zb=/>/g,Ab=/"/g,Bb=/'/g,Cb=/\x00/g,Db=/[\x00&<>"']/;var H;a:{var Eb=A.navigator;if(Eb){var Fb=Eb.userAgent;if(Fb){H=Fb;break a}}H=""}function I(a){return-1!=H.indexOf(a)}
;function Gb(){}
;var Hb=I("Opera"),Ib=I("Trident")||I("MSIE"),Qb=I("Edge"),Rb=I("Gecko")&&!(-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge"))&&!(I("Trident")||I("MSIE"))&&!I("Edge"),Sb=-1!=H.toLowerCase().indexOf("webkit")&&!I("Edge");function Tb(){var a=A.document;return a?a.documentMode:void 0}
var Ub;a:{var Vb="",Wb=function(){var a=H;if(Rb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Qb)return/Edge\/([\d\.]+)/.exec(a);if(Ib)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Sb)return/WebKit\/(\S+)/.exec(a);if(Hb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Wb&&(Vb=Wb?Wb[1]:"");if(Ib){var Xb=Tb();if(null!=Xb&&Xb>parseFloat(Vb)){Ub=String(Xb);break a}}Ub=Vb}var Yb=Ub,Zb;if(A.document&&Ib){var $b=Tb();Zb=$b?$b:parseInt(Yb,10)||void 0}else Zb=void 0;var ac=Zb;var bc=I("iPhone")&&!I("iPod")&&!I("iPad")||I("iPod"),cc=I("iPad");var dc={},ec=null;var J=window;function fc(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=gc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,hc[c])c=hc[c];else{c=String(c);if(!hc[c]){var f=/function\s+([^\(]+)/m.exec(c);hc[c]=f?f[1]:"[Anonymous]"}c=hc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return a}
function gc(a,b){b||(b={});b[ic(a)]=!0;var c=a.stack||"",d=a.Ca;d&&!b[ic(d)]&&(c+="\nCaused by: ",d.stack&&0==d.stack.indexOf(d.toString())||(c+="string"===typeof d?d:d.message+"\n"),c+=gc(d,b));return c}
function ic(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var hc={};function jc(a){this.f=a||{cookie:""}}
q=jc.prototype;q.isEnabled=function(){return navigator.cookieEnabled};
q.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Ja;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var k=c.U}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===k&&(k=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";k=0>k?"":0==k?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*k)).toUTCString();this.f.cookie=a+"="+b+c+g+k+d+(null!=e?";samesite="+e:"")};
q.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=wb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{U:0,path:b,domain:c});return d};
q.isEmpty=function(){return!this.f.cookie};
q.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=wb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var kc=new jc("undefined"==typeof document?null:document);function lc(a,b){this.width=a;this.height=b}
q=lc.prototype;q.clone=function(){return new lc(this.width,this.height)};
q.aspectRatio=function(){return this.width/this.height};
q.isEmpty=function(){return!(this.width*this.height)};
q.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
q.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
q.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function mc(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var g={};for(c=d=0;e=f[c];c++){var k=e.className,h;if(h="function"==typeof k.split)h=0<=hb(k.split(/\s+/),a);h&&(g[d++]=e)}g.length=d;return g}return f}
function nc(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function oc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var pc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function qc(a){return a?decodeURI(a):a}
function K(a){return qc(a.match(pc)[3]||null)}
function rc(a){var b=a.match(pc);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function sc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)sc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function tc(a){var b=[],c;for(c in a)sc(c,a[c],b);return b.join("&")}
var uc=/#|$/;function vc(a){var b=wc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function xc(){var a=[];vc(function(b){a.push(b)});
return a}
var wc={pa:"allow-forms",qa:"allow-modals",ra:"allow-orientation-lock",sa:"allow-pointer-lock",ta:"allow-popups",ua:"allow-popups-to-escape-sandbox",va:"allow-presentation",wa:"allow-same-origin",xa:"allow-scripts",ya:"allow-top-navigation",za:"allow-top-navigation-by-user-activation"},yc=nb(function(){return xc()});
function zc(){var a=nc(),b={};G(yc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Ac(){this.h=this.h;this.i=this.i}
Ac.prototype.h=!1;Ac.prototype.dispose=function(){this.h||(this.h=!0,this.M())};
Ac.prototype.M=function(){if(this.i)for(;this.i.length;)this.i.shift()()};function L(a,b){var c=void 0;return new (c||(c=Promise))(function(d,e){function f(h){try{k(b.next(h))}catch(l){e(l)}}
function g(h){try{k(b["throw"](h))}catch(l){e(l)}}
function k(h){h.done?d(h.value):(new c(function(l){l(h.value)})).then(f,g)}
k((b=b.apply(a,void 0)).next())})}
;var Bc=(new Date).getTime();function Cc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"chrome"!==a&&"app"!==a&&"devtools"!==a)throw Error("Invalid URI scheme in origin: "+
a);c="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function Dc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var r=g,p=0;64>p;p+=4)r[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=r[p-3]^r[p-8]^r[p-14]^r[p-16],r[p]=(n<<1|n>>>31)&4294967295;n=e[0];var v=e[1],w=e[2],F=e[3],Ra=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var ia=F^v&(w^F);var Aa=1518500249}else ia=v^w^F,Aa=1859775393;else 60>p?(ia=v&w|F&(v|w),Aa=2400959708):(ia=v^w^F,Aa=3395469782);ia=((n<<5|n>>>27)&4294967295)+ia+Ra+Aa+r[p]&4294967295;Ra=F;F=w;w=(v<<30|v>>>2)&4294967295;v=n;n=ia}e[0]=e[0]+n&4294967295;e[1]=e[1]+
v&4294967295;e[2]=e[2]+w&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Ra&4294967295}
function c(n,r){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],v=0,w=n.length;v<w;++v)p.push(n.charCodeAt(v));n=p}r||(r=n.length);p=0;if(0==l)for(;p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<r;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<r;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],r=8*m;56>l?c(k,56-l):c(k,64-(l-56));for(var p=63;56<=p;p--)f[p]=r&255,r>>>=8;b(f);for(p=r=0;5>p;p++)for(var v=24;0<=v;v-=8)n[r++]=e[p]>>v&255;return n}
for(var e=[],f=[],g=[],k=[128],h=1;64>h;++h)k[h]=0;var l,m;a();return{reset:a,update:c,digest:d,da:function(){for(var n=d(),r="",p=0;p<n.length;p++)r+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return r}}}
;function Ec(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],G(d,function(k){e.push(k)}),Fc(e.join(" "));
var f=[],g=[];G(c,function(k){g.push(k.key);f.push(k.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(k){e.push(k)});
a=Fc(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Fc(a){var b=Dc();b.update(a);return b.da().toLowerCase()}
;function Gc(a){var b=Cc(String(A.location.href)),c;(c=A.__SAPISID||A.__APISID||A.__OVERRIDE_SID)?c=!0:(c=new jc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?A.__SAPISID:A.__APISID,c||(c=new jc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(A.location.href);return d&&c&&b?[b,Ec(Cc(d),c,a||null)].join(" "):null}return null}
;function Hc(){this.g=[];this.f=-1}
Hc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Hc.prototype.get=function(a){return!!this.g[a]};
function Ic(a){-1==a.f&&(a.f=ib(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Jc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Jc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Kc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Lc(a){A.setTimeout(function(){throw a;},0)}
var Mc;function Nc(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!I("Presto")&&(a=function(){var e=nc();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),k="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=eb(function(h){if(("*"==k||h.origin==k)&&h.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,k)}}});
if("undefined"!==typeof a&&!I("Trident")&&!I("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.S;c.S=null;e()}};
return function(e){d.next={S:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function Oc(){this.g=this.f=null}
var Qc=new Jc(function(){return new Pc},function(a){a.reset()});
Oc.prototype.add=function(a,b){var c=Qc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Oc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Pc(){this.next=this.scope=this.f=null}
Pc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Pc.prototype.reset=function(){this.next=this.scope=this.f=null};function Rc(a,b){Sc||Tc();kd||(Sc(),kd=!0);ld.add(a,b)}
var Sc;function Tc(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);Sc=function(){a.then(md)}}else Sc=function(){var b=md;
!Ta(A.setImmediate)||A.Window&&A.Window.prototype&&!I("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(Mc||(Mc=Nc()),Mc(b)):A.setImmediate(b)}}
var kd=!1,ld=new Oc;function md(){for(var a;a=ld.remove();){try{a.f.call(a.scope)}catch(b){Lc(b)}Kc(Qc,a)}kd=!1}
;function nd(){this.g=-1}
;function od(){this.g=64;this.f=[];this.l=[];this.m=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(od,nd);od.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function pd(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],k=a.f[3],h=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=k^c&(g^k);var l=1518500249}else f=c^g^k,l=1859775393;else 60>e?(f=c&g|k&(c|g),l=2400959708):
(f=c^g^k,l=3395469782);f=(b<<5|b>>>27)+f+h+l+d[e]&4294967295;h=k;k=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+k&4294967295;a.f[4]=a.f[4]+h&4294967295}
od.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)pd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){pd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){pd(this,e);f=0;break}}this.h=f;this.j+=b}};
od.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;pd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var qd="StopIteration"in A?A.StopIteration:{message:"StopIteration",stack:""};function rd(){}
rd.prototype.next=function(){throw qd;};
rd.prototype.B=function(){return this};
function sd(a){if(a instanceof rd)return a;if("function"==typeof a.B)return a.B(!1);if(Sa(a)){var b=0,c=new rd;c.next=function(){for(;;){if(b>=a.length)throw qd;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function td(a,b){if(Sa(a))try{G(a,b,void 0)}catch(c){if(c!==qd)throw c;}else{a=sd(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==qd)throw c;}}}
function ud(a){if(Sa(a))return lb(a);a=sd(a);var b=[];td(a,function(c){b.push(c)});
return b}
;function vd(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof vd)for(c=wd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function wd(a){xd(a);return a.f.concat()}
q=vd.prototype;q.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||yd;xd(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function yd(a,b){return a===b}
q.isEmpty=function(){return 0==this.g};
q.clear=function(){this.h={};this.i=this.g=this.f.length=0};
q.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&xd(this),!0):!1};
function xd(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
q.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
q.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
q.forEach=function(a,b){for(var c=wd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
q.clone=function(){return new vd(this)};
q.B=function(a){xd(this);var b=0,c=this.i,d=this,e=new rd;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw qd;var f=d.f[b++];return a?f:d.h[f]};
return e};var zd=A.JSON.stringify;function M(a){this.f=0;this.m=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=Pa)try{var b=this;a.call(void 0,function(c){Ad(b,2,c)},function(c){Ad(b,3,c)})}catch(c){Ad(this,3,c)}}
function Bd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
Bd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var Cd=new Jc(function(){return new Bd},function(a){a.reset()});
function Dd(a,b,c){var d=Cd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function Ed(a){if(a instanceof M)return a;var b=new M(Pa);Ad(b,2,a);return b}
function Fd(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return Gd(this,Ta(a)?a:null,Ta(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function Hd(a,b){return Gd(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new Id(a);Rc(function(){Jd(this,b)},this)}};
function Jd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?Jd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):Kd(c),Ld(c,e,3,b)))}a.h=null}else Ad(a,3,b)}
function Md(a,b){a.g||2!=a.f&&3!=a.f||Nd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function Gd(a,b,c,d){var e=Dd(null,null,null);e.f=new M(function(f,g){e.g=b?function(k){try{var h=b.call(d,k);f(h)}catch(l){g(l)}}:f;
e.onRejected=c?function(k){try{var h=c.call(d,k);void 0===h&&k instanceof Id?g(k):f(h)}catch(l){g(l)}}:g});
e.f.h=a;Md(a,e);return e.f}
M.prototype.A=function(a){this.f=0;Ad(this,2,a)};
M.prototype.F=function(a){this.f=0;Ad(this,3,a)};
function Ad(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.F;if(d instanceof M){Md(d,Dd(e||Pa,f||null,a));var g=!0}else{if(d)try{var k=!!d.$goog_Thenable}catch(l){k=!1}else k=!1;if(k)d.then(e,f,a),g=!0;else{if(Ua(d))try{var h=d.then;if(Ta(h)){Od(d,h,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.m=c,a.f=b,a.h=null,Nd(a),3!=b||c instanceof Id||Pd(a,c))}}
function Od(a,b,c,d,e){function f(h){k||(k=!0,d.call(e,h))}
function g(h){k||(k=!0,c.call(e,h))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function Nd(a){a.l||(a.l=!0,Rc(a.s,a))}
function Kd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.s=function(){for(var a;a=Kd(this);)Ld(this,a,this.f,this.m);this.l=!1};
function Ld(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,Qd(b,c,d);else try{b.h?b.g.call(b.context):Qd(b,c,d)}catch(e){Rd.call(null,e)}Kc(Cd,b)}
function Qd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Pd(a,b){a.j=!0;Rc(function(){a.j&&Rd.call(null,b)})}
var Rd=Lc;function Id(a){gb.call(this,a)}
E(Id,gb);Id.prototype.name="cancel";function N(a){Ac.call(this);this.m=1;this.j=[];this.l=0;this.f=[];this.g={};this.s=!!a}
E(N,Ac);q=N.prototype;q.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.m;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.m=e+3;d.push(e);return e};
function Sd(a,b,c){var d=Td;if(a=d.g[a]){var e=d.f;(a=jb(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.J(a)}}
q.J=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.l)this.j.push(a),this.f[a+1]=Pa;else{if(c){var d=hb(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
q.P=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.s)for(e=0;e<c.length;e++){var g=c[e];Ud(this.f[g+1],this.f[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.J(c)}}return 0!=e}return!1};
function Ud(a,b,c){Rc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.g[a];b&&(G(b,this.J,this),delete this.g[a])}else this.f.length=0,this.g={}};
q.M=function(){N.D.M.call(this);this.clear();this.j.length=0};function Vd(a){this.f=a}
Vd.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,zd(b))};
Vd.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Vd.prototype.remove=function(a){this.f.remove(a)};function Wd(a){this.f=a}
E(Wd,Vd);function Xd(a){this.data=a}
function Yd(a){return void 0===a||a instanceof Xd?a:new Xd(a)}
Wd.prototype.set=function(a,b){Wd.D.set.call(this,a,Yd(b))};
Wd.prototype.g=function(a){a=Wd.D.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Wd.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Zd(a){this.f=a}
E(Zd,Wd);Zd.prototype.set=function(a,b,c){if(b=Yd(b)){if(c){if(c<C()){Zd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}Zd.D.set.call(this,a,b)};
Zd.prototype.g=function(a){var b=Zd.D.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())Zd.prototype.remove.call(this,a);else return b}};function $d(){}
;function ae(){}
E(ae,$d);ae.prototype.clear=function(){var a=ud(this.B(!0)),b=this;G(a,function(c){b.remove(c)})};function be(a){this.f=a}
E(be,ae);q=be.prototype;q.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
q.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
q.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeItem(a)};
q.B=function(a){var b=0,c=this.f,d=new rd;d.next=function(){if(b>=c.length)throw qd;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){this.f.clear()};
q.key=function(a){return this.f.key(a)};function ce(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(ce,be);function de(a,b){this.g=a;this.f=null;if(Ib&&!(9<=Number(ac))){ee||(ee=new vd);this.f=ee.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),ee.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(de,ae);var fe={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ee=null;function ge(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fe[b]})}
q=de.prototype;q.isAvailable=function(){return!!this.f};
q.set=function(a,b){this.f.setAttribute(ge(a),b);he(this)};
q.get=function(a){a=this.f.getAttribute(ge(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
q.remove=function(a){this.f.removeAttribute(ge(a));he(this)};
q.B=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new rd;d.next=function(){if(b>=c.length)throw qd;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
q.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);he(this)};
function he(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ie(a,b){this.g=a;this.f=b+"::"}
E(ie,ae);ie.prototype.set=function(a,b){this.g.set(this.f+a,b)};
ie.prototype.get=function(a){return this.g.get(this.f+a)};
ie.prototype.remove=function(a){this.g.remove(this.f+a)};
ie.prototype.B=function(a){var b=this.g.B(!0),c=this,d=new rd;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var je=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",je);function ke(a){var b=arguments;1<b.length?je[b[0]]=b[1]:1===b.length&&Object.assign(je,b[0])}
function P(a,b){return a in je?je[a]:b}
;var le=[];function me(a){le.forEach(function(b){return b(a)})}
function ne(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){oe(b),me(b)}}:a}
function oe(a){var b=B("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ke("ERRORS",b))}
function pe(a){var b=B("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ke("ERRORS",b))}
;var qe=0;D("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++qe});var re={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function se(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in re||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
se.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
se.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
se.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var qb=A.ytEventsEventsListeners||{};D("ytEventsEventsListeners",qb);var te=A.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",te);
function ue(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return pb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ua(e[4])&&Ua(d)&&rb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function ve(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in qb){var c=qb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?we()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete qb[b]}}))}
var we=nb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function xe(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=ue(a,b,c,d);if(!e){e=++te.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(k){k=new se(k);if(!oc(k.relatedTarget,function(h){return h==a}))return k.currentTarget=a,k.type=b,c.call(a,k)}:function(k){k=new se(k);
k.currentTarget=a;return c.call(a,k)};
g=ne(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),we()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);qb[e]=[a,b,c,g,d]}}}
;function ye(a,b){"function"===typeof a&&(a=ne(a));return window.setTimeout(a,b)}
function ze(a){"function"===typeof a&&(a=ne(a));return window.setInterval(a,250)}
;function Ae(a){var b=[];ob(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Be(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Array.isArray(b[f])?mb(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(h){if("q"!=e[0]){var k=Error("Error decoding URL component");k.params={key:e[0],value:e[1]};oe(k)}}}return b}
function Ce(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Be(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=tc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var De={};function Ee(a){return De[a]||(De[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Fe={},Ge=[],Td=new N,He={};function Ie(){for(var a=u(Ge),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Je(a,b){b||(b=document);var c=lb(b.getElementsByTagName("yt:"+a));var d="yt-"+a;var e=b||document;d=e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):mc(d,b);d=lb(d);return kb(c,d)}
function Q(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Ee(b)]:a.getAttribute("data-"+b):null;return c}
function Ke(a,b){Td.P.apply(Td,arguments)}
;function Le(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function R(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Me(a,b,c){Ne||(Ne={},xe(window,"message",eb(a.i,a)));Ne[c]=b}
Le.prototype.i=function(a){if(a.origin==R(this,"host")||a.origin==R(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Ne[b.id])a.s=!0,a.s&&(G(a.m,a.R,a),a.m.length=0),a.aa(b)}};
var Ne=null;function S(a){a=Oe(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Pe(a,b){var c=Oe(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Oe(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;function Qe(){}
function Re(a,b){return Se(a,0,b)}
;function Te(){}
ta(Te,Qe);function Se(a,b,c){isNaN(c)&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):ye(a,c||0)}
Te.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};
Te.f=void 0;Te.g=function(){Te.f||(Te.f=new Te)};
Te.g();var vf=A.ytPubsubPubsubInstance||new N,wf=A.ytPubsubPubsubSubscribedKeys||{},xf=A.ytPubsubPubsubTopicToKeys||{},yf=A.ytPubsubPubsubIsSynchronous||{};N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.J;N.prototype.publish=N.prototype.P;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",vf);D("ytPubsubPubsubTopicToKeys",xf);D("ytPubsubPubsubIsSynchronous",yf);D("ytPubsubPubsubSubscribedKeys",wf);var zf=window,T=zf.ytcsi&&zf.ytcsi.now?zf.ytcsi.now:zf.performance&&zf.performance.timing&&zf.performance.now&&zf.performance.timing.navigationStart?function(){return zf.performance.timing.navigationStart+zf.performance.now()}:function(){return(new Date).getTime()};var Af=Pe("initial_gel_batch_timeout",1E3),Bf=Math.pow(2,16)-1,Cf=null,Df=0,Ef=void 0,Ff=0,Gf=0,Hf=0,If=!0,Jf=A.ytLoggingTransportLogPayloadsQueue_||{};D("ytLoggingTransportLogPayloadsQueue_",Jf);var Kf=A.ytLoggingTransportGELQueue_||new Map;D("ytLoggingTransportGELQueue_",Kf);var Lf=A.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Lf);
function Mf(){window.clearTimeout(Ff);window.clearTimeout(Gf);Gf=0;Ef&&Ef.isReady()?(Nf(Kf),"log_event"in Jf&&Nf(Object.entries(Jf.log_event)),Kf.clear(),delete Jf.log_event):Of()}
function Of(){S("web_gel_timeout_cap")&&!Gf&&(Gf=ye(Mf,6E4));window.clearTimeout(Ff);var a=P("LOGGING_BATCH_TIMEOUT",Pe("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&If&&(a=Af);Ff=ye(Mf,a)}
function Nf(a){var b=Ef,c=Math.round(T());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=sb({context:Pf(b.f||Qf())});e.events=f;(f=Lf[d])&&Rf(e,d,f);delete Lf[d];Sf(e,c);Tf(b,"log_event",e,{retry:!0,onSuccess:function(){Df=Math.round(T()-c)}});
If=!1}}
function Sf(a,b){a.requestTimeMs=String(b);S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=P("EVENT_ID",void 0);if(c){var d=P("BATCH_CLIENT_COUNTER",void 0)||0;!d&&S("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Bf/2));d++;d>Bf&&(d=1);ke("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Cf&&Df&&S("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Cf,roundtripMs:String(Df)});Cf=c;Df=0}}
function Rf(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Uf=A.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Uf);function Vf(a){var b=Wf;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Xf(b),Yf(b));b.ca_type="image";a&&(b.bid=a);return b}
function Xf(a){var b={};b.dt=Bc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?J:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!J.navigator&&"unknown"!==typeof J.navigator.javaEnabled&&!!J.navigator.javaEnabled&&J.navigator.javaEnabled();J.screen&&(b.u_h=J.screen.height,b.u_w=J.screen.width,b.u_ah=J.screen.availHeight,b.u_aw=J.screen.availWidth,b.u_cd=J.screen.colorDepth);
J.navigator&&J.navigator.plugins&&(b.u_nplug=J.navigator.plugins.length);J.navigator&&J.navigator.mimeTypes&&(b.u_nmime=J.navigator.mimeTypes.length);return b}
function Yf(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var k=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.f.top;try{var h=(c||window).document,l="CSS1Compat"==h.compatMode?h.documentElement:h.body;var m=(new lc(l.clientWidth,l.clientHeight)).round()}catch(n){m=new lc(-12245933,-12245933)}h=m;m={};l=new Hc;A.SVGElement&&
A.document.createElementNS&&l.set(0);c=zc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);A.crypto&&A.crypto.subtle&&l.set(3);A.TextDecoder&&A.TextEncoder&&l.set(4);l=Ic(l);m.bc=l;m.bih=h.height;m.biw=h.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!J.WebGLRenderingContext,m}
var Wf=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Ae(Vf(a))});C();var Zf="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function $f(){if(!Zf)return null;var a=Zf();return"open"in a?a:null}
;var ag={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},bg="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
cg=!1;
function dg(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=a.match(pc)[1]||null,e=K(a);d&&e?(d=c,c=a.match(pc),d=d.match(pc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?K(c)==e&&(Number(c.match(pc)[4]||null)||null)==(Number(a.match(pc)[4]||null)||null):!0;d=S("web_ajax_ignore_global_headers_if_set");for(var f in ag)e=P(ag[f]),!e||!c&&K(a)||d&&void 0!==b[f]||(b[f]=e);if(c||!K(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||!K(a))&&(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:
null)&&(b["X-YouTube-Time-Zone"]=f);if(c||!K(a))b["X-YouTube-Ad-Signals"]=Ae(Vf(void 0));return b}
function eg(a){var b=window.location.search,c=K(a),d=qc(a.match(pc)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Be(b),f={};G(bg,function(g){e[g]&&(f[g]=e[g])});
return Ce(a,f||{},!1)}
function fg(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=gg(a,b);var d=hg(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&window.clearTimeout(f);var k=g.ok,h=function(l){l=l||{};var m=b.context||A;k?b.onSuccess&&b.onSuccess.call(m,l,g):b.onError&&b.onError.call(m,l,g);b.N&&b.N.call(m,l,g)};
"JSON"==(b.format||"JSON")&&(k||400<=g.status&&500>g.status)?g.json().then(h,function(){h(null)}):h(null)}});
b.X&&0<b.timeout&&(f=ye(function(){e||(e=!0,window.clearTimeout(f),b.X.call(b.context||A))},b.timeout))}else ig(a,b)}
function ig(a,b){var c=b.format||"JSON";a=gg(a,b);var d=hg(a,b),e=!1,f=jg(a,function(h){if(!e){e=!0;k&&window.clearTimeout(k);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=h.status&&500>h.status,r=500<=h.status&&600>h.status;if(l||n||r)m=kg(a,c,h,b.Da);if(l)a:if(h&&204==h.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=!!m}m=m||
{};n=b.context||A;l?b.onSuccess&&b.onSuccess.call(n,h,m):b.onError&&b.onError.call(n,h,m);b.N&&b.N.call(n,h,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
if(b.H&&0<b.timeout){var g=b.H;var k=ye(function(){e||(e=!0,f.abort(),window.clearTimeout(k),g.call(b.context||A,f))},b.timeout)}}
function gg(a,b){b.Ha&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.na;d&&(d[c]&&delete d[c],a=Ce(a,d||{},!0));return a}
function hg(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.u,g=P("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.Ga||K(a)&&!b.withCredentials&&K(a)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.u&&b.u[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Be(e),ub(e,f),e=b.Z&&"JSON"==b.Z?JSON.stringify(e):tc(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!cg&&c&&"POST"!=b.method&&
(cg=!0,oe(Error("AJAX request with postData should use POST")));return e}
function kg(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,pe(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?lg(a):null)e={},G(a.getElementsByTagName("*"),function(g){e[g.tagName]=mg(g)})}d&&ng(e);
return e}
function ng(a){if(Ua(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=new Gb;if(void 0===vb){var f=null;var g=A.trustedTypes;if(g&&g.createPolicy){try{f=g.createPolicy("goog#html",{createHTML:fb,createScript:fb,createScriptURL:fb})}catch(k){A.console&&A.console.error(k.message)}vb=f}else vb=f}(f=vb)&&f.createHTML(d);a[c]=e}else ng(a[b])}}
function lg(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function mg(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function jg(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&ne(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=$f();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=eg(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=dg(a,e))for(var l in e)h.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function og(){for(var a={},b=u(Object.entries(Be(P("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function pg(){return"INNERTUBE_API_KEY"in je&&"INNERTUBE_API_VERSION"in je}
function Qf(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),fa:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ga:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),ia:P("INNERTUBE_CONTEXT_HL",void 0),ha:P("INNERTUBE_CONTEXT_GL",void 0),ja:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",la:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ka:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1)}}
function Pf(a){a={client:{hl:a.ia,gl:a.ha,clientName:a.ga,clientVersion:a.innertubeContextClientVersion,configInfo:a.fa}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=P("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=P("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=P("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
P("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(a.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});a.client=Object.assign(a.client,og());return a}
function qg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ba||P("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Aa:b=Gc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),S("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
;function rg(a){a=Object.assign({},a);delete a.Authorization;var b=Gc();if(b){var c=new od;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Sa(b);void 0===c&&(c=0);if(!ec){ec={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));dc[f]=g;for(var k=0;k<g.length;k++){var h=g[k];void 0===ec[h]&&(ec[h]=k)}}}c=dc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],m=(f=e+1<b.length)?
b[e+1]:0;h=(g=e+2<b.length)?b[e+2]:0;k=l>>2;l=(l&3)<<4|m>>4;m=(m&15)<<2|h>>6;h&=63;g||(h=64,f||(m=64));d.push(c[k],c[l],c[m]||"",c[h]||"")}a.hash=d.join("")}return a}
function sg(a){a=rg(a);var b=new od;b.update(JSON.stringify(a,Object.keys(a).sort()));a=b.digest();b="";for(var c=0;c<a.length;c++)b+="0123456789ABCDEF".charAt(Math.floor(a[c]/16))+"0123456789ABCDEF".charAt(a[c]%16);return b}
;function tg(){var a=new ce;(a=a.isAvailable()?new ie(a,"yt.innertube"):null)||(a=new de("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Zd(a):null;this.g=document.domain||window.location.hostname}
tg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(zd(b))}catch(f){return}else e=escape(b);b=this.g;kc.set(""+a,e,{U:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
tg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=kc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
tg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;kc.remove(""+a,"/",void 0===b?"youtube.com":b)};var ug;function vg(){ug||(ug=new tg);return ug}
function wg(a,b,c,d){if(d)return null;d=vg().get("nextId",!0)||1;var e=vg().get("requests",!0)||{};e[d]={method:a,request:b,authState:rg(c),requestTime:Math.round(T())};vg().set("nextId",d+1,86400,!0);vg().set("requests",e,86400,!0);return d}
function xg(a){var b=vg().get("requests",!0)||{};delete b[a];vg().set("requests",b,86400,!0)}
function yg(a){var b=vg().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=rg(qg(!1));rb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Tf(a,d.method,e,{}));delete b[c]}}vg().set("requests",b,86400,!0)}}
;function zg(){}
;var Ag=bc||cc;function Bg(){var a=/WebKit\/([0-9]+)/.exec(H);return!!(a&&600<=parseInt(a[1],10))}
function Cg(){var a=/WebKit\/([0-9]+)/.exec(H);return!!(a&&602<=parseInt(a[1],10))}
;function Dg(){var a=Error.call(this,"Transaction was aborted");this.message=a.message;"stack"in a&&(this.stack=a.stack);Object.setPrototypeOf(this,Dg.prototype)}
ta(Dg,Error);function Eg(a){return a instanceof DOMException?"VersionError"===a.name:"DOMError"in self&&a instanceof DOMError?"VersionError"===a.name:a instanceof Object&&"message"in a?"An attempt was made to open a database using a lower version than the existing version."===a.message:!1}
;function U(a){return new M(function(b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){a.removeEventListener("success",e);a.removeEventListener("error",d)}
a.addEventListener("success",e);a.addEventListener("error",d)})}
;function Fg(a){this.f=a}
q=Fg.prototype;q.add=function(a,b,c){return W(X(this,[a],"readwrite"),a).add(b,c)};
q.clear=function(a){return W(X(this,[a],"readwrite"),a).clear()};
q.close=function(){this.f.close()};
q.count=function(a,b){return W(X(this,[a]),a).count(b)};
function Gg(a,b,c){a=a.f.createObjectStore(b,c);return new Hg(a)}
q["delete"]=function(a,b){return W(X(this,[a],"readwrite"),a)["delete"](b)};
q.get=function(a,b){return W(X(this,[a]),a).get(b)};
function X(a,b,c){a=a.f.transaction(b,void 0===c?"readonly":c);return new Ig(a,b)}
function Hg(a){this.f=a}
q=Hg.prototype;q.add=function(a,b){var c=b?this.f.add(a,b):this.f.add(a);return U(c)};
q.clear=function(){return U(this.f.clear()).then(function(){})};
q.count=function(a){a=a?this.f.count(a):this.f.count();return U(a)};
q["delete"]=function(a){return U(this.f["delete"](a))};
q.get=function(a){return U(this.f.get(a))};
q.index=function(a){return new Jg(this.f.index(a))};
q.getName=function(){return this.f.name};
function Kg(a,b,c){a=c?a.f.put(b,c):a.f.put(b);return U(a)}
function Ig(a){var b=this;this.f=a;this.g=new Map;this.done=new M(function(c,d){b.f.addEventListener("complete",function(){c()});
b.f.addEventListener("error",function(){d(b.f.error)});
b.f.addEventListener("abort",function(){d(new Dg)})})}
Ig.prototype.abort=function(){this.f.abort();return this.done};
function W(a,b){var c=a.f.objectStore(b),d=a.g.get(c);d||(d=new Hg(c),a.g.set(c,d));return d}
function Jg(a){this.f=a}
Jg.prototype.count=function(a){a=a?this.f.count(a):this.f.count();return U(a)};
Jg.prototype.get=function(a){return U(this.f.get(a))};
function Lg(a,b){this.request=a;this.f=b}
function Mg(a){return U(a).then(function(b){return null===b?null:new Lg(a,b)})}
Lg.prototype["delete"]=function(){return U(this.f["delete"]()).then(function(){})};
Lg.prototype.update=function(a){return U(this.f.update(a))};function Ng(a,b,c){function d(){m||(m=new Fg(f.result));return m}
var e=Ig;var f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var g=c.blocked,k=c.blocking,h=c.f,l=c.upgrade,m;l&&f.addEventListener("upgradeneeded",function(n){if(null===n.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");var r=d(),p=new e(f.transaction);l(r,n.oldVersion,n.newVersion,p)});
g&&f.addEventListener("blocked",function(){g()});
return U(f).then(function(n){k&&n.addEventListener("versionchange",function(){k(d())});
h&&n.addEventListener("close",function(){h()});
return d()})}
function Og(a,b,c){c=void 0===c?{}:c;return Ng(a,b,c)}
;var Pg,Qg,Rg=["getAll","getAllKeys","getKey","openKeyCursor"],Sg=["getAll","getAllKeys","getKey","openKeyCursor"];function Tg(){return new Promise(function(a){setTimeout(a,50)})}
function Ug(){return L(this,function b(){var c,d,e;return y(b,function(f){switch(f.f){case 1:if(Ag&&Bg()&&!Cg()&&!S("ytidb_allow_on_ios_safari_v8_and_v9")||!self.indexedDB)return f["return"](!1);Ba(f);d=!1;return x(f,Og("yt-idb-test-do-not-use",void 0,{blocking:function(){d=!0;c&&(c.close(),c=void 0)}}),5);
case 5:return c=f.g,e=Og("yt-idb-test-do-not-use",c.f.version+1).then(function(g){try{g.close()}catch(k){}}),x(f,Promise.race([e,
Tg()]),6);case 6:return f["return"](d);case 3:Da(f);if(c)try{c.close()}catch(g){}Ea(f);break;case 2:return Ca(f),f["return"](!1)}})})}
function Vg(){return void 0!==Pg?Ed(Pg):new M(function(a){Ug().then(function(b){Pg=b;a(b)})})}
function Wg(){return void 0!==Qg?Ed(Qg):Vg().then(function(a){if(!a)return!1;var b=u(Rg);for(a=b.next();!a.done;a=b.next())if(!IDBObjectStore.prototype[a.value])return!1;b=u(Sg);for(a=b.next();!a.done;a=b.next())if(!IDBIndex.prototype[a.value])return!1;return IDBObjectStore.prototype.getKey?!0:!1}).then(function(a){return Qg=a})}
;var Xg;function Yg(){function a(b){b.close();Xg=void 0}
Xg||(Xg=Hd(Og("YtIdbMeta",1,{blocking:a,upgrade:function(b,c){1>c&&Gg(b,"databases",{keyPath:"actualName"})}}),function(b){return Eg(b)?Og("YtIdbMeta",void 0,{blocking:a}):Fd(b)}));
return Xg}
function Zg(a){return Yg().then(function(b){return b.get("databases",a.actualName).then(function(c){if(c?a.actualName!==c.actualName||a.publicName!==c.publicName||a.userIdentifier!==c.userIdentifier||a.signedIn!==c.signedIn:1)return Kg(W(X(b,["databases"],"readwrite"),"databases"),a,void 0)})})}
function $g(a){return Yg().then(function(b){return b["delete"]("databases",a)})}
;function ah(a){try{var b={actualName:"LogsDataBase",publicName:"LogsDataBase",userIdentifier:void 0,signedIn:!1}}catch(c){return Fd(c)}return Hd(Zg(b).then(function(){return a(b)}),function(c){return Hd($g(b.actualName),function(){}).then(function(){return Fd(c)})})}
function bh(a,b){b=void 0===b?{}:b;return ah(function(c){return Og(c.actualName,a,b)})}
;var ch;function dh(){return L(this,function b(){return y(b,function(c){if(!ch)try{ch=bh(1,{upgrade:function(d,e){1>e&&(Gg(d,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0}).f.createIndex("newRequest",["status","authHash","timestamp"],{unique:!1}),Gg(d,"sapisid"))}})}catch(d){if(!Eg(d))return oe(d),c["return"](Promise.reject(d));
ch=bh()}return c["return"](ch)})})}
function eh(a){return L(this,function c(){var d,e,f,g,k;return y(c,function(h){switch(h.f){case 1:return x(h,dh(),2);case 2:return d=h.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),x(h,fh(),3);case 3:return f=h.g,g=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),authHash:f}),x(h,e.add(g),4);case 4:return k=h.g,h["return"](k)}})})}
function gh(){return L(this,function b(){var c,d,e,f,g,k,h,l;return y(b,function(m){switch(m.f){case 1:return x(m,fh(),2);case 2:return c=m.g,d=["NEW",c,0],e=["NEW",c,T()],f=IDBKeyRange.bound(d,e),x(m,dh(),3);case 3:g=m.g;k=X(g,["LogsRequestsStore"],"readwrite");var n=W(k,"LogsRequestsStore").index("newRequest");n=f?n.f.openCursor(f,"prev"):f?n.f.openCursor(f):n.f.openCursor();n=Mg(n);return x(m,n,4);case 4:h=m.g;l=void 0;if(null===h||void 0===h||!h.f.value){m.v(5);break}l=h.f.value;l.status="QUEUED";
return x(m,h.update(l),5);case 5:return m["return"](l)}})})}
function hh(a){return L(this,function c(){var d,e,f;return y(c,function(g){switch(g.f){case 1:return x(g,dh(),2);case 2:return d=g.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),x(g,e.get(a),3);case 3:return f=g.g,f.status="QUEUED",x(g,Kg(e,f),4);case 4:return g["return"](f)}})})}
function ih(a){return L(this,function c(){var d,e,f;return y(c,function(g){switch(g.f){case 1:return x(g,dh(),2);case 2:return d=g.g,e=W(X(d,["LogsRequestsStore"],"readwrite"),"LogsRequestsStore"),x(g,e.get(a),3);case 3:f=g.g;if(!f){g.v(4);break}f.status="NEW";f.sendCount+=1;return x(g,Kg(e,f),4);case 4:return g["return"](f)}})})}
function jh(){return L(this,function b(){var c,d;return y(b,function(e){if(1==e.f)return x(e,dh(),2);if(3!=e.f)return c=e.g,x(e,c.count("LogsRequestsStore"),3);d=e.g;return e["return"](!d)})})}
function kh(a){return L(this,function c(){var d;return y(c,function(e){if(1==e.f)return x(e,dh(),2);d=e.g;return e["return"](d["delete"]("LogsRequestsStore",a))})})}
function fh(){return L(this,function b(){var c;return y(b,function(d){if(1==d.f){zg.f||(zg.f=new zg);var e={};var f=Gc([]);f&&(e.Authorization=f,e["X-Goog-AuthUser"]=P("SESSION_INDEX",0),"INNERTUBE_HOST_OVERRIDE"in je||(e["X-Origin"]=window.location.origin),S("pageid_as_header_web")&&"DELEGATED_SESSION_ID"in je&&(e["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));e=Ed(e);return x(d,e,2)}c=d.g;return d["return"](sg(c))})})}
;var lh=Pe("network_polling_interval",3E4);function mh(){this.i=0;this.f=window.navigator.onLine;nh(this);oh(this)}
function ph(){mh.f||(mh.f=new mh);return mh.f}
function qh(a){var b=rh,c=sh;th(a);(new M(function(d){a.g=d})).then(function(){b();
c&&(a.h=c)})}
function oh(a){window.addEventListener("online",function(){a.f=!0;a.g&&a.g()})}
function nh(a){window.addEventListener("offline",function(){a.f=!1;a.h&&a.h()})}
function th(a){a.i||(uh(a),window.navigator.onLine&&a.g&&a.g())}
function uh(a){a.i=Re(function(){window.navigator.onLine?(!1===a.f&&oe(Error("NetworkStatusManager missed online event.")),a.f=!0,a.g&&a.g()):(!0===a.f&&oe(Error("NetworkStatusManager missed offline event.")),a.f=!1,a.h&&a.h());uh(a)},lh)}
;var vh=Pe("networkless_throttle_timeout")||100,wh=Pe("networkless_retry_attempts")||1,xh=0;function yh(a,b){b=void 0===b?{}:b;zh().then(function(c){if(c&&!S("networkless_bypass_write")){var d={url:a,options:b,timestamp:T(),status:"NEW",sendCount:0};eh(d).then(function(e){d.id=e;e=ph();e.f?Ah(d):qh(e)})["catch"](function(e){Ah(d);
oe(e)})}else ig(a,b)})}
function rh(){xh||(xh=Se(function(){Ah();xh=0;rh()},1,vh))}
function sh(){var a=xh;if(!isNaN(a)){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}xh=0}
function Ah(a){L(this,function c(){var d=this,e,f,g,k;return y(c,function(h){switch(h.f){case 1:e=d;if(!a)return x(h,gh(),6);if(!a.id){h.v(3);break}return x(h,hh(a.id),5);case 5:a=h.g;h.v(3);break;case 6:if(a=h.g){h.v(3);break}return x(h,jh(),8);case 8:return(f=h.g)&&sh(),h["return"]();case 3:if(Bh(a))g=a.options.onError?a.options.onError:function(){},k=a.options.onSuccess?a.options.onSuccess:function(){},a.options.onError=function(l,m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&
a.id?a.sendCount<wh?x(p,ih(a.id),6):x(p,kh(a.id),2):p.v(2);
2!=p.f&&(xh||qh(ph()),g(l,m));g(l,m);p.f=0})})},a.options.onSuccess=function(l,m){return L(e,function r(){return y(r,function(p){if(1==p.f)return a&&a.id?x(p,kh(a.id),2):p.v(2);
k(l,m);p.f=0})})},ig(a.url,a.options);
else if(pe(Error("Networkless Logging: Stored logs request expired age limit")),a.id)return x(h,kh(a.id),0);h.v(0)}})})}
function Bh(a){a=a.timestamp;return 2592E6<=T()-a?!1:!0}
function zh(){return S("networkless_logging")?2===Pe("networkless_ytidb_version")?Wg():Vg():Ed(!1)}
;function Ch(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ja(u(c)))}
ta(Ch,Error);function Dh(a){var b=this;this.f=null;a?this.f=a:pg()&&(this.f=Qf());Re(function(){yg(b)},5E3)}
Dh.prototype.isReady=function(){!this.f&&pg()&&(this.f=Qf());return!!this.f};
function Tf(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&pe(new Ch("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var e=new Ch("innertube xhrclient not ready",b,c,d);oe(e);e.sampleWeight=0;throw e;}var f={headers:{"Content-Type":"application/json"},method:"POST",u:c,Z:"JSON",H:function(){d.H()},
X:d.H,onSuccess:function(n,r){if(d.onSuccess)d.onSuccess(r)},
W:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,r){if(d.onError)d.onError(r)},
Ia:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0},g="";(e=a.f.ja)&&(g=e);var k=a.f.la||!1,h=qg(k,g,d);Object.assign(f.headers,h);f.headers.Authorization&&!g&&(f.headers["x-origin"]=window.location.origin);e="/youtubei/"+a.f.innertubeApiVersion+"/"+b;var l={alt:"json"};a.f.ka&&f.headers.Authorization||(l.key=a.f.innertubeApiKey);var m=Ce(""+g+e,l||{},!0);zh().then(function(n){if(d.retry&&S("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=g){if(S("networkless_gel")&&!n||!S("networkless_gel"))var r=wg(b,
c,h,k);if(r){var p=f.onSuccess,v=f.W;f.onSuccess=function(w,F){xg(r);p(w,F)};
c.W=function(w,F){xg(r);v(w,F)}}}try{S("use_fetch_for_op_xhr")?fg(m,f):S("networkless_gel")&&d.retry?(f.method="POST",yh(m,f)):(f.method="POST",f.u||(f.u={}),ig(m,f))}catch(w){if("InvalidAccessError"==w.name)r&&(xg(r),r=0),pe(Error("An extension is blocking network request."));
else throw w;}r&&Re(function(){yg(a)},5E3)})}
;var Eh=[{V:function(a){return"Cannot read property '"+a.key+"'"},
O:{TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,
groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]}],Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}]}},{V:function(a){return"Cannot call '"+a.key+"'"},
O:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,
groups:["key"]}]}}];var Fh=new Set,Gh=0,Hh=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Ih(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.l=this.f=this.g=null;this.j=Va(this);this.h=0;this.s=!1;this.m=[];this.i=null;this.A=c;this.F={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?rc(a.src):"https://www.youtube.com"),this.g=new Le(b),c||(b=Jh(this,a),this.l=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+Va(this.f)),Fe[this.f.id]=this,window.postMessage){this.i=new N;Kh(this);b=R(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in He)Lh(this,e)}}
q=Y.prototype;q.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
q.ma=function(){return this.f};
q.aa=function(a){this.I(a.event,a)};
q.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);Mh(this,a);return this};
function Lh(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.A==c[0]&&Mh(a,d)}}
q.destroy=function(){this.f.id&&(Fe[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.l){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.l,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Ne&&(Ne[this.j]=null);this.g=null;a=this.f;for(var c in qb)qb[c][0]==a&&ve(c);this.l=this.f=null};
q.K=function(){return{}};
function Nh(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.s?a.R(b):a.m.push(b)}
q.I=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.P(a,c);Ke(this.A+"."+a,c)}};
function Jh(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var g=d[e].value;null!=g&&""!=g&&"null"!=g&&c.setAttribute(d[e].name,g)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+R(a.g,"title"));(d=R(a.g,"width"))&&c.setAttribute("width",d);(d=R(a.g,"height"))&&c.setAttribute("height",d);var k=a.K();k.enablejsapi=
window.postMessage?1:0;window.location.host&&(k.origin=window.location.protocol+"//"+window.location.host);k.widgetid=a.j;window.location.href&&G(["debugjs","debugcss"],function(h){var l=window.location.href;var m=l.search(uc);b:{var n=0;for(var r=h.length;0<=(n=l.indexOf(h,n))&&n<m;){var p=l.charCodeAt(n-1);if(38==p||63==p)if(p=l.charCodeAt(n+r),!p||61==p||38==p||35==p)break b;n+=r+1}n=-1}if(0>n)l=null;else{r=l.indexOf("&",n);if(0>r||r>m)r=m;n+=h.length+1;l=decodeURIComponent(l.substr(n,r-n).replace(/\+/g,
" "))}null!==l&&(k[h]=l)});
c.src=R(a.g,"host")+a.L()+"?"+tc(k);return c}
q.Y=function(){this.f&&this.f.contentWindow?this.R({event:"listening"}):window.clearInterval(this.h)};
function Kh(a){Me(a.g,a,a.j);a.h=ze(eb(a.Y,a));xe(a.f,"load",eb(function(){window.clearInterval(this.h);this.h=ze(eb(this.Y,this))},a))}
function Mh(a,b){a.F[b]||(a.F[b]=!0,Nh(a,"addEventListener",[b]))}
q.R=function(a){a.id=this.j;a.channel="widget";var b=zd(a),c=this.g,d=rc(this.f.src||"");var e=0==d.indexOf("https:")?[d]:c.f?[d.replace("http:","https:")]:c.h?[d]:[d,d.replace("http:","https:")];if(this.f.contentWindow)for(var f=0;f<e.length;f++)try{this.f.contentWindow.postMessage(b,e[f])}catch(Ha){if(Ha.name&&"SyntaxError"==Ha.name){if(!(Ha.message&&0<Ha.message.indexOf("target origin ''"))){var g=void 0,k=void 0,h=Ha;k=void 0===k?{}:k;k.name=P("INNERTUBE_CONTEXT_CLIENT_NAME",1);k.version=P("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=k||{},m="WARNING";m=void 0===m?"ERROR":m;g=void 0===g?!1:g;if(h){if(S("console_log_js_exceptions")){var n=h,r=[];r.push("Name: "+n.name);r.push("Message: "+n.message);n.hasOwnProperty("params")&&r.push("Error Params: "+JSON.stringify(n.params));r.push("File name: "+n.fileName);r.push("Stacktrace: "+n.stack);window.console.log(r.join("\n"),n)}if((window&&window.yterr||g)&&!(5<=Gh)&&0!==h.sampleWeight){var p=void 0,v=h,w=l,F=fc(v),Ra=F.message||"Unknown Error",ia=F.name||"UnknownError",
Aa=F.lineNumber||"Not available",Th=F.fileName||"Not available",Uh=F.stack||v.f||"Not available";if(v.hasOwnProperty("args")&&v.args&&v.args.length)for(var oa=0,Jb=0;Jb<v.args.length;Jb++){var O=v.args[Jb],xa="params."+Jb;oa+=xa.length;if(O)if(Array.isArray(O)){for(var Vh=w,Uc=oa,$a=0;$a<O.length&&!(O[$a]&&(Uc+=Ih($a,O[$a],xa,Vh),500<Uc));$a++);oa=Uc}else if("object"===typeof O){var Kb=void 0,Wh=w,Vc=oa;for(Kb in O)if(O[Kb]&&(Vc+=Ih(Kb,O[Kb],xa,Wh),500<Vc))break;oa=Vc}else w[xa]=String(JSON.stringify(O)).substring(0,
500),oa+=w[xa].length;else w[xa]=String(JSON.stringify(O)).substring(0,500),oa+=w[xa].length;if(500<=oa)break}else if(v.hasOwnProperty("params")&&v.params){var Lb=v.params;if("object"===typeof v.params){var Ue=0;for(p in Lb)if(Lb[p]){var Ve="params."+p,We=String(JSON.stringify(Lb[p])).substr(0,500);w[Ve]=We;Ue+=Ve.length+We.length;if(500<Ue)break}}else w.params=String(JSON.stringify(Lb)).substr(0,500)}navigator.vendor&&!w.hasOwnProperty("vendor")&&(w.vendor=navigator.vendor);var Wc={message:Ra,name:ia,
lineNumber:Aa,fileName:Th,stack:Uh,params:w},Xe=Number(v.columnNumber);isNaN(Xe)||(Wc.lineNumber=Wc.lineNumber+":"+Xe);for(var pa,ya=Wc,Ye=u(Eh),Xc=Ye.next();!Xc.done;Xc=Ye.next()){var Yc=Xc.value;if(Yc.O[ya.name])for(var Ze=u(Yc.O[ya.name]),Zc=Ze.next();!Zc.done;Zc=Ze.next()){var $e=Zc.value,Mb=ya.message.match($e.regexp);if(Mb){ya.params["error.original"]=Mb[0];for(var $c=$e.groups,af={},Ia=0;Ia<$c.length;Ia++)af[$c[Ia]]=Mb[Ia+1],ya.params["error."+$c[Ia]]=Mb[Ia+1];ya.message=Yc.V(af);break}}}pa=
ya;window.yterr&&"function"===typeof window.yterr&&window.yterr(pa);if(!(Fh.has(pa.message)||0<=pa.stack.indexOf("/YouTubeCenter.js")||0<=pa.stack.indexOf("/mytube.js"))){if(S("kevlar_gel_error_routing")){var Nb=void 0,bf=m,ca=pa;a:{for(var cf=u(Hh),ad=cf.next();!ad.done;ad=cf.next()){var df=H;if(df&&0<=df.toLowerCase().indexOf(ad.value.toLowerCase())){var ef=!0;break a}}ef=!1}if(!ef){var ab={stackTrace:ca.stack};ca.fileName&&(ab.filename=ca.fileName);var da=ca.lineNumber&&ca.lineNumber.split?ca.lineNumber.split(":"):
[];0!==da.length&&(1!==da.length||isNaN(Number(da[0]))?2!==da.length||isNaN(Number(da[0]))||isNaN(Number(da[1]))||(ab.lineNumber=Number(da[0]),ab.columnNumber=Number(da[1])):ab.lineNumber=Number(da[0]));var bd={level:"ERROR_LEVEL_UNKNOWN",message:ca.message,errorClassName:ca.name};"ERROR"===bf?bd.level="ERROR_LEVEL_ERROR":"WARNING"===bf&&(bd.level="ERROR_LEVEL_WARNNING");var Xh={isObfuscated:!0,browserStackInfo:ab},ff={pageUrl:window.location.href,kvPairs:[]},cd=ca.params;if(cd)for(var gf=u(Object.keys(cd)),
dd=gf.next();!dd.done;dd=gf.next()){var hf=dd.value;ff.kvPairs.push({key:"client."+hf,value:String(cd[hf])})}var Yh={errorMetadata:ff,stackTrace:Xh,logMessage:bd};Nb=void 0===Nb?{}:Nb;var jf=Dh;P("ytLoggingEventsDefaultDisabled",!1)&&Dh==Dh&&(jf=null);var Zh=jf,V=Nb;V=void 0===V?{}:V;var bb={};bb.eventTimeMs=Math.round(V.timestamp||T());bb.clientError=Yh;var $h=String;if(V.timestamp)var kf=-1;else{var lf=B("_lact",window);if(null==lf)var mf=-1;else{var ai=lf;mf=Math.max(C()-ai,0)}kf=mf}bb.context=
{lastActivityMs:$h(kf)};if(S("log_sequence_info_on_gel_web")&&V.ba){var bi=bb.context,cb=V.ba;Uf[cb]=cb in Uf?Uf[cb]+1:0;bi.sequence={index:Uf[cb],groupKey:cb};V.Fa&&delete Uf[V.ba]}var ci=bb,Ob=V.Ea,nf=Zh,ed="";if(Ob){var Pb=Ob,fd={};Pb.videoId?fd.videoId=Pb.videoId:Pb.playlistId&&(fd.playlistId=Pb.playlistId);Lf[Ob.token]=fd;ed=Ob.token}var gd=Kf.get(ed)||[];Kf.set(ed,gd);gd.push(ci);nf&&(Ef=new nf);var di=Pe("web_logging_max_batch")||100,of=T();gd.length>=di?Mf():10<=of-Hf&&(Of(),Hf=of);Mf()}}var hd,
za=pa,db=za.params||{},qa={na:{a:"logerror",t:"jserror",type:za.name,msg:za.message.substr(0,250),line:za.lineNumber,level:m,"client.name":db.name},u:{url:P("PAGE_NAME",window.location.href),file:za.fileName},method:"POST"};db.version&&(qa["client.version"]=db.version);if(qa.u){za.stack&&(qa.u.stack=za.stack);for(var pf=u(Object.keys(db)),id=pf.next();!id.done;id=pf.next()){var qf=id.value;qa.u["client."+qf]=db[qf]}if(hd=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(var rf=u(Object.keys(hd)),
jd=rf.next();!jd.done;jd=rf.next()){var sf=jd.value;qa.u[sf]=hd[sf]}var tf=P("SERVER_NAME",void 0),uf=P("SERVER_VERSION",void 0);tf&&uf&&(qa.u["server.name"]=tf,qa.u["server.version"]=uf)}ig(P("ECATCHER_REPORT_HOST","")+"/error_204",qa);Fh.add(pa.message);Gh++}}}}}else throw Ha;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Oh(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Ph(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.C={};this.playerInfo={}}
ta(Z,Y);q=Z.prototype;q.L=function(){return"/embed/"+R(this.g,"videoId")};
q.K=function(){var a=R(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=R(this.g,"embedConfig")){if(Ua(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
q.aa=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ua(a))for(var c in a)this.C[c]=a[c];break;case "infoDelivery":Qh(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.C={};Rh(this,a.apiInterface);Qh(this,a);break;default:this.I(b,a)}};
function Qh(a,b){if(Ua(b))for(var c in b)a.playerInfo[c]=b[c]}
function Rh(a,b){G(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(C()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Oh(c)?this[c]=function(){this.playerInfo={};
this.C={};Nh(this,c,arguments);return this}:Ph(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Nh(this,c,arguments);
return this})},a)}
q.getVideoEmbedCode=function(){var a=parseInt(R(this.g,"width"),10),b=parseInt(R(this.g,"height"),10),c=R(this.g,"host")+this.L();Db.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(xb,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(yb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(zb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(Ab,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(Bb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(Cb,"&#0;")));return'<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'};
q.getOptions=function(a){return this.C.namespaces?a?this.C[a].options||[]:this.C.namespaces||[]:[]};
q.getOption=function(a,b){if(this.C.namespaces&&a&&b)return this.C[a][b]};
function Sh(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");b&&(b={videoId:b,width:Q(a,"width"),height:Q(a,"height")},new Z(a,b))}}
;function ei(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
ta(ei,Y);ei.prototype.L=function(){return"/embed/"+R(this.g,"videoId")};
ei.prototype.K=function(){return{player:0,thumb_width:R(this.g,"thumbWidth"),thumb_height:R(this.g,"thumbHeight"),thumb_align:R(this.g,"thumbAlign")}};
ei.prototype.I=function(a,b){Y.prototype.I.call(this,a,b?b.info:void 0)};
function fi(a){if("iframe"!=a.tagName.toLowerCase()){var b=Q(a,"videoid");if(b){b={videoId:b,events:{},width:Q(a,"width"),height:Q(a,"height"),thumbWidth:Q(a,"thumb-width"),thumbHeight:Q(a,"thumb-height"),thumbAlign:Q(a,"thumb-align")};var c=Q(a,"onclick");c&&(b.events.onClick=c);new ei(a,b)}}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return Fe[a]});
D("YT.scan",Ie);D("YT.subscribe",function(a,b,c){Td.subscribe(a,b,c);He[a]=!0;for(var d in Fe)Lh(Fe[d],a)});
D("YT.unsubscribe",function(a,b,c){Sd(a,b,c)});
D("YT.Player",Z);D("YT.Thumbnail",ei);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.ma;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;Ge.push(function(a){a=Je("player",a);G(a,Sh)});
Ge.push(function(){var a=Je("thumbnail");G(a,fi)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Ie();var gi=A.onYTReady;gi&&gi();var hi=A.onYouTubeIframeAPIReady;hi&&hi();var ii=A.onYouTubePlayerAPIReady;ii&&ii();}).call(this);
