import React from 'react';
import './Player.scss';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-3 pb-3 player-card-ind">
        <div className="card">
          <img className="card-img-top player-card" src={player.imageUrl} alt="Player" />
          <div className="card-body">
         <i className="delete-player-btn far fa-2x fas fa-user-minus" onClick={this.deletePlayerEvent}></i>
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
