//元组(Tuple)
//元组类型表示一个已知元素数量和类型的数组, 各元素的类型不必相同:
var list1 = [1, '2', 3]; // 错误, 数量不对, 元组中只声明有2个元素
var list2 = [1, 2]; // 错误, 第二个元素类型不对, 应该是字符串'2'
var list3 = ['1', 2]; // 错误, 2个元素的类型颠倒了
var list4 = [1, '2']; // 正确
//枚举(enum)
//枚举是ts中有而js中没有的类型, 编译后会被转化成对象, 默认元素的值从0开始, 如下面的Color.Red的值为0, 以此类推Color.Green为1, Color.Blue为2:
var Color;
(function (Color) {
    Color[Color["Red01"] = 0] = "Red01";
    Color[Color["Green01"] = 1] = "Green01";
    Color[Color["Blue01"] = 2] = "Blue01";
})(Color || (Color = {}));
// 等价
(function (Color) {
    Color[Color["Red02"] = 0] = "Red02";
    Color[Color["Green02"] = 1] = "Green02";
    Color[Color["Blue02"] = 2] = "Blue02";
})(Color || (Color = {}));
//当然也可以自己手动赋值:
var Color11;
(function (Color11) {
    Color11[Color11["Red03"] = 1] = "Red03";
    Color11[Color11["Green03"] = 2] = "Green03";
    Color11[Color11["Blue03"] = 4] = "Blue03";
})(Color11 || (Color11 = {}));
//并且我们可以反向通过值得到他的键值:
Color11[2] === 'Green03'; // true
