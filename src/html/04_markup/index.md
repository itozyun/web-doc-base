# 4. マークアップを確認する

工事中です。

1. レイアウト
2. モジュール
3. 記事本文用マークアップ、デザイナーズ DTD
4. 省略
5. 後方互換性を確認した HTML5 タグ

## マークアップの基礎

[普通のHTMLの書き方](https://hail2u.net/documents/html-best-practices.html#put-white-spaces-around-comment-contents)

## inline.js
<div class='mspacer'>
    <form action='' class='commonForm' method='post'>
        <div class='commonForm-pair'>
            <label for='cf_msg'>web-doc-base</label>
            <span class='commonForm-wrap'>
                <textarea cols="80" rows="10" id="what-browser-am-i" spellcheck="false"></textarea>
            </span>
        </div>
    </form>
</div>

<h2>連絡フォーム</h2>
<div class='mspacer'>
    <form action='https://www.blogger.com/contact-form.do' class='commonForm' method='post'>
        <input name='blogID' type='hidden' value='5003761485377366537'>
        <div class='commonForm-pair'>
            <label for='cf_name'>名前</label>
            <span class='commonForm-wrap'>
                <input autocapitalize='off' id='cf_name' name='name' placeholder='名前' type='text'>
            </span>
        </div>
        <div class='commonForm-pair'>
            <label for='cf_email'>メール<b>*</b></label>
            <span class='commonForm-wrap'>
                <input autocapitalize='off' id='cf_email' name='email' placeholder='yourmail@example.com' required='required' type='email'>
            </span>
        </div>
        <div class='commonForm-pair'>
            <label for='cf_msg'>メッセージ<b>*</b></label>
            <span class='commonForm-wrap'>
                <textarea col='30' id='cf_msg' name='message' placeholder='メッセージ' required='required' rows='5'></textarea>
            </span>
        </div>
        <div class='commonForm-send'><input class='btn' type='submit' value='送信'></div>
    </form>
</div>

<h2>メールで更新情報を購読</h2>
<div class='mspacer'>
    <form action='https://feedburner.google.com/fb/a/mailverify' class='commonForm'
        method='post'
        onsubmit='window.open("https://feedburner.google.com/fb/a/mailverify?uri=outcloud", "popupwindow", "scrollbars=yes,width=550,height=520"); return true' target='popupwindow'>
        <div class='commonForm-pair'>
            <label for='dl_email'>Email<b>*</b></label>
            <span class='commonForm-wrap'>
                <input autocapitalize='off' id='dl_email' name='email' placeholder='yourmail@example.com' required='required' type='text'>
            </span>
        </div>
        <div class='commonForm-send'>
            <input class='btn' type='submit' value='登録'>
        </div>
        <input name='uri' type='hidden' value='outcloud'>
        <input name='loc' type='hidden' value='ja_JP'>
    </form>
</div>


