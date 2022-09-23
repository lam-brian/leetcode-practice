/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const copyStorage = new Map();
  copyStorage.set(null, null);
  let cur = head;
  while (cur) {
    const copy = new Node(cur.val);
    copyStorage.set(cur, copy);
    cur = cur.next;
  }

  cur = head;

  while (cur) {
    const copy = copyStorage.get(cur);
    copy.next = copyStorage.get(cur.next);
    copy.random = copyStorage.get(cur.random);
    cur = cur.next;
  }

  return copyStorage.get(head);
};
