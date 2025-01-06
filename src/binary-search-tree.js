const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.tree === null) {
      this.tree = newNode;
    } else {
      this._insertNode(this.tree, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this._hasNode(this.tree, data);
  }

  _hasNode(node, data) {
    if (node.data === data) {
      return true;
    } else {
      if (node.data > data) {
        if (!node.left) return false;
        return this._hasNode(node.left, data);
      } else {
        if (!node.right) return false;
        return this._hasNode(node.right, data);
      }
    }
  }

  find(data) {
    return this._findNode(this.tree, data);
  }

  _findNode(node, data) {
    if (node.data === data) {
      return node;
    }

    if (node.data > data) {
      if (!node.left) return null;
      return this._findNode(node.left, data);
    } else {
      if (!node.right) return null;
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this.tree = this._removeNode(this.tree, data);
  }

  _removeNode(node, data) {
    if (node.data === null) {
      return;
    }

    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    } else {
      if (!node.right && !node.left) {
        return null;
      }

      if (!node.right && node.left) {
        return node.left;
      }
      if (!node.left && node.right) {
        return node.right;
      }

      const minNode = this._findMin(node.right);
      node.data = minNode;
      node.right = this._removeNode(node.right, minNode);
      return node;
    }
  }

  min() {
    return this._findMin(this.tree);
  }

  _findMin(node) {
    if (node.left) {
      return this._findMin(node.left);
    } else {
      return node.data;
    }
  }

  max() {
    return this._findMax(this.tree);
  }

  _findMax(node) {
    if (node.right) {
      return this._findMax(node.right);
    } else {
      return node.data;
    }
  }
}

module.exports = {
  BinarySearchTree,
};
