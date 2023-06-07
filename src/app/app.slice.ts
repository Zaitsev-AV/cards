import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunks } from "features/auth/auth.slice";

const slice = createSlice( {
	name: 'app',
	initialState: {
		error: null as string | null,
		isLoading: true,
		isAppInitialized: false,
	},
	reducers: {
		setInitialization: (state, action: PayloadAction<{isAppInitialized: boolean}>)=> {
			state.isAppInitialized = action.payload.isAppInitialized
		}
	},
	extraReducers: builder =>  {
		builder.addCase(authThunks.authMe.fulfilled, ( state, action)=> {
			state.isLoading = false
		})
			.addCase(authThunks.logOut.fulfilled, (state, action)=> {
				state.isLoading = false
			})
	}
} )

export const appReducer = slice.reducer
export const appActions = slice.actions