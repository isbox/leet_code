/*
 * @lc app=leetcode.cn id=68 lang=typescript
 *
 * [68] 文本左右对齐
 */

// @lc code=start
function fullJustify(words: string[], maxWidth: number): string[] {
    const res: string[] = [];
    let signleWords: string[] = [];
    for (let i = 0; i < words.length; i++) {
        if (signleWords.length === 0) {
            signleWords.push(words[i]);
        } else {
            // 这道题的关键在于此处的空格，单词拼接中间必然需要存在一个空格的
            signleWords.push(` ${words[i]}`);
        }

        const len = signleWords.join('').length;
        // 当加到超出maxWidth限制时，需要弹出新加的单词
        if (len > maxWidth) {
            signleWords.pop();
            const lastLen = maxWidth - signleWords.join('').length;
            const resLen = signleWords.length;
            // 计算余数，从左到右部空格时，就看余数有多少
            let remainder = lastLen % (resLen - 1);
            // 每个单词之间还需要多少个空格
            const emptyEach = parseInt(`${lastLen / (resLen - 1)}`, 10);
            let resStr = signleWords.reduce((cur, next, index) => {
                if (index > 0) {
                    let emptyPadLen = emptyEach;
                    if (remainder !== 0) {
                        // 这里就是余数空格处理，从左到右，每个单词补一个空格，直到余数用完
                        remainder -= 1;
                        emptyPadLen += 1;
                    }
                    return `${cur}${''.padStart(emptyPadLen)}${next}`;
                }
                return next;
            }, '');
            // 此处防止单个超长数组，避免reduce直接返回达不到maxWidth长度
            if (resStr.length < maxWidth) { resStr = resStr.padEnd(maxWidth) }
            res.push(resStr);
            // 因为弹出了新单词，要计算后面的需要把它加回去
            signleWords = [words[i]];
        }

        // 此处处最后一项，最后一项需要空格全在右边
        if (i === words.length - 1 && signleWords.length) {
            const lastWords = signleWords.join('');
            res.push(lastWords.padEnd(maxWidth));
        }
    }
    return res;
};
// @lc code=end

