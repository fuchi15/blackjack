export default class Card {
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
        this.label = this.getLabel(num);
        this.disable = true;
    }

    getLabel(num) {
        if (num == 1) {
            return "A";
        } else if (num > 10) {
            switch (num) {
                case 11:
                    return "J";
                    break;
                case 12:
                    return "Q";
                    break;
                case 13:
                    return "K";
                    break;
            }
        } else {
            return num;
        }
    }

    changeDisable() {
        this.disable = !this.disable;
    }
}