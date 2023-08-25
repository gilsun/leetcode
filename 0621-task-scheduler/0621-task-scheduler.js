/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let map = new Array(26).fill(0);
    console.log(map)
    
    for(let task of tasks) {
        map[task.charCodeAt() - "A".charCodeAt()]++;
    }
    
    map.sort((a, b) => a - b);
    
    let max_val = map[25] - 1, idle_slots = max_val * n;
    
    for(let i = 24; i >= 0 && map[i] > 0; i--) {
        idle_slots -= Math.min(map[i], max_val);
    }
    
    return idle_slots > 0 ? idle_slots + tasks.length : tasks.length;
};