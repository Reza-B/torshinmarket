import { TProductList } from "@/types";
import { Box, Button, Typography } from "@mui/material";

export default ({ variant }: { variant: TProductList }) => {
	return (
		<Box
			bgcolor="#fff"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			px={2}
			height={50}
			sx={{
				borderRadius: {
					xs: "0 10px 10px 0",
					sm: 2,
				},
			}}>
			<Box
				display="flex"
				gap={3}>
				<Box pt={0.5}>
					<svg
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.11275 7.11289C8.73969 5.48591 8.73969 2.8472 7.11275 1.22023C5.4858 -0.406744 2.84715 -0.406744 1.22021 1.22023C-0.406736 2.8472 -0.406736 5.48591 1.22021 7.11289C2.8478 8.74051 5.4858 8.74051 7.11275 7.11289ZM23.7793 17.8871C22.1524 16.2601 19.5137 16.2601 17.8868 17.8871C16.2598 19.5141 16.2598 22.1528 17.8868 23.7798C19.5137 25.4067 22.1524 25.4067 23.7793 23.7798C25.4069 22.1528 25.4069 19.5147 23.7793 17.8871ZM23.653 2.81986L22.1804 1.34719C21.3666 0.533373 20.0476 0.533373 19.2344 1.34719L1.34716 19.2348C0.533362 20.0486 0.533362 21.3676 1.34716 22.1808L2.81981 23.6535C3.6336 24.4673 4.9526 24.4673 5.76575 23.6535L23.653 5.76586C24.4668 4.9527 24.4668 3.63367 23.653 2.81986Z"
							fill="#F00"
						/>
					</svg>
				</Box>
				<Typography
					variant="h5"
					color="#f00">
					{variant === "special" ? "فروش ویژه" : "پیشنهادی"}
				</Typography>
			</Box>
			<Button>
				<Typography color="#9B9B9B">{"مشاهده بیشتر"} </Typography>
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M4 12L3.29289 11.2929L2.58579 12L3.29289 12.7071L4 12ZM19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11V13ZM9.29289 5.29289L3.29289 11.2929L4.70711 12.7071L10.7071 6.70711L9.29289 5.29289ZM3.29289 12.7071L9.29289 18.7071L10.7071 17.2929L4.70711 11.2929L3.29289 12.7071ZM4 13H19V11H4V13Z"
						fill="#9B9B9B"
					/>
				</svg>
			</Button>
		</Box>
	);
};
