import React from 'react';
import { useNavigate } from "react-router-dom";
import s from "common/components/forms/Form.module.css";
import { useAppDispatch } from "app/hooks";
import { useForm } from "react-hook-form";
import { FormValues } from "common/components/forms/Form";
import { authThunks } from "features/auth/auth.slice";

export const CheckPasswordForm: React.FC = () => {
	
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormValues>()
	
	const onSubmit = ( data: FormValues ) => {
		dispatch( authThunks.login( data ) )
	};
	const signInRedirect = () => navigate( '/auth/login', { replace: true } );//замена текущего адреса на новый.
	return (
		<div className={ s.form }>
			<form onSubmit={ handleSubmit( onSubmit ) }>
				<div className={ s.heading }>
					<p>Create new password</p>
					<div className={ s.field }>
						<svg className={ s.inputIcon }
						     width="16"
						     height="16"
						     fill="currentColor"
						     viewBox="0 0 16 16">
							<path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
						</svg>
						<input { ...register( 'password' ) }
						       placeholder="Password"
						       className={ s.inputField }
						       type="password"/>
					</div>
					<p className={ s.description }>Create new password and we will send you further instructions to
					                               email</p>
				</div>
			</form>
			<button className={ s.button3 }
			        onClick={ signInRedirect }>
				Create new password
			</button>
		</div>
	);
};