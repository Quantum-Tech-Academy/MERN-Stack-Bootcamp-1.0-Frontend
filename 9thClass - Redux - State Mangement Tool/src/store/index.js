import { createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
    isLoggedIn: false,
    appName: "React Playground",
    message: "A Message stored in Redux Store"
}

function rootReducer(previousState, action) {
    if(action.type === "LOGIN") {
        return { ...previousState, isLoggedIn: true };
    } else if(action.type === "LOGOUT") {
        return { ...previousState, isLoggedIn: false };
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