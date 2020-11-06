class HashTable {
  constructor () {
    this.size = 16
    this.buckets = Array(16).fill(null).map(() => [])
  }

  hash (key) {
    let hash = 0
    for (const char of key) {
      hash += char.charCodeAt(0)
    }
    return hash % this.size
  }

  set (key, value) {
    const keyHash = this.hash(key)
    const bucketArray = this.buckets[keyHash]
    const storedElement = bucketArray.find(element => {
      return element.key === key
    })
    if (storedElement) {
      storedElement.val = value
    } else {
      bucketArray.push({ key: key, val: value })
    }
  }

  get (key) {
    const keyHash = this.hash(key)
    const bucketArray = this.buckets[keyHash]
    const storedElement = bucketArray.find(element => {
      return element.key === key
    })
    return storedElement
  }

  showInfo () {
    for (const key in this.buckets) {
      if (this.buckets[key] !== null) {
        console.log(key, this.buckets[key])
      }
    }
  }
}
