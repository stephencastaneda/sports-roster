import React from 'react';
import './Player.scss';

import playerShape from '../../helpers/propz/playerShape';

class Player extends React.Component {
  static propTypes = {
    player: playerShape.playerShape,
  }

  render() {
    const { player } = this.props;
    return (
      <div className="Player col-3 pb-3">
        <div class="card">
          <img class="card-img-top player-card" src={player.imageUrl} alt="Player" />
          <div class="card-body">
            <h5 class="card-title">{player.name}</h5>
            <p class="card-text">{player.position}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
