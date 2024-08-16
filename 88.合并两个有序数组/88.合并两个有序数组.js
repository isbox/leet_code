/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */
// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    var nextStart = 0;
    function insert(num) {
        for (var j = nextStart; j < nums1.length; j++) {
            if (num < nums1[j]) {
                nums1.splice(j, 0, num);
                nextStart = j;
                break;
            }
        }
    }
    nums1.length = m;
    if (m === 0 && n > 0) {
        nums1[0] = nums2.shift();
    }
    for (var i = 0; i < n; i += 1) {
        insert(nums2[i]);
    }
    var diff = m + n - nums1.length;
    if (diff) {
        nums1.push.apply(nums1, nums2.slice(nums2.length - diff));
    }
    console.log(nums1);
}
;
merge([1, 2, 3, 0, 0, 0], 3, [4, 5, 6], 3);
// @lc code=end
