import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BoxCenterRow } from '@/style/CommonContents.jsx';

// **************** 컨텐츠 ****************
//메인 이미지
export const MainFont = styled.span`
    font-size:12px;
`
export const MainTop = styled.div``
export const MainChar = styled.img`
    width: 59.4%;
    height: auto;
    z-index: 10;
    top: 19vh;
    ${BoxCenterRow}
`;
export const MainTxt = styled.div``
export const MainTit = styled.h2``
export const MainCont = styled.div``
export const MainBottom = styled.div``
export const MainPlayCount = styled.div``
export const MainCountTit = styled.span`
    ${MainFont}
`
export const MainCount = styled.span`
    ${MainFont}
`
export const MainCountNum = styled.i`
    ${MainFont}
`
