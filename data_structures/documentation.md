### Stack File

**Purpose:** This file defines a `Stack` class, which is a linear data structure that follows the Last-In-First-Out (LIFO) principle.

- `constructor()`: Initializes an empty stack.
- `isEmpty()`: Checks if the stack is empty.
- `pop()`: Removes and returns the top element from the stack.
- `push(newElement)`: Pushes a new element onto the stack.
- `peek()`: Returns the top element of the stack without removing it.

### Queue File

**Purpose:** This file defines a `Queue` class, which is a linear data structure that follows the First-In-First-Out (FIFO) principle.

- `constructor()`: Initializes an empty queue.
- `enqueue(item)`: Adds an item to the end of the queue.
- `dequeue()`: Removes and returns the front item from the queue.
- `peek()`: Returns the front item of the queue without removing it.
- `isEmpty()`: Checks if the queue is empty.

### Binary Tree File

**Purpose:** This file defines a binary tree data structure, which is a hierarchical data structure consisting of nodes, each having a left and right child.

- `constructor()`: Initializes an empty binary tree.
- `insert(value)`: Inserts a new value into the binary tree.
- `search(value)`: Searches for a value in the binary tree.

### Graph File

**Purpose:** This file defines a `Graph` class, which represents an undirected graph using an adjacency list.

- `constructor()`: Initializes an empty graph.
- `addVertex(vertex)`: Adds a vertex to the graph.
- `addEdge(vertex1, vertex2)`: Adds an edge between two vertices in the graph.
- `getNeighbors(vertex)`: Returns the neighbors of a given vertex.
- `depthFirstSearch(startVertex, targetValue)`: Performs depth-first search to find a target value in the graph.
- `breadthFirstSearch(startVertex, targetValue)`: Performs breadth-first search to find a target value in the graph.

### Linked List File

**Purpose:** This file defines a `Node` class and a `LinkedList` class, which represent a singly linked list.

- `Node`: Represents a node with data and a reference to the next node.
- `LinkedList`:
  - `constructor()`: Initializes an empty linked list.
  - `insert(data)`: Inserts a new node with data at the end of the linked list.
  - `delete(data)`: Deletes the first occurrence of a node with the given data.
  - `search(data)`: Searches for a node with the given data.

### MinMaxStack File

**Purpose:** This file defines a `MinMaxStack` class, which is a stack that can efficiently retrieve the minimum and maximum elements in constant time.

- `constructor()`: Initializes an empty stack along with minStack and maxStack.
- `push(value)`: Pushes a value onto the stack while updating min and max values.
- `pop()`: Pops and returns the top element from the stack while updating min and max values.
- `getMin()`: Returns the minimum element in the stack.
- `getMax()`: Returns the maximum element in the stack.
- `isEmpty()`: Checks if the stack is empty.


**Time Complexity:**
- Most operations on the data structures (Stack, Queue, LinkedList, MinMaxStack) have a time complexity of O(1) or O(n) depending on the operation.
- Binary tree operations have a time complexity of O(log(n)) for balanced trees in average cases but can be O(n) in the worst case for unbalanced trees.
- Graph operations (DFS and BFS) have a time complexity of O(V + E), where V is the number of vertices and E is the number of edges.

-------

### CheckBST File

**Purpose:** This file defines the `isBST` function, which checks whether a given binary tree is a valid binary search tree (BST).

- `isBST(root, min, max)`: Checks if the binary tree with the given root is a BST, ensuring that all nodes in the left subtree are less than the current node, and all nodes in the right subtree are greater than the current node.

**Explanation:** It recursively traverses the binary tree and checks if each node satisfies the BST property, which states that the value of a node should be greater than all nodes in its left subtree and less than all nodes in its right subtree. The algorithm returns true if all nodes in the tree satisfy this property; otherwise, it returns false.

**Time Complexity:** The `isBST` algorithm has a time complexity of O(n), where n is the number of nodes in the binary tree. It visits each node once in a depth-first manner.

### Shortest Path File

**Purpose:** This file provides functions for finding the shortest path between two vertices in a graph using Dijkstra's algorithm and Breadth-First Search (BFS).

- `shortestPathDijkstra(graph, start, end)`: Finds the shortest path using Dijkstra's algorithm, assuming an unweighted graph.
        **Explanation:** It works by maintaining a set of visited vertices and a set of tentative distances from the source vertex to each vertex. The algorithm iteratively selects the vertex with the smallest tentative distance, explores its neighbors, and updates the distances if a shorter path is found. This process continues until all vertices are visited or the target vertex is reached.
        **Time Complexity:** Dijkstra's algorithm has a time complexity of O(V^2 + E) where V is the number of vertices and E is the number of edges.

- `shortestPathBFS(graph, start, end)`: Finds the shortest path using BFS, assuming an unweighted graph.

### Linked List Cycle Detection File

**Purpose:** This file defines the `hasCycle` function, which checks if a linked list has a cycle.

- `hasCycle(head)`: Determines whether a linked list starting from the `head` node contains a cycle using Floyd's Tortoise and Hare algorithm.

**Explanation:** It uses two pointers, often referred to as the "tortoise" and the "hare," which traverse the linked list at different speeds. If there is a cycle in the linked list, the faster-moving hare will eventually catch up to the slower-moving tortoise, indicating the presence of a cycle.

**Time Complexity:** The algorithm has a time complexity of O(n), where n is the number of nodes in the linked list.








