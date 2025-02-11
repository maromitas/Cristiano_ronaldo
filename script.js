document.getElementById("yes").addEventListener("click", function () {
  document.getElementById("message").style.display = "block"; // Muestra el mensaje
  document.getElementById("letter").style.display = "flex"; // Muestra la carta
});

document.getElementById("no").addEventListener("click", function () {
  let fontSize = parseFloat(window.getComputedStyle(document.getElementById("yes")).fontSize); // Obtiene el tamaño actual del botón "Sí"

  let messages = [
    "No puedes decir que no",
    "¿Estás segura?",
    "Piénsalo bien...",
    "Piénsalo muy bien...",
    "Piénsalo...",
    "Duro, Duro, Duro",
    "Mira el otro botón 👀"
  ];

  // Aumenta el tamaño del botón "Sí"
  fontSize += 5; // Aumenta en 5px en cada clic
  document.getElementById("yes").style.fontSize = `${fontSize}px`;

  // Cambia aleatoriamente el texto del botón "No"
  const indexRandom = Math.floor(Math.random() * messages.length);
  document.getElementById("no").textContent = messages[indexRandom];
});



