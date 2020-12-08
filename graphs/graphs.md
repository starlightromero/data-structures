# Graphs

Similar to a tree but with a few differences
* One Node(Vertex) may be connected (via Edges) to multiple other Nodes
* Bi-direction connections are possible, loops are possible
* The concepts of "levels", "nesting", and "child/parent" don't exist

Directed | Undirected
--- | ---
Edges between Nodes are unidirectional | Edges between Nodes are bidirectional

### Examples
* Social networks
* Dependencies (software, packages, libraries)
* Maps/Directions
* Knowledge Graph
* Disease Spread
* Recommendation Engines

### Representing a Graph in Code

Two approaches
1. Adjacency Matrix
2. Adjacency List

## Adjacency Matrix

**An array of arrays**

* Build a matrix with the graph identifiers or values
* Look for connections
  * If a connection exists then place 1, else place 0


1 → 2
↓ ↗
3

x | 1 | 2 | 3
--- | --- | --- | ---
1 | 0 | 1 | 1
2 | 0 | 0 | 0
3 | 0 | 1 | 0

* The first nested array represents the first value (1)
* The second nested array represents the second value (2)
* The third nested array represents the third value (3)

```javascript
const adjMatrix = [
  [0, 1, 1],
  [0, 0, 0],
  [0, 1, 0]
]

// Find a connection
adjMatrix[1][2]  // 0, there is no connection
```

## Adjacency List

**An object of arrays**

* Easier to represent bidirectional graphs

1 → 2
↓ ↗
3

Node | Conn | Conn
--- | --- | ---
1 | 2 | 3
2 | x | x
3 | 3 | x

```javascript
const adjList = {
  1: [2, 3],
  2: [],
  3: [0, 1, 0]
}

// Find a connection
adjList[1].find(node => node === 2)
```

## Matrix vs List

Time Complexity | Matrix | List
--- | --- | ---
Insert | O(n) | O(1)
Find edges between two nodes | O(1) | O(n) or O(1) (depends on implementation)
Find all adjacent Nodes | O(n) | O(1)
Space Complexity | O(n^2) | O(n+e)
