import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import ApiReducer from '../reducers/ApiReducer';
import userInfoReducer from '../reducers/userInfoReducer';

const rootReducer = combineReducers({
	userInfoReducerConfig: userInfoReducer,
	apiResponseDataConfig: ApiReducer,
});
const store = () => {
	return createStore(rootReducer, applyMiddleware(thunk));
};

export default store;
