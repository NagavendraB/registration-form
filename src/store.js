import {createStore, compose} from "redux";
import {persistStore} from "redux-persist";
import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";

function configureStore() {
  const enhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  const store = createStore(
    combineReducers({form: formReducer}), 
    enhancer
  );
  persistStore(store);
  return store;
}

export default configureStore();