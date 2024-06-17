import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../ui/DarkMode";
import "./MainHeader.css";

const MainHeader = (props) => {
	return (
		<div className="main-header">
			{/* title */}
			<Link to="/">
				<h1 className="main-header-title">
					<span className="blinker">_</span>Blog
				</h1>
			</Link>
			{/* theme switch slider */}
			<DarkMode />
		</div>
	);
};

export default MainHeader;
