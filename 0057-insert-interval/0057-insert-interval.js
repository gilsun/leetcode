/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {

    const isOverLapping = (a,b)=>{
        return a[1] >= b[0]
    } 

    const mergeInterval = (a,b) =>{
        return [ Math.min(a[0], b[0]), Math.max(a[1], b[1])]
    }

    const res = [ ]
    let i = 0 

    while ( i < intervals.length  && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i ++ 
    }


    while ( i < intervals.length && isOverLapping(newInterval, intervals[i])) {
        newInterval = mergeInterval (newInterval, intervals[i])
        i++
    }

    res.push(newInterval)

    while ( i < intervals.length) {
        res.push(intervals[i])
        i ++
    }

    return res 


};