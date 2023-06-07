import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
	ArgLoginType,
	ArgRegisterType,
	ArgUpdateUserType,
	authApi,
	ProfileType,
	UpdateUserType
} from "features/auth/auth.api";
import { createAppAsyncThunk } from "common/utils/createAppAsyncThunk";
import { appActions } from "app/app.slice";


const slice = createSlice( {
	name: 'auth',
	initialState: {
		isLoggedIn: false,
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase( login.fulfilled, ( state, action ) => {
				state.isLoggedIn = true;
			} )

			.addCase( authMe.fulfilled, ( state, action ) => {
				// state.profile = action.payload.profile;
				state.isLoggedIn = true;
			} )
			.addCase( logOut.fulfilled, ( state, action ) => {
				state.isLoggedIn = false;
			} );
		
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

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>( "auth/authMe", async ( arg, thunkAPI ) => {
	const { dispatch, rejectWithValue } = thunkAPI;
	try {
		const res = await authApi.me();
		return { profile: res.data };
	} catch ( e ) {
		console.warn( e );
		return rejectWithValue( null );
	} finally {
		dispatch( appActions.setInitialization( { isAppInitialized: true } ) );
	}
} );

const upDateUser = createAppAsyncThunk<UpdateUserType, ArgUpdateUserType>( "auth/upDateUser", async ( arg ) => {
	const res = await authApi.upDateUser( arg );
	console.log( res.data );
	return res.data;
} );

const logOut = createAppAsyncThunk<{ info: string }, void>( "auth/logOut", async ( arg, thunkAPI ) => {
	const { rejectWithValue } = thunkAPI;
	try {
		const res = await authApi.logOut();
		console.log( res.data );
		return res.data;
	} catch ( e ) {
		return rejectWithValue( null );
	}
} );

export const authReducer = slice.reducer
// export const authActions = slice.actions
export const authThunks = { register, login, authMe: authMe, upDateUser, logOut };


// const login = createAsyncThunk( 'auth/login', ( arg: ArgLoginType, thunkAPI ) => {
// 	const { dispatch } = thunkAPI
// 	return authApi.login( arg )
// 		.then( res => {
// 			console.log( 'login', res.data )
// 			// dispatch( authActions.setProfile( { profile: res.data } ) )
// 			return { profile: res.data }
// 		} )
// } )