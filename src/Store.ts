import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {rootReducer} from './RootReducer';

const compose = composeWithDevTools(applyMiddleware(thunk));
const Store = createStore(rootReducer, compose);

export {Store};
