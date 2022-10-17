const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
   constructor(data) {
     this.data = data;
     this.left = null;
     this.right = null;
   }
 }
  class BinarySearchTree {
   constructor() {
     this.threeNode = null;
   }
  root() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  add(/* data */) {
   throw new NotImplementedError('Not implemented');
  }

  has() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(data) {
   // throw new NotImplementedError('Not implemented');
   this.treeNode = this.removeNode(this.treeNode, data);
 }

 removeNode(node, key) {
   if (node === null) return null;

   else if(key < node.data) {
     node.left = this.removeNode(node.left, key);
     return node;
   }

   else if(key > node.data) {
     node.right = this.removeNode(node.right, key);
     return node;
   }

   else {
     if(node.left === null && node.right === null) {
       node = null;
       return node;
     }

     if(node.left === null) {
       node = node.right;
       return node;
     }
        
     else if(node.right === null) {
       node = node.left;
       return node;
     }

     var aux = this.findMinNode(node.right);
     node.data = aux.data;

     node.right = this.removeNode(node.right, aux.data);
     return node;
   }
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