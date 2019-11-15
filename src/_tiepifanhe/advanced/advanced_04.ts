//自动类型推断(不用你标类型了,ts自己猜)
//下面不需要标注类型, ts可以根据你写的代码来自动推断出类型:

//(1)赋值字面量给变量
let n040 = 1; // ts会自动推断出n是number类型
n040+=3 // 不报错,因为已知类型

let arr1 = []; // 类型为: any[]
arr1.push(1,'2',{a:3}); 

let arr = [1]; // 内部要有数字, 才能推断出正确类型
arr.push(2);
//报错
arr.push("2");

//(2)自动阅读if条件判断
let n041: number|null = 0.5 < Math.random() ? 1:null;
if(null !== n041){
    n041+=3 // ts知道现在n不是null是number
}

//(3)浏览器自带api
document.ontouchstart = ev=>{ // 能自动推断出ev为TouchEvent
    console.log(ev.touches);  // 不报错, TouchEvent上有touches属性
}

//(4)typeof就是js中的typeof, ts会根据你代码中出现的typeof来自动推断类型:
let n042:number|string = 0.5 < Math.random()? 1:'1';

// 如果没有typeof, n*=2会报错, 提示没法推断出当前是number类型, 不能进行乘法运算
if('number' === typeof n042) {
    n042*= 2;
} else  {
    n042= '2';
}

//ts会根据你代码中出现的instanceof来自动推断类型:
let obj040 = 0.5 < Math.random() ? new String(1) : new Array(1);
if(obj040 instanceof String){
    // obj推断为String类型
    obj040+= '123'
} else {
    // obj为any[]类型
    obj040.push("123");
}






