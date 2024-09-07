import { Box, InputBase, List, Paper } from "@mui/material";
import React from "react";
import SearchResult from "./SearchResult";
import { TCategory } from "@/types";

const SearchBar = ({
	handleSearchClick,
	handleSearchBlur,
	searchResults,
	searchOpen,
}: {
	handleSearchClick: any;
	handleSearchBlur: any;
	searchResults: TCategory[];
	searchOpen: boolean;
}) => {
	return (
		<Box
			sx={{
				position: "relative",
				display: { xs: "none", sm: "flex" },
				flexDirection: "column",
				width: "100%",
				maxWidth: 800,
			}}>
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
				onFocus={handleSearchClick}
				onBlur={handleSearchBlur}
				fullWidth
				placeholder="جستجو ..."
				name="searchWord"
				sx={{
					bgcolor: "#EAEAEA",
					borderRadius: "10px",
					height: "40px",
					px: { xs: 1, md: 2.5 },
					fontSize: { xs: "14px", md: "16px" },
					display: { xs: "none", sm: "flex" },
					direction: "rtl",
				}}
			/>
			<SearchResult
				open={searchOpen}
				searchResults={searchResults}
			/>
		</Box>
	);
};

export default SearchBar;
