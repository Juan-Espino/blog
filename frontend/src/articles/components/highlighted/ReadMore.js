import React, { useState } from "react";

import Button from "../../../shared/formElements/Button";
import styles from "./ReadMore.module.css";

const ReadMore = (props) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const text = props.paragraph;

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	return (
		<p className={`${styles["paragraph"]}`}>
			{isReadMore ? text.slice(0, 200) + "  ..." : text}
			<Button
				clickHandler={toggleReadMore}
				text={isReadMore ? "Read More" : "Read Less"}
			/>
		</p>
	);
};

export default ReadMore;
