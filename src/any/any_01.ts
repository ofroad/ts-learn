//任意值（Any）用来表示允许赋值为任意类型。

//如果是一个普通类型，在赋值过程中改变类型是不被允许的：
// let myFavoriteNumber: string = 'seven';
// myFavoriteNumber = 7;

//但如果是 any 类型，则允许被赋值为任意类型。
let myFavoriteNumber56465: any = 'seven';
myFavoriteNumber56465 = 7;