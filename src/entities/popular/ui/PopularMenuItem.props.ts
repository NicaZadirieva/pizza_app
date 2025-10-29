import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface GetPopularProductsEntity {
    pizzaName: string;
    pizzaImgPath: string;
    filling: string[];
    availableSizes: number[];
    calculatedPrice: number;
}
export type PopularMenuItemProps = GetPopularProductsEntity & DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>;