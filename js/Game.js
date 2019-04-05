class Game {
    constructor() {

        this.select = new Select();
        this.draw = new Draw();

        [...document.querySelectorAll('.select button')].forEach(button => button.addEventListener('click', this.start));

        document.querySelector('button.start').addEventListener('click', this.letsPlay.bind(this));

        this.buttons = document.querySelectorAll('.select .selectButton');

        this.yourChoice = document.querySelector('[data-summary="your-choice"]');
        this.aiChoice = document.querySelector('[data-summary="ai-choice"]');
        this.gameSummary = document.querySelector('[data-summary="who-win"]');
        this.numbers = document.querySelector('p.numbers span');
        this.wins = document.querySelector('p.wins span');
        this.losses = document.querySelector('p.losses span');
        this.draws = document.querySelector('p.draws span');

        this.render();

    }

    render = (you = '', ai = '', result = '', stats = [0, 0, 0, 0]) => {
        this.yourChoice.textContent = you;
        this.aiChoice.textContent = ai;

        if (result === '') return;
        if (result === 'winer') result = 'Ty!';
        if (result === 'lose') result = 'Ai :(';
        if (result === 'draw') result = 'Remis!';

        this.gameSummary.textContent = result;
        this.numbers.textContent = stats[0];
        this.wins.textContent = stats[1];
        this.losses.textContent = stats[2];
        this.draws.textContent = stats[3];
        this.buttons.forEach(button => button.style.border = '');
        this.select.selected.you = '';
        this.select.selected.ai = '';
    }

    start = (e) => {

        const you = e.target.dataset.option;
        e.target.style.backgroundColor = '#009D50';
        const ai = this.draw.drawHand();

        this.select.selectHand(you, ai);


    }

    letsPlay = () => {

        if (this.select.selected.you === '') return alert("Wybierz dłoń!");

        const you = this.select.selected.you;
        const ai = this.select.selected.ai;
        const result = Result.checkWinner(you, ai);
        this.select.fillTableStats(you, ai, result);
        Result.showWinner(result);

        this.render(you, ai, result, this.select.countStats());
        this.buttons.forEach(button => button.style.backgroundColor = 'transparent');

    }
}