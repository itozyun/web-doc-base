if( p_Gecko && ua.conpare( p_engineVersion, '0.9.5' ) < 0 ){ /// Gecko <= 0.9.4
    // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
    //   focus, blur をキャンセルできる, keydown を監視
    // Windows + Safari 3~5.1 はフォーム部品以外にフォーカスしない, 間違い! ユーザー設定による!
    //   keydown をキャンセルする
    var TabNavigation_shiftKeyPressed;
    var TabNavigation_keydownTime;
    var TabNavigation_nextFocusableElement;
    var TabNavigation_currentFocusedElement;
    // var TabNavigation_windowBlurFlag;
    var TabNavigation_focusTimerID;

    p_listenLoadEvent(
        function(){
            p_addEventListener( document, 'keydown', TabNavigation_onkeydown );
            p_listenFocusinEvent( p_body, TabNavigation_onFocusin );
            if( p_Gecko ){
                p_addEventListener( window, 'blur', TabNavigation_onWindowBlur ); // Gecko 0.9.3 で必要を確認
                p_addEventListener( p_body, 'click', TabNavigation_onBodyClick );
                p_addEventListener( document, 'keyup', TabNavigation_onkeyup );
            };
        }
    );
    p_listenUnloadEvent(
        function(){
            p_removeEventListener( document, 'keydown', TabNavigation_onkeydown );
            p_unlistenFocusinEvent( p_body, TabNavigation_onFocusin );
            if( p_Gecko ){
                p_removeEventListener( window, 'blur', TabNavigation_onWindowBlur );
                p_removeEventListener( p_body, 'click', TabNavigation_onBodyClick );
                p_removeEventListener( document, 'keyup', TabNavigation_onkeyup );
            };
        }
    );

/**----------------------------------------------------------------------------
 *  common
 */
    var TabNavigation_onkeydown = p_WebKit
        ? function( e ){
            if( e.keyCode === 9 ){
                TabNavigation_shiftKeyPressed = e.shiftKey;
                // Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigation_shiftKeyPressed + ' time:' + TabNavigation_keydownTime );
                if( TabNavigation_currentFocusedElement ){
                    if( TabNavigation_findNextFocusableElement( TabNavigation_currentFocusedElement, true ) ){
                        TabNavigation_currentFocusedElement = undefined;
                        // TabNavigation_windowBlurFlag = true;
                        // Debug.log( e.type + ' cancelable=' + e.cancelable );
                        e.stopPropagation();
                        e.preventDefault();
                        TabNavigation_setFocus();
                    };
                };
            };
        }
        : function( e ){
            if( e.keyCode === 16 ){
                TabNavigation_shiftKeyPressed = true;
            } else if( e.keyCode === 9 ){
                TabNavigation_keydownTime = + new Date;
                // Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigation_shiftKeyPressed + ' time:' + TabNavigation_keydownTime );
            };
        };

    var TabNavigation_onFocusin =
        p_WebKit
            ? function( e ){
                TabNavigation_currentFocusedElement = e.target; // TODO focusout
            }
            : function( e ){
                var elmTarget = e.target;
                // Debug.log( e.type + ' ' + elmTarget.type );

                if( TabNavigation_currentFocusedElement === elmTarget ){
                    /* if( TabNavigation_focusTimerID ){
                        TabNavigation_focusTimerID = p_clearTimer( TabNavigation_focusTimerID );
                    }; */
                    TabNavigation_nextFocusableElement = undefined;
                } else if( TabNavigation_nextFocusableElement ){
                    // if( elmTarget.tagName /* && elmTarget !== p_body */ ){ // HTMLElement かチェック
                        if( elmTarget === TabNavigation_nextFocusableElement ){
                            // // Debug.log( e.type '[a]' + elmTarget );
                            e.stopPropagation();
                            TabNavigation_setFocus( true );
                        } else {
                            // Debug.log( e.type + '[b]' + elmTarget );
                            elmTarget.blur && TabNavigation_setBlur( elmTarget );
                            e.preventDefault();
                            TabNavigation_setFocus();
                        };
                    // } else {
                        /* if( TabNavigation_focusTimerID ){
                            TabNavigation_focusTimerID = p_clearTimer( TabNavigation_focusTimerID );
                        }; */
                        /* TabNavigation_nextFocusableElement = undefined;
                        var elm = TabNavigation_currentFocusedElement;
                        if( elm ){
                            TabNavigation_currentFocusedElement = undefined;
                            TabNavigation_setBlur( elm );
                        };
                        Debug.log( e.type + '[c]' + elmTarget ); */
                        // TabNavigation_nextFocusableElement = undefined;
                    // };
                } else {
                    // Debug.log( e.type + '[d]' + elmTarget );
                    var elm = TabNavigation_currentFocusedElement;
                    if( elm ){
                        TabNavigation_currentFocusedElement = undefined
                        TabNavigation_setBlur( elm );
                    };
                    TabNavigation_nextFocusableElement = elmTarget;
                    TabNavigation_setFocus( true );
                };
            };

    /**
     * @param {!Element} currentElement 
     * @param {boolean=} skipCheckTime 
     * @return {boolean|undefined}
     */
    var TabNavigation_findNextFocusableElement = function( currentElement, skipCheckTime ){
        var now = !skipCheckTime && ( + new Date ),
            body = p_body,
            previousOrNextSibling = 'nextSibling',
            firstOrLastChild = 'firstChild',
            elm, child;

        if( TabNavigation_shiftKeyPressed && ( skipCheckTime || ( now - 99 ) < TabNavigation_keydownTime && TabNavigation_keydownTime <= now ) ){
            //Debug.log( e.type + ' reverse() ' + TabNavigation_keydownTime + '<' + (( + new Date )  + 99) );
            previousOrNextSibling = 'previousSibling';
            firstOrLastChild      = 'lastChild';
        // } else {
            //Debug.log( e.type + ' no rev' + TabNavigation_keydownTime + '<' + (( + new Date )  + 99) );
        };

        TabNavigation_nextFocusableElement = undefined;

        // Debug.log( ' allElements:' + l );

        while( currentElement !== body ){
            if( !child ){
                elm = currentElement[ previousOrNextSibling ];
            } else {
                elm = currentElement;
                child = false;
            };
            if( elm ){
                if( elm.nodeType === 1 ){
                    if( TabNavigation_isFocusableElement( elm ) ){
                        // Debug.log( 'Hit! ' + elm );
                        TabNavigation_nextFocusableElement = elm;
                        return true;
                    } else {
                        // Debug.log( '@' + elm.tagName + ' childNodes:' + elm.childNodes.length );
                        child = elm[ firstOrLastChild ];
                        currentElement = child || elm;
                    };
                    //if( currentElement !== elm ){
                        // Debug.log( '=> ' + currentElement.tagName + ' #' + currentElement.id + '.' + currentElement.clasName );
                    //} else {
                        // Debug.log( '... ' + currentElement.tagName + ' #' + currentElement.id + '.' + currentElement.clasName );
                    //};
                } else {
                    currentElement = elm;
                    // Debug.log( '... ' + elm.nodeType );
                };
            } else {
                // Debug.log( ' <=' + currentElement.tagName );
                currentElement = currentElement.parentNode;
            };
        };
    };

    /**
     * @param {!Element} elm 
     * @param {boolean=} skipLink 
     * @returns {boolean|undefined}
     */
    var TabNavigation_isFocusableElement = function( elm, skipLink ){
        if( elm.focus ){
            var TARGET = {
                'A'        : skipLink ? 0 : 1,
                'INPUT'    : 2,
                'OBJECT'   : 3,
                'EMBED'    : 3,
                'IFRAME'   : 3,
                'TEXTAREA' : 3,
                'BUTTON'   : 3,
                'SELECT'   : 3
            }, tabIndex;

            switch( TARGET[ p_DOM_getTagName( elm ) ] ){
                case 1 :
                    if( p_DOM_hasAttribute( elm, 'href' ) && checkTabIndex() && checkVisibility() ){
                        // Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                        return true;
                    };
                    break;
                case 2 :
                    if( p_DOM_getAttribute( elm, 'type' ) !== 'hidden' && checkTabIndex() && checkEnabled() && checkVisibility() ){
                        // Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                        return true;
                    };
                    break;
                case 3 :
                    if( checkTabIndex() && checkEnabled() && checkVisibility() ){
                        // Debug.log( 'Next : ' + p_DOM_getTagName( elm ) );
                        return true;
                    };
                    break;
                default :
                    tabIndex = p_DOM_getAttribute( elm, 'tab-index' );
                    if( tabIndex && tabIndex !== '-1' && checkVisibility() ){
                        return true;
                    };
            };
        };

        function checkTabIndex(){
            return p_DOM_getAttribute( elm, 'tab-index' ) !== '-1';
        };
        function checkEnabled(){
            return !p_DOM_hasAttribute( elm, 'disabled' );
        };
        function checkVisibility(){
            return 0 <= elm.offsetHeight * elm.offsetWidth;
        };
    };

    /**
     * @param {*=} alreadyFocused 
     */
    var TabNavigation_setFocus = function( alreadyFocused ){
        if( p_Gecko ){
            TabNavigation_focusTimerID = 0;
        };
        if( TabNavigation_nextFocusableElement ){
            // alreadyFocused === 0 && // Debug.log( 'setFocus <= setTimeout' );
            if( !p_WebKit ){
                p_addEventListener( TabNavigation_nextFocusableElement, 'blur', TabNavigation_onBlur );
            };
            TabNavigation_currentFocusedElement = TabNavigation_nextFocusableElement;
            TabNavigation_nextFocusableElement = undefined;
            if( !alreadyFocused ){
                // Debug.log( '***** .focus()' );
                TabNavigation_currentFocusedElement.focus();
            };
        };
    };

/**----------------------------------------------------------------------------
 *  for Gecko <=0.9.4
 */
    if( p_Gecko ){
        var TabNavigation_onkeyup = function( e ){
            if( e.keyCode === 16 ){
                TabNavigation_shiftKeyPressed = false;
            };
        };

        var TabNavigation_onBodyClick = function( e ){
            var elmTarget = e.target;

            // Debug.log( e.type + elmTarget );

            if( TabNavigation_currentFocusedElement && TabNavigation_isFocusableElement( elmTarget, true ) ){
                // Debug.log( e.type + ' C' );
                var elm = TabNavigation_currentFocusedElement;
                TabNavigation_currentFocusedElement = undefined;
                TabNavigation_setBlur( elm );
                TabNavigation_nextFocusableElement = elmTarget;
                e.stopPropagation();
                e.preventDefault();
                TabNavigation_setFocus();
            };
        };

        var TabNavigation_onWindowBlur = function( e ){
            if( /* TabNavigation_windowBlurFlag && */ e.target !== document ){ // Gecko 0.9 window がフォーカスを喪う場合、document
                // Debug.log( 'window.' + e.type + ' tgt=' + e.target );
                // e.stopPropagation();
                // e.preventDefault();
                // TabNavigation_windowBlurFlag = false;
            } else {
                // Debug.log( 'window.' + e.type + ' skipped!' + e.target );
                /* if( TabNavigation_focusTimerID ){
                    TabNavigation_focusTimerID = p_clearTimer( TabNavigation_focusTimerID );
                }; */
                TabNavigation_nextFocusableElement = undefined;
                // window から離れて戻ってきた場合、最後に focus していた要素に focusin+blur が起り focus になる
                // なので、window から離れた際に TabNavigation_currentFocusedElement を消さない
                /*
                var elm = TabNavigation_currentFocusedElement;
                if( elm ){
                    Debug.log( 'blur ' + elm );
                    TabNavigation_currentFocusedElement = undefined;
                    TabNavigation_setBlur( elm );
                };*/
            };
        };
        
        var TabNavigation_onBlur = function( e ){
            // Debug.log( 'elm.' + e.type + ' ' + e.target );
            var blurElement = e.target;

            p_removeEventListener( blurElement, 'blur', TabNavigation_onBlur );

            if( TabNavigation_currentFocusedElement === blurElement ){
                TabNavigation_currentFocusedElement = undefined;
                if( TabNavigation_findNextFocusableElement( blurElement ) ){
                    if( !TabNavigation_focusTimerID ){ // timer がセットされている場合はそれを再利用
                        TabNavigation_focusTimerID = p_setTimer( TabNavigation_setFocus );
                    };
                    // TabNavigation_setFocus(); ここで呼んでも focus しない
                };
            };
        };

        var TabNavigation_setBlur = function( elm ){
            // TabNavigation_windowBlurFlag = true;
            p_removeEventListener( elm, 'blur', TabNavigation_onBlur );
            elm.blur();
        };
    };
};