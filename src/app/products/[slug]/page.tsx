import { Container, Grid } from "@mui/material";

import { Footer } from "@/components/Layout";
import {
	ProductBreadcrumbs,
	Comments,
	ProductSpecification,
	ProductImages,
	ProductIntroducing,
	ProductFeatures,
} from "@/components/ProductPage";

export default () => {
	return (
		<>
			<Container maxWidth="lg">
				<Grid
					container
					sx={{
						direction: "rtl",
						justifyContent: "space-between",
						gap: 2,
						px: 1,
						pt: { xs: 0, sm: 4 },
					}}>
					<ProductBreadcrumbs />
					<ProductImages />
					<ProductSpecification />
					<ProductIntroducing />
					<ProductFeatures />
					<Comments />
					<Footer />
				</Grid>
			</Container>
		</>
	);
};
