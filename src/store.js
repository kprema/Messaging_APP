import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import addContactReducer from './components/reducers/addContactReducer';
import addmsgReducer from './components/reducers/msgReducer';

const initialState = {};
const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
const store = createStore(
  combineReducers({
    contacts: addContactReducer,
    msg: addmsgReducer,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
