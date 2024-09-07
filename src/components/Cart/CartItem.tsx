import { Avatar, Box, IconButton, Paper, Typography } from "@mui/material";
import React from "react";

const CartItem = () => {
	return (
		<>
			<Paper
				elevation={0}
				sx={{
					position: "relative",
					border: "1px solid #D9D9D9",
					borderRadius: 4,
					bgcolor: "#fff",
					display: "flex",
					gap: 2,
					padding: 2,
					margin: 1,
				}}>
				<IconButton
					sx={{
						"&:hover": {
							filter: "brightness(85%)",
						},
						position: "absolute",
						border: "1px solid #A5A5A5",
						top: 5,
						left: 5,
						zIndex: 10,
					}}>
					<svg
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M10 15L10 12"
							stroke="#A5A5A5"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M14 15L14 12"
							stroke="#A5A5A5"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M3 7H21V7C20.0681 7 19.6022 7 19.2346 7.15224C18.7446 7.35523 18.3552 7.74458 18.1522 8.23463C18 8.60218 18 9.06812 18 10V16C18 17.8856 18 18.8284 17.4142 19.4142C16.8284 20 15.8856 20 14 20H10C8.11438 20 7.17157 20 6.58579 19.4142C6 18.8284 6 17.8856 6 16V10C6 9.06812 6 8.60218 5.84776 8.23463C5.64477 7.74458 5.25542 7.35523 4.76537 7.15224C4.39782 7 3.93188 7 3 7V7Z"
							stroke="#A5A5A5"
							stroke-width="2"
							stroke-linecap="round"
						/>
						<path
							d="M10.0681 3.37059C10.1821 3.26427 10.4332 3.17033 10.7825 3.10332C11.1318 3.03632 11.5597 3 12 3C12.4403 3 12.8682 3.03632 13.2175 3.10332C13.5668 3.17033 13.8179 3.26427 13.9319 3.37059"
							stroke="#A5A5A5"
							stroke-width="2"
							stroke-linecap="round"
						/>
					</svg>
				</IconButton>
				<Avatar
					variant="rounded"
					sx={{ width: 100, height: 100 }}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						borderRight: "1px solid #858585",
						justifyContent: "space-between",
						p: 1,
					}}>
					<Typography variant="h6">{"نام محصول"}</Typography>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							borderRadius: 2,
							border: "0.5px solid #D9D9D9",
							bgcolor: "#f3fcfb",
						}}>
						<IconButton>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18 12L6 12"
									stroke="#33363F"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</IconButton>
						<Typography
							fontWeight="bold"
							fontSize={20}>
							{"4"}
						</Typography>
						<IconButton>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 6L12 18"
									stroke="#33363F"
									stroke-width="2"
									stroke-linecap="round"
								/>
								<path
									d="M18 12L6 12"
									stroke="#33363F"
									stroke-width="2"
									stroke-linecap="round"
								/>
							</svg>
						</IconButton>
					</Box>
				</Box>
			</Paper>
		</>
	);
};

export default CartItem;
