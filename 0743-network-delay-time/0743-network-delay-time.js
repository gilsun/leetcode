/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function(times, n, k) {
    const adjList = new Map();
    for(let [u, v, w] of times) {
        if(!adjList.has(u)) adjList.set(u, []);
        adjList.get(u).push([v, w]);
    }
    
    const distances = new Array(n + 1).fill(Infinity);
    distances[k] = 0;
    
    const visited = new Array(n + 1).fill(false);
    
    while (true) {
        let candNode = -1;
        let candDist = Infinity;
        
        for (let i = 1; i <= n; i++) {
            if (!visited[i] && distances[i] < candDist) {
                candDist = distances[i];
                candNode = i;
            }
        }
        
        if (candNode < 0) break;
        
        visited[candNode] = true;
        
        if (adjList.has(candNode)) {
            for (let [next, time] of adjList.get(candNode)) {
                distances[next] = Math.min(distances[next], distances[candNode] + time);
            }
        }
    }
    
    const maxDist = Math.max(...distances.slice(1));
    
    return maxDist === Infinity ? -1 : maxDist;
};