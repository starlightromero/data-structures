class Queue {
  constructor () {
    this.items = []
  }

  enqueue (value) {
    this.items.unshift(value)
  }

  dequeue () {
    return this.items.pop()
  }

  isEmpty () {
    return this.items.length === 0
  }

  toArray () {
    return this.items.slice()
  }
}
