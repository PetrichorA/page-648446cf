!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e(require("katex"));else if("function"==typeof define&&define.amd)define(["katex"],e);else{var n="object"==typeof exports?e(require("katex")):e(t.katex);for(var o in n)("object"==typeof exports?exports:t)[o]=n[o]}}("undefined"!=typeof self?self:this,(function(t){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(e,n){e.exports=t},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o);a.a.__defineMacro("\\ce",(function(t){return r(t.consumeArgs(1)[0],"ce")})),a.a.__defineMacro("\\pu",(function(t){return r(t.consumeArgs(1)[0],"pu")})),a.a.__defineMacro("\\tripledash","{\\vphantom{-}\\raisebox{2.56mu}{$\\mkern2mu\\tiny\\text{-}\\mkern1mu\\text{-}\\mkern1mu\\text{-}\\mkern2mu$}}");var r=function(t,e){for(var n="",o=t[t.length-1].loc.start,a=t.length-1;a>=0;a--)t[a].loc.start>o&&(n+=" ",o=t[a].loc.start),n+=t[a].text,o+=t[a].text.length;return c.go(i.go(n,e))},i={go:function(t,e){if(!t)return[];void 0===e&&(e="ce");var n,o="0",a={parenthesisLevel:0};t=(t=(t=t.replace(/\n/g," ")).replace(/[\u2212\u2013\u2014\u2010]/g,"-")).replace(/[\u2026]/g,"...");for(var r=10,c=[];;){n!==t?(r=10,n=t):r--;var u=i.stateMachines[e],p=u.transitions[o]||u.transitions["*"];t:for(var s=0;s<p.length;s++){var _=i.patterns.match_(p[s].pattern,t);if(_){for(var d=p[s].task,m=0;m<d.action_.length;m++){var l;if(u.actions[d.action_[m].type_])l=u.actions[d.action_[m].type_](a,_.match_,d.action_[m].option);else{if(!i.actions[d.action_[m].type_])throw["MhchemBugA","mhchem bug A. Please report. ("+d.action_[m].type_+")"];l=i.actions[d.action_[m].type_](a,_.match_,d.action_[m].option)}i.concatArray(c,l)}if(o=d.nextState||o,!(t.length>0))return c;if(d.revisit||(t=_.remainder),!d.toContinue)break t}}if(r<=0)throw["MhchemBugU","mhchem bug U. Please report."]}},concatArray:function(t,e){if(e)if(Array.isArray(e))for(var n=0;n<e.length;n++)t.push(e[n]);else t.push(e)},patterns:{patterns:{empty:/^$/,else:/^./,else2:/^./,space:/^\s/,"space A":/^\s(?=[A-Z\\$])/,space$:/^\s$/,"a-z":/^[a-z]/,x:/^x/,x$:/^x$/,i$:/^i$/,letters:/^(?:[a-zA-Z\u03B1-\u03C9\u0391-\u03A9?@]|(?:\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))))+/,"\\greek":/^\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega|Gamma|Delta|Theta|Lambda|Xi|Pi|Sigma|Upsilon|Phi|Psi|Omega)(?:\s+|\{\}|(?![a-zA-Z]))/,"one lowercase latin letter $":/^(?:([a-z])(?:$|[^a-zA-Z]))$/,"$one lowercase latin letter$ $":/^\$(?:([a-z])(?:$|[^a-zA-Z]))\$$/,"one lowercase greek letter $":/^(?:\$?[\u03B1-\u03C9]\$?|\$?\\(?:alpha|beta|gamma|delta|epsilon|zeta|eta|theta|iota|kappa|lambda|mu|nu|xi|omicron|pi|rho|sigma|tau|upsilon|phi|chi|psi|omega)\s*\$?)(?:\s+|\{\}|(?![a-zA-Z]))$/,digits:/^[0-9]+/,"-9.,9":/^[+\-]?(?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))/,"-9.,9 no missing 0":/^[+\-]?[0-9]+(?:[.,][0-9]+)?/,"(-)(9.,9)(e)(99)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))?(\((?:[0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+))\))?(?:([eE]|\s*(\*|x|\\times|\u00D7)\s*10\^)([+\-]?[0-9]+|\{[+\-]?[0-9]+\}))?/);return e&&e[0]?{match_:e.splice(1),remainder:t.substr(e[0].length)}:null},"(-)(9)^(-9)":function(t){var e=t.match(/^(\+\-|\+\/\-|\+|\-|\\pm\s?)?([0-9]+(?:[,.][0-9]+)?|[0-9]*(?:\.[0-9]+)?)\^([+\-]?[0-9]+|\{[+\-]?[0-9]+\})/);return e&&e[0]?{match_:e.splice(1),remainder:t.substr(e[0].length)}:null},"state of aggregation $":function(t){var e=i.patterns.findObserveGroups(t,"",/^\([a-z]{1,3}(?=[\),])/,")","");if(e&&e.remainder.match(/^($|[\s,;\)\]\}])/))return e;var n=t.match(/^(?:\((?:\\ca\s?)?\$[amothc]\$\))/);return n?{match_:n[0],remainder:t.substr(n[0].length)}:null},"_{(state of aggregation)}$":/^_\{(\([a-z]{1,3}\))\}/,"{[(":/^(?:\\\{|\[|\()/,")]}":/^(?:\)|\]|\\\})/,", ":/^[,;]\s*/,",":/^[,;]/,".":/^[.]/,". ":/^([.\u22C5\u00B7\u2022])\s*/,"...":/^\.\.\.(?=$|[^.])/,"* ":/^([*])\s*/,"^{(...)}":function(t){return i.patterns.findObserveGroups(t,"^{","","","}")},"^($...$)":function(t){return i.patterns.findObserveGroups(t,"^","$","$","")},"^a":/^\^([0-9]+|[^\\_])/,"^\\x{}{}":function(t){return i.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"^\\x{}":function(t){return i.patterns.findObserveGroups(t,"^",/^\\[a-zA-Z]+\{/,"}","")},"^\\x":/^\^(\\[a-zA-Z]+)\s*/,"^(-1)":/^\^(-?\d+)/,"'":/^'/,"_{(...)}":function(t){return i.patterns.findObserveGroups(t,"_{","","","}")},"_($...$)":function(t){return i.patterns.findObserveGroups(t,"_","$","$","")},_9:/^_([+\-]?[0-9]+|[^\\])/,"_\\x{}{}":function(t){return i.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"_\\x{}":function(t){return i.patterns.findObserveGroups(t,"_",/^\\[a-zA-Z]+\{/,"}","")},"_\\x":/^_(\\[a-zA-Z]+)\s*/,"^_":/^(?:\^(?=_)|\_(?=\^)|[\^_]$)/,"{}":/^\{\}/,"{...}":function(t){return i.patterns.findObserveGroups(t,"","{","}","")},"{(...)}":function(t){return i.patterns.findObserveGroups(t,"{","","","}")},"$...$":function(t){return i.patterns.findObserveGroups(t,"","$","$","")},"${(...)}$":function(t){return i.patterns.findObserveGroups(t,"${","","","}$")},"$(...)$":function(t){return i.patterns.findObserveGroups(t,"$","","","$")},"=<>":/^[=<>]/,"#":/^[#\u2261]/,"+":/^\+/,"-$":/^-(?=[\s_},;\]/]|$|\([a-z]+\))/,"-9":/^-(?=[0-9])/,"- orbital overlap":/^-(?=(?:[spd]|sp)(?:$|[\s,;\)\]\}]))/,"-":/^-/,"pm-operator":/^(?:\\pm|\$\\pm\$|\+-|\+\/-)/,operator:/^(?:\+|(?:[\-=<>]|<<|>>|\\approx|\$\\approx\$)(?=\s|$|-?[0-9]))/,arrowUpDown:/^(?:v|\(v\)|\^|\(\^\))(?=$|[\s,;\)\]\}])/,"\\bond{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\bond{","","","}")},"->":/^(?:<->|<-->|->|<-|<=>>|<<=>|<=>|[\u2192\u27F6\u21CC])/,CMT:/^[CMT](?=\[)/,"[(...)]":function(t){return i.patterns.findObserveGroups(t,"[","","","]")},"1st-level escape":/^(&|\\\\|\\hline)\s*/,"\\,":/^(?:\\[,\ ;:])/,"\\x{}{}":function(t){return i.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","","","{","}","",!0)},"\\x{}":function(t){return i.patterns.findObserveGroups(t,"",/^\\[a-zA-Z]+\{/,"}","")},"\\ca":/^\\ca(?:\s+|(?![a-zA-Z]))/,"\\x":/^(?:\\[a-zA-Z]+\s*|\\[_&{}%])/,orbital:/^(?:[0-9]{1,2}[spdfgh]|[0-9]{0,2}sp)(?=$|[^a-zA-Z])/,others:/^[\/~|]/,"\\frac{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\frac{","","","}","{","","","}")},"\\overset{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\overset{","","","}","{","","","}")},"\\underset{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\underset{","","","}","{","","","}")},"\\underbrace{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\underbrace{","","","}_","{","","","}")},"\\color{(...)}0":function(t){return i.patterns.findObserveGroups(t,"\\color{","","","}")},"\\color{(...)}{(...)}1":function(t){return i.patterns.findObserveGroups(t,"\\color{","","","}","{","","","}")},"\\color(...){(...)}2":function(t){return i.patterns.findObserveGroups(t,"\\color","\\","",/^(?=\{)/,"{","","","}")},"\\ce{(...)}":function(t){return i.patterns.findObserveGroups(t,"\\ce{","","","}")},oxidation$:/^(?:[+-][IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"d-oxidation$":/^(?:[+-]?\s?[IVX]+|\\pm\s*0|\$\\pm\$\s*0)$/,"roman numeral":/^[IVX]+/,"1/2$":/^[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+(?:\$[a-z]\$|[a-z])?$/,amount:function(t){var e;if(e=t.match(/^(?:(?:(?:\([+\-]?[0-9]+\/[0-9]+\)|[+\-]?(?:[0-9]+|\$[a-z]\$|[a-z])\/[0-9]+|[+\-]?[0-9]+[.,][0-9]+|[+\-]?\.[0-9]+|[+\-]?[0-9]+)(?:[a-z](?=\s*[A-Z]))?)|[+\-]?[a-z](?=\s*[A-Z])|\+(?!\s))/))return{match_:e[0],remainder:t.substr(e[0].length)};var n=i.patterns.findObserveGroups(t,"","$","$","");return n&&(e=n.match_.match(/^\$(?:\(?[+\-]?(?:[0-9]*[a-z]?[+\-])?[0-9]*[a-z](?:[+\-][0-9]*[a-z]?)?\)?|\+|-)\$$/))?{match_:e[0],remainder:t.substr(e[0].length)}:null},amount2:function(t){return this.amount(t)},"(KV letters),":/^(?:[A-Z][a-z]{0,2}|i)(?=,)/,formula$:function(t){if(t.match(/^\([a-z]+\)$/))return null;var e=t.match(/^(?:[a-z]|(?:[0-9\ \+\-\,\.\(\)]+[a-z])+[0-9\ \+\-\,\.\(\)]*|(?:[a-z][0-9\ \+\-\,\.\(\)]+)+[a-z]?)$/);return e?{match_:e[0],remainder:t.substr(e[0].length)}:null},uprightEntities:/^(?:pH|pOH|pC|pK|iPr|iBu)(?=$|[^a-zA-Z])/,"/":/^\s*(\/)\s*/,"//":/^\s*(\/\/)\s*/,"*":/^\s*[*.]\s*/},findObserveGroups:function(t,e,n,o,a,r,i,c,u,p){var s=function(t,e){if("string"==typeof e)return 0!==t.indexOf(e)?null:e;var n=t.match(e);return n?n[0]:null},_=s(t,e);if(null===_)return null;if(t=t.substr(_.length),null===(_=s(t,n)))return null;var d=function(t,e,n){for(var o=0;e<t.length;){var a=t.charAt(e),r=s(t.substr(e),n);if(null!==r&&0===o)return{endMatchBegin:e,endMatchEnd:e+r.length};if("{"===a)o++;else if("}"===a){if(0===o)throw["ExtraCloseMissingOpen","Extra close brace or missing open brace"];o--}e++}return null}(t,_.length,o||a);if(null===d)return null;var m=t.substring(0,o?d.endMatchEnd:d.endMatchBegin);if(r||i){var l=this.findObserveGroups(t.substr(d.endMatchEnd),r,i,c,u);if(null===l)return null;var f=[m,l.match_];return{match_:p?f.join(""):f,remainder:l.remainder}}return{match_:m,remainder:t.substr(d.endMatchEnd)}},match_:function(t,e){var n=i.patterns.patterns[t];if(void 0===n)throw["MhchemBugP","mhchem bug P. Please report. ("+t+")"];if("function"==typeof n)return i.patterns.patterns[t](e);var o=e.match(n);return o?{match_:o[2]?[o[1],o[2]]:o[1]?o[1]:o[0],remainder:e.substr(o[0].length)}:null}},actions:{"a=":function(t,e){t.a=(t.a||"")+e},"b=":function(t,e){t.b=(t.b||"")+e},"p=":function(t,e){t.p=(t.p||"")+e},"o=":function(t,e){t.o=(t.o||"")+e},"q=":function(t,e){t.q=(t.q||"")+e},"d=":function(t,e){t.d=(t.d||"")+e},"rm=":function(t,e){t.rm=(t.rm||"")+e},"text=":function(t,e){t.text_=(t.text_||"")+e},insert:function(t,e,n){return{type_:n}},"insert+p1":function(t,e,n){return{type_:n,p1:e}},"insert+p1+p2":function(t,e,n){return{type_:n,p1:e[0],p2:e[1]}},copy:function(t,e){return e},rm:function(t,e){return{type_:"rm",p1:e||""}},text:function(t,e){return i.go(e,"text")},"{text}":function(t,e){var n=["{"];return i.concatArray(n,i.go(e,"text")),n.push("}"),n},"tex-math":function(t,e){return i.go(e,"tex-math")},"tex-math tight":function(t,e){return i.go(e,"tex-math tight")},bond:function(t,e,n){return{type_:"bond",kind_:n||e}},"color0-output":function(t,e){return{type_:"color0",color:e[0]}},ce:function(t,e){return i.go(e)},"1/2":function(t,e){var n=[];e.match(/^[+\-]/)&&(n.push(e.substr(0,1)),e=e.substr(1));var o=e.match(/^([0-9]+|\$[a-z]\$|[a-z])\/([0-9]+)(\$[a-z]\$|[a-z])?$/);return o[1]=o[1].replace(/\$/g,""),n.push({type_:"frac",p1:o[1],p2:o[2]}),o[3]&&(o[3]=o[3].replace(/\$/g,""),n.push({type_:"tex-math",p1:o[3]})),n},"9,9":function(t,e){return i.go(e,"9,9")}},createTransitions:function(t){var e,n,o,a,r={};for(e in t)for(n in t[e])for(o=n.split("|"),t[e][n].stateArray=o,a=0;a<o.length;a++)r[o[a]]=[];for(e in t)for(n in t[e])for(o=t[e][n].stateArray||[],a=0;a<o.length;a++){var i=t[e][n];if(i.action_){i.action_=[].concat(i.action_);for(var c=0;c<i.action_.length;c++)"string"==typeof i.action_[c]&&(i.action_[c]={type_:i.action_[c]})}else i.action_=[];for(var u=e.split("|"),p=0;p<u.length;p++)if("*"===o[a])for(var s in r)r[s].push({pattern:u[p],task:i});else r[o[a]].push({pattern:u[p],task:i})}return r},stateMachines:{}};i.stateMachines={ce:{transitions:i.createTransitions({empty:{"*":{action_:"output"}},else:{"0|1|2":{action_:"beginsWithBond=false",revisit:!0,toContinue:!0}},oxidation$:{0:{action_:"oxidation-output"}},CMT:{r:{action_:"rdt=",nextState:"rt"},rd:{action_:"rqt=",nextState:"rdt"}},arrowUpDown:{"0|1|2|as":{action_:["sb=false","output","operator"],nextState:"1"}},uprightEntities:{"0|1|2":{action_:["o=","output"],nextState:"1"}},orbital:{"0|1|2|3":{action_:"o=",nextState:"o"}},"->":{"0|1|2|3":{action_:"r=",nextState:"r"},"a|as":{action_:["output","r="],nextState:"r"},"*":{action_:["output","r="],nextState:"r"}},"+":{o:{action_:"d= kv",nextState:"d"},"d|D":{action_:"d=",nextState:"d"},q:{action_:"d=",nextState:"qd"},"qd|qD":{action_:"d=",nextState:"qd"},dq:{action_:["output","d="],nextState:"d"},3:{action_:["sb=false","output","operator"],nextState:"0"}},amount:{"0|2":{action_:"a=",nextState:"a"}},"pm-operator":{"0|1|2|a|as":{action_:["sb=false","output",{type_:"operator",option:"\\pm"}],nextState:"0"}},operator:{"0|1|2|a|as":{action_:["sb=false","output","operator"],nextState:"0"}},"-$":{"o|q":{action_:["charge or bond","output"],nextState:"qd"},d:{action_:"d=",nextState:"d"},D:{action_:["output",{type_:"bond",option:"-"}],nextState:"3"},q:{action_:"d=",nextState:"qd"},qd:{action_:"d=",nextState:"qd"},"qD|dq":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},"-9":{"3|o":{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"3"}},"- orbital overlap":{o:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},d:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"}},"-":{"0|1|2":{action_:[{type_:"output",option:1},"beginsWithBond=true",{type_:"bond",option:"-"}],nextState:"3"},3:{action_:{type_:"bond",option:"-"}},a:{action_:["output",{type_:"insert",option:"hyphen"}],nextState:"2"},as:{action_:[{type_:"output",option:2},{type_:"bond",option:"-"}],nextState:"3"},b:{action_:"b="},o:{action_:{type_:"- after o/d",option:!1},nextState:"2"},q:{action_:{type_:"- after o/d",option:!1},nextState:"2"},"d|qd|dq":{action_:{type_:"- after o/d",option:!0},nextState:"2"},"D|qD|p":{action_:["output",{type_:"bond",option:"-"}],nextState:"3"}},amount2:{"1|3":{action_:"a=",nextState:"a"}},letters:{"0|1|2|3|a|as|b|p|bp|o":{action_:"o=",nextState:"o"},"q|dq":{action_:["output","o="],nextState:"o"},"d|D|qd|qD":{action_:"o after d",nextState:"o"}},digits:{o:{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},q:{action_:["output","o="],nextState:"o"},a:{action_:"o=",nextState:"o"}},"space A":{"b|p|bp":{}},space:{a:{nextState:"as"},0:{action_:"sb=false"},"1|2":{action_:"sb=true"},"r|rt|rd|rdt|rdq":{action_:"output",nextState:"0"},"*":{action_:["output","sb=true"],nextState:"1"}},"1st-level escape":{"1|2":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}]},"*":{action_:["output",{type_:"insert+p1",option:"1st-level escape"}],nextState:"0"}},"[(...)]":{"r|rt":{action_:"rd=",nextState:"rd"},"rd|rdt":{action_:"rq=",nextState:"rdq"}},"...":{"o|d|D|dq|qd|qD":{action_:["output",{type_:"bond",option:"..."}],nextState:"3"},"*":{action_:[{type_:"output",option:1},{type_:"insert",option:"ellipsis"}],nextState:"1"}},". |* ":{"*":{action_:["output",{type_:"insert",option:"addition compound"}],nextState:"1"}},"state of aggregation $":{"*":{action_:["output","state of aggregation"],nextState:"1"}},"{[(":{"a|as|o":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"0|1|2|3":{action_:["o=","output","parenthesisLevel++"],nextState:"2"},"*":{action_:["output","o=","output","parenthesisLevel++"],nextState:"2"}},")]}":{"0|1|2|3|b|p|bp|o":{action_:["o=","parenthesisLevel--"],nextState:"o"},"a|as|d|D|q|qd|qD|dq":{action_:["output","o=","parenthesisLevel--"],nextState:"o"}},", ":{"*":{action_:["output","comma"],nextState:"0"}},"^_":{"*":{}},"^{(...)}|^($...$)":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"D"},q:{action_:"d=",nextState:"qD"},"d|D|qd|qD|dq":{action_:["output","d="],nextState:"D"}},"^a|^\\x{}{}|^\\x{}|^\\x|'":{"0|1|2|as":{action_:"b=",nextState:"b"},p:{action_:"b=",nextState:"bp"},"3|o":{action_:"d= kv",nextState:"d"},q:{action_:"d=",nextState:"qd"},"d|qd|D|qD":{action_:"d="},dq:{action_:["output","d="],nextState:"d"}},"_{(state of aggregation)}$":{"d|D|q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"_{(...)}|_($...$)|_9|_\\x{}{}|_\\x{}|_\\x":{"0|1|2|as":{action_:"p=",nextState:"p"},b:{action_:"p=",nextState:"bp"},"3|o":{action_:"q=",nextState:"q"},"d|D":{action_:"q=",nextState:"dq"},"q|qd|qD|dq":{action_:["output","q="],nextState:"q"}},"=<>":{"0|1|2|3|a|as|o|q|d|D|qd|qD|dq":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"#":{"0|1|2|3|a|as|o":{action_:[{type_:"output",option:2},{type_:"bond",option:"#"}],nextState:"3"}},"{}":{"*":{action_:{type_:"output",option:1},nextState:"1"}},"{...}":{"0|1|2|3|a|as|b|p|bp":{action_:"o=",nextState:"o"},"o|d|D|q|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"$...$":{a:{action_:"a="},"0|1|2|3|as|b|p|bp|o":{action_:"o=",nextState:"o"},"as|o":{action_:"o="},"q|d|D|qd|qD|dq":{action_:["output","o="],nextState:"o"}},"\\bond{(...)}":{"*":{action_:[{type_:"output",option:2},"bond"],nextState:"3"}},"\\frac{(...)}":{"*":{action_:[{type_:"output",option:1},"frac-output"],nextState:"3"}},"\\overset{(...)}":{"*":{action_:[{type_:"output",option:2},"overset-output"],nextState:"3"}},"\\underset{(...)}":{"*":{action_:[{type_:"output",option:2},"underset-output"],nextState:"3"}},"\\underbrace{(...)}":{"*":{action_:[{type_:"output",option:2},"underbrace-output"],nextState:"3"}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:[{type_:"output",option:2},"color-output"],nextState:"3"}},"\\color{(...)}0":{"*":{action_:[{type_:"output",option:2},"color0-output"]}},"\\ce{(...)}":{"*":{action_:[{type_:"output",option:2},"ce"],nextState:"3"}},"\\,":{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"1"}},"\\x{}{}|\\x{}|\\x":{"0|1|2|3|a|as|b|p|bp|o|c0":{action_:["o=","output"],nextState:"3"},"*":{action_:["output","o=","output"],nextState:"3"}},others:{"*":{action_:[{type_:"output",option:1},"copy"],nextState:"3"}},else2:{a:{action_:"a to o",nextState:"o",revisit:!0},as:{action_:["output","sb=true"],nextState:"1",revisit:!0},"r|rt|rd|rdt|rdq":{action_:["output"],nextState:"0",revisit:!0},"*":{action_:["output","copy"],nextState:"3"}}}),actions:{"o after d":function(t,e){var n;if((t.d||"").match(/^[0-9]+$/)){var o=t.d;t.d=void 0,n=this.output(t),t.b=o}else n=this.output(t);return i.actions["o="](t,e),n},"d= kv":function(t,e){t.d=e,t.dType="kv"},"charge or bond":function(t,e){if(t.beginsWithBond){var n=[];return i.concatArray(n,this.output(t)),i.concatArray(n,i.actions.bond(t,e,"-")),n}t.d=e},"- after o/d":function(t,e,n){var o=i.patterns.match_("orbital",t.o||""),a=i.patterns.match_("one lowercase greek letter $",t.o||""),r=i.patterns.match_("one lowercase latin letter $",t.o||""),c=i.patterns.match_("$one lowercase latin letter$ $",t.o||""),u="-"===e&&(o&&""===o.remainder||a||r||c);!u||t.a||t.b||t.p||t.d||t.q||o||!r||(t.o="$"+t.o+"$");var p=[];return u?(i.concatArray(p,this.output(t)),p.push({type_:"hyphen"})):(o=i.patterns.match_("digits",t.d||""),n&&o&&""===o.remainder?(i.concatArray(p,i.actions["d="](t,e)),i.concatArray(p,this.output(t))):(i.concatArray(p,this.output(t)),i.concatArray(p,i.actions.bond(t,e,"-")))),p},"a to o":function(t){t.o=t.a,t.a=void 0},"sb=true":function(t){t.sb=!0},"sb=false":function(t){t.sb=!1},"beginsWithBond=true":function(t){t.beginsWithBond=!0},"beginsWithBond=false":function(t){t.beginsWithBond=!1},"parenthesisLevel++":function(t){t.parenthesisLevel++},"parenthesisLevel--":function(t){t.parenthesisLevel--},"state of aggregation":function(t,e){return{type_:"state of aggregation",p1:i.go(e,"o")}},comma:function(t,e){var n=e.replace(/\s*$/,"");return n!==e&&0===t.parenthesisLevel?{type_:"comma enumeration L",p1:n}:{type_:"comma enumeration M",p1:n}},output:function(t,e,n){var o,a,r;for(var c in t.r?(a="M"===t.rdt?i.go(t.rd,"tex-math"):"T"===t.rdt?[{type_:"text",p1:t.rd||""}]:i.go(t.rd),r="M"===t.rqt?i.go(t.rq,"tex-math"):"T"===t.rqt?[{type_:"text",p1:t.rq||""}]:i.go(t.rq),o={type_:"arrow",r:t.r,rd:a,rq:r}):(o=[],(t.a||t.b||t.p||t.o||t.q||t.d||n)&&(t.sb&&o.push({type_:"entitySkip"}),t.o||t.q||t.d||t.b||t.p||2===n?t.o||t.q||t.d||!t.b&&!t.p?t.o&&"kv"===t.dType&&i.patterns.match_("d-oxidation$",t.d||"")?t.dType="oxidation":t.o&&"kv"===t.dType&&!t.q&&(t.dType=void 0):(t.o=t.a,t.d=t.b,t.q=t.p,t.a=t.b=t.p=void 0):(t.o=t.a,t.a=void 0),o.push({type_:"chemfive",a:i.go(t.a,"a"),b:i.go(t.b,"bd"),p:i.go(t.p,"pq"),o:i.go(t.o,"o"),q:i.go(t.q,"pq"),d:i.go(t.d,"oxidation"===t.dType?"oxidation":"bd"),dType:t.dType}))),t)"parenthesisLevel"!==c&&"beginsWithBond"!==c&&delete t[c];return o},"oxidation-output":function(t,e){var n=["{"];return i.concatArray(n,i.go(e,"oxidation")),n.push("}"),n},"frac-output":function(t,e){return{type_:"frac-ce",p1:i.go(e[0]),p2:i.go(e[1])}},"overset-output":function(t,e){return{type_:"overset",p1:i.go(e[0]),p2:i.go(e[1])}},"underset-output":function(t,e){return{type_:"underset",p1:i.go(e[0]),p2:i.go(e[1])}},"underbrace-output":function(t,e){return{type_:"underbrace",p1:i.go(e[0]),p2:i.go(e[1])}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:i.go(e[1])}},"r=":function(t,e){t.r=e},"rdt=":function(t,e){t.rdt=e},"rd=":function(t,e){t.rd=e},"rqt=":function(t,e){t.rqt=e},"rq=":function(t,e){t.rq=e},operator:function(t,e,n){return{type_:"operator",kind_:n||e}}}},a:{transitions:i.createTransitions({empty:{"*":{}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"1",revisit:!0}},"$(...)$":{"*":{action_:"tex-math tight",nextState:"1"}},",":{"*":{action_:{type_:"insert",option:"commaDecimal"}}},else2:{"*":{action_:"copy"}}}),actions:{}},o:{transitions:i.createTransitions({empty:{"*":{}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"1",revisit:!0}},letters:{"*":{action_:"rm"}},"\\ca":{"*":{action_:{type_:"insert",option:"circa"}}},"\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"{text}"}},else2:{"*":{action_:"copy"}}}),actions:{}},text:{transitions:i.createTransitions({empty:{"*":{action_:"output"}},"{...}":{"*":{action_:"text="}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"\\greek":{"*":{action_:["output","rm"]}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:["output","copy"]}},else:{"*":{action_:"text="}}}),actions:{output:function(t){if(t.text_){var e={type_:"text",p1:t.text_};for(var n in t)delete t[n];return e}}}},pq:{transitions:i.createTransitions({empty:{"*":{}},"state of aggregation $":{"*":{action_:"state of aggregation"}},i$:{0:{nextState:"!f",revisit:!0}},"(KV letters),":{0:{action_:"rm",nextState:"0"}},formula$:{0:{nextState:"f",revisit:!0}},"1/2$":{0:{action_:"1/2"}},else:{0:{nextState:"!f",revisit:!0}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"a-z":{f:{action_:"tex-math"}},letters:{"*":{action_:"rm"}},"-9.,9":{"*":{action_:"9,9"}},",":{"*":{action_:{type_:"insert+p1",option:"comma enumeration S"}}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:"color-output"}},"\\color{(...)}0":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"state of aggregation":function(t,e){return{type_:"state of aggregation subscript",p1:i.go(e,"o")}},"color-output":function(t,e){return{type_:"color",color1:e[0],color2:i.go(e[1],"pq")}}}},bd:{transitions:i.createTransitions({empty:{"*":{}},x$:{0:{nextState:"!f",revisit:!0}},formula$:{0:{nextState:"f",revisit:!0}},else:{0:{nextState:"!f",revisit:!0}},"-9.,9 no missing 0":{"*":{action_:"9,9"}},".":{"*":{action_:{type_:"insert",option:"electron dot"}}},"a-z":{f:{action_:"tex-math"}},x:{"*":{action_:{type_:"insert",option:"KV x"}}},letters:{"*":{action_:"rm"}},"'":{"*":{action_:{type_:"insert",option:"prime"}}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},"{(...)}":{"*":{action_:"text"}},"\\color{(...)}{(...)}1|\\color(...){(...)}2":{"*":{action_:"color-output"}},"\\color{(...)}0":{"*":{action_:"color0-output"}},"\\ce{(...)}":{"*":{action_:"ce"}},"\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"copy"}},else2:{"*":{action_:"copy"}}}),actions:{"color-output":function(t,e){return{type_:"color",color1:e[0],color2:i.go(e[1],"bd")}}}},oxidation:{transitions:i.createTransitions({empty:{"*":{}},"roman numeral":{"*":{action_:"roman-numeral"}},"${(...)}$|$(...)$":{"*":{action_:"tex-math"}},else:{"*":{action_:"copy"}}}),actions:{"roman-numeral":function(t,e){return{type_:"roman numeral",p1:e||""}}}},"tex-math":{transitions:i.createTransitions({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},else:{"*":{action_:"o="}}}),actions:{output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var n in t)delete t[n];return e}}}},"tex-math tight":{transitions:i.createTransitions({empty:{"*":{action_:"output"}},"\\ce{(...)}":{"*":{action_:["output","ce"]}},"{...}|\\,|\\x{}{}|\\x{}|\\x":{"*":{action_:"o="}},"-|+":{"*":{action_:"tight operator"}},else:{"*":{action_:"o="}}}),actions:{"tight operator":function(t,e){t.o=(t.o||"")+"{"+e+"}"},output:function(t){if(t.o){var e={type_:"tex-math",p1:t.o};for(var n in t)delete t[n];return e}}}},"9,9":{transitions:i.createTransitions({empty:{"*":{}},",":{"*":{action_:"comma"}},else:{"*":{action_:"copy"}}}),actions:{comma:function(){return{type_:"commaDecimal"}}}},pu:{transitions:i.createTransitions({empty:{"*":{action_:"output"}},space$:{"*":{action_:["output","space"]}},"{[(|)]}":{"0|a":{action_:"copy"}},"(-)(9)^(-9)":{0:{action_:"number^",nextState:"a"}},"(-)(9.,9)(e)(99)":{0:{action_:"enumber",nextState:"a"}},space:{"0|a":{}},"pm-operator":{"0|a":{action_:{type_:"operator",option:"\\pm"},nextState:"0"}},operator:{"0|a":{action_:"copy",nextState:"0"}},"//":{d:{action_:"o=",nextState:"/"}},"/":{d:{action_:"o=",nextState:"/"}},"{...}|else":{"0|d":{action_:"d=",nextState:"d"},a:{action_:["space","d="],nextState:"d"},"/|q":{action_:"q=",nextState:"q"}}}),actions:{enumber:function(t,e){var n=[];return"+-"===e[0]||"+/-"===e[0]?n.push("\\pm "):e[0]&&n.push(e[0]),e[1]&&(i.concatArray(n,i.go(e[1],"pu-9,9")),e[2]&&(e[2].match(/[,.]/)?i.concatArray(n,i.go(e[2],"pu-9,9")):n.push(e[2])),e[3]=e[4]||e[3],e[3]&&(e[3]=e[3].trim(),"e"===e[3]||"*"===e[3].substr(0,1)?n.push({type_:"cdot"}):n.push({type_:"times"}))),e[3]&&n.push("10^{"+e[5]+"}"),n},"number^":function(t,e){var n=[];return"+-"===e[0]||"+/-"===e[0]?n.push("\\pm "):e[0]&&n.push(e[0]),i.concatArray(n,i.go(e[1],"pu-9,9")),n.push("^{"+e[2]+"}"),n},operator:function(t,e,n){return{type_:"operator",kind_:n||e}},space:function(){return{type_:"pu-space-1"}},output:function(t){var e,n=i.patterns.match_("{(...)}",t.d||"");n&&""===n.remainder&&(t.d=n.match_);var o=i.patterns.match_("{(...)}",t.q||"");if(o&&""===o.remainder&&(t.q=o.match_),t.d&&(t.d=t.d.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.d=t.d.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F")),t.q){t.q=t.q.replace(/\u00B0C|\^oC|\^{o}C/g,"{}^{\\circ}C"),t.q=t.q.replace(/\u00B0F|\^oF|\^{o}F/g,"{}^{\\circ}F");var a={d:i.go(t.d,"pu"),q:i.go(t.q,"pu")};"//"===t.o?e={type_:"pu-frac",p1:a.d,p2:a.q}:(e=a.d,a.d.length>1||a.q.length>1?e.push({type_:" / "}):e.push({type_:"/"}),i.concatArray(e,a.q))}else e=i.go(t.d,"pu-2");for(var r in t)delete t[r];return e}}},"pu-2":{transitions:i.createTransitions({empty:{"*":{action_:"output"}},"*":{"*":{action_:["output","cdot"],nextState:"0"}},"\\x":{"*":{action_:"rm="}},space:{"*":{action_:["output","space"],nextState:"0"}},"^{(...)}|^(-1)":{1:{action_:"^(-1)"}},"-9.,9":{0:{action_:"rm=",nextState:"0"},1:{action_:"^(-1)",nextState:"0"}},"{...}|else":{"*":{action_:"rm=",nextState:"1"}}}),actions:{cdot:function(){return{type_:"tight cdot"}},"^(-1)":function(t,e){t.rm+="^{"+e+"}"},space:function(){return{type_:"pu-space-2"}},output:function(t){var e=[];if(t.rm){var n=i.patterns.match_("{(...)}",t.rm||"");e=n&&""===n.remainder?i.go(n.match_,"pu"):{type_:"rm",p1:t.rm}}for(var o in t)delete t[o];return e}}},"pu-9,9":{transitions:i.createTransitions({empty:{0:{action_:"output-0"},o:{action_:"output-o"}},",":{0:{action_:["output-0","comma"],nextState:"o"}},".":{0:{action_:["output-0","copy"],nextState:"o"}},else:{"*":{action_:"text="}}}),actions:{comma:function(){return{type_:"commaDecimal"}},"output-0":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){var n=t.text_.length%3;0===n&&(n=3);for(var o=t.text_.length-3;o>0;o-=3)e.push(t.text_.substr(o,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(0,n)),e.reverse()}else e.push(t.text_);for(var a in t)delete t[a];return e},"output-o":function(t){var e=[];if(t.text_=t.text_||"",t.text_.length>4){for(var n=t.text_.length-3,o=0;o<n;o+=3)e.push(t.text_.substr(o,3)),e.push({type_:"1000 separator"});e.push(t.text_.substr(o))}else e.push(t.text_);for(var a in t)delete t[a];return e}}}};var c={go:function(t,e){if(!t)return"";for(var n="",o=!1,a=0;a<t.length;a++){var r=t[a];"string"==typeof r?n+=r:(n+=c._go2(r),"1st-level escape"===r.type_&&(o=!0))}return e||o||!n||(n="{"+n+"}"),n},_goInner:function(t){return t?c.go(t,!0):t},_go2:function(t){var e;switch(t.type_){case"chemfive":e="";var n={a:c._goInner(t.a),b:c._goInner(t.b),p:c._goInner(t.p),o:c._goInner(t.o),q:c._goInner(t.q),d:c._goInner(t.d)};n.a&&(n.a.match(/^[+\-]/)&&(n.a="{"+n.a+"}"),e+=n.a+"\\,"),(n.b||n.p)&&(e+="{\\vphantom{X}}",e+="^{\\hphantom{"+(n.b||"")+"}}_{\\hphantom{"+(n.p||"")+"}}",e+="{\\vphantom{X}}",e+="^{\\smash[t]{\\vphantom{2}}\\mathllap{"+(n.b||"")+"}}",e+="_{\\vphantom{2}\\mathllap{\\smash[t]{"+(n.p||"")+"}}}"),n.o&&(n.o.match(/^[+\-]/)&&(n.o="{"+n.o+"}"),e+=n.o),"kv"===t.dType?((n.d||n.q)&&(e+="{\\vphantom{X}}"),n.d&&(e+="^{"+n.d+"}"),n.q&&(e+="_{\\smash[t]{"+n.q+"}}")):"oxidation"===t.dType?(n.d&&(e+="{\\vphantom{X}}",e+="^{"+n.d+"}"),n.q&&(e+="{\\vphantom{X}}",e+="_{\\smash[t]{"+n.q+"}}")):(n.q&&(e+="{\\vphantom{X}}",e+="_{\\smash[t]{"+n.q+"}}"),n.d&&(e+="{\\vphantom{X}}",e+="^{"+n.d+"}"));break;case"rm":e="\\mathrm{"+t.p1+"}";break;case"text":t.p1.match(/[\^_]/)?(t.p1=t.p1.replace(" ","~").replace("-","\\text{-}"),e="\\mathrm{"+t.p1+"}"):e="\\text{"+t.p1+"}";break;case"roman numeral":e="\\mathrm{"+t.p1+"}";break;case"state of aggregation":e="\\mskip2mu "+c._goInner(t.p1);break;case"state of aggregation subscript":e="\\mskip1mu "+c._goInner(t.p1);break;case"bond":if(!(e=c._getBond(t.kind_)))throw["MhchemErrorBond","mhchem Error. Unknown bond type ("+t.kind_+")"];break;case"frac":var o="\\frac{"+t.p1+"}{"+t.p2+"}";e="\\mathchoice{\\textstyle"+o+"}{"+o+"}{"+o+"}{"+o+"}";break;case"pu-frac":var a="\\frac{"+c._goInner(t.p1)+"}{"+c._goInner(t.p2)+"}";e="\\mathchoice{\\textstyle"+a+"}{"+a+"}{"+a+"}{"+a+"}";break;case"tex-math":e=t.p1+" ";break;case"frac-ce":e="\\frac{"+c._goInner(t.p1)+"}{"+c._goInner(t.p2)+"}";break;case"overset":e="\\overset{"+c._goInner(t.p1)+"}{"+c._goInner(t.p2)+"}";break;case"underset":e="\\underset{"+c._goInner(t.p1)+"}{"+c._goInner(t.p2)+"}";break;case"underbrace":e="\\underbrace{"+c._goInner(t.p1)+"}_{"+c._goInner(t.p2)+"}";break;case"color":e="{\\color{"+t.color1+"}{"+c._goInner(t.color2)+"}}";break;case"color0":e="\\color{"+t.color+"}";break;case"arrow":var r={rd:c._goInner(t.rd),rq:c._goInner(t.rq)},i="\\x"+c._getArrow(t.r);r.rq&&(i+="[{"+r.rq+"}]"),e=i+=r.rd?"{"+r.rd+"}":"{}";break;case"operator":e=c._getOperator(t.kind_);break;case"1st-level escape":e=t.p1+" ";break;case"space":e=" ";break;case"entitySkip":case"pu-space-1":e="~";break;case"pu-space-2":e="\\mkern3mu ";break;case"1000 separator":e="\\mkern2mu ";break;case"commaDecimal":e="{,}";break;case"comma enumeration L":e="{"+t.p1+"}\\mkern6mu ";break;case"comma enumeration M":e="{"+t.p1+"}\\mkern3mu ";break;case"comma enumeration S":e="{"+t.p1+"}\\mkern1mu ";break;case"hyphen":e="\\text{-}";break;case"addition compound":e="\\,{\\cdot}\\,";break;case"electron dot":e="\\mkern1mu \\bullet\\mkern1mu ";break;case"KV x":e="{\\times}";break;case"prime":e="\\prime ";break;case"cdot":e="\\cdot ";break;case"tight cdot":e="\\mkern1mu{\\cdot}\\mkern1mu ";break;case"times":e="\\times ";break;case"circa":e="{\\sim}";break;case"^":e="uparrow";break;case"v":e="downarrow";break;case"ellipsis":e="\\ldots ";break;case"/":e="/";break;case" / ":e="\\,/\\,";break;default:throw["MhchemBugT","mhchem bug T. Please report."]}return e},_getArrow:function(t){switch(t){case"->":case"→":case"⟶":return"rightarrow";case"<-":return"leftarrow";case"<->":return"leftrightarrow";case"<--\x3e":return"rightleftarrows";case"<=>":case"⇌":return"rightleftharpoons";case"<=>>":return"rightequilibrium";case"<<=>":return"leftequilibrium";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getBond:function(t){switch(t){case"-":case"1":return"{-}";case"=":case"2":return"{=}";case"#":case"3":return"{\\equiv}";case"~":return"{\\tripledash}";case"~-":return"{\\mathrlap{\\raisebox{-.1em}{$-$}}\\raisebox{.1em}{$\\tripledash$}}";case"~=":case"~--":return"{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$\\tripledash$}}-}";case"-~-":return"{\\mathrlap{\\raisebox{-.2em}{$-$}}\\mathrlap{\\raisebox{.2em}{$-$}}\\tripledash}";case"...":return"{{\\cdot}{\\cdot}{\\cdot}}";case"....":return"{{\\cdot}{\\cdot}{\\cdot}{\\cdot}}";case"->":return"{\\rightarrow}";case"<-":return"{\\leftarrow}";case"<":return"{<}";case">":return"{>}";default:throw["MhchemBugT","mhchem bug T. Please report."]}},_getOperator:function(t){switch(t){case"+":return" {}+{} ";case"-":return" {}-{} ";case"=":return" {}={} ";case"<":return" {}<{} ";case">":return" {}>{} ";case"<<":return" {}\\ll{} ";case">>":return" {}\\gg{} ";case"\\pm":return" {}\\pm{} ";case"\\approx":case"$\\approx$":return" {}\\approx{} ";case"v":case"(v)":return" \\downarrow{} ";case"^":case"(^)":return" \\uparrow{} ";default:throw["MhchemBugT","mhchem bug T. Please report."]}}}}]).default}));