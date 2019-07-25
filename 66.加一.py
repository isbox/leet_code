# -*- encoding:utf-8 -*-
# @lc app=leetcode.cn id=66 lang=python3
#
# [66] 加一
#
class Solution:
    def plusOne(self, digits):
        count = 0
        digits_len = len(digits)
        for [index, digit] in enumerate(digits):
            count += digit * (10 ** (digits_len - index - 1))
        return [int(i) for i in str(count + 1)]


