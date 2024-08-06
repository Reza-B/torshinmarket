"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import { CardMedia } from "@mui/material";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "../../styles/swiper.css";

export default () => {
	return (
		<Swiper
			modules={[Pagination, Autoplay, Navigation]}
			slidesPerView={1}
			spaceBetween={10}
			loop={true}
			speed={700}
			autoplay={{
				delay: 7000,
			}}
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}>
			<SwiperSlide>
				<CardMedia
					sx={{
						height: { xs: 260, sm: 300, lg: 400 },
						bgcolor: "#0FF",
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#F0F",
						height: { xs: 260, sm: 300, lg: 400 },
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#FF0",
						height: { xs: 260, sm: 300, lg: 400 },
					}}
				/>
			</SwiperSlide>
		</Swiper>
	);
};
