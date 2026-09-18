let cooked = 0;

const counter = document.getElementById("counter");
const button = document.getElementById("cookButton");

const pot = document.getElementById("pot");
const face = document.getElementById("face");
const steam = document.getElementById("steam");

button.addEventListener("click", function () {

    // Increase counter
    cooked++;

    // Update counter on screen
    counter.textContent = cooked;

    // Start animations
    pot.classList.remove("cooking");
    face.classList.remove("cooking-face");
    steam.classList.remove("cooking-steam");

    // Force browser to restart animation
    void pot.offsetWidth;
    void face.offsetWidth;
    void steam.offsetWidth;

    // Add animation classes
    pot.classList.add("cooking");
    face.classList.add("cooking-face");
    steam.classList.add("cooking-steam");

});
