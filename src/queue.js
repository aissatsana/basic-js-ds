const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.list = { value: null, next: null };
  }
  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    const newListNode = new ListNode(value);
    if (!this.list.value) {
      this.list = newListNode;
    } else {
      this._putEnqueue(this.list, newListNode);
    }
  }

  _putEnqueue(node, newNode) {
    if (!node.next) {
      node.next = newNode;
    } else {
      this._putEnqueue(node.next, newNode);
    }
  }

  dequeue() {
    const queue = this.list;
    this.list = this.list.next;
    return queue.value;
  }
}

module.exports = {
  Queue,
};
