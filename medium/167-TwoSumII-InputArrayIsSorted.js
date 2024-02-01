/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  `
  numbers = [2,7,11,15], target = 9
  left = 0 
  right = 3 

  2 + 15 = 17 

  2 + 11= 13 
  2 + 7 = 9
  `;

  let left = 0;
  let right = numbers.length - 1;
  let res = [];

  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    }
    if (numbers[left] + numbers[right] < target) {
      left++;
    }
    if (numbers[left] + numbers[right] === target) {
      res.push(left + 1);
      res.push(right + 1);
      return res;
    }
  }
};
