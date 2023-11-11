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
var isBalanced = function(root) {
     const height=(root)=>  {
        // 빈 트리의 높이는 -1입니다.
        if (!root) {
            return -1;
        }
        return 1 + Math.max(height(root.left), height(root.right));
    }


        // 빈 트리는 균형 트리의 정의를 만족합니다.
        if (!root) {
            return true;
        }

        // 서브트리의 높이가 1 이하 차이 나는지 확인하고, 만약 그렇다면
        // 서브트리들도 균형 트리인지 확인합니다.
        return Math.abs(height(root.left) - height(root.right)) < 2 
            && isBalanced(root.left) 
            && isBalanced(root.right);
    }


