import { createStore, combineReducers } from "redux";

const testReducer = (state = "", action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  testReducer
});

const store = createStore(rootReducer);

export default store;
