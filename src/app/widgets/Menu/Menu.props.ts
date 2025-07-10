import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface MenuProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLAllCollection>, HTMLAllCollection> {
    currentPage?: string;
}