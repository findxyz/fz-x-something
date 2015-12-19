(function (source) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = '(' + source + ')();';
    document.head.appendChild(script);
    document.head.removeChild(script);
})(function () {
    console.log('hello world');
});
