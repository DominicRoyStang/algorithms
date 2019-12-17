const depthFirstSearch = require("./depthFirstSearchAdjacencyList");

const adjacencyList1 = {
    vertices: [3, 1, 100, 4, 2],
    edges: [[1,3], [0,2], [3,4], [2], [0,1,2,3]]
};

const disconnectedAdjacencyList = {
    vertices: [...adjacencyList1.vertices],
    edges: adjacencyList1.edges.map((x) => [])
};

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("DFS adjacency list tests");

    // sanity tests
    process.stdout.write("TEST 1: ");
    const result1 = depthFirstSearch(adjacencyList1, 100);
    logResult(result1, 2);

    process.stdout.write("TEST 2: ");
    const result2 = depthFirstSearch(adjacencyList1, 2);
    logResult(result2, 4);

    // fully disconnected graph test
    process.stdout.write("TEST 3: ");
    const result3 = depthFirstSearch(disconnectedAdjacencyList, 100);
    logResult(result3, 2);

}

main();
console.log();
