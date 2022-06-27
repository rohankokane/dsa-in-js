class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;

    let current = this.head;
    let pre;
    // curr - 1 2 3 / curr.next - 2,3,null / pre 1,2
    while (current.next) {
      pre = current;
      current = current.next;
    }
    if (pre) {
      this.tail = pre;
      this.tail.next = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let head = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return head;
  }
  unshift(val) {
    let newNode = new Node(val);
    newNode.next = this.head;
    this.head = newNode;
    if (!this.tail) this.tail = newNode;
    this.length++;

    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index) {
      count++;
      current = current.next;
    }
    return current;
  }
  set(index, val) {
    let node = this.get(index);
    if (!node) return false;
    node.val = val;
    return true;
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let preNode = this.get(index - 1);
    if (!preNode) return false;
    newNode.next = preNode.next;
    preNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    if (this.length <= 1) return false;

    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      if (node) {
        next = node.next;
        node.next = prev;
        prev = node;
        node = next;
      }
    }
    return this;
  }
}
