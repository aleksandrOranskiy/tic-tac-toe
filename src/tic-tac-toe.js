class TicTacToe {

    constructor() {

        this.matrix = new Array(3);
        this.matrix[0] = new Array(3);
        this.matrix[1] = new Array(3);
        this.matrix[2] = new Array(3);
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; ++j) {
                this.matrix[i][j] = '';
            }
        }
        this.currentPlayer = 'x';
        this.isFinal = false;
    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.getFieldValue(rowIndex,columnIndex) === '') {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            if (!this.noMoreTurns() && !this.isFinished()) {
                if (this.getCurrentPlayerSymbol() === 'x') {
                    this.currentPlayer = 'o';
                } else {
                    this.currentPlayer = 'x';
                }
            }
        }
    }

    isFinished() {

        if ((this.getFieldValue(0,0) === this.getFieldValue(0,1)) && (this.getFieldValue(0,0) === this.getFieldValue(0,2)) &&
            (this.getFieldValue(0,1) === this.getFieldValue(0,2)) && (this.getFieldValue(0,0) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(1,0) === this.getFieldValue(1,1)) && (this.getFieldValue(1,0) === this.getFieldValue(1,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(1,2)) && (this.getFieldValue(1,0) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(2,0) === this.getFieldValue(2,1)) && (this.getFieldValue(2,0) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(2,1) === this.getFieldValue(2,2)) && (this.getFieldValue(2,0) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(0,0) === this.getFieldValue(1,0)) && (this.getFieldValue(0,0) === this.getFieldValue(2,0)) &&
            (this.getFieldValue(1,0) === this.getFieldValue(2,0)) && (this.getFieldValue(0,0) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(0,1) === this.getFieldValue(1,1)) && (this.getFieldValue(0,1) === this.getFieldValue(2,1)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(2,1)) && (this.getFieldValue(0,1) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(0,2) === this.getFieldValue(1,2)) && (this.getFieldValue(0,2) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(1,2) === this.getFieldValue(2,2)) && (this.getFieldValue(0,2) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(0,0) === this.getFieldValue(1,1)) && (this.getFieldValue(0,0) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(2,2)) && (this.getFieldValue(0,0) !== '')) {
            this.isFinal = true;
            return true;
        } else if ((this.getFieldValue(2,0) === this.getFieldValue(1,1)) && (this.getFieldValue(2,0) === this.getFieldValue(0,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(0,2)) && (this.getFieldValue(2,0) !== '')) {
            this.isFinal = true;
            return true;
        } else {
            return false;
        }
    }

    getWinner() {

        if (this.isFinal) {
            return this.getCurrentPlayerSymbol();
        } else {
            return null;
        }
    }

    noMoreTurns() {

        var countSpace = 0;
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; ++j) {
                if (this.matrix[i][j] === '') {
                    ++countSpace;
                }
            }
        }

        return (countSpace === 0);
    }

    isDraw() {

        return (this.noMoreTurns() && (this.getWinner() === null));
    }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];
    }
}
//----------------------------------------------------------------------

//console.log(game.getCurrentPlayerSymbol()+" = x");//.to.equal('x')
//console.log(game.getCurrentPlayerSymbol()+" = o");//.to.equal('o')

var game = new TicTacToe();
game.nextTurn(1, 0);
console.log(game.getWinner()+" = null");//.to.equal(null)

game.nextTurn(1, 2);
console.log(game.getWinner()+" = null");//.to.equal(null)

game.nextTurn(2, 1);
console.log(game.getWinner()+" = null");//.to.equal(null)

game.nextTurn(1, 2);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(1, 1);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(0, 1);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(2, 0);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(0, 1);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(2, 2);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(0, 1);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(1, 1);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(2, 0);
console.log(game.getWinner());//.to.equal(null)

game.nextTurn(0, 2);
console.log(game.getWinner()+" = o");//.to.equal('o')

module.exports = TicTacToe;
