// Given two strings, return the length of the longest common subsequence (LCS)
// Note: a common subsequence doesn't have to be a substring; just characters that show up in the same order.
// Runtime: O(str1.length * str2.length).
const longestCommonSubsequence = (str1, str2) => {
    arr1 = str1.split("");
    arr2 = str2.split("");

    // Lookup table for memoization
    const lookupTable = new Array(str1.length).fill(null).map((x) => new Array(str2.length).fill(null));

    // Recursive step
    const lcsRecursive = (arr1End, arr2End) => {
        // Stopping condition
        if (arr1End < 0 || arr2End < 0) {
            return 0;
        }

        // Memo check
        if (lookupTable[arr1End][arr2End] !== null) {
            return lookupTable[arr1End][arr2End];
        }

        // Value not yet computed. Compute it recursively.
        if (arr1[arr1End] === arr2[arr2End]) {
            const previousLcs = lcsRecursive(arr1End - 1, arr2End - 1);
            lookupTable[arr1End][arr2End] = previousLcs + 1;
            return previousLcs + 1;
        } else {
            const potentialPreviousLcs1 = lcsRecursive(arr1End - 1, arr2End);
            const potentialPreviousLcs2 = lcsRecursive(arr1End, arr2End - 1);
            const previousLcs = Math.max(potentialPreviousLcs1, potentialPreviousLcs2);
            lookupTable[arr1End][arr2End] = previousLcs;
            return previousLcs;
        }
    };

    const lcs = lcsRecursive(arr1.length - 1, arr2.length - 1);

    return lcs;
};

/* Note: this implementation is just using memoization, so it can still get quite a large call stack.
 * To further optimize, generate a dynamic programming solution by logging the LUT every time it's updated.
 * From the step-by-step LUT, you can notice the dynamic programming pattern and fill the LUT top-to-bottom without recursion.
 * Then you can trace that dynamic programming solution in reverse order to find the value(s) of the longest sequence(s).
 */

module.exports = longestCommonSubsequence;
