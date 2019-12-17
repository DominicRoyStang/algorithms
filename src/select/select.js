// Given an array of numbers and an integer k, return the kth smallest element in the array.
// Uses a "median of medians" method
// Runtime: O(n).
const select = (arr, k) => {
    // Empty case
    if (arr.length == 0) {
        return null;
    }
    // Base case
    if (arr.length == 1) {
        return arr[0];
    }

    // Find pivot (median of medians)
    const medians = [];
    for (let i = 0; i < arr.length; i += 5) {
        // could do this in-place instead of slicing for better performance
        const group = arr.slice(i, Math.min(i + 5, arr.length));
        medians.push(median(group));
    }
    const pivot = median(medians);

    // Split array into 3: <p, =p, >p
    const lessThanPivot = [];
    const equalToPivot = [];
    const greaterThanPivot = [];
    for (const value of arr) {
        if (value < pivot) {
            lessThanPivot.push(value);
        } else if (value > pivot) {
            greaterThanPivot.push(value);
        } else {
            equalToPivot.push(value);
        }
    }

    // Recursive step
    if (k <= lessThanPivot.length) {
        return select(lessThanPivot, k);
    } else if (k > lessThanPivot.length + equalToPivot.length) {
        return select(greaterThanPivot, k - lessThanPivot.length - equalToPivot.length);
    } else {
        return pivot;
    }
};

const median = (arr) => {
    return arr.sort()[Math.floor(arr.length/2)];
};

module.exports = select;
