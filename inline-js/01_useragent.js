function getNumber( str1, str2, v ){
	v = parseFloat( str1.split( str2 )[ 1 ] );
    return 0 <= v ? v : 0;
};
function fromString( str1, str2 ){
	return str1.indexOf( str2 ) === 0;
};
function findString( str1, str2 ){
    return 0 <= str1.indexOf( str2 );
};

var ua         = {},
	html       = document.documentElement,
    dua        = navigator.userAgent,
    dav        = navigator.appVersion,
    tv         = parseFloat(dav) | 0,
    sys        = navigator.platform,
	docMode    = document.documentMode,
	screenW    = screen.width,
	screenH    = screen.height,

    isTouch    = window.ontouchstart !== undefined,

	NINTENDO_  = 'Nintendo ',
	WIN_PHONE  = 'Windows Phone',
	ANDROID    = 'Android',
	ANDROID_   = ANDROID + ' ',
	PC_MODE    = 'PCMode',
	VERSION_   = 'Version/',
	I_PHONE    = 'iPhone',
	LINUX      = 'Linux',
	SAFARI     = 'Safari',
	NETSCAPE   = 'Netscape',

	verVersion = getNumber( dav, VERSION_ ) || getNumber( dua, VERSION_ ),
    /**
     * http://help.dottoro.com/ljifbjwf.php
     * version method (opera)
     *   window.opera.buildNumber();
     *   window.opera.version();
     * 
     * kquery.js
     *   opera.versionは8から実装
     */
    isPrsto   = window.opera,
    verOpera  = isPrsto && ( isPrsto.version ? parseFloat( isPrsto.version() ) : Math.max( getNumber( dua, 'Opera' ), verVersion, tv ) ),
	isOPR     = window[ 'opr' ],
    /**
     * http://qiita.com/takanamito/items/8c2b6bc24ea01381f1b5#_reference-8eedaa6525b73cd272b7
     * インドネシアの特殊なブラウザ事情(Opera Mini,UC Browser Mini)
     */
	isOpMin   = window[ 'operamini' ],
	verOpMin  = isOpMin && Math.max( /* isOpMin.version && parseFloat( isOpMin.version() ) | 0, */ getNumber( dua, 'Opera Mini/' ), getNumber( dua, 'Opera Mobi/' ), verVersion ),
	isUCWEB   = findString( dua, 'UCWEB' ),
	verUC2    = getNumber( dua, ' U2/' ),

    isTrident = !isPrsto && ( document.all || docMode ), // IE11 には .all が居ない .docMode == 11
    isEdge    = !isTrident && html[ 'msContentZoomFactor' ],
    isBlink   = !isEdge && window.chrome,

    isSafari  = findString( dua, SAFARI ),
    isIris    = findString( dua.toLowerCase(), 'iris' ),
    /**
     * https://www.fxsitecompat.com/ja/docs/2017/moz-appearance-property-has-been-removed/
     * -moz-appearance プロパティが廃止されました -> 更新: この変更は Firefox 54 で予定されていましたが、延期されました。
     */
    isGecko   = html && html.style[ 'MozAppearance' ] !== undefined, // window.Components
    isKHTML   = findString( dav, 'Konqueror' ),

    PS3        = getNumber( dua.toUpperCase(), 'PLAYSTATION 3' ),
// https://github.com/chitoku-k/SystemInfo/blob/master/systeminfo.js
	PSP        = window[ 'pspext' ] && getNumber( window[ 'pspext' ][ 'sysGetEnv' ]( 'x-psp-browser' ), 'system=' ),
	PSVita     = getNumber( dua, 'PlayStation Vita' ),
// http://blog.gutyan.jp/entry/2015/01/31/NintendoBrowser
    NDS        = sys === 'Nitro',
	NDSi       = sys === NINTENDO_ + 'DSi',
	N3DS       = sys === NINTENDO_ + '3DS',
	New3DS     = sys === 'New ' + NINTENDO_ + '3DS' || ( findString( dua, I_PHONE + ' OS 6_0' ) && screenW === 320 && screenH === 240 ),
    Wii        = sys === NINTENDO_ + 'Wii',
	WiiU       = sys === NINTENDO_ + 'WiiU',
	
	iOS        = !New3DS && fromString( sys, 'iP' )
					|| fromString( dua, '; iPh OS ' ), // UC Browser
    WebOS      = window[ 'palmGetResource' ],
	WinPhone   = getNumber( dua, WIN_PHONE ) || getNumber( dav, WIN_PHONE + ' OS ' )
					|| getNumber( dua, '; wds' ), // UC Browser
	wpPCMode   = findString( dav, 'ZuneWP' ), // ZuneWP はデスクトップモードで登場する
    Win        = fromString( sys, 'Win' ),
    Mac        = fromString( sys, 'Mac' ),
