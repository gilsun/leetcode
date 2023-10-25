/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    `
    matrix = [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
            ]
 transpose 
                [
            [1, 4, 7],
            [2, 5, 8],
            [3, 6, 9]
            ]

reverse 

            [
            [7, 4, 1],
            [8, 5, 2],
            [9, 6, 3]
            ]

    `
   const n = matrix.length 

   for (let i = 0; i < n; i ++) {
       for (let j = i; j < n; j ++) {
           [matrix[i][j], matrix[j][i]] =  [matrix[j][i],matrix[i][j]]
       }
   } 

   for (let i = 0; i < n; i ++) {
       matrix[i].reverse()
   }




};