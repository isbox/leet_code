/*
 * @lc app=leetcode.cn id=309 lang=typescript
 *
 * [309] 最佳买卖股票时机含冷冻期
 */

// 视频解答：https://www.bilibili.com/video/BV1LZ4y1u7br?vd_source=de488d40ebdc1b4345e9029a475f621e

// @lc code=start
function maxProfit(prices: number[]): number {
  const days = prices.length;

  if (!days) {
    return 0;
  }
  // dp设想为收益
  // 两个维度分别是，天数，当前股票状态（下标0：不持有股票收益，下标1：持有股票收益）
  const dp: number[][] = Array.from(Array(days), () => [0, 0]);

  // 初始状态分两种，第一天不持有：收益为0，第一天持有：收益为0 - 第一天的股价
  dp[0][0] = 0;
  dp[0][1] = 0 - prices[0];

  for (let i = 1; i < days; i++) {
    // 当前不持股 = 之前就没有持股/在冷冻期间，今天才卖
    // 当前不持有收益 = 昨天没有持有收益 / (昨日持有收益 + 今日卖出收益)
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);

    // 当前持股 = 之前就已经持股（没有卖出收益不变），今天才买（有股票不可再买，买股票必须经过冷冻期才行）
    // 当前持有收益 = 之前持有收益 / (今天买入收益(冷冻期2天不能买入) - 今日买入花销)
    dp[i][1] = Math.max(dp[i - 1][1], (i < 2 ? 0 : dp[i - 2][0]) - prices[i]);
  }

  // 未持有与持有 哪个当前的收益最高
  return Math.max(dp[days - 1][0], dp[days - 1][1]);
};

// @lc code=end
