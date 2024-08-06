"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";

import { Box } from "@mui/material";
import SOHeder from "./SOHeder";

import "../../styles/swiper.css";
import ProductCard from "@/components/ProductCard";
import { TProductItem, TProductList } from "@/types";

export default ({
	variant,
	items,
}: {
	variant: TProductList;
	items: Array<TProductItem>;
}) => {
	return (
		<Box
			sx={{
				bgcolor: `${variant === "special" ? "#91DDCF" : "#fff"}`,
				direction: "rtl",
				borderRadius: { xs: "0 15px 15px 0", sm: 4 },
				mt: 2,
				mr: { xs: 2, sm: 0 },
				py: { xs: 1, sm: 2 },
				pr: { xs: 1, sm: 2 },
				pl: { xs: 0, sm: 2 },
			}}>
			<SOHeder variant={variant} />
			<Box mt={2}>
				<Swiper
					modules={[Scrollbar]}
					slidesPerView="auto"
					loop={false}
					scrollbar={{
						hide: true,
					}}
					spaceBetween={17}>
					{items.map((item) => (
						<SwiperSlide
							style={{
								width: "auto",
							}}>
							<ProductCard product={item} />
						</SwiperSlide>
					))}
				</Swiper>
			</Box>
		</Box>
	);
};
