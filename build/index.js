!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=7)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(8),o=n(9),i=n(10),c=n(12);t.exports=function(t,e){return r(t)||o(t,e)||i(t,e)||c()}},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.coreData}()},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r),i=n(3),c=n.n(i),a=n(0),u=n(1),s=n(4),f=n(5),l=n(6);function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function b(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}Object(s.registerBlockType)("codesista/event-block",{title:Object(u.__)("Event Date","codesista"),icon:"calendar",category:"common",attributes:{title:{type:"string"},event_date:{type:"string"},nice_event_date:{type:"string"}},example:{attributes:{title:Object(u.__)("Event Date","codesista"),event_date:"2020-02-20 12:00",nice_event_date:"February 20, 2020 at 12:00am"}},edit:function(t){var e=t.className,n=t.attributes.event_date,r=t.setAttributes,o=Object(l.useEntityProp)("postType","post","meta"),i=c()(o,2),s=i[0],p=i[1];return Object(a.createElement)("div",{className:e},Object(a.createElement)(f.DateTimePicker,{currentDate:n,onChange:function(t){r({title:Object(u.__)("Event Date","codesista")}),p(b(b({},s),{},{codesista_event_date:moment(t).format("X"),codesista_nice_event_date:moment(t).format("dddd, MMMM D, YYYY [at] h:mma")})),r({event_date:moment(t).format("YYYY-MM-DD HH:mm")}),r({nice_event_date:moment(t).format("dddd, MMMM D, YYYY [at] h:mma")})},is12Hour:"true"}))},save:function(t){var e=t.className,n=t.attributes,r=n.title,o=n.nice_event_date;return Object(a.createElement)("div",{className:e},Object(a.createElement)("h2",null,r),o)}})},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}}},function(t,e,n){var r=n(11);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}}]);