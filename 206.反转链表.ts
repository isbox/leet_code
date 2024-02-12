/*
 * @lc app=leetcode.cn id=206 lang=typescript
 *
 * [206] 反转链表
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

// 解法1: 循环记录再逆向
// function reverseList(head: ListNode | null): ListNode | null {
//   if (!head) return null;
//   const nodes: ListNode[] = [];
//   while(head) {
//     nodes.push(head);
//     head = head.next;
//   }

//   head = nodes.pop();
//   let target = head;

//   while(nodes.length) {
//     target.next = nodes.pop();
//     target = target.next;
//     if (nodes.length === 0) {
//       target.next = null;
//     }
//   }

//   return head;
// };

// 解法2: 双指针单次循环
// 一前一后
function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let prev = head;
  let cur = head.next;
  prev.next = null;

  while(cur) {
    const next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }

  return prev;
};

// @lc code=end

