import axios from 'axios';
import config from '../config';

export const GAME_DETAILS_FETCHED = 'GAME_DETAILS_FETCHED';

export const fetchGameDetails = () => async (dispatch) => {
  const response = await axios.get(config.apiUrl);
  dispatch({
    type: GAME_DETAILS_FETCHED,
    payload: {
      gameDetails: response.data,
    }
  })
};