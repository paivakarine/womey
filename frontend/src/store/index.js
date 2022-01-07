import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth:authReducer
});

const middlewares = [thunk];

const compose = composeWithDevTools(applyMiddleware(...middlewares));

const store = createStore(reducers, compose);

export default store;
