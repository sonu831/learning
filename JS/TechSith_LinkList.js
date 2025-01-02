class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class List {
  constructor() {
    this.head = new Node("head");
  }

  find(value) {
    let tempNode = this.head;
    while (tempNode.value !== value) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  insert(where, value) {
    let whereToInsert = this.find(where);
    let newNode = new Node(value, whereToInsert.next);
    whereToInsert.next = newNode;
  }

  print() {
    let tempNode = this.head;
    while (tempNode !== null) {
        debugger
      console.log(tempNode.value);
      tempNode = tempNode.next;
    }
  }
}

const linkedList = new List();

linkedList.insert("head", 1);

console.log(linkedList.print());
