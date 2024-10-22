import React from "react";

import styles from "./Button.module.css";

const Button = (props) => {
	return (
		<button
			onClick={props.clickHandler}
			disabled={props.disabled}
			type={props.type}
			className={`${props.x ? styles["x"] : styles["button"]} ${
				props.danger && styles["button-danger"]
			} ${props.marginTop && styles["margin-top"]}
			${props.submit && styles["button-submit"]}
			${props.edit && styles["edit"]}
			${props.disabled && styles["disabled"]}`}
		>
			{props.text}
		</button>
	);
};

export default Button;
