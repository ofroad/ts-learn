//有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性
interface Person444 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom40: Person444 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom40.id = 9527;