// Kobo Mozilla/5.0 (Linux; U; Android 2.0; en-us;) AppleWebKit/533.1 (KHTML, like Gecko) Verson/4.0 Mobile Safari/533.1 (Kobo Touch)
    Kobo       = findString( dua, 'Kobo' ),
// Kindle paperwhite Mozilla/5.0 (X11; U; Linux armv7l like Android; en-us) AppleWebKit/531.2+ (KHTML, like Gecko) Version/5.0 Safari/533.2+ Kindle/3.0+
    Kindle     = findString( dua, 'Kindle' ), // Kindle Fire|KFOT|KFTT|KFJW
// Sony Reader Mozilla/5.0 (Linux; U; ja-jp; EBRD1101; EXT) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1
    SonyReader = findString( dua, 'EBRD' ),
    Mylo       = tv === 2 && findString( dua, 'Sony/COM2/' ),
    Android    = findString( sys, ANDROID ) || /* Android2.3.5 Firefox3.1 */ isGecko && findString( dav, ANDROID ),
    Linux      = findString( sys, LINUX ),
    MeeGo      = findString( dua, 'MeeGo' ) && findString( dua, 'NokiaBrowser/8.5.0' ),
	FireFoxOS,
	BlackBerry, XBox,
	Solaris, // ua SunOS
    // (Ubuntu|Linux|(Free|Net|Open)BSD)

	verAndroid = getNumber( sys, ANDROID_ ) || getNumber( dav, ANDROID_ ) || getNumber( dua, ANDROID_ )
					|| getNumber( dua, '; Adr ' ), // Android for UC Browser Speed mode

    verSafari  = verVersion,
    verTrident = getNumber( dav, 'Trident/' ),
    verEdge    = getNumber( dav, 'Edge/' ),
    verMSIE    =
        docMode               ? docMode :
        window.XMLHTTPRequest ? ( document.getElementsByTagName ? 7 : 4 ) :
        document.compatMode   ? 6 :
        (0).toFixed           ? 5.5 :
        window.attachEvent    ? 5 : 4,

    verGecko   = getNumber( dua, 'rv:' ),
    verWebKit  = getNumber( dua, 'AppleWebKit/' ),
    verChrome  = getNumber( dua, 'Chrome/' ),
    verOPR     = getNumber( dua, 'OPR/' ),
    verFennec  = getNumber( dua, 'Fennec/' ),

// Netscape Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:0.9.4.1) Gecko/20020508 Netscape6/6.2.3
// Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.2) Gecko/20040804 Netscape/7.2 (ax)
// Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.7.5) Gecko/20070321 Netscape/8.1.3
// Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.12) Gecko/20080219 Firefox/2.0.0.12 Navigator/9.0.0.6
    verNetscape = getNumber( dua, NETSCAPE + '6/' ) || // NN6
                  getNumber( dua, NETSCAPE + '/'  ) || // NN7-8
                  getNumber( dua, 'Navigator/' ),   // NN
    verNetFront = getNumber( dua, 'NetFront/' ),
    ver_iCab    = getNumber( dua, 'iCab' ),
	maybeAOSP   = isBlink && verWebKit <= 534.3, // 4.0 & 3.x には chrome がいる... 534~534.3
	maybePCMode = isTouch && ( verWebKit || isGecko ) && ( sys === LINUX + ' armv7l' || sys === LINUX + ' i686' ) && findString( dua, LINUX + ' x86_64' ),
    v, pcMode, dpRatio;
	// FxiOS, CriOS, Coast

