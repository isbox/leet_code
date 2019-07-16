# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=28 lang=python3
#
# [28] 实现strStr()
#
class Solution:
    def strStr(self, haystack, needle):
        if needle == '':
            return 0
        h_len = len(haystack)
        n_len = len(needle)
       
        current_index = 0
        while current_index + n_len <= h_len:
            if haystack[current_index:(current_index + n_len)] == needle:
                return current_index
            current_index += 1
        return -1

