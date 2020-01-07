// Given a number of objects n, and a number of slots k,
// return the number of (order-dependent) permutations of n in k slots.
// Known in stats as nPk = (n!)/((n-k)!)
// Runtime: O(n)
const permutations = (n, k) => {
    if (n < k) {
        return undefined;
    }

    let total = 1;
    for (let i = n; i > n - k; i--) {
        total *= i;
    }

    return total;
};

// Given a number of objects n, and a number of slots k,
// return the number of (order-independent) combinations of n in k slots.
// Known in stats as nCk = nPk/(k!)
// Runtime: O(n + k)
const combinations = (n, k) => {
    if (n < k) {
        return undefined;
    }

    return permutations(n, k)/permutations(k, k);
};

module.exports = {
    permutations,
    combinations
};
