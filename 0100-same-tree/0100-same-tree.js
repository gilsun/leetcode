/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    if(p === null && q === null ) return true
    if(p === null || q === null ) return false
    if (p.val !== q.val){
        return false 
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};


// function isSameTree(p, q) {
//     // 두 노드가 모두 null이면 true 반환
//     if (p === null && q === null) {
//         return true;
//     }
//     // 한쪽만 null이면 false 반환
//     if (p === null || q === null) {
//         return false;
//     }
//     // 두 노드의 값이 다르면 false 반환
//     if (p.val !== q.val) {
//         return false;
//     }
//     // 왼쪽과 오른쪽 자식 트리를 재귀적으로 비교
//     return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
// }
