"use strict";(self.webpackChunke_bankruptcy=self.webpackChunke_bankruptcy||[]).push([[94450],{20975:function(r,t,n){function e(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}n.d(t,{MT:function(){return u}}),n(25108);var o="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function u(r,t,n){var f;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(e(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(e(1));return n(u)(r,t)}if("function"!=typeof r)throw new Error(e(2));var c=r,p=t,s=[],w=s,l=!1;function y(){w===s&&(w=s.slice())}function h(){if(l)throw new Error(e(3));return p}function b(r){if("function"!=typeof r)throw new Error(e(4));if(l)throw new Error(e(5));var t=!0;return y(),w.push(r),function(){if(t){if(l)throw new Error(e(6));t=!1,y();var n=w.indexOf(r);w.splice(n,1),s=null}}}function a(r){if(!function(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}(r))throw new Error(e(7));if(void 0===r.type)throw new Error(e(8));if(l)throw new Error(e(9));try{l=!0,p=c(p,r)}finally{l=!1}for(var t=s=w,n=0;n<t.length;n++)(0,t[n])();return r}return a({type:i.INIT}),(f={dispatch:a,subscribe:b,getState:h,replaceReducer:function(r){if("function"!=typeof r)throw new Error(e(10));c=r,a({type:i.REPLACE})}})[o]=function(){var r,t=b;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(e(11));function n(){r.next&&r.next(h())}return n(),{unsubscribe:t(n)}}})[o]=function(){return this},r},f}}}]);