# -*- encoding:utf-8 -*-
# @lc app=leetcode.cn id=53 lang=python3
#
# [53] 最大子序和
#

# 暴力解法（超时）
class Solution:
    def maxSubArray(self, nums):
        if not nums:
            return 0
        maxCount = None
        for i in range(len(nums)):
            for j in range(len(nums) - i):
                count = sum(nums[i:(j + i + 1)])
                if maxCount == None or count > maxCount:
                    maxCount = count
        return maxCount


# google解法
class Solution1:
    def maxSubArray(self, nums):
        if not nums:
            return 0
        cur_count = nums[0]
        max_count = cur_count
        for num in nums[1:]:
            cur_count = max(num, cur_count + num)
            if cur_count > max_count:
                max_count = cur_count
        return max_count

