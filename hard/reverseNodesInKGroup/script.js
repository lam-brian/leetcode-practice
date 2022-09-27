/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  const dummy = new ListNode(0, head);
  let groupPrev = dummy;

  while (true) {
    const kth = getKth(groupPrev, k);
    if (!kth) break;

    const groupNext = kth.next;

    // reverse group
    let prev = kth.next;
    let curr = groupPrev.next;

    while (curr !== groupNext) {
      let temp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = temp;
    }
    let temp = groupPrev.next;
    groupPrev.next = kth;
    groupPrev = temp;
  }
  return dummy.next;
};

const getKth = (curr, k) => {
  while (curr && k > 0) {
    curr = curr.next;
    k--;
  }
  return curr;
};
