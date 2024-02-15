/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = nums.slice();
  this.nums = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.original;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  // let array = this.nums.slice()

  for (let i = 0; i < this.nums.length; i++) {
    let randomIndex = Math.floor(Math.random() * this.nums.length);
    // let randomIndex = Math.floor(Math.random() * (array.length - i)) + i   ;

    [this.nums[i], this.nums[randomIndex]] = [
      this.nums[randomIndex],
      this.nums[i],
    ];
  }

  return this.nums;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
