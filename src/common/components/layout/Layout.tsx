import React from 'react';
import s from './Layout.module.css'
import { Header } from "common/components/header/Header";
import { Outlet } from "react-router-dom";


export type LayoutPropsType = {};
export const Layout: React.FC<LayoutPropsType> = ( props ) => {
	const {} = props
	    console.log('Layout called')
	return (
		<>
			<Header/>
			<div className={s.container}>
				<Outlet/>
			</div>
			
		</>
	);
};