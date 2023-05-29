import React from 'react';
import s from './AuthBtn.module.css'

export type AuthBtnPropsType = {
	buttonName: string
};
export const AuthBtn: React.FC<AuthBtnPropsType> = ( props ) => {
	const {buttonName} = props
	return (
		<button className={ s.btn }> {buttonName} </button>
	);
};