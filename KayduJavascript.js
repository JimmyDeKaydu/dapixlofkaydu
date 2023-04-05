debugger;
document.addEventListener('readystatechange', (event) => {
	var URL_link = "https://AdministracinKaydu.kaydu.net/";
	var head = document.getElementsByTagName('HEAD')[0];
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = URL_link + '/css/custom-popup-design.css';
	head.appendChild(link);
});
window.addEventListener('load', function() {
	console.log('Window Load');
blog = {};
blog.comments = blog.comments || {};

blog.isFirstLoad = function(namesp) {
	var isFirst = namesp.firstLoad === undefined;
	namesp.firstLoad = false;
	
	if (!isFirst) {
		console.log(
			"Warning: Javascript file is included twice: ");
	}

	return isFirst;
};

var ContactUniqueIdSingle='';
var query_string = { id: 0 },
    Server_link = "https://AdministracinKaydu.kaydu.net/";
    cdn_server = "",
    env = "app",
    B1popup_Jquery;

var B1popup = new Array,
    all_poptins, ifAndroid = !!/Android/i.test(navigator.userAgent),
    isFirefox = -1 < navigator.userAgent.toLowerCase().indexOf("firefox"),
    isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
    ifMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()),
    if_display = !1,
    if_freemium = null,
    if_html_pad = !1,
    user_lang = "en",
    newScaleTimeout = [],
    skip_en = "Skip",
    skip_he = "×“×œ×’",
    if_ruledisplay = !1,
    if_cookiedisplay = !1,
    facebook_messanger_data_ref = "",
    Jsondata = "",
    triggerevent = [],
    inputelement = ["input", "select", "textarea"],
    if_Collcookiedisplay = !1,
    host = "",
	count = 0,
    Collectordata = "";
var B1popupPageLoaded = 0,
    B1popupStarted = !1,
    checkTimeOutArray = [];

//function CssFileAppend() {
    //winie = /Windows NT 6.1/i.test(navigator.userAgent) && (/Trident/i.test(navigator.userAgent) || /MSIE/i.test(navigator.userAgent)) ? "-ie" : "", font_link = '<link rel="stylesheet" type="text/css" href="' + Server_link + '/css/custom-popup-design.css">', B1popup_Jquery("head").append(font_link)
//}
/*end*/
function intphonenumbercssappend() {
    winie = /Windows NT 6.1/i.test(navigator.userAgent) && (/Trident/i.test(navigator.userAgent) || /MSIE/i.test(navigator.userAgent)) ? "-ie" : "", font_link = '<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/css/intlTelInput.css">', B1popup_Jquery("head").append(font_link)
}

function get_browser_info() {
    var ua = navigator.userAgent, tem, M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return { name: 'IE ', version: (tem[1] || '') };
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\bOPR\/(\d+)/)
        if (tem != null) { return { name: 'Opera', version: tem[1] }; }
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null) { M.splice(1, 1, tem[1]); }
    return {
        name: M[0],
        version: M[1]
    };
}

function runPopupNow() {
if (!blog.isFirstLoad(blog.comments)) {
		return;
    }
	
		intialpopup();
}
function loadScript(src, callback) {
    var js = document.createElement('script');
    js.src = src;
    js.type = 'text/javascript';
    if (typeof callback === 'function') {
        js.addEventListener('load', callback);
    }
    (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(js)
}

function pageLoadCheck(checkCount) {
    if (2 == ++B1popupPageLoaded)
        runPopupNow();
    else {
        try {
            clearTimeout(checkTimeOutArray[checkCount])
        } catch (error) { }
        checkTimeOutArray[checkCount] = setTimeout(function () {
            runPopupNow()
        }, 1e3)
    }
}

var B1PopupAfterPageLoad = B1PopupAfterPageLoad || !1;
function intialpopup() {
    function setJ() {
        (B1popup_Jquery = jQuery.noConflict(!0)).ui = window.jQuery.ui, (typeof popup_landing_page == "undefined" ? initiatePopupRequest() : initiateLandingPopupRequest())
    }
    function setDolar() {
        (B1popup_Jquery = jQuery.noConflict(!0)).ui = void 0 !== window.$ && void 0 !== window.$.ui ? window.$.ui : void 0, (typeof popup_landing_page == "undefined" ? initiatePopupRequest() : initiateLandingPopupRequest())
    }
    function setJQ224() {
        B1popup_Jquery = jQuery.noConflict(!0), (typeof popup_landing_page == "undefined" ? initiatePopupRequest() : initiateLandingPopupRequest())
    }
    function j_2(setJquery) {
        var r = document.createElement("script");
         r.setAttribute("type", "text/javascript"), r.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"), r.setAttribute("async", "true"), r.readyState ? r.onreadystatechange = function () {
             "complete" != this.readyState && "loaded" != this.readyState || setJquery()
         } : r.onload = setJquery, (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(r)
    }
    getClientId(),
        function () {
            try {
                void 0 !== window.$ && void 0 !== window.$.ui ? j_2(setDolar) : void 0 !== window.jQuery && void 0 !== window.jQuery.ui ? j_2(setJ) : j_2(setJQ224);
            } catch (err) {
                j_2(setJQ224)
            }
        }()

    var intialjquery = function () {
        B1popup_Jquery = jQuery.noConflict(!0), initiatePopupRequest()
    }
}

function downloadJqueryUi() {
	//if(B1popup_Jquery && !B1popup_Jquery.ui) {
     if (B1popup_Jquery('script[src*="/jquery-ui.min.js"]').length == 0) {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    }
    if (B1popup_Jquery('script[src*="/bootstrap.min.js"]').length == 0) {
        //jQuery = B1popup_Jquery;
        bootstrapjs();
    }
    B1popup_Jquery = jQuery;
}

function SwalAlert() {
 var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://cdn.jsdelivr.net/npm/sweetalert2@7");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    B1popup_Jquery = jQuery;
}
function downloadinttelphone() {
        var script_tag = document.createElement('script');
        script_tag.setAttribute("type", "text/javascript");
        script_tag.setAttribute("src", "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.19/js/intlTelInput.js");
        (document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
    B1popup_Jquery = jQuery;	
}

function getClientId() {
    return BSUnquieID;
}
function getOriginLandingPage() {
    lp = window.location.href;
    return lp
}
function GetIpdetails() {
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/GetVisitorIPDetail",
        type: "GET",
        async: false,
        data: {
            ipAddress: GetCookie("BSpopup_IPaddress"),
            UniqueId: getClientId(),
        },
        dataType: "json",
        success: function (data) {
            if (document.cookie.indexOf("BSpopup_IPaddress") == -1 || GetCookie("BSpopup_IPaddress") != data.visitorData.ipAddress) {
				data.visitorData.region ="";
				data.visitorData.city ="";
				data.visitorData.timeZoneName ="";
				data.visitorData.timeZoneOffset ="";
				data.visitorData.currencyCode ="";
				DeleteCookie("BSpopup_IPaddress");
                DeleteCookie("BSpopup_IPCaddress");
                DeleteCookie("BSpopup_IPaddressDT");
                SetCookie("BSpopup_IPaddress", data.visitorData.ipAddress, 2000);
                SetCookie("BSpopup_IPCaddress", data.visitorData.countryCode, 2000);
                SetCookie("BSpopup_IPaddressDT1", JSON.stringify(data.visitorData), 2000);
            }
			else {
				DeleteCookie("BSpopup_IPaddressDT1");
				SetCookie("BSpopup_IPaddressDT1", JSON.stringify(data.visitorData), 2000);
				console.log(JSON.stringify(data.visitorData));
        }
		}
    });
}


function GetDatacollectorDetails() {
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/GetDataCollectorDetaisl",
        type: "GET",
        async: false,
        data: {
            popupDomain: getOriginLandingPage(),
            UniqueId: getClientId(),
        },
        dataType: "json",
        success: function (data) {
            Collectordata = data.dCollector;
            B1popup_Jquery.each(data.dCollector, function (key, val) {

                TriggerEvent(val.triggers.element, val.triggers.triggerEvent);

            });
        }
    });
}

