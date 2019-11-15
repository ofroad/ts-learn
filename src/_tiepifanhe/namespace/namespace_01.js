//如果你发现自己写的功能(函数/类/接口等...)越来越多, 你想对他们进行分组管理就可以用命名空间, 下面先用"类"举例:
var Tools;
(function (Tools) {
    var TIMEOUT = 100;
    var Ftp = /** @class */ (function () {
        function Ftp() {
            setTimeout(function () {
                console.log('Ftp');
            }, TIMEOUT);
        }
        return Ftp;
    }());
    Tools.Ftp = Ftp;
    var Http = /** @class */ (function () {
        function Http() {
            console.log('Http');
        }
        return Http;
    }());
    Tools.Http = Http;
    function parseURL() {
        console.log('parseURL');
    }
    Tools.parseURL = parseURL;
})(Tools || (Tools = {}));
