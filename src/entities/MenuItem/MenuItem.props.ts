import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface GetFilteredProductsEntity {
    pizzaName: string;
    pizzaImgPath: string;
    filling: string[];
    availableSizes: number[];
    calculatedPrice: number;
}
export type MenuItemProps = GetFilteredProductsEntity & DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>;