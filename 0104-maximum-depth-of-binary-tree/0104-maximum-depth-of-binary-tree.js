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
// var maxDepth =(root)=> {
    
//     if ( !root) return 0; 
//     else {
//         return 1+Math.max( maxDepth(root.left), maxDepth(root.right));
//     }
// };


var maxDepth =(root)=> {
     if (root===null) return 0; 
    let left = maxDepth(root.left) +1 ; 
    let right = maxDepth(root.right)+1;    
    return Math.max( left, right)
    };