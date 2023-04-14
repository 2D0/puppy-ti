import { createGlobalStyle } from 'styled-components';
import { gugiRegular } from '@/assets/fonts/gugi';
import { spoqaRegularTtf, spoqaRegularOtf, spoqaMediumTtf, spoqaMediumOtf, spoqaBoldOtf, spoqaBoldTtf } from '@/assets/fonts/spoqa';
import { BgCommon } from '@/style/CommonContents.jsx';
const GlobalStyle = createGlobalStyle`
    // **************** 폰트 ****************
    //구기 (Gugi)
    @font-face {
        font-family: 'gugi';
        font-weight: 400;
        src: url(${gugiRegular}) format('truetype');
    }
    
    //스포카한산스 (SpoqaHanSansNeo)
    @font-face {
        font-family: 'SpoqaHan';
        font-weight: 400;
        src: url(${spoqaRegularTtf}) format('truetype'),
        url(${spoqaRegularOtf}) format('opentype');
    }
    @font-face {
        font-family: 'SpoqaHan';
        font-weight: 500;
        src: url(${spoqaMediumTtf}) format('truetype'),
        url(${spoqaMediumOtf}) format('opentype');
    }
    @font-face {
        font-family: 'SpoqaHan';
        font-weight: 700;
        src: url(${spoqaBoldOtf}) format('truetype'),
        url(${spoqaBoldTtf}) format('opentype');
    }

    
    // **************** reset ****************
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #111;
        font-family: 'SpoqaHan';
        font-weight: 400;
    }
    body{
        overflow-y: auto;
        background-color: #f4f2fa;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    input:focus, select:focus, textarea:focus {
        outline: none;
    }
    label {
        display: block;
    }
    textarea {
        resize: none;
    }
    button {
        border: none;
        background-color: transparent;
        padding: 0;
        cursor: pointer;
        -webkit-appearance: none;
    }
    a {
        text-decoration: none;
    }
    a:hover {
        cursor: pointer;
    }
    i {
        font-style: normal;
    }
    li {
        list-style: none;
    }
    fieldset {
        border: none;
    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section,
    table, tbody, td {
        display: block;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button, input, optgroup, select, textarea {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
`;

export default GlobalStyle;
