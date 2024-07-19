import React, { useState } from "react";

import Button from "../../../shared/formElements/Button";
import styles from "./ReadMore.module.css";

const ReadMore = (props) => {
	const [isReadMore, setIsReadMore] = useState(true);
	const text = props.paragraph;
	const lines = text.split("BREAK");

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore);
	};

	const formatedParagraph = lines.map((line, index) => (
		<React.Fragment key={index}>
			<p className={`${styles["paragraph"]}`}>{line}</p>
			<br />
		</React.Fragment>
	));

	const noBreaks = lines.join();

	return (
		<React.Fragment>
			{isReadMore && (
				<p className={`${styles["paragraph"]}`}>
					{noBreaks.slice(0, 475) + "  ..."}
				</p>
			)}
			{!isReadMore && formatedParagraph}
			<Button
				clickHandler={toggleReadMore}
				text={isReadMore ? "Read More" : "Read Less"}
				marginTop
			/>
		</React.Fragment>
	);
};

export default ReadMore;
