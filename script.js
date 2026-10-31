console.log("JavaScript conectado ao Kanban!");

const formulario = document.querySelector("#form-nova-tarefa");
const campoTitulo = document.querySelector("#titulo-tarefa");
const campoDescricao = document.querySelector("#descricao-tarefa");
const campoPrioridade = document.querySelector("#prioridade-tarefa");
const campoPrazo = document.querySelector("#prazo-tarefa");

const botaoEnviar = document.querySelector("#form-nova-tarefa button[type='submit']");

const colunaNaoIniciados = document.querySelector("#coluna-nao-iniciados");
const colunaEmAndamento = document.querySelector("#coluna-em-andamento");
const colunaConcluido = document.querySelector("#coluna-concluido");

let cartaoEmEdicao = null;

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const titulo = campoTitulo.value;
  const descricao = campoDescricao.value;
  const prioridade = campoPrioridade.value;
  const prazo = campoPrazo.value;

if (
    titulo.trim() === "" ||
    descricao.trim() === "" ||
    prazo === ""
) {
    alert("Preencha o título, a descrição e o prazo.");

    return;
}
  if (cartaoEmEdicao !== null) {
    cartaoEmEdicao.tituloCartao.textContent = titulo;
    cartaoEmEdicao.descricaoCartao.textContent = descricao;
    cartaoEmEdicao.prioridadeCartao.textContent = `Prioridade: ${prioridade}`;
    cartaoEmEdicao.prazoCartao.textContent = `Prazo: ${prazo}`;

    cartaoEmEdicao = null;

    formulario.reset();

    botaoEnviar.textContent = "Adicionar tarefa"; 

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

  const botaoEditar = document.createElement("button");
  botaoEditar.type = "button";
  botaoEditar.textContent = "Editar";
  botaoEditar.classList.add("botao-acao");
  
  botaoEditar.addEventListener("click", function () {
    campoTitulo.value = tituloCartao.textContent;
    campoDescricao.value = descricaoCartao.textContent;

    campoPrioridade.value = prioridadeCartao.textContent.replace("Prioridade: ", "");

    campoPrazo.value = prazoCartao.textContent.replace("Prazo: ", "");

    cartaoEmEdicao = {
      tituloCartao,
      descricaoCartao,
      prioridadeCartao,
      prazoCartao
    };

    botaoEnviar.textContent = "Salvar alterações";
  });

  const botaoExcluir = document.createElement("button");
  botaoExcluir.type = "button";
  botaoExcluir.textContent = "Excluir";
  botaoExcluir.classList.add("botao-excluir");

  botaoExcluir.addEventListener("click", function () {
   novoCartao.remove();
  });

  novoCartao.append(
    tituloCartao,
    descricaoCartao,
    prioridadeCartao,
    prazoCartao,
    botaoIniciar,
    botaoConcluir,
    botaoEditar,
    botaoExcluir
  );

  colunaNaoIniciados.append(novoCartao);

  formulario.reset();
});