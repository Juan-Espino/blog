import React from "react";

import styles from "./DarkMode.module.css";

const DarkMode = () => {
	const setDarkMode = () => {
		document.querySelector("body").setAttribute("data-theme", "dark");
		localStorage.setItem("selectedTheme", "dark");
	};
	const setLightMode = () => {
		document.querySelector("body").setAttribute("data-theme", "light");
		localStorage.setItem("selectedTheme", "light");
	};

	const toggleTheme = (e) => {
		if (e.target.checked) {
			setLightMode();
		} else {
			setDarkMode();
		}
	};

	const selectedTheme = localStorage.getItem("selectedTheme");

	if (selectedTheme == "light") {
		setLightMode();
	} else {
		setDarkMode();
	}

	return (
		<div className={`${styles["main-header-slider-wrapper"]} center`}>
			<label htmlFor="checkbox" className={`${styles["slider-label"]}`}>
				<input
					type="checkbox"
					className={`${styles["slider-input"]}`}
					id="checkbox"
					onChange={toggleTheme}
					defaultChecked={selectedTheme === "light"}
				/>
				<div className={`${styles["slider"]}`}></div>
			</label>
		</div>
	);
};

export default DarkMode;
