import { Slider, ProductList } from "@/components";
import { products } from "@/fake";

const Home = () => {
	return (
		<>
			<Slider />
			<ProductList
				variant="special"
				items={products.filter((p) => !p.suggestion)}
			/>
			<ProductList
				variant="offer"
				items={products.filter((p) => p.suggestion)}
			/>
		</>
	);
};

export default Home;
