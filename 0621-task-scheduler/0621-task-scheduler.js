/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// ASCII (American Standard Code for Information Interchange)에서는 대문자 알파벳의 유니코드
// A: 65
// B: 66
// C: 67
// D: 68
// E: 69
// ...
// Z: 90
var leastInterval = function(tasks, n) {
    let map = Array(26).fill(0);

    // 각 태스크의 빈도수를 구합니다.
    for(let task of tasks) {
        map[task.charCodeAt(0) - "A".charCodeAt(0)]++;
    }
    
    // 최대 빈도수를 찾습니다.
    let max_val = Math.max(...map);
    let countOfMaxVal = map.filter(val => val === max_val).length;
    
    return Math.max((max_val - 1) * (n + 1) + countOfMaxVal, tasks.length);
};