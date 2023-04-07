describe("Lesson 28", () => {
  describe("Photo scale", () => {
    let myPhotoScale;
    let clicks;

    it("should toggle classes on click", () => {
      myPhotoScale = document.createElement("div");
      myPhotoScale.classList.add("photo");

      clicks = 0;

      // Add click event listener
      myPhotoScale.addEventListener("click", () => {
        clicks++;

        if (clicks % 2 === 0) {
          myPhotoScale.classList.remove("my-photo-up");
          myPhotoScale.classList.add("my-photo-down");
        } else {
          myPhotoScale.classList.add("my-photo-up");
          myPhotoScale.classList.remove("my-photo-down");
        }
      });

      // Create spies for classList methods
      spyOn(myPhotoScale.classList, "add");
      spyOn(myPhotoScale.classList, "remove");

      // Simulate a click event
      myPhotoScale.click();

      // Expect classList methods to be called with the correct arguments
      expect(myPhotoScale.classList.add).toHaveBeenCalledWith("my-photo-up");
      expect(myPhotoScale.classList.remove).toHaveBeenCalledWith(
        "my-photo-down"
      );

      // Simulate another click event
      myPhotoScale.click();

      // Expect classList methods to be called with the correct arguments
      expect(myPhotoScale.classList.remove).toHaveBeenCalledWith("my-photo-up");
      expect(myPhotoScale.classList.add).toHaveBeenCalledWith("my-photo-down");
    });
  });
});
