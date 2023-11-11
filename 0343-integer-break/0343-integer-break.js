/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
    const dpMemo = {};

    function dp(num) {
        if (num <= 3) {
            return num;
        }

        if (dpMemo[num]) {
            return dpMemo[num];
        }

        let ans = num;
        for (let i = 2; i < num; i++) {
            ans = Math.max(ans, i * dp(num - i));
        }

        dpMemo[num] = ans;

        return ans;
    }

    if (n <= 3) {
        return n - 1;
    }

    return dp(n);
}