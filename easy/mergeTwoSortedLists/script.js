/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let nullNode = { val: 0, next: null };
  let prev = nullNode;
  while (list1 && list2) {
    if (list1.val >= list2.val) {
      prev.next = list2;
      list2 = list2.next;
    } else {
      prev.next = list1;
      list1 = list1.next;
    }
    prev = prev.next;
  }
  prev.next = list1 || list2;
  return nullNode.next;
};
