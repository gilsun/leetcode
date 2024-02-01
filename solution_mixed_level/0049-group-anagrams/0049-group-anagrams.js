/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {

    /*
        const map = new Map();
    
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr).push(str);
    }
    
    return Array.from(map.values());
    */
    

    /*
    
    let map = {}
    for (let i = 0; i < strs.length; i ++){
       let sortedStr= strs[i].split('').sort().join('')
       if(!map[sortedStr]){
           map[sortedStr] = []
       }
       map[sortedStr].push(strs[i])
    }
    let res = Object.values(map)
    return res

    */

    // sort by alphabet each str 
    // { sortedStr: [original str ]   }
    // return map's values => Object.values(map)

    let map = {}
    for (const str of strs){
       let sortedStr= str.split('').sort().join('')
       if(!map[sortedStr]){
           map[sortedStr] = []
       }
       map[sortedStr].push(str)
    }
    let res = Object.values(map)
    return res
    
    
};
