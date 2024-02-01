/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {

  // t.c = O(m*n)
  

  const m = text1.length; 
  const n = text2.length; 
  const dp = Array(m+1).fill(0).map(()=> Array(n + 1).fill(0))

  for ( let i = 0; i < m ; i ++ ) {
    for ( let j = 0 ; j <n ; j++) {
      if ( text1[i] === text2[j]) {
        dp[i + 1][j + 1] = dp[i][j] + 1 
      }
      else {
        dp[i + 1 ][j + 1] = Math.max( dp[i][j + 1], dp[i + 1][j])
      }
    }
  } 
   
   return dp[m][n]
};