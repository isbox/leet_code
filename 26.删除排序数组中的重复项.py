# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除排序数组中的重复项
#
class Solution:
    def removeDuplicates(self, nums):
        current_index = 0
        while(current_index < len(nums) - 1):
            if (nums[current_index] == nums[current_index + 1]):
                del nums[current_index]
            else:
                current_index += 1
        return len(nums)

