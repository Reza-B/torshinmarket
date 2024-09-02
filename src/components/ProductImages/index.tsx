"use client";

import { EffectCreative, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { CardMedia } from "@mui/material";

import "@/styles/swiper.css";

export default () => {
	return (
		<>
			<Swiper
				style={{
					borderRadius: 16,
					width: "100%",
				}}
				pagination={{
					dynamicBullets: true,
				}}
				grabCursor={true}
				effect={"creative"}
				creativeEffect={{
					prev: {
						shadow: true,
						translate: [0, 0, -400],
					},
					next: {
						translate: ["100%", 0, 0],
					},
				}}
				modules={[EffectCreative, Pagination]}
				className="mySwiper">
				<SwiperSlide>
					<CardMedia
						sx={{
							width: "100%",
							aspectRatio: "1",
						}}
						image="https://placehold.co/400x400"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CardMedia
						sx={{
							width: "100%",
							aspectRatio: "1",
						}}
						image="https://placehold.co/400x400"
					/>
				</SwiperSlide>
				<SwiperSlide>
					<CardMedia
						sx={{
							width: "100%",
							aspectRatio: "1",
						}}
						image="https://placehold.co/400x400"
					/>
				</SwiperSlide>
			</Swiper>
		</>
	);
};
