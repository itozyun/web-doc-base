if( !engine ){
    isAndroidBased = isAndroidBased || isAndroid;
/*----------------------------------------------------------------------------//
 *  Presto
 */
    if( isPresto ){
        engine        = isAndroidBased || deviceTypeIsPDA || deviceTypeIsPhone || deviceTypeIsTablet ? 'PrestoMobile' : 'Presto';
        engineVersion = versionPresto;
    } else
/*----------------------------------------------------------------------------//
 *  Trident or Tasman
 */
    if( isTrident ){
        if( v = getNumber( strAppVersion, 'Trident/' ) + 4 ){
            if( v !== versionTrident ){
                brand        = 'IEHost';
                brandVersion = v;
            };
        };

        // https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
        if( 10 <= versionTrident && 6.2 <= platformVersion && platformVersion < 7 ){ // WinNT6.2 = Win8, WinNT6.3 = Win8.1
            if( screenY === 0 && ( innerHeight + 1 ) !== outerHeight ){
                brand        = 'ModernIE';
                brandVersion = versionTrident;
            };
        };

        if( deviceTypeIsPDA || deviceTypeIsPhone || deviceTypeIsTablet || deviceTypeIsMediaPlayer ){ // TODO device:MS Zune
            engine = 'TridentMobile';
        } else if( isMac && 5 <= versionTrident ){
            engine       = 'Tasman';
            brand        = 'MacIE';
            brandVersion = versionTrident;
        } else {
            engine = 'Trident';
            if( isMac ){
                brand        = 'MacIE';
                brandVersion = versionTrident;
            };
        };
        engineVersion = versionTrident; 
    } else
/*----------------------------------------------------------------------------//
 *  EdgeHTML
 */
    if( isEdgeHTML ){
        engine        = 'EdgeHTML'; // TODO EdgeHTMLMobile
        engineVersion = versionEdge;
    } else
/*----------------------------------------------------------------------------//
 *  Goannna
 */
    if( versionGoanna ){
        engine        = 'Goanna';
        engineVersion = versionGoanna;
    } else
/*----------------------------------------------------------------------------//
 *  Gecko
 */
    if( isGecko ){
        engine        = isAndroidBased ? 'Fennec' : 'Gecko';
        engineVersion = versionGecko || versionFirefox;
    } else
/*----------------------------------------------------------------------------//
 *  Samsung Browser
 */
    if( verSamsung ){
        engine        = 'Samsung';
        engineVersion = verSamsung;
        // TODO if( surelyPcMode ) isPcMode = true;
    } else
/*----------------------------------------------------------------------------//
 *  NetFront
 */
    if( strVersion = getVersionString( strUserAgent, 'NetFront/' ) ){
        engine        = 'NetFront';
        engineVersion = strVersion;
    } else
/*----------------------------------------------------------------------------//
 *  iCab
 */
    if( strVersion = getVersionString( strUserAgent, 'iCab' ) ){
        engine        = 'iCab';
        engineVersion = strVersion;
    } else
/*----------------------------------------------------------------------------//
 *  Opera Mini
 */
    if( strVersion = max( getVersionString( strUserAgent, 'Opera Mini/' ), getVersionString( strUserAgent, 'Opera Mobi/' ) ) || ( hasOperaMiniObject && verVersion ) ){
        engine        = 'OperaMini'; 
        engineVersion = strVersion;
        if( !platform ){
            if( findString( strUserAgent, 'iPhone' ) ){
                device = 'iPhone';
            } else if( findString( strUserAgent, 'iPad' ) ){
                device = 'iPad';
            } else if( findString( strUserAgent, 'iPod' ) ){
                device = 'iPod';
            };
            if( device ) platform = 'iOS';
        };
    } else
/*----------------------------------------------------------------------------//
 *  UC Browser Speed Mode
 */
    if( isUCWEB ){
        engine        = 'UCWEB';
        engineVersion = versionUCWEB;
    } else
/*----------------------------------------------------------------------------//
 *  KHTML
 */
    if( versionKHTML ){
        engine        = 'KHTML';
        engineVersion = appVersion;
    } else
/*----------------------------------------------------------------------------//
 *  AOSP
 */
// Android3.x-4.1 のAOSPで window.chrome がいるので AOSP の判定を Blink より先に
    if( isAndroid && maybeAOSP ){
        engine           = 'AOSP';
        engineVersion    = versionAndroid;
        isAndroidBrowser = true;
        if( surelyPcMode ) isPcMode = true;
    } else
/*----------------------------------------------------------------------------//
 *  Chromium or ChromiumMobile
 */
    if( hasChromeObject || hasOPRObject || versionOPR ){
        engine        = isAndroidBased ? 'ChromiumMobile' : 'Chromium';
        engineVersion = versionChrome;
        if( surelyPcMode ) isPcMode = true;
    } else
/*----------------------------------------------------------------------------//
 *  ChromeWebView
 */
// http://uupaa.hatenablog.com/entry/2014/04/15/163346
// Chrome WebView は Android 4.4 の時点では WebGL や WebAudio など一部の機能が利用できません(can i use)。
// また UserAgent が書き換え可能なため、旧来のAOSPブラウザの UserAgent を偽装した形で配布されているケースがあります。
// http://caniuse.com/#compare=chrome+40,android+4.2-4.3,android+4.4,android+4.4.3-4.4.4,and_chr+45
    if( isAndroid && docRegElm ){
        // Android 標準ブラウザ Chrome WebView ブラウザ
        engine           = 'ChromeWebView';
        engineVersion    = parseFloat( versionAndroid ) < 5 ? versionAndroid : versionChrome; // Android 4.4.4- では Android の Version を。5.0+ では Chrome のバージョンを使用。
        // TODO PCモードでは Chrome/11 とあり得ない値が入っている
        isAndroidBrowser = true;
        if( !( window.requestFileSystem || window.webkitRequestFileSystem ) ){
            isAndroidChromeWebView = true;
        };
        if( surelyPcMode ) isPcMode = true;
    } else
/*----------------------------------------------------------------------------//
 *  AOSP PC_Mode
 */
    if( isAndroid && ( verVersion || surelyPcMode ) ){
        engine           = 'AOSP';
        engineVersion    = versionAndroid;
        isAndroidBrowser = true;
        if( surelyPcMode ) isPcMode = true;
    } else
/*----------------------------------------------------------------------------//
 *  Chromium or ChromiumMobile (window.chrome 無)
 */
    if( versionChrome ){
        engine        = isAndroidBased ? 'ChromiumMobile' : 'Chromium';
        engineVersion = versionChrome;
    } else
/*----------------------------------------------------------------------------//
 *  WebKit
 */
    if( versionWebKit ){
        engine        = 'WebKit'
        engineVersion = versionWebKit;
    };
};