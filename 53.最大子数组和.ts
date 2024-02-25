/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子数组和
 */

// @lc code=start
// 解法：动态规划
// 这一题的动态规划有些特殊，特殊在于它不完全以之前的结果推到目前的值
// 比如例子中的 [-2,1,-3,4,-1,2,1,-5,4]，结果是 4 + -1 + 2 + 1
// 按常理说，这应该是 dp[8] 的解，但是它同时也是 dp[6]，dp[7] 的解

// 由于最大和是一个连续的数组，所以 dp[n-1] 与 dp[n] 最后一个数一定连续
// 这的时候我们需要求解的值就有所确定了，公式即为 dp[n] = Math.max(dp[n - 1] + n, n)
// 前一连续的结果加上当前值，与当前值的大小比较，取最大，这样就可以使结果一定是一个连续数组

// 用 [-2,1,-3,4,-1,2,1,-5,4] 为例
// dp[0] = -2，dp[1]求得为1，dp[2]求得为-2，这样求得得解一定是连续值
// 最后需要从这一堆解中找到最大得即可
function maxSubArray(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const dp: number[] = Array(nums.length);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }

    return Math.max(...dp);
};
// @lc code=end

