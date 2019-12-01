// Given an array of numbers, return the sum of the maximum subarray where each element is adjacent in the original array.
// Reasoning: at each index, ask "what is the max subarray ending at this index?"
// Note: this algorithm is also known as Kadane's algorithm.
// Runtime: O(n). Memory: O(n).
// We could also make it O(1) memory usage by doing something similar as what was done for the non-adjacent solution.
const maxAdjacentSubsetSum = (arr) => {
    if (arr.length === 0) {
        return null;
    }

    const maxSums = [...arr];

    let currentMax = maxSums[0];

    for (let i = 1; i < arr.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], 0) + arr[i];
        if (maxSums[i] > currentMax) {
            currentMax = maxSums[i];
        }
    }

    return currentMax;
};

module.exports = maxAdjacentSubsetSum;
