import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";

import { generateUploadButton } from "@uploadthing/react";

export const UploadButton = generateUploadButton({
	url: "https://your-server.com/api/uploadthing",
});
// ...

import styles from "./ImageUpload.module.css";
const ImageUpload = (props) => {
	const [file, setFile] = useState();
	const [previewUrl, setPreviewUrl] = useState();
	const [isValid, setIsValid] = useState(false);
	const filePickerRef = useRef();

	useEffect(() => {
		if (!file) {
			return;
		}

		const fileReader = new FileReader();
		fileReader.onload = () => {
			setPreviewUrl(fileReader.result);
		};
		fileReader.readAsDataURL(file);
	}, [file]);

	const pickedHandler = (event) => {
		let pickedFile;
		let fileIsValid = isValid;
		if (event.target.files && event.target.files.length === 1) {
			pickedFile = event.target.files[0];
			setFile(pickedFile);
			setIsValid(true);
			fileIsValid = true;
		} else {
			setIsValid(false);
			fileIsValid = false;
		}
		//function from NewArticle
		// console.log(pickedFile);
		props.onInput(props.id, pickedFile, fileIsValid);
	};

	const pickImageHandler = (event) => {
		event.preventDefault();

		filePickerRef.current.click();
	};

	return (
		<div className={`${styles["form-wrapper"]}`}>
			<input
				id={props.id}
				ref={filePickerRef}
				type="file"
				className={`${styles["image-upload-input"]}`}
				accept=".jpg,.png,.jpeg,.webp"
				onChange={pickedHandler}
			/>
			<div className={`${styles["image-upload"]} ${props.center && "center"}`}>
				<div className={`${styles["image-upload__preview"]}`}>
					{previewUrl && <img src={previewUrl} alt="Preview" />}
					{!previewUrl && <p> Please Pick An Image</p>}
				</div>
				<Button
					text="Pick Image"
					danger={!isValid}
					clickHandler={pickImageHandler}
				/>
			</div>
			{/* {!isValid && <p>Error Occured</p>} */}
		</div>
	);
};

export default ImageUpload;
