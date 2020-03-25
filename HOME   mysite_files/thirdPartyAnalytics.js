define("thirdPartyAnalytics",["lodash","warmupUtils","santa-core-utils"],function(n,e,t){return function(n){var e={};function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=n,t.c=e,t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:i})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)t.d(i,o,function(e){return n[e]}.bind(null,o));return i},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=1167)}({0:function(e,t){e.exports=n},10:function(n,e){n.exports=t},1167:function(n,e,t){var i,o;i=[t(0),t(10),t(1168),t(1169),t(1170),t(1171),t(1172),t(1174),t(1175),t(8)],void 0===(o=function(n,e,t,i,o,r,a,c,u,s){"use strict";var f="undefined"!=typeof window&&window.queryUtil&&window.queryUtil.isParameterTrue("isEdited"),d={wixAnalytics:g,biAnalytics:g};function g(e,t){return function(i){if(e.isViewerMode()&&!l(e)){var o=s.loggingUtils.browsingSession.track();return i=n.merge(i,{bsi:o.id}),t(c.enrich(e,i))}}}function l(n){return e.stringUtils.isTrue(n.currentUrl.query.suppressbi)}function w(n,e){var t=n.isPremiumDomain();switch(e){case"googleAnalytics":if(p(n,e))return[n.googleAnalytics];break;case"googleTagManager":if(p(n,e))return[n.googleTagManager];break;case"facebookRemarketing":if(p(n,e)&&t)return[n.facebookRemarketing];break;case"googleRemarketing":if(p(n,e)&&t)return[n.googleRemarketing];break;case"yandexMetrika":if(p(n,e)&&t)return[n.yandexMetrika]}return[]}function p(e,t){return!n.isEmpty(e[t])}return{reportGoogleAnalytics:function(n){if(!f){for(var e=w(n,"googleAnalytics"),i=arguments.length,o=new Array(i>1?i-1:0),r=1;r<i;r++)o[r-1]=arguments[r];t.report.apply(t,[e,n.ipAnonymization].concat(o))}},reportBiAnalytics:function(n,e){u.report(n,e)},reportPageEvent:function(e,i){if(e&&n.isString(i)&&!f&&!l(e)){t.reportPageEvent(e,i,w(e,"googleAnalytics"));var o=w(e,"googleTagManager");n.isEmpty(o)||a.reportPageEvent(i,o[0])}},initFacebookRemarketingUserPixel:function(n){if(!f&&!l(n)){var e=w(n,"facebookRemarketing")[0];i.initRemarketingPixel(n,e)}},initFacebookRemarketingPixelId:function(n,e){f||l(n)||i.initPixelId(n,e)},fireFacebookRemarketingPixel:function(n,e,t){i.fireRemarketingPixel(n,e,t)},fireFacebookCustomEvent:function(n,e,t,o){i.fireCustomEvent(n,e,t,o)},initGoogleRemarketingPixel:function(n){f||l(n)||o.initRemarketingPixel(w(n,"googleRemarketing"))},fireGoogleRemarketingPixel:function(){o.fireRemarketingPixel()},initYandexMetrika:function(n){f||l(n)||r.initialize(w(n,"yandexMetrika"))},reportYandexPageHit:function(n){r.reportPageHit(n)},reportGoogleTagManager:function(e,t){if(!f){var i=w(e,"googleTagManager");n.isEmpty(i)||a.report(i[0],t)}},hasAccount:p,decorateReporter:function(n,e,t){return d[e]?d[e](n,t):t}}}.apply(e,i))||(n.exports=o)},1168:function(n,e,t){var i,o;i=[t(0),t(10)],void 0===(o=function(n,e){"use strict";function t(e,t,i){n.isEmpty(e)||(window.ga?i():requirejs(["//www.google-analytics.com/analytics.js"],function(){window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)},window.ga.l=n.now(),window.ga.q=window.ga.q||[],n.forEach(e,function(n){window.ga("create",n,"auto")}),t&&window.ga("set","anonymizeIp",!0),i()},n.noop))}return{reportPageEvent:function(i,o,r,a){"undefined"!=typeof window&&setTimeout(function(){i.isUsingUrlFormat(e.siteConstants.URL_FORMATS.SLASH)?t(r,i.ipAnonymization,function(){window.ga("send","pageview",{page:o})}):function(e,t,i){function o(){var o=window._gaq||[];window._gaq=o,n.forEach(t,function(n,t){var r=0===t?"":"t".concat(t,".");o.push(["".concat(r,"_setAccount"),n],["".concat(r,"_setAllowAnchor"),!0]),i&&o.push(["".concat(r,"_setCustomVar"),1,"version",i.ver,1],["".concat(r,"_setCustomVar"),2,"language",i.lng,1],["".concat(r,"_setCustomVar"),3,"userType",i.userType,1]),o.push(["".concat(r,"_trackPageview"),e])})}window._gaq?o():requirejs(["https://stats.g.doubleclick.net/dc.js"],o,n.noop)}(o,r,a)},200)},report:function(e,i){var o=n.drop(arguments,2);t(e,i,function(){window.ga.apply(window.ga,o)})}}}.apply(e,i))||(n.exports=o)},1169:function(n,e,t){var i,o;i=[t(0),t(10)],void 0===(o=function(n,e){"use strict";function t(e){return Number(e)&&n.isString(e)&&!n.isEmpty(e)}function i(n){return n.isUsingUrlFormat(e.siteConstants.URL_FORMATS.SLASH)}function o(e,t,o,r){(function(e,t,o){return i(e)&&window.fbq&&n.isString(t)&&n.isString(o)})(e,t,o)&&window.fbq(t,o,r||{})}return{initRemarketingPixel:function(n,e){t(e)&&(i(n)?function(n){var e,t,i;window.fbq||(e=window.fbq=function(){e.callMethod?e.callMethod.apply(e,arguments):e.queue.push(arguments)},window._fbq||(window._fbq=e),e.push=e,e.loaded=!0,e.version="2.0",e.agent="plwix",e.queue=[],(t=window.document.createElement("script")).async=!0,t.src="//connect.facebook.net/en_US/fbevents.js",(i=window.document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,i)),window.fbq("init",n),window.fbq("track","PageView")}(e):function(n){if(!window._fbq){var e=window._fbq||(window._fbq=[]);if(!e.loaded){var t=window.document.createElement("script");t.async=!0,t.src="//connect.facebook.net/en_US/fbds.js";var i=window.document.getElementsByTagName("script")[0];i.parentNode.insertBefore(t,i),e.loaded=!0}e.push(["addPixelId",n]),window._fbq.push(["track","PixelInitialized",{}])}}(e))},initPixelId:function(n,e){t(e)&&i(n)&&this.initRemarketingPixel(n,e)},fireRemarketingPixel:function(n,e,t){o(n,"track",e,t)},fireCustomEvent:function(n,e,t,i){o(n,e,t,i)}}}.apply(e,i))||(n.exports=o)},1170:function(n,e,t){var i,o;i=[t(0)],void 0===(o=function(n){"use strict";var e=!1,t={google_custom_params:{},google_remarketing_only:!0};return{initRemarketingPixel:function(i){!e&&function(e){return n.isArray(e)&&1===e.length&&Number(e[0])}(i)&&(n.assign(t,{google_conversion_id:i[0]}),function(){var n=window.document.createElement("script");n.type="text/javascript",n.src="//www.googleadservices.com/pagead/conversion_async.js",n.async=!0,n.setAttribute("onload","google_trackConversion(".concat(JSON.stringify(t),")"));var e=window.document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)}(),e=!0)},fireRemarketingPixel:function(){e&&window.google_trackConversion&&window.google_trackConversion(t)}}}.apply(e,i))||(n.exports=o)},1171:function(n,e,t){var i,o;i=[t(0)],void 0===(o=function(n){"use strict";var e,t="yandex_metrika_callbacks",i=!1;function o(n){(window[t]=window[t]||[]).push(function(){try{window[e]=new window.Ya.Metrika(function(n){return{id:parseInt(n,10),clickmap:!0,trackLinks:!0,accurateTrackBounce:!0,webvisor:!0,trackHash:!0}}(n))}catch(n){}})}return{initialize:function(t){var r,a;(r=t,n.isArray(r)&&n.isFinite(parseInt(r[0],10)))&&(a=t[0],e="yaCounter".concat(a),o(t[0]),function(){if(!i){var n=window.document.getElementsByTagName("script")[0],e=window.document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://mc.yandex.ru/metrika/watch.js",e.addEventListener("load",function(){i=!0}),n.parentNode.insertBefore(e,n)}}())},reportPageHit:function(t){i&&window[e]&&n.isFunction(window[e].hit)&&window[e].hit(t)}}}.apply(e,i))||(n.exports=o)},1172:function(n,e,t){var i,o;function r(n){return function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}(n)||function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i=[t(0),t(1173)],void 0===(o=function(n,e){"use strict";function t(t,i){window.dataLayer?i():e.load(t,function(){window.dataLayer=window.dataLayer||[],window.dataLayer.push({"gtm.start":n.now(),event:"gtm.js"}),i()})}return{reportPageEvent:function(n,e){"undefined"!=typeof window&&setTimeout(function(){t(e,function(){window.dataLayer.push({event:"Pageview",url:n})})},200)},report:function(n,e){t(n,function(){var n;(n=window.dataLayer).push.apply(n,r(e))})}}}.apply(e,i))||(n.exports=o)},1173:function(n,e,t){var i,o;i=[t(0)],void 0===(o=function(n){"use strict";return{load:function(e,t){requirejs(["//www.googletagmanager.com/gtm.js?id=".concat(e)],t,n.noop)}}}.apply(e,i))||(n.exports=o)},1174:function(n,e,t){var i,o;i=[t(0)],void 0===(o=function(n){"use strict";return{enrich:function(e,t){return n.assign(t,{uuid:e.getUserId(),msid:e.getMetaSiteId(),vsi:e.wixBiSession.viewerSessionId,vid:e.wixBiSession.visitorId,ref:window.document.referrer})}}}.apply(e,i))||(n.exports=o)},1175:function(n,e,t){var i,o;i=[t(8)],void 0===(o=function(n){"use strict";return{report:function(e,t){n.loggingUtils.logger.reportBI(e,{reportType:"event",adapter:"pa",sampleRatio:0},t)}}}.apply(e,i))||(n.exports=o)},8:function(n,t){n.exports=e}})});
//# sourceMappingURL=thirdPartyAnalytics.min.js.map