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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {

const isSame = (s,t ) => {
    if( s === null && t === null ) return true 
    if ( s === null || t === null || s.val !== t.val) return false 

    return isSame(s.left, t.left) && isSame(s.right, t.right)
}

if (!root) return false 

return isSame(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)


};