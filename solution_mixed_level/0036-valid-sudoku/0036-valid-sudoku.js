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

    let seenRow = new Set()
    let seenCol = new Set()
    let seenSquare = new Set()

    let row = board.length 
    let col = board[0].length 

    for (let r = 0; r < row ; r ++){
        for (let c = 0; c < col; c ++){
            let boardNum = board[r][c]
            let rowNum = `row num-${r} boardNum-${boardNum}`
            let colNum = `col num-${c} boardNum-${boardNum}`
            let square = `square- ${Math.floor(r/3)}${Math.floor(c/3)} boardNum${boardNum}`
            if(boardNum ==="."){
                continue
            }
            if(seenRow.has(rowNum) || seenCol.has(colNum) || seenSquare.has(square)) {
                return false 
            }
            seenRow.add(rowNum)
            seenCol.add(colNum)
            seenSquare.add(square)

        }
    }
    console.log('seenRow', seenRow)
    console.log('seenCol', seenCol)
    console.log('square', seenSquare)

    return true 
}
