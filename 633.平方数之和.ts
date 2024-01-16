/*
 * @lc app=leetcode.cn id=633 lang=typescript
 *
 * [633] 平方数之和
 */

// @lc code=start
// 这道题如果有数学知识可以快速解开：费马平方和

// 双指针法
function judgeSquareSum(c: number): boolean {
    let l = 0;
    // 此处如果不取开根的话会超时，还是得适当使用开根
    let r = Math.floor(Math.sqrt(c));

    // 双指针法，如果结果大了，右指针-1，小了，左指针+1，相等则跳出，直到左右指正汇合
    while (l <= r) {
        const res = l**2 + r**2;
        if (res === c) {
            return true;
        } else if (res < c) {
            l+=1;
        } else {
            r-=1;
        }
    }
    return false;
};
// @lc code=end

