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
   let taskCount = new Array(26).fill(0);
   
   for (let task of tasks) {
       let index = task.charCodeAt() - "A".charCodeAt();
       taskCount[index]++;
   }
    
    taskCount.sort((a,b) => a - b);
    
    let mostFrequentTaskCount = taskCount[25];
    let idleCount = (mostFrequentTaskCount - 1) * n;
    
    for (let i = 24; i >= 0 && taskCount[i] > 0; i--) {
        idleCount -= Math.min(taskCount[i], mostFrequentTaskCount - 1);
    }
    
    if (idleCount > 0) return idleCount + tasks.length;
    else return tasks.length;
};
    

