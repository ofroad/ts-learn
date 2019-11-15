//泛型与Any
//Ts 的特殊类型 Any 在具体使用时，可以代替任意类型，咋一看两者好像没啥区别，其实不然：
// 方法一：带有any参数的方法
function any_func(arg: any): any {
    console.log(arg.length);
		return arg;
}

//方法一，打印了arg参数的length属性。因为any可以代替任意类型，
console.log(any_func(123))

// 方法二：Array泛型方法
function array_func<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);
      return arg;
}
array_func("123")
//方法二，定义了参数类型是Array的泛型类型，肯定会有length属性，所以不会抛出异常

//泛型接口：
interface Generics_interface<T> {
    (arg: T): T;
}
 
function func_demo<T>(arg: T): T {
    return arg;
}
let func1: Generics_interface<number> = func_demo;
func1(123);     // 正确类型的实际参数
func1('123');   // 错误类型的实际参数
func1(true);    // 错误类型的实际参数