"use strict";
import Deck from './modules/Deck.js';
import Player from './modules/Player.js';

let deck = new Deck();
let player = new Player();
let dealer = new Player();

for (let i = 0; i < 2; i++) {
    player.hitCard(deck.getCard());
    dealer.hitCard(deck.getCard());
}

console.log(dealer);
console.log(player);