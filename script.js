// Heart animation
window.onload = function() {
  const anim = document.getElementById('animation');
  const heart = document.createElement('div');
  heart.className = 'heart';
  anim.appendChild(heart);
};

// Confetti effect
function launchConfetti() {
  const confetti = document.getElementById('confetti');
  for (let i = 0; i < 80; i++) {
    const particle = document.createElement('div');
    particle.className = 'confetti-particle';
    particle.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    particle.style.position = 'absolute';
    particle.style.left = Math.random() * 100 + 'vw';
    particle.style.top = '-20px';
    particle.style.width = '10px';
    particle.style.height = '16px';
    particle.style.opacity = 0.8;
    particle.style.borderRadius = '3px';
    particle.style.transform = `rotate(${Math.random()*360}deg)`;
    confetti.appendChild(particle);
    // Animate
    setTimeout(() => {
      particle.style.transition = 'top 2.2s cubic-bezier(.23,1.01,.32,1), left 2.2s';
      particle.style.top = 100 + Math.random()*20 + 'vh';
      particle.style.left = Math.random() * 100 + 'vw';
    }, 10);
    // Remove after animation
    setTimeout(() => confetti.removeChild(particle), 2500);
  }
}

// Button logic
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const container = document.querySelector('.container');
const celebrationOverlay = document.getElementById('celebrationOverlay');
const shareBtn = document.getElementById('shareBtn');

let noClickCount = 0;

noBtn.addEventListener('mouseover', function() {
  noClickCount++;
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;
  noBtn.style.position = 'absolute';
  noBtn.style.left = x + 'px';
  noBtn.style.top = y + 120 + 'px';
});

yesBtn.addEventListener('click', function() {
  launchConfetti();
  celebrationOverlay.classList.add('active');
});

if (shareBtn) {
  shareBtn.addEventListener('click', function() {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      shareBtn.textContent = 'Link copied!';
      setTimeout(() => { shareBtn.textContent = 'Share this moment'; }, 2000);
    });
  });
} 