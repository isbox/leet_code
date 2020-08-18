# -*- encoding:utf-8 -*-
# @lc app=leetcode.cn id=198 lang=python3
#
# [198] 打家劫舍
#

# @lc code=start
class Solution:
    def rob(self, nums):
        if not nums:
            return 0
        numsLen = len(nums)
        if numsLen == 0:
            return 0
        if numsLen == 1:
            return nums[0]

        prev = nums[0]
        cur = max(prev, nums[1])

        for i in range(2, numsLen):
            print(i)
            temp = cur
            cur = max(prev + nums[i], cur)
            prev = temp

        return cur
            
# @lc code=end

