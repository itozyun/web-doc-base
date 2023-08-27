(function(){
    var elm = document.getElementById('output');

    elm.innerHTML = '<p>[2] Dynamic Script loaded. ' + (new Date()).toLocaleString() + '</p>' + elm.innerHTML;
})();