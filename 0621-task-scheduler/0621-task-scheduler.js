/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
// ["A","A","A","B","B","C", "C", "D"]
// 2

var leastInterval = function(tasks, n) {
    
    if (n === 0 ) return tasks.length
    
    let map = {}
    
    for (const task of tasks) {
        if(!map[task]){
            map[task] = 0
        }
        map[task]++
    }
    
    console.log(map)
    
    const counts = Object.values(map)
    // [3,2,2,1]
    counts.sort((a,b) => b - a) 
    
    let most = counts[0]
    let slot = (most - 1)*n  
    
    for (let i = 1; i < counts.length; i ++) {
        slot = slot - Math.min(counts[i], most - 1, slot)
    }
    
    return slot + tasks.length 
    
};