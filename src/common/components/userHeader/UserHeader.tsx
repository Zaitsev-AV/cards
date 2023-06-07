import React from 'react';
import * as Avatar from '@radix-ui/react-avatar';
import avatar from '../../../assets/user.png'
import { useAppSelector } from "app/hooks";
import s from './UserHeader.module.css'
import { NavLink } from "react-router-dom";
import { profile } from "features/profile/selectors";

export type UserHeaderPropsType = {

};
export const UserHeader: React.FC<UserHeaderPropsType> = ( props ) => {
	const {} = props
	const userName = useAppSelector(profile)
	
	return (
		<div className={s.avatarContainer}>
			<NavLink className={s.userName} to={'/profile'}>{userName?.name}</NavLink>
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