"use strict";
{
    // Static oop
    //   class Counter {
    //     static count: number = 0;
    //     increment() {
    // this.count will not work!!!
    //       return (this.count = this.count + 1);
    //     }
    //     decrement() {
    // this.count will not work!!!
    //       return (this.count = this.count - 1);
    //     }
    //   }
    class Counter {
        static increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return (Counter.count = Counter.count - 1);
        }
    }
    Counter.count = 0;
    //   const instance1 = new Counter();
    console.log(Counter.increment()); // output : 1 --> different memory
    //   const instance2 = new Counter();
    console.log(Counter.increment()); // output : 1 --> different memory
    //
    //   const instance3 = new Counter();
    console.log(Counter.increment());
}
