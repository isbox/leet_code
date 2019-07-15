# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] 移除元素
#
class Solution:
    def removeElement(self, nums, val):
        if len(nums) == 0:
            return 0
        if len(nums) == 1:
            if nums[0] == val:
                return 0
            return 1

        current_index = 0
        while current_index < len(nums):
            if nums[current_index] == val:
                del nums[current_index]
            else:
                current_index += 1
        return len(nums)


