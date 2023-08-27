(function(){
    var elm = document.getElementById('output');

    elm.innerHTML = '<p>[1] Dynamic Script loaded. ' + (new Date()).toLocaleString() + '</p>' + elm.innerHTML;
})();