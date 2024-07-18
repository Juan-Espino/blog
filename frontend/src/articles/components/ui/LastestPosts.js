import React from "react";
import Card from "../nav/Card";

import { dateFormater } from "../../../shared/util/DateFormater";
import styles from "./LastestPosts.module.css";
const LastestPosts = (props) => {
	return (
		<div className={`${styles["lastest-posts-wrapper"]}`}>
			<h2>Latest Posts</h2>
			<div className={`${styles["lastest-posts-card-wrapper"]}`}>
				<ul className={`${styles["lastest-posts-ul"]}`}>
					{props.articles.map((article) => (
						<Card
							key={article.id}
							id={article.id}
							image={process.env.REACT_APP_ASSET_URL + "/" + article.img}
							title={article.title}
							date={dateFormater(article.created)}
							paragraph={article.paragraph}
						/>
					))}
				</ul>
				<ul className={`${styles["lastest-posts-ul"]}`}>
					{props.articles.map((article) => (
						<Card
							key={article.id}
							id={article.id}
							image={process.env.REACT_APP_ASSET_URL + "/" + article.img}
							title={article.title}
							date={dateFormater(article.created)}
							paragraph={article.paragraph}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
export default LastestPosts;