// system 判定
    if( Kobo ){
        ua[ 'Kobo' ] = true;
    } else if( Kindle ){
        ua[ 'KindlePW' ] = true;
    } else if( SonyReader ){
        ua[ 'SonyReader' ] = true;
    } else if( WiiU ){
        ua[ 'WiiU' ] = true;
    } else if( Wii ){
        ua[ 'Wii' ] = true;
        // ua[ 'Opera' ] = verOpera;
    } else if( NDS ){
        ua[ 'NDS' ] = true;
        // ua[ 'Opera' ] = verOpera;
    } else if( NDSi ){
        ua[ 'NDSi' ] = true;
        // ua[ 'Opera' ] = verOpera;
    } else if( N3DS ){
        ua[ 'N3DS' ] = true;
        // ua[ 'Opera' ] = verOpera;
    } else if( New3DS ){
        ua[ 'New3DS' ] = true;
        // ua[ 'Opera' ] = verOpera;
    } else if( PS3 ){
        ua[ 'PS3' ] = true;
    } else if( PSP ){
        ua[ 'PSP' ] = PSP;
    } else if( PSVita ){
		ua[ 'PSVita' ] = PSVita;
    } else if( Mylo ){
		ua[ 'Mylo' ] = 2;
		verNetFront = 3.4;
    } else if( WebOS ){
		ua[ 'WebOS' ] = true;
	} else if( MeeGo ){
		ua[ 'MeeGo' ] = true;
    } else if( iOS ){
		dpRatio = window.devicePixelRatio === 1;
		v       = getNumber( dav.split( '_' ).join( '.' ), 'OS ' );

		if( !v ){
			ua[ PC_MODE ] = true;
			v =
				// navigator[ 'mediaDevices'    ] ? 11.2 : // WebView では無効
				// https://github.com/BasqueVoIPMafia/cordova-plugin-iosrtc/issues/250#issuecomment-336240953
				window[ 'WebAssembly'        ] ? 11.2 :
				window[ 'HTMLMeterElement'   ] ? 10.3 :
				window[ 'Proxy'              ] ? 10.2 :
				window[ 'HTMLPictureElement' ] ?  9.3 :
				Number[ 'isNaN'              ] ?  9.2 :
				// http://uupaa.hatenablog.com/entry/2015/03/03/223344
				window[ 'SharedWorker'       ] ?
					( window[ 'performance' ] && window[ 'performance' ][ 'now' ] ? 8.0 : 8.4 ) :
				document.execCommand           ?  7.1 :
				window[ 'webkitURL'          ] ?  6.1 :
				window[ 'Worker'             ] ?  5.1 :
				window[ 'Int8Array'          ] ?  4.3 :
				window[ 'HTMLAudioElement'   ] ?  4.1 : 3.2;
		};

		ua[ 'iOS' ] = v;

		// 4:3 model
		v = screenW === screenH * 1.5 || screenW * 1.5 === screenH;

		switch( sys ){
			case I_PHONE :
			case I_PHONE + ' Simulator' :
				ua[ I_PHONE ] = v ? ( dpRatio ? '3GS-' : '4|4s' ) : '5+';
				break;
			case 'iPad' :
			case 'iPad Simulator' :
				ua[ 'iPad' ] = dpRatio ? '2-|1min-' : '3+|2min+';  
				break;
			case 'iPod' :
			// case 'iPod Simulator' : // 必要??
				ua[ 'iPod' ] = v ? ( dpRatio ? '3-' : '4' ) : '5+';
				break;
		};
    } else if( WinPhone ){
        ua[ 'WinPhone' ] = WinPhone;
    } else if( verEdge && sys === 'ARM' ){
        ua[ 'WinPhone' ] = 10;
		ua[ PC_MODE    ] = true;
	} else if( wpPCMode ){
		ua[ 'WinPhone' ] = verMSIE === 11 ? 8.1 :
						   verMSIE === 10 ? 8   :
						   verMSIE ===  9 ? 7.5 :
						   verMSIE ===  7 ? 7   : '?';
		ua[ PC_MODE   ] = true;
    } else if( Win ){
		switch( sys ){
			case 'WinCE' :
				ua[ sys ] = true;
				break;
			case 'Win16' :
			case 'Win32' :
			case 'Win64' :
				ua[ sys ] = true;

				if( v = dua.split( 'Windows NT 10' )[ 1 ] ){
					switch( v.substr( 0, 2 ) ){
						case '.0' : v = 10; break;
						default : v = '?';
					};
				} else
				if( v = dua.split( 'Windows NT ' )[ 1 ] ){
					switch( v.substr( 0, 3 ) ){
						case '6.3' : v = 8.1; break;
						case '6.2' : v = 8; break;
						case '6.1' : v = 7; break;
						case '6.0' : v = 'Vista'; break;
						case '5.2' : v = '2003|XP64'; break;
						case '5.1' : v = findString( v, '5.1; SV1' ) ? 'XPSP2' : 'XP'; break;
						case '5.0' : v = findString( v, '5.01' ) ? '2kSP1' : 2000; break;
						case '4.0' : v = 'NT'; break;
						default : v = '?';
					};	
				} else
				if( v = dua.split( 'Windows ' )[ 1 ] ){
					switch( v.substr( 0, 2 ) ){
						case '98' : v = findString( v, '98; Win 9x 4.90' ) ? 'ME' : '98|98SE'; break;
						case '95' : v = 95; break;
						case '3.' : v = parseFloat( v ); break;
						default : v = '?';
					};	
				} else {
					v = '?';
				};
				
				// 10, 8.1, 8, 7, Vista, 2003|XP64, XPSP2, XP, 2kSP1, 2000, ME, 98|98SE, 95, ?				
				ua[ 'Windows' ] = v;
				break;
		};
    } else if( Mac ){
		ua[ 'Mac' ] = true;
		switch( sys ){
			case 'MacPowerPC' :
				sys = 'MacPPC';
			case 'MacPPC' :
			case 'Mac68K' :
			case 'MacIntel' :
				ua[ sys ] = true;
		};
// Android Fennec
    } else if( Android && isGecko ){
        // PCモードの Android Firefox では platform に Android 0.0.0 が存在
        // Fennec41- 用
        // https://developer.mozilla.org/ja/docs/Gecko_user_agent_string_reference
        // バージョン 41 以降の Android 版 Firefox では platform トークンに Android バージョンが含まれます。
        // 相互運用性向上のため、Android 4 以前のバージョンでブラウザが動作している場合は 4.4 と出力します。
        // Android バージョン 4 以降では実際のバージョン番号が出力されます。
        // なお、Gecko エンジンはすべての Android バージョンに対して同じ機能を提供しています。	
        if( findString( dua, ANDROID_ + '4.4;' ) ){
            ua[ ANDROID ] = '2.3+';
        } else if( 4 <= verAndroid ){
            ua[ ANDROID ] = verAndroid;
        } else if( Android ){
            ua[ ANDROID ] = '2.2+';
        };
		if( maybePCMode ) ua[ PC_MODE ] = true;
	} else if( Android && isPrsto ){
		if( verAndroid ){
			ua[ ANDROID ] = verAndroid;
		} else {
			ua[ ANDROID ] = '1.6+';
			ua[ PC_MODE ] = true;
		};
// Android other | Linux
	} else if( verAndroid ){
		ua[ ANDROID ] = verAndroid;
    } else if( Linux && maybePCMode ){
		// https://ja.wikipedia.org/wiki/WebKit
		// http://www.au.kddi.com/developer/android/kishu/ua/
		// webkit version to Android version...
		pcMode = true;
		// AOSP の判定は Version/ の有無. 但し「デスクトップ版で見る」場合、Version/ が居なくなる...
		// PC版で見る、にチェックが付いている場合、ユーザーエージェント文字列にも platform にも Android の文字列が存在しない(標準ブラウザ&Chrome)
		// Audio でタッチが必要か？の判定にとても困る...
		// ua には Linux x86_64 になっている sys と矛盾する. ATOM CPU の場合は？	
		if( ( isBlink && !maybeAOSP ) || isOPR || verOPR ){
			ua[ ANDROID ] = verAndroid = '4+';
		} else if( document[ 'registerElement' ] ){
			// http://caniuse.com/#feat=document-execcommand
			// Android 5+ で非対応に
			ua[ ANDROID ] = verAndroid = document.execCommand ? 4.4 : 5;

		} else if( window[ 'Int8Array' ] ){
			ua[ ANDROID ] = verAndroid =
				!navigator[ 'connection' ] ? 4.4 :
				( !window[ 'searchBoxJavaBridge_' ] && !isBlink ) ? 4.2 : /* & 4.3. 4.1 には searchBoxJavaBridge_ と chrome が存在 */
				Number.isNaN ? 4.1 : 4;
				// 534 - 3.x~4.x , 534.13=3.x
				// 534.30 = 4.0-4.1
				// 535.19 = 4.1
				// 537.36 = 4.4.2-5.x
		} else {
			ua[ ANDROID ] = verAndroid =
				verWebKit < 529    ? 1.5 : // <= 528.5
				verWebKit < 531    ? 2.0 : // 530 2.0~2.1
								// 533 2.2~2.3
				verWebKit < 534    ? ( window.HTMLAudioElement ? 2.3 : 2.2 ) : 3;
		};
	} else if( Linux ){
		ua[ LINUX ] = true;
	};

