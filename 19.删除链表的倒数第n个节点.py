# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=19 lang=python3
#
# [19] 删除链表的倒数第N个节点
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None

# 解题思路：使用快慢指针
# 快指针先行，领先慢指针n个长度，当快指针走到链表尽头时，此时慢指针后一位的位置即是要删除的位置
class Solution:
    def removeNthFromEnd(self, head, n):
        if n == 0:
            return head

        current = head
        # 定义快指针
        fast_pointer = head
        # 定义慢指针
        slow_pointer = None
        index = 0
        while fast_pointer.next:
            # 当快指针领先满指针到n值时，慢指针开始移动
            if index >= n:
                if slow_pointer:
                    slow_pointer = slow_pointer.next
                else:
                    slow_pointer = head

            # 链表前进到下一位，步数(index)加1
            fast_pointer = fast_pointer.next
            index = index + 1

        # 如果slow指针存在值且slow指针下一位也存在
        if slow_pointer and slow_pointer.next:
            # 将slow指针下一位指向下下位，从而将slow后以为值删除
            slow_pointer.next = slow_pointer.next.next

        return head

ls = ListNode(1)
# ls.next = ListNode(2)
# ls.next.next = ListNode(3)
# ls.next.next.next = ListNode(4)
# ls.next.next.next.next = ListNode(5)
a = Solution()
c = a.removeNthFromEnd(ls, 1)
while ls:
    print(ls.val)
    ls = ls.next


# @lc code=end

