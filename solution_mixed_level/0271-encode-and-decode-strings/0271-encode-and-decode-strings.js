/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {

    // dummy_input = ["Hello","Wor ld"]=> hello#wor ld 
  //["","4 "]
    // let res = strs.join(' ')

   //  ["Hello","World"] => 'hello world '
    let res = ''
    for (let str of strs) {
        res += str.length + '#' + str
    }
    return res

};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {

    //s= 'hello#wor ld' 
   
   let res = []
   let i = 0

    while (i < s.length) {
        let j = i 
        while (s[j] !=='#'){
            j += 1
        }
        let Slength = parseInt(s.slice(i,j))
        res.push(s.slice(j + 1, j + 1 + Slength))
        i = j + 1 + Slength
    }
    return res 
    
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */