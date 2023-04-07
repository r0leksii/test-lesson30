// 1

function Accumulator(startValue) {
    this.value = startValue;
};

Accumulator.prototype.increment = function() {
    this.value++;
    // console.log(`Accumulator increment value is ${this.value}`);
};

Accumulator.prototype.decrement = function() { 
    this.value--;
    // console.log(`Accumulator decrement value is ${this.value}`);
};

// const acc1 = new Accumulator(10);
// acc1.increment();
// acc1.increment();
// acc1.increment();

// acc1.decrement();
// acc1.decrement();

// 2

function CancelableAccumulator(startValue) {
    Accumulator.call(this, startValue);
    this.startValue = startValue;
};

CancelableAccumulator.prototype = Object.create(Accumulator.prototype);

CancelableAccumulator.prototype.clear = function() {
    this.value = this.startValue;
    // console.log(`CancelableAccumulator value is ${this.value}`);
};

// const acc2 = new CancelableAccumulator(20);
// acc2.increment();
// acc2.increment();
// acc2.increment();

// acc2.decrement();
// acc2.decrement();

// acc2.clear();


