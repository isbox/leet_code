/*
 * @lc app=leetcode.cn id=605 lang=typescript
 *
 * [605] 种花问题
 */

// @lc code=start
// 非常简单的一题，核心即是判断当前位置是不是0，如果是0则看看左右两边是不是0或undefined(超过边界);
// 如果成立，则该位置可以种花，将当前位置改为1，同时n - 1
// 直到n = 0，可以提前返回，否则循环结束后返回n是否等于0
function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    for (let i = 0; i < flowerbed.length; i++) {
        if (n === 0) {
            return true;
        }
        if (!flowerbed[i - 1] && !flowerbed[i + 1]) {
            if (flowerbed[i] !== 1) {
                flowerbed[i] = 1;
                n -= 1;
            }
        }
    }
    return n === 0;
};
// @lc code=end

