import React, { useState, useRef, useMemo, useContext } from "react";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

import ImageUpload from "../../shared/formElements/ImageUpload";
import TextUpload from "../../shared/formElements/TextUpload";
import { useHttpClient } from "../../shared/hooks/http-hook";
import Modal from "../components/ui/Modal";
import { AuthContext } from "../../shared/context/auth-context";

import styles from "./NewArticle.module.css";
import Button from "../../shared/formElements/Button";

const NewArticle = (props) => {
	const navigate = useNavigate();
	const auth = useContext(AuthContext);
	const { isLoading, error, clearError, sendRequest } = useHttpClient();
	const [file, setFile] = useState();
	const [fileExist, setFileExist] = useState(false);
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
			pattern: "^[A-Za-z0-9_@ ]{1,40}$",
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

	//handler for image uploader
	const inputHandler = (id, pickedFile, fileIsValid) => {
		setFile(pickedFile);
		setFileExist(true);
	};

	//handler for textInputs
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//handler for the whole new article form submission
	const newArticleSubmitHandler = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", file);
		formData.append("title", values.title);
		formData.append("paragraph", values.paragraph);
		formData.append("creatorId", auth.creatorId);
		try {
			const responseData = await sendRequest(
				process.env.REACT_APP_BACKEND_URL + "/articles",
				"POST",
				formData,
				{ Authorization: "Bearer " + auth.token }
			);
			navigate("/");
		} catch (err) {}
	};

	return (
		<React.Fragment>
			{error && !isLoading && (
				<CSSTransition
					in={error}
					mountOnEnter
					unmountOnExit
					timeout={500}
					classNames={"modal"}
				>
					<Modal
						open={error}
						onClose={() => {
							clearError();
						}}
					>
						<h1>Error!</h1>
						<h2>{error}</h2>
					</Modal>
				</CSSTransition>
			)}

			<form
				onSubmit={newArticleSubmitHandler}
				className={`${styles["form-wrapper"]}`}
			>
				<ImageUpload onInput={inputHandler} />
				{/* value={values[input.name]} == value=values[title]... */}
				{inputs.map((input) => (
					<TextUpload
						key={input.id}
						{...input}
						value={values[input.name]}
						onChange={onChange}
					/>
				))}
				<div className={`${styles["button-wrapper"]}`}>
					<Button
						key="sumbit"
						type="sumbit"
						text="Add Article"
						marginTop
						disabled={!file}
					/>
				</div>
			</form>
		</React.Fragment>
	);
};

export default NewArticle;
