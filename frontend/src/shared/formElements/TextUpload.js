import React, { useEffect, useState } from "react";
import styles from "./TextUpload.module.css";
const TextUpload = (props) => {
	const { type, onChange, errorMessage, id, ...inputProps } = props;

	return (
		<div className={`${styles["text-upload-wrapper"]}`}>
			{props.type == "textarea" ? (
				<textarea
					className={`${styles["textarea"]}`}
					{...inputProps}
					onChange={onChange}
				/>
			) : (
				<input
					className={`${styles["text-input"]}`}
					{...inputProps}
					onChange={onChange}
				/>
			)}
			<span className={`${styles["error-message"]}`}>{errorMessage}</span>
		</div>
	);
};

export default TextUpload;
