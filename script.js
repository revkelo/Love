// ── Stars canvas ────────────────────────────────────────────
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = Array.from({ length: 120 }, () => ({
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
  r: Math.random() * 1.4 + 0.3,
  a: Math.random(),
  speed: Math.random() * 0.008 + 0.003,
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach(s => {
    s.a += s.speed;
    const alpha = (Math.sin(s.a) + 1) / 2;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 220, 230, ${alpha * 0.9})`;
    ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
drawStars();

// ── Envelope ─────────────────────────────────────────────────
onload = () => document.body.classList.remove('container');

const wrapper     = document.querySelector('.wrapper');
const letter      = document.querySelector('.letter');
const openBtn     = document.getElementById('openBtn');
const closeBtn    = document.getElementById('closeBtn');
const openMessage = document.getElementById('openMessage');
const loveMessage = document.getElementById('loveMessage');

openBtn.addEventListener('click', () => {
  wrapper.classList.add('open');
  letter.classList.add('show');
  openBtn.style.display   = 'none';
  closeBtn.style.display  = 'inline-block';

  openMessage.style.display = 'block';
  setTimeout(() => {
    openMessage.style.opacity   = '1';
    openMessage.style.transform = 'translateY(0)';
  }, 120);

  setTimeout(() => {
    openMessage.style.opacity   = '0';
    openMessage.style.transform = 'translateY(-20px)';
    setTimeout(() => { openMessage.style.display = 'none'; }, 1500);
  }, 7000);
});

closeBtn.addEventListener('click', () => {
  wrapper.classList.remove('open');
  letter.classList.remove('show');
  closeBtn.style.display = 'none';
  openBtn.style.display  = 'inline-block';
});

// ── Floating hearts ──────────────────────────────────────────
function spawnHearts() {
  const emojis = ['💖', '💕', '🌹', '✨', '💗', '💓'];
  for (let i = 0; i < 18; i++) {
    setTimeout(() => {
      const el = document.createElement('span');
      el.className   = 'floating-heart';
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.left  = Math.random() * 90 + 5 + 'vw';
      el.style.top   = Math.random() * 60 + 20 + 'vh';
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 2100);
    }, i * 90);
  }
}

// ── Sí button ────────────────────────────────────────────────
document.getElementById('yesBtn').addEventListener('click', () => {
  spawnHearts();
  loveMessage.style.display   = 'block';
  loveMessage.style.animation = 'popIn 0.5s cubic-bezier(0.34,1.56,0.64,1)';

  setTimeout(() => {
    loveMessage.style.animation = 'fadeOut 1s ease-in-out forwards';
    setTimeout(() => {
      loveMessage.style.display   = 'none';
      loveMessage.style.animation = '';
    }, 1000);
  }, 3200);
});

// ── No button (escapa) ───────────────────────────────────────
const noBtn = document.getElementById('noBtn');
let clicks = 0;

noBtn.addEventListener('click', () => {
  clicks++;
  if (clicks >= 5) { noBtn.style.display = 'none'; return; }

  noBtn.style.position = 'fixed';
  const maxX = window.innerWidth  - noBtn.offsetWidth  - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;
  noBtn.style.left = Math.random() * maxX + 'px';
  noBtn.style.top  = Math.random() * maxY + 'px';
});

noBtn.addEventListener('mouseleave', () => {
  setTimeout(() => { clicks = 0; }, 500);
});
