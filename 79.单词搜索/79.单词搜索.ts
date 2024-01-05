/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start
function exist(board: string[][], word: string): boolean {
    const rows = board.length;
    const columns = board[0].length;
    if (rows * columns < word.length) {
        return false;
    }

    const visited = Array.from(Array(rows), () => Array.from(Array(columns), () => false));
    const wordsFinder = (i, j, wordIndex): boolean => {
      if (i < 0 || i >= rows || j < 0 || j >= columns || visited[i][j]) {
        return false;
      }
      if (board[i][j] !== word.charAt(wordIndex)) {
        return false;
      }
      // 最后一个字符匹配了，说明全部找到了
      if (wordIndex === word.length - 1) {
        return true;
      }
      let result = false;
      // 该路径匹配到字符，占个位，接着朝四个方向探索
      visited[i][j] = true;
      const nextIndex = wordIndex + 1;
      // 由当前点向上下左右四路径出发，任意方向找到了都可以
      const findNext = 
        wordsFinder(i, j + 1, nextIndex) ||
        wordsFinder(i + 1, j, nextIndex) ||
        wordsFinder(i, j - 1, nextIndex) ||
        wordsFinder(i - 1, j, nextIndex);

      if (findNext) {
        console.log(word.charAt(wordIndex), 'e13213');
        result = true;
      }
      // 将原路线清空，防止影响其他路径
      visited[i][j] = false;
      return result;
    };

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < columns; j++) {
        const wordExist = wordsFinder(i, j, 0);
        if (wordExist) {
          return true;
        }
      }
    }
    return false;
};

// @lc code=end


