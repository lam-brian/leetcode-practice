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
  const result = [];
  let left = 0;
  let right = 0;
  while (left <= list1.length && right <= list2.length) {
    if (list1[left] < list2[right]) {
      result.push(list1[left]);
      left++;
    } else {
      result.push(list2[right]);
      right++;
    }
  }
  return result;
};
