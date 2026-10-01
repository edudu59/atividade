const inputCelsius = document.getElementById("celsius");
const botao = document.getElementById("converter");
const resultado = document.getElementById("resultado");

function converter() {
  const celsius = parseFloat(inputCelsius.value);

  if (isNaN(celsius)) {
    resultado.textContent = "Digite um número válido.";
    return;
  }

  const fahrenheit = celsius * 9 / 5 + 32;

  resultado.textContent = `${celsius}°C = ${fahrenheit.toFixed(1)}°F`;
}

botao.addEventListener("click", converter);

inputCelsius.addEventListener("keydown", (evento) => {
  if (evento.key === "Enter") converter();
});