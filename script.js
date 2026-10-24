console.log("JavaScript conectado ao Kanban!");

const formulario = document.querySelector("#form-nova-tarefa");
const campoTitulo = document.querySelector("#titulo-tarefa");
const campoDescricao = document.querySelector("#descricao-tarefa");
const campoPrioridade = document.querySelector("#prioridade-tarefa");
const campoPrazo = document.querySelector("#prazo-tarefa");
const colunaNaoIniciados = document.querySelector("#coluna-nao-iniciados");


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

  novoCartao.append(
    tituloCartao,
    descricaoCartao,
    prioridadeCartao,
    prazoCartao
  );

  colunaNaoIniciados.append(novoCartao);

  formulario.reset();
});