if(window.kwait && kwait.deps && kwait.deps["pw_js"] && kwait.deps["pw_js"].length){
	kwait.push([kwait.deps["pw_js"], function(){
		delete kwait.deps["pw_js"];
		var s = document.createElement("script"); s.src="\/\/www.repstatic.it\/minify\/sites\/repubblica\/nazionale\/2020-v1\/config.cache.php?name=pw_js";
		document.head.appendChild(s);
	}]);
} else {if(!window.pw)window.pw={};var deepExtend=function(out){out=out||{};for(var i=1;i<arguments.length;i++){var obj=arguments[i];if(!obj)
continue;for(var key in obj){if(obj.hasOwnProperty(key)){if(typeof obj[key]==='object'){if(obj[key]instanceof Array==true)
out[key]=obj[key].slice(0);else
out[key]=deepExtend(out[key],obj[key]);}
else
out[key]=obj[key];}}}
return out;};pw.config={COOKIE_NAME:"kw_pw_data",COOKIE_EXPIRE:365,CLUSTER_COOKIE_NAME:"kw_pw",DEFAULT_COUNTER:"counter1",VALIDITY_PERIOD:"month",PW_PAGE_URL:location.protocol+"//scripts.repubblica.it/pw/pw.js",PW_TRACKING_URL:location.protocol+"//scripts.repubblica.it/pw/void.js",DRY_RUN:true}
pw.config.referrer={};
(function(){if(window.pw&&window.jQuery&&pw.config){var $=window.jQuery;var is_test=pw.config.TEST;if(is_test){var sfoglio="https://test.quotidiano.repubblica.it/edicola/manager?service=chkuserservicejs&testata=repubblica";var cookie_name=RenderSocial.COOKIE_NAME;var pw2_cookie_name=RenderSocial.COOKIE_NAME_PREMIUM;var quotidiani="https://test.quotidiani.repubblica.it/";var static_base="https://test.repstatic.it";}else{var sfoglio="https://quotidiano.repubblica.it/edicola/manager?service=chkuserservicejs&testata=repubblica";var cookie_name=RenderSocial.COOKIE_NAME;var pw2_cookie_name="repubblicasfoglio";var quotidiani="https://quotidiani.repubblica.it/";var static_base="https://www.repstatic.it";}
pw.config=$.extend(true,pw.config,{PW_PAGE2_URL:sfoglio,PW2_COOKIE_NAME:pw2_cookie_name,LOGGED_COOKIE_NAME:cookie_name,DRY_RUN:false});window.pw_redirect=function(ev,data){};}})();;
(function(){if(window.jQuery){var $=window.jQuery;if(!$.deparam){(function(h){h.deparam=function(i,j){var d={},k={"true":!0,"false":!1,"null":null};h.each(i.replace(/\+/g," ").split("&"),function(i,l){var m;var a=l.split("="),c=decodeURIComponent(a[0]),g=d,f=0,b=c.split("]["),e=b.length-1;/\[/.test(b[0])&&/\]$/.test(b[e])?(b[e]=b[e].replace(/\]$/,""),b=b.shift().split("[").concat(b),e=b.length-1):e=0;if(2===a.length)if(a=decodeURIComponent(a[1]),j&&(a=a&&!isNaN(a)?+a:"undefined"===a?void 0:void 0!==k[a]?k[a]:a),e)for(;f<=e;f++)c=""===b[f]?g.length:b[f],m=g[c]=f<e?g[c]||(b[f+1]&&isNaN(b[f+1])?{}:[]):a,g=m;else h.isArray(d[c])?d[c].push(a):d[c]=void 0!==d[c]?[d[c],a]:a;else c&&(d[c]=j?void 0:"")});return d}})(jQuery);}
if(!window.pw)return;if(!pw.config)return;if(location.href.indexOf("kw_dry_run=false")>=0&&pw.config.DRY_RUN){pw.config.DRY_RUN=false;}
var COOKIE_NAME=pw.config.COOKIE_NAME;var PW2_COOKIE_NAME=pw.config.PW2_COOKIE_NAME;var COOKIE_EXPIRE=pw.config.COOKIE_EXPIRE;var CLUSTER_COOKIE_NAME=pw.config.CLUSTER_COOKIE_NAME;var CLUSTER_COOKIE_SET=pw.config.CLUSTER_COOKIE_SET;var LOGGED_COOKIE_NAME=pw.config.LOGGED_COOKIE_NAME;var LOGGED_CLUSTER=pw.config.LOGGED_CLUSTER;if(!LOGGED_CLUSTER)LOGGED_CLUSTER="logged";var SITE_CLUSTER=pw.config.SITE_CLUSTER;var PW_PAGE_URL=pw.config.PW_PAGE_URL;var PW_PAGE2_URL=pw.config.PW_PAGE2_URL;var PW_TRACKING_URL=pw.config.PW_TRACKING_URL;var VALIDITY_PERIOD=pw.config.VALIDITY_PERIOD;var DEFAULT_COUNTER=pw.config.DEFAULT_COUNTER;var DRY_RUN=pw.config.DRY_RUN;var CALLBACKS=pw.config.CALLBACKS;var counter_data={};var intermediate_data={};current_page_counter=null;pw_assistant_info=null;actual_counter=null;actual_limit=null;info_user_logged=false;actual_blocked=0;var addParams=function(url,params){if(url.indexOf("?")>=0)url+="&";else url+="?";url+=$.param(params);return url;}
var getLogger=function(context){var ret={log:function(){},error:function(){}};if(window.common&&common.logging){ret=common.logging.getLogger(context);}else if(window.console){ret=window.console;}
return ret;}
var logger=getLogger("PW");var readDate=function(source){try{if(source.indexOf("+")>-1&&(source.indexOf("+")==source.length-5)){source=source.split("+")[0];}}catch(e){}
source=source.replace(/\//g,"-");source=source.replace(/\s+/g,"T");return new Date(Date.parse(source));}
var getFirstLevelDomain=function(){var d=document.domain;var idx=d.lastIndexOf(".",d.lastIndexOf(".")-1);return d.substring(idx);}
var readCookie=function(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;};var setCookie=function(cookieName,cookieValue,domain,path,nDays){if(!domain)domain=document.domain;if(!path)path="/";var today=new Date();if(nDays==null||nDays==0)nDays=1;var expire=new Date(today.getTime()+3600000*24*nDays);var cookieString=cookieName+"="+cookieValue+";expires="+expire.toGMTString()
+";domain="+domain+";path="+path+";";document.cookie=cookieString;}
var config={isTracked:function(){if(!window.pw||!pw.page)return false;var ret=pw.page.tracked===true||(pw.page.tracked&&pw.page.tracked=="true");return ret;},getDays:function(){if(!window.pw||!pw.page)return null;try{return parseInt(pw.page.days);}catch(e){return undefined;}},getFromDay:function(){if(!window.pw||!pw.page)return null;try{var ret=parseInt(pw.page.from_day);if(isNaN(ret))return null;else return new Date(ret*1000);}catch(e){return undefined;}},getToDay:function(){if(!window.pw||!pw.page)return null;try{var ret=parseInt(pw.page.to_day);if(isNaN(ret))return null;else return new Date(ret*1000);}catch(e){return undefined;}},getCounters:function(clusters){if(!window.pw||!pw.page)return null;var counters=pw.page.counters;if(!counters)return null;if(!clusters){clusters=[];}
var counter_ids_map={}
var counter_ids=[];var add_to_counters=function(cluster){var counter_ids1=counters[cluster];if(counter_ids1&&!(counter_ids1 instanceof Array)){counter_ids1=[counter_ids1]}
if(counter_ids1){for(var j=0;j<counter_ids1.length;j++){var counter_id=counter_ids1[j];if(!counter_ids_map[counter_id]){counter_ids_map[counter_id]=true;counter_ids.push(counter_id);}}}}
for(var i=0;i<clusters.length;i++){var cluster=clusters[i];add_to_counters(cluster);}
if(counter_ids.length==0){add_to_counters("default");if(counter_ids.length==0){counter_ids.push(DEFAULT_COUNTER);}}
var ret=[];for(var i=0;i<counter_ids.length;i++){var counter_id=counter_ids[i];var counter_data1=counter_data[counter_id];if(counter_data1)ret.push(counter_data1);}
return ret;},getPublished:function(){var published=$("meta[property*=':published_time']").attr("content");if(published){return readDate(published);}
return null;},getAllowedReferrers:function(){if(!window.pw||!pw.page)return null;return pw.page.allowedReferrers;},getClusters:function(callback){var readClusters=function(){var ret=readCookie(CLUSTER_COOKIE_NAME);var logged=false;if(LOGGED_COOKIE_NAME)logged=!!readCookie(LOGGED_COOKIE_NAME);if(ret){var ret=ret.replace(/^\"+|\"+$/g,'');ret=ret.split(",").slice(1);}else ret=[];if(logged&&ret.indexOf(LOGGED_CLUSTER)<0){ret.push(LOGGED_CLUSTER);info_user_logged=true;}
else
{if(SITE_CLUSTER){ret.push(SITE_CLUSTER);}}
return ret;}
onCookieAvailable=function(){onCookieAvailable=undefined;var ret=readClusters();callback(ret);}
var cookie=readCookie(CLUSTER_COOKIE_NAME);var ret=readClusters();if(cookie||!CLUSTER_COOKIE_SET||!callback){if(!callback)return ret;else callback(ret);}else if(CLUSTER_COOKIE_SET){$.ajax({url:CLUSTER_COOKIE_SET,dataType:'script',cache:true,success:onCookieAvailable});setTimeout(onCookieAvailable,1000);}}}
var cookie={}
cookie.get=function(cookie_name){if(!cookie_name)cookie_name=COOKIE_NAME;var cookie=readCookie(cookie_name);if(cookie===null)cookie={}
else{cookie=$.deparam(cookie);}
return cookie}
cookie.set=function(cookie){setCookie(COOKIE_NAME,$.param(cookie),getFirstLevelDomain(),"/",COOKIE_EXPIRE);}
cookie.increment=function(counter){var counter_id=counter.id;var limit=counter.getLimit();var cookieVal=cookie.get();if(!cookieVal[counter_id])cookieVal[counter_id]={};var current=cookieVal[counter_id];if(current.c===undefined)current.c=0;current.c++;var after_limit=current.c>=limit;if(!after_limit){delete current.blk;}
cookieVal[counter_id]=current;logger.log("after_paywall: counter.id: "+counter.id);logger.log("after_paywall: value: "+current.c);logger.log("after_paywall: limit: "+limit);logger.log("after_paywall: counter after_limit: "+after_limit);current_page_counter=current.c;cookie.set(cookieVal);}
cookie.getIntermediateRedirect=function(counters){var cookieVal=cookie.get();var ret=null;if(cookieVal){for(var i=0;i<counters.length;i++){var counter=counters[i]
var counter_id=counter.id;var cookieVal1=cookieVal[counter_id];int_test=cookieVal1!==undefined;var int_trig_id=null;var int_trig_data=null;var int_trigs=[];if(counter.intermediate&&int_test){$.each(counter.intermediate,function(i,intr_id){intr_data=intermediate_data[intr_id];if(intr_data&&cookieVal1.c==(intr_data.getLimit()+1)&&(!cookieVal1.intr||!cookieVal1.intr[intr_id])){if(!int_trig_id){int_trig_id=intr_id;int_trig_data=intr_data;}
int_trigs.push(intr_id);}});}
if(int_trig_id){if(ret==null){var red=addParams(int_trig_data.redirect,{"backurl":location.href,"counter":counter_id,"intr":int_trig_id});ret={"redirect":red,"counter":counter_id,"intermediate":int_trig_id};}
cookieVal1.c--;if(!cookieVal1.intr)cookieVal1.intr={};$.each(int_trigs,function(i,intr_id){cookieVal1.intr[intr_id]=1;});}}}
cookie.set(cookieVal);return ret;}
cookie.increment_blocked=function(counter){var cookieVal=cookie.get();if(!cookieVal[counter])cookieVal[counter]={};var current=cookieVal[counter];if(!current.blk){current.blk=1;}else{current.blk++;}
cookieVal[counter]=current;cookie.set(cookieVal);}
cookie.set_last_blocked=function(counter_id){var cookieVal=cookie.get();cookieVal["_lstblk"]=counter_id;cookie.set(cookieVal);}
cookie.getCounterValue=function(counter){var ret={c:0};var cookieVal=cookie.get();if(cookieVal[counter.id])ret=cookieVal[counter.id];return ret;}
cookie.setValidFrom=function(){var cookieVal=cookie.get();var now=getNow();now=getTime(now);var vf=now;cookieVal._vf=vf;cookie.set(cookieVal);}
cookie.getValidTo=function(now,cookieVal){if(cookieVal._vf!==undefined){var vf=parseInt(cookieVal._vf);}else{var vf=getTime(now);}
var vt=null;if(vf&&VALIDITY_PERIOD){vf=new Date(vf*1000);if(VALIDITY_PERIOD=="hour"||VALIDITY_PERIOD=="day"||VALIDITY_PERIOD=="week"||VALIDITY_PERIOD=="month"){vt=new Date(vf.getTime());vt.setUTCSeconds(0);vt.setUTCMinutes(0);vt.setUTCHours(0);}
if(vt){if(VALIDITY_PERIOD=="hour"){vt.setUTCHours(vf.getUTCHours()+1);}else if(VALIDITY_PERIOD=="day"){vt.setUTCDate(vt.getUTCDate()+1);}else if(VALIDITY_PERIOD=="week"){vt.setUTCDate(vt.getUTCDate()-vt.getUTCDay()+7+1);}else if(VALIDITY_PERIOD=="month"){vt.setUTCDate(1);vt.setUTCMonth(vt.getUTCMonth()+1);}}}
return vt;}
cookie.setValidTo=function(now){var cookieVal=cookie.get();if(now&&cookieVal){var vt=cookie.getValidTo(now,cookieVal);var vt1=getTime(vt);if(vt&&(cookieVal._vt===undefined||cookieVal._vt!=vt1)){cookieVal._vt=vt1;cookie.set(cookieVal);}}}
cookie.resetExpired=function(now){var cookieVal=cookie.get();if(now&&cookieVal){var vt=cookie.getValidTo(now,cookieVal);if(vt&&getTime(now)>getTime(vt)){cookieVal={};cookie.set(cookieVal);}}}
var getTime=function(date){return Math.round(date.getTime()/ 1000);}
var getNow=function(){if(window.pw&&pw.time&&!isNaN(parseInt(pw.time))){return new Date(parseInt(pw.time)*1000);}else{return new Date();}}
var checkAllowed=function(){var allowed=false;var allowedReferrers=config.getAllowedReferrers();var referrers=pw.config.referrer;if(referrers===undefined)referrers={};if(pw.referrer!==undefined){$.each(pw.referrer,function(k,v){referrers[k]=v;});}
if(allowedReferrers&&referrers){var referrer=document.referrer;var regexps=[];for(var i=0;i<allowedReferrers.length;i++){var allowedReferrer=allowedReferrers[i];if(allowedReferrer&&referrers[allowedReferrer]){regexps=regexps.concat(referrers[allowedReferrer]);}}
for(var i=0;i<regexps.length;i++){var regexp=regexps[i];regexp=new RegExp(regexp);var res=regexp.exec(referrer);if(res&&res.length>0){allowed=true;}}}
return allowed;}
var getPss=function(counters,now){var ret=false;if(window.pw&&pw.pw2)ret=true;return ret;}
var statusCallbacks=$({});var status=null;var pw_assistant=function(stat)
{var allowed=true;if(stat.status=="blocked")
allowed=false;if(current_page_counter===null)
{if(actual_limit===null)
actual_limit=0;var a=parseInt(actual_blocked);var b=parseInt(actual_limit);var c=a+b;current_page_counter=c;}
var userinfo={authorized:allowed,auth_info:stat.status,consumed:current_page_counter,logged:info_user_logged};var tracked=false;if(pw)
{if(pw.page)
{var tracked={tracked:pw.page.tracked};}}
var counter_info={id:actual_counter,limit:actual_limit}
pw_assistant_info={page:tracked,counter:counter_info,user:userinfo};return pw_assistant_info;}
var notifyStatus=function(stat){console.log(JSON.stringify(stat));t=pw_assistant(stat);try{if(window.kw_tlh&&window.kw_tlh.paywall){console.log("[pw.js] Neo Data Tag Not Called because Traffic Light Handler is present in page - Calling tlh callback");try{kw_tlh_pw()}catch(e){}}else{console.log("[pw.js] TLH NOT FOUND -> trying to call neodata callback...");window.callNeodataTag();}}catch(e){console.log("[pw.js] ERROR calling tag neodata",e);}
try{console.log("[pw.js] pw_assistant_info",JSON.stringify(t));}catch(e){}
if(!status){status=stat;}
statusCallbacks.trigger("pw.status",stat);};pw.getStatus=function(cb){statusCallbacks.one("pw.status",cb);if(status){notifyStatus(status);}}
if(CALLBACKS){for(var i=0;i<CALLBACKS.length;i++){var cb=CALLBACKS[i];if(cb)pw.getStatus(cb);}}
var pw_finished=false;var pw2_finished=false;var clusters_finished=false;var main=function(){if(!pw_finished||!pw2_finished||!clusters_finished)return;var counter_data1=pw.counter;var intermediate_data1=pw.intermediate;if(!counter_data1&&!pw.pw2){logger.error("configurazione di pagina non caricata");notifyStatus({active:!pw.pw2&&window.kwdnt===undefined,status:"no_configuration"});return;}
if(counter_data1){for(var i=0;i<counter_data1.length;i++){var cd=counter_data1[i];if(cd&&cd.id){counter_data[cd.id]=cd;cd.getLimit=function(){try{return parseInt(this.limit);}catch(e){return undefined;}};if(cd["default"]===true)DEFAULT_COUNTER=cd.id;}}}
if(intermediate_data1){for(var i=0;i<intermediate_data1.length;i++){var id=intermediate_data1[i];if(id&&id.id){intermediate_data[id.id]=id;id.getLimit=function(){try{return parseInt(this.limit);}catch(e){return undefined;}};}}}
var clusters=config.getClusters();var is_tracked=config.isTracked();var counters=config.getCounters(clusters);var now=getNow();var pss=getPss(counters,now);var allowed=checkAllowed();cookie.resetExpired(now);logger.log("is_tracked: "+is_tracked);if(counters)logger.log("counters length: "+counters.length);var st={active:window.kwdnt===undefined,status:"not_tracked"};st.pw2=pss;if(window.pw&&window.pw.pw2_code)st.pw2_code=window.pw.pw2_code;st.ar=allowed;st.tracked=is_tracked;if(is_tracked&&counters.length>0){var nt=window.pw_nt;if(nt){st.status="nt_by_design";}
var published=config.getPublished();logger.log("referrer allowed: "+allowed);logger.log("published: "+published);var days=config.getDays();var from_day=config.getFromDay();var to_day=config.getToDay();if((!days||published!==null)&&!nt){var endPw=null;var voidJsData={};var inside_paywall_window=true;if(published){endPw=new Date(published);endPw.setUTCDate(endPw.getUTCDate()+days);inside_paywall_window=(!from_day||published>=from_day)&&(!to_day||published<=to_day)&&(!endPw||now<=endPw);}
if(!inside_paywall_window){st.status="outside_paywall_window";}
logger.log("pass: "+pss);if(!inside_paywall_window)logger.log("outside paywall window");else{logger.log("inside paywall window");if(endPw){logger.log("paywall active until: "+endPw);}else{logger.log("paywall always active");}}
if(inside_paywall_window){st.active=true;if(pss){st.status="subscribed_user";}else if(allowed){st.status="allowed_referrer";}else{var location_href=null;var redirect_to=null;var redirect_counter=null;var increment=[];st.status="free_pageviews";var limit_pageviews=null;var consumed_pageviews=null;var min_diff=null;for(var i=0;i<counters.length;i++){var counter=counters[i];if(!counter.redirect)continue;var value=cookie.getCounterValue(counter);var value_c=value.c;if(value_c===undefined)
value_c=0;if(value.blk===undefined)
value.blk=0;var limit=counter.getLimit();if(limit===undefined)
limit=0;var limit=counter.getLimit();var after_limit=value_c>=limit;logger.log("counter.id: "+counter.id);logger.log("value: "+value_c);logger.log("blocked_value: "+value.blk);logger.log("limit: "+limit);logger.log("counter after_limit: "+after_limit);if(after_limit){value.blk++;actual_blocked=value.blk;cookie.increment_blocked(counter.id);if(redirect_to===null){limit_pageviews=null;consumed_pageviews=null;min_diff=null;st.status="blocked";redirect_to=addParams(counter.redirect,{"backurl":location.href,"counter":counter.id});redirect_counter=counter.id;}}else{var diff=limit-value_c;if(min_diff==null||(diff<min_diff||(diff==min_diff&&limit>limit_pageviews))){consumed_pageviews=value_c;limit_pageviews=limit;min_diff=diff;}
increment.push(counter);}
actual_counter=counter.id;actual_limit=limit;}
if(st.status=="free_pageviews"&&min_diff==null){st.pageviews={consumed:consumed_pageviews,limit:limit_pageviews,remaining:min_diff};}else if(st.status=="blocked"){st.pageviews={blocked:parseInt(value.blk)};}
var cookieVal=cookie.get();if(cookieVal._vf===undefined){cookie.setValidFrom();}
cookie.setValidTo(now);if(redirect_to===null){for(var i=0;i<increment.length;i++){var counter=increment[i];cookie.increment(counter);}
var int_redirect=cookie.getIntermediateRedirect(increment);if(int_redirect){logger.log("intermediate_redirect: "+int_redirect.redirect);location_href=int_redirect.redirect;}}else{logger.log("redirect: "+redirect_to);logger.log("last_blocked: "+redirect_counter);voidJsData["blkdby"]=redirect_counter;cookie.set_last_blocked(redirect_counter);location_href=redirect_to;}
if(location_href&&window.pw_redirect)location_href=window.pw_redirect;var after_tracking=function(){if(location_href&&!DRY_RUN){if(location_href instanceof Function){pw.getStatus(location_href);}else{var body=document.getElementsByTagName("body");if(body.length>0)body[0].innerHTML="";location.replace(location_href);}}}
if(!PW_TRACKING_URL){after_tracking();}else{var params={};if(pw.rule&&pw.rule.id){var param_rule={};param_rule.id=pw.rule.id;if(pw.rule.name)param_rule.name=pw.rule.name;voidJsData["rule"]=param_rule;}
var voidJsData=unescape($.param(voidJsData));if(voidJsData.length>0)params["pagedata"]=voidJsData;$.ajax({url:PW_TRACKING_URL,data:params,dataType:"script",cache:true,success:after_tracking,error:after_tracking});}}}}}
notifyStatus(st);try{kw_tlh_pw()}catch(e){}}
if(window.location.href.indexOf("pwdebugger=true")>0){debugger;}
if(PW_PAGE_URL){var data={};if(window.pw_force_value){data["force_value"]=pw_force_value;}
data=$.param(data).replace(/\+/g,'%20');var loadPW2=function(){var pw2Data={};var published=config.getPublished();if(published){var issue=published.getFullYear();issue+=published.getMonth()>=9?(published.getMonth()+1):"0"+(published.getMonth()+1);issue+=published.getDate()>=10?published.getDate():"0"+published.getDate();pw2Data.issue=issue;}
if(window.pw_data&&window.pw_data.profile&&window.pw_data.profile.name){pw2Data.zona=window.pw_data.profile.name;}else{pw2Data.zona="n";}
console.log("invio questi dati");console.log(pw2Data);if(PW2_COOKIE_NAME){var session=readCookie(PW2_COOKIE_NAME);var session_social=readCookie(LOGGED_COOKIE_NAME);console.log("test-session="+session);if(session)pw2Data.cookie=session;if(session_social)pw2Data.cookieSocial=session_social;}
console.log(JSON.stringify(pw2Data));if(PW_PAGE2_URL&&(!PW2_COOKIE_NAME||(pw2Data.cookie&&pw2Data.zona)))
{console.log("siamo dentro if");console.log(PW_PAGE2_URL);$.ajax({url:PW_PAGE2_URL,data:pw2Data,dataType:'script',cache:true,success:onPw2});}
else pw2_finished=true;};var onPw=function(){if(pw_finished)return;pw_finished=true;console.log("sto per caricare pw2");loadPW2();main();}
var onPw2=function(){pw2_finished=true;console.log("prima di chiamare la main");main();}
var onClusters=function(){clusters_finished=true;main();}
if(!PW_PAGE2_URL)pw2_finished=true;else{PW_PAGE2_URL+=PW_PAGE2_URL.indexOf("?")>=0?"&":"?";PW_PAGE2_URL+="ts="+new Date().getTime();}
var canonical=$('meta[property="og:url"]').last().attr("content");if(!canonical)canonical=$('link[rel="canonical"]').last().attr("href");if(canonical){PW_PAGE_URL+="?deskurl="+canonical;}
$.ajax({url:PW_PAGE_URL,data:data,dataType:'script',cache:true,success:onPw});config.getClusters(onClusters);setTimeout(onPw,5000);}}})();;
;window.kwait=window.kwait||[];kwait.push(['call',"pw_js"]);
}
