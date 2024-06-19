import React from "react";
import Card from "../nav/Card";

import styles from "./LastestPosts.module.css";
const LastestPosts = (props) => {
	return (
		<div className={`${styles["lastest-posts-wrapper"]}`}>
			<h2>Latest Posts</h2>
			<div className={`${styles["lastest-posts-card-wrapper"]}`}>
				<ul className={`${styles["lastest-posts-ul"]}`}>
					{props.articles.map((article) => (
						<Card
							id={article.id}
							image={article.image}
							title={article.title}
							date={article.date}
							paragraph={article.paragraph}
						/>
					))}
				</ul>
				<ul className={`${styles["lastest-posts-ul"]}`}>
					{props.articles.map((article) => (
						<Card
							id={article.id}
							image={article.image}
							title={article.title}
							date={article.date}
							paragraph={article.paragraph}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};
export default LastestPosts;
