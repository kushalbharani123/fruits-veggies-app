const items = [
  { name: "Apple", type: "Fruit", quantity: 10, price: 2.5, photo: "https://via.placeholder.com/50" },
  { name: "Banana", type: "Fruit", quantity: 8, price: 1.2, photo: "https://via.placeholder.com/50" },
  { name: "Carrot", type: "Vegetable", quantity: 15, price: 1.0, photo: "https://via.placeholder.com/50" }
];

const container = document.getElementById("items");

items.forEach(item => {
  container.innerHTML += `
    <div class="item">
      <img src="${item.photo}" alt="${item.name}">
      <strong>${item.name}</strong> (${item.type}) - Qty: ${item.quantity}, Price: $${item.price}
    </div>
  `;
});
