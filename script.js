document.addEventListener("DOMContentLoaded", function () {

```
const counter = document.getElementById("counter");
const cookButton = document.getElementById("cookButton");
const face = document.getElementById("face");
const pan = document.getElementById("pan");
const steam = document.getElementById("steam");
const sizzle = document.getElementById("sizzle");

let cookedCount = 0;

// Load saved counter
const savedCount = localStorage.getItem("cookedCount");

if (savedCount !== null) {
    cookedCount = parseInt(savedCount, 10);
}

counter.textContent = cookedCount;


function playAnimation(element) {

    if (!element) {
        return;
    }

    element.classList.remove("cooking");

    // Force browser to reset animation
    void element.offsetWidth;

    element.classList.add("cooking");
}


cookButton.onclick = function () {

    // Increase counter
    cookedCount = cookedCount + 1;

    // Update counter
    counter.textContent = cookedCount;

    // Save counter
    localStorage.setItem("cookedCount", cookedCount);

    // Play animations
    playAnimation(pan);
    playAnimation(face);
    playAnimation(steam);
    playAnimation(sizzle);
};
```

});
