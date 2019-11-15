var tom = {
    name: 'Tom',
    age: 25
};
//定义的变量比接口少了一些属性是不允许的
var tom2 = {
    name: 'Tom'
};
//多一些属性也是不允许的
var tom3 = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
