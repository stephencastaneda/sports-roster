import React from 'react';

import playerData from '../../helpers/data/playerData';
import authData from '../../helpers/data/authData';

import Player from '../Player/Player';
import PlayerForm from '../PlayerForm/PlayerForm';

import './TeamComponent.scss';

class TeamComponent extends React.Component {
  state = {
    players: [],
    formOpen: false,
  }

  getAllPlayers = () => {
    playerData.getPlayerByUid(authData.getUid())
      .then((players) => this.setState({ players }))
      .catch((err) => console.error('unable to get all players: ', err));
  }

  componentDidMount() {
    this.getAllPlayers();
  }

  removePlayer = (playerId) => {
    playerData.deletePlayer(playerId)
      .then(() => this.getAllPlayers())
      .catch((err) => console.error('could not delete player: ', err));
  }

  saveNewPlayer = (newPlayer) => {
    playerData.savePlayer(newPlayer)
      .then(() => {
        this.getAllPlayers();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('could not save player: ', err));
  }


  render() {
    const { players, formOpen } = this.state;

    const makePlayers = players.map((player) => <Player key={player.id} player={player} removePlayer={this.removePlayer}/>);

    return (
      <div className="TeamComponent">
        <h1 className="mt-3 mb-3 text-white">LOS ANGELES LAKERS</h1>
        <button className="btn btn-warning mb-4" onClick={() => this.setState({ formOpen: true })}><i className="fas fa-user-plus"></i></button>
        { formOpen ? <PlayerForm saveNewPlayer={this.saveNewPlayer}/> : ''}
        <div className="d-flex flex-wrap">
          {makePlayers}
        </div>
      </div>
    );
  }
}

export default TeamComponent;
