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
const leastInterval = function(tasks, n) {
  if (n === 0) return tasks.length;

     let map = {}; 
    for (const task of tasks) {
        if (!map[task]) {
            map[task] = 0;
        }
        map[task]++;
    }

 const counts = Object.values(map);
  counts.sort((a, b) => b - a);
  const most = counts[0];
  let idle = (most - 1) * n;

  for (let i = 1; i < counts.length; i++) {
      idle -= Math.min(counts[i], most - 1, idle);
      if (idle === 0) break;
  }

  return tasks.length + idle;
};