"use strict";
import Deck from './modules/Deck.js';
import Hand from './modules/Hand.js';
import View from './modules/View.js';

let deck = new Deck();
let player_hand = new Hand();
let dealer_hand = new Hand();
let view = new View();

player_hand.addCard(deck.getCard());
player_hand.addCard(deck.getCard());
dealer_hand.addCard(deck.getCard());
dealer_hand.addCard(deck.getCard());

if (player_hand.checkBlackJack() && dealer_hand.checkBlackJack()) {
    view.renderResult("ひきわけ");
} else if (player_hand.checkBlackJack()) {
    view.renderResult("かち");
} else if (dealer_hand.checkBlackJack()) {
    view.renderResult("まけ");
} else {
    dealer_hand.changeHide();
}

view.renderPlayerHand(player_hand);
view.renderDealerHand(dealer_hand);

view.hit.addEventListener('click', () => {
    player_hand.addCard(deck.getCard());
    view.renderPlayerHand(player_hand);
    let sum = player_hand.getSum();
    if (sum == 21) {
        view.renderResult("かち");
    } else if (sum > 21) {
        view.renderResult("まけ");
    }
});

view.stand.addEventListener('click', () => {
    dealer_hand.changeHide();
    let sum = dealer_hand.getSum();
    while (sum <= 17) {
        sum = 0;
        dealer_hand.addCard(deck.getCard());
        sum = dealer_hand.getSum();
    }
    view.renderDealerHand(dealer_hand);
    if (sum > 21) {
        view.renderResult("かち");
        return;
    }
    const player_difference = 21 - player_hand.getSum();
    const dealer_difference = 21 - dealer_hand.getSum();

    if (player_difference < dealer_difference) {
        view.renderResult("かち");
    } else {
        view.renderResult("まけ");
    }
});