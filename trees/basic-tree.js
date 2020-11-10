class Node {
  constructor (value, parentNode = null) {
    this.children = []
    this.value = value
    this.parent = parentNode
  }

  addNode (value) {
    const node = new Node(value, this)
    this.children.push(node)
    return { node: node, index: this.children.length - 1 }
  }

  removeNode (index) {
    this.children.splice(index, 1)
  }
}

class Tree {
  constructor (rootValue) {
    this.root = new Node(rootValue)
  }
}

const filesystem = new Tree('/')
const documentsNodeData = filesystem.root.addNode('/documents')
const gamesNodeData = filesystem.root.addNode('/games')
documentsNodeData.node.addNode('results.txt')
gamesNodeData.node.addNode('cod.exe')

console.log(filesystem)
