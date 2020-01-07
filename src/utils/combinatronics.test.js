const {permutations, combinations} = require("./combinatronics");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("Combinatronics tests");

    //Permutations tests
    process.stdout.write("TEST 1: ");
    const result1 = permutations(6, 4);
    logResult(result1, 360);

    process.stdout.write("TEST 2: ");
    const result2 = permutations(1, 100);
    logResult(result2, undefined);

    // Combinations tests
    process.stdout.write("TEST 3: ");
    const result3 = combinations(6, 4);
    logResult(result3, 15);

    process.stdout.write("TEST 4: ");
    const result4 = combinations(1, 100);
    logResult(result4, undefined);
}

main();
console.log();
