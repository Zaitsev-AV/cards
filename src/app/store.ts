import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { appReducer } from "app/app.slice";
import { authReducer } from "features/auth";
import { profileReducer } from "features/profile/profile.slice";
import { packListReducer } from "features/packs/pack.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    profile: profileReducer,
    packList: packListReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
