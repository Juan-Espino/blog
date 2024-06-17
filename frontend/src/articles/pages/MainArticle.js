import React from "react";
import HighlightedArticle from "../components/highlighted/HighlightedArticle";
import styles from "./MainArticle.module.css";

const MainArticle = (props) => {
	const DUMMY_ARTICLES = [
		{
			id: "a1",
			title: "Oppi",
			date: "12 jun, 2020",
			paragraph:
				" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis dolores cumque ab velit molestiae ducimus architecto? Placeat illo dolorem voluptatibus assumenda, odit sint, maxime fugit ut voluptates molestias perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere inventore deleniti voluptates labore dignissimos a, incidunt minus dolorem, atque consequuntur quisquam odit tenetur reprehenderit, error commodi suscipit. Tenetur, sequi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.",
			image:
				"https://m.media-amazon.com/images/M/MV5BNmNkNWU5NzUtNmVkNS00ZDE2LTg0NjgtNTIxNWYxOWIyM2FlXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
		},
	];
	return (
		<div className={`${styles["main-article"]}`}>
			<HighlightedArticle article={DUMMY_ARTICLES[0]} />
		</div>
	);
};

export default MainArticle;
