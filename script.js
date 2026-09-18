const counter = document.getElementById("counter");
const cookButton = document.getElementById("cookButton");
const face = document.getElementById("face");
const pot = document.getElementById("pot");
const steam = document.getElementById("steam");

let cookedCount = 0;

cookButton.addEventListener("click", () => {
// Increase counter
cookedCount++;
counter.textContent = cookedCount;

```
// Restart animation by removing the class first
face.classList.remove("cooking");
pot.classList.remove("cooking");
steam.classList.remove("cooking");

// Force browser to recognize the removal
void face.offsetWidth;

// Start animation
face.classList.add("cooking");
pot.classList.add("cooking");
steam.classList.add("cooking");
```

});
