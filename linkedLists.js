// node constructor
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// list constructor
class LinkedList {
  // by default the list will have a head property set to null
  constructor() {
    this.head = null;
  }

  // adds a new node containing value to the end of the list
  append(value) {
    // call the Node Class constructor with the passed value
    const newNode = new Node(value);

    // if there are no items (head is null), set the head as the newNode
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // current initially is the head of the list
    let current = this.head;

    // navigate until the end of the list and set current to the last node
    while (current.next) {
      current = current.next;
    }

    // add the newNode at the end of the list
    current.next = newNode;
  }

  // adds a new node containing value to the start of the list
  preapend(value) {
    const newNode = new Node(value);

    // the new node points to the current head of the list
    newNode.next = this.head;

    // the new node becomes the new head of the list
    this.head = newNode;
  }

  // returns the total number of nodes in the list
  size() {
    let count = 0;
    let node = this.head;

    // count every step until next is null
    while (node) {
      node = node.next;
      count++;
    }

    return count;
  }

  // head returns the first node in the list
  headNode() {
    return this.head.data;
  }

  // returns the last node in the list
  tail() {
    let node = this.head;

    // stop loop when next node is null, node will then be the last one
    // 'node &&' handles empty lists
    while (node && node.next) {
      node = node.next;
    }

    return node;
  }

  // returns the node at the given index
  at(index) {
    let node = this.head;

    // index out of bounds
    if (index < 0 || index > this.size()) {
      return "Index out of bounds";
    }

    // advance as many steps as index
    for (let i = 0; i < index; i++) {
      node = node.next;
    }

    // then return current node
    return node;
  }

  // removes the last element from the list
  pop() {
    let node = this.head;
    let prevNode = null;

    // iterate to the end of the list
    while (node && node.next) {
      prevNode = node;
      node = node.next;
    }

    if (prevNode) {
      prevNode.next = null; // remove the last node from the list
    } else {
      // if there's no previous node, the list only has one node.
      this.head = null;
    }

    return node;
  }

  // returns true if the passed in value is in the list and otherwise returns false
  contains(value) {
    let node = this.head;

    while (node) {
      if (node.data === value) return true;

      node = node.next;
    }

    return false;
  }

  // returns the index of the node containing value, or null if not found
  find(value) {
    let node = this.head;
    let count = 0;

    while (node) {
      if (node.data === value) return count;

      node = node.next;
      count++;
    }

    return null;
  }

  // represents LinkedList objects as strings. ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let node = this.head;
    let listString = "";

    while (node) {
      listString += `( ${node.data} ) -> `;
      node = node.next;
    }

    listString += "null";
    return listString;
  }

  // inserts a new node with the provided value at the given index
  insertAt(value, index) {
    // index out of bounds
    if (index < 0 || index > this.size()) {
      return; // exit the function
    }

    // index is first node
    if (index === 0) {
      this.preapend(value);
      return;
    }

    let node = this.at(index - 1); // move to the node before the index
    const newNode = new Node(value);
    newNode.next = node.next; // set the continuation of the newNode
    node.next = newNode; // add newNode to specified position
  }

  // that removes the node at the given index
  removeAt(index) {
    // index out of bounds
    if (index < 0 || index >= this.size()) {
      return; // exit the function
    }

    // index is first node
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let node = this.at(index - 1);
    node.next = node.next.next;
  }
}

// example to visualize what the linked list looks like
myExamleList = {
  head: {
    data: "Node 1",
    next: {
      data: "Node 2",
      next: {
        data: "Node 3",
        next: null,
      },
    },
  },
};

// create a new LinkedList and apply some methods to it
let myList = new LinkedList();
myList.append("Node 1");
myList.append("Node 2");
myList.preapend("First");
myList.insertAt("hi", 3);

// log the string representation of the list to console
console.log(myList.toString());
