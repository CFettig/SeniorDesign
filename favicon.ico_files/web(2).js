
(function() {
    // Dynamic values from page request
    
var script = document.getElementById("celtra-script-1");
if (!script || script.tagName.toLowerCase() !== 'script')
    throw 'Element with id equal to scriptId does not exist or is not a script.';
  
    var runtimeParams = {"tagVersion":"html-standard-7","deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"11.2.3","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"89.0.4389.114","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"weather":{"windy":null,"currentCondition":"sunny","apparentTemperature":25.0,"temperature":25.2,"windSpeed":null,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"IL","ipCityGeonameId":"4887158","ipCity":"Champaign","ipPostalCode":"61822","ipLat":40.1343,"ipLng":-88.287,"accountId":"559cecfe","folderId":"6080c1e7","placementId":"65536329","supplierId":"3b8d2c08","sessionId":"s1618005198xb1813efb7b6fabx16464967","purpose":"live","secure":1,"clientTimestamp":"1618004983.230","clientTimeZoneOffsetInMinutes":300,"clientIp":"73.8.4.50","gpsLat":40.0953,"gpsLng":-88.2992,"language":"en","acceptLanguage":"en-US,en;q=0.9","platformAdvId":null,"platformAdvIdTrackingLimited":null,"userIdentifiers":{},"variantChoices":{"EventMetadata":"newMeta","CreativeTime/962250ad/27":"Default"},"neustarSegment":null,"authBasis":"1618005198520,962250ad,65536329","authToken":"89c4912ef0b384df4a3cd32af4cfc6a4","customAudiences":{},"derivedAudiences":{},"destinationDefinitions":[],"dynamicContent":[{"feedId":"79536890","fields":[{"id":"7200d581","isUsed":true,"name":"ReportLabelRequiredText","fieldType":"text"},{"id":"dbbba687","isUsed":false,"name":"DynamicImage-320x50","fieldType":"image"},{"id":"3767a0b9","isUsed":true,"name":"DynamicImage-728x90","fieldType":"image"},{"id":"e00fc6e9","isUsed":false,"name":"DynamicImage-160x600","fieldType":"image"},{"id":"aa28a5f9","isUsed":false,"name":"DynamicImage-300x250","fieldType":"image"}],"rows":[{"fieldValues":{"LocationTableImplicitField/79536890/email":{"value":null,"metaData":null},"LocationTableImplicitField/79536890/state":{"value":"IL","metaData":null},"LocationTableImplicitField/79536890/distanceInMiles":{"value":"3.8 miles","metaData":null},"LocationTableImplicitField/79536890/city":{"value":"Savoy","metaData":null},"CustomFeedField/dbbba687":{"value":"https://cache-ssl.celtra.com/api/blobs/f9b38d88f4b010ed7cd1c065be3c64bc1e27da5ef70301fa961c97267154b100/image.png","metaData":null},"LocationTableImplicitField/79536890/website":{"value":"https://408883.go.toro.com/","metaData":null},"LocationTableImplicitField/79536890/openingHours":{"value":null,"metaData":null},"LocationTableImplicitField/79536890/name":{"value":"Awesome Machines","metaData":null},"LocationTableImplicitField/79536890/zip":{"value":"61874","metaData":null},"CustomFeedField/3767a0b9":{"value":"https://cache-ssl.celtra.com/api/blobs/a490973d0897adf49d7757151674f32e60570eaf15778709c56fd53e175bef98/image.png","metaData":null},"LocationTableImplicitField/79536890/distanceInKm":{"value":"6 km","metaData":null},"LocationTableImplicitField/79536890/country":{"value":"USA","metaData":null},"LocationTableImplicitField/79536890/distanceInKilometers":{"value":"6 kilometers","metaData":null},"LocationTableImplicitField/79536890/distanceInMi":{"value":"3.8 mi","metaData":null},"CustomFeedField/aa28a5f9":{"value":"https://cache-ssl.celtra.com/api/blobs/928b6a9e84c3f9bac45cca8661993f15690f10e979b937df23c1d426bc39ff8c/image.png","metaData":null},"CustomFeedField/7200d581":{"value":"109 S DUNLAP AVENUE","metaData":null},"CustomFeedField/e00fc6e9":{"value":"https://cache-ssl.celtra.com/api/blobs/b3cd953bbf072fe6e5eaee2f2a729f91b9c58950a192073cda3d081de83ab5f3/image.png","metaData":null},"LocationTableImplicitField/79536890/address":{"value":"109 S DUNLAP AVENUE","metaData":null},"LocationTableImplicitField/79536890/phone":{"value":null,"metaData":null}},"reportLabel":"Awesome Machines","customFeedFieldPrefix":"CustomFeedField/"}]}],"tuneIosQueryStringFragment":null,"tuneAndroidQueryStringFragment":null,"tuneCustomAttributes":{},"moatCustomAttributes":{},"admarvel_format":null,"overrides":{"placementId":"65536329","customAudiences":{},"derivedAudiences":{},"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"desktop","mobileDevice":false,"osName":"OSX","osVersion":"11.2.3","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"89.0.4389.114","browserRenderingEngine":"WebKit","vendor":"Apple","model":null},"language":"en","ipCountryCode":"US","ipRegionCode":null,"ipPrincipalSubdivisionCode":"IL","ipCityGeonameId":"4887158","ipCity":"Champaign","weather":{"windy":null,"currentCondition":"sunny","apparentTemperature":25.0,"temperature":25.2,"windSpeed":null,"cloudCoverage":0,"conditions":[{"name":"sunny","weight":1}]},"clientTimestamp":"1618004983.230","clientTimeZoneOffsetInMinutes":300},"utSignals":null,"_mraidCheck":null,"fallbackSdk":null,"passthroughParameters":{},"googleMapsClientKey":"AIzaSyAR85TjSF3_ny_OAJdQUy6LukDT0FXH7A4","shouldShowMapsPrompt":false,"pageSkinsHost":null,"pageSkinsPath":null,"externalAdServer":"Valassis","externalCreativeId":null,"externalCreativeName":null,"externalPlacementId":null,"externalPlacementName":null,"externalSiteId":"08343AF8D3E5CE83CCEBC1A0027A5720","externalSiteName":null,"externalSupplierId":null,"externalSupplierName":null,"externalLineItemId":null,"externalSessionId":"D4E32F_DB483D01_768901","externalBundleId":null,"externalCreativeWidth":null,"externalCreativeHeight":null,"externalCampaignId":null,"externalCampaignName":null,"externalAdvertiserId":null,"externalDestinationUrl":null,"clickUrl":"http://mpc.mxptint.net/9S1SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://r.mxptint.net%3f","useClickAsDestination":null,"scriptId":"celtra-script-1","firehoseUrl":null,"user.MapDirectionsTapped":"http://mpc.mxptint.net/1S35SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net","user.MapMarkerTapped":"http://mpc.mxptint.net/1S39SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net","user.MapClusterMarkerTapped":"http://mpc.mxptint.net/1S39SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net","user.MapTapped":"http://mpc.mxptint.net/1S39SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net","user.MapDragged":"http://mpc.mxptint.net/1S39SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net","clickEvent":"advertiser","clickUrlNeedsDest":null,"ncu":null,"firstPage":1,"dataURIsEnabled":0,"universalAndAppLinksInMRAID":0,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null,"moatRandom":{"first":1270017055,"second":1325501543},"skipOffset":null,"_enablePoliteLoading":null,"massProductionPreview":null,"fontSubsetterIsDisabled":null,"_politeImageUrl":null,"_politeClickThrough":null,"sticky":null,"_mopubExt":null,"enabledServices":["googleMaps","contentSharing"],"creativeVariantLockSize":null,"screenIdLock":null,"vastVersion":null,"standalonePreview":null,"campaignExplorer":null,"exportingFirstFrame":null,"exportingFrameRate":null,"exportingVideoAssetBlobHash":null,"country":"US","productCategoryCode":null,"campaignName":"29845: Toro: n/a: MTI-TerritorySpringPackages-Q1Q2-2021","agencyId":null,"customPartnerAttributeBrandId":null,"suppressCloseButton":null,"preferredClickThroughWindow":"new","expandDirection":"undefined","externalCachebuster":"9051648","hostPageLoadId":"7569195533737993"};
    runtimeParams.overridableClickThroughDestinationUrl = false;
    runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
    
    
    
var macros = function (x) {
    if (x instanceof Array) {
        return x.map(macros);
    } else {
        var macroTags = [
            ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)]
,['%MPI_RICH_EVENT_16%', "http://mpc.mxptint.net/1S10SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_53%', "http://mpc.mxptint.net/1S35SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_54%', "http://mpc.mxptint.net/1S36SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_55%', "http://mpc.mxptint.net/1S37SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_56%', "http://mpc.mxptint.net/1S38SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_57%', "http://mpc.mxptint.net/1S39SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_58%', "http://mpc.mxptint.net/1S3ASE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_59%', "http://mpc.mxptint.net/1S3BSE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_61%', "http://mpc.mxptint.net/1S3DSE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_62%', "http://mpc.mxptint.net/1S3ESE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_63%', "http://mpc.mxptint.net/1S3FSE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_RICH_EVENT_64%', "http://mpc.mxptint.net/1S40SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_VIDEO_EVENT_12%', "http://mpc.mxptint.net/1SCSE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_VIDEO_EVENT_5%', "http://mpc.mxptint.net/1S5SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%MPI_VIDEO_EVENT_9%', "http://mpc.mxptint.net/1S9SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://noredir.mxptint.net"]
,['%n', (Math.random()+'').slice(2)]
,['%s', "https"]
,['\\{celtraAccountId\\}', "559cecfe"]
,['\\{celtraAgencyId\\}', ""]
,['\\{celtraAndroidAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraAndroidAdvIdTrackingLimited\\}', ""]
,['\\{celtraAndroidAdvId\\}', ""]
,['\\{celtraCampaignId:int\\}', "1619050983"]
,['\\{celtraCampaignId\\}', "6080c1e7"]
,['\\{celtraCampaignName\\}', "29845%3A%20Toro%3A%20n%2Fa%3A%20MTI-TerritorySpringPackages-Q1Q2-2021"]
,['\\{celtraCountryCode\\}', "US"]
,['\\{celtraCreativeId:int\\}', "2518831277"]
,['\\{celtraCreativeId\\}', "962250ad"]
,['\\{celtraCreativeVariant:urlenc\\}', "Default"]
,['\\{celtraCreativeVariant\\}', "Default"]
,['\\{celtraCustomPartnerAttribute\\[code\\]\\}', ""]
,['\\{celtraExternalAdServer\\}', "Valassis"]
,['\\{celtraExternalAdvertiserId\\}', ""]
,['\\{celtraExternalBundleId\\}', ""]
,['\\{celtraExternalCampaignId\\}', ""]
,['\\{celtraExternalCampaignName\\}', ""]
,['\\{celtraExternalCreativeId\\}', ""]
,['\\{celtraExternalCreativeName\\}', ""]
,['\\{celtraExternalDestinationUrl\\}', ""]
,['\\{celtraExternalLineItemId\\}', ""]
,['\\{celtraExternalPlacementId\\}', ""]
,['\\{celtraExternalPlacementName\\}', ""]
,['\\{celtraExternalSessionId\\}', "D4E32F_DB483D01_768901"]
,['\\{celtraExternalSiteId\\}', "08343AF8D3E5CE83CCEBC1A0027A5720"]
,['\\{celtraExternalSiteName\\}', ""]
,['\\{celtraExternalSupplierId\\}', ""]
,['\\{celtraExternalSupplierName\\}', ""]
,['\\{celtraFeedReportLabel\\}', "79536890%3DAwesome%20Machines"]
,['\\{celtraIosAdvIdTrackingLimitedBoolStr\\}', ""]
,['\\{celtraIosAdvIdTrackingLimited\\}', ""]
,['\\{celtraIosAdvId\\}', ""]
,['\\{celtraPlacementId:int\\}', "1699963689"]
,['\\{celtraPlacementId\\}', "65536329"]
,['\\{celtraPlatformAdvIdTrackingLimited\\}', ""]
,['\\{celtraPlatformAdvId\\}', ""]
,['\\{celtraProductCategoryCode\\}', ""]
,['\\{celtraProto\\}', "https"]
,['\\{celtraRandom\\}', (Math.random()+'').slice(2)]
,['\\{celtraSessionId\\}', "s1618005198xb1813efb7b6fabx16464967"]
,['\\{celtraSupplierId:int\\}', "999107592"]
,['\\{celtraSupplierId\\}', "3b8d2c08"]

        ];
        return macroTags.reduce(function(str, replacementRule, idx, arr) {
            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
        }, x);
    }
};

    // Dynamic values that we do not want to pass forward in urls,
    // so we look them up on every page request based on runtimeParams
    var urlOpenedOverrideUrls = {};
    var storeOpenedOverrideUrls = {};
    var urlOpenedUrlAppendage = "";
    var clickThroughDestinationUrl = null;

    // Less dynamic values for payload request
    var payloadBase = "https://cache-ssl.celtra.com/api/creatives/962250ad/compiled/web.js";
    var cacheParams = {"v": "1-f26f1415ae", "secure": 1, "cachedVariantChoices": "W10-", "isPurposePreview": 0, "eventMetadataExperiment": 'newMeta', "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

    
    var trackers = (function() {
    return [
        // 3rd-party tracker (regular)
function(event) {
    if (event.name == 'adLoading')
        return {urls: macros([])};

    if (event.name == 'firstInteraction')
        return {urls: macros([])};

    if (event.name == 'creativeLoaded')
        return {urls: macros([])};

    if (event.name == 'creativeRendered')
        return {urls: macros([])};

    if (event.name == 'viewable00')
        return {urls: macros([])};

    if (event.name == 'viewable501')
        return {urls: macros([])};

    if (event.name == 'expandRequested')
        return {urls: macros([])};

    if (event.name == 'videoPlayInitiated')
        return {urls: macros([])};

    if (event.clazz === "MasterVideo") {
        if (event.name == 'videoStart')
            return {urls: macros([])};

        if (event.name == 'videoFirstQuartile')
            return {urls: macros([])};

        if (event.name == 'videoMidpoint')
            return {urls: macros([])};

        if (event.name == 'videoThirdQuartile')
            return {urls: macros([])};

        if (event.name == 'videoComplete')
            return {urls: macros([])};
    }

    if (event.name == 'videoPause')
        return {urls: macros([])};

    if (event.name == 'videoMuted')
        return {urls: macros([])};

    if (event.name == 'videoUnmuted')
        return {urls: macros([])};

    if (event.name == 'custom')
        return {urls: macros({"[Video Mute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 2 Start]":["%MPI_RICH_EVENT_5%"],"[Video Unmute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 4 Replay]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 4 Start]":["%MPI_RICH_EVENT_5%"],"[Carousel Video 4 Pause]":["%MPI_RICH_EVENT_12%"],"[Carousel Video 2 Mute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 1 Complete]":["%MPI_RICH_EVENT_9%"],"[Carousel Video 4 Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Carousel Video 2 Complete]":["%MPI_RICH_EVENT_9%"],"[Carousel Video 5 Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Carousel Video 1 Pause]":["%MPI_RICH_EVENT_12%"],"[Carousel Video 5 Unmute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 5 Replay]":["%MPI_RICH_EVENT_57%"],"Facebook Share Button":["%MPI_RICH_EVENT_64%"],"[Carousel Video 3 Unmute]":["%MPI_RICH_EVENT_57%"],"[Legal Text Interaction]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 4 Mute]":["%MPI_RICH_EVENT_57%"],"[Video Start]":["%MPI_RICH_EVENT_5%"],"[Video Replay]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 1 Replay]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 3 Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Carousel Video 1 Mute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 1 Start]":["%MPI_RICH_EVENT_5%"],"[Video Complete]":["%MPI_RICH_EVENT_9%"],"[Carousel Video 3 Complete]":["%MPI_RICH_EVENT_9%"],"[Carousel Video 3 Mute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 4 Unmute]":["%MPI_RICH_EVENT_57%"],"[Btn Next Panel]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 5 Pause]":["%MPI_RICH_EVENT_12%"],"[Carousel Video 1 Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Btn Previous Panel]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 2 Pause]":["%MPI_RICH_EVENT_12%"],"[Carousel Video 4 Complete]":["%MPI_RICH_EVENT_9%"],"[Carousel Video 1 Unmute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 3 Pause]":["%MPI_RICH_EVENT_12%"],"[Multipage Link Tap/Click]":["%MPI_RICH_EVENT_57%"],"[Video Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Carousel Video 3 Replay]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 2 Tap/Click]":["%MPI_RICH_EVENT_62%"],"[Carousel Video 2 Unmute]":["%MPI_RICH_EVENT_57%"],"[Video Pause]":["%MPI_RICH_EVENT_12%"],"[Carousel Video 5 Complete]":["%MPI_RICH_EVENT_9%"],"Twitter Share Button":["%MPI_RICH_EVENT_64%"],"[Carousel Video 5 Mute]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 3 Start]":["%MPI_RICH_EVENT_5%"],"[Carousel Video 2 Replay]":["%MPI_RICH_EVENT_57%"],"[Carousel Video 5 Start]":["%MPI_RICH_EVENT_5%"]}[event.label] || [])};

    if (event.name == 'urlOpened')
        return {urls: macros({}[event.label] || [])};

    if (event.name == 'storeOpened')
        return {urls: macros({}[event.label] || [])};
},
// 3rd-party tracker (click regular)
function(event) {
    if (event.name === "custom" && event.label === ".Click/Exit URL (Primary)" || event.name === "custom" && event.label === "Carousel URL 1" || event.name === "custom" && event.label === "Carousel URL 2" || event.name === "custom" && event.label === "Carousel URL 3" || event.name === "custom" && event.label === "Carousel URL 4" || event.name === "custom" && event.label === "Carousel URL 5" || event.name === "custom" && event.label === "Carousel Video URL 1" || event.name === "custom" && event.label === "Carousel Video URL 2" || event.name === "custom" && event.label === "Carousel Video URL 3" || event.name === "custom" && event.label === "Carousel Video URL 4" || event.name === "custom" && event.label === "Carousel Video URL 5" || event.name === "custom" && event.label === "Facebook Share Button" || event.name === "custom" && event.label === "Inline Video URL" || event.name === "custom" && event.label === "Twitter Share Button" || event.name === "custom" && event.label === "[Btn Next Panel]" || event.name === "custom" && event.label === "[Btn Previous Panel]" || event.name === "custom" && event.label === "[Carousel Video 1 Complete]" || event.name === "custom" && event.label === "[Carousel Video 1 Mute]" || event.name === "custom" && event.label === "[Carousel Video 1 Replay]" || event.name === "custom" && event.label === "[Carousel Video 1 Start]" || event.name === "custom" && event.label === "[Carousel Video 1 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 1 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 2 Complete]" || event.name === "custom" && event.label === "[Carousel Video 2 Mute]" || event.name === "custom" && event.label === "[Carousel Video 2 Replay]" || event.name === "custom" && event.label === "[Carousel Video 2 Start]" || event.name === "custom" && event.label === "[Carousel Video 2 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 2 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 3 Complete]" || event.name === "custom" && event.label === "[Carousel Video 3 Mute]" || event.name === "custom" && event.label === "[Carousel Video 3 Replay]" || event.name === "custom" && event.label === "[Carousel Video 3 Start]" || event.name === "custom" && event.label === "[Carousel Video 3 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 3 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 4 Complete]" || event.name === "custom" && event.label === "[Carousel Video 4 Mute]" || event.name === "custom" && event.label === "[Carousel Video 4 Replay]" || event.name === "custom" && event.label === "[Carousel Video 4 Start]" || event.name === "custom" && event.label === "[Carousel Video 4 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 4 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 5 Complete]" || event.name === "custom" && event.label === "[Carousel Video 5 Mute]" || event.name === "custom" && event.label === "[Carousel Video 5 Replay]" || event.name === "custom" && event.label === "[Carousel Video 5 Start]" || event.name === "custom" && event.label === "[Carousel Video 5 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 5 Unmute]" || event.name === "custom" && event.label === "[Legal Text Interaction]" || event.name === "custom" && event.label === "[Multipage Link Tap/Click]" || event.name === "custom" && event.label === "[Video Complete]" || event.name === "custom" && event.label === "[Video Mute]" || event.name === "custom" && event.label === "[Video Pause]" || event.name === "custom" && event.label === "[Video Replay]" || event.name === "custom" && event.label === "[Video Start]" || event.name === "custom" && event.label === "[Video Tap/Click]" || event.name === "custom" && event.label === "[Video Unmute]" || event.name === "urlOpened" && event.label === ".Click/Exit URL (Primary)" || event.name === "urlOpened" && event.label === "Carousel URL 1" || event.name === "urlOpened" && event.label === "Carousel URL 2" || event.name === "urlOpened" && event.label === "Carousel URL 3" || event.name === "urlOpened" && event.label === "Carousel URL 4" || event.name === "urlOpened" && event.label === "Carousel URL 5" || event.name === "urlOpened" && event.label === "Carousel Video URL 1" || event.name === "urlOpened" && event.label === "Carousel Video URL 2" || event.name === "urlOpened" && event.label === "Carousel Video URL 3" || event.name === "urlOpened" && event.label === "Carousel Video URL 4" || event.name === "urlOpened" && event.label === "Carousel Video URL 5" || event.name === "urlOpened" && event.label === "Inline Video URL" || event.name === "storeOpened" && event.label === ".Click/Exit URL (Primary)" || event.name === "storeOpened" && event.label === "Carousel URL 1" || event.name === "storeOpened" && event.label === "Carousel URL 2" || event.name === "storeOpened" && event.label === "Carousel URL 3" || event.name === "storeOpened" && event.label === "Carousel URL 4" || event.name === "storeOpened" && event.label === "Carousel URL 5" || event.name === "storeOpened" && event.label === "Carousel Video URL 1" || event.name === "storeOpened" && event.label === "Carousel Video URL 2" || event.name === "storeOpened" && event.label === "Carousel Video URL 3" || event.name === "storeOpened" && event.label === "Carousel Video URL 4" || event.name === "storeOpened" && event.label === "Carousel Video URL 5" || event.name === "storeOpened" && event.label === "Inline Video URL")
        return {urls: macros([]), events: [{name: 'click'}] };
},
// Ad server tracker
function(event) {
    if (event.name === "custom" && event.label === ".Click/Exit URL (Primary)" || event.name === "custom" && event.label === "Carousel URL 1" || event.name === "custom" && event.label === "Carousel URL 2" || event.name === "custom" && event.label === "Carousel URL 3" || event.name === "custom" && event.label === "Carousel URL 4" || event.name === "custom" && event.label === "Carousel URL 5" || event.name === "custom" && event.label === "Carousel Video URL 1" || event.name === "custom" && event.label === "Carousel Video URL 2" || event.name === "custom" && event.label === "Carousel Video URL 3" || event.name === "custom" && event.label === "Carousel Video URL 4" || event.name === "custom" && event.label === "Carousel Video URL 5" || event.name === "custom" && event.label === "Facebook Share Button" || event.name === "custom" && event.label === "Inline Video URL" || event.name === "custom" && event.label === "Twitter Share Button" || event.name === "custom" && event.label === "[Btn Next Panel]" || event.name === "custom" && event.label === "[Btn Previous Panel]" || event.name === "custom" && event.label === "[Carousel Video 1 Complete]" || event.name === "custom" && event.label === "[Carousel Video 1 Mute]" || event.name === "custom" && event.label === "[Carousel Video 1 Replay]" || event.name === "custom" && event.label === "[Carousel Video 1 Start]" || event.name === "custom" && event.label === "[Carousel Video 1 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 1 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 2 Complete]" || event.name === "custom" && event.label === "[Carousel Video 2 Mute]" || event.name === "custom" && event.label === "[Carousel Video 2 Replay]" || event.name === "custom" && event.label === "[Carousel Video 2 Start]" || event.name === "custom" && event.label === "[Carousel Video 2 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 2 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 3 Complete]" || event.name === "custom" && event.label === "[Carousel Video 3 Mute]" || event.name === "custom" && event.label === "[Carousel Video 3 Replay]" || event.name === "custom" && event.label === "[Carousel Video 3 Start]" || event.name === "custom" && event.label === "[Carousel Video 3 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 3 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 4 Complete]" || event.name === "custom" && event.label === "[Carousel Video 4 Mute]" || event.name === "custom" && event.label === "[Carousel Video 4 Replay]" || event.name === "custom" && event.label === "[Carousel Video 4 Start]" || event.name === "custom" && event.label === "[Carousel Video 4 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 4 Unmute]" || event.name === "custom" && event.label === "[Carousel Video 5 Complete]" || event.name === "custom" && event.label === "[Carousel Video 5 Mute]" || event.name === "custom" && event.label === "[Carousel Video 5 Replay]" || event.name === "custom" && event.label === "[Carousel Video 5 Start]" || event.name === "custom" && event.label === "[Carousel Video 5 Tap/Click]" || event.name === "custom" && event.label === "[Carousel Video 5 Unmute]" || event.name === "custom" && event.label === "[Legal Text Interaction]" || event.name === "custom" && event.label === "[Multipage Link Tap/Click]" || event.name === "custom" && event.label === "[Video Complete]" || event.name === "custom" && event.label === "[Video Mute]" || event.name === "custom" && event.label === "[Video Pause]" || event.name === "custom" && event.label === "[Video Replay]" || event.name === "custom" && event.label === "[Video Start]" || event.name === "custom" && event.label === "[Video Tap/Click]" || event.name === "custom" && event.label === "[Video Unmute]" || event.name === "urlOpened" && event.label === ".Click/Exit URL (Primary)" || event.name === "urlOpened" && event.label === "Carousel URL 1" || event.name === "urlOpened" && event.label === "Carousel URL 2" || event.name === "urlOpened" && event.label === "Carousel URL 3" || event.name === "urlOpened" && event.label === "Carousel URL 4" || event.name === "urlOpened" && event.label === "Carousel URL 5" || event.name === "urlOpened" && event.label === "Carousel Video URL 1" || event.name === "urlOpened" && event.label === "Carousel Video URL 2" || event.name === "urlOpened" && event.label === "Carousel Video URL 3" || event.name === "urlOpened" && event.label === "Carousel Video URL 4" || event.name === "urlOpened" && event.label === "Carousel Video URL 5" || event.name === "urlOpened" && event.label === "Inline Video URL" || event.name === "storeOpened" && event.label === ".Click/Exit URL (Primary)" || event.name === "storeOpened" && event.label === "Carousel URL 1" || event.name === "storeOpened" && event.label === "Carousel URL 2" || event.name === "storeOpened" && event.label === "Carousel URL 3" || event.name === "storeOpened" && event.label === "Carousel URL 4" || event.name === "storeOpened" && event.label === "Carousel URL 5" || event.name === "storeOpened" && event.label === "Carousel Video URL 1" || event.name === "storeOpened" && event.label === "Carousel Video URL 2" || event.name === "storeOpened" && event.label === "Carousel Video URL 3" || event.name === "storeOpened" && event.label === "Carousel Video URL 4" || event.name === "storeOpened" && event.label === "Carousel Video URL 5" || event.name === "storeOpened" && event.label === "Inline Video URL")
        return {urls: macros(["http://mpc.mxptint.net/9S1SE9261AES7495S403CDS2D8S5AS12C6SB334BF_DB483CE4_60B35AFSD4E32F_DB483D01_768901%3fhttp://r.mxptint.net%3f"]), events: [{name: 'clickReportedToSupplier'}] };
}
    ]
})();
    trackers.urlsAndEventsFor = function(event) {
        return this.reduce(function(acc, tracker) {
            var ue = tracker(event) || {};
            return {
                urls:   acc.urls.concat(ue.urls || []),
                events: acc.events.concat(ue.events || [])
            };
        }, {urls: [], events: []});
    };
       

    
var adLoadingEvent = {"name":"adLoading","sessionId":"s1618005198xb1813efb7b6fabx16464967"};
adLoadingEvent.clientTimestamp = new Date/1000;

trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
    // On IE 8+ URLs containing '%' character sometimes throw an error and
    // stop current JS run loop. One solution  would be to look for that
    // and replace it with '%25', but we've decided not to modify incoming
    // URLs, because this issue is really a combination of two external
    // problems: broken URL on a buggy browser.
    // https://celtra.atlassian.net/browse/MAB-4476
    try {
        var img = new Image;
        
        img.src = url;
    } catch(e) {}
});
    

    
(function () {
    runtimeParams.protoLoading = {};

    var base64img = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH4wEKCBsN103sxwAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAAC0lEQVQI12NgAAIAAAUAAeImBZsAAAAASUVORK5CYII=";

    runtimeParams.protoLoading.dataLoadStatus = null;
    // Test if CSP is blocking "data:" source for images
    var dataImg = new Image();
    dataImg.onload = function() {
        runtimeParams.protoLoading.dataLoadStatus = "supported";
    };
    dataImg.onerror = function(e) {
        runtimeParams.protoLoading.dataLoadStatus = "blocked";
    };
    dataImg.src = "data:image/png;base64," + base64img;

    runtimeParams.protoLoading.blobLoadStatus = null;
    // Test if CSP is blocking "blob:" source for images
    var url = null;
    try {
        var binaryImg = atob(base64img);
        var length = binaryImg.length;
        var ab = new ArrayBuffer(length);
        var ua = new Uint8Array(ab);
        for (var i = 0; i < length; i++) {
            ua[i] = binaryImg.charCodeAt(i);
        }
        var blob = new Blob([ab], {type: 'image/png'});
        url = URL.createObjectURL(blob);
    } catch(error) {
        runtimeParams.protoLoading.blobLoadStatus = "error";
        runtimeParams.protoLoading.blobErrorMessage = error.name + ': ' + error.message;
        return;
    }
    var blobImg = new Image();
    blobImg.onload = function() {
        runtimeParams.protoLoading.blobLoadStatus = "supported";
        URL.revokeObjectURL(url);
    };
    blobImg.onerror = function(e) {
        runtimeParams.protoLoading.blobLoadStatus = "blocked";
    };
    blobImg.src = url;
})();
    

    function buildPayloadUrl(payloadBase) {
      var pairs = [];
      for (var k in cacheParams)
          pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
      return payloadBase + '?' + pairs.join('&');
    }

    var payloadUrl = buildPayloadUrl(payloadBase);

    
// Request and run payload
var payload = document.createElement('script');
payload.src = payloadUrl;
payload.onload = function() {

runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
    
};
script.parentNode.insertBefore(payload, script.nextSibling);
    
    
    
    
})();
  