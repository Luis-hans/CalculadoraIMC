const calcular = () => {
  const peso = parseFloat(document.querySelector('#peso').value);
  const altura = parseFloat(document.querySelector('#altura').value);

  const resultado = isNaN(peso) || isNaN(altura)
    ? 'Prencha os campos com valores válidos!'
    : peso / (altura * altura);

  return resultado;
}

const avaliar = () => {
  const valor = calcular();

  if (valor < 18.5) {
    return 'você está abaixo do peso!';
  }
  else if (valor >= 18.5 && valor <= 24.9) {
    return 'você está com o peso normal!';
  }
  else if (valor >= 25 && valor <= 29.9) {
    return 'você está acima do peso!';
  }
  else {
    return 'você está obeso!';
  }
}

const mostrar = () => {
  const nome = document.querySelector('#nome').value;
  document.querySelector('#resultado')
    .innerHTML = `Olá <strong>${nome}</strong>, seu IMC é <strong>${calcular().toFixed(2)}</strong> e <strong>${avaliar()}</strong>`;
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#BtnCalcular').addEventListener('click', (event) => {
    event.preventDefault();
    mostrar();
  });
});