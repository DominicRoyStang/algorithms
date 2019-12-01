// Given an array, return all (order-independent) subsets
// Runtime: O(2^n)
const findAllSubsets = (arr) => {
    const results = [[]];
    for (const value of arr) {
        const lastIndex = results.length - 1;
        for (let index = 0; index <= lastIndex; index++) {
            results.push([...results[index], value]);
        }
    }

    return results;
};

module.exports = findAllSubsets;
