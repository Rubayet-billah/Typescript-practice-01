class Counter {
  static count: number = 0;

  // constructor(count: number) {
  //   Counter.count = count;
  // }
  increment(): number {
    return (Counter.count = Counter.count++);
  }
  decrement(): number {
    return (Counter.count = Counter.count--);
  }
}

const instance1 = new Counter();
const instance2 = new Counter();
