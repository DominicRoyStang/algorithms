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

// Input: Adjacency list (an array of vertices and an array of edges)
// Returns an array of Vertex instances that are connected via their neighbors list.
const buildObjectGraphFromAdjacencyList = ({vertices, edges}) => {
    const vertexList = [];

    // Fill this.vertices with instances of the Vertex class
    for (let i = 0; i < vertices.length; i++) {
        vertexList.push(new Vertex(vertices[i]));
    }
    for (let i = 0; i < edges.length; i++) {
        vertexList[i].neighbors = edges[i].map((index) => vertexList[index]);
    }

    return vertexList;
};

module.exports = {
    buildObjectGraphFromAdjacencyList
};
