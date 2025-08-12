import { DetailedHTMLProps, HtmlHTMLAttributes } from 'react';

export interface HeadingProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
    size?: 'h1' | 'h2' | 'h3'; /**byDefault = h1 */
}