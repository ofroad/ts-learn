//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};

//手动赋值
enum Days01 {Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat};

//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)
enum Days02 {Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S"};

//手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
enum Days03 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat};