import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface DoubledButtonProps extends Omit<DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'children'> {
    leftText: string;
    rightText: string;
}