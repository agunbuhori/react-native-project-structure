import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '@store/reducers';
import storage from '@store/storage';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['error', 'status'],
};

export const store = createStore(
  persistReducer(persistConfig, rootReducer),
  applyMiddleware(thunk)
);

export const persistor = persistStore(store);