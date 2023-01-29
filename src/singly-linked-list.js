const objlay = require('@vahan-sahakyan/objlay');

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.head.next = new Node(value);
  }
}

const sll = new LinkedList(4);

console.log(sll);

objlay(sll, 3000, 3, true);
