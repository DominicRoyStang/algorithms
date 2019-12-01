const depthFirstSearch = require("./depthFirstSearchArrays");

const graph1 = {
    // node ids are their index in the array
    vertices: [3, 1, 100, 4, 2],

    // node ids are their index in the top-level array, values in the arrays are the indices of "destination vertices"
    edges: [
        [1,3],
        [0,2],
        [3,4],
        [2],
        [0,1,2,3]
    ]
}

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("DFS Arrays tests");

    // sanity tests
    process.stdout.write("TEST 1: ");
    const result1 = depthFirstSearch(graph1.vertices, graph1.edges, 100);
    logResult(result1, 2);

    process.stdout.write("TEST 2: ");
    const result2 = depthFirstSearch(graph1.vertices, graph1.edges, 2);
    logResult(result2, 4);

    // fully disconnected graph test
    process.stdout.write("TEST 3: ");
    const result3 = depthFirstSearch(graph1.vertices, graph1.edges.map((x) => []), 100);
    logResult(result3, 2);

}

main();
console.log();
