import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Comment from "./Comment";

const Comments = () => {
	return (
		<Grid
			item
			xs={12}>
			<Paper
				elevation={0}
				sx={{
					p: { xs: 2, sm: 4 },
					borderRadius: 4,
					border: "1px solid #CCCCCC",
				}}>
				<Box
					display="flex"
					justifyContent="space-between"
					alignItems="end">
					<Box>
						<Typography variant="h6">{"نظرات"}</Typography>
						<Box
							sx={{
								mt: 0.3,
								mb: 1,
								height: 0,
								width: 100,
								border: "1px solid #129F85",
							}}
						/>
					</Box>
					<Button
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
				</Box>
				<Comment />
				<Comment />
				<Comment />
				<Comment />
			</Paper>
		</Grid>
	);
};

export default Comments;
