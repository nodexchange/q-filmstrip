try{(function(){var _axd={C:{S:{}},IC:{P:{}},P:{},CO:{}};_axd.IC.A=function(){};_axd.IC.C=function(){'use strict';var srcObject={},chain=[];this.getChain=function(){return chain};this.rPIC=function(Interceptor){chain.push(Interceptor)};this.chainCall=function(){if(arguments.length<1)return null;var call=Array.prototype.shift.apply(arguments),args=arguments;for(var i=0;i<chain.length;i++)if(chain[i].hasOwnProperty(call)&&typeof chain[i][call]==='function'){args=chain[i][call].apply(srcObject,args);if(!args)break};return args};this.setSource=function(obj){srcObject=obj};this.getSource=function(){return srcObject}};_axd.CO.E=function(message){'use strict';this.message=message||'';this.name='AdexCoreException'};_axd.P.E=function(message){'use strict';this.message=message||'';this.name='AdexPluginException'};!function(a){"use strict"
function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}
function c(a,b){return a<<b|a>>>32-b}
function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}
function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}
function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}
function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}
function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}
function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}
function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}
function k(a){var b,c=[];for(c[(a.length>>2)-1]=void(0),b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}
function l(a){return j(i(k(a),8*a.length))}
function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void(0),e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}
function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}
function o(a){return unescape(encodeURIComponent(a))}
function p(a){return l(o(a))}
function q(a){return n(p(a))}
function r(a,b){return m(o(a),o(b))}
function s(a,b){return n(r(a,b))}
function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)};a._h=t}(this);if(typeof JSON!=="object")JSON={};(function(){"use strict"
function f(e){return e<10?"0"+e:e}
function quote(e){escapable.lastIndex=0;return escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t==="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}
function str(e,t){var n,r,i,s,o=gap,u,a=t[e];if(a&&typeof a==="object"&&typeof a.toJSON==="function")a=a.toJSON(e);if(typeof rep==="function")a=rep.call(t,e,a);switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent;u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]";gap=o;return i};if(rep&&typeof rep==="object"){s=rep.length;for(n=0;n<s;n+=1)if(typeof rep[n]==="string"){r=rep[n];i=str(r,a);if(i)u.push(quote(r)+(gap?": ":":")+i)}}else for(r in a)if(Object.prototype.hasOwnProperty.call(a,r)){i=str(r,a);if(i)u.push(quote(r)+(gap?": ":":")+i)};i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}";gap=o;return i}};if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()}};var cx,escapable,gap,indent,meta,rep;if(typeof JSON.stringify!=="function"){escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};JSON.stringify=function(e,t,n){var r;gap="";indent="";if(typeof n==="number"){for(r=0;r<n;r+=1)indent+=" "}else if(typeof n==="string")indent=n;rep=t;if(t&&typeof t!=="function"&&(typeof t!=="object"||typeof t.length!=="number"))throw new Error("JSON.stringify");return str("",{"":e})}};if(typeof JSON.parse!=="function"){cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i==="object")for(n in i)if(Object.prototype.hasOwnProperty.call(i,n)){r=walk(i,n);if(r!==undefined){i[n]=r}else delete i[n]};return reviver.call(e,t,i)};var j;text=String(text);cx.lastIndex=0;if(cx.test(text))text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)});if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");return typeof reviver==="function"?walk({"":j},""):j};throw new SyntaxError("JSON.parse")}}})();_axd.Core=function(containerElement,options){'use strict';this.v='V2-001';this.start=(new Date()).getTime();this.metop=(window.self===top);this.trace=null;this.unload=[];this.oldUnload=window.onunload;this.nC=false;this.register_unload=function(f){$this.unload.push(f)};this.onunload=function(event){var e=event||window.event;for(var i=0;i<$this.unload.length;i++)$this.unload[i]();if(e)e.returnValue='';return''};window.onunload=this.onunload;var $this=this,targetElement=containerElement,CRS={},Strategies=[],CurrentStrategy=0,instances={},mainInstance,FoundAdexUser,xhr,communication,pmorigin=[/\Wt4ft\.de$/i,/\Wtheadex\.com$/i,/\Wdomain1\.nix$/i,/\Wdomain2\.nix$/i,/\Wlocalhost$/i],pmmsg={location:function(req,msg){return{location:window.location.href,referrer:document.referrer}},ping:function(req,msg){var i=[];for(var k in instances)if(instances.hasOwnProperty(k))i.push(k);return{pong:1,instances:i}}},_el={};this.getEL=function(){return _el};this.caps=new _axd.CAP();this.setup=function(adexConfig){var ins=$this.gIN(adexConfig);if(adexConfig.Debug)$this.ael('*',function(e){var _e=document.createEvent('Event');_e.initEvent('AdexEvent',true,true);_e._axd=e;document.dispatchEvent(_e)});if(adexConfig.NoCookie)$this.nC=true;if(hI(ins)){return gI(ins)}else{var instance=registerInstance(ins,new _axd.I(this,adexConfig));if(!mainInstance||typeof mainInstance!=='object')setMainInstance(instance);if(!!FoundAdexUser)instance.init();this.fire(new _axd.E('i::r',$this,{instance:instance}));return instance}};this.getAdexUser=function(){return FoundAdexUser};this.I=function(InstanceName){if(InstanceName==="main")if(!!mainInstance)return mainInstance;if(hI(InstanceName)){return gI(InstanceName)}else return false};var setMainInstance=function(Instance){mainInstance=Instance;if($this.caps.postmessage){$this.oe(window,"message",pmmsgh);startTopPing()};startTraceCheck();seizeAdexc()},startTopPing=function(){if(!$this.metop){$this.ael('p::res::ping',handlePong);$this.xpm(top,{type:"ping"})}},handlePong=function(event){},seizeAdexc=function(){if(!containerElement._adexc||!containerElement._adexc.seized){communication=new _axd.COM($this);communication.dI=mainInstance.getName();if(typeof containerElement._adexc==='object'){var saved=containerElement._adexc;containerElement._adexc=communication;containerElement._adexc.b(saved);var c=mainInstance.getConfig();if(c&&c.hasOwnProperty('Script')&&typeof c.Script!=='undefined'){var sp=$this.es(c.Script);for(var k in sp)if(sp.hasOwnProperty(k))containerElement._adexc.push([k,sp[k]])}};containerElement._adexc=communication}},_fireInstances=function(){for(var k in instances)if(instances.hasOwnProperty(k))instances[k].init()},startTraceCheck=function(){$this.ael('t::f',_leTraceGet);CurrentStrategy=0;traceCheck()},traceCheck=function(){if(Strategies.length>0&&!FoundAdexUser){var nextTrace=Strategies.shift();$this.fire(new _axd.E('t::c',$this,{strategy:nextTrace}));CRS[nextTrace].getTrace();$this._ri(CRS[nextTrace].runtime?CRS[nextTrace].runtime:500,traceCheck);CurrentStrategy++}else if(!FoundAdexUser)traceCreate()},traceCreate=function(){var rand=parseInt(Math.random()*1e4,10),_nc=$this.nC?'?nc=1':'';$this._rs($this._am("%%DmpUrl%%/d/"+rand+"/d/t.js"+_nc),function(){if(!!containerElement.adex.trace){var FoundAdexUser=new _axd.U(containerElement.adex.trace);FoundAdexUser.source=8;$this.fire(new _axd.E('t::n',$this,{User:FoundAdexUser}));_setUser('new',FoundAdexUser);if(!$this.nC)for(var k in CRS)if(CRS.hasOwnProperty(k))CRS[k].persistTrace(FoundAdexUser)}})},_leTraceGet=function(event){if(event.target.strategy&&event.data.User&&event.data.User.iV)_setUser(event.target.strategy,event.data.User)},_setUser=function(strategy,user){FoundAdexUser=user;_fireInstances();if($this.metop&&$this.caps.postmessage)pmmsg.trace=function(req,msg){return{trace:FoundAdexUser.getUserId()}}},hI=function(InstanceName){return(!!instances[InstanceName])},gI=function(InstanceName){if(!hI(InstanceName))throw new _axd.CO.E("Instance "+InstanceName+" isn't registered");return instances[InstanceName]},registerInstance=function(InstanceName,Instance){if(hI(InstanceName)){$this.fire(new _axd.E('i::c',$this,{instance:Instance}));return gI(InstanceName)};instances[InstanceName]=Instance;return Instance};this.rCS=function(Strategy){if(Strategy.runtime===false)return;$this.fire(new _axd.E('c::s::r',$this,Strategy));CRS[Strategy.strategy]=Strategy;Strategies.push(Strategy.strategy)};this.gCS=function(){return CRS};this._xi=function(url,data){var e=new Image();e.width=1;e.height=1;e.src=url+data};this.xi=function(Instance,subUrl,data){var Url=this._am('%%DmpUrl%%'+subUrl,Instance);if($this.nC)data.nc=1;return this._xi(Url,this.cd(data))};this._xa=function(Instance,subUrl,data){var x=$this._xhr(),Url=this._am('%%DmpUrl%%'+subUrl,Instance);if(x){x.open('POST',Url);x.send(this.cd(data))}};this._xag=function(Instance,Url,data){var x=$this._xhr();Url=this._am(Url,Instance);if(x){x.open('GET',Url,true);x.send(this.cd(data))}};this.xa=function(){};this._xhr=function(){if(!$this.xhr){if(typeof XMLHttpRequest!=='undefined')$this.xhr=new XMLHttpRequest();if(!$this.xhr)try{$this.xhr=new ActiveXObject("Msxml2.XMLHTTP")}catch(ex){try{$this.xhr=new ActiveXObject("Microsoft.XMLHTTP")}catch(e){$this.xhr=null}}};return $this.xhr};this._gcv=function(name){var cv=document.cookie,cs=cv.indexOf(" "+name+"=");if(cs===-1)cs=cv.indexOf(name+"=");if(cs===-1){cv=null}else{cs=cv.indexOf("=",cs)+1;var ce=cv.indexOf(";",cs);if(ce===-1)ce=cv.length;cv=decodeURIComponent(cv.substring(cs,ce))};if(cv==="null")cv=null;return cv};this._scv=function(k,v,e){var exdate;if(e){exdate=e}else{exdate=new Date();var exdays=365;exdate.setDate(exdate.getDate()+exdays)};var cv=encodeURIComponent(v)+((typeof exdate==="undefined")?"":"; expires="+exdate.toUTCString());document.cookie=k+"="+cv+"; path=/"};this.toAdexDate=function(date){};this._ri=function(ms,cb){var interval=setInterval(function(){cb.call();window.clearInterval(interval)},ms)};this._re=function(f,w,runtime){var interval=setInterval(f,w);if(runtime)var timeout=setTimeout(function(){clearInterval(interval);clearTimeout(timeout)},runtime)};this._rs=function(surl,cb,s){if(!s)s=false;var script=document.createElement("script"),done=false;script.type="text/javascript";script.async=!s;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){done=true;if(cb)cb.call(null,[]);script.onload=script.onreadystatechange=null}};script.src=surl;var sc=document.getElementsByTagName("script")[0];sc.parentNode.insertBefore(script,sc)};this._am=function(str,Instance){if(typeof Instance==='undefined'||Instance===null)Instance=mainInstance;if(!!Instance){var dmpUrl=Instance.getProtocol()+Instance.getDomain()+Instance.getBase();if(dmpUrl.substr(-1)==='/')dmpUrl=dmpUrl.substr(0,dmpUrl.length-1);str=str.replace('%%fdi%%','/d/%%CId%%/%%DTId%%/i').replace('%%fda%%','/d/%%CId%%/%%DTId%%/d');str=str.replace('%%DmpUrl%%',dmpUrl).replace('%%CId%%',Instance.getConfig().CId).replace('dmp.theadex.com',Instance.getDomain()).replace('%%DTId%%',Instance.getConfig().DTId).replace('%%Static%%',"//"+Instance.getConfig().Static)};if(!!FoundAdexUser)str=str.replace('%%Trace%%',FoundAdexUser.getUserId);return str};this._fixW1252=function(str){return this._sra(str,['\x99','\x80','\x82','\x83','\x84','\x85','\x86','\x87','\x88','\x89','\x8A','\x8B','\x8C','\x8E','\x91','\x92','\x93','\x94','\x95','\x96','\x97','\x98','\x99','\x9A','\x9B','\x9C','\x9E','\x9F'],['\u2122','\u20AC','\u201A','\u0192','\u201E','\u2026','\u2020','\u2021','\u02C6','\u2030','\u0160','\u2039','\u0152','\u017D','\u2018','\u2019','\u201C','\u201D','\u2022','\u2013','\u2014','\u02DC','\u2122','\u0161','\u203A','\u0153','\u017E','\u0178'])};this._sra=function(str,s,r){for(var i=0;i<s.length;i++)str=str.replace(s[i],r[i]);return str};this.cd=function(d){var k,ret="";for(k in d)if(k!=='tmp'&&d.hasOwnProperty(k)&&d[k]&&(typeof d[k]!=="undefined")&&d[k]!=="")ret+=k+"="+encodeURIComponent(d[k])+"&";return ret.slice(0,-1)};this.dd=function(str){if(!str)return{};var match,pl=/\+/g,search=/([^&=]+)=?([^&]*)/g,decode=function(s){try{return decodeURIComponent(s.replace(pl," "))}catch(e){var _unescape=!!unescape?unescape:null;if(!!_unescape)return _unescape(s.replace(pl," "))}},result={};while((match=search.exec(str)))result[decode(match[1])]=decode(match[2]);return result};this.es=function(scriptPathPart){var scriptTags=document.getElementsByTagName('script');for(var i=0;i<scriptTags.length;i++)if(scriptTags[i].src&&scriptTags[i].src.indexOf(scriptPathPart)>-1){var script=scriptTags[i];if(script.getAttribute("src")&&script.getAttribute("src").indexOf("?"))return $this._es(script.getAttribute("src"))};return{}};this._es=function(us){var x=document.createElement('a');x.href=us;return $this.dd(x.search.substr(1))};this.oe=function(t,e,l){if(t.ael){t.ael(e,l,null)}else if(t.addEventListener){t.addEventListener(e,l,null)}else if(t.attachEvent){t.attachEvent("on"+e,l)}else t["on"+e]=l};var pmmsgh=function(event){if($this.metop){var allow=false,i,response=null;for(i=0;i<pmorigin.length;i+=1)if(pmorigin[i].test(event.origin)){allow=true;break};if(allow){var request=$this.dd(event.data);if(pmmsg.hasOwnProperty(request.type))response=pmmsg[request.type](request,event);if(response){response.type=request.type+'_response';event.source.postMessage($this.cd(response),event.origin)}}}else if(!!event.data){var data=$this.dd(event.data);if(!!data.type){var type=data.type.substring(0,data.type.length-9);$this.fire(new _axd.E('p::res::'+type,$this,data))}}};this.xpm=function(target,data){if(target.postMessage&&data.type){$this.fire(new _axd.E('p::req::'+data.type,$this,{type:data.type}));var request=$this.cd(data);target.postMessage(request,'*')}};this.gIN=function(c){var insnam="/";insnam+=(!!c.CId)?c.CId:"ukn";insnam+="/";insnam+=(!!c.DTId)?c.DTId:"ukn";insnam+="/";return insnam};this.pR=function(Instance,Plugin){if(communication){$this.fire(new _axd.E('com::flush',Instance,Plugin));communication.fP(Instance.getName(),Plugin)}};this.ael=function(type,listener){if(typeof _el[type]==="undefined")_el[type]=[];_el[type].push(listener)};this.removeEventListener=function(type,listener){if(typeof _el[type]!=='undefined'){var listeners=_el[type];for(var i=0,len=listeners.length;i<len;i++)if(listeners[i]===listener){listeners.splice(i,1);break}}};this.fire=function(event){if(typeof event==="string")event={type:event};if(!event.target)event.target=this;if(!event.type)throw new _axd.CO.E("No type");var listeners=_el[event.type];if(typeof _el[event.type]!=="undefined")for(var i=0,len=listeners.length;i<len;i++)listeners[i].call($this,event);listeners=_el["*"];if(typeof _el["*"]!=="undefined")for(var j=0,len1=listeners.length;j<len1;j++)listeners[j].call($this,event)};containerElement.adex=$this};_axd.CAP=function(){'use strict';var $this=this,IEDetect=(function(){"use strict";var isIE=false,actualVersion,jscriptMap,jscriptVersion;isIE=false;jscriptMap={'5.5':'5.5','5.6':'6','5.7':'7','5.8':'8','9':'9','10':'10'};jscriptVersion=new Function('/*@cc_on return @_jscript_version; @*/')();if(jscriptVersion!==undefined){isIE=true;actualVersion=jscriptMap[jscriptVersion]};return{isIE:isIE,version:actualVersion}}());this.browser={};this.browser.isMSIE=!!document.all&&IEDetect.isIE;if(this.browser.isMSIE===false)this.browser.isMSIE=('ActiveXObject'in window);this.browser.isMSIE6=this.browser.isMSIE&&!(window.XMLHttpRequest);this.browser.isMSIE7=this.browser.isMSIE&&!this.browser.isMSIE6&&!(document.querySelector);this.browser.isMSIE8=this.browser.isMSIE&&!this.browser.isMSIE6&&!this.browser.isMSIE7&&!(document.addEventListener);this.browser.isMSIE9=this.browser.isMSIE&&!this.browser.isMSIE6&&!this.browser.isMSIE7&&!this.browser.isMSIE8&&!(window.atob);this.browser.isMSIE10=this.browser.isMSIE&&IEDetect.version==='10';this.browser.isMSIE11=this.browser.isMSIE&&!(window.ActiveXObject);this.ls=false;this.canvas=false;this.postmessage=false;this.json=false;var determineCaps=function(){try{$this.ls=('localStorage'in window&&typeof window.localStorage!=="undefined");window.localStorage.setItem('__t','__t');window.localStorage.removeItem('__t')}catch(_e){$this.ls=false};try{if('HTMLCanvasElement'in window){$this.canvas=true}else{var elem=document.createElement('canvas');$this.canvas=!!(elem.getContext&&elem.getContext('2d'))}}catch(Exception){$this.canvas=false};try{$this.postmessage=('postMessage'in window&&typeof window.postMessage!=='undefined')}catch(Exception){$this.postmessage=false};try{$this.json=(typeof JSON==='object'&&typeof JSON.parse==='function')}catch(Exception){$this.json=false}};determineCaps()};_axd.I=function(AdexCore,adexConfig){"use strict";var $this=this,c=adexConfig;if(!c.hasOwnProperty('Static'))c.Static='static.theadex.com';var plugins={},initDone=false;if(!AdexCore.v)throw new _axd.CO.E("AdexCore isn't valid");var pluginInterceptor={};this.init=function(){if(!initDone){initDone=true;for(var k in plugins)if(plugins.hasOwnProperty(k)){AdexCore.pR($this,plugins[k]);plugins[k].postInit()};AdexCore.es(c.Script)}};this.hP=function(Plugin){return!!(plugins[Plugin])};this.rP=function(Plugin){if(!this.hP(Plugin.plugin)){plugins[Plugin.plugin]=Plugin;Plugin.sI(this);if($this.hPIC(Plugin.plugin))$this.gPIC(Plugin.plugin).setSource(plugins[Plugin.plugin]);Plugin.preInit();if(initDone){AdexCore.fire(new _axd.E('i::p::r',this,Plugin));Plugin.postInit();AdexCore.pR($this,Plugin)}}};this.gP=function(Plugin){if($this.hP(Plugin))return plugins[Plugin]};this.gPIC=function(Plugin){if(!pluginInterceptor[Plugin]){pluginInterceptor[Plugin]=new _axd.IC.C();if($this.hP(Plugin))pluginInterceptor[Plugin].setSource(plugins[Plugin])};return pluginInterceptor[Plugin]};this.hPIC=function(Plugin){return!!(pluginInterceptor[Plugin])};this.getConfig=function(){return c};this.gC=function(){return AdexCore};this.getProtocol=function(){return c.Protocol};this.getDomain=function(){if(c.Domain){return c.Domain}else throw new _axd.CO.E("No domain specified")};this.getBase=function(){if(c.Base){return c.Base}else return'/'};var _emitAdexc=function(plugin,cmd,workload){var load=[cmd,workload];if($this.hPIC(plugin))load=$this.gPIC(plugin).chainCall("preEmit",load[0],load[1]);if(load)try{plugins[plugin].AdexcEmit(load[0],load[1])}catch(exc){$this.gC().fire(new _axd.E('i::cmd::a',$this.getName(),{plugin:plugin,command:cmd,workload:workload,name:exc.name,message:'aborted: '+exc.message}))}};this.emitAdexc=function(plugin,cmd,workload){if($this.hP(plugin)){$this.gC().fire(new _axd.E('i::cmd::pf',$this.getName(),{plugin:plugin,command:cmd,workload:workload}));_emitAdexc(plugin,cmd,workload);return true}else{$this.gC().fire(new _axd.E('i::cmd::pnf',$this.getName(),{plugin:plugin,command:cmd,workload:workload}));return false}};this.getName=function(){return AdexCore.gIN(c)}};_axd.E=function(type,target,data){'use strict';this.type=type;this.target=target;this.data=data;this.date=new Date()};_axd.U=function(AdexUserId){'use strict';this.source=0;var userid=AdexUserId;this.getUserId=function(){return userid};this.iV=function(){var p=/^[0-9]{5}([0-9]{1,})[0-9]{10}$/;return p.test(userid)}};_axd.COM=function(AdexCore){'use strict';this.seized=true;this.dI="main";var $this=this,queue=[];this.getQueue=function(){return queue};this.setQueue=function(setQueue){queue=setQueue};this.push=function(cmdArray){if(!cmdArray)return;var cmd=xpc(cmdArray);AdexCore.fire(new _axd.E('com::cmd',$this,cmd));if(!AdexCore.I(cmd[0])||(!!AdexCore.I(cmd[0])&&!AdexCore.I(cmd[0]).emitAdexc(cmd[1],cmd[2],cmd[3]))){AdexCore.fire(new _axd.E('com::q',$this,cmd));toQueue(cmd)}};this.b=function(data){for(var i=0;i<data.length;i++)$this.push(data[i])};var toQueue=function(cmd){queue.push(cmd)},xpc=function(cmdArray){var cmd=[$this.dI,"ut"],idx=4;for(var i=cmdArray.length;i>=1;i--){idx--;cmd[idx]=cmdArray[i-1]};return cmd};this.convert=function(cmdArray){return xpc(cmdArray)};this.fP=function(Instance,Plugin){var newQueue=[];while(queue.length>0){var element=queue.shift();if(element[0]===Instance&&element[1]===Plugin.plugin){if(!AdexCore.I(Instance).emitAdexc(element[1],element[2],element[3]))newQueue.push(element)}else newQueue.push(element)};queue=newQueue}};var axd_config={CId:'413',DTId:'1139',Protocol:window.adexForceSSL?'https://':'//',Domain:'dmp.theadex.com',Base:'',Debug:'',NoCookie:''};window._adexc=!!(window._adexc)?window._adexc:[];if(!(window.adex&&window.adex.setup&&typeof window.adex==='object'))window.adex=new _axd.Core(window);var _c=window.adex;_axd.C.S.C=function(AdexCore){'use strict';this.strategy='cookie';this.runtime=250;this.getTrace=function(){var cv=AdexCore._gcv('axd');if(!!cv){var User=new _axd.U(cv);User.source=1;if(User.iV())AdexCore.fire(new _axd.E('t::f',this,{User:User}));return null}else{AdexCore.fire(new _axd.E('t::nf',this,{}));return null}};this.persistTrace=function(AdexUser){var targetDate=new Date();targetDate.setDate(targetDate.getDate()+365);AdexCore._scv('axd',AdexUser.getUserId(),targetDate)}};_axd.C.S.LS=function(AdexCore){'use strict';this.strategy='localstorage';this.runtime=false;if(AdexCore.caps.ls)this.runtime=500;this.getTrace=function(cb){if(window.localStorage.hasOwnProperty('axd')){var User=new _axd.U(window.localStorage.getItem('axd'));User.source=2;if(User.iV()){AdexCore.fire(new _axd.E('t::f',this,{User:User}));if(typeof cb==='function')cb()}}};this.persistTrace=function(AdexUser){window.localStorage.setItem('axd',AdexUser.getUserId())}};_axd.C.S.PM=function(AdexCore){'use strict';this.strategy='postmessage';this.runtime=false;if(!AdexCore.metop)this.runtime=1500;this.getTrace=function(){AdexCore.ael('p::res::trace',_pmanswer);AdexCore._ri(1e3,function(){AdexCore.xpm(top,{type:'trace'})})};var _pmanswer=function(event){if(event.data&&event.data.trace){var User=new _axd.U(event.data.trace);User.source=16;if(User.iV())AdexCore.fire(new _axd.E('t::f',this,{User:User}))}};this.persistTrace=function(AdexUser){}};if(!!_axd.C.S.C)_c.rCS(new _axd.C.S.C(_c));if(!!_axd.C.S.LS)_c.rCS(new _axd.C.S.LS(_c));if(!!_axd.C.S.PM)_c.rCS(new _axd.C.S.PM(_c));_axd.IC.P.T1=new _axd.IC.A();_axd.IC.P.T1.preEmit=function(cmd,data){'use strict';switch(cmd){case'_cm':case'cm':if(window._adexc)window._adexc.push(['cm',cmd,data]);return null;default:return arguments}};_axd.P.T1=function(){'use strict';var $this=this;this.plugin='ut';var data={c:null,t:1},AdexInstance,dataSubmitted=false,cmds={_kv:null,kv:null,_lo:null,lo:null,_rf:null,rf:null,_ft:null,ft:null,_cmp:null,cmp:null};cmds._kv=cmds.kv=function(val){if(AdexInstance.gC().caps.json){var kv;if(val[0]){kv=JSON.stringify(val[0])}else if(!val[0]&&val!==null&&typeof val==='object')kv=JSON.stringify(val);if(kv&&!val[1]&&dataSubmitted&&AdexInstance.gP('vd')){AdexInstance.gP('vd').setData('kv',kv)}else if(kv)data.kv=kv;if(kv&&val[1]&&dataSubmitted){var startTime=(new Date()).getTime();if(AdexInstance.gP('vd')){AdexInstance.gP('vd').submit();AdexInstance.gP('vd').setDataSubmitted(false);AdexInstance.gP('vd').setVisitStart(startTime)};$this.setDataSubmitted(false);$this.preInit();$this.setData('date',parseInt(startTime/1e3,10));$this.postInit()}}};cmds._lo=function(val){if(typeof val==='string'||val instanceof String){$this.setData('location',decodeURIComponent(val));$this.setData('ovr',1)}};cmds._rf=function(val){if(typeof val==='string'||val instanceof String){$this.setData('referrer',decodeURIComponent(val));$this.setData('ovr',1)}};cmds.ft=cmds._ft=function(val){if(typeof val==='string'||val instanceof String)$this.setData('ft',decodeURIComponent(val))};cmds.cmp=cmds._cmp=function(val){var cmpData={},incomingData,validFields=['adacid','adnwid','adnpid','adsid','adsd','adpos','adecpm','adcaid','adinid','adplcid','adcrid','addvid','addvcuid','addvcmid','adbidp','addealid','event'];if(val[0]){incomingData=val[0]}else if(!val[0]&&val!==null&&typeof val==='object')incomingData=val;for(var i=0;i<validFields.length;i++)if(incomingData.hasOwnProperty(validFields[i]))cmpData[validFields[i]]=incomingData[validFields[i]];if(dataSubmitted&&AdexInstance.gP('vd')){AdexInstance.gP('vd').setData('cmp',JSON.stringify(cmpData))}else data.cmp=JSON.stringify(cmpData)};this.sI=function(Instance){AdexInstance=Instance;return this};this.gI=function(){return AdexInstance};this.setData=function(k,v){data[k]=v};this.getData=function(k){if(data.hasOwnProperty(k))return data[k]};this.setDataSubmitted=function(bool){if(dataSubmitted&&typeof bool==='boolean')dataSubmitted=bool};this.getDataSubmitted=function(){return dataSubmitted};this.preInit=function(){AdexInstance.gPIC('ut').rPIC(_axd.IC.P.T1);data.location=window.location.href;data.protocol=window.location.protocol==='http:'?'http://':'https://';var now=new Date();data.tzo=now.getTimezoneOffset();data.referrer=(!document.referrer)?"":document.referrer;data.ovr=0;data.date=parseInt(AdexInstance.gC().start/1e3,10);data.inframe=(window.self===window.top)?0:1;var p=[];if(navigator.plugins)for(var i=0;i<navigator.plugins.length;i++)if(navigator.plugins[i].name)p.push(AdexInstance.gC()._fixW1252(navigator.plugins[i].name));data.p=p.join(";");data.sw=(screen.width)?screen.width:'';data.sh=(screen.height)?screen.height:'';data.sd=(screen.colorDepth)?screen.colorDepth:'';data.pd=(screen.pixelDepth)?screen.pixelDepth:'';data.saw=(screen.availWidth)?screen.availWidth:'';data.sah=(screen.availHeight)?screen.availHeight:'';data.sal=(screen.availLeft)?screen.availLeft:'';data.sat=(screen.availTop)?screen.availTop:'';if(typeof window.innerWidth!=='undefined'){data.vw=window.innerWidth;data.vh=window.innerHeight}else if(typeof document.documentElement!=='undefined'&&typeof document.documentElement.clientWidth!=='undefined'&&document.documentElement.clientWidth!==0){data.vw=document.documentElement.clientWidth;data.vh=document.documentElement.clientHeight}else{data.vw=document.getElementsByTagName('body')[0].clientWidth;data.vh=document.getElementsByTagName('body')[0].clientHeight};if(data.inframe===0){try{var e=document.getElementsByTagName('meta');if(e&&e.length>0){var _pmo=[];for(var j=0;j<e.length;j++){var mN=e[j].getAttribute('name'),mV=e[j].getAttribute('content');switch(mN){case'description':data.pmd=mV;break;case'keywords':data.pmk=mV;break;case'author':_pmo.push(AdexInstance.gC()._fixW1252(mV));break;case'publisher':_pmo.push(AdexInstance.gC()._fixW1252(mV));break;case'copyright':_pmo.push(AdexInstance.gC()._fixW1252(mV));break;default:break}};if(_pmo.length>0)data.pmo=_pmo.join(";")}}catch(AnE){};try{var tt=document.getElementsByTagName('title'),ogtt=document.getElementsByTagName('meta'),_mpt=[];if(ogtt&&ogtt.length>0)for(var k=0;k<ogtt.length;k++){var mP=ogtt[k].getAttribute('property'),mPC=ogtt[k].getAttribute('content');switch(mP){case'og:title':if(!!mPC&&mPC!=='')_mpt.push(mPC);break;default:break}};if(_mpt&&_mpt.length>0){data.pmt=_mpt[0]}else if(tt&&tt.length>0)data.pmt=tt[0].innerHTML}catch(AnE){}}else{AdexInstance.gC().ael('p::res::location',handleOverride);AdexInstance.gC().xpm(top.window,{type:'location'})}};this.postInit=function(){data.c=AdexInstance.gC().getAdexUser().getUserId();data.csource=AdexInstance.gC().getAdexUser().source;AdexInstance.gC()._ri(500,$this.submit)};var handleOverride=function(event){if(event.data&&(event.data.location||event.data.referrer)){var pmdata=event.data,overridden=false;if(pmdata.location){$this.setData('location',pmdata.location);$this.setData('referrer',null);overridden=true};if(pmdata.referrer){$this.setData('referrer',pmdata.referrer);overridden=true};if(overridden)$this.setData('ovr',1)}};this.AdexcEmit=function(cmd,value){if(typeof cmds[cmd]==='function'){cmds[cmd].call(null,value)}else AdexInstance.gC().fire(new _axd.E('p::t1::noc',$this,{command:cmd,value:value,message:'command not supported'}))};this.submit=function(){if(!dataSubmitted){if(typeof _h==='function')data.r=_h(AdexInstance.gC().cd(data)+AdexInstance.getName());AdexInstance.gC().xi(AdexInstance,'%%fdi%%/1.gif?',data);AdexInstance.gC().fire(new _axd.E('p::t1::s',$this,data));dataSubmitted=true}}};_axd.IC.P.T2=new _axd.IC.A();_axd.IC.P.T2.preEmit=function(cmd,data){'use strict';switch(cmd){case'_cm':case'_mp':this.gI().emitAdexc('cm',cmd,data);return null;default:return arguments}};_axd.P.T2=function(){'use strict';var $this=this;this.plugin='cm';var AdexInstance,AdexUser;this.sI=function(Instance){AdexInstance=Instance;return $this};this.gI=function(){return AdexInstance};this.preInit=function(){AdexInstance.gPIC('ut').rPIC(_axd.IC.P.T2)};this.postInit=function(){AdexUser=AdexInstance.gC().getAdexUser();if(!AdexUser.iV())AdexUser=null};this.AdexcEmit=function(cmd,value){switch(cmd){case'_cm':case'_mp':if(value.length===2)$this.sendCM(value[0],value[1]);if(value.length===3)$this.sendCM(value[0],value[1],value[2]);break;case'_cb':if(value.length===1)$this.sendURL(value[0]);break}};this.qC=0;this.cmQueue=function(payload,fn){if($this.qC<=2){AdexInstance.gC().fire(new _axd.E('p::t2::q',$this,{data:payload,attempts:$this.qC}));AdexInstance.gC()._ri(1e3,function(){fn.apply($this,payload);$this.qC++})}};this.tS=function(pid,exp){if(!pid||!exp)return;var t='EP%%pid%%:%%ts%%';return t.replace('%%pid%%',pid).replace('%%ts%%',exp)};this.adexDate=function(){var dS=1378591200;return Math.floor((parseInt(Date.now()/1e3)-dS)/(60*60*24))};this.readTsCookie=function(){var tisValue=AdexInstance.gC()._gcv('tis');return tisValue?tisValue.replace(/EP/g,'').split('|').map(function(s){return s.split(':')}):[]};this.checkTs=function(pid){var tisArray=$this.readTsCookie(),check=true,currentDate=$this.adexDate();for(var i=0;i<tisArray.length;i++)if(tisArray[i][0].indexOf(pid)>-1&&tisArray[i][1]>currentDate)check=false;return check};this.setTs=function(pid,days){if(AdexInstance.getConfig().NoCookie)return;var _d=days||14,tisArray=$this.readTsCookie().filter(function(e){return e[0]!==pid});tisArray.push([pid,$this.adexDate()+_d]);var tisString=tisArray.map(function(e){return $this.tS(e[0],e[1])}).join('|');AdexInstance.gC()._scv('tis',tisString)};this.sendCM=function(pid,fuid,cb){if(!pid||!fuid)return;if(!AdexUser||!AdexUser.iV()){$this.cmQueue([pid,fuid,cb],$this.sendCM);return};if(!$this.checkTs(pid)){AdexInstance.gC().fire(new _axd.E('p::t2::a',$this,{message:'Command stopped by tis check',pid:pid}));return};var data={};data.axd_pid=pid;data.axd_fuid=fuid;data.c=AdexUser.getUserId();if(cb&&checkURL(cb))data.cb=cb.replace('{{UUID}}',AdexUser.getUserId());AdexInstance.gC().xi(AdexInstance,'%%fdi%%/2.gif?',data);AdexInstance.gC().fire(new _axd.E('p::t2::s',$this,data));$this.setTs(pid)};var checkURL=function(url){return/^(\/\/|http:\/\/|https:\/\/).+\{\{UUID\}\}.*$/.test(url)};this.sendURL=function(url){if(url||checkURL(url)){if(!AdexUser||!AdexUser.iV()){$this.cmQueue([url],$this.sendURL);return};var data={cb:url.replace('{{UUID}}',AdexUser.getUserId())};AdexInstance.gC().fire(new _axd.E('p::t2::cb',$this,data));return AdexInstance.gC().xi(AdexInstance,'%%fdi%%/2.gif?',data)}}};_axd.P.T3=function(){'use strict';var $this=this;this.plugin='vd';var data={},AdexInstance,dataSubmitted=false;this.sI=function(Instance){AdexInstance=Instance;return this};this.gI=function(){return AdexInstance};this.setData=function(k,v){data[k]=v};this.getData=function(k){if(data.hasOwnProperty(k))return data[k]};this.setDataSubmitted=function(bool){if(dataSubmitted&&typeof bool==='boolean')dataSubmitted=bool};this.getDataSubmitted=function(){return dataSubmitted};this.getRS=function(){var rootElement=document.documentElement||document.body,rootHeight=rootElement.scrollHeight?rootElement.scrollHeight:rootElement.height,tH=rootHeight?rootHeight:rootElement.offsetHeight,sD=window.pageYOffset?window.pageYOffset:rootElement.scrollTop;return Math.round(sD/tH*10)/10};this.gS=function(){var d=$this.getRS();data.scr=data.scr<d?d:data.scr};this.setVisitStart=function(timestamp){var time=timestamp||(new Date()).getTime();if(data.tmp)data.tmp.visit_start=parseInt(time,10)};this.submit=function(){if(!dataSubmitted){data.tmp.visit_end=(new Date()).getTime();data.vd=(data.tmp.visit_end-data.tmp.visit_start);if(AdexInstance.hP('ut'))data.r=AdexInstance.gP('ut').getData('r');AdexInstance.gC().xi(AdexInstance,'%%fdi%%/3.gif?',data);AdexInstance.gC().fire(new _axd.E('p::t3::s',$this,data));dataSubmitted=true}};this.preInit=function(){data.scr=0;data.tmp={};data.tmp.visit_start=AdexInstance.gC().start;AdexInstance.gC().oe(window,'scroll',$this.gS)};this.postInit=function(){AdexInstance.gC().register_unload($this.submit)};this.AdexcEmit=function(){return}};_axd.P.T7=function(){'use strict';this.plugin='ir';var $this=this,data={},dataSubmitted=false,AdexInstance;this.sI=function(Instance){AdexInstance=Instance;return this};this.gI=function(){return AdexInstance};this.setData=function(k,v){data[k]=v};this.getData=function(k){if(data.hasOwnProperty(k))return data[k]};this.setDataSubmitted=function(bool){if(dataSubmitted&&typeof bool==='boolean')dataSubmitted=bool};this.getDataSubmitted=function(){return dataSubmitted};this._xr=function(){if(!dataSubmitted){var d=data,iframe=document.createElement('iframe');iframe.setAttribute('id','rdr_'+AdexInstance.getConfig().CId+'_'+AdexInstance.getConfig().DTId);iframe.style.cssText="height: 1px; width: 1px; border: none; position: absolute; top: -100px; left: -100px; z-index: -5;  ";d.c=AdexInstance.gC().getAdexUser().getUserId();try{iframe.setAttribute('src',AdexInstance.gC()._am("%%DmpUrl%%/r/%%CId%%/%%DTId%%/?"+AdexInstance.gC().cd(d)));if(document&&document.body){document.body.appendChild(iframe);dataSubmitted=true;AdexInstance.gC().fire(new _axd.E('p::t7::s',$this,data))}}catch(_e){}}};this.preInit=function(){};this.postInit=function(){$this._xr()}};var _i=_c.setup(axd_config);if(!!_axd.P.T1)_i.rP(new _axd.P.T1());if(!!_axd.P.T2)_i.rP(new _axd.P.T2());if(!!_axd.P.T3)_i.rP(new _axd.P.T3());if(!!_axd.P.T7)_i.rP(new _axd.P.T7())})()}catch(e){}