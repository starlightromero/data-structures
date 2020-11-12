class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
  }

  add (value) {
    if (this.value === null) {
      this.value = value
      return
    }

    if (this.value < value) {
      if (this.right) {
        this.right.add(value)
        return
      }
      const newNode = new Node(value)
      newNode.parent = this
      this.right = newNode
      return
    }

    if (this.value > value) {
      if (this.left) {
        this.left.add(value)
        return
      }
      const newNode = new Node(value)
      newNode.parent = this
      this.left = newNode
      return
    }
  }

  remove (value) {
    const identifiedNode = this.find(value)

    if (!identifiedNode) {
      throw new Error('Could not find node with given value.')
    }

    if (!identifiedNode.left && !identifiedNode.right) {
      const identifiedParent = identifiedNode.parent
      identifiedParent.removeChild(identifiedNode)
      return
    }

    if (identifiedNode.left && identifiedNode.right) {
      cont nextBiggerNode = identifiedNode.right.findNext()
      if (nextBiggerNode.value !== identifiedNode.right.value) {
        this.remove(nextBiggerNode.value)
        identifiedNode.value = nextBiggerNode.value
      } else {
        identifiedNode.value = identifiedNode.right.value
        identifiedNode.right = identifiedNode.right.right
      }
    } else {
      const childNode = identifiedNode.left || identifiedNode.right
      identifiedNode.left = childNode.left
      identifiedNode.right = childNode.right
      identifiedNode.value = childNode.value
    }

    if (identifiedNode.left) {
      identifiedNode.left.parent = identifiedNode
    }
    if (identifiedNode.right) {
      identifiedNode.right.parent = identifiedNode
    }
  }

  removeChild (node) {
    if (this.left && this.left === node) {
      this.left = null
      return
    }

    if (this.right && this.right === node) {
      this.right = null
      return
    }
  }

  find (value) {
    if (this.value === null) {
      return this
    }

    if (this.value < value && this.right) {
      return this.right.find(value)
    }

    if (this.value > value && this.left) {
      return this.left.find(value)
    }
  }

  findNext () {
    if(!this.left) {
      return this
    }
    return this.left.findNext()
  }
}

class Tree {
  constructor () {
    this.root = new Node(null)
  }

  add (value) {
    this.root.add(value)
  }

  remove (value) {
    this.root.remove(value)
  }

  find (value) {
    return this.root.find(value)
  }
}

const tree = new Tree()

tree.add(10)
tree.add(3)
tree.add(25)
tree.add(18)
tree.add(13)
tree.add(29)
tree.add(27)
tree.add(26)
tree.add(28)
tree.add(31)

console.log(tree)
