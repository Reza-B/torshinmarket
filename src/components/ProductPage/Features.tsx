import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import React from "react";

const Features = () => {
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
				<Typography variant="h6">{"ویژگی های محصول"}</Typography>
				<Box
					sx={{
						mt: 0.3,
						mb: 1,
						height: 0,
						width: 100,
						border: "1px solid #129F85",
					}}
				/>
				<Box mt={2}>
					<Box
						bgcolor="#f5f5f5"
						display="flex"
						p={1}
						height={40}
						alignItems="center">
						<Typography
							noWrap
							color="#656565"
							width="50%"
							variant="body2">
							{"تعداد"}
						</Typography>
						<TextField
							disabled
							fullWidth
							variant="standard"
							value={"24 عدد در هر بسته"}
						/>
					</Box>
					<Box
						bgcolor="#eee"
						display="flex"
						p={1}
						height={40}
						alignItems="center">
						<Typography
							noWrap
							color="#656565"
							width="50%"
							variant="body2">
							{"وزن کلی"}
						</Typography>
						<TextField
							fullWidth
							disabled
							variant="standard"
							value={"1 کیلو گرم"}
						/>
					</Box>
					<Box
						bgcolor="#f5f5f5"
						display="flex"
						p={1}
						height={40}
						alignItems="center">
						<Typography
							noWrap
							color="#656565"
							width="50%"
							variant="body2">
							{"گواهی سیب سلامت"}
						</Typography>
						<TextField
							fullWidth
							disabled
							variant="standard"
							value={"11/324/6"}
						/>
					</Box>
				</Box>
			</Paper>
		</Grid>
	);
};

export default Features;
