/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
// 解法1
// 这道题的关键在于，判断如何才能跳出循环，怎么跳出呢，可以拿例子中2这个数试试
// 2跑出来的结果是：2→4→16→37→58→89→145→42→20→4
// 通过观测可以知道，循环了，这时我们就有判断跳出循环的关键了，那就是，只要有重复的数就跳出（如果是1，返回true，其他返回false）
// function isHappy(n: number): boolean {
//     // 0值丢弃
//     if (n === 0) { return false; }
//     // 创建map，记录循环值
//     const cacheMap = new Map();
//     // 第一个数也记录进来
//     cacheMap.set(n, true);
//     let strNum = `${n}`;
//     while(strNum) {
//         let sum = 0;
//         for (let i = 0; i < strNum.length; i++) {
//             sum += (+strNum.charAt(i))**2;
//         }
//         // 总和为1，快乐数，返回true
//         if (sum === 1) {
//             return true;
//         }
//         // 命中缓存，说明该数不是快乐数，返回false
//         if (cacheMap.has(sum)) {
//             return false;
//         }
//         // 记录总和到缓存中
//         cacheMap.set(sum, true);
//         strNum = `${sum}`;
//     }
// };


// 解法2：
// 换个思路，把非快乐数的循环过程看作是链表，这道题实际考的是链表中是否有环
// 判断链表是否有环的话，可以使用快慢指针，因为快指针终究会与慢指针相遇，也就是证明有环
function isHappy(n: number): boolean {
    const sum = (num) => {
        let sum = 0;
        const strNum = `${num}`;
        for (let i = 0; i < strNum.length; i++) {
            sum += (+strNum.charAt(i))**2;
        }
        return sum;
    }
    // 0值丢弃
    if (n === 0) { return false; }
    let lPoint = n;
    let rPoint = n;
    
    do {
        lPoint = sum(lPoint);
        // 快指针走两次
        rPoint = sum(sum(rPoint)); 
    }
    while (lPoint !== rPoint)

    if (lPoint === 1) {
        return true;
    }

    return false;
};
// @lc code=end
