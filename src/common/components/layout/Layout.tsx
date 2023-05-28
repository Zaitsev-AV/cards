import React from 'react';
import { Header } from "common/components/header/Header";
import { Outlet } from "react-router-dom";

export type LayoutPropsType = {};
export const Layout: React.FC<LayoutPropsType> = ( props ) => {
	const {} = props
	return (
		<>
			<Header/>
			<Outlet/>
		</>
	);
};