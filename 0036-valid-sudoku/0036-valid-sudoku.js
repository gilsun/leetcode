/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  
    // set 

    // for r c check 
    // . continue 
    // check r c 
    // add to set 

    let seen = new Set()

    for (let r = 0; r < 9; r++ ) {
        for (let c = 0; c < 9; c ++) {
            let num = board[r][c]
            if(num ==='.'){
                continue 
            }
            let row = `row-${r}-${num}`
            let col = `col-${c}-${num}`
            let square = `square-${Math.floor(r/3)}-${Math.floor(c/3)}-${num} `
            if(seen.has(row) || seen.has(col) || seen.has(square)){
                return false 
            }
            seen.add(row)
            seen.add(col)
            seen.add(square)
        }
    }
    console.log('seen', seen)
    return true
}