import React from 'react';
import { CheckPasswordForm } from "common/components/forms/CheckPasswordForm";

export type CreateNewPasswordPropsType = {

};
export const NewPassword: React.FC<CreateNewPasswordPropsType> = ( props ) => {
	const {} = props
	return (
		<div>
			<h1>Check password</h1>
			<CheckPasswordForm/>
		</div>
	);
};