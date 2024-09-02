import { Box, CardMedia } from "@mui/material";
import React from "react";

const Banners = () => {
	return (
		<Box
			display="flex"
			justifyContent="space-around"
			my={5}>
			<CardMedia
				sx={{
					width: "30%",
					aspectRatio: "2",
					borderRadius: 4,
				}}
				image="https://placehold.co/600x400@2x.png"
			/>
			<CardMedia
				sx={{
					width: "30%",
					aspectRatio: "2",
					borderRadius: 4,
				}}
				image="https://placehold.co/600x400@2x.png"
			/>
			<CardMedia
				sx={{
					width: "30%",
					aspectRatio: "2",
					borderRadius: 4,
				}}
				image="https://placehold.co/600x400@2x.png"
			/>
		</Box>
	);
};

export default Banners;
