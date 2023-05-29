import React from 'react';
import incubatorLogo from '../../../assets/incubator.svg'
import s from './Header.module.css'
import { AuthBtn } from "../buttons/AuthBtn";
export type HeaderPropsType = {

};
export const Header: React.FC<HeaderPropsType> = ( props ) => {
	const {} = props
	return (
		<header className={s.wrapper}>
			<img src={incubatorLogo}
			     alt="incubator logo"/>
		<AuthBtn buttonName={'Sign In'}/>
		</header>
	);
};