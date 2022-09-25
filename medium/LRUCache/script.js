/**
 * @param {number} capacity
 */
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

var LRUCache = function (capacity) {
  this.cap = capacity;
  this.cache = {};
  this.length = 0;
  this.left = new Node(0, 0);
  this.right = new Node(0, 0);

  this.left.next = this.right;
  this.right.prev = this.left;
};

LRUCache.prototype.remove = function (node) {
  const prev = node.prev;
  const next = node.next;

  prev.next = next;
  next.prev = prev;

  this.length--;
};

LRUCache.prototype.insert = function (node) {
  const prev = this.right.prev;
  const next = this.right;

  prev.next = node;
  node.prev = prev;

  node.next = next;
  next.prev = node;

  this.length++;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
    this.insert(this.cache[key]);
    return this.cache[key].val;
  }

  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (key in this.cache) {
    this.remove(this.cache[key]);
  }

  this.cache[key] = new Node(key, value);
  this.insert(this.cache[key]);

  if (this.length > this.cap) {
    const lru = this.left.next;
    this.remove(lru);
    delete this.cache[lru.key];
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
