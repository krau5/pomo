import { css } from '@emotion/react';
import RobotoFlex from '/fonts/RobotoFlex-VariableFont_GRAD,XTRA,YOPQ,YTAS,YTDE,YTFI,YTLC,YTUC,opsz,slnt,wdth,wght.ttf';

export const font = () => css`
  @font-face {
    font-family: 'Roboto Flex';
    font-style: normal;
    font-weight: 100 1000;
    src: url(${RobotoFlex}) format('truetype');
  } ;
`;
