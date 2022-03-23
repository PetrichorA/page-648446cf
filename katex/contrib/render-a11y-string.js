!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r(require("katex"));else if("function"==typeof define&&define.amd)define(["katex"],r);else{var a="object"==typeof exports?r(require("katex")):r(e.katex);for(var t in a)("object"==typeof exports?exports:e)[t]=a[t]}}("undefined"!=typeof self?self:this,(function(e){return function(){"use strict";var r={771:function(r){r.exports=e}},a={};function t(e){var o=a[e];if(void 0!==o)return o.exports;var n=a[e]={exports:{}};return r[e](n,n.exports,t),n.exports}t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,{a:r}),r},t.d=function(e,r){for(var a in r)t.o(r,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)};var o,n,s,i,l,c,u,p,d,h,b,m,f,w,g={};return o=t(771),n=t.n(o),s={"(":"left parenthesis",")":"right parenthesis","[":"open bracket","]":"close bracket","\\{":"left brace","\\}":"right brace","\\lvert":"open vertical bar","\\rvert":"close vertical bar","|":"vertical bar","\\uparrow":"up arrow","\\Uparrow":"up arrow","\\downarrow":"down arrow","\\Downarrow":"down arrow","\\updownarrow":"up down arrow","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow","\\langle":"open angle","\\rangle":"close angle","\\lfloor":"open floor","\\rfloor":"close floor","\\int":"integral","\\intop":"integral","\\lim":"limit","\\ln":"natural log","\\log":"log","\\sin":"sine","\\cos":"cosine","\\tan":"tangent","\\cot":"cotangent","\\sum":"sum","/":"slash",",":"comma",".":"point","-":"negative","+":"plus","~":"tilde",":":"colon","?":"question mark","'":"apostrophe","\\%":"percent"," ":"space","\\ ":"space","\\$":"dollar sign","\\angle":"angle","\\degree":"degree","\\circ":"circle","\\vec":"vector","\\triangle":"triangle","\\pi":"pi","\\prime":"prime","\\infty":"infinity","\\alpha":"alpha","\\beta":"beta","\\gamma":"gamma","\\omega":"omega","\\theta":"theta","\\sigma":"sigma","\\lambda":"lambda","\\tau":"tau","\\Delta":"delta","\\delta":"delta","\\mu":"mu","\\rho":"rho","\\nabla":"del","\\ell":"ell","\\ldots":"dots","\\hat":"hat","\\acute":"acute"},i={prime:"prime",degree:"degrees",circle:"degrees",2:"squared",3:"cubed"},l={"|":"open vertical bar",".":""},c={"|":"close vertical bar",".":""},u={"+":"plus","-":"minus","\\pm":"plus minus","\\cdot":"dot","*":"times","/":"divided by","\\times":"times","\\div":"divided by","\\circ":"circle","\\bullet":"bullet"},p={"=":"equals","\\approx":"approximately equals","≠":"does not equal","\\geq":"is greater than or equal to","\\ge":"is greater than or equal to","\\leq":"is less than or equal to","\\le":"is less than or equal to",">":"is greater than","<":"is less than","\\leftarrow":"left arrow","\\Leftarrow":"left arrow","\\rightarrow":"right arrow","\\Rightarrow":"right arrow",":":"colon"},d={"\\underleftarrow":"left arrow","\\underrightarrow":"right arrow","\\underleftrightarrow":"left-right arrow","\\undergroup":"group","\\underlinesegment":"line segment","\\utilde":"tilde"},h=function(e,r,a){var t;e&&(/^\d+$/.test(t="open"===r?e in l?l[e]:s[e]||e:"close"===r?e in c?c[e]:s[e]||e:"bin"===r?u[e]||e:"rel"===r?p[e]||e:s[e]||e)&&a.length>0&&/^\d+$/.test(a[a.length-1])?a[a.length-1]+=t:t&&a.push(t))},b=function(e,r){var a=[];e.push(a),r(a)},m=function(e,r,a){switch(e.type){case"accent":b(r,(function(r){f(e.base,r,a),r.push("with"),h(e.label,"normal",r),r.push("on top")}));break;case"accentUnder":b(r,(function(r){f(e.base,r,a),r.push("with"),h(d[e.label],"normal",r),r.push("underneath")}));break;case"accent-token":case"color-token":case"kern":case"leftright-right":case"size":case"infix":case"internal":break;case"atom":var t=e.text;switch(e.family){case"bin":h(t,"bin",r);break;case"close":h(t,"close",r);break;case"inner":h(e.text,"inner",r);break;case"open":h(t,"open",r);break;case"punct":h(t,"punct",r);break;case"rel":h(t,"rel",r);break;default:throw e.family,new Error('"'+e.family+'" is not a valid atom type')}break;case"color":var o=e.color.replace(/katex-/,"");b(r,(function(r){r.push("start color "+o),f(e.body,r,a),r.push("end color "+o)}));break;case"delimsizing":e.delim&&"."!==e.delim&&h(e.delim,"normal",r);break;case"genfrac":b(r,(function(r){var t=e.leftDelim,o=e.rightDelim;e.hasBarLine?(r.push("start fraction"),t&&h(t,"open",r),f(e.numer,r,a),r.push("divided by"),f(e.denom,r,a),o&&h(o,"close",r),r.push("end fraction")):(r.push("start binomial"),t&&h(t,"open",r),f(e.numer,r,a),r.push("over"),f(e.denom,r,a),o&&h(o,"close",r),r.push("end binomial"))}));break;case"hbox":case"lap":case"ordgroup":case"raisebox":case"sizing":case"styling":case"smash":case"vcenter":case"operatorname":case"font":case"html":f(e.body,r,a);break;case"leftright":b(r,(function(r){h(e.left,"open",r),f(e.body,r,a),h(e.right,"close",r)}));break;case"mathord":h(e.text,"normal",r);break;case"op":var n=e.body,s=e.name;n?f(n,r,a):s&&h(s,"normal",r);break;case"op-token":case"textord":h(e.text,a,r);break;case"overline":b(r,(function(r){r.push("start overline"),f(e.body,r,a),r.push("end overline")}));break;case"phantom":r.push("empty space");break;case"rule":r.push("rectangle");break;case"spacing":r.push("space");break;case"sqrt":b(r,(function(r){var t=e.body,o=e.index;if(o)return"3"===w(f(o,[],a)).join(",")?(r.push("cube root of"),f(t,r,a),void r.push("end cube root")):(r.push("root"),r.push("start index"),f(o,r,a),void r.push("end index"));r.push("square root of"),f(t,r,a),r.push("end square root")}));break;case"supsub":var l=e.base,c=e.sub,u=e.sup,p=!1;if(l&&(f(l,r,a),p="op"===l.type&&"\\log"===l.name),c){var m=p?"base":"subscript";b(r,(function(e){e.push("start "+m),f(c,e,a),e.push("end "+m)}))}u&&b(r,(function(e){var r=w(f(u,[],a)).join(",");r in i?e.push(i[r]):(e.push("start superscript"),f(u,e,a),e.push("end superscript"))}));break;case"text":if("\\textbf"===e.font){b(r,(function(r){r.push("start bold text"),f(e.body,r,a),r.push("end bold text")}));break}b(r,(function(r){r.push("start text"),f(e.body,r,a),r.push("end text")}));break;case"enclose":if(/cancel/.test(e.label)){b(r,(function(r){r.push("start cancel"),f(e.body,r,a),r.push("end cancel")}));break}if(/box/.test(e.label)){b(r,(function(r){r.push("start box"),f(e.body,r,a),r.push("end box")}));break}if(/sout/.test(e.label)){b(r,(function(r){r.push("start strikeout"),f(e.body,r,a),r.push("end strikeout")}));break}if(/phase/.test(e.label)){b(r,(function(r){r.push("start phase angle"),f(e.body,r,a),r.push("end phase angle")}));break}throw new Error("KaTeX-a11y: enclose node with "+e.label+" not supported yet");case"vphantom":throw new Error("KaTeX-a11y: vphantom not implemented yet");case"hphantom":throw new Error("KaTeX-a11y: hphantom not implemented yet");case"array":throw new Error("KaTeX-a11y: array not implemented yet");case"raw":throw new Error("KaTeX-a11y: raw not implemented yet");case"url":throw new Error("KaTeX-a11y: url not implemented yet");case"tag":throw new Error("KaTeX-a11y: tag not implemented yet");case"verb":h("start verbatim","normal",r),h(e.body,"normal",r),h("end verbatim","normal",r);break;case"environment":throw new Error("KaTeX-a11y: environment not implemented yet");case"horizBrace":h("start "+e.label.slice(1),"normal",r),f(e.base,r,a),h("end "+e.label.slice(1),"normal",r);break;case"includegraphics":throw new Error("KaTeX-a11y: includegraphics not implemented yet");case"href":throw new Error("KaTeX-a11y: href not implemented yet");case"cr":throw new Error("KaTeX-a11y: cr not implemented yet");case"underline":b(r,(function(r){r.push("start underline"),f(e.body,r,a),r.push("end underline")}));break;case"xArrow":throw new Error("KaTeX-a11y: xArrow not implemented yet");case"cdlabel":throw new Error("KaTeX-a11y: cdlabel not implemented yet");case"cdlabelparent":throw new Error("KaTeX-a11y: cdlabelparent not implemented yet");case"mclass":var g=e.mclass.slice(1);f(e.body,r,g);break;case"mathchoice":f(e.text,r,a);break;case"htmlmathml":f(e.mathml,r,a);break;case"middle":h(e.delim,a,r);break;default:throw e.type,new Error("KaTeX a11y un-recognized type: "+e.type)}},f=function e(r,a,t){if(void 0===a&&(a=[]),r instanceof Array)for(var o=0;o<r.length;o++)e(r[o],a,t);else m(r,a,t);return a},w=function e(r){var a=[];return r.forEach((function(r){r instanceof Array?a=a.concat(e(r)):a.push(r)})),a},g.default=function(e,r){var a=n().__parse(e,r),t=f(a,[],"normal");return w(t).join(", ")},g.default}()}));