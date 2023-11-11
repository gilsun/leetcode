/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
    const memo = {};

    function dp(num) {
        if (num <= 3) {
            return num;
        }

        if (memo[num]) {
            return memo[num];
        }

        let ans = num;
        for (let i = 2; i < num; i++) {
            ans = Math.max(ans, i * dp(num - i));
        }

        memo[num] = ans;
        return ans;
    }

    if (n <= 3) {
        return n - 1;
    }

    return dp(n);
}