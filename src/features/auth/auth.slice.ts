import { createSlice } from "@reduxjs/toolkit";
import { ArgLoginType, ArgRegisterType, authApi, ProfileType } from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";

const slice = createSlice( {
	name: 'auth',
	initialState: {
		profile: null as ProfileType | null
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase( login.fulfilled, ( state, action ) => {
				state.profile = action.payload.profile
			} )
	}
} )

const register = createAppAsyncThunk<void, ArgRegisterType>
( 'auth/register', async ( arg ) => {
	await authApi.register( arg )
} )

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
( 'auth/login', async ( arg, thunkAPI ) => {
	const res = await authApi.login( arg )
	return { profile: res.data }
} )

export const authReducer = slice.reducer
// export const authActions = slice.actions
export const authThunks = { register, login }


// const login = createAsyncThunk( 'auth/login', ( arg: ArgLoginType, thunkAPI ) => {
// 	const { dispatch } = thunkAPI
// 	return authApi.login( arg )
// 		.then( res => {
// 			console.log( 'login', res.data )
// 			// dispatch( authActions.setProfile( { profile: res.data } ) )
// 			return { profile: res.data }
// 		} )
// } )