import { legacy_createStore, applyMiddleware } from 'redux';
import Reducer from './reducers';

import { persistReducer, persistStore } from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['Auth', 'Download'],
};

const persistedReducer = persistReducer(persistConfig, Reducer);
let store = legacy_createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };
