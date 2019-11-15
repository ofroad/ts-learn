//前面提到，输入多余的（或者少于要求的）参数，是不允许的。那么如何定义可选的参数呢？
//与接口中的可选属性类似，我们用 ? 表示可选的参数
//可选参数必须接在必需参数后面,换句话说，可选参数后面不允许再出现必需参数了
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}
let tomcat = buildName('Tom', 'Cat');
let tom41 = buildName('Tom');


//在 ES6 中，我们允许给函数的参数添加默认值，TypeScript 会将添加了默认值的参数识别为可选参数
function buildName10(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat10 = buildName('Tom', 'Cat');
let tom10 = buildName('Tom');

//此时就不受「可选参数必须接在必需参数后面」的限制了
function buildName11(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}
let tomcat11 = buildName('Tom', 'Cat');
let cat11 = buildName(undefined, 'Cat');