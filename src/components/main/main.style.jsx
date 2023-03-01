import styled from 'styled-components';
import device from '@/style/Device.jsx';
import {
    flexCenter,
    FontPurple,
    FontLightPurple,
    FontDarkPurple,
    ContentsInner,
    CommonInput,
    FontSmallSize,
} from '@/style/CommonContents.jsx';

// ******************** 컨텐츠 ********************
//공통
export const MainCont = styled(ContentsInner)`
    flex-direction: column;
    gap: 40px 0;
    height: calc(100vh - 180px);
    ${flexCenter}

    @media ${device.MaxHeightS} {
        min-height: 1000px;
    }
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
    ${FontLightPurple};
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
    gap: 0 6px;
    ${flexCenter}
    ${FontSmallSize}
`;
export const MainShare = styled.div``;
export const MainCountTit = styled.span`
    gap: 0 6px;
    ${flexCenter}
    ${FontSmallSize}
    
    &:after {
        content: '';
        display: block;
        width: 1px;
        height: 10px;
        background-color: #333;
    }
`;
export const MainCount = styled.span`
    ${FontSmallSize}
`;
export const MainCountNum = styled.i`
    ${FontSmallSize}
`;
