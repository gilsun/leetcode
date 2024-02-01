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

  while (queue.length > 0) {
    let [x, node] = queue.shift();

    if (!columnItems[x]) {
      columnItems[x] = [];
    }

    columnItems[x].push(node.val);

    min_x = Math.min(min_x, x);
    max_x = Math.max(max_x, x);

    if (node.left) {
      queue.push([x - 1, node.left]);
    }
    if (node.right) {
      queue.push([x + 1, node.right]);
    }
  }

  for (let i = min_x; i <= max_x; i++) {
    res.push(columnItems[i]);
  }

  return res;
};

console.log(verticalOrder([3, 9, 20, null, null, 15, 7]));
