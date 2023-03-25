import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    isLoggedIn: false,
    token: null,
    user: null,
}

function rootReducer(previousState, action) {
    if(action.type === "LOGIN") {
        return { ...previousState, isLoggedIn: true, token: action.payload.token, user: action.payload.user };
    } else if(action.type === "LOGOUT") {
        return { ...previousState, isLoggedIn: false, token: null, user: null };
    } else if(action.type === "CHANGE_MESSAGE") {
        return { ...previousState, message: action.payload };
    } else {
        return previousState;
    }
}

const persistedReducer = persistReducer({
    key: "root",
    storage: storage
}, rootReducer)

const store = createStore(persistedReducer, initialState);

const exportedObj = { store, persistor: persistStore(store)}

export default exportedObj;