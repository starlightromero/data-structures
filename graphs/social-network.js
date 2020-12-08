class Graph {
  constructor () {
    this.nodes = {}
    this.edges = {}
  }

  addNode (id, value) {
    if (this.nodes[id]) {
      throw new Error('Node already exists!')
    }
    this.nodes[id] = value
  }

  addEdge (startNode, endNode) {
    if (!this.nodes[startNode]) {
      throw new Error('Start node does not exist!')
    } else if (!this.nodes[endNode]) {
      throw new Error('End node does not exist!')
    }

    if (this.edges.startNode && !this.edges[startNode].has(endNode)) {
      this.edges[startNode].add(endNode)
    } else {
      this.edges[startNode] = new Set([endNode])
    }
  }

  removeNode (node) {
    this.nodes[node] = undefined
    this.edges[node] = undefined
    Reflect.deleteProperty(this.edges, node)
    for (const edge in this.edges) {
      this.edges[edge].delete(node)
    }
  }

  removeEdge (startNode, endNode) {
    if (!this.edges[startNode] || !this.edges[startNode].has(endNode)) {
      throw new Error('Edge does not exist!')
    }
    this.edges[startNode].delete(endNode)
  }

  hasEdge (startNode, endNode) {
    if (!this.edges[startNode]) {
      return false
    }
    return this.edges[startNode].has(endNode)
  }

  getAllEdges (node) {
    return this.edges[node]
  }
}

const network = new Graph()

network.addNode('starlight', {
  firstName: 'Starlight',
  lastName: 'Romero',
  age: 25
})
network.addNode('sid', {
  firstName: 'Sid',
  lastName: 'Arcidiacono',
  age: 22
})
network.addNode('philippos', {
  firstName: 'Philippos',
  lastName: 'T',
  age: 100
})

network.addEdge('starlight', 'sid')
network.addEdge('sid', 'starlight')
network.addEdge('philippos', 'starlight')
network.addEdge('starlight', 'philippos')
network.addEdge('philippos', 'sid')
network.addEdge('sid', 'philippos')

console.log(network)
