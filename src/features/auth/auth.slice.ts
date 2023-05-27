import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authApi, ArgRegisterType } from "features/auth/auth.api";

const register = createAsyncThunk( 'auth/register', ( arg : ArgRegisterType ) => {
	authApi.register(arg)
		.then( res => {
			    console.log('register', res.data)
		} )
} )


const slice = createSlice( {
	name: 'auth',
	initialState: {},
	reducers: {}
} )

export const authReducer = slice.reducer
export const authThunks = { register }