// browser 判定
	if( verNetFront ){
        ua[ 'NetFront' ] = verNetFront;
	} else
	if( ver_iCab ){
		ua[ 'iCab' ] = ver_iCab;
	} else
// PS3 Sony Browser
    if( PS3 ){
        ua[ 'Sony' ] = PS3;
    } else
// Opera Mini
    if( isOpMin ){
        ua[ 'OperaMin' ] = verOpMin;
    } else
// UC Browser Speed Mode
    if( isUCWEB ){
		ua[ 'UCWEB' ] = verUC2;
    } else
// Prsto Opera
    if( isPrsto ){
		ua[ 'Opera' ] = ua[ 'Prsto' ] = verOpera;
    } else
// ie11-
    if( isTrident ){
		verTrident = verTrident ? ( verTrident + 4 | 0 ) : verMSIE;

		if( verTrident !== verMSIE ){		
			ua[ 'IEHost' ] = verTrident;
		};
        ua[ 'IE' ] = verMSIE;

		// https://stackoverflow.com/questions/8751479/detect-metro-ui-version-of-ie
		if( 10 <= verMSIE && 8 <= ua[ 'Windows' ] && ua[ 'Windows' ] < 9 ){
			if( window.screenY === 0 && ( window.innerHeight + 1 ) !== window.outerHeight ){
				ua[ 'ModernIE' ] = verMSIE;
			};
		};

		if( ua[ 'Mac' ] ){
			ua[ 'MacIE' ] = verMSIE;
		};
    } else
