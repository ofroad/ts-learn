//泛型与Any
//Ts 的特殊类型 Any 在具体使用时，可以代替任意类型，咋一看两者好像没啥区别，其实不然：
// 方法一：带有any参数的方法
function any_func(arg) {
    console.log(arg.length);
    return arg;
}
//方法一，打印了arg参数的length属性。因为any可以代替任意类型，所以该方法在传入参数不是数组或者带有length属性对象时，会抛出异常。
console.log(any_func(false));
