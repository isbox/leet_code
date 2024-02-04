/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start
// 动态规划，无缓存超时解
// function wordBreak(s: string, wordDict: string[]): boolean {
//     const solution = (lastWords: string) => {
//         //如果当前的为空，说明要匹配的字符全部完成匹配，返回true
//         if (!lastWords.length) return true;
//         const res: boolean[] = [];
//         // 循环字典，检查剩余字符是否与字典字符匹配
//         for (let i = 0; i < wordDict.length; i++) {
//             const wordsLen = wordDict[i].length;
//             // 如果有匹配，将剩余字符带入方法继续递归求解
//             if (lastWords.slice(0, wordsLen) === wordDict[i]) {
//                 res.push(solution(lastWords.slice(wordsLen)));
//             }
//         }
//         // 如果含有true，说明匹配项目出现 
//         return res.some((v) => v);
//     }
//     const res = solution(s);
//     return res;
// };

// 动态规划，有缓存
// 从上面超时解中，我们知道在方法中唯一变化的值是s参数
// 所以用其作为dp（一个变量一维数组）缓存
function wordBreak(s: string, wordDict: string[]): boolean {
    const dp = Array.from(Array(s.length), () => false);
    // 占位，当s长度为0时，默认为true
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        // 循环字典，取出所有情况
        for (let j = 0; j < wordDict.length; j++) {
            const word = wordDict[j];
            // 字符数小与字典单词长度或者已经有结果缓存，不管，继续
            if (i - word.length < 0 || dp[i]) continue;
            // 对比第一个单词出现的情况
            if (i - word.length === 0) {
                dp[i] = word === s.substring(i - word.length, i);
            } else {
                // 看前一个位置是否能匹配 && 当前字符是否能匹配
                dp[i] = dp[i - word.length] && word === s.substring(i - word.length, i);
            }
        }
    }
    return dp[s.length] ?? false;
};
// @lc code=end

