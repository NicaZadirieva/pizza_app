export interface GetPopularPizzaResponse {
    pizzaName: string;
    pizzaImgPath: string;
    filling: string[];
    availableSizes: number[];
    calculatedPrice: number;
}

const testData: GetPopularPizzaResponse[] = [
	{
		pizzaName: 'Italian',
		pizzaImgPath: '/testData/pizza-img/italian.png',
		filling: ['onion', 'potato', 'tomato', 'mushrooms', 'cheese', 'olives', 'meat', 'onion', 'potato', 'tomato', 'mushrooms', 'cheese', 'olives', 'meat'],
		availableSizes: [22, 28, 33],
		calculatedPrice: 8.35
	},
	{
		pizzaName: 'Venecia',
		pizzaImgPath: '/testData/pizza-img/venecia.png',
		filling: ['onion', 'potato', 'tomato', 'mushrooms', 'cheese', 'olives', 'meat'],
		availableSizes: [22, 28, 33],
		calculatedPrice: 7.35
	},
	{
		pizzaName: 'Meat',
		pizzaImgPath: '/testData/pizza-img/meat.png',
		filling: ['onion', 'potato', 'tomato', 'mushrooms', 'cheese', 'olives', 'meat'],
		availableSizes: [22, 28, 33],
		calculatedPrice: 9.35
	},
	{
		pizzaName: 'Cheese',
		pizzaImgPath: '/testData/pizza-img/cheese.png',
		filling: ['onion', 'potato', 'tomato', 'mushrooms', 'cheese', 'olives', 'meat', 'fish'],
		availableSizes: [22, 28, 33],
		calculatedPrice: 8.35
	}
];

export async function getPopularPizza() {
	return testData;
}