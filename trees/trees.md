# Trees

A unidirectional, **non-linear** data structure with **edges** that connent **vertices** (nodes). There is a **root node** and there are **no cycles** (loops).

### Examples

* Browser Document Object Model (DOM)
* A Decision
* File System

### Terms

* **Node/Vertex** A structure that contains a value
* **Edge** A connection between two nodes
* **Root Node** the top-most node in the tree
* **Sub Tree** A nested tree (i.e. sub tree root node is NOT main tree root node)
* **Leaf** A node without any child nodes (i.e. without a sub tree)
* **Path** A sequence of nodes and edges that connects two nodes
* **Distance** The number of edges between two nodes
* **Parent/Child** Two directly connected nodes, parent node is "above" child node
* **Ancestor/Descendant** Two nodes that are connected by multiple parent-child paths
* **Sibiling** Two adjacent nodes with the same parent
* **Degree** The number of child nodes of a given node
* **Level** The distance between a node and the root node
* **Depth** The maximum level in a tree
* **Breadth** The number of leaves in a tree
* **Size** The total number of nodes in a tree


### Time Complexity

x | Trees | Arrays
-- | -- | --
Access/Search | O(n) | O(1) (with index), O(n) (search)
Insertion | O(n) | O(1) (at end), O(n) (at beginning)
Removal | O(n) | O(1) (at end), O(n) (at beginning)

### Traversing a Tree

Depth-First | Breadth-First
-- | --
Dig into the tree first and explore sibiling tress step by step | Evaluate all sibiling values first before you dig into the tree in depth


# Binary Search Tree (BST)

A tree with **sorted data** where very node has at most **two child nodes**.

Left child node is **smaller**

Right child node is **bigger**

### Time Complexity

x | BST | Arrays
-- | -- | --
Access/Search | Worst O(n), Average O(log n) | O(1) (with index), O(n) (search)
Insertion | Worst O(n), Average O(log n) | O(1) (at end), O(n) (at beginning)
Removal | Worst O(n), Average O(log n) | O(1) (at end), O(n) (at beginning)
