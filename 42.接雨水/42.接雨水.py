# -*-code:utf8-*-
#
# @lc app=leetcode.cn id=42 lang=python3
#
# [42] 接雨水
#

# @lc code=start
class Solution:
    def trap(self, height):
        count = 0
        total_water = 0
        left_wall = 0
        right_wall = 0
        wall_length = len(height)
        apart_wall = []

        while(count < wall_length):
            # 当墙高度大于0时
            if (height[count] > 0):
                # 如果左墙没有高度，更新左墙高度
                if (left_wall < 1):
                    left_wall = height[count]

                # 不断更新右墙高度
                right_wall = height[count]

            # 当左边墙高度大于0时，记录从该墙开始之后的墙高
            if (left_wall > 0):
                apart_wall.append(height[count])

            # 如果此时右墙高度已经高于左墙，计算当前范围内的装水量
            if (right_wall > left_wall):
                left_wall = right_wall
                total_water += self.amount_of_water(apart_wall)
                apart_wall = [left_wall]

            count += 1

        # 防止出现left_wall > right_wall的情况，最后再算一次
        total_water += self.amount_of_water(apart_wall)
        
        return total_water

    def amount_of_water(self, trapArr):
        # 两堵相邻的墙无法蓄水
        if (len(trapArr) < 3):
            return 0;
        
        left_wall = trapArr[0]
        right_wall = trapArr[-1]

        # 当出现右边墙比左边短时（最后一组墙）, 翻转重算
        if (right_wall < left_wall):
            trapArr.reverse()
            return self.trap(trapArr)

        # 计算当前墙组装水量
        amount = 0
        for i in range(len(trapArr)):
            # 左/右墙不计入结果
            if (i > 0 and i < len(trapArr) - 1):
                amount += (left_wall - trapArr[i])

        return amount

        

# @lc code=end
