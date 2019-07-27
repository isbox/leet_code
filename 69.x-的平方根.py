# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=69 lang=python3
#
# [69] x 的平方根
#
class Solution:
    def mySqrt(self, x):
        if x == 0:
            return 0
        i = 0
        j = x // 2 + 1
        while i <= j:
            mid = (j + i) // 2 + 1
            if mid ** 2 > x:
                j = mid - 1
            elif mid ** 2 <= x and (mid + 1) ** 2 > x:
                return mid
            else:
                i = mid


            