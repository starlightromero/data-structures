class MaxHeap {
  constructor () {
    this.elements = []
  }

  insert (value) {
    this.elements.push(value)
    let currentElementIndex = this.elements.length - 1
    let parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1
    while (
      parentElementIndex >= 0 &&
      this.elements[currentElementIndex] > this.elements[parentElementIndex]
    ) {
      const parentElement = this.elements[parentElementIndex]
      this.elements[parentElementIndex] = value
      this.elements[currentElementIndex] = parentElement
      currentElementIndex = parentElementIndex
      parentElementIndex = Math.floor((currentElementIndex + 1) / 2) - 1
    }
  }

  process () {
    if (this.elements.length === 0) {
      return null
    }
    if (this.elements.length === 1) {
      return this.elements.pop()
    }
    const topElement = this.elements[0]
    this.elements[0] = this.elements.pop()
    const currentElementIndex = 0
    let leftChildIndex = 2 * currentElementIndex + 1
    let rightChildIndex = 2 * currentElementIndex + 2
    let childElementIndex =
      this.elements[rightChildIndex] &&
      this.elements[rightChildIndex] >= this.elements[leftChildIndex]
        ? rightChildIndex
        : leftChildIndex
    while (
      this.elements[childElementIndex] &&
      this.elements[currentElementIndex] <= this.elements[childElementIndex]
    ) {
      const currentNode = this.elements[currentElementIndex]
      const currentChildNode = this.elements[childElementIndex]
      this.elements[childElementIndex] = currentNode
      this.elements[currentElementIndex] = currentChildNode
    }
    return topElement
  }
}
