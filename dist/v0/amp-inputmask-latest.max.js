(self.AMP=self.AMP||[]).push({m:0,v:"2109221842260",n:"amp-inputmask",ev:"0.1",l:true,f:(function(AMP,_){(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";var _inputmask=require("./inputmask.dependencyLib"),_inputmask2=require("./inputmask"),_inputmaskDate=require("./inputmask.date.extensions");function factory(e){var n=e.ownerDocument,t=n.defaultView,i=(0,_inputmask.factory)(t,n),a=(0,_inputmask2.factory)(i,t,n,void 0);return(0,_inputmaskDate.factory)(a),a}(window.AMP=window.AMP||[]).push(function(e){(e.dependencies=e.dependencies||{}).inputmaskFactory=factory});

},{"./inputmask":4,"./inputmask.date.extensions":2,"./inputmask.dependencyLib":3}],2:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function factory(e){var t=e.dependencyLib,r={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return i(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return i(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return i(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return i(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return i(Date.prototype.getHours.call(this),2)}],hhh:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["[01][0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return i(Date.prototype.getHours.call(this),2)}],HHH:["[0-9]+",Date.prototype.setHours,"hours",Date.prototype.getHours],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["[0-5][0-9]",Date.prototype.setMinutes,"minutes",function(){return i(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["[0-5][0-9]",Date.prototype.setSeconds,"seconds",function(){return i(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return i(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return i(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]"],tt:["[ap]m"],T:["[AP]"],TT:["[AP]M"],Z:[""],o:[""],S:[""]},o={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function a(e){if(!e.tokenizer){var t=[];for(var o in r)-1===t.indexOf(o[0])&&t.push(o[0]);e.tokenizer="("+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function n(t,o,n,i){for(var s,u="";s=a(n).exec(t);){if(void 0===o)if(r[s[0]])u+="("+r[s[0]][0]+")";else switch(s[0]){case"[":u+="(";break;case"]":u+=")?";break;default:u+=e.escapeRegex(s[0])}else if(r[s[0]])if(!0!==i&&r[s[0]][3])u+=r[s[0]][3].call(o.date);else r[s[0]][2]?u+=o["raw"+r[s[0]][2]]:u+=s[0];else u+=s[0]}return u}function i(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}function s(e,t,o){var n,i,s,u={date:new Date(1,0,1)},l=e;function p(e){var t=e.replace(/[^0-9]/g,"0");if(t!=e){var r=e.replace(/[^0-9]/g,""),a=(o.min&&o.min[n]||e).toString(),i=(o.max&&o.max[n]||e).toString();t=r+(r<a.slice(0,r.length)?a.slice(r.length):r>i.slice(0,r.length)?i.slice(r.length):t.toString().slice(r.length))}return t}function y(e,t,r){e[n]=p(t),e["raw"+n]=t,void 0!==s&&s.call(e.date,"month"==n?parseInt(e[n])-1:e[n])}if("string"==typeof l){for(;i=a(o).exec(t);){var c=l.slice(0,i[0].length);r.hasOwnProperty(i[0])&&(r[i[0]][0],n=r[i[0]][2],s=r[i[0]][1],y(u,c)),l=l.slice(c.length)}return u}if(l&&"object"===_typeof(l)&&l.hasOwnProperty("date"))return l}function u(e){var t=e.inputmask;e.inputmask.remove(),e.addEventListener("input",function r(){0==e.value.length&&(e.removeEventListener("input",r),t.mask(e))})}return e.extendAliases({datetime:{mask:function(e){return r.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=o[e.inputFormat]||e.inputFormat,e.displayFormat=o[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=o[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[\[\]]/,""),e.regex=n(e.inputFormat,void 0,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},postValidation:function(e,t,r,o,a){o.min=s(o.min,o.inputFormat,o),o.max=s(o.max,o.inputFormat,o);var i=r,u=s(e.join(""),o.inputFormat,o);if(i&&u.date.getTime()==u.date.getTime()){var l=(i=function(e,t){return(!isFinite(e.rawday)||"29"==e.day&&!isFinite(e.rawyear)||e.year.length<4||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)&&t}(u,i))&&function(e,t){var r=!0;if(!e.rawyear||!e.rawmonth||!e.rawday)return!1;if(t.min){if(e.rawyear){var o=e.rawyear.replace(/[^0-9]/g,"");r=t.min.year.substr(0,o.length)<=o}e.year===e.rawyear&&t.min.date.getTime()==t.min.date.getTime()&&(r=t.min.date.getTime()<=e.date.getTime())}return r&&t.max&&t.max.date.getTime()==t.max.date.getTime()&&(r=t.max.date.getTime()>=e.date.getTime()),r}(u,o);if(t&&l&&r.pos!==t)return{buffer:n(o.inputFormat,u,o),refreshFromBuffer:{start:t,end:r.pos}}}var p=e.length,y=a.tests[p];if(!y)return i;var c=y.map(function(e){return e.match}).filter(function(e){return/^[-\/]$/.test(e.def)});if(1===c.length){var d=c[0].def;return{buffer:e.concat([d]),refreshFromBuffer:{start:t,end:e.length+1}}}return i},onKeyDown:function(r,o,n,s,l,p){var y=this;if(r.ctrlKey&&r.keyCode===e.keyCode.RIGHT){for(var c,d=new Date,m="";c=a(s).exec(s.inputFormat);)"d"===c[0].charAt(0)?m+=i(d.getDate(),c[0].length):"m"===c[0].charAt(0)?m+=i(d.getMonth()+1,c[0].length):"yyyy"===c[0]?m+=d.getFullYear().toString():"y"===c[0].charAt(0)&&(m+=i(d.getYear(),c[0].length));y.inputmask._valueSet(m),t(y).trigger("setvalue")}var f=p.begin,h=p.end;if(r.keyCode===e.keyCode.BACKSPACE||r.keyCode===e.keyCode.DELETE||(r.metaKey||r.ctrlKey)&&r.keyCode==="X".charCodeAt(0)){var g=y.value.length,D=y.selectionStart!=g&&y.selectionEnd!=g;if(g>0&&D){u(y);var v=h-f;if(r.keyCode===e.keyCode.BACKSPACE){var F=0==v?f-1:f;y.value=l.slice(0,F)+l.slice(h),y.setSelectionRange(F,F)}else if(r.keyCode===e.keyCode.DELETE){var M=0==v?h+1:h;y.value=l.slice(0,f)+l.slice(M),y.setSelectionRange(f,f)}}}else if(p.begin!=p.end){if((r.metaKey||r.ctrlKey)&&r.keyCode==="V".charCodeAt(0))return void u(y);if(r.metaKey||r.ctrlKey)return;var S=String.fromCharCode(r.keyCode),T=r.shiftKey?S.toLocaleUpperCase():S.toLocaleLowerCase();/\s/.test(T)||(u(y),setTimeout(function(){y.value=l.slice(0,f)+T+l.slice(h),y.setSelectionRange(f+1,f+1)},0))}},onUnMask:function(e,t,r){return n(r.outputFormat,s(e,r.inputFormat,r),r,!0)},casing:function(e,t,r,o){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},insertMode:!1,shiftPositions:!1}}),e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.factory=factory;

},{}],3:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function factory(e,t){function n(e){return null!=e&&e===e.window}function o(t){return t instanceof e.Element}function i(n){return n instanceof i?n:this instanceof i?void(null!=n&&n!==e&&(this[0]=n.nodeName?n:void 0!==n[0]&&n[0].nodeName?n[0]:t.querySelector(n),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new i(n)}return i.prototype={on:function(e,t){if(o(this[0]))for(var n=function(e,n){r.addEventListener?r.addEventListener(e,t,!1):r.attachEvent&&r.attachEvent("on"+e,t),i[e]=i[e]||{},i[e][n]=i[e][n]||[],i[e][n].push(t)},i=this[0].eventRegistry,r=this[0],a=e.split(" "),l=0;l<a.length;l++){var f=a[l].split(".");n(f[0],f[1]||"global")}return this},off:function(e,t){if(o(this[0]))for(var n=function(e,t,n){if(e in r==!0)if(a.removeEventListener?a.removeEventListener(e,n,!1):a.detachEvent&&a.detachEvent("on"+e,n),"global"===t)for(var o in r[e])r[e][o].splice(r[e][o].indexOf(n),1);else r[e][t].splice(r[e][t].indexOf(n),1)},i=function(e,n){var o,i,a=[];if(e.length>0)if(void 0===t)for(o=0,i=r[e][n].length;o<i;o++)a.push({ev:e,namespace:n&&n.length>0?n:"global",handler:r[e][n][o]});else a.push({ev:e,namespace:n&&n.length>0?n:"global",handler:t});else if(n.length>0)for(var l in r)for(var f in r[l])if(f===n)if(void 0===t)for(o=0,i=r[l][f].length;o<i;o++)a.push({ev:l,namespace:f,handler:r[l][f][o]});else a.push({ev:l,namespace:f,handler:t});return a},r=this[0].eventRegistry,a=this[0],l=e.split(" "),f=0;f<l.length;f++)for(var s=l[f].split("."),c=i(s[0],s[1]),u=0,v=c.length;u<v;u++)n(c[u].ev,c[u].namespace,c[u].handler);return this},trigger:function(e){if(o(this[0]))for(var n=this[0].eventRegistry,r=this[0],a="string"==typeof e?e.split(" "):[e.type],l=0;l<a.length;l++){var f=a[l].split("."),s=f[0],c=f[1]||"global";if(void 0!==t&&"global"===c){var u,v,p={bubbles:!0,cancelable:!0,detail:arguments[1]};if(t.createEvent){try{u=["change","input","click"].indexOf(s)>-1?new Event(s,p):new CustomEvent(s,p)}catch(e){(u=t.createEvent("CustomEvent")).initCustomEvent(s,p.bubbles,p.cancelable,p.detail)}e.type&&i.extend(u,e),r.dispatchEvent(u)}else(u=t.createEventObject()).eventType=s,u.detail=arguments[1],e.type&&i.extend(u,e),r.fireEvent("on"+u.eventType,u)}else if(void 0!==n[s])if(arguments[0]=arguments[0].type?arguments[0]:i.Event(arguments[0]),"global"===c)for(var y in n[s])for(v=0;v<n[s][y].length;v++)n[s][y][v].apply(r,arguments);else for(v=0;v<n[s][c].length;v++)n[s][c][v].apply(r,arguments)}return this}},i.isFunction=function(e){return"function"==typeof e},i.noop=function(){},i.isArray=Array.isArray,i.inArray=function(e,t,n){return null==t?-1:function(e,t){for(var n=0,o=e.length;n<o;n++)if(e[n]===t)return n;return-1}(t,e)},i.valHooks=void 0,i.isPlainObject=function(e){return"object"===_typeof(e)&&!e.nodeType&&!n(e)&&!(e.constructor&&!Object.hasOwnProperty.call(e.constructor.prototype,"isPrototypeOf"))},i.extend=function(){var e,t,n,o,r,a,l=arguments[0]||{},f=1,s=arguments.length,c=!1;for("boolean"==typeof l&&(c=l,l=arguments[f]||{},f++),"object"===_typeof(l)||i.isFunction(l)||(l={}),f===s&&(l=this,f--);f<s;f++)if(null!=(e=arguments[f]))for(t in e)n=l[t],l!==(o=e[t])&&(c&&o&&(i.isPlainObject(o)||(r=i.isArray(o)))?(r?(r=!1,a=n&&i.isArray(n)?n:[]):a=n&&i.isPlainObject(n)?n:{},l[t]=i.extend(c,a,o)):void 0!==o&&(l[t]=o));return l},i.each=function(e,t){var o=0;if(function(e){var t="length"in e&&e.length,o=_typeof(e);return"function"!==o&&!n(e)&&(!(1!==e.nodeType||!t)||"array"===o||0===t||"number"==typeof t&&t>0&&t-1 in e)}(e))for(var i=e.length;o<i&&!1!==t.call(e[o],o,e[o]);o++);else for(o in e)if(!1===t.call(e[o],o,e[o]))break;return e},i.data=function(e,t,n){if(void 0===n)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=n},"function"==typeof e.CustomEvent?i.Event=e.CustomEvent:(i.Event=function(e,n){n=n||{bubbles:!1,cancelable:!1,detail:void 0};var o=t.createEvent("CustomEvent");return o.initCustomEvent(e,n.bubbles,n.cancelable,n.detail),o},i.Event.prototype=e.Event.prototype),i}Object.defineProperty(exports,"__esModule",{value:!0}),exports.factory=factory;

},{}],4:[function(require,module,exports){
"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function factory(e,t,n,i){var a=navigator.userAgent,r=a.indexOf("MSIE ")>0||a.indexOf("Trident/")>0,o=p("touchstart"),s=/iemobile/i.test(a),l=/iphone/i.test(a)&&!s;function c(t,n,a){if(!(this instanceof c))return new c(t,n,a);this.el=i,this.events={},this.maskset=i,this.refreshValue=!1,!0!==a&&(e.isPlainObject(t)?n=t:(n=n||{},t&&(n.alias=t)),this.opts=e.extend(!0,{},this.defaults,n),this.noMasksCache=n&&n.definitions!==i,this.userOptions=n||{},this.isRTL=this.opts.numericInput,u(this.opts.alias,n,this.opts))}function u(t,n,a){var r=c.prototype.aliases[t];return r?(r.alias&&u(r.alias,i,a),e.extend(!0,a,r),e.extend(!0,a,n),!0):(null===a.mask&&(a.mask=t),!1)}function f(t,n){function a(t,a,r){var o=!1;if(null!==t&&""!==t||((o=null!==r.regex)?t=(t=r.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(o=!0,t=".*")),1===t.length&&!1===r.greedy&&0!==r.repeat&&(r.placeholder=""),r.repeat>0||"*"===r.repeat||"+"===r.repeat){var s="*"===r.repeat?0:"+"===r.repeat?1:r.repeat;t=r.groupmarker[0]+t+r.groupmarker[1]+r.quantifiermarker[0]+s+","+r.repeat+r.quantifiermarker[1]}var l,u=o?"regex_"+r.regex:r.numericInput?t.split("").reverse().join(""):t;return c.prototype.masksCache[u]===i||!0===n?(l={mask:t,maskToken:c.prototype.analyseMask(t,o,r),validPositions:{},_buffer:i,buffer:i,tests:{},excludes:{},metadata:a,maskLength:i,jitOffset:{}},!0!==n&&(c.prototype.masksCache[u]=l,l=e.extend(!0,{},c.prototype.masksCache[u]))):l=e.extend(!0,{},c.prototype.masksCache[u]),l}if(e.isFunction(t.mask)&&(t.mask=t.mask(t)),e.isArray(t.mask)){if(t.mask.length>1){if(null===t.keepStatic){t.keepStatic="auto";for(var r=0;r<t.mask.length;r++)if(t.mask[r].charAt(0)!==t.mask[0].charAt(0)){t.keepStatic=!0;break}}var o=t.groupmarker[0];return e.each(t.isRTL?t.mask.reverse():t.mask,function(n,a){o.length>1&&(o+=t.groupmarker[1]+t.alternatormarker+t.groupmarker[0]),a.mask===i||e.isFunction(a.mask)?o+=a:o+=a.mask}),a(o+=t.groupmarker[1],t.mask,t)}t.mask=t.mask.pop()}return t.mask&&t.mask.mask!==i&&!e.isFunction(t.mask.mask)?a(t.mask.mask,t.mask,t):a(t.mask,t.mask,t)}function p(e){var t=n.createElement("input"),i="on"+e,a=i in t;return a||(t.setAttribute(i,"return;"),a="function"==typeof t[i]),t=null,a}function h(a,u,f){u=u||this.maskset,f=f||this.opts;var m,d,v,k,g,b=this,y=this.el,P=this.isRTL,E=!1,C=!1,x=!1,_=!1;function A(e,t,n,a,r){var o=f.greedy;r&&(f.greedy=!1),t=t||0;var s,l,c,u=[],p=0;S();do{if(!0===e&&w().validPositions[p])l=(c=r&&!0===w().validPositions[p].match.optionality&&w().validPositions[p+1]===i&&(!0===w().validPositions[p].generatedInput||w().validPositions[p].input==f.skipOptionalPartCharacter&&p>0)?D(p,I(p,s,p-1)):w().validPositions[p]).match,s=c.locator.slice(),u.push(!0===n?c.input:!1===n?l.nativeDef:X(p,l));else{l=(c=G(p,s,p-1)).match,s=c.locator.slice();var h=!0!==a&&(!1!==f.jitMasking?f.jitMasking:l.jit);(!1===h||h===i||"number"==typeof h&&isFinite(h)&&h>p)&&u.push(!1===n?l.nativeDef:X(p,l))}"auto"===f.keepStatic&&l.newBlockMarker&&null!==l.fn&&(f.keepStatic=p-1),p++}while((v===i||p<v)&&(null!==l.fn||""!==l.def)||t>p);return""===u[u.length-1]&&u.pop(),!1===n&&w().maskLength!==i||(w().maskLength=p-1),f.greedy=o,u}function w(){return u}function O(e){var t=w();t.buffer=i,!0!==e&&(t.validPositions={},t.p=0)}function S(e,t,n){var a=-1,r=-1,o=n||w().validPositions;for(var s in e===i&&(e=-1),o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(a=l),l>=e&&(r=l))}return-1===a||a==e?r:-1==r?a:e-a<r-e?a:r}function j(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),t!==i?t.toString():""}function M(e,t){var n=(e.alternation!=i?e.mloc[j(e)]:e.locator).join("");if(""!==n)for(;n.length<t;)n+="0";return n}function D(e,t){for(var n,a,r,o=M(T(e=e>0?e-1:0)),s=0;s<t.length;s++){var l=t[s];n=M(l,o.length);var c=Math.abs(n-o);(a===i||""!==n&&c<a||r&&!f.greedy&&r.match.optionality&&"master"===r.match.newBlockMarker&&(!l.match.optionality||!l.match.newBlockMarker)||r&&r.match.optionalQuantifier&&!l.match.optionalQuantifier)&&(a=c,r=l)}return r}function G(e,t,n){return w().validPositions[e]||D(e,I(e,t?t.slice():t,n))}function T(e,t){return w().validPositions[e]?w().validPositions[e]:(t||I(e))[0]}function B(e,t){for(var n=!1,i=I(e),a=0;a<i.length;a++)if(i[a].match&&i[a].match.def===t){n=!0;break}return n}function I(t,n,a){var r,o=w().maskToken,s=n?a:0,l=n?n.slice():[0],c=[],u=!1,p=n?n.join(""):"";function h(n,a,o,l){function m(o,l,d){function v(t,n){var i=0===e.inArray(t,n.matches);return i||e.each(n.matches,function(e,a){if(!0===a.isQuantifier?i=v(t,n.matches[e-1]):a.hasOwnProperty("matches")&&(i=v(t,a)),i)return!1}),i}function k(t,n,a){var r,o;if((w().tests[t]||w().validPositions[t])&&e.each(w().tests[t]||[w().validPositions[t]],function(e,t){if(t.mloc[n])return r=t,!1;var s=a!==i?a:t.alternation,l=t.locator[s]!==i?t.locator[s].toString().indexOf(n):-1;(o===i||l<o)&&-1!==l&&(r=t,o=l)}),r){var s=r.locator[r.alternation];return(r.mloc[n]||r.mloc[s]||r.locator).slice((a!==i?a:r.alternation)+1)}return a!==i?k(t,n):i}function g(e,t){function n(e){for(var t,n,i=[],a=0,r=e.length;a<r;a++)if("-"===e.charAt(a))for(n=e.charCodeAt(a+1);++t<n;)i.push(String.fromCharCode(t));else t=e.charCodeAt(a),i.push(e.charAt(a));return i.join("")}return f.regex&&null!==e.match.fn&&null!==t.match.fn?-1!==n(t.match.def.replace(/[\[\]]/g,"")).indexOf(n(e.match.def.replace(/[\[\]]/g,""))):e.match.def===t.match.nativeDef}function b(e,t){if(t===i||e.alternation===t.alternation&&-1===e.locator[e.alternation].toString().indexOf(t.locator[t.alternation])){e.mloc=e.mloc||{};var n=e.locator[e.alternation];if(n!==i){if("string"==typeof n&&(n=n.split(",")[0]),e.mloc[n]===i&&(e.mloc[n]=e.locator.slice()),t!==i){for(var a in t.mloc)"string"==typeof a&&(a=a.split(",")[0]),e.mloc[a]===i&&(e.mloc[a]=t.mloc[a]);e.locator[e.alternation]=Object.keys(e.mloc).join(",")}return!0}e.alternation=i}return!1}if(s>500&&d!==i)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+w().mask;if(s===t&&o.matches===i)return c.push({match:o,locator:l.reverse(),cd:p,mloc:{}}),!0;if(o.matches!==i){if(o.isGroup&&d!==o){if(o=m(n.matches[e.inArray(o,n.matches)+1],l,d))return!0}else if(o.isOptional){var y=o;if(o=h(o,a,l,d)){if(e.each(c,function(e,t){t.match.optionality=!0}),r=c[c.length-1].match,d!==i||!v(r,y))return!0;u=!0,s=t}}else if(o.isAlternator){var P,E=o,C=[],x=c.slice(),_=l.length,A=a.length>0?a.shift():-1;if(-1===A||"string"==typeof A){var O,S=s,j=a.slice(),M=[];if("string"==typeof A)M=A.split(",");else for(O=0;O<E.matches.length;O++)M.push(O.toString());if(w().excludes[t]){for(var D=M.slice(),G=0,T=w().excludes[t].length;G<T;G++)M.splice(M.indexOf(w().excludes[t][G].toString()),1);0===M.length&&(w().excludes[t]=i,M=D)}(!0===f.keepStatic||isFinite(parseInt(f.keepStatic))&&S>=f.keepStatic)&&(M=M.slice(0,1));for(var B=!1,I=0;I<M.length;I++){O=parseInt(M[I]),c=[],a="string"==typeof A&&k(s,O,_)||j.slice(),E.matches[O]&&m(E.matches[O],[O].concat(l),d)?o=!0:0===I&&(B=!0),P=c.slice(),s=S,c=[];for(var L=0;L<P.length;L++){var F=P[L],N=!1;F.match.jit=F.match.jit||B,F.alternation=F.alternation||_,b(F);for(var R=0;R<C.length;R++){var K=C[R];if("string"!=typeof A||F.alternation!==i&&-1!==e.inArray(F.locator[F.alternation].toString(),M)){if(F.match.nativeDef===K.match.nativeDef){N=!0,b(K,F);break}if(g(F,K)){b(F,K)&&(N=!0,C.splice(C.indexOf(K),0,F));break}if(g(K,F)){b(K,F);break}if(q=K,void 0,!(!((Q=F).locator.slice(Q.alternation).join("")==q.locator.slice(q.alternation).join(""))||null!==Q.match.fn||null===q.match.fn)&&q.match.fn.test(Q.match.def,w(),t,!1,f,!1)){b(F,K)&&(N=!0,C.splice(C.indexOf(K),0,F));break}}}N||C.push(F)}}c=x.concat(C),s=t,u=c.length>0,o=C.length>0,a=j.slice()}else o=m(E.matches[A]||n.matches[A],[A].concat(l),d);if(o)return!0}else if(o.isQuantifier&&d!==n.matches[e.inArray(o,n.matches)-1])for(var V=o,H=a.length>0?a.shift():0;H<(isNaN(V.quantifier.max)?H+1:V.quantifier.max)&&s<=t;H++){var U=n.matches[e.inArray(V,n.matches)-1];if(o=m(U,[H].concat(l),U)){if((r=c[c.length-1].match).optionalQuantifier=H>=V.quantifier.min,r.jit=(H||1)*U.matches.indexOf(r)>=V.quantifier.jit,r.optionalQuantifier&&v(r,U)){u=!0,s=t;break}return r.jit&&(w().jitOffset[t]=U.matches.indexOf(r)),!0}}else if(o=h(o,a,l,d))return!0}else s++;var Q,q}for(var d=a.length>0?a.shift():0;d<n.matches.length;d++)if(!0!==n.matches[d].isQuantifier){var v=m(n.matches[d],[d].concat(o),l);if(v&&s===t)return v;if(s>t)break}}if(t>-1){if(n===i){for(var m,d=t-1;(m=w().validPositions[d]||w().tests[d])===i&&d>-1;)d--;m!==i&&d>-1&&(l=function(t,n){var a=[];return e.isArray(n)||(n=[n]),n.length>0&&(n[0].alternation===i?0===(a=D(t,n.slice()).locator.slice()).length&&(a=n[0].locator.slice()):e.each(n,function(e,t){if(""!==t.def)if(0===a.length)a=t.locator.slice();else for(var n=0;n<a.length;n++)t.locator[n]&&-1===a[n].toString().indexOf(t.locator[n])&&(a[n]+=","+t.locator[n])})),a}(d,m),p=l.join(""),s=d)}if(w().tests[t]&&w().tests[t][0].cd===p)return w().tests[t];for(var v=l.shift();v<o.length;v++){if(h(o[v],l,[v])&&s===t||s>t)break}}return(0===c.length||u)&&c.push({match:{fn:null,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:p}),n!==i&&w().tests[t]?e.extend(!0,[],c):(w().tests[t]=e.extend(!0,[],c),w().tests[t])}function L(){return w()._buffer===i&&(w()._buffer=A(!1,1),w().buffer===i&&(w().buffer=w()._buffer.slice())),w()._buffer}function F(e){return w().buffer!==i&&!0!==e||(w().buffer=A(!0,S(),!0),w()._buffer===i&&(w()._buffer=w().buffer.slice())),w().buffer}function N(e,t,n){var a,r;if(!0===e)O(),e=0,t=n.length;else for(a=e;a<t;a++)delete w().validPositions[a];for(r=e,a=e;a<t;a++)if(O(!0),n[a]!==f.skipOptionalPartCharacter){var o=H(r,n[a],!0,!0);!1!==o&&(O(!0),r=o.caret!==i?o.caret:o.pos+1)}}function R(t,n,i){switch(f.casing||n.casing){case"upper":t=t.toUpperCase();break;case"lower":t=t.toLowerCase();break;case"title":var a=w().validPositions[i-1];t=0===i||a&&a.input===String.fromCharCode(c.keyCode.SPACE)?t.toUpperCase():t.toLowerCase();break;default:if(e.isFunction(f.casing)){var r=Array.prototype.slice.call(arguments);r.push(w().validPositions),t=f.casing.apply(this,r)}}return t}function K(t,n,a){for(var r,o=f.greedy?n:n.slice(0,1),s=!1,l=a!==i?a.split(","):[],c=0;c<l.length;c++)-1!==(r=t.indexOf(l[c]))&&t.splice(r,1);for(var u=0;u<t.length;u++)if(-1!==e.inArray(t[u],o)){s=!0;break}return s}function V(t,n,a,r,o){var s,l,c,u,f,p,h,m=e.extend(!0,{},w().validPositions),d=!1,v=o!==i?o:S();if(-1===v&&o===i)l=(u=T(s=0)).alternation;else for(;v>=0;v--)if((c=w().validPositions[v])&&c.alternation!==i){if(u&&u.locator[c.alternation]!==c.locator[c.alternation])break;s=v,l=w().validPositions[s].alternation,u=c}if(l!==i){h=parseInt(s),w().excludes[h]=w().excludes[h]||[],!0!==t&&w().excludes[h].push(j(u));var k=[],g=0;for(f=h;f<S(i,!0)+1;f++)(p=w().validPositions[f])&&!0!==p.generatedInput?k.push(p.input):f<t&&g++,delete w().validPositions[f];for(;w().excludes[h]&&w().excludes[h].length<10;){var b=-1*g,y=k.slice();for(w().tests[h]=i,O(!0),d=!0;y.length>0;){var P=y.shift();if(!(d=H(S(i,!0)+1,P,!1,r,!0)))break}if(d&&n!==i){var E=S(t)+1;for(f=h;f<S()+1;f++)((p=w().validPositions[f])===i||null==p.match.fn)&&f<t+b&&b++;d=H((t+=b)>E?E:t,n,a,r,!0)}if(d)break;if(O(),u=T(h),w().validPositions=e.extend(!0,{},m),!w().excludes[h]){d=V(t,n,a,r,h-1);break}var C=j(u);if(-1!==w().excludes[h].indexOf(C)){d=V(t,n,a,r,h-1);break}for(w().excludes[h].push(C),f=h;f<S(i,!0)+1;f++)delete w().validPositions[f]}}return w().excludes[h]=i,d}function H(t,n,a,r,o,s){function l(e){return P?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}a=!0===a;var c=t;function u(n,a,o){var s=!1;return e.each(I(n),function(c,u){var p=u.match;if(F(!0),!1!==(s=null!=p.fn?p.fn.test(a,w(),n,o,f,l(t)):(a===p.def||a===f.skipOptionalPartCharacter)&&""!==p.def&&{c:X(n,p,!0)||p.def,pos:n})){var h=s.c!==i?s.c:a,m=n;return h=h===f.skipOptionalPartCharacter&&null===p.fn?X(n,p,!0)||p.def:h,s.remove!==i&&(e.isArray(s.remove)||(s.remove=[s.remove]),e.each(s.remove.sort(function(e,t){return t-e}),function(e,t){Q({begin:t,end:t+1})})),s.insert!==i&&(e.isArray(s.insert)||(s.insert=[s.insert]),e.each(s.insert.sort(function(e,t){return e-t}),function(e,t){H(t.pos,t.c,!0,r)})),!0!==s&&s.pos!==i&&s.pos!==n&&(m=s.pos),!0!==s&&s.pos===i&&s.c===i?!1:(Q(t,e.extend({},u,{input:R(h,p,m)}),r,m)||(s=!1),!1)}}),s}t.begin!==i&&(c=P?t.end:t.begin);var p=!0,h=e.extend(!0,{},w().validPositions);if(e.isFunction(f.preValidation)&&!a&&!0!==r&&!0!==s&&(p=f.preValidation(F(),c,n,l(t),f,w())),!0===p){if(U(i,c,!0),(v===i||c<v)&&(p=u(c,n,a),(!a||!0===r)&&!1===p&&!0!==s)){var m=w().validPositions[c];if(!m||null!==m.match.fn||m.match.def!==n&&n!==f.skipOptionalPartCharacter){if((f.insertMode||w().validPositions[W(c)]===i)&&(!q(c,!0)||w().jitOffset[c]))if(w().jitOffset[c]&&w().validPositions[W(c)]===i)!1!==(p=H(c+w().jitOffset[c],n,a))&&(p.caret=c);else for(var d=c+1,k=W(c);d<=k;d++)if(!1!==(p=u(d,n,a))){p=U(c,p.pos!==i?p.pos:d)||p,c=d;break}}else p={caret:W(c)}}!1!==p||!1===f.keepStatic||null!=f.regex&&!oe(F())||a||!0===o||(p=V(c,n,a,r)),!0===p&&(p={pos:c})}if(e.isFunction(f.postValidation)&&!1!==p&&!a&&!0!==r&&!0!==s){var g=f.postValidation(F(!0),t.begin!==i?P?t.end:t.begin:t,p,f,w());if(g!==i){if(g.refreshFromBuffer&&g.buffer){var b=g.refreshFromBuffer;N(!0===b?b:b.start,b.end,g.buffer)}p=!0===g?p:g}}return p&&p.pos===i&&(p.pos=c),!1!==p&&!0!==s||(O(!0),w().validPositions=e.extend(!0,{},h)),p}function U(t,n,a){var r;if(t===i)for(t=n-1;t>0&&!w().validPositions[t];t--);for(var o=t;o<n;o++){if(w().validPositions[o]===i&&!q(o,!0))if(0==o?T(o):w().validPositions[o-1]){var s=I(o).slice();""===s[s.length-1].match.def&&s.pop();var l=D(o,s);if((l=e.extend({},l,{input:X(o,l.match,!0)||l.match.def})).generatedInput=!0,Q(o,l,!0),!0!==a){var c=w().validPositions[n].input;w().validPositions[n]=i,r=H(n,c,!0,!0)}}}return r}function Q(t,n,a,r){function o(e,t,n){var a=t[e];if(a!==i&&(null===a.match.fn&&!0!==a.match.optionality||a.input===f.radixPoint)){var r=n.begin<=e-1?t[e-1]&&null===t[e-1].match.fn&&t[e-1]:t[e-1],o=n.end>e+1?t[e+1]&&null===t[e+1].match.fn&&t[e+1]:t[e+1];return r&&o}return!1}var s=t.begin!==i?t.begin:t,l=t.end!==i?t.end:t;if(t.begin>t.end&&(s=t.end,l=t.begin),r=r!==i?r:s,s!==l||f.insertMode&&w().validPositions[r]!==i&&a===i){var c=e.extend(!0,{},w().validPositions),u=S(i,!0);for(w().p=s,v=u;v>=s;v--)w().validPositions[v]&&"+"===w().validPositions[v].match.nativeDef&&(f.isNegative=!1),delete w().validPositions[v];var p=!0,h=r,m=(w().validPositions,!1),d=h,v=h;for(n&&(w().validPositions[r]=e.extend(!0,{},n),d++,h++,s<l&&v++);v<=u;v++){var k=c[v];if(k!==i&&(v>=l||v>=s&&!0!==k.generatedInput&&o(v,c,{begin:s,end:l}))){for(;""!==T(d).match.def;){if(!1===m&&c[d]&&c[d].match.nativeDef===k.match.nativeDef)w().validPositions[d]=e.extend(!0,{},c[d]),w().validPositions[d].input=k.input,U(i,d,!0),h=d+1,p=!0;else if(f.shiftPositions&&B(d,k.match.def)){var g=H(d,k.input,!0,!0);p=!1!==g,h=g.caret||g.insert?S():d+1,m=!0}else p=!0===k.generatedInput||k.input===f.radixPoint&&!0===f.numericInput;if(p)break;if(!p&&d>l&&q(d,!0)&&(null!==k.match.fn||d>w().maskLength))break;d++}""==T(d).match.def&&(p=!1),d=h}if(!p)break}if(!p)return w().validPositions=e.extend(!0,{},c),O(!0),!1}else n&&(w().validPositions[r]=e.extend(!0,{},n));return O(!0),!0}function q(e,t){var n=G(e).match;if(""===n.def&&(n=T(e).match),null!=n.fn)return n.fn;if(!0!==t&&e>-1){var i=I(e);return i.length>1+(""===i[i.length-1].match.def?1:0)}return!1}function W(e,t){for(var n=e+1;""!==T(n).match.def&&(!0===t&&(!0!==T(n).match.newBlockMarker||!q(n))||!0!==t&&!q(n));)n++;return n}function $(e,t){var n,i=e;if(i<=0)return 0;for(;--i>0&&(!0===t&&!0!==T(i).match.newBlockMarker||!0!==t&&!q(i)&&((n=I(i)).length<2||2===n.length&&""===n[1].match.def)););return i}function z(t,n,a,r,o){if(r&&e.isFunction(f.onBeforeWrite)){var s=f.onBeforeWrite.call(b,r,n,a,f);if(s){if(s.refreshFromBuffer){var l=s.refreshFromBuffer;N(!0===l?l:l.start,l.end,s.buffer||n),n=F(!0)}a!==i&&(a=s.caret!==i?s.caret:a)}}if(t!==i&&(t.inputmask._valueSet(n.join("")),a===i||r!==i&&"blur"===r.type?ce(t,a,0===n.length):ie(t,a),!0===o)){var c=e(t),u=t.inputmask._valueGet();C=!0,c.trigger("input"),setTimeout(function(){u===L().join("")?c.trigger("cleared"):!0===oe(n)&&c.trigger("complete")},0)}}function X(t,n,a){if((n=n||T(t).match).placeholder!==i||!0===a)return e.isFunction(n.placeholder)?n.placeholder(f):n.placeholder;if(null===n.fn){if(t>-1&&w().validPositions[t]===i){var r,o=I(t),s=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var l=0;l<o.length;l++)if(!0!==o[l].match.optionality&&!0!==o[l].match.optionalQuantifier&&(null===o[l].match.fn||r===i||!1!==o[l].match.fn.test(r.match.def,w(),t,!0,f))&&(s.push(o[l]),null===o[l].match.fn&&(r=o[l]),s.length>1&&/[0-9a-bA-Z]/.test(s[0].match.def)))return f.placeholder.charAt(t%f.placeholder.length)}return n.def}return f.placeholder.charAt(t%f.placeholder.length)}function Z(e,t){if(r){if(e.inputmask._valueGet()!==t){var n=F().slice(),i=e.inputmask._valueGet();if(i!==t){var a=S();-1===a&&i===L().join("")?n=[]:-1!==a&&re(n),z(e,n)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))}var J,Y={on:function(t,n,a){var r=function(t){var n=this;if(n.inputmask===i&&"FORM"!==this.nodeName){var r=e.data(n,"_inputmask_opts");r?new c(r).mask(n):Y.off(n)}else{if("setvalue"===t.type||"FORM"===this.nodeName||!(n.disabled||n.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===f.tabThrough&&t.keyCode===c.keyCode.TAB))){switch(t.type){case"input":if(!0===C)return C=!1,t.preventDefault();if(o){var u=arguments;return setTimeout(function(){a.apply(n,u),ie(n,n.inputmask.caretPos,i,!0)},0),!1}break;case"keydown":E=!1,C=!1;break;case"keypress":if(!0===E)return t.preventDefault();E=!0;break;case"click":if(s||l){u=arguments;return setTimeout(function(){a.apply(n,u)},0),!1}}var p=a.apply(n,arguments);return!1===p&&(t.preventDefault(),t.stopPropagation()),p}t.preventDefault()}};t.inputmask.events[n]=t.inputmask.events[n]||[],t.inputmask.events[n].push(r),-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).on(n,r):e(t).on(n,r)},off:function(t,n){var i;t.inputmask&&t.inputmask.events&&(n?(i=[])[n]=t.inputmask.events[n]:i=t.inputmask.events,e.each(i,function(n,i){for(;i.length>0;){var a=i.pop();-1!==e.inArray(n,["submit","reset"])?null!==t.form&&e(t.form).off(n,a):e(t).off(n,a)}delete t.inputmask.events[n]}))}},ee={keydownEvent:function(t){var n=e(this),i=t.keyCode,a=ie(this),r={begin:this.selectionStart,end:this.selectionEnd},o=this.value;if(i===c.keyCode.BACKSPACE||i===c.keyCode.DELETE||l&&i===c.keyCode.BACKSPACE_SAFARI||(t.ctrlKey||t.metaKey)&&i===c.keyCode.X&&!p("cut"))t.preventDefault(),(t.metaKey||t.ctrlKey)&&(a.begin=0),se(this,i,a),a.end-a.begin==this.value.length&&O(!1),z(this,F(!0),w().p,t,this.inputmask._valueGet()!==F().join(""));else if(i===c.keyCode.END||i===c.keyCode.PAGE_DOWN){t.preventDefault();var s=W(S());ie(this,t.shiftKey?a.begin:s,s,!0)}else i===c.keyCode.HOME&&!t.shiftKey||i===c.keyCode.PAGE_UP?(t.preventDefault(),ie(this,0,t.shiftKey?a.begin:0,!0)):(f.undoOnEscape&&i===c.keyCode.ESCAPE||90===i&&t.ctrlKey)&&!0!==t.altKey?(te(this,!0,!1,m.split("")),n.trigger("click")):i!==c.keyCode.INSERT||t.shiftKey||t.ctrlKey?!0===f.tabThrough&&i===c.keyCode.TAB&&(!0===t.shiftKey?(null===T(a.begin).match.fn&&(a.begin=W(a.begin)),a.end=$(a.begin,!0),a.begin=$(a.end,!0)):(a.begin=W(a.begin,!0),a.end=W(a.begin,!0),a.end<w().maskLength&&a.end--),a.begin<w().maskLength&&(t.preventDefault(),ie(this,a.begin,a.end))):(f.insertMode=!f.insertMode,this.setAttribute("im-insert",f.insertMode));f.onKeyDown.call(this,t,F(),ie(this).begin,f,o,r),x=-1!==e.inArray(i,f.ignorables)},keypressEvent:function(t,n,a,r,o){var s=this,l=e(s),u=t.which||t.charCode||t.keyCode;if(!(!0===n||t.ctrlKey&&t.altKey)&&(t.ctrlKey||t.metaKey||x))return u===c.keyCode.ENTER&&m!==F().join("")&&(m=F().join(""),setTimeout(function(){l.trigger("change")},0)),!0;if(u){46===u&&!1===t.shiftKey&&""!==f.radixPoint&&(u=f.radixPoint.charCodeAt(0));var p,h=n?{begin:o,end:o}:ie(s),d=String.fromCharCode(u),v=0;if(f._radixDance&&f.numericInput){var k=F().indexOf(f.radixPoint.charAt(0))+1;h.begin<=k&&(u===f.radixPoint.charCodeAt(0)&&(v=1),h.begin-=1,h.end-=1)}w().writeOutBuffer=!0;var g=H(h,d,r);if(!1!==g&&(O(!0),p=g.caret!==i?g.caret:W(g.pos.begin?g.pos.begin:g.pos),w().p=p),p=(f.numericInput&&g.caret===i?$(p):p)+v,!1!==a&&(setTimeout(function(){f.onKeyValidation.call(s,u,g,f)},0),w().writeOutBuffer&&!1!==g)){var b=F();z(s,b,p,t,!0!==n)}if(t.preventDefault(),n)return!1!==g&&(g.forwardPosition=p),g}},pasteEvent:function(n){var i,a=this,r=n.originalEvent||n,o=(e(a),a.inputmask._valueGet(!0)),s=ie(a);P&&(i=s.end,s.end=s.begin,s.begin=i);var l=o.substr(0,s.begin),c=o.substr(s.end,o.length);if(l===(P?L().reverse():L()).slice(0,s.begin).join("")&&(l=""),c===(P?L().reverse():L()).slice(s.end).join("")&&(c=""),t.clipboardData&&t.clipboardData.getData)o=l+t.clipboardData.getData("Text")+c;else{if(!r.clipboardData||!r.clipboardData.getData)return!0;o=l+r.clipboardData.getData("text/plain")+c}var u=o;if(e.isFunction(f.onBeforePaste)){if(!1===(u=f.onBeforePaste.call(b,o,f)))return n.preventDefault();u||(u=o)}return te(a,!1,!1,u.toString().split("")),setTimeout(function(){z(a,F(),W(S()),n,m!==F().join(""))},0),n.preventDefault()},inputFallBackEvent:function(t){var n=this,i=n.inputmask._valueGet();if(F().join("")!==i){var a=ie(n);if(i=function(e,t,n){if(s){var i=t.replace(F().join(""),"");if(1===i.length){var a=t.split("");a.splice(n.begin,0,i),t=a.join("")}}return t}(0,i=function(e,t,n){return"."===t.charAt(n.begin-1)&&""!==f.radixPoint&&((t=t.split(""))[n.begin-1]=f.radixPoint.charAt(0),t=t.join("")),t}(0,i,a),a),F().join("")!==i){var r=F().join(""),o=!f.numericInput&&i.length>r.length?-1:0,l=i.substr(0,a.begin),u=i.substr(a.begin),p=r.substr(0,a.begin+o),h=r.substr(a.begin+o),m=a,d="",v=!1;if(l!==p){var k,g=(v=l.length>=p.length)?l.length:p.length;for(k=0;l.charAt(k)===p.charAt(k)&&k<g;k++);v&&(m.begin=k-o,d+=l.slice(k,m.end))}if(u!==h&&(u.length>h.length?d+=u.slice(0,1):u.length<h.length&&(m.end+=h.length-u.length,v||""===f.radixPoint||""!==u||l.charAt(m.begin+o-1)!==f.radixPoint||(m.begin--,d=f.radixPoint))),z(n,F(),{begin:m.begin+o,end:m.end+o}),d.length>0)e.each(d.split(""),function(t,i){var a=new e.Event("keypress");a.which=i.charCodeAt(0),x=!1,ee.keypressEvent.call(n,a)});else{m.begin===m.end-1&&(m.begin=$(m.begin+1),m.begin===m.end-1?ie(n,m.begin):ie(n,m.begin,m.end));var b=new e.Event("keydown");b.keyCode=f.numericInput?c.keyCode.BACKSPACE:c.keyCode.DELETE,ee.keydownEvent.call(n,b)}t.preventDefault()}}},beforeInputEvent:function(t){if(t.cancelable){var n=this;switch(t.inputType){case"insertText":return e.each(t.data.split(""),function(t,i){var a=new e.Event("keypress");a.which=i.charCodeAt(0),x=!1,ee.keypressEvent.call(n,a)}),t.preventDefault();case"deleteContentBackward":return(i=new e.Event("keydown")).keyCode=c.keyCode.BACKSPACE,ee.keydownEvent.call(n,i),t.preventDefault();case"deleteContentForward":var i;return(i=new e.Event("keydown")).keyCode=c.keyCode.DELETE,ee.keydownEvent.call(n,i),t.preventDefault()}}},setValueEvent:function(t){this.inputmask.refreshValue=!1;var n=(n=t&&t.detail?t.detail[0]:arguments[1])||this.inputmask._valueGet(!0);e.isFunction(f.onBeforeMask)&&(n=f.onBeforeMask.call(b,n,f)||n),te(this,!0,!1,n=n.split("")),m=F().join(""),(f.clearMaskOnLostFocus||f.clearIncomplete)&&this.inputmask._valueGet()===L().join("")&&this.inputmask._valueSet("")},focusEvent:function(e){var t=this.inputmask._valueGet();f.showMaskOnFocus&&(t!==F().join("")?z(this,F(),W(S())):!1===_&&ie(this,W(S()))),!0===f.positionCaretOnTab&&!1===_&&ee.clickEvent.apply(this,[e,!0]),m=F().join("")},mouseleaveEvent:function(e){_=!1,f.clearMaskOnLostFocus&&n.activeElement!==this&&Z(this,g)},clickEvent:function(t,a){var r=this;setTimeout(function(){if(n.activeElement===r){var t=ie(r);if(a&&(P?t.end=t.begin:t.begin=t.end),t.begin===t.end)switch(f.positionCaretOnClick){case"none":break;case"select":ie(r,0,F().length);break;case"ignore":ie(r,W(S()));break;case"radixFocus":if(function(t){if(""!==f.radixPoint){var n=w().validPositions;if(n[t]===i||n[t].input===X(t)){if(t<W(-1))return!0;var a=e.inArray(f.radixPoint,F());if(-1!==a){for(var r in n)if(a<r&&n[r].input!==X(r))return!1;return!0}}}return!1}(t.begin)){var o=F().join("").indexOf(f.radixPoint);ie(r,f.numericInput?W(o):o);break}default:var s=t.begin,l=S(s,!0),c=W(l);if(s<c)ie(r,q(s,!0)||q(s-1,!0)?s:W(s));else{var u=w().validPositions[l],p=G(c,u?u.match.locator:i,u),h=X(c,p.match);if(""!==h&&F()[c]!==h&&!0!==p.match.optionalQuantifier&&!0!==p.match.newBlockMarker||!q(c,f.keepStatic)&&p.match.def===h){var m=W(c);(s>=m||s===c)&&(c=m)}ie(r,c)}}}},0)},cutEvent:function(i){e(this);var a=ie(this),r=i.originalEvent||i,o=t.clipboardData||r.clipboardData,s=P?F().slice(a.end,a.begin):F().slice(a.begin,a.end);o.setData("text",P?s.reverse().join(""):s.join("")),n.execCommand&&n.execCommand("copy"),(i.metaKey||i.ctrlKey)&&(a.begin=0),se(this,c.keyCode.DELETE,a),a.end-a.begin==this.value.length&&O(!1),z(this,F(),w().p,i,m!==F().join(""))},blurEvent:function(t){var n=e(this);if(this.inputmask){Z(this,g);var a=this.inputmask._valueGet(),r=F().slice();""===a&&k===i||(f.clearMaskOnLostFocus&&(-1===S()&&a===L().join("")?r=[]:re(r)),!1===oe(r)&&(setTimeout(function(){n.trigger("incomplete")},0),f.clearIncomplete&&(O(),r=f.clearMaskOnLostFocus?[]:L().slice())),z(this,r,i,t)),m!==F().join("")&&(m=r.join(""),n.trigger("change"))}},mouseenterEvent:function(e){_=!0,n.activeElement!==this&&f.showMaskOnHover&&Z(this,(P?F().slice().reverse():F()).join(""))},submitEvent:function(e){m!==F().join("")&&d.trigger("change"),f.clearMaskOnLostFocus&&-1===S()&&y.inputmask._valueGet&&y.inputmask._valueGet()===L().join("")&&y.inputmask._valueSet(""),f.clearIncomplete&&!1===oe(F())&&y.inputmask._valueSet(""),f.removeMaskOnSubmit&&(y.inputmask._valueSet(y.inputmask.unmaskedvalue(),!0),setTimeout(function(){z(y,F())},0))},resetEvent:function(e){y.inputmask.refreshValue=!0,setTimeout(function(){d.trigger("setvalue")},0)}};function te(t,n,a,r,o){var s=this||t.inputmask,l=r.slice(),u="",p=-1,h=i;if(O(),a||!0===f.autoUnmask)p=W(p);else{var m=L().slice(0,W(-1)).join(""),d=l.join("").match(new RegExp("^"+c.escapeRegex(m),"g"));d&&d.length>0&&(l.splice(0,d.length*m.length),p=W(p))}-1===p?(w().p=W(p),p=0):w().p=p,s.caretPos={begin:p},e.each(l,function(n,r){if(r!==i)if(w().validPositions[n]===i&&l[n]===X(n)&&q(n,!0)&&!1===H(n,l[n],!0,i,i,!0))w().p++;else{var o=new e.Event("_checkval");o.which=r.charCodeAt(0),u+=r;var c=S(i,!0);!function(e,t){return-1!==A(!0,0,!1).slice(e,W(e)).join("").replace(/'/g,"").indexOf(t)&&!q(e)&&(T(e).match.nativeDef===t.charAt(0)||null===T(e).match.fn&&T(e).match.nativeDef==="'"+t.charAt(0)||" "===T(e).match.nativeDef&&(T(e+1).match.nativeDef===t.charAt(0)||null===T(e+1).match.fn&&T(e+1).match.nativeDef==="'"+t.charAt(0)))}(p,u)?(h=ee.keypressEvent.call(t,o,!0,!1,a,s.caretPos.begin))&&(p=s.caretPos.begin+1,u=""):h=ee.keypressEvent.call(t,o,!0,!1,a,c+1),h&&(z(i,F(),h.forwardPosition,o,!1),s.caretPos={begin:h.forwardPosition,end:h.forwardPosition})}}),n&&z(t,F(),h?h.forwardPosition:i,o||new e.Event("checkval"),o&&"input"===o.type)}function ne(t){if(t){if(t.inputmask===i)return t.value;t.inputmask&&t.inputmask.refreshValue&&ee.setValueEvent.call(t)}var n=[],a=w().validPositions;for(var r in a)a[r].match&&null!=a[r].match.fn&&n.push(a[r].input);var o=0===n.length?"":(P?n.reverse():n).join("");if(e.isFunction(f.onUnMask)){var s=(P?F().slice().reverse():F()).join("");o=f.onUnMask.call(b,s,o,f)}return o}function ie(a,r,o,s){function l(e){return!P||"number"!=typeof e||f.greedy&&""===f.placeholder||!y||(e=y.inputmask._valueGet().length-e),e}var c;if(r===i)return"selectionStart"in a?(r=a.selectionStart,o=a.selectionEnd):t.getSelection?(c=t.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==a&&c.commonAncestorContainer!==a||(r=c.startOffset,o=c.endOffset):n.selection&&n.selection.createRange&&(o=(r=0-(c=n.selection.createRange()).duplicate().moveStart("character",-a.inputmask._valueGet().length))+c.text.length),{begin:s?r:l(r),end:s?o:l(o)};if(e.isArray(r)&&(o=P?r[0]:r[1],r=P?r[1]:r[0]),r.begin!==i&&(o=P?r.begin:r.end,r=P?r.end:r.begin),"number"==typeof r){r=s?r:l(r),o="number"==typeof(o=s?o:l(o))?o:r;var u=parseInt(((a.ownerDocument.defaultView||t).getComputedStyle?(a.ownerDocument.defaultView||t).getComputedStyle(a,null):a.currentStyle).fontSize)*o;if(a.scrollLeft=u>a.scrollWidth?u:0,a.inputmask.caretPos={begin:r,end:o},a===n.activeElement){if("selectionStart"in a)a.selectionStart=r,a.selectionEnd=o;else if(t.getSelection){if(c=n.createRange(),a.firstChild===i||null===a.firstChild){var p=n.createTextNode("");a.appendChild(p)}c.setStart(a.firstChild,r<a.inputmask._valueGet().length?r:a.inputmask._valueGet().length),c.setEnd(a.firstChild,o<a.inputmask._valueGet().length?o:a.inputmask._valueGet().length),c.collapse(!0);var h=t.getSelection();h.removeAllRanges(),h.addRange(c)}else a.createTextRange&&((c=a.createTextRange()).collapse(!0),c.moveEnd("character",o),c.moveStart("character",r),c.select());ce(a,{begin:r,end:o})}}}function ae(t){var n,a,r=A(!0,S(),!0,!0),o=r.length,s=S(),l={},c=w().validPositions[s],u=c!==i?c.locator.slice():i;for(n=s+1;n<r.length;n++)u=(a=G(n,u,n-1)).locator.slice(),l[n]=e.extend(!0,{},a);var f=c&&c.alternation!==i?c.locator[c.alternation]:i;for(n=o-1;n>s&&(((a=l[n]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||f&&(f!==l[n].locator[c.alternation]&&null!=a.match.fn||null===a.match.fn&&a.locator[c.alternation]&&K(a.locator[c.alternation].toString().split(","),f.toString().split(","))&&""!==I(n)[0].def))&&r[n]===X(n,a.match));n--)o--;return t?{l:o,def:l[o]?l[o].match:i}:o}function re(e){e.length=0;for(var t,n=A(!0,0,!0,i,!0);(t=n.shift())!==i;)e.push(t);return e}function oe(t){if(e.isFunction(f.isComplete))return f.isComplete(t,f);if("*"===f.repeat)return i;var n=!1,a=ae(!0),r=$(a.l);if(a.def===i||a.def.newBlockMarker||a.def.optionality||a.def.optionalQuantifier){n=!0;for(var o=0;o<=r;o++){var s=G(o).match;if(null!==s.fn&&w().validPositions[o]===i&&!0!==s.optionality&&!0!==s.optionalQuantifier||null===s.fn&&t[o]!==X(o,s)){n=!1;break}}}return n}function se(e,t,n,a,r){if((f.numericInput||P)&&(t===c.keyCode.BACKSPACE?t=c.keyCode.DELETE:t===c.keyCode.DELETE&&(t=c.keyCode.BACKSPACE),P)){var o=n.end;n.end=n.begin,n.begin=o}if(t===c.keyCode.BACKSPACE&&n.end-n.begin<1?(n.begin=$(n.begin),w().validPositions[n.begin]!==i&&w().validPositions[n.begin].input===f.groupSeparator&&n.begin--):t===c.keyCode.DELETE&&n.begin===n.end&&(n.end=q(n.end,!0)&&w().validPositions[n.end]&&w().validPositions[n.end].input!==f.radixPoint?n.end+1:W(n.end)+1,w().validPositions[n.begin]!==i&&w().validPositions[n.begin].input===f.groupSeparator&&n.end++),Q(n),!0!==a&&!1!==f.keepStatic||null!==f.regex){var s=V(!0);if(s){var l=s.caret!==i?s.caret:s.pos?W(s.pos.begin?s.pos.begin:s.pos):S(-1,!0);(t!==c.keyCode.DELETE||n.begin>l)&&n.begin}}var u=S(n.begin,!0);if(u<n.begin||-1===n.begin)w().p=W(u);else if(!0!==a&&(w().p=n.begin,!0!==r))for(;w().p<u&&w().validPositions[w().p]===i;)w().p++}function le(i){var a=(i.ownerDocument.defaultView||t).getComputedStyle(i,null);var r=n.createElement("div");r.style.width=a.width,r.style.textAlign=a.textAlign,k=n.createElement("div"),i.inputmask.colorMask=k,k.className="im-colormask",i.parentNode.insertBefore(k,i),i.parentNode.removeChild(i),k.appendChild(i),k.appendChild(r),i.style.left=r.offsetLeft+"px",e(k).on("mouseleave",function(e){return ee.mouseleaveEvent.call(i,[e])}),e(k).on("mouseenter",function(e){return ee.mouseenterEvent.call(i,[e])}),e(k).on("click",function(e){return ie(i,function(e){var t,r=n.createElement("span");for(var o in a)isNaN(o)&&-1!==o.indexOf("font")&&(r.style[o]=a[o]);r.style.textTransform=a.textTransform,r.style.letterSpacing=a.letterSpacing,r.style.position="absolute",r.style.height="auto",r.style.width="auto",r.style.visibility="hidden",r.style.whiteSpace="nowrap",n.body.appendChild(r);var s,l=i.inputmask._valueGet(),c=0;for(t=0,s=l.length;t<=s;t++){if(r.innerHTML+=l.charAt(t)||"_",r.offsetWidth>=e){var u=e-c,f=r.offsetWidth-e;r.innerHTML=l.charAt(t),t=(u-=r.offsetWidth/3)<f?t-1:t;break}c=r.offsetWidth}return n.body.removeChild(r),t}(e.clientX)),ee.clickEvent.call(i,[e])})}function ce(e,t,a){var r,o,s,l=[],c=!1,u=0;function p(e){if(e===i&&(e=""),c||null!==r.fn&&o.input!==i)if(c&&(null!==r.fn&&o.input!==i||""===r.def)){c=!1;var t=l.length;l[t-1]=l[t-1]+"</span>",l.push(e)}else l.push(e);else c=!0,l.push("<span class='im-static'>"+e)}if(k!==i){var h=F();if(t===i?t=ie(e):t.begin===i&&(t={begin:t,end:t}),!0!==a){var m=S();do{w().validPositions[u]?(o=w().validPositions[u],r=o.match,s=o.locator.slice(),p(h[u])):(o=G(u,s,u-1),r=o.match,s=o.locator.slice(),!1===f.jitMasking||u<m||"number"==typeof f.jitMasking&&isFinite(f.jitMasking)&&f.jitMasking>u?p(X(u,r)):c=!1),u++}while((v===i||u<v)&&(null!==r.fn||""!==r.def)||m>u||c);c&&p(),n.activeElement===e&&(l.splice(t.begin,0,t.begin===t.end||t.end>w().maskLength?'<mark class="im-caret" style="border-right-width: 1px;border-right-style: solid;">':'<mark class="im-caret-select">'),l.splice(t.end+1,0,"</mark>"))}var d=k.getElementsByTagName("div")[0];d.innerHTML=l.join(""),e.inputmask.positionColorMask(e,d)}}if(c.prototype.positionColorMask=function(e,t){e.style.left=t.offsetLeft+"px"},a!==i)switch(a.action){case"isComplete":return y=a.el,oe(F());case"unmaskedvalue":return y!==i&&a.value===i||(J=a.value,J=(e.isFunction(f.onBeforeMask)&&f.onBeforeMask.call(b,J,f)||J).split(""),te.call(this,i,!1,!1,J),e.isFunction(f.onBeforeWrite)&&f.onBeforeWrite.call(b,i,F(),0,f)),ne(y);case"mask":!function(t){Y.off(t);var a=function(t,a){var r=t.getAttribute("type"),o="INPUT"===t.tagName&&-1!==e.inArray(r,a.supportsInputType)||t.isContentEditable||"TEXTAREA"===t.tagName;if(!o)if("INPUT"===t.tagName){var s=n.createElement("input");s.setAttribute("type",r),o="text"===s.type,s=null}else o="partial";return!1!==o?function(t){var r,o;function s(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==S()||!0!==a.nullable?n.activeElement===this&&a.clearMaskOnLostFocus?(P?re(F().slice()).reverse():re(F().slice())).join(""):r.call(this):"":r.call(this)}function l(t){o.call(this,t),this.inputmask&&e(this).trigger("setvalue",[t])}if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===_typeof("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype});var c=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):i;c&&c.get&&c.set?(r=c.get,o=c.set,Object.defineProperty(t,"value",{get:s,set:l,configurable:!0})):"INPUT"!==t.tagName&&(r=function(){return this.textContent},o=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:s,set:l,configurable:!0}))}else n.__lookupGetter__&&t.__lookupGetter__("value")&&(r=t.__lookupGetter__("value"),o=t.__lookupSetter__("value"),t.__defineGetter__("value",s),t.__defineSetter__("value",l));t.inputmask.__valueGet=r,t.inputmask.__valueSet=o}t.inputmask._valueGet=function(e){return P&&!0!==e?r.call(this.el).split("").reverse().join(""):r.call(this.el)},t.inputmask._valueSet=function(e,t){o.call(this.el,null===e||e===i?"":!0!==t&&P?e.split("").reverse().join(""):e)},r===i&&(r=function(){return this.value},o=function(e){this.value=e},function(t){if(e.valHooks&&(e.valHooks[t]===i||!0!==e.valHooks[t].inputmaskpatch)){var n=e.valHooks[t]&&e.valHooks[t].get?e.valHooks[t].get:function(e){return e.value},r=e.valHooks[t]&&e.valHooks[t].set?e.valHooks[t].set:function(e,t){return e.value=t,e};e.valHooks[t]={get:function(e){if(e.inputmask){if(e.inputmask.opts.autoUnmask)return e.inputmask.unmaskedvalue();var t=n(e);return-1!==S(i,i,e.inputmask.maskset.validPositions)||!0!==a.nullable?t:""}return n(e)},set:function(t,n){var i,a=e(t);return i=r(t,n),t.inputmask&&a.trigger("setvalue",[n]),i},inputmaskpatch:!0}}}(t.type),function(t){Y.on(t,"mouseenter",function(t){var n=e(this),i=this.inputmask._valueGet();a.showMaskOnHover&&i!==F().join("")&&n.trigger("setvalue")})}(t))}}(t):t.inputmask=i,o}(t,f);if(!1!==a&&(d=e(y=t),g=y.placeholder,-1===(v=y!==i?y.maxLength:i)&&(v=i),!0===f.colorMask&&le(y),o&&("inputmode"in y&&(y.inputmode=f.inputmode,y.setAttribute("inputmode",f.inputmode)),!0===f.disablePredictiveText&&("autocorrect"in y?y.autocorrect=!1:(!0!==f.colorMask&&le(y),y.type="password"))),!0===a&&(y.setAttribute("im-insert",f.insertMode),Y.on(y,"submit",ee.submitEvent),Y.on(y,"reset",ee.resetEvent),Y.on(y,"blur",ee.blurEvent),Y.on(y,"focus",ee.focusEvent),!0!==f.colorMask&&(Y.on(y,"click",ee.clickEvent),Y.on(y,"mouseleave",ee.mouseleaveEvent),Y.on(y,"mouseenter",ee.mouseenterEvent)),Y.on(y,"paste",ee.pasteEvent),Y.on(y,"cut",ee.cutEvent),Y.on(y,"complete",f.oncomplete),Y.on(y,"incomplete",f.onincomplete),Y.on(y,"cleared",f.oncleared),o||!0===f.inputEventOnly?y.removeAttribute("maxLength"):(Y.on(y,"keydown",ee.keydownEvent),Y.on(y,"keypress",ee.keypressEvent)),Y.on(y,"input",ee.inputFallBackEvent),Y.on(y,"beforeinput",ee.beforeInputEvent)),Y.on(y,"setvalue",ee.setValueEvent),m=L().join(""),""!==y.inputmask._valueGet(!0)||!1===f.clearMaskOnLostFocus||n.activeElement===y)){var r=e.isFunction(f.onBeforeMask)&&f.onBeforeMask.call(b,y.inputmask._valueGet(!0),f)||y.inputmask._valueGet(!0);""!==r&&te(y,!0,!1,r.split(""));var s=F().slice();m=s.join(""),!1===oe(s)&&f.clearIncomplete&&O(),f.clearMaskOnLostFocus&&n.activeElement!==y&&(-1===S()?s=[]:re(s)),(!1===f.clearMaskOnLostFocus||f.showMaskOnFocus&&n.activeElement===y||""!==y.inputmask._valueGet(!0))&&z(y,s),n.activeElement===y&&ie(y,W(S()))}}(y);break;case"format":return J=(e.isFunction(f.onBeforeMask)&&f.onBeforeMask.call(b,a.value,f)||a.value).split(""),te.call(this,i,!0,!1,J),a.metadata?{value:P?F().slice().reverse().join(""):F().join(""),metadata:h.call(this,{action:"getmetadata"},u,f)}:P?F().slice().reverse().join(""):F().join("");case"isValid":a.value?(J=a.value.split(""),te.call(this,i,!0,!0,J)):a.value=F().join("");for(var ue=F(),fe=ae(),pe=ue.length-1;pe>fe&&!q(pe);pe--);return ue.splice(fe,pe+1-fe),oe(ue)&&a.value===F().join("");case"getemptymask":return L().join("");case"remove":if(y&&y.inputmask)e.data(y,"_inputmask_opts",null),d=e(y),y.inputmask._valueSet(f.autoUnmask?ne(y):y.inputmask._valueGet(!0)),Y.off(y),y.inputmask.colorMask&&((k=y.inputmask.colorMask).removeChild(y),k.parentNode.insertBefore(y,k),k.parentNode.removeChild(k)),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(y),"value")&&y.inputmask.__valueGet&&Object.defineProperty(y,"value",{get:y.inputmask.__valueGet,set:y.inputmask.__valueSet,configurable:!0}):n.__lookupGetter__&&y.__lookupGetter__("value")&&y.inputmask.__valueGet&&(y.__defineGetter__("value",y.inputmask.__valueGet),y.__defineSetter__("value",y.inputmask.__valueSet)),y.inputmask=i;return y;case"getmetadata":if(e.isArray(u.metadata)){var he=A(!0,0,!1).join("");return e.each(u.metadata,function(e,t){if(t.mask===he)return he=t,!1}),he}return u.metadata}}return c.prototype={dataAttribute:"data-inputmask",defaults:{placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:e.noop,onincomplete:e.noop,oncleared:e.noop,repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,clearIncomplete:!1,alias:null,onKeyDown:e.noop,onBeforeMask:null,onBeforePaste:function(t,n){return e.isFunction(n.onBeforeMask)?n.onBeforeMask.call(this,t,n):t},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:e.noop,skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[8,9,13,19,27,33,34,35,36,37,38,39,40,45,46,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:i,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"verbatim",colorMask:!1,disablePredictiveText:!1,importDataAttributes:!0,shiftPositions:!0},definitions:{9:{validator:"[0-9１-９]",definitionSymbol:"*"},a:{validator:"[A-Za-zА-яЁёÀ-ÿµ]",definitionSymbol:"*"},"?":{validator:".",cardinality:1,definitionSymbol:"*"},"*":{validator:"[0-9１-９A-Za-zА-яЁёÀ-ÿµ]"}},aliases:{},masksCache:{},mask:function(a){var r=this;return"string"==typeof a&&(a=n.getElementById(a)||n.querySelectorAll(a)),a=a.nodeName?[a]:a,e.each(a,function(n,a){var o=e.extend(!0,{},r.opts);if(function(n,a,r,o){if(!0===a.importDataAttributes){var s,l,c,f,p=function(e,a){null!==(a=a!==i?a:n.getAttribute(o+"-"+e))&&("string"==typeof a&&(0===e.indexOf("on")?a=t[a]:"false"===a?a=!1:"true"===a&&(a=!0)),r[e]=a)},h=n.getAttribute(o);if(h&&""!==h&&(h=h.replace(/'/g,'"'),l=JSON.parse("{"+h+"}")),l)for(f in c=i,l)if("alias"===f.toLowerCase()){c=l[f];break}for(s in p("alias",c),r.alias&&u(r.alias,r,a),a){if(l)for(f in c=i,l)if(f.toLowerCase()===s.toLowerCase()){c=l[f];break}p(s,c)}}return e.extend(!0,a,r),("rtl"===n.dir||a.rightAlign)&&(n.style.textAlign="right"),("rtl"===n.dir||a.numericInput)&&(n.dir="ltr",n.removeAttribute("dir"),a.isRTL=!0),Object.keys(r).length}(a,o,e.extend(!0,{},r.userOptions),r.dataAttribute)){var s=f(o,r.noMasksCache);s!==i&&(a.inputmask!==i&&(a.inputmask.opts.autoUnmask=a.inputmask.opts.autoUnmask,a.inputmask.remove()),a.inputmask=new c(i,i,!0),a.inputmask.opts=o,a.inputmask.noMasksCache=r.noMasksCache,a.inputmask.userOptions=e.extend(!0,{},r.userOptions),a.inputmask.isRTL=o.isRTL||o.numericInput,a.inputmask.el=a,a.inputmask.maskset=s,e.data(a,"_inputmask_opts",o),h.call(a.inputmask,{action:"mask"}))}}),a&&a[0]&&a[0].inputmask||this},option:function(t,n){return"string"==typeof t?this.opts[t]:"object"===_typeof(t)?(e.extend(this.userOptions,t),this.el&&!0!==n&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"unmaskedvalue",value:e})},remove:function(){return h.call(this,{action:"remove"})},getemptymask:function(){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"getemptymask"})},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"isComplete"})},getmetadata:function(){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"getmetadata"})},isValid:function(e){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"isValid",value:e})},format:function(e,t){return this.maskset=this.maskset||f(this.opts,this.noMasksCache),h.call(this,{action:"format",value:e,metadata:t})},setValue:function(t){this.el&&e(this.el).trigger("setvalue",[t])},analyseMask:function(t,n,a){var r,o,s,l,u,f,p=/(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?(?:\|[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,h=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,m=!1,d=new g,v=[],k=[];function g(e,t,n,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=n||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}function b(t,r,o){o=o!==i?o:t.matches.length;var s=t.matches[o-1];if(n)0===r.indexOf("[")||m&&/\\d|\\s|\\w]/i.test(r)||"."===r?t.matches.splice(o++,0,{fn:new RegExp(r,a.casing?"i":""),optionality:!1,newBlockMarker:s===i?"master":s.def!==r,casing:null,def:r,placeholder:i,nativeDef:r}):(m&&(r=r[r.length-1]),e.each(r.split(""),function(e,n){s=t.matches[o-1],t.matches.splice(o++,0,{fn:null,optionality:!1,newBlockMarker:s===i?"master":s.def!==n&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||n,placeholder:a.staticDefinitionSymbol!==i?n:i,nativeDef:(m?"'":"")+n})})),m=!1;else{var l=(a.definitions?a.definitions[r]:i)||c.prototype.definitions[r];if(l&&!m){for(var u=l.prevalidator,f=u?u.length:0,p=1;p<l.cardinality;p++){var h=f>=p?u[p-1]:[],d=h.validator,v=h.cardinality;t.matches.splice(o++,0,{fn:d?"string"==typeof d?new RegExp(d,a.casing?"i":""):new function(){this.test=d}:new RegExp("."),cardinality:v||1,optionality:t.isOptional,newBlockMarker:s===i||s.def!==(l.definitionSymbol||r),casing:l.casing,def:l.definitionSymbol||r,placeholder:l.placeholder,nativeDef:r}),s=t.matches[o-1]}t.matches.splice(o++,0,{fn:l.validator?"string"==typeof l.validator?new RegExp(l.validator,a.casing?"i":""):new function(){this.test=l.validator}:new RegExp("."),optionality:!1,newBlockMarker:s===i?"master":s.def!==(l.definitionSymbol||r),casing:l.casing,def:l.definitionSymbol||r,placeholder:l.placeholder,nativeDef:r})}else t.matches.splice(o++,0,{fn:null,optionality:!1,newBlockMarker:s===i?"master":s.def!==r&&null!==s.fn,casing:null,def:a.staticDefinitionSymbol||r,placeholder:a.staticDefinitionSymbol!==i?r:i,nativeDef:(m?"'":"")+r}),m=!1}}function y(){if(v.length>0){if(b(l=v[v.length-1],o),l.isAlternator){u=v.pop();for(var e=0;e<u.matches.length;e++)u.matches[e].isGroup&&(u.matches[e].isGroup=!1);v.length>0?(l=v[v.length-1]).matches.push(u):d.matches.push(u)}}else b(d,o)}function P(e){var t=new g(!0);return t.openGroup=!1,t.matches=e,t}for(n&&(a.optionalmarker[0]=i,a.optionalmarker[1]=i);r=n?h.exec(t):p.exec(t);){if(o=r[0],n)switch(o.charAt(0)){case"?":o="{0,1}";break;case"+":case"*":o="{"+o+"}"}if(m)y();else switch(o.charAt(0)){case"(?=":case"(?!":case"(?<=":case"(?<!":break;case a.escapeChar:m=!0,n&&y();break;case a.optionalmarker[1]:case a.groupmarker[1]:if((s=v.pop()).openGroup=!1,s!==i)if(v.length>0){if((l=v[v.length-1]).matches.push(s),l.isAlternator){u=v.pop();for(var E=0;E<u.matches.length;E++)u.matches[E].isGroup=!1,u.matches[E].alternatorGroup=!1;v.length>0?(l=v[v.length-1]).matches.push(u):d.matches.push(u)}}else d.matches.push(s);else y();break;case a.optionalmarker[0]:v.push(new g(!1,!0));break;case a.groupmarker[0]:v.push(new g(!0));break;case a.quantifiermarker[0]:var C=new g(!1,!1,!0),x=(o=o.replace(/[{}]/g,"")).split("|"),_=x[0].split(","),A=isNaN(_[0])?_[0]:parseInt(_[0]),w=1===_.length?A:isNaN(_[1])?_[1]:parseInt(_[1]);"*"!==A&&"+"!==A||(A="*"===w?0:1),C.quantifier={min:A,max:w,jit:x[1]};var O=v.length>0?v[v.length-1].matches:d.matches;if((r=O.pop()).isAlternator){O.push(r),O=r.matches;var S=new g(!0),j=O.pop();O.push(S),O=S.matches,r=j}r.isGroup||(r=P([r])),O.push(r),O.push(C);break;case a.alternatormarker:var M=function(e){var t=e.pop();return t.isQuantifier&&(t=P([e.pop(),t])),t};if(v.length>0){var D=(l=v[v.length-1]).matches[l.matches.length-1];f=l.openGroup&&(D.matches===i||!1===D.isGroup&&!1===D.isAlternator)?v.pop():M(l.matches)}else f=M(d.matches);if(f.isAlternator)v.push(f);else if(f.alternatorGroup?(u=v.pop(),f.alternatorGroup=!1):u=new g(!1,!1,!1,!0),u.matches.push(f),v.push(u),f.openGroup){f.openGroup=!1;var G=new g(!0);G.alternatorGroup=!0,v.push(G)}break;default:y()}}for(;v.length>0;)s=v.pop(),d.matches.push(s);return d.matches.length>0&&(!function t(r){r&&r.matches&&e.each(r.matches,function(e,o){var s=r.matches[e+1];(s===i||s.matches===i||!1===s.isQuantifier)&&o&&o.isGroup&&(o.isGroup=!1,n||(b(o,a.groupmarker[0],0),!0!==o.openGroup&&b(o,a.groupmarker[1]))),t(o)})}(d),k.push(d)),(a.numericInput||a.isRTL)&&function e(t){for(var n in t.matches=t.matches.reverse(),t.matches)if(t.matches.hasOwnProperty(n)){var r=parseInt(n);if(t.matches[n].isQuantifier&&t.matches[r+1]&&t.matches[r+1].isGroup){var o=t.matches[n];t.matches.splice(n,1),t.matches.splice(r+1,0,o)}t.matches[n].matches!==i?t.matches[n]=e(t.matches[n]):t.matches[n]=((s=t.matches[n])===a.optionalmarker[0]?s=a.optionalmarker[1]:s===a.optionalmarker[1]?s=a.optionalmarker[0]:s===a.groupmarker[0]?s=a.groupmarker[1]:s===a.groupmarker[1]&&(s=a.groupmarker[0]),s)}var s;return t}(k[0]),k}},c.extendDefaults=function(t){e.extend(!0,c.prototype.defaults,t)},c.extendDefinitions=function(t){e.extend(!0,c.prototype.definitions,t)},c.extendAliases=function(t){e.extend(!0,c.prototype.aliases,t)},c.format=function(e,t,n){return c(t).format(e,n)},c.unmask=function(e,t){return c(t).unmaskedvalue(e)},c.isValid=function(e,t){return c(t).isValid(e)},c.remove=function(t){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(e,t){t.inputmask&&t.inputmask.remove()})},c.setValue=function(t,i){"string"==typeof t&&(t=n.getElementById(t)||n.querySelectorAll(t)),t=t.nodeName?[t]:t,e.each(t,function(t,n){n.inputmask?n.inputmask.setValue(i):e(n).trigger("setvalue",[i])})},c.escapeRegex=function(e){return e.replace(new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim"),"\\$1")},c.keyCode={BACKSPACE:8,BACKSPACE_SAFARI:127,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,RIGHT:39,SPACE:32,TAB:9,UP:38,X:88,CONTROL:17},c.dependencyLib=e,c}Object.defineProperty(exports,"__esModule",{value:!0}),exports.factory=factory;

},{}]},{},[1]);

(function() {
  // src/core/constants/amp-events.js
  var AmpEvents_Enum = {
    DOM_UPDATE: "amp:dom-update",
    FORM_DIRTINESS_CHANGE: "amp:form-dirtiness-change",
    FORM_VALUE_CHANGE: "amp:form-value-change",
    VISIBILITY_CHANGE: "amp:visibilitychange",
    ATTACHED: "amp:attached",
    STUBBED: "amp:stubbed",
    LOAD_START: "amp:load-start",
    LOAD_END: "amp:load-end",
    ERROR: "amp:error",
    SIZE_CHANGED: "amp:size-changed",
    UNLOAD: "amp:unload"
  };

  // src/core/mode/prod.js
  function isProd() {
    return false;
  }

  // src/core/mode/minified.js
  function isMinified() {
    return false;
  }

  // src/core/mode/esm.js
  function isEsm() {
    var _self$__AMP_MODE$esm, _self, _self$__AMP_MODE;
    if (isProd()) {
      return false;
    }
    return (_self$__AMP_MODE$esm = (_self = self) == null ? void 0 : (_self$__AMP_MODE = _self.__AMP_MODE) == null ? void 0 : _self$__AMP_MODE.esm) != null ? _self$__AMP_MODE$esm : false;
  }

  // src/core/types/object/index.js
  var _Object$prototype = Object.prototype;
  var hasOwn_ = _Object$prototype.hasOwnProperty;
  var toString_ = _Object$prototype.toString;
  function dict(opt_initial) {
    return opt_initial || {};
  }

  // src/core/types/array.js
  var isArray = Array.isArray;

  // src/core/window/index.js
  function toWin(winOrNull) {
    return winOrNull;
  }
  function getWin(node) {
    return toWin((node.ownerDocument || node).defaultView);
  }

  // src/core/error/message-helpers.js
  var USER_ERROR_SENTINEL = "\u200B\u200B\u200B";
  var USER_ERROR_EMBED_SENTINEL = "\u200B\u200B\u200B\u200B";

  // src/core/dom/index.js
  function waitForChild(parent, checkFunc, callback) {
    if (checkFunc(parent)) {
      callback();
      return;
    }
    var win = getWin(parent);
    if (isEsm() || win.MutationObserver) {
      var observer = new win.MutationObserver(function() {
        if (checkFunc(parent)) {
          observer.disconnect();
          callback();
        }
      });
      observer.observe(parent, {
        childList: true
      });
    } else {
      var interval = win.setInterval(function() {
        if (checkFunc(parent)) {
          win.clearInterval(interval);
          callback();
        }
      }, 5);
    }
  }
  function waitForBodyOpen(doc, callback) {
    waitForChild(doc.documentElement, function() {
      return !!doc.body;
    }, callback);
  }
  function waitForBodyOpenPromise(doc) {
    return new Promise(function(resolve) {
      return waitForBodyOpen(doc, resolve);
    });
  }
  function removeElement(element) {
    var _element$parentElemen;
    (_element$parentElemen = element.parentElement) == null ? void 0 : _element$parentElemen.removeChild(element);
  }
  function iterateCursor(iterable, cb) {
    var length = iterable.length;
    for (var i = 0; i < length; i++) {
      cb(iterable[i], i);
    }
  }

  // src/core/dom/event-helper-listen.js
  var optsSupported;
  function internalListenImplementation(element, eventType, listener, opt_evtListenerOpts) {
    var localElement = element;
    var localListener = listener;
    var wrapped = function wrapped2(event) {
      try {
        return localListener(event);
      } catch (e) {
        self.__AMP_REPORT_ERROR == null ? void 0 : self.__AMP_REPORT_ERROR(e);
        throw e;
      }
    };
    var optsSupported2 = detectEvtListenerOptsSupport();
    var capture = !!(opt_evtListenerOpts != null && opt_evtListenerOpts.capture);
    localElement.addEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
    return function() {
      var _localElement;
      (_localElement = localElement) == null ? void 0 : _localElement.removeEventListener(eventType, wrapped, optsSupported2 ? opt_evtListenerOpts : capture);
      localListener = null;
      localElement = null;
      wrapped = null;
    };
  }
  function detectEvtListenerOptsSupport() {
    if (optsSupported !== void 0) {
      return optsSupported;
    }
    optsSupported = false;
    try {
      var options = {
        get capture() {
          optsSupported = true;
        }
      };
      self.addEventListener("test-options", null, options);
      self.removeEventListener("test-options", null, options);
    } catch (err) {
    }
    return optsSupported;
  }

  // src/config.js
  var env = self.AMP_CONFIG || {};
  var thirdPartyFrameRegex = (typeof env["thirdPartyFrameRegex"] == "string" ? new RegExp(env["thirdPartyFrameRegex"]) : env["thirdPartyFrameRegex"]) || /^d-\d+\.ampproject\.net$/;
  var cdnProxyRegex = (typeof env["cdnProxyRegex"] == "string" ? new RegExp(env["cdnProxyRegex"]) : env["cdnProxyRegex"]) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;
  function getMetaUrl(name) {
    if (!self.document || !self.document.head) {
      return null;
    }
    if (self.location && cdnProxyRegex.test(self.location.origin)) {
      return null;
    }
    var metaEl = self.document.head.querySelector('meta[name="' + name + '"]');
    return metaEl && metaEl.getAttribute("content") || null;
  }
  var urls = {
    thirdParty: env["thirdPartyUrl"] || "https://3p.ampproject.net",
    thirdPartyFrameHost: env["thirdPartyFrameHost"] || "ampproject.net",
    thirdPartyFrameRegex: thirdPartyFrameRegex,
    cdn: env["cdnUrl"] || getMetaUrl("runtime-host") || "https://cdn.ampproject.org",
    cdnProxyRegex: cdnProxyRegex,
    localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
    errorReporting: env["errorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
    betaErrorReporting: env["betaErrorReportingUrl"] || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
    localDev: env["localDev"] || false,
    trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
    geoApi: env["geoApiUrl"] || getMetaUrl("amp-geo-api")
  };

  // src/utils/log.js
  var LogLevel_Enum = {
    OFF: 0,
    ERROR: 1,
    WARN: 2,
    INFO: 3,
    FINE: 4
  };
  self.__AMP_LOG = self.__AMP_LOG || {
    user: null,
    dev: null,
    userForEmbed: null
  };
  var logs = self.__AMP_LOG;
  var logConstructor = null;
  function callLogConstructor(levelFunc, opt_suffix) {
    if (!logConstructor) {
      throw new Error("failed to call initLogConstructor");
    }
    return new logConstructor(self, levelFunc, opt_suffix);
  }
  function user(opt_element) {
    if (!logs.user) {
      logs.user = getUserLogger(USER_ERROR_SENTINEL);
    }
    if (isFromEmbed(logs.user.win, opt_element)) {
      return logs.userForEmbed || (logs.userForEmbed = getUserLogger(USER_ERROR_EMBED_SENTINEL));
    }
    return logs.user;
  }
  function getUserLogger(suffix) {
    return callLogConstructor(function(logNum, development) {
      return development || logNum >= 1 ? LogLevel_Enum.FINE : LogLevel_Enum.WARN;
    }, suffix);
  }
  function dev() {
    return logs.dev || (logs.dev = callLogConstructor(function(logNum) {
      return logNum >= 3 ? LogLevel_Enum.FINE : logNum >= 2 ? LogLevel_Enum.INFO : LogLevel_Enum.OFF;
    }));
  }
  function isFromEmbed(win, opt_element) {
    return opt_element && opt_element.ownerDocument.defaultView != win;
  }
  function devAssert2(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    if (isMinified()) {
      return shouldBeTrueish;
    }
    if (self.__AMP_ASSERTION_CHECK) {
      console.log("__devAssert_sentinel__");
    }
    return dev().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }
  function userAssert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9) {
    return user().assert(shouldBeTrueish, opt_message, opt_1, opt_2, opt_3, opt_4, opt_5, opt_6, opt_7, opt_8, opt_9);
  }

  // src/utils/event-helper.js
  function listen(element, eventType, listener, opt_evtListenerOpts) {
    return internalListenImplementation(element, eventType, listener, opt_evtListenerOpts);
  }

  // src/service/extension-script.js
  function parseExtensionUrl(scriptUrl) {
    if (!scriptUrl) {
      return null;
    }
    var matches2 = scriptUrl.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i);
    var extensionId = matches2 ? matches2[2] : void 0;
    var extensionVersion = matches2 ? matches2[3] : void 0;
    if (!extensionId || !extensionVersion) {
      return null;
    }
    return {
      extensionId: extensionId,
      extensionVersion: extensionVersion
    };
  }
  function extensionScriptsInNode(head) {
    if (!head) {
      return [];
    }
    var list = head.querySelectorAll("script[custom-element],script[custom-template]");
    var scripts = [];
    for (var i = 0; i < list.length; i++) {
      var script = list[i];
      var extensionId = script.getAttribute("custom-element") || script.getAttribute("custom-template");
      var urlParts = parseExtensionUrl(script.src);
      if (extensionId && urlParts) {
        scripts.push({
          script: script,
          extensionId: extensionId,
          extensionVersion: urlParts.extensionVersion
        });
      }
    }
    return scripts;
  }
  function extensionScriptInNode(win, id, version2) {
    return extensionScriptsInNode(win.document.head).some(function(_ref) {
      var extensionId = _ref.extensionId, extensionVersion = _ref.extensionVersion;
      return id == extensionId && version2 == extensionVersion;
    });
  }

  // src/core/data-structures/promise.js
  var Deferred = function Deferred2() {
    var _this = this;
    this.promise = new Promise(function(res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    });
  };

  // src/service-helpers.js
  function getService(win, id) {
    win = getTopWindow(win);
    return getServiceInternal(win, id);
  }
  function getServiceInEmbedWin(win, id) {
    return getServiceInternal(win, id);
  }
  function getServicePromise(win, id) {
    return getServicePromiseInternal(win, id);
  }
  function getExistingServiceOrNull(win, id) {
    win = getTopWindow(win);
    if (isServiceRegistered(win, id)) {
      return getServiceInternal(win, id);
    } else {
      return null;
    }
  }
  function getServicePromiseOrNull(win, id) {
    return getServicePromiseOrNullInternal(win, id);
  }
  function getServiceForDoc(elementOrAmpDoc, id) {
    var ampdoc2 = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    return getServiceInternal(holder, id);
  }
  function getServiceForDocOrNull(elementOrAmpDoc, id) {
    var ampdoc2 = getAmpdoc(elementOrAmpDoc);
    var holder = getAmpdocServiceHolder(ampdoc2);
    if (isServiceRegistered(holder, id)) {
      return getServiceInternal(holder, id);
    } else {
      return null;
    }
  }
  function getServicePromiseForDoc(elementOrAmpDoc, id) {
    return getServicePromiseInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getServicePromiseOrNullForDoc(elementOrAmpDoc, id) {
    return getServicePromiseOrNullInternal(getAmpdocServiceHolder(elementOrAmpDoc), id);
  }
  function getTopWindow(win) {
    return win.__AMP_TOP || (win.__AMP_TOP = win);
  }
  function getAmpdoc(nodeOrDoc) {
    if (nodeOrDoc.nodeType) {
      var win = getWin(nodeOrDoc);
      return getAmpdocService(win).getAmpDoc(nodeOrDoc);
    }
    return nodeOrDoc;
  }
  function getAmpdocServiceHolder(nodeOrDoc) {
    var ampdoc2 = getAmpdoc(nodeOrDoc);
    return ampdoc2.isSingleDoc() ? ampdoc2.win : ampdoc2;
  }
  function getAmpdocService(win) {
    return getService(win, "ampdoc");
  }
  function getServiceInternal(holder, id) {
    devAssert2(isServiceRegistered(holder, id), "Expected service " + id + " to be registered");
    var services = getServices(holder);
    var s = services[id];
    if (!s.obj) {
      devAssert2(s.ctor, "Service " + id + " registered without ctor nor impl.");
      devAssert2(s.context, "Service " + id + " registered without context.");
      s.obj = new s.ctor(s.context);
      devAssert2(s.obj, "Service " + id + " constructed to null.");
      s.context = null;
      if (s.resolve) {
        s.resolve(s.obj);
      }
    }
    return s.obj;
  }
  function getServicePromiseInternal(holder, id) {
    var cached = getServicePromiseOrNullInternal(holder, id);
    if (cached) {
      return cached;
    }
    var services = getServices(holder);
    services[id] = emptyServiceHolderWithPromise();
    return services[id].promise;
  }
  function getServicePromiseOrNullInternal(holder, id) {
    var services = getServices(holder);
    var s = services[id];
    if (s) {
      if (s.promise) {
        return s.promise;
      } else {
        getServiceInternal(holder, id);
        return s.promise = Promise.resolve(s.obj);
      }
    }
    return null;
  }
  function getServices(holder) {
    var services = holder.__AMP_SERVICES;
    if (!services) {
      services = holder.__AMP_SERVICES = {};
    }
    return services;
  }
  function isServiceRegistered(holder, id) {
    var service = holder.__AMP_SERVICES && holder.__AMP_SERVICES[id];
    return !!(service && service.ctor);
  }
  function emptyServiceHolderWithPromise() {
    var deferred = new Deferred();
    var promise = deferred.promise, reject = deferred.reject, resolve = deferred.resolve;
    promise.catch(function() {
    });
    return {
      obj: null,
      promise: promise,
      resolve: resolve,
      reject: reject,
      context: null,
      ctor: null
    };
  }

  // src/element-service.js
  function getElementServiceIfAvailable(win, id, extension, version2, opt_element) {
    var s = getServicePromiseOrNull(win, id);
    if (s) {
      return s;
    }
    return getElementServicePromiseOrNull(win, id, extension, version2, opt_element);
  }
  function getElementServiceForDoc(element, id, extension, opt_element) {
    return getElementServiceIfAvailableForDoc(element, id, extension, opt_element).then(function(service) {
      return assertService(service, id, extension);
    });
  }
  function getElementServiceIfAvailableForDoc(element, id, extension, opt_element) {
    var s = getServicePromiseOrNullForDoc(element, id);
    if (s) {
      return s;
    }
    var ampdoc2 = getAmpdoc(element);
    return ampdoc2.whenExtensionsKnown().then(function() {
      var version2 = ampdoc2.getExtensionVersion(extension);
      if (!version2) {
        return null;
      }
      var extensions = getService(ampdoc2.win, "extensions");
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNullForDoc(element, id);
      }
      return getServicePromiseForDoc(element, id);
    });
  }
  function getElementServiceIfAvailableForDocInEmbedScope(element, id, extension) {
    var s = getServiceForDocOrNull(element, id);
    if (s) {
      return Promise.resolve(s);
    }
    return getElementServiceIfAvailableForDoc(element, id, extension);
  }
  function assertService(service, id, extension) {
    return userAssert(service, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", id, extension, extension, extension);
  }
  function getElementServicePromiseOrNull(win, id, extension, version2, opt_element) {
    return waitForBodyOpenPromise(win.document).then(function() {
      var extensions = getService(win, "extensions");
      if (!extensionScriptInNode(extensions.win, extension, version2)) {
        return null;
      }
      return extensions.waitForExtension(extension, version2);
    }).then(function(ext) {
      if (!ext) {
        return null;
      }
      if (opt_element) {
        return getServicePromiseOrNull(win, id);
      }
      return getServicePromise(win, id);
    });
  }

  // src/service/index.js
  function ampdocServiceForInternal(window) {
    return getService(window, "ampdoc");
  }
  function ampdocInternal(nodeOrAmpDoc) {
    return getAmpdoc(nodeOrAmpDoc);
  }
  function extensionsForInternal(window) {
    return getService(window, "extensions");
  }
  var Services = {
    accessServiceForDoc: function accessServiceForDoc(element) {
      return getElementServiceForDoc(element, "access", "amp-access");
    },
    accessServiceForDocOrNull: function accessServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "access", "amp-access");
    },
    subscriptionsServiceForDoc: function subscriptionsServiceForDoc(element) {
      return getElementServiceForDoc(element, "subscriptions", "amp-subscriptions");
    },
    subscriptionsServiceForDocOrNull: function subscriptionsServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "subscriptions", "amp-subscriptions");
    },
    actionServiceForDoc: function actionServiceForDoc(element) {
      return getServiceForDocOrNull(element, "action");
    },
    standardActionsForDoc: function standardActionsForDoc(element) {
      return getServiceForDocOrNull(element, "standard-actions");
    },
    activityForDoc: function activityForDoc(element) {
      return getElementServiceForDoc(element, "activity", "amp-analytics");
    },
    ampdoc: function ampdoc(nodeOrAmpdoc) {
      return ampdocInternal(nodeOrAmpdoc);
    },
    ampdocServiceFor: function ampdocServiceFor(win) {
      return ampdocServiceForInternal(win);
    },
    analyticsForDoc: function analyticsForDoc(element, loadAnalytics) {
      if (loadAnalytics === void 0) {
        loadAnalytics = false;
      }
      if (loadAnalytics) {
        var ampdoc2 = getAmpdoc(element);
        extensionsForInternal(ampdoc2.win).installExtensionForDoc(ampdoc2, "amp-analytics");
      }
      return getElementServiceForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    },
    analyticsForDocOrNull: function analyticsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "amp-analytics-instrumentation", "amp-analytics");
    },
    batchedXhrFor: function batchedXhrFor(window) {
      return getService(window, "batched-xhr");
    },
    bindForDocOrNull: function bindForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "bind", "amp-bind");
    },
    scriptForDocOrNull: function scriptForDocOrNull(element) {
      return getElementServiceIfAvailableForDocInEmbedScope(element, "amp-script", "amp-script");
    },
    cidForDoc: function cidForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cid");
    },
    navigationForDoc: function navigationForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "navigation");
    },
    loaderServiceForDoc: function loaderServiceForDoc(element) {
      return getElementServiceForDoc(element, "loader", "amp-loader");
    },
    standaloneServiceForDoc: function standaloneServiceForDoc(element) {
      return getElementServiceForDoc(element, "standalone", "amp-standalone");
    },
    cryptoFor: function cryptoFor(window) {
      return getService(window, "crypto");
    },
    documentInfoForDoc: function documentInfoForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "documentInfo").get();
    },
    extensionsFor: function extensionsFor(win) {
      return extensionsForInternal(win);
    },
    formSubmitForDoc: function formSubmitForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "form-submit-service");
    },
    hiddenObserverForDoc: function hiddenObserverForDoc(element) {
      return getServiceForDocOrNull(element, "hidden-observer");
    },
    historyForDoc: function historyForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "history");
    },
    inputFor: function inputFor(win) {
      return getService(win, "input");
    },
    inputmaskServiceForDocOrNull: function inputmaskServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "inputmask", "amp-inputmask");
    },
    loadingIndicatorOrNull: function loadingIndicatorOrNull(elementOrAmpDoc) {
      return getServiceForDocOrNull(elementOrAmpDoc, "loadingIndicator");
    },
    nextPageServiceForDoc: function nextPageServiceForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "next-page");
    },
    mutatorForDoc: function mutatorForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "mutator");
    },
    ownersForDoc: function ownersForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "owners");
    },
    performanceFor: function performanceFor(window) {
      return getService(window, "performance");
    },
    performanceForOrNull: function performanceForOrNull(window) {
      return getExistingServiceOrNull(window, "performance");
    },
    platformFor: function platformFor(window) {
      return getService(window, "platform");
    },
    positionObserverForDoc: function positionObserverForDoc(element) {
      return getServiceForDoc(element, "position-observer");
    },
    preconnectFor: function preconnectFor(window) {
      return getService(window, "preconnect");
    },
    resourcesForDoc: function resourcesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "resources");
    },
    resourcesPromiseForDoc: function resourcesPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "resources");
    },
    storyVariableServiceForOrNull: function storyVariableServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-variable", "amp-story", "1.0");
    },
    storyVariableService: function storyVariableService(win) {
      return getExistingServiceOrNull(win, "story-variable");
    },
    storyStoreServiceForOrNull: function storyStoreServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-store", "amp-story", "1.0");
    },
    storyStoreService: function storyStoreService(win) {
      return getExistingServiceOrNull(win, "story-store");
    },
    storyRequestServiceForOrNull: function storyRequestServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-request", "amp-story", "1.0");
    },
    storyRequestService: function storyRequestService(win) {
      return getExistingServiceOrNull(win, "story-request");
    },
    mediaPerformanceMetricsService: function mediaPerformanceMetricsService(win) {
      return getExistingServiceOrNull(win, "media-performance-metrics");
    },
    localizationServiceForOrNull: function localizationServiceForOrNull(el) {
      return getServicePromiseForDoc(el, "localization");
    },
    localizationForDoc: function localizationForDoc(element) {
      return getServiceForDocOrNull(element, "localization");
    },
    storyAnalyticsServiceForOrNull: function storyAnalyticsServiceForOrNull(win) {
      return getElementServiceIfAvailable(win, "story-analytics", "amp-story", "1.0", true);
    },
    storyAnalyticsService: function storyAnalyticsService(win) {
      return getExistingServiceOrNull(win, "story-analytics");
    },
    webAnimationServiceFor: function webAnimationServiceFor(element) {
      return getElementServiceForDoc(element, "web-animation", "amp-animation");
    },
    realTimeConfigForDoc: function realTimeConfigForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "real-time-config");
    },
    storageForDoc: function storageForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "storage");
    },
    storageForTopLevelDoc: function storageForTopLevelDoc(elementOrAmpDoc) {
      var thisAmpdoc = ampdocInternal(elementOrAmpDoc);
      var ampdocService = ampdocServiceForInternal(thisAmpdoc.win);
      var topAmpdoc = ampdocService.isSingleDoc() ? ampdocService.getSingleDoc() : null;
      var ampdoc2 = topAmpdoc && topAmpdoc.win == thisAmpdoc.win ? topAmpdoc : thisAmpdoc;
      return getServicePromiseForDoc(ampdoc2, "storage");
    },
    templatesForDoc: function templatesForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "templates");
    },
    timerFor: function timerFor(window) {
      return getServiceInEmbedWin(window, "timer");
    },
    urlReplacementsForDoc: function urlReplacementsForDoc(element) {
      return getServiceForDocOrNull(element, "url-replace");
    },
    userNotificationManagerForDoc: function userNotificationManagerForDoc(element) {
      return getElementServiceForDoc(element, "userNotificationManager", "amp-user-notification");
    },
    consentPolicyServiceForDocOrNull: function consentPolicyServiceForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "consentPolicyManager", "amp-consent");
    },
    geoForDocOrNull: function geoForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "geo", "amp-geo", true);
    },
    urlForDoc: function urlForDoc(element) {
      return getServiceForDocOrNull(element, "url");
    },
    variantsForDocOrNull: function variantsForDocOrNull(element) {
      return getElementServiceIfAvailableForDoc(element, "variant", "amp-experiment", true);
    },
    videoManagerForDoc: function videoManagerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "video-manager");
    },
    viewerForDoc: function viewerForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewer");
    },
    viewerPromiseForDoc: function viewerPromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "viewer");
    },
    vsyncFor: function vsyncFor(window) {
      return getService(window, "vsync");
    },
    viewportForDoc: function viewportForDoc(elementOrAmpDoc) {
      return getServiceForDoc(elementOrAmpDoc, "viewport");
    },
    xhrFor: function xhrFor(window) {
      return getService(window, "xhr");
    },
    cacheUrlServicePromiseForDoc: function cacheUrlServicePromiseForDoc(elementOrAmpDoc) {
      return getServicePromiseForDoc(elementOrAmpDoc, "cache-url");
    }
  };

  // extensions/amp-inputmask/0.1/constants.js
  var MaskChars = {
    ALPHANUMERIC_REQUIRED: "A",
    ALPHANUMERIC_OPTIONAL: "a",
    ALPHABETIC_REQUIRED: "L",
    ALPHABETIC_OPTIONAL: "l",
    ARBITRARY_REQUIRED: "C",
    ARBITRARY_OPTIONAL: "c",
    NUMERIC_REQUIRED: "0",
    NUMERIC_OPTIONAL: "9",
    ESCAPE: "\\"
  };
  var MASK_SEPARATOR_CHAR = " ";
  var NamedMasks = {
    PAYMENT_CARD: "payment-card",
    DATE_DD_MM_YYYY: "date-dd-mm-yyyy",
    DATE_MM_DD_YYYY: "date-mm-dd-yyyy",
    DATE_MM_YY: "date-mm-yy",
    DATE_YYYY_MM_DD: "date-yyyy-mm-dd"
  };
  var OutputMode = {
    RAW: "raw",
    ALPHANUMERIC: "alphanumeric"
  };

  // extensions/amp-inputmask/0.1/inputmask-custom-alias.js
  function factory(Inputmask) {
    Inputmask.extendAliases(getAliasDefinition());
  }
  function getAliasDefinition() {
    return dict({
      "custom": {
        "prefixes": [],
        "mask": function mask(opts) {
          var customMask = opts["customMask"];
          opts["prefixes"] = getPrefixSubsets(customMask);
          return customMask;
        },
        "onBeforeMask": function onBeforeMask(value, opts) {
          var prefixes = opts["prefixes"];
          var trimZeros = opts["trimZeros"] || 0;
          var processedValue = value.replace(new RegExp("^0{0," + trimZeros + "}"), "").replace(/[\s]/g, "");
          return removePrefix(processedValue, prefixes);
        }
      }
    });
  }
  var prefixRe = /^([^\*\[\]a\?9\\]+)[\*\[\]a\?9\\]/i;
  function getPrefixSubsets(mask) {
    var masks = typeof mask == "string" ? [mask] : mask;
    var prefixes = {};
    for (var i = 0; i < masks.length; i++) {
      var prefix = getMaskPrefix(masks[i]);
      if (prefix.length == 0) {
        continue;
      }
      if (prefix.length > 5) {
        user().warn("AMP-INPUTMASK", "amp-inputmask does not support prefix trimming for masks that start with more than 5 non-mask characters.");
        continue;
      }
      var stack = [prefix];
      while (stack.length) {
        var _prefix = stack.pop();
        prefixes[_prefix] = true;
        if (_prefix.length > 1) {
          stack.push(_prefix.slice(1));
          stack.push(_prefix.slice(0, -1));
        }
      }
    }
    return Object.keys(prefixes);
  }
  function getMaskPrefix(mask) {
    var processedMask = mask.replace(/[\s]/g, "");
    var match = prefixRe.exec(processedMask);
    var prefix = match && match[1] || "";
    return prefix;
  }
  function removePrefix(value, prefixes) {
    var longestPrefix = prefixes.filter(function(prefix) {
      return value.startsWith(prefix);
    }).sort(function(a, b) {
      return b.length - a.length;
    })[0];
    if (longestPrefix) {
      return value.slice(longestPrefix.length);
    } else {
      return value;
    }
  }

  // extensions/amp-inputmask/0.1/inputmask-payment-card-alias.js
  function factory2(Inputmask) {
    Inputmask.extendAliases(dict({
      "payment-card": {
        "postValidation": function postValidation(buffer) {
          return /[\s\d]+/.test(buffer.join(""));
        },
        "mask": function mask(opts) {
          opts["definitions"] = dict({
            "x": {
              "validator": function validator(chrs, buffer) {
                var val = buffer.buffer.join("") + chrs;
                var valExp2 = new RegExp("\\d\\d");
                var regextest = valExp2.test(val);
                return regextest && val != "34" && val != "37";
              },
              "cardinality": 2
            },
            "y": {
              "validator": function validator(chrs, buffer) {
                var val = buffer.buffer.join("") + chrs;
                var valExp2 = /3(4|7)/;
                var regextest = valExp2.test(val);
                return regextest;
              },
              "cardinality": 2
            }
          });
          return ["y99 999999 99999", "x99 9999 9999 9999", "9999 999999 99999", "9999 9999 9999 9999"];
        }
      }
    }));
  }

  // src/module.js
  var TAG = "AMP.require";
  function requireExternal(module) {
    var required = AMP.dependencies && AMP.dependencies[module] || AMP.require && AMP.require(module);
    if (required) {
      return required;
    } else {
      dev().error(TAG, "Could not require external module %s. Did you import the bundle in the extension?", module);
    }
  }

  // extensions/amp-inputmask/0.1/mask-impl.js
  var _dict;
  var _dict2;
  var NamedMasksToInputmask = dict((_dict = {}, _dict[NamedMasks.PAYMENT_CARD] = "payment-card", _dict[NamedMasks.DATE_DD_MM_YYYY] = {
    "alias": "datetime",
    "inputFormat": "dd/mm/yyyy"
  }, _dict[NamedMasks.DATE_MM_DD_YYYY] = {
    "alias": "datetime",
    "inputFormat": "mm/dd/yyyy"
  }, _dict[NamedMasks.DATE_MM_YY] = {
    "alias": "datetime",
    "inputFormat": "mm/yy"
  }, _dict[NamedMasks.DATE_YYYY_MM_DD] = {
    "alias": "datetime",
    "inputFormat": "yyyy-mm-dd"
  }, _dict));
  var MaskCharsToInputmask = dict((_dict2 = {}, _dict2[MaskChars.ALPHANUMERIC_REQUIRED] = "*", _dict2[MaskChars.ALPHANUMERIC_OPTIONAL] = "[*]", _dict2[MaskChars.ALPHABETIC_REQUIRED] = "a", _dict2[MaskChars.ALPHABETIC_OPTIONAL] = "[a]", _dict2[MaskChars.ARBITRARY_REQUIRED] = "?", _dict2[MaskChars.ARBITRARY_OPTIONAL] = "[?]", _dict2[MaskChars.NUMERIC_REQUIRED] = "9", _dict2[MaskChars.NUMERIC_OPTIONAL] = "[9]", _dict2[MaskChars.ESCAPE] = "\\", _dict2));
  var Mask = /* @__PURE__ */ function() {
    function Mask2(element, mask) {
      var _this = this;
      this.Inputmask_ = this.getInputmask_(element);
      this.element_ = element;
      var config = dict({
        "placeholder": "\u2000",
        "showMaskOnHover": false,
        "showMaskOnFocus": false,
        "noValuePatching": true,
        "jitMasking": true
      });
      var trimmedMask = mask.trim();
      var namedFormat = NamedMasksToInputmask[trimmedMask];
      if (namedFormat) {
        if (typeof namedFormat == "object") {
          Object.assign(config, namedFormat);
        } else {
          config["alias"] = namedFormat;
        }
      } else {
        config["alias"] = "custom";
        var inputmaskMask = convertAmpMaskToInputmask(trimmedMask);
        config["customMask"] = inputmaskMask;
        var trimZeros = element.getAttribute("mask-trim-zeros");
        config["trimZeros"] = trimZeros ? Number(trimZeros) : 2;
      }
      this.controller_ = this.Inputmask_(config);
      this.element_.addEventListener(AmpEvents_Enum.FORM_VALUE_CHANGE, function() {
        _this.mask();
      });
    }
    var _proto = Mask2.prototype;
    _proto.getInputmask_ = function getInputmask_(element) {
      if (this.Inputmask_) {
        return this.Inputmask_;
      }
      var inputmaskFactory = requireExternal("inputmaskFactory");
      var Inputmask = inputmaskFactory(element);
      factory(Inputmask);
      factory2(Inputmask);
      Inputmask.extendDefaults(dict({
        "supportsInputType": [
          "text",
          "tel",
          "search"
        ]
      }));
      return Inputmask;
    };
    _proto.mask = function mask() {
      this.controller_.mask(this.element_);
    };
    _proto.getValue = function getValue() {
      return this.element_.value;
    };
    _proto.getUnmaskedValue = function getUnmaskedValue() {
      var value = this.element_.value;
      return getAlphaNumeric(value);
    };
    _proto.dispose = function dispose() {
      this.controller_.remove();
      this.controller_ = null;
    };
    return Mask2;
  }();
  function convertAmpMaskToInputmask(ampMask) {
    var masks = ampMask.split(MASK_SEPARATOR_CHAR).map(function(m) {
      return m.replace(/_/g, " ");
    });
    return masks.map(function(mask) {
      var escapeNext = false;
      return mask.split("").map(function(c) {
        var escape = escapeNext;
        escapeNext = c == MaskChars.ESCAPE;
        return (escape ? c : MaskCharsToInputmask[c]) || c;
      }).join("");
    });
  }
  var NONALPHANUMERIC_REGEXP = /[^0-9\xB2\xB3\xB9\xBC-\xBE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D58-\u0D5E\u0D66-\u0D78\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7B9\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/g;
  function getAlphaNumeric(value) {
    return value.replace(NONALPHANUMERIC_REGEXP, "");
  }

  // extensions/amp-inputmask/0.1/text-mask.js
  var ELEMENT_MASK_PROPERTY = "__amp_inputmask_masked";
  var ELEMENT_MASK_OUTPUT_PROPERTY = "__amp_inputmask_hidden";
  var TextMask = /* @__PURE__ */ function() {
    TextMask2.isMasked = function isMasked(element) {
      return Boolean(element[ELEMENT_MASK_PROPERTY]);
    };
    TextMask2.isMaskOutputElement = function isMaskOutputElement(element) {
      return Boolean(element[ELEMENT_MASK_OUTPUT_PROPERTY]);
    };
    function TextMask2(element) {
      var _this = this;
      this.element_ = element;
      this.document_ = element.ownerDocument;
      this.hiddenInput_ = null;
      this.outputMode_ = element.getAttribute("mask-output") || OutputMode.RAW;
      var mask = element.getAttribute("mask");
      this.controller_ = new Mask(element, mask);
      this.controller_.mask();
      Services.formSubmitForDoc(element).then(function(formSubmitService) {
        formSubmitService.beforeSubmit(function(e) {
          if (e.form != _this.element_.form) {
            return;
          }
          _this.handleBeforeSubmit_(e.form);
        });
      });
      element[ELEMENT_MASK_PROPERTY] = true;
    }
    var _proto = TextMask2.prototype;
    _proto.handleBeforeSubmit_ = function handleBeforeSubmit_(form) {
      if (this.outputMode_ != OutputMode.ALPHANUMERIC) {
        return;
      }
      var name = this.element_.name || this.element_.id;
      if (!name) {
        return;
      }
      var disabled = this.element_.disabled;
      if (disabled) {
        if (this.hiddenInput_) {
          removeElement(this.hiddenInput_);
        }
        return;
      }
      if (!this.hiddenInput_) {
        var hiddenName = name + "-unmasked";
        iterateCursor(this.element_.form.elements, function(element) {
          var name2 = element.name;
          if (name2 == hiddenName && TextMask2.isMaskOutputElement(element)) {
            return;
          }
          userAssert(name2 != hiddenName, "Illegal input name, %s found: %s", name2, element);
        });
        var hidden = this.document_.createElement("input");
        hidden.type = "hidden";
        hidden.name = hiddenName;
        hidden[ELEMENT_MASK_OUTPUT_PROPERTY] = true;
        form.appendChild(hidden);
        this.hiddenInput_ = hidden;
      }
      this.hiddenInput_.value = this.outputMode_ == OutputMode.ALPHANUMERIC ? this.controller_.getUnmaskedValue() : this.controller_.getValue();
    };
    _proto.dispose = function dispose() {
      delete this.element_[ELEMENT_MASK_PROPERTY];
      if (this.hiddenInput_) {
        removeElement(this.hiddenInput_);
      }
      this.controller_.dispose();
    };
    return TextMask2;
  }();

  // extensions/amp-inputmask/0.1/amp-inputmask.js
  var SERVICE = "inputmask";
  var TAG2 = "amp-" + SERVICE;
  var AmpInputmaskService = /* @__PURE__ */ function() {
    function AmpInputmaskService2(ampdoc2) {
      var _this = this;
      this.ampdoc = ampdoc2;
      this.masks_ = [];
      this.domUpdateUnlistener_ = listen(this.ampdoc.getRootNode(), AmpEvents_Enum.DOM_UPDATE, function() {
        return _this.install();
      });
    }
    var _proto = AmpInputmaskService2.prototype;
    _proto.install = function install() {
      var _this2 = this;
      var maskElements = this.ampdoc.getRootNode().querySelectorAll("input[mask]");
      iterateCursor(maskElements, function(element) {
        if (TextMask.isMasked(element)) {
          return;
        }
        var tm = new TextMask(element);
        _this2.masks_.push(tm);
      });
    };
    _proto.uninstall = function uninstall() {
      this.domUpdateUnlistener_();
      this.masks_.forEach(function(m) {
        return m.dispose();
      });
      this.masks_ = [];
    };
    return AmpInputmaskService2;
  }();
  AMP.registerServiceForDoc(SERVICE, function(ampdoc2) {
    return new AmpInputmaskService(ampdoc2);
  });
})();
/*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
})});
//# sourceMappingURL=amp-inputmask-0.1.max.js.map
