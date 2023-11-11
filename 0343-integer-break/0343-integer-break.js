/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {
    if (n <= 3) {
        return n - 1;
    }

    let ans = 1;
    while (n > 4) {
        ans *= 3;
        n -= 3;
    }

    return ans * n;
}