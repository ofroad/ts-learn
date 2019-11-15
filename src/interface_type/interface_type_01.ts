//1. interface和type相同点

//都可以用来描述一个对象或函数：
interface User01 {
    name: string
    age: number
}
  
type User02 = {
    name: string
    age: number
};

interface SetUser01 {
    (name: string, age: number): void;
}
type SetUser02 = (name: string, age: number)=> void;


//都允许拓展（extends）：
//interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说interface可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同

//interface extends interface
interface Name01 {
    name: string; 
}
interface User extends Name01 {
    age: number; 
}

//type extends type
type Name02 = { 
    name: string; 
}
type User03 = Name02 & { age: number  };

//interface extends type
type Name03 = { 
    name: string; 
}
interface User04 extends Name03 { 
    age: number; 
}

//type extends interface
interface Name04 { 
    name: string; 
}
type User05 = Name04 & { 
    age: number; 
}