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
    // 재귀 함수를 정의합니다. 이 함수는 노드의 높이를 반환하거나, 균형이 깨졌을 때 -1을 반환합니다.
    const checkBalance = (node) => {
        if (node === null) {
            return 0; // 빈 노드의 높이는 0입니다.
        }

        // 왼쪽과 오른쪽 서브트리의 높이를 계산합니다.
        let leftHeight = checkBalance(node.left);
        let rightHeight = checkBalance(node.right);

        // 균형이 깨진 경우, -1을 전파합니다.
        if (leftHeight === -1 || rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        // 해당 노드의 높이는 자식 노드들 중 더 높은 높이에 1을 더한 값입니다.
        return Math.max(leftHeight, rightHeight) + 1;
    };

    // 루트 노드에서 시작하여 트리의 균형 상태를 확인합니다.
    return checkBalance(root) !== -1;
};

