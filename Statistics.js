class Statistics {
    constructor() {
        this.gameResults = [];

    };
    addGameToStatistics(win, bid) {
        let gameResult = {
            win: win,
            bid: bid
        }
        console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {
        // return [ liczbaGier,liczbWygranych,liczbaPrzegranych]
        let games = this.gameResults.length;
        let wins = this.gameResults.filter(result => result.win).length;
        let losses = games - wins;
        return [games, wins, losses]

    }
}

const stats = new Statistics()