function GetIntphonedetails() {
    const input = document.querySelector("input[type='tel']");
    if (input != null) {
		intlTelInput(input, {
        initialCountry: "mx",
        separateDialCode: true,
        //utilsScript:
        //    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    })
	}
	const myTimeout = setTimeout(validatephonenumber, 2000);
}



var countrycodevalue = '';
function validatephonenumber() {
    const btn = document.querySelector("input[type='tel']")
    if (btn) {
     
        btn.addEventListener('keyup', (e) => {
            var countrycode = document.getElementsByClassName('iti__selected-dial-code');
            if (countrycode.length > 0) {
                countrycodevalue = (countrycode[0].innerText).substring(1)
            }
			  if (isModifierKey(event)) { return; }
            var target = e.target;
            /*            var value = document.getElementById('' + btn.id + '').value*/
            var input = e.target.value.replace(/\D/g, '').substring(0, 10);
            var first = input.substring(0, 3);
            var middle = input.substring(3, 6);
            var last = input.substring(6, 8);
            var lastplus = input.substring(8, 10);
            target.value = '' + first + '-' + middle + ' - ' + last + '-' + lastplus;
        });
    };
}


B1PopupAfterPageLoad ? (console.log("popupAfterPageLoad"),
    setTimeout(function () {
        "complete" == document.readyState ? runPopupNow() : window.addEventListener || window.hasOwnProperty("onload") ? (window.addEventListener("load", function () {
            pageLoadCheck("check1")
        }, !0),
            window.onload = function () {
                pageLoadCheck("check2")
            }
        ) : runPopupNow()
    }, 1500 * ("noJqueryUi" == B1popupPageLoaded || "noConflict" == B1popupPageLoaded ? 0 : 1))) : runPopupNow();

function initiateLandingPopupRequest() {
    GetIpdetails();
    
    var referrer = document.referrer;

    var trafficsource = "";
    domain = document.domain, page_title = document.title;
    if (referrer != "") {
        referrer = referrer.match(/:\/\/(.[^/]+)/)[1];
        if (referrer != document.domain) {
            trafficsource = referrer;
        }
    }
    B1popup_Jquery.ajax({


        url: Server_link + "/PopupFE/GetPopupDataByTemplateUniqueId",
        type: "GET",
        async: false,
        data: {
            templateCustomizeUniqueId: TemplateID,
            UniqueId: getClientId(),
            hostname: domain,
            ipAddress: GetCookie("BSpopup_IPaddress"),
            displayDevices: (ifMobile == true ? "mobile" : "desktop"),
            countryCode: GetCookie("popup_IPCaddress"),
            referrer: trafficsource,
        },
        dataType: "json",
        success: function (data) {
            Jsondata = data;

            downloadJqueryUi();
			SwalAlert();
            //CssFileAppend();
            CallButtonClickFun()
            intphonenumbercssappend()
			downloadinttelphone()
            setTimeout(function () {
                B1popup_Jquery.each(data.templateListData, function (key, val) {
                    InsertUpdateStaticData(val.templateCustomizeUniqueId);
					LandingCreateVisitorCookie(val);
                    staticHTMLDesign(val);
					 GetIntphonedetails();
                });
            }, 1500);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert(textStatus);
        }


    })
}
function initiatePopupRequest() {
 setTimeout(function () {
    GetIpdetails();
    
    //host = document.domain;
	if (window.location != window.parent.location) {
         host = document.referrer;
		 host = host.replace(/^https?:\/\//, '');
		 host = host.replace(/\/$/, '');
     } else {
         host = document.domain;
     }

    var referrer = document.referrer;
    var trafficsource = "";
    domain = document.domain, page_title = document.title;
    if (referrer != "") {
        referrer = referrer.match(/:\/\/(.[^/]+)/)[1];
        if (referrer != document.domain) {
            trafficsource = referrer;
        }
    }
    var formdataId = [];
    B1popup_Jquery(".popup-embedded").each(function () {
        formdataId.push(this.dataset.id);
    });
    var formCustomizeId = formdataId.join(',');

    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/GetPopupDataByUserUniqueId",
        type: "GET",
        async: false,
        data: {
            UniqueId: getClientId(),
            hostname: host.replace(/^www\./, ''),
            ipAddress: GetCookie("BSpopup_IPaddress"),
            displayDevices: (ifMobile == true ? "mobile" : "desktop"),
            countryCode: GetCookie("BSpopup_IPCaddress"),
            referrer: trafficsource,
            popupDomain: getOriginLandingPage(),
            formCustomizeId: formCustomizeId
        },
        dataType: "json",
        success: function (data) {
            Jsondata = data;
            downloadJqueryUi();
			SwalAlert();
            //CssFileAppend();
            CallButtonClickFun()
			intphonenumbercssappend()
			downloadinttelphone()
            setTimeout(function () {
                B1popup_Jquery.each(data.templateListData, function (key, val) {
                    InsertUpdateStaticData(val.templateCustomizeUniqueId);
					if (document.cookie.indexOf("BSpopupDAC_" + val.userId + "_" + val.templateCustomizeUniqueId) == -1) {
                        if (document.cookie.indexOf("BSpopupVT_" + val.userId + "_" + val.templateCustomizeUniqueId) == -1) {
                            sessionStorage.setItem("BSpopupVIW_" + val.userId + "_" + val.templateCustomizeUniqueId, "New");
                        }
                        if (document.cookie.indexOf("BSpopupOld_" + val.userId + "_" + val.templateCustomizeUniqueId) == -1) {
                            SetCookie("BSpopupOld_" + val.userId + "_" + val.templateCustomizeUniqueId, "New", 2000);
                        }
                        else {
                            SetCookie("BSpopupOld_" + val.userId + "_" + val.templateCustomizeUniqueId, "Old", 2000);
                        }

                        if (sessionStorage.getItem("BSpopupDVT_" + val.userId + "_" + val.templateCustomizeUniqueId) == null) {
                            if (document.cookie.indexOf("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId) != -1 && (val.displayPreviewVisitorType == "visit" || val.displayPreviewVisitorType == "visits")) {
                                if (GetCookie("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId) == val.displayPreviewVisitorCount) {
                                    DeleteCookie("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId);
                                }
                            }
                            if (GetCookie("BSpopupOld_" + val.userId + "_" + val.templateCustomizeUniqueId) == "Old") {
                                SetCookie("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId, (GetCookie("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId) == null ? 1 : parseInt(GetCookie("BSpopupVWC_" + val.userId + "_" + val.templateCustomizeUniqueId)) + 1), 2000)
                            }
                        }
                        if (GetCookie("BSpopupDVT_" + val.userId + "_" + val.templateCustomizeUniqueId) != (val.isDisplayFrequency == false ? "day" : val.displayPreviewVisitorType)) {
                            clearCookie(val);
                        }
                        CreateVisitorCookie(val);
                        if (val.isStatic == false) {
                            if (!CheckDisplayfrequency(val)) {
                                if (val.isnone == true) {
                                    if (CheckPagerule(val) && CheckPagetitlerule(val) && CheckCookietargetingrule(val) && IpaddressCheck(val) && CheckDayandHour(val) && CheckFilterType(val)) {
                                        staticHTMLDesign(val);
                                        SetDisplayfrequency(val);
                                    }
                                }
                                else {
                                    setPopupdisplayrule(val, function (response) {
                                        if_display = false;
                                        if (response == true) {
                                            if (CheckPagerule(val) && CheckPagetitlerule(val) && CheckCookietargetingrule(val) && IpaddressCheck(val) && CheckDayandHour(val) && CheckFilterType(val)) {
                                                staticHTMLDesign(val);
                                                SetDisplayfrequency(val);
                                            }
                                        }
                                    });
                                }
                            }
                        }
                        else {
                            staticFormHTMLDesign(val);
                        }
                    }
					else {
                        if (val.isStatic == true) {
                            staticFormHTMLDesign(val);
                        }
                    }

                });
            }, 2000)
            setTimeout(function () {
                GetDatacollectorDetails();
				GetIntphonedetails();
            }, 10000)

        },
        error: function (jqXHR, textStatus, errorThrown) {

        }
    })
	 },1000);
}


function DestoryCollector() {
    triggerevent.forEach(function (e) {
        var t = e.eventType,
            n = e.handler;
        document.removeEventListener(t, n, false)
    })
}
function clearCookie(popupdata) {
    DeleteCookie("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId);
}

function CallButtonClickFun() {
	        B1popup_Jquery('body').on('click', '.socialClickButton', function (e) {

            var browser = get_browser_info();
            var IPdetails = B1popup_Jquery.parseJSON(GetCookie("popup_IPaddressDT"));

            var visitordreferrer = document.referrer;
            var trafficsource = "";
            if (visitordreferrer != "") {
                visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
                if (visitordreferrer != document.domain) {
                    trafficsource = visitordreferrer;
                }

            }
            var templateCustomizeId = B1popup_Jquery(this).attr('id').replace('popupbtn_', '');
            var returnedData = B1popup_Jquery.grep(Jsondata.templateListData, function (element, index) {
                return element.templateCustomizeUniqueId == templateCustomizeId;
            });

            var leadresult_array = [];
            var leaddataval = {};
            var redirectval = {};
            leaddataval.templateCustomizeId = returnedData[0].templateCustomizeId;
            leaddataval.UniqueID = getClientId();
            leaddataval.ipaddress = GetCookie("BSpopup_IPaddress");
            leaddataval.Domain = getOriginLandingPage();
            leaddataval.Device = (ifMobile == true ? "mobile" : "desktop");
            leaddataval.trafficSource = (trafficsource == "" ? "Direct" : trafficsource);
            //leaddataval.countryCode = IPdetails.countryCode;
            //leaddataval.countryName = IPdetails.countryName;
            //leaddataval.region = IPdetails.region;
            //leaddataval.city = IPdetails.city;
            //leaddataval.timeZoneName = IPdetails.timeZoneName;
            //leaddataval.timeZoneOffset = IPdetails.timeZoneOffset;
            //leaddataval.currencyCode = IPdetails.currencyCode;
            leaddataval.browser = browser.name;
            leaddataval.browserVersion = browser.version;
            //leaddataval.language = IPdetails.language;
            leaddataval.operatingSystem = navigator.platform;
            leaddataval.ATID = 1;
            //leaddataval.ContactUnique = GetCookie("CCID" + templateCustomizeUniqueId);
            leaddataval.popupName = returnedData[0].popupName;
            leaddataval.typename = returnedData[0].type;
            B1popup_Jquery.post(Server_link + "/Api/From_update", { request: leaddataval },
                function (data) {
                    if (data != null) {
                        if (returnedData[0].isDisplayToConvertedVisitors == false && typeof popup_landing_page == "undefined") {
                            DeleteCookie("popupDAC_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId);
							SetCookie("popupDAC_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId, returnedData[0].isDisplayToConvertedVisitors, 2000)
                        }
                        var pattern = /^((http|https|ftp):\/\/)/;

                        if (returnedData[0].socialMediaType == "whatsapp") {
                            var url = "https://api.whatsapp.com/send?phone=" + returnedData[0].socialLinkData + "&text=" + returnedData[0].socialAdditionData;
                            window.open(url, '_blank');
                        }
                        else if (returnedData[0].socialMediaType != "facebook") {
                            var url = returnedData[0].socialLinkData;
                            if (!pattern.test(url)) {
                                url = "http://" + url;
                            }
                            window.open(url, '_blank');
                        }
                    }
                })
        });
    B1popup_Jquery('body').on('click', '.signInUpBtn', function (e) {
        var count = 0;
		var totalcount=0; 
    // const form = document.querySelector('.popupforms');
	  var form = e.currentTarget.form; 
	     totalcount = form.length - 1;  
        for (let i = 0; i < form.length - 1; i++)
        {     if (form[i].id != "" && form[i].id!=null){
			var nameValue = document.getElementById(form[i].id).value;
            if (nameValue == "")
            {
                count++;                
            }
		}       
        }
        
		var browser = get_browser_info();
        var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));
        var visitordreferrer = document.referrer;
        var trafficsource = "";
        if (visitordreferrer != "") {
            visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
            if (visitordreferrer != document.domain) {
                trafficsource = visitordreferrer;
            }
        }
        var dynamictextID = 0;
        var requiretext = "";
        e.preventDefault();
        var templateCustomizeId = B1popup_Jquery(this).attr('id').replace('popupbtn_', '');
        var returnedData = B1popup_Jquery.grep(Jsondata.templateListData, function (element, index) {
            return element.templateCustomizeUniqueId == templateCustomizeId;
        });
        var inpObj = document.getElementById("popupform_" + templateCustomizeId);
        //var inpObj = document.querySelectorAll("[id^=popupform_" + templateCustomizeId + "]");
 if (count != totalcount) {
        if (!inpObj.checkValidity()) {
            inpObj.reportValidity();
        }
        else {
            var leadresult_array = [];
            var leadinputresult_array = [];
            var leaddataval = {};
            var redirectval = {};
            var formdata = {};
            leaddataval.templateCustomizeId = returnedData[0].templateCustomizeId;
            leaddataval.UniqueID = getClientId();
            leaddataval.ipaddress = GetCookie("BSpopup_IPaddress");
            leaddataval.Domain = getOriginLandingPage();
            leaddataval.Device = (ifMobile == true ? "mobile" : "desktop");
            leaddataval.trafficSource = (trafficsource == "" ? "Direct" : trafficsource);
            //leaddataval.countryCode = IPdetails.countryCode;
            //leaddataval.countryName = IPdetails.countryName;
            //leaddataval.region = IPdetails.region;
            //leaddataval.city = IPdetails.city;
            //leaddataval.timeZoneName = IPdetails.timeZoneName;
            //leaddataval.timeZoneOffset = IPdetails.timeZoneOffset;
            //leaddataval.currencyCode = IPdetails.currencyCode;
            leaddataval.browser = browser.name;
            leaddataval.browserVersion = browser.version;
            //leaddataval.language = IPdetails.language;
            leaddataval.operatingSystem = navigator.platform;
            leaddataval.ATID = 1;
            leaddataval.ContactUnique = ContactUniqueIdSingle;
            leaddataval.popupName = returnedData[0].popupName;
            leaddataval.typename = returnedData[0].type;
            B1popup_Jquery("#popupform_" + templateCustomizeId).find(':input.getPopupInputSelect').each(function () {
                var controlid = B1popup_Jquery(this).attr('id').split('-')[1];
                var Inputresult = B1popup_Jquery.grep(returnedData[0].inputFieldData, function (e) {
                    return e.dynamicFieldId == controlid;
                });
                if(Inputresult[0].masterInputLabel == "Phone"||Inputresult[0].customAttribute == "PhoneNumber"){
					var validPhoneNumber = '+(' + countrycodevalue + ')' + B1popup_Jquery(this).val();
				leadresult_array.push({
                    inputFieldId: Inputresult[0].inputFieldId,
                    inputData: validPhoneNumber,
                    inputLabel: (Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label),
                    customAttribute: Inputresult[0].customAttribute
                });
				}else{
					leadresult_array.push({
                    inputFieldId: Inputresult[0].inputFieldId,
                    inputData: B1popup_Jquery(this).val(),
                    inputLabel: (Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label),
                    customAttribute: Inputresult[0].customAttribute
                 });
				}
                var InputLabel = Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label;

                if (Inputresult[0].masterInputLabel) {
                    requiretext = Inputresult[0].masterInputLabel;
                }
                else {
                    dynamictextID = dynamictextID + 1;
                    requiretext = "text_" + dynamictextID;
                }
                redirectval[requiretext.replace(" ", "_")] = B1popup_Jquery(this).val();

                if (Inputresult[0].customAttribute != "" && Inputresult[0].customAttribute != "null") {

                    formdata[Inputresult[0].customAttribute] = B1popup_Jquery(this).val();
                }
                else {

                    formdata[InputLabel] = B1popup_Jquery(this).val();
                }
            });
            B1popup_Jquery("#popupform_" + templateCustomizeId).find(':input.getPopupInputSelect').each(function () {
                var welcomeMsg = B1popup_Jquery(this).attr('placeholder');
                welcomeMsg == "Name" ? SetCookie("popupName", encodeURI(B1popup_Jquery(this).val()), 1000) : welcomeMsg == "Email" ? SetCookie("popupEmail", encodeURI(B1popup_Jquery(this).val()), 1000) : "";
            }); if (GetCookie("popupName") != null && GetCookie("popupEmail") != null) { DeleteCookie("popupEmail"); }
            else if (GetCookie("popupEmail") != null) {
                DeleteCookie("popupName");
            }

            B1popup_Jquery("#popupform_" + templateCustomizeId).find(".getPopupCheckbox").each(function () {
                var Checkboxid = B1popup_Jquery(this).attr('id');
                var chkcontrolid = B1popup_Jquery(this).attr('id').split('-')[1];
                var Inputresult = B1popup_Jquery.grep(returnedData[0].inputFieldData, function (e) { return e.dynamicFieldId == chkcontrolid; });
                var checkboxval = [];
                B1popup_Jquery('#' + Checkboxid + ' input:checked').each(function () {
                    checkboxval.push(B1popup_Jquery(this).attr('value'));
                });
                if (checkboxval.length > 0) {
                    leadresult_array.push({
                        controlId: Inputresult[0].controlId,
                        inputFieldId: Inputresult[0].inputFieldId,
                        inputData: checkboxval.join(),
                        inputLabel: (Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label),
                        customAttribute: Inputresult[0].customAttribute
                    });
                }
                redirectval[Inputresult[0].masterInputLabel] = checkboxval.join();

                if (Inputresult[0].customAttribute != "" && Inputresult[0].customAttribute != "null" && Inputresult[0].customAttribute != "undefined") {

                    formdata[Inputresult[0].customAttribute] = checkboxval.join();
                }
                else {

                    formdata[Inputresult[0].masterInputLabel.replace(" ", "_")] = checkboxval.join();
                }
            });

            B1popup_Jquery("#popupform_" + templateCustomizeId).find(".getPopupRadio").each(function () {
                var rdboxid = B1popup_Jquery(this).attr('id');
                var rdcontrolid = B1popup_Jquery(this).attr('id').split('-')[1];
                var Inputresult = B1popup_Jquery.grep(returnedData[0].inputFieldData, function (e) { return e.dynamicFieldId == rdcontrolid; });
                B1popup_Jquery('#' + rdboxid + ' input:checked').each(function () {
                    leadresult_array.push({
                        controlId: Inputresult[0].controlId,
                        inputFieldId: Inputresult[0].inputFieldId,
                        inputData: B1popup_Jquery(this).attr('value'),
                        inputLabel: (Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label),
                        customAttribute: Inputresult[0].customAttribute
                    });
                    redirectval[Inputresult[0].masterInputLabel] = B1popup_Jquery(this).attr('value');


                    if (Inputresult[0].customAttribute != "" && Inputresult[0].customAttribute != "null" && Inputresult[0].customAttribute != "undefined") {

                        formdata[Inputresult[0].customAttribute] = B1popup_Jquery(this).attr('value');
                    }
                    else {

                        formdata[Inputresult[0].masterInputLabel.replace(" ", "_")] = B1popup_Jquery(this).attr('value');
                    }
                })

            });
            B1popup_Jquery("#popupform_" + templateCustomizeId).find('.getPopupConsentCheckbox').each(function () {
                var Checkboxid = B1popup_Jquery(this).attr('id');
                var chkcontrolid = B1popup_Jquery(this).attr('id').split('-')[1];
                var Inputresult = B1popup_Jquery.grep(returnedData[0].inputFieldData, function (e) { return e.dynamicFieldId == chkcontrolid; });

                leadresult_array.push({

                    inputData: B1popup_Jquery('#' + Checkboxid + ' input:checked').is(":checked"),
                    inputLabel: (Inputresult[0].masterInputLabel != null ? Inputresult[0].masterInputLabel : Inputresult[0].label),
                    customAttribute: Inputresult[0].customAttribute
                });
                redirectval[Inputresult[0].masterInputLabel.replace(" ", "_")] = B1popup_Jquery('#' + Checkboxid + ' input:checked').is(":checked");
                formdata[Inputresult[0].customAttribute] = B1popup_Jquery('#' + Checkboxid + ' input:checked').is(":checked");

            });
            leaddataval.LeadInputData = leadresult_array;
            leaddataval.formdata = formdata;
            B1popup_Jquery.post(Server_link + "/Api/From_update", { request: leaddataval },
                function (data) {
                    if (data.id > 0) {
                        if (document.cookie.indexOf("BSpopupUp_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId + "_" + browser.name) == -1) {
                            DeleteCookie("BSpopupUp_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId + "_" + browser.name);
							SetCookie("BSpopupUp_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId + "_" + browser.name, "ContactCollect", 2000);
                        }

                        if (returnedData[0].isDisplayToConvertedVisitors == false && typeof popup_landing_page == "undefined") {
                            DeleteCookie("BSpopupDAC_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId);
							SetCookie("BSpopupDAC_" + returnedData[0].userId + "_" + returnedData[0].templateCustomizeUniqueId, returnedData[0].isDisplayToConvertedVisitors, 2000)
                        }
                        var pattern = /^((http|https|ftp):\/\/)/;
                        if (returnedData[0].afterSubmissiontype == "thankyouscreen" && returnedData[0].thankyouRedirectURL && returnedData[0].isThankyouRedirectURLEnabled) {
                            var url = returnedData[0].thankyouRedirectURL;
                            if (!pattern.test(url)) {
                                url = "http://" + url;
                            }
                            window.location.href = url;
                        }
                        else if (returnedData[0].afterSubmissiontype == "thankyouscreen") {
                            B1popup_Jquery("#popupform_" + templateCustomizeId).find("div.mainScreenLayout").hide();
                            B1popup_Jquery("#popupform_" + templateCustomizeId).find("div.thankyouScreenLayout").removeClass('hide');
                            if (returnedData[0].isThankyouAfterinSecondsEnabled == true) {
                                if (data.typename != "form") {
                                    setTimeout(function () {
                                        B1popup_Jquery('#popup_' + templateCustomizeId).modal('hide');
                                    }, returnedData[0].thankyouAfterinSeconds * 1000);
                                }
                                else {
                                    setTimeout(function () {
                                        B1popup_Jquery('#form_' + templateCustomizeId).hide();
                                    }, returnedData[0].thankyouAfterinSeconds * 1000);
                                }
                            }
                        }
                        else if (returnedData[0].afterSubmissiontype == "close") {
                            if (data.typename != "form") {
                                B1popup_Jquery('#popup_' + templateCustomizeId).modal('hide');
                            }
                            else {
                                B1popup_Jquery('#form_' + templateCustomizeId).hide();
                            }

                        }
                        else if (returnedData[0].afterSubmissiontype == "redirect") {
                            if (data.typename != "form") {
                                B1popup_Jquery('#popup_' + templateCustomizeId).modal('hide')
                            }
                            else {
                                B1popup_Jquery('#form_' + templateCustomizeId).hide();
                            }
                            var url = returnedData[0].afterSubmissionRedirectUrl;
                            if (!pattern.test(url)) {
                                url = "http://" + url;
                            }
                            if (returnedData[0].isAfterSubmissionOpenNewTab && returnedData[0].isAfterSubmissionPassParameterInUrl) {
                                url = url + "?" + B1popup_Jquery.param(redirectval);
                                window.open(url, '_blank');
                            }
                            else if (!returnedData[0].isAfterSubmissionOpenNewTab && returnedData[0].isAfterSubmissionPassParameterInUrl) {
                                url = url + "?" + B1popup_Jquery.param(redirectval);
                                window.location.href = url;
                            }
                            else if (returnedData[0].isAfterSubmissionOpenNewTab) {

                                window.open(url, '_blank');
                            }
                            else {
                                window.location.href = url;
                            }
                        }
                    }
                    else {
                        if (data.typename != "form") {
                            B1popup_Jquery('#popup_' + templateCustomizeId).modal('hide');
                        }
                        else {
                            B1popup_Jquery('#form_' + templateCustomizeId).hide();
                        }
                        B1popup_Jquery.ajax({
                            url: Server_link + "/PopupFE/SendContactExceedEmail",
                            type: "GET",
                            async: false,
                            data: {
                                UniqueId: getClientId(),
                            },
                            dataType: "json",
                            success: function (data) {
                            }
                        });
                    }
                })
        }
    }
        else {
            swal({
                position:"top",
                heightAuto: false,
                backdrop: "rgba(0,0,0,0.4)",
                text: "Please enter the valid information"
            })
          
        }
	});
}


setPopupdisplayrule = function (popupdata, callbackFunction) {
     var Ispopupdisplay = true;
     /* On page leave, On Scroll, On Time displaybutton*/
         (popupdata.isDisplayOnExitIntent == true ? B1popup_Jquery(document).mouseleave(function (e) {
             var top = e.clientY,
                 right = document.body.clientWidth - e.pageX,
                 bottom = B1popup_Jquery(window).height() - e.clientY;
             e.pageX;
             if (0 < right && 0 < bottom && top <= 0 && !B1popup_Jquery("#popupform_" + popupdata.templateCustomizeUniqueId).find("div.mainScreenLayout").is(':visible')) {
                 callbackFunction(Ispopupdisplay)
             }
         }) : popupdata.isDisplayAfter == true && !B1popup_Jquery("#popupform_" + popupdata.templateCustomizeUniqueId).find("div.mainScreenLayout").is(':visible') ? setTimeout(function () { callbackFunction(Ispopupdisplay) }, popupdata.displayAfter * 1000)
             : popupdata.isDisplayAfterScrolling == true && !B1popup_Jquery("#popupform_" + popupdata.templateCustomizeUniqueId).find("div.mainScreenLayout").is(':visible') ?
                 B1popup_Jquery(window).scroll(function () {
                     var scrolTo = (B1popup_Jquery(document).height() - B1popup_Jquery(window).height()) * popupdata.displayAfterScrolling * .01;
                     if (B1popup_Jquery(window).scrollTop() >= scrolTo && !B1popup_Jquery("#popupform_" + popupdata.templateCustomizeUniqueId).find("div.mainScreenLayout").is(':visible')) {
						 if(popupdata.displayPreviewVisitorType == 'day' && document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId )== -1){
							callbackFunction(Ispopupdisplay) 
						 }
						 if(popupdata.displayPreviewVisitorType != 'day' ){
							 callbackFunction(Ispopupdisplay) 
						 }
                         
                     }
                 }) : popupdata.isDisplayButton == true ? B1popup_Jquery(document).ready(function () {
                     //AddBtnElements(popupdata);
                     if (!B1popup_Jquery("#popupform_" + popupdata.templateCustomizeUniqueId).find("div.mainScreenLayout").is(':hidden')) { callbackFunction(Ispopupdisplay) }
                 }) : callbackFunction(false))
     /*end*/
     }



function staticHTMLDesign(Popupdata) {
    var template = Popupdata.templateHtml;
    var categoryName = '', screenLocation = '';

    /*Add Category with location align*/
    if (Popupdata.categoryName != null && Popupdata.categoryName != '') {
        categoryName = Popupdata.categoryName;
        categoryName = categoryName.replace(' ', '', categoryName).toLowerCase();
    }
    if (Popupdata.screenLocation != null && Popupdata.screenLocation != '') {
        screenLocation = '-' + Popupdata.screenLocation;
    }
    modalAddClasses = categoryName + screenLocation;

    var htmlData = '';

    if (Popupdata.type != "form") {
        /*To check the bg layer and content gate*/
        if (Popupdata.isBgLayer == false) {
            htmlData = '<div id="popup_' + Popupdata.templateCustomizeUniqueId + '" class="custommodal fade previewPopup withoutBackdrop ' + modalAddClasses + '"data-backdrop="false" data-show="false"  data-keyboard="false">';
        }
        else if (Popupdata.isBgLayer == true && Popupdata.isCloseOnScreen == false) {
            htmlData = '<div id="popup_' + Popupdata.templateCustomizeUniqueId + '" class="custommodal fade previewPopup ' + modalAddClasses + '" data-backdrop="static" data-keyboard="false">';
        }
        else {
            htmlData = '<div id="popup_' + Popupdata.templateCustomizeUniqueId + '" class="custommodal previewPopup ' + modalAddClasses + '" data-keyboard="false">';
        }
        if (Popupdata.categoryName.toLowerCase() == 'lightbox' || Popupdata.categoryName.toLowerCase() == 'big sidebar') {
            htmlData += '<div class="modal-dialog" style="max-width:' + Popupdata.width + 'px; width:' + Popupdata.width + 'px">';

        } else {
            htmlData += '<div class="modal-dialog">';
        }
        htmlData += '<div class="modal-content">';
        htmlData += '<form id="popupform_' + Popupdata.templateCustomizeUniqueId + '" onsubmit="return false;">';
        htmlData += template.replace(/<%=sitepath%>/g, Server_link);
        htmlData += '</form>';
        htmlData += '</div>';
        htmlData += '</div>';
        htmlData += '</div>';
        B1popup_Jquery('body').append(htmlData);

    }
    else {
        htmlData = '<div id="form_' + Popupdata.templateCustomizeUniqueId + '" class="' + modalAddClasses + ' cs' + Popupdata.categoryName.replace(" ", "") + '" data-backdrop="false"  data-id="' + Popupdata.categoryName + '">';
        htmlData += '<form id="popupform_' + Popupdata.templateCustomizeUniqueId + '" onsubmit="return false;" class="popupforms">';
        htmlData += template.replace(/<%=sitepath%>/g, Server_link);
        htmlData += '</form>';
        htmlData += '</div>';
        B1popup_Jquery('.popup-embedded[data-id=' + Popupdata.templateCustomizeUniqueId + ']').append(htmlData);

    }
    if (B1popup_Jquery('.popupCredit').length == 0) {
        B1popup_Jquery('.bgImgColorSet').append('<div class="popupCredit"><img src="https://kaydu.net/images/creditWhite.png"></div>');
    } else {
        B1popup_Jquery('.popupCredit').html('').append('<img src="https://kaydu.net/images/creditWhite.png">');
    }
    if (Popupdata.isWelcomeMsg == true) {
        B1popup_Jquery.each(Popupdata.inputFieldData, function (key, val) {
            var firstname = '';
            var welcome = "Welcome Back";
            if (GetCookie("popupName") != null) {
                firstname = GetCookie("popupName") + '!';
                B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html(B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html().replace('<!--%WelcomeMsg%-->', '<h2 class="welcomeMsg dragResizable" style="margin: 0;font-size: 22px;font-weight: 500;color: #ffbc00;">' + welcome + '&nbsp' + firstname + '</h2>'));
            }
            else if (GetCookie("popupEmail") != null) {
                firstname = GetCookie("popupEmail");
                firstname = (firstname.substring(0, firstname.lastIndexOf("@"))) + '!';
                B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html(B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html().replace('<!--%WelcomeMsg%-->', '<h2 class="welcomeMsg dragResizable" style="margin: 0;font-size: 22px;font-weight: 500;color: #ffbc00;">' + welcome + '&nbsp' + firstname + '</h2>'));
            }

        });
    }

    if (Popupdata.closeOption == "x" || Popupdata.closeOption == "skip") {
        B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.closeModalBtnContain').addClass("hide");
        setTimeout(function () {
            B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.closeModalBtnContain').removeClass("hide");
        }, Popupdata.displayCloseOptionafter * 1000);
    }
	//B1popup_Jquery('.getPopupInputSelect').attr('name','firstname');

	//console.log(B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.signInUpBtn').length);
	//console.log(B1popup_Jquery("[id^=popupform_" + Popupdata.templateCustomizeUniqueId + "]").find('.signInUpBtn').length);

    B1popup_Jquery("[id^=popupform_" + Popupdata.templateCustomizeUniqueId + "]").find('.signInUpBtn').attr('type', 'submit');
    B1popup_Jquery("[id^=popupform_" + Popupdata.templateCustomizeUniqueId + "]").find('.signInUpBtn').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);
    B1popup_Jquery("[id^=popupform_" + Popupdata.templateCustomizeUniqueId + "]").find('.socialClickButton').attr('type', 'button');
    B1popup_Jquery("[id^=popupform_" + Popupdata.templateCustomizeUniqueId + "]").find('.socialClickButton').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);
	
	// B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.signInUpBtn').attr('type', 'submit');
    // B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.signInUpBtn').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);
    // B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.socialClickButton').attr('type', 'button');
    // B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.socialClickButton').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);

    UpdateViewedCount(Popupdata);
	B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("show");
    /*AutoClose Data*/
    if (Popupdata.isCloseauto && typeof popup_landing_page == "undefined") {
        if (Popupdata.type != "form") {
            setTimeout(function () {
                B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal('hide');
            }, Popupdata.closeAutoAfter * 1000);
        }
        else {
            setTimeout(function () {
                B1popup_Jquery('#form_' + Popupdata.templateCustomizeUniqueId).hide();
            }, Popupdata.closeAutoAfter * 1000);
        }
    }
    /*end*/
	
	if (Popupdata.isDisplayButton == true) {
        BtnClick();
        B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("hide");
		//B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).find('.custommodal').css({ 'display': 'none !important' });
        //setTimeout(function () { B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).css({ 'display': 'none !important' }) },100);
    }
    else {
	 B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("show");
    }

    /*entryEffect Data*/
    var selectedEffect = "", options = "";

    if (Popupdata.entryEffectJqueryName!="no animation") {
        switch (Popupdata.entryEffectJqueryName) {
            case "bounce":
                options = { times: 3 }, 300;
                selectedEffect = "bounce";
                break;
            case "up":
                options = { direction: 'up' };
                selectedEffect = "slide";
                break;
            case "down":
                options = { direction: 'down' };
                selectedEffect = "slide";
                break;
            case "left":
                options = { direction: 'left' };
                selectedEffect = "slide";
                break;
            case "right":
                options = { direction: 'right' };
                selectedEffect = "slide";
                break;
            default:
                selectedEffect = Popupdata.entryEffectJqueryName;
                break;
        }

        if (typeof window.jQuery.ui != "undefined") {
            if (Popupdata.type != "form") {
                B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).effect(selectedEffect, options, 700);
                B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).delay(300).show(selectedEffect, options, 500);
                return false;
            }
            else {
                B1popup_Jquery('#form_' + Popupdata.templateCustomizeUniqueId).effect(selectedEffect, options, 700);
                B1popup_Jquery('#form_' + Popupdata.templateCustomizeUniqueId).delay(300).show(selectedEffect, options, 500);
                return false;

            }
        }
    }
    /*end*/
}

function CheckPagerule(popupdata) {
    var Pageruleresult_array = [];
    (popupdata.isPageTargeting == true ?
        B1popup_Jquery.each(popupdata.pageTargeting, function (key, val) {
            if_ruledisplay = PagetargetingandtitleCheck(val.pageTargetingValue, val.pageTargetingOperator, window.location.href);
            Pageruleresult_array.push(if_ruledisplay);
        }) : if_ruledisplay = true);

    return (Pageruleresult_array.length == 0 ? if_ruledisplay : B1popup_Jquery.inArray(true, Pageruleresult_array) != -1 ? true : false);
}
function CheckPagetitlerule(popupdata) {
    var PageTitleruleresult_array = [];
    (popupdata.isTitleTagTargeting == true ?
        B1popup_Jquery.each(popupdata.titleTagTargeting, function (key, val) {
            if_ruledisplay = PagetargetingandtitleCheck(val.tagTitle, val.tagTitleOperator, document.title);
            PageTitleruleresult_array.push(if_ruledisplay);
        }) : if_ruledisplay = true);
    return (PageTitleruleresult_array.length == 0 ? if_ruledisplay : B1popup_Jquery.inArray(true, PageTitleruleresult_array) != -1 ? true : false);
}

function CheckDisplayfrequency(popupdata) {
    if (popupdata.displayToVisitorType == "everyOne")
        if_cookiedisplay = EveryOneCookieCheck(popupdata);
    else if (popupdata.displayToVisitorType == "new")
        if_cookiedisplay = NewOneCookieCheck(popupdata);
    else if (popupdata.displayToVisitorType == "return")
        if_cookiedisplay = RetrunCookieCheck(popupdata)

    if (popupdata.displayPreviewVisitorType == "visit" || popupdata.displayPreviewVisitorType == "visits") {

        sessionStorage.setItem("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, "EveryVisit");
    }

    return if_cookiedisplay;
}

function CheckCollectorTimingfrequency(CollectorData) {
    if (CollectorData.timing.ttype == "Each time the condition is met") {
        if_Collcookiedisplay = false
    }
    else if (document.cookie.indexOf("BSCollectorDVT_" + CollectorData.id + "_" + CollectorData.aid) != -1) {
        if_Collcookiedisplay = true
    }
    else {
        if_Collcookiedisplay = false
    }
    return if_Collcookiedisplay;
}



function NewOneCookieCheck(popupdata) {
    if (popupdata.displayPreviewVisitorType == "allTime" && sessionStorage.getItem("BSpopupVIW_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != null) {
        if_cookiedisplay = false
    }
    else if (document.cookie.indexOf("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) {
        if_cookiedisplay = false;
    }
    else {
        if_cookiedisplay = true;
    }
    return if_cookiedisplay;
}


function RetrunCookieCheck(popupdata) {
    if (sessionStorage.getItem("BSpopupVIW_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == null) {
        if (popupdata.displayPreviewVisitorType == "allTime") {
            if_cookiedisplay = false
        }
        else if (popupdata.displayPreviewVisitorType == "visit") {
            (sessionStorage.getItem("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != null ? if_cookiedisplay = true : if_cookiedisplay = false);
        }
        else if (popupdata.displayPreviewVisitorType == "visits") {
            (sessionStorage.getItem("popupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == null && (GetCookie("popupVWC_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == popupdata.displayPreviewVisitorCount) ? if_cookiedisplay = false : if_cookiedisplay = true);

        }
        else if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != -1) {

            if_cookiedisplay = true

        }
        else {
            if_cookiedisplay = false
        }
    }
    else {
        if (document.cookie.indexOf("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) {
            SetCookie("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, popupdata.displayToVisitorType, 2000);
        }
        if_cookiedisplay = true
    }
    return if_cookiedisplay;
}


function EveryOneCookieCheck(popupdata) {

    if (popupdata.displayPreviewVisitorType == "allTime") {
        if_cookiedisplay = false
    }
    else if (popupdata.displayPreviewVisitorType == "visit") {
        (sessionStorage.getItem("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != null ? if_cookiedisplay = true : if_cookiedisplay = false);
    }
    else if (popupdata.displayPreviewVisitorType == "visits") {
        (sessionStorage.getItem("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == null && (GetCookie("BSpopupOld_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == "New" || GetCookie("BSpopupVWC_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == popupdata.displayPreviewVisitorCount) ? if_cookiedisplay = false : if_cookiedisplay = true);
    }
    else if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != -1) {

        if_cookiedisplay = true

    }
    else {
        if_cookiedisplay = false
    }
    return if_cookiedisplay;
}

function LandingCreateVisitorCookie(popupdata) {

    var browser = get_browser_info();
    var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));

    if (document.cookie.indexOf("BSpopupLadvisitor_" + popupdata.companyUniqueId + "_" + popupdata.templateCustomizeUniqueId) == -1) {
        TimeSetCookie("BSpopupLadvisitor_" + popupdata.companyUniqueId + "_" + popupdata.templateCustomizeUniqueId, true, 30)
        var visitordreferrer = document.referrer;
        var trafficsource = "";
        if (visitordreferrer != "") {
            visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
            if (visitordreferrer != document.domain) {
                trafficsource = visitordreferrer;
            }

        }
        B1popup_Jquery.ajax({
            url: Server_link + "/PopupFE/templateVisitorDataCreate/",
            type: "POST",
            async: true,
            data: {
                UniqueId: getClientId(),
                companyId: popupdata.companyId,
                templateCustomizeId: popupdata.templateCustomizeId,
                type: "visit",
                ipaddress: GetCookie("popup_IPaddress"),
                device: (ifMobile == true ? "mobile" : "desktop"),
                //countryCode: IPdetails.countryCode,
                //countryName: IPdetails.countryName,
                //region: IPdetails.region,
                //city: IPdetails.city,
                //timeZoneName: IPdetails.timeZoneName,
                //timeZoneOffset: IPdetails.timeZoneOffset,
                //currencyCode: IPdetails.currencyCode,
				countryCode: "",
				countryName: "",
				region: "",
                city: "",
                timeZoneName: "",
                timeZoneOffset: "",
                currencyCode: "",
                domain: getOriginLandingPage(),
                trafficSource: (trafficsource == "" ? "Direct" : trafficsource),
                browser: browser.name,
                browserVersion: browser.version,
                //language: IPdetails.language,
				language: "",
                operatingSystem: navigator.platform
            },
            dataType: "json",
            success: function (data) {
            }
        });
    }
}
var URL = (window.location.href);
function InsertUpdateStaticData(templateUniqueId) {
	
    var browser = get_browser_info();
	console.log(GetCookie("BSpopup_IPaddressDT1"));
	var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));
	
    var visitordreferrer = document.referrer;
    var trafficsource = "";
    if (visitordreferrer != "") {
        visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
        if (visitordreferrer != document.domain) {
            trafficsource = visitordreferrer;
        }

    }
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/VisitorDataCreate/",
        type: "POST",
        async: false,
        data: {
            UniqueId: getClientId(),
            ipAddress: GetCookie("BSpopup_IPaddress"),
            device: (ifMobile == true ? "mobile" : "desktop"),
            //countryCode: IPdetails.countryCode,
            //countryName: IPdetails.countryName,
            //region: IPdetails.region,
            //city: IPdetails.city,
            //timeZoneName: IPdetails.timeZoneName,
            //timeZoneOffset: IPdetails.timeZoneOffset,
            //currencyCode: IPdetails.currencyCode,
			countryCode: "",
			countryName: "",
			region: "",
            city: "",
            timeZoneName: "",
            timeZoneOffset: "",
            currencyCode: "",
            domain: getOriginLandingPage(),
            trafficSource: (trafficsource == "" ? "Direct" : trafficsource),
            browser: browser.name,
            browserVersion: browser.version,
            //language: IPdetails.language,
			language: "",
            operatingSystem: navigator.platform,
            Alrpagevisited: (document.cookie.indexOf("CCVID" + templateUniqueId) == -1 ? "NO" : "YES"),
            ContactUnique: ""
        },
        dataType: "json",
        success: function (data) {
			ContactUniqueIdSingle=data;
			SetCookie("CCID",data);
			if (URL.includes("landingpage")) {
                UpdateLandingViewedCount();
            }
            if (document.cookie.indexOf("CCVID" + templateUniqueId) == -1) {
                SetCookie("CCVID" + templateUniqueId, "viewed", 3000);
            }
			DeleteCookie("CCID" + templateUniqueId);
            SetCookie("CCID" + templateUniqueId, data, 3000);
        }
    });
}


function CreateVisitorCookie(popupdata) {

    var browser = get_browser_info();
    var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));

    if (document.cookie.indexOf("BSpopupvisitor_" + getClientId() + "_" + popupdata.templateCustomizeUniqueId) == -1) {
        TimeSetCookie("BSpopupvisitor_" + getClientId() + "_" + popupdata.templateCustomizeUniqueId, true, 30)
        var visitordreferrer = document.referrer;
        var trafficsource = "";
        if (visitordreferrer != "") {
            visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
            if (visitordreferrer != document.domain) {
                trafficsource = visitordreferrer;
            }

        }
        B1popup_Jquery.ajax({
            url: Server_link + "/PopupFE/templateVisitorDataCreate/",
            type: "POST",
            async: true,
            data: {
                UniqueId: getClientId(),
                templateCustomizeId: popupdata.templateCustomizeId,
                type: "visit",
                ipaddress: GetCookie("BSpopup_IPaddress"),
                device: (ifMobile == true ? "mobile" : "desktop"),
                //countryCode: IPdetails.countryCode,
                //countryName: IPdetails.countryName,
                //region: IPdetails.region,
                //city: IPdetails.city,
                //timeZoneName: IPdetails.timezoneName,
                //timeZoneOffset: IPdetails.timezoneOffset,
                //currencyCode: IPdetails.currencyCode,
				countryCode: "",
				countryName: "",
				region: "",
				city: "",
				timeZoneName: "",
				timeZoneOffset: "",
				currencyCode: "",
                domain: getOriginLandingPage(),
                trafficSource: (trafficsource == "" ? "Direct" : trafficsource),
                browser: browser.name,
                browserVersion: browser.version,
                //language: IPdetails.language,
				language: "",
                operatingSystem: navigator.platform
            },
            dataType: "json",
            success: function (data) {
            }
        });
    }
}

function UpdateViewedCount(popupdata) {
    var browser = get_browser_info();
    var visitordreferrer = document.referrer;
    var trafficsource = "";
    if (visitordreferrer != "") {
        visitordreferrer = visitordreferrer.match(/:\/\/(.[^/]+)/)[1];
        if (visitordreferrer != document.domain) {
            trafficsource = visitordreferrer;
        }

    }
    var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/templateVisitorDataCreate/",
        type: "POST",
        async: true,
        data: {
            UniqueId: getClientId(),
            templateCustomizeId: popupdata.templateCustomizeId,
            type: "view",
            ipaddress: GetCookie("BSpopup_IPaddress"),
            device: (ifMobile == true ? "mobile" : "desktop"),
            //countryCode: IPdetails.countryCode,
            //countryName: IPdetails.countryName,
            //region: IPdetails.region,
            //city: IPdetails.city,
            //timeZoneName: IPdetails.timezoneName,
            //timeZoneOffset: IPdetails.timezoneOffset,
            //currencyCode: IPdetails.currencyCode,
			countryCode: "",
			countryName: "",
			region: "",
			city: "",
			timeZoneName: "",
			timeZoneOffset: "",
			currencyCode: "",
            domain: getOriginLandingPage(),
            trafficSource: (trafficsource == "" ? "Direct" : trafficsource),
            browser: browser.name,
            browserVersion: browser.version,
			language: "",
            //language: IPdetails.language,
            operatingSystem: navigator.platform

        },
        dataType: "json",
        success: function (data) {
        }
    });
}

function CheckVisitCount(popupdata) {
    (popupdata.isViewCountCapacity == true ? CheckViewCount(popupdata) : if_ruledisplay = true)
    return if_ruledisplay;
}
function CheckViewCount(popupdata) {
    if (popupdata.displayPreviewVisitorCount > popupdata.maxViewCount) {
        return if_ruledisplay = false;
    }
}
function CheckCookietargetingrule(popupdata) {
    var cookiecheck = false;
    var Cookieresult_array = [];
    var Cookiearray = getAllCookies();
    (popupdata.isCookieTargeting == true ?
        B1popup_Jquery.each(popupdata.cookieTargeting, function (key, val) {
            B1popup_Jquery.each(Cookiearray, function (index) {
                var cookienamecheck = CookietargetingCheck(val.cookieName, val.cookieNameOperator, this.key);
                var cookievaluecheck = CookietargetingCheck(val.cookieValue, val.cookieValueOperator, this.value);
                Cookieresult_array.push({
                    Rule: cookienamecheck && cookievaluecheck,
                    display: val.cookieTargetingType
                });
            });
        }) : cookiecheck = true);

    if (Cookieresult_array.some(x => x.display === "show") && Cookieresult_array.some(x => x.Rule === true)) {

        cookiecheck = true;
    }
    else if (Cookieresult_array.some(x => x.display === "hide") && Cookieresult_array.some(x => x.Rule === true)) {
        cookiecheck = false;
    }
    else {

        (Cookieresult_array.some(x => x.display === "show") ? cookiecheck = false : Cookieresult_array.some(x => x.display === "hide") ? cookiecheck = true : cookiecheck = true);
    }


    return cookiecheck;
}

function IpaddressCheck(popupdata) {
    var IPaddressresult_array = [];
    (popupdata.isIpBlocking == true ?
        B1popup_Jquery.each(popupdata.ipBlocking, function (key, val) {
            if_ruledisplay = CheckIPAddress(val.fromRange, val.toRange);
            IPaddressresult_array.push(if_ruledisplay);
        }) : if_ruledisplay = true);
    return (IPaddressresult_array.length == 0 ? if_ruledisplay : B1popup_Jquery.inArray(true, IPaddressresult_array) != -1 ? false : true);
}



function CheckIPAddress(fromRange, toRange) {
    var FR = IPtoNum(fromRange);
    var TR = IPtoNum(toRange);
    var IP = IPtoNum(GetCookie("BSpopup_IPaddress"));
    if (FR <= IP && TR >= IP) {
        return true;
    }
    else {
        return false;
    }
}
function IPtoNum(ip) {
    return Number(
        ip.split(".")
            .map(d => ("000" + d).substr(-3))
            .join("")
    );
}

function CookietargetingCheck(data, condition, CookieCheck) {
    switch (condition) {
        case "contains":
            if_ruledisplay = -1 < CookieCheck.indexOf(data);
            break;
        case "notcontains":
            if_ruledisplay = true > CookieCheck.indexOf(data);
            break;
        case "equals":
            if_ruledisplay = data == CookieCheck;
            break;
        case "notequals":
            if_ruledisplay = data != CookieCheck;
            break;
        case "startswith":
            if_ruledisplay = CookieCheck.startsWith(data);
            break;
        case "endswith":
            if_ruledisplay = CookieCheck.endsWith(data);
            break;
        default:
            return !0
    }
    return if_ruledisplay
}



function getAllCookies() {

    cookies = document.cookie.split(";"), array = [];
    for (var i = 0; i < cookies.length; i++) pair = cookies[i].split("="), $key = null == pair[0] ? "" : pair[0].trim(), $value = null == pair[1] ? "" : pair[1].trim(), "" != $key && array.push({
        key: $key,
        value: $value
    });
    return array
}



function PagetargetingandtitleCheck(data, condition, subpagename) {
    var pagetitletext = subpagename.toLowerCase();

    switch (condition) {
        case "contains":
            if_ruledisplay = -1 < pagetitletext.indexOf(data.toLowerCase());
            break;
        case "notcontains":
            if_ruledisplay = true > pagetitletext.indexOf(data.toLowerCase());
            break;
        case "equals":
            if_ruledisplay = data.toLowerCase() == pagetitletext;
            break;
        case "notequals":
            if_ruledisplay = data.toLowerCase() != pagetitletext;
            break;
        case "startswith":
            if_ruledisplay = pagetitletext.startsWith(data.toLowerCase());
            break;
        case "endswith":
            if_ruledisplay = pagetitletext.endsWith(data.toLowerCase());
            break;
        default:
            return !0
    }
    return if_ruledisplay
}

function SetDisplayfrequency(popupdata) {
    if (popupdata.isDisplayFrequency == true) {
        if (document.cookie.indexOf("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != -1 && (document.cookie.indexOf("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) != popupdata.displayToVisitorType)) {

            DeleteCookie("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId);
            SetCookie("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, popupdata.displayToVisitorType, 2000);
        }
        else {
            SetCookie("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, popupdata.displayToVisitorType, 2000);
        }

        if (popupdata.displayPreviewVisitorType == "day" || popupdata.displayPreviewVisitorType == "days") {
            if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) {
                SetCookie("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, popupdata.displayPreviewVisitorType, (popupdata.displayPreviewVisitorType == "day" ? 1 : popupdata.displayPreviewVisitorCount));
            }

        }
        else if (popupdata.displayPreviewVisitorType == "session") {

            if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) {

                TimeSetCookie("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, popupdata.displayPreviewVisitorType, 1);
            }
        }
		else if (popupdata.displayPreviewVisitorType == "visit" || popupdata.displayPreviewVisitorType == "visits") {
            if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) {
                sessionStorage.setItem("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, "EveryVisit1");
            }
        }
    }
    else {
        if (document.cookie.indexOf("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) { SetCookie("BSpopupVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, "everyOne", 2000) }
        if (document.cookie.indexOf("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId) == -1) { SetCookie("BSpopupDVT_" + popupdata.userId + "_" + popupdata.templateCustomizeUniqueId, "day", 1) }
    }
}


function SetCollectorDatafrequency(CollectorData) {
    if (document.cookie.indexOf("BSCollectorVT_" + CollectorData.id + "_" + CollectorData.aid) != -1 && (document.cookie.indexOf("BSCollectorVT_" + CollectorData.id + "_" + CollectorData.aid) != CollectorData.timing.ttype)) {

        DeleteCookie("BSCollectorVT_" + CollectorData.id + "_" + CollectorData.aid);
        SetCookie("BSCollectorVT_" + CollectorData.id + "_" + CollectorData.aid, CollectorData.timing.ttype, 2000);
    }
    else {
        SetCookie("BSCollectorVT_" + CollectorData.id + "_" + CollectorData.aid, CollectorData.timing.ttype, 2000);
    }

    if (CollectorData.timing.ttype == "perday" || CollectorData.timing.ttype == "days") {
        if (document.cookie.indexOf("BSCollectorDVT_" + CollectorData.id + "_" + CollectorData.aid) == -1) {
            SetCookie("BSCollectorDVT_" + CollectorData.id + "_" + CollectorData.aid, CollectorData.timing.ttype, (CollectorData.timing.ttype == "perday" ? 1 : CollectorData.timing.value));
        }
    }
    else if (CollectorData.timing.ttype == "once") {
        SetCookie("BSCollectorDVT_" + CollectorData.id + "_" + CollectorData.aid, CollectorData.timing.ttype, 3000);
    }


}


function getTwentyFourHourTime(amPmString) {
    var d = new Date('1/1/2019 ' + amPmString);

    return d.getHours() * 100 + d.getMinutes();
}

function CheckDayandHour(popupdata) {
    var HourDayresult_array = [];
    (popupdata.isDaysHours == true ?
        B1popup_Jquery.each(popupdata.daysAndHours, function (key, val) {
            if_ruledisplay = CheckDayHours(val.dayHourPropertyType, val.fromTime, val.toTime);
            HourDayresult_array.push(if_ruledisplay);
        }) : if_ruledisplay = true);
    return (HourDayresult_array.length == 0 ? if_ruledisplay : B1popup_Jquery.inArray(true, HourDayresult_array) != -1 ? true : false);
}

function CheckDayHours(dayHourPropertyType, fromTime, toTime) {

    var Hourpopup = false;
    var fromval = getTwentyFourHourTime(fromTime);
    var toTimeval = getTwentyFourHourTime(toTime);
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date();
    var dayName = days[d.getDay()];

    var Currenttime = getTwentyFourHourTime(d.toLocaleString([], { hour: '2-digit', minute: '2-digit' }))
    if (dayHourPropertyType == "week") {
        if (Currenttime >= fromval && Currenttime <= toTimeval) {
            Hourpopup = true;
        }
    }
    else if (dayHourPropertyType == "sundaytothursday") {
        if ((d.getDay() >= 0 && d.getDay() <= 4) && (Currenttime >= fromval && Currenttime <= toTimeval)) {
            Hourpopup = true;
        }
    }
    else if (dayHourPropertyType == "mondaytofriday") {
        if ((d.getDay() >= 1 && d.getDay() <= 5) && (Currenttime >= fromval && Currenttime <= toTimeval)) {
            Hourpopup = true;
        }
    }
    else if (dayHourPropertyType == "weekend") {
        if ((dayName.toLowerCase() == "saturday" || dayName.toLowerCase() == "sunday") && (Currenttime >= fromval && Currenttime <= toTimeval)) {
            Hourpopup = true;
        }
    }
    else if (dayName.toLowerCase() == dayHourPropertyType) {
        if (Currenttime >= fromval && Currenttime <= toTimeval) {
            Hourpopup = true;
        }
    }
    else {
        Hourpopup = false;
    }
    return Hourpopup;

}
/*Option Cookies*/

function SetCookie(cname, cvalue, exdays) {
    if (exdays) {
        var date = new Date();
        date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";

    document.cookie = cname + "=" + cvalue + expires + "; path=/;domain=" + document.domain + ";SameSite=None; Secure";
}

function GetCookie(cname) {
    var namePO = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(namePO) == 0) return c.substring(namePO.length, c.length);
    }
    return null;
}
function DeleteCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;domain=" + document.domain;
}
function TimeSetCookie(cname, cvalue, minute) {
    var date = new Date();
    var m = minute;
    date.setTime(date.getTime() + (m * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = cname + "=" + cvalue + expires + "; path=/";
}
function CheckUpdateTrigger(triggerelement, element) {
    var browser = get_browser_info();
    var referrer = document.referrer;

    var trafficsource = "";
    domain = document.domain, page_title = document.title;
    if (referrer != "") {
        referrer = referrer.match(/:\/\/(.[^/]+)/)[1];
        if (referrer != document.domain) {
            trafficsource = referrer;
        }
    }

    var IPdetails = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));
    var TriggerData = B1popup_Jquery.grep(Collectordata, function (elmvalue, index) {
        return elmvalue.triggers.element == element;
    });

    B1popup_Jquery.each(TriggerData, function (index, value) {
        var elementdata = {};
        var expressions = [];
        var i = 0;
        value.fields.forEach(function (e) {
            expressions[i] = {};
            var t = document.querySelector(e.selector);
            if (!t) {
                return
            }
            var n = void 0;
            var r = t.tagName.toLowerCase();
            if (inputelement.indexOf(r) > -1) {
                n = t.value;
                if (t.type === "checkbox") {
                    n = t.checked
                }
            } else {
                n = t.innerText
            }
            expressions[i]['event_attr'] = e.event_attr;
            expressions[i]['fieldName'] = e.fieldName;
            expressions[i]['fieldValue'] = n
            i++;
        });

        elementdata.id = value.id;
        elementdata.UniqueId = getClientId();
        elementdata.fields = expressions;
        elementdata.ipaddress = GetCookie("BSpopup_IPaddress");
        elementdata.device = (ifMobile == true ? "mobile" : "desktop");
        //elementdata.countryCode = IPdetails.countryCode;
        //elementdata.countryName = IPdetails.countryName;
        //elementdata.region = IPdetails.region;
        //elementdata.city = IPdetails.city;
        //elementdata.timeZoneName = IPdetails.timezoneName;
        //elementdata.timeZoneOffset = IPdetails.timezoneOffse;
        //elementdata.currencyCode = IPdetails.currencyCode;
		elementdata.countryCode = "";
		elementdata.countryName = "";
		elementdata.region = "";
        elementdata.city = "";
        elementdata.timezonename = "";
        elementdata.timezoneoffset = "";
        elementdata.currencycode = "";
        elementdata.domain = getOriginLandingPage();
        elementdata.trafficSource = (trafficsource == "" ? "Direct" : trafficsource);
        elementdata.browser = browser.name;
        elementdata.browserVersion = browser.version;
        //elementdata.language = IPdetails.language;
		elementdata.language = "";
        elementdata.operatingSystem = navigator.platform;
        elementdata.ATID = 1;
        elementdata.EventName = value.destinations.eventName;
        elementdata.ContactUnique = GetCookie("CCID");
        var url = Server_link + "/API/UpdateCollector";
        B1popup_Jquery.post(url, { request: elementdata }, function (data) {

            if (value.timing.ttype == "once" || value.timing.ttype == "perday" || value.timing.ttype == "days") {
                DestoryCollector();
            }
            if (document.cookie.indexOf("BSDCollect_" + value.id + "_" + value.aid) == -1) {
                SetCookie("BSDCollect_" + value.id + "_" + value.aid, "DataCollected", 2000);
            }
        });
    });

}

function TriggerEvent(element, event) {
    if (event === "mouseenter") {
        event = "mouseover"
    } else if (event === "mouseleave") {
        event = "mouseout"
    } else if (event === "mouseover") {
        return
    }
    var r = function t(r) {

        var a = r.target;
        var i = r.relatedTarget;
        var o = void 0;
        var s = false;
        o = a && a.matches && a.matches(element);
        while (a && a !== document && !o) {
            a = a.parentNode;
            o = a && a.matches && a.matches(element)
        }
        if (!o) {
            return
        }
        if (a.tagName === "FORM") {
            s = true
        }
        while (i && i !== a && i !== document) {
            i = i.parentNode
        }
        if (a === i) {
            return
        }
        if (s) {
            r.preventDefault()
        }

        CheckUpdateTrigger.call(a, r, element)

    };
    document.addEventListener(event, r, false);
    triggerevent.push({
        eventType: event,
        handler: r
    })
}

var eventt = []
Kaydu = function () {
    for (var e = arguments.length, eventt = Array(e), n = 0; n < e; n++) {
        eventt[n] = arguments[n]
    }
    return (0, callevent)(eventt)
};

function callevent(e) {
    e = Array.prototype.slice.call(e);
    var t = e[0].split(".");
    var n = t[0];
    var r = t[1];
    e = e.slice(1);
    if (n === "event") {
        var i = e[0];
        return eventRecord(r, i)
    }
}
function eventRecord(eventname, n) {
    var elementdata = {};
    n = n || {};
    try {

        JSON.stringify(n)
        var jsonobject = JSON.stringify(n);
        var json = JSON.parse(jsonobject.replace(/&quot;/g, '"'));
        var expressions = [];
        var i = 0;
        $.each(json, function (key, val) {
            expressions[i] = {};
            expressions[i]['event_attr'] = true;
            expressions[i]['fieldName'] = key;
            expressions[i]['fieldValue'] = val
            i++;
        })
    } catch (e) {
        return;
    }
    elementdata.UniqueId = getClientId();
    elementdata.EventName = eventname;
    elementdata.fields = expressions;
    elementdata.ContactUnique = GetCookie("BSpopupSCQVD_" + getClientId())
    var url = Server_link + "/API/UpdateCollector";
    debugger;
    B1popup_Jquery.post(url, { request: elementdata }, function (data) {
    });
}

function AddBtnElements(Popupdata) {
    if (Popupdata.displayType == "text") {
        B1popup_Jquery('.formbtnpopup').css('background-color', Popupdata.buttonColor);
        B1popup_Jquery('.formbtnpopup').css('color', Popupdata.fontColor);
        B1popup_Jquery('.formbtnpopup').html(Popupdata.buttonText);
    }
    else {
        B1popup_Jquery('.formbtnpopup').html('<img src="'+ Server_link + Popupdata.imagePath +'" id="imgbtn" width="250" height="250">');
    }
}

function BtnClick() {
    B1popup_Jquery('body').on('click', '.formbtnpopup', function (e) {
        var id = B1popup_Jquery('.formbtnpopup').attr("data-id");
        B1popup_Jquery('#popup_' + id).modal('show');
    });
    
}

function CheckFilterType(popupdata) {
    var result = true;
    if (popupdata.isFilterType == true) {
        result = getPermission(popupdata.filterName, popupdata)
    }
    return result;
}

function getPermission(filtername, popupdata) {
    var result = false;
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/CheckPopupFilter",
        type: "GET",
        async: false,
        data: {
            filtername: filtername,
            userId: popupdata.userId,
            filtervalue: popupdata.filterValue,
            UniqueId: getClientId(),
        },
        dataType: "json",
        success: function (data) {
            result = data;
        }
    });
    return result;
}

   function staticFormHTMLDesign(Popupdata) {
        if (Popupdata.isWelcomeMsg == true) {
            B1popup_Jquery.each(Popupdata.inputFieldData, function (key, val) {
                var firstname = '';
                var welcome = "Welcome Back";
                if (GetCookie("popupName") != null) {
                    firstname = GetCookie("popupName") + '!';
                    B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html(B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html().replace('<!--%WelcomeMsg%-->', '<h2 class="welcomeMsg dragResizable" style="margin: 0;font-size: 22px;font-weight: 500;color: #ffbc00;">' + welcome + '&nbsp' + firstname + '</h2>'));
                }
                else if (GetCookie("popupEmail") != null) {
                    firstname = GetCookie("popupEmail");
                    firstname = (firstname.substring(0, firstname.lastIndexOf("@"))) + '!';
                    B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html(B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).html().replace('<!--%WelcomeMsg%-->', '<h2 class="welcomeMsg dragResizable" style="margin: 0;font-size: 22px;font-weight: 500;color: #ffbc00;">' + welcome + '&nbsp' + firstname + '</h2>'));
                }

            });
        }

        if (Popupdata.closeOption == "x" || Popupdata.closeOption == "skip") {
            B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.closeModalBtnContain').addClass("hide");
            setTimeout(function () {
                B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.closeModalBtnContain').removeClass("hide");
            }, Popupdata.displayCloseOptionafter * 1000);
        }



        B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.signInUpBtn').attr('type', 'submit');
        B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.signInUpBtn').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);
        B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.socialClickButton').attr('type', 'button');
        B1popup_Jquery("#popupform_" + Popupdata.templateCustomizeUniqueId).find('.socialClickButton').attr('id', 'popupbtn_' + Popupdata.templateCustomizeUniqueId);

        UpdateViewedCount(Popupdata);
        B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("show");

        /*AutoClose Data*/
        if (Popupdata.isCloseauto && typeof popup_landing_page == "undefined") {
            if (Popupdata.type != "form") {
                setTimeout(function () {
                    B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal('hide');
                }, Popupdata.closeAutoAfter * 1000);
            }
            else {
                setTimeout(function () {
                    B1popup_Jquery('#form_' + Popupdata.templateCustomizeUniqueId).hide();
                }, Popupdata.closeAutoAfter * 1000);
            }
        }
        /*end*/

        if (Popupdata.isDisplayButton == true) {
            BtnClick();
            B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("hide");
            setTimeout(function () { B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).css({ 'display': 'none !important' }) }, 100);
        }
        else {
            B1popup_Jquery('#popup_' + Popupdata.templateCustomizeUniqueId).modal("show");
        }
    }
	
	function UpdateLandingViewedCount() {
    var URL = (window.location.href).split('/');
    var templateCustomizeId = JSON.parse(URL[4]);
    var t = get_browser_info(),
        i = document.referrer,
        o = "";
    "" != i && (i = i.match(/:\/\/(.[^\/]+)/)[1]) != document.domain && (o = i);
    var n = B1popup_Jquery.parseJSON(GetCookie("BSpopup_IPaddressDT1"));
    B1popup_Jquery.ajax({
        url: Server_link + "/PopupFE/LandingTemplateVisitorDataCreate/",
        type: "POST",
        async: !0,
        data: {
            UniqueId: getClientId(),
            templateCustomizeId: templateCustomizeId,
            type: "view",
            ipaddress: GetCookie("BSpopup_IPaddress"),
            device: 1 == ifMobile ? "mobile" : "desktop",
            //countryCode: n.countryCode,
            countryName: n.countryName,
            region: n.region,
            city: n.city,
            timeZoneName: n.timezoneName,
            timeZoneOffset: n.timezoneOffset,
            currencyCode: n.currencyCode,
            domain: getOriginLandingPage(),
            trafficSource: "" == o ? "Direct" : o,
            browser: t.name,
            browserVersion: t.version,
            language: n.language,
            operatingSystem: navigator.platform
        },
        dataType: "json",
        success: function (e) { }
    })
}

function isModifierKey(event) {
    var key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};
/*end*/

function bootstrapjs() {
    if ("undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); +function (t) { "use strict"; var e = t.fn.jquery.split(" ")[0].split("."); if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4") }(jQuery), +function (t) { "use strict"; function e(e, o) { return this.each(function () { var s = t(this), n = s.data("bs.modal"), a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e); n || s.data("bs.modal", n = new i(this, a)), "string" == typeof e ? n[e](o) : a.show && n.show(o) }) } var i = function (e, i) { this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.fixedContent = ".navbar-fixed-top, .navbar-fixed-bottom", this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () { this.$element.trigger("loaded.bs.modal") }, this)) }; i.VERSION = "3.4.1", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }, i.prototype.toggle = function (t) { return this.isShown ? this.hide() : this.show(t) }, i.prototype.show = function (e) { var o = this, s = t.Event("show.bs.modal", { relatedTarget: e }); this.$element.trigger(s), this.isShown || s.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () { o.$element.one("mouseup.dismiss.bs.modal", function (e) { t(e.target).is(o.$element) && (o.ignoreBackdropClick = !0) }) }), this.backdrop(function () { var s = t.support.transition && o.$element.hasClass("fade"); o.$element.parent().length || o.$element.appendTo(o.$body), o.$element.show().scrollTop(0), o.adjustDialog(), s && o.$element[0].offsetWidth, o.$element.addClass("in"), o.enforceFocus(); var n = t.Event("shown.bs.modal", { relatedTarget: e }); s ? o.$dialog.one("bsTransitionEnd", function () { o.$element.trigger("focus").trigger(n) }).emulateTransitionEnd(i.TRANSITION_DURATION) : o.$element.trigger("focus").trigger(n) })) }, i.prototype.hide = function (e) { e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal()) }, i.prototype.enforceFocus = function () { t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) { document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus") }, this)) }, i.prototype.escape = function () { this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) { 27 == t.which && this.hide() }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal") }, i.prototype.resize = function () { this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal") }, i.prototype.hideModal = function () { var t = this; this.$element.hide(), this.backdrop(function () { t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal") }) }, i.prototype.removeBackdrop = function () { this.$backdrop && this.$backdrop.remove(), this.$backdrop = null }, i.prototype.backdrop = function (e) { var o = this, s = this.$element.hasClass("fade") ? "fade" : ""; if (this.isShown && this.options.backdrop) { var n = t.support.transition && s; if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + s).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) { return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide())) }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return; n ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e() } else if (!this.isShown && this.$backdrop) { this.$backdrop.removeClass("in"); var a = function () { o.removeBackdrop(), e && e() }; t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : a() } else e && e() }, i.prototype.handleUpdate = function () { this.adjustDialog() }, i.prototype.adjustDialog = function () { var t = this.$element[0].scrollHeight > document.documentElement.clientHeight; this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" }) }, i.prototype.resetAdjustments = function () { this.$element.css({ paddingLeft: "", paddingRight: "" }) }, i.prototype.checkScrollbar = function () { var t = window.innerWidth; if (!t) { var e = document.documentElement.getBoundingClientRect(); t = e.right - Math.abs(e.left) } this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar() }, i.prototype.setScrollbar = function () { var e = parseInt(this.$body.css("padding-right") || 0, 10); this.originalBodyPad = document.body.style.paddingRight || ""; var i = this.scrollbarWidth; this.bodyIsOverflowing && (this.$body.css("padding-right", e + i), t(this.fixedContent).each(function (e, o) { var s = o.style.paddingRight, n = t(o).css("padding-right"); t(o).data("padding-right", s).css("padding-right", parseFloat(n) + i + "px") })) }, i.prototype.resetScrollbar = function () { this.$body.css("padding-right", this.originalBodyPad), t(this.fixedContent).each(function (e, i) { var o = t(i).data("padding-right"); t(i).removeData("padding-right"), i.style.paddingRight = o ? o : "" }) }, i.prototype.measureScrollbar = function () { var t = document.createElement("div"); t.className = "modal-scrollbar-measure", this.$body.append(t); var e = t.offsetWidth - t.clientWidth; return this.$body[0].removeChild(t), e }; var o = t.fn.modal; t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function () { return t.fn.modal = o, this }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (i) { var o = t(this), s = o.attr("href"), n = o.attr("data-target") || s && s.replace(/.*(?=#[^\s]+$)/, ""), a = t(document).find(n), r = a.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(s) && s }, a.data(), o.data()); o.is("a") && i.preventDefault(), a.one("show.bs.modal", function (t) { t.isDefaultPrevented() || a.one("hidden.bs.modal", function () { o.is(":visible") && o.trigger("focus") }) }), e.call(a, r, this) }) }(jQuery);
}
}, true);
