class Vertex {
    constructor(value) {
        this.value = value;
        this.neighbors = []
        this.visited = false;
    }
}

// Returns a list of Vertex instances that are connected via their neighbors list.
const buildGraph = (vertices, edges) => {
    const vertexList = [];

    // Fill this.vertices with instances of the Vertex class
    for (let i = 0; i < vertices.length; i++) {
        vertexList.push(new Vertex(vertices[i]));
    }
    for (let i = 0; i < edges.length; i++) {
        vertexList[i].neighbors = edges[i].map((index) => vertexList[index]);
    }

    return vertexList;
}

// Takes in a list<Vertex>, traverses the graph to find a particular value.
// Returns the first vertex containing the serchedValue.
const depthFirstSearch = (vertices, searchedValue) => {
    vertices.forEach((vertex) => vertex.visited = false);

    const explore = (vertex) => {
        vertex.visited = true;
        // dfs previsit
        if (vertex.value === searchedValue) {
            return vertex;
        }

        // visit neighbors
        for (const neighbor of vertex.neighbors) {
            if (!neighbor.visited) {
                return explore(neighbor);
            }
        }

        return null;
    };

    let result = null;
    for (const vertex of vertices) { // outer loop in case the graph is not connected
        if (!vertex.visited) {
            result = explore(vertex);
            if (result !== null) {
                return result
            }
        }
    }
    return result;
}

module.exports = {
    buildGraph,
    depthFirstSearch
};
