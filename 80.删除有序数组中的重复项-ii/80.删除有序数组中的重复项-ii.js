/*
 * @lc app=leetcode.cn id=80 lang=typescript
 *
 * [80] 删除有序数组中的重复项 II
 */
// @lc code=start
function removeDuplicates(nums) {
    var lf = 0;
    var rt = 1;
    var count = 0;
    while (lf !== nums.length) {
        if (nums[rt] === nums[lf])
            count++;
        else {
            count = 0;
            lf = rt;
        }
        if (count >= 2) {
            nums.splice(rt, 1);
            continue;
        }
        ;
        rt++;
        if (rt === nums.length) {
            lf++;
            rt = lf + 1;
        }
    }
    console.log(nums);
    return nums.length;
}
;
removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]);
// @lc code=end
