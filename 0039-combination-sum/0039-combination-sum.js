/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];
    
    const backtrack = (currentCombination, startIndex, currentTarget) => {
        // 종료 조건: 현재 목표값이 0이면 결과에 추가
        if (currentTarget === 0) {
            result.push([...currentCombination]);
            return;
        }

        // 종료 조건: 현재 목표값이 음수이면 반복 중지
        if (currentTarget < 0) return;

        for (let i = startIndex; i < candidates.length; i++) {
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
    
