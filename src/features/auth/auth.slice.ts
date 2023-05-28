import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	ArgLoginType,
	ArgRegisterType,
	authApi,
	ProfileType,
	ArgUpdateUserType,
	UpdateUserType
} from "features/auth/auth.api";
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
			.addCase(upDateUser.fulfilled, (state, action) => {
				state.profile = action.payload.updatedUser
			})
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

const me = createAsyncThunk( 'auth/me', async () => {
	await authApi.me()
} )

const upDateUser = createAsyncThunk<UpdateUserType, ArgUpdateUserType>( 'auth/upDateUser', async ( arg) => {
	const res = await authApi.upDateUser(arg)
	    console.log(res.data)
	return res.data
} )

const logOut = createAsyncThunk('auth/logOut', async ()=> {
	
	const res = await authApi.logOut()
	    console.log(res.data.info)
	return res.data.info
})

export const authReducer = slice.reducer
// export const authActions = slice.actions
export const authThunks = { register, login, me, upDateUser, logOut}


// const login = createAsyncThunk( 'auth/login', ( arg: ArgLoginType, thunkAPI ) => {
// 	const { dispatch } = thunkAPI
// 	return authApi.login( arg )
// 		.then( res => {
// 			console.log( 'login', res.data )
// 			// dispatch( authActions.setProfile( { profile: res.data } ) )
// 			return { profile: res.data }
// 		} )
// } )