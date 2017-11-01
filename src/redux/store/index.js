import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import favoriteSongs from "../modules/favorite-songs";
import auth from "../modules/auth";
import ui from "../modules/ui";

const rootReducer = combineReducers({
  favoriteSongs,
  auth,
  ui
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
