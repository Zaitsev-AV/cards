import React from 'react';
import { useNavigate } from "react-router-dom";
import s from "common/components/forms/Form.module.css";
import checkEmail from 'assets/check_email.svg'

export const CheckEmailForm: React.FC = () => {
	
	const navigate = useNavigate()
	
	const signInRedirect = () => navigate( '/auth/login', { replace: true } );//замена текущего адреса на новый.
	
	return (
		<div className={ s.form }>
			<form>
				<div className={ s.heading }>
					<p >Check Email</p>
					<img src={ checkEmail }
					     alt="check email pictures"/>
					<p className={ s.description }>We’ve sent an Email with instructions to example@mail.com</p>
				</div>
			</form>
			<button className={ s.button3 }
			        onClick={ signInRedirect }>Back to login
			</button>
		</div>
	);
};