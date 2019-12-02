const quickSort = require("./quickSort");

const arr0 = [];
const arr0Solution = [];

const arr1 = [1];
const arr1Solution = [1];

const arr2 = [2, 1];
const arr2Solution = [1, 2];

const arr3 = [1, 3, 2];
const arr3Solution = [1, 2, 3];

const arr4 = [20, 0, -14, 3];
const arr4Solution = [-14, 0, 3, 20];

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

function logResult(value, expected) {
    let success = true;

    if (!arraysAreEqual(value, expected)) {
        success = false;
    }

    console.log(`${success ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("QuickSort tests");

    process.stdout.write("TEST 1: ");
    const result1 = quickSort(arr0);
    logResult(result1, arr0Solution)

    process.stdout.write("TEST 2: ");
    const result2 = quickSort(arr1);
    logResult(result2, arr1Solution);

    process.stdout.write("TEST 3: ");
    const result3 = quickSort(arr2);
    logResult(result3, arr2Solution);

    process.stdout.write("TEST 4: ");
    const result4 = quickSort(arr3);
    logResult(result4, arr3Solution);

    process.stdout.write("TEST 5: ");
    const result5 = quickSort(arr4);
    logResult(result5, arr4Solution);
}

main();
console.log();
