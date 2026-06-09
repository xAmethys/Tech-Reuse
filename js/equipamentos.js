const lista = document.getElementById("listaEquipamentos");

const dados = JSON.parse(localStorage.getItem("equipamentos")) || {};

for (let item in dados) {
  let li = document.createElement("li");

  li.innerHTML = `${item}: ${dados[item]} recebido(s)`;

  lista.appendChild(li);
}
