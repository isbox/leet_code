# -*- coding=utf-8 -*-
# @lc app=leetcode.cn id=707 lang=python3
#
# [707] 设计链表
#

# 链表节点
class Node:
    def __init__(self, val):
        self.value = val
        self.next = None

# @lc code=start
class MyLinkedList:

    def __init__(self):
        # 链表头
        self.head = None
        # 链表尾
        self.tail = None
        # 链表长度
        self.size = 0

    # 查找指定节点
    def getNodeByIndex(self, index):
        if index >= self.size or self.size == 0:
            return None

        node = self.head
        count = 0
        
        # 从头开始找比index小就将当前节点指向下一个节点 
        while count < index:
            node = node.next
            count += 1
        return node

    # 查找指定节点值
    def get(self, index):
        result = self.getNodeByIndex(index)
        if result:
            return result.value
        return -1

    def addAtHead(self, val):
        # 如果是第一位，头尾都指向该节点
        if not self.head:
            self.head = Node(val)
            self.tail = self.head
        else:
            # 如果不是第一位，创建新node，将新节点next指向头节点，原头节点赋值为新节点
            node = Node(val)
            node.next = self.head
            self.head = node
        # 链表长度+1
        self.size += 1

    def addAtTail(self, val):
        # 如果是第一位，直接调用头插法
        if not self.head:
            self.addAtHead(val)
        else:
            # 如果不是第一位，创建新节点，将尾节点next指向新节点，原未尾节点赋值为新节点
            node = Node(val)
            self.tail.next = node   
            self.tail = node
        # 链表长度+1
        self.size += 1

    def addAtIndex(self, index, val):
        if index > self.size:
            return None
        if index <= 0:
            # 如果下标小于等于0，直接使用头插法将节点插入第一位
            self.addAtHead(val)
        elif index == self.size:
            # 如果下表等于链表长度，直接使用尾插法插入最后一位
            self.addAtTail(val)
        else:
            # 初始化node为None，index > 0时停止，这样在最后的结果就是index下标前一个node
            node = None
            while index > 0:
                if node:
                    node = node.next
                else:
                    node = self.head
                index -= 1
            # node的next位置需要变更为new_node，new_node的next就为node的next
            new_node = Node(val)
            new_node.next = node.next
            node.next = new_node
            # 链表长度+1
            self.size += 1

    def deleteAtIndex(self, index):
        # 下标合法，多此一举是因为不想写太多self.size -= 1
        if index >= 0 and index < self.size:
            if index == 0:
                # 下标为0直接将头节点指向头节点的下一位
                self.head = self.head.next
            # elif index == self.size - 1:
            else:
                # 与添加时相同，找index的上一位
                node = None
                while index > 0:
                    if node:
                        node = node.next
                    else:
                        node = self.head
                    index -= 1
                node.next = node.next.next
                # 如果当前node.next为None，说明删除的是尾节点，需要重新指定tail
                if not node.next:
                    self.tail = node

            # 链表长度-1
            self.size -= 1

