/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU 缓存
 */

// @lc code=start
// 通过栈实现受阻，无法实现O(1)时间
// class LRUCache {
//     constructor(capacity: number) {
//         this.capacity = capacity;
//         this.useFrequency = [];
//         this.cacheVal = new Map();
//         this.keyLifes = new Map();
//     }

//     capacity: number;
//     useCapacity: number;
//     useFrequency: number[];
//     cacheVal: Map<number, number>;
//     keyLifes: Map<number, number>

//     get(key: number): number {
//         console.log(this.useFrequency,  this.cacheVal);
//         if (!this.cacheVal.has(key)) {
//             return -1;
//         }
//         this.keyLifes.set(key, this.keyLifes.get(key) ?? 0 + 1);
//         return this.cacheVal.get(key)!;
//     }

//     put(key: number, value: number): void {
//         if (this.cacheVal.has(key)) {
//             this.cacheVal.set(key, value);
//         } else {
//             if (this.useFrequency.length === this.capacity) {
//                 const delKey = this.useFrequency.shift()!;
//                 const delKeyLifeTimes = this.keyLifes.get(delKey) ?? 0;
//                 if (delKeyLifeTimes > 0) {
//                     this.keyLifes.set(delKey, delKeyLifeTimes - 1);
//                     this.useFrequency.push(delKey);
//                     this.put(key, value);
//                     return;
//                 }
//                 this.cacheVal.delete(delKey);
//             }
//             this.useFrequency.push(key);
//             this.cacheVal.set(key, value);
//         }
//     }
// }

// 建立双向链表
class NodeItem {
    constructor(key, val: number) {
        this.key = key;
        this.val = val;
    }
    key: number;
    val: number;
    prev: NodeItem | undefined;
    next: NodeItem | undefined;
}

// 解法：map缓存+双向链表
// 题目的lru缓存规则，简单来说就是一下几个
// 1. 固定的缓存空间
// 2. 当get命中缓存时，刷新其缓存时效
// 3. 当put命中缓存时，刷新其缓存时效及值
// 4. 当put未命中缓存时，添加进缓存并刷新时效
// 5. 当put时超过缓存空间，删除缓存时效最近的值
// 6. 要求get/put时间复杂度O(1)

// 从上面来我们在日常开发中实现过类似策略，之不过大多数时记录时间，一组缓存数据每次对比更新/使用时间
// 时间最近的先删除，但是这道题加了个限制，O(1)，代表无法使用循环比较

// 所以得换个思路，比如说如果使用队列，先进先出，每次都进出都是O(1)
// 但是这又得是个特殊得对列，因为更新策略的存在，所以需要可以让仍一队伍中的排到对末去
// 再但是，如果使用数组的型式实现，从数组中间抽走一个本身就会使数组后面的数重新排列，毕竟数组不易中间增删嘛
// 再者再上面使用数组的方式实现时遇到些问题，当get更新缓存时，需要明确知道key所对应的数组下标，这样才能方便删除
// 想要通过key知道下标就必须循环 (即使是提前映射key与下标的关系，在更新缓存时本身就是在破坏原下标关系，所以也不能实现)

// 这个时候还有个数据结构就出现了，它有着O(1)复杂度的修改速度，链表
// 使用双向链表，在需要刷新缓存时可以使用断链，在左右链接，断开的节点接到尾节点，不就满足了么
class LRUCache {
    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    capacity: number;
    // 方便通过key来查询链表节点
    cache: Map<number, NodeItem>;
    // 头节点
    head: NodeItem;
    // 尾节点
    tail: NodeItem;

    get(key: number): number {
        if (this.cache.has(key)) {
            const nodeItem = this.cache.get(key)!;
            const prevItem = nodeItem.prev;
            const nextItem = nodeItem.next;
            // 如果已经是尾节点了就不需要更新了，因为更新就是放在最末
            if (nodeItem.key === this.tail.key) {
                return this.tail.val;
            }
            // 如果有前一节点，将它与后一节点关联
            if (prevItem) {
                prevItem.next = nextItem;
            }
            // 如果有后一节点，将它与前一节点关联
            if (nextItem) {
                nextItem.prev = prevItem;
                // 如果没有前节点，说明是头节点，需要更新头节点
                if (!prevItem) {
                    this.head = nextItem;
                }
            }
            // 存在尾节点，将尾节点next连接当前节点，当前节点成为尾节点（缓存更新完成）
            if (this.tail) {
                this.tail.next = nodeItem;
                nodeItem.prev = this.tail;
                nodeItem.next = undefined;
            }
            this.tail = nodeItem;
            return this.tail.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        // 命中缓存说明存在，更新值并调用get更新其缓存
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.val = value;
            this.cache.set(key, node);
            this.get(key);
        } else {
            // 缓存空间未满，生成新节点接入尾节点
            if (this.cache.size < this.capacity) {
                const nodeItem = new NodeItem(key, value);
                nodeItem.prev = this.tail;
                if (!this.head) {
                    this.head = nodeItem;
                }
                if (this.tail) {
                    this.tail.next = nodeItem;
                }
                this.cache.set(key, nodeItem);
                this.tail = nodeItem;
            } else {
                // 满了先删掉头节点，头节点后一位成为头节点，再调用一次put添加新节点
                const delKey = this.head.key;
                this.head = this.head.next!;
                if (this.head) {
                    this.head.prev = undefined;
                }
                this.cache.delete(delKey);
                this.put(key, value);
            }
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

