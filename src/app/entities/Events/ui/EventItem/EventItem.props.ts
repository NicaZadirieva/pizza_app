import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface EventItemProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    imageUrl: string;
    title: string;
    buttonUrl: string;
}