/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    if (n === 0) return tasks.length
    
    let map = {}
    
    for (const task of tasks) {
        if (!map[task]) {
            map[task] = 0; 
        }
        map[task]++
    }
    
    let counts = Object.values(map)

    counts.sort((a,b) => b - a)

    
    let most = counts[0]
    let idle = (most - 1)*n 


    for (let i = 1; i < counts.length; i++) {
         idle = idle-Math.min(counts[i], most - 1, idle);
        if (idle === 0) break 
    }
    
    return tasks.length + idle 
    
};