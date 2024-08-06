import { Slider, ProductList } from "@/components";
import { products } from "@/fake";

const Home = () => {
	console.log(products);
	return (
		<>
			<Slider />
			<ProductList
				variant="offer"
				items={products}
			/>
		</>
	);
};

export default Home;
