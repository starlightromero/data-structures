import { LinkedList } from './lists/linked-list.js'

class LinkedStack {
  constructor () {
    this.list = new LinkedList()
  }

  push (value) {
    this.list.prepend(value)
  }

  pop () {
    return this.list.deleteHead()
  }

  isEmpty () {
    return !this.list.head
  }

  toArray () {
    return this.list.toArray()
  }
}

const linkedStack = new LinkedStack()
linkedStack.push('Cook dinner!')
linkedStack.push('Wash the dishes!')
linkedStack.push('Buy ingredients!')
console.log(linkedStack.toArray())
console.log(linkedStack.pop())
console.log(linkedStack.toArray())
console.log(linkedStack.pop())
console.log(linkedStack.pop())
console.log(linkedStack.toArray())
