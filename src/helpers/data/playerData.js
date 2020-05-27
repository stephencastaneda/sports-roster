import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPlayerByUid = (uid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/player.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const allPlayersObject = result.data;
      const players = [];
      if (allPlayersObject !== null) {
        Object.keys(allPlayersObject).forEach((playerId) => {
          const newPlayer = allPlayersObject[playerId];
          newPlayer.id = playerId;
          players.push(newPlayer);
        });
      }
      resolve(players);
    })
    .catch((err) => reject(err));
});

const deletePlayer = (playerId) => axios.delete(`${baseUrl}/player/${playerId}.json`);

export default { getPlayerByUid, deletePlayer };
