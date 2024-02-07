/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  `
  left and right => position 
            l   r
  head = [1,2,3,4,5], left = 2, right = 4
          p c n 
          p n c 

      next = c.next 
      c.next = next.next 
      next.next = pre.next 
      pre.next = next 
  `;

  let dummy = new ListNode();
  console.log(dummy);
  dummy.next = head;
  let pre = dummy;
  let cur = head;

  for (let i = 1; i < left; i++) {
    cur = cur.next;
    pre = pre.next;
  }

  let diff = right - left;
  for (let i = 0; i < diff; i++) {
    let next = cur.next;

    cur.next = next.next;
    next.next = pre.next;
    pre.next = next;
  }

  return dummy.next;
};
