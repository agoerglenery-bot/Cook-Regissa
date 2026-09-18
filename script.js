let cooked = 0;

const counter = document.getElementById("counter");
const cookButton = document.getElementById("cookButton");
const pan = document.getElementById("pan");
const regissa = document.getElementById("regissa");

cookButton.addEventListener("click", function () {

    // Increase counter
    cooked++;

    // Update number
    counter.textContent = cooked;

    // Restart animation
    pan.classList.remove("cook-animation");

    // Force browser to restart animation
    void pan.offsetWidth;

    pan.classList.add("cook-animation");

});
