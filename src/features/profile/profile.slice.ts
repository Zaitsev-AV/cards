import { createSlice } from "@reduxjs/toolkit";
import { ProfileType } from "features/auth/auth.api";
import { authThunks } from "features/auth/auth.slice";

const slice = createSlice( {
  name: "profile",
  initialState: {
    profile: null as ProfileType | null
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase( authThunks.login.fulfilled, ( state, action ) => {
        state.profile = action.payload.profile;
      } )
      .addCase( authThunks.upDateUser.fulfilled, ( state, action ) => {
        state.profile = action.payload.updatedUser;
      } )
      .addCase( authThunks.authMe.fulfilled, ( state, action ) => {
        state.profile = action.payload.profile;
      } );
  }
} );

export const profileReducer = slice.reducer