//? Product
export type TProduct = {
	id: number;
	imgUrl: string[];
	name: string;
	title: string;
	category: string;
	description: string;
	price: number;
	color: string;
	colors: string[];
	created: Date;
};

export type TProductItem = {
	id: number;
	imgUrl: string;
	name: string;
	title: string;
	category: string;
	price: number;
	color: string;
	colors: string[];
	created: Date;
};

export type TBasketItem = {
	item: {
		imgUrl: string;
		name: string;
		title: string;
		category: string;
		description: string;
		price: number;
		color: string;
		colors: string[];
		userId: number;
		id: number;
	};
	id: string;
	color: string;
};

//? Filters

//? User
export type TUser = TPureUser | null;

export type TPureUser = {
	id: number;
	firstName: string;
	lastName: string;
	phone: string;
	address: string;
	email: string;
	basket: TBasketItem[];
	favorite: number[];
	totalPrice: number;
};

//? Category
export type TCategory = {
	id: number;
	name: string;
	slug: string;
	imgUrl: string;
};

//? ImageSlider
export type TImageSlider = {
	id: number;
	slug: string;
	imgUrl: string;
};

//? Variant
export type TProductList = "offer" | "special";
