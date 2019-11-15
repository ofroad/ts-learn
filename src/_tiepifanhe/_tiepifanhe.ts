//类型分为基础类型和高级类型, 高级类型就是通过基础类型组成的自定义类型.
//基础类型
/**
 * ts中包含了boolean / number / string / object / 数组(数组的表示有多种, 后续文章会展开) / 元组 / 枚举 / any / Undefined / Null / Void / Never
 */
interface Article {
    title: string;
    count: number;
    content: string;
    tags: string[]; // 数组里的元素都是字符串
}

