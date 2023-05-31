import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import avatar from '../../../assets/avatarFromUserPage.png'
import { useAppSelector } from "app/hooks";
import s from './UserHeader.module.css'
import { NavLink } from "react-router-dom";

export type UserHeaderPropsType = {

};
export const UserHeader: React.FC<UserHeaderPropsType> = ( props ) => {
	
	const userName = useAppSelector(state => state.auth.profile?.name)
	    console.log(userName + ' name')
	const {} = props
	return (
		<div className={s.avatarContainer}>
			<NavLink className={s.userName} to={'/profile'}>{userName}</NavLink>
			<Avatar.Root className={ s.AvatarRoot }>
				<Avatar.Image
					className={ s.AvatarImage }
					src={avatar}
					alt="User"
				/>
			</Avatar.Root>
		</div>
	);
};