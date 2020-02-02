const DoublyLinkedList = require("../dataStructures/doublyLinkedList/doublyLinkedList");

// Find the shortest path between two nodes in a graph.
// Runtime: O(|V| + |E|).
// Potential improvements:
//   - Terminate as soon as we find shortest path to the end. Currently finds shortest path to all nodes.
//   - Use a min-heap to store the frontier. Currently uses a doubly linked list.
const dijkstra = (graph, start, end) => {
    const shortestPaths = graph.reduce((accumulator, vertex) => {accumulator[vertex.value] = null; return accumulator;}, {});
    shortestPaths[start.value] = 0;

    const frontier = new DoublyLinkedList(start.neighbors); // linked list of edges

    while (!frontier.isEmpty()) {
        const edge = findBestEdgeToNewDestination(frontier, shortestPaths);
        if (edge === null) {
            break;
        }

        shortestPaths[edge.destination.value] = shortestPaths[edge.source.value] + edge.weight;

        for (const neighbor of edge.destination.neighbors) {
            frontier.addLast(neighbor);
        }
    }

    return shortestPaths[end.value];
};

findBestEdgeToNewDestination = (frontier, shortestPaths) => {
    let bestEdge = null;
    let bestNode = null;

    for (const node of frontier) {
        const edge = node.value;

        if (shortestPaths[edge.destination.value] !== null) {
            frontier.remove(node);
        } else if (bestEdge === null) {
            bestEdge = edge;
            bestNode = node;
        } else if (shortestPaths[edge.source.value] + edge.weight < shortestPaths[bestEdge.source.value] + bestEdge.weight) {
            bestEdge = edge;
            bestNode = node;
        }
    }

    if (bestNode !== null) {
        frontier.remove(bestNode);
    }
    return bestEdge;
};


module.exports = dijkstra;
