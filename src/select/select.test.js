const select = require("./select");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("Select tests");

    process.stdout.write("TEST 1: ");
    const result1 = select([], 0);
    logResult(result1, null);

    process.stdout.write("TEST 2: ");
    const result2 = select([4], 1);
    logResult(result2, 4);

    process.stdout.write("TEST 3: ");
    const result3 = select([4, 2], 1);
    logResult(result3, 2);

    process.stdout.write("TEST 4: ");
    const result4 = select([4, 2, 0, 3, 1, 1, -33, 45], 2);
    logResult(result4, 0);

    process.stdout.write("TEST 5: ");
    const result5 = select([4, 2, 0, 3, 1, 1, -33, 45], 7);
    logResult(result5, 4);

    process.stdout.write("TEST 6: ");
    const result6 = select([4, 0, 3, 1, -33, 45], 3);
    logResult(result6, 1);
}

main();
console.log();
