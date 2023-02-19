import styled from 'styled-components';
import { FontPurple, FontLightPurple, FontDarkPurple, ContentsInner, CommonInput, FontSmallSize } from '@/style/CommonContents.jsx';

// ******************** 컨텐츠 ********************
//공통
export const MainCont = styled(ContentsInner)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px 0;
    height: 100%;
`;
export const MainCover = styled.div`
    text-align: center;
`;
export const MainChar = styled.img`
    width: 46%;
    height: auto;
    margin-bottom: 20px;
`;
export const MainTxt = styled.p`
    font-family: 'gugi';
    font-size: 32px;
    ${FontLightPurple}
`;
export const MainTit = styled.h2`
    display: inline-block;
    font-family: 'gugi';
    font-size: 90px;
    ${FontPurple}
`;
export const MainTitPoint = styled(MainTit)`
    ${FontDarkPurple}
`;
export const MainStart = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px 0;
    width: 100%;
`;
export const MainInput = styled(CommonInput)`
    border: none;
`;
export const MainPlayCount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 6px;
    ${FontSmallSize}
`;
export const MainShare = styled.div``;
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
    ${FontSmallSize}
`;
export const MainCount = styled.span`
    ${FontSmallSize}
`;
export const MainCountNum = styled.i`
    ${FontSmallSize}
`;
