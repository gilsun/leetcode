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
 * @return {boolean}
 */
 isBalanced = function(root) {
     const height=(root)=>  {
  
        if (!root) {
            return -1;
        }
        return 1 + Math.max(height(root.left), height(root.right));
    }

   
        if (!root) {
            return true;
        }

        return Math.abs(height(root.left) - height(root.right)) < 2 
            && isBalanced(root.left) 
            && isBalanced(root.right);
}
