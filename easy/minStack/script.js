class MinStack {
  stack = [];

  push(val) {
    this.stack.push({
      val,
      min: this.stack.length === 0 ? val : Math.min(val, this.getMin()),
    });
  }

  pop() {
    this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1].val;
  }

  getMin() {
    return this.stack[this.stack.length - 1].min;
  }
}
