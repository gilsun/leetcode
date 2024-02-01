/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  
    let left = Array(nums.length).fill(1)
    let right = Array(nums.length).fill(1)
    let n = nums.length
    let res =[]

    for (let i = 1; i < n; i ++) {
        left[i] = left[i - 1] * nums[i -1]
    }

    for( let i = n-2; i > -1; i--) {
        right[i] = right[i + 1] *nums[i +1]
    }


    for (let i = 0; i < n ; i ++) {
        res[i] = left[i] * right[i]
    }

    return res
};