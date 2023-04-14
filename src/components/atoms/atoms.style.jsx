import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

import {
    BgPink,
    BgPurple,
    BgWhite,
    FontMediumSize,
    FontWhite,
    IconShadow,
    PhotoCover,
    flexCenter,
    FontLargeSize,
    flexItemCenter,
    subContMargin,
    FontExtraSize,
    FontFamilySub,
    FontDarkPurple,
    ContShadow,
    FontUnable,
    ContentsInner,
    BoxCenterRow,
    BoxCenterCol,
} from '@/style/CommonContents.jsx';

// ******************* 뒤로가기 버튼 ******************
export const CommonBackBtn = styled(Link)`
    padding: 10px;
    gap: 0 10px;
    ${flexItemCenter}
    ${FontLargeSize}
`;
export const CommonBackImg = styled.img`
    width: 25px;
`;

// ********************* 공유하기 ********************
export const CommonShare = styled.div``;
export const CommonShareTit = styled.div`
    gap: 0 8px;
    margin-bottom: 15px;
    ${flexCenter}
`;
export const CommonShareIcon = styled.img`
    width: 22px;
    height: 22px;
`;
export const CommonShareTxt = styled.span`
    ${FontMediumSize}
`;
export const CommonSns = styled.ul`
    gap: 0 15px;
    ${flexCenter}
`;
export const CommonSnsIcon = styled.li``;
export const CommonSnsLink = styled(Link)`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    ${IconShadow}
`;
export const CommonSnsIconImg = styled.img`
    border-radius: 50%;
    overflow: hidden;
    ${PhotoCover}
`;

// ******************* 이름 커버 *******************
export const CoverName = styled.h2`
    ${subContMargin}
`;
export const CoverNameChar = styled.img`
    display: block;
    width: 125px;
    margin-left: auto;
`;
export const CoverNameTit = styled.span`
    display: block;
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    ${FontExtraSize}
    ${FontFamilySub}
    ${FontWhite}
`;
export const CoverNameTitPoint = styled.span`
    ${FontFamilySub}
    ${FontDarkPurple}
`;

// ******************* 텍스트 박스 ******************
export const TextBox = styled.ul`
    width: 100%;
    height: 400px;
    flex-direction: column;
    ${flexCenter}
    ${ContShadow}
    ${BgWhite}
`;
export const TextBoxList = styled.li`
    width: 100%;
    height: fit-content;
    line-height: 2em;
    text-align: center;
    ${FontLargeSize}
`;
export const TextBoxWrite = styled.li`
    display: block;
    width: 100%;
    height: 100%;
`;
export const TextBoxinput = styled.textarea`
    display: block;
    width: 100%;
    height: 100%;
    padding: 30px 20px;
    text-align: center;
    border: none;
    ${FontLargeSize}

    &::placeholder {
        ${FontUnable}
    }
`;
export const TextBoxTit = styled.span``;
export const TextBoxName = styled(TextBoxTit)``;

// **************** 상단 퍼센트 헤드 ****************
export const CheckTop = styled.article`
    width: 100%;
    max-width: 750px;
    padding-bottom: 20px;
    padding-top: 185px;
    overflow: hidden;
`;
export const CheckTopInner = styled.div`
    //padding-top: 185px;
    ${ContentsInner}
`;

//애니메이션
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
const fadeOption = (duration, delay) => css`
    display: block;
    animation: ${FadeIn} ${duration}s ${delay}s infinite linear alternate;
`;

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

    ${({ percent }) => percent === 100 && fadeOption(5, 0)};
`;
export const CheckTopFireRed = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopFirework}

    ${({ percent }) => percent === 100 && fadeOption(5, 2)};
`;

