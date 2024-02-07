var minimumCardPickup = function (cards) {
  `
      cards =[3,4,2,3,3,4,7]
      lastSeen  { 3 => 4, 4 => 5, 2 => 2, 7 => 6 }
      store index info (if there is pair, store last index only)
  `;
  const lastSeen = new Map();
  let minPairs = Infinity;

  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    if (lastSeen.has(card)) {
      minPairs = Math.min(minPairs, i - lastSeen.get(card) + 1);
    }
    lastSeen.set(card, i);
  }

  return minPairs === Infinity ? -1 : minPairs;
};
