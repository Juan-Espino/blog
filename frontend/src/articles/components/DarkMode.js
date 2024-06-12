import React, { useState } from "react";

import "./DarkMode.css";

const DarkMode = (props) => {
	const [theme, setTheme] = useState(false);
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
			setDarkMode();
		} else {
			setLightMode();
		}
	};

	const selectedTheme = localStorage.getItem("selectedTheme");

	if (selectedTheme === "dark") {
		setDarkMode();
	} else {
		setLightMode();
	}

	return (
		<div className="main-header-slider-wrapper center">
			<label for="checkbox" className="slider-label">
				<input
					type="checkbox"
					className="slider-input"
					id="checkbox"
					onChange={toggleTheme}
					defaultChecked={selectedTheme === "dark"}
				/>
				<div className="slider"></div>
			</label>
		</div>
	);
};

export default DarkMode;
