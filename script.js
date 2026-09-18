```javascript
const counter = document.getElementById("counter");
const cookButton = document.getElementById("cookButton");

const face = document.getElementById("face");
const pot = document.getElementById("pot");
const steam = document.getElementById("steam");
const container = document.querySelector(".container");

let cookedCount = 0;

cookButton.addEventListener("click", function () {

    // Increase counter
    cookedCount++;

    counter.textContent = cookedCount;

    // Remove animation classes
    face.classList.remove("cooking");
    pot.classList.remove("cooking");
    steam.classList.remove("cooking");
    container.classList.remove("cooking");

    // Force browser to restart animations
    void face.offsetWidth;
    void pot.offsetWidth;
    void steam.offsetWidth;
    void container.offsetWidth;

    // Start cooking animations
    face.classList.add("cooking");
    pot.classList.add("cooking");
    steam.classList.add("cooking");
    container.classList.add("cooking");
});
```
