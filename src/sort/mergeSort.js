// Given an array of numbers, return the same array sorted in ascending order.
// Runtime: O(n*log(n)).
const mergeSort = (arr) => {
    console.log('START');
    mergeSortRecursive(arr, 0, arr.length - 1);
    return arr;
};

const mergeSortRecursive = (arr, left, right) => {
    //console.log(`left ${left}, right ${right}`);
    if (right <= left) {
        return;
    }
    const middle = Math.ceil((right - left) / 2) + left; // this gives the start of right side
    mergeSortRecursive(arr, left, middle - 1);
    mergeSortRecursive(arr, middle, right);
    mergeAscending(arr, left, middle, right);
}

// Merge two sorted (ascending) arrays into a single sorted array: O(n)
const mergeAscending = (arr, left, middle, right) => {
    let leftArray = arr.slice(left, middle);
    let rightArray = arr.slice(middle, right + 1);

    let leftIndex = 0;
    let rightIndex = 0;
    for (let i = left; i <= right; i++) {
        if (rightIndex > rightArray.length - 1 || leftArray[leftIndex] < rightArray[rightIndex]) {
            arr[i] = leftArray[leftIndex];
            leftIndex++;
        } else {
            arr[i] = rightArray[rightIndex];
            rightIndex++;
        }
    }
}

module.exports = mergeSort;
