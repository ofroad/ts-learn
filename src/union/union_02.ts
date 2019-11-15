//当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

//length 不是 string 和 number 的共有属性，所以会报错
// function getLength(something: string | number): number {
//     return something.length;
// }


//访问 string 和 number 的共有属性是没问题的
function getString(something: string | number): string {
    return something.toString();
}


//联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：
let myFavoriteNumber12: string | number;
myFavoriteNumber12 = 'seven';
console.log(myFavoriteNumber12.length); // 5

myFavoriteNumber12 = 7;
console.log(myFavoriteNumber12.length); // 编译时报错