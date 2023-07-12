/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */

// @lc code=start

// 状态转移方程
// f(n) = max(f(n - 1), f(n - 2) + nums[n])
function rob(nums: number[]): number {
  const len = nums.length;
  if (len <= 2) {
    return Math.max(0, ...nums);
  }
  const plunderFirst = [nums[0], Math.max(nums[0], nums[1])];
  const plunderLast = [0, nums[1], Math.max(nums[1], nums[2])];

  // 偷了第一家，不可以偷最后一家
  for (let i = 0; i < len - 1; i += 1) {
    if (i > 1) {
      plunderFirst[i] = Math.max(plunderFirst[i - 1], plunderFirst[i - 2] + nums[i]);
    }
  }
  
  // 偷了最后一家，不可以偷第一家
  for (let j = 1; j < len; j += 1) {
    if (j > 2) {
      plunderLast[j] = Math.max(plunderLast[j - 1], plunderLast[j - 2] + nums[j]);
    }
  }

  return Math.max(plunderFirst.pop()!, plunderLast.pop()!);
};

// @lc code=end


