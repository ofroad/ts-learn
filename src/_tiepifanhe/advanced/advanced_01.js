//在这种情况下,当我们给article赋值的时候, 如果任何一个字段没有被赋值或者字段对应的数据类型不对, ts都会提示错误, 这样就保证了我们写代码不会出现上述的小错误.
var article01 = {
    title: '为vue3学点typescript(2), 类型',
    count: 9999,
    content: 'xxx...',
    fromSite: 'baidu.com'
};
// 声明函数遵循接口定义
var core = function (a, b) {
    return [a, b];
};
// implements
var Doga01 = /** @class */ (function () {
    function Doga01() {
        this.head = 1;
        this.body = 1;
        this.foot = 1;
    }
    Doga01.prototype.eat = function (food) {
        console.log(food);
    };
    Doga01.prototype.say = function (word) {
        return word;
    };
    return Doga01;
}());
