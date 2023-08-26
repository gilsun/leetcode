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

     let map = new Map()
   for (const task of tasks) {
      let currentCount = map.get(task); 
      if (!currentCount) {
          currentCount = 0; 
      }
      map.set(task, currentCount + 1); 
    }
    
    
  const counts = Array.from(map.values());
 

  counts.sort((a, b) => b - a);
     console.log(counts)



  const most = counts[0];
  

  let idle = (most - 1) * n;


  for (let i = 1; i < counts.length; i++) {

    idle -= Math.min(counts[i], most - 1, idle);
    

    if (idle === 0) break;
  }

 
  return tasks.length + idle;
};

