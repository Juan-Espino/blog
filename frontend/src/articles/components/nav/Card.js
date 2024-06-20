import React from "react";

import DateIcon from "../../../assets/icons/DateIcon";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
	return (
		// COULD MAKE IMPROVE LOOK BY FLOATING TEXT INFRONT OF IMAGES
		<li key={props.id} className={`${styles["card-li"]}`}>
			<Link to={`/${props.id}`}>
				<div className={`${styles["card-wrapper"]}`}>
					<img src={props.image} alt="props.title" />
					<h4 className={`${styles["card-title"]}`}>{props.title}</h4>
					<div className={`${styles["card-icon-date"]}`}>
						<DateIcon />
						<p className={`${styles["card-date"]}`}>{props.date}</p>
					</div>
				</div>
			</Link>
		</li>
	);
};

export default Card;
