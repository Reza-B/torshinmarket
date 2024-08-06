"use client";

import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { useState } from "react";

const BottomNavigationBar = () => {
	const [page, setPage] = useState();
	return (
		<Paper
			sx={{
				display: { xs: "block", sm: "none" },
				position: "fixed",
				py: 1,
				bottom: 0,
				left: 0,
				right: 0,
				zIndex: 100,
			}}
			elevation={2}>
			<BottomNavigation
				sx={{
					direction: "rtl",
				}}
				showLabels
				value={1}>
				<BottomNavigationAction
					label="خانه"
					icon={
						<svg
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M5 12.7596C5 11.4019 5 10.723 5.27446 10.1262C5.54892 9.52949 6.06437 9.08769 7.09525 8.20407L8.09525 7.34693C9.95857 5.7498 10.8902 4.95123 12 4.95123C13.1098 4.95123 14.0414 5.7498 15.9047 7.34693L16.9047 8.20407C17.9356 9.08769 18.4511 9.52949 18.7255 10.1262C19 10.723 19 11.4019 19 12.7596V17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17V12.7596Z"
								stroke="#222222"
							/>
							<path
								d="M14.5 21V16C14.5 15.4477 14.0523 15 13.5 15H10.5C9.94772 15 9.5 15.4477 9.5 16V21"
								stroke="#222222"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					}
				/>
				<BottomNavigationAction
					label="دسته بندی"
					icon={
						<svg
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<rect
								width="6"
								height="6"
								rx="1"
								transform="matrix(1 0 0 -1 14 10)"
								stroke="#222222"
								stroke-linecap="round"
							/>
							<path
								d="M10 14H14C14.9428 14 15.4142 14 15.7071 14.2929C16 14.5858 16 15.0572 16 16V18C16 18.9428 16 19.4142 15.7071 19.7071C15.4142 20 14.9428 20 14 20H10V14Z"
								stroke="#222222"
								stroke-linecap="round"
							/>
							<path
								d="M10 10C10 9.05719 10 8.58579 9.70711 8.29289C9.41421 8 8.94281 8 8 8H6C5.05719 8 4.58579 8 4.29289 8.29289C4 8.58579 4 9.05719 4 10V14H10V10Z"
								stroke="#222222"
								stroke-linecap="round"
							/>
							<path
								d="M10 20H6C5.05719 20 4.58579 20 4.29289 19.7071C4 19.4142 4 18.9428 4 18V14H10V20Z"
								stroke="#222222"
								stroke-linecap="round"
							/>
						</svg>
					}
				/>
				<BottomNavigationAction
					label="سبد خرید"
					icon={
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 12L12 10.5C12 7.18629 14.6863 4.5 18 4.5V4.5C21.3137 4.5 24 7.18629 24 10.5L24 12"
								stroke="#33363F"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M22.5 21V18"
								stroke="#33363F"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M13.5 21V18"
								stroke="#33363F"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M6 16C6 14.1144 6 13.1716 6.58579 12.5858C7.17157 12 8.11438 12 10 12H26C27.8856 12 28.8284 12 29.4142 12.5858C30 13.1716 30 14.1144 30 16V23.5C30 27.2712 30 29.1569 28.8284 30.3284C27.6569 31.5 25.7712 31.5 22 31.5H14C10.2288 31.5 8.34315 31.5 7.17157 30.3284C6 29.1569 6 27.2712 6 23.5V16Z"
								stroke="#33363F"
								stroke-width="2"
							/>
						</svg>
					}
				/>
				<BottomNavigationAction
					label="پروفایل"
					icon={
						<svg
							width="36"
							height="36"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<circle
								cx="12"
								cy="8"
								r="3.5"
								stroke="#222222"
								stroke-linecap="round"
							/>
							<path
								d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
								stroke="#222222"
								stroke-linecap="round"
							/>
						</svg>
					}
				/>
			</BottomNavigation>
		</Paper>
	);
};

export default BottomNavigationBar;
