/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  if (!root) {
    return [];
  }

  for (let i = min_x; i <= max_x; i++) {
    res.push(columnItems[i]);
  }

  return res;
};

console.log(verticalOrder([3, 9, 20, null, null, 15, 7]));
