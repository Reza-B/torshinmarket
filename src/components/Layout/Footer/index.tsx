import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
	return (
		<Box
			sx={{
				width: "100%",
				bgcolor: "#1a7463",
				borderRadius: "15px 15px 0 0",
				mt: 4,
			}}>
			<Box
				py={3}
				px={6}
				sx={{
					direction: "rtl",
				}}
				display="flex"
				justifyContent="space-between">
				<Typography
					variant="h5"
					fontWeight="bold"
					color="#fff">
					{"ترشین مارکت"}
				</Typography>
				<Link href="/">
					<Button
						variant="contained"
						sx={{
							bgcolor: "#fff",
							gap: 2,
							borderRadius: 3,
							"&: hover": {
								bgcolor: "#f0f0f0",
							},
						}}>
						<Typography color="#1a7463">{"بازگشت به بالا"}</Typography>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M18 15L12 9L6 15"
								stroke="#33363F"
								stroke-width="2"
							/>
						</svg>
					</Button>
				</Link>
			</Box>
			<Box
				width="95%"
				bgcolor="#fff"
				height="1px"
				sx={{
					mx: "auto",
				}}
			/>
			<Grid
				container
				padding={6}
				sx={{
					direction: "rtl",
				}}>
				<Grid
					md={3}
					display="flex"
					flexDirection="column"
					item>
					<Typography
						color="#FFF"
						fontWeight="bold">
						{"دسترسی سریع"}
					</Typography>
					<Box
						mt={1}
						mr={2}>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"خانه"}</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"دسته بندی ها"}</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"فروش ویژه"}</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"پیشنهادی"}</Typography>
						</Link>
					</Box>
				</Grid>
				<Grid
					md={3}
					item>
					<Typography
						color="#FFF"
						fontWeight="bold">
						{"در ترشین مارکت"}
					</Typography>
					<Box
						mt={1}
						mr={2}>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"درباره ما"}</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"قوانین"}</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">{"ارتباط با ما"}</Typography>
						</Link>
					</Box>
				</Grid>
				<Grid
					md={3}
					item>
					<Typography
						color="#FFF"
						fontWeight="bold">
						{"راه های ارتباطی"}
					</Typography>
					<Box
						my={1}
						mr={2}>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">
								{"آدرس : رودهن، بلوار لاله صحرا، ..."}
							</Typography>
						</Link>
						<Link href={"/#"}>
							<Typography color="#c0c0c0">
								{"شماره تماس : 989307737320+"}
							</Typography>
						</Link>
					</Box>
				</Grid>
				<Grid
					md={3}
					item>
					<Typography
						color="#FFF"
						fontWeight="bold">
						{"مجوز ها"}
					</Typography>
					<Box
						my={1}
						mr={2}
						width={100}
						height={100}
						bgcolor="white"
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							overflow: "hidden",
							borderRadius: "20px",
						}}>
						<Image
							height={80}
							width={80}
							alt="enamad"
							src="/assets/enamad.jpg"
						/>
					</Box>
				</Grid>
			</Grid>
			<Box
				bgcolor="#28b59b"
				gap={1}
				display="flex"
				justifyContent="center">
				<Typography
					sx={{
						direction: "rtl",
					}}>
					{"تمامی حقوق محفوظ است."}
				</Typography>
				<svg
					style={{ paddingTop: "3px" }}
					fill="#000000"
					height="20px"
					width="20px"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 367.467 367.467">
					<g>
						<path
							d="M183.73,0.018C82.427,0.018,0,82.404,0,183.733c0,101.289,82.427,183.716,183.73,183.716
		c101.315,0,183.737-82.427,183.737-183.716C367.467,82.404,285.045,0.018,183.73,0.018z M183.73,326.518
		c-78.743,0-142.798-64.052-142.798-142.784c0-78.766,64.055-142.817,142.798-142.817c78.752,0,142.807,64.052,142.807,142.817
		C326.536,262.466,262.481,326.518,183.73,326.518z"
						/>
						<path
							d="M244.036,217.014c-11.737,20.141-33.562,32.635-56.956,32.635c-36.329,0-65.921-29.585-65.921-65.915
		c0-36.36,29.592-65.955,65.921-65.955c23.395,0,45.219,12.54,56.956,32.641l1.517,2.627h44.28l-2.658-7.129
		c-7.705-20.413-21.225-37.769-39.122-50.157c-17.942-12.42-39.017-19.009-60.973-19.009c-58.981,0-106.946,48.006-106.946,106.982
		c0,58.98,47.965,106.941,106.946,106.941c21.956,0,43.03-6.567,60.973-19.006c17.897-12.391,31.417-29.741,39.122-50.154
		l2.658-7.133h-44.28L244.036,217.014z"
						/>
					</g>
				</svg>
				<Typography>{"TorshinMarket"}</Typography>
			</Box>
		</Box>
	);
};

export default Footer;