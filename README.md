# Linked List JS
Simple implementation of the linked list data structure in JavaScript

# Getting started
Create an instance of the linked list by using the `LinkedList` class and nodes with the `Node` class:
```js
const list = new LinkedList();
const node = new Node(data);
list.appendNode(node);
```

# Classes and Functions

## Node Class

### constructor(data)
Creates a new node with the given `data`.  
- `data`: The value to store in the node.
- `nextNode`: Points to the next node (default `null`).

---

## LinkedList Class

### appendNode(newNode)
```js
appendNode(newNode)
```
Adds a new node at the end of the list.  
- `newNode`: A `Node` instance to append.  
- Ignores non-Node arguments.

### prependNode(newNode)
```js
prependNode(newNode)
```
Adds a new node at the beginning of the list.  
- `newNode`: A `Node` instance to prepend.  
- Ignores non-Node arguments.

### printList()
```js
printList()
```
Prints the list contents, node by node. If the list is empty, prints a message.

### getHead()
```js
getHead()
```
Returns the first node (head) of the list or `null` if the list is empty.

### getTail()
```js
getTail()
```
Returns the last node (tail) of the list or `null` if the list is empty.

### listSize()
```js
listSize()
```
Returns the number of nodes in the list.

### nodeAt(index)
```js
nodeAt(index)
```
Returns the node at the specified 1-based `index`.  
- Returns `null` if out of bounds or the list is empty.

### pop()
```js
pop()
```
Removes the last node from the list.  
- If the list is empty, prints a message.

### contains(value)
```js
contains(value)
```
Returns `true` if the list contains a node with the given `value`, otherwise `false`.  
- If the list is empty, prints a message.

### find(value)
```js
find(value)
```
Returns the 1-based index of the first node with the given `value`.  
- If not found or the list is empty, prints a message.

---

For more details, see the [linkedList.js source](https://github.com/ryanneekidev/linked-list-js/blob/main/linkedList.js).
