/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let length = 0;
  let tmp_head = head;
  while (tmp_head) {
    tmp_head = tmp_head.next;
    length += 1;
  }
  const middleLength = Math.floor(length / 2);
  for (let i = 0; i < middleLength; i++) {
    head = head.next;
  }
  return head
};

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
      f
1 -> 2 -> 3 -> 4 -> 5
     s
   
2nd loop
                f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode_2 = function (head) {
  let fast = slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};