const tracks = [
  "./music/1.ogg",
  "./music/2.ogg",
  "./music/3.ogg",
  "./music/4.ogg",
  "./music/5.ogg",
  "./music/6.ogg"
];

window.onload = () => {
  setTimeout(() => {
    document.querySelector(".overlay").style.opacity = "1";
    const content = document.querySelector(".content");
    content.style.opacity = "1";
    content.style.transform = "translateY(0)";
  }, 100);

  const music = document.getElementById('background-music');
  
  window.addEventListener('click', () => {
    if (music.paused) {
      music.src = tracks[Math.floor(Math.random() * tracks.length)];
      music.volume = 0.2;
      music.play().catch(error => console.error('Playback error:', error));
    }
  });
};