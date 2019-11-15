//在 ts 中，编译器并不知道 $ 或 jQuery 是什么东西
jQuery('#foo');

//这时，我们需要使用 declare var 来定义它的类型
declare var jQuery: (selector: string) => any;

jQuery('#foo');

//通常我们会把声明语句放到一个单独的文件（jQuery.d.ts）中