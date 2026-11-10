const products = [
  { id: 1, name: "Sepatu", price: 250000 },
  { id: 2, name: "Tas", price: 150000 },
  { id: 3, name: "Jam Tangan", price: 300000 }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");

// tampilkan produk
products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");

  div.innerHTML = `
    <h3>${product.name}</h3>
    <p>Rp ${product.price}</p>
    <button onclick="addToCart(${product.id})">Beli</button>
  `;

  productList.appendChild(div);
});

// tambah ke keranjang
function addToCart(id) {
  cart.push(id);
  cartCount.textContent = cart.length;
}