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
						bgcolor: "#0AA0A0",
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#A000A0",
						height: { xs: 260, sm: 300, lg: 400 },
					}}
				/>
			</SwiperSlide>
			<SwiperSlide>
				<CardMedia
					sx={{
						bgcolor: "#A0A000",
						height: { xs: 260, sm: 300, lg: 400 },
					}}
				/>
			</SwiperSlide>
		</Swiper>
	);
};
