// 相同的dom，不同的javascript运行环境
// content_scripts只能访问content_scripts的js，不能访问web的js
// web的js只能访问web的js，不能访问content_scripts的js
// 通过下面的注入方式，可以让content_scripts访问到web的js

// test(); test is not a function (web js not ok)
// console.log($); (content_scripts js ok)
(function (source) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.textContent = '(' + source + ')();';
    document.head.appendChild(script);
    document.head.removeChild(script);
})(function () {
    // test(); (web js ok)
    // console.log($); $ is undefined (content_scripts js not ok)
    console.log('hello world');
});
