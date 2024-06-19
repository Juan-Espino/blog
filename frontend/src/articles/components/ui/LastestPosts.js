import React from "react";
import Card from "../nav/Card";

import styles from "./LastestPosts.module.css";
const LastestPosts = (props) => {
	return (
		<div className={`${styles["lastest-posts-wrapper"]}`}>
			<Card />
		</div>
	);
};
export default LastestPosts;
