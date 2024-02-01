/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    // 인접 리스트 초기화
    const adjList = new Map();
    for(let [u, v, w] of times) {
        if(!adjList.has(u)) adjList.set(u, []);
        adjList.get(u).push([v, w]);
    }
    
    // 각 노드까지의 거리를 무한대로 초기화
    const distances = new Array(n + 1).fill(Infinity);
    distances[k] = 0;  // 시작 노드의 거리는 0
    
    // 노드 방문 여부를 저장하는 배열
    const visited = new Array(n + 1).fill(false);
    
    while (true) {
        let candNode = -1;
        let candDist = Infinity;
        
        // 아직 방문하지 않은 노드 중에서 최단 거리의 노드를 찾음
        for (let i = 1; i <= n; i++) {
            if (!visited[i] && distances[i] < candDist) {
                candDist = distances[i];
                candNode = i;
            }
        }
        
        // 모든 노드를 방문했거나 더 이상 연결된 노드가 없는 경우 종료
        if (candNode < 0) break;
        
        // 최단 거리의 노드를 방문 처리
        visited[candNode] = true;
        
        // 선택한 노드의 이웃 노드들의 거리 업데이트
        if (adjList.has(candNode)) {
            for (let [next, time] of adjList.get(candNode)) {
                distances[next] = Math.min(distances[next], distances[candNode] + time);
            }
        }
    }
    
    // 최대 지연 시간을 계산 (시작 노드를 제외한 노드들 중 최댓값)
    const maxDist = Math.max(...distances.slice(1));
    
    // 모든 노드에 도달할 수 없으면 -1 반환, 그렇지 않으면 최대 지연 시간 반환
    return maxDist === Infinity ? -1 : maxDist;
};