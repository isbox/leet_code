/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 */

// @lc code=start

// 解法：动态规划
// 这道题的状态转移方程很好想，要想知道当前金额需要用到的最小硬币数
// 就需要知道当前总额分别减去所有硬币面值后的剩余总额，到达这些总额需要的最小硬币数
// 知道后再加一就可以得到答案（加一是需要再加一枚硬币可以到达总金额）
// 以此类推递归下去，可以知道，当最后减到总额为0时必然有答案，而小于0则当前硬币面额无法法满足

// 缓存建立：
// 硬币可以重复使用，硬币数量永恒不变，只有金额会随着选择硬币的值而变化，对总金额值简历dp缓存
function coinChange(coins: number[], amount: number): number {
    // 无缓存超时dp
    // const len = coins.length;
    // if (amount === 0) return 0;
    // if (len === 1 && amount % coins[0] !== 0 ) return -1;
    // const dp = (total) => {
    //     if (total <= 0) return 0;
    //     // if (total < 0) return -1; 
    //     let record: number[] = [];
    //     for (let i = 1; i <= len; i++) {
    //         if (total - coins[i - 1] >= 0) {
    //             record.push(dp(total - coins[i - 1]))
    //         }
    //     }
    //     return Math.min(...record) + 1;
    // }
    // const res = dp(amount);
    // if (res) return res;
    // return -1;

    const len = coins.length;
    if (amount === 0) return 0;
    if (len === 1 && amount % coins[0] !== 0 ) return -1;
    // 下标为0代表总额为0，初使总额为0肯定不需要硬币，所以增加一位并赋值下标0初始值
    // 其余位默认正无穷，方便比较最小值
    const dp = Array.from(Array(amount + 1), () => Infinity);
    dp[0] = 0;
    // 循环总金额额度
    for (let i = 1; i <= amount; i++) {
        const res: number[] = [];
        // 循环不同面额的硬币
        for (let j = 0; j < len; j++) {
            if (i - coins[j] >= 0) {
                // 记录本轮结果
                res.push(dp[i - coins[j]]);
            }
        }
        // 选取本轮中最小的一次结果是多少，加上本轮需要选择的一次，存入缓存中
        // 如果本轮无结果 Math.min([])会得到Infinity这个结果
        dp[i] =  Math.min(...res) + 1;
    }

    // 如果结果正无穷大，则没有拼成该金额的条件，否则，取出缓存中的结果
    return dp[amount] === Infinity ? -1 : dp[amount];
};

// @lc code=end