// edge
    if( isEdge ){
        ua[ 'Edge' ] = verEdge;
    } else
// Gecko
    if( isGecko ){
		ua[ 'Gecko' ] = verGecko;		
	/** TODO PC版 Fennec もある */
	//Fennec
		if( verFennec ){
			/**
			 * Mozilla/5.0 (Android; Linux armv7l; rv:9.0) Gecko/20111216 Firefox/9.0 Fennec/9.0
			 */
			ua[ 'Fennec' ] = verFennec;
		} else
		if( Android ){
			ua[ 'Fennec' ] = verGecko;
		} else
	//Firefox
		if( verNetscape ){
			ua[ 'NN' ] = verNetscape;
		};
    } else
// Blink Opera
	if( /* isBlink && */ isOPR || verOPR ){
		ua[ 'OPR'   ] = verOPR;
		ua[ 'Blink' ] = verChrome;
		if( pcMode ) ua[ PC_MODE ] = true;
	} else
// AOSP | Chrome WebView Wrapped Browser
// Android3.x-4.0 のAOSPで window.chrome がいるので AOSP の判定を Blink より先に
    if( verAndroid && maybeAOSP ){
		ua[ 'AOSP' ] = verAndroid;
		if( pcMode ) ua[ PC_MODE ] = true;
	} else
// Blink Chrome
	if( isBlink ){
		ua[ 'Blink' ] = verChrome;
		if( pcMode ) ua[ PC_MODE ] = true;
	} else
// http://uupaa.hatenablog.com/entry/2014/04/15/163346
// Chrome WebView は Android 4.4 の時点では WebGL や WebAudio など一部の機能が利用できません(can i use)。
// また UserAgent が書き換え可能なため、旧来のAOSPブラウザの UserAgent を偽装した形で配布されているケースがあります。
// http://caniuse.com/#compare=chrome+40,android+4.2-4.3,android+4.4,android+4.4.3-4.4.4,and_chr+45
// CustomElement の有無で判定
    if( verAndroid && document[ 'registerElement' ] ){
		// Android 標準ブラウザ Chrome WebView ブラウザ
		ua[ 'CrWV' ] = verAndroid;
		if( pcMode ) ua[ PC_MODE ] = true;
	} else
	if( verAndroid && ( verVersion || pcMode ) ){
		ua[ 'AOSP' ] = verAndroid;
		if( pcMode ) ua[ PC_MODE ] = true;
    } else
	if( isKHTML ){
		ua[ 'Khtml' ] = tv;
	} else
	if( verWebKit ){
		ua[ 'WebKit' ] = verWebKit;
		
		if( verChrome ){
			ua[ 'Chrome' ] = verChrome;
		} else
        if( isIris ){
            ua[ 'Iris' ] = verWebKit;
        } else
		if( isSafari ){
			if( verSafari ){
				ua[ SAFARI ] = verSafari;
			} else
			if( verWebKit <= 528.16 ){
				ua[ SAFARI ] = verWebKit <   73    ? 0.8 :
								 verWebKit <   85    ? 0.9 :
								 verWebKit <  100    ? 1 :
								 verWebKit <  125    ? 1.1 :
								 verWebKit <  312    ? 1.2 :
								 verWebKit <  412    ? 1.3 :
								 verWebKit <= 419.3  ? 2 :
								 verWebKit <= 525.13 ? 3 :
								 verWebKit <= 525.25 ? 3.1 : 3.2;
			};
		};
	};
