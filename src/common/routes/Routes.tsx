import { createBrowserRouter } from "react-router-dom";
import React from "react";
import App from "app/App";
import { Profile } from "features/profile/Profile";
import { CheckEmail, ForgotPassword, Login, NewPassword, Register } from "features/auth";
import { AuthRedirect } from "common/components/authRedirect/AuthRedirect";
import { Auth } from "features/auth/Auth";
import { PacksList } from "features/packs/PacksList";
import { Cards } from "features/cards/Cards";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App/>,
		errorElement: <h1>Error</h1>,
		children: [
			{
				path: "/",
				element: <AuthRedirect/>, // нужно для проверки если авторизован то пойдет по ветке (children/packs) иначе перенаправит на login
				children: [
					{
						index: true,// индексный маршрут, то есть когда пользователь заходит на основной маршрут будет
						// отображаться компонент связанный с индексным маршрутом
						element: <PacksList/>
					},
					{
						path: "/profile",
						element: <Profile/>,
					},
					{
						path:'/cards',
						element: <Cards/>
					}
				]
			},
			{
				path:'/auth',
				element: <Auth/>,
				children: [
					{
						path: "/auth/register",
						element: <Register/>,
					},
					{
						path: "/auth/login",
						element: <Login/>,
					},
					{
						path: "/auth/forgot",
						element: <ForgotPassword/>,
					},
					{
						path: "/auth/check-email",
						element: <CheckEmail/>,
					},
					{
						path: "/auth/set-new-password",
						element: <NewPassword/>,
					},
				]
			},
		]
	},
]);