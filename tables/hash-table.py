class HashTable:
    """Create a hash table."""

    def __init__(self):
        self.size = 100
        self.buckets = []

    def hash(key):
        hashed_key = hash(key)
        return hashed_key % self.size

    def set(key, value):
        pass
