/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
// 解法1：动态规划
// 这道题的动态规划解法有一个较难的思考点，即：是以当前有没有持股来作为判断的标准建立二维数组
/**
 * [
 *  [0, 0],
 *  [0, 0],
 *  ...长度未prices.length
 * ]
*/
// 以上二维数组代表，当前天是否持有股票，[持有, 未持有]，当前手中的收益是多少
// function maxProfit(prices: number[]): number {
//     if (prices.length < 2) return 0;
//     const len = prices.length;
//     const dp = Array.from(Array(len), () => [0, 0]);
//     // 初始化第一天数据，第一天如果持有股票，当前收益是第一天股价的负数值，因为买入消耗了现金
//     dp[0][0] = prices[0] * -1;
//     // 初始化第一天数据，如果第一天不持股，则收益为0
//     dp[0][1] = 0;
//     // 从第二天计算，第一天已经初始化过了
//     for (let i = 1; i < len; i++) {
//         // 主打买入时最便宜
//         // 第n天是否持有，看第n-1天的持有的价值与当天股价的价值，谁的亏损值最小
//         dp[i][0] = Math.max(dp[i - 1][0], prices[i] * -1);
//         // 主打卖出时价最高
//         // 第n天是否不持有（或卖出），看第n-1天不持有（或卖出）的收益与第n-1天持有股票今日卖出后的收益谁大
//         dp[i][1] = Math.max(dp[i - 1][1], prices[i] + dp[i - 1][0]);
//     }
//     // 用最后一天的持有，未持有收益，选择最大的为结果
//     return Math.max(dp[len - 1][0], dp[len - 1][1]);
// };

// 解法2：
// 不用复杂的动态规划，要想获得最大收益无非在于，买入时最低，卖出时最高
// 可以记录一个最低价，通过循环不断跟新它
// 同时记录一个最高收益，使用第二天的股价与最低价做减法，与历史最高收益做比较
function maxProfit(prices: number[]): number {
    if (prices.length < 2) return 0;
    // 初始化最低股价为第一天股价
    let minPrice = prices[0];
    // 初始化第一天收益为0
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        // 跟新最高收益：历史最高收益与当天股价-最低股价的差值比较，取最大的作为最大收益值
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        // 如果当天股价还要再低一点，跟新最低股价
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    return maxProfit;
};
// @lc code=end

