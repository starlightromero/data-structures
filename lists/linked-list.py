class Node:
    """Create a node."""

    def __init__(self, data):
        """Initialize Node with data."""
        self.data = data
        self.next = None

    def __repr__(self):
        """Return data and next."""
        return f"Node('{self.data}', '{self.next}')"


class LinkedList:
    """Linked List class."""

    def __init__(self, head=None, tail=None):
        """Initialize class with head and tail."""
        self.head = head
        self.tail = tail

    def prepend(self, data):
        """Prepend data to linked list."""
        new_head = Node(data)
        new_head.next = self.head
        self.head = new_head
        if self.tail is None:
            self.tail = new_head

    def append(self, data):
        """Append data to linked list."""
        new_tail = Node(data)
        new_tail.next = None
        if self.tail:
            self.tail.next = new_tail
        self.tail = new_tail
        if self.head is None:
            self.head = new_tail

    def insertAfter(self, data, after_data):
        """Insert given data after given after_data."""
        existing_node = self.find(after_data)
        if existing_node:
            new_node = Node(data)
            new_node.next = existing_node.next
            existing_node.next = new_node

    def find(self, data):
        """Find a node with the given data."""
        if self.head is None:
            return None
        cur_node = self.head
        while cur_node:
            if cur_node.data == data:
                return cur_node
            cur_node = cur_node.next
        return None

    def delete(self, data):
        """Delete node with given data."""
        if self.head is None:
            return None
        while self.head and self.head.data == data:
            self.head = self.head.next
        cur_node = self.head
        while cur_node.next:
            if cur_node.next.data == data:
                cur_node.next = cur_node.next.next
            else:
                cur_node = cur_node.next

    def delete_head(self):
        """Delete head of linked list."""
        if self.head is None:
            return None
        deleted_node = self.head
        if self.head.next:
            self.head = self.head.next
        else:
            self.head = None
            self.tail = None
        return deleted_node

    def delete_tail(self):
        """Delete tail of linked list."""
        if self.tail is None:
            return None
        deleted_node = self.tail
        cur_node = self.head
        while cur_node.next:
            if cur_node.next == self.tail:
                cur_node.next = None
                self.tail = cur_node
            else:
                cur_node = cur_node.next
        return deleted_node

    def print_list(self):
        """Print linked list."""
        current = self.head
        while current is not None:
            print(current.data)
            current = current.next

    def copy_list(self):
        """Copy linked list."""
        if self.head is None:
            return None

        new_head = Node(self.head.data)
        new_head.next = self.head.next
        return new_head


chai_node = Node("Chai")
dino_node = Node("Dino")
jonathan_node = Node("Jonathan")
sid_node = Node("Sid")
rick_node = Node("Rick")
philippos_node = Node("Philippos")
yin_node = Node("Yin")
dj_node = Node("DJ")
marcos_node = Node("Marcos")
veer_node = Node("Veer")
alex_node = Node("Alex")
shaun_node = Node("Shaun")
david_node = Node("David")
andrew_node = Node("Andrew")
jess_node = Node("Jess")
