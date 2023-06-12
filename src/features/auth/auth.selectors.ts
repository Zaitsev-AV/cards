import { RootState } from "app/store";

export const authIsRegistered = (state: RootState) => state.auth.isRegistered
export const authIsLoggedIn = (state: RootState) => state.auth.isLoggedIn