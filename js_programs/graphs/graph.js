class Graph {
    constructor() {
        this.vertices = new Map();
    }

    // Method to add a new vertex to the graph
    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []);
        } else {
            console.log("Vertex already exists.");
        }
    }

    // Method to add an edge between two vertices
    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).push(vertex2);
            this.vertices.get(vertex2).push(vertex1); // For an undirected graph
        } else {
            console.log("One or both vertices do not exist.");
        }
    }

    // Depth-First Search (DFS) Traversal
    dfs(startingVertex, visited = new Set()) {
        if (!this.vertices.has(startingVertex)) {
            console.log("Starting vertex not found.");
            return;
        }

        console.log("Visited vertex:", startingVertex);
        visited.add(startingVertex);

        for (const neighbor of this.vertices.get(startingVertex)) {
            if (!visited.has(neighbor)) {
                this.dfs(neighbor, visited);
            }
        }
    }
    // Breadth-First Search (BFS) Traversal
    bfs(startingVertex) {
        if (!this.vertices.has(startingVertex)) {
            console.log("Starting vertex not found.");
            return;
        }

        const visited = new Set();
        const queue = [startingVertex];
        visited.add(startingVertex);

        while (queue.length > 0) {
            const currentVertex = queue.shift();
            console.log("Visited vertex:", currentVertex);

            for (const neighbor of this.vertices.get(currentVertex)) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.dfs("A");
graph.bfs("A");


Graph.prototype.shortestPathBFS = function (start, end) {
    if (!this.vertices.has(start) || !this.vertices.has(end)) {
        console.log("Start or end vertex not found.");
        return;
    }

    const queue = [{ vertex: start, path: [start] }];
    const visited = new Set();
    visited.add(start);

    while (queue.length > 0) {
        const { vertex, path } = queue.shift();

        if (vertex === end) {
            console.log("Shortest path:", path.join(" -> "));
            return;
        }

        for (const neighbor of this.vertices.get(vertex)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push({ vertex: neighbor, path: [...path, neighbor] });
            }
        }
    }

    console.log("No path found.");
};

graph.shortestPathBFS("A", "D");

Graph.prototype.hasCycleDFS = function () {
    const visited = new Set();

    const hasCycle = (vertex, parent) => {
        visited.add(vertex);

        for (const neighbor of this.vertices.get(vertex)) {
            if (!visited.has(neighbor)) {
                if (hasCycle(neighbor, vertex)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                return true;
            }
        }

        return false;
    };

    for (const vertex of this.vertices.keys()) {
        if (!visited.has(vertex)) {
            if (hasCycle(vertex, null)) {
                return true;
            }
        }
    }

    return false;
};

console.log("Graph has cycle?", graph.hasCycleDFS());
