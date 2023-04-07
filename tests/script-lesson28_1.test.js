describe("Lesson 28", () => {
  describe("Test keydown event", () => {
    let letters;
    let event;
    let letterToScroll;

    beforeEach(() => {
      letters = ["a", "b", "c", "d", "e", "f", "g"];

      // New event with key 'a'
      event = new KeyboardEvent("keydown", { key: "a" });

      // Create a div for a letter
      letterToScroll = document.createElement("div");
      letterToScroll.classList.add("letter-a");
      document.body.appendChild(letterToScroll);
    });

    afterEach(() => {
      // Remove the div
      document.body.removeChild(letterToScroll);
    });

    it("should scroll to the correct letter", () => {
      // Create a spy for scrollIntoView
      spyOn(letterToScroll, "scrollIntoView");

      // Simulate a keydown event
      document.dispatchEvent(event);

      // Expect scrollIntoView to be called with the correct arguments
      expect(letterToScroll.scrollIntoView).toHaveBeenCalledWith({
        behavior: "smooth",
      });
    });
  });
});
