//如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型
//以下代码虽然没有指定类型，但是会在编译的时候报错
var myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
//事实上，它等价于
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;
//如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
var myFavoriteNumber123;
myFavoriteNumber123 = 'seven';
myFavoriteNumber123 = 7;
