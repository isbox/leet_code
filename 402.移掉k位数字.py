# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=402 lang=python3
#
# [402] 移掉K位数字
#

# @lc code=start
# 单调栈 + 贪心算法
class Solution:
    def removeKdigits(self, num, k) -> str:
        if len(num) <= k:
            return '0'
        if k == 0:
            return num

        result = ''
        # 定义结束点
        end_index = -1

        # 定义栈
        stack = []
        for index, val in enumerate(num):
            if len(stack) == 0 or int(val) >= int(stack[-1]):
                stack.append(val)
            else:
                # 循环检查栈顶的元素是否比新元素大，如果比新元素大，将栈顶元素弹出，条件k递减
                while len(stack) and int(stack[-1]) > int(val):
                    stack.pop()
                    k -= 1
                    if k <= 0:
                        break
                # 循环完后将元素放入栈顶，该元素为当前栈最大值
                stack.append(val)

            # k为0时循环已经没有继续下去的必要了
            if k <= 0:
                end_index = index
                break

        # 如果循环结束后k值仍然不为0，重栈顶依次弹出k个值即为最终结果，因为字符串为递增了，依次重后删除就行了
        if k > 0:
            while k != 0:
                stack.pop()
                k -= 1
            result = ''.join(stack)
        # 如果煦循环结束后k值为0，即用栈中的全部值加上结束点之后的值即可
        elif k == 0:
            # 如果结束点等于字符串长度 num[end_index + 1:] 会返回''，所以并无影响
            result = ''.join(stack) + num[end_index + 1:]

        if result == '':
            return '0'

        # 最后做一次开头0去除        
        return str(int(result))

# @lc code=end
