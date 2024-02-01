/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */


var topKFrequent = function(nums, k) {
    //nums = [1,1,1,2,2,3],

    // map = { 1: 3, 2: 2, 3: 1} k = 2 

    // map sort by value 

    // return k - 1 ( index )
  // O(nlogn)

    let map = {}

    for (let num of nums) {
        if(!map[num]) {
            map[num]= 0 
        }
        map[num] += 1
    }
    console.log('map', map)

    let res = Object.keys(map).sort((a,b)=> map[b]- map[a])
    console.log('res', res)
    return res.slice(0, k)
};