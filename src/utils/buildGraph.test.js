const {buildObjectGraphFromAdjacencyList} = require("./buildGraph");

const adjacencyList1 = {
    // values for each of the start vertices in the edges list
    vertices: ["A", "B", "C", "D", "E"],

    // node ids are their index in the top-level array, values in the arrays are the indices of "destination vertices"
    edges: [
        [1,3],
        [0,2],
        [3,4],
        [2],
        [0,1,2,3]
    ],

    // weight of each edge - accessible via weights[sourceIndex][destinationIndex]
    weights: [
        [1,2],
        [3,4],
        [5,6],
        [7],
        [8,9,10,11]
    ]
};

const disconnectedAdjacencyList = {
    vertices: [3, 1, 100, 4, 2],
    edges: [[], [], [], [], []],
    weights: [[], [], [], [], []]
};

/*
 * Returns true if the objectGraph (actual) equals the adjacencyList (expected), false otherwise.
 * Note1: This is a shallow check. It just uses the values of the vertex and its neighbours (could fail if there were duplicates).
 * we would need a proper graph traversal eg. DFS, but then the testing function would be more complex than the function it tests.
 * Note2: This implementation assumes order is preserved between vertices and object graph array
 * (which is true with the current implementation)
 */
function objectGraphEqualsAdjacencyList(objectGraph, adjacencyList) {

    if (objectGraph.length !== adjacencyList.edges.length) {
        return false;
    }

    // compare object graph (actual) to adjacencyList (expected)
    for (let i = 0; i < adjacencyList.edges.length; i++) {
        const vertex = objectGraph[i];
        const expectedValue = adjacencyList.vertices[i];
        const expectedEdges = adjacencyList.edges[i];
        const expectedWeights = adjacencyList.weights[i];

        if (vertex.value !== expectedValue) {
            return false;
        }

        for (let j = 0; j < expectedEdges.length; j++) {
            const actualEdge = vertex.neighbors[j];
            const expectedDestination = adjacencyList.vertices[expectedEdges[j]];
            const expectedWeight = expectedWeights[j];
            if (expectedDestination !== actualEdge.destination.value) {
                return false;
            }
            if (expectedWeight !== actualEdge.weight) {
                return false;
            }
        }
    }

    return true;
}

function logResult(value, expected, equalityFunction) {
    console.log(`${equalityFunction(value, expected) ? "SUCCESS" : "FAILURE"}, Output: ${value}`);
}

function main() {
    console.log("Build graph tests");

    // build object graph from adjacency list
    process.stdout.write("TEST 1: ");
    const result1 = buildObjectGraphFromAdjacencyList(adjacencyList1);
    logResult(result1, adjacencyList1, objectGraphEqualsAdjacencyList);

    process.stdout.write("TEST 2: ");
    const result2 = buildObjectGraphFromAdjacencyList(disconnectedAdjacencyList);
    logResult(result2, disconnectedAdjacencyList, objectGraphEqualsAdjacencyList);
}

main();
console.log();
