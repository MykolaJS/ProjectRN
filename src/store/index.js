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

import mySaga from "../sagas/index";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["user"],
  debug: true
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


const persistor = persistStore(store);

sagaMiddleware.run(mySaga)

export {store, persistor }

