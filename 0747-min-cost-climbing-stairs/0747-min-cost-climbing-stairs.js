/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    // const n = cost.length
    // let dp = Array(n).fill(0)
    // dp[0] = 0
    // dp[1] = 0
    // for (let i = 2; i < n; i ++ ) {
    //    dp[i] = Math.min(dp[i-2]+ cost[i], dp[i - 1] + cost[i])
    // }

    // return dp[n-1]



     const n = cost.length;
    let dp = Array(n).fill(0);

    // 첫 번째 및 두 번째 계단을 무료로 오를 수 있으므로 dp[0]과 dp[1]을 0으로 초기화
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < n; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }

    return Math.min(dp[n - 2] + cost[n - 2], dp[n - 1] + cost[n - 1]);
};