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
# 快指针先行，领先慢指针n个长度，当快指针走到链表尽头时，此时慢指针的位置即是要删除的位置
class Solution:
    def removeNthFromEnd(self, head, n):
        if n == 0:
            return head

        if not head.next and n == 1 :
            head.val = None
            return None

        # 定义快指针
        fast_pointer = head
        # 定义慢指针，由于删除需要知道慢指针前一个是什么，所以由下方slow_prev_pointer记录
        slow_pointer = None
        # 记录前一个慢指针
        slow_prev_pointer = None
        # 由于快指针默认为头节点，所以已经先行一步，index初始值为1
        index = 1
        while fast_pointer:
            # 链表前进到下一位，步数(index)加1
            fast_pointer = fast_pointer.next
            index = index + 1

            # 当快指针领先满指针大于n值时，慢指针开始移动
            if index > n:
                if slow_pointer:
                    # 记录前一个慢指针
                    slow_prev_pointer = slow_pointer
                    slow_pointer = slow_pointer.next
                else:
                    slow_pointer = head

        if slow_pointer:
            if slow_prev_pointer:
                slow_prev_pointer.next = slow_prev_pointer.next.next
            else:
                # 如果slow_prev_pointer = None说明要删除的链表结点为头结点
                # 参数无法重新赋值，用此方式相当与删除了头节点
                return slow_pointer.next

        return head


# @lc code=end

