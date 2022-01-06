/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
function PredictTheWinner(nums: number[]): boolean {
  const len = nums.length;
  const dp: number[][] = Array.from({ length: len }, val => Array.from({ length: len  }));

  // 填充初始值
  for (let i = 0; i < len; i++) {
    dp[i][i] = nums[i];
  }

  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
    }
  }

  return dp[0][len - 1] >= 0;
};
// @lc code=end

