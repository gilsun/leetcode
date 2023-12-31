/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {


`
intervals = [[1,2],// [3,5],[6,7],[8,10],// [12,16]], newInterval = [4,8]

[1,2]
[3,5],[6,7],[8,10],[4,8] = [3,10]
[12,16] 


- overLapping 되지 않는 조건 
interval[1] <  newInterval[0] => not overlapping from first 


interval = [3,5], newInterval = [4,8]


overLapping 되는 조건 : newInterval[1] >= interval[0]
interval = [3,5], newInterval = [4,8]

find merged range 찾기 
min(3,4), max(5,8) =[3,8]

`
    const res = []
    let i = 0 
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        res.push(intervals[i])
        i++
    }

    while ( i < intervals.length && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0])
        newInterval[1] = Math.max(newInterval[1], intervals[i][1])
        i++
    }
    res.push(newInterval)

    while( i < intervals.length) {
        res.push(intervals[i])
        i++
    }


    return res 

};
