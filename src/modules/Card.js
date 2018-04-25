export default class Card {
    /**
     * @member {number} num カードの数字
     * @member {String} suit カードのマーク
     * @member {number | String} カードの表示用の数字または文字
     */
    constructor(num, suit) {
        this.num = num;
        this.suit = suit;
        this.label = this.getLabel(num);
    }

    /**
     * 表示が違う数字の表示を返す
     * @param {number} num カードの数字 
     * @return {number | String} 表示用の数字または文字
     */
    getLabel(num) {
        switch (num) {
            case 1:
                return "A";
                break;
            case 11:
                return "J";
                break;
            case 12:
                return "Q";
                break;
            case 13:
                return "K";
                break;
            default:
                return num;
                break;
        }
    }
}