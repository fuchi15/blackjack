export default class View {
    constructor() {
        this.dealer_ul = document.getElementById('dealer_hand');
        this.player_ul = document.getElementById('player_hand');
        this.result = document.getElementById('result');
        this.hit = document.getElementById('hit');
        this.stand = document.getElementById('stand');
    }

    renderDealerHand(dealer) {
        let dealer_hand = dealer.getHand();
        this.dealer_ul.textContent = null;
        dealer_hand.forEach((card) => {
            if (card.disable == true) {
                let img = document.createElement('img');
                img.src = `./images/${card.suit}${card.num}.png`;
                this.dealer_ul.appendChild(img);
            } else {
                let img = document.createElement('img');
                img.src = "./images/z02.png";
                this.dealer_ul.appendChild(img);
            }
        });
    }

    renderPlayerHand(player) {
        let player_hand = player.getHand();
        this.player_ul.textContent = null;
        player_hand.forEach((card) => {
            let img = document.createElement('img');
            img.src = `./images/${card.suit}${card.num}.png`;
            this.player_ul.appendChild(img);
        });
    }

    renderResult(result) {
        this.result.textContent = result;
    }
}