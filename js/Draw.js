class Draw {
    constructor() {
        this.options = ['papier', 'kamień', 'nożyczki'];

    }

    drawHand() {
        let hand;

        const index = Math.floor(Math.random() * this.options.length);

        hand = this.options[index];
        return hand;
    };
}
