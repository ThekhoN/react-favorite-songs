import moxios from "moxios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { favSongsDummyData as dummyData } from "../../../services/data";

import {
  fetchingFavSongs,
  FETCHING_FAV_SONGS,
  errorFetchFavSongs,
  ERROR_FETCH_FAV_SONGS,
  fetchSuccessFavSongs,
  FETCH_SUCCESS_FAV_SONGS,
  asyncFetchFavSongs,
  initialState
} from "./index";

describe("fetchingFavSongs", () => {
  it("returns correct type & payload", () => {
    let payload = true;
    expect(fetchingFavSongs(payload)).toEqual({
      type: FETCHING_FAV_SONGS,
      payload: true
    });
  });
});
describe("errorFetchFavSongs", () => {
  it("returns correct type & payload", () => {
    let payload = "error";
    expect(errorFetchFavSongs(payload)).toEqual({
      type: ERROR_FETCH_FAV_SONGS,
      payload: "error"
    });
  });
});
describe("fetchSuccessFavSongs", () => {
  it("returns correct type & payload", () => {
    let payload = [{ name: "cowboys from hell" }];
    expect(fetchSuccessFavSongs(payload)).toEqual({
      type: FETCH_SUCCESS_FAV_SONGS,
      payload: [{ name: "cowboys from hell" }]
    });
  });
});

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("asyncFetchFavSongs", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  // success
  it("returns correct type & payload on SUCCESS", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: dummyData
      });
    });
    const expectedActions = [
      {
        type: FETCHING_FAV_SONGS,
        payload: true
      },
      {
        type: FETCH_SUCCESS_FAV_SONGS,
        payload: dummyData
      },
      {
        type: FETCHING_FAV_SONGS,
        payload: false
      }
    ];
    const store = mockStore({
      favoriteSongs: initialState
    });
    return store.dispatch(asyncFetchFavSongs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  // error
  it("returns correct type & payload on FAILURE", () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 422
      });
    });
    const expectedActions = [
      { type: FETCHING_FAV_SONGS, payload: true },
      {
        type: ERROR_FETCH_FAV_SONGS,
        payload: "Error in asyncFetchFavSongs"
      },
      { type: FETCHING_FAV_SONGS, payload: false }
    ];
    const store = mockStore({ favoriteSongs: initialState });
    return store.dispatch(asyncFetchFavSongs()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
