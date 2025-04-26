const emojis = ['🌟', '🚀', '🐼', '🌍', '😃', '🎉'];

function createEmoji() {
  const emoji = document.createElement('div');
  emoji.classList.add('emoji');
  emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  emoji.style.top = `${Math.random() * 90}%`;
  emoji.style.animationDuration = `${5 + Math.random() * 5}s`;

  document.getElementById('race-track').appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 10000);
}

setInterval(createEmoji, 1000);
