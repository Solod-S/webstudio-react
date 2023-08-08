import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import PortfolioSlice from './portfolio/portfolioSlice';

const portfolioPersistConfig = {
  key: 'portfolio',
  storage,
};

export const store = configureStore({
  reducer: {
    portfolio: persistReducer(portfolioPersistConfig, PortfolioSlice),
  },

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
