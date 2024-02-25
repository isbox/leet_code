/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
// 解法：深度优先
// 要找到是否能够是一个小岛很简单，即深度遍历，通过一个点开始，向四周扩散遍历，直到遍历完成
// 这时候就可以直到我们跑完了一个小岛所有得边界（遇到某一处为0则是到达水里了，无法继续走下去了）
// 难点在于如何识别当前得岛屿，我们之前已经找到过1次，不要做二次寻找
// 1可以使用缓存标记走过得路径，下次如果缓存里有，就直接跳过
// 2当我们每找一步，将其标记为0，那么之后遍历时会因为其已经变为“海”了，无法继续走下去而略过之前已经找过的岛屿

// 使用方法2，标记为0
function numIslands(grid: string[][]): number {
	let res = 0;
	const marker = (x: number, y: number) => {
		// 如果为0，到海里了，停止
		if (+grid[x][y] === 0) return;
		// 走过的路标记为0，之后不会再来
		grid[x][y] = '0';
		// 根据界限判断向四周寻找
		if (x - 1 >= 0) marker(x - 1, y);
		if (x + 1 < grid.length) marker(x + 1, y);
		if (y - 1 >= 0) marker(x, y - 1);
		if (y + 1 < grid[0].length) marker(x, y + 1);
	}

	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			// 如果是海，跳过这步继续找
			if (+grid[i][j] === 0) continue;
			marker(i, j);
			// 标记完成，岛屿+1
			res += 1;
		}
	}
	
	return res;
};

// @lc code=end

