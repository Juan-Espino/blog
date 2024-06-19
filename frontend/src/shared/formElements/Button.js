import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<div className={`${styles["button-wrapper"]}`}>
			<button onClick={props.clickHandler}>{props.text}</button>
		</div>
	);
};

export default Button;
