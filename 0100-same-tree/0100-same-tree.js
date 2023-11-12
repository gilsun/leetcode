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

        // 두 노드를 확인하는 함수
        function check(p, q) {
            // 두 노드가 모두 null이면 true 반환
            if (p === null && q === null) {
                return true;
            }
            // 한쪽 노드만 null이면 false 반환
            if (p === null || q === null) {
                return false;
            }
            // 두 노드의 값이 다르면 false 반환
            if (p.val !== q.val) {
                return false;
            }
            return true;
        }

        // 큐 초기화 (JavaScript의 배열을 큐처럼 사용)
        let queue = [[p, q]];

        while (queue.length > 0) {
            let [p, q] = queue.shift();
            
            if (!check(p, q)) {
                return false;
            }

            if (p) {
                queue.push([p.left, q.left]);
                queue.push([p.right, q.right]);
            }
        }

        return true;
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
