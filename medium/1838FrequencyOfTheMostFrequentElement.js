var maxFrequency = function (nums, k) {
  `


   nums = [1,4,8,13], k = 5

   1)sort nums 
   2)start left and right index 0 
   3) compare most right num * sliding window and current nums total(sliding widows) + k 
   4) find the max elements between r and l (r - l + 1)
  `;

  let sortedNums = nums.sort((a, b) => a - b);
  let left = 0;
  let slidingTotal = 0;
  let max = 0;
  for (let r = 0; r < nums.length; r++) {
    slidingTotal += sortedNums[r];
    // sliding window length = r - left + 1
    while (sortedNums[r] * (r - left + 1) > slidingTotal + k) {
      slidingTotal -= sortedNums[left];
      left++;
    }
    max = Math.max(r - left + 1, max);
  }
  return max;
};
