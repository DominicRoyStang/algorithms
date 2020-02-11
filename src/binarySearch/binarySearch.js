// Given a sorted array of numbers and a number to search for, return the index of the element (or null)
// Runtime: O(log(n)).
const binarySearch = (arr, searchedValue) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const middle = Math.floor((right - left) / 2) + left;
        if (arr[middle] === searchedValue) {
            return middle;
        }

        if (arr[middle] > searchedValue) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return null;
};

module.exports = binarySearch;
