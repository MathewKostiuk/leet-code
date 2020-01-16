/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function (head) {
  return parseInt(traverse(head, ''), 2);
};

const traverse = (node, prev) => {
  if (!node) {
    return prev;
  }
  prev = `${prev}${node.val}`;
  return traverse(node.next, prev);
}
