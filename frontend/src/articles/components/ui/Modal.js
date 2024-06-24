import React from "react";

import styles from "./Modal.module.css";
const Modal = ({ open, onClose, children }) => {
	return (
		//backdrop
		<div
			onClick={onClose}
			className={`${styles["backdrop"]} ${
				open ? styles["visible"] : styles["invisible"]
			}`}
		></div>
	);
};
export default Modal;
