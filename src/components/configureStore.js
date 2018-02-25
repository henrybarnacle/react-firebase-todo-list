import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from 'reducers';
import {routerMiddleware} from 'react-router-redux'


export default (history) => {
	let middleWares = [thunk, routerMiddleware(history)]
	let store = createStore(reducers, applyMiddleware(...middleWares));
	return store;
}