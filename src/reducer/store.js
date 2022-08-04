import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import clipSlice from "./clipSlice";
import searchSlice from "./searchSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  clipSlice,
  searchSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
