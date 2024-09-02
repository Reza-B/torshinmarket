import { Box, Breadcrumbs, Grid, Link } from "@mui/material";
import React from "react";

const ProductBreadcrumbs = () => {
	return (
		<Grid
			md={12}
			sx={{
				pb: { xs: 0, sm: 2 },
			}}>
			<Box
				display="flex"
				justifyContent="start">
				<Breadcrumbs>
					<Link
						color="inherit"
						href="/">
						{"ترشین مارکت"}
					</Link>
					<Link
						color="inherit"
						href="/material-ui/getting-started/installation/">
						{"ترشیجات"}
					</Link>
				</Breadcrumbs>
			</Box>
		</Grid>
	);
};

export default ProductBreadcrumbs;
