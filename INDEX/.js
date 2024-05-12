const planet = document.querySelector('.planet');

function movePlanet() {
  const x = Math.random() * (window.innerWidth - 200);
  const y = Math.random() * (window.innerHeight - 200);

  planet.style.transition = 'transform 2s';
  planet.style.transform = `translate(${x}px, ${y}px)`;
}

movePlanet();

setInterval(() => {
  movePlanet();
}, 5000);
