//类型推论
//正确的写法
// 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
//等价于  let myFavoriteNumber :string= 'seven';
let myFavoriteNumber001 = 'seven'; 


//错误的写法
// 第一句已经被推论为String类型了
let myFavoriteNumber002 = 'seven';
myFavoriteNumber002 = 7;

