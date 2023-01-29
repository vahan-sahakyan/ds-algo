const objlay = require('@vahan-sahakyan/objlay');

class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) this.root = node;
    else {
      let current = this.root;
      while (true) {
        if (value < current.value) {
          if (!current.left) {
            current.left = node;
            return this;
          } else current = current.left; // going on to left
        } else {
          if (!current.right) {
            current.right = node;
            return this;
          } else current = current.right; // going on to right
        }
      }
    }
  }
  lookup(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else if (current.value === value) return current;
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
console.log(tree.lookup(9));
// console.log(JSON.stringify(traverse(tree.root)));

//       9
//   4      20
// 1   6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
objlay(tree, 3001, 3);
