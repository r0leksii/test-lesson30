describe("Lesson 23", () => {
  const input1 = [2, 3, 10, -8, 49, 3, -28];
  const input2 = [30, 12, -10, 75, 23, 13, -98, 84, -3];
  const input3 = [10, 2, 1, -5];
  const input4 = [10, 2];

  const descSum = "<p>Sum of numbers array</p>";

  describe(descSum, () => {
    it("should return 31", () => {
      const result = sumNumber(input1);
      expect(result).toBe(31);
    });

    it("should return 126", () => {
      const result = sumNumber(input2);
      expect(result).toBe(126);
    });
  });

  const descDiff = "<p>Difference of numbers array</p>";

  describe(descDiff, () => {
    it("should return 12", () => {
      const result = diffNumber(input3);
      expect(result).toBe(12);
    });

    it("should return 8", () => {
      const result = diffNumber(input4);
      expect(result).toBe(8);
    });
  });

  const descProd = "<p>Produce of numbers array</p>";

  describe(descProd, () => {
    it("should return 1975680", () => {
      const result = prodNumber(input1);
      expect(result).toBe(1975680);
    });

    it("should return 20", () => {
      const result = prodNumber(input4);
      expect(result).toBe(20);
    });
  });

  const descQuot = "<p>Quot of numbers array</p>";

  describe(descQuot, () => {
    it("should return -1", () => {
      const result = quotNumber(input3);
      expect(result).toBe(-1);
    });

    it("should return 5", () => {
      const result = quotNumber(input4);
      expect(result).toBe(5);
    });
  });

  const descMax = "<p>Max of numbers array</p>";

  describe(descMax, () => {
    it("should return 10", () => {
      const result = minmaxNumbers(input3).max;
      expect(result).toBe(10);
    });

    it("should return 84", () => {
      const result = minmaxNumbers(input2).max;
      expect(result).toBe(84);
    });
  });

  const descMin = "<p>Min of numbers array</p>";

  describe(descMin, () => {
    it("should return -5", () => {
      const result = minmaxNumbers(input3).min;
      expect(result).toBe(-5);
    });

    it("should return -98", () => {
      const result = minmaxNumbers(input2).min;
      expect(result).toBe(-98);
    });
  });
});
