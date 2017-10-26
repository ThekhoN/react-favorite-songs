import axios from "axios";
import { rootUrl, endpoints } from "../../../services/api";
const url = `${rootUrl}${endpoints.favoriteSongs}`;

// action type
export const FETCHING_FAV_SONGS = "FETCHING_FAV_SONGS";
export const ERROR_FETCH_FAV_SONGS = "ERROR_FETCH_FAV_SONGS";
export const FETCH_SUCCESS_FAV_SONGS = "FETCH_SUCCESS_FAV_SONGS";

// actions
export const fetchingFavSongs = payload => ({
  type: FETCHING_FAV_SONGS,
  payload
});
export const errorFetchFavSongs = payload => ({
  type: ERROR_FETCH_FAV_SONGS,
  payload
});
export const fetchSuccessFavSongs = payload => ({
  type: FETCH_SUCCESS_FAV_SONGS,
  payload
});

// action creator
export const asyncFetchFavSongs = () => {
  return function(dispatch) {
    dispatch(fetchingFavSongs(true));
    return axios
      .get(url)
      .then(response => {
        dispatch(fetchSuccessFavSongs(response.data));
        dispatch(fetchingFavSongs(false));
      })
      .catch(err => {
        dispatch(errorFetchFavSongs("Error in asyncFetchFavSongs"));
        dispatch(fetchingFavSongs(false));
      });
  };
};

// initial state
export const initialState = {
  fetching: false,
  data: [],
  error: ""
};

// reducer
const favoriteSongs = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FAV_SONGS:
      return { ...state, fetching: action.payload };
    case FETCH_SUCCESS_FAV_SONGS:
      return { ...state, data: action.payload };
    case ERROR_FETCH_FAV_SONGS:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default favoriteSongs;
