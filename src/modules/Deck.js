import Card from './Card.js';

export default class Deck {
    constructor() {
        this.deck = this.initDeck();
    }

    initDeck() {
        let suits = ['spade', 'heart', 'clover', 'diamond'];
        let deck = [];
        suits.forEach((suit) => {
            for (let i = 1; i <= 13; i++) {
                deck.push(new Card(i, suit));
            }
        });

        return deck.sort(() => {
            return Math.random() - .5;
        });
    }

    getCard() {
        return this.deck.shift();
    }
}