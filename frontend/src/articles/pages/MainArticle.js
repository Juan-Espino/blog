import React from "react";
import HighlightedArticle from "../components/highlighted/HighlightedArticle";
import LastestPosts from "../components/ui/LastestPosts";

import styles from "./MainArticle.module.css";

const MainArticle = (props) => {
	const DUMMY_ARTICLES = [
		{
			id: "a1",
			title: "Oppi Has Nothing On Me!!!",
			date: "12 jun, 2020",
			paragraph: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis dolores cumque ab velit molestiae ducimus architecto? Placeat illo dolorem voluptatibus assumenda, odit sint, maxime fugit ut voluptates molestias perferendis. mLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere inventore deleniti voluptates labore dignissimos a, incidunt minus dolorem, atque consequuntur quisquam odit tenetur reprehenderit, error commodi suscipit. Tenetur, sequi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.`,
			image:
				"https://m.media-amazon.com/images/M/MV5BNmNkNWU5NzUtNmVkNS00ZDE2LTg0NjgtNTIxNWYxOWIyM2FlXkEyXkFqcGdeQWFkcmllY2xh._V1_.jpg",
		},
		{
			id: "a2",
			title: "No way",
			date: "12 may, 2020",
			paragraph: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis dolores cumque ab velit molestiae ducimus architecto? Placeat illo dolorem voluptatibus assumenda, odit sint, maxime fugit ut voluptates molestias perferendis. mLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere inventore deleniti voluptates labore dignissimos a, incidunt minus dolorem, atque consequuntur quisquam odit tenetur reprehenderit, error commodi suscipit. Tenetur, sequi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.`,
			image:
				"https://st5.depositphotos.com/62628780/63465/i/450/depositphotos_634652768-stock-photo-cant-believe-handsome-african-american.jpg",
		},
		{
			id: "a3",
			title: "Yo you twiken",
			date: "12 april, 2020",
			paragraph: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis dolores cumque ab velit molestiae ducimus architecto? Placeat illo dolorem voluptatibus assumenda, odit sint, maxime fugit ut voluptates molestias perferendis. mLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere inventore deleniti voluptates labore dignissimos a, incidunt minus dolorem, atque consequuntur quisquam odit tenetur reprehenderit, error commodi suscipit. Tenetur, sequi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.`,
			image: "https://i.ytimg.com/vi/AM5qZGjJgCE/sddefault.jpg",
		},
		{
			id: "a4",
			title: "Naruto",
			date: "12 oct, 2020",
			paragraph: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex nobis dolores cumque ab velit molestiae ducimus architecto? Placeat illo dolorem voluptatibus assumenda, odit sint, maxime fugit ut voluptates molestias perferendis. mLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere inventore deleniti voluptates labore dignissimos a, incidunt minus dolorem, atque consequuntur quisquam odit tenetur reprehenderit, error commodi suscipit. Tenetur, sequi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tempore mollitia, quae ut beatae recusandae ratione provident, quam rerum itaque earum optio quisquam praesentium odit sequi dolore alias nostrum consequatur.`,
			image: "https://facts.net/wp-content/uploads/2023/05/Naruto.jpeg",
		},
	];
	return (
		<div className={`${styles["main-article"]}`}>
			<HighlightedArticle article={DUMMY_ARTICLES[0]} />
			<LastestPosts articles={DUMMY_ARTICLES} />
		</div>
	);
};

export default MainArticle;
