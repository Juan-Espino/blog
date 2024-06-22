import React, { useEffect, useState } from "react";
import styles from "./TextUpload.module.css";
const TextUpload = (props) => {
	const [danger, setDanger] = useState(false);
	const [dangerText, setDangerText] = useState();

	const { type, onChange, id, ...inputProps } = props;

	useEffect(() => {
		if (danger) {
			setDangerText("ERROR");
		} else {
			setDangerText("OK");
		}
	}, [danger]);

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
			<p className={`${styles["text-checker"]} ${danger && styles["error"]}`}>
				{dangerText}
			</p>
		</div>
	);
};

export default TextUpload;
