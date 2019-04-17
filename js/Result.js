class Result {

    static showWinner(result) {
        if (result === 'draw') return 'draw';
        if (result === 'winer') return 'winer';
        if (result === 'lose') return 'lose';
    };


    static checkWinner(you, ai) {
        if (you === ai) return 'draw';
        if (you === "papier" && ai === "kamień" || you === "kamień" && ai === "nożyczki" || you === "nożyczki" && ai === "papier") return 'winer';
        else return 'lose';
    };
}