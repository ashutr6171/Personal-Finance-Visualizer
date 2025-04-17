const balance = document.getElementById("balance");
const form = document.getElementById("form");
const list = document.getElementById("list");
const text = document.getElementById("text");
const amount = document.getElementById("amount");

let transactions = [];

form.addEventListener("submit", e => {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value
  };

  transactions.push(transaction);
  updateDOM();
  text.value = "";
  amount.value = "";
});

function updateDOM() {
  list.innerHTML = "";
  let total = 0;

  transactions.forEach(t => {
    const sign = t.amount < 0 ? "-" : "+";
    total += t.amount;

    const item = document.createElement("li");
    item.textContent = `${t.text}: ${sign}$${Math.abs(t.amount)}`;
    list.appendChild(item);
  });

  balance.textContent = `Balance: $${total}`;
}
