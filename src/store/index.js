import {
  createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./combineReducers";
import { AsyncStorage } from "react-native";
import {
  persistStore,
  persistReducer
} from "redux-persist";

import fetchUser from "../sagas/index";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  //whitelist: ["user", "OSDeviceId"]
  // debug: true
};


const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware( 
    sagaMiddleware,
    logger,
  )
);

sagaMiddleware.run(fetchUser)

export {store};