(function(){
    var elm = document.getElementById('output');

    elm.innerHTML = '<p>Dynamic Script loaded. ' + (new Date()).toLocaleString() + '</p>' + elm.innerHTML;
})();