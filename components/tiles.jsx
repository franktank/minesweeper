var Minesweeper = require('../minesweeper.js'),
    React = require('react');

var Tile = React.createClass({

  handleClick: function(event) {
    var tile = this.props.tileObject;
    tile = this.props.callback(tile, event.altKey);
  },

  render: function() {
    var tile = this.props.tileObject;
    var div = [];
    if (tile.explored) {
      if(tile.bombed) {
        div = <div className="bombed"><img src="./imgs/bomb.png"/></div>;
      } else {
        div = <div className="explored">{tile.adjacentBombCount()}</div>;
      }
    } else if (tile.flagged) {
      div = <div className="flagged"><img src="./imgs/flag.png"/></div>;
    } else {
      div = <div>&nbsp;</div>;
    }
    return (<li className="sq" onClick={this.handleClick}>{div}</li>);
  }
});

module.exports = Tile;
