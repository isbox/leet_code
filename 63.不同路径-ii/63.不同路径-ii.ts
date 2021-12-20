/*
 * @lc app=leetcode.cn id=63 lang=typescript
 *
 * [63] 不同路径 II
 */

// @lc code=start
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  if (obstacleGrid[0][0] === 1) {
    return 0; // 路堵死了，不用跑了
  }
  const roadMap: number[][] = Array(obstacleGrid.length).fill([]);

  for (let i = 0; i < obstacleGrid.length; i += 1) {
    for (let j = 0; j < obstacleGrid[i].length; j += 1) {
      // 存在障碍
      if (obstacleGrid[i][j] === 1) {
        roadMap[i][j] = 0;
        continue;
      }

      if (i === 0 || j === 0) {
        // 之前路为 0 / undefined，本次路线不可走
        if ((i > 0 && !roadMap[i - 1][j]) || (j > 0 && !roadMap[i][j - 1])) {
          roadMap[i][j] = 0;
          continue;
        }
        roadMap[i][j] = 1;
        continue;
      }

      roadMap[i][j] = roadMap[i - 1][j] + roadMap[i][j - 1];
    }
  }
  const x: number = roadMap.length - 1;
  const y = roadMap[x].length - 1;

  return roadMap[x][y];
};
// @lc code=end

