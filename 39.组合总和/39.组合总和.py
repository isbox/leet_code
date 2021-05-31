# -*- encoding:utf-8 -*-
# @lc app=leetcode.cn id=39 lang=python3
#
# [39] 组合总和
#

from functools import reduce

# @lc code=start
class Solution:
    target = 0
    result = []
    candidates = []

    def combinationSum(self, candidates, target):
        if not candidates or len(candidates) == 0:
            return []

        if target == 0:
            return candidates
        
        # 初始化
        self.result = []
        self.candidates = candidates
        self.target = target

        self.solution(target, [], 0)
        return self.result

    def solution(self, target, combins, index):    
        if index >= len(self.candidates):
            return None
        
        # 到0跳出
        if target == 0:
            self.result.append(combins)
            return None

        totalNow = reduce(lambda x, y: x + y, combins, 0)
        if totalNow <= self.target:
            # 直接跳层查找
            self.solution(target, combins, index + 1)

        subtractNum = target - self.candidates[index]
        if subtractNum >= 0:
            copyCombins = combins[:]
            copyCombins.append(self.candidates[index])
            # 尝试同层搜索
            self.solution(subtractNum, copyCombins, index)
            

a = Solution()
# b = a.combinationSum([2, 3, 6, 7], 7)
b = a.combinationSum([2,3,5], 7)
print(b)
# @lc code=end

