/**
 * @param {number} n
 * @return {number}
 */
function integerBreak(n) {


/*
1) dp & memorization 

2) 3을 곱해서 푸는 방법 

n = 10
3 * 3* 4  = 36 
5 * 3* 2 = 30 


n = 2 (1 * 1) = 1 
n = 3 (1 * 2 )= 2 
n = 4 (2 * 2) = 4 
 
 */
 if (n <= 3){
     return n - 1 
 }


let res = 1 
 while ( n > 4 ){
    res *= 3 
    n -= 3 
 }

return res * n 


}