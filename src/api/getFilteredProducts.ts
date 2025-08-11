export enum FilterEnum {
    ShowAll,
    Meat,
    Vegetarian,
    Sea,
    Mushroom
}

function hasVegetableIntoPizza(pizza: GetFilteredProductsResponse) {
	return pizza.filling.findIndex((filling) => {
		return filling == 'onion' || filling == 'potato' || filling == 'tomato' || filling == 'olives';
	}) > -1;
}
export async function getFilteredProducts(filter: FilterEnum) {
	switch (filter) {
	case FilterEnum.Meat:
		return testData.filter((d) => d.filling.includes('meat'));
	case FilterEnum.Mushroom:
		return testData.filter((d) => d.filling.includes('mushrooms'));
	case FilterEnum.Vegetarian:
		return testData.filter((d) => hasVegetableIntoPizza(d));
	case FilterEnum.Sea:
		return testData.filter((d) => d.filling.includes('fish'));
	case FilterEnum.ShowAll:
		return testData;
	default:
		return Promise.reject(new Error('Not available filter'));
	}
}
export interface GetFilteredProductsResponse {
    pizzaName: string;
    pizzaImgPath: string;
    filling: string[];
    availableSizes: number[];
    calculatedPrice: number; 
}

const testData: GetFilteredProductsResponse[] = [
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