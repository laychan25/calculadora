let texto = document.querySelector(".resultado");
let primeiroNumero = "";
let segundoNumero = "";
let operacao = "";

function adcionarValor(valor) {
  if (operacao == "") {
    primeiroNumero += valor;
  } else {
    segundoNumero += valor;
  }
  atualizaTela();
}

function somar() {
  if (primeiroNumero !== "") {
    operacao = "+";
  }
}

function subtrair() {
  if (primeiroNumero !== "") {
    operacao = "-";
  }
}

function multiplicar() {
  if (primeiroNumero !== "") {
    operacao = "*";
  }
}

function dividir() {
  if (primeiroNumero !== "") {
    operacao = "/";
  }
}

function igual() {
  let resultado;
  let num1 = parseFloat(primeiroNumero);
  let num2 = parseFloat(segundoNumero);

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;

    case "-":
      resultado = num1 - num2;
      break;

    case "*":
      resultado = num1 * num2;
      break;

    case "/":
      resultado = num1 / num2;
      break;

    default:
      return;
  }
  primeiroNumero = resultado.toString();
  segundoNumero = "";
  operacao = "";
  atualizaTela();
}

function limpar() {
  texto.textContent = "";
  primeiroNumero = "";
  segundoNumero = "";
}

function atualizaTela() {
  texto.textContent = primeiroNumero + "" + operacao + "" + segundoNumero;
}
