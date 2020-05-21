import React from 'react';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';

import './TeamComponent.scss';

class TeamComponent extends React.Component {
  state = {
    players: [],
  }

  componentDidMount() {
    playerData.getPlayerByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  render() {
    const { players } = this.state;

    const makePlayers = players.map((player) => <Player key={player.id} player={player} />);

    return (
      <div className="TeamComponent">
        <h1 className="mt-3 mb-3 text-white">LOS ANGELES LAKERS</h1>
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
