import { TProductItem } from "@/types";
import { Box, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";

const ProductCard = ({ product }: { product: TProductItem }) => {
	return (
		<>
			<Box
				bgcolor="#fff"
				sx={{
					width: "200px",
					height: "360px",
					borderRadius: 4,
					display: "flex",
					flexDirection: "column",
					position: "relative",
					justifyContent: "space-between",
					py: "10px",
				}}>
				<Box
					bgcolor="#f00"
					position="absolute"
					borderRadius={4}
					px={1}
					top={4}
					right={4}>
					<Typography
						variant="body2"
						color="#fff">
						{"فروش ویژه"}
					</Typography>
				</Box>
				<CardMedia
					image={product.imgUrl}
					sx={{
						borderRadius: 2,
						mx: "10px",
						width: "180px",
						height: "200px",
					}}
				/>
				<Typography
					noWrap
					variant="h6"
					sx={{
						mx: "10px",
						fontSize: "14px",
					}}>
					{product.name}
				</Typography>
				<Box />
				<Box
					sx={{
						display: "flex",
						bgcolor: "#F2F2F2",
						justifyContent: "space-between",
						mx: "10px",
						borderRadius: "10px",
					}}>
					<IconButton
						sx={{
							bgcolor: "#00CDC0",
							width: "50px",
							height: "80px",
							borderRadius: "10px",
							"&:hover": {
								bgcolor: "#00CDC0",
								filter: "brightness(110%)",
							},
						}}>
						<svg
							width="25"
							height="22"
							viewBox="0 0 25 22"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<g clip-path="url(#clip0_78_205)">
								<path
									d="M11.4583 8.25273H13.5417V5.50548H16.6667V3.67398H13.5417V0.926727H11.4583V3.67398H8.33332V5.50548H11.4583V8.25273ZM7.29166 16.4945C6.14582 16.4945 5.21874 17.3187 5.21874 18.326C5.21874 19.3333 6.14582 20.1575 7.29166 20.1575C8.43749 20.1575 9.37499 19.3333 9.37499 18.326C9.37499 17.3187 8.43749 16.4945 7.29166 16.4945ZM17.7083 16.4945C16.5625 16.4945 15.6354 17.3187 15.6354 18.326C15.6354 19.3333 16.5625 20.1575 17.7083 20.1575C18.8542 20.1575 19.7917 19.3333 19.7917 18.326C19.7917 17.3187 18.8542 16.4945 17.7083 16.4945ZM7.46874 13.5183L7.49999 13.4084L8.43749 11.9157H16.1979C16.9792 11.9157 17.6667 11.5403 18.0208 10.9725L22.0417 4.5531L20.2292 3.67398H20.2187L19.0729 5.50548L16.1979 10.0842H8.88541L8.74999 9.83698L6.41666 5.50548L5.42707 3.67398L4.44791 1.84248H1.04166V3.67398H3.12499L6.87499 10.6245L5.46874 12.8681C5.30207 13.1245 5.20832 13.4267 5.20832 13.7472C5.20832 14.7546 6.14582 15.5787 7.29166 15.5787H19.7917V13.7472H7.72916C7.59374 13.7472 7.46874 13.6465 7.46874 13.5183Z"
									fill="white"
								/>
							</g>
							<defs>
								<clipPath id="clip0_78_205">
									<rect
										width="25"
										height="21.978"
										fill="white"
										transform="translate(0 0.0109863)"
									/>
								</clipPath>
							</defs>
						</svg>
					</IconButton>
					<Box
						width="100%"
						display="flex"
						flexDirection="column"
						justifyContent="center"
						alignItems="center"
						pt={2}>
						<Box display="flex">
							<Typography
								variant="body2"
								color="textSecondary"
								sx={{
									textDecoration: "line-through",
									marginRight: 1,
									opacity: 0.6,
								}}>
								{"16000"}
							</Typography>
							<Box
								bgcolor="#f00"
								sx={{
									px: 1,
									borderRadius: 4,
									pt: 0.3,
									mr: 1,
								}}>
								<Typography
									sx={{
										fontSize: "10px",
									}}
									variant="body2"
									color="#fff">
									{"20" + "%"}
								</Typography>
							</Box>
						</Box>
						<Typography
							pt={0.5}
							variant="body1">
							{" "}
							{"16000" + " " + "تومان"}
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
};

export default ProductCard;
