import { Box, Button, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const Categories = () => {
	return (
		<Box
			my={6}
			mx={12}>
			{/* <Box
				sx={{
					direction: "rtl",
					display: "flex",
					justifyContent: "space-between",
				}}>
				<Typography
					variant="h5"
					fontWeight="bold">
					دسته بندی ها
				</Typography>
				<Button>
					<Typography color="#9B9B9B">{"تمام دسته بندی ها"} </Typography>
				</Button>
			</Box> */}
			<Box
				mt={5}
				gap={2}
				justifyContent="center"
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
			</Box>
		</Box>
	);
};

export default Categories;
