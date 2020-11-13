class TrieNode {
  constructor () {
    this.value = null
    this.children = Array(26)
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode()
  }

  insert (key, value) {
    let node = this.root
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].harCodeAt(0) - 97
      if (!node.children[alphabetIndex]) {
        const newNode = new TrieNode()
        node.children[alphabetIndex] = newNode
      }
      node = node.children[alphabetIndex]
    }
    node.value = value
  }

  find (key) {
    let node = this.root
    for (let i = 0; i < key.length; i++) {
      const alphabetIndex = key[i].harCodeAt(0) - 97
      if (!node.children[alphabetIndex]) {
        throw new Error('Could not find given key.')
      }
      node = node.children[alphabetIndex]
    }
    return node
  }

  remove (key) {
    const node = this.find(key)
    node.value = null
  }
}

const trie = new Trie()
trie.insert('age', 21)
trie.insert('name', 'Star')
