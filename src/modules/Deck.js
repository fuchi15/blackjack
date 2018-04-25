import Card from './Card.js';

export default class Deck {
    /**
     * @member {Array} deck 山札
     */
    constructor() {
        this.deck = this.initDeck();
    }

    /**
     * 52枚のトランプで山札を作成する
     * 山札をシャッフルした値を返す
     * @return {Array} シャッフルした山札を返す
     */
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

    /**
     * 山札の一番最初のカードを取得して返す
     * 取得したカードを山札から削除する
     * @return {object} 山札の最初のカード
     */
    getCard() {
        return this.deck.shift();
    }
}