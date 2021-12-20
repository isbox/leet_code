/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const roadArr: number[][] = Array(m).fill(Array(n));
  for (let i = 0; i < m; i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i === 0 || j === 0) {
        roadArr[i][j] = 1;
        continue;
      }
      roadArr[i][j] = roadArr[i][j - 1] + roadArr[i - 1][j];
    }
  }

  return roadArr[m - 1][n - 1];
};
// @lc code=end

