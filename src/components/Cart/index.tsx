import {
	Box,
	Button,
	Container,
	Dialog,
	IconButton,
	Slide,
	Toolbar,
	Typography,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { TransitionProps } from "@mui/material/transitions";

import React from "react";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any>;
	},
	ref: React.Ref<unknown>,
) {
	return (
		<Slide
			direction="up"
			ref={ref}
			{...props}
		/>
	);
});

const Cart = ({ open, handleClose }: { open: boolean; handleClose: any }) => {
	return (
		<>
			<Dialog
				sx={{
					direction: "rtl",
				}}
				PaperProps={{
					style: { backgroundColor: "#F7F9F2" },
				}}
				fullScreen
				open={open}
				onClose={handleClose}
				TransitionComponent={Transition}>
				<Toolbar>
					<IconButton
						edge="end"
						color="inherit"
						onClick={handleClose}
						aria-label="close">
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M18 6L6 18"
								stroke="#33363F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M6 6L18 18"
								stroke="#33363F"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</IconButton>
					<Typography
						sx={{ ml: 2, flex: 1 }}
						variant="h6"
						component="div">
						{"سبد خرید"}
					</Typography>
					<Button
						sx={{
							bgcolor: "#129F85",
							px: 2,
							"&: hover": {
								bgcolor: "#129F85",
								filter: "brightness(85%)",
							},
						}}
						autoFocus
						onClick={handleClose}>
						<Typography color="white">{"خالی کردن"}</Typography>
					</Button>
				</Toolbar>
				<Container maxWidth="lg">
					<Grid
						container
						spacing={2}>
						<Grid size={{ xs: 12, md: 8 }}>
							<CartItems />
						</Grid>
						<Grid size={{ xs: 12, md: 4 }}>
							<Typography variant="h5">{"صورت حساب"}</Typography>
							<CartTotal />
						</Grid>
					</Grid>
				</Container>
			</Dialog>
		</>
	);
};

export default Cart;
