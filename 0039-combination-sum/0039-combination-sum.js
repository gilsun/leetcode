/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    // 먼저 candidates를 오름차순 정렬
    candidates.sort((a, b) => a - b);
    
    const backtrack = (currentCombination, startIndex, currentTarget) => {
        // 종료 조건: 현재 목표값이 0이면 결과에 추가
        if (currentTarget === 0) {
            result.push([...currentCombination]);
            return;
        }
        
        for (let i = startIndex; i < candidates.length; i++) {
            // 현재 후보가 현재 목표보다 클 경우, 이후의 후보는 모두 크기 때문에 반복을 중단합니다.
            if (candidates[i] > currentTarget) break;

            // 현재 후보를 조합에 추가하고 백트래킹을 시작합니다.
            currentCombination.push(candidates[i]);
            backtrack(currentCombination, i, currentTarget - candidates[i]);
            currentCombination.pop();  // 백트래킹: 마지막 요소 제거
        }
    };
    
    // 백트래킹 시작
    backtrack([], 0, target);
    
    return result;
};