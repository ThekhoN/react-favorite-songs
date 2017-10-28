import thunk from "redux-thunk";
import { compose, createStore, combineReducers, applyMiddleware } from "redux";
import favoriteSongs from "../modules/favorite-songs";

const rootReducer = combineReducers({
  favoriteSongs
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
