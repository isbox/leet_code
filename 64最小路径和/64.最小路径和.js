/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
const calcCache = {};

function minPathSum(grid, loc) {
  if (!grid.length) {
    return 0;
  }

  let result = 0;
  const [rowNum = grid.length - 1, colNum = grid[0].length - 1] = loc ?? [];
  const cacheName = `${rowNum}-${colNum}`;
  const cache = calcCache[cacheName];

  if (cache) {
    return cache
  }

  const targetVal = grid[rowNum][colNum];

  if (!rowNum && !colNum) {
    return targetVal;
  }

  if (!rowNum && colNum) {
    result = minPathSum(grid, [0, colNum - 1])
  }

  if (!colNum && rowNum) {
    result = minPathSum(grid, [rowNum - 1, 0])
  }

  if (rowNum && colNum) {
    result = Math.min(minPathSum(grid, [rowNum - 1, colNum]), minPathSum(grid, [rowNum, colNum - 1]));
  }

  const answer = result + targetVal;
  calcCache[cacheName] = answer;
  return answer;
};

console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
// @lc code=end
