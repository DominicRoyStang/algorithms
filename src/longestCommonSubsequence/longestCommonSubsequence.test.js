const longestCommonSubsequence = require("./longestCommonSubsequence");

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("LCS tests");

    process.stdout.write("TEST 1: ");
    const result1 = longestCommonSubsequence("", "");
    logResult(result1, 0);

    process.stdout.write("TEST 2: ");
    const result2 = longestCommonSubsequence("hehello", "helphell");
    logResult(result2, 6);

    process.stdout.write("TEST 3: ");
    const result3 = longestCommonSubsequence("abcbdab", "bdcaba");
    logResult(result3, 4);

    process.stdout.write("TEST 4: ");
    const result4 = longestCommonSubsequence("ceccefcmmr", "cadcecfdmar");
    logResult(result4, 6);

    process.stdout.write("TEST 5: ");
    const result5 = longestCommonSubsequence("abcd", "bd");
    logResult(result5, 2);

    process.stdout.write("TEST 6: ");
    const result6 = longestCommonSubsequence("abcd", "bed");
    logResult(result6, 2);
}

main();
console.log();
