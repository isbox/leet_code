/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

// class TreeNode {
//          val: number
//          left: TreeNode | null
//          right: TreeNode | null
//          constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//              this.val = (val===undefined ? 0 : val)
//              this.left = (left===undefined ? null : left)
//              this.right = (right===undefined ? null : right)
//          }
//      }

// 暴力，高耗时，高内存
// 通过树的层序遍历实现
// function largestValues(root: TreeNode | null): number[] {
//     if (!root) {
//         return [];
//     }
//     // 结果集
//     const res: number[] = [];
//     // 层序队列
//     let query: TreeNode[] = [];
//     query.push(root);
//     // 如果存在层序队列时，说明改层有节点，否则说明到达最终层级
//     while(query.length) {
//         const vals: number[] = [];
//         // 新层序
//         const newQuery: TreeNode[] = [];
//         for (let i = 0; i < query.length; i++) {
//             // 收集该层的所有节点的值
//             vals.push(query[i].val);
//             // 以下都是在构建新的层级
//             if (query[i].left) {
//                 newQuery.push(query[i].left!);
//             }
//             if (query[i].right) {
//                 newQuery.push(query[i].right!);
//             }
//         }
//         // 层级中最大数存入结果
//         res.push(Math.max(...vals));
//         // 如果新层级有值，则说明后面还有可遍历的层，赋值给query做循环
//         if (newQuery.length) {
//             query = newQuery;
//         } else {
//             // 后面无层了，置空，循环结束
//             query = [];
//         }
//     }

//     return res;
// };

// 深度优先，可以使用树的前序遍历来解，通过记录树高度来实现最大值比较，On复杂
function largestValues(root: TreeNode | null): number[] {
    if (!root) {
        return [];
    }
    // 结果集
    const res: number[] = [];
    
    const depthFirst = (root, curHeight) => {
        // 如果无后续子节点了，跳出
        if (!root) {
            return;
        }
        // 如果当前结果集数组长度等于树高度，说明该层是一个新的层，将新层的值加入到结果集中
        if (res.length === curHeight) {
            res.push(root.val);
        } else {
            // 其他情况（数组长度大于层数），说明遍历到其他节点同层位置了，比较当前节点与之前同层节点的值谁大，记录大的
            res[curHeight] = Math.max(res[curHeight], root.val);
        }
        // 深度遍历左节点
        depthFirst(root.left, curHeight + 1);
        // 深度遍历右边节点
        depthFirst(root.right, curHeight + 1);
    }

    depthFirst(root, 0);

    return res;
};
// @lc code=end

