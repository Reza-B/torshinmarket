import React, { useState } from "react";
import {
	Box,
	Button,
	Dialog,
	FormControl,
	InputBase,
	Rating,
	Typography,
} from "@mui/material";
import styled from "@emotion/styled";

const CustomInput = styled(InputBase)(() => ({
	"& .MuiInputBase-input": {
		borderRadius: 10,
		backgroundColor: "#ECECED",
		padding: "10px 12px",
		"&:focus": {
			border: "1px solid",
			backgroundColor: "#FFFFFF",
		},
	},
}));

const AddCommentModal = ({
	open,
	handleClose,
	handleAdd,
}: {
	open: boolean;
	handleClose: any;
	handleAdd: any;
}) => {
	const [comment, setComment] = useState("");
	const [rate, setRate] = useState(0);

	return (
		<Dialog
			open={open}
			onClose={handleClose}
			sx={{
				"& .MuiDialog-paper": {
					maxWidth: 350,
					borderRadius: 5,
					p: 4,
					gap: 4,
				},
			}}>
			<Typography
				align="center"
				variant="h6"
				sx={{
					direction: "rtl",
				}}>
				{"افزودن نظر"}
			</Typography>
			<Box>
				<FormControl
					fullWidth
					sx={{
						mt: 3,
					}}>
					<Typography
						sx={{
							direction: "rtl",
							fontSize: "14px",
							mb: 1,
						}}
						variant="h6"
						fontWeight={500}>
						{"نظرتون:"}
					</Typography>
					<CustomInput
						dir="rtl"
						placeholder="لطفا فارسی ینویسید!"
						value={comment}
						onChange={(e) => {
							setComment(e.target.value);
						}}
					/>
					<Typography
						sx={{
							direction: "rtl",
							fontSize: "14px",
							my: 1,
						}}
						variant="h6"
						fontWeight={500}>
						{"امتیازیتون:"}
					</Typography>
					<Rating
						sx={{
							mx: "auto",
						}}
						size="large"
						value={rate}
						onChange={(event, newValue) => {
							setRate(newValue!);
						}}
					/>
				</FormControl>
				<Button
					onClick={() => {
						handleAdd({
							comment,
							rate,
						});
					}}
					fullWidth
					sx={{
						mt: 7,
						bgcolor: "#129F85",
						"&: hover": {
							bgcolor: "#1a7463",
						},
						borderRadius: 3,
						px: 3.5,
					}}
					variant="contained">
					<Typography variant="subtitle1">{"افزودن نظر"}</Typography>
				</Button>
			</Box>
		</Dialog>
	);
};

export default AddCommentModal;
