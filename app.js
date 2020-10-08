import { LinkedList } from './lists/linked-list'

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

const linkedStack1 = new LinkedStack()
linkedStack1.push(1)
linkedStack1.push('Hello')
linkedStack1.push('Star')
linkedStack1.push(true)
linkedStack1.push(79.2)
linkedStack1.push('first')
console.log(linkedStack1.toArray())
linkedStack1.pop()
linkedStack1.pop()
console.log(linkedStack1.toArray())
