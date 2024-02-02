/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * [279] 完全平方数
 */

// @lc code=start
// 解法：动态规划
// 要知道第n个数需要的最小次数，那顺理成章的我们需要知道第n-1个数需要的最小次数
// 有了第n-1的所需次数x，那到n所需数其实就是x+1
// 所以这时候我们推导的公式为 dp(n) = dp(n-1) + 1（次）
// 这道题的特殊性在于平方数，最小的次数不一定来源于dp(n-1)，而是在于dp(n - [1～√n]) 如果n本身完全平方，则最大只能落在√n上
// 这时候的公式变化了，dp(n) = dp(n - x**2) + 1
// 什么意思呢？可以理解为 n - x**2 = 最优解时的值，打个比方：
// 当n=6；6-1**2=5，6-2**2=2，也就是说从 5到6需要加1，从2到6需要加4，1和4，都是完全平方数，所以可以依次往下推导dp(5)和dp(2)谁的次数最少，推导出次数后加上到6的那次即为解
function numSquares(n: number): number {
    // 特殊值0处理
    const dp: number[] = [0];
    for (let i = 1; i <= n; i++) {
        let min = Number.MAX_VALUE;
        for (let j = 1; j <= ~~Math.sqrt(i); j++) {
            min = Math.min(min, dp[i - j**2]);
        }
        dp[i] = min + 1;
    }

    return dp[n]
};
// @lc code=end

