//枚举（Enum）类型用于取值被限定在一定范围内的场景，比如一周只能有七天，颜色限定为红绿蓝等
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
;
//手动赋值
var Days01;
(function (Days01) {
    Days01[Days01["Sun"] = 7] = "Sun";
    Days01[Days01["Mon"] = 1] = "Mon";
    Days01[Days01["Tue"] = 2] = "Tue";
    Days01[Days01["Wed"] = 3] = "Wed";
    Days01[Days01["Thu"] = 4] = "Thu";
    Days01[Days01["Fri"] = 5] = "Fri";
    Days01[Days01["Sat"] = 6] = "Sat";
})(Days01 || (Days01 = {}));
;
//手动赋值的枚举项可以不是数字，此时需要使用类型断言来让 tsc 无视类型检查 (编译出的 js 仍然是可用的)
var Days02;
(function (Days02) {
    Days02[Days02["Sun"] = 7] = "Sun";
    Days02[Days02["Mon"] = 8] = "Mon";
    Days02[Days02["Tue"] = 9] = "Tue";
    Days02[Days02["Wed"] = 10] = "Wed";
    Days02[Days02["Thu"] = 11] = "Thu";
    Days02[Days02["Fri"] = 12] = "Fri";
    Days02[Days02["Sat"] = "S"] = "Sat";
})(Days02 || (Days02 = {}));
;
//手动赋值的枚举项也可以为小数或负数，此时后续未手动赋值的项的递增步长仍为 1
var Days03;
(function (Days03) {
    Days03[Days03["Sun"] = 7] = "Sun";
    Days03[Days03["Mon"] = 1.5] = "Mon";
    Days03[Days03["Tue"] = 2.5] = "Tue";
    Days03[Days03["Wed"] = 3.5] = "Wed";
    Days03[Days03["Thu"] = 4.5] = "Thu";
    Days03[Days03["Fri"] = 5.5] = "Fri";
    Days03[Days03["Sat"] = 6.5] = "Sat";
})(Days03 || (Days03 = {}));
;
