/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// 解法：二叉树的层序遍历
// 关键在于给与奇偶数记录当前需要的偏离方向/数组填充方向
// 遍历的同时将下层链表节点记录下来
function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const res: number[][] = [];
    // 记录层数
    let floor = 1;
    // 记录当前需要遍历节点，默认根节点
    let nodes = [root];
    while(nodes.length) {
        const record: number[] = [];
        const newNodes: TreeNode[] = [];
        let recorder: (val: number) => void;
        if (floor % 2 !== 0) {
            // 奇数层向后追加
            recorder = (val: number) => record.push(val);
        } else {
            // 偶数层向前追加
            recorder = (val: number) => record.unshift(val)
        }
        // 记录当前层下层的所有非空节点
        for (let i = 0; i < nodes.length; i++) {
            recorder(nodes[i].val);
            if (nodes[i].left) newNodes.push(nodes[i].left);
            if (nodes[i].right) newNodes.push(nodes[i].right);
        }
        // 楼层数增加
        floor++;
        nodes = newNodes;
        res.push(record);
    }

    return res;
};
// @lc code=end

