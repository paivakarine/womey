import { applyMiddleware, combineReducers, createStore } from "redux";

// import reducer
import authReducer from "./auth/reducer";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const reducers = combineReducers({
    auth:authReducer
});

// middlewares
const middlewares = [thunk];

// composicao que junta middlewares + ferramentas (devtools)
const compose = composeWithDevTools(applyMiddleware(...middlewares));

// criar store
const store = createStore(reducers, compose);

export default store;
