const respostaElement = document.querySelector( "#resposta" )
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar= document.querySelector("#buttonPerguntar")

const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

const totaldeRespostas = respostas.length
const numeroAleatorio = Math.floor (Math.random ()* totaldeRespostas)

console.log(numeroAleatorio)

function fazerPergunta() {

if(inputPergunta.value == ""){
  alert("Digite sua pergunta")
  return
}

buttonPerguntar. setAttribute("disabled", true)

const pergunta = "<div>" + inputPergunta.value + "</div>"

const totaldeRespostas = respostas.length
const numeroAleatorio = Math.floor (Math.random ()* totaldeRespostas)

 respostaElement.innerHTML = pergunta + respostas [numeroAleatorio]

respostaElement.style.opacity= 1;

setTimeout(function () {
  respostaElement.style.opacity = 0;
  buttonPerguntar.removeAttribute("disabled")
  }, 3000)
  }


