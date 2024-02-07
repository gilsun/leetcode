/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  `
   s = "AABABBA", k = 1
  substring length= r - left + 1 
  map ={
      store sub string frequency 
  }
  lengthOfSubstring - maxF(str) > k => move left
 otherwise move r 
  `;
  let freCount = new Map();
  let left = 0;
  let maxSub = 0;
  let maxFre = 0;

  for (let r = 0; r < s.length; r++) {
    freCount.set(s[r], (freCount.get(s[r]) || 0) + 1);
    // let maxFre = freCount.values()
    // maxFre = Math.max(maxFre, freCount.get(s[r]))
    if (r - left + 1 - Math.max(...freCount.values()) > k) {
      freCount.set(s[left], freCount.get(s[left]) - 1);
      left++;
    }
    maxSub = Math.max(maxSub, r - left + 1);
  }

  return maxSub;
};
