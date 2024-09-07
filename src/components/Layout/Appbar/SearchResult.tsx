import { TCategory } from "@/types";
import { List, ListItem, ListItemText, Paper } from "@mui/material";
import React from "react";

const SearchResult = ({
	searchResults,
	open,
}: {
	searchResults: TCategory[];
	open: boolean;
}) => {
	return (
		<>
			{open && (
				<Paper
					elevation={3}
					sx={{
						position: "absolute",
						top: "45px",
						left: 0,
						right: 0,
						zIndex: 1,
						maxHeight: "300px",
						overflowY: "auto",
					}}>
					<List>
						{searchResults.length > 0 ? (
							searchResults.map((result, index) => (
								<ListItem
									onClick={() => {}}
									key={index}
									button>
									<ListItemText primary={result.name} />
								</ListItem>
							))
						) : (
							<ListItem>
								<ListItemText primary="نتیجه‌ای یافت نشد" />
							</ListItem>
						)}
					</List>
				</Paper>
			)}
		</>
	);
};

export default SearchResult;
