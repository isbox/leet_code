/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  let majortyLen: number = 0;
  let majortyNum: number = 0;

  let lf = 0;
  let rt = 1;

  nums.sort();

  while(rt < nums.length) {
    if (nums[lf] !== nums[rt]) {
      if (rt - lf > majortyLen) {
        majortyLen = rt - lf;
        majortyNum = nums[lf];
        lf = rt;
      }
    }
    rt++;
  }

  if (rt - lf > majortyLen) {
    majortyLen = rt - lf;
    majortyNum = nums[lf];
  }

  return majortyNum;
};
// @lc code=end

