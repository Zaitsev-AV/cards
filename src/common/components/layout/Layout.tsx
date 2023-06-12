import React from "react";
import s from "./Layout.module.css";
import { Header } from "common/components/header/Header";
import { Outlet } from "react-router-dom";


export const Layout: React.FC = ( ) => {
	
	return (
		<>
			<Header/>
			<div className={s.container}>
				<Outlet/>
			</div>
			
		</>
	);
};