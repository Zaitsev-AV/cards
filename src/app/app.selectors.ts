import { RootState } from "app/store";

export const selectorIsAppInitialized = (state: RootState) => state.app.isAppInitialized
export const selectorApError = (state: RootState) => state.app.error
export const selectorIsLoading = (state: RootState) => state.app.isLoading