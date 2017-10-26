import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import favoriteSongs from "../modules/favorite-songs";

const rootReducer = combineReducers({
  favoriteSongs
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
