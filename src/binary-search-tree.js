const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
   constructor(value) {
     this.value = value;
     this.left = null;
     this.right = null;
   }
 }
  class BinarySearchTree {
   constructor() {
     this.threeRoot = null;
   }
  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(value) {
   this.threeRoot = addWithin(this.threeRoot, value);

   function addWithin(node, value) {
     if (!node) {
       return new Node(value);
     }

     if (node.value === value) {
       return node;
     }

     if (value < node.value) {
       node.left = addWithin(node.left, value);
     } else {
       node.right = addWithin(node.right, value);
     }

     return node;
   }
 }

  has() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}
const tree = new BinarySearchTree();
module.exports = {
  BinarySearchTree
};

tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(0);
console.log(tree)