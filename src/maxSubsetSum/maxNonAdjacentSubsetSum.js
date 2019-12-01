// Given an array of numbers, return the sum of the maximum subarray where each element is not adjacent in the original array.
// Runtime: O(n)
const maxNonAdjacentSubsetSum = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    let previousMax = arr[0];
    let currentMax = Math.max(previousMax, arr[1]);

    for (let i = 2; i < arr.length; i++) {
        const value = arr[i];
        // The idea is that we just don't test currentMax + value
        const newMax = Math.max(previousMax, value, previousMax + value, currentMax);
        previousMax = currentMax;
        currentMax = newMax;
    }

    return currentMax;
};

module.exports = maxNonAdjacentSubsetSum;
