import { TProductItem } from "@/types";
import { Box } from "@mui/material";
import React from "react";

const ProductCard = ({ product }: { product: TProductItem }) => {
	return (
		<>
			<Box
				height={360}
				width={200}
				bgcolor="#fff"
				sx={{
					borderRadius: 2,
				}}>
				{product.name}
			</Box>
		</>
	);
};

export default ProductCard;
