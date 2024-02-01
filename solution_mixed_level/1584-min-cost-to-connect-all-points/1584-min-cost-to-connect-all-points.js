/**
 * @param {number[][]} points
 * @return {number}
 */
/**
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function(points) {
    const n = points.length;
    const edges = [];

    // 모든 포인트들 사이의 거리 계산
    for(let i = 0; i < n; i++) {
        for(let j = i + 1; j < n; j++) {
            const distance = Math.abs(points[i][0] - points[j][0]) + Math.abs(points[i][1] - points[j][1]);
            edges.push([distance, i, j]);
        }
    }

    // 거리를 기준으로 정렬
    edges.sort((a, b) => a[0] - b[0]);
    
    // 크루스칼 알고리즘을 위한 초기화
    const parent = Array(n).fill(0).map((_, idx) => idx);

    const find = (x) => {
        if (parent[x] !== x) {
            parent[x] = find(parent[x]);
        }
        return parent[x];
    }

    const union = (x, y) => {
        const rootX = find(x);
        const rootY = find(y);

        if (rootX !== rootY) {
            parent[rootX] = rootY;
        }
    }

    // 크루스칼 알고리즘 실행
    let result = 0;
    for (const [cost, x, y] of edges) {
        if (find(x) !== find(y)) {
            result += cost;
            union(x, y);
        }
    }

    return result;
};
