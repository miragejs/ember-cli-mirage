/*! For license information please see chunk.916.73d70d0a4eb4e5ff717f.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[916],{2791:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
var i=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==o)return o
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),o=i.window,s=i.console,a=i.setTimeout,u=i.clearTimeout,l=o&&o.document,c=o&&o.navigator,f=function(){var e="qunit-test-string"
try{return i.sessionStorage.setItem(e,e),i.sessionStorage.removeItem(e),i.sessionStorage}catch(e){return}}(),d="function"==typeof i.Map?i.Map:function(){var e=Object.create(null),t=Object.prototype.hasOwnProperty
this.get=function(t){return e[t]},this.set=function(n,r){return t.call(e,n)||this.size++,e[n]=r,this},this.delete=function(n){t.call(e,n)&&(delete e[n],this.size--)},this.forEach=function(t){for(var n in e)t(e[n],n)},this.clear=function(){e=Object.create(null),this.size=0},this.size=0}
function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),e}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||y(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function b(e){return function(e){if(Array.isArray(e))return k(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||y(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){if(e){if("string"==typeof e)return k(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}function k(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var w={warn:s?Function.prototype.bind.call(s.warn||s.log,s):function(){}},x=Object.prototype.toString,E=Object.prototype.hasOwnProperty,T=Date.now||function(){return(new Date).getTime()},C=o&&void 0!==o.performance&&"function"==typeof o.performance.mark&&"function"==typeof o.performance.measure?o.performance:void 0,N={now:C?C.now.bind(C):T,measure:C?function(e,t,n){try{C.measure(e,t,n)}catch(e){w.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:C?C.mark.bind(C):function(){}}
function S(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--
break}return n}function j(e,t){return-1!==t.indexOf(e)}function q(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&_("array",e)?[]:{}
for(var r in e)if(E.call(e,r)){var i=e[r]
n[r]=i===Object(i)?q(i,t):i}return n}function M(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)E.call(t,r)&&E.call(e,r)&&(n[r]=M(e[r],t[r]))
return n}function I(e,t,n){for(var r in t)E.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function R(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=x.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return h(e)}}function _(e,t){return R(t)===e}function O(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function A(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var L=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===h(e)&&(e=e.valueOf()),"object"===h(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function i(t,n){return t===n||(-1===["object","array","map","set"].indexOf(R(t))?s(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var o={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!i(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var i=!1
n.forEach((function(n){if(!i){var r=e
a(n,t)&&(i=!0),e=r}})),i||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,i){if(r){var o=!1
n.forEach((function(n,r){if(!o){var s=e
a([n,r],[t,i])&&(o=!0),e=s}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),i=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),i&&null===i.constructor&&(i=null),null===r&&i===Object.prototype||null===i&&r===Object.prototype)}(e,n))return!1
var r=[],o=[]
for(var a in e)if(r.push(a),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[a]||"function"!=typeof n[a]||e[a].toString()!==n[a].toString())&&!i(e[a],n[a]))return!1
for(var u in n)o.push(u)
return s(r.sort(),o.sort())}}
function s(e,t){var n=R(e)
return R(t)===n&&o[n](e,t)}function a(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.a!==i.b&&!s(i.a,i.b))return!1}return 2===arguments.length||a.apply(this,[].slice.call(arguments,1))}return function(){var t=a.apply(void 0,arguments)
return e.length=0,t}}(),H={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},callbacks:{},storage:f},P=i&&i.QUnit&&!i.QUnit.version&&i.QUnit.config
P&&I(H,P),H.modules.push(H.currentModule)
var U=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=o.separator(),i=o.indent(1)
return t.join&&(t=t.join(","+r+i)),t?[e,i+t,o.indent()+n].join(r):e+n}function r(e,t){if(o.maxDepth&&o.depth>o.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,i=new Array(r);r--;)i[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",i,"]")}var i=/^function (\w+)/,o={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var i=this.parsers[t],o=h(i)
if("function"===o){n.push(e)
var s=i.call(this,e,n)
return n.pop(),s}return"string"===o?i:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":_("regexp",e)?"regexp":_("date",e)?"date":_("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===x.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":h(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:H.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(i.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",o.parse(e,"functionArgs"),"){"].join(""),o.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(o.maxDepth&&o.depth>o.maxDepth)return"[object Object]"
o.up()
var i=[]
for(var s in e)i.push(s)
var a=["message","name"]
for(var u in a){var l=a[u]
l in e&&!j(l,i)&&i.push(l)}i.sort()
for(var c=0;c<i.length;c++){var f=i[c],d=e[f]
r.push(o.parse(f,"key")+": "+o.parse(d,void 0,t))}return o.down(),n("{",r,"}")},node:function(e){var t=o.HTML?"&lt;":"<",n=o.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r,s=e.attributes
if(s)for(var a=0,u=s.length;a<u;a++){var l=s[a].nodeValue
l&&"inherit"!==l&&(i+=" "+s[a].nodeName+"="+o.parse(l,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return o}(),D=function(){function e(t,n){p(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return m(e,[{key:"start",value:function(e){if(e){this._startTime=N.now()
var t=this.fullName.length
N.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=N.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
N.mark("qunit_suite_".concat(t,"_end")),N.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),F=[],B=new D
function Q(e,t,n){var r=F.length?F.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:B,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={}
r&&I(u,r.testEnvironment),I(u,t)
var l={name:i,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:u,tests:[],moduleId:O(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new D(e,o),stats:null,skip:s,todo:!s&&a,ignored:n.ignored||!1}
return r&&r.childModules.push(l),H.modules.push(l),l}function z(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function $(e,t){return function(n){H.currentModule!==e&&w.warn("The `"+t+"` hook was called inside the wrong module (`"+H.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function G(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===R(t)&&(n=t,t=void 0)
var i=Q(e,t,r),o=i.testEnvironment,s=i.hooks
z(s,o,"before"),z(s,o,"beforeEach"),z(s,o,"afterEach"),z(s,o,"after")
var a={before:$(i,"before"),beforeEach:$(i,"beforeEach"),afterEach:$(i,"afterEach"),after:$(i,"after")},u=H.currentModule
if(H.currentModule=i,"function"===R(n)){F.push(i)
try{var l=n.call(i.testEnvironment,a)
null!=l&&"function"===R(l.then)&&w.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{F.pop(),H.currentModule=i.parentModule||u}}}var Y=!1
function W(e,t,n){var r,i=Y&&(r=H.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!F.some((function(e){return r.includes(e.moduleId)})))
G(e,t,n,{ignored:i})}W.only=function(){Y||(H.modules.length=0,H.queue.length=0,H.currentModule.ignored=!0),Y=!0,G.apply(void 0,arguments)},W.skip=function(e,t,n){Y||G(e,t,n,{skip:!0})},W.todo=function(e,t,n){Y||G(e,t,n,{todo:!0})}
var J=(Z(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function V(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),J){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(J);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function Z(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return V(t,e)}var K=function(){function e(t){p(this,e),this.test=t}return m(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,H.timeout&&(u(H.timeout),H.timeout=null,H.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===R(e)||""===e?t="You must provide a message to assert.step":"string"!==R(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,i,o){return w.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:H.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||H.current
if(!r)throw new Error("assertion outside test context, in "+Z(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(U.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(U.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=q(e),t=q(t),this.pushResult({result:L(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=q(e),t=q(t),this.pushResult({result:!L(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=M(e,t),t=q(t,!1),this.pushResult({result:L(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=M(e,t),t=q(t),this.pushResult({result:!L(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:L(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!L(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=v(X(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||H.current
if("function"===R(t)){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var u=v(ee(s,n,r),3)
a=u[0],n=u[1],r=u[2]}o.assert.pushResult({result:a,actual:s&&A(s),expected:n,message:r})}else{var l='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:l})}}},{key:"rejects",value:function(t,n,r){var i=v(X(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||H.current,s=t&&t.then
if("function"===R(s)){var a=this.async()
return s.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),a()}),(function(e){var t,i=v(ee(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&A(e),expected:n,message:r}),a()}))}var u='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:u,actual:t})}}]),e}()
function X(e,t,n){var r=R(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function ee(e,t,n){var r=!1,i=R(t)
if(t){if("regexp"===i)r=t.test(A(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=A(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=A(e)}}else r=!0
return[r,t,n]}K.prototype.raises=K.prototype.throws
var te=Object.create(null),ne=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function re(e,t){if("string"!==R(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=te[e],r=n?b(n):[],i=0;i<r.length;i++)r[i](t)}var ie="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},oe={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==ie)return ie
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,t){var n=new this.constructor(r)
return o(this,new l(e,t,n)),n},i.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},i.all=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var i=Array.prototype.slice.call(e)
if(0===i.length)return t([])
var o=i.length
function s(e,n){try{if(n&&("object"===h(n)||"function"==typeof n)){var a=n.then
if("function"==typeof a)return void a.call(n,(function(t){s(e,t)}),r)}i[e]=n,0==--o&&t(i)}catch(e){r(e)}}for(var a=0;a<i.length;a++)s(a,i[a])}))},i.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(h(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var i=r.length
function o(e,n){if(n&&("object"===h(n)||"function"==typeof n)){var s=n.then
if("function"==typeof s)return void s.call(n,(function(t){o(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--i&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--i&&t(r)}for(var s=0;s<r.length;s++)o(s,r[s])}))},i.resolve=function(e){return e&&"object"===h(e)&&e.constructor===i?e:new i((function(t){t(e)}))},i.reject=function(e){return new i((function(t,n){n(e)}))},i.race=function(e){return new i((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var o=0,s=e.length;o<s;o++)i.resolve(e[o]).then(t,r)}))},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},oe.exports=i}else oe.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function i(e){if(!(this instanceof i))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],c(e,this)}function o(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,i._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void a(t.promise,e)}s(t.promise,r)}else(1===e._state?s:a)(t.promise,e._value)}))):e._deferreds.push(t)}function s(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===h(t)||"function"==typeof t)){var n=t.then
if(t instanceof i)return e._state=3,e._value=t,void u(e)
if("function"==typeof n)return void c((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,u(e)}catch(t){a(e,t)}var r,o}function a(e,t){e._state=2,e._value=t,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&i._immediateFn((function(){e._handled||i._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)o(e,e._deferreds[t])
e._deferreds=null}function l(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function c(e,t){var n=!1
try{e((function(e){n||(n=!0,s(t,e))}),(function(e){n||(n=!0,a(t,e))}))}catch(e){if(n)return
n=!0,a(t,e)}}}()
var se=oe.exports
function ae(e,t){var n=H.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return se.resolve(n(t))}))}),se.resolve([]))
n.map((function(e){return e(t)}))}var ue,le=0,ce=[]
function fe(){var e,t
e=T(),H.depth=(H.depth||0)+1,de(e),H.depth--,ce.length||H.blocking||H.current||(H.blocking||H.queue.length||0!==H.depth?(t=H.queue.shift()(),ce.push.apply(ce,b(t)),le>0&&le--,fe()):function(){var e
if(0===H.stats.testCount&&!0===H.failOnZeroTests)return e=H.filter&&H.filter.length?new Error('No tests matched the filter "'.concat(H.filter,'".')):H.module&&H.module.length?new Error('No tests matched the module "'.concat(H.module,'".')):H.moduleId&&H.moduleId.length?new Error('No tests matched the moduleId "'.concat(H.moduleId,'".')):H.testId&&H.testId.length?new Error('No tests matched the testId "'.concat(H.testId,'".')):new Error("No tests were run."),we("global failure",I((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void fe()
var t=H.storage,n=T()-H.started,r=H.stats.all-H.stats.bad
he.finished=!0,re("runEnd",B.end(!0)),ae("done",{passed:r,failed:H.stats.bad,total:H.stats.all,runtime:n}).then((function(){if(t&&0===H.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function de(e){if(ce.length&&!H.blocking){var t=T()-e
if(!a||H.updateRate<=0||t<H.updateRate){var n=ce.shift()
se.resolve(n()).then((function(){ce.length?de(e):fe()}))}else a(fe)}}var he={finished:!1,add:function(e,t,n){if(t)H.queue.splice(le++,0,e)
else if(n){ue||(ue=function(e){var t=parseInt(O(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(ue()*(H.queue.length-le+1))
H.queue.splice(le+r,0,e)}else H.queue.push(e)},advance:fe,taskCount:function(){return ce.length}},pe=function(){function e(t,n,r){p(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return m(e,[{key:"start",value:function(e){return e&&(this._startTime=N.now(),N.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=N.now(),N)){N.mark("qunit_test_end")
var t=this.fullName.join(" – ")
N.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return I(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function ge(e){if(this.expected=null,this.assertions=[],this.module=H.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new d,this.nextPauseId=1,this.stackOffset=3,I(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),he.finished)w.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++ge.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new pe(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=O(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new K(this)}}function me(){if(!H.current)throw new Error("pushFailure() assertion outside test context, in "+Z(2))
var e=H.current
return e.pushFailure.apply(e,arguments)}function ve(){if(H.pollution=[],H.noglobals)for(var e in i)if(E.call(i,e)){if(/^qunit-test-output/.test(e))continue
H.pollution.push(e)}}ge.count=0,ge.prototype={get stack(){return V(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t)
return n.reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:T()},re("suiteStart",t.suiteReport.start(!0)),ae("moduleStart",{name:t.name,tests:t.tests})}))}),se.resolve([])).then((function(){return H.current=e,e.testEnvironment=I({},t.testEnvironment),e.started=T(),re("testStart",e.testReport.start(!0)),ae("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){H.pollution||ve()}))}))},run:function(){if(H.current=this,this.callbackStarted=T(),H.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,V(e,0)),ve(),H.blocking&&Te(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&me("Test did not finish synchronously even though assert.timeout( 0 ) was used.",Z(2))}},after:function(){!function(){var e=H.pollution
ve()
var t=S(H.pollution,e)
t.length>0&&me("Introduced global variable(s): "+t.join(", "))
var n=S(e,H.pollution)
n.length>0&&me("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(H.current=n,H.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+A(e),V(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Ne(e).filter((function(e){return!e.skip})).length-1}(n)||!(H.queue.length>0||he.taskCount()>2))if(H.current=r,H.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),V(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&H.globalHooks[e])for(var r=0;r<H.globalHooks[e].length;r++)t.push(n.queueGlobalHook(H.globalHooks[e][r],e))}(this),function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module)),t},finish:function(){if(H.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}H.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=H.storage
this.runtime=T()-this.started,H.stats.all+=this.assertions.length,H.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,H.stats.bad++,t.stats.bad++)
i?je(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),re("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var l=this
return ae("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return l.stack}}).then((function(){if(Se(t)){for(var e=[t],n=t.parentModule;n&&Se(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,b(n.childModules))}return re("suiteEnd",e.suiteReport.end(!0)),ae("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:T()-e.stats.started})}(t)}))}),se.resolve([]))}})).then((function(){H.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=I({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=H.storage&&+H.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=H.reorder&&!!t
this.previousFailure=!!t,he.add((function(){return[function(){return e.before()}].concat(b(e.hooks("before")),[function(){e.preserveTestEnvironment()}],b(e.hooks("beforeEach")),[function(){e.run()}],b(e.hooks("afterEach").reverse()),b(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,H.seed)}else je(this.module)},pushResult:function(e){if(this!==H.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:T()-this.started,todo:!!this.todo}
if(E.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||Z()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof ge))throw new Error("pushFailure() assertion outside test context, was "+Z(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ae("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),re("assertion",t)},internalResetTimeout:function(e){u(H.timeout),H.timeout=a(H.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
H.blocking=!0
var t,n=this,r=this.nextPauseId++,i={cancelled:!1,remaining:e}
function o(){if(!i.cancelled){if(void 0===H.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(H.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&n.pauses.delete(r),Ce(n)}}return n.pauses.set(r,i),a&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof H.testTimeout&&(t=H.testTimeout),"number"==typeof t&&t>0&&(H.timeoutHandler=function(e){return function(){H.timeout=null,i.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),Z(2)),Ce(n)}},u(H.timeout),H.timeout=a(H.timeoutHandler(t),t))),o},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===R(r)){var i=n.internalStop(),o=function(){i()}
H.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,V(e,0)),ve(),Te(n)}))}}},valid:function(){var e=H.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=H.module&&H.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(H.moduleId&&H.moduleId.length>0&&!function e(t){return j(t.moduleId,H.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(H.testId&&H.testId.length>0&&!j(this.testId,H.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var be=!1
function ye(e){be||H.currentModule.ignored||new ge(e).queue()}function ke(e){H.currentModule.ignored||(be||(H.queue.length=0,be=!0),new ge(e).queue())}function we(e,t){ye({testName:e,callback:t})}function xe(e,t){return"".concat(e," [").concat(t,"]")}function Ee(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==h(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(h(e)," instead."))
for(var r in e)t(e[r],r)}}function Te(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ce(e)}function Ce(e){e.pauses.size>0||(a?(u(H.timeout),H.timeout=a((function(){e.pauses.size>0||(u(H.timeout),H.timeout=null,H.blocking=!1,he.advance())}))):(H.blocking=!1,he.advance()))}function Ne(e){for(var t=[].concat(e.tests),n=b(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,b(r.childModules))}return t}function Se(e){return e.testsRun+e.testsIgnored===Ne(e).length}function je(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}I(we,{todo:function(e,t){ye({testName:e,callback:t,todo:!0})},skip:function(e){ye({testName:e,skip:!0})},only:function(e,t){ke({testName:e,callback:t})},each:function(e,t,n){Ee(t,(function(t,r){ye({testName:xe(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),we.todo.each=function(e,t,n){Ee(t,(function(t,r){ye({testName:xe(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},we.skip.each=function(e,t){Ee(t,(function(t,n){ye({testName:xe(e,n),stackOffset:5,skip:!0})}))},we.only.each=function(e,t,n){Ee(t,(function(t,r){ke({testName:xe(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var qe,Me,Ie,Re,_e=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
p(this,e),this.log=n.log||Function.prototype.bind.call(s.log,s),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return m(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Oe=!0
if("undefined"!=typeof process){var Ae=process.env
qe=Ae.FORCE_COLOR,Me=Ae.NODE_DISABLE_COLORS,Ie=Ae.NO_COLOR,Re=Ae.TERM,Oe=process.stdout&&process.stdout.isTTY}var Le={enabled:!Me&&null==Ie&&"dumb"!==Re&&(null!=qe&&"0"!==qe||Oe),reset:Pe(0,0),bold:Pe(1,22),dim:Pe(2,22),italic:Pe(3,23),underline:Pe(4,24),inverse:Pe(7,27),hidden:Pe(8,28),strikethrough:Pe(9,29),black:Pe(30,39),red:Pe(31,39),green:Pe(32,39),yellow:Pe(33,39),blue:Pe(34,39),magenta:Pe(35,39),cyan:Pe(36,39),white:Pe(37,39),gray:Pe(90,39),grey:Pe(90,39),bgBlack:Pe(40,49),bgRed:Pe(41,49),bgGreen:Pe(42,49),bgYellow:Pe(43,49),bgBlue:Pe(44,49),bgMagenta:Pe(45,49),bgCyan:Pe(46,49),bgWhite:Pe(47,49)}
function He(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function Pe(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Le.enabled?He(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Le.reset.bind(r),r.bold=Le.bold.bind(r),r.dim=Le.dim.bind(r),r.italic=Le.italic.bind(r),r.underline=Le.underline.bind(r),r.inverse=Le.inverse.bind(r),r.hidden=Le.hidden.bind(r),r.strikethrough=Le.strikethrough.bind(r),r.black=Le.black.bind(r),r.red=Le.red.bind(r),r.green=Le.green.bind(r),r.yellow=Le.yellow.bind(r),r.blue=Le.blue.bind(r),r.magenta=Le.magenta.bind(r),r.cyan=Le.cyan.bind(r),r.white=Le.white.bind(r),r.gray=Le.gray.bind(r),r.grey=Le.grey.bind(r),r.bgBlack=Le.bgBlack.bind(r),r.bgRed=Le.bgRed.bind(r),r.bgGreen=Le.bgGreen.bind(r),r.bgYellow=Le.bgYellow.bind(r),r.bgBlue=Le.bgBlue.bind(r),r.bgMagenta=Le.bgMagenta.bind(r),r.bgCyan=Le.bgCyan.bind(r),r.bgWhite=Le.bgWhite.bind(r),r):Le.enabled?He([n],t+""):t+""
var r}}var Ue=Object.prototype.hasOwnProperty
function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,i=/(^\s|\s$)/,o=/^[\d._-]+$/,s=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||i.test(e)||o.test(e)||s.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var a=new Array(t+1).join(" "),u=e.match(/\n+$/),l=u?u[0].length:0
if(1===l){var c=e.replace(/\n$/,"").split("\n").map((function(e){return a+e}))
return"|\n"+c.join("\n")}var f=e.split("\n").map((function(e){return a+e}))
return"|+\n"+f.join("\n")}return e}return JSON.stringify(Fe(e),null,2)}function Fe(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==t.indexOf(e))return"[Circular]"
var n,r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":t.push(e),n=e.map((function(e){return Fe(e,t)})),t.pop()
break
case"object":t.push(e),n={},Object.keys(e).forEach((function(r){n[r]=Fe(e[r],t)})),t.pop()
break
default:n=e}return n}var Be=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
p(this,e),this.log=n.log||Function.prototype.bind.call(s.log,s),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return m(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Le.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+A(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Le.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Le.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Le.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Le.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Le.cyan("# todo ".concat(e.testCounts.todo))),this.log(Le.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(De(e.message||"failed")),n+="\n  severity: ".concat(De(t||"failed")),Ue.call(e,"actual")&&(n+="\n  actual  : ".concat(De(e.actual))),Ue.call(e,"expected")&&(n+="\n  expected: ".concat(De(e.expected))),e.stack&&(n+="\n  stack: ".concat(De(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(De(A(e))),t+="\n  severity: ".concat(De("failed")),e&&e.stack&&(t+="\n  stack: ".concat(De(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Qe={console:_e,tap:Be}
function ze(e){return function(t){H.globalHooks[e]||(H.globalHooks[e]=[]),H.globalHooks[e].push(t)}}var $e={beforeEach:ze("beforeEach"),afterEach:ze("afterEach")}
function Ge(e){H.current?H.current.assert.pushResult({result:!1,message:"global failure: ".concat(A(e)),source:e&&e.stack||Z(2)}):(B.globalFailureCount++,H.stats.bad++,H.stats.all++,re("error",e))}var Ye={}
H.currentModule.suiteReport=B
var We=!1,Je=!1
function Ve(){Je=!0,a?a((function(){Ke()})):Ke()}function Ze(){H.blocking=!1,he.advance()}function Ke(){if(H.started)Ze()
else{H.started=T(),""===H.modules[0].name&&0===H.modules[0].tests.length&&H.modules.shift()
for(var e=H.modules.length,t=[],n=0;n<e;n++)t.push({name:H.modules[n].name,tests:H.modules[n].tests})
re("runStart",B.start(!0)),ae("begin",{totalTests:ge.count,modules:t}).then(Ze)}}Ye.isLocal=o&&o.location&&"file:"===o.location.protocol,Ye.version="2.18.1",I(Ye,{config:H,dump:U,equiv:L,reporters:Qe,hooks:$e,is:_,objectType:R,on:function(e,t){if("string"!==R(e))throw new TypeError("eventName must be a string when registering a listener")
if(!j(e,ne)){var n=ne.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==R(t))throw new TypeError("callback must be a function when registering a listener")
te[e]||(te[e]=[]),j(t,te[e])||te[e].push(t)},onError:function(e){if(w.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),H.current&&H.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,Ge(t),!1},onUncaughtException:Ge,pushFailure:me,assert:K.prototype,module:W,test:we,todo:we.todo,skip:we.skip,only:we.only,start:function(e){if(H.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=We
if(We=!0,Je)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(H.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!H.pageLoaded)return H.autostart=!0,void(l||Ye.load())
Ve()},onUnhandledRejection:function(e){w.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Ge(e)},extend:function(){w.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return I.apply(this,t)},load:function(){H.pageLoaded=!0,I(H,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),Je||(H.blocking=!1,H.autostart&&Ve())},stack:function(e){return Z(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==R(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
H.callbacks[e].push(t)}}for(var r=0,i=t.length;r<i;r++){var o=t[r]
"undefined"===R(H.callbacks[o])&&(H.callbacks[o]=[]),e[o]=n(o)}}(Ye),function(i){if(o&&l){if(o.QUnit&&o.QUnit.version)throw new Error("QUnit has already been defined.")
o.QUnit=i}e&&e.exports&&(e.exports=i,e.exports.QUnit=i),t&&(t.QUnit=i),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1}(Ye),function(){if(o&&l){var e=Ye.config,t=Object.prototype.hasOwnProperty
Ye.begin((function(){if(!t.call(e,"fixture")){var n=l.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),Ye.testStart((function(){if(null!=e.fixture){var t=l.getElementById("qunit-fixture")
if("string"===h(e.fixture)){var n=l.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==o&&o.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),i=r.length,o=0;o<i;o++)if(r[o]){var s=r[o].split("="),a=n(s[0]),u=1===s.length||n(s.slice(1).join("="))
t[a]=a in t?[].concat(t[a],u):u}return t}()
Ye.urlParams=t,Ye.config.moduleId=[].concat(t.moduleId||[]),Ye.config.testId=[].concat(t.testId||[]),Ye.config.module=t.module,Ye.config.filter=t.filter,!0===t.seed?Ye.config.seed=Math.random().toString(36).slice(2):t.seed&&(Ye.config.seed=t.seed),Ye.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),Ye.begin((function(){for(var e=Ye.config.urlConfig,n=0;n<e.length;n++){var r=Ye.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===Ye.config[r]&&(Ye.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Xe={exports:{}}
!function(e){var t,n
t=ie,n=function(){var e="undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,i=[]
i.total=0
var o=[],s=[]
function a(){n.clear(),r.clear(),o=[],s=[]}function u(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var i=r.score
i>t&&(t=i)}}return-9007199254740991===t?null:t}function l(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var i=r.length,o=-1;e&&++o<i;)e=e[r[o]]
return e}function c(e){return"object"===h(e)}var f=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],i=1;i<t;){var o=i+1
n=i,o<t&&e[o].score<e[i].score&&(n=o),e[n-1>>1]=e[n],i=1+(n<<1)}for(var s=n-1>>1;n>0&&r.score<e[s].score;s=(n=s)-1>>1)e[n]=e[s]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},d=f()
return function t(h){var p={single:function(e,t,n){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(c(e)||(e=p.getPreparedSearch(e)),t?(c(t)||(t=p.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?p.algorithm:p.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return i
var r=(e=p.prepareSearch(e))[0],o=n&&n.threshold||h&&h.threshold||-9007199254740991,s=n&&n.limit||h&&h.limit||9007199254740991,a=(n&&void 0!==n.allowTypo?n.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?p.algorithm:p.algorithmNoTypo,f=0,g=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||u,b=n.keys,y=b.length,k=m-1;k>=0;--k){for(var w=t[k],x=new Array(y),E=y-1;E>=0;--E)(N=l(w,C=b[E]))?(c(N)||(N=p.getPrepared(N)),x[E]=a(e,N,r)):x[E]=null
x.obj=w
var T=v(x)
null!==T&&(T<o||(x.score=T,f<s?(d.add(x),++f):(++g,T>d.peek().score&&d.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(k=m-1;k>=0;--k)(N=l(w=t[k],C))&&(c(N)||(N=p.getPrepared(N)),null!==(S=a(e,N,r))&&(S.score<o||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:w},f<s?(d.add(S),++f):(++g,S.score>d.peek().score&&d.replaceTop(S)))))}else for(k=m-1;k>=0;--k){var N,S;(N=t[k])&&(c(N)||(N=p.getPrepared(N)),null!==(S=a(e,N,r))&&(S.score<o||(f<s?(d.add(S),++f):(++g,S.score>d.peek().score&&d.replaceTop(S)))))}if(0===f)return i
var j=new Array(f)
for(k=f-1;k>=0;--k)j[k]=d.poll()
return j.total=f+g,j},goAsync:function(t,n,r){var o=!1,s=new Promise((function(s,a){if("farzher"==t)return s([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return s(i)
var d=(t=p.prepareSearch(t))[0],g=f(),m=n.length-1,v=r&&r.threshold||h&&h.threshold||-9007199254740991,b=r&&r.limit||h&&h.limit||9007199254740991,y=(r&&void 0!==r.allowTypo?r.allowTypo:!h||void 0===h.allowTypo||h.allowTypo)?p.algorithm:p.algorithmNoTypo,k=0,w=0
function x(){if(o)return a("canceled")
var f=Date.now()
if(r&&r.keys)for(var h=r.scoreFn||u,E=r.keys,T=E.length;m>=0;--m){if(m%1e3==0&&Date.now()-f>=10)return void(e?setImmediate(x):setTimeout(x))
for(var C=n[m],N=new Array(T),S=T-1;S>=0;--S)(M=l(C,q=E[S]))?(c(M)||(M=p.getPrepared(M)),N[S]=y(t,M,d)):N[S]=null
N.obj=C
var j=h(N)
null!==j&&(j<v||(N.score=j,k<b?(g.add(N),++k):(++w,j>g.peek().score&&g.replaceTop(N))))}else if(r&&r.key)for(var q=r.key;m>=0;--m){if(m%1e3==0&&Date.now()-f>=10)return void(e?setImmediate(x):setTimeout(x));(M=l(C=n[m],q))&&(c(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,d))&&(I.score<v||(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:C},k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}else for(;m>=0;--m){if(m%1e3==0&&Date.now()-f>=10)return void(e?setImmediate(x):setTimeout(x))
var M,I;(M=n[m])&&(c(M)||(M=p.getPrepared(M)),null!==(I=y(t,M,d))&&(I.score<v||(k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}if(0===k)return s(i)
for(var R=new Array(k),_=k-1;_>=0;--_)R[_]=g.poll()
R.total=k+w,s(R)}e?setImmediate(x):x()}))
return s.cancel=function(){o=!0},s},highlight:function(e,t,n){if("function"==typeof t)return p.highlightCallback(e,t)
if(null===e)return null
void 0===t&&(t="<b>"),void 0===n&&(n="</b>")
for(var r="",i=0,o=!1,s=e.target,a=s.length,u=e.indexes,l=0;l<a;++l){var c=s[l]
if(u[i]===l){if(o||(o=!0,r+=t),++i===u.length){r+=c+n+s.substr(l+1)
break}}else o&&(o=!1,r+=n)
r+=c}return r},highlightCallback:function(e,t){if(null===e)return null
for(var n=e.target,r=n.length,i=e.indexes,o="",s=0,a=0,u=!1,l=(e=[],0);l<r;++l){var c=n[l]
if(i[a]===l){if(++a,u||(u=!0,e.push(o),o=""),a===i.length){o+=c,e.push(t(o,s++)),o="",e.push(n.substr(l+1))
break}}else u&&(u=!1,e.push(t(o,s++)),o="")
o+=c}return e},prepare:function(e){return e?{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:null,score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSlow:function(e){return e?{target:e,_targetLowerCodes:p.prepareLowerCodes(e),_nextBeginningIndexes:p.prepareNextBeginningIndexes(e),score:null,indexes:null,obj:null}:{target:"",_targetLowerCodes:[0],_nextBeginningIndexes:null,score:null,indexes:null,obj:null}},prepareSearch:function(e){return e||(e=""),p.prepareLowerCodes(e)},getPrepared:function(e){if(e.length>999)return p.prepare(e)
var t=n.get(e)
return void 0!==t||(t=p.prepare(e),n.set(e,t)),t},getPreparedSearch:function(e){if(e.length>999)return p.prepareSearch(e)
var t=r.get(e)
return void 0!==t||(t=p.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,i=e.length,a=r.length,u=0,l=0,c=0,f=0;;){if(n===r[l]){if(o[f++]=l,++u===i)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=a)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=o[(f=u)-1]+1
break}}u=0
var d=0,h=!1,g=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target))
var v=l=0===o[0]?0:m[o[0]-1]
if(l!==a)for(;;)if(l>=a){if(u<=0){if(++d>i-2)break
if(e[d]===e[d+1])continue
l=v
continue}--u,l=m[s[--g]]}else if(e[0===d?u:d===u?u+1:d===u-1?u-1:u]===r[l]){if(s[g++]=l,++u===i){h=!0
break}++l}else l=m[l]
if(h)var b=s,y=g
else b=o,y=f
for(var k=0,w=-1,x=0;x<i;++x)w!==(l=b[x])-1&&(k-=l),w=l
for(h?0!==d&&(k+=-20):(k*=1e3,0!==c&&(k+=-20)),k-=a-i,t.score=k,t.indexes=new Array(y),x=y-1;x>=0;--x)t.indexes[x]=b[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,i=e.length,a=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(o[c++]=l,++u===i)break
n=e[u]}if(++l>=a)return null}u=0
var f=!1,d=0,h=t._nextBeginningIndexes
if(null===h&&(h=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target)),(l=0===o[0]?0:h[o[0]-1])!==a)for(;;)if(l>=a){if(u<=0)break;--u,l=h[s[--d]]}else if(e[u]===r[l]){if(s[d++]=l,++u===i){f=!0
break}++l}else l=h[l]
if(f)var g=s,m=d
else g=o,m=c
for(var v=0,b=-1,y=0;y<i;++y)b!==(l=g[y])-1&&(v-=l),b=l
for(f||(v*=1e3),v-=a-i,t.score=v,t.indexes=new Array(m),y=m-1;y>=0;--y)t.indexes[y]=g[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),i=0;i<t;++i)n[i]=r.charCodeAt(i)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,i=!1,o=!1,s=0;s<t;++s){var a=e.charCodeAt(s),u=a>=65&&a<=90,l=u||a>=97&&a<=122||a>=48&&a<=57,c=u&&!i||!o||!l
i=u,o=l,c&&(n[r++]=s)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=p.prepareBeginningIndexes(e),r=[],i=n[0],o=0,s=0;s<t;++s)i>s?r[s]=i:(i=n[++o],r[s]=void 0===i?t:i)
return r},cleanup:a,new:t}
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(Xe)
var et=Xe.exports,tt={failedTests:[],defined:0,completed:0}
function nt(e){return e?(e+="").replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(o&&l){var e=Ye.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=C({filter:void 0,module:void 0,moduleId:void 0,testId:void 0})
Ye.on("runStart",(function(e){tt.defined=e.testCounts.total})),Ye.begin((function(){var t,n,s,a,u,f,d,m,y,C,j;(f=w("qunit"))&&(f.setAttribute("role","main"),f.innerHTML="<h1 id='qunit-header'>"+nt(l.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=Ye.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+nt(t.join(", "))+" <a id='qunit-clearFilter' href='"+nt(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=w("qunit-header"))&&(n.innerHTML="<a href='"+nt(i)+"'>"+n.innerHTML+"</a> "),(s=w("qunit-banner"))&&(s.className=""),C=w("qunit-tests"),(j=w("qunit-testresult"))&&j.parentNode.removeChild(j),C&&(C.innerHTML="",(j=l.createElement("p")).id="qunit-testresult",j.className="result",C.parentNode.insertBefore(j,C),j.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',m=w("qunit-testresult-controls")),m&&m.appendChild(((y=l.createElement("button")).id="qunit-abort-tests-button",y.innerHTML="Abort",h(y,"click",x),y)),(a=w("qunit-userAgent"))&&(a.innerHTML="",a.appendChild(l.createTextNode("QUnit "+Ye.version+"; "+c.userAgent))),(u=w("qunit-testrunner-toolbar"))&&(u.appendChild(((d=l.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,i="",o=0;o<n.length;o++){var s=e.urlConfig[o]
"string"==typeof s&&(s={id:s,label:s})
var a=nt(s.id),u=nt(s.tooltip)
if(s.value&&"string"!=typeof s.value){if(i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'>"+s.label+": </label><select id='qunit-urlconfig-"+a+"' name='"+a+"' title='"+u+"'><option></option>",Array.isArray(s.value))for(var l=0;l<s.value.length;l++)i+="<option value='"+(a=nt(s.value[l]))+"'"+(e[s.id]===s.value[l]?(t=!0)&&" selected='selected'":"")+">"+a+"</option>"
else for(var c in s.value)r.call(s.value,c)&&(i+="<option value='"+nt(c)+"'"+(e[s.id]===c?(t=!0)&&" selected='selected'":"")+">"+nt(s.value[c])+"</option>")
e[s.id]&&!t&&(i+="<option value='"+(a=nt(e[s.id]))+"' selected='selected' disabled='disabled'>"+a+"</option>"),i+="</select>"}else i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'><input id='qunit-urlconfig-"+a+"' name='"+a+"' type='checkbox'"+(s.value?" value='"+nt(s.value)+"'":"")+(e[s.id]?" checked='checked'":"")+" title='"+u+"' />"+nt(s.label)+"</label>"}return i}(),v(d,"qunit-url-config"),g(d.getElementsByTagName("input"),"change",T),g(d.getElementsByTagName("select"),"change",T),d)),u.appendChild(function(){var t,n,r,i,s=l.createElement("span")
return s.id="qunit-toolbar-filters",s.appendChild((t=l.createElement("form"),n=l.createElement("label"),r=l.createElement("input"),i=l.createElement("button"),v(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",i.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(l.createTextNode(" ")),t.appendChild(i),h(t,"submit",E),t)),s.appendChild(function(){var t=l.createElement("form"),n=l.createElement("label"),r=l.createElement("input"),i=l.createElement("div"),s=l.createElement("span"),a=l.createElement("button"),u=l.createElement("button"),c=l.createElement("label"),f=l.createElement("input"),d=l.createElement("ul"),g=!1
r.id="qunit-modulefilter-search",r.autocomplete="off",h(r,"input",x),h(r,"input",w),h(r,"focus",w),h(r,"click",w),e.modules.forEach((function(e){e.namePrepared=et.prepare(e.name)})),n.id="qunit-modulefilter-search-container",n.innerHTML="Module: ",n.appendChild(r),a.textContent="Apply",a.style.display="none",u.textContent="Reset",u.type="reset",u.style.display="none",f.type="checkbox",f.checked=0===e.moduleId.length,c.className="clickable",e.moduleId.length&&(c.className="checked"),c.appendChild(f),c.appendChild(l.createTextNode("All modules")),s.id="qunit-modulefilter-actions",s.appendChild(a),s.appendChild(u),s.appendChild(c)
var m,v=s.firstChild,y=v.nextSibling
function w(){function e(n){var o=t.contains(n.target)
27!==n.keyCode&&o||(27===n.keyCode&&o&&r.focus(),i.style.display="none",p(l,"click",e),p(l,"keydown",e),r.value="",x())}"none"===i.style.display&&(i.style.display="block",h(l,"click",e),h(l,"keydown",e))}function x(){o.clearTimeout(m),m=o.setTimeout((function(){var t,n=""===(t=r.value.toLowerCase())?e.modules:et.go(t,e.modules,{key:"namePrepared",threshold:-1e4}).map((function(e){return e.obj}))
d.innerHTML=S(n)}),200)}function T(e){var t=e&&e.target||f,n=d.getElementsByTagName("input"),i=[]
b(t.parentNode,"checked",t.checked),g=!1,t.checked&&t!==f&&(f.checked=!1,k(f.parentNode,"checked"))
for(var o=0;o<n.length;o++){var s=n[o]
e?t===f&&t.checked&&(s.checked=!1,k(s.parentNode,"checked")):b(s.parentNode,"checked",s.checked),g=g||s.checked!==s.defaultChecked,s.checked&&i.push(s.parentNode.textContent)}v.style.display=y.style.display=g?"":"none",r.placeholder=i.join(", ")||f.parentNode.textContent,r.title="Type to filter list. Current selection:\n"+(i.join("\n")||f.parentNode.textContent)}return h(v,"click",N),d.id="qunit-modulefilter-dropdown-list",d.innerHTML=S(e.modules),i.id="qunit-modulefilter-dropdown",i.style.display="none",i.appendChild(s),i.appendChild(d),h(i,"change",T),T(),t.id="qunit-modulefilter",t.appendChild(n),t.appendChild(i),h(t,"submit",E),h(t,"reset",(function(){o.setTimeout(T)})),t}()),s}()),u.appendChild(l.createElement("div")).className="clearfix")})),Ye.on("runEnd",(function(t){var n,r,i,s=w("qunit-banner"),a=w("qunit-tests"),u=w("qunit-abort-tests-button"),c=e.stats.all-e.stats.bad,f=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",c,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",q(tt.failedTests)].join("")
if(u&&u.disabled){f="Tests aborted after "+t.runtime+" milliseconds."
for(var d=0;d<a.children.length;d++)""!==(n=a.children[d]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=l.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!s||u&&!1!==u.disabled||(s.className="failed"===t.status?"qunit-fail":"qunit-pass"),u&&u.parentNode.removeChild(u),a&&(w("qunit-testresult-display").innerHTML=f),e.altertitle&&l.title&&(l.title=["failed"===t.status?"✖":"✔",l.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&o.scrollTo&&o.scrollTo(0,0)})),Ye.testStart((function(e){var t,n
j(e.name,e.testId,e.module),(t=w("qunit-testresult-display"))&&(v(t,"running"),n=Ye.config.reorder&&e.previousFailure,t.innerHTML=[R(tt),n?"Rerunning previously failed test: <br />":"Running: ",M(e.name,e.module),q(tt.failedTests)].join(""))})),Ye.log((function(e){var t=w("qunit-test-output-"+e.testId)
if(t){var n,i,o,s=nt(e.message)||(e.result?"okay":"failed")
s="<span class='test-message'>"+s+"</span>",s+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var a=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+Ye.dump.parse(e.expected):Ye.dump.parse(e.expected),i=Ye.dump.parse(e.actual),s+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+nt(n)+"</pre></td></tr>",i!==n?(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+nt(i)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(a=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(a=_(o=Ye.diff(n,i)).length!==_(n).length+_(i).length),a&&(s+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+Ye.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+nt(C({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(s+="<tr class='test-source'><th>Source: </th><td><pre>"+nt(e.source)+"</pre></td></tr>"),s+="</table>"):!e.result&&e.source&&(s+="<table><tr class='test-source'><th>Source: </th><td><pre>"+nt(e.source)+"</pre></td></tr></table>")
var u=t.getElementsByTagName("ol")[0],c=l.createElement("li")
c.className=e.result?"pass":"fail",c.innerHTML=s,u.appendChild(c)}})),Ye.testDone((function(r){var i=w("qunit-tests"),o=w("qunit-test-output-"+r.testId)
if(i&&o){var s
k(o,"running"),s=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var a=o.getElementsByTagName("ol")[0],u=r.passed,c=r.failed,f=r.failed>0?r.todo:!r.todo
f?v(a,"qunit-collapsed"):(tt.failedTests.push(r.testId),e.collapse&&(n?v(a,"qunit-collapsed"):n=!0))
var d=o.firstChild,p=c?"<b class='failed'>"+c+"</b>, <b class='passed'>"+u+"</b>, ":""
if(d.innerHTML+=" <b class='counts'>("+p+r.assertions.length+")</b>",tt.completed++,r.skipped){o.className="skipped"
var g=l.createElement("em")
g.className="qunit-skipped-label",g.innerHTML="skipped",o.insertBefore(g,d)}else{if(h(d,"click",(function(){b(a,"qunit-collapsed")})),o.className=f?"pass":"fail",r.todo){var m=l.createElement("em")
m.className="qunit-todo-label",m.innerHTML="todo",o.className+=" todo",o.insertBefore(m,d)}var y=l.createElement("span")
y.className="runtime",y.innerHTML=r.runtime+" ms",o.insertBefore(y,a)}if(r.source){var x=l.createElement("p")
x.innerHTML="<strong>Source: </strong>"+nt(r.source),v(x,"qunit-source"),f&&v(x,"qunit-collapsed"),h(d,"click",(function(){b(x,"qunit-collapsed")})),o.appendChild(x)}e.hidepassed&&("passed"===s||r.skipped)&&(t.push(o),i.removeChild(o))}})),Ye.on("error",(function(e){var t=j("global failure")
if(t){var n=nt(A(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+nt(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=l.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var a,u=(a=o.phantom)&&a.version&&a.version.major>0
u&&s.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),u||"complete"!==l.readyState?h(o,"load",Ye.load):Ye.load()
var f=o.onerror
o.onerror=function(t,n,r,i,o){var s=!1
if(f){for(var a=arguments.length,u=new Array(a>5?a-5:0),l=5;l<a;l++)u[l-5]=arguments[l]
s=f.call.apply(f,[this,t,n,r,i,o].concat(u))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var c=o||new Error(t)
!c.stack&&n&&r&&(c.stack="".concat(n,":").concat(r)),Ye.onUncaughtException(c)}return s},o.addEventListener("unhandledrejection",(function(e){Ye.onUncaughtException(e.reason)}))}function d(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function h(e,t,n){e.addEventListener(t,n,!1)}function p(e,t,n){e.removeEventListener(t,n,!1)}function g(e,t,n){for(var r=e.length;r--;)h(e[r],t,n)}function m(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function v(e,t){m(e,t)||(e.className+=(e.className?" ":"")+t)}function b(e,t,n){n||void 0===n&&!m(e,t)?v(e,t):k(e,t)}function k(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=d(n)}function w(e){return l.getElementById&&l.getElementById(e)}function x(){var e=w("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),Ye.config.queue.length=0,!1}function E(e){var t=w("qunit-filter-input")
return t.value=d(t.value),N(),e&&e.preventDefault&&e.preventDefault(),!1}function T(){var n,r=this,i={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,i[r.name]=n
var s=C(i)
if("hidepassed"===r.name&&"replaceState"in o.history){Ye.urlParams[r.name]=n,e[r.name]=n||!1
var a=w("qunit-tests")
if(a){var u=a.children.length,l=a.children
if(r.checked){for(var c=0;c<u;c++){var f=l[c],d=f?f.className:"",h=d.indexOf("pass")>-1,p=d.indexOf("skipped")>-1;(h||p)&&t.push(f)}var g,m=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=y(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(m.s();!(g=m.n()).done;){var v=g.value
a.removeChild(v)}}catch(e){m.e(e)}finally{m.f()}}else for(var b;null!=(b=t.pop());)a.appendChild(b)}o.history.replaceState(null,"",s)}else o.location=s}function C(e){var t="?",n=o.location
for(var i in e=I(I({},Ye.urlParams),e))if(r.call(e,i)&&void 0!==e[i])for(var s=[].concat(e[i]),a=0;a<s.length;a++)t+=encodeURIComponent(i),!0!==s[a]&&(t+="="+encodeURIComponent(s[a])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function N(){var e,t=[],n=w("qunit-modulefilter-dropdown-list").getElementsByTagName("input"),r=w("qunit-filter-input").value
for(e=0;e<n.length;e++)n[e].checked&&t.push(n[e].value)
o.location=C({filter:""===r?void 0:r,moduleId:0===t.length?void 0:t,module:void 0,testId:void 0})}function S(t){for(var n="",r=0;r<t.length;r++)if(""!==t[r].name){var i=e.moduleId.indexOf(t[r].moduleId)>-1
n+="<li><label class='clickable"+(i?" checked":"")+"'><input type='checkbox' value='"+t[r].moduleId+"'"+(i?" checked='checked'":"")+" />"+nt(t[r].name)+"</label></li>"}return n}function j(e,t,n){var r=w("qunit-tests")
if(r){var i=l.createElement("strong")
i.innerHTML=M(e,n)
var o=l.createElement("li")
if(o.appendChild(i),void 0!==t){var s=l.createElement("a")
s.innerHTML="Rerun",s.href=C({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(s)}var a=l.createElement("ol")
return a.className="qunit-assert-list",o.appendChild(a),r.appendChild(o),o}}function q(e){return 0===e.length?"":["<br /><a href='"+nt(C({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function M(e,t){var n=""
return t&&(n="<span class='module-name'>"+nt(t)+"</span>: "),n+"<span class='test-name'>"+nt(e)+"</span>"}function R(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function _(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),Ye.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,i,o,s,a,u
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),i=n,o=this.diffCommonPrefix(e,t),s=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),a=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),u=this.diffCompute(e,t,i,r),s&&u.unshift([0,s]),a&&u.push([0,a]),this.diffCleanupMerge(u),u)},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var i=e[r][0],o=e[r][1]
switch(i){case 1:n[r]="<ins>"+nt(o)+"</ins>"
break
case t:n[r]="<del>"+nt(o)+"</del>"
break
case 0:n[r]="<span>"+nt(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(0)!==t.charAt(0))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(o,n)===t.substring(o,n)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCommonSuffix=function(e,t){var n,r,i,o
if(!e||!t||e.charAt(e.length-1)!==t.charAt(t.length-1))return 0
for(i=0,n=r=Math.min(e.length,t.length),o=0;i<n;)e.substring(e.length-n,e.length-o)===t.substring(t.length-n,t.length-o)?o=i=n:r=n,n=Math.floor((r-i)/2+i)
return n},e.prototype.diffCompute=function(e,n,r,i){var o,s,a,u,l,c,f,d,h,p,g,m
return e?n?(s=e.length>n.length?e:n,a=e.length>n.length?n:e,-1!==(u=s.indexOf(a))?(o=[[1,s.substring(0,u)],[0,a],[1,s.substring(u+a.length)]],e.length>n.length&&(o[0][0]=o[2][0]=t),o):1===a.length?[[t,e],[1,n]]:(l=this.diffHalfMatch(e,n))?(c=l[0],d=l[1],f=l[2],h=l[3],p=l[4],g=this.DiffMain(c,f,r,i),m=this.DiffMain(d,h,r,i),g.concat([[0,p]],m)):r&&e.length>100&&n.length>100?this.diffLineMode(e,n,i):this.diffBisect(e,n,i)):[[t,e]]:[[1,n]]},e.prototype.diffHalfMatch=function(e,t){var n,r,i,o,s,a,u,l,c,f
if(n=e.length>t.length?e:t,r=e.length>t.length?t:e,n.length<4||2*r.length<n.length)return null
function d(e,t,n){var r,o,s,a,u,l,c,f,d
for(r=e.substring(n,n+Math.floor(e.length/4)),o=-1,s="";-1!==(o=t.indexOf(r,o+1));)a=i.diffCommonPrefix(e.substring(n),t.substring(o)),u=i.diffCommonSuffix(e.substring(0,n),t.substring(0,o)),s.length<u+a&&(s=t.substring(o-u,o)+t.substring(o,o+a),l=e.substring(0,n-u),c=e.substring(n+a),f=t.substring(0,o-u),d=t.substring(o+a))
return 2*s.length>=e.length?[l,c,f,d,s]:null}return i=this,l=d(n,r,Math.ceil(n.length/4)),c=d(n,r,Math.ceil(n.length/2)),l||c?(f=c?l&&l[4].length>c[4].length?l:c:l,e.length>t.length?(o=f[0],u=f[1],a=f[2],s=f[3]):(a=f[0],s=f[1],o=f[2],u=f[3]),[o,u,a,s,f[4]]):null},e.prototype.diffLineMode=function(e,n,r){var i,o,s,a,u,l,c,f,d
for(e=(i=this.diffLinesToChars(e,n)).chars1,n=i.chars2,s=i.lineArray,o=this.DiffMain(e,n,!1,r),this.diffCharsToLines(o,s),this.diffCleanupSemantic(o),o.push([0,""]),a=0,l=0,u=0,f="",c="";a<o.length;){switch(o[a][0]){case 1:u++,c+=o[a][1]
break
case t:l++,f+=o[a][1]
break
case 0:if(l>=1&&u>=1){for(o.splice(a-l-u,l+u),a=a-l-u,d=(i=this.DiffMain(f,c,!1,r)).length-1;d>=0;d--)o.splice(a,0,i[d])
a+=i.length}u=0,l=0,f="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,f,d,h,p,g,m,v,b,y,k,w,x,E,T,C,N
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1
for(l[a+1]=0,c[a+1]=0,h=(d=i-o)%2!=0,p=0,g=0,m=0,v=0,T=0;T<s&&!((new Date).getTime()>r);T++){for(C=-T+p;C<=T-g;C+=2){for(y=a+C,x=(k=C===-T||C!==T&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-C;k<i&&x<o&&e.charAt(k)===n.charAt(x);)k++,x++
if(l[y]=k,k>i)g+=2
else if(x>o)p+=2
else if(h&&(b=a+d-C)>=0&&b<u&&-1!==c[b]&&k>=(w=i-c[b]))return this.diffBisectSplit(e,n,k,x,r)}for(N=-T+m;N<=T-v;N+=2){for(b=a+N,E=(w=N===-T||N!==T&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-N;w<i&&E<o&&e.charAt(i-w-1)===n.charAt(o-E-1);)w++,E++
if(c[b]=w,w>i)v+=2
else if(E>o)m+=2
else if(!h&&(y=a+d-N)>=0&&y<u&&-1!==l[y]&&(x=a+(k=l[y])-y,k>=(w=i-w)))return this.diffBisectSplit(e,n,k,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
return o=e.substring(0,n),a=t.substring(0,r),s=e.substring(n),u=t.substring(r),l=this.DiffMain(o,a,!1,i),c=this.DiffMain(s,u,!1,i),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){var n,r,i,o,s,a,u,l,c,f,d,h,p
for(n=!1,r=[],i=0,o=null,s=0,l=0,c=0,a=0,u=0;s<e.length;)0===e[s][0]?(r[i++]=s,l=a,c=u,a=0,u=0,o=e[s][1]):(1===e[s][0]?a+=e[s][1].length:u+=e[s][1].length,o&&o.length<=Math.max(l,c)&&o.length<=Math.max(a,u)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,s=--i>0?r[i-1]:-1,l=0,c=0,a=0,u=0,o=null,n=!0)),s++
for(n&&this.diffCleanupMerge(e),s=1;s<e.length;)e[s-1][0]===t&&1===e[s][0]&&(f=e[s-1][1],d=e[s][1],(h=this.diffCommonOverlap(f,d))>=(p=this.diffCommonOverlap(d,f))?(h>=f.length/2||h>=d.length/2)&&(e.splice(s,0,[0,d.substring(0,h)]),e[s-1][1]=f.substring(0,f.length-h),e[s+1][1]=d.substring(h),s++):(p>=f.length/2||p>=d.length/2)&&(e.splice(s,0,[0,f.substring(0,p)]),e[s-1][0]=1,e[s-1][1]=d.substring(0,d.length-p),e[s+1][0]=t,e[s+1][1]=f.substring(p),s++),s++),s++},e.prototype.diffCommonOverlap=function(e,t){var n,r,i,o,s,a,u
if(n=e.length,r=t.length,0===n||0===r)return 0
if(n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n)),i=Math.min(n,r),e===t)return i
for(o=0,s=1;;){if(a=e.substring(i-s),-1===(u=t.indexOf(a)))return o
s+=u,0!==u&&e.substring(i-s)!==t.substring(0,s)||(o=s,s++)}},e.prototype.diffLinesToChars=function(e,t){var r,i
function o(e){for(var t="",o=0,s=-1,a=r.length;s<e.length-1;){-1===(s=e.indexOf("\n",o))&&(s=e.length-1)
var u=e.substring(o,s+1)
o=s+1,n.call(i,u)?t+=String.fromCharCode(i[u]):(t+=String.fromCharCode(a),i[u]=a,r[a++]=u)}return t}return i={},(r=[])[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){var n,r,i,o
for(n=0;n<e.length;n++){for(r=e[n][1],i=[],o=0;o<r.length;o++)i[o]=t[r.charCodeAt(o)]
e[n][1]=i.join("")}},e.prototype.diffCleanupMerge=function(e){var n,r,i,o,s,a,u,l
for(e.push([0,""]),n=0,r=0,i=0,s="",o="";n<e.length;)switch(e[n][0]){case 1:i++,o+=e[n][1],n++
break
case t:r++,s+=e[n][1],n++
break
case 0:r+i>1?(0!==r&&0!==i&&(0!==(a=this.diffCommonPrefix(o,s))&&(n-r-i>0&&0===e[n-r-i-1][0]?e[n-r-i-1][1]+=o.substring(0,a):(e.splice(0,0,[0,o.substring(0,a)]),n++),o=o.substring(a),s=s.substring(a)),0!==(a=this.diffCommonSuffix(o,s))&&(e[n][1]=o.substring(o.length-a)+e[n][1],o=o.substring(0,o.length-a),s=s.substring(0,s.length-a))),0===r?e.splice(n-i,r+i,[1,o]):0===i?e.splice(n-r,r+i,[t,s]):e.splice(n-r-i,r+i,[t,s],[1,o]),n=n-r-i+(r?1:0)+(i?1:0)+1):0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,i=0,r=0,s="",o=""}for(""===e[e.length-1][1]&&e.pop(),u=!1,n=1;n<e.length-1;)0===e[n-1][0]&&0===e[n+1][0]&&((l=e[n][1]).substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),u=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),u=!0)),n++
u&&this.diffCleanupMerge(e)},function(t,n){var r,i
return i=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(i),r.diffPrettyHtml(i)}}()}()}}])
