import { createSlice } from "@reduxjs/toolkit";
import {
	ArgLoginType,
	ArgRegisterType,
	ArgUpdateUserType,
	authApi,
	ProfileType,
	UpdateUserType
} from "features/auth/auth.api";
import { appActions } from "app/app.slice";
import { createAppAsyncThunk, thunkTryCatch } from "common/utils";
import { toast } from "react-toastify";


const slice = createSlice( {
	name: 'auth',
	initialState: {
		isLoggedIn: false,
		isRegistered: false
	},
	reducers: {},
	extraReducers: builder => {
		builder.addCase( login.fulfilled, ( state, action ) => {
				state.isLoggedIn = true;
				state.isRegistered = true;
			} )
			.addCase( authMe.fulfilled, ( state, action ) => {
				// state.profile = action.payload.profile;
				state.isLoggedIn = true;
			} )
			.addCase( logOut.fulfilled, ( state, action ) => {
				state.isLoggedIn = false;
			} )
			.addCase( register.fulfilled, ( state ) => {
				state.isRegistered = true;
			} );
		
	}
} )

const register = createAppAsyncThunk<void, ArgRegisterType>
( "auth/register", async ( arg, thunkAPI ) => {
	// const { dispatch, rejectWithValue } = thunkAPI;
	// try {
	// 	await authApi.register( arg );
	// } catch ( e: any ) {
	// 	const error = e.response ? e.response.data.error : e.message;
	// 	dispatch( appActions.setError( { error } ) );
	// 	return rejectWithValue( null );
	//
	// }
	return thunkTryCatch( thunkAPI, async () => await authApi.register( arg ) );
} )

const login = createAppAsyncThunk<{ profile: ProfileType }, ArgLoginType>
( 'auth/login', async ( arg, thunkAPI ) => {
	return thunkTryCatch( thunkAPI, async () => {
		await authApi.login( arg );
		toast.success("Вы успешно вошли в систему")
	} );
} )

const authMe = createAppAsyncThunk<{ profile: ProfileType }, void>( "auth/authMe", async ( arg, thunkAPI ) => {
	const { dispatch, rejectWithValue } = thunkAPI;
	try {
		const res = await authApi.me();
		return { profile: res.data };
	} catch ( e: any ) {
		console.warn( e );
		const error = e.response ? e.response.data.error : e.message;
		dispatch( appActions.setError( { error } ) );
		return rejectWithValue( null );
	} finally {
		dispatch( appActions.setInitialization( { isAppInitialized: true } ) );
	}
} );
// todo доделать обработку ошибок
const upDateUser = createAppAsyncThunk<UpdateUserType, ArgUpdateUserType>( "auth/upDateUser",
	async ( arg, thunkAPI ) => {
		// const res = await authApi.upDateUser( arg );
		// console.log( res.data );
		// return res.data;
		return thunkTryCatch( thunkAPI, async () => await authApi.upDateUser( arg ) );
	} );

const logOut = createAppAsyncThunk<{ info: string }, void>( "auth/logOut", async ( arg, thunkAPI ) => {
	const { rejectWithValue, dispatch } = thunkAPI;
	return thunkTryCatch(thunkAPI, async ()=> {
		await authApi.logOut();
	})
	// try {
	// 	const res = await authApi.logOut();
	// 	return res.data;
	// } catch ( e: any ) {
	// 	const error = e.response ? e.response.data.error : e.message;
	// 	dispatch( appActions.setError( { error } ) );
	// 	return rejectWithValue( null );
	// }
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