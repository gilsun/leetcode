var findKthLargest = function (nums, k) {
  `
  nums = [3,2,1,5,6,4], k = 2
  
  `;
  // TC => O(nlogn), SC => O(n)
  const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");
  let max = new MaxPriorityQueue();

  for (let num of nums) {
    max.enqueue(num);
  }
  console.log("max", max);
  let res = 0;
  while (k !== 0) {
    res = max.dequeue().element;
    k--;
  }
  return res;
};
