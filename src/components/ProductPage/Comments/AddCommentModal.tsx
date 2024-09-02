import { Dialog } from "@mui/material";
import React from "react";

const AddCommentModal = ({
	open,
	handleClose,
	handleAdd,
}: {
	open: boolean;
	handleClose: any;
	handleAdd: any;
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}></Dialog>
	);
};

export default AddCommentModal;
