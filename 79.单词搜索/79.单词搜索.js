/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */
// @lc code=start
function exist(board, word) {
    var rows = board.length;
    var columns = board[0].length;
    if (rows * columns < word.length) {
        return false;
    }
    var visited = Array.from(Array(rows), function () { return Array.from(Array(columns), function () { return false; }); });
    var wordsFinder = function (i, j, wordIndex) {
        if (i < 0 || i >= rows || j < 0 || j >= columns || visited[i][j]) {
            console.log(111111);
            return false;
        }
        if (board[i][j] !== word.charAt(wordIndex)) {
            console.log(222222);
            return false;
        }
        // 最后一个字符匹配了，说明全部找到了
        if (wordIndex === word.length - 1) {
            return true;
        }
        var result = false;
        // 该路径匹配到字符，占个位，接着朝四个方向探索
        visited[i][j] = true;
        var nextIndex = wordIndex + 1;
        // 由当前点向上下左右四路径出发
        var findNext = wordsFinder(i, j + 1, nextIndex) ||
            wordsFinder(i + 1, j, nextIndex) ||
            wordsFinder(i, j - 1, nextIndex) ||
            wordsFinder(i - 1, j, nextIndex);
        console.log(findNext, 'e13213----');
        if (findNext) {
            console.log(word.charAt(wordIndex), 'e13213');
            result = true;
        }
        // 将原路线清空，防止影响其他路径
        visited[i][j] = false;
        return result;
    };
    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {
            var wordExist = wordsFinder(i, j, 0);
            if (wordExist) {
                return true;
            }
        }
    }
    return false;
}
;
var a = exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], "ABCCED");
console.log(a);
// @lc code=end
