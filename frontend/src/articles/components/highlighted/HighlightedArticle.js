import React from "react";
import MobileView from "./MobileView";
import DesktopView from "./DesktopView";

import styles from "./HighlightedArticle.module.css";
const HighlightedArticle = (props) => {
	return (
		<React.Fragment>
			<MobileView article={props.article} />
			<DesktopView article={props.article} />
		</React.Fragment>
	);
};

export default HighlightedArticle;
