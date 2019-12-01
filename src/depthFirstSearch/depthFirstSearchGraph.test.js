const {buildGraph, depthFirstSearch} = require("./depthFirstSearchGraph");

const graph1 = buildGraph(
    // node ids are their index in the array
    [3, 1, 100, 4, 2],

    // node ids are their index in the top-level array, values in the arrays are the indices of "destination vertices"
    [
        [1,3],
        [0,2],
        [3,4],
        [2],
        [0,1,2,3]
    ]
);

const disconnectedGraph = buildGraph(
    [3, 1, 100, 4, 2],
    [[], [], [], [], []]
);

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("DFS Graph tests");

    // sanity tests
    process.stdout.write("TEST 1: ");
    const result1 = depthFirstSearch(graph1, 100);
    logResult(result1.value, 100);

    process.stdout.write("TEST 2: ");
    const result2 = depthFirstSearch(graph1, 2);
    logResult(result2.value, 2);

    // fully disconnected graph test
    process.stdout.write("TEST 3: ");
    const result3 = depthFirstSearch(disconnectedGraph, 100);
    logResult(result3.value, 100);

    // search for value that is not in graph
    process.stdout.write("TEST 4: ");
    const result4 = depthFirstSearch(graph1, 69);
    logResult(result4, null);
}

main();
console.log();
