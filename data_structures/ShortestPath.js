module.exports.shortestPathDijkstra = function(graph, start, end) {
    const visited = new Set();
    const distances = new Map();
    const previous = new Map();
  
    for (const vertex of graph.vertices.keys()) {
        distances.set(vertex, Infinity);
    }
    distances.set(start, 0);
  
    while (visited.size < graph.vertices.size) {
        const current = getClosestUnvisitedVertex(distances, visited);
        visited.add(current);
  
        for (const neighbor of graph.getNeighbors(current)) {
            if (!visited.has(neighbor)) {
                const distance = distances.get(current) + 1; // Assuming unweighted graph
                if (distance < distances.get(neighbor)) {
                    distances.set(neighbor, distance);
                    previous.set(neighbor, current);
                }
            }
        }
    }
  
    return reconstructPath(previous, start, end);
}
  
function getClosestUnvisitedVertex(distances, visited) {
    let closestVertex = null;
    let shortestDistance = Infinity;
  
    for (const [vertex, distance] of distances.entries()) {
        if (!visited.has(vertex) && distance < shortestDistance) {
            closestVertex = vertex;
            shortestDistance = distance;
        }
    }
  
    return closestVertex;
}
  
function reconstructPath(previous, start, end) {
    const path = [end];
    let current = end;
  
    while (current !== start) {
        current = previous.get(current);
        path.unshift(current);
    }
  
    return path;
}
  
module.exports.shortestPathBFS = function(graph, start, end) {
    const queue = [start];
    const visited = new Set();
    const previous = new Map();
  
    visited.add(start);
  
    while (queue.length > 0) {
        const current = queue.shift();
  
        for (const neighbor of graph.getNeighbors(current)) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                previous.set(neighbor, current);
                queue.push(neighbor);
            }
        }
    }
  
    return reconstructPath(previous, start, end);
}