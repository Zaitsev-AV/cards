import React from 'react';
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

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
	return (
		<div>
			<h1>Login</h1>
			<button onClick={loginHandler}>Login</button>
		</div>
	);
};