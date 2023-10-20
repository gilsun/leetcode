/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {

    const n = cost.length;
    let dp = Array(2).fill(0);

    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }

    console.log('dp', dp)
    return dp[n]
};