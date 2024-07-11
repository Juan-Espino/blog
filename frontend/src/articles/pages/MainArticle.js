import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import HighlightedArticle from "../components/highlighted/HighlightedArticle";
import LastestPosts from "../components/ui/LastestPosts";

import styles from "./MainArticle.module.css";

const MainArticle = (props) => {
	const articleId = useParams().articleId;
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [articles, setArticles] = useState();
	const [paramsError, setParamsError] = useState(false);

	const [highlight, setHighlight] = useState();
	// const [lastestPost, setLastestPost] = useState();

	//GET request for articles
	useEffect(() => {
		const sendRequest = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(
					process.env.REACT_APP_BACKEND_URL + "/articles"
				);
				const responseData = await response.json();

				if (!response.ok) {
					throw new Error(responseData.message);
				}
				setArticles(responseData);
			} catch (err) {
				setError(err.message);
			}
			setIsLoading(false);
		};
		sendRequest();
	}, []);

	useMemo(() => {
		if (articleId) {
			let highlightedArticle;
			[highlightedArticle] = articles.filter(
				(article) => article.id == articleId
			);
			setHighlight(highlightedArticle);
		} else if (articles) {
			setHighlight(articles[0]);
			console.log("ok");
		} else {
		}
	}, [articles]);

	return (
		<React.Fragment>
			{isLoading && <p>LOADING</p>}
			{/* {articleId && !isLoading && checkParams} */}
			{!isLoading && articles && (
				<div className={`${styles["main-article"]}`}>
					<HighlightedArticle article={highlight} />
					<LastestPosts articles={articles} />
				</div>
			)}
		</React.Fragment>
	);
};

export default MainArticle;
