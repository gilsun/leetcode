var isPalindrome = function(s) {
    let lowerS = s.toLowerCase()
    let newS = ''
    const checkAlphaNumeric = char => {
       return  /^[A-Za-z0-9]+$/.test(char)
    }
    
    for ( let i = 0; i < lowerS.length; i ++) {
        char = lowerS[i]
        if(checkAlphaNumeric(char)) {
            newS += char
        }
    }

    let revStr = newS.split('').reverse().join('')

    if ( newS !== revStr) return false
    return true 
};
