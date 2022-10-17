const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.treeNode = null;
  }

  root() {
    // throw new NotImplementedError('Not implemented');
    return this.treeNode;
  }


   add(data) {
      this.treeNode= addWithin(this.treeNode, data);

      function addWithin(node, data) {
      if (!node) {
         return new Node(data);
      }

      if (node.data === data) {
         return node;
      }

      if (data < node.data) {
         node.left = addWithin(node.left, data);
      } else {
         node.right = addWithin(node.right, data);
      }

      return node;
      }
   }



  has(data) {
    // throw new NotImplementedError('Not implemented');
    return this.find(data) ? true : false;
  }

  find(data) {
    // throw new NotImplementedError('Not implemented');
    return this.search(this.treeNode, data);
  }

  search(node, data) {
    if(node === null) return null;
    else if(data < node.data) return this.search(node.left, data);
    else if(data > node.data) return this.search(node.right, data);
    else return node;
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    this.treeNode = this.removeNode(this.treeNode, data);
  }

  

  findMinNode(node) {
    if(node.left === null) return node;
    else return this.findMinNode(node.left);
  }

  min() {
    // throw new NotImplementedError('Not implemented');
    let node = this.treeNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    // throw new NotImplementedError('Not implemented');
    let node = this.treeNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
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

console.log( tree)