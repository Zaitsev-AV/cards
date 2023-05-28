import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunks } from "features/auth/auth.slice";

const slice = createSlice( {
	name: 'app',
	initialState: {
		error: null as string | null,
		isLoading: true,
		isAppInitialized: false
	},
	reducers: {
		setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
			state.isLoading = action.payload.isLoading
		}
	},
	extraReducers: builder =>  {
		builder.addCase(authThunks.me.fulfilled, (state, action)=> {
			state.isAppInitialized = true
		})
			.addCase(authThunks.logOut.fulfilled, (state, action)=> {
				state.isAppInitialized = false
			})
	}
} )

export const appReducer = slice.reducer
export const appActions = slice.actions