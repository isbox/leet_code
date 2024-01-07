/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
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
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// 数组记录反转
// function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
//     if (!head) return null;
//     if (left === right) return head;

//     const nodesList: ListNode[] = [];
//     let leftPreNode: ListNode | null = null;
//     let leftNode: ListNode | null = null;
//     let rightNode: ListNode | null = null;
//     let rightNextNode: ListNode | null = null;
//     let headTarget: ListNode | null = head;
//     let index = 1;

//     while(headTarget) {
//         if (index > right + 1) { break; }
//         if (left - 1 === index) { leftPreNode = headTarget; }
//         if (left === index) { leftNode = headTarget; }
//         if (right === index) { rightNode = headTarget; }
//         if (right + 1 === index) { rightNextNode = headTarget; }
//         if (index >= left && index <= right) {
//             nodesList.push(headTarget);
//         }

//         headTarget = headTarget.next;
//         index += 1;
//     }

//     for (let i = nodesList.length - 1; i >= 0; i--) {
//         nodesList[i].next = nodesList[i - 1] ?? null;
//     }

//     if (leftPreNode) {
//         leftPreNode.next = rightNode;
//     }

//     leftNode!.next = rightNextNode;

//     if (left === 1) {
//         head = rightNode;
//     }

//     return head;
// };

// 双指针反转
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    if (!head) return null;
    if (left === right) return head;

    while(left < right) {
        let target: ListNode | null = head;
        let leftPreNode: ListNode | null = null;;
        let rightNode: ListNode;
        let index = 1;
        while(target) {
            if (left - 1 === index) {
                leftPreNode = target;
            }
            if (right === index) {
                rightNode = target;
            }
            target = head.next;
        }
        const cache = rightNode!.next;
        const leftNode = leftPreNode?.next ?? head;
        if (leftPreNode) {
            leftPreNode.next = rightNode!;
        } else {
            head = rightNode!;
        }

        left + 1;
        right - 1;
    }

    return head;
};
// @lc code=end

