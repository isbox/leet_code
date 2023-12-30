/*
 * @lc app=leetcode.cn id=213 lang=typescript
 *
 * [213] 打家劫舍 II
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// @lc code=start
// 状态转移方程
// f(n) = max(f(n - 1), f(n - 2) + nums[n])
function rob(nums) {
    var len = nums.length;
    if (len <= 2) {
        return Math.max.apply(Math, __spreadArray([0], nums, false));
    }
    var plunderFirst = [nums[0], Math.max(nums[0], nums[1])];
    var plunderLast = [0, nums[1], Math.max(nums[1], nums[2])];
    // 偷了第一家，不可以偷最后一家
    for (var i = 0; i < len - 1; i += 1) {
        if (i > 1) {
            plunderFirst[i] = Math.max(plunderFirst[i - 1], plunderFirst[i - 2] + nums[i]);
        }
    }
    // 偷了最后一家，不可以偷第一家
    for (var j = 1; j < len; j += 1) {
        if (j > 2) {
            plunderLast[j] = Math.max(plunderLast[j - 1], plunderLast[j - 2] + nums[j]);
        }
    }

    return Math.max(plunderFirst.pop(), plunderLast.pop());
}

// @lc code=end
