import React from 'react';
import s from './Layout.module.css'
import { Header } from "common/components/header/Header";
import { Outlet } from "react-router-dom";
import { LinerProgress } from "common/components/LinerPogress/LinerProgress";


export type LayoutPropsType = {};
export const Layout: React.FC<LayoutPropsType> = ( props ) => {
	const {} = props
	return (
		<>
			<Header/>
			<LinerProgress/>
			<div className={s.container}>
				<Outlet/>
			</div>
			
		</>
	);
};