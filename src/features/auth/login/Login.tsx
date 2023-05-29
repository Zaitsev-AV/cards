import React from 'react';
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from './Login.module.css'
import { Form } from "common/components/forms/Form";

export type LoginPropsType = {

};
export const Login: React.FC<LoginPropsType> = ( props ) => {
	const {} = props
	const dispatch = useAppDispatch()
	const loginHandler = () => {
		const payload = {
			email: "zaitsev@gmail.com",
			password: "1234567av",
			rememberMe: true,
		}
		dispatch(authThunks.login(payload))
	}
	
	const meRequestHandler = () => {
		dispatch(authThunks.me())
	}
	
	const upDateUserHandler = () => {
		dispatch(authThunks.upDateUser({name: 'Alexander'}))
	}
	
	const logOutHandler = () => {
		dispatch(authThunks.logOut())
	}
	return (
		<div className={s.wrapper}>
			<h1>Login</h1>
			<Form format={"Login"}/>
			<>
				
				<button onClick={loginHandler}>Login</button>
				<button onClick={meRequestHandler}>me request</button>
				<button onClick={upDateUserHandler}>update request</button>
				<button onClick={logOutHandler}>log out</button>
			</>
			
		</div>
	);
};