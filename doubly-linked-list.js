class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let newHeadNode = new DoublyLinkedListNode(val);

    if (this.length === 0) {
      this.head = newHeadNode;
      this.tail = this.head;
    } else {
      const oldHeadNode = this.head;
      oldHeadNode.prev = newHeadNode;
      newHeadNode.next = oldHeadNode;
      this.head = newHeadNode;
    }
    this.length++;
    return;
  }

  addToTail(val) {
    let newTailNode = new DoublyLinkedListNode(val);
    if (this.length === 0) {
      this.head = newTailNode;
      this.tail = this.head;
    } else {
      const oldTailNode = this.tail;
      oldTailNode.next = newTailNode;
      this.tail = newTailNode;
      this.tail.prev = oldTailNode;
      this.tail.next = null;
    }
    this.length++;
    return;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
