//对象的类型——接口
//正确的写法
// 赋值的时候，变量的形状必须和接口的形状保持一致(不能多也不能少,类型还必须一致)
interface Person {
    name: string;
    age: number;
}

let tomx: Person = {
    name: 'Tom',
    age: 25
};

interface IUserInfo {
    age : any;//定义一个任何变量的 age.
    userName :string;//定义一个 username.
}
function getUserInfo(user : IUserInfo): string {
    return user.age+"======"+user.userName;	
}


//可选属性
interface Person001 {
    name: string;
    age?: number; // 表示这个属性可有可无
}

let tomc: Person001 = {
    name: 'Tom'
};


//任意属性
//希望一个接口允许有任意的属性，可以使用如下方式：旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
interface Person002 {
    name: string;
    age?: number;
    [propName: string]: any;
}

let tomz: Person002 = {
    name: 'Tom',
    gender: 'male' // 可以加其他的属性
};


//只读属性
interface Person003 {
    readonly id: number; // 
    name: string;
    age?: number;
    [propName: string]: any;
}

let toms: Person003 = {
    id: 89757, // 只读
    name: 'Tom',
    gender: 'male'
};





//错误的写法
// 一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集
//此例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。
interface Person004 {
    name: string;
    age?: number;
    [propName: string]: string;
}

interface Person005 {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tomdsx: Person005 = {
    id:5423,
    name: 'Tom',
    gender: 'male'
};

tomdsx.id = 89757; // 不能被二次赋值❌



