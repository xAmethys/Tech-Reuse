const form = document.getElementById("formDoacao");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let equipamento = document.getElementById("equipamento").value;

  let dados = JSON.parse(localStorage.getItem("equipamentos")) || {};

  dados[equipamento] = (dados[equipamento] || 0) + 1;

  localStorage.setItem("equipamentos", JSON.stringify(dados));

  mensagem.innerHTML = "Doação registrada com sucesso!";
});
