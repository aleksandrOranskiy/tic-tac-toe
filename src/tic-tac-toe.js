class TicTacToe {

    constructor() {

        this.matrix = new Array(3);
        this.matrix[0] = new Array(3);
        this.matrix[1] = new Array(3);
        this.matrix[2] = new Array(3);
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; ++j) {
                this.matrix[i][j] = null;
            }
        }
        this.currentPlayer = 'x';
        this.winner = null;
    }

    getCurrentPlayerSymbol() {

        return this.currentPlayer;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.getFieldValue(rowIndex,columnIndex) === null) {
            this.matrix[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
            //if (!this.noMoreTurns() && !this.isFinished()) {
                if (this.getCurrentPlayerSymbol() === 'x') {
                    this.currentPlayer = 'o';
                } else {
                    this.currentPlayer = 'x';
                }
            //}
        }

        this.isFinished();
    }

    isFinished() {

        if ((this.getFieldValue(0,0) === this.getFieldValue(0,1)) && (this.getFieldValue(0,0) === this.getFieldValue(0,2)) &&
            (this.getFieldValue(0,1) === this.getFieldValue(0,2)) && (this.getFieldValue(0,0) !== null)) {
            this.winner = this.getFieldValue(0,0);
            return true;
        } else if ((this.getFieldValue(1,0) === this.getFieldValue(1,1)) && (this.getFieldValue(1,0) === this.getFieldValue(1,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(1,2)) && (this.getFieldValue(1,0) !== null)) {
            this.winner = this.getFieldValue(1,0);
            return true;
        } else if ((this.getFieldValue(2,0) === this.getFieldValue(2,1)) && (this.getFieldValue(2,0) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(2,1) === this.getFieldValue(2,2)) && (this.getFieldValue(2,0) !== null)) {
            this.winner = this.getFieldValue(2,0);
            return true;
        } else if ((this.getFieldValue(0,0) === this.getFieldValue(1,0)) && (this.getFieldValue(0,0) === this.getFieldValue(2,0)) &&
            (this.getFieldValue(1,0) === this.getFieldValue(2,0)) && (this.getFieldValue(0,0) !== null)) {
            this.winner = this.getFieldValue(0,0);
            return true;
        } else if ((this.getFieldValue(0,1) === this.getFieldValue(1,1)) && (this.getFieldValue(0,1) === this.getFieldValue(2,1)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(2,1)) && (this.getFieldValue(0,1) !== null)) {
            this.winner = this.getFieldValue(0,1);
            return true;
        } else if ((this.getFieldValue(0,2) === this.getFieldValue(1,2)) && (this.getFieldValue(0,2) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(1,2) === this.getFieldValue(2,2)) && (this.getFieldValue(0,2) !== null)) {
            this.winner = this.getFieldValue(0,2);
            return true;
        } else if ((this.getFieldValue(0,0) === this.getFieldValue(1,1)) && (this.getFieldValue(0,0) === this.getFieldValue(2,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(2,2)) && (this.getFieldValue(0,0) !== null)) {
            this.winner = this.getFieldValue(0,0);
            return true;
        } else if ((this.getFieldValue(2,0) === this.getFieldValue(1,1)) && (this.getFieldValue(2,0) === this.getFieldValue(0,2)) &&
            (this.getFieldValue(1,1) === this.getFieldValue(0,2)) && (this.getFieldValue(2,0) !== null)) {
            this.winner = this.getFieldValue(2,0);
            return true;
        } else if (this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {

       return this.winner;
    }

    noMoreTurns() {

        var countSpace = 0;
        for (var i = 0; i < 3; ++i) {
            for (var j = 0; j < 3; ++j) {
                if (this.matrix[i][j] === null) {
                    ++countSpace;
                }
            }
        }

        return (countSpace === 0);
    }

    isDraw() {

        return (this.noMoreTurns() && (this.winner === null));
    }

    getFieldValue(rowIndex, colIndex) {

        return this.matrix[rowIndex][colIndex];
    }
}
//----------------------------------------------------------------------

//console.log(game.getCurrentPlayerSymbol()+" = x");//.to.equal('x')
//console.log(game.getCurrentPlayerSymbol()+" = o");//.to.equal('o')

//console.log(game.isFinished()+" = true");//.to.equal(true)
//console.log(game.isFinished()+" = false");//.to.equal(false)

//console.log(game.getWinner()+" = o");//.to.equal('o')
//console.log(game.getWinner()+" = x");//.to.equal('x')
//console.log(game.getWinner()+" = null");//.to.equal('null')

//console.log(game.noMoreTurns()+" = false");//.to.equal(false);
//console.log(game.noMoreTurns()+" = true");//.to.equal(true);
//console.log(game.isDraw()+" = false");//.to.equal(false);
//console.log(game.isDraw()+" = true");//.to.equal(true);
//console.log(game.getFieldValue(0, 0)+" = o");//.to.equal('o')
//console.log(game.getCurrentPlayerSymbol()+" = x");//.to.equal('x')
//console.log(game.getCurrentPlayerSymbol()+" = o");//.to.equal('o')

var game = new TicTacToe();
            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = o");//.to.equal('o')


            game = new TicTacToe();
            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = o");//.to.equal('o')


            game = new TicTacToe();
            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = o");//.to.equal('o')


            game = new TicTacToe();
            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = o");//.to.equal('o')


            game = new TicTacToe();
            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = x");//.to.equal('x')

//-----------------------------------------------------------------------
//
            game = new TicTacToe();
            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = x");//.to.equal('x')
//
//-----------------------------------------------------------------------

//-----------------------------------------------------------------------
//
            game = new TicTacToe();
            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = x");//.to.equal('x')
//
//-----------------------------------------------------------------------

            game = new TicTacToe();
            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

//-----------------------------------------------------------------------
//
            game = new TicTacToe();
            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = x");//.to.equal('x')
//
//-----------------------------------------------------------------------

            game = new TicTacToe();
            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 0);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(0, 2);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(1, 1);
            console.log(game.getWinner()+" = null");//.to.equal('null')

            game.nextTurn(2, 0);
            console.log(game.getWinner()+" = x");//.to.equal('x')


module.exports = TicTacToe;
