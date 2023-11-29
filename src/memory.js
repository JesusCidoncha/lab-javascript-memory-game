class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    let cardsArray = Object.values(this.cards);
    let shuffledCards = JSON.parse(JSON.stringify(cardsArray));

    for (let i = shuffledCards.length - 1; i > 0; i -= 1) {
      let j = Math.floor(Math.random() * (i + 1));

      const temp = shuffledCards[i];
      shuffledCards[i] = shuffledCards[j];
      shuffledCards[j] = temp;
    }

    // Update the cards property with the shuffled cards
    this.cards = shuffledCards;

    return shuffledCards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    this.pairsClicked += 1;
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    }
    return false;
  }

  checkIfFinished() {
    // ... write your code here
    let cardsTotal = Object.keys(this.cards);
    if (this.pairsGuessed === cardsTotal.length / 2) {
      return true;
    }
    return false;
  }
}
