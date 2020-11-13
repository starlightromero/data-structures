class Node {
  constructor (value, priority) {
    this.value = value
    this.priority = priority
    this.next = null
  }
}

class PriorityQueue {
  constructor () {
    this.first = null
  }

  insert (value, priority) {
    const newNode = new Node(value, priority)

    if (!this.first || priority > this.first.priority) {
      newNode.next = this.first
      this.first = newNode
    } else {
      let curNode = this.first
      while (curNode.next && priority < curNode.next.priority) {
        curNode = curNode.next
      }
      newNode.next = curNode.next
      curNode.next = newNode
    }
  }

  process () {
    const first = this.first
    this.first = this.first.next
    return first
  }
}
