import React, { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useHttpClient } from "../../shared/hooks/http-hook";
import HighlightedArticle from "../components/highlighted/HighlightedArticle";
import LastestPosts from "../components/ui/LastestPosts";

import styles from "./MainArticle.module.css";

const MainArticle = (props) => {
	const { articleId } = useParams();
	const [articles, setArticles] = useState();
	const [paramsError, setParamsError] = useState(false);
	const [highlight, setHighlight] = useState();
	const [lastestPost, setLastestPost] = useState();

	const { isLoading, error, sendRequest, clearError } = useHttpClient();

	//GET request for articles
	useEffect(() => {
		const makeRequest = async () => {
			try {
				const responseData = await sendRequest(
					process.env.REACT_APP_BACKEND_URL + "/articles"
				);
				setArticles(responseData);
			} catch (err) {}
		};
		makeRequest();
	}, []);

	useMemo(() => {
		let highlightedArticle;
		let lastestArticles;
		if (articleId && articles) {
			clearError();
			[highlightedArticle] = articles.filter(
				(article) => article.id == articleId
			);
			lastestArticles = articles.filter((article) => article.id != articleId);
			//check for paramsError!
			//
			if (!highlightedArticle) {
				setParamsError(true);
				setLastestPost(lastestArticles);
			} else {
				setParamsError(false);
				setHighlight(highlightedArticle);
				setLastestPost(lastestArticles);
			}
		} else if (articles) {
			clearError();
			setHighlight(articles[0]);
			lastestArticles = articles.filter(
				(article) => article.id != articles[0].id
			);
			setLastestPost(lastestArticles);
		} else {
		}
	}, [articles, articleId]);

	return (
		<React.Fragment>
			{isLoading && <p>LOADING</p>}
			{!isLoading && error && <h1>{error}</h1>}
			{!isLoading && articleId && paramsError && (
				<div className={`${styles["main-article"]}`}>
					<h1>ERROR! INVALID URL PLEASE SELECT AN ARTICLE</h1>
					<LastestPosts articles={lastestPost} />
				</div>
			)}
			{!isLoading && articles && !paramsError && (
				<div className={`${styles["main-article"]}`}>
					<HighlightedArticle article={highlight} />
					<LastestPosts articles={lastestPost} />
				</div>
			)}
		</React.Fragment>
	);
};

export default MainArticle;