//오른쪽 별
export const CheckTopStarR1 = styled.img`
    bottom: 18%;
    left: 0;
    ${CheckTopStarShape}

    ${({ percent }) => percent === 100 && fadeOption(3, 0)};
`;
export const CheckTopStarR2 = styled.img`
    bottom: 0;
    left: 21%;
    ${CheckTopStarShape}

    ${({ percent }) => percent === 100 && fadeOption(5, 3)};
`;
export const CheckTopStarR3 = styled.img`
    top: 10%;
    right: 20%;
    ${CheckTopStarShape}

    ${({ percent }) => percent === 100 && fadeOption(4, 0)};
`;
export const CheckTopStarR4 = styled.img`
    top: 27%;
    right: 0;
    ${CheckTopStarShape}

    ${({ percent }) => percent === 100 && fadeOption(3, 2)};
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

    ${({ percent }) => percent === 100 && fadeOption(3, 0)};
`;
export const CheckTopStarL2 = styled.img`
    left: 0;
    ${BoxCenterCol}
    ${CheckTopStarLShape}
    
    ${({ percent }) => percent === 100 && fadeOption(5, 3)};
`;
export const CheckTopStarL3 = styled.img`
    bottom: 0;
    right: 0;
    ${CheckTopStarLShape}

    ${({ percent }) => percent === 100 && fadeOption(4, 0)};
`;

// ******************** 질문 박스 ********************
export const CheckQABox = styled.div``;
export const CheckQATop = styled.ul`
    display: flex;
    height: 40px;
`;
export const CheckQATit = styled.li`
    width: 50%;
    height: inherit;
    ${flexCenter}
    ${FontMediumSize}
    ${FontWhite}
`;
export const CheckQATitL = styled(CheckQATit)`
    ${BgPink}
`;
export const CheckQATitR = styled(CheckQATit)`
    ${BgPurple}
`;
export const CheckQACont = styled.div`
    flex-direction: column;
    gap: 30px 0;
    padding: 30px 0;
    ${flexCenter}
    ${BgWhite}
`;
export const CheckQATxt = styled.span`
    width: 90%;
    white-space: break-spaces;
    text-align: center;
    ${FontMediumSize}
`;
export const CheckQABtns = styled.div`
    gap: 0 25px;
    ${flexCenter}
`;
export const CheckQABtn = styled.button``;
export const CheckFootShape = `
    display: block;
    width: auto;
    height: 70px;
    stroke-width: 4px;
    fill: transparent;

    > path {
        display: block;
        width: auto;
        height: 100%;
        fill: #9e446f;
        ${IconShadow}
    }
`;
export const CheckFootBlank = `
    stroke-width: 4px;
    fill: transparent;
`;
export const CheckFoot = styled.span`
    svg {
        ${CheckFootShape}
        > path {
            ${CheckFootBlank};

            //버튼 기본 디자인
            ${({ defaultState }) => {
                if (defaultState === 4) {
                    return css`
                        stroke: #999;
                    `;
                }
                if (defaultState <= 4) {
                    return css`
                        stroke: #7846d0;
                    `;
                }
                if (defaultState >= 2) {
                    return css`
                        stroke: #9e446f;
                    `;
                }
            }}

            ${({ scoreState, scoreBtnId, typeState, checkState, btnStateId, defaultState }) => {
                //console.log(scoreBtnId);
                switch (btnStateId) {
                    case 1:
                        scoreBtnId = 3;
                        break;
                    case 2:
                        scoreBtnId = 2;
                        break;
                    case 3:
                        scoreBtnId = 1;
                        break;
                    case 4:
                        scoreBtnId = 0;
                        break;
                    case 5:
                        scoreBtnId = 1;
                        break;
                    case 6:
                        scoreBtnId = 2;
                        break;
                    case 7:
                        scoreBtnId = 3;
                        break;
                    default:
                    //console.log('end');
                }
                if (checkState) {
                    switch (typeState) {
                        case 'yes':
                            if (scoreState >= scoreBtnId) {
                                console.log(scoreState, scoreBtnId);
                                return css`
                                    fill: #999;
                                `;
                            }
                            break;
                        case 'center':
                            if (scoreState === 0) {
                                return css`
                                    fill: #7846d0;
                                `;
                            }
                            break;
                        case 'no':
                            if (scoreState >= scoreBtnId) {
                                return css`
                                    fill: #9e446f;
                                `;
                            }
                            break;
                        default:
                            return false;
                    }
                }
            }}
        }
    }
`;
