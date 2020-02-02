/*
 * Helper functions to convert a graph between the following representations:
 * - Object & Pointers
 * - Adjacency List
 * - Adjacency Matrix (only better at checking if edge exists & removing an edge)
 */

// Vertex class used to create graph objects
class Vertex {
    constructor(value) {
        this.value = value;
        this.neighbors = []
        this.visited = false;
    }
};

class Edge {
    constructor(source, destination, weight = null) {
        this.source = source;
        this.destination = destination;
        this.weight = weight;
    }
}

// Input: Adjacency list (an array of vertices and an array of edges)
// Returns an array of Vertex instances that are connected via their neighbors list.
const buildObjectGraphFromAdjacencyList = ({vertices, edges, weights = mapToNullWeights(edges)}) => {
    const vertexList = [];

    // Fill this.vertices with instances of the Vertex class
    for (let i = 0; i < vertices.length; i++) {
        vertexList.push(new Vertex(vertices[i]));
    }

    // Fill this.edges with instances of the Edge class
    for (let i = 0; i < edges.length; i++) {
        const vertex = vertexList[i];
        const neighbors = edges[i];
        const edgeWeights = weights[i];
        vertex.neighbors = neighbors.map(
            (destinationIndex, edgeIndex) => new Edge(vertex, vertexList[destinationIndex], edgeWeights[edgeIndex])
        );
    }

    return vertexList;
};

const mapToNullWeights = (edges) => {
    const weights = new Array(edges.length);
    for (let i = 0; i < edges.length; i++) {
        const outEdges = edges[i];
        weights[i] = outEdges.map(() => null);
    }
    return weights;
};

module.exports = {
    buildObjectGraphFromAdjacencyList
};
