import { GetFilteredProductsResponse } from '@/api/getFilteredProducts';
import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export type MenuItemProps = GetFilteredProductsResponse & DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>;