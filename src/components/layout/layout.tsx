import React from "react";
import Header from "../header";
import Footer from "../footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = ({children}: React.PropsWithChildren ) => {
	return(
		<div>
			<Header/>
			<main>{children}</main>
			<Outlet/>
			<Footer/>
		</div>
	);
}

export default Layout