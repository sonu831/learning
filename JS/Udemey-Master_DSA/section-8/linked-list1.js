class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  printList() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode !== null) {
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(arr);
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  traverseToNode(index) {
    let currentNode = this.head;
    let counter = 1;
    while (currentNode !== null) {
      if (counter === index) {
        return currentNode;
      }
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    if (index >= this.length) {
      return this.prepend(value);
    }

    const newNode = new Node(value);
    const legend = this.traverseToNode(index - 1);
    const holdingPointer = legend.next;
    legend.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    this.printList();
    return this;
  }
}

const node = new LinkedList(10);
node.append(56);
node.append(77);
node.prepend(87);

node.printList();
node.insert(2,66);
//console.log(node);
