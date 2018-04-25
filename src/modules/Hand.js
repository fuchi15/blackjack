export default class Hand {
    /**
     * @member {Array} hand - 手札を保持するため
     * @member {bool} hide - ディーラーの手札を非表示にするため
     */
    constructor() {
        this.hand = [];
        this.hide = false;
    }

    /**
     * 自分の手札にカードを追加する
     * @param {*} card 
     */
    addCard(card) {
        this.hand.push(card);
    }

    /**
     * 自分の手札を返す
     * @return {Array} 自分の手札
     */
    showCards() {
        return this.hand;
    }

    /**
     * 手札の合計値を返す
     * 11以上は10を足す
     * 1は合計値が10以下の時は11を足す
     * 合計値が11以上の時は1を足す
     * @return {int} 手札の合計値
     */
    getSum() {
        let sum = 0;
        this.hand.forEach((card) => {
            if (card.num > 10) {
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

    /**
     * 手札の表示・非表示を切り替える
     */
    changeHide() {
        this.hide = !this.hide;
    }

    /**
     * 最初に手札を配られた時に、BlackJackかどうかチェックする
     */
    checkBlackJack() {
        if (this.hand[0].num >= 10 && this.hand[1].num == 1 || this.hand[0].num == 1 && this.hand[1].num >= 10) {
            return true;
        } else {
            return false;
        }
    }
}