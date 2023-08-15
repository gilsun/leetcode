var levelOrder = function(root) {
    if (!root) return []
    let que = [root]// que = [9, 20]
    let res = [] // [[3]]

    while(que.length > 0) {
        let checkQueLength = que.length
        let currentLevel = []

        for (let i = 0; i < checkQueLength; i ++) { // checkQueLength = 1, i = 0 
            let currentNode = que.shift() // que에서 첫번째 노드를 꺼냄 (shift는 배열에서 첫번째 요소를 제거하고 해당 요소를 반환하는 메소드) currentNode = 3,  checkQueLength = 0 
            if (currentNode.left) {
                que.push(currentNode.left) //que = [9]
            }           
            if (currentNode.right) { // que = [9, 20]
                que.push(currentNode.right)
            }
            currentLevel.push(currentNode.val)
        }
        res.push(currentLevel)
    }
    
    return res
};
