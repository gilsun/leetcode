var lengthOfLongestSubstring = function (s) {
  `
  sliding window 
  s ="pwwkew"

  setChar = { p, w ,}

  TC = O(n)
  SC = O(k) k is s's set character
  `;
  let setChar = new Set();
  let left = 0;
  let res = 0;
  for (let r = 0; r < s.length; r++) {
    while (setChar.has(s[r])) {
      // if current char is in setChar, remove most left char
      setChar.delete(s[left]);
      left++;
    }
    setChar.add(s[r]);
    res = Math.max(res, r - left + 1);
  }

  return res;
};
