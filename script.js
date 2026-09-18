document.addEventListener("DOMContentLoaded", function () {

```
const counter = document.getElementById("counter");
const cookButton = document.getElementById("cookButton");

const face = document.getElementById("face");
const pan = document.getElementById("pan");
const steam = document.getElementById("steam");
const sizzle = document.getElementById("sizzle");

// Load saved counter
let cookedCount = Number(localStorage.getItem("cookedCount")) || 0;

counter.textContent = cookedCount;


function restartAnimation(element) {

    if (!element) {
        return;
    }

    // Remove animation
    element.classList.remove("cooking");

    // Force browser reflow
    void element.offsetWidth;

    // Start animation again
    element.classList.add("cooking");
}


cookButton.addEventListener("click", function () {

    // Increase counter
    cookedCount++;

    // Display counter
    counter.textContent = cookedCount;

    // Save counter
    localStorage.setItem("cookedCount", cookedCount);

    // Play animations
    restartAnimation(pan);
    restartAnimation(face);
    restartAnimation(steam);
    restartAnimation(sizzle);

});
```

});
