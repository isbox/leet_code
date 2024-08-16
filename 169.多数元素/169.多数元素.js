/*
 * @lc app=leetcode.cn id=169 lang=typescript
 *
 * [169] 多数元素
 */
// @lc code=start
function majorityElement(nums) {
    var majortyLen = 0;
    var majortyNum = 0;
    var lf = 0;
    var rt = 1;
    nums.sort();
    console.log(nums);
    while (rt < nums.length) {
        if (nums[lf] !== nums[rt]) {
            if (rt - lf > majortyLen) {
                majortyLen = rt - lf;
                majortyNum = nums[lf];
                lf = rt;
            }
        }
        rt++;
    }
    if (rt - lf > majortyLen) {
        majortyLen = rt - lf;
        majortyNum = nums[lf];
    }
    return majortyNum;
}
;
// @lc code=end
