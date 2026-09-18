document.addEventListener("DOMContentLoaded", () => {
  const counterEl   = document.getElementById("counter");
  const cookButton  = document.getElementById("cookButton");
  const pan         = document.getElementById("pan");
  const regissaWrap = document.getElementById("regissa-wrap");
  const burnOverlay = document.getElementById("burn-overlay");
  const smokeLayer  = document.getElementById("smoke-layer");

  if (!counterEl || !cookButton || !pan || !regissaWrap || !burnOverlay || !smokeLayer) {
    console.error("Missing element(s). Check your HTML structure.");
    return;
  }

  let cooked = 0;

  // Heat scaling: 0 → 1 over the first 50 clicks, then stays maxed.
  const MAX_HEAT_AT = 50;

  cookButton.addEventListener("click", () => {
    cooked++;
    counterEl.textContent = cooked;

    // --- Pan toss ---
    pan.classList.remove("cook-animation");
    void pan.offsetWidth;
    pan.classList.add("cook-animation");

    // --- Face flip ---
    regissaWrap.classList.remove("flip-animation");
    void regissaWrap.offsetWidth;
    regissaWrap.classList.add("flip-animation");

    // --- Heat / burn / smoke ---
    const heat = Math.min(cooked / MAX_HEAT_AT, 1); // 0 → 1

    // Darken the overlay
    burnOverlay.style.opacity = (heat * 0.75).toFixed(2);

    // Add burning class once it gets hot enough
    if (heat > 0.35) regissaWrap.classList.add("burning");
    else             regissaWrap.classList.remove("burning");

    // Spawn smoke based on heat (0–3 puffs per click)
    const puffs = Math.floor(heat * 3);
    for (let i = 0; i < puffs; i++) spawnSmoke(heat);
  });

  // Cleanup after animations
  pan.addEventListener("animationend", () => pan.classList.remove("cook-animation"));
  regissaWrap.addEventListener("animationend", (e) => {
    if (e.animationName === "faceFlip") regissaWrap.classList.remove("flip-animation");
  });

  function spawnSmoke(heat) {
    const puff = document.createElement("div");
    puff.className = "smoke-puff";

    // Random horizontal position around the image
    const x = 50 + (Math.random() * 40 - 20); // 30% – 70%
    puff.style.left = x + "%";

    // Bigger + darker puffs as heat grows
    const size = 20 + heat * 40 + Math.random() * 15;
    puff.style.width  = size + "px";
    puff.style.height = size + "px";

    // Opacity scaled by heat
    puff.style.setProperty("--start-opacity", (0.35 + heat * 0.4).toFixed(2));

    // Random drift direction
    puff.style.setProperty("--drift", (Math.random() * 60 - 30) + "px");

    smokeLayer.appendChild(puff);

    // Remove after animation finishes
    puff.addEventListener("animationend", () => puff.remove());
  }
});
