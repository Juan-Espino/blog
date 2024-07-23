import React, { useState, useContext } from "react";
import { redirect, useNavigate } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { AuthContext } from "../../../shared/context/auth-context";

import ReadMore from "./ReadMore";
import { dateFormater } from "../../../shared/util/DateFormater";
import styles from "./DesktopView.module.css";
import Button from "../../../shared/formElements/Button";
import Modal from "../ui/Modal";
import Pencil from "../../../assets/icons/Pencil";
import TextUpload from "../../../shared/formElements/TextUpload";
import TrashIcon from "../../../assets/icons/TrashIcon";
import { useHttpClient } from "../../../shared/hooks/http-hook";

const DesktopView = (props) => {
	const { isLoading, error, clearError, sendRequest } = useHttpClient();
	const navigate = useNavigate();
	const auth = useContext(AuthContext);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const [values, setValues] = useState({
		title: "",
		paragraph: "",
	});

	const inputs = [
		{
			id: 1,
			name: "title",
			type: "text",
			placeholder: "Title",
			errorMessage: "Must be 1-40 characters!",
			label: "Title",
			pattern: "^[A-Za-z0-9_@- ]{1,40}$",
			required: true,
		},
		{
			id: 2,
			name: "paragraph",
			type: "textarea",
			placeholder: "Paragraph",
			errorMessage: "Needs to be atleast 300 characters!",
			label: "Paragraph",
			pattern: "^.{300,}$",
			required: true,
		},
	];

	//handler for textInputs
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//sumbit handler for edits
	const editSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await sendRequest(
				process.env.REACT_APP_BACKEND_URL + `/articles/${props.article.id}`,
				"PATCH",
				JSON.stringify({
					title: values.title,
					paragraph: values.paragraph,
					creatorId: auth.creatorId,
				}),
				{
					"Content-Type": " Application/json",
					Authorization: "Bearer " + auth.token,
				}
			);
		} catch (err) {}
		console.log("submited");
		window.location.reload();
	};

	//sumbit handler for deletes
	const deleteSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await sendRequest(
				process.env.REACT_APP_BACKEND_URL + `/articles/${props.article.id}`,
				"DELETE",
				JSON.stringify({
					creatorId: auth.creatorId,
				}),
				{
					"Content-Type": " Application/json",
					Authorization: "Bearer " + auth.token,
				}
			);
		} catch (err) {}
		navigate("/");
		window.location.reload();
	};

	return (
		<div className={`${styles["desktop-view"]}`}>
			<div className={`${styles["article-hero"]}`}>
				<img
					src={process.env.REACT_APP_ASSET_URL + "/" + props.article.img}
					alt={props.article.title}
					className={`${styles["article-img"]}`}
				/>
				<div className={`${styles["article-icon-date"]}`}>
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
					<h4 className={`${styles["article-date"]}`}>
						{dateFormater(props.article.created)}
					</h4>
				</div>
				<h2 className={`${styles["article-title"]}`}>{props.article.title}</h2>
				<ReadMore paragraph={props.article.paragraph} />

				{auth.loggedIn && (
					<div className={`${styles["article-buttons"]}`}>
						{/* edit button */}
						<Button
							text="Edit"
							edit
							marginTop
							clickHandler={() => setOpenEdit(true)}
						/>

						{/* delete button */}
						<Button
							text="Delete"
							danger
							marginTop
							clickHandler={() => setOpenDelete(true)}
						/>

						{/* new post button*/}
						<Button
							text="New Post"
							submit
							marginTop
							clickHandler={() => navigate("/new")}
						/>
					</div>
				)}

				<CSSTransition
					in={openEdit}
					mountOnEnter
					unmountOnExit
					timeout={400}
					classNames={"modal"}
				>
					<Modal open={openEdit} onClose={() => setOpenEdit(false)}>
						<form action="submit" onSubmit={editSubmitHandler}>
							<div className={`${styles["modal-wrapper"]}`}>
								<Pencil />
								<div className={`${styles["modal-edit"]}`}>
									{inputs.map((input) => (
										<TextUpload
											key={input.id}
											{...input}
											value={values[input.name]}
											onChange={onChange}
										/>
									))}
									<div className={`${styles["modal-buttons"]}`}>
										<Button
											text="Cancel"
											marginTop
											clickHandler={() => setOpenEdit(false)}
										/>
										<Button
											type="submit"
											key="submit"
											text="Submit"
											marginTop
											submit
										/>
									</div>
								</div>
							</div>
						</form>
					</Modal>
				</CSSTransition>

				<CSSTransition
					in={openDelete}
					mountOnEnter
					unmountOnExit
					timeout={500}
					classNames={"modal"}
				>
					<Modal open={openDelete} onClose={() => setOpenDelete(false)}>
						<form action="submit" onSubmit={deleteSubmitHandler}>
							<div className={`${styles["modal-wrapper"]}`}>
								<TrashIcon />
								<h2> ARE YOU SURE YOU WANT TO DELETE???</h2>
								<div className={`${styles["modal-buttons"]}`}>
									<Button
										text="Cancel"
										marginTop
										clickHandler={() => setOpenDelete(false)}
									/>
									<Button
										type="submit"
										key="submit"
										text="Delete"
										marginTop
										danger
									/>
								</div>
							</div>
						</form>
					</Modal>
				</CSSTransition>
			</div>
		</div>
	);
};

export default DesktopView;
