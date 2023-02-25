import styled, { css, keyframes } from 'styled-components';
import {
    FontPurple,
    FontLightPurple,
    FontDarkPurple,
    ContentsInner,
    FontSmallSize,
    BoxCenterRow,
    BoxCenterCol,
    Wrap,
} from '@/style/CommonContents.jsx';
import device from '@/style/Device.jsx';

// ******************** 컨텐츠 ********************
//컨텐츠
export const CheckCont = styled(Wrap)`
    box-shadow: none;
    transition: all 0.3s ease;
    ${({ percent }) =>
        percent === 100 &&
        css`
            background-color: #333;
        `}
`;
export const CheckTop = styled.article`
    overflow: hidden;
`;
export const CheckTopInner = styled(ContentsInner)`
    padding-top: 185px;
`;

// ********************** 애니메이션 **********************
export const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    25%{
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    75%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

// ******************** 상단 ********************
//폭죽 모양
export const CheckTopFirework = `
    display: none;
    width: 55%;
    height: auto;
    position: absolute;
`;
//별 모양
export const CheckTopStarShape = `
    display: none;
    width: 16%;
    height: auto;
    position: absolute;
`;
export const CheckTopStarLShape = `
    ${CheckTopStarShape}
    width: 40%;
`;
//상단 퍼센트 바
export const CheckTopBar = styled.div``;

//산책 캐릭터
export const CheckTopChar = styled.div`
    width: 185px;
    height: 185px;
    position: absolute;
    left: ${({ percent }) => percent - 28}%;
    bottom: 50px;
    transition: all 0.3s ease;
    z-index: 1;
`;
export const CheckTopCharImg = styled.img`
    width: 66%;
    height: auto;
    bottom: 0;
    ${BoxCenterRow}
`;

//오른쪽 폭죽
export const CheckTopRight = styled.div`
    width: 93px;
    height: 93px;
    position: absolute;
    top: 0;
    right: 0;
`;
export const CheckTopFireGreen = styled.img`
    top: 0;
    left: 0;
    ${CheckTopFirework}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 5s 0s infinite linear alternate;
        `}
`;
export const CheckTopFireRed = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopFirework}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 5s 2s infinite linear alternate;
        `}
`;

//오른쪽 별
export const CheckTopStarR1 = styled.img`
    bottom: 18%;
    left: 0;
    ${CheckTopStarShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 3s 0s infinite linear alternate;
        `}
`;
export const CheckTopStarR2 = styled.img`
    bottom: 0;
    left: 21%;
    ${CheckTopStarShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 5s 3s infinite linear alternate;
        `}
`;
export const CheckTopStarR3 = styled.img`
    top: 10%;
    right: 20%;
    ${CheckTopStarShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 4s 0s infinite linear alternate;
        `}
`;
export const CheckTopStarR4 = styled.img`
    top: 27%;
    right: 0;
    ${CheckTopStarShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 3s 2s infinite linear alternate;
        `}
`;

//왼쪽 별
export const CheckTopLeft = styled.div`
    width: 37px;
    height: 73px;
    left: 0;
    ${BoxCenterCol}
`;
export const CheckTopStarL1 = styled.img`
    top: 0;
    right: 0;
    ${CheckTopStarLShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 3s 0s infinite linear alternate;
        `}
`;
export const CheckTopStarL2 = styled.img`
    left: 0;
    ${BoxCenterCol}
    ${CheckTopStarLShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 5s 3s infinite linear alternate;
        `}
`;
export const CheckTopStarL3 = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopStarLShape}
    ${({ percent }) =>
        percent === 100 &&
        css`
            display: block;
            animation: ${FadeIn} 4s 0s infinite linear alternate;
        `}
`;

// ******************** 상단 ********************

// ******************** 하단 ********************
export const ResultBtn = styled.div`
    display: flex;
    justify-content: center;
`;
