const Stack = require('./Stack');
const MinMaxStack = require('./MinMaxStack');
const Queue = require('./Queue');
const BinaryTree = require('./BinaryTree');
const {isBST} = require('./CheckBST');
const Graph = require('./Graph');
const {shortestPathDijkstra, shortestPathBFS} = require('./ShortestPath');
const { LinkedList, Node } = require('./LinkedList');
const {hasCycle} = require('./LinkedListCycleDetection'); 

// STACK DEMONSTRATION 
// Create stack
const stack = new Stack();

// Push elements onto the stack
stack.push('A');
stack.push('B');
stack.push('C');

// Pop elements from the stack
console.log('Pop:', stack.pop()); // Should print 'C'
console.log('Pop:', stack.pop()); // Should print 'B'

// Peek at the top element
console.log('Top element:', stack.peek()); // Should print 'A'

// MINMAXSTACK DEMONSTRATION
// Create a min-max stack
const minMaxStack = new MinMaxStack();

// Push elements onto the stack
minMaxStack.push(5);
minMaxStack.push(10);
minMaxStack.push(3);
minMaxStack.push(8);

// Get the minimum and maximum values in the stack
console.log('Min value:', minMaxStack.getMin()); // Should print 3
console.log('Max value:', minMaxStack.getMax()); // Should print 10

// Pop elements from the stack
minMaxStack.pop();
console.log('After popping, min value:', minMaxStack.getMin()); // Should print 3
console.log('After popping, max value:', minMaxStack.getMax()); // Should print 8



// QUEUE DEMONSTRATION
// Create a queue
const queue = new Queue();

// Enqueue elements
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

// Dequeue elements
console.log('Dequeue:', queue.dequeue()); // Should print 'A'
console.log('Dequeue:', queue.dequeue()); // Should print 'B'

// Peek at the front element
console.log('Front element:', queue.peek()); // Should print 'C'

// BINARY TREE DEMONSTRATION
// Create a binary tree
const binaryTree = new BinaryTree();

// Insert values into the binary tree
binaryTree.insert(50);
binaryTree.insert(30);
binaryTree.insert(70);
binaryTree.insert(20);
binaryTree.insert(40);
binaryTree.insert(60);
binaryTree.insert(80);

// Search for a value in the binary tree
console.log('Search for 40:', binaryTree.search(40)); // Should print true
console.log('Search for 90:', binaryTree.search(90)); // Should print false

// Check if it's a binary tree
console.log('Is BST?', isBST(binaryTree.root)); // Should print true

// GRAPH DEMONSTRATION
// Create a graph
const graph = new Graph();

// Add vertices
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');

// Add edges
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');

// Perform depth-first search (DFS)
console.log('DFS from A to D:', graph.depthFirstSearch('A', 'D')); // Should print true
console.log('DFS from A to E:', graph.depthFirstSearch('A', 'E')); // Should print true
console.log('DFS from B to E:', graph.depthFirstSearch('B', 'E')); // Should print false

// Perform breadth-first search (BFS)
console.log('BFS from A to D:', graph.breadthFirstSearch('A', 'D')); // Should print true
console.log('BFS from A to E:', graph.breadthFirstSearch('A', 'E')); // Should print true
console.log('BFS from B to E:', graph.breadthFirstSearch('B', 'E')); // Should print false

// Use different algorithms to find the shortest path between two vertices
console.log('Shortest path using Dijkstra:', shortestPathDijkstra(graph, 'A', 'D')); // ['A', 'B', 'D']
console.log('Shortest path using BFS:', shortestPathBFS(graph, 'A', 'E')); // ['A', 'C', 'E']

// LINKED LIST DEMONSTRATION
// Create a linked list
const linkedList = new LinkedList();

// Insert data into the linked list
linkedList.insert(10);
linkedList.insert(20);
linkedList.insert(30);

// Search for data in the linked list
console.log('Search for 20:', linkedList.search(20)); // Should print true
console.log('Search for 40:', linkedList.search(40)); // Should print false

// Delete data from the linked list
linkedList.delete(20);
console.log('Search for 20 after deletion:', linkedList.search(20)); // Should print false

// Create a linked list with a cycle
const linkedList2 = new LinkedList();
linkedList2.insert(10);
linkedList2.insert(20);
const cycleNode = new Node(30);
linkedList.head.next.next = cycleNode;
cycleNode.next = linkedList.head;

// Check if the linked list contains a cycle using the standalone function
console.log('Has cycle?', hasCycle(linkedList.head)); // Should print true