const findAllSubsets = require("./findAllSubsets");

const set0 = [];
const set0Solution = [[]];

const set1 = [1];
const set1Solution = [[], [1]];

const set2 = [1, 2];
const set2Solution = [[], [1], [2], [1, 2]];

const set3 = [1, 2, 3];
const set3Solution = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]];

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

    if (value.length !== expected.length) {
        success = false;
    }

    for (let i = 0; i < value.length; i++) {
        if (!arraysAreEqual(value[i], expected[i])) {
            success = false;
            break;
        }
    }

    console.log(`${success ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("findAllSubsets tests");

    process.stdout.write("TEST 1: ");
    const result1 = findAllSubsets(set0);
    logResult(result1, set0Solution);

    process.stdout.write("TEST 2: ");
    const result2 = findAllSubsets(set1);
    logResult(result2, set1Solution);

    process.stdout.write("TEST 3: ");
    const result3 = findAllSubsets(set2);
    logResult(result3, set2Solution);

    process.stdout.write("TEST 4: ");
    const result4 = findAllSubsets(set3);
    logResult(result4, set3Solution);

}

main();
console.log();
