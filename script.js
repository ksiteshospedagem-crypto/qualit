const botoes = document.querySelectorAll(".seleção"); //cria a varialvel 
const paineis = document.querySelectorAll(".painel");

botoes.forEach(btn => { //percorre os botão
  btn.addEventListener('click', () => { // escuta se o botão vai ser clicado
    paineis.forEach(p => p.classList.remove('ativo')); // remove os paineis ativos
    document.getElementById(btn.dataset.alvo).classList.add('ativo'); // percorre dataset.alvo e ve qual foi selecionado, classList deixa so ele ativo
  });
});

// mostra o primeiro painel ao carregar a página
paineis[0].classList.add('ativo');



// painel chat
const inputMensagem = document.getElementById("cha-men")
const BotaoEnviar = document.getElementById("enviar")
const areaExibição = document.getElementById("exibicao")
// seleciona os elementos

//evento de click
BotaoEnviar.addEventListener("click", () => {
  const texto = inputMensagem.value; // valida o click
  console.log(texto); // mostra o no painel

  const novaMensagem = document.createElement('p')
  novaMensagem.classList.add('mensagem') //aplica cor no fundo 
  novaMensagem.textContent = texto; 
  
areaExibição.appendChild(novaMensagem);

inputMensagem.value = '';


});
// fim painel chat,
