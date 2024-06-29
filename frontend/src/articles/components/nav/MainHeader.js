import React from "react";
import { Link } from "react-router-dom";
import DarkMode from "../ui/DarkMode";
import styles from "./MainHeader.module.css";

const MainHeader = (props) => {
	return (
		<div className={`${styles["main-header"]}`}>
			{/* title */}
			<Link to="/">
				<h1 className={`${styles["main-header-title"]}`}>
					<span className={`${styles["blinker"]}`}>_</span>Bloggin`
				</h1>
			</Link>
			{/* theme switch slider */}
			<DarkMode />
		</div>
	);
};

export default MainHeader;
