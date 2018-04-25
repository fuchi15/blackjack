export default class View {
    /**
     * @member {object} dealer_ul ディーラーの手札を表示するためのul
     * @member {object} player_ul ディーラーの手札を表示するためのul
     * @member {object} result 勝敗の結果を表示するためのdiv
     * @member {object} hit プレイヤーがhitするためのボタン
     * @member {object} stand プレイヤーがstandするためのボタン
     */
    constructor() {
        this.dealer_ul = document.getElementById('dealer_hand');
        this.player_ul = document.getElementById('player_hand');
        this.result = document.getElementById('result');
        this.hit = document.getElementById('hit');
        this.stand = document.getElementById('stand');
    }

    /**
     * ディーラーの手札を表示する
     * hideがtrueの時は2枚目の手札を隠す
     * @param {*} dealer_hand ディーラーの手札 
     */
    renderDealerHand(dealer_hand) {
        let hand = dealer_hand.showCards();
        this.dealer_ul.textContent = null;

        if (dealer_hand.hide == false) {
            hand.forEach((card) => {
                let img = document.createElement('img');
                img.src = `./images/${card.suit}${card.num}.png`;
                this.dealer_ul.appendChild(img);
            });
        } else {
            let img = document.createElement('img');
            img.src = `./images/${hand[1].suit}${hand[1].num}.png`;
            this.dealer_ul.appendChild(img);
            img = document.createElement('img');
            img.src = "./images/z02.png";
            this.dealer_ul.appendChild(img);
        }
    }

    /**
     * プレイヤーの手札を表示する
     * @param {*} player_hand プレイヤーの手札を表示する
     */
    renderPlayerHand(player_hand) {
        let hand = player_hand.showCards();
        this.player_ul.textContent = null;
        hand.forEach((card) => {
            let img = document.createElement('img');
            img.src = `./images/${card.suit}${card.num}.png`;
            this.player_ul.appendChild(img);
        });
    }

    /**
     * 勝敗の結果を表示する
     * @param {string} result 勝敗の結果
     */
    renderResult(result) {
        this.result.textContent = result;
    }
}