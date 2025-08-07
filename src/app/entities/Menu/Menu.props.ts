import { GetFilteredProductsResponse } from '@/api/getFilteredProducts';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface MenuProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    data?: GetFilteredProductsResponse[];
}
