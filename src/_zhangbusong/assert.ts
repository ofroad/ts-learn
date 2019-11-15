//可以用来手动指定一个值的类型
//(1)<类型> 值
function getLength(x:number|string):number{
    if((<string>x).length) {
        return (<string>x).length
    } else {
        return x.toString().length
    }
}

//(2)值 as 类型
function getLength(x:number|string):number{
    if((x as string).length){
        return (x as string).length
    } else {
        return x.toString().length
    }
}


//错误的做法
// 只能访问此联合类型的所有类型里共有的属性或方法
function getLength(something: string | number): number { 
    return something.length;
}

//类型断言并非是类型转换，断言一个联合类型中不存在的类型会报错！
function wrong(x:number|string):boolean{
    return <boolean>x    //  报错！
}