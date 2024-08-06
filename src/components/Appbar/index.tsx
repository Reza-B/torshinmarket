import {
	AppBar,
	Box,
	Button,
	Container,
	IconButton,
	InputBase,
	Toolbar,
	Typography,
} from "@mui/material";

const Appbar = () => {
	return (
		<AppBar
			sx={{
				bgcolor: "#fff",
			}}>
			<Toolbar>
				<Container
					maxWidth="xl"
					sx={{
						display: "flex",
						p: 0,
						gap: 2,
						alignItems: "center",
					}}>
					<IconButton
						sx={{
							bgcolor: "#129F85",
							width: "40px",
							height: "40px",
							borderRadius: "10px",
							"&:hover": {
								bgcolor: "#129F85",
								filter: "brightness(85%)",
							},
						}}>
						<svg
							width="36"
							height="36"
							viewBox="0 0 36 36"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M12 12L12 10.5C12 7.18629 14.6863 4.5 18 4.5V4.5C21.3137 4.5 24 7.18629 24 10.5L24 12"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M22.5 21V18"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M13.5 21V18"
								stroke="white"
								stroke-width="2"
								stroke-linecap="round"
							/>
							<path
								d="M6 16C6 14.1144 6 13.1716 6.58579 12.5858C7.17157 12 8.11438 12 10 12H26C27.8856 12 28.8284 12 29.4142 12.5858C30 13.1716 30 14.1144 30 16V23.5C30 27.2712 30 29.1569 28.8284 30.3284C27.6569 31.5 25.7712 31.5 22 31.5H14C10.2288 31.5 8.34315 31.5 7.17157 30.3284C6 29.1569 6 27.2712 6 23.5V16Z"
								stroke="white"
								stroke-width="2"
							/>
						</svg>
					</IconButton>
					<Button
						sx={{
							px: 1,
							width: "160px",
							height: "40px",
							borderRadius: "10px",
							bgcolor: "#EAEAEA",
						}}>
						<Typography
							color="#000"
							noWrap>
							{"ورود | ثبت نام"}
						</Typography>
					</Button>
					<InputBase
						endAdornment={
							<svg
								width="29"
								height="29"
								viewBox="0 0 29 29"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M20.7261 18.239H19.4162L18.952 17.7913C20.5769 15.9011 21.5552 13.4471 21.5552 10.7776C21.5552 4.82504 16.7301 0 10.7776 0C4.82504 0 0 4.82504 0 10.7776C0 16.7301 4.82504 21.5552 10.7776 21.5552C13.4471 21.5552 15.9011 20.5769 17.7913 18.952L18.239 19.4162V20.7261L26.5294 29L29 26.5294L20.7261 18.239ZM10.7776 18.239C6.64894 18.239 3.31618 14.9062 3.31618 10.7776C3.31618 6.64894 6.64894 3.31618 10.7776 3.31618C14.9062 3.31618 18.239 6.64894 18.239 10.7776C18.239 14.9062 14.9062 18.239 10.7776 18.239Z"
									fill="#9C9C9C"
								/>
							</svg>
						}
						fullWidth
						placeholder="جستجو ..."
						name="searchWord"
						sx={{
							direction: "rtl",
							bgcolor: "#EAEAEA",
							borderRadius: "10px",
							px: { xs: 1, md: 2.5 },
							py: 0.5,
							my: 1,
							fontSize: { xs: "14px", md: "16px" },
						}}
					/>
					<Box
						display="flex"
						height="40px">
						<Typography
							noWrap
							fontWeight="bold"
							variant="h4"
							sx={{
								color: "#129F85",
							}}>
							{"Torsin"}
						</Typography>
						<Typography
							noWrap
							fontWeight="bold"
							variant="h4"
							sx={{
								color: "#000",
							}}>
							{"Market"}
						</Typography>
					</Box>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

export default Appbar;
