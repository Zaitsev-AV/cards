import React from 'react';
import s from "common/components/forms/Form.module.css";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { SignInForm } from "common/components/forms/SignInForm";
import { SignUpForm } from "common/components/forms/SignUpForm";

export type FormPropsType = {
	format: FormatType
};
export type FormValues = {
	email: string;
	password: string;
	rememberMe: boolean;
};
export type FormatType = 'Register' | 'Login';
export const Form: React.FC<FormPropsType> = ( props ) => {
	const {format} = props
	
	return (
		<>
			{format === 'Register'
				?
				<SignUpForm/>
				:
				<SignInForm/>
			}
			
			
			
			
		</>
		
	);
};