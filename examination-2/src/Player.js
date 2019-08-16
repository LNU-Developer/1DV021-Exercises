'use strict'

function Player (deck) {
  this.deck = deck
}

Player.prototype.giveHand = function () {
  let sum = 0
  let card
  let message = ''
  let countA = 0
  do {
    card = this.deck.pop()
    message += `${card.suit}${card.value} `
    if (card.value === 'A') {
      countA++
      if (sum > 7) {
        sum += 1
        countA--
      } else {
        sum += 14
      }
    } else if (card.value === 'J') {
      sum += 11
    } else if (card.value === 'Q') {
      sum += 12
    } else if (card.value === 'K') {
      sum += 13
    } else {
      sum += card.value
    }

    if (sum > 21 && countA > 0) {
      while (countA > 0 && sum > 21) {
        sum = sum - 13
        countA--
      }
    }
  } while (sum <= 15)
  return { message, sum }
}

module.exports = Player
