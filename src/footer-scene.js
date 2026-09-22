const scene = document.querySelector("[data-woodland-scene]");
const acorn = scene?.querySelector("[data-playful-acorn]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (acorn && reducedMotion.matches) acorn.disabled = true;

if (scene && acorn && !reducedMotion.matches) {
  const state = {
    x: 0,
    y: 0,
    velocityX: 0,
    velocityY: 0,
    rotation: 0,
    frame: 0,
    lastNudge: 0,
  };

  const clamp = (value, minimum, maximum) => Math.min(maximum, Math.max(minimum, value));

  const movementBounds = () => {
    const sceneRect = scene.getBoundingClientRect();
    const acornRect = acorn.getBoundingClientRect();
    const anchor = acorn.offsetLeft;
    return {
      minimum: 12 - anchor,
      maximum: sceneRect.width - anchor - acornRect.width - 12,
    };
  };

  const render = () => {
    acorn.style.setProperty("--acorn-x", `${state.x.toFixed(2)}px`);
    acorn.style.setProperty("--acorn-y", `${state.y.toFixed(2)}px`);
    acorn.style.setProperty("--acorn-rotation", `${state.rotation.toFixed(2)}deg`);
  };

  const animate = () => {
    const bounds = movementBounds();
    state.x += state.velocityX;
    state.y += state.velocityY;
    state.velocityX *= 0.935;
    state.velocityY += 0.22;
    state.rotation += state.velocityX * 2.6;

    if (state.x <= bounds.minimum || state.x >= bounds.maximum) {
      state.x = clamp(state.x, bounds.minimum, bounds.maximum);
      state.velocityX *= -0.48;
    }

    if (state.y >= 0) {
      state.y = 0;
      state.velocityY = Math.abs(state.velocityY) > 0.8 ? state.velocityY * -0.22 : 0;
    }

    render();

    if (Math.abs(state.velocityX) > 0.03 || Math.abs(state.velocityY) > 0.03 || state.y < -0.03) {
      state.frame = requestAnimationFrame(animate);
    } else {
      state.frame = 0;
    }
  };

  const startAnimation = () => {
    if (!state.frame) state.frame = requestAnimationFrame(animate);
  };

  const nudge = (clientX, clientY, forceMultiplier = 1) => {
    const now = performance.now();
    if (now - state.lastNudge < 70) return;

    const acornRect = acorn.getBoundingClientRect();
    const centerX = acornRect.left + acornRect.width / 2;
    const centerY = acornRect.top + acornRect.height / 2;
    const distance = Math.hypot(centerX - clientX, centerY - clientY);
    const reach = 105;
    if (distance > reach) return;

    const proximity = 1 - distance / reach;
    const sceneCenter = scene.getBoundingClientRect().left + scene.clientWidth / 2;
    const direction = Math.abs(centerX - clientX) < 3
      ? (centerX < sceneCenter ? 1 : -1)
      : Math.sign(centerX - clientX);

    state.velocityX = clamp(
      state.velocityX + direction * (3.4 + proximity * 5.5) * forceMultiplier,
      -12,
      12,
    );
    state.velocityY = Math.min(state.velocityY, -1.5 - proximity * 1.8);
    state.lastNudge = now;
    startAnimation();
  };

  scene.addEventListener("pointermove", (event) => nudge(event.clientX, event.clientY), { passive: true });
  acorn.addEventListener("pointerenter", (event) => nudge(event.clientX, event.clientY, 1.15), { passive: true });
  acorn.addEventListener("pointerdown", (event) => nudge(event.clientX, event.clientY, 1.25), { passive: true });
  acorn.addEventListener("click", (event) => {
    if (event.detail !== 0) return;
    state.velocityX = state.x < 0 ? 7 : -7;
    state.velocityY = -2.2;
    startAnimation();
  });

  window.addEventListener("resize", () => {
    const bounds = movementBounds();
    state.x = clamp(state.x, bounds.minimum, bounds.maximum);
    render();
  }, { passive: true });
}
