# Hash Table

The existing JavaScript "object" is implimented as a hash table

Inputs are key-value pairs

A hash table can be similiar to an array. It has an index and a value.

The hash table stores the value of the input in the value but they key is transformed to an index

The key is transformed to an index using a hashing function

### Time Complexity

x | Hash Tables | Arrays | Objects
-- | -- | -- | --
Element Access | O(1), O(n) with lots of hash collisions  | O(1) | O(1)
Insertion at End | O(1), O(n) with lots of hash collisions | O(1) | O(1)
Insertion at Beginning | O(1), O(n) with lots of hash collisions | O(n) | O(1)
Insertion in Middle | O(1), O(n) with lots of hash collisions | O(n) | O(1)
Search Elements | O(1), O(n) with lots of hash collisions | O(n) | O(1)
