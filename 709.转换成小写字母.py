# -*- coding=utf-8 -*-
# @lc app=leetcode.cn id=709 lang=python3
#
# [709] 转换成小写字母
#

# @lc code=start
class Solution:
    def toLowerCase(self, str):
        # 建立字母映射表
        alphabet_hash = {
            'A': 'a',
            'B': 'b',
            'C': 'c',
            'D': 'd',
            'E': 'e',
            'F': 'f',
            'G': 'g',
            'H': 'h',
            'I': 'i',
            'J': 'j',
            'K': 'k',
            'L': 'l',
            'M': 'm',
            'N': 'n',
            'O': 'o',
            'P': 'p',
            'Q': 'q',
            'R': 'r',
            'S': 's',
            'T': 't',
            'U': 'u',
            'V': 'v',
            'W': 'w',
            'X': 'x',
            'Y': 'y',
            'Z': 'z',
        }
        
        result_str = ''
        # 循环匹配，如果匹配上，拼接对应的小写字母，如果没有，拼接原字母
        for s in str:
            lower_result = alphabet_hash.get(s)
            if lower_result:
                result_str += lower_result
            else:
                result_str += s
        return result_str

# @lc code=end

