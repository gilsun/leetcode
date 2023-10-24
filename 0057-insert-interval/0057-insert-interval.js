/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
function doesIntervalsOverlap(a, b) {
    return a[1] >= b[0];
}

function mergeIntervals(a, b) {
    return [Math.min(a[0], b[0]), Math.max(a[1], b[1])];
}

function insert(intervals, newInterval) {
    const result = [];
    let i = 0;

    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && doesIntervalsOverlap(newInterval, intervals[i])) {
        newInterval = mergeIntervals(newInterval, intervals[i]);
        i++;
    }

    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}