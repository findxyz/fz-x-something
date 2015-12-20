(function (source) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = '(' + source + ')();';
    document.head.appendChild(script);
    document.head.removeChild(script);
})(function () {

    // testFun();

    function elementClick(e){
        var e = e || window.event;
        var target = e.target || e.srcElement;
        if(target.nodeName == "DIV"){
            console.log(target);
        }
    }

    var xSimpleHelper = {
        createElement: function (eName, eId, eHtml, eStyle, parentNode) {
            var parentNode = parentNode || document.body;
            var element = document.createElement(eName);
            element.setAttribute("id", eId);
            element.setAttribute("style", eStyle);
            element.innerHTML = eHtml;
            parentNode.appendChild(element);
        }
    };

    xSimpleHelper.createElement("div", "xDiv", "abc", "border: red dashed 1px; width: 100px;");

    xSimpleHelper.createElement("div", "xChildDiv", "def", "border: blue solid 1px; width: 100px;", document.getElementById("xDiv"));

    document.getElementById("xDiv").addEventListener("click", elementClick);
});
