"use strict";
import Deck from './modules/Deck.js';
import Player from './modules/Player.js';
import View from './modules/View.js';

let deck = new Deck();
let player = new Player();
let dealer = new Player();
let view = new View();

player.hitCard(deck.getCard());
player.hitCard(deck.getCard());
dealer.hitCard(deck.getCard());
dealer.hitCard(deck.getCard());

let dealer_hand = dealer.getHand();
dealer_hand[1].changeDisable();
let player_hand = player.getHand();

if (player_hand[0].num >= 10 && player_hand[1].num == 1 || player_hand[0].num == 1 && player_hand[1].num >= 10) {
    view.renderResult("Win");
}

view.renderPlayerHand(player);
view.renderDealerHand(dealer);

view.hit.addEventListener('click', () => {
    player.hitCard(deck.getCard());
    view.renderPlayerHand(player);
    let sum = player.getSumHand();
    if (sum == 21) {
        view.renderResult("Win");
    } else if (sum > 21) {
        view.renderResult("Lose");
    }
});

view.stand.addEventListener('click', () => {
    dealer_hand = dealer.getHand();
    dealer_hand[1].changeDisable();
    let sum = dealer.getSumHand();
    while (sum <= 17) {
        sum = 0;
        dealer.hitCard(deck.getCard());
        view.renderDealerHand(dealer);
        sum = dealer.getSumHand();
    }

    if (sum > 21) {
        view.renderResult("Win");
        return;
    }

    let player_sum = 21 - player.getSumHand();
    let dealer_sum = 21 - dealer.getSumHand();

    if (player_sum < dealer_sum) {
        view.renderResult("win");
    } else {
        view.renderResult("lose");
    }
});