// Custom hash function that generates a hash code for a given input string.
function customHash(inputString) {
  let hash = 0;
  for (let i = 0; i < inputString.length; i++) {
    const char = inputString.charCodeAt(i);
    // Update the hash using a simple hash formula.
    hash = (hash << 5) - hash + char;
  }
  return hash;
}

// Node class represents a key-value pair in the linked list.
class Node {
  constructor(key, value) {
    this.key = key;       // The key associated with the value.
    this.value = value;   // The value associated with the key.
    this.next = null;     // Reference to the next node in the linked list.
  }
}

// HashTable class implements a hash table data structure.
class HashTable {
  constructor(size = 100) {
    this.size = size;               // The size of the hash table.
    this.table = new Array(size);   // The array to store linked lists (buckets).
  }

  // Custom hash function to calculate the index for a given key.
  #hash(key) {
    return customHash(key) % this.size;
  }

  // Insert a key-value pair into the hash table.
  insert(key, value) {
    const index = this.#hash(key);
    if (!this.table[index]) {
      // If the index is empty, create a new linked list.
      this.table[index] = new Node(key, value);
    } else {
      // If the index has collisions, add to the linked list.
      let currentNode = this.table[index];
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(key, value);
    }
  }

  // Retrieve the value associated with a given key from the hash table.
  retrieve(key) {
    const index = this.#hash(key);
    let currentNode = this.table[index];
    while (currentNode) {
      if (currentNode.key === key) {
        return currentNode.value;
      }
      currentNode = currentNode.next;
    }
    return undefined; // Key not found
  }

  // Delete a key-value pair from the hash table.
  delete(key) {
    const index = this.#hash(key);
    let currentNode = this.table[index];
    if (!currentNode) {
      return; // Key not found
    }
    if (currentNode.key === key) {
      this.table[index] = currentNode.next;
    } else {
      while (currentNode.next) {
        if (currentNode.next.key === key) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
}

// Test customHash function
const hash1 = customHash('apple');
const hash2 = customHash('banana');
console.log('Custom Hash Test:');
console.log(`Hash of "apple": ${hash1}`);
console.log(`Hash of "banana": ${hash2}`);
console.log('');

// Test HashTable
console.log('HashTable Tests:');
const hashTable = new HashTable();

hashTable.insert('apple', 10);
hashTable.insert('banana', 20);

console.log('Inserted values:');
console.log(`"apple" => ${hashTable.retrieve('apple')}`);
console.log(`"banana" => ${hashTable.retrieve('banana')}`);

hashTable.delete('apple');
console.log('\nAfter deleting "apple":');
console.log(`"apple" => ${hashTable.retrieve('apple')}`);
console.log(`"banana" => ${hashTable.retrieve('banana')}`);