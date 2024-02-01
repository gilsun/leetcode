/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
     // AND (&) => both bits 1 => carry에 사용 
    // << move bits to left  => carry에 사용 
    // carry = a & b << 1 

    // XOR (^) => only one of two bits 1 => 합계산에 이용 
    // sum = a ^ b 

    // carry and sum 
    // a => sum update 
    // b = carry updat 

    while (b !== 0 ) {
        let carry = (a & b ) << 1
        let sum = a ^ b 
        a = sum 
        b = carry 
    }

    return a 

};