# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=1249 lang=python3
#
# [1249] 移除无效的括号
#

# @lc code=start
class Solution:
    def minRemoveToMakeValid(self, s):
        # 创建栈
        stack = []
        for index, val in enumerate(s):
            if val == '(' or val == ')':
                # 当栈中无长度或匹配到左括号时，hash数据入栈，记录值与下标
                if len(stack) == 0 or val == '(':
                    stack.append({ 'index': index, 'value': val })    
                # 当匹配到右括号时将栈中最后一位取出，如果是左括号，将最后一位数据弹出(成功组成一组括号)，如果不是，入栈
                else:
                    last = stack[len(stack) - 1]
                    if last['value'] == '(':
                        stack.pop()
                    else:
                        stack.append({ 'index': index, 'value': val })

        # 数组倒序，为了在后面做删减数组时能够准确定位位置
        for msg in reversed(stack):
            # 删除位置index上的字符
            index = msg['index']
            s = s[:index] + s[(index + 1):]

        return s
                

# @lc code=end

