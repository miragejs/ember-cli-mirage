/*! For license information please see chunk.528.4f6d28feed395f9aece6.js.LICENSE.txt */
(globalThis.webpackChunk_ember_auto_import_=globalThis.webpackChunk_ember_auto_import_||[]).push([[528],{528:(e,t,n)=>{var r
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
this.has=function(e){return r.call(n,e)},this.get=function(e){return n[e]},this.set=function(e,t){return r.call(n,e)||this.size++,n[e]=t,this},this.delete=function(e){r.call(n,e)&&(delete n[e],this.size--)},this.forEach=function(e){for(var t in n)e(n[t],t)},this.keys=function(){return Object.keys(n)},this.clear=function(){n=Object.create(null),this.size=0},this.size=0,e&&e.forEach((function(e,n){t.set(n,e)}))},w={warn:p?Function.prototype.bind.call(p.warn||p.log,p):function(){}},x=Object.prototype.toString,E=Object.prototype.hasOwnProperty,T=h&&void 0!==h.performance&&"function"==typeof h.performance.mark&&"function"==typeof h.performance.measure?h.performance:void 0,C={now:T?T.now.bind(T):Date.now,measure:T?function(e,t,n){try{T.measure(e,t,n)}catch(e){w.warn("performance.measure could not be executed because of ",e.message)}}:function(){},mark:T?T.mark.bind(T):function(){}}
function M(e,t){for(var n=e.slice(),r=0;r<n.length;r++)for(var i=0;i<t.length;i++)if(n[r]===t[i]){n.splice(r,1),r--
break}return n}function S(e,t){return-1!==t.indexOf(e)}function N(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=t&&R("array",e)?[]:{}
for(var r in e)if(E.call(e,r)){var i=e[r]
n[r]=i===Object(i)?N(i,t):i}return n}function j(e,t){if(e!==Object(e))return e
var n={}
for(var r in t)E.call(t,r)&&E.call(e,r)&&(n[r]=j(e[r],t[r]))
return n}function q(e,t,n){for(var r in t)E.call(t,r)&&(void 0===t[r]?delete e[r]:n&&void 0!==e[r]||(e[r]=t[r]))
return e}function I(e){if(void 0===e)return"undefined"
if(null===e)return"null"
var t=x.call(e).match(/^\[object\s(.*)\]$/),n=t&&t[1]
switch(n){case"Number":return isNaN(e)?"nan":"number"
case"String":case"Boolean":case"Array":case"Set":case"Map":case"Date":case"RegExp":case"Function":case"Symbol":return n.toLowerCase()
default:return i(e)}}function R(e,t){return I(t)===e}function _(e,t){for(var n=e+""+t,r=0,i=0;i<n.length;i++)r=(r<<5)-r+n.charCodeAt(i),r|=0
var o=(4294967296+r).toString(16)
return o.length<8&&(o="0000000"+o),o.slice(-8)}function O(e){var t=String(e)
return"[object"===t.slice(0,7)?(e.name||"Error")+(e.message?": ".concat(e.message):""):t}var A=function(){var e=[],t=Object.getPrototypeOf||function(e){return e.__proto__}
function n(e,t){return"object"===i(e)&&(e=e.valueOf()),"object"===i(t)&&(t=t.valueOf()),e===t}function r(e){return"flags"in e?e.flags:e.toString().match(/[gimuy]*$/)[0]}function o(t,n){return t===n||(-1===["object","array","map","set"].indexOf(I(t))?a(t,n):(e.every((function(e){return e.a!==t||e.b!==n}))&&e.push({a:t,b:n}),!0))}var s={string:n,boolean:n,number:n,null:n,undefined:n,symbol:n,date:n,nan:function(){return!0},regexp:function(e,t){return e.source===t.source&&r(e)===r(t)},function:function(){return!1},array:function(e,t){var n=e.length
if(n!==t.length)return!1
for(var r=0;r<n;r++)if(!o(e[r],t[r]))return!1
return!0},set:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t){if(r){var i=!1
n.forEach((function(n){if(!i){var r=e
u(n,t)&&(i=!0),e=r}})),i||(r=!1)}})),r},map:function(t,n){if(t.size!==n.size)return!1
var r=!0
return t.forEach((function(t,i){if(r){var o=!1
n.forEach((function(n,r){if(!o){var s=e
u([n,r],[t,i])&&(o=!0),e=s}})),o||(r=!1)}})),r},object:function(e,n){if(!1===function(e,n){var r=t(e),i=t(n)
return e.constructor===n.constructor||(r&&null===r.constructor&&(r=null),i&&null===i.constructor&&(i=null),null===r&&i===Object.prototype||null===i&&r===Object.prototype)}(e,n))return!1
var r=[],i=[]
for(var s in e)if(r.push(s),(e.constructor===Object||void 0===e.constructor||"function"!=typeof e[s]||"function"!=typeof n[s]||e[s].toString()!==n[s].toString())&&!o(e[s],n[s]))return!1
for(var u in n)i.push(u)
return a(r.sort(),i.sort())}}
function a(e,t){var n=I(e)
return I(t)===n&&s[n](e,t)}function u(t,n){if(arguments.length<2)return!0
e=[{a:t,b:n}]
for(var r=0;r<e.length;r++){var i=e[r]
if(i.a!==i.b&&!a(i.a,i.b))return!1}return 2===arguments.length||u.apply(this,[].slice.call(arguments,1))}return function(){var t=u.apply(void 0,arguments)
return e.length=0,t}}(),L={queue:[],stats:{all:0,bad:0,testCount:0},blocking:!0,failOnZeroTests:!0,reorder:!0,altertitle:!0,collapse:!0,scrolltop:!0,maxDepth:5,requireExpects:!1,urlConfig:[],modules:[],currentModule:{name:"",tests:[],childModules:[],testsRun:0,testsIgnored:0,hooks:{before:[],beforeEach:[],afterEach:[],after:[]}},globalHooks:{},callbacks:{},storage:y},P=d&&d.QUnit&&!d.QUnit.version&&d.QUnit.config
P&&q(L,P),L.modules.push(L.currentModule)
var U=function(){function e(e){return'"'+e.toString().replace(/\\/g,"\\\\").replace(/"/g,'\\"')+'"'}function t(e){return e+""}function n(e,t,n){var r=s.separator(),i=s.indent(1)
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
return t=null===e?"null":void 0===e?"undefined":R("regexp",e)?"regexp":R("date",e)?"date":R("function",e)?"function":void 0!==e.setInterval&&void 0!==e.document&&void 0===e.nodeType?"window":9===e.nodeType?"document":e.nodeType?"node":function(e){return"[object Array]"===x.call(e)||"number"==typeof e.length&&void 0!==e.item&&(e.length?e.item(0)===e[0]:null===e.item(0)&&void 0===e[0])}(e)?"array":e.constructor===Error.prototype.constructor?"error":i(e),t},separator:function(){return this.multiline?this.HTML?"<br />":"\n":this.HTML?"&#160;":" "},indent:function(e){if(!this.multiline)return""
var t=this.indentChar
return this.HTML&&(t=t.replace(/\t/g,"   ").replace(/ /g,"&#160;")),new Array(this.depth+(e||0)).join(t)},up:function(e){this.depth+=e||1},down:function(e){this.depth-=e||1},setParser:function(e,t){this.parsers[e]=t},quote:e,literal:t,join:n,depth:1,maxDepth:L.maxDepth,parsers:{window:"[Window]",document:"[Document]",error:function(e){return'Error("'+e.message+'")'},unknown:"[Unknown]",null:"null",undefined:"undefined",function:function(e){var t="function",r="name"in e?e.name:(o.exec(e)||[])[1]
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
if(o)for(var a=0,u=o.length;a<u;a++){var l=o[a].nodeValue
l&&"inherit"!==l&&(i+=" "+o[a].nodeName+"="+s.parse(l,"attribute"))}return i+=n,3!==e.nodeType&&4!==e.nodeType||(i+=e.nodeValue),i+t+"/"+r+n},functionArgs:function(e){var t=e.length
if(!t)return""
for(var n=new Array(t);t--;)n[t]=String.fromCharCode(97+t)
return" "+n.join(", ")+" "},key:e,functionCode:"[code]",attribute:e,string:e,date:e,regexp:t,number:t,boolean:t,symbol:function(e){return e.toString()}},HTML:!1,indentChar:"  ",multiline:!0}
return s}(),H=function(){function e(t,n){o(this,e),this.name=t,this.fullName=n?n.fullName.concat(t):[],this.globalFailureCount=0,this.tests=[],this.childSuites=[],n&&n.pushChildSuite(this)}return a(e,[{key:"start",value:function(e){if(e){this._startTime=C.now()
var t=this.fullName.length
C.mark("qunit_suite_".concat(t,"_start"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.start()})),childSuites:this.childSuites.map((function(e){return e.start()})),testCounts:{total:this.getTestCounts().total}}}},{key:"end",value:function(e){if(e){this._endTime=C.now()
var t=this.fullName.length,n=this.fullName.join(" – ")
C.mark("qunit_suite_".concat(t,"_end")),C.measure(0===t?"QUnit Test Run":"QUnit Test Suite: ".concat(n),"qunit_suite_".concat(t,"_start"),"qunit_suite_".concat(t,"_end"))}return{name:this.name,fullName:this.fullName.slice(),tests:this.tests.map((function(e){return e.end()})),childSuites:this.childSuites.map((function(e){return e.end()})),testCounts:this.getTestCounts(),runtime:this.getRuntime(),status:this.getStatus()}}},{key:"pushChildSuite",value:function(e){this.childSuites.push(e)}},{key:"pushTest",value:function(e){this.tests.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getTestCounts",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{passed:0,failed:0,skipped:0,todo:0,total:0}
return e.failed+=this.globalFailureCount,e.total+=this.globalFailureCount,e=this.tests.reduce((function(e,t){return t.valid&&(e[t.getStatus()]++,e.total++),e}),e),this.childSuites.reduce((function(e,t){return t.getTestCounts(e)}),e)}},{key:"getStatus",value:function(){var e=this.getTestCounts(),t=e.total,n=e.failed,r=e.skipped,i=e.todo
return n?"failed":r===t?"skipped":i===t?"todo":"passed"}}]),e}(),D=[],F=new H
function B(e,t,n){var r=D.length?D.slice(-1)[0]:null,i=null!==r?[r.name,e].join(" > "):e,o=r?r.suiteReport:F,s=null!==r&&r.skip||n.skip,a=null!==r&&r.todo||n.todo,u={}
r&&q(u,r.testEnvironment),q(u,t)
var l={name:i,parentModule:r,hooks:{before:[],beforeEach:[],afterEach:[],after:[]},testEnvironment:u,tests:[],moduleId:_(i),testsRun:0,testsIgnored:0,childModules:[],suiteReport:new H(e,o),stats:null,skip:s,todo:!s&&a,ignored:n.ignored||!1}
return r&&r.childModules.push(l),L.modules.push(l),l}function Q(e,t,n){var r=t[n]
"function"==typeof r&&e[n].push(r),delete t[n]}function z(e,t){return function(n){L.currentModule!==e&&w.warn("The `"+t+"` hook was called inside the wrong module (`"+L.currentModule.name+"`). Instead, use hooks provided by the callback to the containing module (`"+e.name+"`). This will become an error in QUnit 3.0."),e.hooks[t].push(n)}}function $(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{}
"function"===I(t)&&(n=t,t=void 0)
var i=B(e,t,r),o=i.testEnvironment,s=i.hooks
Q(s,o,"before"),Q(s,o,"beforeEach"),Q(s,o,"afterEach"),Q(s,o,"after")
var a={before:z(i,"before"),beforeEach:z(i,"beforeEach"),afterEach:z(i,"afterEach"),after:z(i,"after")},u=L.currentModule
if(L.currentModule=i,"function"===I(n)){D.push(i)
try{var l=n.call(i.testEnvironment,a)
null!=l&&"function"===I(l.then)&&w.warn("Returning a promise from a module callback is not supported. Instead, use hooks for async behavior. This will become an error in QUnit 3.0.")}finally{D.pop(),L.currentModule=i.parentModule||u}}}var G=!1
function Y(e,t,n){var r,i=G&&(r=L.modules.filter((function(e){return!e.ignored})).map((function(e){return e.moduleId})),!D.some((function(e){return r.includes(e.moduleId)})))
$(e,t,n,{ignored:i})}Y.only=function(){G||(L.modules.length=0,L.queue.length=0,L.currentModule.ignored=!0),G=!0,$.apply(void 0,arguments)},Y.skip=function(e,t,n){G||$(e,t,n,{skip:!0})},Y.todo=function(e,t,n){G||$(e,t,n,{todo:!0})}
var W=(V(0)||"").replace(/(:\d+)+\)?/,"").replace(/.+\//,"")
function J(e,t){if(t=void 0===t?4:t,e&&e.stack){var n=e.stack.split("\n")
if(/^error$/i.test(n[0])&&n.shift(),W){for(var r=[],i=t;i<n.length&&-1===n[i].indexOf(W);i++)r.push(n[i])
if(r.length)return r.join("\n")}return n[t]}}function V(e){var t=new Error
if(!t.stack)try{throw t}catch(e){t=e}return J(t,e)}var Z=function(){function e(t){o(this,e),this.test=t}return a(e,[{key:"timeout",value:function(e){if("number"!=typeof e)throw new Error("You must pass a number as the duration to assert.timeout")
this.test.timeout=e,L.timeout&&(m(L.timeout),L.timeout=null,L.timeoutHandler&&this.test.timeout>0&&this.test.internalResetTimeout(this.test.timeout))}},{key:"step",value:function(e){var t=e,n=!!e
this.test.steps.push(e),"undefined"===I(e)||""===e?t="You must provide a message to assert.step":"string"!==I(e)&&(t="You must provide a string value to assert.step",n=!1),this.pushResult({result:n,message:t})}},{key:"verifySteps",value:function(e,t){var n=this.test.steps.slice()
this.deepEqual(n,e,t),this.test.steps.length=0}},{key:"expect",value:function(e){if(1!==arguments.length)return this.test.expected
this.test.expected=e}},{key:"async",value:function(e){var t=void 0===e?1:e
return this.test.internalStop(t)}},{key:"push",value:function(t,n,r,i,o){return w.warn("assert.push is deprecated and will be removed in QUnit 3.0. Please use assert.pushResult instead (https://api.qunitjs.com/assert/pushResult)."),(this instanceof e?this:L.current.assert).pushResult({result:t,actual:n,expected:r,message:i,negative:o})}},{key:"pushResult",value:function(t){var n=this,r=n instanceof e&&n.test||L.current
if(!r)throw new Error("assertion outside test context, in "+V(2))
return n instanceof e||(n=r.assert),n.test.pushResult(t)}},{key:"ok",value:function(e,t){t||(t=e?"okay":"failed, expected argument to be truthy, was: ".concat(U.parse(e))),this.pushResult({result:!!e,actual:e,expected:!0,message:t})}},{key:"notOk",value:function(e,t){t||(t=e?"failed, expected argument to be falsy, was: ".concat(U.parse(e)):"okay"),this.pushResult({result:!e,actual:e,expected:!1,message:t})}},{key:"true",value:function(e,t){this.pushResult({result:!0===e,actual:e,expected:!0,message:t})}},{key:"false",value:function(e,t){this.pushResult({result:!1===e,actual:e,expected:!1,message:t})}},{key:"equal",value:function(e,t,n){var r=t==e
this.pushResult({result:r,actual:e,expected:t,message:n})}},{key:"notEqual",value:function(e,t,n){var r=t!=e
this.pushResult({result:r,actual:e,expected:t,message:n,negative:!0})}},{key:"propEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:A(e,t),actual:e,expected:t,message:n})}},{key:"notPropEqual",value:function(e,t,n){e=N(e),t=N(t),this.pushResult({result:!A(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"propContains",value:function(e,t,n){e=j(e,t),t=N(t,!1),this.pushResult({result:A(e,t),actual:e,expected:t,message:n})}},{key:"notPropContains",value:function(e,t,n){e=j(e,t),t=N(t),this.pushResult({result:!A(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"deepEqual",value:function(e,t,n){this.pushResult({result:A(e,t),actual:e,expected:t,message:n})}},{key:"notDeepEqual",value:function(e,t,n){this.pushResult({result:!A(e,t),actual:e,expected:t,message:n,negative:!0})}},{key:"strictEqual",value:function(e,t,n){this.pushResult({result:t===e,actual:e,expected:t,message:n})}},{key:"notStrictEqual",value:function(e,t,n){this.pushResult({result:t!==e,actual:e,expected:t,message:n,negative:!0})}},{key:"throws",value:function(t,n,r){var i=u(K(n,r,"throws"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||L.current
if("function"===I(t)){var s,a=!1
o.ignoreGlobalErrors=!0
try{t.call(o.testEnvironment)}catch(e){s=e}if(o.ignoreGlobalErrors=!1,s){var l=u(X(s,n,r),3)
a=l[0],n=l[1],r=l[2]}o.assert.pushResult({result:a,actual:s&&O(s),expected:n,message:r})}else{var c='The value provided to `assert.throws` in "'+o.testName+'" was not a function.'
o.assert.pushResult({result:!1,actual:t,message:c})}}},{key:"rejects",value:function(t,n,r){var i=u(K(n,r,"rejects"),2)
n=i[0],r=i[1]
var o=this instanceof e&&this.test||L.current,s=t&&t.then
if("function"===I(s)){var a=this.async()
return s.call(t,(function(){var e='The promise returned by the `assert.rejects` callback in "'+o.testName+'" did not reject.'
o.assert.pushResult({result:!1,message:e,actual:t}),a()}),(function(e){var t,i=u(X(e,n,r),3)
t=i[0],n=i[1],r=i[2],o.assert.pushResult({result:t,actual:e&&O(e),expected:n,message:r}),a()}))}var l='The value provided to `assert.rejects` in "'+o.testName+'" was not a promise.'
o.assert.pushResult({result:!1,message:l,actual:t})}}]),e}()
function K(e,t,n){var r=I(e)
if("string"===r){if(void 0===t)return t=e,[e=void 0,t]
throw new Error("assert."+n+" does not accept a string value for the expected argument.\nUse a non-string object value (e.g. RegExp or validator function) instead if necessary.")}if(e&&"regexp"!==r&&"function"!==r&&"object"!==r)throw new Error("Invalid expected value type ("+r+") provided to assert."+n+".")
return[e,t]}function X(e,t,n){var r=!1,i=I(t)
if(t){if("regexp"===i)r=t.test(O(e)),t=String(t)
else if("function"===i&&void 0!==t.prototype&&e instanceof t)r=!0
else if("object"===i)r=e instanceof t.constructor&&e.name===t.name&&e.message===t.message,t=O(t)
else if("function"===i)try{r=!0===t.call({},e),t=null}catch(e){t=O(e)}}else r=!0
return[r,t,n]}Z.prototype.raises=Z.prototype.throws
var ee=Object.create(null),te=["error","runStart","suiteStart","testStart","assertion","testEnd","suiteEnd","runEnd"]
function ne(e,t){if("string"!==I(e))throw new TypeError("eventName must be a string when emitting an event")
for(var n=ee[e],r=n?l(n):[],i=0;i<r.length;i++)r[i](t)}var re="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ie={exports:{}}
!function(){var e=function(){if("undefined"!=typeof globalThis)return globalThis
if("undefined"!=typeof self)return self
if("undefined"!=typeof window)return window
if(void 0!==re)return re
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
for(var i=0,s=e.length;i<s;i++)o.resolve(e[i]).then(t,r)}))},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){t(e,0)},o._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},ie.exports=o}else ie.exports=e.Promise
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
var oe=ie.exports
function se(e,t){var n=L.callbacks[e]
if("log"!==e)return n.reduce((function(e,n){return e.then((function(){return oe.resolve(n(t))}))}),oe.resolve([]))
n.map((function(e){return e(t)}))}var ae,ue=0,le=[]
function ce(){var e,t
e=C.now(),L.depth=(L.depth||0)+1,fe(e),L.depth--,le.length||L.blocking||L.current||(L.blocking||L.queue.length||0!==L.depth?(t=L.queue.shift()(),le.push.apply(le,l(t)),ue>0&&ue--,ce()):function(){var e
if(0===L.stats.testCount&&!0===L.failOnZeroTests)return e=L.filter&&L.filter.length?new Error('No tests matched the filter "'.concat(L.filter,'".')):L.module&&L.module.length?new Error('No tests matched the module "'.concat(L.module,'".')):L.moduleId&&L.moduleId.length?new Error('No tests matched the moduleId "'.concat(L.moduleId,'".')):L.testId&&L.testId.length?new Error('No tests matched the testId "'.concat(L.testId,'".')):new Error("No tests were run."),ke("global failure",q((function(t){t.pushResult({result:!1,message:e.message,source:e.stack})}),{validTest:!0})),void ce()
var t=L.storage,n=C.now()-L.started,r=L.stats.all-L.stats.bad
de.finished=!0,ne("runEnd",F.end(!0)),se("done",{passed:r,failed:L.stats.bad,total:L.stats.all,runtime:n}).then((function(){if(t&&0===L.stats.bad)for(var e=t.length-1;e>=0;e--){var n=t.key(e)
0===n.indexOf("qunit-test-")&&t.removeItem(n)}}))}())}function fe(e){if(le.length&&!L.blocking){var t=C.now()-e
if(!g||L.updateRate<=0||t<L.updateRate){var n=le.shift()
oe.resolve(n()).then((function(){le.length?fe(e):ce()}))}else g(ce)}}var de={finished:!1,add:function(e,t,n){if(t)L.queue.splice(ue++,0,e)
else if(n){ae||(ae=function(e){var t=parseInt(_(e),16)||-1
return function(){return t^=t<<13,t^=t>>>17,(t^=t<<5)<0&&(t+=4294967296),t/4294967296}}(n))
var r=Math.floor(ae()*(L.queue.length-ue+1))
L.queue.splice(ue+r,0,e)}else L.queue.push(e)},advance:ce,taskCount:function(){return le.length}},he=function(){function e(t,n,r){o(this,e),this.name=t,this.suiteName=n.name,this.fullName=n.fullName.concat(t),this.runtime=0,this.assertions=[],this.skipped=!!r.skip,this.todo=!!r.todo,this.valid=r.valid,this._startTime=0,this._endTime=0,n.pushTest(this)}return a(e,[{key:"start",value:function(e){return e&&(this._startTime=C.now(),C.mark("qunit_test_start")),{name:this.name,suiteName:this.suiteName,fullName:this.fullName.slice()}}},{key:"end",value:function(e){if(e&&(this._endTime=C.now(),C)){C.mark("qunit_test_end")
var t=this.fullName.join(" – ")
C.measure("QUnit Test: ".concat(t),"qunit_test_start","qunit_test_end")}return q(this.start(),{runtime:this.getRuntime(),status:this.getStatus(),errors:this.getFailedAssertions(),assertions:this.getAssertions()})}},{key:"pushAssertion",value:function(e){this.assertions.push(e)}},{key:"getRuntime",value:function(){return this._endTime-this._startTime}},{key:"getStatus",value:function(){return this.skipped?"skipped":(this.getFailedAssertions().length>0?this.todo:!this.todo)?this.todo?"todo":"passed":"failed"}},{key:"getFailedAssertions",value:function(){return this.assertions.filter((function(e){return!e.passed}))}},{key:"getAssertions",value:function(){return this.assertions.slice()}},{key:"slimAssertions",value:function(){this.assertions=this.assertions.map((function(e){return delete e.actual,delete e.expected,e}))}}]),e}()
function pe(e){if(this.expected=null,this.assertions=[],this.module=L.currentModule,this.steps=[],this.timeout=void 0,this.data=void 0,this.withData=!1,this.pauses=new k,this.nextPauseId=1,this.stackOffset=3,q(this,e),this.module.skip?(this.skip=!0,this.todo=!1):this.module.todo&&!this.skip&&(this.todo=!0),de.finished)w.warn("Unexpected test after runEnd. This is unstable and will fail in QUnit 3.0.")
else{if(!this.skip&&"function"!=typeof this.callback){var t=this.todo?"QUnit.todo":"QUnit.test"
throw new TypeError("You must provide a callback to ".concat(t,'("').concat(this.testName,'")'))}++pe.count,this.errorForStack=new Error,this.callback&&this.callback.validTest&&(this.errorForStack.stack=void 0),this.testReport=new he(this.testName,this.module.suiteReport,{todo:this.todo,skip:this.skip,valid:this.valid()})
for(var n=0,r=this.module.tests;n<r.length;n++)this.module.tests[n].name===this.testName&&(this.testName+=" ")
this.testId=_(this.module.name,this.testName),this.module.tests.push({name:this.testName,testId:this.testId,skip:!!this.skip}),this.skip?(this.callback=function(){},this.async=!1,this.expected=0):this.assert=new Z(this)}}function ge(){if(!L.current)throw new Error("pushFailure() assertion outside test context, in "+V(2))
var e=L.current
return e.pushFailure.apply(e,arguments)}function me(){if(L.pollution=[],L.noglobals)for(var e in d)if(E.call(d,e)){if(/^qunit-test-output/.test(e))continue
L.pollution.push(e)}}pe.count=0,pe.prototype={get stack(){return J(this.errorForStack,this.stackOffset)},before:function(){var e=this,t=this.module,n=function(e){for(var t=e,n=[];t&&0===t.testsRun;)n.push(t),t=t.parentModule
return n.reverse()}(t)
return n.reduce((function(e,t){return e.then((function(){return t.stats={all:0,bad:0,started:C.now()},ne("suiteStart",t.suiteReport.start(!0)),se("moduleStart",{name:t.name,tests:t.tests})}))}),oe.resolve([])).then((function(){return L.current=e,e.testEnvironment=q({},t.testEnvironment),e.started=C.now(),ne("testStart",e.testReport.start(!0)),se("testStart",{name:e.testName,module:t.name,testId:e.testId,previousFailure:e.previousFailure}).then((function(){L.pollution||me()}))}))},run:function(){if(L.current=this,L.notrycatch)e(this)
else try{e(this)}catch(e){this.pushFailure("Died on test #"+(this.assertions.length+1)+": "+(e.message||e)+"\n"+this.stack,J(e,0)),me(),L.blocking&&Ee(this)}function e(e){var t
t=e.withData?e.callback.call(e.testEnvironment,e.assert,e.data):e.callback.call(e.testEnvironment,e.assert),e.resolvePromise(t),0===e.timeout&&e.pauses.size>0&&ge("Test did not finish synchronously even though assert.timeout( 0 ) was used.",V(2))}},after:function(){!function(){var e=L.pollution
me()
var t=M(L.pollution,e)
t.length>0&&ge("Introduced global variable(s): "+t.join(", "))
var n=M(e,L.pollution)
n.length>0&&ge("Deleted global variable(s): "+n.join(", "))}()},queueGlobalHook:function(e,t){var n=this
return function(){var r
if(L.current=n,L.notrycatch)r=e.call(n.testEnvironment,n.assert)
else try{r=e.call(n.testEnvironment,n.assert)}catch(e){return void n.pushFailure("Global "+t+" failed on "+n.testName+": "+O(e),J(e,0))}n.resolvePromise(r,t)}},queueHook:function(e,t,n){var r=this,i=function(){var n=e.call(r.testEnvironment,r.assert)
r.resolvePromise(n,t)}
return function(){if("before"===t){if(0!==n.testsRun)return
r.preserveEnvironment=!0}if("after"!==t||function(e){return e.testsRun===Ce(e).filter((function(e){return!e.skip})).length-1}(n)||!(L.queue.length>0||de.taskCount()>2))if(L.current=r,L.notrycatch)i()
else try{i()}catch(e){r.pushFailure(t+" failed on "+r.testName+": "+(e.message||e),J(e,0))}}},hooks:function(e){var t=[]
return this.skip||(function(n){if(("beforeEach"===e||"afterEach"===e)&&L.globalHooks[e])for(var r=0;r<L.globalHooks[e].length;r++)t.push(n.queueGlobalHook(L.globalHooks[e][r],e))}(this),function n(r,i){if(i.parentModule&&n(r,i.parentModule),i.hooks[e].length)for(var o=0;o<i.hooks[e].length;o++)t.push(r.queueHook(i.hooks[e][o],e,i))}(this,this.module)),t},finish:function(){if(L.current=this,this.callback=void 0,this.steps.length){var e=this.steps.join(", ")
this.pushFailure("Expected assert.verifySteps() to be called before end of test "+"after using assert.step(). Unverified steps: ".concat(e),this.stack)}L.requireExpects&&null===this.expected?this.pushFailure("Expected number of assertions to be defined, but expect() was not called.",this.stack):null!==this.expected&&this.expected!==this.assertions.length?this.pushFailure("Expected "+this.expected+" assertions, but "+this.assertions.length+" were run",this.stack):null!==this.expected||this.assertions.length||this.pushFailure("Expected at least one assertion, but none were run - call expect(0) to accept zero assertions.",this.stack)
var t=this.module,n=t.name,r=this.testName,i=!!this.skip,o=!!this.todo,s=0,a=L.storage
this.runtime=C.now()-this.started,L.stats.all+=this.assertions.length,L.stats.testCount+=1,t.stats.all+=this.assertions.length
for(var u=0;u<this.assertions.length;u++)this.assertions[u].result||(s++,L.stats.bad++,t.stats.bad++)
i?Se(t):function(e){for(e.testsRun++;e=e.parentModule;)e.testsRun++}(t),a&&(s?a.setItem("qunit-test-"+n+"-"+r,s):a.removeItem("qunit-test-"+n+"-"+r)),ne("testEnd",this.testReport.end(!0)),this.testReport.slimAssertions()
var c=this
return se("testDone",{name:r,module:n,skipped:i,todo:o,failed:s,passed:this.assertions.length-s,total:this.assertions.length,runtime:i?0:this.runtime,assertions:this.assertions,testId:this.testId,get source(){return c.stack}}).then((function(){if(Me(t)){for(var e=[t],n=t.parentModule;n&&Me(n);)e.push(n),n=n.parentModule
return e.reduce((function(e,t){return e.then((function(){return function(e){for(var t=[e];t.length;){var n=t.shift()
n.hooks={},t.push.apply(t,l(n.childModules))}return ne("suiteEnd",e.suiteReport.end(!0)),se("moduleDone",{name:e.name,tests:e.tests,failed:e.stats.bad,passed:e.stats.all-e.stats.bad,total:e.stats.all,runtime:C.now()-e.stats.started})}(t)}))}),oe.resolve([]))}})).then((function(){L.current=void 0}))},preserveTestEnvironment:function(){this.preserveEnvironment&&(this.module.testEnvironment=this.testEnvironment,this.testEnvironment=q({},this.module.testEnvironment))},queue:function(){var e=this
if(this.valid()){var t=L.storage&&+L.storage.getItem("qunit-test-"+this.module.name+"-"+this.testName),n=L.reorder&&!!t
this.previousFailure=!!t,de.add((function(){return[function(){return e.before()}].concat(l(e.hooks("before")),[function(){e.preserveTestEnvironment()}],l(e.hooks("beforeEach")),[function(){e.run()}],l(e.hooks("afterEach").reverse()),l(e.hooks("after").reverse()),[function(){e.after()},function(){return e.finish()}])}),n,L.seed)}else Se(this.module)},pushResult:function(e){if(this!==L.current){var t=e&&e.message||"",n=this&&this.testName||""
throw new Error("Assertion occurred after test finished.\n> Test: "+n+"\n> Message: "+t+"\n")}var r={module:this.module.name,name:this.testName,result:e.result,message:e.message,actual:e.actual,testId:this.testId,negative:e.negative||!1,runtime:C.now()-this.started,todo:!!this.todo}
if(E.call(e,"expected")&&(r.expected=e.expected),!e.result){var i=e.source||V()
i&&(r.source=i)}this.logAssertion(r),this.assertions.push({result:!!e.result,message:e.message})},pushFailure:function(e,t,n){if(!(this instanceof pe))throw new Error("pushFailure() assertion outside test context, was "+V(2))
this.pushResult({result:!1,message:e||"error",actual:n||null,source:t})},logAssertion:function(e){se("log",e)
var t={passed:e.result,actual:e.actual,expected:e.expected,message:e.message,stack:e.source,todo:e.todo}
this.testReport.pushAssertion(t),ne("assertion",t)},internalResetTimeout:function(e){m(L.timeout),L.timeout=g(L.timeoutHandler(e),e)},internalStop:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1
L.blocking=!0
var t,n=this,r=this.nextPauseId++,i={cancelled:!1,remaining:e}
function o(){if(!i.cancelled){if(void 0===L.current)throw new Error("Unexpected release of async pause after tests finished.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(L.current!==n)throw new Error("Unexpected release of async pause during a different test.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
if(i.remaining<=0)throw new Error("Tried to release async pause that was already released.\n"+"> Test: ".concat(n.testName," [async #").concat(r,"]"))
i.remaining--,0===i.remaining&&n.pauses.delete(r),Te(n)}}return n.pauses.set(r,i),g&&("number"==typeof n.timeout?t=n.timeout:"number"==typeof L.testTimeout&&(t=L.testTimeout),"number"==typeof t&&t>0&&(L.timeoutHandler=function(e){return function(){L.timeout=null,i.cancelled=!0,n.pauses.delete(r),n.pushFailure("Test took longer than ".concat(e,"ms; test timed out."),V(2)),Te(n)}},m(L.timeout),L.timeout=g(L.timeoutHandler(t),t))),o},resolvePromise:function(e,t){if(null!=e){var n=this,r=e.then
if("function"===I(r)){var i=n.internalStop(),o=function(){i()}
L.notrycatch?r.call(e,o):r.call(e,o,(function(e){var r="Promise rejected "+(t?t.replace(/Each$/,""):"during")+' "'+n.testName+'": '+(e&&e.message||e)
n.pushFailure(r,J(e,0)),me(),Ee(n)}))}}},valid:function(){var e=L.filter,t=/^(!?)\/([\w\W]*)\/(i?$)/.exec(e),n=L.module&&L.module.toLowerCase(),r=this.module.name+": "+this.testName
return!(!this.callback||!this.callback.validTest)||!(L.moduleId&&L.moduleId.length>0&&!function e(t){return S(t.moduleId,L.moduleId)||t.parentModule&&e(t.parentModule)}(this.module))&&!(L.testId&&L.testId.length>0&&!S(this.testId,L.testId))&&!(n&&!function e(t){return(t.name?t.name.toLowerCase():null)===n||!!t.parentModule&&e(t.parentModule)}(this.module))&&(!e||(t?this.regexFilter(!!t[1],t[2],t[3],r):this.stringFilter(e,r)))},regexFilter:function(e,t,n,r){return new RegExp(t,n).test(r)!==e},stringFilter:function(e,t){e=e.toLowerCase(),t=t.toLowerCase()
var n="!"!==e.charAt(0)
return n||(e=e.slice(1)),-1!==t.indexOf(e)?n:!n}}
var ve=!1
function be(e){ve||L.currentModule.ignored||new pe(e).queue()}function ye(e){L.currentModule.ignored||(ve||(L.queue.length=0,ve=!0),new pe(e).queue())}function ke(e,t){be({testName:e,callback:t})}function we(e,t){return"".concat(e," [").concat(t,"]")}function xe(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++)t(e[n],n)
else{if("object"!==i(e)||null===e)throw new Error("test.each() expects an array or object as input, but\nfound ".concat(i(e)," instead."))
for(var r in e)t(e[r],r)}}function Ee(e){e.pauses.forEach((function(e){e.cancelled=!0})),e.pauses.clear(),Te(e)}function Te(e){e.pauses.size>0||(g?(m(L.timeout),L.timeout=g((function(){e.pauses.size>0||(m(L.timeout),L.timeout=null,L.blocking=!1,de.advance())}))):(L.blocking=!1,de.advance()))}function Ce(e){for(var t=[].concat(e.tests),n=l(e.childModules);n.length;){var r=n.shift()
t.push.apply(t,r.tests),n.push.apply(n,l(r.childModules))}return t}function Me(e){return e.testsRun+e.testsIgnored===Ce(e).length}function Se(e){for(e.testsIgnored++;e=e.parentModule;)e.testsIgnored++}q(ke,{todo:function(e,t){be({testName:e,callback:t,todo:!0})},skip:function(e){be({testName:e,skip:!0})},only:function(e,t){ye({testName:e,callback:t})},each:function(e,t,n){xe(t,(function(t,r){be({testName:we(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}}),ke.todo.each=function(e,t,n){xe(t,(function(t,r){be({testName:we(e,r),callback:n,todo:!0,withData:!0,stackOffset:5,data:t})}))},ke.skip.each=function(e,t){xe(t,(function(t,n){be({testName:we(e,n),stackOffset:5,skip:!0})}))},ke.only.each=function(e,t,n){xe(t,(function(t,r){ye({testName:we(e,r),callback:n,withData:!0,stackOffset:5,data:t})}))}
var Ne,je,qe,Ie,Re=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(p.log,p),t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testStart",this.onTestStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return a(e,[{key:"onError",value:function(e){this.log("error",e)}},{key:"onRunStart",value:function(e){this.log("runStart",e)}},{key:"onTestStart",value:function(e){this.log("testStart",e)}},{key:"onTestEnd",value:function(e){this.log("testEnd",e)}},{key:"onRunEnd",value:function(e){this.log("runEnd",e)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),_e=!0
if("undefined"!=typeof process){var Oe=process.env
Ne=Oe.FORCE_COLOR,je=Oe.NODE_DISABLE_COLORS,qe=Oe.NO_COLOR,Ie=Oe.TERM,_e=process.stdout&&process.stdout.isTTY}var Ae={enabled:!je&&null==qe&&"dumb"!==Ie&&(null!=Ne&&"0"!==Ne||_e),reset:Pe(0,0),bold:Pe(1,22),dim:Pe(2,22),italic:Pe(3,23),underline:Pe(4,24),inverse:Pe(7,27),hidden:Pe(8,28),strikethrough:Pe(9,29),black:Pe(30,39),red:Pe(31,39),green:Pe(32,39),yellow:Pe(33,39),blue:Pe(34,39),magenta:Pe(35,39),cyan:Pe(36,39),white:Pe(37,39),gray:Pe(90,39),grey:Pe(90,39),bgBlack:Pe(40,49),bgRed:Pe(41,49),bgGreen:Pe(42,49),bgYellow:Pe(43,49),bgBlue:Pe(44,49),bgMagenta:Pe(45,49),bgCyan:Pe(46,49),bgWhite:Pe(47,49)}
function Le(e,t){for(var n,r=0,i="",o="";r<e.length;r++)i+=(n=e[r]).open,o+=n.close,~t.indexOf(n.close)&&(t=t.replace(n.rgx,n.close+n.open))
return i+t+o}function Pe(e,t){var n={open:"[".concat(e,"m"),close:"[".concat(t,"m"),rgx:new RegExp("\\x1b\\[".concat(t,"m"),"g")}
return function(t){return void 0!==this&&void 0!==this.has?(~this.has.indexOf(e)||(this.has.push(e),this.keys.push(n)),void 0===t?this:Ae.enabled?Le(this.keys,t+""):t+""):void 0===t?((r={has:[e],keys:[n]}).reset=Ae.reset.bind(r),r.bold=Ae.bold.bind(r),r.dim=Ae.dim.bind(r),r.italic=Ae.italic.bind(r),r.underline=Ae.underline.bind(r),r.inverse=Ae.inverse.bind(r),r.hidden=Ae.hidden.bind(r),r.strikethrough=Ae.strikethrough.bind(r),r.black=Ae.black.bind(r),r.red=Ae.red.bind(r),r.green=Ae.green.bind(r),r.yellow=Ae.yellow.bind(r),r.blue=Ae.blue.bind(r),r.magenta=Ae.magenta.bind(r),r.cyan=Ae.cyan.bind(r),r.white=Ae.white.bind(r),r.gray=Ae.gray.bind(r),r.grey=Ae.grey.bind(r),r.bgBlack=Ae.bgBlack.bind(r),r.bgRed=Ae.bgRed.bind(r),r.bgGreen=Ae.bgGreen.bind(r),r.bgYellow=Ae.bgYellow.bind(r),r.bgBlue=Ae.bgBlue.bind(r),r.bgMagenta=Ae.bgMagenta.bind(r),r.bgCyan=Ae.bgCyan.bind(r),r.bgWhite=Ae.bgWhite.bind(r),r):Ae.enabled?Le([n],t+""):t+""
var r}}var Ue=Object.prototype.hasOwnProperty
function He(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4
if(void 0===e&&(e=String(e)),"number"!=typeof e||isFinite(e)||(e=String(e)),"number"==typeof e)return JSON.stringify(e)
if("string"==typeof e){var n=/['"\\/[{}\]\r\n]/,r=/[-?:,[\]{}#&*!|=>'"%@`]/,i=/(^\s|\s$)/,o=/^[\d._-]+$/,s=/^(true|false|y|n|yes|no|on|off)$/i
if(""===e||n.test(e)||r.test(e[0])||i.test(e)||o.test(e)||s.test(e)){if(!/\n/.test(e))return JSON.stringify(e)
var a=new Array(t+1).join(" "),u=e.match(/\n+$/),l=u?u[0].length:0
if(1===l){var c=e.replace(/\n$/,"").split("\n").map((function(e){return a+e}))
return"|\n"+c.join("\n")}var f=e.split("\n").map((function(e){return a+e}))
return"|+\n"+f.join("\n")}return e}return JSON.stringify(De(e),null,2)}function De(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]
if(-1!==t.indexOf(e))return"[Circular]"
var n,r=Object.prototype.toString.call(e).replace(/^\[.+\s(.+?)]$/,"$1").toLowerCase()
switch(r){case"array":t.push(e),n=e.map((function(e){return De(e,t)})),t.pop()
break
case"object":t.push(e),n={},Object.keys(e).forEach((function(r){n[r]=De(e[r],t)})),t.pop()
break
default:n=e}return n}var Fe=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
o(this,e),this.log=n.log||Function.prototype.bind.call(p.log,p),this.testCount=0,this.ended=!1,this.bailed=!1,t.on("error",this.onError.bind(this)),t.on("runStart",this.onRunStart.bind(this)),t.on("testEnd",this.onTestEnd.bind(this)),t.on("runEnd",this.onRunEnd.bind(this))}return a(e,[{key:"onRunStart",value:function(e){this.log("TAP version 13")}},{key:"onError",value:function(e){this.bailed||(this.bailed=!0,this.ended||(this.testCount=this.testCount+1,this.log(Ae.red("not ok ".concat(this.testCount," global failure"))),this.logError(e)),this.log("Bail out! "+O(e).split("\n")[0]),this.ended&&this.logError(e))}},{key:"onTestEnd",value:function(e){var t=this
this.testCount=this.testCount+1,"passed"===e.status?this.log("ok ".concat(this.testCount," ").concat(e.fullName.join(" > "))):"skipped"===e.status?this.log(Ae.yellow("ok ".concat(this.testCount," # SKIP ").concat(e.fullName.join(" > ")))):"todo"===e.status?(this.log(Ae.cyan("not ok ".concat(this.testCount," # TODO ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e,"todo")}))):(this.log(Ae.red("not ok ".concat(this.testCount," ").concat(e.fullName.join(" > ")))),e.errors.forEach((function(e){return t.logAssertion(e)})))}},{key:"onRunEnd",value:function(e){this.ended=!0,this.log("1..".concat(e.testCounts.total)),this.log("# pass ".concat(e.testCounts.passed)),this.log(Ae.yellow("# skip ".concat(e.testCounts.skipped))),this.log(Ae.cyan("# todo ".concat(e.testCounts.todo))),this.log(Ae.red("# fail ".concat(e.testCounts.failed)))}},{key:"logAssertion",value:function(e,t){var n="  ---"
n+="\n  message: ".concat(He(e.message||"failed")),n+="\n  severity: ".concat(He(t||"failed")),Ue.call(e,"actual")&&(n+="\n  actual  : ".concat(He(e.actual))),Ue.call(e,"expected")&&(n+="\n  expected: ".concat(He(e.expected))),e.stack&&(n+="\n  stack: ".concat(He(e.stack+"\n"))),n+="\n  ...",this.log(n)}},{key:"logError",value:function(e){var t="  ---"
t+="\n  message: ".concat(He(O(e))),t+="\n  severity: ".concat(He("failed")),e&&e.stack&&(t+="\n  stack: ".concat(He(e.stack+"\n"))),t+="\n  ...",this.log(t)}}],[{key:"init",value:function(t,n){return new e(t,n)}}]),e}(),Be={console:Re,tap:Fe}
function Qe(e){return function(t){L.globalHooks[e]||(L.globalHooks[e]=[]),L.globalHooks[e].push(t)}}var ze={beforeEach:Qe("beforeEach"),afterEach:Qe("afterEach")}
function $e(e){L.current?L.current.assert.pushResult({result:!1,message:"global failure: ".concat(O(e)),source:e&&e.stack||V(2)}):(F.globalFailureCount++,L.stats.bad++,L.stats.all++,ne("error",e))}var Ge={}
L.currentModule.suiteReport=F
var Ye=!1,We=!1
function Je(){We=!0,g?g((function(){Ze()})):Ze()}function Ve(){L.blocking=!1,de.advance()}function Ze(){if(L.started)Ve()
else{L.started=C.now(),""===L.modules[0].name&&0===L.modules[0].tests.length&&L.modules.shift()
for(var e=L.modules.length,t=[],n=0;n<e;n++)t.push({name:L.modules[n].name,tests:L.modules[n].tests})
ne("runStart",F.start(!0)),se("begin",{totalTests:pe.count,modules:t}).then(Ve)}}Ge.isLocal=h&&h.location&&"file:"===h.location.protocol,Ge.version="2.18.2",q(Ge,{config:L,dump:U,equiv:A,reporters:Be,hooks:ze,is:R,objectType:I,on:function(e,t){if("string"!==I(e))throw new TypeError("eventName must be a string when registering a listener")
if(!S(e,te)){var n=te.join(", ")
throw new Error('"'.concat(e,'" is not a valid event; must be one of: ').concat(n,"."))}if("function"!==I(t))throw new TypeError("callback must be a function when registering a listener")
ee[e]||(ee[e]=[]),S(t,ee[e])||ee[e].push(t)},onError:function(e){if(w.warn("QUnit.onError is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),L.current&&L.current.ignoreGlobalErrors)return!0
var t=new Error(e.message)
return t.stack=e.stacktrace||e.fileName+":"+e.lineNumber,$e(t),!1},onUncaughtException:$e,pushFailure:ge,assert:Z.prototype,module:Y,test:ke,todo:ke.todo,skip:ke.skip,only:ke.only,start:function(e){if(L.current)throw new Error("QUnit.start cannot be called inside a test context.")
var t=Ye
if(Ye=!0,We)throw new Error("Called start() while test already started running")
if(t||e>1)throw new Error("Called start() outside of a test context too many times")
if(L.autostart)throw new Error("Called start() outside of a test context when QUnit.config.autostart was true")
if(!L.pageLoaded)return L.autostart=!0,void(v||Ge.load())
Je()},onUnhandledRejection:function(e){w.warn("QUnit.onUnhandledRejection is deprecated and will be removed in QUnit 3.0. Please use QUnit.onUncaughtException instead."),$e(e)},extend:function(){w.warn("QUnit.extend is deprecated and will be removed in QUnit 3.0. Please use Object.assign instead.")
for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n]
return q.apply(this,t)},load:function(){L.pageLoaded=!0,q(L,{started:0,updateRate:1e3,autostart:!0,filter:""},!0),We||(L.blocking=!1,L.autostart&&Je())},stack:function(e){return V(e=(e||0)+2)}}),function(e){var t=["begin","done","log","testStart","testDone","moduleStart","moduleDone"]
function n(e){return function(t){if("function"!==I(t))throw new Error("QUnit logging methods require a callback function as their first parameters.")
L.callbacks[e].push(t)}}for(var r=0,i=t.length;r<i;r++){var o=t[r]
"undefined"===I(L.callbacks[o])&&(L.callbacks[o]=[]),e[o]=n(o)}}(Ge),function(i){if(h&&v){if(h.QUnit&&h.QUnit.version)throw new Error("QUnit has already been defined.")
h.QUnit=i}e&&e.exports&&(e.exports=i,e.exports.QUnit=i),t&&(t.QUnit=i),void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r),i.config.autostart=!1}(Ge),function(){if(h&&v){var e=Ge.config,t=Object.prototype.hasOwnProperty
Ge.begin((function(){if(!t.call(e,"fixture")){var n=v.getElementById("qunit-fixture")
n&&(e.fixture=n.cloneNode(!0))}})),Ge.testStart((function(){if(null!=e.fixture){var t=v.getElementById("qunit-fixture")
if("string"===i(e.fixture)){var n=v.createElement("div")
n.setAttribute("id","qunit-fixture"),n.innerHTML=e.fixture,t.parentNode.replaceChild(n,t)}else{var r=e.fixture.cloneNode(!0)
t.parentNode.replaceChild(r,t)}}}))}}(),function(){var e=void 0!==h&&h.location
if(e){var t=function(){for(var t=Object.create(null),r=e.search.slice(1).split("&"),i=r.length,o=0;o<i;o++)if(r[o]){var s=r[o].split("="),a=n(s[0]),u=1===s.length||n(s.slice(1).join("="))
t[a]=a in t?[].concat(t[a],u):u}return t}()
Ge.urlParams=t,Ge.config.moduleId=[].concat(t.moduleId||[]),Ge.config.testId=[].concat(t.testId||[]),Ge.config.module=t.module,Ge.config.filter=t.filter,!0===t.seed?Ge.config.seed=Math.random().toString(36).slice(2):t.seed&&(Ge.config.seed=t.seed),Ge.config.urlConfig.push({id:"hidepassed",label:"Hide passed tests",tooltip:"Only show tests and assertions that fail. Stored as query-strings."},{id:"noglobals",label:"Check for Globals",tooltip:"Enabling this will test if any test introduces new properties on the global object (`window` in Browsers). Stored as query-strings."},{id:"notrycatch",label:"No try-catch",tooltip:"Enabling this will run tests outside of a try-catch block. Makes debugging exceptions in IE reasonable. Stored as query-strings."}),Ge.begin((function(){for(var e=Ge.config.urlConfig,n=0;n<e.length;n++){var r=Ge.config.urlConfig[n]
"string"!=typeof r&&(r=r.id),void 0===Ge.config[r]&&(Ge.config[r]=t[r])}}))}function n(e){return decodeURIComponent(e.replace(/\+/g,"%20"))}}()
var Ke={exports:{}}
!function(e){var t,n
t=re,n=function(){var e="undefined"==typeof window,t="function"==typeof Map?Map:function(){var e=Object.create(null)
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
if(n&&n.keys)for(var v=n.scoreFn||l,b=n.keys,y=b.length,k=m-1;k>=0;--k){for(var w=t[k],x=new Array(y),E=y-1;E>=0;--E)(M=c(w,C=b[E]))?(f(M)||(M=p.getPrepared(M)),x[E]=u(e,M,r)):x[E]=null
x.obj=w
var T=v(x)
null!==T&&(T<s||(x.score=T,d<a?(h.add(x),++d):(++g,T>h.peek().score&&h.replaceTop(x))))}else if(n&&n.key){var C=n.key
for(k=m-1;k>=0;--k)(M=c(w=t[k],C))&&(f(M)||(M=p.getPrepared(M)),null!==(S=u(e,M,r))&&(S.score<s||(S={target:S.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:S.score,indexes:S.indexes,obj:w},d<a?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}else for(k=m-1;k>=0;--k){var M,S;(M=t[k])&&(f(M)||(M=p.getPrepared(M)),null!==(S=u(e,M,r))&&(S.score<s||(d<a?(h.add(S),++d):(++g,S.score>h.peek().score&&h.replaceTop(S)))))}if(0===d)return o
var N=new Array(d)
for(k=d-1;k>=0;--k)N[k]=h.poll()
return N.total=d+g,N},goAsync:function(t,n,r){var s=!1,a=new Promise((function(a,u){if("farzher"==t)return a([{target:"farzher was here (^-^*)/",score:0,indexes:[0,1,2,3,4,5,6],obj:n?n[0]:null}])
if(!t)return a(o)
var h=(t=p.prepareSearch(t))[0],g=d(),m=n.length-1,v=r&&r.threshold||i&&i.threshold||-9007199254740991,b=r&&r.limit||i&&i.limit||9007199254740991,y=(r&&void 0!==r.allowTypo?r.allowTypo:!i||void 0===i.allowTypo||i.allowTypo)?p.algorithm:p.algorithmNoTypo,k=0,w=0
function x(){if(s)return u("canceled")
var i=Date.now()
if(r&&r.keys)for(var d=r.scoreFn||l,E=r.keys,T=E.length;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x))
for(var C=n[m],M=new Array(T),S=T-1;S>=0;--S)(q=c(C,j=E[S]))?(f(q)||(q=p.getPrepared(q)),M[S]=y(t,q,h)):M[S]=null
M.obj=C
var N=d(M)
null!==N&&(N<v||(M.score=N,k<b?(g.add(M),++k):(++w,N>g.peek().score&&g.replaceTop(M))))}else if(r&&r.key)for(var j=r.key;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x));(q=c(C=n[m],j))&&(f(q)||(q=p.getPrepared(q)),null!==(I=y(t,q,h))&&(I.score<v||(I={target:I.target,_targetLowerCodes:null,_nextBeginningIndexes:null,score:I.score,indexes:I.indexes,obj:C},k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}else for(;m>=0;--m){if(m%1e3==0&&Date.now()-i>=10)return void(e?setImmediate(x):setTimeout(x))
var q,I;(q=n[m])&&(f(q)||(q=p.getPrepared(q)),null!==(I=y(t,q,h))&&(I.score<v||(k<b?(g.add(I),++k):(++w,I.score>g.peek().score&&g.replaceTop(I)))))}if(0===k)return a(o)
for(var R=new Array(k),_=k-1;_>=0;--_)R[_]=g.poll()
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
return p}()},e.exports?e.exports=n():t.fuzzysort=n()}(Ke)
var Xe=Ke.exports,et={failedTests:[],defined:0,completed:0}
function tt(e){return e?(""+e).replace(/['"<>&]/g,(function(e){switch(e){case"'":return"&#039;"
case'"':return"&quot;"
case"<":return"&lt;"
case">":return"&gt;"
case"&":return"&amp;"}})):""}!function(){if(h&&v){var e=Ge.config,t=[],n=!1,r=Object.prototype.hasOwnProperty,i=N({filter:void 0,module:void 0,moduleId:void 0,testId:void 0}),o=null
Ge.on("runStart",(function(e){et.defined=e.testCounts.total})),Ge.begin((function(){var t,n,s,a,u,c,f,p,y,E,N;(c=T("qunit"))&&(c.setAttribute("role","main"),c.innerHTML="<h1 id='qunit-header'>"+tt(v.title)+"</h1><h2 id='qunit-banner'></h2><div id='qunit-testrunner-toolbar' role='navigation'></div>"+(!(t=Ge.config.testId)||t.length<=0?"":"<div id='qunit-filteredTest'>Rerunning selected tests: "+tt(t.join(", "))+" <a id='qunit-clearFilter' href='"+tt(i)+"'>Run all tests</a></div>")+"<h2 id='qunit-userAgent'></h2><ol id='qunit-tests'></ol>"),(n=T("qunit-header"))&&(n.innerHTML="<a href='"+tt(i)+"'>"+n.innerHTML+"</a> "),(s=T("qunit-banner"))&&(s.className=""),E=T("qunit-tests"),(N=T("qunit-testresult"))&&N.parentNode.removeChild(N),E&&(E.innerHTML="",(N=v.createElement("p")).id="qunit-testresult",N.className="result",E.parentNode.insertBefore(N,E),N.innerHTML='<div id="qunit-testresult-display">Running...<br />&#160;</div><div id="qunit-testresult-controls"></div><div class="clearfix"></div>',p=T("qunit-testresult-controls")),p&&p.appendChild(((y=v.createElement("button")).id="qunit-abort-tests-button",y.innerHTML="Abort",d(y,"click",C),y)),(a=T("qunit-userAgent"))&&(a.innerHTML="",a.appendChild(v.createTextNode("QUnit "+Ge.version+"; "+b.userAgent))),(u=T("qunit-testrunner-toolbar"))&&(u.appendChild(((f=v.createElement("span")).innerHTML=function(){for(var t=!1,n=e.urlConfig,i="",o=0;o<n.length;o++){var s=e.urlConfig[o]
"string"==typeof s&&(s={id:s,label:s})
var a=tt(s.id),u=tt(s.tooltip)
if(s.value&&"string"!=typeof s.value){if(i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'>"+s.label+": </label><select id='qunit-urlconfig-"+a+"' name='"+a+"' title='"+u+"'><option></option>",Array.isArray(s.value))for(var l=0;l<s.value.length;l++)i+="<option value='"+(a=tt(s.value[l]))+"'"+(e[s.id]===s.value[l]?(t=!0)&&" selected='selected'":"")+">"+a+"</option>"
else for(var c in s.value)r.call(s.value,c)&&(i+="<option value='"+tt(c)+"'"+(e[s.id]===c?(t=!0)&&" selected='selected'":"")+">"+tt(s.value[c])+"</option>")
e[s.id]&&!t&&(i+="<option value='"+(a=tt(e[s.id]))+"' selected='selected' disabled='disabled'>"+a+"</option>"),i+="</select>"}else i+="<label for='qunit-urlconfig-"+a+"' title='"+u+"'><input id='qunit-urlconfig-"+a+"' name='"+a+"' type='checkbox'"+(s.value?" value='"+tt(s.value)+"'":"")+(e[s.id]?" checked='checked'":"")+" title='"+u+"' />"+tt(s.label)+"</label>"}return i}(),w(f,"qunit-url-config"),m(f.getElementsByTagName("input"),"change",S),m(f.getElementsByTagName("select"),"change",S),f)),u.appendChild(function(){var t,n,r,i,s=v.createElement("span")
return s.id="qunit-toolbar-filters",s.appendChild((t=v.createElement("form"),n=v.createElement("label"),r=v.createElement("input"),i=v.createElement("button"),w(t,"qunit-filter"),n.innerHTML="Filter: ",r.type="text",r.value=e.filter||"",r.name="filter",r.id="qunit-filter-input",i.innerHTML="Go",n.appendChild(r),t.appendChild(n),t.appendChild(v.createTextNode(" ")),t.appendChild(i),d(t,"submit",M),t)),s.appendChild(function(){var t=null
o={options:[],selectedMap:new k,isDirty:function(){return l(o.selectedMap.keys()).sort().join(",")!==l(t.keys()).sort().join(",")}}
for(var n=0;n<e.modules.length;n++){var r=e.modules[n]
""!==r.name&&(o.options.push({moduleId:r.moduleId,name:r.name}),-1!==e.moduleId.indexOf(r.moduleId)&&o.selectedMap.set(r.moduleId,r.name))}t=new k(o.selectedMap)
var i=v.createElement("input")
i.id="qunit-modulefilter-search",i.autocomplete="off",d(i,"input",T),d(i,"input",E),d(i,"focus",E),d(i,"click",E)
var s=v.createElement("label")
s.htmlFor="qunit-modulefilter-search",s.textContent="Module:"
var a=v.createElement("span")
a.id="qunit-modulefilter-search-container",a.appendChild(i)
var u=v.createElement("button")
u.textContent="Apply",u.title="Re-run the selected test modules",d(u,"click",j)
var c=v.createElement("button")
c.textContent="Reset",c.type="reset",c.title="Restore the previous module selection"
var f=v.createElement("button")
f.textContent="Select none",f.type="button",f.title="Clear the current module selection",d(f,"click",(function(){o.selectedMap.clear(),C(),T()}))
var p=v.createElement("span")
p.id="qunit-modulefilter-actions",p.appendChild(u),p.appendChild(c),t.size&&p.appendChild(f)
var m=v.createElement("ul")
m.id="qunit-modulefilter-dropdown-list"
var b=v.createElement("div")
b.id="qunit-modulefilter-dropdown",b.style.display="none",b.appendChild(p),b.appendChild(m),d(b,"change",C),a.appendChild(b),C()
var y,w=v.createElement("form")
function E(){function e(t){var n=w.contains(t.target)
27!==t.keyCode&&n||(27===t.keyCode&&n&&i.focus(),b.style.display="none",g(v,"click",e),g(v,"keydown",e),i.value="",T())}"none"===b.style.display&&(T(),b.style.display="block",d(v,"click",e),d(v,"keydown",e))}function T(){h.clearTimeout(y),y=h.setTimeout((function(){m.innerHTML=function(e){return function(e){var t=""
o.selectedMap.forEach((function(e,n){t+=I(n,e,!0)}))
for(var n=0;n<e.length;n++){var r=e[n].obj
o.selectedMap.has(r.moduleId)||(t+=I(r.moduleId,r.name,!1))}return t}(""===e?o.options.slice(0,20).map((function(e){return{obj:e}})):Xe.go(e,o.options,{limit:20,key:"name",allowTypo:!0}))}(i.value)}))}function C(e){var t=e&&e.target||null
t&&(t.checked?o.selectedMap.set(t.value,t.parentNode.textContent):o.selectedMap.delete(t.value),x(t.parentNode,"checked",t.checked))
var n=o.selectedMap.size?o.selectedMap.size+" "+(1===o.selectedMap.size?"module":"modules"):"All modules"
i.placeholder=n,i.title="Type to search through and reduce the list.",c.disabled=!o.isDirty(),f.style.display=o.selectedMap.size?"":"none"}return w.id="qunit-modulefilter",w.appendChild(s),w.appendChild(v.createTextNode(" ")),w.appendChild(a),d(w,"submit",M),d(w,"reset",(function(){o.selectedMap=new k(t),C(),T()})),w}()),s}()),u.appendChild(v.createElement("div")).className="clearfix")})),Ge.on("runEnd",(function(t){var n,r,i,o=T("qunit-banner"),s=T("qunit-tests"),a=T("qunit-abort-tests-button"),u=e.stats.all-e.stats.bad,l=[t.testCounts.total," tests completed in ",Math.round(t.runtime)," milliseconds, with ",t.testCounts.failed," failed, ",t.testCounts.skipped," skipped, and ",t.testCounts.todo," todo.<br />","<span class='passed'>",u,"</span> assertions of <span class='total'>",e.stats.all,"</span> passed, <span class='failed'>",e.stats.bad,"</span> failed.",_(et.failedTests)].join("")
if(a&&a.disabled){l="Tests aborted after "+Math.round(t.runtime)+" milliseconds."
for(var c=0;c<s.children.length;c++)""!==(n=s.children[c]).className&&"running"!==n.className||(n.className="aborted",i=n.getElementsByTagName("ol")[0],(r=v.createElement("li")).className="fail",r.innerHTML="Test aborted.",i.appendChild(r))}!o||a&&!1!==a.disabled||(o.className="failed"===t.status?"qunit-fail":"qunit-pass"),a&&a.parentNode.removeChild(a),s&&(T("qunit-testresult-display").innerHTML=l),e.altertitle&&v.title&&(v.title=["failed"===t.status?"✖":"✔",v.title.replace(/^[\u2714\u2716] /i,"")].join(" ")),e.scrolltop&&h.scrollTo&&h.scrollTo(0,0)})),Ge.testStart((function(e){var t,n
R(e.name,e.testId,e.module),(t=T("qunit-testresult-display"))&&(w(t,"running"),n=Ge.config.reorder&&e.previousFailure,t.innerHTML=[L(et),n?"Rerunning previously failed test: <br />":"Running: ",A(e.name,e.module),_(et.failedTests)].join(""))})),Ge.log((function(e){var t=T("qunit-test-output-"+e.testId)
if(t){var n,i,o,s=tt(e.message)||(e.result?"okay":"failed")
s="<span class='test-message'>"+s+"</span>",s+="<span class='runtime'>@ "+Math.round(e.runtime)+" ms</span>"
var a=!1
!e.result&&r.call(e,"expected")?(n=e.negative?"NOT "+Ge.dump.parse(e.expected):Ge.dump.parse(e.expected),i=Ge.dump.parse(e.actual),s+="<table><tr class='test-expected'><th>Expected: </th><td><pre>"+tt(n)+"</pre></td></tr>",i!==n?(s+="<tr class='test-actual'><th>Result: </th><td><pre>"+tt(i)+"</pre></td></tr>","number"==typeof e.actual&&"number"==typeof e.expected?isNaN(e.actual)||isNaN(e.expected)||(a=!0,o=((o=e.actual-e.expected)>0?"+":"")+o):"boolean"!=typeof e.actual&&"boolean"!=typeof e.expected&&(a=P(o=Ge.diff(n,i)).length!==P(n).length+P(i).length),a&&(s+="<tr class='test-diff'><th>Diff: </th><td><pre>"+o+"</pre></td></tr>")):-1!==n.indexOf("[object Array]")||-1!==n.indexOf("[object Object]")?s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the depth of object is more than current max depth ("+Ge.config.maxDepth+").<p>Hint: Use <code>QUnit.dump.maxDepth</code> to  run with a higher max depth or <a href='"+tt(N({maxDepth:-1}))+"'>Rerun</a> without max depth.</p></td></tr>":s+="<tr class='test-message'><th>Message: </th><td>Diff suppressed as the expected and actual results have an equivalent serialization</td></tr>",e.source&&(s+="<tr class='test-source'><th>Source: </th><td><pre>"+tt(e.source)+"</pre></td></tr>"),s+="</table>"):!e.result&&e.source&&(s+="<table><tr class='test-source'><th>Source: </th><td><pre>"+tt(e.source)+"</pre></td></tr></table>")
var u=t.getElementsByTagName("ol")[0],l=v.createElement("li")
l.className=e.result?"pass":"fail",l.innerHTML=s,u.appendChild(l)}})),Ge.testDone((function(r){var i=T("qunit-tests"),o=T("qunit-test-output-"+r.testId)
if(i&&o){var s
E(o,"running"),s=r.failed>0?"failed":r.todo?"todo":r.skipped?"skipped":"passed"
var a=o.getElementsByTagName("ol")[0],u=r.passed,l=r.failed,c=r.failed>0?r.todo:!r.todo
c?w(a,"qunit-collapsed"):(et.failedTests.push(r.testId),e.collapse&&(n?w(a,"qunit-collapsed"):n=!0))
var f=o.firstChild,h=l?"<b class='failed'>"+l+"</b>, <b class='passed'>"+u+"</b>, ":""
if(f.innerHTML+=" <b class='counts'>("+h+r.assertions.length+")</b>",et.completed++,r.skipped){o.className="skipped"
var p=v.createElement("em")
p.className="qunit-skipped-label",p.innerHTML="skipped",o.insertBefore(p,f)}else{if(d(f,"click",(function(){x(a,"qunit-collapsed")})),o.className=c?"pass":"fail",r.todo){var g=v.createElement("em")
g.className="qunit-todo-label",g.innerHTML="todo",o.className+=" todo",o.insertBefore(g,f)}var m=v.createElement("span")
m.className="runtime",m.innerHTML=Math.round(r.runtime)+" ms",o.insertBefore(m,a)}if(r.source){var b=v.createElement("p")
b.innerHTML="<strong>Source: </strong>"+tt(r.source),w(b,"qunit-source"),c&&w(b,"qunit-collapsed"),d(f,"click",(function(){x(b,"qunit-collapsed")})),o.appendChild(b)}e.hidepassed&&("passed"===s||r.skipped)&&(t.push(o),i.removeChild(o))}})),Ge.on("error",(function(e){var t=R("global failure")
if(t){var n=tt(O(e))
n="<span class='test-message'>"+n+"</span>",e&&e.stack&&(n+="<table><tr class='test-source'><th>Source: </th><td><pre>"+tt(e.stack)+"</pre></td></tr></table>")
var r=t.getElementsByTagName("ol")[0],i=v.createElement("li")
i.className="fail",i.innerHTML=n,r.appendChild(i),t.className="fail"}}))
var s,a=(s=h.phantom)&&s.version&&s.version.major>0
a&&p.warn("Support for PhantomJS is deprecated and will be removed in QUnit 3.0."),a||"complete"!==v.readyState?d(h,"load",Ge.load):Ge.load()
var u=h.onerror
h.onerror=function(t,n,r,i,o){var s=!1
if(u){for(var a=arguments.length,l=new Array(a>5?a-5:0),c=5;c<a;c++)l[c-5]=arguments[c]
s=u.call.apply(u,[this,t,n,r,i,o].concat(l))}if(!0!==s){if(e.current&&e.current.ignoreGlobalErrors)return!0
var f=o||new Error(t)
!f.stack&&n&&r&&(f.stack="".concat(n,":").concat(r)),Ge.onUncaughtException(f)}return s},h.addEventListener("unhandledrejection",(function(e){Ge.onUncaughtException(e.reason)}))}function f(e){return"function"==typeof e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function d(e,t,n){e.addEventListener(t,n,!1)}function g(e,t,n){e.removeEventListener(t,n,!1)}function m(e,t,n){for(var r=e.length;r--;)d(e[r],t,n)}function y(e,t){return(" "+e.className+" ").indexOf(" "+t+" ")>=0}function w(e,t){y(e,t)||(e.className+=(e.className?" ":"")+t)}function x(e,t,n){n||void 0===n&&!y(e,t)?w(e,t):E(e,t)}function E(e,t){for(var n=" "+e.className+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ")
e.className=f(n)}function T(e){return v.getElementById&&v.getElementById(e)}function C(){var e=T("qunit-abort-tests-button")
return e&&(e.disabled=!0,e.innerHTML="Aborting..."),Ge.config.queue.length=0,!1}function M(e){var t=T("qunit-filter-input")
return t.value=f(t.value),j(),e&&e.preventDefault&&e.preventDefault(),!1}function S(){var n,r=this,i={}
n="selectedIndex"in r?r.options[r.selectedIndex].value||void 0:r.checked?r.defaultValue||!0:void 0,i[r.name]=n
var o=N(i)
if("hidepassed"===r.name&&"replaceState"in h.history){Ge.urlParams[r.name]=n,e[r.name]=n||!1
var s=T("qunit-tests")
if(s){var a=s.children.length,u=s.children
if(r.checked){for(var l=0;l<a;l++){var f=u[l],d=f?f.className:"",p=d.indexOf("pass")>-1,g=d.indexOf("skipped")>-1;(p||g)&&t.push(f)}var m,v=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]
if(!n){if(Array.isArray(e)||(n=c(e))){n&&(e=n)
var r=0,i=function(){}
return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,a=!1
return{s:function(){n=n.call(e)},n:function(){var e=n.next()
return s=e.done,e},e:function(e){a=!0,o=e},f:function(){try{s||null==n.return||n.return()}finally{if(a)throw o}}}}(t)
try{for(v.s();!(m=v.n()).done;){var b=m.value
s.removeChild(b)}}catch(e){v.e(e)}finally{v.f()}}else for(var y;null!=(y=t.pop());)s.appendChild(y)}h.history.replaceState(null,"",o)}else h.location=o}function N(e){var t="?",n=h.location
for(var i in e=q(q({},Ge.urlParams),e))if(r.call(e,i)&&void 0!==e[i])for(var o=[].concat(e[i]),s=0;s<o.length;s++)t+=encodeURIComponent(i),!0!==o[s]&&(t+="="+encodeURIComponent(o[s])),t+="&"
return n.protocol+"//"+n.host+n.pathname+t.slice(0,-1)}function j(){var e=T("qunit-filter-input").value
h.location=N({filter:""===e?void 0:e,moduleId:l(o.selectedMap.keys()),module:void 0,testId:void 0})}function I(e,t,n){return'<li><label class="clickable'+(n?" checked":"")+'"><input type="checkbox" value="'+tt(e)+'"'+(n?' checked="checked"':"")+" />"+tt(t)+"</label></li>"}function R(e,t,n){var r=T("qunit-tests")
if(r){var i=v.createElement("strong")
i.innerHTML=A(e,n)
var o=v.createElement("li")
if(o.appendChild(i),void 0!==t){var s=v.createElement("a")
s.innerHTML="Rerun",s.href=N({testId:t}),o.id="qunit-test-output-"+t,o.appendChild(s)}var a=v.createElement("ol")
return a.className="qunit-assert-list",o.appendChild(a),r.appendChild(o),o}}function _(e){return 0===e.length?"":["<br /><a href='"+tt(N({testId:e}))+"'>",1===e.length?"Rerun 1 failed test":"Rerun "+e.length+" failed tests","</a>"].join("")}function A(e,t){var n=""
return t&&(n="<span class='module-name'>"+tt(t)+"</span>: "),n+"<span class='test-name'>"+tt(e)+"</span>"}function L(e){return[e.completed," / ",e.defined," tests completed.<br />"].join("")}function P(e){return e.replace(/<\/?[^>]+(>|$)/g,"").replace(/&quot;/g,"").replace(/\s+/g,"")}}(),Ge.diff=function(){function e(){}var t=-1,n=Object.prototype.hasOwnProperty
return e.prototype.DiffMain=function(e,t,n){var r,i,o,s,a,u
if(r=(new Date).getTime()+1e3,null===e||null===t)throw new Error("Null input. (DiffMain)")
return e===t?e?[[0,e]]:[]:(void 0===n&&(n=!0),i=n,o=this.diffCommonPrefix(e,t),s=e.substring(0,o),e=e.substring(o),t=t.substring(o),o=this.diffCommonSuffix(e,t),a=e.substring(e.length-o),e=e.substring(0,e.length-o),t=t.substring(0,t.length-o),u=this.diffCompute(e,t,i,r),s&&u.unshift([0,s]),a&&u.push([0,a]),this.diffCleanupMerge(u),u)},e.prototype.diffCleanupEfficiency=function(e){var n,r,i,o,s,a,u,l,c
for(n=!1,r=[],i=0,o=null,s=0,a=!1,u=!1,l=!1,c=!1;s<e.length;)0===e[s][0]?(e[s][1].length<4&&(l||c)?(r[i++]=s,a=l,u=c,o=e[s][1]):(i=0,o=null),l=c=!1):(e[s][0]===t?c=!0:l=!0,o&&(a&&u&&l&&c||o.length<2&&a+u+l+c===3)&&(e.splice(r[i-1],0,[t,o]),e[r[i-1]+1][0]=1,i--,o=null,a&&u?(l=c=!0,i=0):(s=--i>0?r[i-1]:-1,l=c=!1),n=!0)),s++
n&&this.diffCleanupMerge(e)},e.prototype.diffPrettyHtml=function(e){for(var n=[],r=0;r<e.length;r++){var i=e[r][0],o=e[r][1]
switch(i){case 1:n[r]="<ins>"+tt(o)+"</ins>"
break
case t:n[r]="<del>"+tt(o)+"</del>"
break
case 0:n[r]="<span>"+tt(o)+"</span>"}}return n.join("")},e.prototype.diffCommonPrefix=function(e,t){var n,r,i,o
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
a+=i.length}u=0,l=0,f="",c=""}a++}return o.pop(),o},e.prototype.diffBisect=function(e,n,r){var i,o,s,a,u,l,c,f,d,h,p,g,m,v,b,y,k,w,x,E,T,C,M
for(i=e.length,o=n.length,a=s=Math.ceil((i+o)/2),u=2*s,l=new Array(u),c=new Array(u),f=0;f<u;f++)l[f]=-1,c[f]=-1
for(l[a+1]=0,c[a+1]=0,h=(d=i-o)%2!=0,p=0,g=0,m=0,v=0,T=0;T<s&&!((new Date).getTime()>r);T++){for(C=-T+p;C<=T-g;C+=2){for(y=a+C,x=(k=C===-T||C!==T&&l[y-1]<l[y+1]?l[y+1]:l[y-1]+1)-C;k<i&&x<o&&e.charAt(k)===n.charAt(x);)k++,x++
if(l[y]=k,k>i)g+=2
else if(x>o)p+=2
else if(h&&(b=a+d-C)>=0&&b<u&&-1!==c[b]&&k>=(w=i-c[b]))return this.diffBisectSplit(e,n,k,x,r)}for(M=-T+m;M<=T-v;M+=2){for(b=a+M,E=(w=M===-T||M!==T&&c[b-1]<c[b+1]?c[b+1]:c[b-1]+1)-M;w<i&&E<o&&e.charAt(i-w-1)===n.charAt(o-E-1);)w++,E++
if(c[b]=w,w>i)v+=2
else if(E>o)m+=2
else if(!h&&(y=a+d-M)>=0&&y<u&&-1!==l[y]&&(x=a+(k=l[y])-y,k>=(w=i-w)))return this.diffBisectSplit(e,n,k,x,r)}}return[[t,e],[1,n]]},e.prototype.diffBisectSplit=function(e,t,n,r,i){var o,s,a,u,l,c
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
