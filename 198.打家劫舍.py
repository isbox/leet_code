#
# @lc app=leetcode.cn id=198 lang=python3
#
# [198] 打家劫舍
#

# @lc code=start
class Solution:
    def rob(self, nums):
        numsLen = len(nums)
        if numsLen == 0:
            return 0;
        if numsLen == 1:
            return nums[0]
        

        stealed = {}
        stealIndex = 0
        totalCount = 0

        while True:
            if stealed.get(stealIndex - 1) and stealed.get(stealIndex + 1):
                return totalCount
            else if 
            else:
                stealed[stealIndex] = True
                totalCount += nums[stealIndex]

        
        return max(oddCount, evenCount)
            
# @lc code=end

