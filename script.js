const snacks = [
  { name: "Potato Chips",      price: "$1.00", category: "chips",  img: "images/chips.jpg" },
  { name: "Pretzels",          price: "$1.25", category: "chips",  img: "images/pretzels.jpg" },
  { name: "Chocolate Bar",     price: "$1.50", category: "sweets", img: "images/chocolate.jpg" },
  { name: "Choc Chip Cookies", price: "$1.75", category: "sweets", img: "images/cookies.jpg" },
  { name: "Glazed Donut",      price: "$2.00", category: "sweets", img: "images/donuts.jpg" },
  { name: "Bottled Water",     price: "$1.00", category: "drinks", img: "images/water.jpg" },
  { name: "Chocolate Milk",    price: "$1.50", category: "drinks", img: "images/choc-milk.jpg" },
  { name: "Lemonade",          price: "$1.25", category: "drinks", img: "images/lemonade.jpg" },
];

const grid = document.getElementById("snack-grid");
const buttons = document.querySelectorAll(".filter-btn");

function render(filter) {
  grid.innerHTML = "";
  const list = filter === "all" ? snacks : snacks.filter(s => s.category === filter);
  list.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${s.img}" alt="${s.name}" loading="lazy">
      <h3>${s.name}</h3>
      <span class="badge">${s.category}</span>
      <span class="price">${s.price}</span>
    `;
    grid.appendChild(card);
  });
}

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    render(btn.dataset.filter);
  });
});

render("all");
