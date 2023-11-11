/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
	const memo = {};
   if (n <= 3) {
        return n - 1;
    }

    function dp(num) {
        if (memo[num]) {
            return memo[num];
        }
        let ans = num;
        for (let i = 2; i < num; i++) {
            let val = i * dp(num - i)
            ans = Math.max(ans,val);
        }
        memo[num] = ans;
        return ans;
    }

 
    return dp(n);
}