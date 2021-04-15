(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1015:function(t,e,o){"use strict";o(13),o(14),o(15);var n=o(0),r=(o(11),o(12),o(23),o(35),o(36),o(27),o(4)),c=o(168),d=o(75),l=o(837),f=o(806);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v={name:"ComponentPackPage",components:{ShutterstockAds:c.a,PixfutureAds:d.a,packPreview:l.a,searchNothingFound:f.a},props:{parsedParams:{type:Object,required:!0},subtitle:{type:String,default:null}},data:function(){return{popularStyle:["ios7","ios11","androidL","color","win10","Dusk_Wired","p1em"],packsPerRow:null}},computed:m(m({},Object(r.e)({seo:function(t){return t.seo.data},platform:function(t){return t.platform.apiCode},platforms:function(t){return t.appInfo.platforms},pack:function(t){return t.pack},lang:function(t){return t.i18n.locale},colors:function(t){return t.filters.colorsList}})),{},{platformIcons:function(){var t=this;if(!this.platforms)return[];var e=[],o="animated"===this.parsedParams.animation?"animatedPreviews":"mainPreviews";return Object.keys(this.platforms).filter((function(t){return"all"!==t})).map((function(n){if(t.pack[o]){var r=t.pack[o].find((function(t){return t.styleApiCode===n}));r&&r.previews&&r.previews.length&&e.push({apiCode:n,previews:r.previews,iconTotalCount:r.iconTotalCount})}})),e.length?e:[]},popularStyles:function(){var t=this;if(!this.platformIcons)return[];var e=this.platformIcons.filter((function(p){return t.popularStyle.includes(p.apiCode)}));return e},otherStyles:function(){var t=this;return this.platformIcons?this.platformIcons.filter((function(p){return!t.popularStyle.includes(p.apiCode)})):[]},getColorIcon:function(){return this.colors?this.colors[this.parsedParams.color||"black"].value:"000000"},hasIcons:function(){return this.popularStyles&&this.popularStyles.length||this.otherStyles&&this.otherStyles.length}}),mounted:function(){var t=this;this.$nextTick((function(){t.packsPerRow=t.calculatePositionRow(t.$refs["preview-grid"],2)}))},methods:{platformTitle:function(t){return"office40"===t?"Office M":this.$t("PLATFORMS.".concat(t,".SHORT_TITLE"))||(this.platforms[t]?this.platforms[t].title:t)},calculatePositionRow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;if(t&&t.children[1]){var o=t.offsetWidth,n=t.children[1].offsetWidth;return Math.floor(o/n)*e}return null}}},x=(o(1133),o(1)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"icons-pack-page"},[!t.platformIcons&&t.pack.code?[o("div",{staticClass:"app-page-section custom-padding ph-descr-wrap"},[o("icon-placeholder",{attrs:{type:"filters",filters:1,shortBottomMargin:!0}})],1)]:[o("div",{staticClass:"app-page-section custom-padding header-padding"},[o("app-header",{attrs:{"show-title":!1}})],1)],!t.platformIcons&&t.pack.code?[o("div",{staticClass:"app-page-section custom-padding"},[o("icon-placeholder",{attrs:{count:12,type:"card",iconsHeading:!1}})],1)]:[t.popularStyles&&t.popularStyles.length?o("div",{staticClass:"app-page-section custom-padding popular-styles-wrap"},[o("div",{staticClass:"popular-title-wrap"},[o("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.POPULAR_STYLES_BY_ICONS8")))])]),o("div",{staticClass:"pack-grid"},[t._l(t.popularStyles,(function(e){return[o("pack-preview",{key:t.pack.code+"-"+e.apiCode,staticClass:"pack-preview",attrs:{pack:e.previews,id:""+t.pack.code,platform:e.apiCode,platformObj:{title:t.platformTitle(e.apiCode)},color:t.getColorIcon,iconTotalCount:e.iconTotalCount}})]}))],2),o("client-only",[t.pack.name?o("div",{staticClass:"ads"},[o("ShutterstockAds",{attrs:{adParams:{query:t.pack.name["en-US"]}}})],1):t._e()])],1):t._e(),t.otherStyles&&t.otherStyles.length?o("div",{staticClass:"app-page-section custom-padding"},[o("div",{staticClass:"other-styles-wrap"},[o("h6",{staticClass:"app-page-section-title"},[t._v(t._s(t.$t("ICON.ICONS.PACK.OTHER_STYLES_BY_ICONS8")))]),o("div",{ref:"preview-grid",staticClass:"pack-grid"},[t._l(t.otherStyles,(function(e,n){return[n===t.packsPerRow?o("client-only",[o("div",{staticClass:"ads",staticStyle:{padding:"0px 0 10px"}},[o("PixfutureAds",{attrs:{adFormat:"mobile"}})],1)]):t._e(),o("pack-preview",{key:t.pack.code+"-"+e.apiCode,staticClass:"pack-preview",attrs:{pack:e.previews,id:""+t.pack.code,platform:e.apiCode,platformObj:{title:t.platformTitle(e.apiCode)},color:t.getColorIcon,iconTotalCount:e.iconTotalCount}})]}))],2)])]):t._e(),o("div",{staticClass:"app-page-section custom-padding"},[t.hasIcons?o("div",{staticClass:"description-padding"},[o("app-bottom-info",{attrs:{subtitle:t.subtitle}})],1):o("searchNothingFound")],1)]],2)}),[],!1,null,"7676d4f7",null);e.a=component.exports},1133:function(t,e,o){"use strict";o(897)},1134:function(t,e,o){var n=o(6)(!1);n.push([t.i,"@media (min-width:1024px){.mobile-only[data-v-7676d4f7]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-7676d4f7]{display:none!important}}@-webkit-keyframes spin-data-v-7676d4f7{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-7676d4f7{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.icons-pack-page .nothing-found[data-v-7676d4f7]{padding:2rem;text-align:center}.icons-pack-page .nothing-found .nothing-found-title[data-v-7676d4f7]{font-size:2rem}.icons-pack-page .preview-grid-item.is-white[data-v-7676d4f7]{background:rgba(26,26,26,.15)}.cross-linking[data-v-7676d4f7]{top:0;margin-right:0}.app-page-section.is-header[data-v-7676d4f7]{margin-bottom:20px}@media (max-width:452px){.app-page-section.is-header[data-v-7676d4f7]{padding:24px}}.app-page-section.is-body .app-page-section-title[data-v-7676d4f7]{margin-bottom:16px}@media (max-width:348px){.app-page-section.custom-padding[data-v-7676d4f7]{padding-left:8px;padding-right:8px}.app-page-section.header-padding[data-v-7676d4f7]{padding:12px 24px}}.popular-styles-wrap[data-v-7676d4f7]{margin-bottom:20px}.pack-grid[data-v-7676d4f7]{display:flex;flex-wrap:wrap}.pack-grid .pack-preview[data-v-7676d4f7]{margin-bottom:16px;margin-right:16px}@media (max-width:375px){.pack-grid .pack-preview[data-v-7676d4f7]{margin-right:0}}.popular-title-wrap[data-v-7676d4f7]{display:flex;justify-content:space-between;align-items:baseline}@media (max-width:1080px){.popular-title-wrap[data-v-7676d4f7]{flex-direction:column}.popular-title-wrap .cross-linking[data-v-7676d4f7]{margin-bottom:12px}}.packs-istock-banner[data-v-7676d4f7]{max-width:1000px}.ads[data-v-7676d4f7]{display:block;width:100%;padding-top:16px;overflow:hidden}.ads[data-v-7676d4f7]:empty{display:none}@media (max-width:2340px){.ads[data-v-7676d4f7]{max-width:1583px;margin-right:16px}}@media (max-width:2017px){.ads[data-v-7676d4f7]{max-width:1276px}}@media (max-width:1694px){.ads[data-v-7676d4f7]{max-width:953px}}@media (max-width:1371px){.ads[data-v-7676d4f7]{max-width:630px}}.description-padding[data-v-7676d4f7]{padding-bottom:40px}",""]),t.exports=n},787:function(t,e,o){var content=o(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("29371841",content,!0,{sourceMap:!1})},796:function(t,e,o){"use strict";o(12),o(13),o(14),o(15);var n=o(5),r=o(0),c=(o(11),o(24),o(26)),d=o.n(c),l=o(4);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function m(t,e,o){return d.a.get(t,{headers:{"api-key":e},params:o}).then((function(t){return t.data.images})).catch((function(t){console.error(t)}))}var v={name:"IstockBanner",props:{searchPhrase:{type:String,required:!1,default:""}},data:function(){return{images:[],removeAdsClicked:!1}},computed:h(h({},Object(l.e)({user:function(t){return t.auth.user},phrase:function(t){return this.searchPhrase||t.mainSearch||t.pack.code||t.platform.seoCode||t.seo.data.page.title}})),{},{showBanner:function(){return!1}}),mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="https://api.gettyimages.com/v3/search/images/creative",n="385ccdq74qvm278hygaa2wnu",r={sort_order:"random",exclude_nudity:!0,orientations:"square",graphical_styles:"illustration,vector",fields:"summary_set,referral_destinations",page_size:24,phrase:t.searchPhrase||t.phrase},e.next=5,m(o,n,r);case 5:if(!(c=e.sent)){e.next=13;break}if(!(c.length<24)){e.next=12;break}return delete r.phrase,e.next=11,m(o,n,r);case 11:c=e.sent;case 12:t.images=c;case 13:case"end":return e.stop()}}),e)})))()},methods:{partnerLink:function(t){var e=t.filter((function(t){return"istockphoto"===t.site_name}))[0].uri;return"".concat("https://iStockphoto.6q33.net/c/2052558/258824/4205/","?u=").concat(encodeURI(e))}}},x=(o(801),o(1)),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.showBanner&&t.images&&t.images.length>0?o("div",{staticClass:"istock-widget"},[t.removeAdsClicked?[t._m(1)]:[o("div",{staticClass:"istock-widget-header"},[t._m(0),o("a",{staticClass:"istock-widget-remove-ads",on:{click:function(e){t.removeAdsClicked=!0}}},[t._v("Remove ads")])]),o("div",{staticClass:"overflow-fade"},[o("div",{staticClass:"istock-widget-images"},t._l(t.images,(function(image){return o("a",{key:image.id,staticClass:"istock-widget-image-link",attrs:{href:t.partnerLink(image.referral_destinations),target:"_blank"}},[o("img",{staticClass:"istock-widget-image",attrs:{src:image.display_sizes[0].uri}})])})),0)])]],2):t._e()}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("a",{attrs:{href:"https://iStockphoto.6q33.net/c/2052558/258824/4205/",target:"_blank"}},[o("h4",{staticClass:"istock-widget-title"},[t._v("Premium Images by iStock")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"remove-ads-banner"},[o("div",{staticClass:"remove-ads-banner-text"},[t._v("You can remove ads by purchasing a subscription. You will also get unlimited SVGs and our other products.")]),o("a",{staticClass:"remove-ads-link",attrs:{href:"https://icons8.com/pricing"}},[t._v("Learn more")])])}],!1,null,"06d52480",null);e.a=component.exports},797:function(t,e,o){"use strict";o.d(e,"b",(function(){return n}));o(36),o(27),o(18);function n(t,e,o,n){var r=n.t?n.t(t,e):n.$t(t,e);return r.includes("WEB_APP")?o:r}e.a={getTitlePage:function(t,e,o){e.name[e.lang]||e.name["en-US"];var n=t.i18n||t.$i18n;if(!o)return name;var r=n.t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL")),c=o.color?n.t("WEB_APP.SEO.FILTERS.".concat(o.color.toUpperCase())):"",d="";return(d+=c?n.t("WEB_APP.SEO.TITLE_PACK_COLOR",{category:r,color:c}):n.t("WEB_APP.SEO.TITLE_PACK",{title:r})).trim()},getFilterStatus:function(t,e){var o=e.shape,n=e.color,r=e.format;return o||n||r?!o||n||r?o||!n||r?o||n||!r?"much":"format":"color":"shape":"none"},getAlsoFormat:function(t,e,o){var n=t.i18n||t.$i18n,r=n.t("WEB_APP.SEO.FILTERS.VECTOR"),c="".concat(n.t("WEB_APP.SEO.CATEGORY_PACKS.".concat(e.code,".LABEL"))),path="/icons/pack/".concat(e.code);return path+="png"===o?"--vector":"--png",n.t("WEB_APP.SEO.CATEGORY_PACKS.GET_ALSO_FORMAT",{url:path,category:c.toLowerCase(),format:"png"===o?r.toLowerCase():"PNG"})},getDescription:function(t){var e=t.that,o=t.category,n=t.meta,meta=void 0!==n&&n,r=t.params,c=void 0===r?{}:r,d=e.i18n||e.$i18n,l=this.getFilterStatus(e,c),f=meta?"_META":"",h=["free-icons","alphabet","animals","arrows","astrology","baby","beauty","business","characters","cinema","city","clothing","computer-hardware"].some((function(t){return t===o.code})),m=o.name[o.lang]||o.name["en-US"],v=h?".".concat(o.code):"";if("format"===l){var x=c.format.toUpperCase(),O=d.t("WEB_APP.SEO.CATEGORY_PACKS".concat(v,".DESCRIPTION_").concat(x).concat(f),{category:m.toLowerCase()});return meta||(O+="<br/>".concat(this.getAlsoFormat(e,o,c.format))),O}if("much"===l||"color"===l){var w="free-icons"===o.code?".".concat(o.code):"",y="";return c.shape&&(y+="".concat(d.t("WEB_APP.SEO.FILTERS.".concat(c.shape.toUpperCase()))," ")),c.color&&(y+="".concat(d.t("WEB_APP.SEO.FILTERS.".concat(c.color.toUpperCase()))," ")),c.format&&(y+="".concat(d.t("WEB_APP.SEO.FILTERS.".concat(c.format.toUpperCase()))," ")),w?d.t("WEB_APP.SEO.CATEGORY_PACKS".concat(w,".DESCRIPTION_FILTERS").concat(f),{filters:y.trim().toLowerCase(),filter_category:"".concat(m.toLowerCase()," ").concat(y.trim().toLowerCase())}):d.t("WEB_APP.SEO.CATEGORY_PACKS.DESCRIPTION_FILTERS".concat(f),{filters:y.trim().toLowerCase(),category:m})}return f&&!v?d.t("WEB_APP.SEO.CATEGORY_PACKS".concat(v,".META.DESCRIPTION"),{category:m}):d.t("WEB_APP.SEO.CATEGORY_PACKS".concat(v,".DESCRIPTION").concat(f),{category:m})}}},799:function(t,e,o){var content=o(816);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("f7e5760e",content,!0,{sourceMap:!1})},801:function(t,e,o){"use strict";o(787)},802:function(t,e,o){var n=o(6)(!1);n.push([t.i,'@media (min-width:1024px){.mobile-only[data-v-06d52480]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-06d52480]{display:none!important}}.istock-widget[data-v-06d52480]{margin-top:50px;margin-bottom:50px;padding-top:14px;padding-left:16px;padding-bottom:16px;background:#fafafa;border-radius:8px;overflow:hidden}.overflow-fade[data-v-06d52480]{position:relative}.overflow-fade[data-v-06d52480]:after{background:linear-gradient(270deg,#fafafa 22.32%,hsla(0,0%,98%,0));content:"";position:absolute;top:0;right:0;height:100%;width:10%}.istock-widget-header[data-v-06d52480]{margin:0 16px 14px 0;display:flex;justify-content:space-between}.istock-widget-remove-ads[data-v-06d52480],.istock-widget-title[data-v-06d52480]{margin:0;padding:0;font-style:normal;font-weight:400;font-size:14px;line-height:14px;color:#333;opacity:.5}.istock-widget-remove-ads[data-v-06d52480]:hover{opacity:1}.istock-widget-images[data-v-06d52480]{height:96px;width:5000px}.istock-widget-image-link[data-v-06d52480]{display:inline-block;background:#ebebeb;border-radius:8px;height:96px;width:96px;margin-right:16px}.istock-widget-image[data-v-06d52480]{width:100%}.remove-ads-banner[data-v-06d52480]{padding-top:19px;padding-bottom:17px;display:flex;justify-content:space-between;align-items:center;flex-direction:column}.remove-ads-banner-text[data-v-06d52480]{text-align:center;max-width:288px;max-height:60px;font-style:normal;font-weight:400;font-size:14px;line-height:20px;color:#333;opacity:.4}.remove-ads-link[data-v-06d52480]{margin-top:8px;font-size:14px;line-height:20px}',""]),t.exports=n},803:function(t,e,o){var content=o(820);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("1b457969",content,!0,{sourceMap:!1})},806:function(t,e,o){"use strict";o(12),o(13),o(11),o(14),o(15);var n=o(0),r=(o(23),o(4)),c=o(168),d=o(43);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"SearchNothingFound",components:{ShutterstockAds:c.a},data:function(){return{iconsPopular:[],allIconsLoaded:!1,page:1,staticUrl:"https://maxst.icons8.com",isPopularIconsTitle:!0}},computed:f(f({},Object(r.e)({search:function(t){return t.mainSearch},isAnimated:function(t){return t.filters.isAnimated},platform:function(t){return t.platform}})),{},{searchingQuery:function(){var t=this.$route.params.term||"",e=Object(d.a)(t);return this.$utils.uppercaseFirstLetter(this.$utils.prettifyValue("".concat(e.$rootPath)))},nothingFoundTitle:function(){var t=this.isAnimated?this.$t("NOTHING_FOUND.TITLE_ANIMATED",{term:this.searchingQuery}):this.$t("NOTHING_FOUND.TITLE_v1",{term:this.searchingQuery});return t},nothingFoundText:function(){return this.$t("NOTHING_FOUND.TEXT_v3")},requestIcon:function(){return this.$t("NOTHING_FOUND.LINK_NAME")},popularIconsTitle:function(){var t=this.isPopularIconsTitle?this.$t("NOTHING_FOUND.OTHER_ICONS_NAME"):this.$t("NOTHING_FOUND.OTHER_ICONS_NAME_ANIMATED",{term:this.searchingQuery});return t}}),methods:{fetchNext:function(t){this.isAnimated?this.getSearchIcons(t):this.getPopularIcons(t)},getPopularIcons:function(t){var e=this;this.isPopularIconsTitle=!0,this.$store.dispatch("getPack",{page:this.page,pack:"free-icons"}).then((function(o){if(o.success){var n=[];o.category.subcategory.map((function(t){t.icons.map((function(t){n.push(t)}))})),e.iconsPopular=e.iconsPopular.concat(n),e.page++,t.loaded()}else t.complete(),e.allIconsLoaded=!0})).catch((function(o){o.response.data.error&&(t.complete(),e.allIconsLoaded=!0),console.error("page error",o&&o.message?o.message:o)}))},getSearchIcons:function(t){var e=this,o=this.$utils.prettifyValue("".concat(this.$route.params.term||""));this.$store.dispatch("search",{term:o,platform:"all",page:this.page,amount:100}).then((function(o){if(o.success&&o.icons){if(0===o.countAll)return void e.getPopularIcons(t);o.icons.length&&(e.isPopularIconsTitle=!1,e.iconsPopular=e.iconsPopular.concat(o.icons),e.page++,t.loaded())}(!o.success||e.iconsPopular.length>=o.countAll)&&(t.complete(),e.allIconsLoaded=!0)})).catch((function(o){t.complete(),e.allIconsLoaded=!0,console.error("page error",o&&o.message?o.message:o)}))}}},m=(o(819),o(1)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"search-nothing-found"},[o("img",{staticClass:"icon",attrs:{src:t.staticUrl+"/vue-static/icon/found-nothing.svg",alt:"nothing found"}}),o("h2",{staticClass:"title",domProps:{innerHTML:t._s(t.nothingFoundTitle)}}),o("div",{staticClass:"text"},[o("div",{domProps:{innerHTML:t._s(t.nothingFoundText)}}),o("a",{staticClass:"button is-green-inverse",attrs:{href:"/icons/request-icon"}},[t._v(t._s(t.requestIcon))])]),o("client-only",[t.search?o("div",{staticClass:"ads"},[o("ShutterstockAds",{attrs:{adParams:{query:t.search}}})],1):t._e()]),o("div",{staticClass:"instead-searching"},[o("div",{staticClass:"text"},[t._v(t._s(t.popularIconsTitle))]),t.iconsPopular?o("div",{staticClass:"icons"},[o("icon-grid",{attrs:{icons:t.iconsPopular,action:"select"}})],1):t._e(),o("client-only",[o("infinite-loading",{directives:[{name:"show",rawName:"v-show",value:!t.allIconsLoaded,expression:"!allIconsLoaded"}],attrs:{distance:450},on:{infinite:t.fetchNext}},[o("div",{staticClass:"is-loading",attrs:{slot:"spinner"},slot:"spinner"})])],1)],1)],1)}),[],!1,null,"4dcd7645",null);e.a=component.exports},815:function(t,e,o){"use strict";o(799)},816:function(t,e,o){var n=o(6)(!1);n.push([t.i,"@media (min-width:1024px){.mobile-only[data-v-e60da19a]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-e60da19a]{display:none!important}}@-webkit-keyframes spin-data-v-e60da19a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spin-data-v-e60da19a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.pack[data-v-e60da19a]{padding:16px 17px 17px;width:307px;height:203px;border-radius:8px;background:#fff;box-shadow:0 8px 32px rgba(0,0,0,.08);border:1px solid rgba(51,51,51,.1);box-sizing:border-box;transition:all .25s ease}.pack[data-v-e60da19a]:not(.is-mobile):hover{transform:scale(1.05);box-shadow:0 24px 56px rgba(0,0,0,.14)}.pack[data-v-e60da19a]:not(.is-mobile):active{transform:scale(1);box-shadow:0 8px 32px rgba(0,0,0,.08)}.pack.is-mobile[data-v-e60da19a]:active{transform:scale(.95);box-shadow:0 4px 10px rgba(0,0,0,.08)}.pack.is-white[data-v-e60da19a]{background:rgba(26,26,26,.15)}.pack .icons-grid[data-v-e60da19a]{display:flex;flex-wrap:wrap}.pack .icons-grid .icon[data-v-e60da19a]{height:55px;width:55px;display:flex;justify-content:center;align-items:center;margin-right:15px;margin-bottom:12px;position:relative}.pack .icons-grid .icon[data-v-e60da19a]:nth-of-type(4n){margin-right:0}.pack .icons-grid .icon>.app-icon[data-v-e60da19a]{width:100%;height:100%}.pack .header[data-v-e60da19a]{display:flex;justify-content:space-between;align-items:center;margin-bottom:15px}.pack .title[data-v-e60da19a]{font-size:16px;font-weight:600;line-height:19px;color:#333;margin-left:3px;word-break:break-word}.pack .title .total-icon-count[data-v-e60da19a]{font-size:16px;line-height:19px;color:rgba(26,26,26,.5);font-weight:400;white-space:nowrap}",""]),t.exports=n},819:function(t,e,o){"use strict";o(803)},820:function(t,e,o){var n=o(6)(!1);n.push([t.i,'@media (min-width:1024px){.mobile-only[data-v-4dcd7645]{display:none!important}}@media (max-width:1023px){.desktop-only[data-v-4dcd7645]{display:none!important}}.search-nothing-found[data-v-4dcd7645]{padding-top:20px}.search-nothing-found .icon[data-v-4dcd7645]{width:200px;height:200px;margin-bottom:20px}.search-nothing-found .title[data-v-4dcd7645]{position:relative;text-align:left;font-weight:700;font-size:32px;line-height:44px;color:#1a1a1a;margin:0 0 20px;white-space:nowrap;overflow:hidden}.search-nothing-found .title[data-v-4dcd7645] span{color:#28b351}.search-nothing-found .title[data-v-4dcd7645]:after{content:"";position:absolute;right:0;top:0;width:40px;height:100%;background:linear-gradient(90deg,hsla(0,0%,100%,.2),#fff)}@media (max-width:480px){.search-nothing-found .title[data-v-4dcd7645]{font-size:28px;line-height:38px;white-space:pre-wrap;max-height:86px}}.search-nothing-found .text[data-v-4dcd7645]{max-width:680px;letter-spacing:.5px;margin-bottom:20px}.search-nothing-found .text[data-v-4dcd7645] p{margin:0 0 18px;color:#999}.search-nothing-found .text .button[data-v-4dcd7645]{margin-top:5px}.search-nothing-found .ads[data-v-4dcd7645]{margin-bottom:20px}.instead-searching[data-v-4dcd7645]{position:relative;padding:30px 0}.instead-searching[data-v-4dcd7645]:before{content:"";position:absolute;height:1px;top:0;left:-40px;right:-40px;background-color:rgba(26,26,26,.05)}.instead-searching .text[data-v-4dcd7645]{color:#999}',""]),t.exports=n},837:function(t,e,o){"use strict";o(12),o(13),o(11),o(14),o(15);var n=o(0),r=(o(31),o(28),o(19),o(82),o(83),o(18),o(4));function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={components:{I8Badge:o(770).a},props:{pack:{type:Array,default:function(){return[]}},id:{type:String,default:""},platform:{type:String,default:"ios7"},isFree:{type:Boolean,default:!1},platformObj:{type:Object,default:function(){return null}},color:{type:String,default:null},iconTotalCount:{type:Number,default:void 0}},data:function(){return{isMobile:!1,isIconHover:[]}},computed:d(d({},Object(r.e)({packs:function(t){return t.appInfo.packs},lang:function(t){return t.i18n.locale},filters:function(t){return t.filters},platforms:function(t){return t.appInfo.platforms}})),{},{formattedPacks:function(){var t=this,e={};return this.packs.forEach((function(o,i){e[o.code]=t.packs[i]})),e},iconTotalCountStr:function(){var t="";if(this.iconTotalCount){if(t=this.iconTotalCount.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1,"),"ru"===this.$i18n.locale){var e=this.iconTotalCount%10,o=this.iconTotalCount%100;return 1===e&&this.iconTotalCount%100!=11?"".concat(t," иконка"):"".concat(t,2===e&&12!==o||3===e&&o%100!=13||4===e&&o%100!=14?" иконки":" иконок")}var n=this.$t("ICON.ICONS.LANDING.ICON_COUNT",{count:t}),r=this.$t("ICON.ICONS.LANDING.ICON_COUNT_SINGLE",{count:t});return this.iconTotalCount>1?n:r}return t}}),mounted:function(){this.isMobile=this.$utils.isMobile},methods:{packTitle:function(t){if(this.platformObj&&this.platformObj.title)return this.platformObj.title;var e=this.formattedPacks[t];return e?e.name[this.lang]||e.name["en-US"]:"Icons"},packUrl:function(t){var e=this.formattedPacks[t],o=e.name[this.lang]||e.name["en-US"],n="/icon/set/".concat(o.toLowerCase(),"/").concat(this.platformSeoCode(this.platform)),r=this.filters;return r&&(n+="".concat(r.color?"--"+r.color:""),n+=void 0!==r.isAnimated?"--".concat(r.isAnimated?"animated":"static"):""),n},platformSeoCode:function(t){return this.platforms[t]?this.platforms[t].seoCode:t},iconOnMouseOver:function(t){this.filters.isAnimated&&!this.isIconHover[t]&&this.$set(this.isIconHover,t,!0)},iconOnMouseLeave:function(t){this.filters.isAnimated&&this.isIconHover[t]&&this.$set(this.isIconHover,t,!1)}}},f=(o(815),o(1)),component=Object(f.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"pack",class:{"is-mobile":t.isMobile,"is-white":"ffffff"===t.color},attrs:{to:t.packUrl(t.id)}},[o("div",{staticClass:"header"},[o("div",{staticClass:"title"},[t._v(t._s(t.packTitle(t.id)+" ")),t.iconTotalCount?o("span",{staticClass:"total-icon-count"},[t._v(t._s(t.iconTotalCountStr))]):t._e()]),t.isFree?o("I8Badge",[t._v(t._s(t.$t("ICON.COMPONENTS.PACK_PREVIEW.FREE_SVG_PDF")))]):t._e()],1),o("div",{staticClass:"icons-grid"},t._l(t.pack,(function(e){return o("div",{staticClass:"icon",on:{mouseover:function(o){return t.iconOnMouseOver(e)},mouseleave:function(o){return t.iconOnMouseLeave(e)}}},[o("app-icon",{attrs:{icon:{commonName:e,platform:t.platform},color:t.color,needIconLoader:!0,isIconHover:t.isIconHover[e]}})],1)})),0)])}),[],!1,null,"e60da19a",null);e.a=component.exports},897:function(t,e,o){var content=o(1134);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(7).default)("151a1a64",content,!0,{sourceMap:!1})}}]);
//# sourceMappingURL=_term.23d9c946fe2ce006e35b.js.map