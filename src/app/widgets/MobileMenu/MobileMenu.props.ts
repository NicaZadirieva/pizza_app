import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface MobileMenuProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLAllCollection>, HTMLAllCollection> {
    currentPage?: string;
}