/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// 可用但运行超时
function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    let res: Record<string, number[]> = {};
    let first = 0;
    let sed = first + 1;
    let third = sed + 1;

    while(true) {
        if (nums[first] + nums[sed] + nums[third] === 0) {
            const list = [nums[first], nums[sed], nums[third]].sort((a, b) => a - b);
            res[list.join('')] = list;
        }
        
        if (third + 1 === len) {
            if (sed + 1 === len - 1) {
                if (first + 1 === len - 2) {
                    return Object.values(res);
                } else {
                    first += 1;
                    sed = first + 1;
                    third = sed + 1;
                }
            } else {
                sed += 1;
                third = sed + 1;
            }       
        } else {
            third += 1;
        }
    }
};
// @lc code=end

