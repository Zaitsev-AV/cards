import React, { useEffect } from "react";
import s from "features/auth/ui/login/Login.module.css";
import { SignInForm } from "common/components/forms/SignInForm";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { authThunks } from "features/auth/auth.slice";

export type LoginPropsType = {

};
export const Login: React.FC<LoginPropsType> = ( props ) => {
	const {} = props;
	const dispatch = useAppDispatch()
	const isLoggedIn = useAppSelector<boolean>( ( state ) => state.auth.isLoggedIn );
	// const location = useLocation()
	const navigate = useNavigate();
	const loginHandler = () => {
		const payload = {
			email: "zaitsev@gmail.com",
			password: "1234567av",
			rememberMe: true,
		}
		dispatch(authThunks.login(payload))
	}
	//
	// const meRequestHandler = () => {
	// 	dispatch(authThunks.authMe())
	// }
	//
	// const upDateUserHandler = () => {
	// 	dispatch(authThunks.upDateUser({name: 'Alexander'}))
	// }
	//
	// const logOutHandler = () => {
	// 	dispatch(authThunks.logOut())
	// }
	useEffect( () => {
		if ( isLoggedIn ) {
			navigate( "/" );
		}
	}, [isLoggedIn] );
	
	return (
		<div className={ s.wrapper }>
			<h1>Login</h1>
			<SignInForm />
			<>
				<button onClick={loginHandler}>Login</button>
			{/*	<button onClick={meRequestHandler}>me request</button>**/}
			{/*<button onClick={upDateUserHandler}>update request</button>**/}
			{/*<button onClick={logOutHandler}>log out</button>*/}
			</>
		
		</div>
	);
};