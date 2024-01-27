/*
 * @lc app=leetcode.cn id=61 lang=typescript
 *
 * [61] 旋转链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
// 解法1：缺点，循环次数太多
// 关键在于找到链表的长度
// 先跑完整个链表，记录链表总长len
// 找到k与len的余数可以知道余数(K>len存在绕圈)后面才是真正需要移动的节点
// 将余数节点next置空，余数后节点最后一个节点拼在头节点，返回余数后第一个节点即可
// function rotateRight(head: ListNode | null, k: number): ListNode | null {
//     if (!head || !head.next || !k) return head;
//     // 记录链表总长
//     let nodeLen: number = 0;
//     let target = head;
//     while (target) {
//         target = target.next;
//         nodeLen += 1;
//     }
//     // 重新赋值，真正需要移动的长度点
//     k = k % nodeLen;
//     if (k === 0) return head;
    
//     let index = 0;
//     let res: ListNode = null;
//     target = head;
//     // 再次循环，找到断开点
//     while (target) {
//         index += 1;
//         // 如果总长 - 当前长度等于k，则到达截断点
//         if (nodeLen - index === k) {
//             // 截断点后面一个节点最为头节点
//             res = target.next;
//             // 截断点next置空，成为尾节点
//             target.next = null;
//         } else {
//             target = target.next;
//         }
//     }
//     target = res;
//     // 再次循环，找到截断链表的尾节点
//     while (true) {
//         // 找到尾节点后，接到原链表的头节点，链表完成旋转
//         if (!target.next) {
//             target.next = head;
//             return res;
//         }
//         target = target.next;
//     }
// };


// 解法2：链表接环断环
// 题目的名称叫旋转链表，选择这个词能给到一个思路是，只有连成环的链表才能旋转
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || !k) return head;
    // 记录链表总长
    let nodeLen: number = 0;
    let target = head;
    let lastNode: ListNode = null;
    // let step: ListNode = null;
    while (target) {
        nodeLen += 1;
        if (!target.next) {
            lastNode = target;
        }
        target = target.next;            
    }
    // 这里是非常重要的逻辑
    // 链表长度 - 真实旋转移动长度 = 环链表需要断开环的地方
    let realMove = nodeLen - k % nodeLen;
    if (realMove === nodeLen) {
        // 余数为0，链表无需旋转
        return head;
    }
    // 首位连接，组成环
    lastNode.next = head;
    target = head;
    // 开始旋转
    while (realMove > 0) {
        realMove -= 1;
        // 到达目的截断点
        if (realMove === 0) {
            // 下一个节点即为头节点，用变量单独存储头节点
            const res = target.next;
            // 断环，当前节点即成为尾节点
            target.next = null; 
            // 返回头节点，链表旋转完毕
            return res;
        }
        target = target.next;
    }
};
// @lc code=end
