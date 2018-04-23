export default class Player {
    constructor() {
        this.cards = [];
    }

    hitCard(card) {
        this.cards.push(card);
    }
}