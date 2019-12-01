const maxNonAdjacentSubsetSum = require("./maxNonAdjacentSubsetSum");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("maxNonAdjacentSubsetSums tests");

    process.stdout.write("TEST 1: ");
    const result1 = maxNonAdjacentSubsetSum([1, -3, 2, 1, -1]);
    logResult(result1, 3);

    process.stdout.write("TEST 2: ");
    const result2 = maxNonAdjacentSubsetSum([0, -1, -2, -1]);
    logResult(result2, 0);

    process.stdout.write("TEST 3: ");
    const result3 = maxNonAdjacentSubsetSum([]);
    logResult(result3, null);

    process.stdout.write("TEST 4: ");
    const result4 = maxNonAdjacentSubsetSum([-5, 4, -4, 3, -1, 3]);
    logResult(result4, 10);
}

main();
console.log();
