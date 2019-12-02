// Given an array of numbers, return the same array sorted in ascending order.
// Runtime: O(n^2), Average: n*log(n). Memory: O(1).
// QuickSort is typically faster than merge sort on smaller arrays.
// Unlike merge sort, quicksort is cache-friendly.
// More info on merge sort vs quick sort here: https://www.geeksforgeeks.org/why-quick-sort-preferred-for-arrays-and-merge-sort-for-linked-lists/
const quickSort = (arr) => {
    quickSortRecursive(arr, 0, arr.length - 1);
    return arr;
};

const quickSortRecursive = (arr, left, right) => {
    if (left >= right) {
        return;
    }

    const pivotIndex = Math.floor((right - left)/2) + left;
    const pivotValue = arr[pivotIndex];
    const partitionIndex = partition(arr, left, right, pivotValue);

    quickSortRecursive(arr, left, partitionIndex - 1);
    quickSortRecursive(arr, partitionIndex, right);

};

const partition = (arr, left, right, pivotValue) => {
    while (left <= right) {
        while (arr[left] < pivotValue) {
            left++;
        }
        while (arr[right] > pivotValue) {
            right--;
        }

        if (left <= right) {
            swap(arr, left, right);
            left++;
            right--;
        }
    }

    return left;
};

const swap = (arr, left, right) => {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
};

module.exports = quickSort;
