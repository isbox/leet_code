# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=35 lang=python3
#
# [35] 搜索插入位置
#
class Solution:
    def searchInsert(self, nums, target):
        current_index = 0
        while current_index < len(nums):
            if target <= nums[current_index]:
                return current_index
            current_index += 1
        return len(nums)


