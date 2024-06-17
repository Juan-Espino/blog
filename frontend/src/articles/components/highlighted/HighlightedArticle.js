import React from "react";
import MobileView from "./MobileView";

import "./HighlightedArticle.module.css";
const HighlightedArticle = (props) => {
	return (
		<React.Fragment>
			<MobileView article={props.article} />
		</React.Fragment>
	);
};

export default HighlightedArticle;
