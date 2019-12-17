// Given two strings, return the length of the longest common subsequence (LCS)
// Note: a common subsequence doesn't have to be a substring; just characters that show up in the same order.
// Runtime: O(n^2).
const longestCommonSubsequence = (str1, str2) => {
    arr1 = str1.split("");
    arr2 = str2.split("");

    // Recursive step
    const lcsRecursive = (arr1End, arr2End) => {
        // Stopping condition
        if (arr1End < 0 || arr2End < 0) {
            return 0
        }

        if (arr1[arr1End] === arr2[arr2End]) {
            return lcsRecursive(arr1End - 1, arr2End - 1) + 1;
        } else {
            return Math.max(
                lcsRecursive(arr1End - 1, arr2End),
                lcsRecursive(arr1End, arr2End - 1)
            );
        }
    };

    const lcs = lcsRecursive(arr1.length - 1, arr2.length - 1);
    return lcs;
};

module.exports = longestCommonSubsequence;
