const dijkstra = require("./dijkstra");
const {buildObjectGraphFromAdjacencyList} = require("../utils/buildGraph");

// bidirectional graph
const graph1 = buildObjectGraphFromAdjacencyList({
    vertices: ['A', 'B', 'C', 'D', 'E', 'F'],
    edges: [[1,2], [0,2,3], [0,1,3,5], [1,2,4,5], [3,5], [2,3,4]],
    weights: [[2,3], [2,6,4], [3,6,4,14], [4,4,3,8], [3,7], [14,8,7]]
});

const disconnectedGraph = buildObjectGraphFromAdjacencyList({
    vertices: [3, 1, 100, 4, 2],
    edges: [[], [], [], [], []]
});

function logResult(value, expected) {
    console.log(`${value === expected ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("Dijkstra's algorithm tests");

    process.stdout.write("TEST 1: ");
    const result1 = dijkstra(graph1, graph1[0], graph1[graph1.length - 1]);
    logResult(result1, 14);

    process.stdout.write("TEST 2: ");
    const result2 = dijkstra(disconnectedGraph, disconnectedGraph[0], disconnectedGraph[1]);
    logResult(result2, null);
}

main();
console.log();
