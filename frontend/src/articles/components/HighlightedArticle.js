import React, { useEffect, useState } from "react";

import "./HighlightedArticle.css";
const HighlightedArticle = (props) => {
	const [scroll, setScroll] = useState(false);
	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 50) {
				setScroll(true);
			} else {
				setScroll(false);
			}
		});
	}, []);
	return (
		<React.Fragment>
			<div
				className="article-hero"
				data-filter={`${!scroll ? "blur" : "unblur"}`}
				data-color={`${!scroll ? "translucent" : "nottranslucent"}`}
			>
				<div className="article-img-wrapper">
					<img src={props.article.image} alt="props.article.title" />
				</div>
				<div
					className={`article-metadata-wrapper ${
						scroll ? "opacity-0" : "opacity-1"
					}`}
				>
					<h2 className="article-title">{props.article.title}</h2>
					<div className="article-icon-date">
						<svg
							version="1.1"
							id="Capa_1"
							xmlns="http://www.w3.org/2000/svg"
							width="800px"
							height="800px"
							viewBox="0 0 610.398 610.398"
						>
							<g>
								<g>
									<path
										d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052
			c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553
			V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"
									/>
									<path
										d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992
			h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"
									/>
									<path
										d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117
			V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818
			c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764
			V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"
									/>
									<path
										d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"
									/>
									<path
										d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017
			c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"
									/>
									<path
										d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"
									/>
									<path
										d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017
			c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"
									/>
									<path
										d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"
									/>
									<path
										d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032
			c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"
									/>
									<path
										d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"
									/>
									<path
										d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032
			c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"
									/>
								</g>
							</g>
						</svg>
						<h4 className="article-date">{props.article.date}</h4>
					</div>
				</div>
			</div>
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
