/*
 * @lc app=leetcode.cn id=746 lang=typescript
 *
 * [746] 使用最小花费爬楼梯
 */

// @lc code=start
// 解法：动态规划
// 从题目示例来看，到达顶层实际上是超过数组下标
// 但是一次可以跨1-2层，所以可以简化为比较到达第n层，第n-1层时，谁的花费最小
// 可以用动态规划公式 min(dp[n], dp[n-1]) 表示
// function minCostClimbingStairs(cost: number[]): number {
//     const len = cost.length;
//     if (len === 2) {
//         return Math.min(cost[0], cost[1]);
//     }
//     const dp: number[] = [];
//     // 1，2层初始值
//     dp[0] = cost[0];
//     dp[1] = cost[1];

//     for (let i = 2; i < cost.length; i+=1) {
//         dp[i] = Math.min(dp[i - 1], dp[i - 2]) + cost[i];   
//     }

//     return Math.min(dp[len - 1], dp[len - 2]);
// };

// O(1)空间，直接使用参数数组
function minCostClimbingStairs(cost: number[]): number {
    const len = cost.length;
    if (len === 2) {
        return Math.min(cost[0], cost[1]);
    }

    for (let i = 2; i < cost.length; i+=1) {
        cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];   
    }

    return Math.min(cost[len - 1], cost[len - 2]);
};


// @lc code=end

