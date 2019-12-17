# -*- coding=utf-8 -*-
# @lc app=leetcode.cn id=739 lang=python3
#
# [739] 每日温度
#

# @lc code=start
class Solution:
    def dailyTemperatures(self, T):
        if (len(T) == 1):
            return [0]
        # 记录差值数组，初始化全为0，这样后面会少一次循环
        record_arr = [0] * len(T)
        # 创建栈
        stack = []
        for index, temp in enumerate(T):
            if (len(stack) == 0 or stack[-1]['val'] >= temp):
                # 如果栈为空或栈顶温度值比当前温度值大，新数据压入栈中
                stack.append({
                    'day': index,
                    'val': temp
                })
            else:
                # 如果当前温度值比栈顶温度值大，记录当前天值 - 栈顶天值，将栈顶值弹出，循环该动作直至栈顶值比当前值大
                while len(stack) != 0:
                    # 栈顶值大于当前值或栈为空，结束循环
                    if stack[-1]['val'] >= temp:
                        break

                    record_arr[stack[-1]['day']] = index - stack[-1]['day']
                    # 记录完成后将栈顶弹出
                    stack.pop()

                # 将新值压入栈顶
                stack.append({
                    'day': index,
                    'val': temp
                })

        # 由于初始化值默认为0，所以无需再循环栈中剩余元素标记为0了
        # for temp in stack:
        #     record_arr[temp['index']] = 0
        return record_arr

# @lc code=end

