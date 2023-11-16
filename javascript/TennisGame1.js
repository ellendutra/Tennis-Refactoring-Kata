class TennisGame {
  constructor(firstPlayerName, secondPlayerName) {
    this.firstPlayerScore = 0;
    this.secondPlayerScore = 0;
    this.firstPlayerName = firstPlayerName;
    this.secondPlayerName = secondPlayerName;
  }

  winPoint(playerName) {
    return playerName === this.firstPlayerName ? this.firstPlayerScore += 1 : this.secondPlayerScore += 1;
  }

  getScore() {
    let score = '';
    let winningScore = 4;
    let winningMargin = 2;

    const SCORE_DESCRIPTIONS = {
      0: 'Love-All',
      1: 'Fifteen-All',
      2: 'Thirty-All',
    };

    if (this.firstPlayerScore === this.secondPlayerScore) {
      score = SCORE_DESCRIPTIONS[this.firstPlayerScore] || 'Deuce';

    } else if (this.firstPlayerScore >= winningScore || this.secondPlayerScore >= winningScore) {
      const minusResult = this.firstPlayerScore - this.secondPlayerScore;

      const ADVANTAGE_OR_WIN_RESULTS = {
        1: `Advantage ${this.firstPlayerName}`,
        '-1': `Advantage ${this.secondPlayerName}`,
        2: `Win for ${this.firstPlayerName}`,
        '-2': `Win for ${this.secondPlayerName}`,
      };

      score = ADVANTAGE_OR_WIN_RESULTS[minusResult] || (minusResult >= winningMargin ? `Win for ${this.firstPlayerName}` : `Win for ${this.secondPlayerName}`);

    } else {
      const SCORE_POINT_DESCRIPTIONS = {
        0: 'Love',
        1: 'Fifteen',
        2: 'Thirty',
        3: 'Forty',
      };

      for (let playerIndex = 1; playerIndex < 3; playerIndex++) {
        const currentPlayerScore = playerIndex === 1 ? this.firstPlayerScore : this.secondPlayerScore;

        if (playerIndex === 2) {
          score += '-';
        }
        score += SCORE_POINT_DESCRIPTIONS[currentPlayerScore];
      }
    }
    return score;
  }
}

let game = new TennisGame('Maria', 'João');
game.winPoint('Maria');
game.winPoint('Maria');
game.winPoint('Maria');
game.winPoint('Maria');
console.log(game.getScore());
