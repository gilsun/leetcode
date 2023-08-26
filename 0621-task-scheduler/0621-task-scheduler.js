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
  // 작업 간의 간격이 필요하지 않을 경우, 총 작업 시간은 작업의 개수와 같습니다.
  if (n === 0) return tasks.length;

  // 각 작업의 빈도를 계산합니다.
  const counts = Array.from(counter(tasks).values());
    console.log(counts)

  // counts를 내림차순으로 정렬합니다. (최대 26개의 알파벳만 존재하므로 O(1) 복잡도입니다.)
  counts.sort((a, b) => b - a);
     console.log(counts)


  // 가장 빈번하게 등장하는 작업의 빈도입니다.
  const most = counts[0];
  
  // 가장 빈번한 작업 사이에 필요한 idle(대기) 시간을 계산합니다.
  let idle = (most - 1) * n;

  // 두 번째로 많이 등장하는 작업부터, 빈번한 작업 사이에 넣을 수 있는 작업의 수를 계산합니다.
  for (let i = 1; i < counts.length; i++) {
    // 남아있는 대기 시간에서 현재 작업 빈도(또는 most-1, 남아있는 idle 중 작은 것)를 빼줍니다.
    idle -= Math.min(counts[i], most - 1, idle);
    
    // 더 이상의 대기 시간이 필요하지 않을 경우 반복을 종료합니다.
    if (idle === 0) break;
  }

  // 총 작업 시간을 반환합니다. (실제 작업 + 대기 시간)
  return tasks.length + idle;
};

// 각 작업의 빈도를 계산하는 도우미 함수입니다.
const counter = (tasks) => {
  const map = new Map();

  // 각 작업의 빈도를 계산하여 맵에 저장합니다.
  for (const task of tasks) {
    map.set(task, (map.get(task) || 0) + 1);
  }

  return map;
}
