/**
 * Opera 7~12 はタブフォーカスの挙動が異なる為、tabindex を動的に書き換えて対応する。
 *
 * 2011年7月現在で、Internet Explorer と Opera は、デフォルトではフォーカス可能でない要素に関して、負の整数を指定した tab-index コンテンツ属性に対応 
 * https://books.google.co.jp/books?id=ZSsfUNa2nMgC&pg=PA562&lpg=PA562&dq=Opera+tabindex&source=bl&ots=TbzzkHtakR&sig=ACfU3U1fIWCpEwgJrRBLfY6DPdvLFwK12w&hl=ja&sa=X&ved=2ahUKEwjWxO6EsNrzAhXIMN4KHazmBzkQ6AF6BAgXEAM#v=onepage&q=Opera%20tabindex&f=false
 *
 * C15: CSSを用いて、ユーザーインタフェースコンポーネントがフォーカスを受けとったときの表示を変更する
 *   https://waic.jp/docs/NOTE-WCAG20-TECHS-20120103/C15.html
 * 
 * このパッチでも Opera 7.54 では1つ目以降の a[href] にタブフォーカスしない! (2024/04/03)
 */
p_Presto && p_listenLoadEvent(
    function(){
        var anchorList = p_DOM_getElementsByTagName( p_body, 'a' ),
            l = anchorList.length, i = 0, elm;

        for( ; i < l ; ++i ){
            elm = anchorList[ i ];
            if( p_DOM_getAttribute( elm, 'tabindex', true ) === '-1' ){
                p_DOM_removeAttribute( elm, 'tabindex', true );
            } else if( p_DOM_hasAttribute( elm, 'href', true ) && !p_DOM_hasAttribute( elm, 'tabindex', true ) ){
                p_DOM_setAttribute( elm, 'tabindex', p_IMPLICITLY_FOCUSABLE, true );
                // elm.innerText = elm.getAttribute( 'href' ); <= Opera 7.54 でもタブフォーカスが有効に…
            };
        };

        var inputList = p_DOM_getElementsByTagName( p_body, 'input' );

        for( i = 0, l = inputList.length; i < l ; ++i ){
            elm = inputList[ i ];
            if( p_DOM_getAttribute( elm, 'type' ) === 'hidden' ){
                p_DOM_removeAttribute( elm, 'tabindex', true ); // Remove "-1"
            };
        };
    }
);

