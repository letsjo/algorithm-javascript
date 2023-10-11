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
var reverseList = function (head) {
  let curr = null;
  let prev = null;

  while (head) {
    curr = head.next;
    head.next = prev;
    prev = head;
    head = curr;
    console.log("curr: ", curr);
    console.log("prev: ", prev);
    console.log("head: ", head);
  }
  return prev;
};