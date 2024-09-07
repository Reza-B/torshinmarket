import { Box, Button, InputBase, Paper, Typography } from "@mui/material";
import React from "react";

const CartTotal = () => {
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					borderRadius: "10px",
					p: 2,
					mt: 2,
				}}>
				<Box
					display="flex"
					justifyContent="space-between">
					<Box>
						<Typography mb={2}>{"قیمت محصولات"}</Typography>
						<Typography
							mb={2}
							color="error">
							{"تخفیف محصولات"}
						</Typography>
						<Typography mb={2}>{"جمع کل (نهایی)"}</Typography>
					</Box>
					<Box>
						<Typography
							align="left"
							mb={2}>
							{"۶۰۰,۰۰۰" + " " + "تومان"}
						</Typography>
						<Typography
							align="left"
							mb={2}
							color="error">
							{"۳۰۰,۰۰۰" + " " + "تومان"}
						</Typography>
						<Typography
							align="left"
							mb={2}>
							{"۳۰۰,۰۰۰" + " " + "تومان"}
						</Typography>
					</Box>
				</Box>
				<InputBase
					endAdornment={
						<Button
							variant="contained"
							sx={{
								borderTopRightRadius: 0,
								borderBottomRightRadius: 0,
								py: 1,
							}}>
							<Typography>{"اعمال"}</Typography>
						</Button>
					}
					fullWidth
					placeholder="کد تخفیف"
					name="searchWord"
					sx={{
						overflow: "hidden",
						bgcolor: "#EAEAEA",
						borderRadius: "10px",
						height: "40px",
						mt: 4,
						pr: { xs: 1, md: 2.5 },
						direction: "rtl",
					}}
				/>
				<Button
					variant="contained"
					fullWidth
					sx={{
						mt: 2,
						py: 1.2,
						bgcolor: "#129F85",
						borderRadius: "10px",
						"&:hover": {
							bgcolor: "#129F85",
							filter: "brightness(85%)",
						},
					}}>
					<Typography>{"تکمیل خرید"}</Typography>
				</Button>
			</Paper>
		</>
	);
};

export default CartTotal;
