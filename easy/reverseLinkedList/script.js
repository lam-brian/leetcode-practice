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
  // Iterative
  //     let prev = null;
  //     let curr = head;

  //     while (curr) {
  //         let temp = curr.next;
  //         curr.next = prev;
  //         prev = curr;
  //         curr = temp;
  //     }
  //     return prev;

  // Recursive
  if (!head) return null;

  let newHead = head;
  if (head.next) {
    newHead = reverseList(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
};
