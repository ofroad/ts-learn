//不同点
//type 可以而 interface 不行:
//(1)type 可以声明基本类型别名，联合类型，元组等类型
// 基本类型别名
type Name020 = string

// 联合类型
interface Dog {
    wong();
}
interface Cat {
    miao();
}

type Pet = Dog | Cat

// 具体定义数组每个位置的类型
type PetList = [Dog, Pet]

//(2)type 语句中还可以使用 typeof获取实例的 类型进行赋值
// 当你想获取一个变量的类型时，使用 typeof
let div = document.createElement('div');
type B = typeof div;

//(3)其他骚操作
type StringOrNumber = string | number;  
type Text020 = string | { text: string };  
type NameLookup = Dictionary020<string, Person>;  
type Callback<T> = (data: T) => void;  
type Pair<T> = [T, T];  
type Coordinates020 = Pair<number>;  
type Tree<T> = T | { left: Tree<T>, right: Tree<T> };


//interface可以而 type不行
//(1)interface 能够声明合并
interface User {
    name: string
    age: number
}
  
interface User {
    sex: string
}
  
/*
User 接口为 {
    name: string
    age: number
    sex: string 
}
*/

//(2)interface 有可选属性和只读属性
  


