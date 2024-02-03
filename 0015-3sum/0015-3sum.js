/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    `
    nums = [-1,0,1,2,-1,-4]
    nums = [ -4, -1, -1, 0, 1, 2]


    i = nums[0] = - 4 

    target = 0 
    
    `
       let sortedNums = nums.sort((a,b) => a - b);
    let res = [];

    for (let i = 0; i < sortedNums.length - 2; i++) {
        if (i === 0 || (i > 0 && sortedNums[i] !== sortedNums[i - 1])) {
            let left = i + 1;
            let right = sortedNums.length - 1;
            let target = 0 - sortedNums[i];

            while (left < right) {
                if (sortedNums[left] + sortedNums[right] === target) {
                    res.push([sortedNums[i], sortedNums[left], sortedNums[right]]);

                    while (left < right && sortedNums[left] === sortedNums[left + 1]) left++;
                    while (left < right && sortedNums[right] === sortedNums[right - 1]) right--;

                    left++;
                    right--;
                } else if (sortedNums[left] + sortedNums[right] < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }

    return res;
};