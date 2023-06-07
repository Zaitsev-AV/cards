import React from 'react';
import incubatorLogo from '../../../assets/incubator.svg'
import s from './Header.module.css'
import { AuthBtn } from "../buttons/AuthBtn";
import { UserHeader } from "common/components/userHeader/UserHeader";
import { useAppSelector } from "common/hooks";
export type HeaderPropsType = {

};
export const Header: React.FC<HeaderPropsType> = ( props ) => {
	const isLoggedIn = useAppSelector<boolean>( ( state ) => state.auth.isLoggedIn )
	const {} = props
	return (
		<header className={s.wrapper}>
			<img src={incubatorLogo}
			     alt="incubator logo"/>
			{!isLoggedIn
				?
				<AuthBtn buttonName={'Sign In'}/>
				:
				<UserHeader/>
			}
		</header>
	);
};