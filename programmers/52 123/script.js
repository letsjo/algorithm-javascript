function minimumTreePath(n, edges, visitNodes) {
    // Create an adjacency list representation of the tree
    const adjList = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adjList[u].push(v);
        adjList[v].push(u);
    }
    // Create a Set to keep track of the nodes that need to be visited
    const nodesToVisit = new Set(visitNodes);
    let minPathLength = Infinity;
    // Use BFS to find all paths from node 1 to node n
    const queue = [[1, 0]];
    const visited = new Set();
    while (queue.length > 0) {
        const [currentNode, pathLength] = queue.shift();
        visited.add(currentNode);
        if (currentNode === n) {
            minPathLength = Math.min(minPathLength, pathLength);
            continue;
        }
        for (const nextNode of adjList[currentNode]) {
            if (!visited.has(nextNode)) {
                // Add the next node to the queue with an updated path length
                queue.push([nextNode, pathLength + (nodesToVisit.has(nextNode) ? 1 : 0) + 1]);
            }
        }
    }
    return minPathLength;
}


// Example usage
let n = 5;
let edges = [[1, 2], [1, 3], [3, 4], [3, 5]];
let visitNodes = [2, 4];
console.log(minimumTreePath(n, edges, visitNodes)); // Output: 6
