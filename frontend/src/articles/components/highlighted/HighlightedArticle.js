import React from "react";
import MobileView from "./MobileView";

import "./HighlightedArticle.css";
const HighlightedArticle = (props) => {
	return (
		<React.Fragment>
			<MobileView article={props.article} />
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
				doloremque, laudantium consectetur sit cum fugit blanditiis pariatur,
				odit in dolorem esse optio amet labore saepe dolorum, molestiae libero
				et quam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
				autem alias eaque neque perspiciatis sapiente numquam, dolorum fuga
				deleniti, iure expedita aliquid, veniam molestias architecto nesciunt.
				Ut veritatis ea alias! Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Sequi doloremque, laudantium consectetur sit cum fugit
				blanditiis pariatur, odit in dolorem esse optio amet labore saepe
				dolorum, molestiae libero et quam! Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Iste autem alias eaque neque perspiciatis
				sapiente numquam, dolorum fuga deleniti, iure expedita aliquid, veniam
				molestias architecto nesciunt. Ut veritatis ea alias! Lorem ipsum, dolor
				sit amet consectetur adipisicing elit. Sequi doloremque, laudantium
				consectetur sit cum fugit blanditiis pariatur, odit in dolorem esse
				optio amet labore saepe dolorum, molestiae libero et quam! Lorem, ipsum
				dolor sit amet consectetur adipisicing elit. Iste autem alias eaque
				neque perspiciatis sapiente numquam, dolorum fuga deleniti, iure
				expedita aliquid, veniam molestias architecto nesciunt. Ut veritatis ea
				alias! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
				doloremque, laudantium consectetur sit cum fugit blanditiis pariatur,
				odit in dolorem esse optio amet labore saepe dolorum, molestiae libero
				et quam! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
				autem alias eaque neque perspiciatis sapiente numquam, dolorum fuga
				deleniti, iure expedita aliquid, veniam molestias architecto nesciunt.
				Ut veritatis ea alias! Lorem ipsum, dolor sit amet consectetur
				adipisicing elit. Sequi doloremque, laudantium consectetur sit cum fugit
				blanditiis pariatur, odit in dolorem esse optio amet labore saepe
				dolorum, molestiae libero et quam! Lorem, ipsum dolor sit amet
				consectetur adipisicing elit. Iste autem alias eaque neque perspiciatis
				sapiente numquam, dolorum fuga deleniti, iure expedita aliquid, veniam
				molestias architecto nesciunt. Ut veritatis ea alias!
			</p>
		</React.Fragment>
	);
};

export default HighlightedArticle;
