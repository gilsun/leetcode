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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0 

    const longest_path = (root) => {
    if (root === null ) return 0
    let left = longest_path(root.left)
    let right = longest_path(root.right)

    diameter = Math.max(diameter, left + right)

    return Math.max(left, right) + 1
    }

    longest_path(root)

    return diameter

};