import React from 'react';
import { Outlet } from "react-router-dom";

export type AuthPropsType = {

};
export const Auth: React.FC<AuthPropsType> = ( props ) => {
	const {} = props
	return (
		<div>
			<Outlet/>
		</div>
	);
};