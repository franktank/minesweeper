var Minesweeper = require('../minesweeper.js'),
    React = require('react'),
    Board = require('./boards');


var Game = React.createClass({
  getInitialState: function(){
    return ({board: new Minesweeper.Board(10,10)});
  },
  updateGame: function(tile, flag){
    var over = this.state.board.won() || this.state.board.lost();
    if (over) {
      alert("This game is over. Restarting Game!");
      this.setState({board: new Minesweeper.Board(10,10)});
    } else {

      if (flag) {
        tile.toggleFlag();
      } else {
        tile.explore();
      }
      this.setState({board: this.state.board}, function(){
        if (this.state.board.won()) {
          var a = confirm("You win! Play again?");
        } else if (this.state.board.lost()) {
          a = confirm("You lose! Play again?");
        }
        if (a) {
          this.setState({board: new Minesweeper.Board(10,10)});
        }
      }.bind(this));
    }
  },
  render: function(){
    return (
      <Board
        board={this.state.board}
        callback={this.updateGame}
      />
    );
  }
});


module.exports = Game;
