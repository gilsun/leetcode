/**
 * @param {number[]} cookies
 * @param {number} k
 * @return {number}
 */
var distributeCookies = function(cookies, k) {
     const cur = new Array(k).fill(0);
    const n = cookies.length;

    function dfs(i, zeroCount) {
        // 남은 쿠키가 부족한 경우, 유효하지 않은 분배로 간주하고 무한대를 반환
        if (n - i < zeroCount) {
            return Infinity;
        }

        // 모든 쿠키를 분배한 후, 이 분배의 불공정성을 반환
        if (i === n) {
            return Math.max(...cur);
        }

        // i번째 쿠키를 각 아이에게 분배해 보고, 이 분배들 중 최소 불공정성을 업데이트
        let answer = Infinity;
        for (let j = 0; j < k; j++) {
            zeroCount -= cur[j] === 0 ? 1 : 0;
            cur[j] += cookies[i];

            // 다음 쿠키를 재귀적으로 분배
            answer = Math.min(answer, dfs(i + 1, zeroCount));

            // 백트래킹
            cur[j] -= cookies[i];
            zeroCount += cur[j] === 0 ? 1 : 0;
        }

        return answer;
    }

    return dfs(0, k);
};