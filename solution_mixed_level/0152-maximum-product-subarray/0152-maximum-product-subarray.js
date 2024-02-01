/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {

    let res = Math.max(...nums)
    let curMin = 1
    let curMax = 1
    
    for (let num of nums ){
        
        if (num === 0){
            curMin = 1
            curMax = 1
            continue 
        }
        
        let temp = num * curMin 
        curMin = Math.min(temp, num * curMax, num) 
        curMax = Math.max (num * curMax, temp, num )
        
        res = Math.max(res, curMax)
    }
    
    return res 
};