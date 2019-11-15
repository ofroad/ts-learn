//前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
//与接口中的可选属性类似，我们用 ? 表示可选的参数
//可选参数必须接在必需参数后面,换句话说，可选参数后面不允许再出现必需参数了
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + ' ' + lastName;
    }
    else {
        return firstName;
    }
}
var tomcat = buildName('Tom', 'Cat');
var tom41 = buildName('Tom');
//在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数
function buildName10(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Cat'; }
    return firstName + ' ' + lastName;
}
var tomcat10 = buildName('Tom', 'Cat');
var tom10 = buildName('Tom');
//此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName11(firstName, lastName) {
    if (firstName === void 0) { firstName = 'Tom'; }
    return firstName + ' ' + lastName;
}
var tomcat11 = buildName('Tom', 'Cat');
var cat11 = buildName(undefined, 'Cat');
