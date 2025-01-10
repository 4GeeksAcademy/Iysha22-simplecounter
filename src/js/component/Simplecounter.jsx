
// Inicializar el contador
let counter = 0;


function updateCounter() {
  counter++;
  const digits = counter.toString().padStart(4, '0').split('');
  document.getElementById('digit1').textContent = digits[0];
  document.getElementById('digit2').textContent = digits[1];
  document.getElementById('digit3').textContent = digits[2];
  document.getElementById('digit4').textContent = digits[3];

  // Hacer que el personaje salte
  const character = document.getElementById('character');
  character.style.animation = 'none'; // Reinicia la animación
  setTimeout(() => {
    character.style.animation = 'jump 0.5s';
  }, 10);
}

// Actualizar el contador cada segundo
setInterval(updateCounter, 1000);
