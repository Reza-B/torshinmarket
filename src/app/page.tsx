import { Slider, ProductList } from "@/components";
import BottomNavigationBar from "@/components/BottomNavigationBar";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import { products } from "@/fake";
import { Box, CardMedia } from "@mui/material";

const Home = () => {
	return (
		<>
			<Slider />
			<Categories />
			<ProductList
				variant="special"
				items={products.filter((p) => !p.suggestion)}
			/>
			<Box
				display="flex"
				justifyContent="space-around"
				my={5}>
				<CardMedia
					sx={{
						width: "30%",
						aspectRatio: "2",
						borderRadius: 4,
					}}
					image="https://placehold.co/600x400@2x.png"
				/>
				<CardMedia
					sx={{
						width: "30%",
						aspectRatio: "2",
						borderRadius: 4,
					}}
					image="https://placehold.co/600x400@2x.png"
				/>
				<CardMedia
					sx={{
						width: "30%",
						aspectRatio: "2",
						borderRadius: 4,
					}}
					image="https://placehold.co/600x400@2x.png"
				/>
			</Box>
			<ProductList
				variant="offer"
				items={products.filter((p) => p.suggestion)}
			/>
			<Footer />
		</>
	);
};

export default Home;
