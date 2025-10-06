const bandContainer = document.getElementById("band");

const cardsWrapper = document.createElement("div");
cardsWrapper.classList.add("cards");

for (let i = 0; i < 10; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  cardsWrapper.appendChild(card);
}

bandContainer.appendChild(cardsWrapper);
