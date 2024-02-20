/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {
  let removed = false;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] <= nums[i - 1]) {
      if (removed) return false;
      if (i > 1 && nums[i] <= nums[i - 2]) {
        nums[i] = nums[i - 1];
        removed = true;
      }
    }
  }
  return true;
};
