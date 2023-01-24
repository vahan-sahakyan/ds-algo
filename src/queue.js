class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.length) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.length) return null;
    const holdFirst = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return holdFirst;
  }
}
const myQueue = new Queue();
console.log(myQueue.peek());
console.log('in 111', myQueue.enqueue(111));
console.log('in 222', myQueue.enqueue(222));
console.log('in 333', myQueue.enqueue(333));
console.log('peek', myQueue.peek().value);
console.log('out', myQueue.dequeue().value);
console.log('peek', myQueue.peek().value);
console.log('out', myQueue.dequeue().value);
console.log('out', myQueue.dequeue().value);
