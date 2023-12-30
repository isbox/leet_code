# -*- coding:utf-8 -*-
# @lc app=leetcode.cn id=2 lang=python3
#
# [2] 两数相加
#

# @lc code=start
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    recordResult = None
    result = None
    
    def addTwoNumbers(self, l1, l2, carry = 0):
      # 最后一位
      if not l1 and not l2:
        if carry != 0:
          self.result.next = ListNode(carry)
        return self.recordResult

      l1Val = l1.val or 0 if l1 else 0
      l2Val = l2.val or 0 if l2 else 0
      
      if l1Val == 0 and l2Val == 0 and not l1.next and not l2.next and not self.result:
        return ListNode(0)

      itemResult = l1Val + l2Val + carry
      needCarry = itemResult >= 10
      itemResult = itemResult % 10 if needCarry else itemResult

      if not self.result:
        self.result = ListNode(itemResult)
        self.recordResult = self.result
      else:
        self.result.next = ListNode(itemResult)
        self.result = self.result.next

      return self.addTwoNumbers(l1.next if l1 else None, l2.next if l2 else None, 1 if needCarry else 0)      

c = [0,8,8,8,8,2,9,3,1,1]
cNode = None
for cv in c:
  if not cNode:
    cNode = ListNode(cv)
  cNode.next = ListNode(cv)

d = [0,9,1,5,5,5,1,1,6]
dNode = None
for cv in c:
  if not cNode:
    cNode = ListNode(cv)
  cNode.next = ListNode(cv)

# c = ListNode(2)
# c.next = ListNode(4)
# c.next.next = ListNode(3)

# d = ListNode(5)
# d.next = ListNode(6)
# d.next.next = ListNode(4)

a = Solution()
b = a.addTwoNumbers(cNode, dNode)
while b:
  print(b.val)
  b = b.next
# print(b.val)
# print(b.next.val)
# print(b.next.next.val)
# @lc code=end

