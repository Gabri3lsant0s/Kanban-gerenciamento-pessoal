console.log("JavaScript conectado ao Kanban!");

const formulario = document.querySelector("#form-nova-tarefa");
const campoTitulo = document.querySelector("#titulo-tarefa");
const campoDescricao = document.querySelector("#descricao-tarefa");
const campoPrioridade = document.querySelector("#prioridade-tarefa");
const campoPrazo = document.querySelector("#prazo-tarefa");
const colunaNaoIniciados = document.querySelector("#coluna-nao-iniciados");
const colunaEmAndamento = document.querySelector("#coluna-em-andamento");
const colunaConcluido = document.querySelector("#coluna-concluido");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = campoTitulo.value;
  const descricao = campoDescricao.value;
  const prioridade = campoPrioridade.value;
  const prazo = campoPrazo.value;

if (titulo.trim() === "" ||
    descricao.trim() === "" ||
    prazo === ""
) {
    alert("Preencha o título, descrição e prazo");

    return;
}

  const novoCartao = document.createElement("article");

  const tituloCartao = document.createElement("h4");
  tituloCartao.textContent = titulo;

  const descricaoCartao = document.createElement("p");
  descricaoCartao.textContent = descricao;

  const prioridadeCartao = document.createElement("p");
  prioridadeCartao.textContent = `Prioridade: ${prioridade}`;

  const prazoCartao = document.createElement("p");
  prazoCartao.textContent = `Prazo: ${prazo}`;

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.classList.add("botao-excluir");

  botaoExcluir.addEventListener("click", function () {
   novoCartao.remove();
  });
 
  const botaoIniciar = document.createElement("button");
  botaoIniciar.type = "button";
  botaoIniciar.textContent = "Iniciar";
  botaoIniciar.classList.add("botao-acao");

  botaoIniciar.addEventListener("click", function () {
  colunaEmAndamento.append(novoCartao); 
  });

  const botaoConcluir = document.createElement("button");
  botaoConcluir.type = "button";
  botaoConcluir.textContent = "Concluir";
  botaoConcluir.classList.add("botao-acao");

  botaoConcluir.addEventListener("click", function () {
    colunaConcluido.append(novoCartao);
  });

  novoCartao.append(
    tituloCartao,
    descricaoCartao,
    prioridadeCartao,
    prazoCartao,
    botaoIniciar,
    botaoConcluir,
    botaoExcluir
  );

  colunaNaoIniciados.append(novoCartao);

  formulario.reset();
});