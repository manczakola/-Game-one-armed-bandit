class Game {

    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start);
        document.getElementById('start').addEventListener('click', this.startGame.bind(this));

        this.spanResult = document.querySelector('span.result')
        this.spanWallet = document.querySelector('span.wallet');
        this.spanGames = document.querySelector('span.games');
        this.spanWins = document.querySelector('span.wins');
        this.spanLosses = document.querySelector('span.losses');
        this.boards = [...document.querySelectorAll('div.color')];
        this.color = document.querySelector('color');
        this.input = document.getElementById('bid');

        this.render()

    }
    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0, 0, 0], bid = 0, wonMoney = 0) {

        if (result) {
            result = `Wygrałeś ${wonMoney}$ !`;
            this.spanResult.style.color = 'rgb(255, 0, 98)';
            this.spanResult.style.fontSize = '2em';
            this.spanResult.style.fontWeight = '700';

        } else if (!result && result !== '') {
            result = `Przegrałeś ${bid}$ !`
            this.spanResult.style.color = 'rgb(0, 0, 0)';
            this.spanResult.style.fontSize = '1.5em';
        };
        this.spanResult.textContent = result;

        this.spanWallet.textContent = money;
        this.spanWallet.style.fontSize = '1.3em';
        this.spanWallet.style.fontWeight = '700';

        this.spanGames.textContent = stats[0];
        this.spanGames.style.fontSize = '1.3em';
        this.spanGames.style.fontWeight = '700';

        this.spanWins.textContent = stats[1];
        this.spanWins.style.fontSize = '1.3em';
        this.spanWins.style.fontWeight = '700';

        this.spanLosses.textContent = stats[2];
        this.spanLosses.style.fontSize = '1.3em';
        this.spanLosses.style.fontWeight = '700';

        this.boards.forEach((board, index) => {
            board.style.backgroundColor = colors[index]
        })
        this.input.value = '';
    }

    startGame() {
        if (this.input.value < 1) return alert('Kwota jest zbyt mała!');
        const bid = Math.floor(this.input.value);

        if (!this.wallet.checkCanPlay(bid)) {
            return alert('Masz za mało pieniędzy !');
        }
        this.wallet.changeWalllet(bid, '-');


        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        console.log(win)
        console.log(colors);
        console.log(wonMoney);
        this.wallet.changeWalllet(wonMoney);
        this.spanWallet.textContent = game.wallet.getWalletValue();
        this.stats.addGameToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, wonMoney);

    }

}