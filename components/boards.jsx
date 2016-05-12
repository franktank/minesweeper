var Minesweeper = require('../minesweeper.js'),
    React = require('react');

var Tile = require('./tiles.jsx');

var Board = React.createClass({
  render: function() {
    var grid = [];
    var self = this;
    this.props.board.grid.forEach(function(row, i) {
      var mapRow = row.map(function(sq) {
        // Fill in tile render method
        return (<Tile tileObject={sq} callback={self.props.callback}/>);
      });
      grid.push(<ul>{mapRow}</ul>);
    });
    return (<div id="board">{grid}</div>);
  }
});

module.exports = Board;
