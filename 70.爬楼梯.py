# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#
class Solution:
    def climbStairs(self, n):
        if n <= 2:
            return n
        prev1 = 2
        prev2 = 1
        for i in range(3, n):
            save = prev2
            prev2 = prev1
            prev1 += save
                
        return prev1 + prev2

