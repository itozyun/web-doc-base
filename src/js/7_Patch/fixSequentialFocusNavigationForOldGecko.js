if( p_Gecko && ua.conpare( p_engineVersion, '0.9.5' ) < 0 ){ /// Gecko <= 0.9.4
    p_usePatchOfTabFocusForGeckoLte094 = true;

    // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
    //   focus, blur をキャンセルできる, keydown を監視
    var TabNavigation_shiftKeyPressed;
    var TabNavigation_keydownTime;
    var TabNavigation_nextFocusableElement;
    var TabNavigation_currentFocusedElement;
    var TabNavigation_focusTimerID;

    p_listenLoadEvent(
        function(){
            p_addEventListener( document, 'keydown', TabNavigation_onkeydown );
            p_addEventListener( document, 'keyup', TabNavigation_onkeyup );
            p_listenFocusinEvent( p_body, TabNavigation_onFocusin );
            if( !p_GeckoLt09 ){
                p_addEventListener( window, 'blur', TabNavigation_onWindowBlur );
                p_addEventListener( p_body, 'click', TabNavigation_onBodyClick );
            };
        }
    );
    /*
    p_listenUnloadEvent(
        function(){
            p_removeEventListener( document, 'keydown', TabNavigation_onkeydown );
            p_removeEventListener( document, 'keyup', TabNavigation_onkeyup );
            p_unlistenFocusinEvent( p_body, TabNavigation_onFocusin );
            if( !p_GeckoLt09 ){
                p_removeEventListener( window, 'blur', TabNavigation_onWindowBlur );
                p_removeEventListener( p_body, 'click', TabNavigation_onBodyClick );
            };
        }
    ); */

    var TabNavigation_onkeydown = p_GeckoLt09
        ? function( e ){
            if( e.keyCode === 16 ){
                TabNavigation_shiftKeyPressed = true;
            } else if( e.keyCode === 9 ){
                // Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigation_shiftKeyPressed + ' time:' + TabNavigation_keydownTime );
                if( TabNavigation_currentFocusedElement ){
                    if( TabNavigation_findNextFocusableElement( TabNavigation_currentFocusedElement, true ) ){
                        TabNavigation_currentFocusedElement.blur && TabNavigation_currentFocusedElement.blur();
                        e.stopPropagation();
                        e.preventDefault();
                        p_setTimer( TabNavigation_setFocus );
                    };
                };
            };
        }
        : function( e ){
            if( e.keyCode === 16 ){
                TabNavigation_shiftKeyPressed = true;
            } else if( e.keyCode === 9 ){
                TabNavigation_keydownTime = p_getTimestamp();
                // Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigation_shiftKeyPressed + ' time:' + TabNavigation_keydownTime );
            };
        };

    var TabNavigation_onkeyup = function( e ){
        if( e.keyCode === 16 ){
            TabNavigation_shiftKeyPressed = false;
        };
    };

    var TabNavigation_onFocusin =
        p_GeckoLt09
            ? function( e ){
                // Debug.log( e.type + ' ' + e.target.tagName + '.' + (e.target.type || e.target.href || e.target.name || '') + ' ' + ( e.target.textContent || '' ) );
                if( !e.target.innerHTML ){
                    Debug.log( e.target.parentNode.innerHTML );
                };
                TabNavigation_currentFocusedElement = e.target; // TODO focusout
            }
            : function( e ){
                var elmTarget = e.target;
                // Debug.log( e.type + ' ' + elmTarget.tagName + '.' + (elmTarget.type || '') + ' ' + ( e.target.innerHTML || '' ) );

                if( TabNavigation_currentFocusedElement === elmTarget ){
                    TabNavigation_nextFocusableElement = undefined;
                } else if( TabNavigation_nextFocusableElement ){
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
        var now = p_getTimestamp(),
            body = p_body,
            previousOrNextSibling = 'nextSibling',
            firstOrLastChild = 'firstChild',
            elm, child;

        if( TabNavigation_shiftKeyPressed && ( skipCheckTime || ( now - 99 < TabNavigation_keydownTime && TabNavigation_keydownTime <= now ) ) ){
            //Debug.log( e.type + ' reverse() ' + TabNavigation_keydownTime + '<' + (p_getTimestamp()  + 99) );
            previousOrNextSibling = 'previousSibling';
            firstOrLastChild      = 'lastChild';
        // } else {
            //Debug.log( e.type + ' no rev' + TabNavigation_keydownTime + '<' + (p_getTimestamp()  + 99) );
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
                    if( /* p_DOM_getAttribute( elm, 'type' ) !== 'hidden' && */ checkTabIndex() && checkEnabled() && checkVisibility() ){
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
                    tabIndex = p_DOM_getAttribute( elm, 'tabindex' );
                    if( tabIndex && tabIndex !== '-1' && checkVisibility() ){
                        return true;
                    };
            };
        };

        function checkTabIndex(){
            return p_DOM_getAttribute( elm, 'tabindex' ) !== '-1';
        };
        function checkEnabled(){
            return !p_DOM_hasAttribute( elm, 'disabled' );
        };
        function checkVisibility(){
            return 0 < elm.offsetHeight * elm.offsetWidth;
        };
    };

    /**
     * @param {*=} alreadyFocused 
     */
    var TabNavigation_setFocus = function( alreadyFocused ){
        // Debug.log( 'setFocus()' + TabNavigation_focusTimerID + ' ' + TabNavigation_nextFocusableElement + ' ' + alreadyFocused );
        TabNavigation_focusTimerID = 0;
        if( TabNavigation_nextFocusableElement ){
            // alreadyFocused === 0 && // Debug.log( 'setFocus <= setTimeout' );
            if( !p_GeckoLt09 ){
                p_addEventListener( TabNavigation_nextFocusableElement, 'blur', TabNavigation_onBlur );
            };
            TabNavigation_currentFocusedElement = TabNavigation_nextFocusableElement;
            TabNavigation_nextFocusableElement = undefined;
            // Debug.log( 'setFocus()' + alreadyFocused );
            if( !alreadyFocused ){
                TabNavigation_currentFocusedElement.focus();
            };
        };
    };

    if( !p_GeckoLt09 ){
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
            if( e.target !== document ){ // Gecko 0.9 window がフォーカスを喪う場合、document
                // Debug.log( 'window.' + e.type + ' tgt=' + e.target + ' cancelable:' + e.cancelable );
            } else {
                TabNavigation_nextFocusableElement = undefined;
                // window から離れて戻ってきた場合、最後に focus していた要素に focusin+blur が起り focus になる
                // なので、window から離れた際に TabNavigation_currentFocusedElement を消さない
            };
        };

        var TabNavigation_onBlur = function( e ){
            // Debug.log( 'elm.' + e.type + ' ' + e.target );
            var blurElement = e.target;

            p_removeEventListener( blurElement, 'blur', TabNavigation_onBlur );

            if( TabNavigation_currentFocusedElement === blurElement ){
                if( TabNavigation_findNextFocusableElement( blurElement ) ){
                    // TabNavigation_nextFocusableElement = blurElement;
                    // Debug.log( 'Hit! ' + blurElement + ' ' + TabNavigation_nextFocusableElement + TabNavigation_focusTimerID );

                    if( !TabNavigation_focusTimerID ){ // timer がセットされている場合はそれを再利用
                        TabNavigation_focusTimerID = p_setTimer( TabNavigation_setFocus );
                    };
                };
            };
        };

        var TabNavigation_setBlur = function( elm ){
            p_removeEventListener( elm, 'blur', TabNavigation_onBlur );
            elm.blur();
        };
    };
};