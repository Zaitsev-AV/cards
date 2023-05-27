import React from 'react';
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { ArgRegisterType } from "features/auth/auth.api";
import s from './Register.module.css'

export type RegisterPropsType = {

};
export const Register: React.FC<RegisterPropsType> = ( props ) => {
	const {  } = props
	const dispatch = useAppDispatch()
	const registerHandler = () => {
		const payload: ArgRegisterType = {
			email: "zaitsev@gmail.com",
			password: "1234567av"
		}
		dispatch( authThunks.register( payload ) )
	}
	return (
		<div className={s.container}>
		<h1>Register</h1>
			<button onClick={registerHandler}>register</button>
		</div>
	);
};
