const binarySearch = require("./binarySearch");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("binarySearch tests");

    process.stdout.write("TEST 1: ");
    const result1 = binarySearch([], 4);
    logResult(result1, null);

    process.stdout.write("TEST 2: ");
    const result2 = binarySearch([0, 1, 2, 3], 2);
    logResult(result2, 2);

    process.stdout.write("TEST 3: ");
    const result3 = binarySearch([0, 1, 2, 3, 4], 1);
    logResult(result3, 1);

    process.stdout.write("TEST 4: ");
    const result4 = binarySearch([-5, -2, 0, 1, 7, 33, 44], -5);
    logResult(result4, 0);

    process.stdout.write("TEST 5: ");
    const result5 = binarySearch([-241, -33, -2, 10, 44, 237], 44);
    logResult(result5, 4);
}

main();
console.log();
