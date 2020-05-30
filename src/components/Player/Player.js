import React from 'react';
import './Player.scss';
import PropTypes from 'prop-types';
import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
    removePlayer: PropTypes.func.isRequired,
    editAPlayer: PropTypes.func.isRequired,
  }

  deletePlayerEvent = (e) => {
    e.preventDefault();
    const { player, removePlayer } = this.props;
    removePlayer(player.id);
  }

  editPlayerEvent = (e) => {
    e.preventDefault();
    const { editAPlayer, player } = this.props;
    editAPlayer(player);
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-3 pb-3 player-card-ind">
        <div className="card">
          <img className="card-img-top player-card" src={player.imageUrl} alt="Player" />
          <div className="card-body">
        <button className="delete-player-btn" onClick={this.deletePlayerEvent}><i className="far fa-2x fas fa-user-minus"></i></button>
         <button className="edit-player-btn" onClick={this.editPlayerEvent}><i className="fas fa-pencil-alt"></i></button>
            <h5 className="card-title">{player.name}</h5>
            <p className="card-text">{player.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
