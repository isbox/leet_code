/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  let lf = 0;
  let rt = 1;
  let count = 0;
  while(lf !== nums.length) {
    if (nums[rt] === nums[lf]) count++;
    else {
      count = 0;
      lf = rt;
    }
    if (count >= 2) {
      nums.splice(rt, 1);
      continue;
    };

    rt++;
    if (rt === nums.length) {
      lf++;
      rt = lf + 1;
    }
  }
  console.log(nums);
  return nums.length;
};

// @lc code=end

