# How the code works

## Custom Hash Function (customHash):

This function takes an input string as its parameter.

It initializes a variable hash to 0, which will be used to accumulate the hash code.

It then enters a loop that iterates through each character in the input string.

Inside the loop, it calculates the ASCII code of the current character using `inputString.charCodeAt(i)`.

It updates the hash variable using a simple hash formula: `(hash << 5) - hash + char`. This formula combines the current character's ASCII value with the accumulated hash value.

Finally, it returns the computed hash value as the hash code for the input string.

## Node Class (Node):

This class represents a node in a linked list. Each node contains a key (string), a value (any data type), and a reference to the next node in the list (initially set to `null`).

## Hash Table Class (HashTable):

This class implements a hash table data structure using an array of linked lists.

When an instance of HashTable is created, you can specify its size (default is 100).

The `#hash` method takes a key and calculates its index in the array by using the custom hash function and taking the modulus of the table size.

## Insertion (insert method):

To insert a key-value pair into the hash table, the insert method is used.

It calculates the index for the key using the `#hash` method.

If the index is empty (no collision), it creates a new node with the key and value and sets it as the element at that index.

If the index is not empty (collision), it appends the new key-value pair as a new node to the existing linked list at that index.

## Retrieval (retrieve method):

To retrieve a value associated with a key from the hash table, the retrieve method is used.
It calculates the index for the key using the `#hash` method.

It then traverses the linked list at that index, searching for a node with a matching key.

If a matching key is found, it returns the corresponding value; otherwise, it returns undefined to indicate that the key was not found.

## Deletion (delete method):

To delete a key-value pair from the hash table, the delete method is used.

It calculates the index for the key using the `#hash` method.

It then checks if the index is empty. If it is, the key is not in the table, and the method returns.

If the index is not empty, it checks if the first node in the linked list at that index has a matching key. If it does, it updates the index to point to the next node, effectively removing the first node.

If the first node does not have a matching key, it traverses the linked list to find the node with the matching key, updates the previous node's next reference to skip the node to be deleted, and effectively removes it from the linked list.

# Performance Analysis:

## Custom Hash Function:

The custom hash function generates hash codes for input strings based on the characters' ASCII values. It uses a simple hash formula that combines the characters' values.
The time complexity of this custom hash function is O(n), where n is the length of the input string. It processes each character once.


## Hash Table:

The hash table uses an array to store linked lists (buckets) to handle collisions.

### Insertion (insert method):
In the worst case, when there are many collisions, the time complexity of insertion is O(n), where n is the number of elements in the same bucket (linked list).
In the average case, when the hash function distributes keys evenly, the time complexity is O(1), as it involves finding the bucket index and appending to the linked list.

### Retrieval (retrieve method):
In the worst case, when all keys map to the same bucket, the time complexity of retrieval is O(n), where n is the number of elements in the same bucket (linked list).
In the average case, when the hash function distributes keys evenly, the time complexity is O(1), as it involves finding the bucket index and traversing the linked list.

### Deletion (delete method):
Similar to retrieval, the time complexity of deletion is O(n) in the worst case and O(1) in the average case.