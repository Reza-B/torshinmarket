import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Comment from "./Comment";
import AddCommentButton from "./AddCommentButton";

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
					<AddCommentButton />
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
