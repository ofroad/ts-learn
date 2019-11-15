//联合类型（Union Types）表示取值可以为多种类型中的一种
//联合类型使用 | 分隔每个类型

let myFavoriteNumber11: string | number;
myFavoriteNumber11 = 'seven';
myFavoriteNumber11 = 7;

//报错===允许 myFavoriteNumber11 的类型是 string 或者 number，但是不能是其他类型。
// myFavoriteNumber11 = true;