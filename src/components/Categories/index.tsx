import {
	Box,
	Button,
	CardMedia,
	Container,
	Grid,
	Typography,
} from "@mui/material";
import React from "react";

const Categories = () => {
	return (
		<Box>
			<Grid
				container
				my={6}
				gap={2}
				justifyContent="space-around"
				display="flex">
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
				<Box
					height={100}
					width={100}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
						alignItems: "center",
					}}>
					<CardMedia
						sx={{
							height: 70,
							width: 70,
							borderRadius: 4,
						}}
						image="https://placehold.co/800@2x.png"></CardMedia>
					<Typography>{"دسته بندی 1"}</Typography>
				</Box>
			</Grid>
		</Box>
	);
};

export default Categories;
