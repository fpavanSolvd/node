const Stack = require('./Stack');
const Queue = require('./Queue');

module.exports = class Graph {
    constructor() {
        this.vertices = new Map();
    }

    addVertex(vertex) {
        if (!this.vertices.has(vertex)) {
            this.vertices.set(vertex, []);
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.vertices.has(vertex1) && this.vertices.has(vertex2)) {
            this.vertices.get(vertex1).push(vertex2);
            this.vertices.get(vertex2).push(vertex1);
        }
    }

    getNeighbors(vertex) {
        if (!this.vertices.has(vertex)) {
          throw new Error('Vertex not found in the graph');
        }
        return this.vertices.get(vertex);
      }

    depthFirstSearch(startVertex, targetValue) {
        const visited = new Set();
        const stack = new Stack();
        stack.push(startVertex);
        visited.add(startVertex);

        while (!stack.isEmpty()) {
            const currentVertex = stack.pop();
            if (currentVertex === targetValue) {
                return true; 
            }

            const neighbors = this.vertices.get(currentVertex);

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    stack.push(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return false;
    }

    breadthFirstSearch(startVertex, targetValue) {
        const visited = new Set();
        const queue = new Queue();
        queue.enqueue(startVertex);
        visited.add(startVertex);

        while (!queue.isEmpty()) {
            const currentVertex = queue.dequeue();
            if (currentVertex === targetValue) {
                return true;
            }

            const neighbors = this.vertices.get(currentVertex);

            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    queue.enqueue(neighbor);
                    visited.add(neighbor);
                }
            }
        }

        return false;
    }
}
