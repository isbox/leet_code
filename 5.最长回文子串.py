# # -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=5 lang=python3
#
# [5] 最长回文子串
#

# 动态规划(当前结果参考上一个结果) 时间On^2 空间On^2
# 解法参考leecode官方动态规划解题https://leetcode-cn.com/problems/longest-palindromic-substring/solution/zui-chang-hui-wen-zi-chuan-by-leetcode-solution/ 5min之后
# @lc code=start
class Solution:
    def longestPalindrome(self, s):
        strLen = len(s)
        # 长度小于2的串必为回文，直接返回
        if strLen < 2:
            return s

        # 建立二位数组，初始化斜角全为True
        dp = [[None for i in range(strLen)] for i in range(strLen)]
        for i in range(strLen):
            dp[i][i] = True

        begin = 0
        maxLen = 0

        # 列循环，由于dp[0][0]起始位已经有值了，从下标1开始
        for j in range(1, strLen):
            # 行循环，只需要用到上边三角部分
            for k in range(0, j):
                # 如果有相等值
                if s[k] == s[j]:
                    if j - k < 3:
                        # 行 - 列 小于2无法于参考斜角值（斜角值为None或是初始化就为True的，没有参考性），直接True
                        dp[k][j] = True
                    else:
                        # 参考左下斜角值，列 - 1 行 + 1为斜角值
                        dp[k][j] = dp[k + 1][j - 1]
                # 不相等的直接再二维数组中记录False
                else:
                    dp[k][j] = False

                # j - k + 1得到最长下标
                # 列下标 - 行下标 (字符长下标 - 字符短下标)得到的最大差值就是最长子串, +1是应为最后截断字符串，末尾是不包含的，要包含上
                if dp[k][j] == True and j - k + 1 > maxLen:
                    print(j, k)
                    begin = k
                    maxLen = j - k + 1

        # 如果没有找到子串，取第一个字符
        # maxLen减去了开始下标，截取时要加回来
        return s[begin:begin + maxLen] or s[0]

# @lc code=end

