import { Banners, Categories, Slider, ProductList } from "@/components/Landing";
import { Footer } from "@/components/Layout";
import { products } from "@/fake";

const Home = () => {
	return (
		<>
			<Slider />
			<Categories />
			<ProductList
				variant="special"
				items={products.filter((p) => !p.suggestion)}
			/>
			<Banners />
			<ProductList
				variant="offer"
				items={products.filter((p) => p.suggestion)}
			/>
			<Footer />
		</>
	);
};

export default Home;
