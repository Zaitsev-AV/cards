import React from 'react';
import { CheckEmailForm } from "common/components/forms/CheckEmailForm";
import s from 'features/auth/ui/checkEmail/CheckEmail.module.css'
export type CheckEmailPropsType = {

};
export const CheckEmail: React.FC<CheckEmailPropsType> = ( props ) => {
	const {} = props
	return (
		<div className={s.wrapper}>
		<h1>check email page</h1>
			<CheckEmailForm/>
		</div>
	);
};