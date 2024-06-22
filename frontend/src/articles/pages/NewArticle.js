import React, { useState, useRef } from "react";

import ImageUpload from "../../shared/formElements/ImageUpload";
import TextUpload from "../../shared/formElements/TextUpload";

import styles from "./NewArticle.module.css";
import Button from "../../shared/formElements/Button";

const NewArticle = (props) => {
	const [file, setFile] = useState();
	//
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
			label: "Title",
		},
		{
			id: 2,
			name: "paragraph",
			type: "textarea",
			placeholder: "Paragraph",
			label: "Paragraph",
		},
	];

	//handler for image uploader
	const inputHandler = (id, pickedFile, fileIsValid) => {
		setFile(pickedFile);
		console.log(file);
	};

	//handler for textInputs
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//handler for the whole new article form submission
	const newArticleSubmitHandler = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", file);
		formData.append("title", values.title);
		formData.append("paragraph", values.paragraph);
		console.log(formData.getAll());

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
				<Button key="sumbit" type="sumbit" text="Add Article" marginTop />
			</div>
		</form>
	);
};

export default NewArticle;
