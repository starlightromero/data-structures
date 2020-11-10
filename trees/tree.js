class Node {
  constructor (value, parentNode = null) {
    this.children = []
    this.value = value
    this.parent = parentNode
  }

  addNode (value) {
    const segments = value.split('/')

    if (segments.length === 0) {
      return
    }
    if (segments.length === 1) {
      const node = new Node(segments[0], this)
      this.children.push(node)
      return { node: node, index: this.children.length - 1 }
    }

    const exisitingChildNode = this.children.find(child => child.value === segments[0])
    if (exisitingChildNode) {
      exisitingChildNode.addNode(segments.slice(1).join('/'))
    } else {
      const node = new Node(segments[0], this)
      node.addNode(segments.slice(1).join('/'))
      this.children.push(node)
      return { node: node, index: this.children.length - 1 }
    }
  }

  removeNode (value) {
    const segments = value.split('/')

    if (segments.length === 0) {
      return
    }
    if (segments.length === 1) {
      const exisitingNodeIndex = this.children.findIndex(child => child.value === segments[0])
      if (exisitingNodeIndex < 0) {
        throw new Error('Could not find matching value!')
      }
      this.children.splice(exisitingNodeIndex, 1)
    }
    if (segments.length > 1) {
      const exisitingChildNode = this.children.find(child => child.value === segments[0])
      if (!exisitingChildNode) {
        throw new Error(`Could not find matching path: ${segments[0]}`)
      }
      exisitingChildNode.removeNode(segments.slice(1).join('/'))
    }
  }
}

class Tree {
  constructor (rootValue) {
    this.root = new Node(rootValue)
  }

  add (path) {
    this.root.addNode(path)
  }

  remove (path) {
    this.root.removeNode(path)
  }
}

const filesystem = new Tree('/')
filesystem.add('documents/personal/tax.docx')
filesystem.add('games/cod.exe')
filesystem.add('games/cod2.exe')
filesystem.remove('games/cod.exe')

console.log(filesystem)
