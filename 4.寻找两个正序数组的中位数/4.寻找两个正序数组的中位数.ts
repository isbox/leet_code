/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const numsGather:number[] = [];

  while(nums1.length || nums2.length) {
    if (nums1[0] <= nums2[0] || !nums2.length) {
      numsGather.push(nums1.shift() as number);
    } else {
      numsGather.push(nums2.shift() as number)
    }
  }

  const totalLen = numsGather.length;
  if (totalLen % 2) {
    return numsGather[Math.floor(totalLen / 2)]
  }

  return (numsGather[Math.floor(totalLen / 2) - 1] + numsGather[Math.floor(totalLen / 2)]) / 2;
};
// @lc code=end
