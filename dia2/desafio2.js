// O desafio será mostra essas mensagem e coletar as informações
const nome = prompt("- Qual o seu nome?");
const idade = prompt("- Qual a sua idade?");
const linguagemEscolhida = prompt("- Qual linguagem de programação você está estudando?");
const msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemEscolhida}!`;


alert(msg);

const escolha = prompt(`Você gosta de estuda ${linguagemEscolhida}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if (escolha == "1"){
    alert("Muito bom! Continue estudando e você terá muito sucesso.");
}
if (escolha == "2"){
    alert("ahh que pena... Já tentou aprender outras linguagens?");
}
