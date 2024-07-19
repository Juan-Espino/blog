import React, { useContext, useState } from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "../../articles/components/ui/Modal";
import Button from "../formElements/Button";
import PersonIcon from "../../assets/icons/PersonIcon";
import TextUpload from "../formElements/TextUpload";
import styles from "./Footer.module.css";
import { useHttpClient } from "../hooks/http-hook";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Footer = (props) => {
	const navigate = useNavigate();
	const auth = useContext(AuthContext);

	const { isLoading, error, sendRequest, clearError } = useHttpClient();
	const [openSignin, setOpenSignin] = useState(false);
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "text",
			placeholder: "Email",
			errorMessage: "Must be a proper email address!",
			label: "Email",
			pattern: "^[^@]+@[^@]+.[^@]+$",
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			errorMessage: "Needs to be atleast 6 characters!",
			label: "Password",
			pattern: "^.{6,}$",
			required: true,
		},
	];

	//onChange handler for the textinputs
	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//sumbit handler for signin
	const signinSubmitHandler = async (e) => {
		e.preventDefault();
		try {
			await sendRequest(
				process.env.REACT_APP_BACKEND_URL + "/users/login",
				"POST",
				JSON.stringify({ email: values.email, password: values.password }),
				{
					"Content-Type": " Application/json",
				}
			);
			setOpenSignin(false);
			auth.login();
			values.email = "";
			values.password = "";
		} catch (err) {}
	};
	return (
		<footer>
			<p>Hello There!</p>
			<p>Built and designed by Juan Carlos Espino.</p>
			<p> All rights reserved. ©</p>

			{/* signin link */}
			<p
				className={`${styles["signin"]}`}
				onClick={
					auth.loggedIn ? () => auth.logout() : () => setOpenSignin(true)
				}
			>
				{auth.loggedIn ? "Logout" : "Sign in"}
			</p>

			<CSSTransition
				in={openSignin}
				mountOnEnter
				unmountOnExit
				timeout={500}
				classNames={"modal"}
			>
				<React.Fragment>
					{error && (
						<Modal
							open={openSignin}
							onClose={() => {
								setOpenSignin(false);
								clearError();
								setOpenSignin(true);
							}}
						>
							<h1>Error!</h1>
							<h1>{error}</h1>
						</Modal>
					)}

					{isLoading && !error && (
						<Modal open={openSignin} onClose={() => setOpenSignin(false)}>
							<h1>Loading</h1>
						</Modal>
					)}

					{!isLoading && !error && (
						<Modal open={openSignin} onClose={() => setOpenSignin(false)}>
							<form action="submit" onSubmit={signinSubmitHandler}>
								<div className={`${styles["modal-wrapper"]}`}>
									<PersonIcon />
									<div className={`${styles["modal-signin"]}`}>
										{inputs.map((input) => (
											<TextUpload
												key={input.id}
												{...input}
												value={values[input.name]}
												onChange={onChange}
											/>
										))}
									</div>

									<div className={`${styles["modal-buttons"]}`}>
										<Button
											text="Cancel"
											marginTop
											clickHandler={() => setOpenSignin(false)}
										/>
										<Button
											type="submit"
											key="submit"
											text="Sign in"
											marginTop
											submit
										/>
									</div>
								</div>
							</form>
						</Modal>
					)}
				</React.Fragment>
			</CSSTransition>
		</footer>
	);
};

export default Footer;
