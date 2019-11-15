//可以通过编译的，不过事实上，上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的
let mySum20 = function (x: number, y: number): number {
    return x + y;
};

//如果需要我们手动给 mySum 添加类型，则应该是这样：
//在 TypeScript 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型
let mySum21: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};