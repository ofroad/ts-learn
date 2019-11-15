//联合类型
//正确的写法
// 联合类型（Union Types）表示取值可以为多种类型中的一种。
// 当你允许某个变量被赋值多种类型的时候,使用联合类型,管道符进行连接
let myFavoriteNumber003: string | number;
myFavoriteNumber003 = 'seven';
myFavoriteNumber003 = 7;

// 也可用于方法的参数定义, 都有toString方法,访问 string 和 number 的共有属性是没问题的
function getString(something: string | number): string {
    return something.toString();
}


//错误的写法
// number类型没有length属性.所以编译错误,因为我们只能访问此联合类型的所有类型里共有的属性或方法：
function getLength(something: string | number): number {
    return something.length;
}