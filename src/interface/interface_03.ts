//有时候我们希望一个接口允许有任意的属性，可以使用如下方式：
//使用 [propName: string] 定义了任意属性取 string 类型的值。
interface Person222 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom31: Person222 = {
    name: 'Tom',
    gender: 'male'
};


//需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
interface Person333 {
    name: string;
    age?: number;
    [propName: string]: string;
}
let tom32: Person333 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};