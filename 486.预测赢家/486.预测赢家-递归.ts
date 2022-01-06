/*
 * @lc app=leetcode.cn id=486 lang=typescript
 *
 * [486] 预测赢家
 */

// @lc code=start
function PredictTheWinner(nums: number[]): boolean {
  global.cacheMap = new Map();
  return getScoreDiff(nums, 0, nums.length - 1) >= 0;
};

// 分差分析
function getScoreDiff(nums: number[], l: number, r: number): number {
  if (l === r) {
    return nums[l];
  }

  const key = `${l},${r}`;
  const cache = global.cacheMap.get(key);

  if (cache) {
    return cache;
  }

  const lco = nums[l];
  const rco = nums[r];
  const res = Math.max(lco - getScoreDiff(nums, l + 1, r), rco - getScoreDiff(nums, l, r - 1));
  
  global.cacheMap.set(key, res);
  return res;
}

// @lc code=end

