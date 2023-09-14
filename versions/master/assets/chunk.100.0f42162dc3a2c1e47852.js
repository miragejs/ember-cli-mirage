/*! For license information please see chunk.100.0f42162dc3a2c1e47852.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[100],{1100:(e,t,n)=>{var r
e=n.nmd(e),function(){"use strict"
function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(null!=n){var r,i,o=[],s=!0,a=!1
try{for(n=n.call(e);!(s=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==n.return||n.return()}finally{if(a)throw i}}return o}}(e,t)||c(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||c(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){if(e){if("string"==typeof e)return f(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n]
return r}var d=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if(void 0!==h)return h
if("undefined"!=typeof global)return global
throw new Error("Unable to locate global object")}(),h=d.window,p=d.console,g=d.setTimeout,m=d.clearTimeout,v=h&&h.document,b=h&&h.navigator,y=function(){var e="qunit-test-string"
try{return d.sessionStorage.setItem(e,e),d.sessionStorage.removeItem(e),d.sessionStorage}catch(e){return}}(),k="function"==typeof d.Map&&"function"==typeof d.Map.prototype.keys&&"function"==typeof d.Symbol&&"symbol"===i(d.Symbol.iterator)?d.Map:function(e){var t=this,n=Object.create(null),r=Object.prototype.hasOwnProperty
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,n){t.set(n,e)}))},w="function"==typeof d.Set&&"function"==typeof d.Set.prototype.values?d.Set:function(e){var t=Object.create(null)
return Array.isArray(e)&&e.forEach((function(e){t[e]=!0})),{add:function(e){t[e]=!0},has:function(e){return e in t},get size(){return Object.keys(t).length}}},x={warn:p?Function.prototype.bind.call(p.warn||p.log,p):function(){}},E=Object.prototype.toString,C=Object.prototype.hasOwnProperty,T=h&&void 0!==h.performance&&"function"==typeof h.performance.mark&&"function"==typeof h.performance.measure?h.performance:void 0,N={now:T?T.now.bind(T):Date.now,measure:T?function(e,t,n){try{T.measure(e,t,n)}catch(e){x.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:T?T.mark.bind(T):function(){}}
function M(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))}function S(e,t){return-1!==t.indexOf(e)}function j(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&O("array",e)?[]:{}
for(var r in e)if(C.call(e,r)){var i=e[r]
n[r]=i===Object(i)?j(i,t):i}return n}function q(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)C.call(t,r)&&C.call(e,r)&&(n[r]=q(e[r],t[r]))
return n}function I(e,t,n){for(var r in t)C.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function R(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=E.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return i(e)}}function O(e,t){return R(t)===e}function _(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function A(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var L=new w(["boolean","number","string"]),P=[]
function H(e,t){return e===t}function U(e,t){return e===t||e.valueOf()===t.valueOf()}function D(e){var t=Object.getPrototypeOf(e)
return t&&null!==t.constructor?e.constructor:Object}function F(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}var B={undefined:H,null:H,boolean:U,number:function(e,t){return e===t||e.valueOf()===t.valueOf()||isNaN(e.valueOf())&&isNaN(t.valueOf())},string:U,symbol:H,date:U,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&F(e)===F(t)},function:H,array:function(e,t){if(e.length!==t.length)return!1
for(var n=0;n<e.length;n++)if(!z(e[n],t[n]))return!1
return!0},set:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e){if(n){var r=!1
t.forEach((function(t){if(!r){var n=P
P=[],z(t,e)&&(r=!0),P=n}})),r||(n=!1)}})),n},map:function(e,t){if(e.size!==t.size)return!1
var n=!0
return e.forEach((function(e,r){if(n){var i=!1
t.forEach((function(t,n){if(!i){var o=P
P=[],B.array([t,n],[e,r])&&(i=!0),P=o}})),i||(n=!1)}})),n}},Q={undefined:H,null:H,boolean:H,number:function(e,t){return e===t||isNaN(e)&&isNaN(t)},string:H,symbol:H,function:H,object:function(e,t){if(P.some((function(n){return n.a===e&&n.b===t})))return!0
P.push({a:e,b:t})
var n=R(e),r=R(t)
if("object"!==n||"object"!==r)return n===r&&B[n](e,t)
if(!1===function(e,t){return D(e)===D(t)}(e,t))return!1
var i=[],o=[]
for(var s in e)if(i.push(s),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[s]||"function"!=typeof t[s]||e[s].toString()!==t[s].toString())&&!z(e[s],t[s]))return!1
for(var a in t)o.push(a)
return B.array(i.sort(),o.sort())}}
function z(e,t){if(e===t)return!0
var n=i(e),r=i(t)
return n!==r?("object"===n&&L.has(R(e))?e.valueOf():e)===("object"===r&&L.has(R(t))?t.valueOf():t):Q[n](e,t)}function $(e,t){var n=z(e,t)
return P=[],n}function G(e,t){if(2===arguments.length)return e===t||$(e,t)
for(var n=arguments.length-1;n>0;){if(!$(arguments[n-1],arguments[n]))return!1
n--}return!0}var Y={altertitle:!0,collapse:!0,failOnZeroTests:!0,filter:void 0,maxDepth:5,module:void 0,moduleId:void 0,reorder:!0,requireExpects:!1,scrolltop:!0,storage:y,testId:void 0,urlConfig:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},blocking:!0,callbacks:{},modules:[],queue:[],stats:{all:0,bad:0,testCount:0}},W=d&&d.QUnit&&!d.QUnit.version&&d.QUnit.config
W&&I(Y,W),Y.modules.push(Y.currentModule)
var J=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=s.separator(),i=s.indent(1)
return t.join&&(t=t.join(","+r+i)),t?[e,i+t,s.indent()+n].join(r):e+n}function r(e,t){if(s.maxDepth&&s.depth>s.maxDepth)return"[object Array]"
this.up()
for(var r=e.length,i=new Array(r);r--;)i[r]=this.parse(e[r],void 0,t)
return this.down(),n("[",i,"]")}var o=/^function (\w+)/,s={parse:function(e,t,n){var r=(n=n||[]).indexOf(e)
if(-1!==r)return"recursion(".concat(r-n.length,")")
t=t||this.typeOf(e)
var o=this.parsers[t],s=i(o)
if("function"===s){n.push(e)
var a=o.call(this,e,n)
return n.pop(),a}return"string"===s?o:"[ERROR: Missing QUnit.dump formatter for type "+t+"]"},typeOf:function(e){var t
return t=null===e?"null":void 0===e?"undefined":O("regexp",e)?"regexp":O("date",e)?"date":O("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===E.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":i(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:Y.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
return r&&(t+=" "+r),n(t=[t+="(",s.parse(e,"functionArgs"),"){"].join(""),s.parse(e,"functionCode"),"}")},array:r,nodelist:r,arguments:r,object:function(e,t){var r=[]
if(s.maxDepth&&s.depth>s.maxDepth)return"[object Object]"
s.up()
var i=[]
for(var o in e)i.push(o)
var a=["message","name"]
for(var u in a){var l=a[u]
l in e&&!S(l,i)&&i.push(l)}i.sort()
for(var c=0;c<i.length;c++){var f=i[c],d=e[f]
r.push(s.parse(f,"key")+": "+s.parse(d,void 0,t))}return s.down(),n("{",r,"}")},node:function(e){var t=s.HTML?"&lt;":"<",n=s.HTML?"&gt;":">",r=e.nodeName.toLowerCase(),i=t+r,o=e.attributes
if(o)for(var a=0;a<o.length;a++){var u=o[a].nodeValue
u&&"inherit"!==u&&(i+=" "+o[a].nodeName+"="+s.parse(u,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return s}(),V=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return a(e,[{key:"start",value:function(e){if(e){this._startTime=N.now()
var t=this.fullName.length
N.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=N.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
N.mark("qunit_suite_".concat(t,"_end")),N.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),Z=[],K=new V
function X(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function ee(e,t){return function(n){Y.currentModule!==e&&x.warn("The `"+t+"` hook was called inside the wrong module (`"+Y.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function te(e,t,n){"function"==typeof t&&(n=t,t=void 0)
var r=function(e,t,n){var r=Z.length?Z.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:K,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={}
r&&I(u,r.testEnvironment),I(u,t)
var l={name:i,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:u,tests:[],moduleId:_(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new V(e,o),stats:null,skip:s,todo:!s&&a,ignored:n.ignored||!1}
return r&&r.childModules.push(l),Y.modules.push(l),l}(e,t,arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}),i=r.testEnvironment,o=r.hooks
X(o,i,"before"),X(o,i,"beforeEach"),X(o,i,"afterEach"),X(o,i,"after")
var s={before:ee(r,"before"),beforeEach:ee(r,"beforeEach"),afterEach:ee(r,"afterEach"),after:ee(r,"after")},a=Y.currentModule
if(Y.currentModule=r,"function"==typeof n){Z.push(r)
try{var u=n.call(r.testEnvironment,s)
u&&"function"==typeof u.then&&x.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{Z.pop(),Y.currentModule=r.parentModule||a}}}var ne=!1
function re(e,t,n){var r,i=ne&&(r=Y.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!Z.some((function(e){return r.includes(e.moduleId)})))
te(e,t,n,{ignored:i})}re.only=function(){ne||(Y.modules.length=0,Y.queue.length=0,Y.currentModule.ignored=!0),ne=!0,te.apply(void 0,arguments)},re.skip=function(e,t,n){ne||te(e,t,n,{skip:!0})},re.todo=function(e,t,n){ne||te(e,t,n,{todo:!0})}
var ie=(se(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+[/\\]/,"")
function oe(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),ie){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(ie);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function se(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return oe(t,e)}var ae=function(){function e(t){o(this,e),this.test=t}return a(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,Y.timeout&&(m(Y.timeout),Y.timeout=null,Y.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),void 0===e||""===e?t="You must provide a message to assert.step":"string"!=typeof e&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,i,o){return x.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:Y.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||Y.current
if(!r)throw new Error("assertion outside test context, in "+se(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(J.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(J.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){this.pushResult({result:t==e,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){this.pushResult({result:t!=e,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=j(e),t=j(t),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=j(e),t=j(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=q(e,t),t=j(t,!1),this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=q(e,t),t=j(t),this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:G(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!G(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=u(ue(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||Y.current
if("function"==typeof t){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var l=u(le(s,n,r),3)
a=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:a,actual:s&&A(s),expected:n,message:r})}else o.assert.pushResult({result:!1,actual:t,message:'The value provided to `assert.throws` in "'+o.testName+'" was not a function.'})}},{key:"rejects",value:function(t,n,r){var i=u(ue(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||Y.current,s=t&&t.then
if("function"==typeof s){var a=this.async()
return s.call(t,(function(){o.assert.pushResult({result:!1,message:'The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.',actual:t}),a()}),(function(e){var t,i=u(le(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&A(e),expected:n,message:r}),a()}))}o.assert.pushResult({result:!1,message:'The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.',actual:t})}}]),e}()
function ue(e,t,n){var r=R(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function le(e,t,n){var r=!1,i=R(t)
if(t){if("regexp"===i)r=t.test(A(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=A(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=A(e)}}else r=!0
return[r,t,n]}ae.prototype.raises=ae.prototype.throws
var ce=Object.create(null),fe=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function de(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when emitting an event")
for(var n=ce[e],r=n?l(n):[],i=0;i<r.length;i++)r[i](t)}var he="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{}
function pe(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var ge={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==he)return he
throw new Error("unable to locate global object")}()
if("function"!=typeof e.Promise){var t=setTimeout
o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){var n=new this.constructor(r)
return s(this,new c(e,t,n)),n},o.prototype.finally=function(e){var t=this.constructor
return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},o.all=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.all accepts an array"))
var o=Array.prototype.slice.call(e)
if(0===o.length)return t([])
var s=o.length
function a(e,n){try{if(n&&("object"===i(n)||"function"==typeof n)){var u=n.then
if("function"==typeof u)return void u.call(n,(function(t){a(e,t)}),r)}o[e]=n,0==--s&&t(o)}catch(e){r(e)}}for(var u=0;u<o.length;u++)a(u,o[u])}))},o.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(i(e)+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"))
var r=Array.prototype.slice.call(e)
if(0===r.length)return t([])
var o=r.length
function s(e,n){if(n&&("object"===i(n)||"function"==typeof n)){var a=n.then
if("function"==typeof a)return void a.call(n,(function(t){s(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var a=0;a<r.length;a++)s(a,r[a])}))},o.resolve=function(e){return e&&"object"===i(e)&&e.constructor===o?e:new o((function(t){t(e)}))},o.reject=function(e){return new o((function(t,n){n(e)}))},o.race=function(e){return new o((function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"))
for(var i=0,s=e.length;i<s;i++)o.resolve(e[i]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},ge.exports=o}else ge.exports=e.Promise
function n(e){return Boolean(e&&void 0!==e.length)}function r(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new")
if("function"!=typeof e)throw new TypeError("not a function")
this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(e,this)}function s(e,t){for(;3===e._state;)e=e._value
0!==e._state?(e._handled=!0,o._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected
if(null!==n){var r
try{r=n(e._value)}catch(e){return void u(t.promise,e)}a(t.promise,r)}else(1===e._state?a:u)(t.promise,e._value)}))):e._deferreds.push(t)}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.")
if(t&&("object"===i(t)||"function"==typeof t)){var n=t.then
if(t instanceof o)return e._state=3,e._value=t,void l(e)
if("function"==typeof n)return void f((r=n,s=t,function(){r.apply(s,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){u(e,t)}var r,s}function u(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&o._immediateFn((function(){e._handled||o._unhandledRejectionFn(e._value)}))
for(var t=0,n=e._deferreds.length;t<n;t++)s(e,e._deferreds[t])
e._deferreds=null}function c(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function f(e,t){var n=!1
try{e((function(e){n||(n=!0,a(t,e))}),(function(e){n||(n=!0,u(t,e))}))}catch(e){if(n)return
n=!0,u(t,e)}}}()
var me=ge.exports
function ve(e,t){var n=Y.callbacks[e]
if("log"!==e){var r=me.resolve()
return n.forEach((function(e){r=r.then((function(){return me.resolve(e(t))}))})),r}n.map((function(e){return e(t)}))}var be,ye=0,ke=[]
function we(){var e,t
e=N.now(),Y.depth=(Y.depth||0)+1,xe(e),Y.depth--,ke.length||Y.blocking||Y.current||(Y.blocking||Y.queue.length||0!==Y.depth?(t=Y.queue.shift()(),ke.push.apply(ke,l(t)),ye>0&&ye--,we()):function(){var e
if(0===Y.stats.testCount&&!0===Y.failOnZeroTests)return e=Y.filter&&Y.filter.length?new Error('No tests matched the filter "'.concat(Y.filter,'".')):Y.module&&Y.module.length?new Error('No tests matched the module "'.concat(Y.module,'".')):Y.moduleId&&Y.moduleId.length?new Error('No tests matched the moduleId "'.concat(Y.moduleId,'".')):Y.testId&&Y.testId.length?new Error('No tests matched the testId "'.concat(Y.testId,'".')):new Error("No tests were run."),Ie("global failure",I((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void we()
var t=Y.storage,n=Math.round(N.now()-Y.started),r=Y.stats.all-Y.stats.bad
Ee.finished=!0,de("runEnd",K.end(!0)),ve("done",{passed:r,failed:Y.stats.bad,total:Y.stats.all,runtime:n}).then((function(){if(t&&0===Y.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function xe(e){if(ke.length&&!Y.blocking){var t=N.now()-e
if(!g||Y.updateRate<=0||t<Y.updateRate){var n=ke.shift()
me.resolve(n()).then((function(){ke.length?xe(e):we()}))}else g(we)}}var Ee={finished:!1,add:function(e,t,n){if(t)Y.queue.splice(ye++,0,e)
else if(n){be||(be=function(e){var t=parseInt(_(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(be()*(Y.queue.length-ye+1))
Y.queue.splice(ye+r,0,e)}else Y.queue.push(e)},advance:we,taskCount:function(){return ke.length}},Ce=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return a(e,[{key:"start",value:function(e){return e&&(this._startTime=N.now(),N.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=N.now(),N)){N.mark("qunit_test_end")
var t=this.fullName.join(" – ")
N.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return I(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return Math.round(this._endTime-this._startTime)}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function Te(e){if(this.expected=null,this.assertions=[],this.module=Y.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new k,this.nextPauseId=1,this.stackOffset=3,I(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),Ee.finished)x.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=_(this.module.name,this.testName),++Te.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new Ce(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()}),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new ae(this)}}function Ne(){if(!Y.current)throw new Error("pushFailure() assertion outside test context, in "+se(2))
var e=Y.current
return e.pushFailure.apply(e,arguments)}function Me(){if(Y.pollution=[],Y.noglobals)for(var e in d)if(C.call(d,e)){if(/^qunit-test-output/.test(e))continue
Y.pollution.push(e)}}Te.count=0,Te.prototype={get stack(){return oe(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t),r=me.resolve()
return n.forEach((function(e){r=r.then((function(){return e.stats={all:0,bad:0,started:N.now()},de("suiteStart",e.suiteReport.start(!0)),ve("moduleStart",{name:e.name,tests:e.tests})}))})),r.then((function(){return Y.current=e,e.testEnvironment=I({},t.testEnvironment),e.started=N.now(),de("testStart",e.testReport.start(!0)),ve("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){Y.pollution||Me()}))}))},run:function(){if(Y.current=this,Y.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,oe(e,0)),Me(),Y.blocking&&_e(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&Ne("Test did not finish synchronously even though assert.timeout( 0 ) was used.",se(2))}},after:function(){!function(){var e=Y.pollution
Me()
var t=M(Y.pollution,e)
t.length>0&&Ne("Introduced global variable(s): "+t.join(", "))
var n=M(e,Y.pollution)
n.length>0&&Ne("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(Y.current=n,Y.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+A(e),oe(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Le(e).filter((function(e){return!e.skip})).length-1}(n)||!(Y.queue.length>0||Ee.taskCount()>2))if(Y.current=r,Y.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),oe(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&Y.globalHooks[e])for(var r=0;r<Y.globalHooks[e].length;r++)t.push(n.queueGlobalHook(Y.globalHooks[e][r],e))}(this),function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module)),t},finish:function(){if(Y.current=this,g&&(m(this.timeout),Y.timeoutHandler=null),this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}Y.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=Y.storage
this.runtime=Math.round(N.now()-this.started),Y.stats.all+=this.assertions.length,Y.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,Y.stats.bad++,t.stats.bad++)
i?He(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),de("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return ve("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(Pe(t)){for(var e=[t],n=t.parentModule;n&&Pe(n);)e.push(n),n=n.parentModule
var r=me.resolve()
return e.forEach((function(e){r=r.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return de("suiteEnd",e.suiteReport.end(!0)),ve("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:Math.round(N.now()-e.stats.started)})}(e)}))})),r}})).then((function(){Y.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=I({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=Y.storage&&+Y.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=Y.reorder&&!!t
this.previousFailure=!!t,Ee.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,Y.seed)}else He(this.module)},pushResult:function(e){if(this!==Y.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:Math.round(N.now()-this.started),todo:!!this.todo}
if(C.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||se()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof Te))throw new Error("pushFailure() assertion outside test context, was "+se(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){ve("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),de("assertion",t)},internalResetTimeout:function(e){m(Y.timeout),Y.timeout=g(Y.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
Y.blocking=!0
var t,n=this,r=this.nextPauseId++,i={cancelled:!1,remaining:e}
return n.pauses.set(r,i),g&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof Y.testTimeout&&(t=Y.testTimeout),"number"==typeof t&&t>0&&(Y.timeoutHandler=function(e){return function(){Y.timeout=null,i.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),se(2)),Ae(n)}},m(Y.timeout),Y.timeout=g(Y.timeoutHandler(t),t))),function(){if(!i.cancelled){if(void 0===Y.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(Y.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&n.pauses.delete(r),Ae(n)}}},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"==typeof r){var i=n.internalStop(),o=function(){i()}
Y.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,oe(e,0)),Me(),_e(n)}))}}},valid:function(){if(this.callback&&this.callback.validTest)return!0
if(!function e(t,n){return!n||!n.length||S(t.moduleId,n)||t.parentModule&&e(t.parentModule,n)}(this.module,Y.moduleId))return!1
if(Y.testId&&Y.testId.length&&!S(this.testId,Y.testId))return!1
var e=Y.module&&Y.module.toLowerCase()
if(!function e(t,n){return!n||(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule,n)}(this.module,e))return!1
var t=Y.filter
if(!t)return!0
var n=/^(!?)\/([\w\W]*)\/(i?$)/.exec(t),r=this.module.name+": "+this.testName
return n?this.regexFilter(!!n[1],n[2],n[3],r):this.stringFilter(t,r)},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var Se=!1
function je(e){Se||Y.currentModule.ignored||new Te(e).queue()}function qe(e){Y.currentModule.ignored||(Se||(Y.queue.length=0,Se=!0),new Te(e).queue())}function Ie(e,t){je({testName:e,callback:t})}function Re(e,t){return"".concat(e," [").concat(t,"]")}function Oe(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==i(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(i(e)," instead."))
for(var r in e)t(e[r],r)}}function _e(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Ae(e)}function Ae(e){e.pauses.size>0||(g?(m(Y.timeout),Y.timeout=g((function(){e.pauses.size>0||(m(Y.timeout),Y.timeout=null,Y.blocking=!1,Ee.advance())}))):(Y.blocking=!1,Ee.advance()))}function Le(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Pe(e){return e.testsRun+e.testsIgnored===Le(e).length}function He(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}I(Ie,{todo:function(e,t){je({testName:e,callback:t,todo:!0})},skip:function(e){je({testName:e,skip:!0})},only:function(e,t){qe({testName:e,callback:t})},each:function(e,t,n){Oe(t,(function(t,r){je({testName:Re(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),Ie.todo.each=function(e,t,n){Oe(t,(function(t,r){je({testName:Re(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},Ie.skip.each=function(e,t){Oe(t,(function(t,n){je({testName:Re(e,n),stackOffset:5,skip:!0})}))},Ie.only.each=function(e,t,n){Oe(t,(function(t,r){qe({testName:Re(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var Ue,De,Fe,Be,Qe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(p.log,p),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return a(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),ze=!0
if("undefined"!=typeof process){var $e=process.env||{}
Ue=$e.FORCE_COLOR,De=$e.NODE_DISABLE_COLORS,Fe=$e.NO_COLOR,Be=$e.TERM,ze=process.stdout&&process.stdout.isTTY}var Ge={enabled:!De&&null==Fe&&"dumb"!==Be&&(null!=Ue&&"0"!==Ue||ze),reset:We(0,0),bold:We(1,22),dim:We(2,22),italic:We(3,23),underline:We(4,24),inverse:We(7,27),hidden:We(8,28),strikethrough:We(9,29),black:We(30,39),red:We(31,39),green:We(32,39),yellow:We(33,39),blue:We(34,39),magenta:We(35,39),cyan:We(36,39),white:We(37,39),gray:We(90,39),grey:We(90,39),bgBlack:We(40,49),bgRed:We(41,49),bgGreen:We(42,49),bgYellow:We(43,49),bgBlue:We(44,49),bgMagenta:We(45,49),bgCyan:We(46,49),bgWhite:We(47,49)}
function Ye(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function We(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Ge.enabled?Ye(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Ge.reset.bind(r),r.bold=Ge.bold.bind(r),r.dim=Ge.dim.bind(r),r.italic=Ge.italic.bind(r),r.underline=Ge.underline.bind(r),r.inverse=Ge.inverse.bind(r),r.hidden=Ge.hidden.bind(r),r.strikethrough=Ge.strikethrough.bind(r),r.black=Ge.black.bind(r),r.red=Ge.red.bind(r),r.green=Ge.green.bind(r),r.yellow=Ge.yellow.bind(r),r.blue=Ge.blue.bind(r),r.magenta=Ge.magenta.bind(r),r.cyan=Ge.cyan.bind(r),r.white=Ge.white.bind(r),r.gray=Ge.gray.bind(r),r.grey=Ge.grey.bind(r),r.bgBlack=Ge.bgBlack.bind(r),r.bgRed=Ge.bgRed.bind(r),r.bgGreen=Ge.bgGreen.bind(r),r.bgYellow=Ge.bgYellow.bind(r),r.bgBlue=Ge.bgBlue.bind(r),r.bgMagenta=Ge.bgMagenta.bind(r),r.bgCyan=Ge.bgCyan.bind(r),r.bgWhite=Ge.bgWhite.bind(r),r):Ge.enabled?Ye([n],t+""):t+""
var r}}var Je=Object.prototype.hasOwnProperty
function Ve(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){if(""===e||/['"\\/[{}\]\r\n]/.test(e)||/[-?:,[\]{}#&*!|=>'"%@`]/.test(e[0])||/(^\s|\s$)/.test(e)||/^[\d._-]+$/.test(e)||/^(true|false|y|n|yes|no|on|off)$/i.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var n=new Array(t+1).join(" "),r=e.match(/\n+$/)
return 1===(r?r[0].length:0)?"|\n"+e.replace(/\n$/,"").split("\n").map((function(e){return n+e})).join("\n"):"|+\n"+e.split("\n").map((function(e){return n+e})).join("\n")}return e}return JSON.stringify(Ze(e),null,2)}function Ze(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==n.indexOf(e))return"[Circular]"
switch(Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()){case"array":n.push(e),t=e.map((function(e){return Ze(e,n)})),n.pop()
break
case"object":n.push(e),t={},Object.keys(e).forEach((function(r){t[r]=Ze(e[r],n)})),n.pop()
break
default:t=e}return t}var Ke=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(p.log,p),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return a(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Ge.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+A(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Ge.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Ge.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Ge.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Ge.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Ge.cyan("# todo ".concat(e.testCounts.todo))),this.log(Ge.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(Ve(e.message||"failed")),n+="\n  severity: ".concat(Ve(t||"failed")),Je.call(e,"actual")&&(n+="\n  actual  : ".concat(Ve(e.actual))),Je.call(e,"expected")&&(n+="\n  expected: ".concat(Ve(e.expected))),e.stack&&(n+="\n  stack: ".concat(Ve(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(Ve(A(e))),t+="\n  severity: ".concat(Ve("failed")),e&&e.stack&&(t+="\n  stack: ".concat(Ve(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Xe={console:Qe,tap:Ke}
function et(e){return function(t){Y.globalHooks[e]||(Y.globalHooks[e]=[]),Y.globalHooks[e].push(t)}}var tt={beforeEach:et("beforeEach"),afterEach:et("afterEach")}
function nt(e){Y.current?Y.current.assert.pushResult({result:!1,message:"global failure: ".concat(A(e)),source:e&&e.stack||se(2)}):(K.globalFailureCount++,Y.stats.bad++,Y.stats.all++,de("error",e))}var rt={}
Y.currentModule.suiteReport=K
var it=!1,ot=!1
function st(){ot=!0,g?g((function(){ut()})):ut()}function at(){Y.blocking=!1,Ee.advance()}function ut(){if(Y.started)at()
else{Y.started=N.now(),""===Y.modules[0].name&&0===Y.modules[0].tests.length&&Y.modules.shift()
for(var e=[],t=0;t<Y.modules.length;t++)""!==Y.modules[t].name&&e.push({name:Y.modules[t].name,moduleId:Y.modules[t].moduleId,tests:Y.modules[t].tests})
de("runStart",K.start(!0)),ve("begin",{totalTests:Te.count,modules:e}).then(at)}}rt.isLocal=h&&h.location&&"file:"===h.location.protocol,rt.version="2.19.4",I(rt,{config:Y,dump:J,equiv:G,reporters:Xe,hooks:tt,is:O,objectType:R,on:function(e,t){if("string"!=typeof e)throw new TypeError("eventName must be a string when registering a listener")
if(!S(e,fe)){var n=fe.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!=typeof t)throw new TypeError("callback must be a function when registering a listener")
ce[e]||(ce[e]=[]),S(t,ce[e])||ce[e].push(t)},onError:function(e){if(x.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),Y.current&&Y.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,nt(t),!1},onUncaughtException:nt,pushFailure:Ne,assert:ae.prototype,module:re,test:Ie,todo:Ie.todo,skip:Ie.skip,only:Ie.only,start:function(e){if(Y.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=it
if(it=!0,ot)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(Y.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!Y.pageLoaded)return Y.autostart=!0,void(v||rt.load())
st()},onUnhandledRejection:function(e){x.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),nt(e)},extend:function(){x.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return I.apply(this,t)},load:function(){Y.pageLoaded=!0,I(Y,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),ot||(Y.blocking=!1,Y.autostart&&st())},stack:function(e){return se(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!=typeof t)throw new Error("Callback parameter must be a function")
Y.callbacks[e].push(t)}}for(var r=0;r<t.length;r++){var i=t[r]
void 0===Y.callbacks[i]&&(Y.callbacks[i]=[]),e[i]=n(i)}}(rt),function(i){if(h&&v){if(h.QUnit&&h.QUnit.version)throw new Error("QUnit has already been defined.")
h.QUnit=i}e&&e.exports&&(e.exports=i,e.exports.QUnit=i),t&&(t.QUnit=i),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1}(rt),function(){if(h&&v){var e=rt.config,t=Object.prototype.hasOwnProperty
rt.begin((function(){if(!t.call(e,"fixture")){var n=v.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),rt.testStart((function(){if(null!=e.fixture){var t=v.getElementById("qunit-fixture")
if("string"===i(e.fixture)){var n=v.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==h&&h.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),i=r.length,o=0;o<i;o++)if(r[o]){var s=r[o].split("="),a=n(s[0]),u=1===s.length||n(s.slice(1).join("="))
t[a]=a in t?[].concat(t[a],u):u}return t}()
rt.urlParams=t,rt.config.filter=t.filter,rt.config.module=t.module,rt.config.moduleId=[].concat(t.moduleId||[]),rt.config.testId=[].concat(t.testId||[]),!0===t.seed?rt.config.seed=Math.random().toString(36).slice(2):t.seed&&(rt.config.seed=t.seed),rt.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),rt.begin((function(){for(var e=rt.config.urlConfig,n=0;n<e.length;n++){var r=rt.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===rt.config[r]&&(rt.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var lt={exports:{}}
!function(e){var t,n
t=he,n=function(){var e=void 0!==pe&&"undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
this.get=function(t){return e[t]},this.set=function(t,n){return e[t]=n,this},this.clear=function(){e=Object.create(null)}},n=new t,r=new t,o=[]
o.total=0
var s=[],a=[]
function u(){n.clear(),r.clear(),s=[],a=[]}function l(e){for(var t=-9007199254740991,n=e.length-1;n>=0;--n){var r=e[n]
if(null!==r){var i=r.score
i>t&&(t=i)}}return-9007199254740991===t?null:t}function c(e,t){var n=e[t]
if(void 0!==n)return n
var r=t
Array.isArray(t)||(r=t.split("."))
for(var i=r.length,o=-1;e&&++o<i;)e=e[r[o]]
return e}function f(e){return"object"===i(e)}var d=function(){var e=[],t=0,n={}
function r(){for(var n=0,r=e[n],i=1;i<t;){var o=i+1
n=i,o<t&&e[o].score<e[i].score&&(n=o),e[n-1>>1]=e[n],i=1+(n<<1)}for(var s=n-1>>1;n>0&&r.score<e[s].score;s=(n=s)-1>>1)e[n]=e[s]
e[n]=r}return n.add=function(n){var r=t
e[t++]=n
for(var i=r-1>>1;r>0&&n.score<e[i].score;i=(r=i)-1>>1)e[r]=e[i]
e[r]=n},n.poll=function(){if(0!==t){var n=e[0]
return e[0]=e[--t],r(),n}},n.peek=function(n){if(0!==t)return e[0]},n.replaceTop=function(t){e[0]=t,r()},n},h=d()
return function t(i){var p={single:function(e,t,n){return"farzher"==e?{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6]}:e?(f(e)||(e=p.getPreparedSearch(e)),t?(f(t)||(t=p.getPrepared(t)),((n&&void 0!==n.allowTypo?n.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?p.algorithm:p.algorithmNoTypo)(e,t,e[0])):null):null},go:function(e,t,n){if("farzher"==e)return[{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:t?t[0]:null}]
if(!e)return o
var r=(e=p.prepareSearch(e))[0],s=n&&n.threshold||i&&i.threshold||-9007199254740991,a=n&&n.limit||i&&i.limit||9007199254740991,u=(n&&void 0!==n.allowTypo?n.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?p.algorithm:p.algorithmNoTypo,d=0,g=0,m=t.length
if(n&&n.keys)for(var v=n.scoreFn||l,b=n.keys,y=b.length,k=m-1;k>=0;--k){for(var w=t[k],x=new Array(y),E=y-1;E>=0;--E)(N=c(w,T=b[E]))?(f(N)||(N=p.getPrepared(N)),x[E]=u(e,N,r)):x[E]=null
x.obj=w
var C=v(x)
null!==C&&(C<s||(x.score=C,d<a?(h.add(x),++d):(++g,C>h.peek().score&&h.replaceTop(x))))}else if(n&&n.key){var T=n.key
for(k=m-1;k>=0;--k)(N=c(w=t[k],T))&&(f(N)||(N=p.getPrepared(N)),null!==(M=u(e,N,r))&&(M.score<s||(M={target:M.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:M.score,indexes:M.indexes,obj:w},d<a?(h.add(M),++d):(++g,M.score>h.peek().score&&h.replaceTop(M)))))}else for(k=m-1;k>=0;--k){var N,M;(N=t[k])&&(f(N)||(N=p.getPrepared(N)),null!==(M=u(e,N,r))&&(M.score<s||(d<a?(h.add(M),++d):(++g,M.score>h.peek().score&&h.replaceTop(M)))))}if(0===d)return o
var S=new Array(d)
for(k=d-1;k>=0;--k)S[k]=h.poll()
return S.total=d+g,S},goAsync:function(t,n,r){var s=!1,a=new Promise((function(a,u){if("farzher"==t)return a([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return a(o)
var h=(t=p.prepareSearch(t))[0],g=d(),m=n.length-1,v=r&&r.threshold||i&&i.threshold||-9007199254740991,b=r&&r.limit||i&&i.limit||9007199254740991,y=(r&&void 0!==r.allowTypo?r.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?p.algorithm:p.algorithmNoTypo,k=0,w=0
function x(){if(s)return u("canceled")
var i=Date.now()
if(r&&r.keys)for(var d=r.scoreFn||l,E=r.keys,C=E.length;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x))
for(var T=n[m],N=new Array(C),M=C-1;M>=0;--M)(q=c(T,j=E[M]))?(f(q)||(q=p.getPrepared(q)),N[M]=y(t,q,h)):N[M]=null
N.obj=T
var S=d(N)
null!==S&&(S<v||(N.score=S,k<b?(g.add(N),++k):(++w,S>g.peek().score&&g.replaceTop(N))))}else if(r&&r.key)for(var j=r.key;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x));(q=c(T=n[m],j))&&(f(q)||(q=p.getPrepared(q)),null!==(I=y(t,q,h))&&(I.score<v||(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:T},k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}else for(;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x))
var q,I;(q=n[m])&&(f(q)||(q=p.getPrepared(q)),null!==(I=y(t,q,h))&&(I.score<v||(k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}if(0===k)return a(o)
for(var R=new Array(k),O=k-1;O>=0;--O)R[O]=g.poll()
R.total=k+w,a(R)}e?setImmediate(x):x()}))
return a.cancel=function(){s=!0},a},highlight:function(e,t,n){if("function"==typeof t)return p.highlightCallback(e,t)
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
return void 0!==t||(t=p.prepareSearch(e),r.set(e,t)),t},algorithm:function(e,t,n){for(var r=t._targetLowerCodes,i=e.length,o=r.length,u=0,l=0,c=0,f=0;;){if(n===r[l]){if(s[f++]=l,++u===i)break
n=e[0===c?u:c===u?u+1:c===u-1?u-1:u]}if(++l>=o)for(;;){if(u<=1)return null
if(0===c){if(n===e[--u])continue
c=u}else{if(1===c)return null
if((n=e[1+(u=--c)])===e[u])continue}l=s[(f=u)-1]+1
break}}u=0
var d=0,h=!1,g=0,m=t._nextBeginningIndexes
null===m&&(m=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target))
var v=l=0===s[0]?0:m[s[0]-1]
if(l!==o)for(;;)if(l>=o){if(u<=0){if(++d>i-2)break
if(e[d]===e[d+1])continue
l=v
continue}--u,l=m[a[--g]]}else if(e[0===d?u:d===u?u+1:d===u-1?u-1:u]===r[l]){if(a[g++]=l,++u===i){h=!0
break}++l}else l=m[l]
if(h)var b=a,y=g
else b=s,y=f
for(var k=0,w=-1,x=0;x<i;++x)w!==(l=b[x])-1&&(k-=l),w=l
for(h?0!==d&&(k+=-20):(k*=1e3,0!==c&&(k+=-20)),k-=o-i,t.score=k,t.indexes=new Array(y),x=y-1;x>=0;--x)t.indexes[x]=b[x]
return t},algorithmNoTypo:function(e,t,n){for(var r=t._targetLowerCodes,i=e.length,o=r.length,u=0,l=0,c=0;;){if(n===r[l]){if(s[c++]=l,++u===i)break
n=e[u]}if(++l>=o)return null}u=0
var f=!1,d=0,h=t._nextBeginningIndexes
if(null===h&&(h=t._nextBeginningIndexes=p.prepareNextBeginningIndexes(t.target)),(l=0===s[0]?0:h[s[0]-1])!==o)for(;;)if(l>=o){if(u<=0)break;--u,l=h[a[--d]]}else if(e[u]===r[l]){if(a[d++]=l,++u===i){f=!0
break}++l}else l=h[l]
if(f)var g=a,m=d
else g=s,m=c
for(var v=0,b=-1,y=0;y<i;++y)b!==(l=g[y])-1&&(v-=l),b=l
for(f||(v*=1e3),v-=o-i,t.score=v,t.indexes=new Array(m),y=m-1;y>=0;--y)t.indexes[y]=g[y]
return t},prepareLowerCodes:function(e){for(var t=e.length,n=[],r=e.toLowerCase(),i=0;i<t;++i)n[i]=r.charCodeAt(i)
return n},prepareBeginningIndexes:function(e){for(var t=e.length,n=[],r=0,i=!1,o=!1,s=0;s<t;++s){var a=e.charCodeAt(s),u=a>=65&&a<=90,l=u||a>=97&&a<=122||a>=48&&a<=57,c=u&&!i||!o||!l
i=u,o=l,c&&(n[r++]=s)}return n},prepareNextBeginningIndexes:function(e){for(var t=e.length,n=p.prepareBeginningIndexes(e),r=[],i=n[0],o=0,s=0;s<t;++s)i>s?r[s]=i:(i=n[++o],r[s]=void 0===i?t:i)
return r},cleanup:u,new:t}
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(lt)
var ct=lt.exports,ft={failedTests:[],defined:0,completed:0}
function dt(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(h&&v){var e=rt.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=S({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
rt.on("runStart",(function(e){ft.defined=e.testCounts.total})),rt.begin((function(t){!function(t){var n,s,a,u,c,f,p,y,E=C("qunit")
E&&(E.setAttribute("role","main"),E.innerHTML="<h1 id='qunit-header'>"+dt(v.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(n=rt.config.testId)||n.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+dt(n.join(", "))+" <a id='qunit-clearFilter' href='"+dt(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(s=C("qunit-header"))&&(s.innerHTML="<a href='"+dt(i)+"'>"+s.innerHTML+"</a> "),(a=C("qunit-banner"))&&(a.className=""),p=C("qunit-tests"),(y=C("qunit-testresult"))&&y.parentNode.removeChild(y),p&&(p.innerHTML="",(y=v.createElement("p")).id="qunit-testresult",y.className="result",p.parentNode.insertBefore(y,p),y.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',c=C("qunit-testresult-controls")),c&&c.appendChild(((f=v.createElement("button")).id="qunit-abort-tests-button",f.innerHTML="Abort",d(f,"click",T),f)),(u=C("qunit-userAgent"))&&(u.innerHTML="",u.appendChild(v.createTextNode("QUnit "+rt.version+"; "+b.userAgent))),function(t){var n,i,s,a,u,c=C("qunit-testrunner-toolbar")
if(c){c.appendChild(((u=v.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,i="",o=0;o<n.length;o++){var s=e.urlConfig[o]
"string"==typeof s&&(s={id:s,label:s})
var a=dt(s.id),u=dt(s.tooltip)
if(s.value&&"string"!=typeof s.value){if(i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'>"+s.label+": </label><select id='qunit-urlconfig-"+a+"' name='"+a+"' title='"+u+"'><option></option>",Array.isArray(s.value))for(var l=0;l<s.value.length;l++)i+="<option value='"+(a=dt(s.value[l]))+"'"+(e[s.id]===s.value[l]?(t=!0)&&" selected='selected'":"")+">"+a+"</option>"
else for(var c in s.value)r.call(s.value,c)&&(i+="<option value='"+dt(c)+"'"+(e[s.id]===c?(t=!0)&&" selected='selected'":"")+">"+dt(s.value[c])+"</option>")
e[s.id]&&!t&&(i+="<option value='"+(a=dt(e[s.id]))+"' selected='selected' disabled='disabled'>"+a+"</option>"),i+="</select>"}else i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'><input id='qunit-urlconfig-"+a+"' name='"+a+"' type='checkbox'"+(s.value?" value='"+dt(s.value)+"'":"")+(e[s.id]?" checked='checked'":"")+" title='"+u+"' />"+dt(s.label)+"</label>"}return i}(),w(u,"qunit-url-config"),m(u.getElementsByTagName("input"),"change",M),m(u.getElementsByTagName("select"),"change",M),u))
var f=v.createElement("span")
f.id="qunit-toolbar-filters",f.appendChild((n=v.createElement("form"),i=v.createElement("label"),s=v.createElement("input"),a=v.createElement("button"),w(n,"qunit-filter"),i.innerHTML="Filter: ",s.type="text",s.value=e.filter||"",s.name="filter",s.id="qunit-filter-input",a.innerHTML="Go",i.appendChild(s),n.appendChild(i),n.appendChild(v.createTextNode(" ")),n.appendChild(a),d(n,"submit",N),n)),f.appendChild(function(t){var n=null
if(o={options:t.modules.slice(),selectedMap:new k,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(n.keys()).sort().join(",")}},e.moduleId.length)for(var r=0;r<t.modules.length;r++){var i=t.modules[r];-1!==e.moduleId.indexOf(i.moduleId)&&o.selectedMap.set(i.moduleId,i.name)}n=new k(o.selectedMap)
var s=v.createElement("input")
s.id="qunit-modulefilter-search",s.autocomplete="off",d(s,"input",T),d(s,"input",C),d(s,"focus",C),d(s,"click",C)
var a=v.createElement("label")
a.htmlFor="qunit-modulefilter-search",a.textContent="Module:"
var u=v.createElement("span")
u.id="qunit-modulefilter-search-container",u.appendChild(s)
var c=v.createElement("button")
c.textContent="Apply",c.title="Re-run the selected test modules",d(c,"click",j)
var f=v.createElement("button")
f.textContent="Reset",f.type="reset",f.title="Restore the previous module selection"
var p=v.createElement("button")
p.textContent="Select none",p.type="button",p.title="Clear the current module selection",d(p,"click",(function(){o.selectedMap.clear(),M(),T()}))
var m=v.createElement("span")
m.id="qunit-modulefilter-actions",m.appendChild(c),m.appendChild(f),n.size&&m.appendChild(p)
var b=v.createElement("ul")
b.id="qunit-modulefilter-dropdown-list"
var y=v.createElement("div")
y.id="qunit-modulefilter-dropdown",y.style.display="none",y.appendChild(m),y.appendChild(b),d(y,"change",M),u.appendChild(y),M()
var w,E=v.createElement("form")
function C(){function e(t){var n=E.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&s.focus(),y.style.display="none",g(v,"click",e),g(v,"keydown",e),s.value="",T())}"none"===y.style.display&&(T(),y.style.display="block",d(v,"click",e),d(v,"keydown",e))}function T(){h.clearTimeout(w),w=h.setTimeout((function(){b.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,n){t+=q(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=q(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):ct.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(s.value)}))}function M(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),x(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
s.placeholder=n,s.title="Type to search through and reduce the list.",f.disabled=!o.isDirty(),p.style.display=o.selectedMap.size?"":"none"}return E.id="qunit-modulefilter",E.appendChild(a),E.appendChild(v.createTextNode(" ")),E.appendChild(u),d(E,"submit",N),d(E,"reset",(function(){o.selectedMap=new k(n),M(),T()})),E}(t))
var p=v.createElement("div")
p.className="clearfix",c.appendChild(f),c.appendChild(p)}}(t)}(t)})),rt.on("runEnd",(function(t){var n,r,i,o=C("qunit-banner"),s=C("qunit-tests"),a=C("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",t.runtime," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",O(ft.failedTests)].join("")
if(a&&a.disabled){l="Tests aborted after "+t.runtime+" milliseconds."
for(var c=0;c<s.children.length;c++)""!==(n=s.children[c]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=v.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!o||a&&!1!==a.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),a&&a.parentNode.removeChild(a),s&&(C("qunit-testresult-display").innerHTML=l),e.altertitle&&v.title&&(v.title=["failed"===t.status?"✖":"✔",v.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&h.scrollTo&&h.scrollTo(0,0)})),rt.testStart((function(e){var t,n
R(e.name,e.testId,e.module),(t=C("qunit-testresult-display"))&&(w(t,"running"),n=rt.config.reorder&&e.previousFailure,t.innerHTML=[L(ft),n?"Rerunning previously failed test: <br />":"Running: ",_(e.name,e.module),O(ft.failedTests)].join(""))})),rt.log((function(e){var t=C("qunit-test-output-"+e.testId)
if(t){var n,i,o,s=dt(e.message)||(e.result?"okay":"failed")
s="<span class='test-message'>"+s+"</span>",s+="<span class='runtime'>@ "+e.runtime+" ms</span>"
var a=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+rt.dump.parse(e.expected):rt.dump.parse(e.expected),i=rt.dump.parse(e.actual),s+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+dt(n)+"</pre></td></tr>",i!==n?(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+dt(i)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(a=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(a=P(o=rt.diff(n,i)).length!==P(n).length+P(i).length),a&&(s+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+rt.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+dt(S({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(s+="<tr class='test-source'><th>Source: </th><td><pre>"+dt(e.source)+"</pre></td></tr>"),s+="</table>"):!e.result&&e.source&&(s+="<table><tr class='test-source'><th>Source: </th><td><pre>"+dt(e.source)+"</pre></td></tr></table>")
var u=t.getElementsByTagName("ol")[0],l=v.createElement("li")
l.className=e.result?"pass":"fail",l.innerHTML=s,u.appendChild(l)}})),rt.testDone((function(r){var i=C("qunit-tests"),o=C("qunit-test-output-"+r.testId)
if(i&&o){var s
E(o,"running"),s=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var a=o.getElementsByTagName("ol")[0],u=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?w(a,"qunit-collapsed"):(ft.failedTests.push(r.testId),e.collapse&&(n?w(a,"qunit-collapsed"):n=!0))
var f=o.firstChild,h=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+u+"</b>, ":""
if(f.innerHTML+=" <b class='counts'>("+h+r.assertions.length+")</b>",ft.completed++,r.skipped){o.className="skipped"
var p=v.createElement("em")
p.className="qunit-skipped-label",p.innerHTML="skipped",o.insertBefore(p,f)}else{if(d(f,"click",(function(){x(a,"qunit-collapsed")})),o.className=c?"pass":"fail",r.todo){var g=v.createElement("em")
g.className="qunit-todo-label",g.innerHTML="todo",o.className+=" todo",o.insertBefore(g,f)}var m=v.createElement("span")
m.className="runtime",m.innerHTML=r.runtime+" ms",o.insertBefore(m,a)}if(r.source){var b=v.createElement("p")
b.innerHTML="<strong>Source: </strong>"+dt(r.source),w(b,"qunit-source"),c&&w(b,"qunit-collapsed"),d(f,"click",(function(){x(b,"qunit-collapsed")})),o.appendChild(b)}e.hidepassed&&("passed"===s||r.skipped)&&(t.push(o),i.removeChild(o))}})),rt.on("error",(function(e){var t=R("global failure")
if(t){var n=dt(A(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+dt(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=v.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var s,a=(s=h.phantom)&&s.version&&s.version.major>0
a&&p.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),a||"complete"!==v.readyState?d(h,"load",rt.load):rt.load()
var u=h.onerror
h.onerror=function(t,n,r,i,o){var s=!1
if(u){for(var a=arguments.length,l=new Array(a>5?a-5:0),c=5;c<a;c++)l[c-5]=arguments[c]
s=u.call.apply(u,[this,t,n,r,i,o].concat(l))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var f=o||new Error(t)
!f.stack&&n&&r&&(f.stack="".concat(n,":").concat(r)),rt.onUncaughtException(f)}return s},h.addEventListener("unhandledrejection",(function(e){rt.onUncaughtException(e.reason)}))}function f(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,n){e.addEventListener(t,n,!1)}function g(e,t,n){e.removeEventListener(t,n,!1)}function m(e,t,n){for(var r=e.length;r--;)d(e[r],t,n)}function y(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function w(e,t){y(e,t)||(e.className+=(e.className?" ":"")+t)}function x(e,t,n){n||void 0===n&&!y(e,t)?w(e,t):E(e,t)}function E(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=f(n)}function C(e){return v.getElementById&&v.getElementById(e)}function T(){var e=C("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),rt.config.queue.length=0,!1}function N(e){var t=C("qunit-filter-input")
return t.value=f(t.value),j(),e&&e.preventDefault&&e.preventDefault(),!1}function M(){var n,r=this,i={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,i[r.name]=n
var o=S(i)
if("hidepassed"===r.name&&"replaceState"in h.history){rt.urlParams[r.name]=n,e[r.name]=n||!1
var s=C("qunit-tests")
if(s){var a=s.children.length,u=s.children
if(r.checked){for(var l=0;l<a;l++){var f=u[l],d=f?f.className:"",p=d.indexOf("pass")>-1,g=d.indexOf("skipped")>-1;(p||g)&&t.push(f)}var m,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=c(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(v.s();!(m=v.n()).done;){var b=m.value
s.removeChild(b)}}catch(e){v.e(e)}finally{v.f()}}else for(var y;null!=(y=t.pop());)s.appendChild(y)}h.history.replaceState(null,"",o)}else h.location=o}function S(e){var t="?",n=h.location
for(var i in e=I(I({},rt.urlParams),e))if(r.call(e,i)&&void 0!==e[i])for(var o=[].concat(e[i]),s=0;s<o.length;s++)t+=encodeURIComponent(i),!0!==o[s]&&(t+="="+encodeURIComponent(o[s])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function j(){var e=C("qunit-filter-input").value
h.location=S({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function q(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+dt(e)+'"'+(n?' checked="checked"':"")+" />"+dt(t)+"</label></li>"}function R(e,t,n){var r=C("qunit-tests")
if(r){var i=v.createElement("strong")
i.innerHTML=_(e,n)
var o=v.createElement("li")
if(o.appendChild(i),void 0!==t){var s=v.createElement("a")
s.innerHTML="Rerun",s.href=S({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(s)}var a=v.createElement("ol")
return a.className="qunit-assert-list",o.appendChild(a),r.appendChild(o),o}}function O(e){return 0===e.length?"":["<br /><a href='"+dt(S({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function _(e,t){var n=""
return t&&(n="<span class='module-name'>"+dt(t)+"</span>: "),n+"<span class='test-name'>"+dt(e)+"</span>"}function L(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),rt.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r=Date.now()+1e3
if(null===e||null===t)throw new Error("Cannot diff null input.")
if(e===t)return e?[[0,e]]:[]
void 0===n&&(n=!0)
var i=this.diffCommonPrefix(e,t),o=e.substring(0,i)
e=e.substring(i),t=t.substring(i),i=this.diffCommonSuffix(e,t)
var s=e.substring(e.length-i)
e=e.substring(0,e.length-i),t=t.substring(0,t.length-i)
var a=this.diffCompute(e,t,n,r)
return o&&a.unshift([0,o]),s&&a.push([0,s]),this.diffCleanupMerge(a),a},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var i=e[r][0],o=e[r][1]
switch(i){case 1:n[r]="<ins>"+dt(o)+"</ins>"
break
case t:n[r]="<del>"+dt(o)+"</del>"
break
case 0:n[r]="<span>"+dt(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
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
a+=i.length}u=0,l=0,f="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,f,d,h,p,g,m,v,b,y,k,w,x,E,C,T,N
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1
for(l[a+1]=0,c[a+1]=0,h=(d=i-o)%2!=0,p=0,g=0,m=0,v=0,C=0;C<s&&!(Date.now()>r);C++){for(T=-C+p;T<=C-g;T+=2){for(y=a+T,x=(k=T===-C||T!==C&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-T;k<i&&x<o&&e.charAt(k)===n.charAt(x);)k++,x++
if(l[y]=k,k>i)g+=2
else if(x>o)p+=2
else if(h&&(b=a+d-T)>=0&&b<u&&-1!==c[b]&&k>=(w=i-c[b]))return this.diffBisectSplit(e,n,k,x,r)}for(N=-C+m;N<=C-v;N+=2){for(b=a+N,E=(w=N===-C||N!==C&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-N;w<i&&E<o&&e.charAt(i-w-1)===n.charAt(o-E-1);)w++,E++
if(c[b]=w,w>i)v+=2
else if(E>o)m+=2
else if(!h&&(y=a+d-N)>=0&&y<u&&-1!==l[y]&&(x=a+(k=l[y])-y,k>=(w=i-w)))return this.diffBisectSplit(e,n,k,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
return o=e.substring(0,n),a=t.substring(0,r),s=e.substring(n),u=t.substring(r),l=this.DiffMain(o,a,!1,i),c=this.DiffMain(s,u,!1,i),l.concat(c)},e.prototype.diffCleanupSemantic=function(e){for(var n,r,i,o,s=!1,a=[],u=0,l=null,c=0,f=0,d=0,h=0,p=0;c<e.length;)0===e[c][0]?(a[u++]=c,f=h,d=p,h=0,p=0,l=e[c][1]):(1===e[c][0]?h+=e[c][1].length:p+=e[c][1].length,l&&l.length<=Math.max(f,d)&&l.length<=Math.max(h,p)&&(e.splice(a[u-1],0,[t,l]),e[a[u-1]+1][0]=1,u--,c=--u>0?a[u-1]:-1,f=0,d=0,h=0,p=0,l=null,s=!0)),c++
for(s&&this.diffCleanupMerge(e),c=1;c<e.length;)e[c-1][0]===t&&1===e[c][0]&&(n=e[c-1][1],r=e[c][1],(i=this.diffCommonOverlap(n,r))>=(o=this.diffCommonOverlap(r,n))?(i>=n.length/2||i>=r.length/2)&&(e.splice(c,0,[0,r.substring(0,i)]),e[c-1][1]=n.substring(0,n.length-i),e[c+1][1]=r.substring(i),c++):(o>=n.length/2||o>=r.length/2)&&(e.splice(c,0,[0,n.substring(0,o)]),e[c-1][0]=1,e[c-1][1]=r.substring(0,r.length-o),e[c+1][0]=t,e[c+1][1]=n.substring(o),c++),c++),c++},e.prototype.diffCommonOverlap=function(e,t){var n=e.length,r=t.length
if(0===n||0===r)return 0
n>r?e=e.substring(n-r):n<r&&(t=t.substring(0,n))
var i=Math.min(n,r)
if(e===t)return i
for(var o=0,s=1;;){var a=e.substring(i-s),u=t.indexOf(a)
if(-1===u)return o
s+=u,0!==u&&e.substring(i-s)!==t.substring(0,s)||(o=s,s++)}},e.prototype.diffLinesToChars=function(e,t){var r=[],i={}
function o(e){for(var t="",o=0,s=-1,a=r.length;s<e.length-1;){-1===(s=e.indexOf("\n",o))&&(s=e.length-1)
var u=e.substring(o,s+1)
o=s+1,n.call(i,u)?t+=String.fromCharCode(i[u]):(t+=String.fromCharCode(a),i[u]=a,r[a++]=u)}return t}return r[0]="",{chars1:o(e),chars2:o(t),lineArray:r}},e.prototype.diffCharsToLines=function(e,t){for(var n=0;n<e.length;n++){for(var r=e[n][1],i=[],o=0;o<r.length;o++)i[o]=t[r.charCodeAt(o)]
e[n][1]=i.join("")}},e.prototype.diffCleanupMerge=function(e){e.push([0,""])
for(var n=0,r=0,i=0,o="",s="";n<e.length;)switch(e[n][0]){case 1:i++,s+=e[n][1],n++
break
case t:r++,o+=e[n][1],n++
break
case 0:if(r+i>1){if(0!==r&&0!==i){var a=this.diffCommonPrefix(s,o)
0!==a&&(n-r-i>0&&0===e[n-r-i-1][0]?e[n-r-i-1][1]+=s.substring(0,a):(e.splice(0,0,[0,s.substring(0,a)]),n++),s=s.substring(a),o=o.substring(a)),0!==(a=this.diffCommonSuffix(s,o))&&(e[n][1]=s.substring(s.length-a)+e[n][1],s=s.substring(0,s.length-a),o=o.substring(0,o.length-a))}0===r?e.splice(n-i,r+i,[1,s]):0===i?e.splice(n-r,r+i,[t,o]):e.splice(n-r-i,r+i,[t,o],[1,s]),n=n-r-i+(r?1:0)+(i?1:0)+1}else 0!==n&&0===e[n-1][0]?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++
i=0,r=0,o="",s=""}""===e[e.length-1][1]&&e.pop()
var u=!1
for(n=1;n<e.length-1;){if(0===e[n-1][0]&&0===e[n+1][0]){var l=e[n][1]
l.substring(l.length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),u=!0):l.substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),u=!0)}n++}u&&this.diffCleanupMerge(e)},function(t,n){var r,i
return i=(r=new e).DiffMain(t,n),r.diffCleanupEfficiency(i),r.diffPrettyHtml(i)}}()}()}}])
