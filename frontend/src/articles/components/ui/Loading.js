import React from "react";
import { CSSTransition } from "react-transition-group";
import Modal from "./Modal";
import { HashLoader } from "react-spinners";

const Loading = ({ openModal, setOpenModal }) => {
	return (
		<div>
			<CSSTransition
				in={openModal}
				mountOnEnter
				unmountOnExit
				timeout={500}
				classNames={"modal"}
			>
				<Modal
					open={openModal}
					onClose={() => {
						setOpenModal(false);
					}}
					loading
				>
					<HashLoader color="rgb(67, 250, 76)" loading={openModal} size={100} />
				</Modal>
			</CSSTransition>
		</div>
	);
};

export default Loading;
