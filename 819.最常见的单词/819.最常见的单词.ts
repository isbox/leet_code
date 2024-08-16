/*
 * @lc app=leetcode.cn id=819 lang=typescript
 *
 * [819] 最常见的单词
 */

// @lc code=start
function mostCommonWord(paragraph: string, banned: string[]): string {
  if (!paragraph.length) return '';
  const bannedMap = banned.reduce((cur, next) => {
    cur[next] = 1;
    return cur;
  }, {});
  const wordsArr = paragraph.split(/\W/);
  const anwsers = {};

  for (const i of wordsArr) {
    if (i) {
      const lowCaseWords = i.toLowerCase();
      if (!bannedMap[lowCaseWords]) {
        anwsers[lowCaseWords] = (anwsers[lowCaseWords] ?? 0) + 1
      }
    }
  }

  let anwser = '';

  Object.keys(anwsers).forEach((i) => {
    if (!anwser || anwsers[i] > anwsers[anwser]) {
      anwser = i;
    };
  });

  return anwser;
};
// @lc code=end

