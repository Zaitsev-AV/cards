import React from "react";
import incubatorLogo from "../../../assets/incubator.svg";
import s from "./Header.module.css";
import { AuthBtn } from "../buttons/AuthBtn";
import { UserHeader } from "common/components/userHeader/UserHeader";
import { useAuth } from "features/auth/hooks/useAuth";
import { LinerProgress } from "common/components/linerPogress/LinerProgress";
import { useAppSelector } from "common/hooks";
import { selectorIsLoading } from "app";


export const Header: React.FC = () => {
	const { isLoggedIn } = useAuth();
	const isLoading = useAppSelector( selectorIsLoading );
	
	return (
		<>
			<header className={ s.wrapper }>
				<img src={ incubatorLogo }
				     alt="incubator logo" />
				{ !isLoggedIn
					?
					<AuthBtn buttonName={ "Sign In" } />
					:
					<UserHeader />
				}
			</header>
			<div style={{height: "15px"}}>
				{ isLoading && <LinerProgress /> }
			</div>
		</>
	);
};