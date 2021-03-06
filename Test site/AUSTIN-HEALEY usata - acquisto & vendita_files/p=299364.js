var ADGEAR=ADGEAR||{};ADGEAR.lang=ADGEAR.lang||{};
ADGEAR.lang.namespace=function(b){var a=b.split(".");
var d=window;var c;for(c=0;c<a.length;c++){d[a[c]]=d[a[c]]||{};
d=d[a[c]]}return d};ADGEAR.lang.singleton=function(){var d=Array.prototype.slice.call(arguments);
var c=d.shift();var h=d.shift();var b=c.split(".");
var j=window;var a=b.length-1;var g;var f;
for(f=0;f<a;f++){j[b[f]]=j[b[f]]||{};j=j[b[f]]
}g=j[b[a]];j[b[a]]=g||h.apply(null,d);return j
};ADGEAR.lang.klass=function(a,b){return ADGEAR.lang.singleton(a,function(){return b
})};ADGEAR.lang.bind=function(b,c){var a=c;
return function(){return b.apply(a,arguments)
}};ADGEAR.lang.mergeHashes=function(c,a){var d={};
var b;for(b in c){if(c.hasOwnProperty(b)){d[b]=c[b]
}}for(b in a){if(a.hasOwnProperty(b)){d[b]=a[b]
}}return d};ADGEAR.lang.log=function(m){if((typeof ADGEAR_JS_DEBUG==="undefined")||(ADGEAR_JS_DEBUG!==true)){return
}function l(i){return(i<10)?"0"+i:i}try{var j=Array.prototype.slice.call(arguments);
j.unshift("> AdGear Log:");if(window.console.debug){window.console.debug.apply(console,j)
}else{window.console.log.apply(console,j)
}j.shift();var k="";var f;for(f=0;f<j.length;
f++){if(typeof j[f]==="string"){k+=" "+j[f]
}else{if(typeof JSON!=="undefined"){try{k+=" "+JSON.stringify(j[f])
}catch(d){}}}}var a=document.getElementById("adgearPreviewConsole");
if(a){var b=a.getElementsByTagName("ul");
if(b&&b[0]){b=b[0]}else{b=document.createElement("ul");
a.appendChild(b)}var c=new Date();var g=document.createElement("li");
g.innerHTML="<strong>[ "+String(c.getFullYear())+"-"+String(l(c.getMonth()+1))+"-"+String(l(c.getDate()))+" "+String(l(c.getHours()))+":"+String(l(c.getMinutes()))+":"+String(l(c.getSeconds()))+"  ] &gt;&gt; </strong>"+String(k);
b.appendChild(g);a.scrollTop=a.scrollHeight
}}catch(h){}};ADGEAR.lang.indexOf=function(d,b){var a=d.length;
var c=Number(arguments[2])||0;c=(c<0)?Math.ceil(c):Math.floor(c);
if(c<0){c+=a}for(;(c>=0)&&(c<a);c++){if(d[c]===b){return c
}}return -1};ADGEAR.lang.safeDecodeURIComponent=function(c){var a="";
try{a=decodeURIComponent(c)}catch(b){}return a
};ADGEAR.lang.safeUrlAppend=function(f,b){var d=f.indexOf("?");
var a=f;var c="";if(b!==""){if(d<0){c="?"
}else{if(d!==(f.length-1)){c="&"}}a=a+c+b
}return a};ADGEAR.lang.klass("ADGEAR.EventQueue",function(){var i={num_processed:0,num_loaded:0,num_error:0,num_aborted:0};
var g=new Array();var b=new Image();var k=false;
function j(){i.num_processed+=1;b=new Image();
if(g.length>0){d()}else{k=false}}function f(){i.num_loaded+=1;
j()}function c(){i.num_error+=1;j()}function a(){i.num_aborted+=1;
j()}function d(){k=true;b.onload=f;b.onerror=c;
b.onabort=a;b.src=g.shift()}function h(){if(!k){d();
return true}return false}return{dispatch:function(l){if("string"===typeof(l)&&l.match(/^https?:\/\//)){g.push(l);
return h()}},stats:function(l){if(l in i){return i[l]
}return null}}});ADGEAR.lang.klass("ADGEAR.QueryString",function(f){var d="";
var b={};function c(i){var j={};for(var g in i){j[g]=i[g]
}return j}function a(k){var g,m,j,n,h,l;var o=ADGEAR.lang.safeDecodeURIComponent;
if((typeof k==="string")&&(k!=="")){d=k;if(d.substring(0,1)==="?"){d=d.substring(1)
}m=d.split("&");for(j=0;j<m.length;j++){n=m[j].split("=");
h=o(n.shift());l=((n!=null)&&(n.length>0))?o(n.join("=")):null;
b[h]=l}}else{if(typeof k==="object"){b=c(k);
g=new Array();for(h in b){l=encodeURIComponent(String(h));
if(b[h]!=null){l+="="+encodeURIComponent(String(b[h]))
}g.push(l)}d=g.join("&")}}}if(f!=null){a(f)
}return{toString:function(){return d},toHash:function(){return b
},isEmpty:function(){for(var g in b){if(b.hasOwnProperty(g)){return false
}}return true},update:function(g,h){b[g]=h;
a(b);return this},add:function(g,h){return this.update(g,h)
},del:function(g){delete b[g];a(b);return this
},contains:function(g){return !!(g in b)},get:function(g){if(this.contains(g)){return b[g]
}return null},delAdGearParams:function(){var h={};
for(var g in b){if(!g.match(/^AG_/)){h[g]=b[g]
}}a(h);return this},dup:function(){return ADGEAR.QueryString(this.toHash())
}}});ADGEAR.lang.singleton("ADGEAR.browser",function(){var b=ADGEAR.lang;
var f=null;var d=null;var c=null;var a=null;
return{type:{IE:!!(window.attachEvent&&(b.indexOf(navigator.userAgent,"Opera")===-1)),Opera:b.indexOf(navigator.userAgent,"Opera")>-1,WebKit:b.indexOf(navigator.userAgent,"AppleWebKit/")>-1,Gecko:b.indexOf(navigator.userAgent,"Gecko")>-1&&b.indexOf(navigator.userAgent,"KHTML")===-1,MobileSafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/)},topWindow:function(){if(f==null){try{f=window.parent;
while(f&&(f!=f.parent)){f=f.parent}}catch(g){}}return f
},isTopWindow:function(){return(this.topWindow()==window)
},currentQueryString:function(){if(d==null){try{d=ADGEAR.QueryString(window.location.search)
}catch(g){}}return d},trueReferrer:function(){if(c==null){try{c=this.topWindow().document.referrer
}catch(g){}if(c==null){c=""}}return c},trueReferer:function(){return this.trueReferrer()
},trueLocation:function(){if(a==null){try{a=String(this.topWindow().location)
}catch(g){}if(a==null){a=""}}return a},localtime:function(){var i="";
try{var n=new Date();var m=n.getTimezoneOffset();
var h=(m<0?"+":"-");m=Math.abs(m);var l=parseInt(m/60);
var g=(m%60);var k=function(o){o=String(o);
while(o.length<2){o="0"+o}return(o)};i=String(n.getFullYear())+"-"+k(n.getMonth()+1)+"-"+k(n.getDate())+"T"+k(n.getHours())+":"+k(n.getMinutes())+":"+k(n.getSeconds())+h+k(l)+":"+k(g)
}catch(j){}return i}}});ADGEAR.lang.klass("ADGEAR.Environment",function(a){var f={};
var c={};var b="ag"+String(Math.floor(Math.random()*100000000000000));
var j=ADGEAR.EventQueue();var d="http";for(var h in a){f[h]=a[h]
}function i(){f.durl="";f.aurl="";if(("delivery" in f)&&(d in f.delivery)&&("hostname" in f.delivery[d])&&(f.delivery[d]["hostname"]!=="")){f.durl=d+"://"+f.delivery[d]["hostname"]
}if(("assets" in f)&&(d in f.assets)&&("hostname" in f.assets[d])&&(f.assets[d]["hostname"]!=="")){f.aurl=d+"://"+f.assets[d]["hostname"];
if(("bucket" in f.assets[d])&&(f.assets[d]["bucket"]!=="")){f.aurl+="/"+f.assets[d]["bucket"]
}}}function g(o,l){var n=o.indexOf("?");var k=o;
var m="";if(l!==""){if(n<0){m="?"}else{if(n!=(o.length-1)){m="&"
}}k=k+m+l}return k}if(((typeof __ADGEAR_SSL!="undefined")&&__ADGEAR_SSL)||(window.location.protocol=="https:")){d="https"
}i();return{config:function(){return f},proto:function(){return d
},getSessionId:function(){return b},setSessionId:function(k){b=String(k)
},eventQueue:function(){return j},helloUrl:function(){this.setSessionId(arguments[0]||this.getSessionId());
return this.deliveryUrl("/session.js",{session:this.getSessionId()})
},deliveryUrl:function(o){var m=arguments[1]||{};
var l=ADGEAR.browser;var k=ADGEAR.QueryString({});
if("querystring" in m&&typeof(m.querystring.toHash)!=="undefined"){k=ADGEAR.QueryString(m.querystring.toHash())
}if(String(o).match(/^https?:\/\//)){return g(o,k.toString())
}if(!("cachebust" in m)||(m.cachebust!==false)){k.add("AG_R",String(Math.floor(Math.random()*100000000000000)))
}if(!("localtime" in m)||(m.localtime!==false)){k.add("AG_LT",l.localtime())
}if(!("trueref" in m)||(m.trueref!==false)){k.add("AG_REF",l.trueReferrer())
}if("session" in m){k.add("AG_SESSID",m.session)
}if(!("deliveryhints" in m)||(m.deliveryhints!==false)){for(var n in c){k.add(n,c[n].join(","))
}}return(f.durl+g(o,k.toString()))},assetUrl:function(m){var l=arguments[1]||{};
var k=ADGEAR.QueryString({});if("querystring" in l){k=ADGEAR.QueryString(l.querystring.toHash())
}if(String(m).match(/^https?:\/\//)){return g(m,k.toString())
}if(("cachebust" in l)&&(l.cachebust===true)){k.add("AG_R",String(Math.floor(Math.random()*100000000000000)))
}return(f.aurl+g(m,k.toString()))},addDeliveryHint:function(k,l){if(!(k in c)){c[k]=[]
}c[k].push(l)},isLivePreview:function(){return(("live_preview" in f)&&(f.live_preview===true))
}}});ADGEAR.lang.singleton("ADGEAR.envs",function(){var a={};
return{config:function(c){var b=c.name;if(!(b in a)){a[b]=ADGEAR.Environment(c)
}return a[b]}}});ADGEAR.lang.singleton("ADGEAR.templateApi",function(){return{getClickUrlFromPath:function(c){var b={querystring:arguments[1]||ADGEAR.QueryString({}),cachebust:false,localtime:false,trueref:false,deliveryhints:false};
if(this["adunit_click_url"]){b.querystring.add("AG_RED",this["adunit_click_url"])
}var a=this.env.deliveryUrl(c,b);if(this["source_clicktracker"]){var g;
if(this["source_clicktracker_is_encoded"]){g=ADGEAR.lang.safeDecodeURIComponent(this["source_clicktracker"])
}else{if(this["source_clicktracker_is_double_encoded"]){var f=ADGEAR.lang.safeDecodeURIComponent;
g=f(f(this["source_clicktracker"]))}else{g=this["source_clicktracker"]
}}var d=this["source_clicktracker_expects_encoded"]?encodeURIComponent(a):a;
a=g+d}return a},getClickUrl:function(b){if(!("clicks" in this)||!(b in this["clicks"])){return null
}if(this.env.isLivePreview()){return this.declared_click_urls[b]
}var a=arguments[1]||ADGEAR.QueryString({});
return this.getClickUrlFromPath(this.clicks[b],a)
},getInteractionUrl:function(a){if(("interactions" in this)&&(a in this["interactions"])){return this.env.deliveryUrl(this.interactions[a],{querystring:arguments[1]||ADGEAR.QueryString({}),localtime:false,trueref:false,deliveryhints:false})
}return null},getFileUrl:function(a){if(("files" in this)&&(a in this["files"])){return this.env.assetUrl(this.files[a])
}return null},getVariable:function(a){if(("variables" in this)&&(a in this["variables"])){return this.variables[a]
}return null},getContainerId:function(){return"adgear_"+String(this.instance_id).replace(/-/g,"_")
},getWidth:function(){if(this.getVariable("width")){return parseInt(this.getVariable("width"))
}var a=this["format_width"];if(a&&String(a)!=="1"){return a
}if(this["natural_width"]){return String(this["natural_width"])
}return"500"},getHeight:function(){if(this.getVariable("height")){return parseInt(this.getVariable("height"))
}var a=this["format_height"];if(a&&String(a)!=="1"){return a
}if(this["natural_height"]){return String(this["natural_height"])
}return"500"},getInstanceId:function(){return this.instance_id
},getTxnId:function(){return this.instance_id
},replaceKnownTokens:function(b){if(!b.match(/__AG_/)){return b
}b=b.replace(/__AG_CAMPAIGN_ID__/g,this.campaign_id);
b=b.replace(/__AG_PLACEMENT_ID__/g,this.placement_id);
b=b.replace(/__AG_AD_ID__/g,this.adunit_id);
b=b.replace(/__AG_AD_IMPRESSIONS_COUNT__/g,this.impressions_count);
b=b.replace(/__AG_AD_CLICKS_COUNT__/g,this.clicks_count);
b=b.replace(/__AG_INSTANCE_ID__/g,this.getInstanceId());
b=b.replace(/__AG_TXN_ID__/g,this.getTxnId());
b=b.replace(/__AG_CLIENT_IP__/g,this.client_ip);
b=b.replace(/__AG_FORMAT__/g,this.getWidth()+"x"+this.getHeight());
b=b.replace(/__AG_SITE_ANALYTICS__/g,this.site_analytics_params);
if(b.match(/__AG_GEO/)){b=b.replace(/__AG_GEO_COUNTRY_CODE__/g,this.getGeoCountryCode());
b=b.replace(/__AG_GEO_COUNTRY_NAME__/g,this.getGeoCountryName());
b=b.replace(/__AG_GEO_REGION__/g,this.getGeoRegion());
b=b.replace(/__AG_GEO_CITY__/g,this.getGeoCity());
b=b.replace(/__AG_GEO_ZIP_CODE__/g,this.getGeoPostalCode());
b=b.replace(/__AG_GEO_POSTAL_CODE__/g,this.getGeoPostalCode());
b=b.replace(/__AG_GEO_ISP__/g,this.getGeoIsp());
b=b.replace(/__AG_GEO_NETSPEED__/g,this.getGeoNetspeed());
b=b.replace(/__AG_GEO_LONGITUDE__/g,this.getGeoLongitude());
b=b.replace(/__AG_GEO_LATITUDE__/g,this.getGeoLatitude());
b=b.replace(/__AG_GEO_DMA_CODE__/g,this.getGeoDmaCode());
b=b.replace(/__AG_GEO_AREA_CODE__/g,this.getGeoAreaCode());
b=b.replace(/__AG_GEO_ORGANIZATION__/g,this.getGeoOrganization())
}if(b.match(/__AG_IMPR_HINT/)){for(var a in this.impression_hints){if(this.impression_hints.hasOwnProperty(a)){b=b.replace(RegExp("__AG_IMPR_HINT\\["+a+"\\]__","g"),this.getImpressionHint(a));
b=b.replace(RegExp("__AG_IMPR_HINT\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getImpressionHint(a)))
}}}if(b.match(/__AG_AD_VAR/)){for(var a in this.variables){if(this.variables.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_VAR\\["+a+"\\]__","g"),this.getVariable(a));
b=b.replace(RegExp("__AG_AD_VAR\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getVariable(a)))
}}}if(b.match(/__AG_AD_FILE_URL/)){for(var a in this.files){if(this.files.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_FILE_URL\\["+a+"\\]__","g"),this.getFileUrl(a));
b=b.replace(RegExp("__AG_AD_FILE_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getFileUrl(a)))
}}}if(b.match(/__AG_AD_CLICK_URL/)){for(var a in this.clicks){if(this.clicks.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_CLICK_URL\\["+a+"\\]__","g"),this.getClickUrl(a));
b=b.replace(RegExp("__AG_AD_CLICK_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getClickUrl(a)))
}}}if(b.match(/__AG_AD_IACTION_URL/)){for(var a in this.interactions){if(this.interactions.hasOwnProperty(a)){b=b.replace(RegExp("__AG_AD_IACTION_URL\\["+a+"\\]__","g"),this.getInteractionUrl(a));
b=b.replace(RegExp("__AG_AD_IACTION_URL\\["+a+"\\]:URL__","g"),encodeURIComponent(this.getInteractionUrl(a)))
}}}return b},prepThirdParty:function(b){var d=b;
var a=this["click_tracker"];if(String(a).length>0){var c=this["adunit_click_url"];
delete this["adunit_click_url"];d=d.replace(/__CLICK_TRACKER_URL__/g,this.getClickUrlFromPath(a+"?"));
d=d.replace(/__CLICK_TRACKER_URL_ENCODED__/g,encodeURIComponent(this.getClickUrlFromPath(a+"?")));
d=d.replace(/__CLICK_TRACKER_URL_DOUBLE_ENCODED__/g,encodeURIComponent(encodeURIComponent(this.getClickUrlFromPath(a+"?"))));
this["adunit_click_url"]=c}d=d.replace(/__RANDOM_NUMBER__/g,Math.floor(Math.random()*100000000000000));
d=d.replace(/__AG_TXN_ID__/g,this.getTxnId());
d=this.replaceKnownTokens(d);return d},regClick:function(b){var a=arguments[1]||ADGEAR.QueryString({});
var c=this.getClickUrl(b,a);if(c){ADGEAR.lang.log("AdUnit registered CLICK with name: "+String(b)+" - redirect URL: "+c+" - params: [ "+a.toString()+" ]")
}else{ADGEAR.lang.log("AdUnit attempted to register CLICK with name: "+String(b)+" - params: [ "+a.toString()+" ] - but click NOT FOUND!")
}ADGEAR.browser.topWindow().location=c},regInteraction:function(c){var b=arguments[1]||ADGEAR.QueryString({});
var a=this.env.eventQueue();var d=this.getInteractionUrl(c,b);
if(d){ADGEAR.lang.log("AdUnit registered INTERACTION/EVENT with name: "+String(c)+" - params: [ "+b.toString()+" ]")
}else{ADGEAR.lang.log("AdUnit attempted to register INTERACTION/EVENT with name: "+String(c)+" - params: [ "+b.toString()+" ] - but interaction NOT FOUND!")
}return a.dispatch(d)},getGeoCountryCode:function(){if(("geo" in this)&&("country_code" in this["geo"])){return String(this.geo.country_code)
}return null},getGeoCountryName:function(){if(("geo" in this)&&("country_name" in this["geo"])){return String(this.geo.country_name)
}return null},getGeoRegion:function(){if(("geo" in this)&&("region" in this["geo"])){return String(this.geo.region)
}return null},getGeoCity:function(){if(("geo" in this)&&("city" in this["geo"])){return String(this.geo.city)
}return null},getGeoPostalCode:function(){if(("geo" in this)&&("postal_code" in this["geo"])){return String(this.geo.postal_code)
}return null},getGeoIsp:function(){if(("geo" in this)&&("isp" in this["geo"])){return String(this.geo.isp)
}return null},getGeoNetspeed:function(){if(("geo" in this)&&("netspeed" in this["geo"])){return String(this.geo.netspeed)
}return null},getGeoLongitude:function(){if(("geo" in this)&&("longitude" in this["geo"])){return String(this.geo.longitude)
}return null},getGeoLatitude:function(){if(("geo" in this)&&("latitude" in this["geo"])){return String(this.geo.latitude)
}return null},getGeoDmaCode:function(){if(("geo" in this)&&("dma_code" in this["geo"])){return String(this.geo.dma_code)
}return null},getGeoAreaCode:function(){if(("geo" in this)&&("area_code" in this["geo"])){return String(this.geo.area_code)
}return null},getGeoOrganization:function(){if(("geo" in this)&&("organization" in this["geo"])){return String(this.geo.organization)
}return null},getImpressionHint:function(a){if(("impression_hints" in this)&&(a in this["impression_hints"])){return String(this.impression_hints[a])
}return null},doViewportDetect:function(){return(("viewport_detect" in this)&&(true===this["viewport_detect"])&&!this.env.isLivePreview())
},regOnLoadEvent:function(a){if(typeof window.addEventListener!="undefined"){window.addEventListener("load",a,false)
}else{if(typeof document.addEventListener!="undefined"){document.addEventListener("load",a,false)
}else{if(typeof window.attachEvent!="undefined"){window.attachEvent("onload",a)
}else{if(typeof window.onload=="function"){var b=window.onload;
window.onload=function(){b();a()}}else{window.onload=a
}}}}}}});ADGEAR.render=function(i,j,f){function c(o){if(("placement_id" in o)&&("adunit_id" in o)){o.env.addDeliveryHint("AG_S","p"+String(o.placement_id)+",a"+String(o.adunit_id))
}}function h(q){var r=null;try{if("tilings" in q){r=q.tilings;
if("served" in r){q.env.addDeliveryHint("AG_TS",String(r.served))
}if("unserved" in r){for(var p=0;p<r.unserved.length;
p++){q.env.addDeliveryHint("AG_TN",String(r.unserved[p]))
}}}}catch(o){}}function a(p){for(var o in ADGEAR.templateApi){p[o]=ADGEAR.templateApi[o]
}}function l(o){o.source_clicktracker=null;
o.source_clicktracker_expects_encoded=false;
o.source_clicktracker_is_encoded=false;o.source_clicktracker_is_double_encoded=false;
if((typeof ADGEAR_SOURCE_CLICKTRACKER==="string")&&(String(ADGEAR_SOURCE_CLICKTRACKER).toLowerCase().match(/^http/))){o.source_clicktracker=ADGEAR_SOURCE_CLICKTRACKER
}o.source_clicktracker_expects_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED;
o.source_clicktracker_is_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED;
o.source_clicktracker_is_double_encoded=(typeof ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED!=="undefined")&&ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED;
ADGEAR_SOURCE_CLICKTRACKER=null;ADGEAR_SOURCE_CLICKTRACKER_EXPECTS_ENCODED=null;
ADGEAR_SOURCE_CLICKTRACKER_IS_ENCODED=null;
ADGEAR_SOURCE_CLICKTRACKER_IS_DOUBLE_ENCODED=null
}function n(o){if(typeof OOBClickTrack==="string"){o.OOBClickTrack=OOBClickTrack
}OOBClickTrack=null}function d(o){if(typeof ADGEAR_ADUNIT_CLICK_URL==="string"&&ADGEAR_ADUNIT_CLICK_URL.toLowerCase().match(/^(http|tel)/)){o.adunit_click_url=ADGEAR_ADUNIT_CLICK_URL
}ADGEAR_ADUNIT_CLICK_URL=null}function m(o){if(typeof ADGEAR_RENDER_CB==="function"){o.render_cb=ADGEAR_RENDER_CB
}ADGEAR_RENDER_CB=null}if(("env" in j)&&("name" in j.env)){var k=ADGEAR.envs.config(j.env);
if(!k){ADGEAR.lang.log("Unable to reference environment specified by AdUnit payload (name = "+String(j.env["name"])+"). Aborting rendering!");
return false}j.env=k;c(j);h(j);l(j);n(j);
d(j);m(j);a(j);try{i(j)}catch(g){ADGEAR.lang.log("Failed in executing ad rendering template '"+String(j.template)+"' - placement ID: "+String(j.placement_id)+", adunit ID: "+String(j.adunit_id)+" - in environment '"+String((k.config())["name"])+"'. Exception: "+String(g));
if(f){try{f(j)}catch(b){ADGEAR.lang.log("Failed in executing backup rendering handler provided by '"+String(j.template)+"' - placement ID: "+String(j.placement_id)+", adunit ID: "+String(j.adunit_id)+" - in environment '"+String((k.config())["name"])+"'. Exception: "+String(b))
}}return false}}try{j.render_cb&&j.render_cb(j)
}catch(g){ADGEAR.lang.log("Failed to call user-supplied render callback. Exception: "+String(g))
}return true};ADGEAR.lang.namespace("ADGEAR.vendor");
ADGEAR.vendor.Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(d){var a="";
var m,k,h,l,j,g,f;var b=0;var c=ADGEAR.vendor.Base64;
d=c._utf8_encode(d);while(b<d.length){m=d.charCodeAt(b++);
k=d.charCodeAt(b++);h=d.charCodeAt(b++);l=m>>2;
j=((m&3)<<4)|(k>>4);g=((k&15)<<2)|(h>>6);
f=h&63;if(isNaN(k)){g=f=64}else{if(isNaN(h)){f=64
}}a=a+this._keyStr.charAt(l)+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(f)
}return a},decode:function(d){var a="";var m,k,h;
var l,j,g,f;var b=0;var c=ADGEAR.vendor.Base64;
d=d.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(b<d.length){l=this._keyStr.indexOf(d.charAt(b++));
j=this._keyStr.indexOf(d.charAt(b++));g=this._keyStr.indexOf(d.charAt(b++));
f=this._keyStr.indexOf(d.charAt(b++));m=(l<<2)|(j>>4);
k=((j&15)<<4)|(g>>2);h=((g&3)<<6)|f;a=a+String.fromCharCode(m);
if(g!=64){a=a+String.fromCharCode(k)}if(f!=64){a=a+String.fromCharCode(h)
}}a=c._utf8_decode(a);return a},_utf8_encode:function(b){b=b.replace(/\r\n/g,"\n");
var a="";for(var f=0;f<b.length;f++){var d=b.charCodeAt(f);
if(d<128){a+=String.fromCharCode(d)}else{if((d>127)&&(d<2048)){a+=String.fromCharCode((d>>6)|192);
a+=String.fromCharCode((d&63)|128)}else{a+=String.fromCharCode((d>>12)|224);
a+=String.fromCharCode(((d>>6)&63)|128);a+=String.fromCharCode((d&63)|128)
}}}return a},_utf8_decode:function(a){var d="";
var b=0;var f=c1=c2=0;while(b<a.length){f=a.charCodeAt(b);
if(f<128){d+=String.fromCharCode(f);b++}else{if((f>191)&&(f<224)){c2=a.charCodeAt(b+1);
d+=String.fromCharCode(((f&31)<<6)|(c2&63));
b+=2}else{c2=a.charCodeAt(b+1);c3=a.charCodeAt(b+2);
d+=String.fromCharCode(((f&15)<<12)|((c2&63)<<6)|(c3&63));
b+=3}}}return d}};ADGEAR.lang.namespace("ADGEAR.delivery");
ADGEAR.delivery.click_url=function(c,b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.click_url (please use adgear_instance.getClickUrl(name) instead)");
var a=c;if(typeof b!=="undefined"){ADGEAR.lang.log("Legacy click_url does not support arguments:",b)
}if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){var d={querystring:ADGEAR.QueryString({}),cachebust:false,localtime:false,trueref:false,deliveryhints:false};
a=ADGEAR_ENV.deliveryUrl(a,d)}return a};ADGEAR.delivery.file_url=function(b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.file_url (please use adgear_instance.getFileUrl(name) instead)");
var a=b;if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){a=ADGEAR_ENV.assetUrl(a)
}return a};ADGEAR.delivery.interaction_url=function(d,b){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.interaction_url (please use adgear_instance.getInteractionUrl(name) instead)");
var a=d;if(typeof b!=="undefined"){ADGEAR.lang.log("Legacy interaction_url does not support arguments:",b)
}if(a&&a.match(/^\//)&&typeof(ADGEAR_ENV)!="undefined"){var c={querystring:ADGEAR.QueryString({}),localtime:false,trueref:false,deliveryhints:false};
a=ADGEAR_ENV.deliveryUrl(a,c)}return a};ADGEAR.delivery.interaction=function(a){ADGEAR.lang.log("Deprecation Warning: ADGEAR.delivery.interaction (please use adgear_instance.regInteraction(name) instead)");
adgear_instance.env.eventQueue().dispatch(a)
};if(typeof ADGEAR==="undefined"){ADGEAR={}
}if((typeof ADGEAR==="object")&&!ADGEAR.hasOwnProperty("html5")){ADGEAR.html5={}
}ADGEAR.MsgBus=function(g,d){var a={};var b=d||window;
var f=false;try{window.postMessage({toString:function(){f=true
}},"*")}catch(c){}return{regListener:function(h,i){a[h]=i
},sendMessage:function(j,k,h){var i={bus:g,message:String(k),data:h};
if(f&&JSON&&JSON.stringify){i=JSON.stringify(i)
}if(typeof j.postMessage==="function"){j.postMessage(i,"*")
}},receiveMessage:function(k){var i=typeof k.data;
var j=null;if(i==="object"){j=k.data}else{if(i==="string"){try{j=JSON.parse(k.data)
}catch(h){}}}if(!j||!j.hasOwnProperty("bus")||!j.hasOwnProperty("message")||(j.bus!==g)||!a.hasOwnProperty(j.message)){return
}a[j.message](k.source,j.data)},regReceiver:function(h){if(typeof b.addEventListener!=="undefined"){b.addEventListener("message",h,false)
}else{if(typeof b.document.addEventListener!=="undefined"){b.document.addEventListener("message",h,false)
}else{if(typeof b.attachEvent!=="undefined"){b.attachEvent("onmessage",h)
}}}}}};ADGEAR.CreativeData=function(c){var b=c;
function a(d){return((b!==null)&&(b.hasOwnProperty("1pclick_encode"))&&b["1pclick_encode"])?encodeURIComponent(d):d
}return{isInitialized:function(){return(b)
},getField:function(d){return(this.isInitialized()&&b.hasOwnProperty(d))?b[d]:null
},getSubField:function(f,d){return(this.isInitialized()&&b.hasOwnProperty(f)&&b[f].hasOwnProperty(d))?b[f][d]:null
},buildClickTrackerUrl:function(g,h){var i=this.getField("1pclick_url");
var d=this.getField("clickdestoverride_url");
var f=this.getSubField("click_urls",g);if(!f){f=this.getSubField("click_urls","clickTag")
}if(!f){f=this.getSubField("click_urls","clickTAG")
}if(!f){f=this.getSubField("click_urls","clicktag")
}if(i){if(f){if(d){return(i+a(f+encodeURIComponent(d)))
}else{if(h){return(i+a(f+encodeURIComponent(h)))
}}return(i+a(f))}else{if(d){return(i+a(d))
}else{if(h){return(i+a(h))}}}}else{if(f){if(d){return(f+encodeURIComponent(d))
}else{if(h){return(f+encodeURIComponent(h))
}}return f}else{if(d){return d}else{if(h){return h
}}}}return null}}};ADGEAR.html5.adInFrame=window!==top;
ADGEAR.html5.canAccessTop=false;try{ADGEAR.html5.canAccessTop=!!(top.location.href)
}catch(e){}ADGEAR.html5.canAccessParent=false;
try{ADGEAR.html5.canAccessParent=!!(parent.location.href)
}catch(e){}ADGEAR.html5.isDAP=(typeof inDapMgrIf!=="undefined"||typeof inDapIF!=="undefined");
ADGEAR.html5.isAdSense=(typeof IN_ADSENSE_IFRAME!=="undefined")?IN_ADSENSE_IFRAME:false;
ADGEAR.html5.inFIF=(typeof window.inFIF!=="undefined");
ADGEAR.html5.isAJAX=(typeof window.isAJAX!=="undefined");
ADGEAR.html5.isYahoo=(ADGEAR.html5.inFIF||ADGEAR.html5.isAJAX);
ADGEAR.html5.isSafeFrame=(typeof window.$sf!=="undefined");
ADGEAR.html5.getWin=function(a){var b=a.getVariable("disable_iframe_busting");
if((a.getVariable("expand_type")===null||a.getVariable("expand_type")==="billboard")&&b===null){b=true
}if(ADGEAR.html5.adInFrame&&!ADGEAR.html5.canAccessTop&&!ADGEAR.html5.canAccessParent){return window
}if(!ADGEAR.html5.adInFrame||b||ADGEAR.html5.isAdSense||ADGEAR.html5.isSafeFrame){return window
}else{if(ADGEAR.html5.isYahoo||ADGEAR.html5.isDAP){return window.parent
}else{return ADGEAR.browser.topWindow()}}};
ADGEAR.html5.getDoc=function(a){return ADGEAR.html5.getWin(a).document
};ADGEAR.html5.getAssetsRoot=function(a){var c=a.env.proto();
var d=a.getVariable("bucket")||"a";var b=(c==="https")?"https://"+d+".adgear.com/":"http://cdn.adgear.com/"+d+"/";
return b};ADGEAR.html5.basicLoader=function(M,t,g){var Y=ADGEAR.html5.getWin(g);
var r=ADGEAR.html5.getDoc(g);if(g.getVariable("mraid")==="true"){document.write('<script src="mraid.js"><\/script>')
}function A(aq,ap){var ao;for(ao in aq){if(aq.hasOwnProperty(ao)){ap(aq[ao],ao,aq)
}}}function H(){ADGEAR.lang.log.apply(ADGEAR.lang,arguments)
}function d(ap,ao){if(ap===null&&typeof ao!=="undefined"&&ao!==null){return ao
}if(ap==="true"||ap==="1"){return true}else{if(ap==="false"||ap==="0"){return false
}}return ap}function k(at,ao,ap){if(typeof at.addEventListener!=="undefined"){at.addEventListener(ao,ap,false);
return true}else{if(typeof at.attachEvent!=="undefined"){at.attachEvent("on"+ao,ap);
return true}else{if(typeof at["on"+ao]==="function"){var ar=at["on"+ao];
at["on"+ao]=function(){ar();ap()};return true
}else{try{at["on"+ao]=ap}catch(aq){return false
}return typeof at["on"+ao]==="function"}}}}function ah(){if(top===self){return null
}var at=null;try{at=window.frameElement;if(at!==null&&(ADGEAR.html5.isYahoo||ADGEAR.html5.isDAP)){return at
}}catch(ar){}if(document&&document.body&&document.body.id){try{return window.parent.document.getElementById(document.body.id)
}catch(ar){}}var ao=window;var av=r.getElementsByTagName("iframe");
var aq=av.length;var ap;for(;ao!==top;ao=ao.parent){for(ap=0;
ap<aq;ap++){try{if(av[ap].contentWindow===ao){return av[ap]
}}catch(au){}}}return null}function ab(aq,ap){var ao=ah();
if(ao){ao.width=aq;ao.style.width=aq+"px";
ao.height=ap;ao.style.height=ap+"px"}}function S(ap){var at=ah();
var aq=at.parentNode;var ao=false;try{if(!ao){aq.insertBefore(ap,at);
at.style.display="none";ao=true;return ap
}}catch(ar){}}function ad(aq,at,ap,ar,ao){var av={top:"auto",left:"auto",right:"auto",bottom:"auto"};
var au={height:(ao-ap)/2,width:(ar-at)/2};
switch(String(aq).toLowerCase()){case"c":av.top=au.height;
av.left=au.width;break;case"b":av.top=0;av.left=au.width;
break;case"t":av.bottom=0;av.left=au.width;
break;case"l":av.top=au.height;av.right=0;
break;case"r":av.top=au.height;av.left=0;
break;case"bl":av.top=0;av.right=0;break;
case"tl":av.bottom=0;av.right=0;break;case"tr":av.bottom=0;
av.left=0;break;case"br":default:av.top=0;
av.left=0;break}return av}function am(at,ao,ax,ar,aq){var aw=ar-ao;
var au=aq-ax;var av=aw/2;var ap=au/2;switch(String(at).toLowerCase()){case"l":return{t:ap,r:0,b:ap,l:aw};
case"r":return{t:ap,r:aw,b:ap,l:0};case"b":return{t:0,r:av,b:au,l:av};
case"t":return{t:au,r:av,b:0,l:av};case"tl":return{t:au,r:0,b:0,l:aw};
case"tr":return{t:au,r:aw,b:0,l:0};case"bl":return{t:0,r:0,b:au,l:aw};
case"br":return{t:0,r:aw,b:au,l:0};case"c":return{t:ap,r:av,b:ap,l:av};
default:break}}function J(ap,ao){var aq=0;
ao=ao||10000;try{var at;for(at=ap.parentNode;
(typeof(at)!=="undefined"&&at.tagName&&at.tagName!=="BODY");
at=at.parentNode){if(at.style&&typeof(at.style.overflow)!=="undefined"&&aq<=ao){at.style.overflow="visible"
}aq++}}catch(ar){}}function P(ap){var ar=ap+"=";
var ao=document.cookie.split(";");var aq;
for(aq=0;aq<ao.length;aq++){var at=ao[aq];
while(at.charAt(0)===" "){at=at.substring(1,at.length)
}if(at.indexOf(ar)===0){return at.substring(ar.length,at.length)
}}return null}function y(ar,at,ap){var ao="";
if(ap){var aq=new Date();aq.setTime(aq.getTime()+(Number(ap)*3600000));
ao="; expires="+aq.toGMTString()}document.cookie=(ar+"="+at+ao+"; path=/")
}function aa(ao){y(ao,"",-1)}function al(ap){var ao=365*24;
y(U,ap,ao);ac=ap}function X(ar){var ao=g.env.eventQueue();
var ap=g.getVariable(ar);var aq=1;if(ap!==null){ao.dispatch(g.prepThirdParty(ap))
}while(aq){ap=g.getVariable(ar+String(aq));
if(ap!==null){ao.dispatch(g.prepThirdParty(ap));
aq++}else{if(aq===1){aq++}else{aq=0;break
}}}}function W(ap,ao){var aq=document.createElement(ap);
ao=ao||null;if(ao!==null){A(ao,function(at,ar,au){if(ar!=="style"){aq.setAttribute(ar,at)
}});ao.style=ao.style||null;if(ao.style!==null){A(ao.style,function(at,ar,au){aq.style[ar]=at
})}}return aq}function x(au,at,ao,aq,ap){var ar={};
ar.id=au+"_"+M;ar.src=at;ar.width=ao;ar.height=aq;
ar.border="0";ar.frameborder="0";ar.marginwidth="0";
ar.marginheight="0";ar.scrolling="no";ar.seemless="seemless";
ar.allowfullscreen="true";ar.webkitallowfullscreen="true";
ar.mozallowfullscreen="true";ar.style={};
ar.style["width"]=ao+"px";ar.style["height"]=aq+"px";
ar.style["border"]="0px";ar.style["position"]="absolute";
ar.style["top"]="0px";ar.style["left"]="0px";
ar.style["backgroundColor"]=B;ar.style["zIndex"]=aj;
ar.style["display"]="block";ar.style["margin"]="0px";
ar.style["padding"]="0px";A(ap,function(aw,av,ax){ax.style[av]=aw
});return W("iframe",ar)}var R={};R.width=g.getVariable("width")||g.getWidth();
R.height=g.getVariable("height")||g.getHeight();
R["1pclick_url"]=g.source_clicktracker||null;
if(R["1pclick_url"]){if(g.source_clicktracker_is_encoded){R["1pclick_url"]=ADGEAR.lang.safeDecodeURIComponent(R["1pclick_url"])
}else{if(g.source_clicktracker_is_double_encoded){R["1pclick_url"]=ADGEAR.lang.safeDecodeURIComponent(ADGEAR.lang.safeDecodeURIComponent(R["1pclick_url"]))
}}}R["1pclick_encode"]=g.source_clicktracker_expects_encoded||null;
R.clickdestoverride_url=g.adunit_click_url||null;
R["1poobclick_url"]=g.OOBClickTrack||null;
var s=ADGEAR.QueryString({});A(g.clicks,function(ar,ap,ao){var aq=g.getClickUrl(ap);
if(ar.match(/^http/)){aq=ar}aq=aq.replace(R["1pclick_url"],"");
if(R["1pclick_encode"]){aq=ADGEAR.lang.safeDecodeURIComponent(aq)
}if(!g.live_preview){aq=ADGEAR.lang.safeUrlAppend(aq,"AG_RED=")
}s.add(ap,aq)});R.click_urls=s.toHash();R.event_urls=g.interactions;
R.config_vars=g.config_vars||{};R.config_vars.isLive=!g.live_preview;
R.config_vars.adunit_id=g.adunit_id;R.config_vars.placement_id=g.placement_id;
R.config_vars.campaign_id=g.campaign_id;R.config_vars.width=R.width;
R.config_vars.height=R.height;if(g.ad_choices_enabled){R.config_vars.ad_choices_position=g.ad_choices_position
}A(g.variables,function(aq,ap,ao){if(ap!=="payload"){R.config_vars[ap]=aq
}});A(g.files,function(aq,ap,ao){R.config_vars[ap]=aq
});R.config_vars.type=g.getVariable("expand_type");
R.dynamic_vars=g.dynamic_vars||{};R.dynamic_vars.geoip={};
A(g.geo,function(aq,ap,ao){R.dynamic_vars.geoip[ap]=aq
});R.dynamic_vars.udata=g.udata;if(window.ADGEAR_UDATA&&g.getImpressionHint("AGT_BUYER_ID")){R.dynamic_vars.trader_udata=window.ADGEAR_UDATA[g.getImpressionHint("AGT_BUYER_ID")]
}R.impression_vars=g.impression_vars||{};
R.impression_vars.instance_id=g.instance_id;
R.impression_vars.client_ip=g.client_ip;A(g.impression_hints,function(aq,ap,ao){R.impression_vars[ap]=aq
});if(g.getVariable("expand_type")||g.getVariable("expanded_width")){R.expandable={};
R.expandable["width"]=g.getVariable("expanded_width");
R.expandable["height"]=g.getVariable("expanded_height");
R.expandable["direction"]=g.getVariable("expand_direction")
}R.debug=g.live_preview?true:false;var Z=ADGEAR.CreativeData(R);
var b=Z.getField("width");var f=Z.getField("height");
var G=t;var i=G.split("/");i.pop();var j=i.join("/")+"/";
var K=ADGEAR.html5.getAssetsRoot(g);var ai=g.getVariable("append_target")||false;
var an=d(g.getVariable("click_over"),false);
var aj=g.getVariable("z_index")||g.getVariable("z-index")||g.getVariable("zIndex")||"10";
var B=g.getVariable("background_color")||"white";
var E=d(g.getVariable("center_banner"),true);
var F=g.getVariable("expanded_path")||g.getVariable("expanded_src");
if(F&&!F.match(/^http/)){F=j+F}var Q=d(g.getVariable("remove_iframe"),false);
var u=d(g.getVariable("disable_scroll"),false);
var n=g.getVariable("expanded_width")||95;
var a=g.getVariable("expanded_height")||25;
var w=g.getVariable("expand_type");var c=g.getVariable("expand_direction")||"br";
var ak=d(g.getVariable("fullsize_iframe"),false);
var p=d(g.getVariable("pushdown"),false);
var V=ad(c,b,f,n,a);var h=ah();var q=d(g.getVariable("disable_iframe_busting"));
if((w===null||w==="billboard")&&q===null){q=true
}var z=d(g.getVariable("show_ad_image"),false);
var ac=null;var U="AdGear_ad"+g.adunit_id+"_state";
var v=g.getVariable("init_state")||"opened";
var T=d(g.getVariable("enable_saved_state"),false);
if(T){v=P(U)||v}var D=(v!==null&&v==="closed")?true:false;
var O=g.getFileUrl("backup_image")||g.getVariable("backup_image")||"backup_image.jpg";
if(!O.match(/^http/)){O=j+O}var I=false;var C=d(g.getVariable("force_backup"),false);
var o=g.getVariable("browser_condition");
if(o!==null&&!C){I=navigator.userAgent.toLowerCase().match(o.toLowerCase())?true:false
}if(C){I=true}var m=g.OOBClickTrack||null;
var l=K+"html/images/clicktag.png";var ag=ADGEAR.MsgBus("ADGEAR.html5",Y);
ag.regListener("ad_ready",function(ap,ao){H("ad_ready called");
ag.sendMessage(ap,"ld_ready",R)});ag.regListener("ad_debug",function(ap,ao){H(ao)
});ag.regListener("ad_expand",function(ap,ao){H("ad_expand called");
af(ao)});ag.regListener("ad_collapse",function(ap,ao){H("ad_collapse called");
N(ao)});function L(ap,ao){c=ao}function af(ar){var av=ADGEAR.html5.getDoc(g);
var ap=av.getElementById(M);var au=av.getElementById("inner_container_"+M);
var at=av.getElementById("iframe_"+M);if(z){var aq=av.getElementById("adgear_show_ad_"+M);
ap.removeChild(aq);if(Q){at=x("iframe",G,(ak?n:b),(ak?a:f));
au.appendChild(at)}au.style.display=""}if(w==="expand"||w==="billboard"){at.style.width=(w==="billboard"?b:n)+"px";
at.style.height=(w==="billboard"?f:a)+"px";
if(String(c).toLowerCase()==="c"){at.style.top="0px";
at.style.left="0px";at.style.bottom="0px";
at.style.right="0px"}}if(typeof(mraid)!=="undefined"){mraid.setExpandProperties({width:Number((w==="billboard"?b:n)),height:Number((w==="billboard"?f:a)),useCustomClose:true,x:0,y:0});
mraid.expand()}if(p||w==="billboard"){ap.style.width=(w==="billboard"?b:n)+"px";
ap.style.height=(w==="billboard"?f:a)+"px"
}if(ADGEAR.html5.isDAP&&g.wlxRmAd){g.wlxRmAd.expand()
}if(ADGEAR.html5.isAdSense&&g.creativeToolset){if(!ar||!ar.expanding){g.creativeToolset.expandWindow()
}}if(ADGEAR.html5.isSafeFrame&&g.safeframe_api){var ao=am(c,b,f,n,a);
if(p&&g.safeframe_api.supports()["exp-push"]){ao.push=true
}g.safeframe_api.expand(ao);ap.style.width=n+"px";
ap.style.height=a+"px"}ab((w==="billboard"?b:n),(w==="billboard"?f:a));
g.regInteraction("OPEN_LAYER");if(T){al("opened")
}X("expansion_tracker");if(u){av.getElementsByTagName("body")[0].style.overflow="hidden"
}if(ak){ap.style.overflow=""}ag.sendMessage(Y,"ld_expanded")
}function N(aq){var au=ADGEAR.html5.getDoc(g);
var ao=au.getElementById(M);var at=au.getElementById("inner_container_"+M);
var ar=au.getElementById("iframe_"+M);if(w==="expand"||w==="billboard"){if(!ak){ar.style.width=(w==="billboard"?n:b)+"px";
ar.style.height=(w==="billboard"?a:f)+"px"
}ar.style.top=!isNaN(V.top)?V.top+"px":V.top;
ar.style.left=!isNaN(V.left)?V.left+"px":V.left;
ar.style.bottom=!isNaN(V.bottom)?V.bottom+"px":V.bottom;
ar.style.right=!isNaN(V.right)?V.right+"px":V.right;
at.style.top=!isNaN(V.top)?-(V.top)+"px":V.top;
at.style.left=!isNaN(V.left)?-(V.left)+"px":V.left;
at.style.bottom=!isNaN(V.bottom)?-(V.bottom)+"px":V.bottom;
at.style.right=!isNaN(V.right)?-(V.right)+"px":V.right
}if(z){var ap=document.createElement("img");
ap.setAttribute("id","adgear_show_ad_"+M);
ap.setAttribute("src",g.getFileUrl("show_ad"));
ap.setAttribute("width",n);ap.setAttribute("height",a);
ap.style.width=n+"px";ap.style.height=a+"px";
ap.style.cursor="pointer";if(Q){at.removeChild(ar)
}at.style.display="none";ao.appendChild(ap);
k(ap,"click",af);ao.style.width=n+"px";ao.style.height=a+"px"
}if(typeof(mraid)!=="undefined"){mraid.close()
}if(p||w==="billboard"){ao.style.width=(w==="billboard"?n:b)+"px";
ao.style.height=(w==="billboard"?a:f)+"px"
}if(ADGEAR.html5.isDAP&&g.wlxRmAd){g.wlxRmAd.collapse()
}if(ADGEAR.html5.isAdSense&&g.creativeToolset){if(!aq||!aq.collapsing){g.creativeToolset.collapseWindow()
}}if(ADGEAR.html5.isSafeFrame&&g.safeframe_api){g.safeframe_api.collapse();
ao.style.width=b+"px";ao.style.height=f+"px"
}ab((w==="billboard"?n:b),(w==="billboard"?a:f));
g.regInteraction("CLOSE_LAYER");if(T){al("closed")
}if(u){au.getElementsByTagName("body")[0].style.overflow=""
}if(ak){ao.style.overflow="hidden"}ag.sendMessage(Y,"ld_collapsed")
}(function ae(){ag.regReceiver(function(aK){if(r.getElementById("iframe_"+M)&&aK.source===r.getElementById("iframe_"+M).contentWindow){ag.receiveMessage(aK);
if(typeof(aK.data)==="string"&&aK.data.match(g.instance_id)){var aJ=aK.data;
var aH=null;var aG=null;try{aH=aK.data.split("::")[1]
}catch(aI){}try{aG=aK.data.split("::")[2]
}catch(aI){}if(aJ.match(/adgear_init/i)){H("Warning - Legacy support: legacy init function called");
aK.source.postMessage(JSON.stringify(R),"*")
}if(aJ.match(/^adgear(|_billboard)_openlayer/i)){H("Warning - Legacy support: legacy open function called");
af(aH)}if(aJ.match(/^adgear(|_billboard)_closelayer/i)){H("Warning - Legacy support: legacy close function called");
N(aH)}if(aJ.match(/^adgear_interaction/i)){H("Warning - Legacy support: legacy interaction function called");
g.regInteraction(aH)}}}});var ap=ADGEAR.QueryString({});
ap.add("adserver","adgear");ap.add("instance_string",g.instance_id);
var ay=["clickTAG","clickTag","clicktag"];
var az=ay.length;var aF;var aB=s.toHash();
var ar="";for(aF=0;aF<az;aF++){if(aB[ay[aF]]){ap.add(ay[aF],Z.buildClickTrackerUrl(ay[aF]));
ar=Z.buildClickTrackerUrl(ay[aF]);break}}G=ADGEAR.lang.safeUrlAppend(G,ap.toString());
function au(){if(m){var aG=g.env.eventQueue();
aG.dispatch(m)}}var aA='if ("'+m+'" !== "null") {';
aA+='var img = new Image(); img.src = "'+m+'"; }';
function ax(aN){var aM=ADGEAR.html5.getWin(aN);
var aK=ad(aN);if(ADGEAR.html5.isDAP){var aG=aM["$WLXRmAd"];
if(aG){aN.wlxRmAd=aG;aN.wlxRmAd.init({width:aN.width,height:aN.height,offsetLeft:aK.left,offsetTop:aK.top,offsetRight:aK.right,offsetBottom:aK.bottom})
}}if(ADGEAR.html5.isAdSense){aN.creativeToolset=new CreativeToolset();
var aJ=function(aO){switch(aO){case 0:return"TL";
case 1:return"TR";case 2:return"BR";case 3:return"BL"
}};var aH=function(aP,aO,aQ){L(aN,aJ(aQ));
af({expanding:true})};var aL=function(){N({collapsing:true})
};aN.creativeToolset.enableExpansion({width:Number(aN.config.expandedWidth),height:Number(aN.config.expandedHeight),expansionCallback:aH,collapseCallback:aL})
}if(ADGEAR.html5.isSafeFrame){aN.safeframe_api=window.$sf.ext;
var aI=function(aO,aP){};aN.safeframe_api.register(b,f,aI)
}}var ao=document.createElement("div");ao.setAttribute("id",M);
ao.style.width=b+"px";ao.style.height=f+"px";
ao.style.position="relative";ao.style.display="block";
ao.style.visibility="visible";ao.style.zIndex=aj;
if(E){ao.style.margin="auto";ao.style.textAlign="center"
}if(ak){ao.style.overflow="hidden"}var aw=x("iframe",G,(ak?n:b),(ak?a:f));
if(!I&&w!==null){aw.style.top=!isNaN(V.top)?V.top+"px":V.top;
aw.style.left=!isNaN(V.left)?V.left+"px":V.left;
aw.style.bottom=!isNaN(V.bottom)?V.bottom+"px":V.bottom;
aw.style.right=!isNaN(V.right)?V.right+"px":V.right
}if(I||an){var at=document.createElement("a");
at.setAttribute("href",ar);at.setAttribute("target","_blank");
at.style.cursor="pointer";at.style.position=(!I&&an)?"absolute":"relative";
at.style.top=0+"px";at.style.left=0+"px";
at.style.width=b+"px";at.style.height=f+"px";
at.style.zIndex=Number(aj)+1;at.setAttribute("onclick",aA);
var aC=document.createElement("img");aC.setAttribute("src",(!I&&an)?l:O);
aC.setAttribute("width",b);aC.setAttribute("height",f);
aC.setAttribute("border","0");aC.style.width=b+"px";
aC.style.height=f+"px";aC.style.border="0px";
aC.style.backgroundColor=(!I&&an)?"transparent":B;
aC.style.zIndex=Number(aj)+1;at.appendChild(aC);
ao.appendChild(at)}if(!I&&w!==null){var aq=document.createElement("div");
aq.id="inner_container_"+M;aq.style.width=(w==="billboard"?b:n)+"px";
aq.style.height=(w==="billboard"?f:a)+"px";
aq.style.overflow="hidden";aq.style.position="absolute";
aq.style.top=!isNaN(V.top)?-(V.top)+"px":V.top;
aq.style.left=!isNaN(V.left)?-(V.left)+"px":V.left;
aq.style.bottom=!isNaN(V.bottom)?-(V.bottom)+"px":V.bottom;
aq.style.right=!isNaN(V.right)?-(V.right)+"px":V.right;
aq.appendChild(aw);ao.appendChild(aq);ax(g)
}else{if(!I){ao.appendChild(aw)}}if(ai){var aE=r.querySelector(ai);
if(aE===null){aE=document.querySelector(ai)
}if(aE!==null){aE.appendChild(ao)}}else{if(h&&!q){ao=S(ao)
}else{var aD=document.createElement("div");
aD.appendChild(ao);var av=false;if(document.body===null){document.writeln("<html><body>");
av=true}document.write(aD.innerHTML);if(av===true){document.writeln("</body></html>")
}}}ab(b,f);X("impressions_tracker");if(w!==null&&D){N("init")
}if(ADGEAR.adchoices){ADGEAR.adchoices.init(g)
}if(w!==null){J(ao)}})()};ADGEAR.html5.loader=function(a){function b(i){if(i.getVariable("full_path")){return i.getVariable("full_path")
}var g=ADGEAR.html5.getAssetsRoot(i);var d=i.getVariable("main_directory");
var f=i.getVariable("campaign_id")||i.campaign_id;
var h=i.getVariable("path")||"";var c=g+"clients/"+encodeURIComponent(String(d))+"/"+encodeURIComponent(String(f))+"/"+h;
return c}ADGEAR.html5.basicLoader(a.getContainerId(),b(a),a)
};ADGEAR.lang.singleton("ADGEAR.comscore.vce",function(){var a;
function b(c){var d=document.createElement("div");
a=document.createElement("script");a.src=c.comscore_tracker;
d.appendChild(a);document.writeln(d.innerHTML)
}return{init:function(c){if(("comscore_tracker" in c)&&c.comscore_tracker!=null&&c.comscore_tracker!=""){b(c)
}}}});ADGEAR.lang.singleton("ADGEAR.nielsen.ocr",function(){var a;
function b(c){var d=document.createElement("div");
if(c.nielsen_masked_enabled!=null&&c.nielsen_masked_enabled===true){a=document.createElement("script")
}else{a=document.createElement("img");a.style.display="none"
}a.src=c.nielsen_tracker;d.appendChild(a);
document.writeln(d.innerHTML)}return{init:function(c){if(("nielsen_tracker" in c)&&c.nielsen_tracker!=null&&c.nielsen_tracker!=""){b(c)
}}}});ADGEAR.lang.singleton("ADGEAR.moat",function(){var a;
function b(g){var d=!!(top.location.href);
var h=(window!=top);var f=null;if(h&&d){f=top.document.getElementById(g)
}if(f===null){f=document.getElementById(g)
}return f}function c(g,f){var d;var h=document.createElement("div");
a=document.createElement("script");a.src=g.moat_viewability_tracker;
h.appendChild(a);if(f){d=b(f)}if(d){d.appendChild(a)
}else{document.writeln(h.innerHTML)}}return{init:function(f,d){if(("moat_viewability_tracker" in f)&&f.moat_viewability_tracker!=null&&f.moat_viewability_tracker!=""){c(f,d)
}}}});ADGEAR.render(function(ddata){var global_evaler=window.execScript||window.eval||eval;
(function(instance){var types=[["clicks","getClickUrl"],["interactions","getInteractionUrl"],["files","getFileUrl"]];
for(var i=0;i<types.length;i++){var type_name=types[i][0];
var resolver_name=types[i][1];if(!instance[type_name]){continue
}for(var name in instance[type_name]){var url=(instance[resolver_name])(name);
if(typeof url==="string"){instance[type_name][name]=url;
ADGEAR.lang.log("Warning - Legacy support: pre-resolved AdUnit URL: adgear_instance['"+type_name+"']['"+name+"'] = "+url)
}}}})(ddata);window.adgear_instance=ddata;
global_evaler(ddata.prepThirdParty(ADGEAR.vendor.Base64.decode(ddata.getVariable("payload"))));
ADGEAR.comscore.vce.init(ddata);ADGEAR.nielsen.ocr.init(ddata);
ADGEAR.moat.init(ddata)},{template:"Standard::Javascript",instance_id:"2d50fe08-7530-11e8-98fa-0cc47ade855a",env:{delivery:{https:{hostname:"d.adgear.com"},http:{hostname:"d.adgear.com"}},assets:{https:{hostname:"a.adgear.com",bucket:""},http:{hostname:"cdn.adgear.com",bucket:"a"}},name:"production"},live_preview:false,tilings:{},campaign_id:24269,placement_id:299364,adunit_id:197252,format_width:728,format_height:90,natural_width:null,natural_height:null,impressions_count:0,clicks_count:0,impression_tracker:"",click_tracker:"\/clicks\/thirdparty\/b=VFhOPTJkNTBmZTA4LTc1MzAtMTFlOC05OGZhLTBjYzQ3YWRlODU1YQ**\/p=299364\/a=197252",clicks:{ "clickTAG": "\/clicks\/ext\/b=VFhOPTJkNTBmZTA4LTc1MzAtMTFlOC05OGZhLTBjYzQ3YWRlODU1YQ**\/p=299364\/a=197252\/c=179184" },interactions:{ },files:{},geo:{ "country_code": "GB", "country_name": "United Kingdom", "region": "H9", "city": "London", "postal_code": "EC2V", "isp": "Yahoo!", "organization": "Yahoo!", "longitude": "-0.093100", "latitude": "51.514198" },viewport_detect:false,impression_hints:{ "AG_R": "1489423532" },variables:{path:"728x90/index.html",main_directory:"thegate",payload:"KGZ1bmN0aW9uKCkgewogIHZhciBkZGF0YSA9IHdpbmRvdy5kZGF0YSB8fCB3aW5kb3cuYWRnZWFyX2luc3RhbmNlOwogIEFER0VBUi5odG1sNS5sb2FkZXIoZGRhdGEpOwp9KSgpOwo="},declared_click_urls:{clickTAG:"https://www.chilternrailways.co.uk/best-price-promise/?utm_source=Media_IQ&utm_campaign=Cheaper_With&utm_medium=Leaderboard"},rtb_data:{ },comscore_tracker:null,nielsen_tracker:null,nielsen_masked_enabled:false,ad_choices_enabled:false,ad_choices_position:"TR",moat_viewability_tracker:null,client_ip:"193.93.199.64",udata:{ },site_analytics_params:""});