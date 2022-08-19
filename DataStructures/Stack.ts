type Node<T> = {
  value: T;
  prev?: Node<T>;
};
export default class Stack<T> {
  public length: number;
  private head?: Node<T>;
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    this.length++;
    const newNode = { value: item } as Node<T>;
    newNode.prev = this.head;
    this.head = newNode;
  }
  pop(): T | undefined {
    if (!this.head) return undefined;

    this.length--;
    const head = this.head;
    this.head = this.head.prev;

    head.prev = undefined;

    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
