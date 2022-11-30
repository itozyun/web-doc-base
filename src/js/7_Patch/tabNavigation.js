if( p_Gecko && ua.conpare( p_engineVersion, '0.9.5' ) < 0 || p_WebKit < 536 ){ /// Gecko <= 0.9.4
    // keydown を監視
    // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
    //   focus, blur をキャンセルできる
    // Safari ~5 は階層の離れた要素にフォーカスしない!
    //   keydown をキャンセルする
    var TabNavigation_direction;
    var TabNavigation_shiftKey;
    var TabNavigation_keydownTime;
    var TabNavigation_nextFocusableElement;
    var TabNavigation_currentFocusedElement;
    var TabNavigation_windowBlurFlag;

    p_listenLoadEvent(
        function(){
            if( !p_WebKit ){
                p_addEventListener( p_body, 'click', TabNavigation_onWindowClick );
            };
            p_addEventListener( window, 'blur', TabNavigation_onWindowBlur ); // Gecko 0.9.3 で必要を確認
            p_listenFocusinEvent( p_body, TabNavigation_onFocusin );
            p_addEventListener( document, 'keydown', TabNavigation_onkeydown );
            p_addEventListener( document, 'keyup', TabNavigation_onkeyup );
        }
    );

    var TabNavigation_onkeydown = function( e ){
            if( e.keyCode === 16 ){
                TabNavigation_shiftKey = true;
            } else if( e.keyCode === 9 ){
                TabNavigation_direction   = TabNavigation_shiftKey;
                TabNavigation_keydownTime = + new Date;
                Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigation_shiftKey + ' time:' + TabNavigation_keydownTime );
                if( TabNavigation_currentFocusedElement && p_WebKit ){
                    if( TabNavigation_findNextFocusableElement( TabNavigation_currentFocusedElement ) ){
                        TabNavigation_windowBlurFlag = true;
                        Debug.log( e.type + ' cancelable=' + e.cancelable );
                        e.stopPropagation();
                        e.preventDefault();
                        TabNavigation_setFocus();
                    };
                };
            };
        };
    var TabNavigation_onkeyup = function( e ){
        if( e.keyCode === 16 ){
            TabNavigation_shiftKey = false;
        };
    };

    var TabNavigation_onWindowClick = function( e ){
        var elmTarget = e.target;

        Debug.log( e.type + elmTarget );

        if( TabNavigation_currentFocusedElement && TabNavigation_isFocusableElement( e.target, true ) ){
            Debug.log( e.type + ' C' );
            TabNavigation_windowBlurFlag = true;
            p_removeEventListener( TabNavigation_currentFocusedElement, 'blur', TabNavigation_onBlur );
            TabNavigation_currentFocusedElement.blur();
            TabNavigation_nextFocusableElement = elmTarget;
            e.stopPropagation();
            e.preventDefault();
            TabNavigation_setFocus();
        };
    };
    
    var TabNavigation_onFocusin = function( e ){
        var elmTarget = e.target;
        Debug.log( e.type + ' ' + elmTarget.type );

        if( TabNavigation_currentFocusedElement === elmTarget ){

        } else if( TabNavigation_nextFocusableElement ){
            if( elmTarget.tagName /* && elmTarget !== p_body */ ){
                if( elmTarget === TabNavigation_nextFocusableElement ){
                    // Debug.log( e.type + ' A' );
                    e.stopPropagation();
                    TabNavigation_setFocus( true );
                } else {
                    TabNavigation_windowBlurFlag = true;// e.stopPropagation();
                    p_removeEventListener( elmTarget, 'blur', TabNavigation_onBlur );
                    elmTarget.blur();
                    e.preventDefault();
                    Debug.log( e.type + ' B' + TabNavigation_nextFocusableElement );
                    TabNavigation_setFocus();
                };
            } else {
                // Debug.log( e.type + ' B' );
                TabNavigation_nextFocusableElement = undefined;
            };
        } else {
            // Debug.log( e.type + ' C' );
            if( TabNavigation_currentFocusedElement ){
                TabNavigation_windowBlurFlag = true;
                p_removeEventListener( TabNavigation_currentFocusedElement, 'blur', TabNavigation_onBlur );
                TabNavigation_currentFocusedElement.blur();
            };
            TabNavigation_currentFocusedElement = elmTarget;
            p_addEventListener( elmTarget, 'blur', TabNavigation_onBlur );
        };
    };

    var TabNavigation_onWindowBlur = function( e ){
        if( TabNavigation_windowBlurFlag ){
            Debug.log( e.type + ' window ' + e.target );
            e.stopPropagation();
            e.preventDefault();
            TabNavigation_windowBlurFlag = false;
            for( var k in e ){
            //    Debug.log( e.type + ' window ' + k + '=' + e[ k ] );
            };
        };
    };
    
    var TabNavigation_onBlur = function( e ){
        Debug.log( e.type + ' ' + e.target );
        var blurElement = e.target;

        if( TabNavigation_currentFocusedElement !== blurElement ){
            return;
        };
        p_removeEventListener( blurElement, 'blur', TabNavigation_onBlur );

        TabNavigation_findNextFocusableElement( blurElement );
    };

    var TabNavigation_findNextFocusableElement = function( blurElement ){
        var allElements = p_DOM_getElementsByTagName( p_body, '*' ),
            l = allElements.length, i = 0, found, elm;
    
        if( TabNavigation_direction && TabNavigation_keydownTime < ( + new Date ) + 98 ){
            //Debug.log( e.type + ' reverse() ' + TabNavigation_keydownTime + '<' + (( + new Date )  + 99) );
            allElements = allElements.reverse();
        } else {
            //Debug.log( e.type + ' no rev' + TabNavigation_keydownTime + '<' + (( + new Date )  + 99) );
        };

        TabNavigation_nextFocusableElement = undefined;

        // Debug.log( ' allElements:' + l );

        for( ; i < l ; ++i ){
            elm = allElements[ i ];
            if( !found ){
                if( blurElement === elm ){
                    Debug.log( ' found:' + i + p_DOM_getTagName( elm ) );
                    found = true;
                };
            } else if( TabNavigation_isFocusableElement( elm ) ){
                TabNavigation_nextFocusableElement = elm;
                p_setTimer( TabNavigation_setFocus, 0, 99 );
                return true;
            };
        };
    };

    var TabNavigation_isFocusableElement = function( elm, skipLink ){
        var TARGET = {
            'A'        : 0,
            'INPUT'    : 1,
            'OBJECT'   : 2,
            'EMBED'    : 2,
            'IFRAME'   : 2,
            'TEXTAREA' : 2,
            'BUTTON'   : 2,
            'SELECT'   : 2
        };

        switch( TARGET[ p_DOM_getTagName( elm ) ] ){
            case 0 :
                if( !skipLink && p_DOM_hasAttribute( elm, 'href' ) && checkTabIndex() && checkVisible() ){
                    Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                    return true;
                };
                break;
            case 1 :
                if( p_DOM_getAttribute( elm, 'type' ) !== 'hidden' && checkTabIndex() && checkEnabled() && checkVisible() ){
                    Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                    return true;
                };
                break;
            case 2 :
                if( checkTabIndex() && checkEnabled() && checkVisible() ){
                    Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                    return true;
                };
        };
        function checkTabIndex(){
            return p_DOM_getAttribute( elm, 'tab-index' ) !== '-1';
        };
        function checkEnabled(){
            return !p_DOM_hasAttribute( elm, 'disabled' );
        };
        function checkVisible(){
            return 0 <= elm.offsetHeight * elm.offsetWidth;
        };
    };

    var TabNavigation_setFocus = function( alreadyFocused ){
        if( TabNavigation_nextFocusableElement ){
            alreadyFocused === 0 && Debug.log( 'setFocus <= setTimeout' );
            if( !p_WebKit ){
                p_addEventListener( TabNavigation_nextFocusableElement, 'blur', TabNavigation_onBlur );
            };
            TabNavigation_currentFocusedElement = TabNavigation_nextFocusableElement;
            if( !alreadyFocused ){
                Debug.log( '***** .focus()' );
                TabNavigation_nextFocusableElement.focus();
            };
        };
        TabNavigation_nextFocusableElement = undefined;
    };
};