import styled from 'styled-components';
import { FontPurple, FontLightPurple, FontDarkPurple, ContentsInner, CommonInput } from '@/style/CommonContents.jsx';

// ******************** 컨텐츠 ********************

export const MainCont = styled(ContentsInner)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px 0;
    height: 100%;
`;
export const MainFont = styled.span`
    font-size: 12px;
`;
export const MainTop = styled.div`
    text-align: center;
`;
export const MainChar = styled.img`
    width: 59.4%;
    height: auto;
`;
export const MainTxt = styled.p`
    font-family: 'gugi';
    ${FontLightPurple}
`;
export const MainTit = styled.h2`
    display: inline-block;
    font-family: 'gugi';
    font-size: 55px;
    ${FontPurple}
`;
export const MainTitPoint = styled(MainTit)`
    ${FontDarkPurple}
`;
export const MainMiddle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0;
    width: 100%;
`;
export const MainInput = styled(CommonInput)`
    border: none;
`;
export const MainBottom = styled.div``;
export const MainPlayCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 6px;
    font-size: 14px;
`;
export const MainCountTit = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 6px;

    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 10px;
        background-color: #333;
    }
    ${MainFont}
`;
export const MainCount = styled.span`
    ${MainFont}
`;
export const MainCountNum = styled.i`
    ${MainFont}
`;
