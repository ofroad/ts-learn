//有时我们希望不要完全匹配一个形状，那么可以用可选属性
interface Person111 {
    name: string;
    age?: number;
}

let tom1: Person111 = {
    name: 'Tom'
};

//这时仍然不允许添加未定义的属性
let tom21: Person111 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};