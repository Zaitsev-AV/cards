import { RootState } from "app/store";

export const selectProfile = ( state: RootState) => state.profile.profile
export const selectProfileEmail  = ( state: RootState) => state.profile.profile?.email
export const selectUserName  = ( state: RootState) => state.profile.profile?.name
export const selectUserID  = ( state: RootState) => state.profile.profile?._id