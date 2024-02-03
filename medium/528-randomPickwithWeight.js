/**
 * @param {number[]} w
 */
var Solution = function (w) {
  `
   w = [1, 3]
   map = {
      accumulated Sum : index, 
      1 : 0 , 
      4, : 1 
   }
  `;

  this.accumulatedSum = 0;
  this.sumAndIndex = new Map();
  for (let i = 0; i < w.length; i++) {
    this.accumulatedSum += w[i];
    this.sumAndIndex.set(this.accumulatedSum, i);
  }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
  let randomNumber = Math.random() * this.accumulatedSum;
  for (let accSum of this.sumAndIndex.keys()) {
    if (randomNumber < accSum) return this.sumAndIndex.get(accSum);
  }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
