



/* ControlTag Loader for Scout24 CH cf4c9b3f-b2c1-44c3-909b-2666ae1783da */
(function(w, cs) {
  
  if (/Twitter for iPhone/.test(w.navigator.userAgent || '')) {
    return;
  }

  var debugging = /kxdebug/.test(w.location);
  var log = function() {
    
    debugging && w.console && w.console.log([].slice.call(arguments).join(' '));
  };

  var load = function(url, callback) {
    log('Loading script from:', url);
    var node = w.document.createElement('script');
    node.async = true;  
    node.src = url;

    
    node.onload = node.onreadystatechange = function () {
      var state = node.readyState;
      if (!callback.done && (!state || /loaded|complete/.test(state))) {
        log('Script loaded from:', url);
        callback.done = true;  
        callback();
      }
    };

    
    var sibling = w.document.getElementsByTagName('script')[0];
    sibling.parentNode.insertBefore(node, sibling);
  };

  var config = {"app":{"name":"krux-scala-config-webservice","version":"3.36.0","schema_version":3},"confid":"rb4ixi5pp","context_terms":[],"publisher":{"name":"Scout24 CH","active":true,"uuid":"cf4c9b3f-b2c1-44c3-909b-2666ae1783da","version_bucket":"stable","id":2225},"params":{"link_header_bidder":false,"site_level_supertag_config":"site","recommend":false,"control_tag_pixel_throttle":100,"fingerprint":false,"optout_button_optout_text":"Browser Opt Out","user_data_timing":"load","use_central_usermatch":true,"store_realtime_segments":false,"tag_source":false,"link_hb_start_event":"ready","optout_button_optin_text":"Browser Opt In","first_party_uid":false,"link_hb_timeout":2000,"link_hb_adserver_subordinate":true,"optimize_realtime_segments":false,"link_hb_adserver":"dfp","target_fingerprint":false,"context_terms":false,"optout_button_id":"kx-optout-button","dfp_premium":true,"control_tag_namespace":"scout24ch"},"prioritized_segments":[],"realtime_segments":[{"id":"svr2eruq9","test":["and",["and",["or",["intersects","$user_attr_customer_type",["vk"]]]]]},{"id":"say80trzy","test":["and",["and",["or",["intersects","$page_attr_category_level_id3",["92"]],["intersects","$user_segments",["r25as6cwx"]]]]]},{"id":"sc6klt5ih","test":["and",["and",["or",["intersects","$page_attr_internal_search_term",["tv","télévision"]],["intersects","$page_attr_category_level_id2",["814"]]]]]},{"id":"ruq3yf6bb","test":["and",["and",["or",["intersects","$page_attr__kxref",["googleadservices.com"]]]]]}],"services":{"userdata":"//cdn.krxd.net/userdata/get","contentConnector":"https://connector.krxd.net/content_connector","stats":"//apiservices.krxd.net/stats","optout":"//cdn.krxd.net/userdata/optout/status","event":"//beacon.krxd.net/event.gif","set_optout":"https://consumer.krxd.net/consumer/optout","data":"//beacon.krxd.net/data.gif","link_hb_stats":"//beacon.krxd.net/link_bidder_stats.gif","userData":"//cdn.krxd.net/userdata/get","link_hb_mas":"https://link.krxd.net/hb","config":"//cdn.krxd.net/controltag/{{ confid }}.js","social":"//beacon.krxd.net/social.gif","addSegment":"//cdn.krxd.net/userdata/add","pixel":"//beacon.krxd.net/pixel.gif","um":"https://usermatch.krxd.net/um/v2","controltag":"//cdn.krxd.net/ctjs/controltag.js.{hash}","loopback":"https://consumer.krxd.net/consumer/tmp_cookie","remove":"https://consumer.krxd.net/consumer/remove/cf4c9b3f-b2c1-44c3-909b-2666ae1783da","click":"https://apiservices.krxd.net/click_tracker/track","stats_export":"//beacon.krxd.net/controltag_stats.gif","userdataApi":"//cdn.krxd.net/userdata/v1/segments/get","cookie":"//beacon.krxd.net/cookie2json","proxy":"//cdn.krxd.net/partnerjs/xdi","consent_get":"https://consumer.krxd.net/consent/get/cf4c9b3f-b2c1-44c3-909b-2666ae1783da","consent_set":"https://consumer.krxd.net/consent/set/cf4c9b3f-b2c1-44c3-909b-2666ae1783da","is_optout":"https://beacon.krxd.net/optout_check","impression":"//beacon.krxd.net/ad_impression.gif","transaction":"//beacon.krxd.net/transaction.gif","log":"//jslog.krxd.net/jslog.gif","portability":"https://consumer.krxd.net/consumer/portability/cf4c9b3f-b2c1-44c3-909b-2666ae1783da","set_optin":"https://consumer.krxd.net/consumer/optin","usermatch":"//beacon.krxd.net/usermatch.gif"},"experiments":[],"site":{"name":"AutoScout24 Desktop","cap":255,"id":1650455,"organization_id":2225,"uid":"rb4ixi5pp"},"tags":[{"id":28560,"name":"Auto/MotoScout24 dataLayer Ingester DTC","content":"<script>\n(function() {\n\n    var page = ['search_bodyType', 'listing_bodyType', 'search_co2emiTo', 'search_cond', 'listing_cond', 'search_consrat', 'search_fuelType', 'listing_fuelType', 'search_makeName', 'listing_makename', 'search_makeName1', 'listing_makename1', 'search_modelName', 'listing_modelName', 'search_modelName1', 'listing_modelName1', 'listing_price', 'search_priceFrom', 'search_priceTo', 'search_vehType', 'listing_vehType', 'search_loc', 'listingZipcode'],\n        user = ['customerType', 'userAccountId'],\n        p;\n\n    var checkOver = function(arr, dl, type) {\n        var j, dllen = dl.length;\n        for (j = 0; j < dllen; j++) {\n            var i, len = arr.length;\n            for (i = 0; i < len; i++) {\n                if (arr.hasOwnProperty(i) && dl[j][arr[i]] && arr[i] === 'listing_price') {\n                    p = dl[j][arr[i]];\n                } else if (arr.hasOwnProperty(i) && dl[j][arr[i]]) {\n                    dataObj[type][arr[i]] = dl[j][arr[i]];\n                }\n            }\n        }\n    };\n\n    if (window.dataLayer) {\n        var dl = window.dataLayer;\n        var dataObj = {\n            page: {},\n            user: {}\n        };\n        checkOver(page, dl, 'page');\n        checkOver(user, dl, 'user');\n\n        var userKeys = 'user',\n            omitKeys = 'none123',\n            custDelimit = 'toDelimit123',\n            prefix = 'undefined_',\n            config = {\n                'userKeys': userKeys ? userKeys.split(',') : undefined,\n                'omitKeys': omitKeys ? omitKeys.split(',') : [],\n                'customDelimited': custDelimit ? custDelimit.split(',') : undefined,\n                'caseSensitive': 'false' === 'true',\n                'useFullPath': 'false' === 'true',\n                'useLastValue': 'false' === 'true',\n                'convertAttrNames': []\n            },\n            domain = Krux('get', 'page_attr_domain');\n\n        if (domain.match(/autoscout24/)) {\n            prefix = 'at24_';\n        } else if (domain.match(/motoscout24/)) {\n            prefix = 'mt24_';\n        }\n\n        if (!prefix.match(/^$|null|undefined|false/)) {\n            config.convertAttrNames.push({\n                pattern: /((?:page|user)_attr_)/,\n                replacement: '$1' + prefix\n            });\n        }\n        config.omitKeys.push(/gtm\\./);\n        Krux('ingestDataLayer', dataObj, config);\n\n        if (p) {\n            var rangeTool = Krux('require:util').numberToRangeBucket,\n                range;\n\n            // adding spaces will ensure values are correctly ordered in the UI value picker\n            if (p <= 5000) {\n                range = '      ' + rangeTool(p, 1000);\n            } else if (p <= 25000) {\n                range = '     ' + rangeTool(p, 2500);\n            } else if (p <= 50000) {\n                range = '    ' + rangeTool(p, 5000);\n            } else if (p <= 100000) {\n                range = '   ' + rangeTool(p, 10000);\n            } else if (p <= 300000) {\n                range = '  ' + rangeTool(p, 25000);\n            } else if (p > 300000) {\n                range = ' ' + rangeTool(p, 300000, 0, 300000);\n            }\n\n            Krux('set', 'page_attr_' + prefix + 'price_buckets', range);\n        }\n    }\n\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":28729,"name":"Optimizely - Scout24 CH","content":"<script>\n (function() {\n     var _kxStore = Krux('require:store');\n     _kxStore.set('segs_partner', _kxStore.get('segs'));\n     Krux('segments:watch', function(segs) {\n         setTimeout(function() {\n             _kxStore.set('segs_partner', _kxStore.get('segs'));\n         }, 1);\n\n     });\n })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]},{"id":27648,"name":"Krux Standard DTC","content":"<script>\n(function() {\n    Krux('scrape', { 'page_attr_url_path_1': { 'url_path': '1' } });\n    Krux('scrape', { 'page_attr_url_path_2': { 'url_path': '2' } });\n    Krux('scrape', { 'page_attr_url_path_3': { 'url_path': '3' } });\n    Krux('scrape', { 'page_attr_meta_keywords': { meta_name: 'keywords' } });\n    Krux('scrape', { 'page_attr_domain': { url_domain: '2' } });\n    Krux('scrape', { 'page_attr_meta_description': { meta_name: 'description' } });\n    Krux('scrape', { page_attr_title: { dom: 'title:text' } });\n})();\n</script>","target":null,"target_action":"append","timing":"onready","method":"document","priority":null,"template_replacement":true,"internal":true,"criteria":[]}],"usermatch_tags":[{"id":6,"name":"Google User Match","content":"<script>\n(function() {\n  if (Krux('get', 'user') != null) {\n      new Image().src = 'https://usermatch.krxd.net/um/v2?partner=google';\n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":15,"name":"TheTradeDesk User Match","content":"<script>\n(function()\n{ var i = new Image(); i.src = '//match.adsrvr.org/track/cmf/generic?ttd_pid=krux&ttd_tpi=1'; }\n)();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":21,"name":"Acxiom","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  if (kuid) {\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\n      var i = new Image();\n      i.src = liveramp_url;      \n  }\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":71,"name":"AppNexus Connect","content":"<script>\r\n(function(){\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl = prefix + '//beacon.krxd.net/usermatch.gif?adnxs_uid=$UID';\r\n            var appnexus_url = '//ib.adnxs.com/getuid?' + kurl\r\n            var i = new Image();\r\n            i.src = appnexus_url;\r\n        }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":76,"name":"LiveRamp User Matching","content":"<script>\r\n(function(){\r\n  var kuid = Krux('get', 'user');\r\n  if (kuid) {\r\n      var liveramp_url = 'https://idsync.rlcdn.com/379708.gif?partner_uid=' + kuid;\r\n      var i = new Image();\r\n      i.src = liveramp_url;     \r\n  }\r\n})();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":1,"template_replacement":false,"internal":true,"criteria":[]},{"id":39,"name":"AdForm Usermatch","content":"<script>\n(function(){\nvar prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\nvar url = prefix + '//dmp.adform.net/serving/cookie/match/?party=1032';\n(new Image()).src = url;\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":2,"template_replacement":false,"internal":true,"criteria":[]},{"id":27,"name":"Visual DNA","content":"<script>\nnew Image().src = 'https://usermatch.krxd.net/um/v2?partner=vdna';\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":72,"name":"AppNexus Extension User Match","content":"<script>\n(function(){\n  var kuid = Krux('get', 'user');\n  var cbust = Math.round(new Date().getTime() / 1000);\n  if (kuid) {\n    Krux('require:http').pixel({\n      url: \"//ib.adnxs.com/pxj\",\n      data: {\n          bidder: '140',\n          seg: '381342',\n          action: \"setuid('\" + kuid + \"')\",\n          bust: cbust\n      }});\n  }\n  })();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":82,"name":"DataLogix - Legacy","content":"<script>\r\n    (function() {\r\n        var kuid = Krux('get', 'user');\r\n        if (kuid) {\r\n            var prefix = location.protocol == 'https:' ? \"https:\" : \"http:\";\r\n            var kurl_params = encodeURIComponent(\"_kuid=\" + kuid + \"&_kdpid=2dd640a6-6ebd-4d4f-af30-af8baa441a0d&dlxid=<na_id>&dlxdata=<na_da>\");\r\n            var kurl = prefix + \"//beacon.krxd.net/data.gif?\" + kurl_params;\r\n            var dlx_url = '//r.nexac.com/e/getdata.xgi?dt=br&pkey=gpwn29rvapq62&ru=' + kurl;\r\n            var i = new Image();\r\n            i.src = dlx_url;\r\n        }\r\n    })();\r\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":85,"name":"IXI Digital Open Market","content":"<script>\n(function(){\n    var prefix = window.location.protocol == 'https:' ? 'https:' : 'http:';\n    new Image().src = prefix + '//kr.ixiaa.com/C726AB29-0470-440B-B8D2-D552CED3A3DC/a.gif';\n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]},{"id":94,"name":"Pubmatic User Match (pixel only)","content":"<script type='text/javascript'>\n(function(){\n\n\tvar kuid = Krux('get', 'user');\n\t\n\tif (kuid) {\n\t\tvar protocol = window.location.protocol == 'https:' ? 'https:' : 'http:'\n\t\tvar kurl = encodeURIComponent(protocol + '//beacon.krxd.net/usermatch.gif?partner=pubmatic&partner_uid=#PM_USER_ID');\n\t\tvar lurl = protocol + '//image2.pubmatic.com/AdServer/UCookieSetPug?rd=';\n\t\t(new Image()).src = lurl + kurl;\n\t} \n \n})();\n</script>","target":null,"target_action":"append","timing":"onload","method":"document","priority":3,"template_replacement":false,"internal":true,"criteria":[]}],"link":{"adslots":{},"bidders":{}}};
  
  for (var i = 0, tags = config.tags, len = tags.length, tag; (tag = tags[i]); ++i) {
    if (String(tag.id) in cs) {
      tag.content = cs[tag.id];
    }
  }

  
  var esiGeo = String(function(){/*
   <esi:include src="/geoip_esi"/>
  */}).replace(/^.*\/\*[^{]+|[^}]+\*\/.*$/g, '');

  if (esiGeo) {
    log('Got a request for:', esiGeo, 'adding geo to config.');
    try {
      config.geo = w.JSON.parse(esiGeo);
    } catch (__) {
      
      log('Unable to parse geo from:', config.geo);
      config.geo = {};
    }
  }



  var proxy = (window.Krux && window.Krux.q && window.Krux.q[0] && window.Krux.q[0][0] === 'proxy');

  if (!proxy || true) {
    

  load('//cdn.krxd.net/ctjs/controltag.js.dc955599a3976b2e658d60927793d9ea', function() {
    log('Loaded stable controltag resource');
    Krux('config', config);
  });

  }

})(window, (function() {
  var obj = {};
  
  return obj;
})());
