class Select {
  constructor() {

    this.tableOfGames = [],

      this.selected = {
        you: '',
        ai: ''
      }
  }



  selectHand(you, ai) {
    this.selected.you = you;
    this.selected.ai = ai;

  };

  fillTableStats(you, ai, result) {
    const table = {
      you,
      ai,
      result,
    }
    this.tableOfGames.push(table);
  };

  countStats() {
    let games = this.tableOfGames.length;
    let wins = this.tableOfGames.filter(table => table.result === 'winer').length;
    let loses = this.tableOfGames.filter(table => table.result === 'lose').length;
    let draw = this.tableOfGames.filter(table => table.result === 'draw').length;

    return [games, wins, loses, draw];
  };
}

