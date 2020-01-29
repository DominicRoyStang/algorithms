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
        for (const {destination} of vertex.neighbors) {
            if (!destination.visited) {
                return explore(destination);
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

module.exports = depthFirstSearch;
