"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./swiper.css";
import "./swiper-bundle.css";

import { Box, CardMedia } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";

export default () => {
	return (
		<Swiper
			style={{
				backgroundColor: "#F7F9F2",
			}}
			modules={[Pagination, Autoplay]}
			slidesPerView={1}
			spaceBetween={100}
			loop={true}
			speed={700}
			autoplay={{
				delay: 7000,
			}}
			pagination={{
				clickable: true,
			}}>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#0FF",
						height: { xs: 170, sm: 300, md: 400 },
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#F0F",
						height: { xs: 170, sm: 300, md: 400 },
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#FF0",
						height: { xs: 170, sm: 300, md: 400 },
					}}
				/>
			</SwiperSlide>
		</Swiper>
	);
};
