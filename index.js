class SortedList {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items = this.items.sort((a, b) => a - b);
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos >= this.length) {
      throw new Error("OutOfBounds");
    }
    return this.items[pos];
  }

  max() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => Math.max(a, b));
    } else {
      throw new Error("EmptySortedList");
    }
  }

  min() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => Math.min(a, b));
    } else {
      throw new Error("EmptySortedList");
    }
  }

  sum() {
    if (this.length > 0) {
      return this.items.reduce((a, b) => a + b);
    } else {
      return 0;
    }
  }

  avg() {
    if (this.length > 0) {
      const sum = this.items.reduce((a, b) => a + b);
      return sum / this.length;
    } else {
      throw new Error("EmptySortedList");
    }
  }
}

const test = new SortedList();
test.add(5);
console.log(test.length);
test.add(2);
console.log(test);
console.log(test.length);

const get = test.get(1);
console.log(get);

const max = test.max();
console.log("max", max);

const min = test.min();
console.log("min", min);

module.exports = SortedList;
