import React from "react";
import HighlightedArticle from "../components/highlighted/HighlightedArticle";
import "./MainArticle.css";

const MainArticle = (props) => {
	const DUMMY_ARTICLES = [
		{
			id: "a1",
			title: "Oppi",
			date: "12 jun, 2020",
			paragraph:
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo cumque id eum, vero eos mollitia soluta doloribus quis aliquid fugit molestias odit nesciunt repudiandae eveniet quo quaerat eaque omnis. Dicta.",
			image:
				"https://m.media-amazon.com/images/M/MV5BNmNkNWU5NzUtNmVkNS00ZDE2LTg0NjgtNTIxNWYxOWIyM2FlXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
		},
	];
	return (
		<div className="main-article">
			<HighlightedArticle article={DUMMY_ARTICLES[0]} />
		</div>
	);
};

export default MainArticle;
