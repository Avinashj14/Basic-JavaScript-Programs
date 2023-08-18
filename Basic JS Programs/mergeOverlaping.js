function mergeOverlappingIntervals(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    intervals.sort((a, b) => a.start - b.start);

    const mergedIntervals = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        const previousInterval = mergedIntervals[mergedIntervals.length - 1];

        if (currentInterval.start <= previousInterval.end) {
            previousInterval.end = Math.max(previousInterval.end, currentInterval.end);
        } else {
            mergedIntervals.push(currentInterval);
        }
    }

    return mergedIntervals;
}

const intervals = [
    { start: 9, end: 10.5 },
    { start: 9.5, end: 10 },
    { start: 10, end: 11 },
    { start: 10.5, end: 11.5 },
    { start: 13, end: 14 },
    { start: 13.5, end: 15 },
];

const mergedIntervals = mergeOverlappingIntervals(intervals);
console.log(mergedIntervals);
