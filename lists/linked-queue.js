import { LinkedList } from './linked-list.js'

class LinkedQueue {
  constructor () {
    this.list = new LinkedList()
  }

  enqueue (value) {
    this.list.append(value)
  }

  dequeue () {
    return this.list.deleteHead()
  }

  isEmpty () {
    return !this.list.head
  }

  toArray () {
    return this.list.toArray()
  }
}
