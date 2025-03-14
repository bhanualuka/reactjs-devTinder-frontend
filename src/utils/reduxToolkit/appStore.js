import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // This uses localStorage by default
import userReducer from "./slices/userSlice";
import feedReducer from "./slices/feedSlice";
import connectionReducer from "./slices/connectionSlice";
import requestsReducer from "./slices/requestsSlice";
import { combineReducers } from "redux";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"; // Actions that Redux Persist dispatches

// Define persist config
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "feed", "connections", "requests"],
};

// Combine reducers with persistedReducer
const rootReducer = combineReducers({
  user: userReducer,
  feed: feedReducer,
  connections: connectionReducer,
  requests: requestsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store with persisted reducer
const appStore = configureStore({
  reducer: persistedReducer,

  // Added MiddleWare
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], // Ignore Redux Persist actions to avoid serialization warnings
      },
    }),
});

const persistor = persistStore(appStore); // Create a persistor for the store

export { appStore, persistor };
