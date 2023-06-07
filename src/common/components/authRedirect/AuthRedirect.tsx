import React from 'react';
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "common/hooks";

export type AuthRedirectPropsType = {

};
export const AuthRedirect: React.FC<AuthRedirectPropsType> = ( props ) => {
	const isLoggedIn = useAppSelector<boolean>(state => state.auth.isLoggedIn)
	const location = useLocation()
	    console.log('AuthRedirect called')
	const {} = props
	if ( !isLoggedIn ) return <Navigate to={'/auth/login'} state={{from: location}}/>
	// state={{from: location}} эта запись используется для сохранения информации о
	// предыдущем маршруте и передачи ее вместе с переходом на страницу входа,
	// таким образом, после авторизации пользователь может быть перенаправлен обратно на страницу,
	// с которой он попал на страницу входа.
	return <Outlet/>
};