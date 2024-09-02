"use client";

import React, { useState } from "react";

import { Button, Typography } from "@mui/material";
import AddCommentModal from "./AddCommentModal";

const AddCommentButton = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				onClick={() => setOpen(true)}
				variant="contained"
				sx={{
					bgcolor: "#00CDC0",
					gap: 1,
					height: 30,
					mb: 1,
					borderRadius: "10px",
				}}>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M12 6L12 18"
						stroke="#fff"
						stroke-width="2"
						stroke-linecap="round"
					/>
					<path
						d="M18 12L6 12"
						stroke="#fff"
						stroke-width="2"
						stroke-linecap="round"
					/>
				</svg>

				<Typography noWrap>{"افزودن نظر"}</Typography>
			</Button>
			<AddCommentModal
				open={open}
				handleClose={() => setOpen(false)}
				handleAdd={(value: object) => {
					console.log(value);
				}}
			/>
		</>
	);
};

export default AddCommentButton;
