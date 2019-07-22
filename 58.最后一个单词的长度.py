# -*- encoding:utf-8 -*-
# @lc app=leetcode.cn id=58 lang=python3
#
# [58] 最后一个单词的长度
#
class Solution:
    def lengthOfLastWord(self, s):
        if not s:
            return 0
        s = s.rstrip()
        return len(s.split(' ')[-1])
        
