import { TCategory } from "@/types";
import {
	AppBar,
	Box,
	Dialog,
	IconButton,
	InputBase,
	Slide,
	Toolbar,
	Typography,
} from "@mui/material";
import React from "react";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any>;
	},
	ref: React.Ref<unknown>,
) {
	return (
		<Slide
			direction="up"
			ref={ref}
			{...props}
		/>
	);
});

const SearchBarModal = ({
	searchOpen,
	handleCloseSearch,
	searchResults,
}: {
	searchOpen: boolean;
	handleCloseSearch: any;
	searchResults: TCategory[];
}) => {
	return (
		<>
			<Dialog
				fullScreen
				open={searchOpen}
				onClose={handleCloseSearch}
				TransitionComponent={Transition}
				sx={{
					display: { xs: "block", sm: "none" },
				}}>
				<AppBar
					sx={{ position: "relative", bgcolor: "#fff", boxShadow: "none" }}>
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							onClick={handleCloseSearch}
							aria-label="close">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M18 6L6 18"
									stroke="#33363F"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M6 6L18 18"
									stroke="#33363F"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
						</IconButton>
						<Typography
							variant="h6"
							sx={{ flex: 1, textAlign: "center", color: "#000" }}>
							جستجو
						</Typography>
					</Toolbar>
				</AppBar>

				<Box sx={{ px: 2 }}>
					<InputBase
						fullWidth
						placeholder="جستجو ..."
						name="searchWord"
						sx={{
							bgcolor: "#EAEAEA",
							borderRadius: "10px",
							px: 2,
							height: "40px",
							direction: "rtl",
						}}
					/>
					<Box></Box>
				</Box>
			</Dialog>
		</>
	);
};

export default SearchBarModal;
