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

const graph = new Graph()
graph.addNode(1, 'Starlight')
graph.addNode(2, 'Philippos')
graph.addNode(3, 'Sid')

graph.addEdge(1, 2)
graph.addEdge(1, 3)
graph.addEdge(3, 2)

console.log(graph.hasEdge(3, 2))
console.log(graph.hasEdge(2, 1))

console.log(graph.getAllEdges(1))
console.log(graph.getAllEdges(2))
console.log(graph.getAllEdges(3))

graph.removeNode(2)
