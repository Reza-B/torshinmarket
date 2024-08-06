import { Slider, ProductList } from "@/components";

const Home = () => {
	return (
		<>
			<Slider />
			<ProductList
				variant="offer"
				items={[{}]}
			/>
		</>
	);
};

export default Home;
