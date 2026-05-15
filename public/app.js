const produtos = [
  {
    nome: "Chocolate",
    preco: 10,
    img: "imagens/chocolate.jpg"
  },
  {
    nome: "Morango",
    preco: 12,
    img: "imagens/morango.jpg"
  },
  {
    nome: "Ninho",
    preco: 14,
    img: "imagens/ninho.jpg"
  }
];

let carrinho = [];

function carregarProdutos() {
  const lista = document.getElementById("lista");

  produtos.forEach((p, i) => {
    lista.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.nome}</h3>
        <p>R$ ${p.preco}</p>
        <button onclick="add(${i})">Adicionar</button>
      </div>
    `;
  });
}

function add(i) {
  carrinho.push(produtos[i]);
  atualizarCarrinho();
}

function atualizarCarrinho() {
  const lista = document.getElementById("carrinho");
  const totalEl = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrinho.forEach(item => {
    lista.innerHTML += `<li>${item.nome}</li>`;
    total += item.preco;
  });

  totalEl.innerText = "Total: R$ " + total;
}

function finalizar() {
  let msg = "Pedido:%0A";
  carrinho.forEach(p => {
    msg += `- ${p.nome}%0A`;
  });

  window.open(`https://wa.me/5511992952215?text=${msg}`);
}

carregarProdutos();
