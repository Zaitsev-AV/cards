import { createBrowserRouter } from "react-router-dom";
import { Login } from "features/auth/login/Login";
import { Register } from "features/auth/register/Register";
import React from "react";
import App from "app/App";
import { Auth } from "features/auth/Auth";
import { AuthRedirect } from "common/authRedirect/AuthRedirect";
import { ForgotPasswordForm } from "common/components/forms/ForgotPasswordForm";
import { ForgotPassword } from "features/auth/forgot-password/ForgotPassword";

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
						element: <h1>PACKS</h1>
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
				]
			},
		]
	},
]);