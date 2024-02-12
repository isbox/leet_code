/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// 普通解法，使用一个set数组记录无重复连续字符
// 当遇到重复字符时，先记录当前set数组的长度，与之前的最大长度对比，保留最大
// 将set数组中重复字符及其前面的字符剔除继续向后添加字符直到再次遇到重复
// 重复之前步骤，直至数组循环完毕，最后做一次set数组长度与之前最大长度的对比
// https://smms.app/image/NC52KrnzQTfx8mj
function lengthOfLongestSubstring(s: string): number {
    const len = s.length;
    if (!len) return 0;
    let maxSize: number = 0;
    const cache: Set<String> = new Set();
    for (let i = 0; i < len; i++) {
      // 如果set数组中有相同字符
      if (cache.has(s[i])) {
        // 将当前set数组的长度与之前记录长度做对比，记录最最长
        maxSize = Math.max(maxSize, cache.size);
        const arr = [...cache];
        // 找到重复字符下标
        const target = arr.findIndex((v) => v === s[i]);
        if (target > -1) {
          // 将重复字符下标之前的字符删除，类似bvbf这种防止只能取到bv，而正确答案是vbf
          for (let j = 0; j <= target; j ++) {
            cache.delete(arr[j]);
          }
        }
      }
      // 向set数组中添加字符
      cache.add(s[i]);
    }
    // 对比剩余set的长度和记录长度谁更大
    return Math.max(maxSize, cache.size);
};

// 解法2: 滑动窗口
// 官方题解：https://leetcode.cn/problems/longest-substring-without-repeating-characters/solutions/227999/wu-zhong-fu-zi-fu-de-zui-chang-zi-chuan-by-leetc-2/

// @lc code=end

