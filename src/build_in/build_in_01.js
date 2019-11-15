//ECMAScript 标准提供的内置对象有：Boolean、Error、Date、RegExp 等。
var b = new Boolean(1);
var e = new Error('Error occurred');
var d = new Date();
var r = /[a-z]/;
//DOM 和 BOM 提供的内置对象有：Document、HTMLElement、Event、NodeList 等
var body = document.body;
var allDiv = document.querySelectorAll('div');
document.addEventListener('click', function (e) {
    // Do something
});
