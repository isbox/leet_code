/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * [15] 三数之和
 */

// @lc code=start
// 可用但运行超时，时间复杂度N3，空间复杂度N，暴力求解不可取
// function threeSum(nums: number[]): number[][] {
//     const len = nums.length;
//     let res: Record<string, number[]> = {};
//     let first = 0;
//     let sed = first + 1;
//     let third = sed + 1;

//     while(true) {
//         if (nums[first] + nums[sed] + nums[third] === 0) {
//             const list = [nums[first], nums[sed], nums[third]].sort((a, b) => a - b);
//             res[list.join('')] = list;
//         }
        
//         if (third + 1 === len) {
//             if (sed + 1 === len - 1) {
//                 if (first + 1 === len - 2) {
//                     return Object.values(res);
//                 } else {
//                     first += 1;
//                     sed = first + 1;
//                     third = sed + 1;
//                 }
//             } else {
//                 sed += 1;
//                 third = sed + 1;
//             }       
//         } else {
//             third += 1;
//         }
//     }
// };

// 双指针法，可以减少1次循环
function threeSum(nums: number[]): number[][] {
    const len = nums.length;
    const res: number[][] = [];
    if (len < 3) {
        return res;
    }
    // 先排序，乱序无法避免重复求解，同时乱序会造成相当大的计算量
    nums.sort((a, b) => a - b);
    // 先确定第一个数，长度肯定时需要小于数组总长 - 2的，应为这样才至少能筹齐3个元素
    for (let i = 0; i < len - 2; i++) {
        const first = nums[i];
        // 由于数组已经排过序了，如果第一个元素都大于0了，后面的都会大于0，不可能3数相加等于0，无其他结果了，终端跳出
        if (first > 0) { break; }
        // 由于数组已经排过序了，如果第一个元素与后一个元素相同，其实最终结果无变化，跳过去
        // 这里不能用 first === nums[i + 1]，因为这会让指针选择值变少从而无法拿到所有结果
        if (i > 0 && first === nums[i - 1]) { continue; }

        let lPoint = i + 1;
        let rPoint = len - 1;

        while(lPoint < rPoint) {
            const sum = first + nums[lPoint] + nums[rPoint];
            if (sum === 0) {
                // 如果三数相加等于0了，就直接装入返回答案中，指针分别移动
                res.push([first, nums[lPoint], nums[rPoint]]);
                
                // 如果左指针的右边以为与其相同，右移，反正数值一样都是相同答案
                // 这里这两个条件也不能在运算前判断，以为会有[0, 0, 0]这种特殊例子会得不出结果
                while(lPoint < rPoint && nums[lPoint] === nums[lPoint + 1]) {
                    lPoint += 1;
                }
                // 同上方
                while(lPoint < rPoint && nums[rPoint] === nums[rPoint - 1]) {
                    rPoint -= 1;
                }
                
                // 上方已经移动到了同值的最后一位了，这样左右各向前向后移动一位就好了
                lPoint += 1;
                rPoint -= 1;

            } else if (sum < 0) {
                // 小了，左指针右移，找更大的数
                lPoint += 1;
            } else {
                // 大了，右指针左移，找更小的数
                rPoint -= 1;
            }
        }
    }

    return res;
}
// @lc code=end

