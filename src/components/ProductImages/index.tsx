"use client";

import { EffectCards, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../styles/swiper.css";
import { Avatar } from "@mui/material";

export default () => {
	return (
		<div
			style={{
				overflow: "hidden",
				width: "350px",
				height: "320px",
				marginLeft: "auto",
				marginRight: "auto",
			}}>
			<Swiper
				style={{
					width: "300px",
					height: "300px",
				}}
				effect={"cards"}
				grabCursor={true}
				loop={true}
				pagination={{
					type: "fraction",
				}}
				cardsEffect={{
					rotate: false,
					slideShadows: false,
					perSlideOffset: 10,
				}}
				modules={[EffectCards, Pagination]}>
				<SwiperSlide
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "18px",
						border: "2px solid #129F85",
					}}>
					<Avatar
						variant="rounded"
						alt="image"
						sx={{
							width: "300px",
							height: "300px",
						}}
						src="https://picsum.photos/id/1/200/300"
					/>
				</SwiperSlide>
				<SwiperSlide
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "18px",
						border: "2px solid #129F85",
					}}>
					<Avatar
						variant="rounded"
						alt="image"
						sx={{
							width: "300px",
							height: "300px",
						}}
						src="https://picsum.photos/id/1/200/300"
					/>
				</SwiperSlide>
				<SwiperSlide
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						borderRadius: "18px",
						border: "2px solid #129F85",
					}}>
					<Avatar
						variant="rounded"
						alt="image"
						sx={{
							width: "300px",
							height: "300px",
						}}
						src="https://picsum.photos/id/1/200/300"
					/>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
