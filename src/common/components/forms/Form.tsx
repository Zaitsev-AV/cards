import React from "react";
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