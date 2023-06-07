import { RootState } from "app/store";

// селекторы для получения полей стейта
export const authIsRegistered = (state: RootState) => state.auth.isRegistered
export const authIsLoggedIn = (state: RootState) => state.auth.isLoggedIn