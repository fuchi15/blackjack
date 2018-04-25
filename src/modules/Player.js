export default class Player {
    constructor() {
        this.hand = [];
    }

    hitCard(card) {
        this.hand.push(card);
    }

    getHand() {
        return this.hand;
    }

    getSumHand() {
        let sum = 0;
        this.hand.forEach((card) => {
            if (card.num >= 10) {
                sum += 10;
            } else if (card.num == 1) {
                if (sum <= 10) {
                    sum += 11;
                } else {
                    sum += 1;
                }
            } else {
                sum += card.num;
            }
        });
        return sum;
    }
}