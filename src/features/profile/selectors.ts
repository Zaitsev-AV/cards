import { RootState } from "app/store";

export const profile = (state: RootState) => state.profile.profile
export const userEmail  = (state: RootState) => state.profile.profile?.email
export const userName  = (state: RootState) => state.profile.profile?.name
export const userID  = (state: RootState) => state.profile.profile?._id