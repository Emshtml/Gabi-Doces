const produtos = [
  {
    nome: "Chocolate",
    preco: 10,
    img: "imagens/chocolate.jpeg"
  },
  {
    nome: "Morango",
    preco: 12,
    img: "imagens/morango.jpeg"
  },
  {
    nome: "Ninho",
    preco: 14,
    img: "imagens/ninho.jpeg"
  },
  {
    nome: "Prestígio",
    preco: 15,
    img: "imagens/prestigio.jpeg"
  },
  {
    nome: "Oreo",
    preco: 16,
    img: "imagens/oreo.jpeg"
  },
  {
    nome: "Nutella",
    preco: 18,
    img: "imagens/nutella.jpeg"
  },
  {
    nome: "Kinder Bueno",
    preco: 20,
    img: "imagens/kinder-bueno.jpeg"
  },
  {
    nome: "Paçoca",
    preco: 13,
    img: "imagens/pacoca.jpeg"
  },
  {
    nome: "Leite Condensado",
    preco: 12,
    img: "imagens/leite-condensado.jpeg"
  },
  {
    nome: "Limão",
    preco: 13,
    img: "imagens/limao.jpeg"
  },
  {
    nome: "Red Velvet",
    preco: 19,
    img: "imagens/red-velvet.jpeg"
  },
  {
    nome: "Brigadeiro Gourmet",
    preco: 15,
    img: "imagens/brigadeiro-gourmet.jpeg"
  },
  {
    nome: "Maracujá",
    preco: 14,
    img: "imagens/maracuja.jpeg"
  },
  {
    nome: "Churros",
    preco: 17,
    img: "imagens/churros.jpeg"
  },
  {
    nome: "Ferrero Rocher",
    preco: 22,
    img: "imagens/ferrero-rocher.jpeg"
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

  msg += `%0ATotal do pedido confirmado 🍰`;

  window.open(`https://wa.me/5511992952215?text=${msg}`);
}

carregarProdutos();
