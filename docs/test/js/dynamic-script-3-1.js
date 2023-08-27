(function(){
    var elm = top.document.getElementById('output');

    elm.innerHTML = '<p>[3-1] Dynamic Script loaded. ' + (new Date()).toLocaleString() + '</p>' + elm.innerHTML;
})();