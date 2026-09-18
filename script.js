document.addEventListener("DOMContentLoaded", () => {
  const counterEl  = document.getElementById("counter");
  const cookButton = document.getElementById("cookButton");
  const pan        = document.getElementById("pan");

  // Fail loudly instead of silently
  if (!counterEl || !cookButton || !pan) {
    console.error("Missing element(s):", { counterEl, cookButton, pan });
    return;
  }

  let cooked = 0;

  cookButton.addEventListener("click", () => {
    cooked++;
    counterEl.textContent = cooked;

    // Restart the animation on every click
    pan.classList.remove("cook-animation");
    void pan.offsetWidth;          // force reflow
    pan.classList.add("cook-animation");
  });

  // Clean up when the animation finishes
  pan.addEventListener("animationend", () => {
    pan.classList.remove("cook-animation");
  });
});