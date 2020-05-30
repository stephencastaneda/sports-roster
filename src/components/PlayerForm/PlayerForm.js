import React from 'react';
import PropTypes from 'prop-types';

import './PlayerForm.scss';
import authData from '../../helpers/data/authData';

class PlayerForm extends React.Component {
  static propTypes = {
    saveNewPlayer: PropTypes.func.isRequired,
  }

  state = {
    name: '',
    position: '',
    imageUrl: '',
    isEditing: false,
  }

  componentDidMount() {
    const { player } = this.props;
    if (player.name) {
      this.setState({
        name: player.name,
        position: player.position,
        imageUrl: player.imageUrl,
        isEditing: true,
      });
    }
  }

  savePlayer = (e) => {
    e.preventDefault();
    const { name, position, imageUrl } = this.state;
    const { saveNewPlayer } = this.props;
    const newPlayer = {
      name,
      position,
      imageUrl,
      uid: authData.getUid(),
    };
    saveNewPlayer(newPlayer);
  }

  updatePlayer = (e) => {
    e.preventDefault();
    const { name, position, imageUrl } = this.state;
    const { player, putPlayer } = this.props;
    const updatedPlayer = {
      name,
      position,
      imageUrl,
      uid: authData.getUid(),
    };
    putPlayer(player.id, updatedPlayer);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  }

  positionChange = (e) => {
    e.preventDefault();
    this.setState({ position: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ imageUrl: e.target.value });
  }

  render() {
    const {
      name, position, imageUrl, isEditing,
    } = this.state;

    return (
      <div className="BoardForm">
      <form className="col-6 offset-3 mb-3 text-white">
        <div className="form-group">
          <label htmlFor="player-name">Name</label>
          <input
            type="text"
            className="form-control"
            id="player-name"
            placeholder="Michael Jordan"
            value={name}
            onChange={this.nameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="board-description">Position</label>
          <input
            type="text"
            className="form-control"
            id="player-position"
            placeholder="SG"
            value={position}
            onChange={this.positionChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="board-description">Player Image</label>
          <input
            type="text"
            className="form-control"
            id="player-image"
            placeholder="www.playerimage.com"
            value={imageUrl}
            onChange={this.imageUrlChange}
          />
        </div>
        {isEditing
          ? <button className="btn btn-dark" onClick={this.updatePlayer}>Update Player</button>
          : <button className="btn btn-dark" onClick={this.savePlayer}>Save Player</button>
        }
      </form>
    </div>
    );
  }
}

export default PlayerForm;
