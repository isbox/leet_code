# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=242 lang=python3
#
# [242] 有效的字母异位词
#

# @lc code=start
class Solution:
    def isAnagram(self, s: str, t: str):
        # 长度不等一定不是异位词
        if len(s) != len(t):
            return False
        # 建立hash记录单个字母数字
        hash = {}
        for i in range(len(s)):
            # s字符串负责加法
            hash[s[i]] = hash.get(s[i], 0) + 1
            # t字符串负责减法
            hash[t[i]] = hash.get(t[i], 0) - 1

        # hash中有结果不为0的数一定不是异位词
        for res in hash:
            if hash[res] != 0:
                return False
        
        return True
        
