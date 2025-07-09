import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface SimpleButtonProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    appearance: 'filled' | 'outlined';
}