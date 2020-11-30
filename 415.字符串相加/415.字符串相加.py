# -*- coding:utf-8 -*-
#
# @lc app=leetcode.cn id=415 lang=python3
#
# [415] 字符串相加
#

# @lc code=start
class Solution:
    def addStrings(self, num1, num2):
        str_to_num = {
            "1": 1,
            "2": 2,
            "3": 3,
            "4": 4,
            "5": 5,
            "6": 6,
            "7": 7,
            "8": 8,
            "9": 9,
            "0": 0
        }

        count = 0
        times = 0
        num1_index = len(num1) - 1
        num2_index = len(num2) - 1

        while(True):
            if (num1_index < 0 and num2_index < 0):
                break

            num1_num = str_to_num[num1[num1_index]] if num1_index >= 0 else 0
            num2_num = str_to_num[num2[num2_index]] if num2_index >= 0 else 0
            
            count += (num1_num + num2_num) * (10 ** times)
            num1_index -= 1
            num2_index -= 1
            times += 1
        
        return str(count)
        

# @lc code=end

