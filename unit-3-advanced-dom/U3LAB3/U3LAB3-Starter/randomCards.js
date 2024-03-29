const playingCards = [
  "A♠️",
  "2♠️",
  "3♠️",
  "4♠️",
  "5♠️",
  "6♠️",
  "7♠️",
  "8♠️",
  "9♠️",
  "10♠️",
  "J♠️",
  "Q♠️",
  "K♠️",
  "A❤️",
  "2❤️",
  "3❤️",
  "4❤️",
  "5❤️",
  "6❤️",
  "7❤️",
  "8❤️",
  "9❤️",
  "10❤️",
  "J❤️",
  "Q❤️",
  "K❤️",
  "A♣️",
  "2♣️",
  "3♣️",
  "4♣️",
  "5♣️",
  "6♣️",
  "7♣️",
  "8♣️",
  "9♣️",
  "10♣️",
  "J♣️",
  "Q♣️",
  "K♣️",
  "A♦️",
  "2♦️",
  "3♦️",
  "4♦️",
  "5♦️",
  "6♦️",
  "7♦️",
  "8♦️",
  "9♦️",
  "10♦️",
  "J♦️",
  "Q♦️",
  "K♦️",
];

const getRandomCards = () => {
    const shuffled = playingCards.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
}

