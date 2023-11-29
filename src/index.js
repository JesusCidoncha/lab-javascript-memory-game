const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div> 
      `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".card").forEach((card) => {
    card.addEventListener("click", () => {
      const cardName = card.getAttribute("data-card-name");

      if (memoryGame.pickedCards.length < 2) {
        card.classList.add(`turned`);
        memoryGame.pickedCards.push(card);
      }
      if (memoryGame.pickedCards.length == 2) {
        let card1Name =
          memoryGame.pickedCards[0].getAttribute(`data-card-name`);
        let card2Name =
          memoryGame.pickedCards[1].getAttribute(`data-card-name`);
        let resultComparison = memoryGame.checkIfPair(card1Name, card2Name);
        if (!resultComparison) {
          setTimeout(() => {
            memoryGame.pickedCards[0].classList.remove(`turned`);
            memoryGame.pickedCards[1].classList.remove(`turned`);
            memoryGame.pickedCards = [];
          }, 1000);
        } else {
          memoryGame.pairsGuessed.push(memoryGame.pickedCards[0]);
          memoryGame.pairsGuessed.push(memoryGame.pickedCards[1]);
          memoryGame.pickedCards = [];
        }
      }

      console.log(`Card clicked: ${cardName}`);
    });
  });
});
