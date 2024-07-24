import React from "react";
import Button from "../../../shared/formElements/Button";

import styles from "./Modal.module.css";
const Modal = ({ open, onClose, loading, children }) => {
	return (
		//backdrop
		<div
			onClick={onClose}
			className={`${styles["backdrop"]} ${
				open ? styles["visible"] : styles["invisible"]
			}`}
		>
			{/* modal */}
			<div
				onClick={(e) => e.stopPropagation()}
				className={`${styles["modal"]}
				${loading && styles["loading"]}`}
			>
				{!loading && <Button text="x" x clickHandler={onClose} />}
				{children}
			</div>
		</div>
	);
};
export default Modal;
