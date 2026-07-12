const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');
const progressBar = document.getElementById('scrollProgress');
const themeToggle = document.getElementById('themeToggle');
const cursor = document.getElementById('cursor');

const state = {
  width: window.innerWidth,
  height: window.innerHeight,
  mouse: { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false },
  flakes: [],
};

class Snowflake {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * state.width;
    this.y = Math.random() * -state.height;
    this.radius = 1.4 + Math.random() * 2.4;
    this.speed = 0.4 + Math.random() * 1.2;
    this.angle = Math.random() * Math.PI * 2;
    this.tilt = Math.random() * 0.8 - 0.4;
    this.alpha = 0.12 + Math.random() * 0.24;
    this.color = `rgba(149, 94, 255, ${this.alpha})`;
  }

  update() {
    this.y += this.speed;
    this.x += Math.sin(this.angle) * 0.35 + this.tilt;
    this.angle += 0.01;
    if (this.y > state.height + 20 || this.x < -40 || this.x > state.width + 40) {
      this.reset();
      this.y = -20;
    }
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle * 0.5);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.moveTo(0, -this.radius * 1.5);
    ctx.lineTo(this.radius * 0.8, 0);
    ctx.lineTo(0, this.radius * 1.5);
    ctx.lineTo(-this.radius * 0.8, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }
}

function setCanvasSize() {
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  state.width = window.innerWidth;
  state.height = window.innerHeight;
  canvas.width = state.width * dpr;
  canvas.height = state.height * dpr;
  canvas.style.width = `${state.width}px`;
  canvas.style.height = `${state.height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function createFlakes() {
  state.flakes = [];
  const count = Math.min(240, Math.max(120, Math.floor((state.width * state.height) / 120000)));
  for (let i = 0; i < count; i++) {
    state.flakes.push(new Snowflake());
  }
}

function drawBackground() {
  ctx.clearRect(0, 0, state.width, state.height);
  state.flakes.forEach((flake) => {
    flake.update();
    flake.draw();
  });
  requestAnimationFrame(drawBackground);
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = `${progress}%`;
}

function isVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.86;
}

function animateCounters() {
  document.querySelectorAll('.counter').forEach((element) => {
    const target = parseFloat(element.dataset.target) || 0;
    if (element.dataset.animated) return;
    if (!isVisible(element)) return;
    element.dataset.animated = 'true';
    const startTime = performance.now();
    const duration = 1400;
    function step(timestamp) {
      const progress = clamp((timestamp - startTime) / duration, 0, 1);
      const current = target * progress;
      element.textContent = target % 1 !== 0 ? current.toFixed(1) : Math.round(current);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach((section) => {
    if (isVisible(section)) section.classList.add('visible');
  });
}

function initTiltCards() {
  document.querySelectorAll('.tilt-card').forEach((card) => {
    card.addEventListener('mousemove', (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      card.style.transform = `perspective(1000px) rotateX(${(-y / rect.height) * 10}deg) rotateY(${(x / rect.width) * 12}deg) scale(1.012)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
}

function initMagneticButtons() {
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      button.style.transform = `translate(${x * 0.06}px, ${y * 0.04}px)`;
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'translate(0, 0)';
    });
  });
}

function initFaq() {
  document.querySelectorAll('.faq-item').forEach((button) => {
    button.addEventListener('click', () => {
      const expanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!expanded));
      const next = button.nextElementSibling;
      if (next && next.classList.contains('faq-answer')) next.classList.toggle('visible');
    });
  });
}

function initThemeToggle() {
  const root = document.documentElement;
  root.dataset.scheme = 'dark';
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.scheme === 'light' ? 'dark' : 'light';
    root.dataset.scheme = next;
    themeToggle.textContent = next === 'light' ? 'Dawn' : 'Night';
  });
}

function initCursor() {
  document.addEventListener('mousemove', (event) => {
    state.mouse.x = event.clientX;
    state.mouse.y = event.clientY;
    state.mouse.active = true;
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  }, { passive: true });
  document.addEventListener('mousedown', () => {
    cursor.style.transform += ' scale(0.72)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = cursor.style.transform.replace(' scale(0.72)', '');
  });
}

function hideLoader() {
  const pageLoader = document.getElementById('pageLoader');
  pageLoader.classList.add('hidden');
  setTimeout(() => {
    pageLoader.style.display = 'none';
  }, 500);
}

function handleResize() {
  setCanvasSize();
  createFlakes();
}

function init() {
  setCanvasSize();
  createFlakes();
  drawBackground();
  initCursor();
  initTiltCards();
  initMagneticButtons();
  initFaq();
  initThemeToggle();
  revealOnScroll();
  animateCounters();
  updateScrollProgress();
  window.addEventListener('scroll', () => {
    updateScrollProgress();
    revealOnScroll();
    animateCounters();
  }, { passive: true });
  window.addEventListener('resize', () => {
    clearTimeout(window._resizeTimer);
    window._resizeTimer = setTimeout(handleResize, 180);
  }, { passive: true });
  setTimeout(hideLoader, 900);
}

window.addEventListener('load', init);
