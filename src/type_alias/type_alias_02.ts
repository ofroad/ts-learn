//字符串字面量类型用来约束取值只能是某几个字符串中的一个。
type EventNames = 'click' | 'scroll' | 'mousemove';
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello'), 'scroll');  // 没问题
handleEvent(document.getElementById('world'), 'dbclick'); // 报错，event 不能为 'dbclick'

/**
 * 使用 type 定了一个字符串字面量类型 EventNames，它只能取三种字符串中的一种
 * 类型别名与字符串字面量类型都是使用 type 进行定义
*/