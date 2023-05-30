import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authThunks } from "features/auth/auth.slice";

const slice = createSlice( {
	name: 'app',
	initialState: {
		error: null as string | null,
		isLoading: true,
		isAppInitialized: false,
		isLoggedIn: false
	},
	reducers: {
		setIsLoading: (state, action: PayloadAction<{isLoading: boolean}>) => {
			state.isLoading = action.payload.isLoading
		},
		appInitialized: (state, action: PayloadAction<{initialized: boolean}>) => {
			state.isAppInitialized = action.payload.initialized
		},
		setIsLoggedIn: (state, action: PayloadAction<{isLoggedIn: boolean}>)=> {
			state.isLoggedIn = action.payload.isLoggedIn
		}
	},
	extraReducers: builder =>  {
		builder.addCase(authThunks.me.fulfilled, (state, action)=> {
			state.isLoading = true
			state.isAppInitialized = true
		})
			.addCase(authThunks.logOut.fulfilled, (state, action)=> {
				state.isAppInitialized = false
			})
	}
} )

export const appReducer = slice.reducer
export const appActions = slice.actions