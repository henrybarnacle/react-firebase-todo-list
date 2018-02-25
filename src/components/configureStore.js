import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';

export default () => {
	let middleWares = [thunk];
	let store = createStore(reducers, applyMiddleware(...middleWares));
	return store;
}