if( 7.5 <= p_Presto && p_Presto < 8 ){
    // Gecko <=0.9.4 は階層の離れた要素にフォーカスしない!
    //   focus, blur をキャンセルできる, keydown を監視
    var TabNavigationPresto75_shiftKeyPressed;
    var TabNavigationPresto75_keydownTime;
    var TabNavigationPresto75_nextFocusableElement;
    var TabNavigationPresto75_currentFocusedElement = document.activeElement;
    var TabNavigationPresto75_focusTimerID;

    p_listenLoadEvent(
        function(){
            p_addEventListener( document, 'keydown', TabNavigationPresto75_onkeydown );
            p_addEventListener( document, 'keyup', TabNavigationPresto75_onkeyup );
            p_listenFocusinEvent( p_body, TabNavigationPresto75_onFocusin );

            p_addEventListener( window, 'blur', TabNavigationPresto75_onWindowBlur );
            p_addEventListener( p_body, 'click', TabNavigationPresto75_onBodyClick );
        }
    );

    var TabNavigationPresto75_onkeydown = function( e ){
            if( e.keyCode === 16 ){
                TabNavigationPresto75_shiftKeyPressed = true;
            } else if( e.keyCode === 9 ){
                TabNavigationPresto75_keydownTime = p_getTimestamp();
                // Debug.log( e.type + ':TAB' + e.shiftKey + '/' + TabNavigationPresto75_shiftKeyPressed + ' time:' + TabNavigationPresto75_keydownTime );
            };
        };

    var TabNavigationPresto75_onkeyup = function( e ){
        if( e.keyCode === 16 ){
            TabNavigationPresto75_shiftKeyPressed = false;
        };
    };

    var TabNavigationPresto75_onFocusin =
            function( e ){
                var elmTarget = e.target;
                // Debug.log( e.type + ' ' + elmTarget.tagName + '.' + (elmTarget.type || '') + ' ' + ( e.target.innerHTML || '' ) );

                if( TabNavigationPresto75_currentFocusedElement === elmTarget ){
                    TabNavigationPresto75_nextFocusableElement = undefined;
                } else if( TabNavigationPresto75_findNextFocusableElement( TabNavigationPresto75_currentFocusedElement, true ) ){
                    if( elmTarget === TabNavigationPresto75_nextFocusableElement ){
                        // // Debug.log( e.type '[a]' + elmTarget );
                        // e.stopPropagation();
                    } else {
                        // alert( '!' )
                        e.stopPropagation();
                        e.preventDefault();
                        elmTarget.blur();
                        TabNavigationPresto75_nextFocusableElement.focus();
                        TabNavigationPresto75_setFocus();
                    };
                } else {
                    TabNavigationPresto75_currentFocusedElement = elmTarget;
                };
            };

    /**
     * @param {!Element} currentElement 
     * @param {boolean=} skipCheckTime 
     * @return {boolean|undefined}
     */
    var TabNavigationPresto75_findNextFocusableElement = function( currentElement, skipCheckTime ){
        var now = p_getTimestamp(),
            body = p_body,
            previousOrNextSibling = 'nextSibling',
            firstOrLastChild = 'firstChild',
            elm, child;

        if( TabNavigationPresto75_shiftKeyPressed && ( skipCheckTime || ( now - 99 < TabNavigationPresto75_keydownTime && TabNavigationPresto75_keydownTime <= now ) ) ){
            //Debug.log( e.type + ' reverse() ' + TabNavigationPresto75_keydownTime + '<' + (p_getTimestamp()  + 99) );
            previousOrNextSibling = 'previousSibling';
            firstOrLastChild      = 'lastChild';
        // } else {
            //Debug.log( e.type + ' no rev' + TabNavigationPresto75_keydownTime + '<' + (p_getTimestamp()  + 99) );
        };

        TabNavigationPresto75_nextFocusableElement = undefined;

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
                    if( TabNavigationPresto75_isFocusableElement( elm ) ){
                        TabNavigationPresto75_nextFocusableElement = elm;
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
    var TabNavigationPresto75_isFocusableElement = function( elm, skipLink ){
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
                    tabIndex = p_DOM_getAttribute( elm, 'tabindex' );
                    if( tabIndex && tabIndex !== '-1' && checkVisibility() ){
                        return true;
                    };
            };
        };

        function checkTabIndex(){
            return true || p_DOM_getAttribute( elm, 'tabindex' ) !== '-1';
        };
        function checkEnabled(){
            return true || !p_DOM_hasAttribute( elm, 'disabled' );
        };
        function checkVisibility(){
            return 0 < elm.offsetHeight * elm.offsetWidth;
        };
    };

    /**
     * @param {*=} alreadyFocused 
     */
    var TabNavigationPresto75_setFocus = function( alreadyFocused ){
        // Debug.log( 'setFocus()' + TabNavigationPresto75_focusTimerID + ' ' + TabNavigationPresto75_nextFocusableElement + ' ' + alreadyFocused );
        TabNavigationPresto75_focusTimerID = 0;
        if( TabNavigationPresto75_nextFocusableElement ){
            // alreadyFocused === 0 && // Debug.log( 'setFocus <= setTimeout' );

            // p_addEventListener( TabNavigationPresto75_nextFocusableElement, 'blur', TabNavigationPresto75_onBlur );

            TabNavigationPresto75_currentFocusedElement = TabNavigationPresto75_nextFocusableElement;
            TabNavigationPresto75_nextFocusableElement = undefined;
            // Debug.log( 'setFocus()' + alreadyFocused );
            if( !alreadyFocused ){
                TabNavigationPresto75_currentFocusedElement.focus();
            };
        };
    };

    var TabNavigationPresto75_onBodyClick = function( e ){
        var elmTarget = e.target;

        // Debug.log( e.type + elmTarget );
        //alert( 'click' )
        if( TabNavigationPresto75_isFocusableElement( elmTarget, true ) ){
            // Debug.log( e.type + ' C' );
            //alert( 'click' )
            TabNavigationPresto75_nextFocusableElement = elmTarget;
            TabNavigationPresto75_setFocus( true );
        };
    };

    var TabNavigationPresto75_onWindowBlur = function( e ){
        if( e.target !== document ){ // Gecko 0.9 window がフォーカスを喪う場合、document
            // Debug.log( 'window.' + e.type + ' tgt=' + e.target + ' cancelable:' + e.cancelable );
        } else {
            TabNavigationPresto75_nextFocusableElement = undefined;
            // window から離れて戻ってきた場合、最後に focus していた要素に focusin+blur が起り focus になる
            // なので、window から離れた際に TabNavigationPresto75_currentFocusedElement を消さない
        };
    };

    var TabNavigationPresto75_onBlur = function( e ){
        // Debug.log( 'elm.' + e.type + ' ' + e.target );
        var blurElement = e.target;

        p_removeEventListener( blurElement, 'blur', TabNavigationPresto75_onBlur );

        if( TabNavigationPresto75_currentFocusedElement === blurElement ){
            if( TabNavigationPresto75_findNextFocusableElement( blurElement ) ){
                // TabNavigationPresto75_nextFocusableElement && alert( TabNavigationPresto75_nextFocusableElement.href )
                // TabNavigationPresto75_nextFocusableElement = blurElement;
                // Debug.log( 'Hit! ' + blurElement + ' ' + TabNavigationPresto75_nextFocusableElement + TabNavigationPresto75_focusTimerID );

                if( !TabNavigationPresto75_focusTimerID ){ // timer がセットされている場合はそれを再利用
                    TabNavigationPresto75_focusTimerID = p_setTimer( TabNavigationPresto75_setFocus );
                };

                e.preventDefault();
                e.stopPropagation();
                TabNavigationPresto75_setFocus();
            };
        };
    };

    var TabNavigationPresto75_setBlur = function( elm ){
        p_removeEventListener( elm, 'blur', TabNavigationPresto75_onBlur );
        elm.blur();
    };
};