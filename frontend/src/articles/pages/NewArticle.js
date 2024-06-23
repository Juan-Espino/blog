import React, { useState, useRef } from "react";

import ImageUpload from "../../shared/formElements/ImageUpload";
import TextUpload from "../../shared/formElements/TextUpload";

import styles from "./NewArticle.module.css";
import Button from "../../shared/formElements/Button";

const NewArticle = (props) => {
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
			pattern: "^[A-Za-z0-9_@]{1,40}$",
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
		console.log(file);
	};

	//handler for textInputs
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//handler for the whole new article form submission
	const newArticleSubmitHandler = (e) => {
		e.preventDefault();
		if (!!file) {
		}
		const formData = new FormData();
		formData.append("image", file);
		formData.append("title", values.title);
		formData.append("paragraph", values.paragraph);
		for (const pair of formData.entries()) {
			console.log(pair[0], pair[1]);
		}

		//check if file, title, paragraph, then enable add article submit button
		//ON Add Article just log all info for now
	};

	console.log(values);

	return (
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
					disabled={!fileExist}
				/>
			</div>
		</form>
	);
};

export default NewArticle;
