/* Runs depth first search on a graph represented as a set of vertices and a set of edges.
 * This implementation does not create a graph object. It just uses JavaScript closures to maintain state.
 *
 * @param {array} vertices          The value of each vertex (each vertex is denoted by its array index).
 * @param {array} edges             2D array where each (first-level) index is the vertex,
 *                                  and the value (second-level) is the list of vertices reachable from the vertex.
 * @param {number} searchedValue    The value to look for in the graph.
 */
const depthFirstSearch = ({vertices, edges}, searchedValue) => {
    const visited = new Array(vertices.length).fill(false);

    const previsit = (vertex) => {
        if (vertices[vertex] === searchedValue) {
            return true;
        }
        return null;
    };

    const explore = (vertex) => {
        visited[vertex] = true;
        const found = previsit(vertex); //previsit (dfs)

        // stop condition
        if (found !== null) {
            return vertex;
        }

        // visit neighbors
        for (const v of edges[vertex]) {
            if (!visited[v]) {
                return explore(v);
            }
        }

        //postvisit (bfs)
        return null;
    };

    for (let v = 0; v < vertices.length; v++) { // need this outer loop in case the graph is not connected
        if (!visited[v]) {
            const result = explore(v);
            if (result !== null) {
                return result;
            }
        }
    }
    return null;
};

module.exports = depthFirstSearch;
