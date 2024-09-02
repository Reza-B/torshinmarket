"use client";

import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginModal from "../../LoginModal";

const LoginButton = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Button
				onClick={() => setOpen((prv) => !prv)}
				sx={{
					px: 1,
					width: "120px",
					height: { xs: "36px", sm: "40px" },
					borderRadius: "10px",
					bgcolor: "#EAEAEA",
				}}>
				<Typography
					variant="body1"
					color="#000"
					noWrap>
					{"ورود | ثبت نام"}
				</Typography>
			</Button>
			<LoginModal
				open={open}
				handleClose={() => setOpen((prv) => !prv)}
			/>
		</>
	);
};

export default LoginButton;
