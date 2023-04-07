describe("Lesson 26", () => {
  const descAccum = "<p>Accumulator</p>";

  describe(descAccum, () => {
    it("should return 11", () => {
      const acc1 = new Accumulator(10);

      acc1.increment();
      acc1.increment();
      acc1.increment();
      acc1.decrement();
      acc1.decrement();

      expect(acc1.value).toBe(11);
    });

    it("should return 9", () => {
      const acc1 = new Accumulator(10);

      acc1.decrement();
      acc1.decrement();
      acc1.increment();

      expect(acc1.value).toBe(9);
    });
  });

  const descCansAccum = "<p>Cancelable Accumulator</p>";

  describe(descCansAccum, () => {
    it("should return 20", () => {
      const acc2 = new CancelableAccumulator(20);

      acc2.increment();
      acc2.increment();
      acc2.increment();
      acc2.decrement();
      acc2.clear();

      expect(acc2.value).toBe(20);
    });
  });
});
